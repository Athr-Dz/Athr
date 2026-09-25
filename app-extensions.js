/* ================================================================
   منصة أثر - App Extensions
   ================================================================
   هذا الملف يحتوي على إضافات لـ app.js بدون تعديل الملف الأصلي
   يتم تحميله بعد app.js في index.html
   ================================================================ */

console.log('🔧 Loading Athr app extensions...');

// Override openAddFollowupModal to support both teacher types
const originalOpenAddFollowupModal = window.openAddFollowupModal || function() {};

window.openAddFollowupModal = function(sid) {
  const st = studentBy(sid);
  const teacher = STATE.user;
  
  // إذا كان معلم تربية خاصة - استخدم form بسيط
  if (teacher && teacher.teacher_type === 'special_education') {
    return openSpecialEdFollowupModal(sid);
  }
  
  // Otherwise use original function
  return originalOpenAddFollowupModal(sid);
};

// معلم التربية الخاصة - Modal
window.openSpecialEdFollowupModal = function(sid) {
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
  setTimeout(() => addManualGoalField(), 100);
};

// دالة إضافة حقل هدف يدوي
window.addManualGoalField = function() {
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
};

// اختبارات الذاكرة السمعية
window.openAuditoryTestModal = function(testType, sid) {
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
          <div class="field"><label>المحاولة 1</label><input name="s1_t1" placeholder="مثال: 3-6" /></div>
          <div class="field"><label>المحاولة 2</label><input name="s1_t2" placeholder="مثال: 5-8" /></div>
          <div class="field"><label>المحاولة 3</label><input name="s1_t3" placeholder="مثال: 1-4-6" /></div>
        </div>
        
        <!-- Section 2: 3 أرقام -->
        <div class="field-group">
          <label class="section-label">2️⃣ 3 أرقام (3 محاولات)</label>
          <div class="field"><label>المحاولة 1</label><input name="s2_t1" /></div>
          <div class="field"><label>المحاولة 2</label><input name="s2_t2" /></div>
          <div class="field"><label>المحاولة 3</label><input name="s2_t3" /></div>
        </div>
        
        <!-- Section 3: 4-6 أرقام -->
        <div class="field-group">
          <label class="section-label">3️⃣ أرقام من 4-6 (3 محاولات)</label>
          <div class="field"><label>المحاولة 1</label><input name="s3_t1" /></div>
          <div class="field"><label>المحاولة 2</label><input name="s3_t2" /></div>
          <div class="field"><label>المحاولة 3</label><input name="s3_t3" /></div>
        </div>
        
        <!-- Section 4: 7 أرقام -->
        <div class="field-group">
          <label class="section-label">4️⃣ 7 أرقام (3 محاولات)</label>
          <div class="field"><label>المحاولة 1</label><input name="s4_t1" /></div>
          <div class="field"><label>المحاولة 2</label><input name="s4_t2" /></div>
          <div class="field"><label>المحاولة 3</label><input name="s4_t3" /></div>
        </div>
        
        <!-- Section 5: 10 أرقام -->
        <div class="field-group">
          <label class="section-label">5️⃣ 10 أرقام (3 محاولات)</label>
          <div class="field"><label>المحاولة 1</label><input name="s5_t1" /></div>
          <div class="field"><label>المحاولة 2</label><input name="s5_t2" /></div>
          <div class="field"><label>المحاولة 3</label><input name="s5_t3" /></div>
        </div>
        
        <!-- Section 6: 15 ثانية -->
        <div class="field-group">
          <label class="section-label">6️⃣ 15 ثانية (3 محاولات)</label>
          <div class="field"><label>المحاولة 1</label><input name="s6_t1" /></div>
          <div class="field"><label>المحاولة 2</label><input name="s6_t2" /></div>
          <div class="field"><label>المحاولة 3</label><input name="s6_t3" /></div>
        </div>
        
        <!-- Section 7: تكرار الأرقام 1* -->
        <div class="field-group">
          <label class="section-label">7️⃣ تكرار الأرقام 1*</label>
          <div class="field"><input name="s7_response" /></div>
        </div>
        
        <!-- Section 8: تكرار الأرقام 2* -->
        <div class="field-group">
          <label class="section-label">8️⃣ تكرار الأرقام 2*</label>
          <div class="field"><input name="s8_response" /></div>
        </div>
        
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
    openModal(`
      <div class="modal-head">
        <h2>🧠 اختبار الذاكرة السمعية للكلمات - ${esc(st.name)}</h2>
        <button class="x" data-action="close-modal">${I.close}</button>
      </div>
      <form data-form="auditory-test-words" data-sid="${sid}">
        
        <div class="field-group">
          <label class="section-label">الكلمات</label>
          <div class="field"><label>نجح محمد</label><input name="w1" /></div>
          <div class="field"><label>هدى نشط</label><input name="w2" /></div>
          <div class="field"><label>زرع المقل</label><input name="w3" /></div>
          <div class="field"><label>ميا تلميذة مجتهدة</label><input name="w4" /></div>
          <div class="field"><label>صفاء تحب المدرسة</label><input name="w5" /></div>
          <div class="field"><label>يلعب علي كمران</label><input name="w6" /></div>
          <div class="field"><label>هدى تذهب إلى المدرسة</label><input name="w7" /></div>
          <div class="field"><label>نادى تحب الكتاب الملون الكبير</label><input name="w8" /></div>
          <div class="field"><label>السماء صافية ولسن سعا عهر</label><input name="w9" /></div>
          <div class="field"><label>أحب أن ألعب بالمغرفة الصلبة الجميلة</label><input name="w10" /></div>
        </div>
        
        <div class="field">
          <label>ملاحظات</label>
          <textarea name="notes" rows="3"></textarea>
        </div>
        
        <button type="submit" class="btn lg block">
          ${I.check}<span>حفظ الاختبار</span>
        </button>
      </form>
    `, { lg: true });
  }
};

