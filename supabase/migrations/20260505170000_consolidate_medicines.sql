-- 1. Consolidate Duplicate Medicines (Merge Qty and delete duplicates)
-- This creates a temporary table with the sums, then cleans up the main table.

CREATE TEMP TABLE medicine_summary AS
SELECT name, batch, SUM(qty) as total_qty, MAX(entry_date) as latest_entry, MAX(expiry_date) as latest_expiry, AVG(price) as avg_price
FROM medicines
GROUP BY name, batch;

-- Delete all existing medicines (They will be recreated/updated)
-- WARNING: This assumes medicines ID isn't used as a foreign key extensively elsewhere 
-- or we handle it. Transfers and Pharmacy Stock USE medicine_id!
-- This is DANGEROUS.

-- BETTER APPROACH: Delete only the duplicates, keeping the one with the lowest ID.
UPDATE medicines m1
SET qty = (SELECT SUM(qty) FROM medicines m2 WHERE m2.name = m1.name AND m2.batch = m1.batch)
WHERE id IN (
    SELECT MIN(id) FROM medicines GROUP BY name, batch
);

DELETE FROM medicines
WHERE id NOT IN (
    SELECT MIN(id) FROM medicines GROUP BY name, batch
);

-- 2. Now add the unique constraint to prevent future duplicates
ALTER TABLE medicines 
ADD CONSTRAINT unique_med_name_batch 
UNIQUE (name, batch);
