-- Migration: Performance Indexes
-- Covers the most common query patterns for medicines, dispensations, and patients

-- Central stock: name search and expiry filtering
CREATE INDEX IF NOT EXISTS idx_medicines_name
  ON medicines(name);

CREATE INDEX IF NOT EXISTS idx_medicines_expiry
  ON medicines(expiry_date);

CREATE INDEX IF NOT EXISTS idx_medicines_name_batch
  ON medicines(name, batch);

-- Dispensations: time-range queries and pharmacy scoping
CREATE INDEX IF NOT EXISTS idx_dispensations_date
  ON dispensations(date DESC);

CREATE INDEX IF NOT EXISTS idx_dispensations_pharmacy
  ON dispensations(pharmacy_id);

CREATE INDEX IF NOT EXISTS idx_dispensations_patient
  ON dispensations(patient_name);

CREATE INDEX IF NOT EXISTS idx_dispensations_pharmacy_date
  ON dispensations(pharmacy_id, date DESC);

-- Pharmacy stock: the most frequently queried join
CREATE INDEX IF NOT EXISTS idx_pharmacy_stock_composite
  ON pharmacy_stock(pharmacy_id, medicine_id);

-- Patients: national ID lookup and search
CREATE INDEX IF NOT EXISTS idx_patients_national_id
  ON patients(national_id);

CREATE INDEX IF NOT EXISTS idx_patients_name
  ON patients(name);

-- Transfers: time-ordered queries
CREATE INDEX IF NOT EXISTS idx_transfers_date
  ON transfers(date DESC);

CREATE INDEX IF NOT EXISTS idx_transfers_pharmacy
  ON transfers(to_pharmacy_id, date DESC);

-- Return requests: status filtering (PENDING is the hot query)
CREATE INDEX IF NOT EXISTS idx_return_requests_status
  ON return_requests(status)
  WHERE status = 'PENDING';

-- Orders: status filtering
CREATE INDEX IF NOT EXISTS idx_orders_status
  ON orders(status)
  WHERE status = 'PENDING';
