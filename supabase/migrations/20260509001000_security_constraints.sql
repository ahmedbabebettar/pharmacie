-- Migration: Security Constraints
-- Prevent negative stock quantities and enforce data uniqueness

-- Prevent negative stock in central medicines table
ALTER TABLE medicines
  ADD CONSTRAINT medicines_qty_positive CHECK (qty >= 0);

-- Prevent negative stock in pharmacy-level stock table
ALTER TABLE pharmacy_stock
  ADD CONSTRAINT pharmacy_stock_qty_positive CHECK (qty >= 0);

-- Enforce national_id uniqueness on patients (prevents duplicate patient records)
ALTER TABLE patients
  ADD CONSTRAINT patients_national_id_unique UNIQUE (national_id)
  DEFERRABLE INITIALLY DEFERRED;

-- Use DB-generated order IDs going forward (prevents client-side ID collisions)
ALTER TABLE orders
  ALTER COLUMN id SET DEFAULT 'CMD-' || upper(substring(gen_random_uuid()::text, 1, 6));
