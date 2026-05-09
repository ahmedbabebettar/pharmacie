-- RPC: server-side 28-day rule enforcement with optional exception reason
-- Called by check_and_dispense_exceptional in future server-side flows.
-- The client-side dispense flow uses this for audit trail; the 28-day check
-- is enforced in the RPC for any caller that bypasses the UI.

CREATE OR REPLACE FUNCTION check_and_dispense_exceptional(
  p_pharmacy_id    INT,
  p_medicine_id    BIGINT,
  p_qty            INT,
  p_patient_name   TEXT,
  p_medicine_name  TEXT,
  p_dispensed_by   TEXT,
  p_exception_reason TEXT DEFAULT NULL
) RETURNS JSONB
LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE
  v_last_dispense TIMESTAMPTZ;
  v_current_qty   INT;
  v_days_since    INT;
BEGIN
  -- Check last dispensation date for this patient+medicine
  SELECT MAX(date) INTO v_last_dispense
  FROM dispensations
  WHERE patient_name = p_patient_name
    AND medicine_name = p_medicine_name
    AND pharmacy_id = p_pharmacy_id;

  IF v_last_dispense IS NOT NULL THEN
    v_days_since := EXTRACT(DAY FROM now() - v_last_dispense)::INT;
  END IF;

  -- If within 28 days and no exception reason: reject
  IF v_last_dispense IS NOT NULL
     AND v_days_since < 28
     AND (p_exception_reason IS NULL OR trim(p_exception_reason) = '') THEN
    RETURN jsonb_build_object(
      'success', false,
      'error', '28_day_rule',
      'days_since', v_days_since,
      'days_remaining', 28 - v_days_since
    );
  END IF;

  -- Check and lock stock row
  SELECT qty INTO v_current_qty
  FROM pharmacy_stock
  WHERE pharmacy_id = p_pharmacy_id AND medicine_id = p_medicine_id
  FOR UPDATE;

  IF v_current_qty IS NULL OR v_current_qty < p_qty THEN
    RETURN jsonb_build_object(
      'success', false,
      'error', 'insufficient_stock',
      'available', COALESCE(v_current_qty, 0)
    );
  END IF;

  -- Decrement stock
  UPDATE pharmacy_stock
  SET qty = qty - p_qty
  WHERE pharmacy_id = p_pharmacy_id AND medicine_id = p_medicine_id;

  -- Record dispensation; prefix reference with EXCEPTION when reason provided
  INSERT INTO dispensations
    (pharmacy_id, medicine_id, medicine_name, patient_name, qty, dispensed_by, date, reference)
  VALUES (
    p_pharmacy_id, p_medicine_id, p_medicine_name, p_patient_name,
    p_qty, p_dispensed_by, now(),
    CASE
      WHEN p_exception_reason IS NOT NULL AND trim(p_exception_reason) != ''
      THEN 'EXCEPTION: ' || p_exception_reason
      ELSE NULL
    END
  );

  RETURN jsonb_build_object(
    'success', true,
    'remaining', v_current_qty - p_qty,
    'was_exception', p_exception_reason IS NOT NULL AND trim(p_exception_reason) != ''
  );
END;
$$;

-- Grant execute to authenticated users (RLS on tables still applies)
GRANT EXECUTE ON FUNCTION check_and_dispense_exceptional TO authenticated;
