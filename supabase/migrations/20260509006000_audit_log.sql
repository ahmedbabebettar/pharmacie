-- Migration: Audit Log
-- Immutable audit trail for all sensitive data changes

CREATE TABLE IF NOT EXISTS audit_log (
  id             BIGSERIAL PRIMARY KEY,
  table_name     TEXT NOT NULL,
  operation      TEXT NOT NULL,       -- INSERT, UPDATE, DELETE
  record_id      TEXT,
  old_data       JSONB,
  new_data       JSONB,
  changed_by     UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  changed_by_email TEXT,
  changed_at     TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Audit log is append-only; nobody can UPDATE or DELETE entries
ALTER TABLE audit_log ENABLE ROW LEVEL SECURITY;

-- Only admins can read audit log
DROP POLICY IF EXISTS "admin read audit" ON audit_log;
CREATE POLICY "admin read audit" ON audit_log
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin')
  );

-- No UPDATE or DELETE on audit records (immutability enforced by policy)
DROP POLICY IF EXISTS "no update audit" ON audit_log;
CREATE POLICY "no update audit" ON audit_log
  FOR UPDATE USING (false);

DROP POLICY IF EXISTS "no delete audit" ON audit_log;
CREATE POLICY "no delete audit" ON audit_log
  FOR DELETE USING (false);

-- Index for efficient querying by table and time
CREATE INDEX IF NOT EXISTS idx_audit_log_table_time ON audit_log(table_name, changed_at DESC);
CREATE INDEX IF NOT EXISTS idx_audit_log_user ON audit_log(changed_by_email, changed_at DESC);

-- ── Trigger Function ──────────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION audit_trigger_fn()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  INSERT INTO audit_log (
    table_name, operation, record_id,
    old_data, new_data,
    changed_by_email, changed_at
  ) VALUES (
    TG_TABLE_NAME,
    TG_OP,
    COALESCE(NEW.id::TEXT, OLD.id::TEXT),
    CASE WHEN TG_OP = 'DELETE' THEN row_to_json(OLD)::JSONB ELSE NULL END,
    CASE WHEN TG_OP != 'DELETE' THEN row_to_json(NEW)::JSONB ELSE NULL END,
    auth.email(),
    now()
  );
  RETURN COALESCE(NEW, OLD);
END;
$$;

-- ── Attach Triggers to Sensitive Tables ──────────────────────────────────

-- Track all dispensation changes
DROP TRIGGER IF EXISTS audit_dispensations ON dispensations;
CREATE TRIGGER audit_dispensations
  AFTER INSERT OR UPDATE OR DELETE ON dispensations
  FOR EACH ROW EXECUTE FUNCTION audit_trigger_fn();

-- Track all stock transfers
DROP TRIGGER IF EXISTS audit_transfers ON transfers;
CREATE TRIGGER audit_transfers
  AFTER INSERT OR UPDATE OR DELETE ON transfers
  FOR EACH ROW EXECUTE FUNCTION audit_trigger_fn();

-- Track central stock quantity changes (qty column only)
DROP TRIGGER IF EXISTS audit_medicines_qty ON medicines;
CREATE TRIGGER audit_medicines_qty
  AFTER UPDATE OF qty ON medicines
  FOR EACH ROW EXECUTE FUNCTION audit_trigger_fn();

-- Track return request status changes
DROP TRIGGER IF EXISTS audit_return_requests ON return_requests;
CREATE TRIGGER audit_return_requests
  AFTER UPDATE OF status ON return_requests
  FOR EACH ROW EXECUTE FUNCTION audit_trigger_fn();