// Add form submit handlers
document.addEventListener('submit', async (e) => {
  
  // متابعة معلم التربية الخاصة - حفظ
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
    try {
      const { data, error } = await window.supabaseClient
        .from('student_followups')
        .insert({
          student_id: sid,
          teacher_id: STATE.user.id,
          date_from: fd.get('date_from'),
          date_to: fd.get('date_to'),
          custom_goal: JSON.stringify(manualGoals),
          tools: tools,
          notes: fd.get('notes') || null,
        })
        .select()
        .single();
      
      if (error) throw error;
      
      STATE.data.studentFollowups.push(data);
      persistState();
      
      toast('تم حفظ المتابعة بنجاح', 'success');
      closeModal();
      if (window.refreshData) await window.refreshData();
      else handleRoute();
    } catch (error) {
      console.error('Error saving followup:', error);
      toast('حدث خطأ في الحفظ', 'error');
    }
    
    return;
  }
  
  // حفظ اختبار الذاكرة السمعية - الأرقام
  const fAuditoryNumbers = e.target.closest('[data-form="auditory-test-numbers"]');
  if (fAuditoryNumbers) {
    e.preventDefault();
    const sid = fAuditoryNumbers.getAttribute('data-sid');
    const fd = new FormData(fAuditoryNumbers);
    
    const testData = {
      section1: { trial1: fd.get('s1_t1'), trial2: fd.get('s1_t2'), trial3: fd.get('s1_t3') },
      section2: { trial1: fd.get('s2_t1'), trial2: fd.get('s2_t2'), trial3: fd.get('s2_t3') },
      section3: { trial1: fd.get('s3_t1'), trial2: fd.get('s3_t2'), trial3: fd.get('s3_t3') },
      section4: { trial1: fd.get('s4_t1'), trial2: fd.get('s4_t2'), trial3: fd.get('s4_t3') },
      section5: { trial1: fd.get('s5_t1'), trial2: fd.get('s5_t2'), trial3: fd.get('s5_t3') },
      section6: { trial1: fd.get('s6_t1'), trial2: fd.get('s6_t2'), trial3: fd.get('s6_t3') },
      section7: { response: fd.get('s7_response') },
      section8: { response: fd.get('s8_response') },
    };
    
    try {
      const { data, error } = await window.supabaseClient
        .from('auditory_memory_tests')
        .insert({
          student_id: sid,
          teacher_id: STATE.user.id,
          test_type: 1,
          test_data: testData,
          notes: fd.get('notes') || null,
        })
        .select()
        .single();
      
      if (error) throw error;
      
      STATE.data.auditoryMemoryTests.push(data);
      persistState();
      
      toast('تم حفظ الاختبار بنجاح', 'success');
      closeModal();
      if (window.refreshData) await window.refreshData();
      else handleRoute();
    } catch (error) {
      console.error('Error saving test:', error);
      toast('حدث خطأ في الحفظ', 'error');
    }
    
    return;
  }
  
  // حفظ اختبار الذاكرة السمعية - الكلمات
  const fAuditoryWords = e.target.closest('[data-form="auditory-test-words"]');
  if (fAuditoryWords) {
    e.preventDefault();
    const sid = fAuditoryWords.getAttribute('data-sid');
    const fd = new FormData(fAuditoryWords);
    
    const testData = {
      words: [
        fd.get('w1'), fd.get('w2'), fd.get('w3'), fd.get('w4'), fd.get('w5'),
        fd.get('w6'), fd.get('w7'), fd.get('w8'), fd.get('w9'), fd.get('w10')
      ]
    };
    
    try {
      const { data, error } = await window.supabaseClient
        .from('auditory_memory_tests')
        .insert({
          student_id: sid,
          teacher_id: STATE.user.id,
          test_type: 2,
          test_data: testData,
          notes: fd.get('notes') || null,
        })
        .select()
        .single();
      
      if (error) throw error;
      
      STATE.data.auditoryMemoryTests.push(data);
      persistState();
      
      toast('تم حفظ الاختبار بنجاح', 'success');
      closeModal();
      if (window.refreshData) await window.refreshData();
      else handleRoute();
    } catch (error) {
      console.error('Error saving test:', error);
      toast('حدث خطأ في الحفظ', 'error');
    }
    
    return;
  }
  
}, true); // Use capture to handle before other handlers

console.log('✅ Athr app extensions loaded successfully');
