# 🔧 دليل المطور - التعديلات المطلوبة

## ملخص الوضع
تم إنشاء:
- ✅ `index.html` - صفحة رئيسية كاملة مع تحميل Supabase
- ✅ `supabase-config.js` - ملف الإعدادات (يحتاج استبدال المفاتيح)
- ✅ قاعدة البيانات جاهزة في `START-HERE.sql`

يحتاج تعديل:
- ⏳ `app.js` - ملف ضخم (2000+ سطر) يحتاج تعديلات محددة

---

## 🎯 التعديلات المطلوبة في app.js

### 1. معلم التربية الخاصة - أهداف يدوية بسيطة

#### الموقع: البحث عن `function openAddFollowupModal`

```javascript
// ====== إضافة تحقق من نوع المعلم ======
function openAddFollowupModal(sid) {
  const st = studentBy(sid);
  const teacher = STATE.user;
  
  // إذا كان معلم تربية خاصة - استخدم form بسيط
  if (teacher.teacher_type === 'special_education') {
    return openSpecialEdFollowupModal(sid);
  }
  
  // إذا كان معلم نطق - استخدم form الحالي
  // ... الكود الحالي ...
}

// ====== إضافة function جديدة ======
function openSpecialEdFollowupModal(sid) {
  const st = studentBy(sid);
  const today = new Date().toISOString().slice(0, 10);
  
  openModal(`
    <div class="modal-head">
      <h2>📈 إضافة متابعة لـ ${esc(st.name)}</h2>
      <button class="x" data-action="close-modal">${I.close}</button>
    </div>
    <form data-form="add-special-ed-followup" data-sid="${sid}">
      <!-- فترة المتابعة -->
      <div class="field-group">
        <label class="section-label">📅 فترة المتابعة</label>
        <div class="row" style="gap:12px">
          <div class="field" style="flex:1">
            <label>من</label>
            <input name="date_from" type="date" value="${today}" required>
          </div>
          <div class="field" style="flex:1">
            <label>إلى</label>
            <input name="date_to" type="date" value="${today}" required>
          </div>
        </div>
      </div>
      
      <!-- منطقة الأهداف اليدوية -->
      <div class="field-group">
        <label class="section-label">🎯 الأهداف</label>
        <div id="manual-goals-container"></div>
        <button type="button" class="btn soft sm" onclick="addManualGoalField()">
          ${I.plus}<span>إضافة هدف</span>
        </button>
      </div>
      
      <!-- الوسائل -->
      <div class="field-group">
        <label class="section-label">🛠️ الوسائل المستخدمة</label>
        <div class="checkbox-group">
          <label class="checkbox-label"><input type="checkbox" name="tools" value="بطاقات صور"> بطاقات صور</label>
          <label class="checkbox-label"><input type="checkbox" name="tools" value="قصص"> قصص</label>
          <label class="checkbox-label"><input type="checkbox" name="tools" value="سبورة"> سبورة</label>
          <label class="checkbox-label"><input type="checkbox" name="tools" value="مجسمات"> مجسمات</label>
          <label class="checkbox-label"><input type="checkbox" name="tools" value="آيباد"> آيباد</label>
          <label class="checkbox-label"><input type="checkbox" name="tools" value="العاب"> العاب</label>
        </div>
      </div>
      
      <!-- ملاحظات -->
      <div class="field">
        <label>ملاحظات (اختياري)</label>
        <textarea name="notes" rows="3"></textarea>
      </div>
      
      <button type="submit" class="btn lg block">
        ${I.check}<span>حفظ المتابعة</span>
      </button>
    </form>
  `, { lg: true });
  
  // Add first goal field automatically
  addManualGoalField();
}

// ====== دالة إضافة حقل هدف يدوي ======
function addManualGoalField() {
  const container = document.getElementById('manual-goals-container');
  if (!container) return;
  
  const index = container.children.length;
  const goalHTML = `
    <div class="field-group" style="border: 1px solid var(--border); border-radius: 8px; padding: 12px; margin-bottom: 12px; position: relative;">
      <button type="button" class="btn soft sm" style="position: absolute; top: 8px; left: 8px;" onclick="this.closest('.field-group').remove()">
        ${I.trash}
      </button>
      
      <div class="field">
        <label>الهدف ${index + 1}</label>
        <textarea name="manual_goals[${index}][text]" rows="2" required placeholder="مثال: أن تنطق الطالبة حرف الراء بوضوح"></textarea>
      </div>
      
      <div class="field">
        <label>تصنيف الهدف</label>
        <select name="manual_goals[${index}][category]" required>
          <option value="">-- اختر التصنيف --</option>
          <option value="تمهيدي">هدف تمهيدي</option>
          <option value="استقبالي">هدف استقبالي</option>
          <option value="تعبيري">هدف تعبيري</option>
          <option value="نطق">هدف نطق</option>
        </select>
      </div>
      
      <div class="field">
        <label>تقييم الهدف</label>
        <div class="row" style="gap:8px">
          <label class="radio-chip">
            <input type="radio" name="manual_goals[${index}][evaluation]" value="mastered" required hidden>
            <span>أتقن</span>
          </label>
          <label class="radio-chip">
            <input type="radio" name="manual_goals[${index}][evaluation]" value="partial" hidden>
            <span>جزئياً</span>
          </label>
          <label class="radio-chip">
            <input type="radio" name="manual_goals[${index}][evaluation]" value="not_mastered" hidden>
            <span>لم يتقن</span>
          </label>
        </div>
      </div>
    </div>
  `;
  
  container.insertAdjacentHTML('beforeend', goalHTML);
}
```

