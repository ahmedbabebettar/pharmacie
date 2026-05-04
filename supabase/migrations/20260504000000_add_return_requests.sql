-- Migration to add return requests table
CREATE TABLE IF NOT EXISTS return_requests (
    id BIGSERIAL PRIMARY KEY,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    pharmacy_id INTEGER REFERENCES pharmacies(id) ON DELETE CASCADE,
    medicine_id BIGINT REFERENCES medicines(id) ON DELETE CASCADE,
    med_name TEXT NOT NULL,
    qty INTEGER NOT NULL,
    worker_name TEXT,
    status TEXT DEFAULT 'PENDING'
);

-- Enable RLS (assuming other tables have it, though I didn't see it in initial_schema)
-- For now, we just create the table.
