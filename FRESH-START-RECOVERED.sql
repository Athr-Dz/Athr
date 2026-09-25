-- =========================================================
-- ╪ú╪½╪▒ ΓÇö FRESH START (Complete Database Setup)
-- =========================================================
-- This script does EVERYTHING from scratch:
-- 1. Drops ALL existing tables
-- 2. Creates all tables with correct structure
-- 3. Disables RLS on all tables + drops all policies
-- 4. Fixes messages constraint (nullable from_user_id)
-- 5. Fixes forms data (arrays ΓåÆ objects)
-- 6. Creates default school
-- 7. Creates principal account
-- 8. Enables realtime for messages
--
-- ΓÜá∩╕Å WARNING: This DELETES all existing data!
-- =========================================================

-- =========================================================
-- STEP 1: DROP EVERYTHING
-- =========================================================
DROP TABLE IF EXISTS messages CASCADE;
DROP TABLE IF EXISTS session_logs CASCADE;
DROP TABLE IF EXISTS rewards CASCADE;
DROP TABLE IF EXISTS progress_logs CASCADE;
DROP TABLE IF EXISTS attendance CASCADE;
DROP TABLE IF EXISTS reviews CASCADE;
DROP TABLE IF EXISTS activities CASCADE;
DROP TABLE IF EXISTS plans CASCADE;
DROP TABLE IF EXISTS student_groups CASCADE;
DROP TABLE IF EXISTS groups CASCADE;
DROP TABLE IF EXISTS students CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS skills CASCADE;
DROP TABLE IF EXISTS schools CASCADE;

-- Drop any other tables that might exist
DROP TABLE IF EXISTS invites CASCADE;
DROP TABLE IF EXISTS library CASCADE;
DROP TABLE IF EXISTS notifications CASCADE;
DROP TABLE IF EXISTS sessions CASCADE;

-- =========================================================
-- STEP 2: CREATE ALL TABLES
-- =========================================================

-- Schools table
CREATE TABLE schools (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  address text,
  phone text,
  settings jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now()
);

-- Skills/Domains table
CREATE TABLE skills (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id uuid REFERENCES schools(id) ON DELETE CASCADE,
  name text NOT NULL,
  category text,
  color text DEFAULT 'c-purple',
  created_at timestamptz DEFAULT now()
);

-- Users table (Principal, Teachers, Parents)
CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  auth_id uuid UNIQUE,
  school_id uuid REFERENCES schools(id) ON DELETE CASCADE,
  role text NOT NULL CHECK (role IN ('principal', 'teacher', 'parent')),
  name text NOT NULL,
  email text,
  phone text,
  title text,
  color text DEFAULT 'c-purple',
  initials text,
  permissions jsonb DEFAULT '{}'::jsonb,
  principal_notes jsonb DEFAULT '[]'::jsonb,  -- notes left by principal for this teacher
  created_at timestamptz DEFAULT now()
);

-- Students table
CREATE TABLE students (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  auth_id uuid UNIQUE,
  school_id uuid REFERENCES schools(id) ON DELETE CASCADE,
  teacher_id uuid REFERENCES users(id) ON DELETE SET NULL,
  parent_id uuid REFERENCES users(id) ON DELETE SET NULL,
  name text NOT NULL,
  email text,
  grade text,
  age int,
  initials text,
  color text DEFAULT 'c-purple',
  parent_phone text,
  invite_code text UNIQUE,
  points int DEFAULT 0,
  badges jsonb DEFAULT '[]'::jsonb,
  forms jsonb DEFAULT '{}'::jsonb,  -- always an object, never an array
  schedule jsonb DEFAULT '[]'::jsonb,
  archived boolean DEFAULT false,
  archived_at timestamptz,
  created_at timestamptz DEFAULT now()
);

-- Groups table
CREATE TABLE groups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id uuid REFERENCES schools(id) ON DELETE CASCADE,
  teacher_id uuid REFERENCES users(id) ON DELETE CASCADE,
  name text NOT NULL,
  color text DEFAULT 'c-purple',
  created_at timestamptz DEFAULT now()
);

-- Student-Group junction table
CREATE TABLE student_groups (
  student_id uuid REFERENCES students(id) ON DELETE CASCADE,
  group_id uuid REFERENCES groups(id) ON DELETE CASCADE,
  PRIMARY KEY (student_id, group_id)
);

-- Plans table (IEP)
CREATE TABLE plans (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id uuid REFERENCES schools(id) ON DELETE CASCADE,
  student_id uuid REFERENCES students(id) ON DELETE CASCADE,
  teacher_id uuid REFERENCES users(id) ON DELETE SET NULL,
  title text NOT NULL,
  goals jsonb DEFAULT '[]'::jsonb,
  progress jsonb DEFAULT '[]'::jsonb,
  last_regenerated_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Activities table
CREATE TABLE activities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id uuid REFERENCES schools(id) ON DELETE CASCADE,
  teacher_id uuid REFERENCES users(id) ON DELETE SET NULL,
  type text NOT NULL CHECK (type IN ('session', 'home', 'video', 'worksheet', 'edu', 'game', 'extra', 'reward')),
  title text NOT NULL,
  description text,
  student_ids jsonb DEFAULT '[]'::jsonb,
  skill_ids jsonb DEFAULT '[]'::jsonb,
  due_date date,
  status text DEFAULT 'open' CHECK (status IN ('open', 'submitted', 'done', 'sent')),
  attachments jsonb DEFAULT '[]'::jsonb,
  created_at timestamptz DEFAULT now()
);

