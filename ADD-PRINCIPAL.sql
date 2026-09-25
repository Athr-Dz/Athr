-- =========================================================
-- ADD PRINCIPAL ACCOUNT
-- =========================================================
-- This creates a principal account for the authenticated user
-- Run this in Supabase SQL Editor

-- First, create the default school if it doesn't exist
INSERT INTO schools (id, name, address, phone)
VALUES (
  '00000000-0000-0000-0000-000000000001',
  'الابتدائية 382',
  'الرياض',
  '0112345678'
)
ON CONFLICT (id) DO NOTHING;

-- Then create the principal account
-- This will use YOUR Supabase account email
INSERT INTO users (
  auth_id,
  school_id,
  role,
  name,
  email,
  phone,
  color,
  initials
)
SELECT
  au.id,
  '00000000-0000-0000-0000-000000000001',
  'principal',
  'مديرة المدرسة',
  au.email,
  '',
  'c-purple',
  'م'
FROM auth.users au
WHERE au.email = 'arwaalf7@gmail.com'  -- Your Supabase account email
ON CONFLICT (auth_id) DO UPDATE
SET role = 'principal',
    name = 'مديرة المدرسة',
    school_id = '00000000-0000-0000-0000-000000000001',
    color = 'c-purple',
    initials = 'م';

-- Verify the principal was created
SELECT 
  id,
  name,
  email,
  role,
  'Principal account created successfully!' as message
FROM users
WHERE role = 'principal'
LIMIT 1;
