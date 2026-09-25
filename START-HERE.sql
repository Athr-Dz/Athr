-- ════════════════════════════════════════════════════════
-- 🚀 ملف SQL واحد نهائي كامل - منصة أثر
-- ════════════════════════════════════════════════════════
-- ✅ يحتوي على كل شيء من الصفر:
--    1. حذف كل الجداول القديمة
--    2. إنشاء كل الجداول الأساسية
--    3. إنشاء المدرسة الافتراضية
--    4. إنشاء حساب المدير
--    5. إنشاء الجداول الجديدة (حضور، متابعة، تربية خاصة)
--    6. تعطيل RLS + منح الصلاحيات
--    7. إعداد Storage
-- ════════════════════════════════════════════════════════

DO $$
BEGIN
    RAISE NOTICE '';
    RAISE NOTICE '════════════════════════════════════════════════════════';
    RAISE NOTICE '🚀 بدء إعداد منصة أثر من الصفر...';
    RAISE NOTICE '════════════════════════════════════════════════════════';
    RAISE NOTICE '';
END $$;


-- ════════════════════════════════════════════════════════
-- القسم 1️⃣: حذف كل الجداول القديمة
-- ════════════════════════════════════════════════════════

DO $$
BEGIN
    RAISE NOTICE '🗑️  حذف الجداول القديمة...';
END $$;

DROP TABLE IF EXISTS parent_messages CASCADE;
DROP TABLE IF EXISTS session_tracking CASCADE;
DROP TABLE IF EXISTS iep_plans CASCADE;
DROP TABLE IF EXISTS medical_diagnosis CASCADE;
DROP TABLE IF EXISTS initial_student_data CASCADE;
DROP TABLE IF EXISTS student_notes CASCADE;
DROP TABLE IF EXISTS parent_consents CASCADE;
DROP TABLE IF EXISTS initial_reports CASCADE;
DROP TABLE IF EXISTS auditory_memory_tests CASCADE;
DROP TABLE IF EXISTS student_followups CASCADE;
DROP TABLE IF EXISTS attendance CASCADE;
DROP TABLE IF EXISTS messages CASCADE;
DROP TABLE IF EXISTS session_logs CASCADE;
DROP TABLE IF EXISTS rewards CASCADE;
DROP TABLE IF EXISTS progress_logs CASCADE;
DROP TABLE IF EXISTS reviews CASCADE;
DROP TABLE IF EXISTS activities CASCADE;
DROP TABLE IF EXISTS plans CASCADE;
DROP TABLE IF EXISTS student_groups CASCADE;
DROP TABLE IF EXISTS groups CASCADE;
DROP TABLE IF EXISTS students CASCADE;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS skills CASCADE;
DROP TABLE IF EXISTS schools CASCADE;


-- ════════════════════════════════════════════════════════
-- القسم 2️⃣: إنشاء الجداول الأساسية
-- ════════════════════════════════════════════════════════

DO $$
BEGIN
    RAISE NOTICE '🗄️  إنشاء الجداول الأساسية...';
END $$;

