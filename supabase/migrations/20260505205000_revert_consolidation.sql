-- Revert Consolidation Constraints
-- This migration removes the unique constraint that was causing issues.

DO $$ 
BEGIN 
    -- 1. Drop the unique constraint if it exists
    IF EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'unique_med_name_batch') THEN
        ALTER TABLE medicines DROP CONSTRAINT unique_med_name_batch;
    END IF;
END $$;

-- 2. Optional: We don't restore deleted duplicates because they are gone, 
-- but we stop the system from being strict about it.