### 2. حفظ بيانات معلم التربية الخاصة

#### الموقع: البحث عن `const fAddFollowup =`

```javascript
// ====== إضافة handler للـ special ed form ======
const fSpecialEdFollowup = e.target.closest('[data-form="add-special-ed-followup"]');
if (fSpecialEdFollowup) {
  e.preventDefault();
  const sid = fSpecialEdFollowup.getAttribute('data-sid');
  const fd = new FormData(fSpecialEdFollowup);
  
  // جمع الأهداف اليدوية
  const manualGoals = [];
  let i = 0;
  while (fd.has(`manual_goals[${i}][text]`)) {
    manualGoals.push({
      text: fd.get(`manual_goals[${i}][text]`),
      category: fd.get(`manual_goals[${i}][category]`),
      evaluation: fd.get(`manual_goals[${i}][evaluation]`)
    });
    i++;
  }
  
  // جمع الوسائل
  const tools = Array.from(fSpecialEdFollowup.querySelectorAll('input[name="tools"]:checked'))
    .map(cb => cb.value);
  
  // حفظ إلى Supabase
  (async () => {
    try {
      const { data, error } = await window.supabaseClient
        .from('student_followups')
        .insert({
          student_id: sid,
          teacher_id: STATE.user.id,
          date_from: fd.get('date_from'),
          date_to: fd.get('date_to'),
          custom_goal: JSON.stringify(manualGoals), // حفظ كـ JSON في custom_goal
          tools: tools,
          notes: fd.get('notes') || null,
        })
        .select()
        .single();
      
      if (error) throw error;
      
      // تحديث STATE
      STATE.data.studentFollowups.push(data);
      persistState();
      
      toast('تم حفظ المتابعة بنجاح', 'success');
      closeModal();
      handleRoute(); // إعادة تحميل الصفحة
    } catch (error) {
      console.error('Error saving followup:', error);
      toast('حدث خطأ في الحفظ', 'error');
    }
  })();
  
  return;
}
```

### 3. أزرار التعديل والحذف للمتابعات

#### الموقع: البحث عن `function renderFollowupCard`

```javascript
// ====== تعديل الدالة الموجودة ======
function renderFollowupCard(followup, plan) {
  // ... الكود الموجود ...
  
  // إضافة أزرار في نهاية الـ card
  return `
    <div class="card">
      <!-- محتوى الـ card الحالي -->
      
      <!-- أزرار التعديل والحذف -->
      <div class="row" style="gap: 8px; margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--border);">
        <button class="btn soft sm" data-action="edit-followup" data-id="${followup.id}">
          ${I.edit}<span>تعديل</span>
        </button>
        <button class="btn soft sm" data-action="delete-followup" data-id="${followup.id}">
          ${I.trash}<span>حذف</span>
        </button>
      </div>
    </div>
  `;
}
```

### 4. اختبار الذاكرة السمعية للأرقام

