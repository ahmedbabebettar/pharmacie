-- Performance Indices for Scalability
-- Target: Millions of records

-- 1. Medicines Table
CREATE INDEX IF NOT EXISTS idx_medicines_name ON medicines USING gin (name gin_trgm_ops);
CREATE INDEX IF NOT EXISTS idx_medicines_expiry ON medicines (expiry_date);
CREATE INDEX IF NOT EXISTS idx_medicines_qty ON medicines (qty);
CREATE INDEX IF NOT EXISTS idx_medicines_code ON medicines (code);

-- 2. Patients Table
CREATE INDEX IF NOT EXISTS idx_patients_name ON patients USING gin (name gin_trgm_ops);
CREATE INDEX IF NOT EXISTS idx_patients_national_id ON patients (national_id);

-- 3. Dispensations Table
CREATE INDEX IF NOT EXISTS idx_dispensations_patient_name ON dispensations USING gin (patient_name gin_trgm_ops);
CREATE INDEX IF NOT EXISTS idx_dispensations_date ON dispensations (date DESC);
CREATE INDEX IF NOT EXISTS idx_dispensations_pharmacy_id ON dispensations (pharmacy_id);
CREATE INDEX IF NOT EXISTS idx_dispensations_medicine_id ON dispensations (medicine_id);

-- 4. Transfers Table
CREATE INDEX IF NOT EXISTS idx_transfers_date ON transfers (date DESC);
CREATE INDEX IF NOT EXISTS idx_transfers_to_pharmacy ON transfers (to_pharmacy_id);
CREATE INDEX IF NOT EXISTS idx_transfers_medicine_id ON transfers (medicine_id);

-- 5. Orders Table
CREATE INDEX IF NOT EXISTS idx_orders_date ON orders (date DESC);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders (status);
CREATE INDEX IF NOT EXISTS idx_orders_pharmacy_id ON orders (pharmacy_id);

-- 6. Pharmacy Stock
CREATE INDEX IF NOT EXISTS idx_pharmacy_stock_pharmacy_id ON pharmacy_stock (pharmacy_id);
CREATE INDEX IF NOT EXISTS idx_pharmacy_stock_medicine_id ON pharmacy_stock (medicine_id);

-- Ensure pg_trgm extension is enabled for fuzzy search
CREATE EXTENSION IF NOT EXISTS pg_trgm;
