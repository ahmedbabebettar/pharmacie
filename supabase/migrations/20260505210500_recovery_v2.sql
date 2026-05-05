-- Recovery Migration V2: Recover names from Orders JSON
-- This is more reliable because the 'orders' table was NOT updated during consolidation,
-- so it still holds the mapping between old IDs and names in its JSON 'items' column.

DO $$
DECLARE
    r RECORD;
    order_rec RECORD;
    item_json JSONB;
    found_name TEXT;
    target_med_id INTEGER;
BEGIN
    -- 1. Loop through orphans in pharmacy_stock
    FOR r IN 
        SELECT DISTINCT medicine_id 
        FROM pharmacy_stock 
        WHERE medicine_id NOT IN (SELECT id FROM medicines)
    LOOP
        found_name := NULL;

        -- 2. Scan the 'orders' table items for this old medicine_id
        -- We look into the JSONB array 'items' for an object with this medId
        FOR order_rec IN SELECT items FROM orders LOOP
            FOR item_json IN SELECT jsonb_array_elements(order_rec.items) LOOP
                -- Depending on how it was saved, it might be 'medId' or 'id'
                IF (item_json->>'medId')::text = r.medicine_id::text OR (item_json->>'id')::text = r.medicine_id::text THEN
                    found_name := item_json->>'medName';
                    EXIT;
                END IF;
            END LOOP;
            IF found_name IS NOT NULL THEN EXIT; END IF;
        END LOOP;

        -- 3. If still not found, try the previous method (Transfers/Dispensations) 
        -- but only if they somehow missed the update
        IF found_name IS NULL THEN
            SELECT medicine_name INTO found_name
            FROM (
                SELECT medicine_name FROM transfers WHERE medicine_id = r.medicine_id
                UNION ALL
                SELECT medicine_name FROM dispensations WHERE medicine_id = r.medicine_id
            ) combined LIMIT 1;
        END IF;

        -- 4. Re-link if name found
        IF found_name IS NOT NULL THEN
            -- Find the current active ID for this name
            SELECT id INTO target_med_id FROM medicines WHERE name = found_name LIMIT 1;
            
            IF target_med_id IS NOT NULL THEN
                -- Update/Merge stock
                UPDATE pharmacy_stock 
                SET qty = qty + (SELECT SUM(qty) FROM pharmacy_stock WHERE medicine_id = r.medicine_id)
                WHERE medicine_id = target_med_id AND pharmacy_id = (SELECT pharmacy_id FROM pharmacy_stock WHERE medicine_id = r.medicine_id LIMIT 1);
                
                -- Delete orphan
                DELETE FROM pharmacy_stock WHERE medicine_id = r.medicine_id;
            END IF;
        END IF;
    END LOOP;
END $$;