-- Reviews table (for submitted work)
CREATE TABLE reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  activity_id uuid REFERENCES activities(id) ON DELETE CASCADE,
  student_id uuid REFERENCES students(id) ON DELETE CASCADE,
  submitted_at timestamptz DEFAULT now(),
  reviewed_at timestamptz,
  feedback text,
  rating int CHECK (rating >= 1 AND rating <= 5),
  attachments jsonb DEFAULT '[]'::jsonb
);

-- Attendance table
CREATE TABLE attendance (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id uuid REFERENCES schools(id) ON DELETE CASCADE,
  student_id uuid REFERENCES students(id) ON DELETE CASCADE,
  date date NOT NULL,
  status text NOT NULL CHECK (status IN ('present', 'absent', 'late', 'excused')),
  notes text,
  created_at timestamptz DEFAULT now(),
  UNIQUE(student_id, date)
);

-- Progress logs table
CREATE TABLE progress_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id uuid REFERENCES students(id) ON DELETE CASCADE,
  skill_id uuid REFERENCES skills(id) ON DELETE CASCADE,
  date date NOT NULL,
  level int CHECK (level >= 0 AND level <= 100),
  notes text,
  created_at timestamptz DEFAULT now()
);

-- Rewards table
CREATE TABLE rewards (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id uuid REFERENCES schools(id) ON DELETE CASCADE,
  student_id uuid REFERENCES students(id) ON DELETE CASCADE,
  teacher_id uuid REFERENCES users(id) ON DELETE SET NULL,
  type text NOT NULL,
  title text NOT NULL,
  description text,
  icon text,
  points int DEFAULT 0,
  date date DEFAULT CURRENT_DATE,
  created_at timestamptz DEFAULT now()
);

-- Session logs table
CREATE TABLE session_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id uuid REFERENCES schools(id) ON DELETE CASCADE,
  student_id uuid REFERENCES students(id) ON DELETE CASCADE,
  teacher_id uuid REFERENCES users(id) ON DELETE SET NULL,
  date date NOT NULL,
  duration int,
  activities jsonb DEFAULT '[]'::jsonb,
  notes text,
  created_at timestamptz DEFAULT now()
);

-- Messages table
-- from_user_id is NULLABLE so parents/students (not in users table) can send messages
CREATE TABLE messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id uuid REFERENCES schools(id) ON DELETE CASCADE,
  student_id uuid REFERENCES students(id) ON DELETE CASCADE,
  from_role text NOT NULL CHECK (from_role IN ('teacher', 'parent', 'principal')),
  from_user_id uuid REFERENCES users(id) ON DELETE SET NULL,
  content text NOT NULL,
  read boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- =========================================================
-- STEP 3: DISABLE RLS ON ALL TABLES + DROP ALL POLICIES
-- =========================================================
ALTER TABLE schools DISABLE ROW LEVEL SECURITY;
ALTER TABLE skills DISABLE ROW LEVEL SECURITY;
ALTER TABLE users DISABLE ROW LEVEL SECURITY;
ALTER TABLE groups DISABLE ROW LEVEL SECURITY;
ALTER TABLE student_groups DISABLE ROW LEVEL SECURITY;
ALTER TABLE plans DISABLE ROW LEVEL SECURITY;
ALTER TABLE activities DISABLE ROW LEVEL SECURITY;
ALTER TABLE reviews DISABLE ROW LEVEL SECURITY;
ALTER TABLE attendance DISABLE ROW LEVEL SECURITY;
ALTER TABLE progress_logs DISABLE ROW LEVEL SECURITY;
ALTER TABLE rewards DISABLE ROW LEVEL SECURITY;
ALTER TABLE session_logs DISABLE ROW LEVEL SECURITY;
ALTER TABLE messages DISABLE ROW LEVEL SECURITY;
ALTER TABLE students DISABLE ROW LEVEL SECURITY;

-- Drop any leftover student policies
DROP POLICY IF EXISTS "Principal full access students" ON students;
DROP POLICY IF EXISTS "Teacher see own students" ON students;
DROP POLICY IF EXISTS "Teacher create students" ON students;
DROP POLICY IF EXISTS "Teacher update students" ON students;
DROP POLICY IF EXISTS "Teacher delete students" ON students;
DROP POLICY IF EXISTS "Student see own record" ON students;
DROP POLICY IF EXISTS "Student update own record" ON students;

