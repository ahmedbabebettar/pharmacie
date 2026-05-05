-- 0. Ensure the 'price' column exists in medicines table
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='medicines' AND column_name='price') THEN
        ALTER TABLE medicines ADD COLUMN price NUMERIC DEFAULT 0;
    END IF;
END $$;

-- 1. Create a temporary table to store the consolidation mapping
CREATE TEMP TABLE med_mapping AS
SELECT 
    id as old_id,
    FIRST_VALUE(id) OVER (PARTITION BY name, batch ORDER BY id) as primary_id
FROM medicines;

-- 2. Create consolidation stats for updating primary records
CREATE TEMP TABLE med_stats AS
SELECT 
    primary_id,
    SUM(qty) as total_qty, 
    MAX(entry_date) as latest_entry, 
    MAX(expiry_date) as latest_expiry, 
    AVG(price) as avg_price
FROM med_mapping m
JOIN medicines med ON m.old_id = med.id
GROUP BY primary_id;

-- 3. Update references in other tables before deletion
-- Update dispensations
UPDATE dispensations d
SET medicine_id = m.primary_id
FROM med_mapping m
WHERE d.medicine_id = m.old_id AND m.old_id != m.primary_id;

-- Update transfers
UPDATE transfers t
SET medicine_id = m.primary_id
FROM med_mapping m
WHERE t.medicine_id = m.old_id AND m.old_id != m.primary_id;

-- Update pharmacy_stock
CREATE TEMP TABLE stock_consolidation AS
SELECT 
    pharmacy_id, 
    m.primary_id as medicine_id, 
    SUM(ps.qty) as total_qty
FROM pharmacy_stock ps
JOIN med_mapping m ON ps.medicine_id = m.old_id
GROUP BY pharmacy_id, m.primary_id;

DELETE FROM pharmacy_stock ps
USING med_mapping m
WHERE ps.medicine_id = m.old_id AND m.old_id != m.primary_id;

UPDATE pharmacy_stock ps
SET qty = sc.total_qty
FROM stock_consolidation sc
WHERE ps.pharmacy_id = sc.pharmacy_id AND ps.medicine_id = sc.medicine_id;

INSERT INTO pharmacy_stock (pharmacy_id, medicine_id, qty)
SELECT sc.pharmacy_id, sc.medicine_id, sc.total_qty
FROM stock_consolidation sc
ON CONFLICT (pharmacy_id, medicine_id) DO UPDATE SET qty = EXCLUDED.qty;

-- 4. Update the primary medicines records
UPDATE medicines m
SET 
    qty = s.total_qty,
    entry_date = s.latest_entry,
    expiry_date = s.latest_expiry,
    price = s.avg_price
FROM med_stats s
WHERE m.id = s.primary_id;

-- 5. Finally, delete the duplicate medicines
DELETE FROM medicines
WHERE id NOT IN (SELECT DISTINCT primary_id FROM med_mapping);

-- 6. Add the unique constraint to prevent duplicates in the future
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'unique_med_name_batch') THEN
        ALTER TABLE medicines ADD CONSTRAINT unique_med_name_batch UNIQUE (name, batch);
    END IF;
END $$;
