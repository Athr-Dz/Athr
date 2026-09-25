# Testing Checklist - Special Education Teachers Feature

## ✅ Pre-Deployment Steps

### 1. Database Setup
- [ ] Run `ADD-TEACHER-TYPE.sql` in Supabase SQL Editor
- [ ] Verify `teacher_type` column exists in `users` table
- [ ] Verify new JSONB columns exist in `students` table:
  - [ ] `shared_initial_data`
  - [ ] `special_ed_forms`
  - [ ] `special_ed_iep`
  - [ ] `special_ed_sessions`
- [ ] Verify `student-documents` storage bucket exists
- [ ] Verify storage bucket RLS policies are active

### 2. Update Existing Teachers (if needed)
```sql
-- Set existing teachers to 'speech' type (optional)
UPDATE users 
SET teacher_type = 'speech' 
WHERE role = 'teacher' AND teacher_type IS NULL;
```

---

## 🧪 Testing Scenarios

### Scenario A: Principal Creates Special Ed Teacher

**Steps:**
1. Log in as Principal
2. Navigate to Teachers section
3. Click "إضافة معلمة"
4. Fill form:
   - Name: افنان الجهني
   - Job Title: Select "معلم تربية خاصة"
   - Email: afnan@test.com
   - Password: test123
   - Phone: 0501234567
   - Permissions: Check all
5. Click "إضافة المعلمة"

**Expected Results:**
- ✅ Teacher created successfully
- ✅ Title shows as "معلم تربية خاصة"
- ✅ Teacher appears in teachers list

---

### Scenario B: Special Ed Teacher Interface

**Steps:**
1. Log in as Special Ed teacher (afnan@test.com)
2. View student profile
3. Check tabs displayed

**Expected Results:**

#### Forms Tab (النماذج):
- ✅ Shows: موافقة ولي الأمر
- ✅ Shows: البيانات الأولية (with "مشتركة" badge)
- ✅ Shows: التشخيص الطبي والنفسي (PDF upload)
- ✅ Shows: ملاحظة الطالبة (notes management)
- ✅ Shows: الاختبار التشخيصي (PDF upload)
- ✅ Does NOT show: التقييم القبلي, اختبار النطق, اختبار الذاكرة السمعية

#### IEP Tab (الخطة الفردية):
- ✅ Different interface from speech teacher
- ✅ Shows manual entry form
- ✅ Shows PDF upload option
- ✅ Has hierarchical goals structure:
  - Semester goals
  - Short-term goals
  - Behavioral goals
- ✅ Shows teaching tools & strategies
- ✅ Shows start/end dates

#### Follow-up Tab (متابعة الطالبة):
- ✅ Different interface from speech teacher
- ✅ Can add session with:
  - Date range (from/to)
  - Short-term goal selection from IEP
  - Multiple procedural goals with evaluations
  - Teaching tools (multi-select checkboxes)
  - Teaching methods (multi-select checkboxes)
  - Reinforcement methods (multi-select checkboxes)
  - Teacher notes
- ✅ Can view session details
- ✅ Can edit existing sessions

---

### Scenario C: Cross-Teacher Data Sharing (البيانات الأولية)

**Setup:**
- Have both a speech teacher and special ed teacher
- Assign same student to both (hypothetically - for testing data visibility)

**Steps:**
1. Log in as Speech Teacher (أروى)
2. Open student profile → Forms tab
3. Complete "البيانات الأولية" form:
   - Birth date: 2018-05-15
   - Medical diagnosis: اضطراب طيف التوحد
   - Parent phone: 0501234567
   - Notes: الطالبة تحتاج متابعة
4. Save form
5. Log out
6. Log in as Special Ed Teacher (افنان)
7. Open SAME student profile → Forms tab
8. Open "البيانات الأولية" form

**Expected Results:**
- ✅ Special Ed teacher sees the data entered by Speech teacher
- ✅ Form shows "مشتركة بين المعلمات" indicator
- ✅ Can edit/update the shared data
- ✅ Updates appear for both teachers immediately

---

### Scenario D: PDF Upload & View

**Steps:**
1. Log in as Special Ed teacher
2. Open student → Forms → التشخيص الطبي والنفسي
3. Click "رفع"
4. Select a PDF file (max 10MB)
5. Click "رفع الملف"
6. After success, click "عرض"

**Expected Results:**
- ✅ File uploads successfully
- ✅ Status changes to "مكتمل"
- ✅ PDF opens in new tab with signed URL
- ✅ Can upload new file to replace old one

---

### Scenario E: Student Notes Management

**Steps:**
1. Log in as Special Ed teacher
2. Open student → Forms → ملاحظة الطالبة
3. Click "إدارة الملاحظات"
4. Click "إضافة ملاحظة جديدة"
5. Fill:
   - Date: today
   - Text: "الطالبة أظهرت تحسناً في التركيز"
6. Save note
7. Verify note appears in list
8. Delete note

**Expected Results:**
- ✅ Note saves successfully
- ✅ Shows date, text, and "بواسطة: [teacher name]"
- ✅ Can delete note with confirmation
- ✅ Notes count updates on form card

---

### Scenario F: Special Ed IEP Creation