-- Schools
CREATE TABLE schools (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  address TEXT,
  phone TEXT,
  settings JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Skills
CREATE TABLE skills (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id UUID REFERENCES schools(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  category TEXT,
  color TEXT DEFAULT 'c-purple',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Users (Principal, Teachers, Parents)
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  auth_id UUID UNIQUE,
  school_id UUID REFERENCES schools(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('principal', 'teacher', 'parent')),
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  title TEXT,
  teacher_type TEXT CHECK (teacher_type IN ('speech_therapy', 'special_education')),
  color TEXT DEFAULT 'c-purple',
  initials TEXT,
  permissions JSONB DEFAULT '{}'::jsonb,
  principal_notes JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Students
CREATE TABLE students (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  auth_id UUID UNIQUE,
  school_id UUID REFERENCES schools(id) ON DELETE CASCADE,
  teacher_id UUID REFERENCES users(id) ON DELETE SET NULL,
  parent_id UUID REFERENCES users(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  email TEXT,
  grade TEXT,
  age INT,
  initials TEXT,
  color TEXT DEFAULT 'c-purple',
  parent_phone TEXT,
  invite_code TEXT UNIQUE,
  points INT DEFAULT 0,
  badges JSONB DEFAULT '[]'::jsonb,
  forms JSONB DEFAULT '{}'::jsonb,
  schedule JSONB DEFAULT '[]'::jsonb,
  archived BOOLEAN DEFAULT false,
  archived_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Groups
CREATE TABLE groups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id UUID REFERENCES schools(id) ON DELETE CASCADE,
  teacher_id UUID REFERENCES users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  color TEXT DEFAULT 'c-purple',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Student Groups
CREATE TABLE student_groups (
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  group_id UUID REFERENCES groups(id) ON DELETE CASCADE,
  PRIMARY KEY (student_id, group_id)
);

-- Plans (IEP)
CREATE TABLE plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id UUID REFERENCES schools(id) ON DELETE CASCADE,
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  teacher_id UUID REFERENCES users(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  goals JSONB DEFAULT '[]'::jsonb,
  progress JSONB DEFAULT '[]'::jsonb,
  last_regenerated_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Activities
CREATE TABLE activities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id UUID REFERENCES schools(id) ON DELETE CASCADE,
  teacher_id UUID REFERENCES users(id) ON DELETE SET NULL,
  type TEXT NOT NULL CHECK (type IN ('session', 'home', 'video', 'worksheet', 'edu', 'game', 'extra', 'reward')),
  title TEXT NOT NULL,
  description TEXT,
  student_ids JSONB DEFAULT '[]'::jsonb,
  skill_ids JSONB DEFAULT '[]'::jsonb,
  due_date DATE,
  status TEXT DEFAULT 'open' CHECK (status IN ('open', 'submitted', 'done', 'sent')),
  attachments JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Reviews
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  activity_id UUID REFERENCES activities(id) ON DELETE CASCADE,
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  submitted_at TIMESTAMPTZ DEFAULT now(),
  reviewed_at TIMESTAMPTZ,
  feedback TEXT,
  rating INT CHECK (rating >= 1 AND rating <= 5),
  attachments JSONB DEFAULT '[]'::jsonb
);

-- Progress Logs
CREATE TABLE progress_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  skill_id UUID REFERENCES skills(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  level INT CHECK (level >= 0 AND level <= 100),
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Rewards
CREATE TABLE rewards (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id UUID REFERENCES schools(id) ON DELETE CASCADE,
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  teacher_id UUID REFERENCES users(id) ON DELETE SET NULL,
  type TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  points INT DEFAULT 0,
  date DATE DEFAULT CURRENT_DATE,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Session Logs
CREATE TABLE session_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id UUID REFERENCES schools(id) ON DELETE CASCADE,
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  teacher_id UUID REFERENCES users(id) ON DELETE SET NULL,
  date DATE NOT NULL,
  duration INT,
  activities JSONB DEFAULT '[]'::jsonb,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Messages
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id UUID REFERENCES schools(id) ON DELETE CASCADE,
  student_id UUID REFERENCES students(id) ON DELETE CASCADE,
  from_role TEXT NOT NULL CHECK (from_role IN ('teacher', 'parent', 'principal')),
  from_user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  content TEXT NOT NULL,
  read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);


-- ════════════════════════════════════════════════════════
-- القسم 3️⃣: إنشاء الجداول الجديدة
-- ════════════════════════════════════════════════════════

DO $$
BEGIN
    RAISE NOTICE '✨ إنشاء الجداول الجديدة (حضور، متابعة، تربية خاصة)...';
END $$;

-- جدول الحضور والغياب
DROP TABLE IF EXISTS attendance CASCADE;
CREATE TABLE attendance (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  teacher_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  attendance_date DATE NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('present', 'absent')),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(student_id, attendance_date)
);

CREATE INDEX idx_attendance_student ON attendance(student_id);
CREATE INDEX idx_attendance_date ON attendance(attendance_date);
CREATE INDEX idx_attendance_student_date ON attendance(student_id, attendance_date);


-- جدول متابعة الطالبة
CREATE TABLE IF NOT EXISTS student_followups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  teacher_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  date_from DATE NOT NULL,
  date_to DATE NOT NULL,
  plan_goals JSONB DEFAULT '[]'::jsonb,
  custom_goal TEXT,
  custom_goal_category TEXT CHECK (custom_goal_category IN ('تمهيدي', 'استقبالي', 'تعبيري', 'نطق')),
  custom_goal_evaluation TEXT CHECK (custom_goal_evaluation IN ('mastered', 'partial', 'not_mastered')),
  tools JSONB DEFAULT '[]'::jsonb,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_followups_student ON student_followups(student_id);
CREATE INDEX idx_followups_dates ON student_followups(date_from, date_to);


-- جدول اختبار الذاكرة السمعية
CREATE TABLE IF NOT EXISTS auditory_memory_tests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  teacher_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  test_type INTEGER NOT NULL CHECK (test_type IN (1, 2)),
  test_data JSONB NOT NULL DEFAULT '{}'::jsonb,
  score INTEGER,
  total_score INTEGER,
  notes TEXT,
  tested_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_memory_tests_student ON auditory_memory_tests(student_id);


-- جدول التقرير المبدئي
CREATE TABLE IF NOT EXISTS initial_reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  teacher_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  report_date DATE NOT NULL DEFAULT CURRENT_DATE,
  introduction TEXT DEFAULT 'بناءً على المتابعة المستمرة والملاحظات المباشرة للطالبة في بيئة التعلم، تم إعداد هذا التقرير المبدئي لتوثيق الأداء الحالي وتحديد نقاط القوة ومجالات التطوير.',
  content JSONB NOT NULL DEFAULT '{}'::jsonb,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'final')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_reports_student ON initial_reports(student_id);


-- موافقة ولي الأمر
CREATE TABLE IF NOT EXISTS parent_consents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  teacher_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  consent_given BOOLEAN DEFAULT false,
  consent_date DATE,
  parent_signature TEXT,
  consent_items JSONB DEFAULT '[]'::jsonb,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_consents_student ON parent_consents(student_id);


-- ملاحظات الطالبة
CREATE TABLE IF NOT EXISTS student_notes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  teacher_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  note_date DATE NOT NULL,
  note_type TEXT NOT NULL,
  note_content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_notes_student ON student_notes(student_id);


-- البيانات الأولية (مشتركة)
CREATE TABLE IF NOT EXISTS initial_student_data (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL UNIQUE REFERENCES students(id) ON DELETE CASCADE,
  teacher_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  student_name TEXT,
  birth_date DATE,
  age INTEGER,
  grade TEXT,
  medical_diagnosis TEXT,
  parent_phone TEXT,
  data_fields JSONB DEFAULT '{}'::jsonb,
  completed BOOLEAN DEFAULT false,
  completed_date DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_initial_data_student ON initial_student_data(student_id);


-- التشخيص الطبي (PDF)
CREATE TABLE IF NOT EXISTS medical_diagnosis (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  teacher_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  file_url TEXT,
  file_name TEXT,
  file_size INTEGER,
  notes TEXT,
  uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_medical_diagnosis_student ON medical_diagnosis(student_id);


-- الخطة الفردية IEP
CREATE TABLE IF NOT EXISTS iep_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  teacher_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  student_info JSONB DEFAULT '{}'::jsonb,
  current_level TEXT,
  strengths TEXT,
  needs TEXT,
  semester_goals JSONB DEFAULT '[]'::jsonb,
  short_term_goals JSONB DEFAULT '[]'::jsonb,
  behavioral_goals JSONB DEFAULT '[]'::jsonb,
  tools_materials JSONB DEFAULT '[]'::jsonb,
  teaching_strategies JSONB DEFAULT '[]'::jsonb,
  start_date DATE,
  end_date DATE,
  status TEXT DEFAULT 'not_started' CHECK (status IN ('not_started', 'in_progress', 'achieved')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_iep_student ON iep_plans(student_id);


-- متابعة الجلسات (تربية خاصة)
CREATE TABLE IF NOT EXISTS session_tracking (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  teacher_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  iep_plan_id UUID REFERENCES iep_plans(id) ON DELETE SET NULL,
  session_date_from DATE NOT NULL,
  session_date_to DATE NOT NULL,
  short_term_goal_id TEXT,
  short_term_goal_text TEXT,
  behavioral_objectives JSONB DEFAULT '[]'::jsonb,
  evaluations JSONB DEFAULT '[]'::jsonb,
  tools_used JSONB DEFAULT '[]'::jsonb,
  teaching_methods JSONB DEFAULT '[]'::jsonb,
  reinforcement_methods JSONB DEFAULT '[]'::jsonb,
  teacher_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_tracking_student ON session_tracking(student_id);


-- رسائل ولي الأمر
CREATE TABLE IF NOT EXISTS parent_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  from_teacher_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  to_parent_id UUID REFERENCES users(id) ON DELETE SET NULL,
  subject TEXT NOT NULL,
  message_body TEXT NOT NULL,
  attachment_url TEXT,
  attachment_name TEXT,
  status TEXT DEFAULT 'sent' CHECK (status IN ('draft', 'sent', 'read')),
  sent_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  read_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_messages_student ON parent_messages(student_id);


-- ════════════════════════════════════════════════════════
-- القسم 4️⃣: إنشاء المدرسة والمدير
-- ════════════════════════════════════════════════════════

DO $$
BEGIN
    RAISE NOTICE '🏫 إنشاء المدرسة والمدير...';
END $$;

-- إنشاء المدرسة الافتراضية
INSERT INTO schools (id, name, address, phone, settings)
VALUES (
  '00000000-0000-0000-0000-000000000001',
  'مدرسة النور للتربية الخاصة',
  'الرياض',
  '0112345678',
  '{}'::jsonb
)
ON CONFLICT (id) DO NOTHING;

-- إنشاء حساب المدير
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
  'المدير',
  au.email,
  'مدير المدرسة',
  'c-purple',
  'م',
  '{}'::jsonb
FROM auth.users au
WHERE au.email = 'arwaalf7@gmail.com'
ON CONFLICT (auth_id) DO UPDATE
SET role = 'principal',
    school_id = '00000000-0000-0000-0000-000000000001',
    name = 'المدير',
    title = 'مدير المدرسة';


-- ════════════════════════════════════════════════════════
-- القسم 5️⃣: تعطيل RLS تماماً
-- ════════════════════════════════════════════════════════

DO $$
BEGIN
    RAISE NOTICE '🔓 تعطيل Row Level Security...';
END $$;

-- تعطيل RLS على الجداول الأساسية
ALTER TABLE IF EXISTS schools DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS skills DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS users DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS students DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS groups DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS student_groups DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS plans DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS activities DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS reviews DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS progress_logs DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS rewards DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS session_logs DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS messages DISABLE ROW LEVEL SECURITY;

-- تعطيل RLS على الجداول الجديدة
ALTER TABLE attendance DISABLE ROW LEVEL SECURITY;
ALTER TABLE student_followups DISABLE ROW LEVEL SECURITY;
ALTER TABLE auditory_memory_tests DISABLE ROW LEVEL SECURITY;
ALTER TABLE initial_reports DISABLE ROW LEVEL SECURITY;
ALTER TABLE parent_consents DISABLE ROW LEVEL SECURITY;
ALTER TABLE student_notes DISABLE ROW LEVEL SECURITY;
ALTER TABLE initial_student_data DISABLE ROW LEVEL SECURITY;
ALTER TABLE medical_diagnosis DISABLE ROW LEVEL SECURITY;
ALTER TABLE iep_plans DISABLE ROW LEVEL SECURITY;
ALTER TABLE session_tracking DISABLE ROW LEVEL SECURITY;
ALTER TABLE parent_messages DISABLE ROW LEVEL SECURITY;

-- حذف كل السياسات
DO $$ 
DECLARE
    r RECORD;
BEGIN
    FOR r IN (
        SELECT schemaname, tablename, policyname
        FROM pg_policies
        WHERE schemaname = 'public'
    ) LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON %I.%I CASCADE', 
                      r.policyname, r.schemaname, r.tablename);
    END LOOP;
END $$;

-- منح صلاحيات كاملة
DO $$
DECLARE
    tbl RECORD;
BEGIN
    FOR tbl IN (
        SELECT tablename 
        FROM pg_tables 
        WHERE schemaname = 'public'
    ) LOOP
        EXECUTE format('GRANT ALL ON TABLE %I TO authenticated', tbl.tablename);
        EXECUTE format('GRANT ALL ON TABLE %I TO anon', tbl.tablename);
        EXECUTE format('GRANT ALL ON TABLE %I TO postgres', tbl.tablename);
    END LOOP;
END $$;


-- ════════════════════════════════════════════════════════
-- القسم 6️⃣: إعداد Storage Bucket + Realtime
-- ════════════════════════════════════════════════════════

DO $$
BEGIN
    RAISE NOTICE '📁 إعداد Storage + Realtime...';
END $$;

-- إنشاء Bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'student-documents',
  'student-documents',
  false,
  524288000,
  ARRAY['application/pdf', 'image/jpeg', 'image/png']::text[]
)
ON CONFLICT (id) 
DO UPDATE SET
  file_size_limit = 524288000,
  allowed_mime_types = ARRAY['application/pdf', 'image/jpeg', 'image/png']::text[];

-- حذف السياسات القديمة
DROP POLICY IF EXISTS "Teachers can upload documents" ON storage.objects;
DROP POLICY IF EXISTS "Teachers can view documents" ON storage.objects;
DROP POLICY IF EXISTS "Teachers can delete documents" ON storage.objects;
DROP POLICY IF EXISTS "Teachers can update documents" ON storage.objects;
DROP POLICY IF EXISTS "Allow all for authenticated" ON storage.objects;

-- سياسة Storage بسيطة (allow all)
CREATE POLICY "Allow all for authenticated" 
ON storage.objects FOR ALL 
TO authenticated
USING (bucket_id = 'student-documents')
WITH CHECK (bucket_id = 'student-documents');

-- تفعيل Realtime للرسائل
ALTER TABLE messages REPLICA IDENTITY FULL;
ALTER PUBLICATION supabase_realtime ADD TABLE messages;


-- ════════════════════════════════════════════════════════
-- 🎉 تم! النتائج
-- ════════════════════════════════════════════════════════

DO $$
BEGIN
    RAISE NOTICE '';
    RAISE NOTICE '════════════════════════════════════════════════════════';
    RAISE NOTICE '🎉 تم إكمال الإعداد بنجاح!';
    RAISE NOTICE '════════════════════════════════════════════════════════';
    RAISE NOTICE '';
    RAISE NOTICE '✅ تم حذف كل الجداول القديمة';
    RAISE NOTICE '✅ تم إنشاء كل الجداول الأساسية';
    RAISE NOTICE '✅ تم إنشاء المدرسة الافتراضية';
    RAISE NOTICE '✅ تم إنشاء حساب المدير (arwaalf7@gmail.com)';
    RAISE NOTICE '✅ تم إنشاء 11 جدول جديد';
    RAISE NOTICE '✅ تم تعطيل RLS على كل الجداول';
    RAISE NOTICE '✅ تم إعداد Storage + Realtime';
    RAISE NOTICE '';
    RAISE NOTICE '🔄 الخطوات التالية:';
    RAISE NOTICE '   1. سجلي دخول بحساب: arwaalf7@gmail.com';
    RAISE NOTICE '   2. جربي النظام!';
    RAISE NOTICE '';
    RAISE NOTICE '════════════════════════════════════════════════════════';
END $$;

-- التحقق من النتائج
SELECT 
  '📋 الجداول الجديدة' as "التصنيف",
  table_name as "الجدول",
  '✅ جاهز' as "الحالة"
FROM information_schema.tables
WHERE table_schema = 'public'
AND table_name IN (
  'attendance', 'student_followups', 'auditory_memory_tests',
  'initial_reports', 'parent_consents', 'student_notes',
  'initial_student_data', 'medical_diagnosis', 'iep_plans',
  'session_tracking', 'parent_messages'
)
ORDER BY table_name;
