-- =========================================================
-- TEACHER DATA ISOLATION - FIXED VERSION
-- =========================================================

-- First disable RLS completely (reset)
ALTER TABLE students DISABLE ROW LEVEL SECURITY;
ALTER TABLE attendance DISABLE ROW LEVEL SECURITY;
ALTER TABLE student_followups DISABLE ROW LEVEL SECURITY;
ALTER TABLE session_logs DISABLE ROW LEVEL SECURITY;
ALTER TABLE plans DISABLE ROW LEVEL SECURITY;

-- Drop all old policies
DROP POLICY IF EXISTS "Teachers see own students" ON students;
DROP POLICY IF EXISTS "Principal sees all students" ON students;
DROP POLICY IF EXISTS "Teachers edit own students" ON students;
DROP POLICY IF EXISTS "Teachers insert own students" ON students;
DROP POLICY IF EXISTS "Teacher own attendance" ON attendance;
DROP POLICY IF EXISTS "Teacher own followups" ON student_followups;
DROP POLICY IF EXISTS "Teacher own sessions" ON session_logs;
DROP POLICY IF EXISTS "Teacher own plans" ON plans;

-- Re-enable RLS
ALTER TABLE students ENABLE ROW LEVEL SECURITY;

-- Helper: get current user's DB id
CREATE OR REPLACE FUNCTION get_my_user_id()
RETURNS UUID AS $$
  SELECT id FROM users WHERE auth_id = auth.uid() LIMIT 1;
$$ LANGUAGE SQL SECURITY DEFINER;

-- Helper: is current user a principal?
CREATE OR REPLACE FUNCTION is_principal()
RETURNS BOOLEAN AS $$
  SELECT EXISTS(SELECT 1 FROM users WHERE auth_id = auth.uid() AND role = 'principal');
$$ LANGUAGE SQL SECURITY DEFINER;

-- Students: principal sees all, teacher sees own
CREATE POLICY "students_select" ON students FOR SELECT USING (
  is_principal() OR teacher_id = get_my_user_id() OR teacher_id IS NULL
);

CREATE POLICY "students_insert" ON students FOR INSERT WITH CHECK (
  is_principal() OR teacher_id = get_my_user_id()
);

CREATE POLICY "students_update" ON students FOR UPDATE USING (
  is_principal() OR teacher_id = get_my_user_id()
);

CREATE POLICY "students_delete" ON students FOR DELETE USING (
  is_principal()
);

-- Attendance
ALTER TABLE attendance ENABLE ROW LEVEL SECURITY;
CREATE POLICY "attendance_all" ON attendance FOR ALL USING (
  is_principal() OR teacher_id = get_my_user_id()
);

-- Followups
ALTER TABLE student_followups ENABLE ROW LEVEL SECURITY;
CREATE POLICY "followups_all" ON student_followups FOR ALL USING (
  is_principal() OR teacher_id = get_my_user_id()
);

-- Session logs
ALTER TABLE session_logs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "sessions_all" ON session_logs FOR ALL USING (
  is_principal() OR teacher_id = get_my_user_id()
);

-- Plans
ALTER TABLE plans ENABLE ROW LEVEL SECURITY;
CREATE POLICY "plans_all" ON plans FOR ALL USING (
  is_principal() OR teacher_id = get_my_user_id() OR teacher_id IS NULL
);

-- Verify
SELECT 'RLS applied successfully!' as result;
