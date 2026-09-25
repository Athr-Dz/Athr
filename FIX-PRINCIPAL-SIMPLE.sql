-- =========================================================
-- SIMPLE FIX FOR PRINCIPAL ACCOUNT
-- =========================================================
-- This just inserts/updates your principal account
-- Safe to run multiple times

-- First, make sure school exists
INSERT INTO schools (id, name, address, phone)
VALUES (
  '00000000-0000-0000-0000-000000000001',
  'الابتدائية 382',
  'الرياض',
  '0112345678'
)
ON CONFLICT (id) DO NOTHING;

-- Get the auth user ID
DO $$
DECLARE
  v_auth_id uuid;
BEGIN
  -- Find auth user by email
  SELECT id INTO v_auth_id
  FROM auth.users
  WHERE email = 'arwaalf7@gmail.com';
  
  IF v_auth_id IS NULL THEN
    RAISE EXCEPTION 'Auth user not found. Please create user in Auth > Users first with email: arwaalf7@gmail.com';
  END IF;
  
  -- Insert or update principal user
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
  VALUES (
    v_auth_id,
    '00000000-0000-0000-0000-000000000001',
    'principal',
    'مديرة المدرسة',
    'arwaalf7@gmail.com',
    '',
    'c-purple',
    'م'
  )
  ON CONFLICT (auth_id) DO UPDATE
  SET role = 'principal',
      name = 'مديرة المدرسة',
      school_id = '00000000-0000-0000-0000-000000000001',
      email = 'arwaalf7@gmail.com',
      color = 'c-purple',
      initials = 'م';
      
  RAISE NOTICE 'Principal account created/updated successfully!';
END $$;

-- Show the result
SELECT 
  id,
  auth_id,
  name,
  email,
  role,
  '✅ Principal account ready!' as status
FROM users
WHERE email = 'arwaalf7@gmail.com';
