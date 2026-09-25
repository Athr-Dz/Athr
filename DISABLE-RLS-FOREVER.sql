-- ════════════════════════════════════════════════════════
-- 🔓 تعطيل RLS نهائياً - لا تفعيل تلقائي أبداً
-- ════════════════════════════════════════════════════════
-- ⚠️ شغلي هذا الملف بعد START-HERE.sql
-- ⚠️ أو إذا واجهت أي مشاكل RLS في المستقبل
-- ════════════════════════════════════════════════════════

DO $$
BEGIN
    RAISE NOTICE '';
    RAISE NOTICE '════════════════════════════════════════════════════════';
    RAISE NOTICE '🔓 تعطيل Row Level Security نهائياً...';
    RAISE NOTICE '════════════════════════════════════════════════════════';
    RAISE NOTICE '';
END $$;

-- ════════════════════════════════════════════════════════
-- 1️⃣ تعطيل RLS على كل الجداول الموجودة
-- ════════════════════════════════════════════════════════

DO $$
DECLARE
    tbl RECORD;
BEGIN
    RAISE NOTICE '🔄 تعطيل RLS على كل الجداول...';
    
    -- Loop through all tables in public schema
    FOR tbl IN (
        SELECT tablename 
        FROM pg_tables 
        WHERE schemaname = 'public'
    ) LOOP
        EXECUTE format('ALTER TABLE IF EXISTS %I DISABLE ROW LEVEL SECURITY', tbl.tablename);
        RAISE NOTICE '   ✅ معطّل على: %', tbl.tablename;
    END LOOP;
END $$;


-- ════════════════════════════════════════════════════════
-- 2️⃣ حذف كل السياسات (Policies) نهائياً
-- ════════════════════════════════════════════════════════

DO $$ 
DECLARE
    r RECORD;
    policy_count INTEGER := 0;
BEGIN
    RAISE NOTICE '';
    RAISE NOTICE '🗑️  حذف كل السياسات...';
    
    -- Loop through all policies and drop them
    FOR r IN (
        SELECT schemaname, tablename, policyname
        FROM pg_policies
        WHERE schemaname = 'public'
    ) LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON %I.%I CASCADE', 
                      r.policyname, r.schemaname, r.tablename);
        policy_count := policy_count + 1;
    END LOOP;
    
    RAISE NOTICE '   ✅ تم حذف % سياسة', policy_count;
END $$;


-- ════════════════════════════════════════════════════════
-- 3️⃣ منح صلاحيات كاملة لكل المستخدمين
-- ════════════════════════════════════════════════════════

DO $$
DECLARE
    tbl RECORD;
BEGIN
    RAISE NOTICE '';
    RAISE NOTICE '🔑 منح صلاحيات كاملة...';
    
    FOR tbl IN (
        SELECT tablename 
        FROM pg_tables 
        WHERE schemaname = 'public'
    ) LOOP
        -- Grant to authenticated users
        EXECUTE format('GRANT ALL ON TABLE %I TO authenticated', tbl.tablename);
        EXECUTE format('GRANT ALL ON TABLE %I TO anon', tbl.tablename);
        EXECUTE format('GRANT ALL ON TABLE %I TO postgres', tbl.tablename);
        EXECUTE format('GRANT ALL ON TABLE %I TO service_role', tbl.tablename);
    END LOOP;
    
    RAISE NOTICE '   ✅ تم منح الصلاحيات';
END $$;


-- ════════════════════════════════════════════════════════
-- 4️⃣ إزالة أي Triggers قد تعيد تفعيل RLS
-- ════════════════════════════════════════════════════════

DO $$
DECLARE
    trg RECORD;
BEGIN
    RAISE NOTICE '';
    RAISE NOTICE '🔧 إزالة Triggers المتعلقة بـ RLS...';
    
    FOR trg IN (
        SELECT trigger_name, event_object_table
        FROM information_schema.triggers
        WHERE trigger_schema = 'public'
        AND (
            trigger_name ILIKE '%rls%' OR 
            trigger_name ILIKE '%policy%' OR
            trigger_name ILIKE '%security%'
        )
    ) LOOP
        EXECUTE format('DROP TRIGGER IF EXISTS %I ON %I CASCADE', 
                      trg.trigger_name, trg.event_object_table);
        RAISE NOTICE '   ✅ تم حذف Trigger: %', trg.trigger_name;
    END LOOP;
