-- =========================================================
-- FIX: Add missing columns and fix storage
-- Run this in Supabase SQL Editor
-- =========================================================

-- Add shared_initial_data column if missing
ALTER TABLE students ADD COLUMN IF NOT EXISTS shared_initial_data JSONB DEFAULT '{}'::jsonb;

-- Add special_ed_forms column if missing  
ALTER TABLE students ADD COLUMN IF NOT EXISTS special_ed_forms JSONB DEFAULT '{}'::jsonb;

-- Add special_ed_iep column if missing
ALTER TABLE students ADD COLUMN IF NOT EXISTS special_ed_iep JSONB DEFAULT '{}'::jsonb;

-- Add special_ed_sessions column if missing
ALTER TABLE students ADD COLUMN IF NOT EXISTS special_ed_sessions JSONB DEFAULT '[]'::jsonb;

-- Add forms column if missing (for speech therapy assessment)
ALTER TABLE students ADD COLUMN IF NOT EXISTS forms JSONB DEFAULT '{}'::jsonb;

-- Add schedule column if missing
ALTER TABLE students ADD COLUMN IF NOT EXISTS schedule JSONB DEFAULT '[]'::jsonb;

-- Verify all columns exist
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'students' 
ORDER BY column_name;
