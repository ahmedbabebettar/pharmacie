-- Migration: Soft Delete for Patients
-- Preserves dispensation history when a patient is "deleted" (GDPR-aware)

-- Add soft-delete timestamp column
ALTER TABLE patients ADD COLUMN IF NOT EXISTS deleted_at TIMESTAMPTZ;

-- Partial index: efficient queries for active patients only
CREATE INDEX IF NOT EXISTS idx_patients_deleted ON patients(deleted_at)
  WHERE deleted_at IS NULL;

-- ── Update RLS policies to exclude soft-deleted patients ─────────────────

-- Pharmacy users see only their active patients
DROP POLICY IF EXISTS "pharmacy sees active patients" ON patients;
CREATE POLICY "pharmacy sees active patients" ON patients
  FOR SELECT USING (
    deleted_at IS NULL
    AND EXISTS (
      SELECT 1 FROM users
      WHERE users.id = auth.uid()
        AND (
          users.role IN ('admin', 'manager')
          OR (users.role = 'pharmacy' AND patients.pharmacy_id = users.pharmacy_id)
        )
    )
  );

-- Admin can see all patients including deleted (for compliance review)
DROP POLICY IF EXISTS "admin sees all patients" ON patients;
CREATE POLICY "admin sees all patients" ON patients
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin')
  );

-- Only authenticated users can insert patients
DROP POLICY IF EXISTS "authenticated insert patient" ON patients;
CREATE POLICY "authenticated insert patient" ON patients
  FOR INSERT TO authenticated WITH CHECK (true);

-- Soft delete: allow UPDATE of deleted_at (not hard DELETE)
DROP POLICY IF EXISTS "soft delete patient" ON patients;
CREATE POLICY "soft delete patient" ON patients
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE id = auth.uid() AND role IN ('admin', 'manager')
    )
  );

-- Hard DELETE is forbidden — soft delete only
DROP POLICY IF EXISTS "no hard delete patient" ON patients;
CREATE POLICY "no hard delete patient" ON patients
  FOR DELETE USING (false);
