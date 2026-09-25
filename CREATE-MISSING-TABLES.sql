-- =========================================================
-- CREATE MISSING TABLES ONLY
-- =========================================================
-- Safe to run - only creates tables if they don't exist

-- Individual Education Plans (IEPs)
CREATE TABLE IF NOT EXISTS individual_education_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id UUID REFERENCES schools(id) ON DELETE CASCADE,
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  term TEXT NOT NULL,
  goals JSONB DEFAULT '[]'::jsonb,
  target_skill_ids TEXT[] DEFAULT '{}',
  progress JSONB DEFAULT '[]'::jsonb,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Student Followups (متابعة الطالبة)
CREATE TABLE IF NOT EXISTS student_followups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id UUID REFERENCES schools(id) ON DELETE CASCADE,
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  teacher_id UUID REFERENCES users(id) ON DELETE CASCADE,
  session_date DATE NOT NULL,
  session_number INTEGER,
  duration_minutes INTEGER,
  custom_goal TEXT,
  plan_goals JSONB,
  activities JSONB,
  performance_notes TEXT,
  homework TEXT,
  parent_notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Auditory Memory Tests (اختبار الذاكرة السمعية)
CREATE TABLE IF NOT EXISTS auditory_memory_tests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id UUID REFERENCES schools(id) ON DELETE CASCADE,
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  teacher_id UUID REFERENCES users(id) ON DELETE CASCADE,
  test_type INTEGER NOT NULL,
  test_date DATE NOT NULL,
  test_data JSONB NOT NULL,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Initial Reports (التقرير المبدئي)
CREATE TABLE IF NOT EXISTS initial_reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id UUID REFERENCES schools(id) ON DELETE CASCADE,
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  teacher_id UUID REFERENCES users(id) ON DELETE CASCADE,
  report_date DATE NOT NULL,
  report_data JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

SELECT 
  'individual_education_plans' as table_name,
  COUNT(*) as row_count
FROM individual_education_plans
UNION ALL
SELECT 'student_followups', COUNT(*) FROM student_followups
UNION ALL
SELECT 'auditory_memory_tests', COUNT(*) FROM auditory_memory_tests
UNION ALL
SELECT 'initial_reports', COUNT(*) FROM initial_reports;
