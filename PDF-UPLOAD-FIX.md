# إصلاح خطأ رفع PDF (400 Error)

## 🚨 المشكلة:
عند رفع ملف PDF يظهر خطأ **400 Bad Request** من Supabase Storage

## 🔍 السبب:
Supabase Storage لديه **حد افتراضي لحجم الملف** (عادة 5-10 ميجا)

---

## ✅ الحل - خطوتين:

### **الخطوة 1: تشغيل SQL لزيادة الحد**

1. افتحي **Supabase Dashboard** → [https://supabase.com/dashboard](https://supabase.com/dashboard)
2. اختاري المشروع
3. من القائمة اليسار → **SQL Editor**
4. اضغطي **New Query**
5. انسخي محتوى أحد هذين الملفين:

#### **الخيار أ: إصلاح سريع**
ملف: `FIX-STORAGE-SIZE-LIMIT.sql`
- يزيد الحد إلى **500 ميجا**
- أسرع

#### **الخيار ب: إعداد كامل**
ملف: `SETUP-STORAGE-BUCKET.sql`
- يُنشئ bucket إذا لم يكن موجود
- يضبط الصلاحيات
- يزيد الحد إلى **500 ميجا**

6. ألصقي المحتوى في SQL Editor
7. اضغطي **Run** (`Ctrl+Enter`)
8. يجب تشوفي: ✅ Success messages

---

### **الخطوة 2: تأكد من وجود Bucket**

في Supabase Dashboard:
1. من القائمة اليسار → **Storage**
2. يجب تشوفي bucket اسمه: **`student-documents`**
3. إذا موجود ✅ → كمّلي
4. إذا مو موجود ❌ → شغّلي `SETUP-STORAGE-BUCKET.sql`

---

## 🎯 بعد تنفيذ SQL:

1. ✅ حد حجم الملف: **500 ميجا** (بدلاً من 10 ميجا)
2. ✅ PDFs فقط مسموحة
3. ✅ المعلمات والمديرة يقدرون يرفعون
4. ✅ أولياء الأمور يقدرون يشوفون فقط

---

## 🧪 اختبار:

1. ارجعي للموقع
2. اضغطي `Ctrl+Shift+R` (refresh)
3. افتحي ملف طالبة
4. تبويب "النماذج"
5. جربي رفع PDF (حتى 500 ميجا)
6. يجب يشتغل بدون خطأ 400 ✅

---

## 🚨 إذا لسه ما اشتغل:

### **تحقق من الـ Console Errors:**

افتحي Developer Tools (`F12`) → Console

#### **خطأ 1: "Bucket not found"**
✅ **الحل:** شغّلي `SETUP-STORAGE-BUCKET.sql`

#### **خطأ 2: "File too large"**
✅ **الحل:** شغّلي `FIX-STORAGE-SIZE-LIMIT.sql`

#### **خطأ 3: "Policy violation" / "Permission denied"**
✅ **الحل:** شغّلي `SETUP-STORAGE-BUCKET.sql` (يضبط الصلاحيات)

#### **خطأ 4: "Invalid file type"**
✅ **الحل:** تأكدي إن الملف PDF (مو Word أو صورة)

---

## 📊 التحقق من الإعدادات:

شغّلي هذا SQL للتأكد:

```sql
-- Check bucket settings
SELECT 
  id,
  file_size_limit / 1024.0 / 1024.0 as "Size Limit (MB)",
  public,
  allowed_mime_types
FROM storage.buckets
WHERE id = 'student-documents';
```

يجب تشوفي:
- ✅ `Size Limit (MB)`: **500** (أو NULL للا محدود)
- ✅ `public`: **false**
- ✅ `allowed_mime_types`: **{application/pdf}**

---

## 🔧 زيادة الحد أكثر (اختياري):

إذا تبين حد أكبر (1 جيجا مثلاً):

```sql
UPDATE storage.buckets
SET file_size_limit = 1073741824  -- 1GB
WHERE id = 'student-documents';
```

أو إزالة الحد نهائياً:

```sql
UPDATE storage.buckets
SET file_size_limit = NULL  -- Unlimited
WHERE id = 'student-documents';
```

---

## 📁 الملفات:

1. ✅ `FIX-STORAGE-SIZE-LIMIT.sql` - إصلاح سريع (زيادة الحد فقط)
2. ✅ `SETUP-STORAGE-BUCKET.sql` - إعداد كامل (bucket + صلاحيات + حد)
3. ✅ `PDF-UPLOAD-FIX.md` - هذا الملف (تعليمات)

---

## 📅 التاريخ:
- **آخر تحديث:** 8 سبتمبر 2026
- **Commit:** `9f578f1` (removed size check in JS)

---

## ✅ الخلاصة:

**المشكلة:** خطأ 400 عند رفع PDF

**السبب:** Supabase Storage لديه حد افتراضي صغير

**الحل:** 
1. شغّلي `FIX-STORAGE-SIZE-LIMIT.sql` أو `SETUP-STORAGE-BUCKET.sql`
2. Refresh الموقع
3. جربي الرفع مرة ثانية

**النتيجة:** رفع PDFs حتى **500 ميجا** ✅