#### إضافة زر في صفحة الطالب (لمعلم النطق فقط):

```javascript
// في viewStudentProfile - إضافة بعد قسم المتابعات:
if (STATE.user.teacher_type === 'speech_therapy') {
  html += `
    <div class="card">
      <div class="card-title">
        <h3>🧠 اختبارات الذاكرة السمعية</h3>
      </div>
      <div class="row" style="gap: 12px;">
        <button class="btn" onclick="openAuditoryTestModal(1, '${st.id}')">
          ${I.target}<span>اختبار الأرقام</span>
        </button>
        <button class="btn" onclick="openAuditoryTestModal(2, '${st.id}')">
          ${I.target}<span>اختبار الكلمات</span>
        </button>
      </div>
    </div>
  `;
}
```

#### إضافة دالة الاختبار:

```javascript
function openAuditoryTestModal(testType, sid) {
  const st = studentBy(sid);
  
  if (testType === 1) {
    // اختبار الأرقام
    openModal(`
      <div class="modal-head">
        <h2>🧠 اختبار الذاكرة السمعية للأرقام - ${esc(st.name)}</h2>
        <button class="x" data-action="close-modal">${I.close}</button>
      </div>
      <form data-form="auditory-test-numbers" data-sid="${sid}">
        <!-- Section 1: 2-6 أرقام -->
        <div class="field-group">
          <label class="section-label">1️⃣ أرقام من 2-6 (3 محاولات)</label>
          <div class="field">
            <label>المحاولة 1</label>
            <input name="section1_trial1" placeholder="مثال: 3-6" />
          </div>
          <div class="field">
            <label>المحاولة 2</label>
            <input name="section1_trial2" placeholder="مثال: 5-8" />
          </div>
          <div class="field">
            <label>المحاولة 3</label>
            <input name="section1_trial3" placeholder="مثال: 1-4-6" />
          </div>
        </div>
        
        <!-- كرر لباقي الأقسام... -->
        
        <div class="field">
          <label>ملاحظات</label>
          <textarea name="notes" rows="3"></textarea>
        </div>
        
        <button type="submit" class="btn lg block">
          ${I.check}<span>حفظ الاختبار</span>
        </button>
      </form>
    `, { lg: true });
  } else {
    // اختبار الكلمات
    // مشابه لاختبار الأرقام
  }
}
```

---

## 📦 ملفات يجب تسليمها للعميل

1. **SUPABASE-KEYS.txt** (المفاتيح الفعلية - غير محفوظة في Git)
2. **تعليمات-التشغيل.md**:
   ```markdown
   # تعليمات تشغيل منصة أثر
   
   ## 1. قاعدة البيانات
   - افتحي Supabase Dashboard
   - اذهبي إلى SQL Editor
   - افتحي ملف `START-HERE.sql`
   - اضغطي Run
   - انتظري حتى تنتهي كل العمليات
   
   ## 2. المفاتيح
   - افتحي `index.html` بمحرر نصوص
   - ابحثي عن `YOUR_SUPABASE_URL`
   - استبدليه بـ: https://rnsmafkkpenvyxyicnlq.supabase.co
   - استبدلي `YOUR_ANON_KEY` بالمفتاح من SUPABASE-KEYS.txt
   - استبدلي `YOUR_SERVICE_KEY` بالمفتاح من SUPABASE-KEYS.txt
   
   ## 3. التشغيل
   - افتحي `index.html` في المتصفح
   - سجلي دخول بـ: arwaalf7@gmail.com
   - ابدئي الاستخدام!
   ```

---

## ✅ Checklist للمطور

- [ ] إضافة `openSpecialEdFollowupModal` في app.js
- [ ] إضافة `addManualGoalField` في app.js
- [ ] إضافة handler `fSpecialEdFollowup` في app.js
- [ ] تعديل `renderFollowupCard` لإضافة أزرار edit/delete
- [ ] إضافة `openAuditoryTestModal` لكلا النوعين
- [ ] إضافة form handlers لحفظ الاختبارات
- [ ] اختبار كل feature على حدة
- [ ] push إلى GitHub

---

## 🔗 روابط مهمة

- Repository: https://github.com/Athr-Dz/Athr.git
- Supabase Project: rnsmafkkpenvyxyicnlq
- Admin Email: arwaalf7@gmail.com
