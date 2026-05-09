-- Migration: Atomic Dispensation RPC
-- Replaces the read-delete-insert race condition with a single locked transaction

CREATE OR REPLACE FUNCTION dispense_medicine(
  p_pharmacy_id   INT,
  p_medicine_id   BIGINT,
  p_qty           INT,
  p_patient_name  TEXT,
  p_medicine_name TEXT,
  p_dispensed_by  TEXT,
  p_reference     TEXT DEFAULT NULL
) RETURNS JSONB
LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE
  v_current_qty INT;
  v_reference   TEXT;
BEGIN
  -- Lock the specific stock row to prevent concurrent dispensation race condition
  SELECT qty INTO v_current_qty
  FROM pharmacy_stock
  WHERE pharmacy_id = p_pharmacy_id AND medicine_id = p_medicine_id
  FOR UPDATE;

  IF v_current_qty IS NULL THEN
    RETURN jsonb_build_object(
      'success', false,
      'error', 'medicine_not_in_pharmacy_stock',
      'available', 0
    );
  END IF;

  IF v_current_qty < p_qty THEN
    RETURN jsonb_build_object(
      'success', false,
      'error', 'insufficient_stock',
      'available', v_current_qty
    );
  END IF;

  -- Atomic decrement — CHECK constraint (qty >= 0) provides extra safety net
  UPDATE pharmacy_stock
  SET qty = qty - p_qty
  WHERE pharmacy_id = p_pharmacy_id AND medicine_id = p_medicine_id;

  -- Use provided reference or generate one
  v_reference := COALESCE(p_reference, 'DISP-' || upper(substring(gen_random_uuid()::text, 1, 8)));

  -- Record dispensation
  INSERT INTO dispensations (
    pharmacy_id, medicine_id, patient_name, medicine_name,
    qty, dispensed_by, date, reference
  ) VALUES (
    p_pharmacy_id, p_medicine_id, p_patient_name, p_medicine_name,
    p_qty, p_dispensed_by, now(), v_reference
  );

  RETURN jsonb_build_object(
    'success', true,
    'remaining', v_current_qty - p_qty,
    'reference', v_reference
  );

EXCEPTION WHEN OTHERS THEN
  RETURN jsonb_build_object(
    'success', false,
    'error', SQLERRM
  );
END;
$$;

-- Grant execution to authenticated users only
REVOKE ALL ON FUNCTION dispense_medicine FROM PUBLIC;
GRANT EXECUTE ON FUNCTION dispense_medicine TO authenticated;
