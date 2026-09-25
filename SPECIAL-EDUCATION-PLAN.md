# 📋 خطة تنفيذ صفحات معلمات التربية الخاصة

## 🎯 الهدف
إضافة قسم كامل لمعلمات التربية الخاصة (3 معلمات) مع صفحات منفصلة ومحتوى مختلف

---

## 📂 الهيكل الجديد

### المستخدمون:
- معلمة التربية الخاصة (نوع جديد: `special_education_teacher`)
- يمكن تسجيل 3 معلمات تربية خاصة

### صفحة الطالبة (للتربية الخاصة):
```
📂 ملف الطالبة
├── 📋 النماذج
│   ├── موافقة ولي الأمر
│   ├── ملاحظة الطالبة
│   └── البيانات الأولية
├── 📝 الخطة الفردية IEP
│   ├── بيانات الطالبة
│   ├── المستوى الحالي
│   ├── نقاط القوة والاحتياج
│   ├── الأهداف الفصلية
│   ├── الأهداف قصيرة المدى
│   ├── الأهداف السلوكية/التعليمية
│   ├── الوسائل والأدوات
│   └── استراتيجيات التدريس
├── 📈 متابعة الطالبة
│   ├── تاريخ الجلسة (من/إلى)
│   ├── الهدف قصير المدى
│   ├── الأهداف الإجرائية السلوكية
│   ├── تقييم كل هدف
│   ├── الوسائل المستخدمة
│   ├── أساليب التدريس
│   ├── أساليب التعزيز
│   └── ملاحظات المعلمة
└── 💬 رسائل ولي الأمر
```

---

## 🗂️ الجداول الجديدة في Supabase

### 1. جدول موافقة ولي الأمر
```sql
CREATE TABLE parent_consents (
  id UUID PRIMARY KEY,
  student_id UUID,
  consent_given BOOLEAN,
  consent_date DATE,
  notes TEXT,
  created_at TIMESTAMP
);
```

### 2. جدول ملاحظات الطالبة
```sql
CREATE TABLE student_notes (
  id UUID PRIMARY KEY,
  student_id UUID,
  teacher_id UUID,
  note_date DATE,
  note_type TEXT,
  note_content TEXT,
  created_at TIMESTAMP
);
```

### 3. جدول البيانات الأولية
```sql
CREATE TABLE initial_data (
  id UUID PRIMARY KEY,
  student_id UUID,
  data_fields JSONB,
  created_at TIMESTAMP
);
```

### 4. جدول الخطة الفردية IEP
```sql
CREATE TABLE iep_plans (
  id UUID PRIMARY KEY,
  student_id UUID,
  teacher_id UUID,
  current_level TEXT,
  strengths TEXT,
  needs TEXT,
  semester_goals JSONB,
  short_term_goals JSONB,
  behavioral_goals JSONB,
  tools_materials JSONB,
  teaching_strategies JSONB,
  start_date DATE,
  end_date DATE,
  status TEXT,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
```

### 5. جدول متابعة الجلسات
```sql
CREATE TABLE session_tracking (
  id UUID PRIMARY KEY,
  student_id UUID,
  teacher_id UUID,
  session_date_from DATE,
  session_date_to DATE,
  short_term_goal_id UUID,
  behavioral_objectives JSONB,
  evaluations JSONB,
  tools_used JSONB,
  teaching_methods JSONB,
  reinforcement_methods JSONB,
  teacher_notes TEXT,
  created_at TIMESTAMP
);
```

### 6. جدول رسائل ولي الأمر
```sql
CREATE TABLE parent_messages (
  id UUID PRIMARY KEY,
  student_id UUID,
  from_teacher_id UUID,
  to_parent_id UUID,
  subject TEXT,
  message_body TEXT,
  attachment_url TEXT,
  status TEXT,
  sent_at TIMESTAMP,
  read_at TIMESTAMP
);
```

---

## 🎨 التصميم

### الألوان والهوية:
- نفس الألوان الحالية
- نفس الأنماط
- تمييز بسيط لصفحات التربية الخاصة (أيقونة مختلفة)

### التبويبات:
```
🏠 الرئيسية
👥 الطالبات
📊 التقارير (للمديرة فقط)
⚙️ الإعدادات
```

---

## 📝 خطة التنفيذ

### المرحلة 1️⃣: قاعدة البيانات (30 دقيقة)
- [x] إنشاء ملف SQL
- [ ] إضافة 6 جداول جديدة
- [ ] إضافة Indexes
- [ ] إضافة RLS policies
- [ ] اختبار الجداول

### المرحلة 2️⃣: النماذج (1 ساعة)
- [ ] موافقة ولي الأمر
- [ ] ملاحظة الطالبة
- [ ] البيانات الأولية

### المرحلة 3️⃣: الخطة الفردية IEP (2 ساعة)
- [ ] نموذج الخطة
- [ ] ربط الأهداف ببعضها
- [ ] واجهة الإضافة/التعديل
- [ ] الطباعة

### المرحلة 4️⃣: متابعة الطالبة (1.5 ساعة)
- [ ] نموذج الجلسة
- [ ] ربط بالخطة IEP
- [ ] التقييمات
- [ ] القوائم المنسدلة

### المرحلة 5️⃣: رسائل ولي الأمر (1 ساعة)
- [ ] نموذج الرسالة
- [ ] إرفاق ملفات
- [ ] حالة القراءة
- [ ] سجل الرسائل

### المرحلة 6️⃣: الاختبار والتحسين (1 ساعة)
- [ ] اختبار جميع الميزات
- [ ] إصلاح الأخطاء
- [ ] تحسين الأداء
- [ ] التوثيق

---

## ⏱️ الوقت المتوقع
**إجمالي: 7 ساعات**

---

## 🚀 البدء الآن

سأبدأ بإنشاء ملف SQL الجديد...
