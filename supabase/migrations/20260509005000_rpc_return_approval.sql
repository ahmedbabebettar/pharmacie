-- Migration: Atomic Return Approval RPC
-- Wraps the 3-step return approval (reduce pharmacy, increase central, update status)
-- into a single atomic transaction to prevent partial failures

CREATE OR REPLACE FUNCTION approve_return(
  p_return_id   BIGINT,
  p_approved_by TEXT
) RETURNS JSONB
LANGUAGE plpgsql SECURITY DEFINER AS $$
DECLARE
  v_req         RECORD;
  v_current_qty INT;
BEGIN
  -- Fetch the return request (lock it to prevent double-approval)
  SELECT * INTO v_req
  FROM return_requests
  WHERE id = p_return_id
  FOR UPDATE;

  IF NOT FOUND THEN
    RETURN jsonb_build_object('success', false, 'error', 'return_request_not_found');
  END IF;

  IF v_req.status != 'PENDING' THEN
    RETURN jsonb_build_object(
      'success', false,
      'error', 'already_processed',
      'current_status', v_req.status
    );
  END IF;

  -- Step 1: Verify pharmacy has enough stock to return
  SELECT qty INTO v_current_qty
  FROM pharmacy_stock
  WHERE pharmacy_id = v_req.pharmacy_id AND medicine_id = v_req.medicine_id
  FOR UPDATE;

  IF v_current_qty IS NULL OR v_current_qty < v_req.qty THEN
    RETURN jsonb_build_object(
      'success', false,
      'error', 'insufficient_pharmacy_stock',
      'available', COALESCE(v_current_qty, 0)
    );
  END IF;

  -- Step 2: Decrement pharmacy stock
  UPDATE pharmacy_stock
  SET qty = qty - v_req.qty
  WHERE pharmacy_id = v_req.pharmacy_id AND medicine_id = v_req.medicine_id;

  -- Step 3: Restore to central stock
  UPDATE medicines SET qty = qty + v_req.qty WHERE id = v_req.medicine_id;

  -- Step 4: Mark the return request as approved
  UPDATE return_requests
  SET status = 'APPROVED',
      approved_by = p_approved_by,
      approved_at = now()
  WHERE id = p_return_id;

  -- Step 5: Insert a transfer record for audit trail
  INSERT INTO transfers (
    medicine_id, medicine_name, to_pharmacy_id, qty,
    is_return, dispensed_by, date
  ) VALUES (
    v_req.medicine_id, v_req.medicine_name, v_req.pharmacy_id, v_req.qty,
    true, p_approved_by, now()
  );

  RETURN jsonb_build_object('success', true, 'qty_returned', v_req.qty);

EXCEPTION WHEN OTHERS THEN
  RETURN jsonb_build_object('success', false, 'error', SQLERRM);
END;
$$;

CREATE OR REPLACE FUNCTION reject_return(
  p_return_id   BIGINT,
  p_rejected_by TEXT,
  p_reason      TEXT DEFAULT NULL
) RETURNS JSONB
LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  UPDATE return_requests
  SET status = 'REJECTED',
      approved_by = p_rejected_by,
      approved_at = now()
  WHERE id = p_return_id AND status = 'PENDING';

  IF NOT FOUND THEN
    RETURN jsonb_build_object('success', false, 'error', 'not_found_or_already_processed');
  END IF;

  RETURN jsonb_build_object('success', true);
END;
$$;

REVOKE ALL ON FUNCTION approve_return FROM PUBLIC;
GRANT EXECUTE ON FUNCTION approve_return TO authenticated;
REVOKE ALL ON FUNCTION reject_return FROM PUBLIC;
GRANT EXECUTE ON FUNCTION reject_return TO authenticated;
