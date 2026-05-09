-- Migration: Atomic Stock Transfer RPC
-- Replaces 3 separate async writes with a single locked transaction

CREATE OR REPLACE FUNCTION transfer_stock(
  p_medicine_id    BIGINT,
  p_pharmacy_id    INT,
  p_qty            INT,
  p_is_return      BOOLEAN,
  p_transferred_by TEXT,
  p_medicine_name  TEXT DEFAULT NULL
) RETURNS JSONB
LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE
  v_med_name TEXT;
BEGIN
  -- Resolve medicine name if not provided
  SELECT COALESCE(p_medicine_name, name) INTO v_med_name
  FROM medicines WHERE id = p_medicine_id;

  IF p_is_return THEN
    -- ── Pharmacy → Central (Return) ────────────────────────────────────────
    -- Lock and decrement pharmacy stock first
    UPDATE pharmacy_stock
    SET qty = qty - p_qty
    WHERE pharmacy_id = p_pharmacy_id
      AND medicine_id = p_medicine_id
      AND qty >= p_qty;

    IF NOT FOUND THEN
      RETURN jsonb_build_object(
        'success', false,
        'error', 'insufficient_pharmacy_stock'
      );
    END IF;

    -- Add back to central stock
    UPDATE medicines SET qty = qty + p_qty WHERE id = p_medicine_id;

  ELSE
    -- ── Central → Pharmacy (Distribution) ─────────────────────────────────
    -- Lock and decrement central stock first
    UPDATE medicines
    SET qty = qty - p_qty
    WHERE id = p_medicine_id AND qty >= p_qty;

    IF NOT FOUND THEN
      RETURN jsonb_build_object(
        'success', false,
        'error', 'insufficient_central_stock'
      );
    END IF;

    -- Add to pharmacy stock (upsert)
    INSERT INTO pharmacy_stock (pharmacy_id, medicine_id, qty)
    VALUES (p_pharmacy_id, p_medicine_id, p_qty)
    ON CONFLICT (pharmacy_id, medicine_id)
    DO UPDATE SET qty = pharmacy_stock.qty + EXCLUDED.qty;
  END IF;

  -- Record the transfer
  INSERT INTO transfers (
    medicine_id, medicine_name, to_pharmacy_id, qty,
    is_return, dispensed_by, date
  ) VALUES (
    p_medicine_id, v_med_name, p_pharmacy_id, p_qty,
    p_is_return, p_transferred_by, now()
  );

  RETURN jsonb_build_object('success', true);

EXCEPTION WHEN OTHERS THEN
  RETURN jsonb_build_object('success', false, 'error', SQLERRM);
END;
$$;

REVOKE ALL ON FUNCTION transfer_stock FROM PUBLIC;
GRANT EXECUTE ON FUNCTION transfer_stock TO authenticated;
