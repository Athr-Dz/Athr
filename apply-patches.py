#!/usr/bin/env python3
"""
Script to automatically apply patches to app.js
Usage: python apply-patches.py
"""

import re
import shutil
from pathlib import Path

def backup_file(filepath):
    """Create a backup of the original file"""
    backup_path = f"{filepath}.backup"
    shutil.copy2(filepath, backup_path)
    print(f"✅ Backup created: {backup_path}")
    return backup_path

def read_file(filepath):
    """Read file content"""
    with open(filepath, 'r', encoding='utf-8') as f:
        return f.read()

def write_file(filepath, content):
    """Write content to file"""
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

def apply_patches(app_js_content):
    """Apply all patches to app.js"""
    
    # Patch 1: Modify openAddFollowupModal to check teacher type
    pattern1 = r'function openAddFollowupModal\(sid\) \{\s+const st = studentBy\(sid\);'
    replacement1 = '''function openAddFollowupModal(sid) {
  const st = studentBy(sid);
  const teacher = STATE.user;
  
  // إذا كان معلم تربية خاصة - استخدم form بسيط
  if (teacher.teacher_type === 'special_education') {
    return openSpecialEdFollowupModal(sid);
  }'''
    
    app_js_content = re.sub(pattern1, replacement1, app_js_content)
    print("✅ Patch 1: Modified openAddFollowupModal")
    
    # Patch 2: Add openSpecialEdFollowupModal function
    # Find the position after openAddFollowupModal and insert the new function
    insert_position = app_js_content.find('// 2️⃣')
    if insert_position == -1:
        insert_position = app_js_content.find('function renderFollowupCard')
    
    new_function = '''

// معلم التربية الخاصة - Modal
function openSpecialEdFollowupModal(sid) {
  const st = studentBy(sid);
  const today = new Date().toISOString().slice(0, 10);
  
  openModal(`
    <div class="modal-head">
      <h2>📈 إضافة متابعة لـ ${esc(st.name)}</h2>
      <button class="x" data-action="close-modal">${I.close}</button>
    </div>
    <form data-form="add-special-ed-followup" data-sid="${sid}">
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
      
      <div class="field-group">
        <label class="section-label">🎯 الأهداف</label>
        <div id="manual-goals-container"></div>
        <button type="button" class="btn soft sm" onclick="addManualGoalField()">
          ${I.plus}<span>إضافة هدف</span>
        </button>
      </div>
      
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
      
      <div class="field">
        <label>ملاحظات (اختياري)</label>
        <textarea name="notes" rows="3"></textarea>
      </div>
      
      <button type="submit" class="btn lg block">
        ${I.check}<span>حفظ المتابعة</span>
      </button>
    </form>
  `, { lg: true });
  
  setTimeout(() => addManualGoalField(), 100);
}

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

'''
    
    app_js_content = app_js_content[:insert_position] + new_function + app_js_content[insert_position:]
    print("✅ Patch 2: Added openSpecialEdFollowupModal and addManualGoalField")
    
    return app_js_content

def main():
    """Main function"""
    print("🚀 Starting patch application...")
    print()
    
    # File paths
    app_js_path = Path("app.js")
    
    if not app_js_path.exists():
        print("❌ Error: app.js not found!")
        return
    
    # Backup original file
    backup_file(app_js_path)
    
    # Read file
    print("📖 Reading app.js...")
    content = read_file(app_js_path)
    
    # Apply patches
    print("🔧 Applying patches...")
    modified_content = apply_patches(content)
    
    # Write modified file
    print("💾 Writing modified app.js...")
    write_file(app_js_path, modified_content)
    
    print()
    print("=" * 60)
    print("✅ All patches applied successfully!")
    print("=" * 60)
    print()
    print("Next steps:")
    print("1. Review the changes in app.js")
    print("2. Test the application")
    print("3. If something went wrong, restore from app.js.backup")
    print()

if __name__ == "__main__":
    main()
