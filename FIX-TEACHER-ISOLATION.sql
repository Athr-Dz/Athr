-- =========================================================
-- TEACHER DATA ISOLATION
-- Each teacher can only see/edit their own students
-- Run this in Supabase SQL Editor
-- =========================================================

-- Enable RLS on students table
ALTER TABLE students ENABLE ROW LEVEL SECURITY;

-- Drop old policies if any
DROP POLICY IF EXISTS "Teachers see own students" ON students;
DROP POLICY IF EXISTS "Principal sees all students" ON students;
DROP POLICY IF EXISTS "Teachers edit own students" ON students;

-- Principal sees ALL students
CREATE POLICY "Principal sees all students" ON students
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE users.auth_id = auth.uid() 
      AND users.role = 'principal'
    )
  );

-- Teachers only see their OWN students
CREATE POLICY "Teachers see own students" ON students
  FOR SELECT
  USING (
    teacher_id IN (
      SELECT id FROM users WHERE auth_id = auth.uid()
    )
  );

-- Teachers can only edit their OWN students
CREATE POLICY "Teachers edit own students" ON students
  FOR UPDATE
  USING (
    teacher_id IN (
      SELECT id FROM users WHERE auth_id = auth.uid()
    )
  );

-- Teachers can INSERT their own students
CREATE POLICY "Teachers insert own students" ON students
  FOR INSERT
  WITH CHECK (
    teacher_id IN (
      SELECT id FROM users WHERE auth_id = auth.uid()
    )
  );

-- =========================================================
-- Also isolate attendance, followups, session_logs
-- =========================================================

-- Attendance isolation
ALTER TABLE attendance ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Teacher own attendance" ON attendance;
CREATE POLICY "Teacher own attendance" ON attendance
  FOR ALL
  USING (
    teacher_id IN (SELECT id FROM users WHERE auth_id = auth.uid())
    OR
    EXISTS (SELECT 1 FROM users WHERE auth_id = auth.uid() AND role = 'principal')
  );

-- Student followups isolation
ALTER TABLE student_followups ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Teacher own followups" ON student_followups;
CREATE POLICY "Teacher own followups" ON student_followups
  FOR ALL
  USING (
    teacher_id IN (SELECT id FROM users WHERE auth_id = auth.uid())
    OR
    EXISTS (SELECT 1 FROM users WHERE auth_id = auth.uid() AND role = 'principal')
  );

-- Session logs isolation
ALTER TABLE session_logs ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Teacher own sessions" ON session_logs;
CREATE POLICY "Teacher own sessions" ON session_logs
  FOR ALL
  USING (
    teacher_id IN (SELECT id FROM users WHERE auth_id = auth.uid())
    OR
    EXISTS (SELECT 1 FROM users WHERE auth_id = auth.uid() AND role = 'principal')
  );

-- Plans isolation
ALTER TABLE plans ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Teacher own plans" ON plans;
CREATE POLICY "Teacher own plans" ON plans
  FOR ALL
  USING (
    teacher_id IN (SELECT id FROM users WHERE auth_id = auth.uid())
    OR
    EXISTS (SELECT 1 FROM users WHERE auth_id = auth.uid() AND role = 'principal')
  );

SELECT 'RLS policies applied successfully!' as result;