**Steps:**
1. Log in as Special Ed teacher
2. Open student → IEP tab
3. Click "إنشاء خطة فردية"
4. Fill all fields:
   - Current level
   - Strengths & needs
   - Semester goals (one per line)
   - Short-term goals (one per line)
   - Behavioral goals (one per line)
   - Teaching tools (comma-separated)
   - Teaching strategies (comma-separated)
   - Start/end dates
5. Save IEP

**Expected Results:**
- ✅ IEP saves successfully
- ✅ Goals display in categorized cards
- ✅ Can edit IEP later
- ✅ Can upload PDF separately
- ✅ Shows goal counts correctly

---

### Scenario G: Session Planning

**Steps:**
1. Log in as Special Ed teacher
2. Open student → متابعة الطالبة tab
3. Click "إضافة جلسة"
4. Fill form:
   - Date from: 2026-02-01
   - Date to: 2026-02-07
   - Select short-term goal from IEP
   - Add 2-3 procedural goals with evaluations
   - Check multiple teaching tools
   - Check multiple teaching methods
   - Check reinforcement methods
   - Add teacher notes
5. Save session
6. View session details
7. Edit session

**Expected Results:**
- ✅ Session saves successfully
- ✅ Procedural goals can be added/removed dynamically
- ✅ Evaluations save correctly (تحقق/تحقق جزئياً/لم يتحقق)
- ✅ Checkboxes save correctly
- ✅ Session appears in timeline
- ✅ Can view full session details
- ✅ Can edit and update session

---

### Scenario H: Parent Views Special Ed Data

**Steps:**
1. Assign student to Special Ed teacher
2. Log in as parent of that student
3. Navigate to student dashboard
4. Check what's visible

**Expected Results:**
- ✅ Parent sees teacher name and type
- ✅ Forms list shows Special Ed forms
- ✅ Can view البيانات الأولية (read-only)
- ✅ Can see IEP goals (if created)
- ✅ Can see session records (if created)
- ✅ Cannot edit anything
- ✅ Cannot upload files
- ✅ Can send messages to teacher

---

### Scenario I: Vice Principal (Future Feature)

**Steps:**
1. Log in as Principal
2. Create teacher with type "الوكيل"

**Expected Results:**
- ✅ Teacher created successfully
- ✅ Title shows as "الوكيل"
- ✅ Can log in (functions same as principal for now)

---

## 🔒 Security & Permissions Tests

### Storage Access
- [ ] Teachers can upload to `student-documents` bucket
- [ ] Parents can view their child's documents only
- [ ] Teachers cannot access other schools' documents
- [ ] Signed URLs expire after 1 hour

### Data Isolation
- [ ] Special Ed teacher only sees their assigned students
- [ ] Speech teacher data separate from Special Ed data
- [ ] Shared data (البيانات الأولية) visible to all teachers of same student
- [ ] Parents only see their own child's data

### Form Validation
- [ ] Required fields enforce validation
- [ ] Date fields accept valid dates only
- [ ] File upload validates PDF type and size
- [ ] Textarea fields preserve line breaks

---

## 📊 Data Verification Queries

Run these in Supabase SQL Editor to verify data:

```sql
-- Check teacher types
SELECT name, email, teacher_type, title 
FROM users 
WHERE role = 'teacher';

-- Check shared initial data
SELECT name, shared_initial_data 
FROM students 
WHERE shared_initial_data IS NOT NULL;

-- Check special ed forms
SELECT name, special_ed_forms 
FROM students 
WHERE special_ed_forms IS NOT NULL;

-- Check special ed IEP
SELECT name, special_ed_iep 
FROM students 
WHERE special_ed_iep IS NOT NULL;

-- Check special ed sessions
SELECT name, special_ed_sessions 
FROM students 
WHERE special_ed_sessions IS NOT NULL;

-- Check uploaded files
SELECT * FROM storage.objects 
WHERE bucket_id = 'student-documents' 
ORDER BY created_at DESC;
```

---

## 🐛 Known Issues / Edge Cases

### To Watch For:
- [ ] Form data persists after modal close
- [ ] PDF viewer works on mobile devices
- [ ] Long goal text wraps correctly
- [ ] Multiple teachers editing same student data concurrently
- [ ] File upload progress indication
- [ ] Large PDF files (near 10MB limit)
- [ ] Arabic text direction in forms
- [ ] Date picker localization

---

## ✅ Final Checklist Before Going Live

- [ ] All SQL migrations run successfully
- [ ] Storage bucket configured with RLS
- [ ] At least one test for each teacher type
- [ ] Parent view tested with both teacher types
- [ ] PDF upload/download tested
- [ ] Cross-teacher data sharing verified
- [ ] Mobile responsive design checked
- [ ] Arabic text displays correctly
- [ ] All forms validate properly
- [ ] Error messages are user-friendly
- [ ] Success notifications appear
- [ ] No console errors in browser
- [ ] Data persists after page refresh

---

## 📝 Post-Deployment Monitoring

### Week 1:
- Monitor Supabase storage usage
- Check for any RLS policy violations
- Review error logs for form submissions
- Gather teacher feedback on UI

### Week 2:
- Verify data integrity across teachers
- Check parent satisfaction with views
- Monitor PDF upload success rate
- Review performance metrics

### Ongoing:
- Regular database backups
- Storage cleanup for old files
- User feedback collection
- Feature usage analytics
