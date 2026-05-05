-- Recovery Migration: Link Orphans by Association
-- This script tries to recover "Inconnu" medicine names by looking at historical records.

DO $$
DECLARE
    r RECORD;
    new_med_id INTEGER;
BEGIN
    -- 1. Find orphans in pharmacy_stock
    FOR r IN 
        SELECT DISTINCT medicine_id 
        FROM pharmacy_stock 
        WHERE medicine_id NOT IN (SELECT id FROM medicines)
    LOOP
        -- 2. Try to find the name of this medicine from transfers or dispensations
        -- We'll pick the most recent record as the name source.
        SELECT medicine_name INTO r.medicine_name
        FROM (
            SELECT medicine_name FROM transfers WHERE medicine_id = r.medicine_id
            UNION ALL
            SELECT medicine_name FROM dispensations WHERE medicine_id = r.medicine_id
        ) combined
        LIMIT 1;

        IF r.medicine_name IS NOT NULL THEN
            -- 3. Find a valid medicine record with this name
            -- If multiple batches exist, we pick one (primary_id strategy)
            SELECT id INTO new_med_id 
            FROM medicines 
            WHERE name = r.medicine_name 
            LIMIT 1;

            IF new_med_id IS NOT NULL THEN
                -- 4. Update the orphan stock record to point to the valid medicine
                -- We use an update that merges quantities if the target already exists
                
                -- Update existing record for the same pharmacy/new_med_id
                UPDATE pharmacy_stock 
                SET qty = qty + (SELECT SUM(qty) FROM pharmacy_stock WHERE medicine_id = r.medicine_id)
                WHERE medicine_id = new_med_id;
                
                -- Delete the orphan records now that they are merged
                DELETE FROM pharmacy_stock WHERE medicine_id = r.medicine_id;
            END IF;
        END IF;
    END LOOP;
END $$;
