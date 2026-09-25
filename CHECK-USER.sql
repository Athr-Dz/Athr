-- =========================================================
-- CHECK IF USER EXISTS
-- =========================================================
-- Run this to see if your principal account was created

-- 1. Check auth users
SELECT 
  id,
  email,
  'Auth user found' as status
FROM auth.users
WHERE email = 'arwaalf7@gmail.com';

-- 2. Check users table
SELECT 
  id,
  auth_id,
  role,
  name,
  email,
  'User profile found' as status
FROM users
WHERE email = 'arwaalf7@gmail.com';

-- 3. Check all users
SELECT 
  id,
  role,
  name,
  email,
  'All users in database' as info
FROM users;

-- 4. Check schools
SELECT 
  id,
  name,
  'Schools in database' as info
FROM schools;
