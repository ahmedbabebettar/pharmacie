-- 1. Create a temporary table to store the consolidated quantities
CREATE TEMP TABLE med_consolidation AS
SELECT 
    MIN(id) as primary_id,
    name, 
    batch, 
    SUM(qty) as total_qty, 
    MAX(entry_date) as latest_entry, 
    MAX(expiry_date) as latest_expiry, 
    AVG(price) as avg_price
FROM medicines
GROUP BY name, batch;

-- 2. Delete all existing records from medicines
-- Note: This is safe because we will re-insert them, 
-- BUT we must be careful with foreign keys (pharmacy_stock, transfers).
-- To be safe, we will UPDATE the primary records and DELETE the duplicates.

-- Update the primary records with the summed quantities
UPDATE medicines m
SET 
    qty = c.total_qty,
    entry_date = c.latest_entry,
    expiry_date = c.latest_expiry,
    price = c.avg_price
FROM med_consolidation c
WHERE m.id = c.primary_id;

-- Delete the duplicates (those whose ID is not the primary_id for that name/batch)
DELETE FROM medicines
WHERE id NOT IN (SELECT primary_id FROM med_consolidation);

-- 3. Add the unique constraint to prevent this from ever happening again
ALTER TABLE medicines 
ADD CONSTRAINT unique_med_name_batch 
UNIQUE (name, batch);
