-- Fix for Pharmacy Stock Upsert Integrity
-- This ensures that 'upsert' works correctly by providing a unique constraint target.

ALTER TABLE pharmacy_stock 
ADD CONSTRAINT unique_pharmacy_medicine 
UNIQUE (pharmacy_id, medicine_id);

-- Optional: Clean up any existing duplicates before applying this if needed
-- (The user said quantities return to 0, which might imply multiple rows or failed upserts)