-- =========================================================
-- STEP 4: FIX MESSAGES CONSTRAINT (nullable from_user_id)
-- =========================================================
-- Ensures parents/students can send messages even though
-- they don't have a row in the users table.

ALTER TABLE messages
DROP CONSTRAINT IF EXISTS messages_from_user_id_fkey;

ALTER TABLE messages
ADD CONSTRAINT messages_from_user_id_fkey
FOREIGN KEY (from_user_id)
REFERENCES users(id)
ON DELETE SET NULL;

-- =========================================================
-- STEP 5: FIX FORMS DATA (arrays ΓåÆ objects)
-- =========================================================
-- The forms column must always be a JSON object {}, never [].
-- This is a safety reset in case any bad data slipped in.

UPDATE students
SET forms = '{}'::jsonb
WHERE jsonb_typeof(forms) = 'array';

-- =========================================================
-- STEP 6: CREATE DEFAULT SCHOOL
-- =========================================================
INSERT INTO schools (id, name, address, phone, settings)
VALUES (
  '00000000-0000-0000-0000-000000000001',
  '┘à╪»╪▒╪│╪⌐ ╪º┘ä┘å┘ê╪▒ ┘ä┘ä╪¬╪▒╪¿┘è╪⌐ ╪º┘ä╪«╪º╪╡╪⌐',
  '╪º┘ä╪▒┘è╪º╪╢',
  '0112345678',
  '{}'::jsonb
);

-- =========================================================
-- STEP 7: CREATE PRINCIPAL ACCOUNT
-- =========================================================
-- ΓÜá∩╕Å CHANGE THIS EMAIL TO YOUR ACTUAL EMAIL!

INSERT INTO users (
  auth_id,
  school_id,
  role,
  name,
  email,
  title,
  color,
  initials,
  permissions
)
SELECT
  au.id,
  '00000000-0000-0000-0000-000000000001',
  'principal',
  '╪º┘ä┘à╪»┘è╪▒',
  au.email,
  '┘à╪»┘è╪▒ ╪º┘ä┘à╪»╪▒╪│╪⌐',
  'c-purple',
  '┘à',
  '{}'::jsonb
FROM auth.users au
WHERE au.email = 'glowyboy01@gmail.com'  -- ΓÜá∩╕Å CHANGE THIS TO YOUR EMAIL!
ON CONFLICT (auth_id) DO UPDATE
SET role = 'principal',
    school_id = '00000000-0000-0000-0000-000000000001',
    name = '╪º┘ä┘à╪»┘è╪▒',
    title = '┘à╪»┘è╪▒ ╪º┘ä┘à╪»╪▒╪│╪⌐';

-- =========================================================
-- STEP 8: ENABLE REALTIME FOR MESSAGES
-- =========================================================
-- Allows instant message delivery without polling.

ALTER TABLE messages REPLICA IDENTITY FULL;

ALTER PUBLICATION supabase_realtime ADD TABLE messages;

-- =========================================================
-- STEP 9: VERIFY EVERYTHING
-- =========================================================
SELECT
  'Γ£à Setup Complete!' as status,
  'All tables created' as step1,
  'RLS disabled + policies dropped' as step2,
  'Messages constraint fixed' as step3,
  'Forms data fixed' as step4,
  'Principal account ready' as step5,
  'Realtime enabled for messages' as step6;

-- RLS status for all tables
SELECT
  tablename,
  CASE
    WHEN rowsecurity THEN 'Γ¥î STILL ENABLED'
    ELSE 'Γ£à DISABLED'
  END as rls_status
FROM pg_tables
WHERE schemaname = 'public'
ORDER BY tablename;

-- Realtime publication status
SELECT
  schemaname,
  tablename,
  'Realtime enabled' as realtime_status
FROM pg_publication_tables
WHERE pubname = 'supabase_realtime'
  AND schemaname = 'public';

-- =========================================================
-- ≡ƒÄë DONE! You can now:
-- 1. Login with: glowyboy01@gmail.com (ΓÜá∩╕Å CHANGE THIS!)
-- 2. Create teachers
-- 3. Create students
-- 4. Send messages with instant realtime updates!
-- =========================================================

-- =========================================================
-- MIGRATION: Add principal_notes column if upgrading
-- (safe to run even if column already exists)
-- =========================================================
ALTER TABLE users ADD COLUMN IF NOT EXISTS principal_notes jsonb DEFAULT '[]'::jsonb;

-- =========================================================
-- MIGRATION: Allow 'principal' as from_role in messages
-- Run this if your messages table already exists
-- =========================================================
ALTER TABLE messages DROP CONSTRAINT IF EXISTS messages_from_role_check;
ALTER TABLE messages ADD CONSTRAINT messages_from_role_check
  CHECK (from_role IN ('teacher', 'parent', 'principal'));

-- =========================================================
-- MIGRATION: Add last_regenerated_at to plans table
-- (safe to run even if column already exists)
-- =========================================================
ALTER TABLE plans ADD COLUMN IF NOT EXISTS last_regenerated_at timestamptz;