END $$;


-- ════════════════════════════════════════════════════════
-- 5️⃣ تعطيل RLS على Storage أيضاً
-- ════════════════════════════════════════════════════════

DO $$
BEGIN
    RAISE NOTICE '';
    RAISE NOTICE '📁 تعطيل RLS على Storage...';
END $$;

ALTER TABLE IF EXISTS storage.objects DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS storage.buckets DISABLE ROW LEVEL SECURITY;

-- حذف سياسات Storage القديمة
DROP POLICY IF EXISTS "Teachers can upload documents" ON storage.objects;
DROP POLICY IF EXISTS "Teachers can view documents" ON storage.objects;
DROP POLICY IF EXISTS "Teachers can delete documents" ON storage.objects;
DROP POLICY IF EXISTS "Teachers can update documents" ON storage.objects;
DROP POLICY IF EXISTS "Allow all for authenticated" ON storage.objects;

-- سياسة Storage مفتوحة تماماً
CREATE POLICY "Open access for all" 
ON storage.objects FOR ALL 
TO public
USING (true)
WITH CHECK (true);


-- ════════════════════════════════════════════════════════
-- 6️⃣ التحقق النهائي
-- ════════════════════════════════════════════════════════

DO $$
DECLARE
    enabled_count INTEGER := 0;
    policy_count INTEGER := 0;
BEGIN
    RAISE NOTICE '';
    RAISE NOTICE '🔍 التحقق النهائي...';
    RAISE NOTICE '';
    
    -- Count tables with RLS enabled
    SELECT COUNT(*) INTO enabled_count
    FROM pg_tables
    WHERE schemaname = 'public' AND rowsecurity = true;
    
    -- Count remaining policies
    SELECT COUNT(*) INTO policy_count
    FROM pg_policies
    WHERE schemaname = 'public';
    
    IF enabled_count > 0 THEN
        RAISE WARNING '⚠️  تحذير: لا يزال هناك % جدول مع RLS مفعّل!', enabled_count;
    ELSE
        RAISE NOTICE '✅ RLS معطّل على كل الجداول';
    END IF;
    
    IF policy_count > 0 THEN
        RAISE WARNING '⚠️  تحذير: لا يزال هناك % سياسة موجودة!', policy_count;
    ELSE
        RAISE NOTICE '✅ تم حذف كل السياسات';
    END IF;
END $$;

-- عرض حالة RLS لكل جدول
SELECT 
  schemaname as "Schema",
  tablename as "📋 الجدول",
  CASE 
    WHEN rowsecurity THEN '❌ مفعّل (مشكلة!)'
    ELSE '✅ معطّل'
  END as "RLS Status"
FROM pg_tables
WHERE schemaname IN ('public', 'storage')
ORDER BY schemaname, tablename;

-- عرض السياسات المتبقية
SELECT 
  schemaname as "Schema",
  tablename as "الجدول",
  policyname as "السياسة"
FROM pg_policies
WHERE schemaname IN ('public', 'storage')
ORDER BY schemaname, tablename;


-- ════════════════════════════════════════════════════════
-- 🎉 تم!
-- ════════════════════════════════════════════════════════

DO $$
BEGIN
    RAISE NOTICE '';
    RAISE NOTICE '════════════════════════════════════════════════════════';
    RAISE NOTICE '🎉 تم تعطيل RLS نهائياً!';
    RAISE NOTICE '════════════════════════════════════════════════════════';
    RAISE NOTICE '';
    RAISE NOTICE '✅ RLS معطّل على كل الجداول';
    RAISE NOTICE '✅ تم حذف كل السياسات';
    RAISE NOTICE '✅ صلاحيات كاملة لكل المستخدمين';
    RAISE NOTICE '✅ Storage مفتوح بالكامل';
    RAISE NOTICE '';
    RAISE NOTICE '💡 إذا واجهت مشاكل RLS في المستقبل:';
    RAISE NOTICE '   شغلي هذا الملف مرة أخرى!';
    RAISE NOTICE '';
    RAISE NOTICE '════════════════════════════════════════════════════════';
END $$;
