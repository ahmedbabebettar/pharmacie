-- Migration: Row Level Security Policies
-- Enforces data isolation between roles and users

-- ── user_security ──────────────────────────────────────────────────────────
-- Users can only see and modify their own recovery record
ALTER TABLE user_security ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "own record only" ON user_security;
CREATE POLICY "own record only" ON user_security
  FOR ALL USING (login_email = auth.email());

-- ── dispensations ──────────────────────────────────────────────────────────
-- Pharmacy-role users can INSERT dispensations; only admin can UPDATE; nobody can DELETE
DROP POLICY IF EXISTS "pharmacy insert only" ON dispensations;
CREATE POLICY "pharmacy insert only" ON dispensations
  FOR INSERT TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM users
      WHERE users.id = auth.uid()
        AND users.role IN ('pharmacy', 'admin', 'manager')
    )
  );

DROP POLICY IF EXISTS "admin update dispensations" ON dispensations;
CREATE POLICY "admin update dispensations" ON dispensations
  FOR UPDATE USING (
    EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin')
  );

DROP POLICY IF EXISTS "no delete dispensations" ON dispensations;
CREATE POLICY "no delete dispensations" ON dispensations
  FOR DELETE USING (false);

DROP POLICY IF EXISTS "read dispensations" ON dispensations;
CREATE POLICY "read dispensations" ON dispensations
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE users.id = auth.uid()
        AND (
          users.role IN ('admin', 'manager')
          OR (users.role = 'pharmacy' AND dispensations.pharmacy_id = users.pharmacy_id)
        )
    )
  );

-- ── users table ────────────────────────────────────────────────────────────
-- Admin sees all users; each user sees only their own record
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "admin sees all users" ON users;
CREATE POLICY "admin sees all users" ON users
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM users u WHERE u.id = auth.uid() AND u.role = 'admin')
    OR id = auth.uid()
  );

DROP POLICY IF EXISTS "admin manages users" ON users;
CREATE POLICY "admin manages users" ON users
  FOR ALL USING (
    EXISTS (SELECT 1 FROM users u WHERE u.id = auth.uid() AND u.role = 'admin')
  );
