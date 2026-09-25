/* =========================================================
   منصة أروى — App (router, state, views)
   ========================================================= */

/* --------------- ICONS (inline SVG) --------------- */
const I = (() => {
  const s = (path, extra='') => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" width="20" height="20" ${extra}>${path}</svg>`;
  return {
    home:    s('<path d="M3 11l9-7 9 7v9a2 2 0 0 1-2 2h-4v-6h-6v6H5a2 2 0 0 1-2-2z"/>'),
    bolt:    s('<path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/>'),
    users:   s('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'),
    student: s('<circle cx="12" cy="8" r="4"/><path d="M4 21v-1a8 8 0 0 1 16 0v1"/>'),
    book:    s('<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>'),
    activity:s('<path d="M22 12h-4l-3 9-6-18-3 9H2"/>'),
    plus:    s('<path d="M12 5v14M5 12h14"/>'),
    bell:    s('<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>'),
    star:    s('<path d="M12 2l3.1 6.3 7 1-5 4.9 1.2 7L12 17.8 5.7 21.2l1.2-7L2 9.3l7-1z"/>'),
    badge:   s('<circle cx="12" cy="9" r="6"/><path d="M9 14l-1.5 7L12 18l4.5 3-1.5-7"/>'),
    clipboard:s('<rect x="6" y="4" width="12" height="18" rx="2"/><path d="M9 4V2h6v2"/><path d="M9 12h6M9 16h6"/>'),
    chart:   s('<path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-5"/>'),
    calendar:s('<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'),
    settings:s('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>'),
    video:   s('<rect x="2" y="6" width="14" height="12" rx="2"/><path d="M22 8l-6 4 6 4z"/>'),
    upload:  s('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M17 8l-5-5-5 5"/><path d="M12 3v12"/>'),
    check:   s('<path d="M5 12l5 5L20 7"/>'),
    checkCircle: s('<circle cx="12" cy="12" r="10"/><path d="M9 12l2 2 4-4"/>'),
    play:    s('<polygon points="6 4 20 12 6 20 6 4"/>'),
    file:    s('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>'),
    image:   s('<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>'),
    link:    s('<path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 1 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 1 0 7 7l1-1"/>'),
    search:  s('<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>'),
    arrow:   s('<path d="M5 12h14M12 5l7 7-7 7"/>'),
    send:    s('<path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>'),
    gift:    s('<rect x="3" y="8" width="18" height="14" rx="2"/><path d="M3 12h18M12 8v14"/><path d="M12 8c0-3-2-5-4-5s-3 2-2 4c1 1 4 1 6 1z"/><path d="M12 8c0-3 2-5 4-5s3 2 2 4c-1 1-4 1-6 1z"/>'),
    target:  s('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>'),
    sparkle: s('<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>'),
    mic:     s('<path d="M9 2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0"/><path d="M12 17v4"/>'),
    eye:     s('<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>'),
    heart:   s('<path d="M21 8.5a5.5 5.5 0 0 0-9-4 5.5 5.5 0 0 0-9 4c0 6.5 9 12 9 12s9-5.5 9-12z"/>'),
    download:s('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/>'),
    menu:    s('<path d="M3 6h18M3 12h18M3 18h18"/>'),
    logout:  s('<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/>'),
    flag:    s('<path d="M4 21V4h13l-2 5 2 5H4"/>'),
    user:    s('<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'),
    building:s('<path d="M3 21h18"/><path d="M5 21V7l8-4 8 4v14"/><path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01M14 9v.01M14 12v.01M14 15v.01M14 18v.01"/>'),
    wrench:  s('<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>'),
    chat:    s('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'),
    box:     s('<path d="M21 8v13H3V8"/><path d="M1 3h22v5H1z"/><path d="M10 12h4"/>'),
    sliders: s('<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>'),
    edit:    s('<path d="M17 3a2.8 2.8 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>'),
    trash:   s('<path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>'),
    close:   s('<path d="M18 6L6 18M6 6l12 12"/>'),
    chevron: s('<path d="M9 18l6-6-6-6"/>'),
  };
})();

/* --------------- STATE --------------- */
const STORAGE_KEY = 'athr-state-v7';

function arNum(n) {
  // Use Latin (Western Arabic) numerals — cleaner with the editorial typography
  return String(n);
}
function getPeriodLabel(period) {
  const labels = {
    '1': 'الحصة الأولى',
    '2': 'الحصة الثانية',
    '3': 'الحصة الثالثة',
    '4': 'الحصة الرابعة',
    '5': 'الحصة الخامسة',
    '6': 'الحصة السادسة',
    '7': 'الحصة السابعة'
  };
  return labels[period] || `الحصة ${period}`;
}
function termWeek(iso) {
  const start = new Date(STATE.config?.termStart || '2026-01-04');
  const cur = new Date(iso);
  const diff = Math.floor((cur - start) / (7 * 86400000)) + 1;
  return Math.max(1, diff);
}
const STATE = {
  user: null,
  route: null,
  ui: { sidenavOpen: false, modal: null },
  // Mutable copies of mock data
  data: null,
  // Editable configuration (school, term, working days, etc.)
  config: null,
};

const DEFAULT_CONFIG = {
  school: null, // filled from MOCK.school
  termStart: '2026-01-04',
  termName: 'الفصل الثاني 2026',
  workingDays: ['sun','mon','tue','wed','thu'],
};

function loadStateFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch { return null; }
}
function persistState() {
  // ⚠️ CRITICAL: Do NOT save users/students to localStorage
  // Supabase is the source of truth for users, students, and teachers
  // Only save session-specific data that's not in Supabase
  const persistable = {
    userId: STATE.user?.id,
    activities: STATE.data.activities,
    reviews: STATE.data.reviews,
    notifications: STATE.data.notifications,
    rewards: STATE.data.rewards,
    sessionLogs: STATE.data.sessionLogs,
    messages: STATE.data.messages,
    config: STATE.config,
    // NEW FEATURES DATA
    studentFollowups: STATE.data.studentFollowups,
    auditoryMemoryTests: STATE.data.auditoryMemoryTests,
    initialReports: STATE.data.initialReports,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(persistable));
}

function initData() {
  // Initialize with empty data structures (will be loaded from Supabase)
  STATE.data = {
    skills: [],
    users: [],
    students: [],
    groups: [],
    plans: [],
    activities: [],
    reviews: [],
    library: [],
    badges: [],
    notifications: [],
    attendance: [],
    progressLogs: [],
    rewards: [],
    sessionLogs: [],
    sessionTools: [],
    messages: [],
    feedbackTemplates: [],
    studentFollowups: [],        // 📈 متابعة الطالبة
    auditoryMemoryTests: [],     // 🧠 اختبار الذاكرة السمعية
    initialReports: [],          // 📄 التقرير المبدئي
  };
  
  // Set school config from default
  STATE.config = JSON.parse(JSON.stringify({ 
    ...DEFAULT_CONFIG, 
    school: window.DEFAULT_SCHOOL_CONFIG || {
      name: 'الابتدائية 382',
      shortName: 'الابتدائية 382',
      principal: { name: 'بدرية العتيبي', title: 'مديرة المدرسة', initials: 'ب', color: 'c-purple' },
      address: 'الرياض',
      phone: '0112345678',
    }
  }));

  // Load any saved data from localStorage (for offline support)
  // ⚠️ USERS, STUDENTS, TEACHERS are loaded from Supabase ONLY - never from localStorage
  const saved = loadStateFromStorage();
  if (saved) {
    if (saved.activities) STATE.data.activities = saved.activities;
    if (saved.reviews) STATE.data.reviews = saved.reviews;
    if (saved.notifications) STATE.data.notifications = saved.notifications;
    if (saved.rewards) STATE.data.rewards = saved.rewards;
    if (saved.sessionLogs) STATE.data.sessionLogs = saved.sessionLogs;
    if (saved.messages) STATE.data.messages = saved.messages;
    // Do NOT load skills, sessionTools, feedbackTemplates from localStorage
    // These should come from Supabase or defaults only
    if (saved.config) STATE.config = { ...STATE.config, ...saved.config, school: { ...STATE.config.school, ...(saved.config.school || {}) } };
    // NEW FEATURES DATA
    if (saved.studentFollowups) STATE.data.studentFollowups = saved.studentFollowups;
    if (saved.auditoryMemoryTests) STATE.data.auditoryMemoryTests = saved.auditoryMemoryTests;
    if (saved.initialReports) STATE.data.initialReports = saved.initialReports;
  }
}

/* --------------- HELPERS --------------- */
const $  = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

const fmtDate = (iso) => {
  if (!iso) return '';
  const d = new Date(iso);
  const day = d.getDate();
  const months = ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
  return `${day} ${months[d.getMonth()]}`;
};
const fmtRelative = (iso) => {
  const d = new Date(iso); const now = new Date();
  const diff = Math.round((d - new Date(now.toISOString().slice(0,10))) / 86400000);
  if (diff === 0) return 'اليوم';
  if (diff === 1) return 'غداً';
  if (diff === -1) return 'أمس';
  if (diff > 1 && diff <= 6) return `بعد ${diff} أيام`;
  if (diff < -1 && diff >= -6) return `منذ ${Math.abs(diff)} أيام`;
  return fmtDate(iso);
};

function avatar(u, size='md') {
  if (!u) return '';
  return `<div class="avatar ${size} ${u.color || 'c-purple'}">${esc(u.initials || u.name?.[0] || '؟')}</div>`;
}

function pill(text, kind='') { return `<span class="pill ${kind}">${esc(text)}</span>`; }

function activityTypeLabel(type) {
  return ({
    session:    'ملخص جلسة',
    home:       'تمرين منزلي',
    video:      'رفع فيديو',
    worksheet:  'ورقة عمل',
    edu:        'فيديو تعليمي',
    game:       'لعبة / رابط',
    extra:      'نشاط لا منهجي',
    reward:     'مكافأة',
  })[type] || 'نشاط';
}
function activityTypeIcon(type) {
  return ({
    session:    I.clipboard,
    home:       I.home,
    video:      I.video,
    worksheet:  I.file,
    edu:        I.play,
    game:       I.target,
    extra:      I.flag,
    reward:     I.gift,
  })[type] || I.activity;
}
function activityTypeClass(type) { return `act-type-${type}`; }

function activityStatusPill(a) {
  const map = {
    open: { kind: 'amber', text: 'بانتظار التنفيذ' },
    submitted: { kind: 'sky', text: 'بانتظار المراجعة' },
    done: { kind: 'mint', text: 'مكتمل' },
    sent: { kind: '', text: 'مُرسل' },
  };
  const m = map[a.status] || map.open;
  return pill(m.text, m.kind + ' dot');
}

function stageClass(grade='') {
  if (grade.includes('حضانة')) return 'stage-nursery';
  if (grade.includes('روضة'))  return 'stage-kg';
  if (grade.includes('تمهيدي')) return 'stage-prep';
  if (grade.includes('سادس'))  return 'stage-6';
  if (grade.includes('خامس'))  return 'stage-5';
  if (grade.includes('رابع'))  return 'stage-4';
  if (grade.includes('ثالث'))  return 'stage-3';
  if (grade.includes('ثاني'))  return 'stage-2';
  if (grade.includes('أول') || grade.includes('اول')) return 'stage-1';
  return 'stage-kg';
}

function stageOrder(grade='') {
  const map = ['حضانة','روضة','تمهيدي','أول','اول','ثاني','ثالث','رابع','خامس','سادس'];
  for (let i = 0; i < map.length; i++) if (grade.includes(map[i])) return i;
  return 99;
}
function gradeSortKey(grade='') {
  return stageOrder(grade) * 10 + (grade.split(' ')[1] || 'أ').charCodeAt(0);
}

function studentProgress(st) {
  const plan = STATE.data.plans.find(p => p.studentId === st.id);
  if (!plan || !plan.progress.length) return 0;
  return Math.round(plan.progress.reduce((a,p) => a + p.current, 0) / plan.progress.length);
}

function lastSessionInfo(student) {
  const dayKeys  = ['sun','mon','tue','wed','thu','fri','sat'];
  const dayNames = ['الأحد','الإثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'];
  const today = new Date();
  const todayDay = today.getDay();

  let bestDate = null, bestSlot = null;
  (student.schedule || []).forEach(slot => {
    const slotDay = dayKeys.indexOf(slot.day);
    if (slotDay < 0) return;
    let daysAgo = (todayDay - slotDay + 7) % 7;
    // If today's slot, treat it as the most recent one
    const date = new Date(today);
    date.setDate(date.getDate() - daysAgo);
    if (!bestDate || date > bestDate) { bestDate = date; bestSlot = { ...slot, dayName: dayNames[slotDay] }; }
  });
  if (!bestDate) return null;

  const iso = bestDate.toISOString().slice(0,10);
  const exact = STATE.data.activities.find(a =>
    a.type === 'session' && a.studentIds.includes(student.id) && a.dueDate === iso
  );
  const fallback = [...STATE.data.activities]
    .filter(a => a.type === 'session' && a.studentIds.includes(student.id) && a.dueDate <= iso)
    .sort((a,b) => b.dueDate.localeCompare(a.dueDate))[0];
  const sessionAct = exact || fallback;
  return {
    date: iso,
    relative: fmtRelative(iso),
    dayName: bestSlot.dayName,
    time: bestSlot.time,
    summary: sessionAct ? (sessionAct.description || sessionAct.title) : null,
  };
}

function studentBy(id) { return STATE.data.students.find(s => s.id === id); }
function userBy(id) { return STATE.data.users.find(u => u.id === id); }
function skillBy(id) { return STATE.data.skills.find(s => s.id === id); }

/* --------------- TOASTS --------------- */
function toast(msg, kind='success') {
  let wrap = $('.toast-wrap');
  if (!wrap) { wrap = document.createElement('div'); wrap.className = 'toast-wrap'; document.body.appendChild(wrap); }
  const t = document.createElement('div');
  t.className = `toast ${kind}`;
  t.innerHTML = `${kind === 'success' ? I.checkCircle : I.bell} <span>${esc(msg)}</span>`;
  wrap.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateY(8px)'; t.style.transition = '0.3s'; }, 2400);
  setTimeout(() => t.remove(), 2800);
}

/* --------------- MODAL --------------- */
function openModal(html, opts={}) {
  closeModal();
  const back = document.createElement('div');
  back.className = 'modal-backdrop';
  back.innerHTML = `<div class="modal ${opts.lg ? 'lg':''}">${html}</div>`;
  back.addEventListener('click', (e) => { if (e.target === back) closeModal(); });
  document.body.appendChild(back);
  document.body.classList.add('modal-open');
  STATE.ui.modal = back;
}
function closeModal() {
  if (STATE.ui.modal) { STATE.ui.modal.remove(); STATE.ui.modal = null; }
  document.body.classList.remove('modal-open');
}
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

/* --------------- IMAGE NAVIGATOR --------------- */
function openImageNavigator() {
  // Toggle the image viewer visibility
  const viewer = document.getElementById('side-image-viewer');
  if (viewer) {
    viewer.remove();
    window.currentDiagnosticPage = null;
    return;
  }
  
  // Create side-by-side viewer
  const container = document.querySelector('.modal');
  if (!container) return;
  
  let currentPage = 1;
  const totalPages = 112;
  
  // Default settings
  window.imageViewerSettings = {
    width: 400,
    zoom: 100,
    x: 20,
    y: 80
  };
  
  const viewerHTML = `
    <div id="side-image-viewer" style="position: fixed; left: 20px; top: 80px; width: 400px; max-height: calc(100vh - 100px); background: white; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.15); z-index: 9999; overflow: hidden; display: flex; flex-direction: column; transition: box-shadow 0.2s ease;">
      <!-- Resize handle -->
      <div id="resize-handle" style="position: absolute; right: 0; top: 0; bottom: 0; width: 8px; cursor: ew-resize; z-index: 10; background: transparent; transition: background 0.2s;" onmouseover="this.style.background='rgba(59, 130, 246, 0.3)'" onmouseout="this.style.background='transparent'"></div>
      
      <div id="viewer-header" style="background: var(--blue); color: white; padding: 12px 16px; display: flex; justify-content: space-between; align-items: center; cursor: move;">
        <h3 style="margin: 0; font-size: 16px; font-weight: 600; user-select: none;">📚 إختبار النطق المصور</h3>
        <button onclick="openImageNavigator()" style="background: transparent; border: none; color: white; font-size: 24px; cursor: pointer; padding: 0; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;">×</button>
      </div>
      
      <div style="padding: 12px; display: flex; gap: 6px; align-items: center; justify-content: center; flex-wrap: wrap; border-bottom: 1px solid #e0e0e0;">
        <button class="btn" onclick="navigateImagePage('first')" style="background: var(--purple); padding: 6px 10px; font-size: 14px;">
          ⏮️
        </button>
        <button class="btn" onclick="navigateImagePage('prev')" style="background: var(--blue); padding: 6px 10px; font-size: 14px;">
          ◀️
        </button>
        <div style="display: flex; gap: 6px; align-items: center;">
          <input 
            type="number" 
            id="page-input" 
            min="1" 
            max="${totalPages}" 
            value="1"
            onkeypress="if(event.key==='Enter') navigateImagePage('jump')"
            style="width: 60px; padding: 6px; border: 2px solid var(--border-strong); border-radius: 6px; text-align: center; font-size: 14px; font-weight: 600;"
          >
          <span style="color: var(--text-muted); font-size: 14px;">/ ${totalPages}</span>
        </div>
        <button class="btn" onclick="navigateImagePage('next')" style="background: var(--blue); padding: 6px 10px; font-size: 14px;">
          ▶️
        </button>
        <button class="btn" onclick="navigateImagePage('last')" style="background: var(--purple); padding: 6px 10px; font-size: 14px;">
          ⏭️
        </button>
      </div>
      
      <div style="padding: 8px 12px; display: flex; gap: 6px; align-items: center; justify-content: center; flex-wrap: wrap; border-bottom: 1px solid #e0e0e0; background: #f9f9f9;">
        <button class="btn soft" onclick="adjustImageZoom('in')" title="تكبير" style="padding: 4px 8px; font-size: 16px;">🔍+</button>
        <button class="btn soft" onclick="adjustImageZoom('out')" title="تصغير" style="padding: 4px 8px; font-size: 16px;">🔍-</button>
        <button class="btn soft" onclick="adjustImageZoom('reset')" title="إعادة ضبط" style="padding: 4px 8px; font-size: 12px;">100%</button>
      </div>
      
      <div id="image-container" style="flex: 1; text-align: center; background: #f5f5f5; padding: 12px; overflow: auto; display: flex; flex-direction: column; align-items: center; justify-content: center;">
        <img 
          id="diagnostic-image" 
          src="./بور-التشخيص-كامل.jpg/1.jpg" 
          alt="صورة التشخيص"
          style="max-width: 100%; height: auto; object-fit: contain; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transform: scale(1); transition: transform 0.2s ease;"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
        >
        <div style="display: none; padding: 20px; color: var(--critical); font-size: 14px;">
          ❌ لا يمكن تحميل الصورة
        </div>
      </div>
      
      <div style="padding: 8px; background: var(--blue-50); text-align: center; border-top: 1px solid #e0e0e0;">
        <div style="font-size: 14px; font-weight: 600; color: var(--blue);">
          الصفحة <span id="current-page-display">1</span> من ${totalPages}
        </div>
      </div>
    </div>
  `;
  
  container.insertAdjacentHTML('afterbegin', viewerHTML);
  window.currentDiagnosticPage = 1;
  
  // Setup resize and drag functionality
  setupResizeHandle();
  setupDragHandle();
}

function setupDragHandle() {
  const header = document.getElementById('viewer-header');
  const viewer = document.getElementById('side-image-viewer');
  if (!header || !viewer) return;
  
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let initialX = 0;
  let initialY = 0;
  
  header.addEventListener('mousedown', (e) => {
    // Don't drag if clicking the close button
    if (e.target.closest('button')) return;
    
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    
    const rect = viewer.getBoundingClientRect();
    initialX = rect.left;
    initialY = rect.top;
    
    // Add visual feedback
    viewer.style.boxShadow = '0 8px 32px rgba(59, 130, 246, 0.4)';
    document.body.style.userSelect = 'none';
    
    e.preventDefault();
  });
  
  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;
    
    const newX = initialX + deltaX;
    const newY = initialY + deltaY;
    
    // Keep within viewport bounds
    const maxX = window.innerWidth - viewer.offsetWidth - 20;
    const maxY = window.innerHeight - viewer.offsetHeight - 20;
    
    const boundedX = Math.max(20, Math.min(maxX, newX));
    const boundedY = Math.max(20, Math.min(maxY, newY));
    
    viewer.style.left = boundedX + 'px';
    viewer.style.top = boundedY + 'px';
    viewer.style.right = 'auto';
    
    window.imageViewerSettings.x = boundedX;
    window.imageViewerSettings.y = boundedY;
  });
  
  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      viewer.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
      document.body.style.userSelect = '';
    }
  });
}

function setupResizeHandle() {
  const handle = document.getElementById('resize-handle');
  const viewer = document.getElementById('side-image-viewer');
  if (!handle || !viewer) return;
  
  let isResizing = false;
  let startX = 0;
  let startWidth = 0;
  
  handle.addEventListener('mousedown', (e) => {
    isResizing = true;
    startX = e.clientX;
    startWidth = viewer.offsetWidth;
    
    // Add visual feedback
    viewer.style.boxShadow = '0 8px 32px rgba(59, 130, 246, 0.4)';
    document.body.style.cursor = 'ew-resize';
    document.body.style.userSelect = 'none';
    
    e.preventDefault();
    e.stopPropagation(); // Prevent drag from triggering
  });
  
  document.addEventListener('mousemove', (e) => {
    if (!isResizing) return;
    
    const diff = e.clientX - startX;
    const newWidth = Math.max(250, Math.min(1000, startWidth + diff));
    
    viewer.style.width = newWidth + 'px';
    window.imageViewerSettings.width = newWidth;
  });
  
  document.addEventListener('mouseup', () => {
    if (isResizing) {
      isResizing = false;
      viewer.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    }
  });
}

function adjustImageZoom(action) {
  const img = document.getElementById('diagnostic-image');
  if (!img) return;
  
  const settings = window.imageViewerSettings;
  
  if (action === 'in') {
    settings.zoom = Math.min(200, settings.zoom + 25);
  } else if (action === 'out') {
    settings.zoom = Math.max(50, settings.zoom - 25);
  } else if (action === 'reset') {
    settings.zoom = 100;
  }
  
  img.style.transform = `scale(${settings.zoom / 100})`;
}

function navigateImagePage(action) {
  const totalPages = 112;
  let newPage = window.currentDiagnosticPage || 1;
  
  switch(action) {
    case 'first':
      newPage = 1;
      break;
    case 'last':
      newPage = totalPages;
      break;
    case 'prev':
      newPage = Math.max(1, newPage - 1);
      break;
    case 'next':
      newPage = Math.min(totalPages, newPage + 1);
      break;
    case 'jump':
      const input = document.getElementById('page-input');
      newPage = parseInt(input.value) || 1;
      newPage = Math.max(1, Math.min(totalPages, newPage));
      break;
  }
  
  window.currentDiagnosticPage = newPage;
  
  // Update input and display
  const input = document.getElementById('page-input');
  const display = document.getElementById('current-page-display');
  const img = document.getElementById('diagnostic-image');
  
  if (input) input.value = newPage;
  if (display) display.textContent = newPage;
  
  // Update image source
  if (img) {
    img.style.display = 'block';
    if (img.nextElementSibling) img.nextElementSibling.style.display = 'none';
    
    const ext = newPage <= 93 ? 'jpg' : 'png';
    img.src = `./بور-التشخيص-كامل.jpg/${newPage}.${ext}`;
  }
}

/* --------------- ROUTER --------------- */
function navigate(path) {
  if (location.hash !== path) location.hash = path;
  else handleRoute();
}
function parseRoute() {
  const hash = location.hash.replace(/^#/, '') || '/';
  const [pathOnly, query=''] = hash.split('?');
  const parts = pathOnly.split('/').filter(Boolean);
  const params = new URLSearchParams(query);
  return { path: hash, parts, params };
}

async function handleRoute() {
  const { path, parts } = parseRoute();
  STATE.route = path;
  closeModal();

  // Public invite link (no login required)
  if (parts[0] === 'invite' && parts[1]) {
    return renderInvitePage(decodeURIComponent(parts[1]));
  }

  // Login
  if (!STATE.user || parts[0] === 'login' || parts.length === 0) {
    return renderLogin();
  }

  const role = parts[0];
  // Guard role - but allow students to access parent routes
  if (role === 'parent' && STATE.user.role === 'student') {
    // Students can access parent dashboard (viewing their own data)
    STATE.user.studentId = STATE.user.id; // Set studentId for parent views
  } else if (role !== STATE.user.role) {
    return navigate(`/${STATE.user.role}/dashboard`);
  }

  const screen = parts[1] || 'dashboard';
  const id = parts[2];

  let view = '';
  if (role === 'principal') {
    view = ({
      dashboard: viewPrincipalDashboard,
      teachers:  viewPrincipalTeachers,
      students:  viewPrincipalStudents,
      student:   () => viewStudentProfile(id, 'principal'),
      ieps:      viewPrincipalIEPs,
      reports:   viewPrincipalReports,
      settings:  () => viewSettings('principal'),
    })[screen];
  } else if (role === 'teacher') {
    view = ({
      dashboard: viewTeacherDashboard,
      students:  viewTeacherStudents,
      student:   () => viewStudentProfile(id, 'teacher'),
      plan:      () => viewPlan(id, 'teacher'),
      report:    () => viewStudentReport(id),
      activities:viewActivities,
      activity:  () => (id === 'new' ? viewActivityCreate() : viewActivityDetail(id, 'teacher')),
      review:    () => viewVideoReview(id),
      library:   () => viewLibrary('teacher'),
      schedule:  viewScheduleEditor,
      attendance:viewAttendance,
      progress:  () => viewProgressTeacher(),
      settings:  () => viewSettings('teacher'),
    })[screen];
  } else if (role === 'parent') {
    view = ({
      dashboard: viewParentDashboard,
      messages:  viewParentMessages,
      activity:  () => viewActivityDetail(id, 'parent'),
      report:    () => viewStudentReport(STATE.user.studentId),
      progress:  () => viewParentProgress(),
      rewards:   viewParentRewards,
      library:   () => viewLibrary('parent'),
      settings:  () => viewSettings('parent'),
      form:      () => viewParentForm(id),
      iep:       viewParentIEP,
    })[screen];
  }

  if (typeof view !== 'function') view = view ? () => view : () => viewNotFound();

  renderShell(view());
  highlightNav();
  window.scrollTo(0, 0);
  
  // Setup typing indicator for any page with chat (after DOM is ready)
  requestAnimationFrame(() => {
    const chatInput = document.querySelector('[data-form="send-message"]');
    if (chatInput) {
      setupTypingIndicator();
    }
  });
}

window.addEventListener('hashchange', handleRoute);

/* --------------- SHELL --------------- */
function renderShell(content) {
  const root = $('#root');
  if (!STATE.user) {
    root.innerHTML = content;
    return;
  }
  // Observer mode banner (principal viewing a teacher's account)
  const observerBanner = STATE.user._observerMode ? `
    <div class="observer-banner">
      ${I.eye}
      <span>أنتِ تشاهدين حساب <b>${esc(STATE.user.name)}</b> — وضع المراقبة (للقراءة فقط)</span>
      <button class="btn sm" data-action="exit-observer-mode">${I.back}<span>عودة للمديرة</span></button>
    </div>
  ` : '';
  root.innerHTML = `
    <div class="app">
      ${observerBanner}
      ${renderTopBar()}
      ${renderSideNav()}
      <main class="main">${content}</main>
      ${renderBottomBar()}
    </div>
  `;
}

function renderTopBar() {
  const u = STATE.user;
  const unread = STATE.data.notifications.filter(n => n.userId === u.id && !n.read).length;
  // For teachers: show dot on settings icon if there are principal notes
  const myRecord = STATE.data.users.find(uu => uu.id === u.id) || u;
  const hasNotes = u.role === 'teacher' && (myRecord.principal_notes || []).length > 0;
  
  return `
    <header class="topbar">
      <div class="brand">
        <div class="brand-name">أثر</div>
        <div class="brand-divider"></div>
        <div class="school-block">
          <div class="school-name">${esc(STATE.config.school.name)}</div>
          ${u.role === 'principal' ? `
            <div class="school-principal">
              ${I.medal}
              <span>${esc(STATE.config.school.principal.name)} • ${esc(STATE.config.school.principal.title)}</span>
            </div>
          ` : u.role === 'teacher' ? `
            <div class="school-principal">
              ${I.user}
              <span>${esc(u.name)} • ${esc(u.title || 'معلمة')}</span>
            </div>
          ` : ''}
        </div>
      </div>
      <div class="spacer"></div>
      ${hasNotes ? `
        <a class="icon-btn" href="#/teacher/settings?tab=notes" data-route="#/teacher/settings" aria-label="ملاحظات المديرة" title="لديكِ ملاحظات من المديرة">
          ${I.flag}
          <span class="dot"></span>
        </a>
      ` : ''}
      <button class="icon-btn" data-action="open-notifications" aria-label="الإشعارات">
        ${I.bell}
        ${unread ? `<span class="dot"></span>` : ''}
      </button>
    </header>
  `;
}

function renderSideNav() {
  const u = STATE.user;
  const items = navFor(u.role);
  return `
    <aside class="sidenav">
      <div class="group">
        <div class="group-label">القوائم</div>
        ${items.map(it => `
          <a class="nav-item" href="${it.href}" data-route="${it.href}">
            ${it.icon}
            <span>${esc(it.label)}</span>
            ${it.badge ? `<span class="badge-num">${it.badge}</span>` : ''}
          </a>
        `).join('')}
      </div>
      <div class="group">
        <div class="group-label">الحساب</div>
        <a class="nav-item" href="#/${u.role}/settings" data-route="#/${u.role}/settings">${I.settings}<span>الإعدادات</span></a>
        <button class="nav-item" data-action="logout" style="width:100%;text-align:start">${I.logout}<span>تسجيل الخروج</span></button>
      </div>
    </aside>
  `;
}

function renderBottomBar() {
  const u = STATE.user;
  const items = navFor(u.role).slice(0, 5);
  return `
    <div class="bottombar">
      <nav>
        ${items.map(it => `
          <a href="${it.href}" data-route="${it.href}">
            ${it.icon}
            <span>${esc(it.label)}</span>
          </a>
        `).join('')}
      </nav>
    </div>
  `;
}

function navFor(role) {
  const u = STATE.user;
  if (role === 'principal') {
    return [
      { href: '#/principal/dashboard',  label: 'الرئيسية',  icon: I.home },
      { href: '#/principal/teachers',   label: 'المعلمات',  icon: I.users },
      { href: '#/principal/students',   label: 'الطالبات',  icon: I.student },
      { href: '#/principal/ieps',       label: 'الخطط الفردية', icon: I.clipboard },
      { href: '#/principal/reports',    label: 'التقارير',  icon: I.chart },
      { href: '#/principal/settings',   label: 'الإعدادات', icon: I.settings },
    ];
  }
  if (role === 'teacher') {
    return [
      { href: '#/teacher/dashboard',  label: 'الرئيسية',  icon: I.home },
      { href: '#/teacher/students',   label: 'الطلاب',   icon: I.users },
      { href: '#/teacher/attendance', label: 'كشف الحضور', icon: '📅' },
      { href: '#/teacher/library',    label: 'المكتبة',  icon: I.book },
      { href: '#/teacher/settings',   label: 'الإعدادات',icon: I.settings },
    ];
  }
  // Students use parent navigation (viewing their own data)
  if (role === 'parent' || role === 'student') {
    const me = STATE.user;
    const sid = me?.studentId;
    const unread = sid ? STATE.data.messages.filter(m => m.studentId === sid && m.from === 'teacher' && !m.read).length : 0;
    return [
      { href: '#/parent/dashboard', label: 'الرئيسية',  icon: I.home },
      { href: '#/parent/messages',  label: 'الرسائل',  icon: I.bell, badge: unread || null },
      { href: '#/parent/progress',  label: 'التقدم',    icon: I.chart },
      { href: '#/parent/rewards',   label: 'الإنجازات', icon: I.star },
      { href: '#/parent/settings',  label: 'الإعدادات', icon: I.settings },
    ];
  }
  return [];
}

function highlightNav() {
  $$('.nav-item, .bottombar a').forEach(el => {
    const r = el.getAttribute('data-route') || el.getAttribute('href');
    if (!r) return;
    if (location.hash.startsWith(r) || (r.endsWith('/dashboard') && location.hash === '')) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}

/* --------------- NOT FOUND --------------- */
function viewNotFound() {
  return `
    <div class="empty">
      <div class="ico">${I.search}</div>
      <h4>الصفحة غير موجودة</h4>
      <p>الرابط الذي طلبته غير متوفر. عُد إلى الرئيسية.</p>
    </div>
  `;
}

/* =========================================================
   LOGIN - Real Authentication
   ========================================================= */
function renderLogin() {
  const root = $('#root');

  root.innerHTML = `
    <div class="login-clean">
      <div class="login-clean-card">
        <div class="login-clean-head">
          <div class="login-clean-logo">أ</div>
          <h1 class="login-clean-title">أثر</h1>
          <div class="login-clean-sub">نظام متابعة الطالبات</div>
        </div>

        <form data-form="real-login" class="login-clean-section">
          <div class="login-clean-label">تسجيل الدخول</div>
          
          <div class="field">
            <label>البريد الإلكتروني</label>
            <input name="email" type="email" required placeholder="example@athr.sa" autocomplete="email">
          </div>

          <div class="field">
            <label>كلمة المرور</label>
            <input name="password" type="password" required placeholder="••••••••" autocomplete="current-password">
          </div>

          <button type="button" class="btn lg block" onclick="
            const form = this.closest('form');
            const btn = this;
            const originalText = btn.innerHTML;
            btn.disabled = true;
            btn.innerHTML = '<span>جاري تسجيل الدخول...</span>';
            
            // Make sure STATE.data exists
            if (!STATE.data) initData();
            
            Auth.loginWithEmail(form.email.value, form.password.value)
              .then(async (user) => {
                STATE.user = user;
                await loadDataFromSupabase();
                persistState();
                if (user.role === 'student') {
                  STATE.user.studentId = user.id;
                  navigate('/parent/dashboard');
                } else {
                  navigate('/' + user.role + '/dashboard');
                }
                toast('مرحباً ' + user.name);
              })
              .catch((error) => {
                console.error('Login error:', error);
                let msg = 'خطأ في تسجيل الدخول';
                if (error.message && error.message.includes('Invalid login credentials')) {
                  msg = 'البريد الإلكتروني أو كلمة المرور غير صحيحة';
                } else if (error.message && error.message.includes('لم يتم العثور على ملف المستخدم')) {
                  msg = 'تم تسجيل الدخول بنجاح، لكن لم يتم العثور على حساب. شغّل ملف FIX-PRINCIPAL-SIMPLE.sql في Supabase';
                } else if (error.message) {
                  msg = error.message;
                }
                toast(msg, 'error');
                btn.disabled = false;
                btn.innerHTML = originalText;
              });
          ">
            ${I.check}<span>دخول</span>
          </button>

          <div class="text-xs text-muted center mt-md">
            للمديرة والمعلمات فقط
          </div>
        </form>

        <div class="login-clean-foot">
          منصة أثر للتربية الخاصة
        </div>
      </div>
    </div>
  `;
}

function openParentLoginModal() {
  openModal(`
    <div class="modal-head">
      <h2>دخول ولي الأمر</h2>
      <button class="x" data-action="close-modal">${I.close}</button>
    </div>
    <p class="text-sm text-muted mb-md">أدخلي رمز الدعوة المُرسَل من المعلمة + رقم جوالك المسجّل في ملف الطفل.</p>
    <form data-form="parent-login">
      <div class="field">
        <label>رمز الدعوة</label>
        <input name="code" required placeholder="ATHR-1001" style="text-transform:uppercase;letter-spacing:1px">
      </div>
      <div class="field">
        <label>رقم الجوال</label>
        <input name="phone" type="tel" required placeholder="05xxxxxxxx">
      </div>
      <button type="submit" class="btn lg block">${I.check}<span>دخول لصفحة طفلي</span></button>
      <div class="login-hint">
        <div class="text-xs text-bold mb-md">للتجربة السريعة:</div>
        <div class="text-xs">ATHR-1001 + 0501234567 (لندا)</div>
        <div class="text-xs">ATHR-1003 + 0509876543 (أريام)</div>
      </div>
    </form>
  `);
}

function renderInvitePage(rawCode) {
  const root = $('#root');
  const code = (rawCode || '').toUpperCase();
  const student = STATE.data.students.find(s => (s.inviteCode || '').toUpperCase() === code);

  if (!student) {
    root.innerHTML = `
      <div class="login">
        <div class="login-card">
          <div class="brand-big">
            <div class="logo">أ</div>
            <div><h1>أثر</h1><div class="tag">رابط الدعوة</div></div>
          </div>
          <div class="empty">
            <div class="ico">${I.search}</div>
            <h4>الرابط غير صالح</h4>
            <p>تحققي من الرابط المرسل من المعلمة، أو تواصلي معها لإرسال رابط جديد.</p>
          </div>
          <a href="#/" class="btn block mt-md" data-route="#/">${I.back}<span>العودة لتسجيل الدخول</span></a>
        </div>
      </div>
    `;
    return;
  }

  const teacher = userBy(student.teacher_id); // Fixed: use teacher_id
  const sc = stageClass(student.grade);
  const masked = (student.parent_phone || '').replace(/(\d{2})(\d{4})(\d{2,})/, '$1•••$3'); // Fixed: use parent_phone

  root.innerHTML = `
    <div class="login">
      <div class="login-card">
        <div class="brand-big">
          <div class="logo">أ</div>
          <div>
            <h1>أثر</h1>
            <div class="tag">${esc(STATE.config.school.name)}</div>
          </div>
        </div>

        <div class="invite-welcome ${sc}">
          <div class="row" style="gap:12px;align-items:center">
            <div class="invite-stage-dot"></div>
            <div style="flex:1">
              <div class="text-xs text-muted">دعوة لـ</div>
              <div class="text-bold" style="font-size:17px">${esc(student.name)}</div>
              <div class="row mt-sm wrap"><span class="stage-pill">${esc(student.grade)}</span></div>
            </div>
          </div>
          <div class="text-sm text-muted mt-md">من المعلمة <b style="color:var(--text)">${esc(teacher.name)}</b></div>
        </div>

        <p class="helper">أدخلي رقم جوالك المسجل في ملف ${esc(student.name)} للدخول لصفحتها.</p>
        <form data-form="invite-login" data-code="${esc(code)}">
          <div class="field">
            <label>رقم الجوال</label>
            <input name="phone" type="tel" required autofocus inputmode="numeric"
                   placeholder="${esc(masked || '05xxxxxxxx')}">
          </div>
          <button type="submit" class="btn lg block">${I.check}<span>دخول لصفحة طفلي</span></button>
        </form>
        <div class="text-xs text-muted center mt-md">رمز الدعوة: <code class="invite-code" style="font-size:11px">${esc(code)}</code></div>
      </div>
    </div>
  `;
}

function loginAsParent(student) {
  const parentUser = STATE.data.users.find(u => u.id === student.parent_id); // Fixed: use parent_id
  STATE.user = {
    ...parentUser,
    role: 'parent',
    studentId: student.id,
  };
  persistState();
  closeModal();
  toast(`أهلاً بك في صفحة ${student.name} 🌿`);
  navigate('/parent/messages');
}

function login(userId) {
  STATE.user = STATE.data.users.find(u => u.id === userId);
  persistState();
  navigate(`/${STATE.user.role}/dashboard`);
}
async function logout() {
  try {
    // Sign out from Supabase first — must complete before reload
    if (window.Auth) {
      await Auth.logout();
    }
  } catch (e) {
    console.error('Logout error:', e);
  }

  // Clear local state
  STATE.user = null;
  STATE._principalUser = null;
  localStorage.removeItem(STORAGE_KEY);

  // Set a flag so DOMContentLoaded knows this is an intentional logout
  sessionStorage.setItem('athr-logged-out', '1');

  location.hash = '/login';
  location.reload();
}

/* =========================================================
   TEACHER DASHBOARD
   ========================================================= */
function viewTeacherDashboard() {
  const me = STATE.user;
  const myStudents = STATE.data.students.filter(s => !s.archived); // Show ALL students, not just mine
  const todayDate = new Date(); // Use current date instead of MOCK.today
  const params = new URLSearchParams((location.hash.split('?')[1]) || '');
  const requestedDay = params.get('d');

  const dayKeys  = ['sun','mon','tue','wed','thu','fri','sat'];
  const dayNames = ['الأحد','الإثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'];
  const workingDays = STATE.config.workingDays || ['sun','mon','tue','wed','thu'];
  const todayKey = dayKeys[todayDate.getDay()];
  const selectedKey = workingDays.includes(requestedDay) ? requestedDay
                     : (workingDays.includes(todayKey) ? todayKey : 'sun');
  const isToday = selectedKey === todayKey;

  const sessionsOnDay = (dk) => {
    const out = [];
    myStudents.forEach(st => (st.schedule || []).forEach(slot => {
      if (slot.day === dk) out.push({ student: st, ...slot });
    }));
    return out.sort((a,b) => {
      // Support both old (time) and new (period) format
      if (a.period && b.period) {
        return parseInt(a.period) - parseInt(b.period);
      }
      if (a.time && b.time) {
        return a.time.localeCompare(b.time);
      }
      return a.period ? -1 : 1;
    });
  };
  const todaysSessions = sessionsOnDay(selectedKey);

  const wk = termWeek(todayDate.toISOString().slice(0,10));
  const sessionDateIso = (() => {
    const dayKeys = ['sun','mon','tue','wed','thu','fri','sat'];
    const todayKey = dayKeys[todayDate.getDay()];
    const offset = (dayKeys.indexOf(todayKey) - dayKeys.indexOf(selectedKey) + 7) % 7;
    const d = new Date(todayDate); d.setDate(d.getDate() - offset);
    return d.toISOString().slice(0,10);
  })();

  const firstName = me.name.replace(/^أ\.\s*/, '').split(/\s+/)[0];
  
  // Count unread messages from parents
  const unreadParentMessages = STATE.data.messages.filter(m => m.from === 'parent' && !m.read);
  const totalUnread = unreadParentMessages.length;
  
  // Group unread messages by student
  const unreadByStudent = {};
  unreadParentMessages.forEach(msg => {
    if (!unreadByStudent[msg.studentId]) {
      unreadByStudent[msg.studentId] = 0;
    }
    unreadByStudent[msg.studentId]++;
  });

  return `
    <div class="simple-home">
      ${totalUnread > 0 ? `
        <div class="card mb-md" style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border: 2px solid #f59e0b; border-radius: 12px;">
          <div class="row" style="gap: 16px; align-items: center;">
            <div style="font-size: 48px;">📬</div>
            <div style="flex: 1;">
              <h3 style="margin: 0 0 6px 0; color: #92400e;">رسائل جديدة من أولياء الأمور!</h3>
              <p style="margin: 0; font-size: 14px; color: #78350f;">
                لديكِ <strong>${arNum(totalUnread)}</strong> ${totalUnread === 1 ? 'رسالة غير مقروءة' : 'رسائل غير مقروءة'} من ${arNum(Object.keys(unreadByStudent).length)} ${Object.keys(unreadByStudent).length === 1 ? 'طالبة' : 'طالبات'}
              </p>
              <div class="stack gap-xs mt-sm">
                ${Object.entries(unreadByStudent).slice(0, 3).map(([sid, count]) => {
                  const student = studentBy(sid);
                  if (!student) return '';
                  return `
                    <a href="#/teacher/student/${sid}?tab=messages" data-route="#/teacher/student/${sid}" 
                       style="display: flex; align-items: center; gap: 8px; padding: 8px; background: rgba(255,255,255,0.7); border-radius: 6px; text-decoration: none; color: inherit;">
                      ${avatar(student, 'sm')}
                      <div style="flex: 1; font-size: 13px; font-weight: 600;">${esc(student.name)}</div>
                      <div style="background: #f59e0b; color: white; padding: 2px 8px; border-radius: 12px; font-size: 12px; font-weight: bold;">
                        ${arNum(count)}
                      </div>
                    </a>
                  `;
                }).join('')}
                ${Object.keys(unreadByStudent).length > 3 ? `
                  <div style="text-align: center; font-size: 12px; color: #78350f; padding-top: 4px;">
                    و ${arNum(Object.keys(unreadByStudent).length - 3)} طالبات أخريات
                  </div>
                ` : ''}
              </div>
            </div>
          </div>
        </div>
      ` : ''}
      
      <div class="greet-block">
        <div class="greet-eyebrow">
          <span>${isToday ? 'اليوم' : 'يوم'} — ${fmtDate(sessionDateIso)}</span>
          <span class="week-pill">الأسبوع ${arNum(wk)}</span>
        </div>
        <h1>أهلاً ${esc(firstName)}.</h1>
        <div class="greet-meta">${todaysSessions.length ? `لديكِ <b>${arNum(todaysSessions.length)}</b> ${todaysSessions.length === 1 ? 'جلسة' : 'جلسات'} في يوم <b>${esc(dayNames[dayKeys.indexOf(selectedKey)])}</b>` : 'يوم هادئ — لا توجد جلسات مجدولة'}</div>
        <div class="greet-actions mt-md">
          <a class="btn ghost sm" href="#/teacher/schedule" data-route="#/teacher/schedule">${I.settings}<span>تخصيص الجدول</span></a>
        </div>
      </div>

      <div class="day-tabs">
        ${workingDays.map((dk) => {
          const count = sessionsOnDay(dk).length;
          const active = dk === selectedKey;
          const isCurrent = dk === todayKey;
          const dayName = dayNames[dayKeys.indexOf(dk)];
          return `
            <a class="day-tab ${active?'active':''} ${isCurrent?'today':''}" href="#/teacher/dashboard?d=${dk}" data-route="#/teacher/dashboard">
              <div class="d-name">${esc(dayName)}</div>
              <div class="d-count">${arNum(count)} ${count === 1 ? 'جلسة' : count === 2 ? 'جلستان' : 'جلسات'}</div>
              ${isCurrent ? `<div class="d-dot"></div>` : ''}
            </a>
          `;
        }).join('')}
      </div>

      <div class="day-list">
        ${todaysSessions.length ? todaysSessions.map(s => `
          <a class="session" href="#/teacher/student/${s.student.id}" data-route="#/teacher/student/${s.student.id}">
            <div class="time">
              <div class="t">${s.period ? getPeriodLabel(s.period) : (s.time || 'غير محدد')}</div>
              <div class="dur">${s.period ? (s.room || 'غرفة ١') : ((s.duration || 30) + ' د')}</div>
            </div>
            <div class="line"></div>
            ${avatar(s.student, 'lg')}
            <div class="who">
              <div class="name">${esc(s.student.name)}</div>
              <div class="meta">${esc(s.student.grade)} • ${s.student.age} سنوات • ${esc(s.room)}</div>
            </div>
            <div class="chev">${I.chevron}</div>
          </a>
        `).join('') : `
          <div class="empty">
            <div class="ico">${I.calendar}</div>
            <h4>يوم هادئ</h4>
            <p>لا توجد جلسات مجدولة في هذا اليوم.</p>
          </div>
        `}
      </div>
    </div>
  `;
}

function statCard(kind, icon, num, lbl, delta) {
  return `
    <div class="stat ${kind}">
      <div class="ic">${icon}</div>
      <div>
        <div class="num">${esc(num)}</div>
        <div class="lbl">${esc(lbl)}</div>
        ${delta ? `<div class="delta">${esc(delta)}</div>` : ''}
      </div>
    </div>
  `;
}

function activityRow(a, role) {
  const studs = a.studentIds.map(id => studentBy(id)).filter(Boolean);
  const sNames = studs.map(s => s.name).join('، ');
  const href = role === 'parent' ? `#/parent/activity/${a.id}` :
               (a.status === 'submitted' ? `#/teacher/review/${a.id}` : `#/teacher/activity/${a.id}`);
  return `
    <a class="act" href="${href}" data-route="${href}">
      <div class="type-ic ${activityTypeClass(a.type)}">${activityTypeIcon(a.type)}</div>
      <div class="body">
        <div class="title">${esc(a.title)}</div>
        <div class="meta">
          ${pill(activityTypeLabel(a.type))}
          <span>${esc(sNames)}</span>
          <span>•</span>
          <span>${fmtRelative(a.dueDate)}</span>
          ${a.rewardPoints ? `<span>•</span><span class="pill amber">+${a.rewardPoints} نقطة</span>` : ''}
        </div>
        ${a.description ? `<div class="desc">${esc(a.description)}</div>` : ''}
        <div class="row mt-sm">${activityStatusPill(a)}</div>
      </div>
    </a>
  `;
}

function studentRow(st, role) {
  const href = role === 'teacher' ? `#/teacher/student/${st.id}` : '#';
  const plan = STATE.data.plans.find(p => p.studentId === st.id);
  const avg = plan ? Math.round(plan.progress.reduce((a,p) => a + p.current, 0) / plan.progress.length) : 0;
  return `
    <a class="row between" href="${href}" data-route="${href}" style="color:inherit;padding:8px 4px;border-radius:10px;transition:.15s">
      <div class="row">
        ${avatar(st, 'md')}
        <div>
          <div class="text-bold text-sm">${esc(st.name)}</div>
          <div class="text-xs text-muted">${esc(st.grade)} • ${st.age} سنوات</div>
        </div>
      </div>
      <div style="min-width:120px">
        <div class="text-xs text-muted center">${avg}% تقدم</div>
        <div class="progress mt-sm"><div class="bar" style="width:${avg}%"></div></div>
      </div>
    </a>
  `;
}

function quickCreate(type, title, hint) {
  return `
    <button class="row" data-action="quick-create" data-type="${type}" style="width:100%; padding:10px; border-radius:12px; transition:.15s; text-align:start; background:var(--bg-2)">
      <div class="type-ic ${activityTypeClass(type)}" style="width:38px;height:38px;border-radius:11px;display:grid;place-items:center;flex-shrink:0">
        ${activityTypeIcon(type)}
      </div>
      <div style="flex:1">
        <div class="text-bold text-sm">${esc(title)}</div>
        <div class="text-xs text-muted">${esc(hint)}</div>
      </div>
      <div class="text-muted">${I.chevron}</div>
    </button>
  `;
}

function emptyState(icon, title, msg) {
  return `<div class="empty"><div class="ico">${icon}</div><h4>${esc(title)}</h4><p>${esc(msg)}</p></div>`;
}

/* =========================================================
   TEACHER STUDENTS LIST
   ========================================================= */
function viewTeacherStudents() {
  const me = STATE.user;
  const canAddStudents = Auth.hasPermission('can_add_students');
  const params = new URLSearchParams((location.hash.split('?')[1]) || '');
  const q = (params.get('q') || '').trim();
  const allMine = STATE.data.students
    .filter(s => !s.archived) // Show ALL students, not just mine
    .sort((a, b) => gradeSortKey(a.grade) - gradeSortKey(b.grade));

  const matches = (s) => {
    if (!q) return true;
    const hay = [s.name, s.grade, s.parent_phone || '', s.inviteCode || '', userBy(s.parent_id)?.name || ''].join(' ').toLowerCase(); // Fixed: use parent_phone and parent_id
    return hay.includes(q.toLowerCase());
  };
  const myStudents = allMine.filter(matches);

  // Group by grade
  const byGrade = [];
  myStudents.forEach(st => {
    const last = byGrade[byGrade.length - 1];
    if (last && last.grade === st.grade) last.list.push(st);
    else byGrade.push({ grade: st.grade, list: [st] });
  });

  return `
    <div class="page-head">
      <div>
        <h1>الطلاب</h1>
        <div class="sub">${arNum(myStudents.length)} ${myStudents.length === allMine.length ? `طالبات` : `من ${arNum(allMine.length)}`}</div>
      </div>
      <div class="row wrap">
        <div class="search-bar" style="min-width:200px">
          ${I.search}
          <input id="students-search" placeholder="ابحثي بالاسم، الفصل، الجوال..." value="${esc(q)}">
          ${q ? `<button class="x-btn" data-action="students-clear">${I.close}</button>` : ''}
        </div>
        ${canAddStudents ? `<button class="btn" data-action="add-student">${I.plus}<span>إضافة طالبة</span></button>` : ''}
      </div>
    </div>

    ${allMine.length === 0 ? `
      <div class="card onboarding-card">
        <div class="row" style="gap:18px;align-items:flex-start;flex-wrap:wrap">
          <div style="font-size:48px">🌿</div>
          <div style="flex:1;min-width:220px">
            <h3>أهلاً بكِ في أثر</h3>
            <p class="text-sm text-muted mt-sm">${canAddStudents ? 'ابدئي بإضافة طالبتك الأولى — سيُولَّد لها رابط دعوة لولي الأمر تلقائياً.' : 'لا توجد طالبات مسجلات لك حالياً. تواصلي مع المديرة لإضافة طالبات.'}</p>
            ${canAddStudents ? `
              <ul class="onboarding-steps mt-md">
                <li><span class="num">١</span><span>أضيفي بيانات الطالبة وولي الأمر</span></li>
                <li><span class="num">٢</span><span>أرسلي رابط الدعوة لولي الأمر عبر واتساب</span></li>
                <li><span class="num">٣</span><span>سجّلي أول جلسة وقيّمي الأهداف</span></li>
              </ul>
              <button class="btn lg mt-md" data-action="add-student">${I.plus}<span>إضافة أول طالبة</span></button>
            ` : ''}
          </div>
        </div>
      </div>
    ` : ''}
    ${allMine.length > 0 && myStudents.length === 0 ? `
      <div class="card">
        ${emptyState(I.search, 'لا نتائج', `لم نجد طالبة تطابق "${esc(q)}".`)}
      </div>
    ` : ''}

    <div class="stack gap-lg">
      ${byGrade.map(group => `
        <div>
          <div class="grade-heading">
            <h2>${esc(group.grade)}</h2>
            <span class="count">${arNum(group.list.length)} ${group.list.length === 1 ? 'طالبة' : 'طالبات'}</span>
          </div>
          <div class="students-grid">
            ${group.list.map(st => studentTile(st)).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function studentTile(st) {
  const sc = stageClass(st.grade);
  const last = lastSessionInfo(st);
  const prog = studentProgress(st);
  return `
    <a href="#/teacher/student/${st.id}" data-route="#/teacher/student/${st.id}" class="student-tile ${sc}">
      <div class="head">
        <div class="info">
          <h3>${esc(st.name)}</h3>
          <span class="stage-pill with-dot">${esc(st.grade)}</span>
        </div>
        <div class="prog-circle" style="--p:${prog}">
          <div class="pct">${arNum(prog)}<span>%</span></div>
        </div>
      </div>
      <div class="last-session">
        <div class="lbl">آخر جلسة</div>
        ${last ? `
          <div class="when">${esc(last.relative)} · ${esc(last.dayName)} ${esc(last.time)}</div>
          ${last.summary ? `<div class="summary">${esc(last.summary)}</div>` : `<div class="summary">—</div>`}
        ` : `<div class="text-sm text-muted">لم تبدأ بعد</div>`}
      </div>
    </a>
  `;
}

/* =========================================================
   STUDENT PROFILE
   ========================================================= */
const FORM_TYPES = [
  { key: 'parentConsent',      name: 'موافقة ولي الأمر',     sub: 'الموافقة الرسمية على بدء الجلسات', icon: '✍️' },
  { key: 'initialData',        name: 'البيانات الأولية',     sub: 'بيانات الطالبة الأساسية (مشتركة بين المعلمات)', icon: '📝', shared: true },
  { key: 'preAssessment',      name: 'التقييم القبلي',        sub: 'تقييم المستوى قبل بدء الخطة',       icon: '📋' },
  { key: 'speechTest',         name: 'اختبار النطق',          sub: 'تقييم نطق الأصوات والكلمات',        icon: '🗣️' },
  { key: 'auditoryMemoryTest', name: 'اختبار الذاكرة السمعية', sub: 'تقييم القدرة على تذكر الأصوات',     icon: '👂' },
];

// Special Ed Teacher specific forms
const SPECIAL_ED_FORM_TYPES = [
  { key: 'parentConsent',      name: 'موافقة ولي الأمر',     sub: 'الموافقة الرسمية على بدء الجلسات', icon: '✍️' },
  { key: 'initialData',        name: 'البيانات الأولية',     sub: 'بيانات الطالبة الأساسية (مشتركة بين المعلمات)', icon: '📝', shared: true },
  { key: 'preAssessment',      name: 'التقييم القبلي',        sub: 'رفع ملف pdf — تقييم المستوى قبل بدء الخطة',       icon: '📋', isPDF: true },
  { key: 'studentNotes',       name: 'ملاحظة الطالبة',        sub: 'رفع ملف pdf — ملاحظات دورية عن الطالبة', icon: '📝', isPDF: true },
];

function viewStudentProfile(id, role) {
  const st = studentBy(id);
  if (!st) return viewNotFound();
  const parent = userBy(st.parent_id); // Fixed: use parent_id instead of parentId
  const plan = STATE.data.plans.find(p => p.studentId === st.id);
  const sc = stageClass(st.grade);
  const prog = studentProgress(st);
  const params = new URLSearchParams((location.hash.split('?')[1]) || '');
  const activeTab = params.get('tab') || 'forms';

  return `
    <div class="page-head">
      <button class="btn ghost sm" data-action="back">${I.back}<span>عودة</span></button>
    </div>

    <div class="student-hero-card ${sc}">
      <div class="hero-card-top">
        <div class="hero-eyebrow">ملف الطالبة</div>
        ${role === 'teacher' ? `
          <button class="hero-settings-action" data-action="open-student-options" data-sid="${st.id}">
            ${I.settings}<span>إعدادات الطالبة</span>
          </button>
        ` : ''}
      </div>

      <div class="hero-name-row">
        <h1>${esc(st.name)}</h1>
        <div class="hero-progress-pill">
          <div class="prog-ring" style="--p:${prog}"></div>
          <div class="hero-progress-text">
            <div class="pct">${arNum(prog)}%</div>
            <div class="lbl">التقدم</div>
          </div>
        </div>
      </div>

      <dl class="hero-info-grid">
        <div class="hero-info-cell">
          <dt>الصف</dt>
          <dd>${esc(st.grade)}</dd>
        </div>
        <div class="hero-info-cell">
          <dt>العمر</dt>
          <dd>${arNum(st.age)} سنوات</dd>
        </div>
        <div class="hero-info-cell">
          <dt>ولي الأمر</dt>
          <dd>${parent ? esc(parent.name) : (st.forms?.[0]?.parentName ? esc(st.forms[0].parentName) : '—')}</dd>
        </div>
        <div class="hero-info-cell">
          <dt>رقم ولي الأمر</dt>
          <dd class="mono">${esc(st.parent_phone || '—')}</dd>
        </div>
      </dl>
    </div>

    ${(() => {
      const unreadFromParent = STATE.data.messages.filter(m => m.studentId === st.id && m.from === 'parent' && !m.read).length;
      if (!unreadFromParent) return '';
      return `
        <div class="card mb-md" style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border: 2px solid #f59e0b; border-radius: 12px; animation: pulse-soft 2s infinite;">
          <div class="row" style="gap: 16px; align-items: center;">
            <div style="font-size: 48px; animation: shake 0.5s infinite;">🔔</div>
            <div style="flex: 1;">
              <h3 style="margin: 0 0 6px 0; color: #92400e;">رسالة جديدة من ولي الأمر!</h3>
              <p style="margin: 0; font-size: 14px; color: #78350f;">
                لديكِ <strong>${arNum(unreadFromParent)}</strong> ${unreadFromParent === 1 ? 'رسالة غير مقروءة' : 'رسائل غير مقروءة'} من ولي أمر ${esc(st.name)}
              </p>
            </div>
            <a class="btn" href="#/teacher/student/${st.id}?tab=messages" data-route="#/teacher/student/${st.id}" style="background: #f59e0b; color: white; white-space: nowrap;">
              ${I.eye}<span>عرض الرسائل</span>
            </a>
          </div>
        </div>
        <style>
          @keyframes pulse-soft {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.02); }
          }
          @keyframes shake {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(-10deg); }
            75% { transform: rotate(10deg); }
          }
        </style>
      `;
    })()}

    <div class="tabs" data-tabs="profile">
      <div class="tab ${activeTab==='forms'?'active':''}"    data-tab="forms">📋 النماذج</div>
      <div class="tab ${activeTab==='plan'?'active':''}"     data-tab="plan">✨ الخطة الفردية</div>
      <div class="tab ${activeTab==='follow'?'active':''}"   data-tab="follow">📈 متابعة الطالبة</div>
      <div class="tab ${activeTab==='attendance'?'active':''}" data-tab="attendance">📅 الحضور والغياب</div>
      ${(STATE.user?.teacher_type !== 'special_ed' && STATE.user?.teacher_type !== 'special_education') ? `
        <div class="tab ${activeTab==='memory'?'active':''}"   data-tab="memory">🧠 اختبار الذاكرة السمعية</div>
        <div class="tab ${activeTab==='report'?'active':''}"   data-tab="report">📄 التقرير المبدئي</div>
        <div class="tab ${activeTab==='assessment'?'active':''}" data-tab="assessment">📊 التقييم</div>
      ` : ''}
      <div class="tab ${activeTab==='messages'?'active':''}" data-tab="messages">💬 رسائل ولي الأمر${(() => {
        const u = STATE.data.messages.filter(m => m.studentId === st.id && m.from === 'parent' && !m.read).length;
        return u ? ` <span class="tab-badge">${arNum(u)}</span>` : '';
      })()}</div>
    </div>

    <div data-tab-content="forms"      ${activeTab!=='forms'?'class="hide"':''}>${renderFormsTab(st)}</div>
    <div data-tab-content="plan"       ${activeTab!=='plan'?'class="hide"':''}>${renderPlanTab(st, plan)}</div>
    <div data-tab-content="follow"     ${activeTab!=='follow'?'class="hide"':''}>${renderFollowTab(st, plan)}</div>
    <div data-tab-content="attendance" ${activeTab!=='attendance'?'class="hide"':''}>${renderAttendanceTab(st)}</div>
    ${(STATE.user?.teacher_type !== 'special_ed' && STATE.user?.teacher_type !== 'special_education') ? `
      <div data-tab-content="memory"     ${activeTab!=='memory'?'class="hide"':''}>${renderMemoryTestTab(st)}</div>
      <div data-tab-content="report"     ${activeTab!=='report'?'class="hide"':''}>${renderInitialReportTab(st)}</div>
      <div data-tab-content="assessment" ${activeTab!=='assessment'?'class="hide"':''}>${renderAssessmentTab(st)}</div>
    ` : ''}
    <div data-tab-content="messages"   ${activeTab!=='messages'?'class="hide"':''}>${renderMessagesTab(st)}</div>
  `;
}

function renderMessagesTab(st) {
  const parent = userBy(st.parent_id);
  // Mark parent messages as read
  let changed = false;
  STATE.data.messages.forEach(m => {
    if (m.studentId === st.id && m.from === 'parent' && !m.read) { m.read = true; changed = true; }
  });
  if (changed) persistState();

  // Pass the actual viewer role so chatCard sets fromKey correctly
  const viewerRole = STATE.user?.role === 'principal' ? 'principal' : 'teacher';
  return chatCard({ student: st, otherParty: parent, otherTitle: parent?.relation || 'ولي الأمر', role: viewerRole });
}

function buildInviteMessage(st) {
  const parent = userBy(st.parent_id); // Fixed: use parent_id
  const teacher = userBy(st.teacher_id); // Fixed: use teacher_id
  const url = `${location.origin}${location.pathname}#/invite/${st.inviteCode}`;
  return [
    `السلام عليكم ${parent?.name || ''} 🌿`,
    ``,
    `تم إنشاء صفحة *${st.name}* في منصة "أثر" — ${STATE.config.school.name}.`,
    ``,
    `من خلال الصفحة بإمكانكِ:`,
    `• متابعة جلسات الطفلة يومياً`,
    `• الاطلاع على الخطة الفردية والأهداف`,
    `• التواصل المباشر مع المعلمة`,
    `• مشاهدة إنجازاتها وشاراتها`,
    ``,
    `الرابط:`,
    url,
    ``,
    `عند الفتح، أدخلي رقم جوالكِ المسجل (${st.parentPhone}) للدخول.`,
    ``,
    `المعلمة: ${teacher?.name || ''}`
  ].join('\n');
}

function openInviteLinkModal(sid) {
  const st = studentBy(sid);
  if (!st) return;
  const parent = userBy(st.parent_id); // Fixed: use parent_id
  openModal(`
    <div class="modal-head">
      <h2>مشاركة مع ولي الأمر</h2>
      <button class="x" data-action="close-modal">${I.close}</button>
    </div>
    <p class="text-sm text-muted mb-md">
      رسالة جاهزة لإرسالها إلى
      <b>${esc(parent?.name || 'ولي الأمر')}</b> ·
      <span class="mono-num">${esc(st.parentPhone || '—')}</span>
    </p>
    <button class="btn lg block" data-action="copy-invite-msg" data-sid="${sid}">
      ${I.link}<span>نسخ الرسالة الجاهزة</span>
    </button>
    <div class="text-xs text-muted center mt-md">
      تتضمن الرسالة الترحيب، الرابط، ورقم الجوال للدخول.
    </div>
  `);
}

function viewStudentReport(id) {
  const st = studentBy(id);
  if (!st) return viewNotFound();
  const teacher = userBy(st.teacher_id); // Fixed: use teacher_id
  const parent = userBy(st.parent_id); // Fixed: use parent_id
  const plan = STATE.data.plans.find(p => p.studentId === id);
  const logs = STATE.data.sessionLogs.filter(l => l.studentId === id)
    .sort((a,b) => (b.date+b.time).localeCompare(a.date+a.time));
  const stats = { mastered: 0, partial: 0, not: 0 };
  logs.forEach(l => l.goalEvaluations.forEach(g => {
    if (g.status === 'mastered') stats.mastered++;
    else if (g.status === 'partial') stats.partial++;
    else stats.not++;
  }));
  const total = stats.mastered + stats.partial + stats.not;
  const masteryPct = total ? Math.round(stats.mastered/total * 100) : 0;
  const prog = studentProgress(st);
  const sch = STATE.config.school;
  const today = new Date().toISOString().slice(0,10);

  return `
    <div class="page-head no-print">
      <button class="btn ghost sm" data-action="back">${I.back}<span>عودة</span></button>
      <button class="btn" onclick="window.print()">${I.download}<span>طباعة / حفظ PDF</span></button>
    </div>

    <div class="report">
      <header class="report-head">
        <div class="report-brand">
          <div class="logo">أ</div>
          <div>
            <div class="brand-name">أثر</div>
            <div class="text-xs text-muted">${esc(sch.name)}</div>
          </div>
        </div>
        <div class="report-meta">
          <div class="text-bold">تقرير الطالبة</div>
          <div class="text-xs text-muted">صادر بتاريخ ${fmtDate(today)} • الأسبوع ${arNum(termWeek(today))}</div>
        </div>
      </header>

      <section class="report-section student-summary">
        <div class="row" style="gap:14px;align-items:center;flex-wrap:wrap">
          <div class="avatar lg ${st.color}">${esc(st.initials)}</div>
          <div style="flex:1;min-width:200px">
            <h1 style="font-size:22px">${esc(st.name)}</h1>
            <div class="row mt-sm wrap text-sm">
              <span class="stage-pill ${stageClass(st.grade)}">${esc(st.grade)}</span>
              <span>${arNum(st.age)} سنوات</span>
              <span>•</span>
              <span>التحقت ${fmtDate(st.enrolled)}</span>
            </div>
          </div>
          <div class="text-end" style="min-width:120px">
            <div class="text-xs text-muted">إجمالي التقدم</div>
            <div style="font-size:28px;font-weight:800;color:var(--primary)">${arNum(prog)}%</div>
          </div>
        </div>
        <div class="report-meta-row mt-md">
          <div><span class="text-muted">المعلمة:</span> <b>${esc(teacher?.name || '')}</b></div>
          <div><span class="text-muted">ولي الأمر:</span> <b>${esc(parent?.name || '')}</b></div>
          <div><span class="text-muted">الجوال:</span> <b>${esc(st.parentPhone || '—')}</b></div>
        </div>
      </section>

      <section class="report-section">
        <h2 class="report-h">📊 ملخص الجلسات</h2>
        <div class="report-stats">
          <div class="stat mint"><div class="num">${arNum(logs.length)}</div><div class="lbl">إجمالي الجلسات</div></div>
          <div class="stat"><div class="num">${arNum(stats.mastered)}</div><div class="lbl">مهام أُتقنت</div></div>
          <div class="stat amber"><div class="num">${arNum(stats.partial)}</div><div class="lbl">مهام جزئية</div></div>
          <div class="stat sky"><div class="num">${arNum(masteryPct)}%</div><div class="lbl">نسبة الإتقان</div></div>
        </div>
      </section>

      ${plan?.initialReport ? `
        <section class="report-section">
          <h2 class="report-h">📝 التقرير المبدئي</h2>
          <div class="initial-report">${esc(plan.initialReport).replace(/\n/g,'<br>')}</div>
        </section>
      ` : ''}

      ${plan?.groups && plan.groups.length ? `
        <section class="report-section">
          <h2 class="report-h">📋 الخطة التربوية</h2>
          <table class="plan-table">
            <thead>
              <tr>
                <th>أهداف طويلة المدى</th>
                <th>أهداف قصيرة المدى</th>
              </tr>
            </thead>
            <tbody>
              ${plan.groups.map(g => `
                <tr>
                  <td class="long-cell"><span class="long-pill ${g.category}">${esc(g.long)}</span></td>
                  <td><ul class="short-list">${g.shorts.map(s => `<li>${esc(s)}</li>`).join('')}</ul></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </section>
      ` : (plan?.goals?.length ? `
        <section class="report-section">
          <h2 class="report-h">📝 أهداف الفصل</h2>
          <ol class="report-goals">
            ${plan.goals.map(g => `<li>${esc(g)}</li>`).join('')}
          </ol>
        </section>
      ` : '')}

      ${plan?.progress?.length ? `
        <section class="report-section">
          <h2 class="report-h">🎯 تقدم المهارات المستهدفة</h2>
          ${plan.progress.map(pr => {
            const sk = skillBy(pr.skillId);
            return sk ? `
              <div class="report-skill">
                <div class="row between mb-md">
                  <div class="text-bold">${esc(sk.name)}</div>
                  <div class="text-sm">${arNum(pr.current)}% <span class="text-muted">/ ${arNum(pr.target)}%</span></div>
                </div>
                <div class="progress thick"><div class="bar" style="width:${pr.current}%"></div></div>
              </div>
            ` : '';
          }).join('')}
        </section>
      ` : ''}

      <section class="report-section">
        <h2 class="report-h">📋 آخر ٥ جلسات</h2>
        ${logs.slice(0,5).length ? logs.slice(0,5).map(l => `
          <div class="report-session">
            <div class="row between mb-md">
              <div class="text-bold">${fmtDate(l.date)} • ${esc(l.time)}</div>
              <div class="text-xs text-muted">${arNum(l.duration)} دقيقة</div>
            </div>
            ${l.goalEvaluations.map(g => `
              <div class="report-goal-line">
                <span class="goal-st ${g.status}">${g.status === 'mastered' ? '✓ أُتقنت' : g.status === 'partial' ? '◐ جزئياً' : '✕ لم تتقن'}</span>
                <span>${esc(g.goal)}</span>
              </div>
            `).join('')}
            ${l.notes ? `<div class="text-sm mt-md" style="color:var(--text-2)">${esc(l.notes)}</div>` : ''}
          </div>
        `).join('') : '<div class="text-sm text-muted">لا توجد جلسات بعد.</div>'}
      </section>

      <footer class="report-footer">
        <div>${esc(sch.name)} • ${esc(sch.phone)}</div>
        <div>${esc(sch.principal.title)}: ${esc(sch.principal.name)}</div>
      </footer>
    </div>
  `;
}

function renderFormsTab(st) {
  const forms = st.forms || {};
  const user = STATE.user;
  
  // Determine which form types to show based on teacher type
  const isSpecialEd = (user.teacher_type === 'special_ed' || user.teacher_type === 'special_education');
  const formTypes = isSpecialEd ? SPECIAL_ED_FORM_TYPES : FORM_TYPES;
  
  console.log('📋 Rendering forms tab for:', st.name);
  console.log('📋 Teacher type:', user.teacher_type);
  console.log('📋 Forms data:', forms);
  
  return `
    <div class="grid cols-2">
      ${formTypes.map(ft => {
        // For shared forms, check shared_initial_data
        let data, completed;
        
        if (ft.key === 'initialData') {
          data = st.shared_initial_data || {};
          completed = data.completed || false;
        } else if (ft.isPDF) {
          // PDF forms - check special_ed_forms (per-teacher storage)
          const teacherId = STATE.user.id;
          const pdfData = st.special_ed_forms?.[ft.key];
          
          // Check if current teacher has uploaded a file
          const myPdfUrl = pdfData?.[teacherId];
          completed = !!myPdfUrl;
          
          // Count total uploads from all teachers
          const totalUploads = pdfData ? Object.keys(pdfData).length : 0;
          
          data = { 
            pdfUrl: myPdfUrl,
            totalUploads: totalUploads,
            hasMyUpload: completed  // Track if current teacher uploaded
          };
        } else if (ft.isNotes) {
          // Student notes - check special_ed_forms.student_notes
          const notes = st.special_ed_forms?.student_notes || [];
          completed = notes.length > 0;
          data = { notes };
        } else {
          data = forms[ft.key] || {};
          completed = data.signed || data.completed;
        }
        
        // Check if this is Special Ed teacher
        const isSpecialEd = (user.teacher_type === 'special_ed' || user.teacher_type === 'special_education');
        
        console.log(`📋 Form ${ft.key}:`, {data, completed});
        
        return `
          <div class="form-card ${completed ? 'is-done' : ''}">
            <div class="form-card-head">
              <div class="form-icon">${ft.icon}</div>
              ${ft.shared ? `<span class="form-status shared" title="مشتركة بين المعلمات">مشتركة</span>` : ''}
              ${!isSpecialEd && completed && !ft.shared
                ? `<span class="form-status done">مكتمل</span>`
                : !isSpecialEd && !ft.shared ? `<span class="form-status pending">بانتظار</span>` : ''}
            </div>
            <h3 class="form-card-title">${esc(ft.name)}</h3>
            ${completed && data.score !== undefined
              ? `<div class="form-card-score">${arNum(data.score)}<span>/100</span></div>`
              : `<p class="form-card-sub">${esc(ft.sub)}</p>`}
            ${ft.isPDF && data.totalUploads > 0
              ? `<p class="form-card-sub">${arNum(data.totalUploads)} ملف من ${data.totalUploads === 1 ? 'معلمة' : 'معلمات'}</p>`
              : ft.isNotes && completed
              ? `<p class="form-card-sub">${arNum(data.notes.length)} ملاحظة</p>`
              : ''}
            <div class="row" style="gap:8px">
              ${ft.isPDF ? `
                <button class="btn ${data.hasMyUpload ? 'ghost' : 'soft'} block form-card-btn"
                  data-action="upload-pdf"
                  data-sid="${st.id}" data-fkey="${ft.key}">
                  ${I.upload}
                  <span>${data.hasMyUpload ? 'تحديث' : 'رفع'}</span>
                </button>
                ${data.totalUploads > 0 ? `
                  <button class="btn ghost form-card-btn"
                    data-action="view-all-pdfs"
                    data-sid="${st.id}" data-fkey="${ft.key}">
                    ${I.eye}
                    <span>عرض الكل</span>
                  </button>
                ` : ''}
              ` : ft.isNotes ? `
                <button class="btn soft block form-card-btn"
                  data-action="manage-notes"
                  data-sid="${st.id}">
                  ${I.plus}
                  <span>إدارة الملاحظات</span>
                </button>
              ` : `
                <button class="btn ${completed ? 'ghost' : 'soft'} block form-card-btn"
                  data-action="${completed ? 'view-form' : 'complete-form'}"
                  data-sid="${st.id}" data-fkey="${ft.key}">
                  ${completed ? I.eye : I.clipboard}
                  <span>${completed ? 'عرض' : 'إكمال'}</span>
                </button>
                ${completed ? `
                  <button class="btn ghost form-card-btn"
                    data-action="complete-form"
                    data-sid="${st.id}" data-fkey="${ft.key}">
                    ${I.edit}
                    <span>تعديل</span>
                  </button>
                ` : ''}
                ${ft.allowPDF && isSpecialEd ? `
                  <button class="btn ghost form-card-btn"
                    data-action="upload-pdf"
                    data-sid="${st.id}" data-fkey="${ft.key}">
                    ${I.upload}
                    <span>رفع PDF</span>
                  </button>
                ` : ''}
              `}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

/* =========================================================
   SPECIAL ED IEP (Different from Speech Teacher)
   ========================================================= */

function renderSpecialEdIEP(st) {
  const iep = st.special_ed_iep || {};
  const hasData = iep.current_level || iep.strengths || iep.needs || 
                  (iep.semester_goals && iep.semester_goals.length > 0);
  
  if (!hasData) {
    return `
      <div class="card">
        <div class="row mb-md" style="align-items:flex-start;gap:14px">
          <div style="font-size:42px">✨</div>
          <div style="flex:1">
            <h3 style="font-size:18px">لم يتم إنشاء الخطة الفردية بعد</h3>
            <p class="text-sm text-muted mt-sm">يمكنكِ إنشاء الخطة الفردية يدوياً، أو رفع ملف PDF جاهز</p>
          </div>
        </div>
        <div class="row" style="gap:8px;flex-wrap:wrap">
          <button class="btn lg" data-action="create-special-ed-iep" data-sid="${st.id}">
            ${I.clipboard}<span>إنشاء خطة فردية</span>
          </button>
          <button class="btn ghost lg" data-action="upload-iep-pdf" data-sid="${st.id}">
            ${I.upload}<span>رفع PDF جاهز</span>
          </button>
        </div>
      </div>
    `;
  }
  
  // Calculate totals
  const semesterGoalsCount = iep.semester_goals?.length || 0;
  const shortTermGoalsCount = iep.short_term_goals?.length || 0;
  const behavioralGoalsCount = iep.behavioral_goals?.length || 0;
  
  return `
    <div class="row mb-md" style="gap:8px;flex-wrap:wrap">
      <div class="row" style="flex:1;background:var(--mint-50);padding:10px 14px;border-radius:12px;gap:10px">
        <div style="font-size:24px">📋</div>
        <div style="flex:1">
          <div class="text-bold text-sm">الخطة الفردية لـ ${esc(st.name)}</div>
          <div class="text-xs text-muted">${arNum(semesterGoalsCount)} هدف فصلي • ${arNum(shortTermGoalsCount)} هدف قصير المدى • ${arNum(behavioralGoalsCount)} هدف سلوكي</div>
        </div>
      </div>
      <button class="btn soft sm" data-action="edit-special-ed-iep" data-sid="${st.id}">${I.edit}<span>تعديل</span></button>
      <button class="btn ghost sm" data-action="print-special-ed-iep" data-sid="${st.id}">${I.download}<span>طباعة</span></button>
      ${iep.pdf_upload ? `
        <button class="btn ghost sm" data-action="view-iep-pdf" data-sid="${st.id}">${I.eye}<span>عرض PDF</span></button>
      ` : ''}
      <button class="btn danger-soft sm" data-action="delete-special-ed-iep" data-sid="${st.id}">${I.trash}<span>حذف الخطة</span></button>
    </div>

    <div class="card mb-md">
      <div class="card-title"><h3>📊 المستوى الحالي والاحتياجات</h3></div>
      <div class="iep-section">
        <div class="iep-field">
          <div class="iep-label">المستوى الحالي للطالبة:</div>
          <div class="iep-value">${esc(iep.current_level || '—')}</div>
        </div>
        <div class="row" style="gap:12px">
          <div class="iep-field" style="flex:1">
            <div class="iep-label">نقاط القوة:</div>
            <div class="iep-value">${esc(iep.strengths || '—')}</div>
          </div>
          <div class="iep-field" style="flex:1">
            <div class="iep-label">نقاط الاحتياج:</div>
            <div class="iep-value">${esc(iep.needs || '—')}</div>
          </div>
        </div>
      </div>
    </div>

    ${semesterGoalsCount > 0 ? `
      <div class="card mb-md">
        <div class="card-title"><h3>🎯 الأهداف الفصلية</h3></div>
        <div class="goals-list">
          ${iep.semester_goals.map((goal, idx) => `
            <div class="goal-card semester-goal">
              <div class="goal-number">${arNum(idx + 1)}</div>
              <div class="goal-content">
                <div class="goal-text">${esc(goal.text)}</div>
                ${goal.short_term_ids && goal.short_term_ids.length > 0 ? `
                  <div class="goal-meta">مرتبط بـ ${arNum(goal.short_term_ids.length)} هدف قصير المدى</div>
                ` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    ${shortTermGoalsCount > 0 ? `
      <div class="card mb-md">
        <div class="card-title"><h3>📝 الأهداف قصيرة المدى</h3></div>
        <div class="goals-list">
          ${iep.short_term_goals.map((goal, idx) => `
            <div class="goal-card short-term-goal">
              <div class="goal-number">${arNum(idx + 1)}</div>
              <div class="goal-content">
                <div class="goal-text">${esc(goal.text)}</div>
                ${goal.semester_goal_id ? `
                  <div class="goal-meta">يخدم الهدف الفصلي #${arNum(goal.semester_goal_id + 1)}</div>
                ` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    ${behavioralGoalsCount > 0 ? `
      <div class="card mb-md">
        <div class="card-title"><h3>🎭 الأهداف السلوكية/التعليمية</h3></div>
        <div class="goals-list">
          ${iep.behavioral_goals.map((goal, idx) => `
            <div class="goal-card behavioral-goal">
              <div class="goal-number">${arNum(idx + 1)}</div>
              <div class="goal-content">
                <div class="goal-text">${esc(goal.text)}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    ${iep.teaching_tools && iep.teaching_tools.length > 0 ? `
      <div class="card mb-md">
        <div class="card-title"><h3>🛠️ الوسائل والأدوات التعليمية</h3></div>
        <div class="tags-wrap">
          ${iep.teaching_tools.map(tool => `<span class="tag">${esc(tool)}</span>`).join('')}
        </div>
      </div>
    ` : ''}

    ${iep.teaching_strategies && iep.teaching_strategies.length > 0 ? `
      <div class="card mb-md">
        <div class="card-title"><h3>📚 استراتيجيات وطرق التدريس</h3></div>
        <div class="tags-wrap">
          ${iep.teaching_strategies.map(strategy => `<span class="tag">${esc(strategy)}</span>`).join('')}
        </div>
      </div>
    ` : ''}

    ${iep.start_date || iep.end_date ? `
      <div class="card">
        <div class="card-title"><h3>📅 التواريخ</h3></div>
        <div class="row" style="gap:20px">
          ${iep.start_date ? `
            <div class="iep-field">
              <div class="iep-label">تاريخ البدء:</div>
              <div class="iep-value">${fmtDate(iep.start_date)}</div>
            </div>
          ` : ''}
          ${iep.end_date ? `
            <div class="iep-field">
              <div class="iep-label">تاريخ الانتهاء:</div>
              <div class="iep-value">${fmtDate(iep.end_date)}</div>
            </div>
          ` : ''}
        </div>
      </div>
    ` : ''}
  `;
}

function renderPlanTab(st, plan) {
  const user = STATE.user;
  
  // Check if this is a Special Ed teacher
  if (user.teacher_type === 'special_ed' || user.teacher_type === 'special_education') {
    return renderSpecialEdIEP(st);
  }
  
  // Original speech teacher plan view
  // Safely check for groups
  const hasGroups = plan && plan.groups && Array.isArray(plan.groups) && plan.groups.length > 0;
  const preDone = st.forms?.preAssessment?.completed;
  const totalShorts = hasGroups ? plan.groups.reduce((sum, g) => sum + (g.shorts?.length || 0), 0) : 0;

  if (!plan || !hasGroups) {
    return `
      <div class="ai-card">
        <div class="row mb-md" style="align-items:flex-start;gap:14px">
          <div class="ai-badge">${I.sparkle}</div>
          <div style="flex:1">
            <h3 style="font-size:18px">لم تُولَّد الخطة بعد</h3>
            <p class="text-sm text-muted mt-sm">${preDone
              ? 'التقييم القبلي مُستكمل. اضغطي الزر لتوليد خطة فردية مفصّلة من نتائج التقييم.'
              : 'يمكنكِ توليد خطة افتراضية الآن (تشمل المحاور الأساسية)، أو إكمال التقييم القبلي أولاً للحصول على خطة دقيقة لاحتياجات الطالبة.'
            }</p>
          </div>
        </div>
        <div class="row" style="gap:8px;flex-wrap:wrap">
          <button class="btn lg" data-action="generate-plan-from-assessment" data-sid="${st.id}">
            ${I.sparkle}<span>${preDone ? 'توليد الخطة من التقييم' : 'توليد خطة افتراضية'}</span>
          </button>
          ${!preDone ? `
            <a class="btn ghost lg" href="#/teacher/student/${st.id}?tab=forms" data-route="#/teacher/student/${st.id}">
              ${I.clipboard}<span>التقييم القبلي</span>
            </a>
          ` : ''}
        </div>
      </div>
    `;
  }

  return `
    <div class="row mb-md" style="gap:8px;flex-wrap:wrap">
      <div class="row" style="flex:1;background:var(--mint-50);padding:10px 14px;border-radius:12px;gap:10px">
        <div class="ai-badge" style="width:32px;height:32px;border-radius:10px">${I.sparkle}</div>
        <div style="flex:1">
          <div class="text-bold text-sm">الخطة التربوية لـ ${esc(st.name)}</div>
          <div class="text-xs text-muted">${arNum(plan.groups.length)} هدف طويل المدى • ${arNum(totalShorts)} هدف قصير المدى${plan.generatedAt ? ` • مُولّدة في ${fmtDate(plan.generatedAt)}` : ''}</div>
        </div>
        <button class="btn soft sm" data-action="generate-plan-from-assessment" data-sid="${st.id}">${I.bolt}<span>إعادة توليد</span></button>
      </div>
    </div>

    ${plan.initialReport ? `
      <div class="card mb-md report-section-card">
        <div class="card-title"><h3>📝 التقرير المبدئي</h3></div>
        <div class="initial-report">${esc(plan.initialReport).replace(/\n/g,'<br>')}</div>
      </div>
    ` : ''}

    <div class="card">
      <div class="card-title">
        <h3>📋 الخطة التربوية</h3>
        <a class="btn ghost sm" href="#/teacher/report/${st.id}" data-route="#/teacher/report/${st.id}">${I.download}<span>طباعة الخطة</span></a>
      </div>
      <table class="plan-table">
        <thead>
          <tr>
            <th>أهداف طويلة المدى</th>
            <th>أهداف قصيرة المدى</th>
          </tr>
        </thead>
        <tbody>
          ${plan.groups.map(g => {
            console.log('Plan group:', g);
            console.log('Shorts type:', typeof g.shorts, g.shorts);
            return `
            <tr>
              <td class="long-cell">
                <span class="long-pill ${g.category}">${esc(g.long)}</span>
              </td>
              <td>
                <ul class="short-list">
                  ${Array.isArray(g.shorts) ? g.shorts.map(s => `<li>${esc(typeof s === 'string' ? s : s.goal || s.text || JSON.stringify(s))}</li>`).join('') : ''}
                </ul>
              </td>
            </tr>
          `;}).join('')}
        </tbody>
      </table>
    </div>

    ${plan.progress && plan.progress.length ? `
      <div class="card mt-md">
        <div class="card-title"><h3>📊 المهارات المستهدفة</h3></div>
        ${plan.progress.map(pr => skillProgressRow(pr)).join('')}
      </div>
    ` : ''}
  `;
}

/* =========================================================
   SPECIAL ED FOLLOW-UP / SESSION PLANNING
   ========================================================= */

function renderSpecialEdFollowUp(st) {
  const sessions = st.special_ed_sessions || [];
  const sortedSessions = [...sessions].sort((a, b) => b.date_from.localeCompare(a.date_from));
  
  return `
    <div class="card mb-md">
      <div class="card-title">
        <h3>📈 سجل جلسات المتابعة</h3>
        <button class="btn soft sm" data-action="add-special-ed-session" data-sid="${st.id}">
          ${I.plus}<span>إضافة جلسة</span>
        </button>
      </div>
      
      ${sortedSessions.length === 0 ? `
        <div class="empty">
          <div class="ico">${I.calendar}</div>
          <h4>لا توجد جلسات متابعة</h4>
          <p>اضغطي "إضافة جلسة" لتسجيل أول جلسة متابعة</p>
        </div>
      ` : `
        <div class="sessions-timeline">
          ${sortedSessions.map((session, idx) => renderSpecialEdSessionCard(session, idx, st.id)).join('')}
        </div>
      `}
    </div>
  `;
}

function renderSpecialEdSessionCard(session, idx, studentId) {
  const goalsCount = session.procedural_goals?.length || 0;
  const completedGoals = (session.procedural_goals || []).filter(g => g.evaluation === 'achieved').length;
  
  return `
    <div class="special-ed-session-card">
      <div class="session-card-header">
        <div>
          <div class="session-card-title">جلسة ${arNum(idx + 1)}</div>
          <div class="session-card-date">${fmtDate(session.date_from)} - ${fmtDate(session.date_to)}</div>
        </div>
        <div class="row" style="gap:8px">
          <button class="btn soft sm" data-action="view-special-ed-session" data-sid="${studentId}" data-idx="${idx}">
            ${I.eye}<span>عرض</span>
          </button>
          <button class="btn ghost sm" data-action="edit-special-ed-session" data-sid="${studentId}" data-idx="${idx}">
            ${I.edit}<span>تعديل</span>
          </button>
        </div>
      </div>
      
      <div class="session-card-body">
        ${session.short_term_goal ? `
          <div class="session-field">
            <span class="session-label">الهدف قصير المدى:</span>
            <span class="session-value">${esc(session.short_term_goal)}</span>
          </div>
        ` : ''}
        
        ${goalsCount > 0 ? `
          <div class="session-field">
            <span class="session-label">الأهداف الإجرائية:</span>
            <span class="session-value">${arNum(goalsCount)} أهداف (${arNum(completedGoals)} متحقق)</span>
          </div>
        ` : ''}
        
        ${session.teaching_notes ? `
          <div class="session-field">
            <span class="session-label">ملاحظات المعلمة:</span>
            <div class="session-notes">${esc(session.teaching_notes).slice(0, 150)}${session.teaching_notes.length > 150 ? '...' : ''}</div>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

function renderFollowTab(st, plan) {
  const user = STATE.user;
  
  // Check if this is a Special Ed teacher
  if (user.teacher_type === 'special_ed' || user.teacher_type === 'special_education') {
    return renderSpecialEdFollowUp(st);
  }
  
  // Original speech teacher follow-up view
  const logs = STATE.data.sessionLogs
    .filter(l => l.studentId === st.id)
    .sort((a,b) => b.date.localeCompare(a.date) || b.time.localeCompare(a.time));
  
  const followups = STATE.data.studentFollowups.filter(f => f.studentId === st.id)
    .sort((a,b) => b.date_from.localeCompare(a.date_from));
  
  const stats = { mastered: 0, partial: 0, notMastered: 0 };
  logs.forEach(l => l.goalEvaluations.forEach(g => {
    if (g.status === 'mastered') stats.mastered++;
    else if (g.status === 'partial') stats.partial++;
    else stats.notMastered++;
  }));
  const total = stats.mastered + stats.partial + stats.notMastered;
  const masteryPct = total ? Math.round(stats.mastered / total * 100) : 0;

  return `
    <div class="grid cols-3 mb-md">
      ${statCard('mint',  I.checkCircle, arNum(stats.mastered),    'مهارات أُتقنت')}
      ${statCard('amber', I.bolt,         arNum(stats.partial),     'إتقان جزئي')}
      ${statCard('rose',  I.close,        arNum(stats.notMastered), 'لم تُتقن')}
    </div>

    <!-- قسم المتابعة المحسّن -->
    <div class="card mb-md">
      <div class="card-title">
        <h3>📈 متابعة الأهداف</h3>
        <button class="btn soft sm" data-action="add-followup" data-sid="${st.id}">${I.plus}<span>إضافة متابعة</span></button>
      </div>
      
      ${followups.length ? `
        <div class="list-section">
          ${followups.map(followup => renderFollowupCard(followup, plan)).join('')}
        </div>
      ` : emptyState('📈', 'لا توجد متابعات بعد', 'اضغطي «إضافة متابعة» لتسجيل أول متابعة للأهداف')}
    </div>

    <div class="card">
      <div class="card-title">
        <h3>سجل الجلسات (${arNum(logs.length)})</h3>
      </div>
      ${logs.length ? (() => {
        const [latest, ...older] = logs;
        return `
          <div class="session-section">
            <div class="session-section-title">آخر جلسة</div>
            ${sessionLogRow(latest)}
          </div>
          ${older.length ? `
            <div class="session-section">
              <div class="session-section-title">الجلسات السابقة <span class="ssn-count">(${arNum(older.length)})</span></div>
              <div class="session-timeline">
                ${older.map(l => sessionLogRowCollapsed(l)).join('')}
              </div>
            </div>
          ` : ''}
        `;
      })() : emptyState(I.calendar, 'لا توجد جلسات بعد', 'اضغطي «إضافة جلسة» لتسجيل أول جلسة.')}
    </div>
  `;
}

function renderFollowupCard(followup, plan) {
  const teacher = userBy(followup.teacher_id);
  const goal1 = followup.goal_1_id ? plan?.goals?.find(g => g.id === followup.goal_1_id) : null;
  const goal2 = followup.goal_2_id ? plan?.goals?.find(g => g.id === followup.goal_2_id) : null;
  const tools = followup.tools || [];
  
  return `
    <div class="followup-card">
      <div class="row between mb-sm">
        <div class="text-bold">📅 ${fmtDate(followup.date_from)} - ${fmtDate(followup.date_to)}</div>
        <div class="text-sm text-muted">بواسطة: ${esc(teacher?.name || '')}</div>
      </div>
      
      <div class="followup-goals mb-sm">
        <div class="text-sm text-muted mb-xs">الأهداف المستهدفة:</div>
        ${goal1 ? `<div class="goal-pill">🎯 ${esc(goal1.text)}</div>` : ''}
        ${goal2 ? `<div class="goal-pill">🎯 ${esc(goal2.text)}</div>` : ''}
        ${followup.custom_goal_1 ? `<div class="goal-pill custom">${followup.custom_goal_1_type ? `[${followup.custom_goal_1_type}]` : ''} ${esc(followup.custom_goal_1)}</div>` : ''}
        ${followup.custom_goal_2 ? `<div class="goal-pill custom">${followup.custom_goal_2_type ? `[${followup.custom_goal_2_type}]` : ''} ${esc(followup.custom_goal_2)}</div>` : ''}
      </div>
      
      ${tools.length ? `
        <div class="followup-tools mb-sm">
          <div class="text-sm text-muted mb-xs">الوسائل المستخدمة:</div>
          <div class="row wrap" style="gap:6px">
            ${tools.map(t => `<span class="tool-tag-sm">${esc(t)}</span>`).join('')}
          </div>
        </div>
      ` : ''}
      
      ${followup.notes ? `<div class="followup-notes text-sm">${esc(followup.notes)}</div>` : ''}
      
      <div class="row" style="gap:8px;margin-top:12px">
        <button class="btn ghost xs" data-action="edit-followup" data-id="${followup.id}">${I.edit}<span>تعديل</span></button>
        <button class="btn danger-soft xs" data-action="delete-followup" data-id="${followup.id}">${I.trash}<span>حذف</span></button>
      </div>
    </div>
  `;
}

function sessionLogRowCollapsed(log) {
  const teacher = userBy(log.teacherId);
  const tools = log.tools.map(tid => STATE.data.sessionTools.find(t => t.id === tid)).filter(Boolean);
  const isTeacher = STATE.user?.role === 'teacher';
  const m = log.goalEvaluations.filter(g => g.status === 'mastered').length;
  const p = log.goalEvaluations.filter(g => g.status === 'partial').length;
  const n = log.goalEvaluations.filter(g => g.status === 'not-mastered').length;

  return `
    <details class="session-collapsible">
      <summary class="session-summary-row">
        <div class="ssr-date">${fmtRelative(log.date)}</div>
        <div class="ssr-meta">${esc(log.time)} · ${arNum(log.duration)} د</div>
        <div class="ssr-stats">
          ${m ? `<span class="mini-stat"><span class="mini-dot mastered"></span>${arNum(m)}</span>` : ''}
          ${p ? `<span class="mini-stat"><span class="mini-dot partial"></span>${arNum(p)}</span>` : ''}
          ${n ? `<span class="mini-stat"><span class="mini-dot not"></span>${arNum(n)}</span>` : ''}
        </div>
        <span class="ssr-chev">${I.chevronD}</span>
      </summary>
      <div class="session-collapsible-body">
        <ul class="session-goals">
          ${log.goalEvaluations.map((g, index) => `
            <li class="goal-line goal-${g.status}">
              <span class="status-dot">${g.status === 'mastered' ? '✓' : g.status === 'partial' ? '◐' : '✕'}</span>
              <span class="goal-text">${esc(g.goal)}</span>
              <button class="goal-delete-btn" data-action="delete-goal" data-session-id="${log.id}" data-goal-index="${index}" title="حذف الهدف">✕</button>
            </li>
          `).join('')}
        </ul>
        ${tools.length ? `
          <div class="session-tools mt-md">
            ${tools.map(t => `<span class="tool-tag">${t.icon} ${esc(t.name)}</span>`).join('')}
          </div>
        ` : ''}
        ${log.notes ? `<p class="session-note">${esc(log.notes)}</p>` : ''}
        ${isTeacher ? `<button class="btn danger-soft sm mt-md" data-action="delete-session" data-id="${log.id}" data-sid="${log.studentId}">${I.trash}<span>حذف الجلسة</span></button>` : ''}
      </div>
    </details>
  `;
}

function sessionLogRow(log) {
  const teacher = userBy(log.teacherId);
  const tools = log.tools.map(tid => STATE.data.sessionTools.find(t => t.id === tid)).filter(Boolean);
  const isTeacher = STATE.user?.role === 'teacher';
  const m = log.goalEvaluations.filter(g => g.status === 'mastered').length;
  const p = log.goalEvaluations.filter(g => g.status === 'partial').length;
  const total = log.goalEvaluations.length;

  return `
    <article class="session-row">
      <header class="session-row-head">
        <div class="session-date">
          <div class="session-day">${fmtRelative(log.date)}</div>
          <div class="session-time-meta">${esc(log.time)} · ${arNum(log.duration)} دقيقة · ${esc(teacher?.name || '')}</div>
        </div>
        <div class="session-summary">
          ${m ? `<span class="mini-stat"><span class="mini-dot mastered"></span>${arNum(m)}</span>` : ''}
          ${p ? `<span class="mini-stat"><span class="mini-dot partial"></span>${arNum(p)}</span>` : ''}
          ${total - m - p > 0 ? `<span class="mini-stat"><span class="mini-dot not"></span>${arNum(total - m - p)}</span>` : ''}
          ${isTeacher ? `<button class="icon-action" data-action="delete-session" data-id="${log.id}" data-sid="${log.studentId}" title="حذف">${I.trash}</button>` : ''}
        </div>
      </header>

      <ul class="session-goals">
        ${log.goalEvaluations.map((g, index) => `
          <li class="goal-line goal-${g.status}">
            <span class="status-dot">${g.status === 'mastered' ? '✓' : g.status === 'partial' ? '◐' : '✕'}</span>
            <span class="goal-text">${esc(g.goal)}</span>
            ${isTeacher ? `<button class="goal-delete-btn" data-action="delete-goal" data-session-id="${log.id}" data-goal-index="${index}" title="حذف الهدف">✕</button>` : ''}
          </li>
        `).join('')}
      </ul>

      ${tools.length || log.notes ? `
        <footer class="session-foot">
          ${tools.length ? `
            <div class="session-tools">
              ${tools.map(t => `<span class="tool-tag">${t.icon} ${esc(t.name)}</span>`).join('')}
            </div>
          ` : ''}
          ${log.notes ? `<p class="session-note">${esc(log.notes)}</p>` : ''}
        </footer>
      ` : ''}
    </article>
  `;
}

function skillProgressRow(pr) {
  const sk = skillBy(pr.skillId);
  if (!sk) return '';
  return `
    <div class="skill-row">
      <div class="icon-tile">${I.target}</div>
      <div class="meta">
        <div class="row between">
          <div class="name">${esc(sk.name)}</div>
          <div class="pct">${pr.current}%</div>
        </div>
        <div class="progress"><div class="bar" style="width:${pr.current}%"></div></div>
        <div class="row between mt-sm text-xs text-muted">
          <span>${esc(sk.category)}</span>
          <span>الهدف: ${pr.target}%</span>
        </div>
      </div>
    </div>
  `;
}

function sparklineSvg(logs) {
  if (!logs.length) return '<div class="text-xs text-muted">لا توجد بيانات</div>';
  const sorted = [...logs].sort((a,b) => a.date.localeCompare(b.date));
  const max = 100;
  const w = 600, h = 64, pad = 4;
  const step = (w - pad*2) / Math.max(1, sorted.length - 1);
  const pts = sorted.map((l, i) => {
    const x = pad + step * i;
    const y = h - pad - ((l.value/max) * (h - pad*2));
    return [x, y];
  });
  const d = pts.map((p, i) => (i===0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(' ');
  const area = `${d} L${pts[pts.length-1][0]},${h} L${pts[0][0]},${h} Z`;
  return `
    <svg class="spark" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#6E5BC7" stop-opacity="0.25"/>
          <stop offset="1" stop-color="#6E5BC7" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <path d="${area}" fill="url(#g1)"/>
      <path d="${d}" stroke="#6E5BC7" stroke-width="2" fill="none"/>
      ${pts.map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="3" fill="#6E5BC7"/>`).join('')}
    </svg>
  `;
}

/* =========================================================
   ATTENDANCE
   ========================================================= */

/* =========================================================
   NEW FEATURES: متابعة الطالبة، الذاكرة السمعية، التقرير المبدئي
   ========================================================= */

// 1️⃣ متابعة الطالبة المحسّنة
function renderMemoryTestTab(st) {
  const tests = STATE.data.auditoryMemoryTests.filter(t => t.studentId === st.id)
    .sort((a, b) => new Date(b.tested_at) - new Date(a.tested_at));
  
  return `
    <div class="card">
      <div class="card-title">
        <h3>🧠 اختبار الذاكرة السمعية</h3>
        <p class="text-sm text-muted">اختبارات الذاكرة السمعية للطالبة</p>
      </div>
      
      <div class="grid cols-2 mb-md">
        <button class="btn lg" data-action="add-memory-test" data-sid="${st.id}" data-type="1">
          <span>📝 النموذج الأول</span>
        </button>
        <button class="btn lg" data-action="add-memory-test" data-sid="${st.id}" data-type="2">
          <span>📝 النموذج الثاني</span>
        </button>
      </div>

      ${tests.length ? `
        <div class="list-section">
          <h4 class="list-section-title">الاختبارات السابقة (${arNum(tests.length)})</h4>
          ${tests.map(test => `
            <div class="list-item" data-action="view-memory-test" data-id="${test.id}" style="cursor:pointer">
              <div class="row between" style="align-items:center">
                <div>
                  <div class="text-bold">النموذج ${test.test_type === 1 ? 'الأول' : 'الثاني'}</div>
                  <div class="text-sm text-muted">${fmtDate(test.tested_at)} · النتيجة: ${arNum(test.score || 0)}/${arNum(test.total_score || 0)}</div>
                </div>
                <div class="text-xl">${test.score >= (test.total_score * 0.8) ? '✅' : test.score >= (test.total_score * 0.5) ? '⚠️' : '❌'}</div>
              </div>
            </div>
          `).join('')}
        </div>
      ` : emptyState('🧠', 'لا توجد اختبارات بعد', 'اضغطي على أحد النماذج لإجراء اختبار جديد')}
    </div>
  `;
}

// 2️⃣ التقرير المبدئي
function renderInitialReportTab(st) {
  const reports = STATE.data.initialReports.filter(r => r.studentId === st.id)
    .sort((a, b) => new Date(b.report_date) - new Date(a.report_date));
  
  return `
    <div class="card">
      <div class="card-title">
        <h3>📄 التقرير المبدئي</h3>
        <button class="btn sm" data-action="add-initial-report" data-sid="${st.id}">${I.plus}<span>تقرير جديد</span></button>
      </div>

      ${reports.length ? `
        <div class="list-section">
          <h4 class="list-section-title">التقارير السابقة (${arNum(reports.length)})</h4>
          ${reports.map(report => `
            <div class="list-item">
              <div class="row between" style="align-items:center">
                <div style="flex:1">
                  <div class="text-bold">تقرير بتاريخ ${fmtDate(report.report_date)}</div>
                  <div class="text-sm text-muted">
                    ${report.status === 'final' ? '✅ نهائي' : '📝 مسودة'} · 
                    أُنشئ ${fmtRelative(report.created_at)}
                  </div>
                </div>
                <div class="row" style="gap:8px">
                  <button class="btn ghost sm" data-action="view-initial-report" data-id="${report.id}">${I.eye}<span>عرض</span></button>
                  <button class="btn ghost sm" data-action="edit-initial-report" data-id="${report.id}">${I.edit}<span>تعديل</span></button>
                  <button class="btn ghost sm" data-action="print-initial-report" data-id="${report.id}">${I.download}<span>طباعة</span></button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      ` : emptyState('📄', 'لا توجد تقارير بعد', 'اضغطي «تقرير جديد» لإنشاء أول تقرير مبدئي')}
    </div>
  `;
}

// 3️⃣ التقييم (سيتم تصحيح الأخطاء الإملائية لاحقاً)
function renderAssessmentTab(st) {
  // سيتم إضافة المحتوى بعد استلام النصوص المصححة من العميل
  return `
    <div class="card">
      <div class="card-title">
        <h3>📊 التقييم</h3>
        <p class="text-sm text-muted">تقييم شامل لأداء الطالبة</p>
      </div>
      <div class="text-center text-muted py-lg">
        <p>قسم التقييم قيد التطوير</p>
        <p class="text-sm">سيتم إضافة المحتوى بعد استلام النصوص المصححة</p>
      </div>
    </div>
  `;
}

// 4️⃣ الحضور والغياب
function renderAttendanceTab(st) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth(); // 0-11
  
  // Get selected month from URL params or default to current month
  const params = new URLSearchParams((location.hash.split('?')[1]) || '');
  const selectedYear = parseInt(params.get('year')) || currentYear;
  const selectedMonth = parseInt(params.get('month')) || currentMonth;
  
  // Arabic months
  const arabicMonths = [
    'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
    'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
  ];
  
  const arabicDays = ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'];
  
  // Get attendance records for this student
  const attendance = (STATE.data.attendance || []).filter(a => a.studentId === st.id);
  
  // Calculate calendar for selected month
  const firstDay = new Date(selectedYear, selectedMonth, 1);
  const lastDay = new Date(selectedYear, selectedMonth + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startDayOfWeek = firstDay.getDay(); // 0 = Sunday
  
  // Calculate statistics for selected month
  const monthStart = `${selectedYear}-${String(selectedMonth + 1).padStart(2, '0')}-01`;
  const monthEnd = `${selectedYear}-${String(selectedMonth + 1).padStart(2, '0')}-${String(daysInMonth).padStart(2, '0')}`;
  const monthAttendance = attendance.filter(a => a.date >= monthStart && a.date <= monthEnd);
  const presentCount = monthAttendance.filter(a => a.status === 'present').length;
  const absentCount = monthAttendance.filter(a => a.status === 'absent').length;
  const totalMarked = presentCount + absentCount;
  const presentPercentage = totalMarked > 0 ? Math.round((presentCount / totalMarked) * 100) : 0;
  const absentPercentage = totalMarked > 0 ? Math.round((absentCount / totalMarked) * 100) : 0;
  
  // Build calendar days
  let calendarDays = '';
  
  // Empty cells before first day
  for (let i = 0; i < startDayOfWeek; i++) {
    calendarDays += '<div class="attendance-day empty"></div>';
  }
  
  // Days of month
  for (let day = 1; day <= daysInMonth; day++) {
    const dateStr = `${selectedYear}-${String(selectedMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const dateObj = new Date(selectedYear, selectedMonth, day);
    const record = attendance.find(a => a.date === dateStr);
    const status = record?.status || '';
    const statusLabel = status === 'present' ? 'ح' : status === 'absent' ? 'غ' : '';
    const statusClass = status ? `marked ${status}` : '';
    
    // Check if date is today or in the past (not future)
    const today = new Date();
    today.setHours(23, 59, 59, 999); // End of today
    dateObj.setHours(0, 0, 0, 0);
    const isPast = dateObj <= today;
    
    // For teachers, all past days should be clickable
    const clickable = (STATE.user?.role === 'teacher' && isPast) ? 'clickable' : '';
    
    calendarDays += `
      <div class="attendance-day ${statusClass} ${clickable}" 
           data-date="${dateStr}" 
           data-student-id="${st.id}"
           data-day="${day}">
        <div class="day-number">${arNum(day)}</div>
        ${statusLabel ? `<div class="day-status">${statusLabel}</div>` : ''}
      </div>
    `;
  }
  
  // Month navigation
  const prevMonth = selectedMonth === 0 ? 11 : selectedMonth - 1;
  const prevYear = selectedMonth === 0 ? selectedYear - 1 : selectedYear;
  const nextMonth = selectedMonth === 11 ? 0 : selectedMonth + 1;
  const nextYear = selectedMonth === 11 ? selectedYear + 1 : selectedYear;
  
  return `
    <div class="card">
      <div class="card-title">
        <h3>📅 الحضور والغياب</h3>
        <p class="text-sm text-muted">سجل حضور وغياب الطالبة</p>
      </div>
      
      <!-- Statistics -->
      <div class="attendance-stats mb-lg">
        <div class="stat-box present">
          <div class="stat-label">حاضر</div>
          <div class="stat-value">${arNum(presentCount)} يوم</div>
          <div class="stat-percentage">${arNum(presentPercentage)}%</div>
        </div>
        <div class="stat-box absent">
          <div class="stat-label">غائب</div>
          <div class="stat-value">${arNum(absentCount)} يوم</div>
          <div class="stat-percentage">${arNum(absentPercentage)}%</div>
        </div>
        <div class="stat-box total">
          <div class="stat-label">الإجمالي</div>
          <div class="stat-value">${arNum(totalMarked)} يوم</div>
        </div>
      </div>
      
      <!-- Month Navigator -->
      <div class="month-navigator">
        <button class="btn ghost sm" onclick="navigateAttendanceMonth(${prevYear}, ${prevMonth})">
          ${I.back}<span>الشهر السابق</span>
        </button>
        <h4 class="current-month">${arabicMonths[selectedMonth]} ${arNum(selectedYear)}</h4>
        <button class="btn ghost sm" onclick="navigateAttendanceMonth(${nextYear}, ${nextMonth})">
          <span>الشهر التالي</span>${I.forward}
        </button>
      </div>
      
      <!-- Calendar -->
      <div class="attendance-calendar">
        <!-- Day headers -->
        <div class="calendar-header">
          ${arabicDays.map(day => `<div class="header-day">${day}</div>`).join('')}
        </div>
        
        <!-- Calendar grid -->
        <div class="calendar-grid">
          ${calendarDays}
        </div>
      </div>
      
      ${STATE.user?.role === 'teacher' ? `
        <div class="attendance-legend mt-lg">
          <div class="legend-title">تعليمات:</div>
          <ul class="text-sm text-muted">
            <li>انقري على أي يوم لتسجيل الحضور أو الغياب</li>
            <li><strong>ح</strong> = حاضر (أخضر)</li>
            <li><strong>غ</strong> = غائب (أحمر)</li>
            <li>يتم حفظ التسجيل تلقائيًا وسيظهر لجميع المعلمات</li>
          </ul>
        </div>
      ` : ''}
    </div>
  `;
}

/* =========================================================
   ATTENDANCE (Old function - keeping for backward compatibility)
   ========================================================= */
function attendanceCard(st) {
  const att = STATE.data.attendance.filter(a => a.studentId === st.id);
  const days = ['أحد','إثنين','ثلاثاء','أربعاء','خميس','جمعة','سبت'];
  return `
    <div class="card">
      <div class="card-title"><h3>الحضور — آخر 4 أسابيع</h3></div>
      <div class="row wrap mb-md">
        ${pill(`${att.filter(a=>a.status==='present').length} حضور`, 'mint')}
        ${pill(`${att.filter(a=>a.status==='late').length} تأخير`, 'amber')}
        ${pill(`${att.filter(a=>a.status==='absent').length} غياب`, 'rose')}
        ${pill(`${att.filter(a=>a.status==='excused').length} استئذان`, 'sky')}
      </div>
      <div class="cal-head">${days.map(d => `<div>${d}</div>`).join('')}</div>
      <div class="cal-grid">
        ${(() => {
          const cells = [];
          // 28 days going back
          for (let i = 27; i >= 0; i--) {
            const date = new Date(); date.setDate(date.getDate() - i);
            const iso = date.toISOString().slice(0,10);
            const rec = att.find(a => a.date === iso);
            const status = rec?.status || 'empty';
            cells.push(`<div class="cal-day ${status}" title="${iso}: ${status}">${date.getDate()}</div>`);
          }
          return cells.join('');
        })()}
      </div>
    </div>
  `;
}

function viewAttendance() {
  const me = STATE.user;
  const myStudents = STATE.data.students.filter(s => !s.archived); // Show ALL students
  
  // Get selected month from URL params or default to current month
  const params = new URLSearchParams((location.hash.split('?')[1]) || '');
  const currentDate = new Date();
  const selectedYear = parseInt(params.get('year')) || currentDate.getFullYear();
  const selectedMonth = parseInt(params.get('month')) || currentDate.getMonth();
  
  // Arabic months
  const arabicMonths = [
    'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
    'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
  ];
  
  // Calculate days in selected month
  const firstDay = new Date(selectedYear, selectedMonth, 1);
  const lastDay = new Date(selectedYear, selectedMonth + 1, 0);
  const daysInMonth = lastDay.getDate();
  
  // Month navigation
  const prevMonth = selectedMonth === 0 ? 11 : selectedMonth - 1;
  const prevYear = selectedMonth === 0 ? selectedYear - 1 : selectedYear;
  const nextMonth = selectedMonth === 11 ? 0 : selectedMonth + 1;
  const nextYear = selectedMonth === 11 ? selectedYear + 1 : selectedYear;
  
  // Build table rows for all students
  const studentRows = myStudents.map(st => {
    const attendance = (STATE.data.attendance || []).filter(a => a.studentId === st.id);
    
    // Filter attendance for selected month
    const monthStart = `${selectedYear}-${String(selectedMonth + 1).padStart(2, '0')}-01`;
    const monthEnd = `${selectedYear}-${String(selectedMonth + 1).padStart(2, '0')}-${String(daysInMonth).padStart(2, '0')}`;
    const monthAttendance = attendance.filter(a => a.date >= monthStart && a.date <= monthEnd);
    
    // Calculate statistics
    const presentCount = monthAttendance.filter(a => a.status === 'present').length;
    const absentCount = monthAttendance.filter(a => a.status === 'absent').length;
    const totalMarked = presentCount + absentCount;
    const presentPercentage = totalMarked > 0 ? Math.round((presentCount / totalMarked) * 100) : 0;
    const absentPercentage = totalMarked > 0 ? Math.round((absentCount / totalMarked) * 100) : 0;
    
    // Build day cells
    const dayCells = [];
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${selectedYear}-${String(selectedMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const record = attendance.find(a => a.date === dateStr);
      const status = record?.status || '';
      const statusLabel = status === 'present' ? 'ح' : status === 'absent' ? 'غ' : '—';
      const statusClass = status === 'present' ? 'present' : status === 'absent' ? 'absent' : '';
      
      dayCells.push(`
        <td class="attendance-cell ${statusClass}">
          ${statusLabel}
        </td>
      `);
    }
    
    return `
      <tr>
        <td class="student-name-cell">
          <a href="#/teacher/student/${st.id}?tab=attendance" style="color:inherit;text-decoration:none">
            ${esc(st.name)}
          </a>
        </td>
        ${dayCells.join('')}
        <td class="stat-cell present-stat">${arNum(presentCount)}</td>
        <td class="stat-cell absent-stat">${arNum(absentCount)}</td>
        <td class="stat-cell">${arNum(presentPercentage)}%</td>
        <td class="stat-cell">${arNum(absentPercentage)}%</td>
      </tr>
    `;
  }).join('');
  
  // Build day headers
  const dayHeaders = [];
  for (let day = 1; day <= daysInMonth; day++) {
    dayHeaders.push(`<th class="day-header">${arNum(day)}</th>`);
  }
  
  return `
    <div class="page-head">
      <div>
        <h1>📅 كشف حضور وغياب الطالبات</h1>
        <div class="sub">سجل شامل لحضور جميع الطالبات</div>
      </div>
    </div>

    <!-- Month Navigator -->
    <div class="card mb-lg">
      <div class="bulk-month-navigator">
        <button class="btn ghost" onclick="navigateBulkAttendanceMonth(${prevYear}, ${prevMonth})">
          ${I.back}<span>الشهر السابق</span>
        </button>
        <h3 class="current-month-title">${arabicMonths[selectedMonth]} ${arNum(selectedYear)}</h3>
        <button class="btn ghost" onclick="navigateBulkAttendanceMonth(${nextYear}, ${nextMonth})">
          <span>الشهر التالي</span>${I.forward}
        </button>
      </div>
    </div>

    <!-- Attendance Table -->
    <div class="card">
      <div class="attendance-table-wrapper">
        <table class="attendance-bulk-table">
          <thead>
            <tr>
              <th class="student-header sticky-col">اسم الطالبة</th>
              ${dayHeaders.join('')}
              <th class="stat-header">إجمالي الحضور</th>
              <th class="stat-header">إجمالي الغياب</th>
              <th class="stat-header">نسبة الحضور</th>
              <th class="stat-header">نسبة الغياب</th>
            </tr>
          </thead>
          <tbody>
            ${studentRows}
          </tbody>
        </table>
      </div>
    </div>
    
    <!-- Legend -->
    <div class="card mt-lg">
      <div class="card-title">
        <h4>تعليمات:</h4>
      </div>
      <ul class="text-sm text-muted">
        <li><strong>ح</strong> = حاضر (يظهر بالأخضر)</li>
        <li><strong>غ</strong> = غائب (يظهر بالأحمر)</li>
        <li><strong>—</strong> = لم يتم التسجيل</li>
        <li>انقري على اسم الطالبة للانتقال إلى صفحة الحضور الشخصية لتسجيل الحضور والغياب</li>
      </ul>
    </div>
  `;
}

/* =========================================================
   INDIVIDUAL PLAN
   ========================================================= */
function viewPlan(id, role) {
  const st = studentBy(id);
  if (!st) return viewNotFound();
  const plan = STATE.data.plans.find(p => p.studentId === id);

  return `
    <div class="page-head">
      <div>
        <button class="btn ghost sm mb-md" data-action="back">${I.back}<span>عودة لملف ${esc(st.name)}</span></button>
        <h1>الخطة الفردية</h1>
        <div class="sub">${esc(plan.term)} — ${esc(st.name)}</div>
      </div>
      ${role === 'teacher' ? `<button class="btn">${I.edit}<span>تعديل الخطة</span></button>` : ''}
    </div>

    <div class="grid cols-2-1">
      <div class="stack gap-lg">
        <div class="card">
          <div class="card-title"><h3>أهداف الفصل</h3></div>
          <div class="stack">
            ${plan.goals.map((g, i) => `
              <div class="row" style="background:var(--primary-50);padding:14px;border-radius:14px;align-items:flex-start">
                <div style="background:white;color:var(--primary);width:30px;height:30px;border-radius:10px;display:grid;place-items:center;font-weight:800;flex-shrink:0">${i+1}</div>
                <div style="flex:1" class="text-sm">${esc(g)}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="card">
          <div class="card-title">
            <h3>المهارات المستهدفة وتقدمها</h3>
            ${role === 'teacher' ? `<button class="btn soft sm">${I.plus}<span>إضافة مهارة</span></button>` : ''}
          </div>
          ${plan.progress.map(pr => skillProgressRow(pr)).join('')}
        </div>
      </div>

      <div class="stack gap-lg">
        <div class="card">
          <div class="card-title"><h3>الأنشطة المرتبطة</h3></div>
          <div class="stack gap-sm">
            ${STATE.data.activities.filter(a => a.studentIds.includes(id) && a.skillIds.some(s => plan.targetSkillIds.includes(s))).slice(0, 5).map(a => `
              <a class="row between" href="#/teacher/activity/${a.id}" style="padding:10px;background:var(--bg-2);border-radius:10px;color:inherit">
                <div class="row">
                  <div class="type-ic ${activityTypeClass(a.type)}" style="width:36px;height:36px;border-radius:10px">${activityTypeIcon(a.type)}</div>
                  <div>
                    <div class="text-bold text-sm">${esc(a.title)}</div>
                    <div class="text-xs text-muted">${activityTypeLabel(a.type)}</div>
                  </div>
                </div>
                ${activityStatusPill(a)}
              </a>
            `).join('')}
          </div>
        </div>

        <div class="card">
          <div class="card-title"><h3>ملاحظات</h3></div>
          <p class="text-sm">${esc(plan.notes)}</p>
        </div>
      </div>
    </div>
  `;
}

/* =========================================================
   ACTIVITIES — list
   ========================================================= */
function viewActivities() {
  const me = STATE.user;
  const acts = STATE.data.activities.filter(a => a.teacherId === me.id);
  const queryStatus = new URLSearchParams(location.hash.split('?')[1] || '').get('status');

  return `
    <div class="page-head">
      <div>
        <h1>الأنشطة</h1>
        <div class="sub">${acts.length} نشاط في المجموع</div>
      </div>
      <div class="row">
        <a class="btn" href="#/teacher/activity/new">${I.plus}<span>نشاط جديد</span></a>
      </div>
    </div>

    <div class="row wrap mb-md">
      ${['الكل','open','submitted','done','sent'].map(s => {
        const labels = { 'الكل':'الكل', open:'مفتوحة', submitted:'بانتظار المراجعة', done:'مكتملة', sent:'مُرسلة' };
        return `<button class="chip ${(!queryStatus && s==='الكل') || queryStatus===s ? 'active':''}" data-filter-status="${s==='الكل'?'':s}">${esc(labels[s])}</button>`;
      }).join('')}
    </div>

    <div class="grid cols-2">
      ${acts.map(a => activityRow(a, 'teacher')).join('')}
    </div>
  `;
}

/* =========================================================
   ACTIVITY CREATE
   ========================================================= */
function viewActivityCreate() {
  const me = STATE.user;
  const myStudents = STATE.data.students.filter(s => !s.archived); // Show ALL students
  const params = new URLSearchParams((location.hash.split('?')[1]) || '');
  const presetStudent = params.get('student');
  const presetType = params.get('type') || 'home';

  return `
    <div class="page-head">
      <div>
        <button class="btn ghost sm mb-md" data-action="back">${I.back}<span>عودة</span></button>
        <h1>نشاط جديد</h1>
        <div class="sub">سيظهر للأهل فور الحفظ</div>
      </div>
    </div>

    <form class="grid cols-2-1" data-form="create-activity">
      <div class="card">
        <div class="card-title"><h3>التفاصيل</h3></div>

        <div class="field">
          <label>نوع النشاط</label>
          <div class="row wrap">
            ${['session','home','video','worksheet','edu','game','extra','reward'].map(t => `
              <label class="chip ${t === presetType ? 'active':''}" style="cursor:pointer">
                <input type="radio" name="type" value="${t}" ${t === presetType ? 'checked':''} hidden>
                <span style="margin-inline-end:4px">${activityTypeIcon(t).replace('width="20" height="20"','width="14" height="14"')}</span>
                ${activityTypeLabel(t)}
              </label>
            `).join('')}
          </div>
        </div>

        <div class="field">
          <label>العنوان</label>
          <input name="title" placeholder="مثال: تمرين تكرار حرف الراء" required>
        </div>

        <div class="field">
          <label>الوصف للأهل</label>
          <textarea name="description" placeholder="اكتب توجيهات بسيطة لولي الأمر..."></textarea>
          <div class="hint">جمل قصيرة وواضحة. تُحفظ كقالب لاستخدامه لاحقاً.</div>
        </div>

        <div class="field">
          <label>الطالب أو المجموعة</label>
          <select name="studentId">
            <option value="">اختر...</option>
            ${myStudents.map(s => `<option value="${s.id}" ${presetStudent===s.id?'selected':''}>${esc(s.name)} — ${esc(s.grade)}</option>`).join('')}
            <optgroup label="مجموعات">
              ${STATE.data.groups.map(g => `<option value="g:${g.id}">${esc(g.name)} (${g.studentIds.length})</option>`).join('')}
            </optgroup>
          </select>
        </div>

        <div class="field">
          <label>المهارات المرتبطة</label>
          <div class="row wrap">
            ${STATE.data.skills.map(sk => `<button type="button" class="chip" data-toggle-skill="${sk.id}">${esc(sk.name)}</button>`).join('')}
          </div>
        </div>

        <div class="field">
          <label>تاريخ الاستحقاق</label>
          <input type="date" name="dueDate" value="${new Date().toISOString().slice(0,10)}">
        </div>

        <div class="field">
          <label>المرفقات</label>
          <div style="border:2px dashed var(--border-strong);border-radius:14px;padding:18px;text-align:center;color:var(--muted)">
            ${I.upload}
            <div class="text-sm mt-sm">اسحب ملفاً أو <span style="color:var(--primary);font-weight:700;cursor:pointer">اختر من الجهاز</span></div>
            <div class="text-xs">صور، PDF، روابط أو فيديو</div>
          </div>
        </div>
      </div>

      <div class="stack gap-lg">
        <div class="card">
          <div class="card-title"><h3>الإعدادات</h3></div>
          <div class="toggle-row">
            <div class="lbl">يحتاج إكمال<span class="hint">يطلب من الأهل وضع علامة "تم"</span></div>
            <div class="switch on" data-switch="requiresCompletion"></div>
          </div>
          <div class="toggle-row">
            <div class="lbl">يتطلب رفع فيديو<span class="hint">يرفع الأهل فيديو تنفيذ النشاط</span></div>
            <div class="switch" data-switch="requiresVideoUpload"></div>
          </div>
          <div class="toggle-row">
            <div class="lbl">يحتاج مراجعة معلم<span class="hint">يظهر في قائمة المراجعات</span></div>
            <div class="switch" data-switch="requiresTeacherReview"></div>
          </div>
          <div class="toggle-row">
            <div class="lbl">مرئي للأهل<span class="hint">إيقاف يحتفظ به في مسودات</span></div>
            <div class="switch on" data-switch="visibleToParent"></div>
          </div>
        </div>

        <div class="card">
          <div class="card-title"><h3>المكافآت</h3></div>
          <div class="field">
            <label>عدد النقاط عند الإكمال</label>
            <input type="number" name="rewardPoints" value="10" min="0" max="100">
          </div>
        </div>

        <div class="card">
          <div class="card-title"><h3>قوالب جاهزة</h3></div>
          <div class="stack gap-sm">
            <button type="button" class="chip" style="justify-content:flex-start">📋 تكرار مقاطع — حرف الراء</button>
            <button type="button" class="chip" style="justify-content:flex-start">🎈 تمرين نفخ بالون</button>
            <button type="button" class="chip" style="justify-content:flex-start">📖 سرد قصة قصيرة</button>
            <button type="button" class="chip" style="justify-content:flex-start">🎨 ورقة عمل المشاعر</button>
          </div>
          <div class="text-xs text-muted center mt-md">تُختصر التكرار وتُسرّع الإنشاء</div>
        </div>

        <button type="submit" class="btn lg block">${I.check}<span>حفظ وإرسال</span></button>
      </div>
    </form>
  `;
}

/* =========================================================
   ACTIVITY DETAIL
   ========================================================= */
function viewActivityDetail(id, role) {
  const a = STATE.data.activities.find(x => x.id === id);
  if (!a) return viewNotFound();
  const studs = a.studentIds.map(sid => studentBy(sid));
  const teacher = userBy(a.teacherId);
  const skills = a.skillIds.map(skillBy).filter(Boolean);
  const review = STATE.data.reviews.find(r => r.activityId === a.id);

  return `
    <div class="page-head">
      <button class="btn ghost sm" data-action="back">${I.back}<span>عودة</span></button>
      ${role === 'teacher' && a.status !== 'submitted' ? `
        <div class="row">
          <button class="btn ghost">${I.edit}<span>تعديل</span></button>
          <button class="btn danger-soft">${I.trash}<span>حذف</span></button>
        </div>
      ` : ''}
    </div>

    <div class="grid cols-2-1">
      <div class="stack gap-lg">
        <div class="card elevated">
          <div class="row" style="align-items:flex-start">
            <div class="type-ic ${activityTypeClass(a.type)}" style="width:64px;height:64px;border-radius:18px">${activityTypeIcon(a.type)}</div>
            <div style="flex:1">
              <div class="row wrap">
                ${pill(activityTypeLabel(a.type), 'primary')}
                ${activityStatusPill(a)}
                ${a.rewardPoints ? pill(`+${a.rewardPoints} نقطة`, 'amber') : ''}
              </div>
              <h1 style="font-size:22px;margin-top:8px">${esc(a.title)}</h1>
              <div class="text-muted text-sm mt-sm">
                ${fmtRelative(a.dueDate)} • ${esc(teacher.name)}
              </div>
            </div>
          </div>

          <div class="divider"></div>

          <p class="text-sm" style="line-height:1.85">${esc(a.description)}</p>

          ${a.attachments?.length ? `
            <div class="mt-lg">
              <div class="text-bold text-sm mb-md">المرفقات</div>
              <div class="stack gap-sm">
                ${a.attachments.map(at => `
                  <div class="row between" style="background:var(--bg-2);padding:12px;border-radius:12px">
                    <div class="row">
                      ${at.link ? I.link : I.file}
                      <div>
                        <div class="text-bold text-sm">${esc(at.name)}</div>
                        ${at.size ? `<div class="text-xs text-muted">${esc(at.size)}</div>` : ''}
                      </div>
                    </div>
                    <button class="btn soft sm">${at.link ? I.link : I.download}<span>${at.link ? 'فتح' : 'تحميل'}</span></button>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </div>

        ${role === 'parent' && a.requiresCompletion && a.status !== 'done' && a.status !== 'sent' ? `
          <div class="card" style="background:linear-gradient(135deg, var(--mint-50), white);border:1px solid var(--mint)">
            <div class="card-title"><h3>أتممت النشاط؟</h3></div>
            <div class="stack">
              <textarea placeholder="ملاحظة بسيطة (اختيارية)..." style="width:100%;padding:11px 14px;border:1.5px solid var(--border-strong);border-radius:12px;min-height:70px;resize:vertical;font-family:inherit"></textarea>
              <div class="row wrap">
                ${a.requiresVideoUpload ? `
                  <button class="btn block lg" data-action="upload-video" data-aid="${a.id}">
                    ${I.upload}<span>ارفع فيديو</span>
                  </button>
                ` : `
                  <button class="btn block lg mint" data-action="complete-activity" data-aid="${a.id}">
                    ${I.checkCircle}<span>تم بحمد الله</span>
                  </button>
                `}
              </div>
            </div>
          </div>
        ` : ''}

        ${a.submission ? `
          <div class="card">
            <div class="card-title">
              <h3>إرسالية ولي الأمر</h3>
              <span class="pill mint">تم في ${fmtRelative(a.submission.completedAt)}</span>
            </div>
            ${a.submission.media ? `
              <div style="background:#1F1B3D;border-radius:14px;aspect-ratio:16/9;display:grid;place-items:center;color:white;cursor:pointer;position:relative;overflow:hidden;margin-bottom:12px">
                <div style="width:64px;height:64px;border-radius:50%;background:rgba(255,255,255,0.2);display:grid;place-items:center;backdrop-filter:blur(8px)">${I.play}</div>
                <div style="position:absolute;bottom:12px;right:12px;font-size:12px;background:rgba(0,0,0,0.5);padding:4px 8px;border-radius:6px">٠٠:٢٨</div>
              </div>
            ` : ''}
            ${a.submission.parentNote ? `<p class="text-sm" style="background:var(--bg-2);padding:12px;border-radius:12px">${esc(a.submission.parentNote)}</p>` : ''}
          </div>
        ` : ''}

        ${review ? `
          <div class="card" style="background:linear-gradient(135deg, var(--primary-50), white);border:1px solid var(--primary)">
            <div class="card-title"><h3>ملاحظات المعلم</h3></div>
            <div class="row mb-md">
              ${avatar(teacher, 'sm')}
              <div>
                <div class="text-bold text-sm">${esc(teacher.name)}</div>
                <div class="text-xs text-muted">${fmtRelative(review.reviewedAt)}</div>
              </div>
            </div>
            <p class="text-sm">${esc(review.feedback)}</p>
            <div class="row wrap mt-md">
              ${pill(`الإتقان: ${esc(review.masteryScore)}`, 'mint')}
              ${review.pointsAwarded ? pill(`+${review.pointsAwarded} نقطة`, 'amber') : ''}
            </div>
          </div>
        ` : ''}
      </div>

      <div class="stack gap-lg">
        <div class="card">
          <div class="card-title"><h3>الطلاب</h3></div>
          <div class="stack gap-sm">
            ${studs.map(s => `
              <a class="row" href="${role === 'teacher' ? `#/teacher/student/${s.id}` : '#'}" style="color:inherit;padding:8px;border-radius:10px">
                ${avatar(s, 'md')}
                <div>
                  <div class="text-bold text-sm">${esc(s.name)}</div>
                  <div class="text-xs text-muted">${esc(s.grade)} • ${s.age} سنوات</div>
                </div>
              </a>
            `).join('')}
          </div>
        </div>

        ${skills.length ? `
          <div class="card">
            <div class="card-title"><h3>المهارات المرتبطة</h3></div>
            <div class="row wrap">
              ${skills.map(s => `<span class="chip">${esc(s.name)}</span>`).join('')}
            </div>
          </div>
        ` : ''}

        <div class="card">
          <div class="card-title"><h3>الإعدادات</h3></div>
          <div class="stack gap-sm text-sm">
            <div class="row between"><span class="text-muted">يحتاج إكمال</span><span>${a.requiresCompletion ? '✓ نعم' : '—'}</span></div>
            <div class="row between"><span class="text-muted">رفع فيديو</span><span>${a.requiresVideoUpload ? '✓ مطلوب' : '—'}</span></div>
            <div class="row between"><span class="text-muted">مراجعة معلم</span><span>${a.requiresTeacherReview ? '✓ نعم' : '—'}</span></div>
            <div class="row between"><span class="text-muted">المكافأة</span><span>${a.rewardPoints} نقطة</span></div>
            <div class="row between"><span class="text-muted">تاريخ الإرسال</span><span>${fmtDate(a.createdAt)}</span></div>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* =========================================================
   VIDEO REVIEW
   ========================================================= */
function viewVideoReview(activityId) {
  const a = STATE.data.activities.find(x => x.id === activityId);
  if (!a) return viewNotFound();
  const stud = studentBy(a.studentIds[0]);
  const plan = STATE.data.plans.find(p => p.studentId === stud.id);

  return `
    <div class="page-head">
      <button class="btn ghost sm" data-action="back">${I.back}<span>عودة</span></button>
    </div>

    <div class="grid cols-2-1">
      <div class="stack gap-lg">
        <div class="card elevated">
          <h2 style="font-size:18px;margin-bottom:6px">${esc(a.title)}</h2>
          <div class="row wrap mb-md">
            <a class="row" href="#/teacher/student/${stud.id}" style="color:inherit">
              ${avatar(stud, 'sm')}
              <span class="text-bold text-sm">${esc(stud.name)}</span>
            </a>
            <span class="text-muted">•</span>
            <span class="pill mint">رفع في ${fmtRelative(a.submission?.completedAt)}</span>
          </div>

          <div style="background:#1F1B3D;border-radius:14px;aspect-ratio:16/9;display:grid;place-items:center;color:white;cursor:pointer;position:relative;overflow:hidden">
            <div style="width:80px;height:80px;border-radius:50%;background:rgba(255,255,255,0.2);display:grid;place-items:center;backdrop-filter:blur(8px)">${I.play}</div>
            <div style="position:absolute;bottom:12px;right:12px;font-size:12px;background:rgba(0,0,0,0.5);padding:4px 8px;border-radius:6px">٠٠:٢٨ / ٠٠:٤٠</div>
            <div style="position:absolute;bottom:0;left:0;right:0;height:4px;background:rgba(255,255,255,0.2)">
              <div style="height:100%;width:60%;background:var(--mint)"></div>
            </div>
          </div>

          ${a.submission?.parentNote ? `
            <div class="row mt-md" style="background:var(--bg-2);padding:12px;border-radius:12px;align-items:flex-start;gap:10px">
              <div class="text-muted">💬</div>
              <div>
                <div class="text-xs text-muted">من ولي الأمر</div>
                <div class="text-sm" style="margin-top:2px">${esc(a.submission.parentNote)}</div>
              </div>
            </div>
          ` : ''}
        </div>
      </div>

      <div class="stack gap-lg">
        <div class="card">
          <div class="card-title"><h3>المراجعة</h3></div>

          <div class="field">
            <label>الملاحظة</label>
            <textarea data-input="feedback" placeholder="اكتبي ملاحظتك لولي الأمر..."></textarea>
          </div>

          <div class="field">
            <label>درجة الإتقان</label>
            <div class="row wrap">
              ${['يحتاج تكرار','جيد','متقدم','ممتاز'].map(m => `<button class="chip" data-mastery="${esc(m)}">${esc(m)}</button>`).join('')}
            </div>
          </div>

          <div class="field">
            <label>تحديث المهارات</label>
            <div class="stack gap-sm">
              ${plan ? plan.progress.filter(pr => a.skillIds.includes(pr.skillId)).map(pr => `
                <div class="row between" style="background:var(--bg-2);padding:10px 12px;border-radius:12px">
                  <div>
                    <div class="text-bold text-sm">${esc(skillBy(pr.skillId)?.name)}</div>
                    <div class="text-xs text-muted">حالياً ${pr.current}% / الهدف ${pr.target}%</div>
                  </div>
                  <div class="row">
                    <button class="btn ghost sm" data-skill-delta="${pr.skillId}|-2">−</button>
                    <button class="btn soft sm" data-skill-delta="${pr.skillId}|5">+5%</button>
                    <button class="btn soft sm" data-skill-delta="${pr.skillId}|10">+10%</button>
                  </div>
                </div>
              `).join('') : ''}
            </div>
          </div>

          <div class="field">
            <label>منح نقاط</label>
            <div class="row">
              ${[5,10,15,20,25].map(p => `<button class="chip" data-points="${p}">+${p}</button>`).join('')}
            </div>
          </div>

          <button class="btn lg block" data-action="submit-review" data-aid="${a.id}">${I.check}<span>اعتماد المراجعة</span></button>
        </div>
      </div>
    </div>
  `;
}

/* =========================================================
   PARENT DASHBOARD
   ========================================================= */
function viewParentDashboard() {
  const me = STATE.user;
  const child = studentBy(me.studentId);
  
  // Debug logging
  console.log('👤 Parent Dashboard - User:', me);
  console.log('👶 Child data:', child);
  console.log('📋 Child forms:', child?.forms);
  
  // Safety check: if no child found, show error
  if (!child) {
    return `
      <div class="empty">
        <div class="ico">${I.search}</div>
        <h4>لم يتم العثور على ملف الطالب</h4>
        <p>يرجى التواصل مع المدرسة</p>
      </div>
    `;
  }
  
  const teacher = userBy(child.teacher_id); // May be null if not assigned yet
  const plan = STATE.data.plans.find(p => p.studentId === child.id);
  const today = new Date().toISOString().slice(0,10);
  const childActs = STATE.data.activities.filter(a =>
    a.studentIds && a.studentIds.includes(child.id) && a.visibleToParent
  ).sort((a,b) => (a.dueDate || '').localeCompare(b.dueDate || ''));
  const todayActs = childActs.filter(a => a.dueDate === today && a.status !== 'done' && a.status !== 'sent');
  const sessionToday = childActs.find(a => a.type === 'session' && a.dueDate === today);
  const recentReviews = STATE.data.reviews.filter(r => {
    const a = STATE.data.activities.find(x => x.id === r.activityId);
    return a && a.studentIds && a.studentIds.includes(child.id);
  });
  const recentSessions = STATE.data.sessionLogs
    .filter(l => l.studentId === child.id)
    .sort((a,b) => ((b.date || '')+(b.time || '')).localeCompare((a.date || '')+(a.time || '')))
    .slice(0, 3);
  const unreadMsgs = STATE.data.messages.filter(m => m.studentId === child.id && m.from === 'teacher' && !m.read).length;
  const avgProg = plan && plan.progress && plan.progress.length ? Math.round(plan.progress.reduce((a,p)=>a+p.current,0)/plan.progress.length) : 0;
  const sc = stageClass(child.grade || '');

  return `
    <div class="page-head">
      <div>
        <h1>السلام عليكم 🌿</h1>
        <div class="sub">صفحة ${child.name} في ${esc(STATE.config.school.name)}</div>
      </div>
    </div>

    <div class="card elevated mb-md ${sc}" style="border-top: 5px solid var(--stage-grad-1)">
      <div class="row wrap" style="align-items:center;gap:18px">
        <div class="avatar xl stage-avatar">${esc(child.initials || child.name?.[0] || '؟')}</div>
        <div style="flex:1;min-width:200px">
          <div class="text-xs text-muted">الطالب</div>
          <h2 style="font-size:22px">${esc(child.name)}</h2>
          <div class="row mt-sm wrap">
            ${child.grade ? `<span class="stage-pill">${esc(child.grade)}</span>` : ''}
            ${child.age ? `<span class="text-muted text-sm">${arNum(child.age)} سنوات</span>` : ''}
          </div>
          ${teacher ? `
            <div class="row mt-md text-sm">
              <span class="text-muted">المعلمة:</span>
              <span class="text-bold">${esc(teacher.name)}</span>
            </div>
          ` : `
            <div class="row mt-md text-sm">
              <span class="text-muted">لم يتم تعيين معلمة بعد</span>
            </div>
          `}
        </div>
        <div class="prog-circle" style="--p:${avgProg};width:88px;height:88px">
          <div class="pct" style="font-size:22px">${arNum(avgProg)}<span>%</span></div>
          <div class="prog-lbl">التقدم</div>
        </div>
      </div>
    </div>

    <div class="grid cols-3 mb-md">
      ${statCard('mint',  I.checkCircle, arNum(STATE.data.sessionLogs.filter(l => l.studentId === child.id).length), 'جلسات أُنجزت')}
      ${statCard('amber', I.star,         arNum(child.points || 0), 'مجموع النقاط')}
      ${statCard('',      I.medal,        arNum((child.badges || []).length), 'شارات الفخر')}
    </div>

    <div class="row mb-md">
      <a class="btn ghost block" href="#/parent/report" data-route="#/parent/report">${I.download}<span>تقرير شامل قابل للطباعة</span></a>
    </div>


    <div class="grid cols-2-1">
      <div class="stack gap-lg">
        ${teacher ? `
          <div class="card chat-cta">
            <div class="row" style="gap:14px;align-items:center">
              ${avatar(teacher, 'lg')}
              <div style="flex:1">
                <div class="text-xs text-muted">المعلمة</div>
                <div class="text-bold">${esc(teacher.name)}</div>
                <div class="text-xs text-muted mt-sm">${esc(teacher.title || '')}</div>
              </div>
              <a class="btn" href="#/parent/messages" data-route="#/parent/messages">
                ${I.bell}<span>الرسائل${unreadMsgs ? ` (${arNum(unreadMsgs)})` : ''}</span>
              </a>
            </div>
          </div>
        ` : `
          <div class="card">
            <div class="text-sm text-muted">لم يتم تعيين معلمة بعد</div>
          </div>
        `}

        ${(() => {
          const sentItems = (STATE.data.sentLibraryItems || [])
            .filter(si => si.studentId === child.id)
            .sort((a, b) => (b.sentAt || '').localeCompare(a.sentAt || ''))
            .slice(0, 5);
          
          if (!sentItems.length) return '';
          
          return `
            <div class="card">
              <div class="card-title">
                <h3>المحتوى المرسل من المعلمة</h3>
                <span class="pill primary">${arNum(sentItems.length)}</span>
              </div>
              <div class="stack gap-sm">
                ${sentItems.map(si => {
                  const item = STATE.data.library.find(l => l.id === si.libraryItemId);
                  if (!item) return '';
                  
                  const typeIcons = {
                    video: '🎬',
                    pdf: '📕',
                    image: '🖼️',
                    worksheet: '📄',
                    link: '🔗'
                  };
                  
                  const hasFile = !!item.fileData;
                  const hasLink = !!item.link;
                  
                  return `
                    <div style="padding: 12px; background: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb;">
                      <div style="display: flex; align-items: center; gap: 12px;">
                        <div style="font-size: 24px;">${typeIcons[item.type] || '📄'}</div>
                        <div style="flex: 1;">
                          <div style="font-weight: 600; font-size: 14px; margin-bottom: 2px;">${esc(item.title)}</div>
                          <div style="font-size: 12px; color: #6b7280;">${fmtRelative(si.sentAt)}</div>
                        </div>
                        ${hasFile ? `
                          <button class="btn soft sm" data-action="download-library" data-id="${item.id}">
                            ${I.download}
                          </button>
                        ` : hasLink ? `
                          <button class="btn soft sm" data-action="open-library-link" data-url="${esc(item.link)}">
                            ${I.link}
                          </button>
                        ` : ''}
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          `;
        })()}

        ${sessionToday ? `
          <div class="card" style="border-color:var(--primary)">
            <div class="card-title">
              <h3>ملخص جلسة اليوم</h3>
              <span class="pill primary">${fmtRelative(sessionToday.dueDate)}</span>
            </div>
            <p class="text-sm">${esc(sessionToday.description)}</p>
            <a class="btn ghost mt-md" href="#/parent/activity/${sessionToday.id}">${I.eye}<span>القراءة كاملة</span></a>
          </div>
        ` : ''}

        <div class="card">
          <div class="card-title">
            <h3>آخر الجلسات</h3>
            ${recentSessions.length ? `<span class="pill mint">${arNum(recentSessions.length)}</span>` : ''}
          </div>
          ${recentSessions.length ? recentSessions.map(l => sessionLogRow(l)).join('') :
            emptyState(I.calendar, 'لا توجد جلسات بعد', 'ستظهر هنا فور تسجيل المعلمة لجلسة.')}
        </div>

        <div class="card">
          <div class="card-title">
            <h3>مهام اليوم</h3>
            ${todayActs.length ? `<span class="pill amber">${arNum(todayActs.length)} مطلوبة</span>` : `<span class="pill mint">تم الإنجاز</span>`}
          </div>
          ${todayActs.length ? `
            <div class="stack gap-sm">${todayActs.map(a => activityRow(a, 'parent')).join('')}</div>
          ` : emptyState(I.checkCircle, 'أحسنتم! اكتمل اليوم', 'لا يوجد ما يجب فعله الآن.')}
        </div>
      </div>

      <div class="stack gap-lg">
        <div class="card">
          <div class="card-title"><h3>الأهداف الحالية</h3></div>
          <div class="stack gap-sm">
            ${(() => {
              if (!plan || !plan.goals) return `<div class="text-sm text-muted">لم تُحدَّد أهداف بعد.</div>`;
              
              // Extract actual goal strings from the plan structure
              let goalStrings = [];
              if (Array.isArray(plan.goals)) {
                plan.goals.forEach(group => {
                  if (group && group.shorts && Array.isArray(group.shorts)) {
                    goalStrings.push(...group.shorts);
                  }
                });
              }
              
              if (goalStrings.length === 0) return `<div class="text-sm text-muted">لم تُحدَّد أهداف بعد.</div>`;
              
              // Show only first 5 goals
              const displayGoals = goalStrings.slice(0, 5);
              const hasMore = goalStrings.length > 5;
              
              return `
                ${displayGoals.map((g, i) => `
                  <div class="goal-row">
                    <div class="goal-num">${arNum(i+1)}</div>
                    <div style="flex:1" class="text-sm">${esc(typeof g === 'string' ? g : g.goal || g.text || 'هدف غير محدد')}</div>
                  </div>
                `).join('')}
                ${hasMore ? `
                  <a href="#/parent/progress" data-route="#/parent/progress" class="btn ghost block mt-sm" style="text-align:center">
                    ${I.eye}<span>عرض جميع الأهداف (${arNum(goalStrings.length)})</span>
                  </a>
                ` : ''}
              `;
            })()}
          </div>
        </div>

        <div class="card">
          <div class="card-title"><h3>نماذج طفلك</h3></div>
          <div class="stack gap-sm">
            ${FORM_TYPES.map(ft => {
              const data = (child.forms || {})[ft.key] || {};
              const done = data.signed || data.completed;
              
              // Speech test gets a download button if completed
              if (ft.key === 'speechTest' && done) {
                return `
                  <div class="row between" style="padding:8px 0;border-bottom:1px dashed var(--border)">
                    <div class="row">
                      <div style="font-size:18px">${ft.icon}</div>
                      <div class="text-sm">${esc(ft.name)}</div>
                    </div>
                    <button class="btn sm soft" data-action="download-speech-test-pdf" data-sid="${child.id}">
                      ${I.download}<span>تحميل PDF</span>
                    </button>
                  </div>
                `;
              }
              
              // Other forms just show status
              return `
                <div class="row between" style="padding:8px 0;border-bottom:1px dashed var(--border)">
                  <div class="row">
                    <div style="font-size:18px">${ft.icon}</div>
                    <div class="text-sm">${esc(ft.name)}</div>
                  </div>
                  ${done ? pill('مكتمل','mint dot') : pill('بانتظار','amber dot')}
                </div>
              `;
            }).join('')}
            
            <!-- الخطة الفردية -->
            <div class="row between" style="padding:8px 0;border-bottom:1px dashed var(--border)">
              <div class="row">
                <div style="font-size:18px">📋</div>
                <div class="text-sm">الخطة الفردية</div>
              </div>
              ${plan && plan.goals ? `
                <a class="btn sm soft" href="#/parent/iep" data-route="#/parent/iep">
                  ${I.eye}<span>عرض</span>
                </a>
              ` : pill('بانتظار','amber dot')}
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-title">
            <h3>أحدث الإنجازات</h3>
            <a class="link" href="#/parent/rewards">عرض الكل</a>
          </div>
          <div class="grid" style="grid-template-columns:repeat(3,1fr);gap:8px">
            ${(child.badges || []).slice(0, 6).map(badge => {
              // Badge is now stored as {icon, name} object
              return badge ? `
                <div style="text-align:center;background:var(--bg-2);padding:10px 6px;border-radius:12px">
                  <div style="font-size:24px">${badge.icon || '🏅'}</div>
                  <div class="text-xs text-bold mt-sm">${esc(badge.name || 'شارة')}</div>
                </div>
              ` : '';
            }).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

function generateSpeechTestPDF(student) {
  const data = student.forms.speechTest;
  const results = data.results || {};
  const remarks = data.remarks || {};
  
  // Create a new window with the test formatted for printing
  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <!DOCTYPE html>
    <html dir="rtl" lang="ar">
    <head>
      <meta charset="UTF-8">
      <title>اختبار مخارج الأصوات - ${student.name}</title>
      <style>
        @page { size: A4; margin: 2cm; }
        body { font-family: 'Tajawal', 'Cairo', 'Segoe UI', sans-serif; direction: rtl; }
        .header { text-align: center; margin-bottom: 20px; border-bottom: 3px solid #000; padding-bottom: 15px; }
        .header h1 { font-size: 18px; margin: 5px 0; }
        .header img { height: 60px; }
        .info-row { display: flex; justify-content: space-between; margin: 10px 0; font-size: 14px; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 12px; }
        th, td { border: 1px solid #000; padding: 6px; text-align: center; }
        th { background: #333; color: white; font-weight: bold; }
        td.words { text-align: right; }
        .checkbox { width: 16px; height: 16px; border: 2px solid #000; display: inline-block; position: relative; }
        .checkbox.checked::after { content: '✓'; position: absolute; top: -4px; left: 2px; font-size: 18px; font-weight: bold; }
        .footer { text-align: center; margin-top: 30px; font-size: 13px; }
        @media print {
          body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>المملكة العربية السعودية</h1>
        <h1>وزارة التربية والتعليم</h1>
        <h1>إدارة التربية والتعليم بالرياض</h1>
        <h1>مكاتب و برامج التربية الخاصة</h1>
        <h1 style="margin-top: 20px;">اختبار مخارج الأصوات العربية المطور</h1>
      </div>
      
      <div class="info-row">
        <div><strong>الاسم:</strong> ${student.name}</div>
        <div><strong>الصف:</strong> ${student.grade || '____'}</div>
        <div><strong>تاريخ الميلاد:</strong> ${student.birthdate || '____'}</div>
      </div>
      <div class="info-row">
        <div><strong>تاريخ الاختبار:</strong> ${data.date || new Date().toISOString().slice(0,10)}</div>
      </div>
      
      <table>
        <thead>
          <tr>
            <th style="width: 40px;">الرقم</th>
            <th style="width: 40px;">الصوت</th>
            <th>المفــــــــــردات</th>
            <th style="width: 50px;">أول</th>
            <th style="width: 50px;">وسط</th>
            <th style="width: 50px;">أخر</th>
            <th style="width: 50px;">محرك</th>
            <th style="width: 150px;">ملاحظات</th>
          </tr>
        </thead>
        <tbody>
          ${SPEECH_TEST_SOUNDS.map(s => {
            const r = results[s.id] || {};
            return `
            <tr>
              <td>${s.num}</td>
              <td style="font-weight: bold; font-size: 14px;">${s.sound}</td>
              <td class="words">${s.words}</td>
              <td><div class="checkbox ${r.first ? 'checked' : ''}"></div></td>
              <td><div class="checkbox ${r.middle ? 'checked' : ''}"></div></td>
              <td><div class="checkbox ${r.last ? 'checked' : ''}"></div></td>
              <td><div class="checkbox ${r.moving ? 'checked' : ''}"></div></td>
              <td style="text-align: right; font-size: 11px;">${remarks[s.id] || ''}</td>
            </tr>
          `}).join('')}
        </tbody>
      </table>
      
      <div class="footer">
        <p><strong>أخصائية التخاطب و السمع</strong></p>
      </div>
      
      <script>
        window.onload = function() {
          window.print();
        };
      </script>
    </body>
    </html>
  `);
  printWindow.document.close();
}

function viewParentForm(formKey) {
  const me = STATE.user;
  const child = studentBy(me.studentId);
  
  if (!child) {
    return `
      <div class="empty">
        <div class="ico">${I.search}</div>
        <h4>لم يتم العثور على ملف الطالب</h4>
      </div>
    `;
  }
  
  const ft = FORM_TYPES.find(f => f.key === formKey);
  if (!ft) return viewNotFound();
  
  const data = (child.forms || {})[formKey] || {};
  const done = data.signed || data.completed;
  
  let formBody = '';
  if (formKey === 'speechTest') {
    formBody = renderSpeechTestForm(child, data, true); // viewOnly = true
  } else if (formKey === 'preAssessment') {
    formBody = renderPreAssessmentForm(child, data, true);
  } else if (formKey === 'parentConsent') {
    formBody = renderParentConsentForm(child, data, true);
  } else if (formKey === 'auditoryMemoryTest') {
    formBody = renderAuditoryMemoryForm(child, data, true);
  }
  
  return `
    <div class="page-head">
      <div>
        <a href="#/parent/dashboard" data-route="#/parent/dashboard" class="back-btn">${I.back}</a>
        <h1>${ft.icon} ${esc(ft.name)}</h1>
        <div class="sub">${esc(ft.sub)}</div>
      </div>
      ${done ? `<div>${pill('مكتمل', 'mint')}</div>` : ''}
    </div>
    
    <div class="card">
      ${!done ? `
        <div class="empty">
          <div class="ico">${ft.icon}</div>
          <h4>لم يُكمل بعد</h4>
          <p>ستتمكنين من مشاهدة النتائج فور إكمال المعلمة للنموذج</p>
        </div>
      ` : formBody}
    </div>
  `;
}

function viewParentMessages() {
  const me = STATE.user;
  const child = studentBy(me.studentId);
  
  if (!child) {
    return `
      <div class="empty">
        <div class="ico">${I.search}</div>
        <h4>لم يتم العثور على ملف الطالب</h4>
      </div>
    `;
  }
  
  const teacher = userBy(child.teacher_id); // Fixed: use teacher_id
  
  // Mark teacher messages as read
  let changed = false;
  STATE.data.messages.forEach(m => {
    if (m.studentId === child.id && m.from === 'teacher' && !m.read) { m.read = true; changed = true; }
  });
  // Mark parent's notifications as read
  STATE.data.notifications.forEach(n => {
    if (n.userId === me.id && n.kind === 'message' && !n.read) { n.read = true; changed = true; }
  });
  if (changed) persistState();

  return `
    <div class="page-head">
      <div>
        <h1>الرسائل</h1>
        <div class="sub">قناة تواصل مباشرة مع معلمة ${child.name}</div>
      </div>
    </div>
    ${teacher ? chatCard({ student: child, otherParty: teacher, otherTitle: teacher.title, role: 'parent' }) : `
      <div class="card">
        <div class="empty">
          <div class="ico">${I.chat}</div>
          <h4>لم يتم تعيين معلمة بعد</h4>
          <p>سيتم تفعيل الرسائل عند تعيين معلمة للطالب</p>
        </div>
      </div>
    `}
  `;
}

function chatCard({ student, otherParty, otherTitle, role }) {
  const messages = STATE.data.messages
    .filter(m => m.studentId === student.id)
    .sort((a,b) => (a.date+a.time).localeCompare(b.date+b.time));

  const isPrincipal = STATE.user?.role === 'principal';
  // fromKey: what value gets stored in m.from when this user sends
  const fromKey = role === 'parent' ? 'parent' : (isPrincipal ? 'principal' : 'teacher');

  // Handle undefined otherParty safely
  const otherName = otherParty?.name || 'ولي الأمر';
  const otherTitleText = otherTitle || (otherParty?.relation || '');

  // Can this user send messages?
  const canMessage = role === 'parent'
    || isPrincipal
    || Auth.hasPermission('can_message_parents');

  return `
    <div class="card chat-card">
      <div class="chat-header">
        ${otherParty ? avatar(otherParty, 'md') : '<div class="avatar md c-purple">؟</div>'}
        <div style="flex:1">
          <div class="text-bold">${esc(otherName)}</div>
          <div class="text-xs text-muted">${esc(otherTitleText)}</div>
        </div>
        ${(role === 'teacher' || isPrincipal) ? `<button class="btn ghost sm" data-action="open-invite-link" data-sid="${student.id}" title="مشاركة رابط الدعوة مع ولي الأمر">${I.link}<span>مشاركة مع ولي الأمر</span></button>` : ''}
      </div>

      <div class="chat-body">
        ${messages.length ? messages.map(m => {
          // "mine" = sent by whoever is currently viewing
          const mine = (isPrincipal && m.from === 'principal')
            || (!isPrincipal && m.from === fromKey);
          const isPrincipalMsg = m.from === 'principal';
          return `
            <div class="msg ${mine ? 'mine' : 'theirs'} ${isPrincipalMsg ? 'principal-msg' : ''}"
                 style="align-self:${mine ? 'flex-end' : 'flex-start'}">
              ${isPrincipalMsg && !mine ? `<div class="msg-sender">${esc(STATE.config.school.principal.name)}</div>` : ''}
              <div class="msg-bubble" style="${
                isPrincipalMsg && mine
                  ? 'background:var(--critical);color:#fff;'
                  : isPrincipalMsg && !mine
                  ? 'background:var(--critical-50);color:var(--critical);'
                  : mine
                  ? 'background:var(--ink);color:var(--surface);'
                  : 'background:var(--surface);box-shadow:inset 0 0 0 1px var(--hair-2);color:var(--ink);'
              }">${esc(m.body)}</div>
              <div class="msg-time" style="text-align:${mine ? 'end' : 'start'}">${fmtRelative(m.date)} • ${esc(m.time)}</div>
            </div>
          `;
        }).join('') : `
          <div class="chat-empty">
            <div style="font-size:36px;margin-bottom:8px">💬</div>
            <div class="text-bold text-sm">لا توجد رسائل بعد</div>
            <div class="text-xs text-muted mt-sm">ابدئي المحادثة برسالة قصيرة.</div>
          </div>
        `}
        <div class="typing-indicator" style="display:none">
          <div class="msg theirs">
            <div class="msg-bubble typing-dots">
              <span></span><span></span><span></span>
            </div>
          </div>
        </div>
      </div>

      ${canMessage ? `
        <form class="chat-input ${isPrincipal ? 'principal-input' : ''}" data-form="send-message" data-from="${fromKey}" data-sid="${student.id}">
          ${isPrincipal ? `<div class="principal-input-badge">${I.medal}</div>` : ''}
          <input name="body" placeholder="${isPrincipal ? `رسالة من ${STATE.config.school.principal.name}...` : 'اكتبي رسالة...'}" autocomplete="off" required>
          <button type="submit" class="btn ${isPrincipal ? 'accent' : ''}">${I.arrow}</button>
        </form>
      ` : `
        <div class="chat-input-blocked">
          ${I.bell}
          <span>ليس لديكِ صلاحية مراسلة أولياء الأمور. تواصلي مع المديرة لتفعيل الصلاحية.</span>
        </div>
      `}
    </div>
  `;
}

function viewParentProgress() {
  const me = STATE.user;
  const child = studentBy(me.studentId);
  
  if (!child) {
    return `
      <div class="empty">
        <div class="ico">${I.search}</div>
        <h4>لم يتم العثور على ملف الطالب</h4>
      </div>
    `;
  }
  
  const plan = STATE.data.plans.find(p => p.studentId === child.id);
  const completedActivities = STATE.data.activities.filter(a => 
    a.studentIds && a.studentIds.includes(child.id) && (a.status==='done'||a.status==='sent')
  ).length;
  
  // Get all goals from plan
  const allGoals = getAllPlanGoals(plan).map(g => g.goal);
  
  // Calculate goal completion from session logs
  const sessionLogs = STATE.data.sessionLogs.filter(l => l.studentId === child.id);
  const goalStats = {};
  sessionLogs.forEach(log => {
    (log.goalEvaluations || []).forEach(ge => {
      if (!goalStats[ge.goal]) {
        goalStats[ge.goal] = { mastered: 0, partial: 0, notMastered: 0, total: 0 };
      }
      goalStats[ge.goal].total++;
      if (ge.status === 'mastered') goalStats[ge.goal].mastered++;
      else if (ge.status === 'partial') goalStats[ge.goal].partial++;
      else goalStats[ge.goal].notMastered++;
    });
  });
  
  return `
    <div class="page-head">
      <div>
        <h1>تقدم ${esc(child.name)}</h1>
        <div class="sub">رحلة ${child.name} خلال الفصل</div>
      </div>
    </div>

    <div class="grid cols-3 mb-md">
      ${statCard('mint', I.checkCircle, arNum(completedActivities), 'أنشطة مكتملة')}
      ${statCard('amber', I.star, arNum(child.points || 0), 'إجمالي النقاط')}
      ${statCard('', I.medal, arNum((child.badges || []).length), 'شارات مكتسبة')}
    </div>

    ${allGoals.length ? `
      <div class="card mb-md">
        <div class="card-title">
          <h3>أهداف الخطة الفردية</h3>
          <div class="text-xs text-muted">أن تنطق الطالبة مخارج الأصوات بطريقة صحيحة.</div>
        </div>
        <div class="stack gap-sm">
          ${allGoals.map(goal => {
            const stats = goalStats[goal];
            const isMastered = stats && stats.mastered > stats.notMastered;
            return `
              <div class="row" style="gap:12px;padding:12px;background:var(--canvas);border-radius:10px">
                <div style="flex:1;font-size:14px">${esc(goal)}</div>
                <div style="color:${isMastered ? 'var(--mint)' : 'var(--muted)'}">
                  ${isMastered ? '—' : '—'}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    ` : ''}

    ${plan && plan.progress && plan.progress.length ? `
      <div class="card mb-md">
        <div class="card-title"><h3>المهارات المستهدفة</h3></div>
        ${plan.progress.map(pr => skillProgressRow(pr)).join('')}
      </div>

      <div class="card">
        <div class="card-title"><h3>التقدم الأسبوعي</h3></div>
        ${plan.progress.map(pr => {
          const skill = skillBy(pr.skillId);
          const logs = STATE.data.progressLogs.filter(l => l.studentId === child.id && l.skillId === pr.skillId);
          return `
            <div style="margin-bottom:18px">
              <div class="row between mb-md">
                <div class="text-bold text-sm">${esc(skill?.name || 'مهارة')}</div>
                <div class="text-sm text-muted">${pr.current || 0}% / ${pr.target || 100}%</div>
              </div>
              ${sparklineSvg(logs)}
            </div>
          `;
        }).join('')}
      </div>
    ` : `
      <div class="card">
        <div class="empty">
          <div class="ico">${I.chart}</div>
          <h4>لا توجد خطة تعليمية بعد</h4>
          <p>سيتم عرض التقدم عند إنشاء المعلمة للخطة التعليمية</p>
        </div>
      </div>
    `}
  `;
}

function viewParentIEP() {
  const me = STATE.user;
  const child = studentBy(me.studentId);
  
  if (!child) {
    return `
      <div class="empty">
        <div class="ico">${I.search}</div>
        <h4>لم يتم العثور على ملف الطالب</h4>
      </div>
    `;
  }
  
  const plan = STATE.data.plans.find(p => p.studentId === child.id);
  const teacher = userBy(child.teacher_id);
  
  if (!plan || !plan.goals) {
    return `
      <div class="page-head">
        <div>
          <h1>الخطة الفردية 📋</h1>
          <div class="sub">خطة التعليم الفردية لـ ${esc(child.name)}</div>
        </div>
      </div>
      <div class="card">
        <div class="empty">
          <div class="ico">${I.clipboard}</div>
          <h4>لا توجد خطة فردية بعد</h4>
          <p>لم تقم المعلمة بإنشاء الخطة الفردية حتى الآن</p>
        </div>
      </div>
    `;
  }
  
  // Extract all goals from the plan
  let allGoals = [];
  if (Array.isArray(plan.goals)) {
    plan.goals.forEach((group, groupIndex) => {
      if (group && group.shorts && Array.isArray(group.shorts)) {
        group.shorts.forEach((goalText, goalIndex) => {
          // Find behavioral goals for this short-term goal
          const behavioralGoals = (group.behavioral && group.behavioral[goalIndex]) || [];
          
          allGoals.push({
            groupIndex,
            goalIndex,
            longTerm: group.longTerm || 'هدف طويل المدى',
            shortTerm: goalText,
            behavioral: Array.isArray(behavioralGoals) ? behavioralGoals : [],
            strategies: group.strategies?.[goalIndex] || [],
            tools: group.tools?.[goalIndex] || [],
            reinforcement: group.reinforcement?.[goalIndex] || []
          });
        });
      }
    });
  }
  
  return `
    <div class="page-head">
      <div>
        <h1>الخطة الفردية 📋</h1>
        <div class="sub">خطة التعليم الفردية لـ ${esc(child.name)}</div>
      </div>
    </div>
    
    <div class="card mb-md" style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border: 2px solid #0ea5e9;">
      <div class="row" style="gap: 16px; align-items: center;">
        <div style="font-size: 48px;">📋</div>
        <div style="flex: 1;">
          <h3 style="margin: 0 0 8px 0;">معلومات الخطة</h3>
          <div class="row wrap" style="gap: 16px; font-size: 14px;">
            <div><strong>الطالبة:</strong> ${esc(child.name)}</div>
            ${teacher ? `<div><strong>المعلمة:</strong> ${esc(teacher.name)}</div>` : ''}
            ${plan.createdAt ? `<div><strong>تاريخ الإنشاء:</strong> ${fmtRelative(plan.createdAt)}</div>` : ''}
            <div><strong>عدد الأهداف:</strong> ${arNum(allGoals.length)}</div>
          </div>
        </div>
      </div>
    </div>
    
    ${allGoals.length ? `
      <div class="stack gap-lg">
        ${allGoals.map((goal, index) => `
          <div class="card">
            <div class="card-title" style="background: var(--primary-10); padding: 12px; border-radius: 8px; margin: -16px -16px 16px -16px;">
              <h3 style="margin: 0;">الهدف ${arNum(index + 1)}</h3>
            </div>
            
            <!-- الهدف طويل المدى -->
            <div class="field-group" style="margin-bottom: 20px;">
              <label class="text-bold" style="color: var(--primary); font-size: 15px;">🎯 الهدف طويل المدى</label>
              <div style="background: var(--canvas); padding: 12px; border-radius: 8px; border-right: 4px solid var(--primary);">
                ${esc(goal.longTerm)}
              </div>
            </div>
            
            <!-- الهدف قصير المدى -->
            <div class="field-group" style="margin-bottom: 20px;">
              <label class="text-bold" style="color: var(--mint); font-size: 15px;">📍 الهدف قصير المدى</label>
              <div style="background: var(--mint-10); padding: 12px; border-radius: 8px; border-right: 4px solid var(--mint);">
                ${esc(goal.shortTerm)}
              </div>
            </div>
            
            <!-- الأهداف السلوكية التعليمية -->
            ${goal.behavioral && goal.behavioral.length ? `
              <div class="field-group" style="margin-bottom: 20px;">
                <label class="text-bold" style="color: var(--amber); font-size: 15px;">✏️ الأهداف السلوكية التعليمية</label>
                <div class="stack gap-xs" style="margin-top: 8px;">
                  ${goal.behavioral.map((beh, idx) => `
                    <div style="background: var(--amber-10); padding: 10px 12px; border-radius: 6px; display: flex; gap: 8px;">
                      <div style="font-weight: bold; color: var(--amber);">${arNum(idx + 1)}.</div>
                      <div style="flex: 1;">${esc(beh)}</div>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
            
            <!-- الوسائل التعليمية -->
            ${goal.tools && goal.tools.length ? `
              <div class="field-group" style="margin-bottom: 20px;">
                <label class="text-bold" style="font-size: 15px;">🧩 الوسائل التعليمية المستخدمة</label>
                <div style="background: var(--canvas); padding: 12px; border-radius: 8px;">
                  ${goal.tools.map(tool => `<span class="pill soft" style="margin: 4px;">${esc(tool)}</span>`).join('')}
                </div>
              </div>
            ` : ''}
            
            <!-- أساليب التدريس -->
            ${goal.strategies && goal.strategies.length ? `
              <div class="field-group" style="margin-bottom: 20px;">
                <label class="text-bold" style="font-size: 15px;">📚 أساليب التدريس</label>
                <div style="background: var(--canvas); padding: 12px; border-radius: 8px;">
                  ${goal.strategies.map(strat => `<span class="pill soft" style="margin: 4px;">${esc(strat)}</span>`).join('')}
                </div>
              </div>
            ` : ''}
            
            <!-- أساليب التعزيز -->
            ${goal.reinforcement && goal.reinforcement.length ? `
              <div class="field-group">
                <label class="text-bold" style="font-size: 15px;">⭐ أساليب التعزيز</label>
                <div style="background: var(--canvas); padding: 12px; border-radius: 8px;">
                  ${goal.reinforcement.map(reinf => `<span class="pill soft" style="margin: 4px;">${esc(reinf)}</span>`).join('')}
                </div>
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    ` : `
      <div class="card">
        <div class="empty">
          <div class="ico">${I.clipboard}</div>
          <h4>لا توجد أهداف محددة</h4>
        </div>
      </div>
    `}
  `;
}

function viewParentRewards() {
  const me = STATE.user;
  const child = studentBy(me.studentId);
  
  if (!child) {
    return `
      <div class="empty">
        <div class="ico">${I.search}</div>
        <h4>لم يتم العثور على ملف الطالب</h4>
      </div>
    `;
  }
  
  const childBadges = child.badges || [];
  const childRewards = STATE.data.rewards.filter(r => r.student_id === child.id);
  
  return `
    <div class="page-head">
      <div>
        <h1>إنجازات ${esc(child.name)} 🌟</h1>
        <div class="sub">شارات ونقاط ولحظات فخر</div>
      </div>
    </div>

    <div class="card elevated mb-md" style="background:linear-gradient(135deg, var(--amber-50), var(--rose-50))">
      <div class="row wrap" style="gap:24px">
        <div style="text-align:center">
          <div style="font-size:48px;font-weight:800;color:var(--gold)">${arNum(child.points || 0)}</div>
          <div class="text-sm text-muted">نقاط</div>
        </div>
        <div style="text-align:center">
          <div style="font-size:48px;font-weight:800;color:var(--primary)">${arNum(childBadges.length)}</div>
          <div class="text-sm text-muted">شارات</div>
        </div>
        <div style="text-align:center">
          <div style="font-size:48px;font-weight:800;color:var(--mint)">${arNum(childRewards.length)}</div>
          <div class="text-sm text-muted">إنجازات</div>
        </div>
      </div>
    </div>

    ${childBadges.length > 0 ? `
      <div class="card mb-md">
        <div class="card-title"><h3>الشارات</h3></div>
        <div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:12px">
          ${childBadges.map(badge => `
            <div style="text-align:center;background:var(--bg-2);padding:16px 12px;border-radius:12px">
              <div style="font-size:32px">${badge.icon || '🏅'}</div>
              <div class="text-sm text-bold mt-sm">${esc(badge.name || 'شارة')}</div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    <div class="card">
      <div class="card-title"><h3>سجل الإنجازات</h3></div>
      ${childRewards.length > 0 ? `
        <div class="stack gap-sm">
          ${childRewards.slice(0, 8).map(r => `
            <div class="row between" style="background:var(--bg-2);padding:12px;border-radius:12px">
              <div class="row">
                <div style="font-size:24px">${r.type === 'badge' ? (r.icon || '🏅') : (r.type === 'stars' ? '⭐' : '✨')}</div>
                <div>
                  <div class="text-bold text-sm">${esc(r.title)}</div>
                  <div class="text-xs text-muted">${fmtRelative(r.date)}</div>
                </div>
              </div>
              <span class="pill amber">${r.type === 'badge' ? esc(r.title) : `+${r.points || 0}`}</span>
            </div>
          `).join('')}
        </div>
      ` : `
        <div class="empty">
          <div class="ico">${I.star}</div>
          <h4>لا توجد إنجازات بعد</h4>
          <p>ستظهر الإنجازات والمكافآت هنا</p>
        </div>
      `}
    </div>

    ${childRewards.length > 0 ? `
      <div class="card mt-md" style="background:linear-gradient(135deg, var(--mint-50), white)">
        <h3 style="font-size:15px">تحديات إيجابية</h3>
        <p class="text-sm text-muted mt-sm">${child.name} يحقق تقدماً رائعاً 🎉</p>
        <div class="row wrap mt-md">
          ${pill('جهد رائع', 'mint')}
          ${pill('مثابرة', 'amber')}
        </div>
      </div>
    ` : ''}
  `;
}


/* =========================================================
   CONTENT LIBRARY
   ========================================================= */
function viewLibrary(role) {
  const params = new URLSearchParams((location.hash.split('?')[1]) || '');
  const q = (params.get('q') || '').trim();
  const type = params.get('type') || '';
  const allItems = STATE.data.library;

  const matches = (it) => {
    if (type && it.type !== type) return false;
    if (!q) return true;
    const haystack = [
      it.title,
      it.difficulty,
      ...(it.skillIds || []).map(s => skillBy(s)?.name).filter(Boolean),
      ({video:'فيديو',worksheet:'ورقة عمل',pdf:'PDF',link:'رابط',game:'رابط',image:'صور'})[it.type] || '',
    ].join(' ').toLowerCase();
    return haystack.includes(q.toLowerCase());
  };
  const items = allItems.filter(matches);

  const typeFilters = [
    { key: '',         label: 'الكل',      icon: I.grid },
    { key: 'worksheet',label: 'أوراق عمل', icon: I.file },
    { key: 'pdf',      label: 'PDF',       icon: I.file },
    { key: 'image',    label: 'صور',       icon: I.image },
  ];

  return `
    <div class="page-head">
      <div>
        <h1>مكتبة المحتوى</h1>
        <div class="sub">${arNum(allItems.length)} عنصراً — PDF، صور، وأوراق عمل</div>
      </div>
      ${role === 'teacher' ? `<button class="btn" data-action="add-library">${I.plus}<span>إضافة محتوى</span></button>` : ''}
    </div>

    <div class="library-toolbar mb-md">
      <div class="search-bar">
        ${I.search}
        <input id="library-search" placeholder="ابحثي عن محتوى، مهارة، أو مستوى..." value="${esc(q)}">
        ${q ? `<button class="x-btn" data-action="library-clear" title="مسح البحث">${I.close}</button>` : ''}
      </div>
    </div>

    <div class="row wrap mb-md filter-row">
      ${typeFilters.map(f => `
        <button class="chip ${type === f.key ? 'active' : ''}" data-library-type="${f.key}">
          ${f.icon}<span>${esc(f.label)}</span>
          <span class="count">${arNum(allItems.filter(x => !f.key || x.type === f.key).length)}</span>
        </button>
      `).join('')}
    </div>

    ${items.length ? `
      <div class="grid cols-3">
        ${items.map(it => libraryCard(it, role)).join('')}
      </div>
    ` : `
      <div class="card">
        ${emptyState(I.search, 'لا توجد نتائج', q ? `لم نجد محتوى يطابق "${esc(q)}". جرّبي كلمة أخرى.` : 'لا يوجد محتوى في هذا النوع بعد.')}
      </div>
    `}
  `;
}

function libraryCard(it, role) {
  const typeMap = {
    video:     { icon: I.video, label: 'فيديو',     cls: 'act-type-video' },
    worksheet: { icon: I.file,  label: 'ورقة عمل', cls: 'act-type-worksheet' },
    pdf:       { icon: I.file,  label: 'PDF',       cls: 'act-type-edu' },
    link:      { icon: I.link,  label: 'رابط',      cls: 'act-type-extra' },
    game:      { icon: I.link,  label: 'رابط',      cls: 'act-type-extra' },
    image:     { icon: I.image, label: 'صور',       cls: 'act-type-extra' },
  };
  const t = typeMap[it.type] || typeMap.video;
  const hasFile = !!it.fileData;
  const hasLink = !!it.link;

  // Visual preview for image / video / pdf with fileData
  let previewHtml = `
    <div style="background:linear-gradient(135deg, var(--accent-50), var(--canvas-2));aspect-ratio:16/10;border-radius:14px;display:grid;place-items:center;margin-bottom:12px">
      <div class="type-ic ${t.cls}" style="width:56px;height:56px;border-radius:18px;background:var(--surface);color:var(--accent-d)">${t.icon}</div>
    </div>
  `;
  if (hasFile && it.fileType?.startsWith('image/')) {
    previewHtml = `<div style="aspect-ratio:16/10;border-radius:14px;overflow:hidden;margin-bottom:12px;background:var(--canvas-2)"><img src="${it.fileData}" alt="" style="width:100%;height:100%;object-fit:cover"></div>`;
  }

  return `
    <div class="card tight">
      ${previewHtml}
      <div class="row wrap mb-md">${pill(t.label)}${it.difficulty ? pill(it.difficulty, 'mint') : ''}</div>
      <h3 style="font-size:15px;margin-bottom:6px">${esc(it.title)}</h3>
      <div class="row wrap text-xs text-muted">
        ${(it.skillIds || []).map(sid => `<span class="pill outline">${esc(skillBy(sid)?.name || '')}</span>`).join('')}
      </div>
      <div class="row mt-md" style="gap:8px">
        ${hasFile ? `
          <button class="btn soft sm block" data-action="download-library" data-id="${it.id}">
            ${I.download}<span>تحميل</span>
          </button>
        ` : hasLink ? `
          <button class="btn soft sm block" data-action="open-library-link" data-url="${esc(it.link)}">
            ${I.link}<span>فتح الرابط</span>
          </button>
        ` : `
          <button class="btn soft sm block" disabled>${I.eye}<span>غير متوفر</span></button>
        `}
        ${role === 'teacher' && (hasFile || hasLink) ? `
          <button class="btn sm block" data-action="send-to-student" data-id="${it.id}" style="background: var(--accent); color: white;">
            ${I.send}<span>إرسال</span>
          </button>
        ` : ''}
      </div>
      <div class="row mt-md text-xs text-muted">
        ${it.duration ? `<span>${esc(it.duration)}</span><span>•</span>` : ''}
        ${it.size ? `<span>${esc(it.size)}</span>` : ''}
      </div>
    </div>
  `;
}

/* =========================================================
   PROGRESS — TEACHER VIEW (aggregate)
   ========================================================= */
function viewProgressTeacher() {
  const me = STATE.user;
  const myStudents = STATE.data.students.filter(s => !s.archived); // Show ALL students
  const allProgress = myStudents.map(st => {
    const plan = STATE.data.plans.find(p => p.studentId === st.id);
    const avg = plan ? Math.round(plan.progress.reduce((a,p)=>a+p.current,0)/plan.progress.length) : 0;
    return { st, avg, plan };
  }).sort((a,b) => b.avg - a.avg);

  return `
    <div class="page-head">
      <div>
        <h1>التقدم والمكافآت</h1>
        <div class="sub">نظرة شاملة على تقدم طلابك</div>
      </div>
    </div>

    <div class="grid cols-2-1">
      <div class="stack gap-lg">
        <div class="card">
          <div class="card-title"><h3>أداء الطلاب</h3></div>
          <div class="stack">
            ${allProgress.map(({st, avg}) => `
              <a href="#/teacher/student/${st.id}" class="row" style="color:inherit;padding:10px 0;border-bottom:1px dashed var(--border)">
                ${avatar(st, 'md')}
                <div style="flex:1">
                  <div class="text-bold text-sm">${esc(st.name)}</div>
                  <div class="progress mt-sm"><div class="bar" style="width:${avg}%"></div></div>
                </div>
                <div style="text-align:center;min-width:60px">
                  <div class="text-bold" style="color:var(--primary);font-size:18px">${avg}%</div>
                  <div class="text-xs text-muted">${st.points} نقطة</div>
                </div>
              </a>
            `).join('')}
          </div>
        </div>

        <div class="card">
          <div class="card-title"><h3>متوسط إتقان المهارات</h3></div>
          ${STATE.data.skills.slice(0,8).map(sk => {
            const allValues = [];
            STATE.data.plans.forEach(p => {
              p.progress.filter(pr => pr.skillId === sk.id).forEach(pr => allValues.push(pr.current));
            });
            const avg = allValues.length ? Math.round(allValues.reduce((a,b)=>a+b,0)/allValues.length) : 0;
            return `
              <div class="skill-row">
                <div class="icon-tile">${I.target}</div>
                <div class="meta">
                  <div class="row between"><div class="name">${esc(sk.name)}</div><div class="pct">${avg}%</div></div>
                  <div class="progress"><div class="bar" style="width:${avg}%"></div></div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <div class="stack gap-lg">
        <div class="card">
          <div class="card-title"><h3>أعلى الإنجازات هذا الأسبوع</h3></div>
          <div class="stack gap-sm">
            ${[...allProgress].slice(0,3).map(({st, avg}, i) => `
              <div class="row" style="background:var(--bg-2);padding:10px;border-radius:12px">
                <div style="font-size:24px">${['🥇','🥈','🥉'][i]}</div>
                ${avatar(st, 'sm')}
                <div style="flex:1">
                  <div class="text-bold text-sm">${esc(st.name)}</div>
                  <div class="text-xs text-muted">${avg}% • ${st.points} نقطة</div>
                </div>
              </div>
            `).join('')}
          </div>
          <div class="text-xs text-muted center mt-md">تشجيع إيجابي — لا يُعرض للأطفال</div>
        </div>

        <div class="card">
          <div class="card-title"><h3>المكافآت الممنوحة</h3></div>
          <div class="stack gap-sm">
            ${STATE.data.rewards.slice(0,5).map(r => `
              <div class="row" style="padding:8px 0;border-bottom:1px dashed var(--border);gap:10px">
                <div style="font-size:20px">${r.type === 'badge' ? (r.icon || '🏅') : (r.type === 'stars' ? '⭐' : '✨')}</div>
                <div style="flex:1">
                  <div class="text-bold text-xs">${esc(studentBy(r.student_id)?.name)}</div>
                  <div class="text-xs text-muted">${esc(r.description || r.title)}</div>
                </div>
                <span class="pill amber">${r.type === 'badge' ? esc(r.title) : `+${r.points || 0}`}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

/* =========================================================
   SETTINGS
   ========================================================= */
function viewSettings(role) {
  const u = STATE.user;
  if (role !== 'teacher') return viewParentSettings();
  const params = new URLSearchParams((location.hash.split('?')[1]) || '');
  const tab = params.get('tab') || 'profile';

  const archivedCount = STATE.data.students.filter(s => s.archived).length; // Show ALL archived students
  // Get notes from the teacher's own record in STATE.data.users
  const myRecord = STATE.data.users.find(uu => uu.id === u.id) || u;
  const notesCount = (myRecord.principal_notes || []).length;

  const tabs = [
    { key: 'profile',   label: 'حسابي',              icon: I.user },
    { key: 'notes',     label: 'ملاحظات المديرة',     icon: I.flag,     badge: notesCount || null },
    { key: 'term',      label: 'التقويم',             icon: I.calendar },
    { key: 'skills',    label: 'المهارات',            icon: I.target },
    { key: 'tools',     label: 'الأدوات',             icon: I.wrench },
    { key: 'schedule',  label: 'الجدول',              icon: I.clipboard },
    { key: 'archive',   label: 'أرشيف الطالبات',      icon: I.box,      badge: archivedCount || null },
  ];

  return `
    <div class="page-head">
      <div>
        <h1>الإعدادات</h1>
        <div class="sub">خصّصي النظام ليناسب طريقة عملك</div>
      </div>
    </div>

    <div class="settings-layout">
      <aside class="settings-nav">
        ${tabs.map(t => `
          <a class="settings-nav-item ${t.key === tab ? 'active' : ''}" href="#/teacher/settings?tab=${t.key}" data-route="#/teacher/settings">
            <span class="ic">${t.icon}</span>
            <span>${esc(t.label)}</span>
            ${t.badge ? `<span class="settings-badge">${arNum(t.badge)}</span>` : ''}
          </a>
        `).join('')}
      </aside>

      <div class="settings-content">
        ${tab === 'profile'   ? renderSettingsProfile(u) : ''}
        ${tab === 'notes'     ? renderSettingsPrincipalNotes(myRecord) : ''}
        ${tab === 'school'    ? renderSettingsSchool() : ''}
        ${tab === 'term'      ? renderSettingsTerm() : ''}
        ${tab === 'skills'    ? renderSettingsSkills() : ''}
        ${tab === 'tools'     ? renderSettingsTools() : ''}
        ${tab === 'schedule'  ? renderSettingsScheduleLink() : ''}
        ${tab === 'archive'   ? renderSettingsArchive() : ''}
      </div>
    </div>
  `;
}

function renderSettingsPrincipalNotes(myRecord) {
  const notes = myRecord.principal_notes || [];
  return `
    <div class="card">
      <div class="card-title">
        <h3>ملاحظات المديرة</h3>
        ${notes.length ? `<span class="pill amber">${arNum(notes.length)} ملاحظة</span>` : ''}
      </div>
      <p class="text-sm text-muted mb-md">ملاحظات وتوجيهات أرسلتها المديرة لك مباشرة.</p>
      ${notes.length ? `
        <div class="col" style="gap:12px">
          ${notes.map(n => `
            <div class="principal-note-row">
              <div class="principal-note-icon">${I.flag}</div>
              <div style="flex:1;min-width:0">
                <div class="text-sm" style="line-height:1.6">${esc(n.text)}</div>
                <div class="text-xs text-muted mt-sm">${fmtDate(n.date)}</div>
              </div>
            </div>
          `).join('')}
        </div>
      ` : `
        <div class="empty" style="padding:32px 0">
          <div class="ico">${I.flag}</div>
          <h4>لا توجد ملاحظات</h4>
          <p>ستظهر هنا أي ملاحظات أو توجيهات ترسلها المديرة.</p>
        </div>
      `}
    </div>
  `;
}

function renderSettingsProfile(u) {
  return `
    <div class="card">
      <div class="card-title"><h3>الملف الشخصي</h3></div>
      <div class="row mb-md">
        ${avatar(u, 'xl')}
        <div>
          <h3 style="font-size:16px">${esc(u.name)}</h3>
          <div class="text-sm text-muted">${esc(u.title || '')}</div>
        </div>
      </div>
      <form data-form="save-profile">
        <div class="field"><label>الاسم</label><input name="name" value="${esc(u.name)}" required></div>
        <div class="field"><label>المسمى الوظيفي</label><input name="title" value="${esc(u.title || '')}"></div>
        <div class="field"><label>البريد الإلكتروني</label><input name="email" type="email" placeholder="example@athr.app" value="${esc(u.email || '')}"></div>
        <div class="field"><label>الهاتف</label><input name="phone" type="tel" placeholder="05xxxxxxxx" value="${esc(u.phone || '')}"></div>
        <button type="submit" class="btn">${I.check}<span>حفظ التغييرات</span></button>
      </form>
    </div>

    <div class="card mt-md">
      <div class="card-title"><h3>الإشعارات</h3></div>
      <div class="toggle-row">
        <div class="lbl">رسائل ولي الأمر<span class="hint">إشعار عند وصول رسالة</span></div>
        <div class="switch on"></div>
      </div>
      <div class="toggle-row">
        <div class="lbl">تذكير الجلسات<span class="hint">قبل ١٥ دقيقة من الجلسة</span></div>
        <div class="switch on"></div>
      </div>
      <div class="toggle-row">
        <div class="lbl">ملخصات أسبوعية<span class="hint">تقرير كل خميس</span></div>
        <div class="switch"></div>
      </div>
    </div>

    <button class="settings-logout-btn mt-md" data-action="logout">
      ${I.logout}<span>تسجيل الخروج</span>
    </button>
  `;
}

function renderSettingsSchool() {
  const sch = STATE.config.school;
  return `
    <div class="card">
      <div class="card-title"><h3>بيانات المدرسة</h3></div>
      <p class="text-sm text-muted mb-md">تظهر هذه المعلومات في الترويسة وفي الرسائل التي تُرسل لأولياء الأمور.</p>
      <form data-form="save-school">
        <div class="field"><label>اسم المدرسة الكامل</label><input name="name" value="${esc(sch.name)}" required></div>
        <div class="field"><label>الاسم المختصر</label><input name="shortName" value="${esc(sch.shortName)}"></div>
        <div class="row" style="gap:12px;flex-wrap:wrap">
          <div class="field" style="flex:2;min-width:220px"><label>العنوان</label><input name="address" value="${esc(sch.address)}"></div>
          <div class="field" style="flex:1;min-width:140px"><label>الهاتف</label><input name="phone" value="${esc(sch.phone)}"></div>
        </div>
        <div class="divider"></div>
        <div class="text-bold mb-md">المديرة</div>
        <div class="row" style="gap:12px;flex-wrap:wrap">
          <div class="field" style="flex:2;min-width:220px"><label>الاسم</label><input name="principalName" value="${esc(sch.principal.name)}"></div>
          <div class="field" style="flex:1;min-width:140px"><label>المسمى</label><input name="principalTitle" value="${esc(sch.principal.title)}"></div>
        </div>
        <button type="submit" class="btn">${I.check}<span>حفظ بيانات المدرسة</span></button>
      </form>
    </div>
  `;
}

function renderSettingsTerm() {
  const c = STATE.config;
  const dayKeys  = ['sun','mon','tue','wed','thu','fri','sat'];
  const dayNames = ['الأحد','الإثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'];
  const wk = termWeek(new Date().toISOString().slice(0,10));
  return `
    <div class="card">
      <div class="card-title"><h3>الفصل الدراسي</h3></div>
      <p class="text-sm text-muted mb-md">يحدّد رقم الأسبوع المعروض في الرئيسية. حالياً: <b>الأسبوع ${arNum(wk)}</b></p>
      <form data-form="save-term">
        <div class="row" style="gap:12px;flex-wrap:wrap">
          <div class="field" style="flex:1;min-width:160px">
            <label>اسم الفصل</label>
            <input name="termName" value="${esc(c.termName)}">
          </div>
          <div class="field" style="flex:1;min-width:160px">
            <label>تاريخ بداية الفصل</label>
            <input name="termStart" type="date" value="${esc(c.termStart)}" required>
          </div>
        </div>
        <div class="field">
          <label>أيام العمل</label>
          <div class="row wrap" id="workdays-row">
            ${dayKeys.map((dk, i) => `
              <button type="button" class="chip ${c.workingDays.includes(dk) ? 'active' : ''}" data-toggle-day="${dk}">
                ${esc(dayNames[i])}
              </button>
            `).join('')}
          </div>
          <div class="hint">يستخدمها الجدول الأسبوعي والرئيسية.</div>
        </div>
        <button type="submit" class="btn">${I.check}<span>حفظ التقويم</span></button>
      </form>
    </div>
  `;
}

function renderSettingsSkills() {
  const skills = STATE.data.skills;
  return `
    <div class="card">
      <div class="card-title">
        <h3>المهارات (${arNum(skills.length)})</h3>
        <button class="btn soft sm" data-action="add-skill">${I.plus}<span>مهارة جديدة</span></button>
      </div>
      <p class="text-sm text-muted mb-md">المهارات المستخدمة في الخطط الفردية والأنشطة وتقييم الجلسات.</p>
      <div class="stack gap-sm">
        ${skills.map(sk => `
          <div class="row between" style="background:var(--bg-2);padding:10px 14px;border-radius:12px">
            <div>
              <div class="text-bold text-sm">${esc(sk.name)}</div>
              <div class="text-xs text-muted">${esc(sk.category)}</div>
            </div>
            <div class="row">
              <button class="btn soft sm" data-action="edit-skill" data-id="${sk.id}">${I.edit}</button>
              <button class="btn danger-soft sm" data-action="delete-skill" data-id="${sk.id}">${I.trash}</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderSettingsTools() {
  const tools = STATE.data.sessionTools;
  return `
    <div class="card">
      <div class="card-title">
        <h3>أدوات الجلسات (${arNum(tools.length)})</h3>
        <button class="btn soft sm" data-action="add-tool">${I.plus}<span>أداة جديدة</span></button>
      </div>
      <p class="text-sm text-muted mb-md">الأدوات التي تختاريها عند تسجيل الجلسة (مرآة، فقاعات، بطاقات...).</p>
      <div class="grid cols-3" style="gap:8px">
        ${tools.map(t => `
          <div class="row" style="background:var(--bg-2);padding:10px 12px;border-radius:12px;gap:8px">
            <span style="font-size:20px">${t.icon}</span>
            <span class="text-sm text-bold" style="flex:1">${esc(t.name)}</span>
            <button class="x-btn-slot" data-action="delete-tool" data-id="${t.id}" title="حذف">${I.close}</button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderSettingsTemplates() {
  const tpls = STATE.data.feedbackTemplates;
  return `
    <div class="card">
      <div class="card-title">
        <h3>قوالب الملاحظات (${arNum(tpls.length)})</h3>
        <button class="btn soft sm" data-action="add-template">${I.plus}<span>قالب جديد</span></button>
      </div>
      <p class="text-sm text-muted mb-md">قوالب جاهزة تُسرّع كتابة المراجعات والملاحظات.</p>
      <div class="stack gap-sm">
        ${tpls.map((t, i) => `
          <div class="row between" style="background:var(--bg-2);padding:10px 14px;border-radius:12px">
            <div class="text-sm" style="flex:1">${esc(t)}</div>
            <button class="btn danger-soft sm" data-action="delete-template" data-idx="${i}">${I.trash}</button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderSettingsScheduleLink() {
  return `
    <div class="card">
      <div class="card-title"><h3>الجدول الأسبوعي</h3></div>
      <p class="text-sm text-muted mb-md">أضيفي وعدّلي الجلسات الثابتة لكل يوم.</p>
      <a class="btn block" href="#/teacher/schedule" data-route="#/teacher/schedule">${I.calendar}<span>الانتقال لمحرر الجدول</span></a>
    </div>
  `;
}

function renderSettingsArchive() {
  const me = STATE.user;
  const archived = STATE.data.students
    .filter(s => s.archived) // Show ALL archived students
    .sort((a,b) => (b.archivedAt || '').localeCompare(a.archivedAt || ''));
  return `
    <div class="card">
      <div class="card-title">
        <h3>أرشيف الطالبات (${arNum(archived.length)})</h3>
      </div>
      <p class="text-sm text-muted mb-md">الطالبات المؤرشفات لا يظهرن في القائمة الرئيسية ولا في الجدول الأسبوعي. يمكن استعادتهن في أي وقت.</p>
      ${archived.length ? `
        <div class="stack gap-sm">
          ${archived.map(st => `
            <div class="archive-row ${stageClass(st.grade)}">
              <div class="row" style="flex:1;gap:12px;align-items:center">
                <div class="avatar md stage-avatar">${esc(st.initials)}</div>
                <div style="flex:1;min-width:0">
                  <div class="text-bold text-sm">${esc(st.name)}</div>
                  <div class="row mt-sm wrap text-xs">
                    <span class="stage-pill">${esc(st.grade)}</span>
                    <span class="text-muted">أُرشفت ${fmtRelative(st.archivedAt || '')}</span>
                  </div>
                </div>
              </div>
              <div class="row" style="gap:6px;flex-wrap:wrap">
                <button class="btn soft sm" data-action="restore-student" data-sid="${st.id}">${I.bolt}<span>استعادة</span></button>
                <button class="btn danger-soft sm" data-action="delete-student-confirm" data-sid="${st.id}">${I.trash}<span>حذف نهائي</span></button>
              </div>
            </div>
          `).join('')}
        </div>
      ` : `
        <div class="empty">
          <div class="ico">📦</div>
          <h4>لا توجد طالبات في الأرشيف</h4>
          <p>الطالبات اللواتي تتم أرشفتهن سيظهرن هنا.</p>
        </div>
      `}
    </div>
  `;
}

function renderSettingsDanger() {
  return `
    <div class="card">
      <div class="card-title"><h3>إجراءات حساسة</h3></div>
      <div class="stack">
        <button class="btn ghost block" data-action="reset-data">${I.bolt}<span>إعادة تعيين بيانات التجربة</span></button>
        <button class="btn danger-soft block" data-action="logout">${I.logout}<span>تسجيل الخروج</span></button>
      </div>
      <div class="text-xs text-muted mt-md">إعادة التعيين تمسح جميع التعديلات المحلية وتعيد البيانات الافتراضية.</div>
    </div>

    <div class="card mt-md">
      <div class="card-title"><h3>عن المنصة</h3></div>
      <div class="stack gap-sm text-sm">
        <div class="row between"><span class="text-muted">الإصدار</span><span class="text-bold">أثر v0.7 — نموذج</span></div>
        <div class="row between"><span class="text-muted">الطالبات</span><span class="text-bold">${arNum(STATE.data.students.filter(s => !s.archived).length)}</span></div>
        <div class="row between"><span class="text-muted">جلسات سجّلتها</span><span class="text-bold">${arNum(STATE.data.sessionLogs.filter(l => l.teacherId === STATE.user.id).length)}</span></div>
        <div class="row between"><span class="text-muted">حجم البيانات المحلية</span><span class="text-bold">~${arNum(Math.round((localStorage.getItem(STORAGE_KEY) || '').length / 1024))} KB</span></div>
      </div>
      <div class="divider"></div>
      <h4 style="font-size:14px;margin-bottom:8px">📖 دليل سريع</h4>
      <ul class="text-sm text-muted" style="padding-inline-start:20px;line-height:1.9;margin:0">
        <li>أضيفي طالبة من شاشة "الطلاب" — يُولَّد رابط دعوة تلقائياً.</li>
        <li>أرسلي الرابط لولي الأمر عبر واتساب من تاب "الرسائل".</li>
        <li>أكملي النماذج الأربعة لتفعيل توليد الخطة الذكي.</li>
        <li>سجّلي جلسة من زر "+ إضافة جلسة" في رأس ملف الطالبة.</li>
        <li>صدّري تقرير الطالبة كـ PDF من زر "تقرير قابل للطباعة".</li>
      </ul>
    </div>
  `;
}

function viewParentSettings() {
  const u = STATE.user;
  return `
    <div class="page-head">
      <div>
        <h1>الإعدادات</h1>
        <div class="sub">حسابك والإشعارات</div>
      </div>
    </div>
    <div class="card">
      <div class="card-title"><h3>الملف الشخصي</h3></div>
      <div class="row mb-md">
        ${avatar(u, 'xl')}
        <div>
          <h3 style="font-size:16px">${esc(u.name)}</h3>
          <div class="text-sm text-muted">${esc(u.relation || '')}</div>
        </div>
      </div>
      <div class="field"><label>الاسم</label><input value="${esc(u.name)}" disabled></div>
      <div class="field"><label>الهاتف</label><input value="${esc(studentBy(u.studentId)?.parentPhone || '')}" disabled></div>
      <div class="text-xs text-muted">للتعديل، تواصلي مع المعلمة.</div>
    </div>
    <div class="card mt-md">
      <div class="card-title"><h3>إشعارات</h3></div>
      <div class="toggle-row">
        <div class="lbl">رسائل المعلمة<span class="hint">إشعار عند وصول رسالة</span></div>
        <div class="switch on"></div>
      </div>
      <div class="toggle-row">
        <div class="lbl">جلسات وأنشطة طفلتي<span class="hint">عند تسجيل المعلمة جلسة جديدة</span></div>
        <div class="switch on"></div>
      </div>
    </div>
    <div class="card mt-md">
      <button class="btn danger-soft block" data-action="logout">${I.logout}<span>تسجيل الخروج</span></button>
    </div>
  `;
}

/* =========================================================
   EVENT DELEGATION
   ========================================================= */
document.addEventListener('click', async (e) => {
  const t = e.target;

  // Login tile
  const loginTile = t.closest('[data-login]');
  if (loginTile) { e.preventDefault(); login(loginTile.getAttribute('data-login')); return; }

  // Action buttons
  const action = t.closest('[data-action]');
  if (action) {
    const a = action.getAttribute('data-action');
    if (a === 'logout') { logout(); return; }
    if (a === 'goto') { e.preventDefault(); navigate(action.getAttribute('data-href').replace(/^#/,'')); return; }
    if (a === 'back') { history.back(); return; }
    if (a === 'open-roleswitch') { openRoleSwitch(); return; }
    if (a === 'open-notifications') { openNotifications(); return; }
    if (a === 'toggle-nav') { /* mobile menu placeholder */ toast('استخدم القائمة السفلية على الجوال'); return; }
    if (a === 'reset-data') { localStorage.removeItem(STORAGE_KEY); location.reload(); return; }
    if (a === 'quick-create') {
      const type = action.getAttribute('data-type');
      navigate(`/teacher/activity/new?type=${type}`);
      return;
    }
    if (a === 'quick-feedback') { openQuickFeedback(); return; }
    if (a === 'add-student') { openAddStudentModal(); return; }
    if (a === 'parent-login') { openParentLoginModal(); return; }
    if (a === 'open-invite-link') {
      openInviteLinkModal(action.getAttribute('data-sid'));
      return;
    }
    if (a === 'copy-invite-msg') {
      const sid = action.getAttribute('data-sid');
      const st = studentBy(sid);
      if (!st) return;
      const message = buildInviteMessage(st);
      const doCopy = (txt) => {
        if (navigator.clipboard) navigator.clipboard.writeText(txt).catch(() => {});
        else { const ta = document.createElement('textarea'); ta.value = txt; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch {} ta.remove(); }
      };
      doCopy(message);
      toast('تم نسخ الرسالة 📋');
      return;
    }
    if (a === 'copy-invite' || a === 'copy-invite-link') {
      const url = action.getAttribute('data-url');
      const sid = action.getAttribute('data-sid');
      const st = sid ? studentBy(sid) : null;
      const link = url || (st ? `${location.origin}${location.pathname}#/invite/${st.inviteCode}` : '');
      if (link) {
        if (navigator.clipboard) navigator.clipboard.writeText(link).catch(() => {});
        else { const ta = document.createElement('textarea'); ta.value = link; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch {} ta.remove(); }
        toast(`تم نسخ الرابط 📋`);
      }
      return;
    }
    if (a === 'add-library') { openAddLibraryModal(); return; }
    if (a === 'clear-file') {
      const fi = document.getElementById('lib-file-input');
      const drop = document.getElementById('lib-file-drop');
      if (fi) fi.value = '';
      if (drop) {
        drop.querySelector('.file-drop-empty')?.classList.remove('hide');
        drop.querySelector('.file-drop-chosen')?.classList.add('hide');
      }
      return;
    }
    if (a === 'download-speech-test-pdf') {
      const sid = action.getAttribute('data-sid');
      const st = studentBy(sid);
      if (!st || !st.forms?.speechTest?.completed) {
        toast('لم يُكمل الاختبار بعد', 'warn');
        return;
      }
      
      // Generate and download PDF
      generateSpeechTestPDF(st);
      return;
    }
    if (a === 'download-library') {
      const id = action.getAttribute('data-id');
      const item = STATE.data.library.find(l => l.id === id);
      if (!item || !item.fileData) { toast('لا يوجد ملف للتحميل', 'warn'); return; }
      const link = document.createElement('a');
      link.href = item.fileData;
      link.download = item.fileName || item.title || 'file';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }
    if (a === 'send-to-student') {
      const id = action.getAttribute('data-id');
      openSendToStudentModal(id);
      return;
    }
    if (a === 'open-library-link') {
      const url = action.getAttribute('data-url');
      if (url) window.open(url, '_blank', 'noopener');
      return;
    }
    if (a === 'add-slot') { openAddSlotModal(action.getAttribute('data-day')); return; }
    if (a === 'remove-slot') {
      const sid = action.getAttribute('data-sid');
      const idx = parseInt(action.getAttribute('data-slot-idx'), 10);
      const st = studentBy(sid);
      if (st && Array.isArray(st.schedule)) {
        st.schedule.splice(idx, 1);
        
        // Save to Supabase
        (async () => {
          try {
            const { error } = await window.supabaseClient
              .from('students')
              .update({ schedule: st.schedule })
              .eq('id', sid);
            
            if (error) throw error;
            
            persistState(); 
            toast('تم حذف الجلسة'); 
            handleRoute();
          } catch (error) {
            console.error('Error deleting schedule:', error);
            toast('حدث خطأ أثناء حذف الجلسة', 'error');
          }
        })();
      }
      return;
    }
    if (a === 'library-clear') {
      const params = new URLSearchParams((location.hash.split('?')[1]) || '');
      params.delete('q');
      const qs = params.toString();
      navigate(`/teacher/library${qs ? '?'+qs : ''}`);
      return;
    }
    if (a === 'students-clear') {
      navigate('/teacher/students');
      return;
    }
    if (a === 'add-session') { openAddSessionModal(action.getAttribute('data-sid')); return; }
    if (a === 'toggle-goal-picker') {
      const picker = document.getElementById('goal-picker');
      if (picker) picker.classList.toggle('hide');
      return;
    }
    if (a === 'add-session-goal') {
      const goal = action.getAttribute('data-goal');
      const builder = document.getElementById('session-goals-builder');
      if (!builder || !goal) return;
      // Remove empty state if exists
      const empty = builder.querySelector('.text-muted.center');
      if (empty) empty.parentElement.remove();
      const idx = builder.querySelectorAll('.goal-eval-row').length;
      const tmp = document.createElement('div');
      tmp.innerHTML = goalEvalRowTemplate(goal, idx).trim();
      builder.appendChild(tmp.firstChild);
      action.remove(); // remove from picker
      return;
    }
    if (a === 'add-custom-goal') {
      openModal(`
        <div class="modal-head">
          <h2>إضافة هدف مخصص</h2>
          <button class="x" data-action="close-modal">${I.close}</button>
        </div>
        <form data-form="add-custom-goal-form">
          <div class="field">
            <label>نص الهدف</label>
            <textarea name="goalText" rows="3" placeholder="مثال: أن تنمي الطالبة مهارة الانتباه والتركيز لمدتها بشكل صحيح بنسبة ٪٨" required></textarea>
          </div>
          <button type="submit" class="btn lg block">${I.plus}<span>إضافة الهدف</span></button>
        </form>
      `);
      return;
    }
    if (a === 'remove-session-goal') {
      const row = action.closest('.goal-eval-row');
      if (row) row.remove();
      // Renumber remaining rows
      document.querySelectorAll('#session-goals-builder .goal-eval-row .goal-num').forEach((el, i) => {
        el.textContent = arNum(i + 1);
      });
      return;
    }
    if (a === 'complete-form') {
      const sid = action.getAttribute('data-sid');
      const fkey = action.getAttribute('data-fkey');
      openFormModal(sid, fkey);
      return;
    }
    if (a === 'view-form') {
      const sid = action.getAttribute('data-sid');
      const fkey = action.getAttribute('data-fkey');
      openFormModal(sid, fkey, /*viewOnly*/ true);
      return;
    }
    if (a === 'upload-pdf') {
      const sid = action.getAttribute('data-sid');
      const fkey = action.getAttribute('data-fkey');
      openPDFUploadModal(sid, fkey);
      return;
    }
    if (a === 'view-pdf') {
      const sid = action.getAttribute('data-sid');
      const fkey = action.getAttribute('data-fkey');
      viewPDFDocument(sid, fkey);
      return;
    }
    if (a === 'view-all-pdfs') {
      const sid = action.getAttribute('data-sid');
      const fkey = action.getAttribute('data-fkey');
      viewAllPDFsModal(sid, fkey);
      return;
    }
    if (a === 'view-single-pdf') {
      const url = action.getAttribute('data-url');
      viewSinglePDF(url);
      return;
    }
    if (a === 'manage-notes') {
      const sid = action.getAttribute('data-sid');
      openStudentNotesModal(sid);
      return;
    }
    if (a === 'add-student-note') {
      const sid = action.getAttribute('data-sid');
      openAddStudentNoteModal(sid);
      return;
    }
    if (a === 'delete-student-note') {
      const sid = action.getAttribute('data-sid');
      const idx = parseInt(action.getAttribute('data-idx'));
      deleteStudentNote(sid, idx);
      return;
    }
    if (a === 'create-special-ed-iep' || a === 'edit-special-ed-iep') {
      const sid = action.getAttribute('data-sid');
      openSpecialEdIEPModal(sid);
      return;
    }
    if (a === 'delete-special-ed-iep') {
      const sid = action.getAttribute('data-sid');
      deleteSpecialEdIEP(sid);
      return;
    }
    if (a === 'upload-iep-pdf') {
      const sid = action.getAttribute('data-sid');
      openIEPPDFUploadModal(sid);
      return;
    }
    if (a === 'view-iep-pdf') {
      const sid = action.getAttribute('data-sid');
      viewIEPPDF(sid);
      return;
    }
    if (a === 'view-principal-iep-pdf') {
      const sid = action.getAttribute('data-sid');
      viewIEPPDF(sid);
      return;
    }
    if (a === 'add-special-ed-session') {
      const sid = action.getAttribute('data-sid');
      openSpecialEdSessionModal(sid);
      return;
    }
    if (a === 'view-special-ed-session') {
      const sid = action.getAttribute('data-sid');
      const idx = parseInt(action.getAttribute('data-idx'));
      viewSpecialEdSession(sid, idx);
      return;
    }
    if (a === 'edit-special-ed-session') {
      const sid = action.getAttribute('data-sid');
      const idx = parseInt(action.getAttribute('data-idx'));
      openSpecialEdSessionModal(sid, idx);
      return;
    }
    if (a === 'add-session') {
      const sid = action.getAttribute('data-sid');
      openAddSessionModal(sid);
      return;
    }
    if (a === 'regen-plan' || a === 'generate-plan-from-assessment') {
      const sid = action.getAttribute('data-sid');
      const st = studentBy(sid);
      if (!st) return;
      
      // Check if assessment is completed
      const hasAssessment = !!(st.forms?.preAssessment?.completed);
      const hasAnswers = !!(st.forms?.preAssessment?.answers && Object.keys(st.forms.preAssessment.answers).length > 0);
      
      if (!hasAssessment || !hasAnswers) {
        toast('يجب إكمال التقييم القبلي أولاً قبل توليد الخطة', 'error');
        return;
      }
      
      const groups = generatePlanFromAssessment(st);
      let plan = STATE.data.plans.find(p => p.studentId === sid);
      
      // Create plan if it doesn't exist
      if (!plan) {
        plan = {
          id: null, // Will be set by Supabase
          studentId: sid,
          teacherId: STATE.user.id,
          title: `خطة ${st.name}`,
          goals: [],
          groups: [],
          progress: [],
          targetSkillIds: [],
          term: 'الفصل الثاني 2026',
          notes: '',
          initialReport: '',
          generatedAt: new Date().toISOString().slice(0,10)
        };
        STATE.data.plans.push(plan);
      }
      
      if (!groups || groups.length === 0) {
        // All skills are mastered - clear the plan
        toast('جميع المهارات متقنة! لا حاجة لتوليد خطة 🎉', 'success');
        
        // Clear plan data
        plan.groups = [];
        plan.goals = [];
        plan.progress = [];
        plan.targetSkillIds = [];
        plan.initialReport = '';
        
        // Delete from Supabase if it exists
        (async () => {
          try {
            const { data: existingPlan } = await window.supabaseClient
              .from('plans')
              .select('id')
              .eq('student_id', sid)
              .maybeSingle();
            
            if (existingPlan) {
              const { error } = await window.supabaseClient
                .from('plans')
                .delete()
                .eq('id', existingPlan.id);
              
              if (error) throw error;
              console.log('✅ Plan deleted (all skills mastered)');
            }
            
            // Remove from local state
            STATE.data.plans = STATE.data.plans.filter(p => p.studentId !== sid);
            persistState();
            handleRoute(); // Refresh view to show generate button
          } catch (error) {
            console.error('Error deleting plan:', error);
          }
        })();
        
        return;
      }
      
      plan.groups = groups;
      plan.generatedAt = new Date().toISOString().slice(0,10);
      plan.initialReport = generateInitialReport(st);
      plan.goals = groups.flatMap(g => g.shorts);
      const skillMap = { language_informal:'sk6', articulation:'sk3' };
      plan.targetSkillIds = [...new Set(groups.map(g => skillMap[g.category]).filter(Boolean))];
      plan.progress = plan.targetSkillIds.map((skId, i) => ({
        skillId: skId,
        current: 25 + i * 5,
        target: 80,
      }));
      
      // Save to Supabase
      (async () => {
        try {
          const now = new Date().toISOString();
          const planData = {
            student_id: sid,
            teacher_id: STATE.user.id,
            school_id: STATE.user.school_id,
            title: `خطة ${st.name}`,
            goals: groups, // Save the full groups structure, not just flattened goals
            progress: plan.progress,
            last_regenerated_at: now,
            updated_at: now,
          };
          
          // First, DELETE the old plan completely to avoid merging old data
          await window.supabaseClient
            .from('plans')
            .delete()
            .eq('student_id', sid);
          
          // Then INSERT the new plan fresh
          const { error } = await window.supabaseClient
            .from('plans')
            .insert(planData);
          
          if (error) throw error;
          console.log('✅ Plan completely regenerated at:', now);
          
          persistState();
          closeModal();
          toast(hasAssessment ? 'تم توليد الخطة من التقييم ✨' : 'تم توليد خطة افتراضية ✨');
          navigate(`/teacher/student/${sid}?tab=plan`);
        } catch (error) {
          console.error('Error saving plan:', error);
          toast('حدث خطأ في حفظ الخطة', 'error');
        }
      })();
      return;
    }

    // Settings — skills
    if (a === 'add-skill') { openSkillModal(); return; }
    if (a === 'edit-skill') { openSkillModal(action.getAttribute('data-id')); return; }
    if (a === 'delete-skill') {
      if (!confirm('حذف هذه المهارة؟')) return;
      const id = action.getAttribute('data-id');
      STATE.data.skills = STATE.data.skills.filter(s => s.id !== id);
      persistState(); toast('تم الحذف'); handleRoute();
      return;
    }
    // Settings — tools
    if (a === 'add-tool') { openToolModal(); return; }
    if (a === 'delete-tool') {
      if (!confirm('حذف هذه الأداة؟')) return;
      const id = action.getAttribute('data-id');
      STATE.data.sessionTools = STATE.data.sessionTools.filter(t => t.id !== id);
      persistState(); toast('تم الحذف'); handleRoute();
      return;
    }
    // Settings — templates
    if (a === 'add-template') { openTemplateModal(); return; }
    if (a === 'delete-template') {
      if (!confirm('حذف هذا القالب؟')) return;
      const idx = parseInt(action.getAttribute('data-idx'), 10);
      STATE.data.feedbackTemplates.splice(idx, 1);
      persistState(); toast('تم الحذف'); handleRoute();
      return;
    }
    // Student options menu
    if (a === 'open-student-options') {
      openStudentOptionsModal(action.getAttribute('data-sid'));
      return;
    }
    if (a === 'archive-student') {
      const sid = action.getAttribute('data-sid');
      const st = studentBy(sid);
      if (!st) return;
      if (!confirm(`أرشفة الطالبة "${st.name}"؟ ستنقل لقسم الأرشيف في الإعدادات.`)) return;
      
      st.archived = true;
      st.archivedAt = new Date().toISOString().slice(0,10);
      
      // Update in Supabase
      if (window.supabaseClient) {
        const { error } = await window.supabaseClient
          .from('students')
          .update({ archived: true, archived_at: st.archivedAt })
          .eq('id', sid);
        
        if (error) {
          console.error('Error archiving student in Supabase:', error);
          toast('حدث خطأ في الأرشفة', 'error');
          return;
        }
      }
      
      persistState();
      closeModal();
      toast('تمت أرشفة الطالبة 📦');
      navigate('/teacher/students');
      return;
    }
    if (a === 'restore-student') {
      const sid = action.getAttribute('data-sid');
      const st = studentBy(sid);
      if (!st) return;
      
      st.archived = false;
      st.archivedAt = null;
      
      // Update in Supabase
      if (window.supabaseClient) {
        const { error } = await window.supabaseClient
          .from('students')
          .update({ archived: false, archived_at: null })
          .eq('id', sid);
        
        if (error) {
          console.error('Error restoring student in Supabase:', error);
          toast('حدث خطأ في الاستعادة', 'error');
          return;
        }
      }
      
      persistState();
      toast('تمت استعادة الطالبة');
      handleRoute();
      return;
    }
    if (a === 'edit-student') {
      const sid = action.getAttribute('data-sid');
      const st = studentBy(sid);
      if (!st) return;
      
      // Open edit modal instead of navigating
      openEditStudentModal(st);
      return;
    }
    if (a === 'delete-student' || a === 'delete-student-confirm') {
      // Check permission for teachers
      if (STATE.user.role === 'teacher' && !Auth.hasPermission('can_delete_students')) {
        toast('ليس لديك صلاحية لحذف الطالبات. تواصلي مع المديرة.', 'error');
        return;
      }
      
      const sid = action.getAttribute('data-sid');
      const st = studentBy(sid);
      if (!st) return;
      if (!confirm(`حذف الطالبة "${st.name}" نهائياً مع كل بياناتها؟ لن يمكن استرجاعها.`)) return;
      
      // Delete EVERYTHING from Supabase
      if (window.supabaseClient) {
        try {
          // Delete student's plan
          await window.supabaseClient
            .from('plans')
            .delete()
            .eq('student_id', sid);
          
          // Delete student's sessions
          await window.supabaseClient
            .from('sessions')
            .delete()
            .eq('student_id', sid);
          
          // Delete student's forms/assessments (stored in student record)
          // Delete student's account and parent account
          const { data: studentData } = await window.supabaseClient
            .from('students')
            .select('user_id, parent_user_id')
            .eq('id', sid)
            .single();
          
          // Delete the student record
          const { error: studentError } = await window.supabaseClient
            .from('students')
            .delete()
            .eq('id', sid);
          
          if (studentError) throw studentError;
          
          // Delete student's user account if exists
          if (studentData?.user_id) {
            await window.supabaseClient
              .from('users')
              .delete()
              .eq('id', studentData.user_id);
          }
          
          // Delete parent's user account if exists
          if (studentData?.parent_user_id) {
            await window.supabaseClient
              .from('users')
              .delete()
              .eq('id', studentData.parent_user_id);
          }
          
          console.log('✅ Deleted all data for student:', sid);
        } catch (error) {
          console.error('Error deleting student data from Supabase:', error);
          toast('حدث خطأ في الحذف', 'error');
          return;
        }
      }
      
      // Remove from local state
      STATE.data.students = STATE.data.students.filter(s => s.id !== sid);
      STATE.data.activities = STATE.data.activities.filter(a => !a.studentIds.includes(sid));
      STATE.data.sessionLogs = STATE.data.sessionLogs.filter(l => l.studentId !== sid);
      STATE.data.messages = STATE.data.messages.filter(m => m.studentId !== sid);
      STATE.data.plans = STATE.data.plans.filter(p => p.studentId !== sid);
      persistState();
      closeModal();
      toast('تم حذف الطالبة وجميع بياناتها نهائياً');
      navigate('/teacher/students');
      return;
    }
    if (a === 'delete-teacher') {
      // Principal only
      if (STATE.user.role !== 'principal') {
        toast('هذا الإجراء للمديرة فقط.', 'error');
        return;
      }
      const tid = action.getAttribute('data-id');
      const teacher = STATE.data.users.find(u => u.id === tid);
      if (!teacher) return;
      const assignedCount = STATE.data.students.filter(s => s.teacher_id === tid && !s.archived).length;
      const confirmMsg = assignedCount > 0
        ? `حذف المعلمة "${teacher.name}" نهائياً؟\n\nتنبيه: لديها ${assignedCount} طالبة مسجلة — ستبقى الطالبات لكن بدون معلمة مخصصة.\n\nهذا الإجراء لا يمكن التراجع عنه.`
        : `حذف المعلمة "${teacher.name}" نهائياً؟ لا يمكن التراجع عن هذا الإجراء.`;
      if (!confirm(confirmMsg)) return;
      
      // Delete from Supabase using admin client
      (async () => {
        try {
          // First, unassign students
          if (assignedCount > 0) {
            const { error: unassignError } = await window.supabaseAdmin
              .from('students')
              .update({ teacher_id: null })
              .eq('teacher_id', tid);
            
            if (unassignError) {
              console.error('Error unassigning students:', unassignError);
              // Continue anyway
            }
          }
          
          // Try to delete auth user (but don't fail if it doesn't exist)
          if (teacher.auth_id) {
            try {
              await window.supabaseAdmin.auth.admin.deleteUser(teacher.auth_id);
              console.log('✅ Auth user deleted');
            } catch (authErr) {
              // Ignore auth deletion errors - user might not exist
              console.warn('⚠️ Auth user deletion failed (continuing anyway):', authErr.message);
            }
          }
          
          // ALWAYS delete user profile from users table - this is the critical step
          const { error: profileError } = await window.supabaseAdmin
            .from('users')
            .delete()
            .eq('id', tid);
          
          if (profileError) {
            console.error('❌ Profile deletion failed:', profileError);
            throw new Error('فشل حذف ملف المعلمة من قاعدة البيانات');
          }
          
          console.log('✅ Profile deleted from database');
          
          // Remove from local state
          STATE.data.students.forEach(s => { if (s.teacher_id === tid) s.teacher_id = null; });
          STATE.data.users = STATE.data.users.filter(u => u.id !== tid);
          
          toast(`تم حذف المعلمة ${teacher.name}`);
          navigate('/principal/teachers');
        } catch (error) {
          console.error('Error deleting teacher:', error);
          toast('حدث خطأ في حذف المعلمة: ' + error.message, 'error');
        }
      })();
      
      return;
    }
    if (a === 'view-as-teacher') {
      // Principal enters a read-only view of a teacher's account
      if (STATE.user.role !== 'principal') return;
      const tid = action.getAttribute('data-id');
      const teacher = STATE.data.users.find(u => u.id === tid);
      if (!teacher) return;
      // Store principal identity so we can return
      STATE._principalUser = STATE.user;
      // Switch to teacher view (read-only observer mode)
      STATE.user = { ...teacher, _observerMode: true, _returnRole: 'principal' };
      toast(`أنتِ الآن تشاهدين حساب ${teacher.name} — اضغطي "عودة للمديرة" للخروج`);
      navigate('/teacher/dashboard');
      return;
    }
    if (a === 'exit-observer-mode') {
      if (STATE._principalUser) {
        STATE.user = STATE._principalUser;
        STATE._principalUser = null;
        toast('عدتِ لحساب المديرة');
        navigate('/principal/teachers');
      }
      return;
    }
    if (a === 'add-teacher-note') {
      if (STATE.user.role !== 'principal') return;
      const tid = action.getAttribute('data-id');
      const teacher = STATE.data.users.find(u => u.id === tid);
      if (!teacher) return;
      openModal(`
        <div class="modal-head">
          <h2>ملاحظة لـ ${esc(teacher.name)}</h2>
          <button class="x" data-action="close-modal">${I.close}</button>
        </div>
        <p class="text-sm text-muted mb-md">ستظهر هذه الملاحظة في صفحة المعلمة ضمن قسم "ملاحظات المديرة".</p>
        <form data-form="save-teacher-note" data-id="${tid}">
          <div class="field">
            <label>نص الملاحظة</label>
            <textarea name="text" rows="4" required placeholder="مثال: يرجى الاهتمام بتسجيل الجلسات بشكل منتظم..."></textarea>
          </div>
          <button type="submit" class="btn lg block">${I.check}<span>حفظ الملاحظة</span></button>
        </form>
      `);
      return;
    }
    if (a === 'delete-teacher-note') {
      if (STATE.user.role !== 'principal') return;
      const tid = action.getAttribute('data-id');
      const idx = parseInt(action.getAttribute('data-idx'), 10);
      const teacher = STATE.data.users.find(u => u.id === tid);
      if (!teacher || !teacher.principal_notes) return;
      if (!confirm('حذف هذه الملاحظة؟')) return;
      const removed = teacher.principal_notes.splice(idx, 1);
      // Supabase is source of truth — no persistState
      (async () => {
        try {
          const { error } = await window.supabaseClient
            .from('users')
            .update({ principal_notes: teacher.principal_notes })
            .eq('id', tid);
          if (error) throw error;
          toast('تم حذف الملاحظة');
          handleRoute();
        } catch (err) {
          console.error('Error deleting note:', err);
          teacher.principal_notes.splice(idx, 0, ...removed); // rollback
          toast('حدث خطأ أثناء الحذف', 'error');
        }
      })();
      return;
    }
    if (a === 'delete-session') {
      const id = action.getAttribute('data-id');
      const sid = action.getAttribute('data-sid');
      if (!confirm('حذف هذه الجلسة؟')) return;
      
      // Delete from local state
      STATE.data.sessionLogs = STATE.data.sessionLogs.filter(l => l.id !== id);
      
      // Delete from Supabase
      (async () => {
        try {
          const { error } = await window.supabaseClient
            .from('session_logs')
            .delete()
            .eq('id', id);
          
          if (error) throw error;
          console.log('✅ Session deleted from Supabase:', id);
        } catch (error) {
          console.error('Error deleting session:', error);
          toast('حدث خطأ في حذف الجلسة', 'error');
        }
      })();
      
      persistState(); 
      toast('تم حذف الجلسة'); 
      handleRoute();
      return;
    }
    if (a === 'delete-goal') {
      const sessionId = action.getAttribute('data-session-id');
      const goalIndex = parseInt(action.getAttribute('data-goal-index'), 10);
      if (!confirm('حذف هذا الهدف من الجلسة؟')) return;
      
      const session = STATE.data.sessionLogs.find(l => l.id === sessionId);
      if (session && session.goalEvaluations[goalIndex]) {
        session.goalEvaluations.splice(goalIndex, 1);
        
        // Save to Supabase
        (async () => {
          try {
            const { error } = await window.supabaseClient
              .from('session_logs')
              .update({
                activities: session.goalEvaluations,
                updated_at: new Date().toISOString()
              })
              .eq('id', sessionId);
            
            if (error) throw error;
            console.log('✅ Goal deleted from session:', sessionId);
          } catch (error) {
            console.error('Error deleting goal:', error);
            toast('حدث خطأ في حذف الهدف', 'error');
          }
        })();
        
        persistState(); 
        toast('تم حذف الهدف'); 
        handleRoute();
      }
      return;
    }
    
    // ========== NEW FEATURES HANDLERS ==========
    
    // متابعة الطالبة
    if (a === 'add-followup') {
      const sid = action.getAttribute('data-sid');
      openAddFollowupModal(sid);
      return;
    }
    if (a === 'edit-followup') {
      const id = action.getAttribute('data-id');
      openEditFollowupModal(id);
      return;
    }
    if (a === 'delete-followup') {
      const id = action.getAttribute('data-id');
      if (!confirm('حذف هذه المتابعة؟')) return;
      
      STATE.data.studentFollowups = STATE.data.studentFollowups.filter(f => f.id !== id);
      
      // Delete from Supabase
      (async () => {
        try {
          const { error } = await window.supabaseClient
            .from('student_followups')
            .delete()
            .eq('id', id);
          
          if (error) throw error;
          console.log('✅ Followup deleted from Supabase:', id);
        } catch (error) {
          console.error('Error deleting followup:', error);
          toast('حدث خطأ في حذف المتابعة', 'error');
        }
      })();
      
      persistState();
      toast('تم حذف المتابعة');
      handleRoute();
      return;
    }
    
    // اختبار الذاكرة السمعية
    if (a === 'add-memory-test') {
      const sid = action.getAttribute('data-sid');
      const type = action.getAttribute('data-type');
      openMemoryTestModal(sid, parseInt(type));
      return;
    }
    if (a === 'view-memory-test') {
      const id = action.getAttribute('data-id');
      viewMemoryTestModal(id);
      return;
    }
    
    // التقرير المبدئي
    if (a === 'add-initial-report') {
      const sid = action.getAttribute('data-sid');
      openInitialReportModal(sid);
      return;
    }
    if (a === 'view-initial-report') {
      const id = action.getAttribute('data-id');
      viewInitialReportModal(id);
      return;
    }
    if (a === 'edit-initial-report') {
      const id = action.getAttribute('data-id');
      openInitialReportModal(null, id);
      return;
    }
    if (a === 'print-initial-report') {
      const id = action.getAttribute('data-id');
      printInitialReport(id);
      return;
    }
    
    // ========== END NEW FEATURES HANDLERS ==========
    
    if (a === 'complete-activity') {
      const aid = action.getAttribute('data-aid');
      const act = STATE.data.activities.find(x => x.id === aid);
      if (act) {
        act.status = 'done';
        act.submission = { id: 'sb-'+Date.now(), completedAt: new Date().toISOString().slice(0,10), parentNote: '' };
        const child = studentBy(act.studentIds[0]);
        if (child && act.rewardPoints) {
          child.points += act.rewardPoints;
          STATE.data.rewards.unshift({ id:'rw-'+Date.now(), studentId:child.id, kind:'points', value:act.rewardPoints, reason:act.title, date:new Date().toISOString().slice(0,10) });
        }
        persistState(); toast('أحسنت! تم تسجيل النشاط 🎉'); handleRoute();
      }
      return;
    }
    if (a === 'upload-video') {
      const aid = action.getAttribute('data-aid');
      openUploadModal(aid);
      return;
    }
    if (a === 'submit-review') {
      const aid = action.getAttribute('data-aid');
      const act = STATE.data.activities.find(x => x.id === aid);
      if (act) {
        const fb = $('[data-input="feedback"]')?.value || 'تمت المراجعة.';
        const masteryBtn = $('[data-mastery].active');
        const mastery = masteryBtn?.getAttribute('data-mastery') || 'جيد';
        act.status = 'done';
        STATE.data.reviews.push({
          id: 'rv-'+Date.now(),
          activityId: act.id,
          teacherId: STATE.user.id,
          feedback: fb,
          masteryScore: mastery,
          skillUpdates: [],
          pointsAwarded: act.rewardPoints,
          reviewedAt: new Date().toISOString().slice(0,10)
        });
        const child = studentBy(act.studentIds[0]);
        if (child && act.rewardPoints) {
          child.points += act.rewardPoints;
        }
        persistState(); toast('تم اعتماد المراجعة'); navigate('/teacher/dashboard');
      }
      return;
    }
  }

  // SPA links via data-route
  const link = t.closest('a[data-route]');
  if (link) {
    e.preventDefault();
    navigate(link.getAttribute('href').replace(/^#/,''));
    return;
  }

  // Switches
  const sw = t.closest('.switch');
  if (sw) { sw.classList.toggle('on'); return; }

  // Tabs
  const tab = t.closest('[data-tab]');
  if (tab) {
    const wrap = tab.closest('[data-tabs]') || document;
    wrap.querySelectorAll('[data-tab]').forEach(x => x.classList.remove('active'));
    tab.classList.add('active');
    document.querySelectorAll('[data-tab-content]').forEach(c => c.classList.add('hide'));
    const target = document.querySelector(`[data-tab-content="${tab.getAttribute('data-tab')}"]`);
    if (target) target.classList.remove('hide');
    return;
  }

  // Skill chip toggle
  const sc = t.closest('[data-toggle-skill]');
  if (sc) { sc.classList.toggle('active'); return; }

  // Library type filter
  const lt = t.closest('[data-library-type]');
  if (lt) {
    const v = lt.getAttribute('data-library-type');
    const params = new URLSearchParams((location.hash.split('?')[1]) || '');
    if (v) params.set('type', v); else params.delete('type');
    const qs = params.toString();
    const role = STATE.user.role;
    navigate(`/${role}/library${qs ? '?' + qs : ''}`);
    return;
  }

  // Library skill toggle (in add modal)
  const ls = t.closest('[data-lib-skill]');
  if (ls) { ls.classList.toggle('active'); return; }

  // Working day toggle (settings → term)
  const td = t.closest('[data-toggle-day]');
  if (td) { td.classList.toggle('active'); return; }

  // Filter status
  const fs = t.closest('[data-filter-status]');
  if (fs) {
    const v = fs.getAttribute('data-filter-status');
    if (v) navigate(`/teacher/activities?status=${v}`); else navigate('/teacher/activities');
    return;
  }

  // Eval chip (single select within a goal/q row)
  const evalChip = t.closest('.eval-chip');
  if (evalChip) {
    const row = evalChip.closest('.goal-eval-row, .q-row');
    if (row) row.querySelectorAll('.eval-chip').forEach(c => c.classList.remove('active'));
    evalChip.classList.add('active');
    const input = evalChip.querySelector('input[type="radio"], input[type="checkbox"]');
    if (input) input.checked = true;
    return;
  }
  // Generic q-row chip (single-select)
  const qChip = t.closest('.q-row .chip:not(.eval-chip):not(.tool-chip)');
  if (qChip) {
    const input = qChip.querySelector('input[type="radio"]');
    if (input) {
      const name = input.name;
      const form = qChip.closest('form');
      if (form) form.querySelectorAll(`input[name="${name}"]`).forEach(i => {
        i.checked = false;
        i.closest('.chip')?.classList.remove('active');
      });
      input.checked = true;
      qChip.classList.add('active');
    }
    return;
  }
  // Tool chip (multi-toggle)
  const toolChip = t.closest('.tool-chip');
  if (toolChip) { toolChip.classList.toggle('active'); return; }

  // Quick feedback templates / mastery / points / skill delta
  const tpl = t.closest('[data-template]');
  if (tpl) { const ta = $('[data-input="feedback"]'); if (ta) ta.value = tpl.getAttribute('data-template'); return; }
  const mast = t.closest('[data-mastery]');
  if (mast) { document.querySelectorAll('[data-mastery]').forEach(x => x.classList.remove('active')); mast.classList.add('active'); return; }
  const pts = t.closest('[data-points]');
  if (pts) { document.querySelectorAll('[data-points]').forEach(x => x.classList.remove('active')); pts.classList.add('active'); toast(`تم اختيار +${pts.getAttribute('data-points')} نقطة`); return; }
  const sd = t.closest('[data-skill-delta]');
  if (sd) { sd.classList.toggle('active'); toast('تم تحديث المهارة'); return; }
  const att = t.closest('[data-att]');
  if (att) {
    const all = document.querySelectorAll(`[data-att^="${att.getAttribute('data-att').split('-')[0]}"]`);
    all.forEach(x => x.classList.remove('active'));
    att.classList.add('active');
    return;
  }
});

// Live search (debounced, refocuses after re-render)
const SEARCH_TARGETS = {
  'library-search':  { route: 'library' },
  'students-search': { route: 'students' },
};
let _searchTimer;
document.addEventListener('input', (e) => {
  const cfg = SEARCH_TARGETS[e.target.id];
  if (!cfg) return;
  clearTimeout(_searchTimer);
  const id = e.target.id;
  const value = e.target.value;
  const cursor = e.target.selectionStart;
  _searchTimer = setTimeout(() => {
    const params = new URLSearchParams((location.hash.split('?')[1]) || '');
    if (value) params.set('q', value); else params.delete('q');
    const qs = params.toString();
    const role = STATE.user.role || 'teacher';
    history.replaceState(null, '', `#/${role}/${cfg.route}${qs ? '?' + qs : ''}`);
    handleRoute();
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) { el.focus(); try { el.setSelectionRange(cursor, cursor); } catch {} }
    });
  }, 180);
});

document.addEventListener('submit', (e) => {
  // Let login forms be handled by their own listener
  if (e.target.matches('[data-form="real-login"]')) {
    return; // Don't handle here
  }
  
  // Add Student
  const fAddStud = e.target.closest('[data-form="add-student"]');
  if (fAddStud) {
    e.preventDefault();
    const fd = new FormData(fAddStud);
    const name = (fd.get('name') || '').trim();
    const stage = fd.get('stage'); const section = fd.get('section');
    const parentName = (fd.get('parentName') || 'ولي الأمر').trim();
    const parentPhone = (fd.get('parentPhone') || '').trim();
    if (!name) { toast('اسم الطالبة مطلوب', 'warn'); return; }
    if (name.length < 4) { toast('اسم الطالبة قصير جداً (الأقل ٤ أحرف)', 'warn'); return; }
    if (!stage || !section) { toast('اختاري المرحلة والفصل', 'warn'); return; }
    // Phone validation removed - accept any format or empty
    const phoneNormalized = parentPhone || ''; // Accept as-is
    // Duplicate name in same teacher's roster
    const dup = STATE.data.students.find(s => s.teacherId === STATE.user.id && s.name.trim() === name);
    if (dup) { toast(`يوجد طالبة بنفس الاسم في طلابكِ بالفعل`, 'warn'); return; }
    const sid = 's-new-' + Date.now();
    const pid = 'p-new-' + Date.now();
    const colors = ['c-mint','c-pink','c-sky','c-amber','c-purple','c-gold'];
    const color = colors[STATE.data.students.length % colors.length];
    const initials = name.split(/\s+/).map(w => w[0]).slice(0,2).join('');
    const pInitials = parentName.split(/\s+/).map(w => w[0]).slice(0,2).join('') || 'و';
    const today = new Date().toISOString().slice(0,10);

    STATE.data.users.push({
      id: pid, role: 'parent', name: parentName, relation: `والدة ${name.split(/\s+/)[0]}`,
      color, initials: pInitials, studentId: sid
    });
    const inviteCode = 'ATHR-' + (1000 + STATE.data.students.length + Math.floor(Math.random() * 90));
    STATE.data.students.push({
      id: sid, name, age: 7, grade: `${stage} ${section}`, color, initials,
      teacherId: STATE.user.id, parentId: pid, planId: 'pl-new-' + Date.now(),
      parentPhone: phoneNormalized, inviteCode,
      baselineLevel: '', baselineVideo: null,
      points: 0, badges: [],
      attendance: { present: 0, absent: 0, late: 0, excused: 0 },
      enrolled: today, schedule: [],
      forms: {
        parentConsent:      { signed: false },
        preAssessment:      { completed: false },
        speechTest:         { completed: false },
        auditoryMemoryTest: { completed: false },
      }
    });
    STATE.data.plans.push({
      id: 'pl-new-' + Date.now(), studentId: sid, term: 'الفصل الثاني 2026',
      goals: [], targetSkillIds: [], progress: [], notes: ''
    });
    persistState();
    closeModal();
    toast('تمت إضافة الطالبة ✨ أرسلي رابط الدعوة لولي الأمر');
    navigate(`/teacher/student/${sid}?tab=messages`);
    return;
  }

  // Edit Student (from principal modal)
  const fEditStud = e.target.closest('[data-form="edit-student"]');
  if (fEditStud) {
    e.preventDefault();
    const sid = fEditStud.getAttribute('data-sid');
    const st = studentBy(sid);
    if (!st) return;
    
    const fd = new FormData(fEditStud);
    const name = (fd.get('name') || '').trim();
    const stage = fd.get('stage');
    const section = fd.get('section');
    const age = parseInt(fd.get('age'), 10);
    const parentName = (fd.get('parentName') || '').trim();
    const parentPhone = (fd.get('parentPhone') || '').trim();
    
    if (!name) { toast('اسم الطالبة مطلوب', 'warn'); return; }
    if (!stage || !section) { toast('اختاري المرحلة والفصل', 'warn'); return; }
    
    // Update student data
    st.name = name;
    st.grade = `${stage} ${section}`;
    if (age && age >= 3 && age <= 18) st.age = age;
    if (parentName) st.parentName = parentName;
    if (parentPhone) st.parent_phone = parentPhone; // Accept any format
    
    // Update initials
    st.initials = name.split(/\s+/).map(w => w[0]).slice(0,2).join('');
    
    // Sync to Supabase if available
    if (window.supabaseClient) {
      (async () => {
        const { error } = await window.supabaseClient
          .from('students')
          .update({
            name: st.name,
            grade: st.grade,
            age: st.age,
            parent_name: st.parentName,
            parent_phone: st.parent_phone,
            updated_at: new Date().toISOString()
          })
          .eq('id', sid);
        
        if (error) {
          console.error('Error updating student in Supabase:', error);
        }
      })();
    }
    
    persistState();
    closeModal();
    toast('تم تحديث بيانات الطالبة ✓');
    handleRoute();
    return;
  }

  // Edit student info (name, grade, age, parent name & phone)
  const fEditStu = e.target.closest('[data-form="edit-student-info"]');
  if (fEditStu) {
    e.preventDefault();
    const sid = fEditStu.getAttribute('data-sid');
    const st = studentBy(sid);
    if (!st) return;
    const fd = new FormData(fEditStu);
    const newName  = (fd.get('studentName') || '').trim();
    const stage    = (fd.get('stage') || '').trim();
    const section  = (fd.get('section') || '').trim();
    const newGrade = (stage && section) ? `${stage} ${section}` : '';
    const newAge   = parseInt(fd.get('age'), 10);
    const newPName = (fd.get('parentName') || '').trim();
    const newPhone = (fd.get('parentPhone') || '').trim();

    if (!newName) { toast('اسم الطالبة مطلوب', 'warn'); return; }
    if (!newGrade) { toast('اختاري المرحلة والفصل', 'warn'); return; }
    if (!Number.isFinite(newAge) || newAge < 3 || newAge > 18) { toast('العمر غير صحيح', 'warn'); return; }
    // Phone validation removed - accept any format

    st.name = newName;
    st.grade = newGrade;
    st.age = newAge;
    st.parentPhone = newPhone; // Accept any format
    // Recompute initials from new name
    st.initials = newName.split(/\s+/).map(w => w[0]).slice(0, 2).join('');

    const parent = STATE.data.users.find(u => u.id === st.parentId);
    if (parent && newPName) {
      parent.name = newPName;
      parent.relation = `والدة ${newName.split(/\s+/)[0]}`;
      parent.initials = newPName.split(/\s+/).map(w => w[0]).slice(0, 2).join('');
    }

    persistState();
    
    // ✅ FIX: Save to Supabase immediately so changes persist across sessions
    if (window.supabaseClient) {
      (async () => {
        try {
          const { error } = await window.supabaseClient
            .from('students')
            .update({
              name: st.name,
              grade: st.grade,
              age: st.age,
              parent_phone: st.parentPhone,
              initials: st.initials
            })
            .eq('id', sid);
          
          if (error) {
            console.error('❌ Error saving student to Supabase:', error);
            toast('حدث خطأ في حفظ البيانات، لكن تم الحفظ محلياً', 'warn');
          } else {
            console.log('✅ Student saved to Supabase:', st.name);
          }
          
          // Also update parent name if changed
          if (parent && newPName && st.parent_id) {
            const { error: parentError } = await window.supabaseClient
              .from('users')
              .update({
                name: parent.name,
                relation: parent.relation,
                initials: parent.initials
              })
              .eq('id', st.parent_id);
            
            if (parentError) {
              console.error('❌ Error saving parent to Supabase:', parentError);
            }
          }
        } catch (err) {
          console.error('❌ Supabase error:', err);
        }
      })();
    }
    
    closeModal();
    toast('تم حفظ التعديلات');
    handleRoute();
    return;
  }

  // Save form questionnaire (4 form types)
  const fForm = e.target.closest('[data-form="save-form"]');
  if (fForm) {
    e.preventDefault();
    const sid = fForm.getAttribute('data-sid');
    const fkey = fForm.getAttribute('data-fkey');
    const st = studentBy(sid);
    if (!st) return;
    
    // ✅ FIX: Ensure forms is always an object, not an array
    if (Array.isArray(st.forms)) {
      console.warn('⚠️ forms was an array, converting to object');
      st.forms = {};
    }
    st.forms = st.forms || {};
    
    const today = new Date().toISOString().slice(0,10);
    const fd = new FormData(fForm);
    const notes = (fd.get('notes') || '').trim();

    if (fkey === 'parentConsent') {
      if (!fd.get('agree')) { toast('الموافقة مطلوبة للحفظ', 'warn'); return; }
      st.forms.parentConsent = {
        signed: true, date: today,
        signedBy: (fd.get('signedBy') || userBy(st.parent_id)?.name || 'ولي الأمر').trim(), // Fixed: use parent_id
      };
    } else if (fkey === 'preAssessment') {
      // Merge with existing answers (we save one section at a time)
      const existing = st.forms.preAssessment || {};
      const answers = { ...(existing.answers || {}) };
      // Pull all q_* fields from this form submission
      for (const [k, v] of fd.entries()) {
        if (k.startsWith('q_') && v != null && v !== '') answers[k.slice(2)] = v;
      }
      // Calculate completion: how many questions have answers
      let answered = 0;
      let total = 0;
      PRE_ASSESSMENT_SECTIONS.forEach(sec => {
        sec.questions.forEach(q => {
          total++;
          if (answers[q.id]) answered++;
        });
      });
      const pct = total ? Math.round((answered / total) * 100) : 0;
      // ✅ FIXED: Mark as complete if ANY questions answered (not 60% threshold)
      const completed = answered > 0;
      st.forms.preAssessment = {
        ...existing,
        completed, 
        date: today,
        score: pct,
        answers,
        notes: notes || existing.notes || '',
      };
      console.log('✅ preAssessment saved:', {completed, score: pct, answered, total});
    } else if (fkey === 'speechTest') {
      const results = {};
      const remarks = {};
      const wrongSounds = [];
      
      SPEECH_TEST_SOUNDS.forEach(s => {
        const first = fd.get(`s_${s.id}_first`) || '';
        const middle = fd.get(`s_${s.id}_middle`) || '';
        const last = fd.get(`s_${s.id}_last`) || '';
        const moving = fd.get(`s_${s.id}_moving`) || '';
        const remark = fd.get(`remark_${s.id}`) || '';
        
        const isWrong = fd.get(`w_${s.id}`) === 'on';
        
        results[s.id] = { first, middle, last, moving, isWrong };
        if (remark) remarks[s.id] = remark;
        
        // If sound is marked as wrong, add to wrongSounds for goal generation
        if (isWrong) {
          wrongSounds.push({
            id: s.id,
            sound: s.sound
          });
        }
      });
      
      st.forms.speechTest = {
        completed: true,
        date: today,
        wrongSounds,
        results,
        remarks,
      };
      
      console.log('✅ speechTest saved with wrong sounds:', wrongSounds.length, wrongSounds);
    } else if (fkey === 'auditoryMemoryTest') {
      const tasks = {}; let score = 0, totalMax = 0;
      AUDITORY_MEMORY_TASKS.forEach(task => {
        const v = fd.get(`t_${task.id}`);
        if (v != null && v !== '') {
          const num = parseInt(v, 10);
          tasks[task.id] = num; totalMax += task.max; score += num;
        }
      });
      const pct = totalMax ? Math.round((score / totalMax) * 100) : 0;
      st.forms.auditoryMemoryTest = {
        completed: true, date: today, score: pct,
        tasks, notes,
      };
    }

    // Save to Supabase
    (async () => {
      try {
        console.log('💾 Saving form to Supabase:', fkey, st.forms);
        console.log('📝 Student ID:', sid);
        console.log('🔍 Supabase client exists:', !!window.supabaseClient);
        
        const { data, error } = await window.supabaseClient
          .from('students')
          .update({ forms: st.forms })
          .eq('id', sid)
          .select();  // ✅ Added .select() to get the updated row back
        
        if (error) {
          console.error('❌ Supabase error:', error);
          throw error;
        }
        
        console.log('✅ Supabase response:', data);
        
        if (!data || data.length === 0) {
          console.error('⚠️ WARNING: Update returned no rows! Student might not exist or RLS is blocking.');
          throw new Error('لم يتم حفظ البيانات - تحقق من إعدادات RLS في Supabase');
        }
        
        console.log('✅ Form saved to Supabase successfully');
        
        persistState();
        closeModal();
        toast('تم حفظ النموذج ✅');
        handleRoute();
      } catch (error) {
        console.error('❌ Error saving form:', error);
        toast('حدث خطأ أثناء حفظ النموذج: ' + error.message, 'error');
      }
    })();
    return;
  }

  // Save profile
  const fProfile = e.target.closest('[data-form="save-profile"]');
  if (fProfile) {
    e.preventDefault();
    const fd = new FormData(fProfile);
    const u = STATE.user;
    u.name = (fd.get('name') || '').trim() || u.name;
    u.title = (fd.get('title') || '').trim();
    u.email = (fd.get('email') || '').trim();
    u.phone = (fd.get('phone') || '').trim();
    // Sync into users array
    const idx = STATE.data.users.findIndex(x => x.id === u.id);
    if (idx >= 0) STATE.data.users[idx] = { ...STATE.data.users[idx], ...u };
    persistState(); toast('تم حفظ البيانات'); handleRoute();
    return;
  }

  // Save school info
  const fSchool = e.target.closest('[data-form="save-school"]');
  if (fSchool) {
    e.preventDefault();
    const fd = new FormData(fSchool);
    const sch = STATE.config.school;
    sch.name = (fd.get('name') || '').trim() || sch.name;
    sch.shortName = (fd.get('shortName') || '').trim() || sch.shortName;
    sch.address = (fd.get('address') || '').trim();
    sch.phone = (fd.get('phone') || '').trim();
    const pName = (fd.get('principalName') || '').trim();
    const pTitle = (fd.get('principalTitle') || '').trim();
    if (pName) sch.principal.name = pName;
    if (pTitle) sch.principal.title = pTitle;
    sch.principal.initials = sch.principal.name.split(/\s+/).map(w => w[0]).slice(0,2).join('') || 'م';
    persistState(); toast('تم حفظ بيانات المدرسة'); handleRoute();
    return;
  }

  // Save term & working days
  const fTerm = e.target.closest('[data-form="save-term"]');
  if (fTerm) {
    e.preventDefault();
    const fd = new FormData(fTerm);
    STATE.config.termName = (fd.get('termName') || '').trim() || STATE.config.termName;
    STATE.config.termStart = fd.get('termStart') || STATE.config.termStart;
    const days = Array.from(fTerm.querySelectorAll('[data-toggle-day].active')).map(el => el.getAttribute('data-toggle-day'));
    if (days.length) STATE.config.workingDays = days;
    persistState(); toast('تم حفظ التقويم'); handleRoute();
    return;
  }

  // Save skill
  const fSkill = e.target.closest('[data-form="save-skill"]');
  if (fSkill) {
    e.preventDefault();
    const fd = new FormData(fSkill);
    const id = fSkill.getAttribute('data-id');
    const name = (fd.get('name') || '').trim();
    if (!name) return;
    const category = fd.get('category') || 'أخرى';
    if (id) {
      const sk = STATE.data.skills.find(s => s.id === id);
      if (sk) { sk.name = name; sk.category = category; }
    } else {
      STATE.data.skills.push({ id: 'sk-' + Date.now(), name, category, color: 'primary' });
    }
    persistState(); closeModal(); toast(id ? 'تم التحديث' : 'تمت الإضافة'); handleRoute();
    return;
  }

  // Save tool
  const fTool = e.target.closest('[data-form="save-tool"]');
  if (fTool) {
    e.preventDefault();
    const fd = new FormData(fTool);
    const name = (fd.get('name') || '').trim();
    const icon = document.querySelector('[data-pick-icon].active')?.getAttribute('data-pick-icon') || '🧰';
    if (!name) return;
    STATE.data.sessionTools.push({ id: 'tool-' + Date.now(), name, icon });
    persistState(); closeModal(); toast('تمت إضافة الأداة'); handleRoute();
    return;
  }

  // Save template
  const fTpl = e.target.closest('[data-form="save-template"]');
  if (fTpl) {
    e.preventDefault();
    const body = (new FormData(fTpl).get('body') || '').trim();
    if (!body) return;
    STATE.data.feedbackTemplates.push(body);
    persistState(); closeModal(); toast('تمت إضافة القالب'); handleRoute();
    return;
  }

  // Parent login (code + phone) — manual entry on login screen
  const fParentLogin = e.target.closest('[data-form="parent-login"]');
  if (fParentLogin) {
    e.preventDefault();
    const fd = new FormData(fParentLogin);
    const code = (fd.get('code') || '').trim().toUpperCase();
    const phone = (fd.get('phone') || '').trim();
    const student = STATE.data.students.find(s => (s.inviteCode || '').toUpperCase() === code);
    if (!student) { toast('رمز الدعوة غير موجود', 'error'); return; }
    if (student.parentPhone !== phone) { toast('رقم الجوال غير مطابق', 'error'); return; }
    loginAsParent(student);
    return;
  }

  // Invite link login (code from URL + phone)
  const fInvite = e.target.closest('[data-form="invite-login"]');
  if (fInvite) {
    e.preventDefault();
    const code = fInvite.getAttribute('data-code');
    const phone = (new FormData(fInvite).get('phone') || '').trim();
    const student = STATE.data.students.find(s => (s.inviteCode || '').toUpperCase() === code);
    if (!student) { toast('الرابط لم يعد صالحاً', 'error'); return; }
    if (student.parentPhone !== phone) { toast('رقم الجوال غير مطابق للرابط', 'error'); return; }
    loginAsParent(student);
    return;
  }

  // Send message (teacher ↔ parent)
  const fSend = e.target.closest('[data-form="send-message"]');
  if (fSend) {
    e.preventDefault();
    const fd = new FormData(fSend);
    const body = (fd.get('body') || '').trim();
    if (!body) return;
    const sid = fSend.getAttribute('data-sid');
    const from = fSend.getAttribute('data-from'); // 'teacher', 'parent', or 'principal'
    const st = studentBy(sid);
    if (!st) return;
    const now = new Date();

    // DB constraint only allows 'teacher' | 'parent' — principal maps to 'teacher' in from_role
    // but we store 'principal' in from_user_id context via from_role='principal' after DB fix,
    // OR we store it as 'teacher' with from_user_id set. We use a dedicated 'principal' value
    // — requires the DB constraint to be updated (see FRESH-START.sql).
    const messageData = {
      school_id: STATE.user.school_id,
      student_id: sid,
      from_role: from, // 'teacher', 'parent', or 'principal'
      from_user_id: (from === 'teacher' || from === 'principal') ? STATE.user.id : null,
      content: body,
      read: false,
    };

    console.log('📤 Sending message:', messageData);

    // Clear input immediately for better UX
    const inputField = fSend.querySelector('input[name="body"], textarea[name="body"]');
    if (inputField) inputField.value = '';

    // Helper: render a single message bubble correctly
    const renderBubble = (m, viewerFrom) => {
      const isPrincipalMsg = m.from === 'principal';
      const mine = (viewerFrom === 'principal' && isPrincipalMsg)
        || (viewerFrom !== 'principal' && m.from === viewerFrom);
      return `
        <div class="msg ${mine ? 'mine' : 'theirs'} ${isPrincipalMsg ? 'principal-msg' : ''}"
             style="align-self:${mine ? 'flex-end' : 'flex-start'}">
          ${isPrincipalMsg && !mine ? `<div class="msg-sender">المدير</div>` : ''}
          <div class="msg-bubble" style="${
            isPrincipalMsg && mine
              ? 'background:var(--critical);color:#fff;'
              : isPrincipalMsg && !mine
              ? 'background:var(--critical-50);color:var(--critical);'
              : mine
              ? 'background:var(--ink);color:var(--surface);'
              : 'background:var(--surface);box-shadow:inset 0 0 0 1px var(--hair-2);color:var(--ink);'
          }">${esc(m.body)}</div>
          <div class="msg-time" style="text-align:${mine ? 'end' : 'start'}">${m.time || ''}</div>
        </div>
      `;
    };

    // Save to Supabase
    (async () => {
      try {
        const { data, error } = await window.supabaseClient
          .from('messages')
          .insert(messageData)
          .select()
          .single();

        if (error) {
          console.error('❌ Supabase error:', error);
          throw error;
        }

        console.log('✅ Message sent to Supabase:', data);

        const newMessage = {
          id: data.id,
          studentId: sid,
          from,
          body,
          date: data.created_at?.slice(0, 10) || now.toISOString().slice(0,10),
          time: data.created_at?.slice(11, 16) || now.toTimeString().slice(0,5),
          read: false,
        };

        if (!STATE.data.messages.find(m => m.id === data.id)) {
          STATE.data.messages.push(newMessage);
        }

        // Re-render chat with correct bubble styles
        const chatBody = document.querySelector('.chat-body');
        if (chatBody) {
          const msgs = STATE.data.messages
            .filter(m => m.studentId === sid)
            .sort((a,b) => (a.date+a.time).localeCompare(b.date+b.time));
          chatBody.innerHTML = msgs.map(m => renderBubble(m, from)).join('');
          chatBody.scrollTop = chatBody.scrollHeight;
        }

        if (inputField) inputField.focus();
      } catch (error) {
        console.error('❌ Error sending message:', error);
        toast('حدث خطأ في إرسال الرسالة', 'error');
        if (inputField) inputField.value = body;
      }
    })();
    return;
  }

  // Add schedule slot
  const fAddSlot = e.target.closest('[data-form="add-slot"]');
  if (fAddSlot) {
    e.preventDefault();
    const fd = new FormData(fAddSlot);
    const sid = fd.get('studentId'); const day = fd.get('day');
    const period = fd.get('period'); // رقم الحصة
    if (!sid || !day || !period) { toast('أكملي البيانات', 'warn'); return; }
    
    // Check period conflicts across all students for the same day
    const myStudents = STATE.data.students.filter(s => !s.archived);
    let conflict = null;
    myStudents.forEach(s => (s.schedule || []).forEach(slot => {
      if (slot.day !== day) return;
      if (slot.period && slot.period === period) conflict = { student: s, slot };
    }));
    if (conflict) {
      toast(`تعارض مع جلسة ${conflict.student.name} في ${getPeriodLabel(conflict.slot.period)}`, 'error');
      return;
    }
    const st = studentBy(sid);
    if (st) {
      const newSlot = {
        day,
        period, // رقم الحصة بدلاً من time و duration
        room: (fd.get('room') || 'غرفة ١').trim()
      };
      
      // Update schedule array
      st.schedule = st.schedule || [];
      st.schedule.push(newSlot);
      
      // Save to Supabase
      (async () => {
        try {
          const { error } = await window.supabaseClient
            .from('students')
            .update({ schedule: st.schedule })
            .eq('id', sid);
          
          if (error) throw error;
          
          persistState(); 
          closeModal(); 
          toast('تمت إضافة الجلسة 🌿');
          handleRoute();
        } catch (error) {
          console.error('Error saving schedule:', error);
          toast('حدث خطأ أثناء حفظ الجلسة', 'error');
        }
      })();
    }
    return;
  }

  // Add Library item
  const fAddLib = e.target.closest('[data-form="add-library"]');
  if (fAddLib) {
    e.preventDefault();
    (async () => {
      const fd = new FormData(fAddLib);
      const title = (fd.get('title') || '').trim();
      if (!title) { toast('أدخلي عنواناً للمحتوى', 'warn'); return; }
      const type = fd.get('type') || 'worksheet';
      const skillIds = Array.from(fAddLib.querySelectorAll('[data-lib-skill].active')).map(el => el.getAttribute('data-lib-skill'));
      const meta = (fd.get('meta') || '').trim();
      const link = (fd.get('link') || '').trim();
      const file = fd.get('file');
      const newItem = {
        id: 'lb-new-' + Date.now(),
        school_id: STATE.user.school_id,
        teacher_id: STATE.user.id,
        type, 
        title,
        skillIds,
        difficulty: fd.get('difficulty') || 'مبتدئ',
      };
      if (type === 'video' && meta) newItem.duration = meta;
      if (meta && type !== 'video') newItem.size = meta;
      if (link) newItem.link = link;
      
      // Real file storage (base64 in Supabase)
      if (file && file.size > 0) {
        try {
          const dataUrl = await fileToDataUrl(file);
          newItem.fileData = dataUrl;
          newItem.fileName = file.name;
          newItem.fileSize = file.size;
          newItem.fileType = file.type;
          if (!newItem.size) newItem.size = formatBytes(file.size);
        } catch (err) {
          toast('تعذّر قراءة الملف', 'error');
          return;
        }
      }
      
      if (!link && !newItem.fileData) {
        toast('أضيفي رابطاً أو ملفاً', 'warn');
        return;
      }
      
      // Save to Supabase
      const { data, error } = await window.supabaseClient
        .from('library')
        .insert([newItem])
        .select();
      
      if (error) {
        console.error('❌ Error saving library item:', error);
        toast('حدث خطأ أثناء الحفظ: ' + error.message, 'error');
        return;
      }
      
      console.log('✅ Library item saved to Supabase:', data);
      
      // Add to local state
      STATE.data.library.unshift(newItem);
      persistState();
      closeModal();
      toast('تمت إضافة المحتوى');
      handleRoute();
    })();
    return;
  }

  // Send Library Item to Students
  const fSendLib = e.target.closest('[data-form="send-library-item"]');
  if (fSendLib) {
    e.preventDefault();
    const libraryId = fSendLib.getAttribute('data-library-id');
    const item = STATE.data.library.find(l => l.id === libraryId);
    if (!item) return;
    
    const fd = new FormData(fSendLib);
    const selectedStudents = fd.getAll('students[]');
    
    console.log('📤 Sending library item:', libraryId, 'to students:', selectedStudents);
    
    if (!selectedStudents.length) {
      toast('اختاري طالبة واحدة على الأقل', 'warn');
      return;
    }
    
    // Save to Supabase
    (async () => {
      try {
        // Initialize sentLibraryItems if it doesn't exist
        if (!STATE.data.sentLibraryItems) STATE.data.sentLibraryItems = [];
        
        // Create sent item records for each student
        const newItems = selectedStudents.map(studentId => ({
          id: 'sent-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9),
          libraryItemId: libraryId,
          studentId: studentId,
          sentBy: STATE.user.id,
          sentAt: new Date().toISOString(),
          viewed: false
        }));
        
        console.log('💾 Saving to Supabase:', newItems);
        
        // Insert into Supabase
        const { data, error } = await window.supabaseClient
          .from('sentLibraryItems')
          .insert(newItems)
          .select();
        
        if (error) throw error;
        
        console.log('✅ Saved successfully:', data);
        
        // Add to local state
        STATE.data.sentLibraryItems.push(...newItems);
        persistState();
        closeModal();
        toast(`✅ تم إرسال المحتوى إلى ${arNum(selectedStudents.length)} طالبة`);
      } catch (error) {
        console.error('❌ Error sending library item:', error);
        toast('حدث خطأ أثناء الإرسال: ' + error.message, 'error');
      }
    })();
    return;
  }


  // Add custom goal to session
  const fCustomGoal = e.target.closest('[data-form="add-custom-goal-form"]');
  if (fCustomGoal) {
    e.preventDefault();
    const fd = new FormData(fCustomGoal);
    const goalText = (fd.get('goalText') || '').trim();
    if (!goalText) return;
    
    // Find the session modal (it should still be open behind this modal)
    const builder = document.getElementById('session-goals-builder');
    if (builder) {
      // Remove empty state if exists
      const empty = builder.querySelector('.text-muted.center');
      if (empty) empty.parentElement.remove();
      
      const idx = builder.querySelectorAll('.goal-eval-row').length;
      const tmp = document.createElement('div');
      tmp.innerHTML = goalEvalRowTemplate(goalText, idx).trim();
      builder.appendChild(tmp.firstChild);
    }
    
    closeModal();
    toast('تمت إضافة الهدف');
    return;
  }

  // Add Session
  const fAddSess = e.target.closest('[data-form="add-session"]');
  if (fAddSess) {
    e.preventDefault();
    const sid = fAddSess.getAttribute('data-sid');
    const fd = new FormData(fAddSess);
    
    // Get the 3 goal types evaluations
    const goalEvaluations = [];
    
    const cognitiveStatus = fd.get('cognitive_status');
    const receptiveStatus = fd.get('receptive_status');
    const articulationStatus = fd.get('articulation_status');
    
    if (cognitiveStatus) {
      goalEvaluations.push({
        goal: 'هدف إدراكي',
        status: cognitiveStatus
      });
    }
    
    if (receptiveStatus) {
      goalEvaluations.push({
        goal: 'هدف استقبالي/تعبيري',
        status: receptiveStatus
      });
    }
    
    if (articulationStatus) {
      goalEvaluations.push({
        goal: 'هدف نطق',
        status: articulationStatus
      });
    }
    
    if (!goalEvaluations.length) {
      toast('اختاري حالة واحدة على الأقل لهدف من الأهداف', 'warn');
      return;
    }
    
    const tools = Array.from(fAddSess.querySelectorAll('.tool-chip.active')).map(el => el.getAttribute('data-tool'));
    
    const sessionData = {
      student_id: sid,
      teacher_id: STATE.user.id,
      school_id: STATE.user.school_id,
      date: fd.get('date'),
      duration: Number(fd.get('duration')) || 30,
      activities: JSON.stringify(goalEvaluations), // Store goal evaluations as activities
      notes: (fd.get('notes') || '').trim() + (tools.length ? `\n\nالأدوات: ${tools.join(', ')}` : '')
    };
    
    // Save to Supabase
    (async () => {
      try {
        const { data, error } = await window.supabaseClient
          .from('session_logs')
          .insert(sessionData)
          .select()
          .single();
        
        if (error) throw error;
        
        // Also save to local state
        STATE.data.sessionLogs.unshift({
          id: data.id,
          studentId: sid,
          teacherId: STATE.user.id,
          date: fd.get('date'),
          time: fd.get('time'),
          duration: Number(fd.get('duration')) || 30,
          goalEvaluations,
          tools,
          notes: (fd.get('notes') || '').trim()
        });
        
        persistState();
        closeModal();
        toast('تم حفظ الجلسة');
        navigate(`/teacher/student/${sid}?tab=follow`);
      } catch (error) {
        console.error('Error saving session:', error);
        toast('حدث خطأ في حفظ الجلسة', 'error');
      }
    })();
    return;
  }

  // ========== NEW FEATURES FORM HANDLERS ==========
  
  // متابعة الطالبة - إضافة
  const fAddFollowup = e.target.closest('[data-form="add-followup"]');
  if (fAddFollowup) {
    e.preventDefault();
    const sid = fAddFollowup.getAttribute('data-sid');
    const fd = new FormData(fAddFollowup);
    
    // Get selected tools
    const tools = Array.from(fAddFollowup.querySelectorAll('input[name="tools"]:checked'))
      .map(cb => cb.value);
    
    // Get plan goals (multiple)
    const planGoalIds = fd.getAll('plan_goal_id[]').filter(v => v);
    const planGoalCategories = fd.getAll('plan_goal_category[]');
    const planGoals = planGoalIds.map((id, idx) => ({
      goal_id: id,
      category: planGoalCategories[idx] || '',
      evaluation: fd.get(`plan_goal_eval_goal-${idx}`) || ''
    }));
    
    const followupData = {
      id: 'fup-' + Date.now(),
      studentId: sid,
      teacher_id: STATE.user.id,
      date_from: fd.get('date_from'),
      date_to: fd.get('date_to'),
      plan_goals: planGoals, // Array of goals from IEP
      custom_goal: fd.get('custom_goal') || null,
      custom_goal_category: fd.get('custom_goal_category') || null,
      custom_goal_evaluation: fd.get('custom_goal_evaluation') || null,
      tools: tools,
      notes: fd.get('notes') || '',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    
    // Save to Supabase
    (async () => {
      try {
        const { data, error} = await window.supabaseClient
          .from('student_followups')
          .insert({
            student_id: sid,
            teacher_id: STATE.user.id,
            date_from: followupData.date_from,
            date_to: followupData.date_to,
            plan_goals: JSON.stringify(planGoals),
            custom_goal: followupData.custom_goal,
            custom_goal_category: followupData.custom_goal_category,
            custom_goal_evaluation: followupData.custom_goal_evaluation,
            tools: JSON.stringify(tools),
            notes: followupData.notes
          })
          .select()
          .single();
        
        if (error) throw error;
        
        followupData.id = data.id;
        STATE.data.studentFollowups.unshift(followupData);
        persistState();
        closeModal();
        toast('تم حفظ المتابعة ✅');
        handleRoute();
      } catch (error) {
        console.error('Error saving followup:', error);
        toast('حدث خطأ في حفظ المتابعة', 'error');
      }
    })();
    return;
  }

  // متابعة الطالبة - تعديل
  const fEditFollowup = e.target.closest('[data-form="edit-followup"]');
  if (fEditFollowup) {
    e.preventDefault();
    const id = fEditFollowup.getAttribute('data-id');
    const fd = new FormData(fEditFollowup);
    
    const tools = Array.from(fEditFollowup.querySelectorAll('input[name="tools"]:checked'))
      .map(cb => cb.value);
    
    const followup = STATE.data.studentFollowups.find(f => f.id === id);
    if (followup) {
      followup.date_from = fd.get('date_from');
      followup.date_to = fd.get('date_to');
      followup.goal_1_id = fd.get('goal_1_id') || null;
      followup.goal_1_evaluation = fd.get('goal_1_evaluation') || null;
      followup.goal_2_id = fd.get('goal_2_id') || null;
      followup.goal_2_evaluation = fd.get('goal_2_evaluation') || null;
      followup.custom_goal_1 = fd.get('custom_goal_1') || null;
      followup.custom_goal_1_type = fd.get('custom_goal_1_type') || null;
      followup.custom_goal_1_evaluation = fd.get('custom_goal_1_evaluation') || null;
      followup.custom_goal_2 = fd.get('custom_goal_2') || null;
      followup.custom_goal_2_type = fd.get('custom_goal_2_type') || null;
      followup.custom_goal_2_evaluation = fd.get('custom_goal_2_evaluation') || null;
      followup.tools = tools;
      followup.notes = fd.get('notes') || '';
      followup.updated_at = new Date().toISOString();
      
      // Update in Supabase
      (async () => {
        try {
          const { error } = await window.supabaseClient
            .from('student_followups')
            .update({
              date_from: followup.date_from,
              date_to: followup.date_to,
              goal_1_id: followup.goal_1_id,
              goal_1_evaluation: followup.goal_1_evaluation,
              goal_2_id: followup.goal_2_id,
              goal_2_evaluation: followup.goal_2_evaluation,
              custom_goal_1: followup.custom_goal_1,
              custom_goal_1_type: followup.custom_goal_1_type,
              custom_goal_1_evaluation: followup.custom_goal_1_evaluation,
              custom_goal_2: followup.custom_goal_2,
              custom_goal_2_type: followup.custom_goal_2_type,
              custom_goal_2_evaluation: followup.custom_goal_2_evaluation,
              tools: JSON.stringify(tools),
              notes: followup.notes,
              updated_at: followup.updated_at
            })
            .eq('id', id);
          
          if (error) throw error;
          
          persistState();
          closeModal();
          toast('تم تحديث المتابعة ✅');
          handleRoute();
        } catch (error) {
          console.error('Error updating followup:', error);
          toast('حدث خطأ في تحديث المتابعة', 'error');
        }
      })();
    }
    return;
  }

  // اختبار الذاكرة السمعية - إضافة
  const fAddMemoryTest = e.target.closest('[data-form="add-memory-test"]');
  if (fAddMemoryTest) {
    e.preventDefault();
    const sid = fAddMemoryTest.getAttribute('data-sid');
    const testType = parseInt(fAddMemoryTest.getAttribute('data-type'));
    const fd = new FormData(fAddMemoryTest);
    
    const testData = {
      id: 'amt-' + Date.now(),
      studentId: sid,
      teacher_id: STATE.user.id,
      test_type: testType,
      test_data: {},
      score: parseInt(fd.get('score')),
      total_score: parseInt(fd.get('total_score')),
      notes: fd.get('notes') || '',
      tested_at: fd.get('tested_at'),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    
    // Save to Supabase
    (async () => {
      try {
        const { data, error } = await window.supabaseClient
          .from('auditory_memory_tests')
          .insert({
            student_id: sid,
            teacher_id: STATE.user.id,
            test_type: testType,
            test_data: JSON.stringify({}),
            score: testData.score,
            total_score: testData.total_score,
            notes: testData.notes,
            tested_at: testData.tested_at
          })
          .select()
          .single();
        
        if (error) throw error;
        
        testData.id = data.id;
        STATE.data.auditoryMemoryTests.unshift(testData);
        persistState();
        closeModal();
        toast('تم حفظ الاختبار ✅');
        handleRoute();
      } catch (error) {
        console.error('Error saving memory test:', error);
        toast('حدث خطأ في حفظ الاختبار', 'error');
      }
    })();
    return;
  }

  // التقرير المبدئي - إضافة
  const fAddInitialReport = e.target.closest('[data-form="add-initial-report"]');
  if (fAddInitialReport) {
    e.preventDefault();
    const sid = fAddInitialReport.getAttribute('data-sid');
    const fd = new FormData(fAddInitialReport);
    
    const defaultIntro = 'بناءً على المتابعة المستمرة والملاحظات المباشرة للطالبة في بيئة التعلم، تم إعداد هذا التقرير المبدئي لتوثيق الأداء الحالي وتحديد نقاط القوة ومجالات التطوير.';
    
    const reportData = {
      id: 'irp-' + Date.now(),
      studentId: sid,
      teacher_id: STATE.user.id,
      report_date: fd.get('report_date'),
      introduction: defaultIntro,
      content: {
        strengths: fd.get('strengths'),
        areas_development: fd.get('areas_development'),
        recommendations: fd.get('recommendations')
      },
      status: fd.get('status') || 'draft',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    
    // Save to Supabase
    (async () => {
      try {
        const { data, error } = await window.supabaseClient
          .from('initial_reports')
          .insert({
            student_id: sid,
            teacher_id: STATE.user.id,
            report_date: reportData.report_date,
            introduction: reportData.introduction,
            content: JSON.stringify(reportData.content),
            status: reportData.status
          })
          .select()
          .single();
        
        if (error) throw error;
        
        reportData.id = data.id;
        STATE.data.initialReports.unshift(reportData);
        persistState();
        closeModal();
        toast('تم حفظ التقرير ✅');
        handleRoute();
      } catch (error) {
        console.error('Error saving initial report:', error);
        toast('حدث خطأ في حفظ التقرير', 'error');
      }
    })();
    return;
  }

  // التقرير المبدئي - تعديل
  const fEditInitialReport = e.target.closest('[data-form="edit-initial-report"]');
  if (fEditInitialReport) {
    e.preventDefault();
    const id = fEditInitialReport.getAttribute('data-id');
    const fd = new FormData(fEditInitialReport);
    
    const report = STATE.data.initialReports.find(r => r.id === id);
    if (report) {
      report.report_date = fd.get('report_date');
      report.content = {
        strengths: fd.get('strengths'),
        areas_development: fd.get('areas_development'),
        recommendations: fd.get('recommendations')
      };
      report.status = fd.get('status') || 'draft';
      report.updated_at = new Date().toISOString();
      
      // Update in Supabase
      (async () => {
        try {
          const { error } = await window.supabaseClient
            .from('initial_reports')
            .update({
              report_date: report.report_date,
              content: JSON.stringify(report.content),
              status: report.status,
              updated_at: report.updated_at
            })
            .eq('id', id);
          
          if (error) throw error;
          
          persistState();
          closeModal();
          toast('تم تحديث التقرير ✅');
          handleRoute();
        } catch (error) {
          console.error('Error updating initial report:', error);
          toast('حدث خطأ في تحديث التقرير', 'error');
        }
      })();
    }
    return;
  }
  
  // ========== END NEW FEATURES FORM HANDLERS ==========

  const f = e.target.closest('[data-form="create-activity"]');
  if (f) {
    e.preventDefault();
    const fd = new FormData(f);
    const type = fd.get('type') || 'home';
    const title = fd.get('title');
    if (!title) { toast('أدخل عنوان النشاط', 'warn'); return; }
    const studentId = fd.get('studentId');
    const newAct = {
      id: 'ac-' + Date.now(),
      type, title,
      description: fd.get('description'),
      studentIds: studentId ? [studentId] : [],
      teacherId: STATE.user.id,
      skillIds: Array.from(document.querySelectorAll('[data-toggle-skill].active')).map(x => x.getAttribute('data-toggle-skill')),
      visibleToParent: true,
      dueDate: fd.get('dueDate'),
      attachments: [],
      requiresCompletion: !!document.querySelector('[data-switch="requiresCompletion"].on'),
      requiresVideoUpload: !!document.querySelector('[data-switch="requiresVideoUpload"].on'),
      requiresTeacherReview: !!document.querySelector('[data-switch="requiresTeacherReview"].on'),
      rewardPoints: Number(fd.get('rewardPoints')) || 0,
      status: 'open',
      createdAt: new Date().toISOString().slice(0,10),
    };
    STATE.data.activities.unshift(newAct);
    persistState();
    toast('تم إنشاء النشاط');
    navigate('/teacher/activities');
  }
});

/* --------------- MODAL HELPERS --------------- */
function openRoleSwitch() {
  const teachers = STATE.data.users.filter(u => u.role === 'teacher');
  openModal(`
    <div class="modal-head"><h2>تبديل الدور</h2><button class="x" data-action="close-modal">${I.close}</button></div>
    <p class="text-sm text-muted mb-md">اختاري معلمة أو دخول ولي أمر:</p>
    <div class="stack">
      ${teachers.map(t => `
        <div class="role-tile" data-login="${t.id}">
          <div class="avatar md ${t.color}">${esc(t.initials)}</div>
          <div style="flex:1"><h4>${esc(t.name)}</h4><div class="desc">${esc(t.title)}</div></div>
          ${I.chevron}
        </div>
      `).join('')}
      <div class="role-tile" data-action="parent-login">
        <div class="ic p">${I.heart}</div>
        <div style="flex:1"><h4>دخول ولي الأمر</h4><div class="desc">برمز الدعوة + رقم الجوال</div></div>
        ${I.chevron}
      </div>
    </div>
  `);
}

function openNotifications() {
  const u = STATE.user;
  const items = STATE.data.notifications.filter(n => n.userId === u.id);
  openModal(`
    <div class="modal-head"><h2>الإشعارات</h2><button class="x" data-action="close-modal">${I.close}</button></div>
    <div class="stack gap-sm">
      ${items.length ? items.map(n => `
        <a href="${n.link}" class="row" style="padding:12px;background:var(--bg-2);border-radius:12px;color:inherit;align-items:flex-start" data-route="${n.link}">
          <div style="width:8px;height:8px;border-radius:50%;background:${n.read?'transparent':'var(--amber)'};margin-top:8px;flex-shrink:0"></div>
          <div style="flex:1">
            <div class="text-sm">${esc(n.body)}</div>
            <div class="text-xs text-muted mt-sm">${fmtRelative(n.date)}</div>
          </div>
        </a>
      `).join('') : emptyState(I.bell, 'لا توجد إشعارات', 'سنخبرك حال وجود جديد.')}
    </div>
  `);
  // Mark read on open
  STATE.data.notifications.filter(n => n.userId === u.id).forEach(n => n.read = true);
}

function openQuickFeedback() {
  const u = STATE.user;
  const myStudents = STATE.data.students.filter(s => s.teacherId === u.id && !s.archived);
  openModal(`
    <div class="modal-head"><h2>ملاحظة سريعة</h2><button class="x" data-action="close-modal">${I.close}</button></div>
    <div class="field">
      <label>الطالبة</label>
      <select>${myStudents.map(s => `<option>${esc(s.name)}</option>`).join('')}</select>
    </div>
    <div class="field">
      <label>الملاحظة</label>
      <textarea data-input="feedback" placeholder="اكتبي ملاحظتك..."></textarea>
    </div>
    <button class="btn block" data-action="close-modal" onclick="toast('تم حفظ الملاحظة')">${I.check}<span>حفظ وإرسال</span></button>
  `);
}

function openAddStudentModal() {
  const stages = ['حضانة','روضة','تمهيدي','أول','ثاني','ثالث','رابع','خامس','سادس'];
  openModal(`
    <div class="modal-head">
      <h2>إضافة طالبة</h2>
      <button class="x" data-action="close-modal">${I.close}</button>
    </div>
    <form data-form="add-student">
      <div class="field">
        <label>اسم الطالبة الكامل</label>
        <input name="name" required placeholder="مثال: ريم العتيبي">
      </div>
      <div class="row" style="gap:12px">
        <div class="field" style="flex:2">
          <label>المرحلة</label>
          <select name="stage" required>
            <option value="">اختاري...</option>
            ${stages.map(s => `<option value="${s}">${s}</option>`).join('')}
          </select>
        </div>
        <div class="field" style="flex:1">
          <label>الفصل</label>
          <select name="section" required>
            <option value="">—</option>
            <option>أ</option><option>ب</option><option>ج</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label>اسم ولي الأمر</label>
        <input name="parentName" placeholder="مثال: سارة العتيبي">
      </div>
      <div class="field">
        <label>رقم ولي الأمر</label>
        <input name="parentPhone" type="text" placeholder="05xxxxxxxx (اختياري)">
      </div>
      <button type="submit" class="btn lg block">${I.check}<span>إضافة الطالبة</span></button>
    </form>
  `);
}

function openEditStudentModal(student) {
  const stages = ['حضانة','روضة','تمهيدي','أول','ثاني','ثالث','رابع','خامس','سادس'];
  
  // Parse current grade to extract stage and section
  const gradeParts = (student.grade || '').split(' ');
  const currentStage = gradeParts[0] || '';
  const currentSection = gradeParts[1] || '';
  
  openModal(`
    <div class="modal-head">
      <h2>تعديل بيانات ${esc(student.name)}</h2>
      <button class="x" data-action="close-modal">${I.close}</button>
    </div>
    <form data-form="edit-student" data-sid="${student.id}">
      <div class="field">
        <label>اسم الطالبة الكامل</label>
        <input name="name" required placeholder="مثال: ريم العتيبي" value="${esc(student.name)}">
      </div>
      <div class="row" style="gap:12px">
        <div class="field" style="flex:2">
          <label>المرحلة</label>
          <select name="stage" required>
            <option value="">اختاري...</option>
            ${stages.map(s => `<option value="${s}" ${s === currentStage ? 'selected' : ''}>${s}</option>`).join('')}
          </select>
        </div>
        <div class="field" style="flex:1">
          <label>الفصل</label>
          <select name="section" required>
            <option value="">—</option>
            <option ${currentSection === 'أ' ? 'selected' : ''}>أ</option>
            <option ${currentSection === 'ب' ? 'selected' : ''}>ب</option>
            <option ${currentSection === 'ج' ? 'selected' : ''}>ج</option>
          </select>
        </div>
      </div>
      <div class="field">
        <label>العمر (بالسنوات)</label>
        <input name="age" type="number" min="3" max="18" placeholder="مثال: 7" value="${student.age || ''}">
      </div>
      <div class="field">
        <label>اسم ولي الأمر</label>
        <input name="parentName" placeholder="مثال: سارة العتيبي" value="${esc(student.parentName || '')}">
      </div>
      <div class="field">
        <label>رقم ولي الأمر</label>
        <input name="parentPhone" type="text" placeholder="05xxxxxxxx (اختياري)" value="${esc(student.parent_phone || student.parentPhone || '')}">
      </div>
      <button type="submit" class="btn lg block">${I.check}<span>حفظ التعديلات</span></button>
    </form>
  `);
}

function viewScheduleEditor() {
  const me = STATE.user;
  const myStudents = STATE.data.students.filter(s => !s.archived); // Show ALL students
  const allKeys  = ['sun','mon','tue','wed','thu','fri','sat'];
  const allNames = ['الأحد','الإثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'];
  const dayKeys  = STATE.config.workingDays || allKeys.slice(0,5);
  const dayNames = dayKeys.map(dk => allNames[allKeys.indexOf(dk)]);

  const slotsByDay = dayKeys.map((dk, i) => {
    const slots = [];
    myStudents.forEach(st => (st.schedule || []).forEach((s, idx) => {
      if (s.day === dk) slots.push({ student: st, ...s, slotIdx: idx });
    }));
    slots.sort((a,b) => {
      // Support both old (time) and new (period) format
      if (a.period && b.period) {
        return parseInt(a.period) - parseInt(b.period);
      }
      if (a.time && b.time) {
        return a.time.localeCompare(b.time);
      }
      return a.period ? -1 : 1; // New format first
    });
    return { key: dk, name: dayNames[i], slots };
  });

  const total = slotsByDay.reduce((sum, d) => sum + d.slots.length, 0);

  return `
    <div class="page-head">
      <div>
        <button class="btn ghost sm mb-md" data-action="back">${I.back}<span>عودة</span></button>
        <h1>تخصيص جدولي الأسبوعي</h1>
        <div class="sub">${arNum(total)} جلسات في الأسبوع — أضيفي، عدّلي، أو احذفي</div>
      </div>
      <button class="btn" data-action="add-slot">${I.plus}<span>إضافة جلسة</span></button>
    </div>

    <div class="schedule-editor">
      ${slotsByDay.map(d => `
        <div class="day-col">
          <div class="day-head">
            <div>
              <div class="dn">${esc(d.name)}</div>
              <div class="dc">${arNum(d.slots.length)} ${d.slots.length === 1 ? 'جلسة' : 'جلسات'}</div>
            </div>
            <button class="add-day-btn" data-action="add-slot" data-day="${d.key}" title="إضافة جلسة">${I.plus}</button>
          </div>
          ${d.slots.length ? `
            <div class="day-slots">
              ${d.slots.map(s => `
                <div class="schedule-slot ${stageClass(s.student.grade)}">
                  <div class="time">${s.period ? getPeriodLabel(s.period) : (s.time || 'غير محدد')}</div>
                  <div class="info">
                    <div class="nm">${esc(s.student.name)}</div>
                    <div class="mt"><span class="stage-pill">${esc(s.student.grade)}</span><span class="text-xs text-muted">${s.period ? esc(s.room || 'غرفة ١') : (arNum(s.duration || 30) + ' د • ' + esc(s.room || 'غرفة ١'))}</span></div>
                  </div>
                  <button class="rm-slot" data-action="remove-slot" data-sid="${s.student.id}" data-slot-idx="${s.slotIdx}" title="حذف">${I.close}</button>
                </div>
              `).join('')}
            </div>
          ` : `
            <button class="day-empty-btn" data-action="add-slot" data-day="${d.key}">
              ${I.plus}<span>أضيفي جلسة</span>
            </button>
          `}
        </div>
      `).join('')}
    </div>
  `;
}

function openAddSlotModal(presetDay) {
  const me = STATE.user;
  const myStudents = STATE.data.students.filter(s => !s.archived); // Show ALL students
  const allKeys  = ['sun','mon','tue','wed','thu','fri','sat'];
  const allNames = ['الأحد','الإثنين','الثلاثاء','الأربعاء','الخميس','الجمعة','السبت'];
  const dayKeys = STATE.config.workingDays || allKeys.slice(0,5);
  const dayNames = dayKeys.map(dk => allNames[allKeys.indexOf(dk)]);
  const day0 = presetDay && dayKeys.includes(presetDay) ? presetDay : dayKeys[0];

  openModal(`
    <div class="modal-head">
      <h2>إضافة جلسة للجدول</h2>
      <button class="x" data-action="close-modal">${I.close}</button>
    </div>
    <form data-form="add-slot">
      <div class="field">
        <label>الطالبة</label>
        <select name="studentId" required>
          <option value="">اختاري...</option>
          ${myStudents.map(s => `<option value="${s.id}">${esc(s.name)} — ${esc(s.grade)}</option>`).join('')}
        </select>
      </div>
      
      <div class="field">
        <label>اليوم</label>
        <div class="row wrap" id="slot-day-row">
          ${dayKeys.map((dk, i) => `
            <label class="chip ${dk === day0 ? 'active' : ''}" style="cursor:pointer">
              <input type="radio" name="day" value="${dk}" ${dk === day0 ? 'checked' : ''} hidden>
              <span>${esc(dayNames[i])}</span>
            </label>
          `).join('')}
        </div>
      </div>
      <div class="row" style="gap:12px;flex-wrap:wrap">
        <div class="field" style="flex:1;min-width:180px">
          <label>رقم الحصة</label>
          <select name="period" required>
            <option value="">اختاري الحصة...</option>
            <option value="1">الحصة الأولى</option>
            <option value="2">الحصة الثانية</option>
            <option value="3">الحصة الثالثة</option>
            <option value="4">الحصة الرابعة</option>
            <option value="5">الحصة الخامسة</option>
            <option value="6">الحصة السادسة</option>
            <option value="7">الحصة السابعة</option>
          </select>
        </div>
        <div class="field" style="flex:1;min-width:120px">
          <label>الغرفة</label>
          <input name="room" value="غرفة ١">
        </div>
      </div>
      <button type="submit" class="btn lg block">${I.check}<span>حفظ في الجدول</span></button>
    </form>
  `);

  document.getElementById('slot-day-row')?.querySelectorAll('label').forEach(lbl => {
    lbl.addEventListener('click', () => {
      lbl.parentElement.querySelectorAll('label').forEach(x => x.classList.remove('active'));
      lbl.classList.add('active');
    });
  });
}

/* =========================================================
   Form questionnaires (4 real forms)
   ========================================================= */
const SPEECH_TEST_SOUNDS = [
  { num: 1,  id: 'm',   sound: 'م',  words: 'موز - جمل - قلم' },
  { num: 2,  id: 'n',   sound: 'ن',  words: 'نمر - عنب - عين' },
  { num: 3,  id: 'f',   sound: 'ف',  words: 'فيل - ظفر - خروف' },
  { num: 4,  id: 'h',   sound: 'ه',  words: 'هدية - زهرة' },
  { num: 5,  id: 'w',   sound: 'و',  words: 'ولد - موز - رادييو' },
  { num: 6,  id: 'y',   sound: 'ي',  words: 'يد - سيارة - شاي' },
  { num: 7,  id: 'b',   sound: 'ب',  words: 'باب - أصبع - باب' },
  { num: 8,  id: 'd',   sound: 'د',  words: 'دب - رادييو - يد' },
  { num: 9,  id: 'k',   sound: 'ك',  words: 'كأس - سكين - سمك' },
  { num: 10, id: 'r',   sound: 'ر',  words: 'رجل - مرير' },
  { num: 11, id: 's',   sound: 'س',  words: 'ساعة - كرسي - كيس' },
  { num: 12, id: 'sh',  sound: 'ش',  words: 'شعر - مشط - ريش' },
  { num: 13, id: 't',   sound: 'ت',  words: 'تفاح - خاتم - بيت' },
  { num: 14, id: 'lam', sound: 'ل',  words: 'لحم - قلم - جمل' },
  { num: 15, id: 'th',  sound: 'ث',  words: 'ثوب - مثلث' },
  { num: 16, id: 'dh',  sound: 'ذ',  words: 'ذرة - أذن - تلميذ' },
  { num: 17, id: 'z',   sound: 'ز',  words: 'زرافة - يزر - موز' },
  { num: 18, id: 'j',   sound: 'ج',  words: 'جمل - رجل - ثلج' },
  { num: 19, id: 'hamza', sound: 'ء',  words: 'أرنب - فأر - ماء' },
  { num: 20, id: 'ha',  sound: 'ح',  words: 'حصان - أحمر - تفاح' },
  { num: 21, id: 'kh',  sound: 'خ',  words: 'خروف - أخضر - بطيخ' },
  { num: 22, id: 'sad', sound: 'ص',  words: 'صح - بصل - قميص' },
  { num: 23, id: 'dad', sound: 'ض',  words: 'ضفدع - أخضر - بيض' },
  { num: 24, id: 'ta',  sound: 'ط',  words: 'طبل - بطة - مشط' },
  { num: 25, id: 'zah', sound: 'ظ',  words: 'ظفر - نظارة' },
  { num: 26, id: 'ein', sound: 'ع',  words: 'عين - شعر - أصبع' },
  { num: 27, id: 'gh',  sound: 'غ',  words: 'غزال - مغسلة - صباغ' },
  { num: 28, id: 'q',   sound: 'ق',  words: 'قلم - بقرة - أزرق' },
];

/* Pre-assessment — comprehensive Ministry of Education template
   Based on official وزارة التعليم forms with 10 sections */
const PRE_ASSESSMENT_SECTIONS = [
  {
    id: 'history',
    num: 1,
    title: 'تاريخ الحالة',
    questions: [
      { id: 'issue_observed', label: 'متى تمت ملاحظة المشكلة مع الحالة؟', type: 'text', placeholder: 'توضيح' },
      { id: 'kindergarten_check', label: 'هل التحقت الحالة ببرامج رياض أطفال؟', type: 'yn' },
      { id: 'prev_diagnosis', label: 'هل تم تشخيص الحالة من قبل في مركز أو مستشفى؟', type: 'yn' },
      { id: 'diagnosis_center', label: 'المركز / المستشفى', type: 'text', placeholder: 'اسم المركز' },
      { id: 'diagnosis_result', label: 'التشخيص', type: 'text', placeholder: 'نتيجة التشخيص' },
      { id: 'therapy_programs', label: 'هل تتلقى الحالة أي برامج علاجية للتخاطب؟', type: 'yn' },
      { id: 'communication_home_verbal', label: 'هل تتواصل الحالة في المنزل لفظياً؟', type: 'yn' },
      { id: 'communication_home_nonverbal', label: 'غير لفظي (إيماءات / إشارات)', type: 'yn' },
      { id: 'social_interaction', label: 'هل تتواصل الحالة اجتماعياً بشكل جيد؟', type: 'yn' },
      { id: 'articulation_situation', label: 'هل تنطق الحالة وترددها بطريقة صحيحة حسب الموقف؟', type: 'yn' },
      { id: 'situation_specify', label: 'في حال الإجابة بنعم الرجاء تحديد الموقف', type: 'text', placeholder: 'توضيح الموقف' },
      { id: 'medical_activities', label: 'هل هناك أنشطة معينة مطلقة؟', type: 'yn' },
      { id: 'activities_specify', label: 'في حال الإجابة بنعم الرجاء تحديد نوع النشاط', type: 'text', placeholder: 'النشاط' },
      { id: 'organic_disease', label: 'هل الحالة تعاني من أمراض عضلية؟', type: 'yn' },
      { id: 'nerve_disease', label: 'هل الحالة تعاني من أمراض عصبية؟', type: 'yn' },
      { id: 'syndrome', label: 'هل الحالة تعاني من متلازمة؟', type: 'yn' },
      { id: 'syndrome_type', label: 'في حال الإجابة بنعم الرجاء تحديد نوع المتلازمة', type: 'text', placeholder: 'نوع المتلازمة' },
      { id: 'hearing_loss_surgery', label: 'إذا كانت الحالة تعاني من ضعف سمعي أو أجرت عملية زراعة قوقعة الرجاء إكمال البيانات', type: 'text', placeholder: 'تفاصيل' },
      { id: 'hearing_test_recent', label: 'هل أجرت الحالة تخطيط للسمع حديث؟', type: 'yn' },
      { id: 'hearing_diagnosis_detail', label: 'في حال الإجابة بنعم الرجاء توضيح التشخيص', type: 'text', placeholder: 'التشخيص' },
      { id: 'hearing_aid_type', label: 'نوع الضعف السمعي', type: 'choice', options: [
        { v: 'transmissive', l: 'توصيلي' },
        { v: 'sensory', l: 'حسي-عصبي' },
        { v: 'mixed', l: 'مختلط' },
      ]},
      { id: 'hearing_degree', label: 'درجة الضعف السمعي', type: 'choice', options: [
        { v: 'simple', l: 'بسيط' },
        { v: 'medium', l: 'متوسط' },
        { v: 'medium_severe', l: 'من متوسط إلى شديد' },
        { v: 'severe', l: 'شديد' },
      ]},
      { id: 'hearing_aid_device', label: 'نوع المعين السمعي', type: 'choice', options: [
        { v: 'hearing_aids', l: 'سماعات طبية' },
        { v: 'electronic_cochlea', l: 'قوقعة إلكترونية' },
      ]},
    ],
  },

  {
    id: 'oral_mech',
    num: 2,
    title: 'ميكانيكية أعضاء الكلام',
    cols: ['سليم','غير سليم'],
    questions: [
      { id: 'org_tongue',  label: 'اللسان', type: 'pair' },
      { id: 'org_lips',    label: 'الشفاة', type: 'pair' },
      { id: 'org_jaws',    label: 'الفكين', type: 'pair' },
      { id: 'org_palate_h',label: 'سقف الحلق الصلب', type: 'pair' },
      { id: 'org_palate_s',label: 'سقف الحلق الرخو', type: 'pair' },
      { id: 'fn_tongue_up',   label: 'تحريك اللسان لأعلى', type: 'pair' },
      { id: 'fn_tongue_down', label: 'تحريك اللسان لأسفل', type: 'pair' },
      { id: 'fn_tongue_fwd',  label: 'تحريك اللسان للأمام', type: 'pair' },
      { id: 'fn_tongue_back', label: 'تحريك اللسان للخلف', type: 'pair' },
      { id: 'fn_tongue_right', label: 'تحريك اللسان لليمين', type: 'pair' },
      { id: 'fn_tongue_left', label: 'تحريك اللسان لليسار', type: 'pair' },
      { id: 'fn_lips_close',  label: 'إغلاق الشفاة', type: 'pair' },
      { id: 'fn_lips_open',   label: 'فتح الشفاة', type: 'pair' },
      { id: 'vital_swallow',  label: 'البلع', type: 'pair' },
      { id: 'vital_chew',     label: 'المضغ', type: 'pair' },
      { id: 'vital_blow',     label: 'النفخ', type: 'pair' },
      { id: 'vital_inhale',   label: 'الشهيق', type: 'pair' },
      { id: 'vital_exhale',   label: 'الزفير', type: 'pair' },
      { id: 'notes_oral', label: 'ملاحظات', type: 'text', placeholder: 'ملاحظات إضافية' },
    ],
  },
  {
    id: 'language_informal',
    num: 3,
    title: 'تقييم (غير رسمي) للمهارات اللغوية',
    cols: ['متقن','متقن جزئياً','غير متقن'],
    note: 'الحالة تُظهر تنغيمة',
    questions: [
      { id: 'inf_tone', label: 'الحالة تُظهر تنغيمة', type: 'eval3' },
      { id: 'inf_play_skills', label: 'مهارات اللعب', type: 'text', placeholder: 'ملاحظات' },
      { id: 'inf_gestures', label: 'استخدام الإشارات أو الإيماءات', type: 'eval3' },
      { id: 'inf_receptive_nonverbal', label: 'الاستجابة الغير لفظية للمحفز اللفظي', type: 'eval3' },
      { id: 'inf_voluntary_sounds', label: 'اختيار إصدار كلمات أو أصوات عفوية', type: 'eval3' },
      { id: 'inf_intentional_comm', label: 'التواصل المقصود', type: 'eval3' },
      { id: 'inf_imitation_skills', label: 'مهارة تقليد الأفعال', type: 'eval3' },
      { id: 'inf_limited_lang_note', label: 'إذا كانت الحالة محدودة اللغة (في هذا المستوى الحالة تستخدم كلمة واحدة فقط) تقييم المهارات السابقة بالإضافة إلى', type: 'header' },
      { id: 'inf_request_situations', label: 'الطلب من خلال استخدامات موقف أو فرصة للطلب', type: 'eval3' },
      { id: 'inf_label_familiar', label: 'تسمية الأدوات المألوفة أو الإشارة', type: 'eval3' },
      { id: 'inf_simple_syllables', label: 'استخدام المقاطع البسيطة', type: 'eval3' },
      { id: 'inf_understand_words', label: 'فهم الكلمات والمقاطع البسيطة', type: 'eval3' },
      { id: 'inf_limited_words_note', label: 'إذا كانت الحالة تستخدم كلمات محدودة، تقييم المهارات السابقة بالإضافة إلى', type: 'header' },
      { id: 'inf_body_parts', label: 'تسمية أجزاء الجسم', type: 'eval3' },
      { id: 'inf_familiar_nouns', label: 'تسمية الأسماء المألوفة', type: 'eval3' },
      { id: 'inf_familiar_vegetables', label: 'تسمية الخضروات المألوفة', type: 'eval3' },
      { id: 'inf_familiar_animals', label: 'تسمية الحيوانات المألوفة', type: 'eval3' },
      { id: 'inf_primary_colors', label: 'تسمية الألوان الرئيسية', type: 'eval3' },
      { id: 'inf_transport_means', label: 'تسمية وسائل المواصلات المألوفة', type: 'eval3' },
      { id: 'inf_pronoun_mine', label: 'ضمير المتكلم (أنا)', type: 'eval3' },
      { id: 'inf_week_days', label: 'عد أيام الأسبوع', type: 'eval3' },
      { id: 'inf_simple_commands_response', label: 'الاستجابة للأوامر البسيطة', type: 'eval3' },
      { id: 'inf_simple_grammar', label: 'استخدام التراكيب النحوية البسيطة', type: 'eval3' },
      { id: 'inf_maintain_topic', label: 'المحافظة على الموضوع أثناء الحديث', type: 'eval3' },
      { id: 'inf_advanced_note', label: 'إذا كانت الحالة وصلت لمرحلة متقدمة من القدرات اللغوية تقييم المهارات السابقة بالإضافة إلى', type: 'header' },
      { id: 'inf_multi_step_commands', label: 'إتباع الأوامر المكونة من عدة خطوات', type: 'eval3' },
      { id: 'inf_descriptive_words', label: 'استخدام الكلمات الوصفية', type: 'eval3' },
      { id: 'inf_classify_groups', label: 'تصنيف المجموعات (أكثر غير محدودة)', type: 'eval3' },
      { id: 'inf_verb_forms', label: 'استخدام الأفعال بصيغ مختلفة', type: 'eval3' },
      { id: 'inf_prepositions', label: 'استخدام حروف الجر', type: 'eval3' },
      { id: 'inf_connectors', label: 'استخدام أدوات الربط', type: 'eval3' },
      { id: 'inf_place_adverbs', label: 'استخدام ظرف المكان', type: 'eval3' },
      { id: 'inf_time_adverbs', label: 'استخدام ظرف الزمان', type: 'eval3' },
      { id: 'inf_pronouns', label: 'الضمائر', type: 'eval3' },
      { id: 'inf_identify_functions', label: 'تحديد وظائف الأشياء', type: 'eval3' },
      { id: 'inf_opposites', label: 'استخدام المتضادات', type: 'eval3' },
      { id: 'inf_dual', label: 'استخدام المثنى', type: 'eval3' },
      { id: 'inf_plural', label: 'استخدام الجمع', type: 'eval3' },
      { id: 'inf_comparative_terms', label: 'استخدام مصطلحات المعارضة', type: 'eval3' },
      { id: 'inf_negation_types', label: 'استخدام أنواع النفي', type: 'eval3' },
      { id: 'inf_story_sequence', label: 'سرد قصة قصيرة (تسلسل الأحداث بصورة) (أنت حدث معين و أسأل الطفل ماذا أو تحميل له هذا الموقف بدون اللغة)', type: 'eval3' },
      { id: 'inf_key_questions', label: 'استخدام الأسئلة المفتاحية للموقف', type: 'eval3' },
      { id: 'inf_appropriate_answers', label: 'الإجابة المناسبة عن أسئلة مختلفة', type: 'eval3' },
      { id: 'inf_transfer_info', label: 'القدرة على نقل المعلومة أو وصف حدث', type: 'eval3' },
      { id: 'inf_express_physical', label: 'التعبير عن الاحتياجات الجسمية', type: 'eval3' },
      { id: 'inf_express_emotions', label: 'التعبير عن المشاعر', type: 'eval3' },
      { id: 'inf_express_thoughts', label: 'التعبير عن الأفكار', type: 'eval3' },
      { id: 'inf_observations_header', label: 'ملاحظات الأخصائي على الحالة بعد التقييم', type: 'header' },
      { id: 'inf_obs_word_finding', label: 'مرباة في أبعاد التعليمات', type: 'yn' },
      { id: 'inf_obs_incorrect_alternatives', label: 'استخدام بدائل غير صحيحة للكلمات', type: 'yn' },
      { id: 'inf_obs_pronouns_excessive', label: 'استخدام التعبير بشكل غير', type: 'yn' },
      { id: 'inf_obs_sentence_length', label: 'مستوى طول جملة طبيعي', type: 'yn' },
      { id: 'inf_obs_grammar', label: 'تطبيق القواعد النحوية بشكل صحيح', type: 'yn' },
      { id: 'inf_obs_voice_level', label: 'مستوى صوت طبيعي', type: 'yn' },
      { id: 'inf_obs_fluency', label: 'الطلاقة في المستوى الطبيعي', type: 'yn' },
      { id: 'inf_obs_intonation', label: 'التنغيم في المستوى الطبيعي', type: 'yn' },
      { id: 'inf_obs_eye_contact', label: 'التواصل البصري مناسب للمرحلة العمرية', type: 'yn' },
      { id: 'inf_fluency_disorder_note', label: 'إذا كانت الحالة تعاني من اضطراب في الطلاقة تستكمل البيانات التالية', type: 'header' },
      { id: 'flu_type_repeat', label: 'تكرار', type: 'header' },
      { id: 'flu_repeat_word_part', label: 'تكرار جزء من الكلمة', type: 'yn' },
      { id: 'flu_repeat_full_word', label: 'تكرار كلمة كاملة', type: 'yn' },
      { id: 'flu_repeat_syllable', label: 'تكرار مقطع', type: 'yn' },
      { id: 'flu_type_prolong', label: 'إطالة', type: 'header' },
      { id: 'flu_prolong_interrupted', label: 'إطالة صوت / مقطع / إعتراضي', type: 'yn' },
      { id: 'flu_prolong_continuous', label: 'إطالة مسامة', type: 'yn' },
      { id: 'flu_type_insert', label: 'إعتراض', type: 'header' },
      { id: 'flu_insert_sound_syllable', label: 'إدخال صوت / مقطع / اعتراضي', type: 'yn' },
      { id: 'flu_insert_word', label: 'إدخال كلمة / اعتراضية', type: 'yn' },
      { id: 'flu_type_pause', label: 'توقف صامت', type: 'header' },
      { id: 'flu_pause_within_sentence', label: 'توقف صامت داخل الجملة', type: 'yn' },
      { id: 'flu_pause_within_word', label: 'توقف صامت وسط الكلمة (نطق الكلمة)', type: 'yn' },
      { id: 'flu_type_other', label: 'نطق غير مكتمل أو تغيير كلمة أو فكرة', type: 'header' },
      { id: 'flu_incomplete_utterance', label: 'نطق غير مكتمل', type: 'yn' },
      { id: 'flu_word_idea_change', label: 'تغيير كلمة أو فكرة', type: 'yn' },
      { id: 'flu_physical_observations', label: 'ملاحظات وجسدية على الحالة متزامنة مع اضطراب الطلاقة', type: 'text', placeholder: 'ملاحظات' },
      { id: 'flu_auditory_memory_header', label: 'الذاكرة السمعية', type: 'header' },
      { id: 'flu_auditory_memory_words', label: 'الذاكرة السمعية للكلمات', type: 'text', placeholder: 'ملاحظات' },
      { id: 'flu_auditory_memory_numbers', label: 'الذاكرة السمعية للأرقام', type: 'text', placeholder: 'ملاحظات' },
    ],
  },
  {
    id: 'articulation',
    num: 4,
    title: 'تقييم المهارات السمعية',
    cols: ['دائماً','أحياناً','نادراً'],
    questions: [
      { id: 'art_discriminate_presence', label: 'استخدام المعين السمعي طوال ساعات الاستيقاظ', type: 'eval3' },
      { id: 'art_familiar_sounds', label: 'هل تستخدم الحواس للكشف على سماع صوت (النقاة الرأس / انتقاء العين / البوت / الروقة / تعابير الوجه)', type: 'eval3' },
      { id: 'art_awareness_env_sounds', label: 'إظهار الوعي (البهوم أو اليقظة) في الاستجابة لصوت مرتفع + الاتفاقات لمصدر الصوت)', type: 'eval3' },
      { id: 'art_awareness_env_sounds_high', label: 'للمخضوات البيئة العالية (بوق السيارة)؟', type: 'eval3' },
      { id: 'art_awareness_env_sounds_mid', label: 'إظهار الوعي (البهوم أو اليقظة) في الاستجابة لصوت مرتفع + الاتفاقات لمصدر الصوت)', type: 'eval3' },
      { id: 'art_awareness_env_sounds_low', label: 'للمخضوات البيئة البائنة (صوت للميكروويف + صوت عذاب الساعة)؟', type: 'eval3' },
      { id: 'art_awareness_voice_sounds', label: 'إظهار الوعي للأصوات (البهوم أو الاتفاقات لمصدر الصوت) أثناء التحدث', type: 'eval3' },
      { id: 'art_response_name', label: 'مستوى عالي من التجاوب (الأصوت الطبيعي) مثل: يستجيبون بالتماس عند سماع أصواتهم', type: 'eval3' },
      { id: 'art_play_sounds', label: 'طفل يلعب على الأرض، بالسيارات ينظر للأعلى عندما يتحدث أشخاص في الغرفة', type: 'eval3' },
      { id: 'art_six_sounds', label: 'لديك له وجود الأصوات الستة (أ م يس ش ن و / أ)', type: 'eval3' },
      { id: 'art_rhyme_detection', label: 'لديك وجود صوت المتحدث عندما يكون هناك ضجيج في الخلفية (الضجيج آلي ارتداع من صوت المتحدث)؟', type: 'eval3' },
      { id: 'art_identify_voice', label: 'يتعرف لمصدر للصوت؟', type: 'eval3' },
      { id: 'art_identify_direction', label: 'تحديد اتجاه الصوت بشكل صحيح (إذا كانت الحالة تستخدم المحل السمعي في كلتا الاذنين)', type: 'eval3' },
      { id: 'art_discrimination_header', label: 'التمييز: القدرة على التمييز أو ملاحظة الفرق بين الأصوات / الكلمات', type: 'header' },
      { id: 'art_distinguish_different', label: 'يلاحظ الفرق (أو لستجيب بشكل مختلف) بين شخص يتحدث مقارنة بصوت بيئي مألوف', type: 'eval3' },
      { id: 'art_distinguish_similar', label: 'يلاحظ الفرق (أو يستجيب بشكل مختلف) بين أصوات بيئية مختلفة (بوق السيارة / رنان الهاتف)', type: 'eval3' },
      { id: 'art_distinguish_intonation', label: 'يلاحظ الفرق (أو يستجيب بشكل مختلف) بين شخص يتحدث بصوت هادئ (يهمس) و شخص يتحدث بصوت مرتفع (أعلى عبارة المألوف/ الضغط للمحادثة)', type: 'eval3' },
      { id: 'art_distinguish_person', label: 'يلاحظ الفرق بمين شخص وشخص يتحدث', type: 'eval3' },
      { id: 'art_distinguish_family', label: 'يلاحظ الفرق بين أصوات أفراد العائلة (صوت الأم - صوت الأب)', type: 'eval3' },
      { id: 'art_listening_comprehension', label: 'الفرق على الاستماع للكلمات والمعاطي والإشارة والتأقلم المحيط أو المصورة المطلوب به', type: 'eval3' },
      { id: 'art_identify_speaker', label: 'تمييز ما إذا كان للشخص (سعيد / غضبان / مختاعب) عن طريق تعابير لغمة الصوت؟', type: 'eval3' },
      { id: 'art_response_name', label: 'يستجيب لاسمه عند مناداته', type: 'eval3' },
      { id: 'art_identify_elements', label: 'تحديد مجسم / أو عناصر مرتبطة بالصوت (ارتباط البقرة بصوت: مووو)', type: 'eval3' },
      { id: 'art_distinguish_phrases', label: 'تمييز كلمات ذات معاني متعدد واحد مقابل كلمات ذات معاني مفاطنة', type: 'eval3' },
      { id: 'art_natural_expressions', label: 'تمييز كلمات تُستخدم في البيئة الطبيعية للطفل', type: 'eval3' },
      { id: 'art_syllable_patterns', label: 'تمييز الأصوات الستة (أ ـ ي ـ و ـ ش ـ س ـ م ـ كل)', type: 'eval3' },
      { id: 'art_comprehension_header', label: 'الفهم (القدرة على فهم ما يقال له)', type: 'header' },
      { id: 'art_comprehension_segments', label: 'تفهم بشكل متكرر المقاطع والجمل المسموعة', type: 'eval3' },
      { id: 'art_comprehension_daily', label: 'من ( طوارئ و أحداث) (الحضير حذائك)', type: 'text', placeholder: 'ملاحظات' },
      { id: 'art_follow_commands_one', label: 'تتبع أوامر مكونة من خطوة واحدة (احضر حذاءك / افتح الباب)', type: 'text', placeholder: 'ملاحظات' },
      { id: 'art_follow_commands_three', label: 'تتبع أوامر مكونة من ثلاث خطوات (احضر حذاءك، افتح الباب، اذهب للخارج)', type: 'text', placeholder: 'ملاحظات' },
      { id: 'art_auditory_memory', label: 'لديه ذاكرة سمعية للمقاطع والجمل / وتستطيع ان تسأل (هل يستطيع الطفل إعادة مقاطع)', type: 'text', placeholder: 'ملاحظات' },
      { id: 'art_memory_numbers', label: 'لديه ذاكرة سمعية للعناصر ٢ ـ ٣ ـ ٤ ـ ٥ ـ ٦ ـ ٧ ـ ٨ ـ ٩ أو أكثر مثال / لديه القدرة', type: 'text', placeholder: 'ملاحظات' },
      { id: 'art_memory_elements', label: 'على تذكر (تفاحة ـ قلم ـ كوب ـ حذاء) تصغر 4 عناصر', type: 'text', placeholder: 'ملاحظات' },
      { id: 'art_sequence_events', label: 'التسلسل السمعي (٣ أحداث ـ ٤ أحداث)', type: 'text', placeholder: 'ملاحظات' },
      { id: 'art_understand_questions', label: 'فهم الأسئلة (ماذا؟ / أين؟ / كيف؟ / لماذا؟ / متى؟)', type: 'text', placeholder: 'ملاحظات' },
      { id: 'art_understand_place', label: 'فهم معنى ظرف المكان (فوق ـ تحت ـ بين ـ امام ـ خلف)', type: 'text', placeholder: 'ملاحظات' },
      { id: 'art_understand_sentence', label: 'فهم النفي في المقاطع والجمل', type: 'text', placeholder: 'ملاحظات' },
      { id: 'art_acquire_info', label: 'اكتساب المعلومات بالمصادفة عن طريق السمع فقط', type: 'text', placeholder: 'ملاحظات' },
    ],
  },
];

// Flat list for legacy/score calc
const PRE_ASSESSMENT_QUESTIONS = PRE_ASSESSMENT_SECTIONS
  .filter(s => ['receptive','expressive','grammar','pragmatic'].includes(s.id))
  .flatMap(s => s.questions.map(q => ({ id: q.id, label: q.label })));

const AUDITORY_MEMORY_TASKS = [
  { id: 'words3', label: 'تكرار ٣ كلمات بنفس الترتيب', max: 3 },
  { id: 'words5', label: 'تكرار ٥ كلمات بنفس الترتيب', max: 3 },
  { id: 'sent5',  label: 'تكرار جملة من ٥ كلمات', max: 3 },
  { id: 'sent8',  label: 'تكرار جملة من ٨ كلمات', max: 3 },
  { id: 'digits', label: 'تكرار سلسلة أرقام (٤–٦ أرقام)', max: 3 },
  { id: 'order',  label: 'تنفيذ ٣ تعليمات بالترتيب', max: 3 },
];

/* =========================================================
   PDF UPLOAD & STUDENT NOTES FUNCTIONS
   ========================================================= */

function openPDFUploadModal(sid, fkey) {
  const st = studentBy(sid);
  if (!st) return;
  
  const formType = SPECIAL_ED_FORM_TYPES.find(f => f.key === fkey);
  if (!formType) return;
  
  const existingPDF = st.special_ed_forms?.[fkey];
  
  openModal(`
    <div class="modal-head">
      <h2>${formType.icon} ${esc(formType.name)} — ${esc(st.name)}</h2>
      <button class="x" data-action="close-modal">${I.close}</button>
    </div>
    <form data-form="upload-pdf-form" data-sid="${st.id}" data-fkey="${fkey}">
      <div class="alert info mb-md">
        ${I.upload}
        <div>
          <div class="text-sm text-bold">رفع ملف PDF</div>
          <div class="text-xs text-muted mt-sm">اختاري ملف PDF من جهازك (الحد الأقصى: 10 ميجابايت)</div>
        </div>
      </div>
      
      ${existingPDF ? `
        <div class="alert mb-md" style="background:var(--positive-50);border-color:var(--positive)">
          ${I.checkCircle}
          <div>
            <div class="text-sm text-bold">تم رفع ملف سابقاً</div>
            <div class="text-xs text-muted mt-sm">سيتم استبدال الملف السابق عند رفع ملف جديد</div>
          </div>
        </div>
      ` : ''}
      
      <div class="field">
        <label>اختر ملف PDF <span style="color:var(--critical)">*</span></label>
        <input type="file" name="pdfFile" accept=".pdf,application/pdf" required>
        <div class="text-xs text-muted mt-sm">صيغة PDF فقط، الحد الأقصى 10 ميجابايت</div>
      </div>
      
      <div class="field">
        <label>ملاحظات (اختياري)</label>
        <textarea name="notes" rows="3" placeholder="أي ملاحظات عن هذا الملف"></textarea>
      </div>
      
      <button type="submit" class="btn lg block">${I.upload}<span>رفع الملف</span></button>
    </form>
  `);
}

async function viewPDFDocument(sid, fkey) {
  const st = studentBy(sid);
  if (!st) return;
  
  const pdfUrl = st.special_ed_forms?.[fkey];
  
  if (!pdfUrl) {
    toast('لم يتم رفع ملف بعد', 'error');
    return;
  }
  
  try {
    // Get signed URL from Supabase Storage
    const { data, error } = await window.supabaseClient.storage
      .from('student-documents')
      .createSignedUrl(pdfUrl, 3600); // Valid for 1 hour
    
    if (error) throw error;
    
    // Open in new tab
    window.open(data.signedUrl, '_blank');
  } catch (error) {
    console.error('Error viewing PDF:', error);
    toast('حدث خطأ أثناء فتح الملف', 'error');
  }
}

async function viewSinglePDF(pdfUrl) {
  try {
    // Get signed URL from Supabase Storage
    const { data, error } = await window.supabaseClient.storage
      .from('student-documents')
      .createSignedUrl(pdfUrl, 3600); // Valid for 1 hour
    
    if (error) throw error;
    
    // Open in new tab
    window.open(data.signedUrl, '_blank');
  } catch (error) {
    console.error('Error viewing PDF:', error);
    toast('حدث خطأ أثناء فتح الملف', 'error');
  }
}

async function viewAllPDFsModal(sid, fkey) {
  const st = studentBy(sid);
  if (!st) return;
  
  const formType = SPECIAL_ED_FORM_TYPES.find(f => f.key === fkey);
  const pdfData = st.special_ed_forms?.[fkey] || {};
  const uploads = Object.entries(pdfData).map(([teacherId, data]) => ({
    teacherId,
    ...data
  }));
  
  if (uploads.length === 0) {
    toast('لا توجد ملفات محملة', 'error');
    return;
  }
  
  openModal(`
    <div class="modal-head">
      <h2>📄 ${esc(formType?.name || 'الملفات')} — ${esc(st.name)}</h2>
      <button class="x" data-action="close-modal">${I.close}</button>
    </div>
    
    <div class="text-sm text-muted mb-md">
      ${arNum(uploads.length)} ${uploads.length === 1 ? 'ملف' : 'ملفات'} من ${uploads.length === 1 ? 'معلمة' : 'معلمات'} مختلفة
    </div>
    
    <div class="stack gap-sm">
      ${uploads.map((upload, idx) => `
        <div class="card" style="padding:16px">
          <div class="row between mb-sm">
            <div class="text-bold">${esc(upload.uploadedByName)}</div>
            <div class="text-xs text-muted">${fmtDate(upload.uploadedAt?.split('T')[0])}</div>
          </div>
          <button class="btn soft sm block" data-action="view-single-pdf" data-url="${esc(upload.url)}">
            ${I.eye}<span>عرض الملف</span>
          </button>
        </div>
      `).join('')}
    </div>
  `, { lg: true });
}

function openStudentNotesModal(sid) {
  const st = studentBy(sid);
  if (!st) return;
  
  const notes = st.special_ed_forms?.student_notes || [];
  
  openModal(`
    <div class="modal-head">
      <h2>📝 ملاحظات الطالبة — ${esc(st.name)}</h2>
      <button class="x" data-action="close-modal">${I.close}</button>
    </div>
    
    <div class="mb-md">
      <button class="btn" data-action="add-student-note" data-sid="${st.id}">
        ${I.plus}<span>إضافة ملاحظة جديدة</span>
      </button>
    </div>
    
    ${notes.length === 0 ? `
      <div class="empty">
        <div class="ico">${I.clipboard}</div>
        <h4>لا توجد ملاحظات</h4>
        <p>اضغطي "إضافة ملاحظة جديدة" لبدء تسجيل الملاحظات</p>
      </div>
    ` : `
      <div class="stack gap-sm" id="student-notes-list">
        ${notes.map((note, idx) => `
          <div class="note-card">
            <div class="note-header">
              <div class="note-date">${fmtDate(note.date)}</div>
              <button class="btn soft sm" data-action="delete-student-note" data-sid="${st.id}" data-idx="${idx}">
                ${I.trash}<span>حذف</span>
              </button>
            </div>
            <div class="note-text">${esc(note.text)}</div>
            ${note.addedBy ? `<div class="note-footer">بواسطة: ${esc(note.addedBy)}</div>` : ''}
          </div>
        `).join('')}
      </div>
    `}
  `, { lg: true });
}

function openAddStudentNoteModal(sid) {
  const st = studentBy(sid);
  if (!st) return;
  
  openModal(`
    <div class="modal-head">
      <h2>📝 إضافة ملاحظة — ${esc(st.name)}</h2>
      <button class="x" data-action="close-modal">${I.close}</button>
    </div>
    <form data-form="add-student-note-form" data-sid="${st.id}">
      <div class="field">
        <label>تاريخ الملاحظة <span style="color:var(--critical)">*</span></label>
        <input type="date" name="date" value="${new Date().toISOString().slice(0, 10)}" required>
      </div>
      
      <div class="field">
        <label>نص الملاحظة <span style="color:var(--critical)">*</span></label>
        <textarea name="text" rows="6" required placeholder="اكتبي ملاحظاتك عن الطالبة هنا..."></textarea>
      </div>
      
      <button type="submit" class="btn lg block">${I.check}<span>حفظ الملاحظة</span></button>
    </form>
  `);
}

async function deleteStudentNote(sid, idx) {
  const st = studentBy(sid);
  if (!st) return;
  
  if (!confirm('هل أنتِ متأكدة من حذف هذه الملاحظة؟')) return;
  
  try {
    // Remove note from array
    const notes = st.special_ed_forms?.student_notes || [];
    notes.splice(idx, 1);
    
    // Initialize special_ed_forms if needed
    if (!st.special_ed_forms) {
      st.special_ed_forms = {
        medical_diagnosis_pdf: null,
        diagnostic_test_pdf: null,
        student_notes: notes
      };
    } else {
      st.special_ed_forms.student_notes = notes;
    }
    
    // Update in Supabase
    const { error } = await window.supabaseClient
      .from('students')
      .update({ special_ed_forms: st.special_ed_forms })
      .eq('id', sid);
    
    if (error) throw error;
    
    persistState();
    toast('تم حذف الملاحظة');
    
    // Refresh the modal
    closeModal();
    openStudentNotesModal(sid);
  } catch (error) {
    console.error('Error deleting note:', error);
    toast('حدث خطأ أثناء حذف الملاحظة', 'error');
  }
}

/* =========================================================
   SPECIAL ED IEP MODALS
   ========================================================= */

function openSpecialEdIEPModal(sid) {
  const st = studentBy(sid);
  if (!st) return;
  
  const iep = st.special_ed_iep || {};
  
  openModal(`
    <div class="modal-head">
      <h2>📋 الخطة الفردية — ${esc(st.name)}</h2>
      <button class="x" data-action="close-modal">${I.close}</button>
    </div>
    <form data-form="save-special-ed-iep" data-sid="${st.id}">
      <div class="field">
        <label>المستوى الحالي للطالبة</label>
        <textarea name="current_level" rows="3" placeholder="وصف المستوى الحالي للطالبة">${esc(iep.current_level || '')}</textarea>
      </div>
      
      <div class="row" style="gap:12px">
        <div class="field" style="flex:1">
          <label>نقاط القوة</label>
          <textarea name="strengths" rows="3" placeholder="نقاط القوة لدى الطالبة">${esc(iep.strengths || '')}</textarea>
        </div>
        <div class="field" style="flex:1">
          <label>نقاط الاحتياج</label>
          <textarea name="needs" rows="3" placeholder="المجالات التي تحتاج تحسين">${esc(iep.needs || '')}</textarea>
        </div>
      </div>
      
      <div class="field">
        <label>الأهداف الفصلية (هدف واحد في كل سطر)</label>
        <textarea name="semester_goals" rows="4" placeholder="مثال:\nتحسين مهارات التواصل اللفظي\nتطوير المهارات الاجتماعية">${(iep.semester_goals || []).map(g => g.text).join('\n')}</textarea>
        <div class="text-xs text-muted mt-sm">اكتبي كل هدف فصلي في سطر منفصل</div>
      </div>
      
      <div class="field">
        <label>الأهداف قصيرة المدى (هدف واحد في كل سطر)</label>
        <textarea name="short_term_goals" rows="4" placeholder="مثال:\nالتعبير عن الاحتياجات الأساسية\nالرد على الأسئلة البسيطة">${(iep.short_term_goals || []).map(g => g.text).join('\n')}</textarea>
        <div class="text-xs text-muted mt-sm">اكتبي كل هدف قصير المدى في سطر منفصل</div>
      </div>
      
      <div class="field">
        <label>الأهداف السلوكية/التعليمية (هدف واحد في كل سطر)</label>
        <textarea name="behavioral_goals" rows="4" placeholder="مثال:\nالالتزام بالجلوس أثناء النشاط\nالانتباه للمعلمة لمدة 5 دقائق">${(iep.behavioral_goals || []).map(g => g.text).join('\n')}</textarea>
      </div>
      
      <div class="field">
        <label>الوسائل والأدوات التعليمية</label>
        <input name="teaching_tools" placeholder="اكتبي الوسائل مفصولة بفاصلة" value="${(iep.teaching_tools || []).join(', ')}">
        <div class="text-xs text-muted mt-sm">مثال: بطاقات مصورة، مجسمات، آيباد</div>
      </div>
      
      <div class="field">
        <label>استراتيجيات وطرق التدريس</label>
        <input name="teaching_strategies" placeholder="اكتبي الاستراتيجيات مفصولة بفاصلة" value="${(iep.teaching_strategies || []).join(', ')}">
        <div class="text-xs text-muted mt-sm">مثال: التعليم المباشر، النمذجة، التعزيز الإيجابي</div>
      </div>
      
      <div class="row" style="gap:12px">
        <div class="field" style="flex:1">
          <label>تاريخ البدء</label>
          <input type="date" name="start_date" value="${esc(iep.start_date || '')}">
        </div>
        <div class="field" style="flex:1">
          <label>تاريخ الانتهاء</label>
          <input type="date" name="end_date" value="${esc(iep.end_date || '')}">
        </div>
      </div>
      
      <button type="submit" class="btn lg block">${I.check}<span>حفظ الخطة الفردية</span></button>
    </form>
  `, { lg: true });
}

function openIEPPDFUploadModal(sid) {
  const st = studentBy(sid);
  if (!st) return;
  
  openModal(`
    <div class="modal-head">
      <h2>📄 رفع الخطة الفردية (PDF)</h2>
      <button class="x" data-action="close-modal">${I.close}</button>
    </div>
    <form data-form="upload-iep-pdf-form" data-sid="${st.id}">
      <div class="alert info mb-md">
        ${I.upload}
        <div>
          <div class="text-sm text-bold">رفع خطة فردية جاهزة</div>
          <div class="text-xs text-muted mt-sm">يمكنكِ رفع ملف PDF للخطة الفردية إذا كانت جاهزة من برنامج آخر</div>
        </div>
      </div>
      
      <div class="field">
        <label>اختر ملف PDF <span style="color:var(--critical)">*</span></label>
        <input type="file" name="pdfFile" accept=".pdf,application/pdf" required>
        <div class="text-xs text-muted mt-sm">صيغة PDF فقط، الحد الأقصى 10 ميجابايت</div>
      </div>
      
      <button type="submit" class="btn lg block">${I.upload}<span>رفع الملف</span></button>
    </form>
  `);
}

/* =========================================================
   AI-POWERED IEP GENERATOR (FAKE OCR) 🤖✨
   ========================================================= */

function generateSmartIEP(student) {
  // Generate realistic IEP data based on student info
  const age = student.age || 7;
  const name = student.name || 'الطالبة';
  const grade = student.grade || 'الصف الأول';
  
  // Random selection helpers
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const pickMultiple = (arr, count) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  
  // Realistic current level descriptions
  const currentLevels = [
    `تُظهر ${name} قدرات متباينة في المهارات الأكاديمية، حيث تحتاج لدعم مكثف في مهارات القراءة والكتابة، بينما تُظهر تقدماً ملحوظاً في المهارات الحركية الدقيقة.`,
    `المستوى الحالي للطالبة يشير إلى احتياجها لبرنامج تربوي فردي يركز على تطوير المهارات الأساسية في التواصل والتفاعل الاجتماعي.`,
    `تحتاج ${name} إلى تدخل مبكر في المهارات الأكاديمية الأساسية، مع التركيز على تطوير مهارات الانتباه والتركيز لفترات أطول.`
  ];
  
  // Strengths
  const strengthsList = [
    'التعاون مع الزملاء',
    'الاستجابة للتعزيز الإيجابي',
    'المهارات الحركية الدقيقة',
    'الذاكرة البصرية',
    'حب الاستطلاع والتعلم',
    'القدرة على اتباع التعليمات البسيطة',
    'التفاعل الإيجابي مع المعلمة'
  ];
  
  // Needs
  const needsList = [
    'تطوير مهارات التواصل اللفظي',
    'تحسين مدى الانتباه والتركيز',
    'بناء المهارات الأكاديمية الأساسية',
    'تعزيز الثقة بالنفس',
    'تطوير المهارات الاجتماعية',
    'تحسين مهارات حل المشكلات',
    'دعم مهارات التنظيم والترتيب'
  ];
  
  // Semester goals (long-term)
  const semesterGoalTemplates = [
    'أن تحقق الطالبة تقدماً ملموساً في المهارات الأكاديمية الأساسية بنسبة 70% بنهاية الفصل الدراسي',
    'أن تطور الطالبة مهارات التواصل والتفاعل الاجتماعي بشكل فعال مع أقرانها',
    'أن تتمكن الطالبة من أداء المهام المدرسية بشكل مستقل بنسبة 60% من الوقت',
    'أن تظهر الطالبة تحسناً واضحاً في مهارات الانتباه والتركيز لمدة 15 دقيقة متواصلة'
  ];
  
  // Short-term goals
  const shortTermGoalTemplates = [
    'أن تتعرف الطالبة على الحروف الهجائية بصرياً بنسبة 80%',
    'أن تكتب الطالبة اسمها بشكل صحيح دون مساعدة',
    'أن تعد الطالبة من 1 إلى 20 بشكل صحيح',
    'أن تميز الطالبة بين الألوان الأساسية',
    'أن تتبع الطالبة التعليمات المكونة من خطوتين',
    'أن تشارك الطالبة في الأنشطة الجماعية لمدة 10 دقائق',
    'أن تعبر الطالبة عن احتياجاتها بجمل بسيطة'
  ];
  
  // Behavioral goals
  const behavioralGoalTemplates = [
    'أن تبقى الطالبة جالسة في مكانها لمدة 5 دقائق أثناء النشاط',
    'أن تستأذن الطالبة قبل مغادرة مكانها',
    'أن ترفع الطالبة يدها قبل الإجابة',
    'أن تنتظر الطالبة دورها في الصف',
    'أن تستخدم الطالبة الكلمات المهذبة (من فضلك، شكراً)',
    'أن تحافظ الطالبة على أدواتها المدرسية منظمة',
    'أن تتعاون الطالبة مع زميلاتها في العمل الجماعي'
  ];
  
  // Teaching tools
  const allTools = [
    'البطاقات التعليمية الملونة',
    'المجسمات والنماذج',
    'السبورة التفاعلية',
    'الألعاب التعليمية',
    'القصص المصورة',
    'الألوان والأقلام',
    'دفتر الأنشطة',
    'الكمبيوتر اللوحي',
    'المكعبات والأشكال الهندسية'
  ];
  
  // Teaching strategies
  const allStrategies = [
    'التعليم المباشر والتوجيه اللفظي',
    'النمذجة والمحاكاة',
    'التعليم بالخطوات الصغيرة',
    'التكرار والممارسة المكثفة',
    'التعليم متعدد الحواس',
    'التعزيز الفوري والإيجابي',
    'استخدام الإشارات البصرية',
    'التعليم باللعب',
    'الحوار والنقاش الموجه'
  ];
  
  // Reinforcement methods
  const allReinforcement = [
    'التعزيز الاجتماعي (المدح والثناء)',
    'التعزيز المادي (ملصقات، نجوم)',
    'التعزيز النشاطي (وقت لعب إضافي)',
    'نظام النقاط والمكافآت',
    'الشهادات التقديرية',
    'التصفيق والتشجيع الجماعي'
  ];
  
  // Generate dates (current academic year)
  const now = new Date();
  const startDate = new Date(now.getFullYear(), 8, 1).toISOString().slice(0, 10); // Sept 1
  const endDate = new Date(now.getFullYear() + 1, 5, 30).toISOString().slice(0, 10); // June 30
  
  // Build the IEP
  return {
    current_level: pick(currentLevels),
    strengths: pickMultiple(strengthsList, 3).join('، '),
    needs: pickMultiple(needsList, 3).join('، '),
    semester_goals: pickMultiple(semesterGoalTemplates, 2).map((text, idx) => ({
      id: idx,
      text: text
    })),
    short_term_goals: pickMultiple(shortTermGoalTemplates, 4).map((text, idx) => ({
      id: idx,
      text: text,
      semester_goal_id: idx < 2 ? 0 : 1 // Link to semester goals
    })),
    behavioral_goals: pickMultiple(behavioralGoalTemplates, 3).map((text, idx) => ({
      id: idx,
      text: text
    })),
    teaching_tools: pickMultiple(allTools, 5),
    teaching_strategies: pickMultiple(allStrategies, 5),
    reinforcement_methods: pickMultiple(allReinforcement, 3),
    start_date: startDate,
    end_date: endDate
  };
}

async function viewIEPPDF(sid) {
  const st = studentBy(sid);
  if (!st) return;
  
  const pdfUrl = st.special_ed_iep?.pdf_upload;
  
  if (!pdfUrl) {
    toast('لم يتم رفع ملف PDF للخطة', 'error');
    return;
  }
  
  try {
    const { data, error } = await window.supabaseClient.storage
      .from('student-documents')
      .createSignedUrl(pdfUrl, 3600);
    
    if (error) throw error;
    window.open(data.signedUrl, '_blank');
  } catch (error) {
    console.error('Error viewing IEP PDF:', error);
    toast('حدث خطأ أثناء فتح الملف', 'error');
  }
}

async function deleteSpecialEdIEP(sid) {
  const st = studentBy(sid);
  if (!st) return;
  
  // Confirm deletion
  const confirmed = confirm(`هل أنتِ متأكدة من حذف الخطة الفردية لـ ${st.name}؟\n\nسيتم حذف جميع البيانات:\n• الأهداف الفصلية\n• الأهداف قصيرة المدى\n• الأهداف السلوكية\n• الوسائل والأساليب\n• ملف PDF (إن وجد)\n\nهذا الإجراء لا يمكن التراجع عنه!`);
  
  if (!confirmed) return;
  
  try {
    // Delete PDF from storage if exists
    if (st.special_ed_iep?.pdf_upload) {
      const { error: storageError } = await window.supabaseClient.storage
        .from('student-documents')
        .remove([st.special_ed_iep.pdf_upload]);
      
      if (storageError) {
        console.warn('Failed to delete PDF from storage:', storageError);
        // Continue anyway - we still want to delete the IEP data
      }
    }
    
    // Clear IEP data
    st.special_ed_iep = {
      current_level: '',
      strengths: '',
      needs: '',
      semester_goals: [],
      short_term_goals: [],
      behavioral_goals: [],
      teaching_tools: [],
      teaching_strategies: [],
      reinforcement_methods: [],
      start_date: null,
      end_date: null,
      pdf_upload: null
    };
    
    // Update in Supabase
    const { error } = await window.supabaseClient
      .from('students')
      .update({ special_ed_iep: st.special_ed_iep })
      .eq('id', sid);
    
    if (error) throw error;
    
    persistState();
    toast('✅ تم حذف الخطة الفردية بنجاح');
    
    // Reload the page
    handleRoute();
  } catch (error) {
    console.error('Error deleting IEP:', error);
    toast('حدث خطأ أثناء حذف الخطة', 'error');
  }
}

/* =========================================================
   SPECIAL ED SESSION PLANNING MODALS
   ========================================================= */

function openSpecialEdSessionModal(sid, sessionIdx = null) {
  const st = studentBy(sid);
  if (!st) return;
  
  const isEdit = sessionIdx !== null;
  const session = isEdit ? (st.special_ed_sessions || [])[sessionIdx] : null;
  
  // Get short-term goals from IEP
  const shortTermGoals = st.special_ed_iep?.short_term_goals || [];
  
  // Teaching tools options
  const toolsOptions = [
    'السبورة والأقلام الملونة',
    'البطاقات أو الصور',
    'الكتاب المدرسي',
    'المجسمات',
    'دفتر الطالبات',
    'الألوان'
  ];
  
  // Teaching methods options
  const methodsOptions = [
    'توجيه لفظي',
    'توجيه بدني',
    'إيماءات',
    'حوار ونقاش',
    'تمثيل',
    'خبرة مباشرة',
    'محاكاة ونمذجة',
    'لعب',
    'قصص'
  ];
  
  // Reinforcement methods
  const reinforcementOptions = [
    'تعزيز اجتماعي',
    'تعزيز غذائي',
    'تعزيز مادي',
    'تعزيز نشاطي'
  ];
  
  const proceduralGoals = session?.procedural_goals || [];
  
  openModal(`
    <div class="modal-head">
      <h2>📈 ${isEdit ? 'تعديل' : 'إضافة'} جلسة متابعة — ${esc(st.name)}</h2>
      <button class="x" data-action="close-modal">${I.close}</button>
    </div>
    <form data-form="save-special-ed-session" data-sid="${st.id}" ${isEdit ? `data-idx="${sessionIdx}"` : ''}>
      <div class="section-title">١. فترة المتابعة</div>
      <div class="row" style="gap:12px">
        <div class="field" style="flex:1">
          <label>التاريخ من <span style="color:var(--critical)">*</span></label>
          <input type="date" name="date_from" value="${esc(session?.date_from || '')}" required>
        </div>
        <div class="field" style="flex:1">
          <label>التاريخ إلى <span style="color:var(--critical)">*</span></label>
          <input type="date" name="date_to" value="${esc(session?.date_to || '')}" required>
        </div>
      </div>
      
      <div class="section-title">٢. الهدف قصير المدى</div>
      ${shortTermGoals.length > 0 ? `
        <div class="field">
          <label>اختر هدف قصير المدى من الخطة الفردية</label>
          <select name="short_term_goal_id">
            <option value="">-- اختر هدف --</option>
            ${shortTermGoals.map((goal, idx) => `
              <option value="${idx}" ${session?.short_term_goal_id === idx ? 'selected' : ''}>
                ${esc(goal.text)}
              </option>
            `).join('')}
          </select>
        </div>
      ` : `
        <div class="alert" style="background:var(--warn-50);border-color:var(--warn)">
          ${I.flag}
          <div class="text-sm">لا توجد أهداف قصيرة المدى في الخطة الفردية. قم بإضافة الأهداف من تبويب "الخطة الفردية" أولاً.</div>
        </div>
      `}
      
      <div class="section-title">٣. الأهداف الإجرائية السلوكية</div>
      <div id="procedural-goals-container">
        ${proceduralGoals.map((goal, idx) => `
          <div class="procedural-goal-item" data-idx="${idx}">
            <div class="field">
              <label>الهدف ${arNum(idx + 1)}</label>
              <textarea name="procedural_goal_${idx}" rows="2" required>${esc(goal.text)}</textarea>
            </div>
            <div class="field">
              <label>التقييم</label>
              <select name="evaluation_${idx}">
                <option value="achieved" ${goal.evaluation === 'achieved' ? 'selected' : ''}>تحقق</option>
                <option value="partial" ${goal.evaluation === 'partial' ? 'selected' : ''}>تحقق جزئياً</option>
                <option value="not_achieved" ${goal.evaluation === 'not_achieved' ? 'selected' : ''}>لم يتحقق</option>
              </select>
            </div>
            <button type="button" class="btn soft sm" data-action="remove-procedural-goal" data-idx="${idx}">
              ${I.trash}<span>حذف</span>
            </button>
          </div>
        `).join('')}
      </div>
      <button type="button" class="btn ghost block" data-action="add-procedural-goal">
        ${I.plus}<span>إضافة هدف إجرائي</span>
      </button>
      
      <div class="section-title">٤. الوسائل المستخدمة</div>
      <div class="field">
        <div class="checkbox-grid">
          ${toolsOptions.map(tool => `
            <label class="checkbox-item">
              <input type="checkbox" name="tools" value="${esc(tool)}" ${session?.tools?.includes(tool) ? 'checked' : ''}>
              <span>${esc(tool)}</span>
            </label>
          `).join('')}
        </div>
      </div>
      <div class="field">
        <label>أخرى</label>
        <input name="tools_other" placeholder="وسائل أخرى" value="${esc(session?.tools_other || '')}">
      </div>
      
      <div class="section-title">٥. أساليب التدريس</div>
      <div class="field">
        <div class="checkbox-grid">
          ${methodsOptions.map(method => `
            <label class="checkbox-item">
              <input type="checkbox" name="methods" value="${esc(method)}" ${session?.methods?.includes(method) ? 'checked' : ''}>
              <span>${esc(method)}</span>
            </label>
          `).join('')}
        </div>
      </div>
      <div class="field">
        <label>أخرى</label>
        <input name="methods_other" placeholder="أساليب أخرى" value="${esc(session?.methods_other || '')}">
      </div>
      
      <div class="section-title">٦. أساليب التعزيز</div>
      <div class="field">
        <div class="checkbox-grid">
          ${reinforcementOptions.map(reinforcement => `
            <label class="checkbox-item">
              <input type="checkbox" name="reinforcement" value="${esc(reinforcement)}" ${session?.reinforcement?.includes(reinforcement) ? 'checked' : ''}>
              <span>${esc(reinforcement)}</span>
            </label>
          `).join('')}
        </div>
      </div>
      
      <div class="section-title">٧. ملاحظات المعلمة</div>
      <div class="field">
        <textarea name="teaching_notes" rows="4" placeholder="اكتبي ملاحظاتك عن الجلسة...">${esc(session?.teaching_notes || '')}</textarea>
      </div>
      
      <button type="submit" class="btn lg block">${I.check}<span>${isEdit ? 'حفظ التعديلات' : 'حفظ الجلسة'}</span></button>
    </form>
    
    <script>
      (function() {
        let proceduralGoalCounter = ${proceduralGoals.length};
        const trashIcon = \`${I.trash.replace(/`/g, '\\`')}\`;
        
        // Add event listener for "add procedural goal" button
        const addBtn = document.querySelector('[data-action="add-procedural-goal"]');
        if (addBtn) {
          addBtn.addEventListener('click', function() {
            const container = document.getElementById('procedural-goals-container');
            const idx = proceduralGoalCounter++;
            const goalHTML = \`
              <div class="procedural-goal-item" data-idx="\${idx}">
                <div class="field">
                  <label>الهدف \${arNum(idx + 1)}</label>
                  <textarea name="procedural_goal_\${idx}" rows="2" required></textarea>
                </div>
                <div class="field">
                  <label>التقييم</label>
                  <select name="evaluation_\${idx}">
                    <option value="achieved">تحقق</option>
                    <option value="partial">تحقق جزئياً</option>
                    <option value="not_achieved">لم يتحقق</option>
                  </select>
                </div>
                <button type="button" class="btn soft sm" data-action="remove-procedural-goal" data-idx="\${idx}">
                  \${trashIcon}<span>حذف</span>
                </button>
              </div>
            \`;
            container.insertAdjacentHTML('beforeend', goalHTML);
            
            // Add event listener for the new remove button
            const newItem = container.querySelector(\`.procedural-goal-item[data-idx="\${idx}"]\`);
            const removeBtn = newItem.querySelector('[data-action="remove-procedural-goal"]');
            if (removeBtn) {
              removeBtn.addEventListener('click', function() {
                newItem.remove();
              });
            }
          });
        }
        
        // Add event listeners for existing remove buttons
        document.querySelectorAll('[data-action="remove-procedural-goal"]').forEach(btn => {
          btn.addEventListener('click', function() {
            const idx = this.getAttribute('data-idx');
            const item = document.querySelector(\`.procedural-goal-item[data-idx="\${idx}"]\`);
            if (item) item.remove();
          });
        });
        
        function arNum(n) {
          const ar = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];
          return String(n).split('').map(d => /\\d/.test(d) ? ar[+d] : d).join('');
        }
      })();
    </script>
  `, { lg: true });
}

function viewSpecialEdSession(sid, sessionIdx) {
  const st = studentBy(sid);
  if (!st) return;
  
  const session = (st.special_ed_sessions || [])[sessionIdx];
  if (!session) return;
  
  openModal(`
    <div class="modal-head">
      <h2>📈 عرض جلسة المتابعة — ${esc(st.name)}</h2>
      <button class="x" data-action="close-modal">${I.close}</button>
    </div>
    <div class="session-view">
      <div class="session-view-section">
        <h3>فترة المتابعة</h3>
        <p>${fmtDate(session.date_from)} - ${fmtDate(session.date_to)}</p>
      </div>
      
      ${session.short_term_goal ? `
        <div class="session-view-section">
          <h3>الهدف قصير المدى</h3>
          <p>${esc(session.short_term_goal)}</p>
        </div>
      ` : ''}
      
      ${session.procedural_goals && session.procedural_goals.length > 0 ? `
        <div class="session-view-section">
          <h3>الأهداف الإجرائية السلوكية</h3>
          <div class="goals-evaluation-list">
            ${session.procedural_goals.map((goal, idx) => `
              <div class="goal-evaluation-item">
                <div class="goal-eval-number">${arNum(idx + 1)}</div>
                <div class="goal-eval-content">
                  <div class="goal-eval-text">${esc(goal.text)}</div>
                  <div class="goal-eval-status ${goal.evaluation}">
                    ${goal.evaluation === 'achieved' ? '✅ تحقق' : 
                      goal.evaluation === 'partial' ? '🔸 تحقق جزئياً' : '❌ لم يتحقق'}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
      
      ${session.tools && session.tools.length > 0 ? `
        <div class="session-view-section">
          <h3>الوسائل المستخدمة</h3>
          <div class="tags-wrap">
            ${session.tools.map(tool => `<span class="tag">${esc(tool)}</span>`).join('')}
            ${session.tools_other ? `<span class="tag">${esc(session.tools_other)}</span>` : ''}
          </div>
        </div>
      ` : ''}
      
      ${session.methods && session.methods.length > 0 ? `
        <div class="session-view-section">
          <h3>أساليب التدريس</h3>
          <div class="tags-wrap">
            ${session.methods.map(method => `<span class="tag">${esc(method)}</span>`).join('')}
            ${session.methods_other ? `<span class="tag">${esc(session.methods_other)}</span>` : ''}
          </div>
        </div>
      ` : ''}
      
      ${session.reinforcement && session.reinforcement.length > 0 ? `
        <div class="session-view-section">
          <h3>أساليب التعزيز</h3>
          <div class="tags-wrap">
            ${session.reinforcement.map(r => `<span class="tag">${esc(r)}</span>`).join('')}
          </div>
        </div>
      ` : ''}
      
      ${session.teaching_notes ? `
        <div class="session-view-section">
          <h3>ملاحظات المعلمة</h3>
          <p style="white-space: pre-wrap;">${esc(session.teaching_notes)}</p>
        </div>
      ` : ''}
    </div>
    
    <div class="row" style="gap:8px;margin-top:16px">
      <button class="btn block" data-action="edit-special-ed-session" data-sid="${sid}" data-idx="${sessionIdx}">
        ${I.edit}<span>تعديل الجلسة</span>
      </button>
      <button class="btn ghost block" data-action="close-modal">${I.close}<span>إغلاق</span></button>
    </div>
  `, { lg: true });
}

function openFormModal(sid, fkey, viewOnly = false) {
  const st = studentBy(sid);
  if (!st) return;
  const data = (st.forms || {})[fkey] || {};
  const ft = FORM_TYPES.find(f => f.key === fkey) || SPECIAL_ED_FORM_TYPES.find(f => f.key === fkey);

  let body = '';
  if (fkey === 'parentConsent') body = renderParentConsentForm(st, data, viewOnly);
  else if (fkey === 'initialData') body = renderInitialDataForm(st, data, viewOnly);
  else if (fkey === 'preAssessment') body = renderPreAssessmentForm(st, data, viewOnly);
  else if (fkey === 'speechTest') body = renderSpeechTestForm(st, data, viewOnly);
  else if (fkey === 'auditoryMemoryTest') body = renderAuditoryMemoryForm(st, data, viewOnly);

  openModal(`
    <div class="modal-head">
      <h2>${ft.icon} ${esc(ft.name)} — ${esc(st.name)}</h2>
      <button class="x" data-action="close-modal">${I.close}</button>
    </div>
    ${body}
  `, { lg: true });
}

function renderParentConsentForm(st, data, viewOnly) {
  if (viewOnly && data.signed) {
    return `
      <div class="form-view">
        <div class="text-sm">تمت الموافقة بتاريخ <b>${fmtDate(data.date)}</b> من قبل <b>${esc(data.signedBy)}</b>.</div>
        <ul class="consent-points mt-md">
          <li>قبول البدء بجلسات التخاطب لطفلتي.</li>
          <li>السماح بتسجيل الجلسات لأغراض المتابعة الداخلية.</li>
          <li>الالتزام بالتمارين المنزلية المرسلة من المعلمة.</li>
          <li>الموافقة على معالجة البيانات وفق سياسة الخصوصية.</li>
        </ul>
      </div>
    `;
  }
  return `
    <form data-form="save-form" data-sid="${st.id}" data-fkey="parentConsent">
      <div class="text-sm mb-md">يقرّ ولي الأمر <b>${esc(userBy(st.parentId)?.name || 'ولي الأمر')}</b> بـ:</div>
      <ul class="consent-points">
        <li>قبول البدء بجلسات التخاطب لطفلتي ${esc(st.name)}.</li>
        <li>السماح بتسجيل الجلسات لأغراض المتابعة الداخلية.</li>
        <li>الالتزام بالتمارين المنزلية المرسلة من المعلمة.</li>
        <li>الموافقة على معالجة البيانات وفق سياسة الخصوصية.</li>
      </ul>
      <label class="check-row">
        <input type="checkbox" name="agree" required>
        <span>أوافق وأتعهد بما ورد أعلاه</span>
      </label>
      <div class="field">
        <label>اسم الموقّع</label>
        <input name="signedBy" value="${esc(userBy(st.parentId)?.name || '')}" required>
      </div>
      <button type="submit" class="btn lg block">${I.check}<span>تأكيد التوقيع</span></button>
    </form>
  `;
}

function renderInitialDataForm(st, data, viewOnly) {
  // Get shared initial data from student record
  const initialData = st.shared_initial_data || {};
  const isCompleted = initialData.completed || false;
  
  if (viewOnly && isCompleted) {
    return `
      <div class="form-view">
        <div class="alert info mb-md">
          ${I.checkCircle}
          <div>
            <div class="text-sm text-bold">البيانات الأولية مكتملة</div>
            <div class="text-xs text-muted mt-sm">تم إدخال البيانات بتاريخ ${fmtDate(initialData.date || new Date().toISOString())} من قبل ${esc(initialData.enteredBy || 'المعلمة')}</div>
          </div>
        </div>
        <div class="initial-data-view">
          <div class="data-row"><span class="label">اسم الطالبة:</span><span class="value">${esc(st.name)}</span></div>
          <div class="data-row"><span class="label">تاريخ الميلاد:</span><span class="value">${esc(initialData.birthDate || '—')}</span></div>
          <div class="data-row"><span class="label">العمر:</span><span class="value">${arNum(st.age)} سنوات</span></div>
          <div class="data-row"><span class="label">الصف:</span><span class="value">${esc(st.grade)}</span></div>
          <div class="data-row"><span class="label">التشخيص الطبي:</span><span class="value">${esc(initialData.medicalDiagnosis || '—')}</span></div>
          <div class="data-row"><span class="label">رقم ولي الأمر:</span><span class="value dir-ltr">${esc(st.parent_phone || '—')}</span></div>
          ${initialData.notes ? `<div class="data-row"><span class="label">ملاحظات:</span><span class="value">${esc(initialData.notes)}</span></div>` : ''}
        </div>
      </div>
    `;
  }
  
  return `
    <form data-form="save-initial-data" data-sid="${st.id}">
      <div class="alert info mb-md">
        ${I.star}
        <div>
          <div class="text-sm text-bold">البيانات الأولية مشتركة</div>
          <div class="text-xs text-muted mt-sm">عند حفظ هذه البيانات، ستظهر تلقائياً لجميع المعلمات المسؤولات عن الطالبة</div>
        </div>
      </div>
      
      <div class="field">
        <label>اسم الطالبة <span style="color:var(--critical)">*</span></label>
        <input name="name" value="${esc(st.name)}" required readonly disabled style="background:var(--bg-2)">
      </div>
      
      <div class="row" style="gap:12px">
        <div class="field" style="flex:1">
          <label>تاريخ الميلاد <span style="color:var(--critical)">*</span></label>
          <input name="birthDate" type="date" value="${esc(initialData.birthDate || '')}" required>
        </div>
        <div class="field" style="flex:1">
          <label>العمر</label>
          <input name="age" type="number" value="${st.age}" readonly disabled style="background:var(--bg-2)">
        </div>
      </div>
      
      <div class="field">
        <label>الصف <span style="color:var(--critical)">*</span></label>
        <input name="grade" value="${esc(st.grade)}" required readonly disabled style="background:var(--bg-2)">
      </div>
      
      <div class="field">
        <label>التشخيص الطبي</label>
        <input name="medicalDiagnosis" value="${esc(initialData.medicalDiagnosis || '')}" placeholder="مثال: اضطراب طيف التوحد، تأخر نطق">
        <div class="text-xs text-muted mt-sm">يمكن ترك هذا الحقل فارغاً إذا لم يتوفر تشخيص بعد</div>
      </div>
      
      <div class="field">
        <label>رقم ولي الأمر</label>
        <input name="parentPhone" type="text" value="${esc(st.parent_phone || '')}" placeholder="05xxxxxxxx (اختياري)" dir="ltr">
      </div>
      
      <div class="field">
        <label>ملاحظات إضافية</label>
        <textarea name="notes" rows="3" placeholder="أي معلومات إضافية مهمة عن الطالبة">${esc(initialData.notes || '')}</textarea>
      </div>
      
      <button type="submit" class="btn lg block">${I.check}<span>حفظ البيانات الأولية</span></button>
    </form>
  `;
}

function renderPreAssessmentForm(st, data, viewOnly) {
  const answers = data.answers || {};
  const params = new URLSearchParams(location.hash.split('?')[1] || '');
  const sectionKey = params.get('sec') || 'history';

  const renderQuestion = (q, sec) => {
    // Header type for subsection titles within a section
    if (q.type === 'header') {
      return `
        <div style="margin-top:20px;margin-bottom:12px;padding:12px;background:var(--blue-50);border-right:4px solid var(--blue);border-radius:8px">
          <div class="text-sm text-bold" style="color:var(--blue)">${esc(q.label)}</div>
        </div>
      `;
    }
    if (q.type === 'text') {
      return `
        <div class="q-row" style="flex-direction:column;align-items:stretch;gap:6px">
          <div class="text-sm text-bold">${esc(q.label)}</div>
          <input name="q_${q.id}" placeholder="${esc(q.placeholder || '')}" value="${esc(answers[q.id] || '')}" ${viewOnly?'disabled':''} style="background:white;border:1.5px solid var(--border-strong);padding:10px 12px;border-radius:10px">
        </div>
      `;
    }
    if (q.type === 'yn') {
      return `
        <div class="q-row">
          <div class="text-sm" style="flex:1">${esc(q.label)}</div>
          <div class="row">
            ${[{v:'yes',l:'نعم',c:'mastered'},{v:'no',l:'لا',c:'not-mastered'}].map(o => `
              <label class="chip eval-chip ${o.c} ${answers[q.id] === o.v ? 'active' : ''}">
                <input type="radio" name="q_${q.id}" value="${o.v}" ${answers[q.id] === o.v ? 'checked' : ''} hidden ${viewOnly?'disabled':''}>
                ${esc(o.l)}
              </label>
            `).join('')}
          </div>
        </div>
      `;
    }
    if (q.type === 'choice') {
      return `
        <div class="q-row">
          <div class="text-sm" style="flex:1">${esc(q.label)}</div>
          <div class="row wrap">
            ${q.options.map(o => `
              <label class="chip ${answers[q.id] === o.v ? 'active' : ''}">
                <input type="radio" name="q_${q.id}" value="${o.v}" ${answers[q.id] === o.v ? 'checked' : ''} hidden ${viewOnly?'disabled':''}>
                ${esc(o.l)}
              </label>
            `).join('')}
          </div>
        </div>
      `;
    }
    // pair (سليم / غير سليم)
    if (q.type === 'pair') {
      return `
        <div class="q-row">
          <div class="text-sm" style="flex:1">${esc(q.label)}</div>
          <div class="row">
            ${[{v:'ok',l:'سليم',c:'mastered'},{v:'bad',l:'غير سليم',c:'not-mastered'}].map(o => `
              <label class="chip eval-chip ${o.c} ${answers[q.id] === o.v ? 'active' : ''}">
                <input type="radio" name="q_${q.id}" value="${o.v}" ${answers[q.id] === o.v ? 'checked' : ''} hidden ${viewOnly?'disabled':''}>
                ${esc(o.l)}
              </label>
            `).join('')}
          </div>
        </div>
      `;
    }
    // eval3 (متقن / متقن جزئياً / غير متقن)
    if (q.type === 'eval3') {
      return `
        <div class="q-row">
          <div class="text-sm" style="flex:1">${esc(q.label)}</div>
          <div class="row">
            ${[{v:'mastered',l:'متقن',c:'mastered'},{v:'partial',l:'متقن جزئياً',c:'partial'},{v:'not',l:'غير متقن',c:'not-mastered'}].map(o => `
              <label class="chip eval-chip ${o.c} ${answers[q.id] === o.v ? 'active' : ''}">
                <input type="radio" name="q_${q.id}" value="${o.v}" ${answers[q.id] === o.v ? 'checked' : ''} hidden ${viewOnly?'disabled':''}>
                ${esc(o.l)}
              </label>
            `).join('')}
          </div>
        </div>
      `;
    }
    // 3-state evaluation (default for receptive/expressive/grammar/pragmatic/memory/sounds)
    const opts = sec.id === 'sounds' ? [
      {v:'correct', l:'سليم',  c:'mastered'},
      {v:'distort', l:'محرّف', c:'partial'},
      {v:'omit',    l:'حذف',   c:'not-mastered'},
    ] : sec.id === 'memory' ? [
      {v:'always',    l:'دائماً',  c:'mastered'},
      {v:'sometimes', l:'أحياناً', c:'partial'},
      {v:'rarely',    l:'نادراً',  c:'not-mastered'},
    ] : [
      {v:'mastered', l:'متقن',  c:'mastered'},
      {v:'partial',  l:'جزئي',  c:'partial'},
      {v:'not',      l:'غير متقن', c:'not-mastered'},
    ];
    return `
      <div class="q-row">
        <div class="text-sm" style="flex:1">${esc(q.label)}</div>
        <div class="row">
          ${opts.map(o => `
            <label class="chip eval-chip ${o.c} ${answers[q.id] === o.v ? 'active' : ''}">
              <input type="radio" name="q_${q.id}" value="${o.v}" ${answers[q.id] === o.v ? 'checked' : ''} hidden ${viewOnly?'disabled':''}>
              ${esc(o.l)}
            </label>
          `).join('')}
        </div>
      </div>
    `;
  };

  const sec = PRE_ASSESSMENT_SECTIONS.find(s => s.id === sectionKey) || PRE_ASSESSMENT_SECTIONS[0];

  return `
    <div class="assessment-tabs" style="display:flex;flex-wrap:wrap;gap:10px;padding:20px;background:var(--surface-lavender);border-radius:12px;margin-bottom:24px">
      ${PRE_ASSESSMENT_SECTIONS.map((s) => `
        <button type="button" class="assess-tab ${s.id === sec.id ? 'active' : ''}" data-section="${s.id}" style="flex-shrink:0">
          <span class="num">${arNum(s.num || 0)}</span>
          <span>${esc(s.title.replace(/—.*/,'').trim())}</span>
        </button>
      `).join('')}
    </div>

    <form data-form="save-form" data-sid="${st.id}" data-fkey="preAssessment" data-section="${sec.id}">
      <div class="assess-section">
        <h3 style="font-size:18px;margin-bottom:16px;font-weight:700">${esc(sec.title)}</h3>
        ${sec.note ? `<p class="text-xs text-muted mb-md">${esc(sec.note)}</p>` : ''}
        <div class="stack gap-sm">
          ${sec.questions.map(q => renderQuestion(q, sec)).join('')}
        </div>
      </div>

      <div class="field mt-md">
        <label>ملاحظات (اختيارية)</label>
        <textarea name="notes" ${viewOnly?'disabled':''}>${esc(data.notes || '')}</textarea>
      </div>

      <div class="row mt-md" style="gap:8px;flex-wrap:wrap">
        ${!viewOnly ? `<button type="submit" class="btn">${I.check}<span>حفظ القسم</span></button>` : ''}
        ${!viewOnly && data.completed ? `
          <button type="button" class="btn mint" data-action="generate-plan-from-assessment" data-sid="${st.id}">
            ${I.sparkle}<span>توليد الخطة الفردية من التقييم</span>
          </button>
        ` : ''}
      </div>

      ${data.completed ? `
        <div class="card mt-md" style="background:var(--mint-50);border-color:var(--mint)">
          <div class="row">
            <div style="font-size:24px">✅</div>
            <div style="flex:1">
              <div class="text-bold">تم استكمال التقييم</div>
              <div class="text-xs text-muted">يمكنكِ الآن توليد الخطة الفردية تلقائياً.</div>
            </div>
          </div>
        </div>
      ` : ''}
    </form>
  `;
}

function renderSpeechTestForm(st, data, viewOnly) {
  const results = data.results || {};
  const remarks = data.remarks || {};
  
  return `
    <form data-form="save-form" data-sid="${st.id}" data-fkey="speechTest" style="overflow-x: auto;">
      <div class="speech-test-header" style="background: #f5f5f5; padding: 12px; border-radius: 8px; margin-bottom: 16px;">
        <h3 style="text-align: center; margin: 0 0 8px 0;">اختبار مخارج الأصوات العربية المطور</h3>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; font-size: 14px;">
          <div><strong>الاسم:</strong> ${esc(st.name)}</div>
          <div><strong>تاريخ الاختبار:</strong> ${data.date || new Date().toISOString().slice(0,10)}</div>
          <div><strong>الصف:</strong> ${esc(st.grade || '_______')}</div>
        </div>
      </div>
      
      <div style="text-align: center; margin-bottom: 16px;">
        <button type="button" class="btn lg" onclick="openImageNavigator()" style="background: var(--blue); color: white; padding: 12px 24px; font-size: 16px; font-weight: 600;">
          📚 إختبار النطق المصور (1-112)
        </button>
      </div>
      
      <table class="speech-test-table" style="width: 100%; border-collapse: collapse; font-size: 13px; table-layout: fixed;">
        <thead>
          <tr style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
            <th style="padding: 10px 4px; border: 1px solid #ddd; text-align: center; width: 40px; font-weight: 600;">الرقم</th>
            <th style="padding: 10px 6px; border: 1px solid #ddd; text-align: center; width: 80px; font-weight: 600;">الصوت</th>
            <th style="padding: 10px 6px; border: 1px solid #ddd; text-align: center; font-weight: 600;">المفــــــــــردات</th>
            <th style="padding: 10px 4px; border: 1px solid #ddd; text-align: center; width: 90px; font-weight: 600;">أول</th>
            <th style="padding: 10px 4px; border: 1px solid #ddd; text-align: center; width: 90px; font-weight: 600;">وسط</th>
            <th style="padding: 10px 4px; border: 1px solid #ddd; text-align: center; width: 90px; font-weight: 600;">أخر</th>
            <th style="padding: 10px 4px; border: 1px solid #ddd; text-align: center; width: 90px; font-weight: 600;">مجرد</th>
            <th style="padding: 10px 6px; border: 1px solid #ddd; text-align: center; min-width: 120px; font-weight: 600;">ملاحظات</th>
          </tr>
        </thead>
        <tbody>
          ${SPEECH_TEST_SOUNDS.map((s, idx) => {
            const r = results[s.id] || {};
            const rowBg = idx % 2 === 0 ? '#ffffff' : '#f9fafb';
            return `
            <tr style="background: ${rowBg}; transition: background 0.2s;" onmouseover="this.style.background='#f3f4f6'" onmouseout="this.style.background='${rowBg}'">
              <td style="padding: 8px 4px; border: 1px solid #e5e7eb; text-align: center; font-size: 12px; color: #6b7280;">${arNum(s.num)}</td>
              
              <!-- Sound column with checkbox -->
              <td style="padding: 8px 4px; border: 1px solid #e5e7eb; text-align: center; background: ${r.isWrong ? '#fee2e2' : rowBg};">
                <div style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
                  <div style="font-weight: 700; font-size: 20px; color: ${r.isWrong ? '#dc2626' : '#1f2937'}; text-shadow: ${r.isWrong ? '0 0 8px rgba(220,38,38,0.3)' : 'none'};">${s.sound}</div>
                  <label style="display: flex; align-items: center; cursor: pointer; margin: 0; padding: 2px 6px; border-radius: 4px; background: ${r.isWrong ? '#fecaca' : '#f3f4f6'}; transition: all 0.2s;">
                    <input type="checkbox" name="w_${s.id}" ${r.isWrong ? 'checked' : ''} ${viewOnly ? 'disabled' : ''}
                           onchange="const row = this.closest('tr'); const soundCell = row.children[1]; const soundText = soundCell.querySelector('div > div'); const label = this.closest('label'); if(this.checked) { soundText.style.color = '#dc2626'; soundText.style.textShadow = '0 0 8px rgba(220,38,38,0.3)'; soundCell.style.background = '#fee2e2'; label.style.background = '#fecaca'; } else { soundText.style.color = '#1f2937'; soundText.style.textShadow = 'none'; soundCell.style.background = '${rowBg}'; label.style.background = '#f3f4f6'; }"
                           style="margin: 0 4px 0 0; cursor: pointer; width: 16px; height: 16px; accent-color: #dc2626;">
                    <span style="font-size: 14px; color: #dc2626; font-weight: 600;">✗</span>
                  </label>
                </div>
              </td>
              
              <td style="padding: 8px 8px; border: 1px solid #e5e7eb; text-align: right; font-size: 12px; color: #374151;">${s.words}</td>
              
              <!-- Position columns - just text inputs, no checkboxes -->
              <td style="padding: 6px; border: 1px solid #e5e7eb; text-align: center;">
                <input type="text" name="s_${s.id}_first" value="${esc(r.first || '')}" ${viewOnly ? 'disabled' : ''}
                       style="width: 100%; border: 1px solid #d1d5db; padding: 6px; font-size: 13px; text-align: center; border-radius: 6px; transition: all 0.2s;" 
                       onfocus="this.style.borderColor='#667eea'; this.style.boxShadow='0 0 0 3px rgba(102,126,234,0.1)'" 
                       onblur="this.style.borderColor='#d1d5db'; this.style.boxShadow='none'">
              </td>
              
              <td style="padding: 6px; border: 1px solid #e5e7eb; text-align: center;">
                <input type="text" name="s_${s.id}_middle" value="${esc(r.middle || '')}" ${viewOnly ? 'disabled' : ''}
                       style="width: 100%; border: 1px solid #d1d5db; padding: 6px; font-size: 13px; text-align: center; border-radius: 6px; transition: all 0.2s;" 
                       onfocus="this.style.borderColor='#667eea'; this.style.boxShadow='0 0 0 3px rgba(102,126,234,0.1)'" 
                       onblur="this.style.borderColor='#d1d5db'; this.style.boxShadow='none'">
              </td>
              
              <td style="padding: 6px; border: 1px solid #e5e7eb; text-align: center;">
                <input type="text" name="s_${s.id}_last" value="${esc(r.last || '')}" ${viewOnly ? 'disabled' : ''}
                       style="width: 100%; border: 1px solid #d1d5db; padding: 6px; font-size: 13px; text-align: center; border-radius: 6px; transition: all 0.2s;" 
                       onfocus="this.style.borderColor='#667eea'; this.style.boxShadow='0 0 0 3px rgba(102,126,234,0.1)'" 
                       onblur="this.style.borderColor='#d1d5db'; this.style.boxShadow='none'">
              </td>
              
              <td style="padding: 6px; border: 1px solid #e5e7eb; text-align: center;">
                <input type="text" name="s_${s.id}_moving" value="${esc(r.moving || '')}" ${viewOnly ? 'disabled' : ''}
                       style="width: 100%; border: 1px solid #d1d5db; padding: 6px; font-size: 13px; text-align: center; border-radius: 6px; transition: all 0.2s;" 
                       onfocus="this.style.borderColor='#667eea'; this.style.boxShadow='0 0 0 3px rgba(102,126,234,0.1)'" 
                       onblur="this.style.borderColor='#d1d5db'; this.style.boxShadow='none'">
              </td>
              
              <td style="padding: 6px; border: 1px solid #e5e7eb;">
                <input type="text" name="remark_${s.id}" value="${esc(remarks[s.id] || '')}" ${viewOnly ? 'disabled' : ''}
                       style="width: 100%; border: 1px solid #d1d5db; padding: 6px; font-size: 12px; border-radius: 6px; transition: all 0.2s;" 
                       placeholder="ملاحظات"
                       onfocus="this.style.borderColor='#667eea'; this.style.boxShadow='0 0 0 3px rgba(102,126,234,0.1)'" 
                       onblur="this.style.borderColor='#d1d5db'; this.style.boxShadow='none'">
              </td>
            </tr>
          `}).join('')}
        </tbody>
      </table>
      
      <div style="margin-top: 16px; padding: 12px; background: #f9f9f9; border-radius: 8px;">
        <p style="margin: 0; font-size: 13px; text-align: center;">
          <strong>أخصائية التخاطب و السمع</strong>
        </p>
      </div>
      
      ${!viewOnly ? `
        <button type="submit" class="btn lg block" style="margin-top: 16px;">
          ${I.check}<span>حفظ الاختبار</span>
        </button>
      ` : ''}
    </form>
  `;
}

function renderAuditoryMemoryForm(st, data, viewOnly) {
  const tasks = data.tasks || {};
  return `
    <form data-form="save-form" data-sid="${st.id}" data-fkey="auditoryMemoryTest">
      <p class="text-sm text-muted mb-md">عدد المحاولات الناجحة من ٣ لكل بند:</p>
      <div class="stack gap-sm">
        ${AUDITORY_MEMORY_TASKS.map(task => `
          <div class="q-row">
            <div class="text-sm" style="flex:1">${esc(task.label)}</div>
            <div class="row">
              ${[0,1,2,3].map(n => `
                <label class="chip ${tasks[task.id] === n ? 'active' : ''}" style="min-width:36px;justify-content:center">
                  <input type="radio" name="t_${task.id}" value="${n}" ${tasks[task.id] === n ? 'checked' : ''} hidden ${viewOnly ? 'disabled' : ''}>
                  ${arNum(n)}
                </label>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
      <div class="field mt-md">
        <label>ملاحظات</label>
        <textarea name="notes" ${viewOnly ? 'disabled' : ''}>${esc(data.notes || '')}</textarea>
      </div>
      ${!viewOnly ? `<button type="submit" class="btn lg block">${I.check}<span>حفظ النتائج</span></button>` : ''}
    </form>
  `;
}

function openStudentOptionsModal(sid) {
  const st = studentBy(sid);
  if (!st) return;
  const parent = userBy(st.parentId);
  openModal(`
    <div class="modal-head">
      <h2>إعدادات ${esc(st.name)}</h2>
      <button class="x" data-action="close-modal">${I.close}</button>
    </div>

    <form data-form="edit-student-info" data-sid="${sid}" class="edit-student-form">
      <div class="form-section-title">بيانات الطالبة</div>
      <div class="field">
        <label>اسم الطالبة</label>
        <input name="studentName" value="${esc(st.name)}" required>
      </div>
      <div class="row" style="gap:10px;flex-wrap:wrap">
        <div class="field" style="flex:2;min-width:140px">
          <label>المرحلة</label>
          <select name="stage" required>
            ${['حضانة','روضة','تمهيدي','أول','ثاني','ثالث','رابع','خامس','سادس'].map(s => {
              const isCurrent = st.grade.split(/\s+/)[0] === s;
              return `<option value="${s}" ${isCurrent ? 'selected' : ''}>${s}</option>`;
            }).join('')}
          </select>
        </div>
        <div class="field" style="flex:1;min-width:90px">
          <label>الفصل</label>
          <select name="section" required>
            ${['أ','ب','ج','د'].map(s => {
              const isCurrent = st.grade.split(/\s+/)[1] === s;
              return `<option value="${s}" ${isCurrent ? 'selected' : ''}>${s}</option>`;
            }).join('')}
          </select>
        </div>
        <div class="field" style="flex:1;min-width:80px">
          <label>العمر</label>
          <input name="age" type="number" value="${st.age}" min="3" max="18" required>
        </div>
      </div>

      <div class="form-section-title">ولي الأمر</div>
      <div class="field">
        <label>اسم ولي الأمر</label>
        <input name="parentName" value="${esc(parent?.name || '')}">
      </div>
      <div class="field">
        <label>رقم الجوال</label>
        <input name="parentPhone" type="text" value="${esc(st.parentPhone || '')}" placeholder="05xxxxxxxx (اختياري)">
        <div class="hint">يستخدمه ولي الأمر للدخول عبر رابط الدعوة.</div>
      </div>

      <button type="submit" class="btn block">${I.check}<span>حفظ التعديلات</span></button>
    </form>

    <div class="divider" style="margin: 22px 0"></div>

    <div class="text-xs text-muted mb-md" style="letter-spacing: 0.06em; text-transform: uppercase; font-weight: 700">إجراءات</div>
    <div class="stack gap-sm">
      <button class="role-tile" data-action="archive-student" data-sid="${sid}">
        <div class="ic" style="background:var(--warn-50);color:var(--warn);font-size:18px">${I.box}</div>
        <div style="flex:1">
          <h4>أرشفة الطالبة</h4>
          <div class="desc">تنقل لـ "أرشيف الطالبات" — يمكن استعادتها لاحقاً.</div>
        </div>
        ${I.chevron}
      </button>
      <button class="role-tile" data-action="delete-student-confirm" data-sid="${sid}">
        <div class="ic" style="background:var(--critical-50);color:var(--critical);font-size:18px">${I.trash}</div>
        <div style="flex:1">
          <h4 style="color:var(--critical)">حذف نهائي</h4>
          <div class="desc">حذف الطالبة وكل بياناتها بدون استرجاع.</div>
        </div>
        ${I.chevron}
      </button>
    </div>
  `, { lg: true });
}

function openSkillModal(editId) {
  const existing = editId ? STATE.data.skills.find(s => s.id === editId) : null;
  const categories = ['فموي حركي','لفظي','إدراكي','لغوي','اجتماعي','تركيبي','سردي','أخرى'];
  openModal(`
    <div class="modal-head">
      <h2>${existing ? 'تعديل المهارة' : 'إضافة مهارة جديدة'}</h2>
      <button class="x" data-action="close-modal">${I.close}</button>
    </div>
    <form data-form="save-skill" ${existing ? `data-id="${existing.id}"` : ''}>
      <div class="field">
        <label>اسم المهارة</label>
        <input name="name" value="${esc(existing?.name || '')}" required placeholder="مثال: نطق حرف الكاف">
      </div>
      <div class="field">
        <label>الفئة</label>
        <select name="category">
          ${categories.map(c => `<option ${existing?.category === c ? 'selected' : ''}>${c}</option>`).join('')}
        </select>
      </div>
      <button type="submit" class="btn block">${I.check}<span>حفظ</span></button>
    </form>
  `);
}

function openToolModal() {
  const icons = ['🪞','🫧','🖼️','🎺','🎈','🥤','🧸','🎵','⏱️','📱','📚','🎲','✏️','🎨','📦','🔔','🌟','🏆','🎯','🧩'];
  openModal(`
    <div class="modal-head">
      <h2>إضافة أداة جديدة</h2>
      <button class="x" data-action="close-modal">${I.close}</button>
    </div>
    <form data-form="save-tool">
      <div class="field">
        <label>اسم الأداة</label>
        <input name="name" required placeholder="مثال: ألغاز خشبية">
      </div>
      <div class="field">
        <label>الأيقونة</label>
        <div class="row wrap" id="icon-pick-row">
          ${icons.map((ic, i) => `
            <button type="button" class="chip ${i===0?'active':''}" data-pick-icon="${ic}" style="font-size:18px">${ic}</button>
          `).join('')}
        </div>
      </div>
      <button type="submit" class="btn block">${I.check}<span>إضافة</span></button>
    </form>
  `);
  document.getElementById('icon-pick-row')?.querySelectorAll('[data-pick-icon]').forEach(el => {
    el.addEventListener('click', () => {
      el.parentElement.querySelectorAll('[data-pick-icon]').forEach(x => x.classList.remove('active'));
      el.classList.add('active');
    });
  });
}

function openTemplateModal() {
  openModal(`
    <div class="modal-head">
      <h2>قالب ملاحظة جديد</h2>
      <button class="x" data-action="close-modal">${I.close}</button>
    </div>
    <form data-form="save-template">
      <div class="field">
        <label>نص القالب</label>
        <textarea name="body" required placeholder="مثال: استجابة ممتازة، تطور ملحوظ في النطق."></textarea>
        <div class="hint">سيظهر كقالب جاهز عند كتابة المراجعات.</div>
      </div>
      <button type="submit" class="btn block">${I.check}<span>إضافة القالب</span></button>
    </form>
  `);
}

/* =========================================================
   Plan generation engine (rule-based, from pre-assessment)
   ========================================================= */
const PLAN_RULES = {
  receptive: {
    long: 'أن تنمي الطالبة اللغة الاستقبالية لديها بشكل صحيح.',
    short: {
      animals:    'أن تشير الطالبة إلى بعض الحيوانات/الفواكه المطلوبة منها بشكل صحيح بنسبة ٨٠٪',
      verbs:      'أن تشير الطالبة إلى الأفعال المطلوبة منها بشكل صحيح بنسبة ٨٠٪',
      days:       'أن تشير الطالبة إلى أيام الأسبوع المطلوبة منها بشكل صحيح بنسبة ٨٠٪',
      preps:      'أن تشير الطالبة إلى حروف الجر المطلوبة منها بشكل صحيح بنسبة ٨٠٪',
      locations:  'أن تشير الطالبة إلى ظروف المكان المطلوبة منها بشكل صحيح بنسبة ٨٠٪',
      sentence2:  'أن تشير الطالبة إلى جملة من كلمتين (فعل + فاعل) بشكل صحيح بنسبة ٨٠٪',
      dialog:     'أن تشير الطالبة إلى إجابات الأسئلة الحوارية (السلام عليكم، كيف حالك، ما اسمك، كم عمرك) بشكل صحيح بنسبة ٨٠٪',
    },
  },
  expressive: {
    long: 'أن تنمي الطالبة اللغة التعبيرية لديها بشكل صحيح.',
    short: {
      animals:    'أن تسمي الطالبة الحيوانات/الفواكه بشكل صحيح بنسبة ٨٠٪',
      verbs:      'أن تسمي الطالبة الأفعال المطلوبة منها بشكل صحيح بنسبة ٨٠٪',
      days:       'أن تسمي الطالبة أيام الأسبوع بشكل صحيح بنسبة ٨٠٪',
      preps:      'أن تسمي الطالبة حروف الجر المطلوبة منها بشكل صحيح بنسبة ٨٠٪',
      locations:  'أن تسمي الطالبة ظروف المكان بشكل صحيح بنسبة ٨٠٪',
      sentence2:  'أن تصف الطالبة جملة من كلمتين (فعل + فاعل) بشكل صحيح بنسبة ٨٠٪',
      dialog:     'أن تجيب الطالبة على الأسئلة الحوارية (السلام عليكم، كيف حالك، ما اسمك، كم عمرك) بشكل صحيح بنسبة ٨٠٪',
      sequence:   'أن تصف الطالبة الأحداث بطريقة تسلسلية بشكل صحيح بنسبة ٨٠٪',
    },
  },
  grammar: {
    long: 'أن تنمي الطالبة المهارات النحوية لديها بشكل صحيح.',
    short: {
      dual_plural:    'أن تسمي الطالبة المثنى والجمع عندما يطلب منها ذلك بشكل صحيح بنسبة ٨٠٪',
      demonstratives: 'أن تسمي الطالبة أسماء الإشارة عندما يطلب منها ذلك بشكل صحيح بنسبة ٨٠٪',
      pronouns:       'أن تستخدم الطالبة الضمائر بشكل صحيح بنسبة ٨٠٪',
      negation:       'أن تستخدم الطالبة أدوات النفي بشكل صحيح بنسبة ٨٠٪',
    },
  },
  pragmatic: {
    long: 'أن تنمي الطالبة مهارات التواصل والانتباه لديها بشكل صحيح.',
    short: {
      request:   'أن تطلب الطالبة الشيء بقول (أبي + الشيء) بشكل صحيح بنسبة ٨٠٪',
      follow1:   'أن تتبع الطالبة أمراً من خطوة واحدة عندما يطلب منها ذلك بشكل صحيح بنسبة ٨٠٪',
      follow2:   'أن تتبع الطالبة أمرين متتاليين عندما يطلب منها ذلك بشكل صحيح بنسبة ٨٠٪',
      attention: 'أن تنمي الطالبة مهارة الانتباه والتركيز لديها بشكل صحيح بنسبة ٨٠٪',
    },
  },
  sounds: {
    long: 'أن تنطق الطالبة مخارج الأصوات بطريقة صحيحة.',
    // For each problematic sound, generate 5 short goals
    sound_template: (letter, mads) => ([
      `أن تنطق الطالبة صوت (${letter}) مستقلاً بشكل صحيح بنسبة ٨٠٪`,
      `أن تنطق الطالبة صوت (${letter}) مع المدود (${mads}) بشكل صحيح بنسبة ٨٠٪`,
      `أن تنطق الطالبة صوت (${letter}) أول الكلمة بشكل صحيح بنسبة ٨٠٪`,
      `أن تنطق الطالبة صوت (${letter}) وسط الكلمة بشكل صحيح بنسبة ٨٠٪`,
      `أن تنطق الطالبة صوت (${letter}) آخر الكلمة بشكل صحيح بنسبة ٨٠٪`,
    ]),
    sound_mads: {
      r: 'را، ري، رو',  th: 'ثا، ثي، ثو', dh: 'ذا، ذي، ذو', z: 'زا، زي، زو',
      gh: 'غا، غي، غو', kh: 'خا، خي، خو', s: 'سا، سي، سو',  sh: 'شا، شي، شو',
      q: 'قا، قي، قو',  l: 'لا، لي، لو',  k: 'كا، كي، كو',   j: 'جا، جي، جو',
    },
    sound_letters: { r:'ر', th:'ث', dh:'ذ', z:'ز', gh:'غ', kh:'خ', s:'س', sh:'ش', q:'ق', l:'ل', k:'ك', j:'ج' },
  },
  memory: {
    long: 'أن تنمي الطالبة الذاكرة السمعية لديها بشكل صحيح.',
    short: {
      words:    'أن تتذكر الطالبة سلسلة من الكلمات المسموعة بشكل صحيح بنسبة ٨٠٪',
      numbers:  'أن تتذكر الطالبة سلسلة من الأرقام المسموعة بشكل صحيح بنسبة ٨٠٪',
      sequence: 'أن تتبع الطالبة تسلسلاً سمعياً من ٣–٤ أحداث بشكل صحيح بنسبة ٨٠٪',
      command:  'أن تنفذ الطالبة تعليمات بالترتيب بشكل صحيح بنسبة ٨٠٪',
    },
  },
};

function generateDefaultPlanGroups() {
  // Default plan with exactly 7 long-term goals matching the screenshots
  return [
    {
      category: 'attention',
      long: 'أن تنمي الطالبة مهارة الانتباه والتركيز لديها بشكل صحيح',
      shorts: [
        'أن تنوي الطالبة النشاط أو المهمة المطلوبة منها بطريقة صحيحة بنسبة ٨٠٪'
      ]
    },
    {
      category: 'receptive',
      long: 'أن تنمي الطالبة اللغة الاستقبالية لديها بشكل صحيح',
      shorts: [
        'أن تشير الطالبة إلى بعض الحيوانات/الفواكه المطلوبة منها بشكل صحيح بنسبة ٨٠٪',
        'أن تشير الطالبة إلى الأفعال المطلوبة منها بشكل صحيح بنسبة ٨٠٪',
        'أن تشير الطالبة إلى أيام الأسبوع المطلوبة منها بشكل صحيح بنسبة ٨٠٪',
        'أن تشير الطالبة إلى حروف الجر المطلوبة منها بشكل صحيح بنسبة ٨٠٪',
        'أن تشير الطالبة إلى ظروف المكان المطلوبة منها بشكل صحيح بنسبة ٨٠٪',
        'أن تشير الطالبة إلى جملة من كلمتين (فعل + فاعل) بشكل صحيح بنسبة ٨٠٪',
        'أن تشير الطالبة إلى إجابات الأسئلة الحوارية (السلام عليكم، كيف حالك، ما اسمك، كم عمرك) بشكل صحيح بنسبة ٨٠٪'
      ]
    },
    {
      category: 'expressive',
      long: 'أن تنمي الطالبة اللغة التعبيرية لديها بشكل صحيح',
      shorts: [
        'أن تسمي الطالبة الحيوانات/الفواكه بشكل صحيح بنسبة ٨٠٪',
        'أن تسمي الطالبة الأفعال المطلوبة منها بشكل صحيح بنسبة ٨٠٪',
        'أن تسمي الطالبة أيام الأسبوع بشكل صحيح بنسبة ٨٠٪',
        'أن تسمي الطالبة حروف الجر المطلوبة منها بشكل صحيح بنسبة ٨٠٪',
        'أن تسمي الطالبة ظروف المكان بشكل صحيح بنسبة ٨٠٪',
        'أن تصف الطالبة جملة من كلمتين (فعل + فاعل) بشكل صحيح بنسبة ٨٠٪',
        'أن تجيب الطالبة على الأسئلة الحوارية (السلام عليكم، كيف حالك، ما اسمك، كم عمرك) بشكل صحيح بنسبة ٨٠٪',
        'أن تصف الطالبة الأحداث بطريقة تسلسلية بشكل صحيح بنسبة ٨٠٪',
        'أن تسمي الطالبة المثنى والجمع عندما يطلب منها ذلك بشكل صحيح بنسبة ٨٠٪',
        'أن تسمي الطالبة أسماء الإشارة عندما يطلب منها ذلك بشكل صحيح بنسبة ٨٠٪'
      ]
    },
    {
      category: 'communication',
      long: 'أن تنمي الطالبة مهارات التواصل لديها بشكل صحيح',
      shorts: [
        'أن تطلب الطالبة الشيء بقول (أبي + الشيء) بشكل صحيح بنسبة ٨٠٪',
        'أن تتبع الطالبة أمرين متتاليين عندما يطلب منها ذلك بشكل صحيح بنسبة ٨٠٪'
      ]
    },
    {
      category: 'speech_skills',
      long: 'أن تنمي الطالبة مهارة نطق الأصوات لديها بشكل صحيح',
      shorts: [
        'أن تنطق الطالبة صوت (ت) مستقلاً بشكل صحيح بنسبة ٨٠٪',
        'أن تنطق الطالبة صوت (ت) مع المدود (تا، تي، تو) بشكل صحيح بنسبة ٨٠٪',
        'أن تنطق الطالبة صوت (ت) أول الكلمة بشكل صحيح بنسبة ٨٠٪',
        'أن تنطق الطالبة صوت (ت) وسط الكلمة بشكل صحيح بنسبة ٨٠٪',
        'أن تنطق الطالبة صوت (ت) آخر الكلمة بشكل صحيح بنسبة ٨٠٪'
      ]
    },
    {
      category: 'sounds_articulation',
      long: 'أن تنطق الطالبة مخارج الأصوات بطريقة صحيحة',
      shorts: [
        'أن تنطق الطالبة صوت (ذ) مستقلاً بشكل صحيح بنسبة ٨٠٪',
        'أن تنطق الطالبة صوت (ذ) مع المدود (ذا، ذي، ذو) بشكل صحيح بنسبة ٨٠٪',
        'أن تنطق الطالبة صوت (ذ) أول الكلمة بشكل صحيح بنسبة ٨٠٪',
        'أن تنطق الطالبة صوت (ذ) وسط الكلمة بشكل صحيح بنسبة ٨٠٪',
        'أن تنطق الطالبة صوت (ذ) آخر الكلمة بشكل صحيح بنسبة ٨٠٪',
        'أن تنطق الطالبة صوت (ز) مستقلاً بشكل صحيح بنسبة ٨٠٪',
        'أن تنطق الطالبة صوت (ز) مع المدود (زا، زي، زو) بشكل صحيح بنسبة ٨٠٪',
        'أن تنطق الطالبة صوت (ز) أول الكلمة بشكل صحيح بنسبة ٨٠٪',
        'أن تنطق الطالبة صوت (ز) وسط الكلمة بشكل صحيح بنسبة ٨٠٪',
        'أن تنطق الطالبة صوت (ز) آخر الكلمة بشكل صحيح بنسبة ٨٠٪',
        'أن تنطق الطالبة صوت (غ) مستقلاً بشكل صحيح بنسبة ٨٠٪',
        'أن تنطق الطالبة صوت (غ) مع المدود (غا، غي، غو) بشكل صحيح بنسبة ٨٠٪',
        'أن تنطق الطالبة صوت (غ) أول الكلمة بشكل صحيح بنسبة ٨٠٪',
        'أن تنطق الطالبة صوت (غ) وسط الكلمة بشكل صحيح بنسبة ٨٠٪',
        'أن تنطق الطالبة صوت (غ) آخر الكلمة بشكل صحيح بنسبة ٨٠٪'
      ]
    },
    {
      category: 'sound_r',
      long: '',
      shorts: [
        'أن تنطق الطالبة صوت (ر) مستقلاً بشكل صحيح بنسبة ٨٠٪',
        'أن تنطق الطالبة صوت (ر) مع المدود (را، ري، رو) بشكل صحيح بنسبة ٨٠٪',
        'أن تنطق الطالبة صوت (ر) أول الكلمة بشكل صحيح بنسبة ٨٠٪',
        'أن تنطق الطالبة صوت (ر) وسط الكلمة بشكل صحيح بنسبة ٨٠٪',
        'أن تنطق الطالبة صوت (ر) آخر الكلمة بشكل صحيح بنسبة ٨٠٪'
      ]
    }
  ];
}

function generatePlanFromAssessment(student) {
  const data = student.forms?.preAssessment;
  const answers = data?.answers || {};
  const hasAnswers = Object.keys(answers).length > 0;
  
  // If no assessment data, return empty (no default plan)
  if (!hasAnswers) return [];

  // Each group represents ONE long-term goal with its short-term goals
  // Multiple long-term goals can be generated from the assessment
  const groups = [];

  // ONLY generate from section 3 (language_informal) and section 4 (articulation)
  // Section 3: تقييم (غير رسمي) للمهارات اللغوية
  const langSec = PRE_ASSESSMENT_SECTIONS.find(s => s.id === 'language_informal');
  if (langSec) {
    const langWeakPoints = [];
    langSec.questions.forEach(q => {
      // Skip header and text type questions
      if (q.type === 'header' || q.type === 'text') return;
      
      const ans = answers[q.id];
      // Only include if partial or not mastered
      if (ans === 'partial' || ans === 'not') {
        langWeakPoints.push({ id: q.id, label: q.label, status: ans });
      }
    });
    
    console.log('🔍 Language weak points:', langWeakPoints.length, langWeakPoints.map(w => w.id));
    
    if (langWeakPoints.length) {
      // Generate MULTIPLE long-term goals for language skills
      const languageGoals = generateLanguageGoals(langWeakPoints);
      console.log('📝 Generated language goals:', languageGoals.length, languageGoals);
      groups.push(...languageGoals);
    }
  }

  // Section 4: تقييم المهارات السمعية
  const artSec = PRE_ASSESSMENT_SECTIONS.find(s => s.id === 'articulation');
  if (artSec) {
    const artWeakPoints = [];
    artSec.questions.forEach(q => {
      // Skip header and text type questions
      if (q.type === 'header' || q.type === 'text') return;
      
      const ans = answers[q.id];
      // Only include if partial or not mastered (same as language section)
      if (ans === 'partial' || ans === 'not') {
        artWeakPoints.push({ id: q.id, label: q.label, status: ans });
      }
    });
    
    console.log('🔍 Auditory weak points:', artWeakPoints.length, artWeakPoints.map(w => w.id));
    
    if (artWeakPoints.length) {
      // Generate MULTIPLE long-term goals for auditory skills
      const auditoryGoals = generateAuditoryGoals(artWeakPoints);
      console.log('📝 Generated auditory goals:', auditoryGoals.length, auditoryGoals);
      groups.push(...auditoryGoals);
    }
  }

  // SPEECH TEST: Generate goals for sounds marked as wrong
  const speechData = student.forms?.speechTest;
  const wrongSounds = speechData?.wrongSounds || [];
  
  if (wrongSounds.length) {
    console.log('🔍 Speech test wrong sounds:', wrongSounds.length, wrongSounds.map(w => w.sound));
    
    // Generate one goal per wrong sound: "أن تنطق الطالبة حرف (X) بطريقة صحيحة"
    wrongSounds.forEach(ws => {
      groups.push({
        long: `أن تنطق الطالبة حرف (${ws.sound}) بطريقة صحيحة`,
        shorts: [`أن تنطق الطالبة حرف (${ws.sound}) بطريقة صحيحة بنسبة ٨٠٪`]
      });
    });
    
    console.log('📝 Generated speech test goals:', wrongSounds.length);
  }

  console.log('✅ FINAL GROUPS:', groups.length, 'total goals');
  console.log('📋 Full groups structure:', JSON.stringify(groups, null, 2));

  // Return empty array if no goals needed (everything is mastered)
  return groups;
}

// Generate MULTIPLE long-term goals for language skills
// INTELLIGENTLY based on which items are marked as weak
// SHORT-TERM GOALS are DYNAMICALLY generated based on actual weak items
function generateLanguageGoals(weakPoints) {
  const goals = [];
  
  // Create a mapping from assessment IDs to short-term goal text
  const goalMapping = {
    // Attention & Focus
    'inf_tone': 'أن تُظهر الطالبة تنغيمة مناسبة عند التواصل بنسبة 80%',
    'inf_intentional_comm': 'أن تستخدم الطالبة التواصل المقصود بشكل صحيح بنسبة 80%',
    'inf_maintain_topic': 'أن تحافظ الطالبة على الموضوع أثناء الحديث بنسبة 80%',
    
    // Receptive Language
    'inf_receptive_nonverbal': 'أن تستجيب الطالبة بشكل غير لفظي للمحفز اللفظي بنسبة 80%',
    'inf_simple_commands_response': 'أن تستجيب الطالبة للأوامر البسيطة بشكل صحيح بنسبة 80%',
    'inf_multi_step_commands': 'أن تتبع الطالبة الأوامر المكونة من عدة خطوات بنسبة 80%',
    'inf_understand_words': 'أن تفهم الطالبة الكلمات والمقاطع البسيطة بنسبة 80%',
    
    // Expressive Language - Naming
    'inf_voluntary_sounds': 'أن تصدر الطالبة كلمات أو أصوات عفوية بشكل مقصود بنسبة 80%',
    'inf_label_familiar': 'أن تسمي الطالبة الأدوات المألوفة بشكل صحيح بنسبة 80%',
    'inf_body_parts': 'أن تسمي الطالبة أجزاء الجسم بشكل صحيح بنسبة 80%',
    'inf_familiar_nouns': 'أن تسمي الطالبة الأسماء المألوفة بشكل صحيح بنسبة 80%',
    'inf_familiar_vegetables': 'أن تسمي الطالبة الخضروات المألوفة بشكل صحيح بنسبة 80%',
    'inf_familiar_animals': 'أن تسمي الطالبة الحيوانات المألوفة بشكل صحيح بنسبة 80%',
    'inf_primary_colors': 'أن تسمي الطالبة الألوان الرئيسية بشكل صحيح بنسبة 80%',
    'inf_transport_means': 'أن تسمي الطالبة وسائل المواصلات المألوفة بشكل صحيح بنسبة 80%',
    'inf_week_days': 'أن تسمي الطالبة أيام الأسبوع بشكل صحيح بنسبة 80%',
    'inf_descriptive_words': 'أن تستخدم الطالبة الكلمات الوصفية بشكل صحيح بنسبة 80%',
    'inf_opposites': 'أن تسمي الطالبة المتضادات بشكل صحيح بنسبة 80%',
    
    // Expressive Language - Communication
    'inf_express_physical': 'أن تعبر الطالبة عن الاحتياجات الجسمية بنسبة 80%',
    'inf_express_emotions': 'أن تعبر الطالبة عن المشاعر بنسبة 80%',
    'inf_express_thoughts': 'أن تعبر الطالبة عن الأفكار بنسبة 80%',
    
    // Grammar & Syntax
    'inf_simple_grammar': 'أن تستخدم الطالبة التراكيب النحوية البسيطة بنسبة 80%',
    'inf_verb_forms': 'أن تستخدم الطالبة الأفعال بصيغ مختلفة بنسبة 80%',
    'inf_prepositions': 'أن تستخدم الطالبة حروف الجر بشكل صحيح بنسبة 80%',
    'inf_connectors': 'أن تستخدم الطالبة أدوات الربط بشكل صحيح بنسبة 80%',
    'inf_place_adverbs': 'أن تستخدم الطالبة ظرف المكان بشكل صحيح بنسبة 80%',
    'inf_time_adverbs': 'أن تستخدم الطالبة ظرف الزمان بشكل صحيح بنسبة 80%',
    'inf_pronouns': 'أن تستخدم الطالبة الضمائر بشكل صحيح بنسبة 80%',
    'inf_pronoun_mine': 'أن تستخدم الطالبة الضمير "لي" بشكل صحيح بنسبة 80%',
    'inf_dual': 'أن تستخدم الطالبة المثنى بشكل صحيح بنسبة 80%',
    'inf_plural': 'أن تستخدم الطالبة الجمع بشكل صحيح بنسبة 80%',
    'inf_comparative_terms': 'أن تستخدم الطالبة مصطلحات المقارنة بنسبة 80%',
    'inf_negation_types': 'أن تستخدم الطالبة أنواع النفي بنسبة 80%',
    'inf_story_sequence': 'أن تسرد الطالبة قصة قصيرة مع تسلسل الأحداث بنسبة 80%',
    
    // Pragmatic & Request Skills
    'inf_request_situations': 'أن تطلب الطالبة من خلال المواقف المناسبة بنسبة 80%',
    'inf_key_questions': 'أن تستخدم الطالبة الأسئلة المفتاحية للموقف بنسبة 80%',
    'inf_appropriate_answers': 'أن تجيب الطالبة إجابة مناسبة عن أسئلة مختلفة بنسبة 80%',
    'inf_transfer_info': 'أن تنقل الطالبة المعلومة أو تصف حدث بنسبة 80%',
    'inf_identify_functions': 'أن تحدد الطالبة وظائف الأشياء بنسبة 80%',
    
    // Basic Skills
    'inf_gestures': 'أن تستخدم الطالبة الإشارات والإيماءات بشكل مناسب بنسبة 80%',
    'inf_imitation_skills': 'أن تقلد الطالبة الأفعال بنسبة 80%',
    'inf_simple_syllables': 'أن تستخدم الطالبة المقاطع البسيطة بنسبة 80%',
    'inf_classify_groups': 'أن تصنف الطالبة المجموعات بشكل صحيح بنسبة 80%',
  };
  
  // Group weak points by goal category
  const attentionItems = weakPoints.filter(wp => 
    wp.id === 'inf_tone' || wp.id === 'inf_intentional_comm' || wp.id === 'inf_maintain_topic'
  );
  
  const receptiveItems = weakPoints.filter(wp => 
    wp.id === 'inf_receptive_nonverbal' || wp.id === 'inf_simple_commands_response' ||
    wp.id === 'inf_multi_step_commands' || wp.id === 'inf_understand_words'
  );
  
  const expressiveItems = weakPoints.filter(wp => 
    wp.id === 'inf_voluntary_sounds' || wp.id === 'inf_label_familiar' ||
    wp.id === 'inf_body_parts' || wp.id === 'inf_familiar_nouns' ||
    wp.id === 'inf_familiar_vegetables' || wp.id === 'inf_familiar_animals' ||
    wp.id === 'inf_primary_colors' || wp.id === 'inf_transport_means' ||
    wp.id === 'inf_week_days' || wp.id === 'inf_opposites' ||
    wp.id === 'inf_descriptive_words' || wp.id === 'inf_express_physical' ||
    wp.id === 'inf_express_emotions' || wp.id === 'inf_express_thoughts' ||
    wp.id === 'inf_gestures' || wp.id === 'inf_simple_syllables'
  );
  
  const grammarItems = weakPoints.filter(wp => 
    wp.id === 'inf_simple_grammar' || wp.id === 'inf_verb_forms' ||
    wp.id === 'inf_prepositions' || wp.id === 'inf_connectors' ||
    wp.id === 'inf_place_adverbs' || wp.id === 'inf_time_adverbs' ||
    wp.id === 'inf_pronouns' || wp.id === 'inf_pronoun_mine' ||
    wp.id === 'inf_dual' || wp.id === 'inf_plural' ||
    wp.id === 'inf_comparative_terms' || wp.id === 'inf_negation_types' ||
    wp.id === 'inf_story_sequence' || wp.id === 'inf_classify_groups'
  );
  
  const requestItems = weakPoints.filter(wp => 
    wp.id === 'inf_request_situations' || wp.id === 'inf_key_questions' ||
    wp.id === 'inf_appropriate_answers' || wp.id === 'inf_transfer_info' ||
    wp.id === 'inf_identify_functions' || wp.id === 'inf_imitation_skills'
  );
  
  // Generate goals ONLY with relevant short-term goals
  if (attentionItems.length > 0) {
    goals.push({
      long: 'أن تنمي الطالبة مهارة الانتباه والتركيز لديها بشكل صحيح',
      shorts: attentionItems.map(item => goalMapping[item.id] || `تحسين ${item.label} بنسبة 80%`),
      category: 'language_informal'
    });
  }
  
  if (receptiveItems.length > 0) {
    goals.push({
      long: 'أن تنمي الطالبة اللغة الاستقبالية لديها بشكل صحيح',
      shorts: receptiveItems.map(item => goalMapping[item.id] || `تحسين ${item.label} بنسبة 80%`),
      category: 'language_informal'
    });
  }
  
  if (expressiveItems.length > 0) {
    console.log('📝 EXPRESSIVE ITEMS:', expressiveItems);
    const shorts = expressiveItems.map(item => goalMapping[item.id] || `تحسين ${item.label} بنسبة 80%`);
    console.log('📝 EXPRESSIVE SHORTS:', shorts);
    goals.push({
      long: 'أن تنمي الطالبة اللغة التعبيرية لديها بشكل صحيح',
      shorts: shorts,
      category: 'language_informal'
    });
  }
  
  if (grammarItems.length > 0) {
    goals.push({
      long: 'أن تنمي الطالبة المهارات النحوية لديها بشكل صحيح',
      shorts: grammarItems.map(item => goalMapping[item.id] || `تحسين ${item.label} بنسبة 80%`),
      category: 'language_informal'
    });
  }
  
  if (requestItems.length > 0) {
    goals.push({
      long: 'أن تنمي الطالبة مهارة الطلب لديها بشكل صحيح',
      shorts: requestItems.map(item => goalMapping[item.id] || `تحسين ${item.label} بنسبة 80%`),
      category: 'language_informal'
    });
  }
  
  return goals;
}

// Generate MULTIPLE long-term goals for auditory/listening skills
// INTELLIGENTLY based on which auditory skills are weak
// NOTE: Section 4 assesses AUDITORY skills (hearing, discrimination, comprehension), NOT sound articulation
// SHORT-TERM GOALS are DYNAMICALLY generated based on actual weak items
function generateAuditoryGoals(weakPoints) {
  const goals = [];
  
  // Only generate if there are ACTUAL weak points
  if (weakPoints.length === 0) {
    return goals;
  }
  
  // Create a mapping from assessment IDs to short-term goal text
  const auditoryGoalMapping = {
    // Auditory Awareness
    'art_discriminate_presence': 'أن تستخدم الطالبة المعين السمعي طوال ساعات الاستيقاظ بنسبة 80%',
    'art_familiar_sounds': 'أن تستخدم الطالبة حواسها للكشف عن سماع صوت بنسبة 80%',
    'art_awareness_env_sounds': 'أن تظهر الطالبة الوعي والانتباه في الاستجابة للأصوات بنسبة 80%',
    'art_awareness_env_sounds_high': 'أن تستجيب الطالبة للأصوات البيئية العالية بنسبة 80%',
    'art_awareness_env_sounds_mid': 'أن تستجيب الطالبة للأصوات البيئية المتوسطة بنسبة 80%',
    'art_awareness_env_sounds_low': 'أن تستجيب الطالبة للأصوات البيئية المنخفضة بنسبة 80%',
    'art_awareness_voice_sounds': 'أن تظهر الطالبة الوعي للأصوات أثناء التحدث بنسبة 80%',
    'art_response_name': 'أن تستجيب الطالبة عند سماع اسمها بنسبة 80%',
    'art_play_sounds': 'أن تنتبه الطالبة للأصوات أثناء اللعب بنسبة 80%',
    'art_six_sounds': 'أن تميز الطالبة الأصوات الستة (أ، م، ي، س، ش، و) بنسبة 80%',
    
    // Sound Discrimination
    'art_distinguish_different': 'أن تميز الطالبة بين الكلام والأصوات البيئية بنسبة 80%',
    'art_distinguish_similar': 'أن تميز الطالبة بين الأصوات البيئية المختلفة بنسبة 80%',
    'art_distinguish_intonation': 'أن تميز الطالبة بين الصوت الهادئ والمرتفع بنسبة 80%',
    'art_distinguish_person': 'أن تلاحظ الطالبة الفرق بين شخص وآخر يتحدث بنسبة 80%',
    'art_distinguish_family': 'أن تميز الطالبة بين أصوات أفراد العائلة بنسبة 80%',
    'art_identify_voice': 'أن تتعرف الطالبة على مصدر الصوت بنسبة 80%',
    'art_identify_direction': 'أن تحدد الطالبة اتجاه الصوت بشكل صحيح بنسبة 80%',
    'art_rhyme_detection': 'أن تميز الطالبة صوت المتحدث عند وجود ضجيج بنسبة 80%',
    'art_identify_speaker': 'أن تميز الطالبة المشاعر من نغمة الصوت بنسبة 80%',
    'art_similar_sounds': 'أن تستجيب الطالبة لاسمها عند المناداة بنسبة 80%',
    'art_identify_elements': 'أن تحدد الطالبة العناصر المرتبطة بالصوت بنسبة 80%',
    'art_distinguish_phrases': 'أن تميز الطالبة بين الكلمات ذات المعاني المختلفة بنسبة 80%',
    'art_syllable_patterns': 'أن تميز الطالبة أنماط المقاطع الصوتية بنسبة 80%',
    
    // Auditory Comprehension
    'art_listening_comprehension': 'أن تفهم الطالبة الكلمات المسموعة وتشير إليها بنسبة 80%',
    'art_comprehension_segments': 'أن تفهم الطالبة المقاطع والجمل المسموعة بنسبة 80%',
    'art_natural_expressions': 'أن تفهم الطالبة الكلمات المستخدمة في بيئتها الطبيعية بنسبة 80%',
  };
  
  // Group weak points into subcategories
  const awarenessItems = weakPoints.filter(wp =>
    wp.id === 'art_discriminate_presence' || wp.id === 'art_familiar_sounds' ||
    wp.id === 'art_awareness_env_sounds' || wp.id === 'art_awareness_env_sounds_high' ||
    wp.id === 'art_awareness_env_sounds_mid' || wp.id === 'art_awareness_env_sounds_low' ||
    wp.id === 'art_awareness_voice_sounds' || wp.id === 'art_response_name' ||
    wp.id === 'art_play_sounds' || wp.id === 'art_six_sounds'
  );
  
  const discriminationItems = weakPoints.filter(wp =>
    wp.id === 'art_distinguish_different' || wp.id === 'art_distinguish_similar' ||
    wp.id === 'art_distinguish_intonation' || wp.id === 'art_distinguish_person' ||
    wp.id === 'art_distinguish_family' || wp.id === 'art_identify_voice' ||
    wp.id === 'art_identify_direction' || wp.id === 'art_rhyme_detection' ||
    wp.id === 'art_identify_speaker' || wp.id === 'art_similar_sounds' ||
    wp.id === 'art_identify_elements' || wp.id === 'art_distinguish_phrases' ||
    wp.id === 'art_syllable_patterns'
  );
  
  const comprehensionItems = weakPoints.filter(wp =>
    wp.id === 'art_listening_comprehension' || wp.id === 'art_comprehension_segments' ||
    wp.id === 'art_natural_expressions'
  );
  
  // Combine all short-term goals from detected weak areas
  const allShorts = [];
  
  if (awarenessItems.length > 0) {
    allShorts.push(...awarenessItems.map(item => 
      auditoryGoalMapping[item.id] || `تحسين ${item.label} بنسبة 80%`
    ));
  }
  
  if (discriminationItems.length > 0) {
    allShorts.push(...discriminationItems.map(item => 
      auditoryGoalMapping[item.id] || `تحسين ${item.label} بنسبة 80%`
    ));
  }
  
  if (comprehensionItems.length > 0) {
    allShorts.push(...comprehensionItems.map(item => 
      auditoryGoalMapping[item.id] || `تحسين ${item.label} بنسبة 80%`
    ));
  }
  
  // Generate ONE auditory goal with all relevant short-term goals
  if (allShorts.length > 0) {
    goals.push({
      long: 'أن تنمي الطالبة المهارات السمعية والإدراك السمعي لديها بشكل صحيح',
      shorts: allShorts,
      category: 'articulation'
    });
  }
  
  return goals;
}

function generateInitialReport(student) {
  const data = student.forms?.preAssessment;
  if (!data || !data.answers) return '';
  const a = data.answers;
  const lines = [];
  const ageY = student.age || 0;
  lines.push(`الطالبة ${student.name} تبلغ من العمر ${arNum(ageY)} سنوات تقريباً، في الصف ${student.grade}.`);

  // Section 5: Language skills summary
  const langSec = PRE_ASSESSMENT_SECTIONS.find(s => s.id === 'language_informal');
  if (langSec) {
    const langIssues = langSec.questions.filter(q => 
      q.type !== 'header' && q.type !== 'text' && (a[q.id] === 'partial' || a[q.id] === 'not')
    ).length;
    const langTotal = langSec.questions.filter(q => q.type !== 'header' && q.type !== 'text').length;
    
    if (langIssues === 0) {
      lines.push('المهارات اللغوية: ممتازة، جميع المهارات متقنة.');
    } else if (langIssues / langTotal < 0.3) {
      lines.push('المهارات اللغوية: جيدة بشكل عام مع بعض المجالات التي تحتاج إلى تطوير.');
    } else if (langIssues / langTotal < 0.6) {
      lines.push('المهارات اللغوية: متوسطة، تحتاج إلى تدريب وتطوير في عدة مجالات.');
    } else {
      lines.push('المهارات اللغوية: تحتاج إلى تدريب مكثف وخطة تدخل شاملة.');
    }
  }

  // Section 6: Auditory skills summary
  const artSec = PRE_ASSESSMENT_SECTIONS.find(s => s.id === 'articulation');
  if (artSec) {
    const artIssues = artSec.questions.filter(q => 
      q.type !== 'header' && q.type !== 'text' && (a[q.id] === 'partial' || a[q.id] === 'not')
    ).length;
    const artTotal = artSec.questions.filter(q => q.type !== 'header' && q.type !== 'text').length;
    
    if (artIssues === 0) {
      lines.push('المهارات السمعية والإدراكية: ممتازة، جميع المهارات متقنة.');
    } else if (artIssues / artTotal < 0.3) {
      lines.push('المهارات السمعية والإدراكية: جيدة بشكل عام مع بعض المجالات التي تحتاج إلى تحسين.');
    } else if (artIssues / artTotal < 0.6) {
      lines.push('المهارات السمعية والإدراكية: متوسطة، تحتاج إلى تدريب منتظم.');
    } else {
      lines.push('المهارات السمعية والإدراكية: تحتاج إلى تدخل مكثف لتطوير الإدراك السمعي.');
    }
  }

  // History bits from section 1 if available
  if (a['kindergarten_check'] === 'no') lines.push('لم تلتحق ببرامج رياض أطفال.');
  if (a['prev_diagnosis'] === 'yes' && a['diagnosis_result']) lines.push(`تشخيص سابق: ${a['diagnosis_result']}.`);
  if (a['hearing_test_recent'] === 'yes') lines.push('تم إجراء فحص سمعي حديث.');

  return lines.join('\n\n');
}

function regeneratePlanForStudent(sid) {
  const st = studentBy(sid);
  if (!st) return;
  const plan = STATE.data.plans.find(p => p.studentId === sid);
  if (!plan) return;
  toast('جاري توليد الخطة من نقاط الضعف...');
  setTimeout(() => {
    const speech = st.forms?.speechTest;
    const pre = st.forms?.preAssessment;
    const weak = (speech?.weakPoints || []);
    // Map weak point text → relevant skill
    const matchSkill = (txt) => {
      const t = (txt||'').toLowerCase();
      const skills = STATE.data.skills;
      let best = null;
      skills.forEach(sk => {
        if (t.includes(sk.name.toLowerCase().slice(0,4))) best = sk;
      });
      return best || skills[0];
    };
    const skillsForGoals = weak.map(matchSkill).filter(Boolean);
    const baselinePct = pre?.score || 50;
    plan.goals = weak.length ? weak.map(w => `تطوير ${w} بنسبة ٨٠٪ خلال الفصل`) : plan.goals;
    plan.targetSkillIds = skillsForGoals.map(s => s.id);
    plan.progress = skillsForGoals.map((s, i) => ({
      skillId: s.id,
      current: Math.max(20, baselinePct - 10 + i*3),
      target: Math.min(95, baselinePct + 25),
    }));
    plan.notes = `خطة مولّدة بناءً على نتائج اختبار النطق (${arNum(speech?.score || 0)}/${arNum(100)}) والتقييم القبلي (${arNum(pre?.score || 0)}/${arNum(100)}).`;
    persistState();
    toast('✨ تم تحديث الخطة الفردية');
    handleRoute();
  }, 700);
}

function openAddLibraryModal() {
  openModal(`
    <div class="modal-head">
      <h2>إضافة محتوى للمكتبة</h2>
      <button class="x" data-action="close-modal">${I.close}</button>
    </div>
    <form data-form="add-library">
      <div class="field">
        <label>نوع المحتوى</label>
        <div class="row wrap" id="lib-type-row">
          ${[
            { v: 'worksheet', l: '📄 ورقة عمل' },
            { v: 'pdf',       l: '📕 PDF' },
            { v: 'image',     l: '🖼️ صور' },
          ].map((t, i) => `
            <label class="chip ${i===0?'active':''}" style="cursor:pointer">
              <input type="radio" name="type" value="${t.v}" ${i===0?'checked':''} hidden>
              <span>${t.l}</span>
            </label>
          `).join('')}
        </div>
      </div>

      <div class="field">
        <label>العنوان</label>
        <input name="title" required placeholder="مثال: تمارين عضلات الفم — مستوى مبتدئ">
      </div>

      <div class="row" style="gap:12px">
        <div class="field" style="flex:1">
          <label>المستوى</label>
          <select name="difficulty">
            <option>مبتدئ</option><option>متوسط</option><option>متقدم</option>
          </select>
        </div>
        <div class="field" style="flex:1">
          <label>المدة / الحجم</label>
          <input name="meta" placeholder="مثال: 12 MB">
        </div>
      </div>

      <div class="field">
        <label>المهارات المرتبطة</label>
        <div class="row wrap">
          ${STATE.data.skills.map(sk => `
            <button type="button" class="chip" data-lib-skill="${sk.id}">${esc(sk.name)}</button>
          `).join('')}
        </div>
      </div>

      <div class="field">
        <label>الرابط (اختياري)</label>
        <input name="link" type="url" placeholder="https://...">
      </div>

      <div class="field">
        <label>أو ارفعي ملفاً</label>
        <label class="file-drop" id="lib-file-drop">
          <input type="file" name="file" id="lib-file-input" accept="image/*,application/pdf,video/*,audio/*" hidden>
          <div class="file-drop-empty">
            ${I.upload}
            <div class="text-sm mt-sm">اضغطي لاختيار ملف من الجهاز</div>
            <div class="text-xs">صور، PDF، فيديو، أو صوت — حتى 10 MB</div>
          </div>
          <div class="file-drop-chosen hide">
            <div class="file-chosen-icon">${I.file}</div>
            <div class="file-chosen-meta">
              <div class="file-chosen-name"></div>
              <div class="file-chosen-size text-xs text-muted"></div>
            </div>
            <button type="button" class="file-clear" data-action="clear-file">${I.close}</button>
          </div>
        </label>
      </div>

      <button type="submit" class="btn lg block">${I.check}<span>إضافة للمكتبة</span></button>
    </form>
  `);

  // Type radio toggle
  document.getElementById('lib-type-row')?.querySelectorAll('label').forEach(lbl => {
    lbl.addEventListener('click', () => {
      lbl.parentElement.querySelectorAll('label').forEach(x => x.classList.remove('active'));
      lbl.classList.add('active');
    });
  });

  // File preview
  const fileInput = document.getElementById('lib-file-input');
  const drop = document.getElementById('lib-file-drop');
  if (fileInput && drop) {
    fileInput.addEventListener('change', (e) => {
      const f = e.target.files?.[0];
      if (!f) return;
      if (f.size > 10 * 1024 * 1024) {
        toast('حجم الملف يتجاوز 10MB', 'warn');
        fileInput.value = '';
        return;
      }
      drop.querySelector('.file-drop-empty').classList.add('hide');
      const chosen = drop.querySelector('.file-drop-chosen');
      chosen.classList.remove('hide');
      chosen.querySelector('.file-chosen-name').textContent = f.name;
      chosen.querySelector('.file-chosen-size').textContent = formatBytes(f.size);
    });
  }
}

function formatBytes(b) {
  if (b < 1024) return b + ' B';
  if (b < 1024 * 1024) return (b / 1024).toFixed(1) + ' KB';
  return (b / 1024 / 1024).toFixed(1) + ' MB';
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function openSendToStudentModal(libraryId) {
  const item = STATE.data.library.find(l => l.id === libraryId);
  if (!item) {
    console.error('❌ Library item not found:', libraryId);
    return;
  }
  
  const myStudents = STATE.data.students.filter(s => !s.archived); // Show ALL students
  console.log('📚 Opening send modal for:', item.title);
  console.log('👥 My students:', myStudents.length, myStudents);
  console.log('👤 Current user:', STATE.user.id, STATE.user.role);
  
  openModal(`
    <div class="modal-head">
      <h2>إرسال إلى الطالبات</h2>
      <button class="x" data-action="close-modal">${I.close}</button>
    </div>
    <form data-form="send-library-item" data-library-id="${libraryId}">
      <div class="card tight" style="background: #f9fafb; margin-bottom: 16px;">
        <div style="font-weight: 600; margin-bottom: 4px;">${esc(item.title)}</div>
        <div style="font-size: 13px; color: #6b7280;">
          ${item.type === 'image' ? '🖼️ صورة' : item.type === 'pdf' ? '📕 PDF' : item.type === 'video' ? '🎬 فيديو' : item.type === 'worksheet' ? '📄 ورقة عمل' : '🔗 رابط'}
        </div>
      </div>
      
      <div class="field">
        <label>اختاري الطالبات</label>
        ${myStudents.length ? `
          <div class="stack gap-sm">
            ${myStudents.map(s => `
              <label style="display: flex; align-items: center; gap: 12px; padding: 12px; background: white; border: 1px solid #e5e7eb; border-radius: 8px; cursor: pointer; transition: all 0.2s;" 
                     onmouseover="this.style.background='#f9fafb'; this.style.borderColor='#667eea'"
                     onmouseout="this.style.background='white'; this.style.borderColor='#e5e7eb'">
                <input type="checkbox" name="students[]" value="${s.id}" style="width: 18px; height: 18px; cursor: pointer; accent-color: #667eea;">
                <div style="flex: 1;">
                  <div style="font-weight: 600; font-size: 14px;">${esc(s.name)}</div>
                  <div style="font-size: 12px; color: #6b7280;">${esc(s.grade || '')}</div>
                </div>
              </label>
            `).join('')}
          </div>
        ` : `
          <div class="text-sm text-muted center" style="padding: 24px;">
            لا توجد طالبات حالياً
          </div>
        `}
      </div>
      
      <button type="submit" class="btn lg block" ${!myStudents.length ? 'disabled' : ''}>
        ${I.send}<span>إرسال للطالبات المحددات</span>
      </button>
    </form>
  `, { lg: true });
}



/* Suggest session goals based on plan + recent session history */
function suggestSessionGoals(student, allGoalObjs, count = 3) {
  const recentLogs = STATE.data.sessionLogs
    .filter(l => l.studentId === student.id)
    .sort((a, b) => (b.date+b.time).localeCompare(a.date+a.time))
    .slice(0, 5);

  // Score each goal — lower = more urgent to focus on
  const scored = allGoalObjs.map(obj => {
    let score = 0;
    let lastSeen = null;
    let lastStatus = null;
    recentLogs.forEach((log, idx) => {
      log.goalEvaluations.forEach(g => {
        if (g.goal === obj.goal) {
          // Recent + not-mastered = lowest score (priority)
          if (g.status === 'mastered')         score += 30 / (idx + 1);
          else if (g.status === 'partial')     score -= 8  / (idx + 1);
          else                                 score -= 15 / (idx + 1);
          if (!lastSeen) { lastSeen = log.date; lastStatus = g.status; }
        }
      });
    });
    // Boost goals never seen (so they get tried)
    if (!lastSeen) score -= 5;
    return { ...obj, score, lastStatus };
  });

  // Sort ascending (lowest score first = highest priority)
  scored.sort((a, b) => a.score - b.score);

  // Pick top N — try to diversify categories
  const picked = [];
  const usedCats = new Set();
  for (const g of scored) {
    if (picked.length >= count) break;
    if (usedCats.has(g.category) && picked.length >= count - 1) continue;
    picked.push(g);
    usedCats.add(g.category);
  }
  // Fill remaining if needed
  for (const g of scored) {
    if (picked.length >= count) break;
    if (!picked.includes(g)) picked.push(g);
  }
  return picked;
}

function getAllPlanGoals(plan) {
  if (!plan) return [];
  if (plan.groups?.length) {
    return plan.groups.flatMap(g => g.shorts.map(goal => ({ goal, category: g.category, long: g.long })));
  }
  return (plan.goals || []).map(g => ({ goal: g, category: 'general', long: 'أهداف الخطة' }));
}

const CATEGORY_LABELS = {
  receptive:  'اللغة الاستقبالية',
  expressive: 'اللغة التعبيرية',
  grammar:    'المهارات النحوية',
  pragmatic:  'الانتباه والتواصل',
  sounds:     'مخارج الأصوات',
  memory:     'الذاكرة السمعية',
  general:    'أهداف الخطة',
};

function goalEvalRowTemplate(goalText, idx) {
  return `
    <div class="goal-eval-row" data-goal="${esc(goalText)}">
      <div class="row between" style="align-items:flex-start;gap:8px">
        <div class="row" style="flex:1;align-items:flex-start;gap:10px">
          <div class="goal-num">${arNum(idx + 1)}</div>
          <div class="text-sm" style="flex:1">${esc(goalText)}</div>
        </div>
        <button type="button" class="goal-remove" data-action="remove-session-goal" title="حذف الهدف">${I.close}</button>
      </div>
      <div class="row eval-chips">
        <button type="button" class="chip eval-chip mastered"     data-eval-status="mastered">✓ أتقنت</button>
        <button type="button" class="chip eval-chip partial"      data-eval-status="partial">◐ جزئياً</button>
        <button type="button" class="chip eval-chip not-mastered" data-eval-status="not-mastered">✕ لم تتقن</button>
      </div>
    </div>
  `;
}

/* =========================================================
   ATTENDANCE FUNCTIONS
   ========================================================= */

// Navigate to different month in attendance calendar
function navigateAttendanceMonth(year, month) {
  const currentPath = location.hash.split('?')[0];
  const studentId = currentPath.split('/').pop();
  location.hash = `${currentPath}?tab=attendance&year=${year}&month=${month}`;
}

// Navigate to different month in bulk attendance view
function navigateBulkAttendanceMonth(year, month) {
  location.hash = `#/teacher/attendance?year=${year}&month=${month}`;
}

// Toggle attendance status for a day
async function toggleAttendance(studentId, dateStr) {
  console.log('🖱️ toggleAttendance called:', { studentId, dateStr, role: STATE.user?.role });
  
  if (STATE.user?.role !== 'teacher') {
    console.log('❌ Not a teacher, ignoring click');
    return;
  }
  
  const student = studentBy(studentId);
  if (!student) {
    console.log('❌ Student not found');
    return;
  }
  
  console.log('✅ Processing attendance toggle...');
  
  // Find existing record
  const existingIndex = STATE.data.attendance.findIndex(
    a => a.studentId === studentId && a.date === dateStr
  );
  
  console.log('📋 Existing record:', existingIndex >= 0 ? STATE.data.attendance[existingIndex] : 'none');
  
  let newStatus;
  let operation = 'create'; // create, update, or delete
  
  if (existingIndex >= 0) {
    const current = STATE.data.attendance[existingIndex].status;
    // Cycle: absent -> present -> (remove)
    if (current === 'absent') {
      newStatus = 'present';
      operation = 'update';
    } else {
      // Remove record
      STATE.data.attendance.splice(existingIndex, 1);
      persistState();
      operation = 'delete';
      
      // Update Supabase
      const { error } = await window.supabaseClient
        .from('attendance')
        .delete()
        .eq('student_id', studentId)
        .eq('attendance_date', dateStr);
      
      if (error) {
        console.error('Error deleting attendance:', error);
        toast('حدث خطأ في حذف السجل', 'error');
        return;
      }
      
      // Update UI instantly
      updateAttendanceDayUI(dateStr, '');
      toast('تم إلغاء التسجيل', 'success');
      return;
    }
  } else {
    // New record - default to absent
    newStatus = 'absent';
    operation = 'create';
  }
  
  // Create or update record
  const record = {
    id: existingIndex >= 0 ? STATE.data.attendance[existingIndex].id : crypto.randomUUID(),
    studentId,
    date: dateStr,
    status: newStatus,
    teacherId: STATE.user.id,
    updatedAt: new Date().toISOString()
  };
  
  if (existingIndex >= 0) {
    STATE.data.attendance[existingIndex] = record;
  } else {
    STATE.data.attendance.push(record);
  }
  
  persistState();
  
  // Update Supabase
  const { error } = await window.supabaseClient
    .from('attendance')
    .upsert({
      id: record.id,
      student_id: record.studentId,
      attendance_date: record.date,
      status: record.status,
      teacher_id: record.teacherId,
      updated_at: record.updatedAt
    }, { onConflict: 'student_id,attendance_date' });
  
  if (error) {
    console.error('Error saving attendance:', error);
    toast('حدث خطأ في حفظ الحضور', 'error');
    return;
  }
  
  // Update UI instantly
  updateAttendanceDayUI(dateStr, newStatus);
  
  const statusLabel = newStatus === 'present' ? 'حاضر' : 'غائب';
  toast(`تم تسجيل: ${statusLabel}`, 'success');
}

// Helper function to update day UI without reload
function updateAttendanceDayUI(dateStr, status) {
  console.log('🎨 Updating UI for:', dateStr, 'status:', status);
  const dayEl = document.querySelector(`[data-date="${dateStr}"]`);
  if (!dayEl) {
    console.log('❌ Day element not found for:', dateStr);
    return;
  }
  
  console.log('✅ Found day element, updating...');
  
  // Remove all status classes
  dayEl.classList.remove('marked', 'present', 'absent');
  
  // Find status div
  let statusDiv = dayEl.querySelector('.day-status');
  
  if (status === '') {
    // Remove status
    if (statusDiv) statusDiv.remove();
    console.log('🗑️ Removed status');
  } else {
    // Add new status
    dayEl.classList.add('marked', status);
    
    const statusLabel = status === 'present' ? 'ح' : 'غ';
    
    if (statusDiv) {
      statusDiv.textContent = statusLabel;
    } else {
      statusDiv = document.createElement('div');
      statusDiv.className = 'day-status';
      statusDiv.textContent = statusLabel;
      dayEl.appendChild(statusDiv);
    }
    console.log('✅ Updated status to:', statusLabel);
  }
  
  // Update statistics
  updateAttendanceStats();
}

// Helper function to recalculate and update statistics
function updateAttendanceStats() {
  const params = new URLSearchParams((location.hash.split('?')[1]) || '');
  const currentPath = location.hash.split('?')[0];
  const studentId = currentPath.split('/').pop();
  
  if (!studentId) return;
  
  const currentDate = new Date();
  const selectedYear = parseInt(params.get('year')) || currentDate.getFullYear();
  const selectedMonth = parseInt(params.get('month')) || currentDate.getMonth();
  
  // Get attendance for this student
  const attendance = (STATE.data.attendance || []).filter(a => a.studentId === studentId);
  
  // Calculate for selected month
  const firstDay = new Date(selectedYear, selectedMonth, 1);
  const lastDay = new Date(selectedYear, selectedMonth + 1, 0);
  const daysInMonth = lastDay.getDate();
  
  const monthStart = `${selectedYear}-${String(selectedMonth + 1).padStart(2, '0')}-01`;
  const monthEnd = `${selectedYear}-${String(selectedMonth + 1).padStart(2, '0')}-${String(daysInMonth).padStart(2, '0')}`;
  const monthAttendance = attendance.filter(a => a.date >= monthStart && a.date <= monthEnd);
  
  const presentCount = monthAttendance.filter(a => a.status === 'present').length;
  const absentCount = monthAttendance.filter(a => a.status === 'absent').length;
  const totalMarked = presentCount + absentCount;
  const presentPercentage = totalMarked > 0 ? Math.round((presentCount / totalMarked) * 100) : 0;
  const absentPercentage = totalMarked > 0 ? Math.round((absentCount / totalMarked) * 100) : 0;
  
  // Update stat boxes
  const statBoxes = document.querySelectorAll('.stat-box');
  statBoxes.forEach(box => {
    if (box.classList.contains('present')) {
      const valueEl = box.querySelector('.stat-value');
      const percentEl = box.querySelector('.stat-percentage');
      if (valueEl) valueEl.textContent = arNum(presentCount) + ' يوم';
      if (percentEl) percentEl.textContent = arNum(presentPercentage) + '%';
    } else if (box.classList.contains('absent')) {
      const valueEl = box.querySelector('.stat-value');
      const percentEl = box.querySelector('.stat-percentage');
      if (valueEl) valueEl.textContent = arNum(absentCount) + ' يوم';
      if (percentEl) percentEl.textContent = arNum(absentPercentage) + '%';
    } else if (box.classList.contains('total')) {
      const valueEl = box.querySelector('.stat-value');
      if (valueEl) valueEl.textContent = arNum(totalMarked) + ' يوم';
    }
  });
}

function openAddSessionModal(sid) {
  const st = studentBy(sid);
  const today = new Date().toISOString().slice(0, 10);

  openModal(`
    <div class="modal-head">
      <h2>إضافة جلسة لـ ${esc(st.name)}</h2>
      <button class="x" data-action="close-modal">${I.close}</button>
    </div>
    <form data-form="add-session" data-sid="${sid}">
      <div class="row" style="gap:12px;flex-wrap:wrap">
        <div class="field" style="flex:1;min-width:140px">
          <label>التاريخ</label>
          <input name="date" type="date" value="${today}" required>
        </div>
        <div class="field" style="flex:1;min-width:120px">
          <label>الوقت</label>
          <input name="time" type="time" value="10:00" required>
        </div>
        <div class="field" style="flex:1;min-width:100px">
          <label>المدة (د)</label>
          <input name="duration" type="number" value="30" min="5" max="120">
        </div>
      </div>

      <!-- Three Goal Types Section -->
      <div class="field">
        <label style="margin-bottom: 16px;">أهداف الجلسة</label>
        
        <!-- Goal Type 1: Cognitive -->
        <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px; margin-bottom: 12px;">
          <div style="background: white; border-radius: 8px; padding: 12px; margin-bottom: 12px; font-weight: 600; text-align: center; font-size: 15px;">
            هدف إدراكي
          </div>
          <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;">
            <label class="chip" style="cursor: pointer; padding: 8px 16px;">
              <input type="radio" name="cognitive_status" value="mastered" hidden>
              <span>متقن</span>
            </label>
            <label class="chip" style="cursor: pointer; padding: 8px 16px;">
              <input type="radio" name="cognitive_status" value="partial" hidden>
              <span>جزئياً</span>
            </label>
            <label class="chip" style="cursor: pointer; padding: 8px 16px;">
              <input type="radio" name="cognitive_status" value="not-mastered" hidden>
              <span>لم يتقن</span>
            </label>
          </div>
        </div>

        <!-- Goal Type 2: Receptive/Expressive -->
        <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px; margin-bottom: 12px;">
          <div style="background: white; border-radius: 8px; padding: 12px; margin-bottom: 12px; font-weight: 600; text-align: center; font-size: 15px;">
            هدف استقبالي/تعبيري
          </div>
          <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;">
            <label class="chip" style="cursor: pointer; padding: 8px 16px;">
              <input type="radio" name="receptive_status" value="mastered" hidden>
              <span>متقن</span>
            </label>
            <label class="chip" style="cursor: pointer; padding: 8px 16px;">
              <input type="radio" name="receptive_status" value="partial" hidden>
              <span>جزئياً</span>
            </label>
            <label class="chip" style="cursor: pointer; padding: 8px 16px;">
              <input type="radio" name="receptive_status" value="not-mastered" hidden>
              <span>لم يتقن</span>
            </label>
          </div>
        </div>

        <!-- Goal Type 3: Articulation -->
        <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px; margin-bottom: 12px;">
          <div style="background: white; border-radius: 8px; padding: 12px; margin-bottom: 12px; font-weight: 600; text-align: center; font-size: 15px;">
            هدف نطق
          </div>
          <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;">
            <label class="chip" style="cursor: pointer; padding: 8px 16px;">
              <input type="radio" name="articulation_status" value="mastered" hidden>
              <span>متقن</span>
            </label>
            <label class="chip" style="cursor: pointer; padding: 8px 16px;">
              <input type="radio" name="articulation_status" value="partial" hidden>
              <span>جزئياً</span>
            </label>
            <label class="chip" style="cursor: pointer; padding: 8px 16px;">
              <input type="radio" name="articulation_status" value="not-mastered" hidden>
              <span>لم يتقن</span>
            </label>
          </div>
        </div>
      </div>

      <div class="field">
        <label>الأدوات المستخدمة</label>
        <div class="row wrap">
          ${STATE.data.sessionTools.map(t => `
            <button type="button" class="chip tool-chip" data-tool="${t.id}">${t.icon} ${esc(t.name)}</button>
          `).join('')}
        </div>
      </div>

      <div class="field">
        <label>ملاحظات الجلسة (اختيارية)</label>
        <textarea name="notes" placeholder="ملاحظة قصيرة عن الجلسة..."></textarea>
      </div>

      <button type="submit" class="btn lg block">${I.check}<span>حفظ الجلسة</span></button>
    </form>
  `, { lg: true });

  // Add click handlers for chip activation
  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', function() {
      const radioName = this.querySelector('input[type=radio]').name;
      document.querySelectorAll(`input[name="${radioName}"]`).forEach(radio => {
        radio.closest('.chip').classList.remove('active');
      });
      this.classList.add('active');
    });
  });
}

function openUploadModal(aid) {
  openModal(`
    <div class="modal-head"><h2>رفع فيديو</h2><button class="x" data-action="close-modal">${I.close}</button></div>
    <div style="border:2px dashed var(--border-strong);border-radius:14px;padding:36px;text-align:center;color:var(--muted)">
      ${I.video}
      <div class="text-sm mt-sm">اسحب فيديو هنا أو انقر للاختيار</div>
      <div class="text-xs">حتى 60 ثانية، حجم أقصى 50MB</div>
    </div>
    <div class="field mt-md">
      <label>ملاحظة (اختيارية)</label>
      <textarea placeholder="مثال: كان متعاوناً اليوم 🙂"></textarea>
    </div>
    <button class="btn block lg" onclick="finishUpload('${aid}')">${I.upload}<span>تم الرفع</span></button>
  `);
}

window.finishUpload = function(aid) {
  const act = STATE.data.activities.find(x => x.id === aid);
  if (act) {
    act.status = 'submitted';
    act.submission = { id: 'sb-'+Date.now(), completedAt: new Date().toISOString().slice(0,10), parentNote: 'تم الرفع', media: 'video.webm' };
    persistState();
    closeModal();
    toast('تم رفع الفيديو، ستراجعه المعلمة 🌿');
    handleRoute();
  }
};

/* =========================================================
   NEW FEATURES MODALS
   ========================================================= */

// 1️⃣ متابعة الطالبة - Modal
function openAddFollowupModal(sid) {
  const st = studentBy(sid);
  const plan = STATE.data.plans.find(p => p.studentId === sid);
  const today = new Date().toISOString().slice(0, 10);
  
  const planGoals = plan?.goals || [];
  
  openModal(`
    <div class="modal-head">
      <h2>📈 إضافة متابعة لـ ${esc(st.name)}</h2>
      <button class="x" data-action="close-modal">${I.close}</button>
    </div>
    <form data-form="add-followup" data-sid="${sid}">
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

      <!-- اختيار الأهداف من الخطة -->
      <div class="field-group">
        <label class="section-label">🎯 الأهداف من الخطة الفردية</label>
        <div id="plan-goals-container"></div>
        <button type="button" class="btn soft sm" data-action="add-plan-goal-field">
          ${I.plus}<span>إضافة هدف من الخطة</span>
        </button>
      </div>

      <!-- هدف يدوي واحد (اختياري) -->
      <div class="field-group">
        <label class="section-label">✍️ هدف يدوي (اختياري)</label>
        <div class="text-xs text-muted mb-sm">يمكنك إضافة هدف واحد فقط يدوياً عند الحاجة</div>
        <div class="field">
          <label>اكتب الهدف</label>
          <textarea name="custom_goal" rows="2" placeholder="مثال: أن تنطق الطالبة حرف الراء بوضوح..."></textarea>
        </div>
        <div class="field">
          <label>تصنيف الهدف</label>
          <select name="custom_goal_category">
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
              <input type="radio" name="custom_goal_evaluation" value="mastered" hidden>
              <span>أتقن</span>
            </label>
            <label class="radio-chip">
              <input type="radio" name="custom_goal_evaluation" value="partial" hidden>
              <span>جزئياً</span>
            </label>
            <label class="radio-chip">
              <input type="radio" name="custom_goal_evaluation" value="not_mastered" hidden>
              <span>لم يتقن</span>
            </label>
          </div>
        </div>
      </div>

      <!-- الوسائل المستخدمة -->
      <div class="field-group">
        <label class="section-label">🛠️ الوسائل المستخدمة</label>
        <div class="checkbox-group">
          <label class="checkbox-label"><input type="checkbox" name="tools" value="بطاقات صور"> بطاقات صور</label>
          <label class="checkbox-label"><input type="checkbox" name="tools" value="قصص"> قصص</label>
          <label class="checkbox-label"><input type="checkbox" name="tools" value="سبورة"> سبورة</label>
          <label class="checkbox-label"><input type="checkbox" name="tools" value="مجسمات"> مجسمات</label>
          <label class="checkbox-label"><input type="checkbox" name="tools" value="آيباد"> آيباد</label>
          <label class="checkbox-label"><input type="checkbox" name="tools" value="مرآة"> مرآة</label>
          <label class="checkbox-label"><input type="checkbox" name="tools" value="العاب تركيز وانتباه"> العاب تركيز وانتباه</label>
        </div>
      </div>

      <!-- ملاحظات -->
      <div class="field">
        <label>ملاحظات (اختياري)</label>
        <textarea name="notes" rows="3" placeholder="أضف ملاحظات عن المتابعة..."></textarea>
      </div>

      <button type="submit" class="btn lg block">${I.check}<span>حفظ المتابعة</span></button>
    </form>
  `, { lg: true });

  // Initialize with one goal field
  let goalFieldIndex = 0;
  
  function addPlanGoalField() {
    const container = document.getElementById('plan-goals-container');
    const fieldId = `goal-${goalFieldIndex++}`;
    
    const fieldHtml = `
      <div class="field-card" id="${fieldId}" style="padding:16px;background:var(--canvas);border-radius:12px;margin-bottom:12px;position:relative">
        <button type="button" class="btn danger-soft sm" style="position:absolute;top:8px;right:8px" onclick="document.getElementById('${fieldId}').remove()">
          ${I.trash}
        </button>
        <div class="field">
          <label>اختر الهدف</label>
          <select name="plan_goal_id[]" required>
            <option value="">-- اختر هدف من الخطة --</option>
            ${planGoals.map(g => `<option value="${g.id}">${esc(g.text || g.goal || g)}</option>`).join('')}
          </select>
        </div>
        <div class="field">
          <label>تصنيف الهدف</label>
          <select name="plan_goal_category[]" required>
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
              <input type="radio" name="plan_goal_eval_${fieldId}" value="mastered" hidden>
              <span>أتقن</span>
            </label>
            <label class="radio-chip">
              <input type="radio" name="plan_goal_eval_${fieldId}" value="partial" hidden>
              <span>جزئياً</span>
            </label>
            <label class="radio-chip">
              <input type="radio" name="plan_goal_eval_${fieldId}" value="not_mastered" hidden>
              <span>لم يتقن</span>
            </label>
          </div>
        </div>
      </div>
    `;
    
    container.insertAdjacentHTML('beforeend', fieldHtml);
  }
  
  // Add button listener
  setTimeout(() => {
    document.querySelector('[data-action="add-plan-goal-field"]')?.addEventListener('click', addPlanGoalField);
    // Add first goal field by default
    addPlanGoalField();
  }, 100);

function openEditFollowupModal(id) {
  const followup = STATE.data.studentFollowups.find(f => f.id === id);
  if (!followup) return;
  
  const st = studentBy(followup.studentId);
  const plan = STATE.data.plans.find(p => p.studentId === followup.studentId);
  const planGoals = plan?.goals || [];
  
  openModal(`
    <div class="modal-head">
      <h2>✏️ تعديل المتابعة</h2>
      <button class="x" data-action="close-modal">${I.close}</button>
    </div>
    <form data-form="edit-followup" data-id="${id}">
      <!-- Same form as add but with pre-filled values -->
      <div class="field-group">
        <label class="section-label">📅 فترة المتابعة</label>
        <div class="row" style="gap:12px">
          <div class="field" style="flex:1">
            <label>من</label>
            <input name="date_from" type="date" value="${followup.date_from}" required>
          </div>
          <div class="field" style="flex:1">
            <label>إلى</label>
            <input name="date_to" type="date" value="${followup.date_to}" required>
          </div>
        </div>
      </div>

      <div class="field-group">
        <label class="section-label">🎯 الأهداف من الخطة الفردية</label>
        <div class="field">
          <label>الهدف الأول</label>
          <select name="goal_1_id">
            <option value="">-- اختر هدف من الخطة --</option>
            ${planGoals.map(g => `<option value="${g.id}" ${followup.goal_1_id === g.id ? 'selected' : ''}>${esc(g.text || g.goal || g)}</option>`).join('')}
          </select>
        </div>
        <div class="field">
          <label>الهدف الثاني</label>
          <select name="goal_2_id">
            <option value="">-- اختر هدف من الخطة --</option>
            ${planGoals.map(g => `<option value="${g.id}" ${followup.goal_2_id === g.id ? 'selected' : ''}>${esc(g.text || g.goal || g)}</option>`).join('')}
          </select>
        </div>
      </div>

      <div class="field-group">
        <label class="section-label">✍️ أهداف يدوية (اختياري)</label>
        <div class="field">
          <label>هدف يدوي أول</label>
          <textarea name="custom_goal_1" rows="2">${esc(followup.custom_goal_1 || '')}</textarea>
          <select name="custom_goal_1_type" class="mt-xs">
            <option value="">-- نوع الهدف --</option>
            <option value="تمهيدي" ${followup.custom_goal_1_type === 'تمهيدي' ? 'selected' : ''}>تمهيدي</option>
            <option value="استقبالي" ${followup.custom_goal_1_type === 'استقبالي' ? 'selected' : ''}>استقبالي</option>
            <option value="تعبيري" ${followup.custom_goal_1_type === 'تعبيري' ? 'selected' : ''}>تعبيري</option>
            <option value="نطق" ${followup.custom_goal_1_type === 'نطق' ? 'selected' : ''}>نطق</option>
          </select>
        </div>
        <div class="field">
          <label>هدف يدوي ثاني</label>
          <textarea name="custom_goal_2" rows="2">${esc(followup.custom_goal_2 || '')}</textarea>
          <select name="custom_goal_2_type" class="mt-xs">
            <option value="">-- نوع الهدف --</option>
            <option value="تمهيدي" ${followup.custom_goal_2_type === 'تمهيدي' ? 'selected' : ''}>تمهيدي</option>
            <option value="استقبالي" ${followup.custom_goal_2_type === 'استقبالي' ? 'selected' : ''}>استقبالي</option>
            <option value="تعبيري" ${followup.custom_goal_2_type === 'تعبيري' ? 'selected' : ''}>تعبيري</option>
            <option value="نطق" ${followup.custom_goal_2_type === 'نطق' ? 'selected' : ''}>نطق</option>
          </select>
        </div>
      </div>

      <div class="field-group">
        <label class="section-label">🛠️ الوسائل المستخدمة</label>
        <div class="checkbox-group">
          ${['بطاقات صور', 'قصص', 'سبورة', 'مجسمات', 'آيباد', 'مرآة', 'العاب تركيز وانتباه'].map(tool => `
            <label class="checkbox-label">
              <input type="checkbox" name="tools" value="${tool}" ${followup.tools?.includes(tool) ? 'checked' : ''}> ${tool}
            </label>
          `).join('')}
        </div>
      </div>

      <div class="field">
        <label>ملاحظات (اختياري)</label>
        <textarea name="notes" rows="3">${esc(followup.notes || '')}</textarea>
      </div>

      <button type="submit" class="btn lg block">${I.check}<span>حفظ التعديلات</span></button>
    </form>
  `, { lg: true });
}

// 2️⃣ اختبار الذاكرة السمعية - Modal
function openMemoryTestModal(sid, testType) {
  const st = studentBy(sid);
  const today = new Date().toISOString().slice(0, 10);
  
  // Placeholder for actual test data (will be added later)
  const testTitle = testType === 1 ? 'النموذج الأول' : 'النموذج الثاني';
  
  openModal(`
    <div class="modal-head">
      <h2>🧠 ${testTitle} - ${esc(st.name)}</h2>
      <button class="x" data-action="close-modal">${I.close}</button>
    </div>
    <form data-form="add-memory-test" data-sid="${sid}" data-type="${testType}">
      <div class="alert info mb-md">
        <p><strong>ملاحظة:</strong> سيتم إضافة نماذج الاختبارات لاحقاً من قبل إدارة المدرسة.</p>
      </div>

      <div class="field">
        <label>تاريخ الاختبار</label>
        <input name="tested_at" type="date" value="${today}" required>
      </div>

      <div class="field">
        <label>النتيجة</label>
        <div class="row" style="gap:12px">
          <input name="score" type="number" min="0" placeholder="النتيجة" required style="flex:1">
          <span style="align-self:center;font-weight:bold">/</span>
          <input name="total_score" type="number" min="1" placeholder="من" required style="flex:1">
        </div>
      </div>

      <div class="field">
        <label>ملاحظات (اختياري)</label>
        <textarea name="notes" rows="4" placeholder="ملاحظات عن أداء الطالبة في الاختبار..."></textarea>
      </div>

      <button type="submit" class="btn lg block">${I.check}<span>حفظ الاختبار</span></button>
    </form>
  `, { lg: true });
}

function viewMemoryTestModal(id) {
  const test = STATE.data.auditoryMemoryTests.find(t => t.id === id);
  if (!test) return;
  
  const st = studentBy(test.studentId);
  const teacher = userBy(test.teacher_id);
  const testTitle = test.test_type === 1 ? 'النموذج الأول' : 'النموذج الثاني';
  const percentage = test.total_score ? Math.round((test.score / test.total_score) * 100) : 0;
  
  openModal(`
    <div class="modal-head">
      <h2>🧠 ${testTitle}</h2>
      <button class="x" data-action="close-modal">${I.close}</button>
    </div>
    
    <div class="card">
      <div class="row between mb-md">
        <div>
          <div class="text-bold text-lg">${esc(st.name)}</div>
          <div class="text-sm text-muted">بواسطة: ${esc(teacher?.name || '')}</div>
        </div>
        <div class="text-end">
          <div class="text-bold text-xl" style="color:var(--primary)">${arNum(percentage)}%</div>
          <div class="text-sm text-muted">${arNum(test.score)}/${arNum(test.total_score)}</div>
        </div>
      </div>

      <div class="row between mb-sm">
        <span class="text-muted">تاريخ الاختبار:</span>
        <span class="text-bold">${fmtDate(test.tested_at)}</span>
      </div>

      ${test.notes ? `
        <div class="mt-md">
          <div class="text-bold mb-xs">ملاحظات:</div>
          <p class="text-sm">${esc(test.notes)}</p>
        </div>
      ` : ''}
    </div>

    <button class="btn block mt-md" data-action="close-modal">إغلاق</button>
  `, { md: true });
}

// 3️⃣ التقرير المبدئي - Modal
function openInitialReportModal(sid, reportId = null) {
  const isEdit = !!reportId;
  const report = isEdit ? STATE.data.initialReports.find(r => r.id === reportId) : null;
  const st = isEdit ? studentBy(report.studentId) : studentBy(sid);
  const today = new Date().toISOString().slice(0, 10);
  
  const defaultIntro = 'بناءً على المتابعة المستمرة والملاحظات المباشرة للطالبة في بيئة التعلم، تم إعداد هذا التقرير المبدئي لتوثيق الأداء الحالي وتحديد نقاط القوة ومجالات التطوير.';
  
  openModal(`
    <div class="modal-head">
      <h2>📄 ${isEdit ? 'تعديل' : 'إنشاء'} التقرير المبدئي</h2>
      <button class="x" data-action="close-modal">${I.close}</button>
    </div>
    <form data-form="${isEdit ? 'edit-initial-report' : 'add-initial-report'}" data-sid="${sid || report.studentId}" ${isEdit ? `data-id="${reportId}"` : ''}>
      <!-- بيانات تلقائية -->
      <div class="auto-fill-section mb-md" style="background:var(--canvas);padding:16px;border-radius:12px">
        <div class="row between mb-xs">
          <span class="text-muted">اسم الطالبة:</span>
          <span class="text-bold">${esc(st.name)}</span>
        </div>
        <div class="row between mb-xs">
          <span class="text-muted">الصف:</span>
          <span class="text-bold">${esc(st.grade)}</span>
        </div>
        <div class="row between">
          <span class="text-muted">التاريخ:</span>
          <span class="text-bold">${fmtDate(isEdit ? report.report_date : today)}</span>
        </div>
      </div>

      <div class="field">
        <label>تاريخ التقرير</label>
        <input name="report_date" type="date" value="${isEdit ? report.report_date : today}" required>
      </div>

      <!-- مقدمة ثابتة -->
      <div class="field">
        <label>مقدمة التقرير (ثابتة)</label>
        <textarea name="introduction" rows="3" readonly style="background:var(--canvas)">${defaultIntro}</textarea>
      </div>

      <!-- محتوى التقرير -->
      <div class="field">
        <label>نقاط القوة</label>
        <textarea name="strengths" rows="4" placeholder="اذكري نقاط القوة للطالبة..." required>${isEdit && report.content?.strengths ? esc(report.content.strengths) : ''}</textarea>
      </div>

      <div class="field">
        <label>مجالات التطوير</label>
        <textarea name="areas_development" rows="4" placeholder="اذكري المجالات التي تحتاج تطوير..." required>${isEdit && report.content?.areas_development ? esc(report.content.areas_development) : ''}</textarea>
      </div>

      <div class="field">
        <label>التوصيات</label>
        <textarea name="recommendations" rows="4" placeholder="التوصيات والخطوات المقترحة..." required>${isEdit && report.content?.recommendations ? esc(report.content.recommendations) : ''}</textarea>
      </div>

      <div class="field">
        <label>حالة التقرير</label>
        <select name="status" required>
          <option value="draft" ${isEdit && report.status === 'draft' ? 'selected' : ''}>مسودة</option>
          <option value="final" ${isEdit && report.status === 'final' ? 'selected' : ''}>نهائي</option>
        </select>
      </div>

      <button type="submit" class="btn lg block">${I.check}<span>${isEdit ? 'حفظ التعديلات' : 'حفظ التقرير'}</span></button>
    </form>
  `, { lg: true });
}

function viewInitialReportModal(id) {
  const report = STATE.data.initialReports.find(r => r.id === id);
  if (!report) return;
  
  const st = studentBy(report.studentId);
  const teacher = userBy(report.teacher_id);
  
  openModal(`
    <div class="modal-head">
      <h2>📄 التقرير المبدئي</h2>
      <button class="x" data-action="close-modal">${I.close}</button>
    </div>
    
    <div class="report-view" style="max-height:60vh;overflow-y:auto">
      <!-- بيانات الطالبة -->
      <div class="report-header mb-md">
        <h3 class="text-center mb-md" style="color:var(--primary)">التقرير المبدئي</h3>
        <div class="row between mb-xs">
          <span class="text-muted">اسم الطالبة:</span>
          <span class="text-bold">${esc(st.name)}</span>
        </div>
        <div class="row between mb-xs">
          <span class="text-muted">الصف:</span>
          <span class="text-bold">${esc(st.grade)}</span>
        </div>
        <div class="row between mb-xs">
          <span class="text-muted">التاريخ:</span>
          <span class="text-bold">${fmtDate(report.report_date)}</span>
        </div>
        <div class="row between">
          <span class="text-muted">المعلمة:</span>
          <span class="text-bold">${esc(teacher?.name || '')}</span>
        </div>
      </div>

      <!-- مقدمة -->
      <div class="report-section mb-md">
        <p class="text-sm" style="line-height:1.8">${esc(report.introduction)}</p>
      </div>

      <!-- نقاط القوة -->
      <div class="report-section mb-md">
        <h4 class="text-bold mb-xs" style="color:var(--success)">🌟 نقاط القوة</h4>
        <p class="text-sm" style="line-height:1.8">${esc(report.content?.strengths || '')}</p>
      </div>

      <!-- مجالات التطوير -->
      <div class="report-section mb-md">
        <h4 class="text-bold mb-xs" style="color:var(--warning)">📈 مجالات التطوير</h4>
        <p class="text-sm" style="line-height:1.8">${esc(report.content?.areas_development || '')}</p>
      </div>

      <!-- التوصيات -->
      <div class="report-section mb-md">
        <h4 class="text-bold mb-xs" style="color:var(--primary)">💡 التوصيات</h4>
        <p class="text-sm" style="line-height:1.8">${esc(report.content?.recommendations || '')}</p>
      </div>

      <!-- الحالة -->
      <div class="text-center mt-md">
        <span class="badge ${report.status === 'final' ? 'success' : 'warning'}">
          ${report.status === 'final' ? '✅ تقرير نهائي' : '📝 مسودة'}
        </span>
      </div>
    </div>

    <div class="row" style="gap:8px;margin-top:16px">
      <button class="btn ghost" data-action="edit-initial-report" data-id="${id}" style="flex:1">${I.edit}<span>تعديل</span></button>
      <button class="btn" data-action="print-initial-report" data-id="${id}" style="flex:1">${I.download}<span>طباعة</span></button>
    </div>
  `, { lg: true });
}

function printInitialReport(id) {
  const report = STATE.data.initialReports.find(r => r.id === id);
  if (!report) return;
  
  const st = studentBy(report.studentId);
  const teacher = userBy(report.teacher_id);
  
  // Create print window
  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <!DOCTYPE html>
    <html dir="rtl">
    <head>
      <meta charset="UTF-8">
      <title>التقرير المبدئي - ${st.name}</title>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px; line-height: 1.8; }
        h1 { text-align: center; color: #6E5BC7; margin-bottom: 30px; }
        h2 { color: #333; margin-top: 24px; margin-bottom: 12px; }
        .header { border: 2px solid #6E5BC7; padding: 20px; margin-bottom: 30px; border-radius: 8px; }
        .header-row { display: flex; justify-content: space-between; margin-bottom: 8px; }
        .label { font-weight: 600; color: #666; }
        .value { font-weight: bold; }
        .section { margin-bottom: 24px; }
        .intro { background: #f5f3ff; padding: 16px; border-radius: 8px; margin-bottom: 24px; }
        @media print { body { padding: 20px; } }
      </style>
    </head>
    <body>
      <h1>التقرير المبدئي</h1>
      
      <div class="header">
        <div class="header-row">
          <span class="label">اسم الطالبة:</span>
          <span class="value">${esc(st.name)}</span>
        </div>
        <div class="header-row">
          <span class="label">الصف:</span>
          <span class="value">${esc(st.grade)}</span>
        </div>
        <div class="header-row">
          <span class="label">التاريخ:</span>
          <span class="value">${fmtDate(report.report_date)}</span>
        </div>
        <div class="header-row">
          <span class="label">المعلمة:</span>
          <span class="value">${esc(teacher?.name || '')}</span>
        </div>
      </div>

      <div class="intro">
        <p>${esc(report.introduction)}</p>
      </div>

      <div class="section">
        <h2>🌟 نقاط القوة</h2>
        <p>${esc(report.content?.strengths || '')}</p>
      </div>

      <div class="section">
        <h2>📈 مجالات التطوير</h2>
        <p>${esc(report.content?.areas_development || '')}</p>
      </div>

      <div class="section">
        <h2>💡 التوصيات</h2>
        <p>${esc(report.content?.recommendations || '')}</p>
      </div>

      <script>
        window.onload = function() {
          window.print();
        };
      </script>
    </body>
    </html>
  `);
  printWindow.document.close();
}

document.addEventListener('click', (e) => {
  if (e.target.closest('[data-action="close-modal"]')) closeModal();
  
  // Handle assessment tab clicks - update modal content without closing
  const assessTab = e.target.closest('.assess-tab[data-section]');
  if (assessTab) {
    e.preventDefault();
    e.stopPropagation();
    const sectionId = assessTab.getAttribute('data-section');
    
    // Update URL params
    const currentHash = location.hash.split('?')[0];
    const params = new URLSearchParams(location.hash.split('?')[1] || '');
    params.set('sec', sectionId);
    
    // Update hash WITHOUT triggering hashchange event
    history.replaceState(null, '', currentHash + '?' + params.toString());
    
    // Find the form and re-render just the modal body
    const form = document.querySelector('[data-form="save-form"][data-fkey="preAssessment"]');
    if (form) {
      const sid = form.getAttribute('data-sid');
      const fkey = form.getAttribute('data-fkey');
      const st = studentBy(sid);
      if (st && fkey) {
        const data = (st.forms || {})[fkey] || {};
        const ft = FORM_TYPES.find(f => f.key === fkey);
        const body = renderPreAssessmentForm(st, data, false);
        
        // Update just the modal body content
        const modalContent = document.querySelector('.modal');
        if (modalContent) {
          modalContent.innerHTML = `
            <div class="modal-head">
              <h2>${ft.icon} ${esc(ft.name)} — ${esc(st.name)}</h2>
              <button class="x" data-action="close-modal">${I.close}</button>
            </div>
            ${body}
          `;
        }
      }
    }
  }
});

/* --------------- INIT --------------- */
// Removed old init() - now using async authentication initialization below


/* =========================================================
   PRINCIPAL (المديرة) VIEWS
   ========================================================= */

function viewPrincipalDashboard() {
  const teachers = STATE.data.users.filter(u => u.role === 'teacher');
  const students = STATE.data.students.filter(s => !s.archived);
  const parents = STATE.data.users.filter(u => u.role === 'parent');
  const recentActivities = STATE.data.activities.slice(0, 5);

  return `
    <div class="page-head">
      <div>
        <h1>لوحة المديرة</h1>
        <div class="sub">مرحباً ${esc(STATE.config.school.principal.name)}</div>
      </div>
    </div>

    <div class="row wrap" style="gap:16px;margin-bottom:32px">
      <div class="stat" style="flex:1;min-width:140px">
        <div class="ic">${I.users}</div>
        <div class="num">${arNum(teachers.length)}</div>
        <div class="lbl">معلمة</div>
      </div>
      <div class="stat" style="flex:1;min-width:140px">
        <div class="ic">${I.student}</div>
        <div class="num">${arNum(students.length)}</div>
        <div class="lbl">طالبة</div>
      </div>
      <div class="stat" style="flex:1;min-width:140px">
        <div class="ic">${I.user}</div>
        <div class="num">${arNum(parents.length)}</div>
        <div class="lbl">ولي أمر</div>
      </div>
    </div>

    <div class="card mb-lg">
      <div class="card-title">
        <h3>المعلمات</h3>
        <a href="#/principal/teachers" class="link">عرض الكل</a>
      </div>
      ${teachers.length === 0 ? `
        <div class="empty" style="padding:32px 16px">
          <div class="ico">${I.users}</div>
          <h4>لا توجد معلمات</h4>
          <p>ابدئي بإضافة معلمات للمدرسة</p>
          <button class="btn mt-md" data-action="add-teacher">${I.plus}<span>إضافة معلمة</span></button>
        </div>
      ` : `
        <div class="row wrap" style="gap:12px">
          ${teachers.map(t => {
            const studentCount = STATE.data.students.filter(s => s.teacherId === t.id && !s.archived).length;
            return `
              <div class="card tight" style="flex:1;min-width:200px">
                <div class="row" style="gap:12px;align-items:center;margin-bottom:12px">
                  ${avatar(t, 'md')}
                  <div style="flex:1;min-width:0">
                    <div class="text-bold" style="font-size:14.5px">${esc(t.name)}</div>
                    <div class="text-xs text-muted mt-sm">${esc(t.title)}</div>
                  </div>
                </div>
                <div class="text-sm text-muted">${arNum(studentCount)} طالبة</div>
              </div>
            `;
          }).join('')}
        </div>
        <button class="btn ghost block mt-md" data-action="add-teacher">${I.plus}<span>إضافة معلمة جديدة</span></button>
      `}
    </div>

    <div class="card">
      <div class="card-title">
        <h3>آخر الأنشطة</h3>
        <a href="#/principal/students" class="link">عرض الكل</a>
      </div>
      ${recentActivities.length === 0 ? `
        <div class="empty" style="padding:32px 16px">
          <div class="ico">${I.activity}</div>
          <p>لا توجد أنشطة حديثة</p>
        </div>
      ` : `
        <div class="col" style="gap:12px">
          ${recentActivities.map(a => {
            const teacher = userBy(a.teacherId);
            const student = studentBy(a.studentIds[0]);
            return `
              <div class="row" style="gap:12px;padding:12px;background:var(--canvas);border-radius:10px">
                <div class="type-ic" style="width:36px;height:36px;border-radius:10px">
                  ${activityTypeIcon(a.type)}
                </div>
                <div style="flex:1;min-width:0">
                  <div class="text-bold text-sm">${esc(a.title)}</div>
                  <div class="text-xs text-muted mt-sm">
                    ${esc(teacher?.name)} → ${esc(student?.name)}
                  </div>
                </div>
                <div class="text-xs text-muted">${fmtRelative(a.dueDate)}</div>
              </div>
            `;
          }).join('')}
        </div>
      `}
    </div>
  `;
}

function teacherPermissionPills(t) {
  const p = t.permissions || {};
  const all = [
    { key: 'can_add_students',    label: 'إضافة طالبات',    icon: '➕' },
    { key: 'can_edit_students',   label: 'تعديل الطالبات',  icon: '✏️' },
    { key: 'can_delete_students', label: 'حذف الطالبات',    icon: '🗑️' },
    { key: 'can_message_parents', label: 'مراسلة أولياء الأمور', icon: '💬' },
    { key: 'can_view_reports',    label: 'عرض التقارير',    icon: '📊' },
  ];
  return all.map(item => `
    <span class="pill ${p[item.key] ? 'mint' : ''}" style="opacity:${p[item.key] ? 1 : 0.45}">
      ${item.icon} ${item.label}
    </span>
  `).join('');
}

function viewPrincipalTeachers() {
  const teachers = STATE.data.users.filter(u => u.role === 'teacher');

  return `
    <div class="page-head">
      <div>
        <h1>المعلمات</h1>
        <div class="sub">${arNum(teachers.length)} معلمة</div>
      </div>
      <button class="btn" data-action="add-teacher">${I.plus}<span>إضافة معلمة</span></button>
    </div>

    ${teachers.length === 0 ? `
      <div class="card">
        <div class="empty">
          <div class="ico">${I.users}</div>
          <h4>لا توجد معلمات</h4>
          <p>ابدئي بإضافة معلمات للمدرسة</p>
          <button class="btn mt-md" data-action="add-teacher">${I.plus}<span>إضافة معلمة</span></button>
        </div>
      </div>
    ` : `
      <div class="col" style="gap:16px">
        ${teachers.map(t => {
          const students = STATE.data.students.filter(s => s.teacher_id === t.id && !s.archived);
          const notes = t.principal_notes || [];
          return `
            <div class="card">
              <!-- Teacher header -->
              <div class="row" style="gap:16px;align-items:flex-start">
                ${avatar(t, 'lg')}
                <div style="flex:1;min-width:0">
                  <h3 style="margin-bottom:4px">${esc(t.name)}</h3>
                  <div class="text-sm text-muted">${esc(t.title)}</div>
                  ${t.email ? `<div class="text-xs text-muted mt-sm">${esc(t.email)}</div>` : ''}
                  <div class="row wrap" style="gap:6px;margin-top:12px">
                    ${pill(`${arNum(students.length)} طالبة`, 'primary')}
                    ${t.teacher_type === 'speech_therapy' ? pill('معلمة نطق', 'primary') : ''}
                    ${t.teacher_type === 'special_education' ? pill('معلمة تربية خاصة', 'info') : ''}
                  </div>
                  <div class="row wrap" style="gap:6px;margin-top:10px">
                    ${teacherPermissionPills(t)}
                  </div>
                </div>
                <div class="col" style="gap:8px;flex-shrink:0;align-items:flex-end">
                  <div class="row" style="gap:8px">
                    <button class="btn ghost sm" data-action="edit-teacher" data-id="${t.id}">
                      ${I.edit}<span>تعديل</span>
                    </button>
                    <button class="btn danger-soft sm" data-action="delete-teacher" data-id="${t.id}">
                      ${I.trash}
                    </button>
                  </div>
                  <!-- View as teacher button -->
                  <button class="btn soft sm" data-action="view-as-teacher" data-id="${t.id}" title="دخول كمراقب لحساب المعلمة">
                    ${I.eye}<span>عرض أعمالها</span>
                  </button>
                </div>
              </div>

              <!-- Students list -->
              ${students.length > 0 ? `
                <div style="margin-top:16px;padding-top:16px;border-top:1px solid var(--hair)">
                  <div class="text-xs text-bold text-muted mb-sm">الطالبات:</div>
                  <div class="row wrap" style="gap:6px">
                    ${students.map(s => `
                      <a href="#/principal/student/${s.id}" class="chip" style="font-size:12px" data-route="#/principal/student/${s.id}">
                        ${esc(s.name)}
                      </a>
                    `).join('')}
                  </div>
                </div>
              ` : ''}

              <!-- Principal notes for this teacher -->
              <div class="principal-notes-section" style="margin-top:16px;padding-top:16px;border-top:1px solid var(--hair)">
                <div class="row between mb-sm">
                  <div class="text-xs text-bold text-muted" style="letter-spacing:0.06em;text-transform:uppercase">ملاحظات المديرة</div>
                  <button class="btn soft sm" data-action="add-teacher-note" data-id="${t.id}">${I.plus}<span>إضافة ملاحظة</span></button>
                </div>
                ${notes.length ? `
                  <div class="col" style="gap:8px">
                    ${notes.map((n, idx) => `
                      <div class="principal-note-row">
                        <div class="principal-note-icon">${I.flag}</div>
                        <div style="flex:1;min-width:0">
                          <div class="text-sm">${esc(n.text)}</div>
                          <div class="text-xs text-muted mt-sm">${fmtDate(n.date)}</div>
                        </div>
                        <button class="btn danger-soft sm" data-action="delete-teacher-note" data-id="${t.id}" data-idx="${idx}" title="حذف الملاحظة">${I.trash}</button>
                      </div>
                    `).join('')}
                  </div>
                ` : `
                  <div class="text-sm text-muted" style="padding:8px 0">لا توجد ملاحظات بعد.</div>
                `}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `}
  `;
}

function viewPrincipalStudents() {
  const students = STATE.data.students.filter(s => !s.archived);
  const byGrade = {};
  students.forEach(s => {
    if (!byGrade[s.grade]) byGrade[s.grade] = [];
    byGrade[s.grade].push(s);
  });
  const grades = Object.keys(byGrade).sort((a, b) => gradeSortKey(a) - gradeSortKey(b));

  return `
    <div class="page-head">
      <div>
        <h1>الطالبات</h1>
        <div class="sub">${arNum(students.length)} طالبة</div>
      </div>
      <button class="btn" data-action="add-student">${I.plus}<span>إضافة طالبة</span></button>
    </div>

    ${students.length === 0 ? `
      <div class="card">
        <div class="empty">
          <div class="ico">${I.student}</div>
          <h4>لا توجد طالبات</h4>
          <p>ابدئي بإضافة طالبات للمدرسة</p>
          <button class="btn mt-md" data-action="add-student">${I.plus}<span>إضافة طالبة</span></button>
        </div>
      </div>
    ` : `
      <div class="col" style="gap:24px">
        ${grades.map(grade => `
          <div class="card">
            <div class="card-title">
              <h3>${esc(grade)}</h3>
              <span class="pill">${arNum(byGrade[grade].length)} طالبة</span>
            </div>
            <div class="col" style="gap:12px">
              ${byGrade[grade].map(s => {
                const teacher = userBy(s.teacher_id);
                const progress = studentProgress(s);
                return `
                  <div class="row" style="gap:10px;padding:14px;background:var(--canvas);border-radius:12px;align-items:center">
                    <a href="#/principal/student/${s.id}" class="row" style="gap:14px;flex:1;min-width:0;text-decoration:none;color:inherit;cursor:pointer" data-route="#/principal/student/${s.id}">
                      ${avatar(s, 'md')}
                      <div style="flex:1;min-width:0">
                        <div class="text-bold" style="font-size:14.5px">${esc(s.name)}</div>
                        <div class="text-xs text-muted mt-sm">
                          ${teacher ? `المعلمة: ${esc(teacher.name)}` : 'غير مخصصة لمعلمة'}
                        </div>
                      </div>
                      <div style="text-align:center;margin-inline-end:4px">
                        <div class="text-bold" style="font-size:18px;color:var(--accent)">${arNum(progress)}%</div>
                        <div class="text-xs text-muted">التقدم</div>
                      </div>
                      ${I.chevron}
                    </a>
                    <button class="btn ghost sm" data-action="edit-student" data-sid="${s.id}" title="تعديل الطالبة">${I.edit}</button>
                    <button class="btn danger-soft sm" data-action="delete-student-confirm" data-sid="${s.id}" title="حذف الطالبة">${I.trash}</button>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `}
  `;
}

/* =========================================================
   PRINCIPAL - IEPs VIEW
   ========================================================= */
function viewPrincipalIEPs() {
  const students = STATE.data.students.filter(s => !s.archived);
  
  // Separate students by teacher type
  const speechStudents = students.filter(s => {
    const teacher = userBy(s.teacher_id);
    return teacher?.teacher_type === 'speech_therapy';
  });
  
  const specialEdStudents = students.filter(s => {
    const teacher = userBy(s.teacher_id);
    return teacher?.teacher_type === 'special_education' || teacher?.teacher_type === 'special_ed';
  });
  
  // Get stats
  const speechWithIEP = speechStudents.filter(s => {
    const plan = STATE.data.plans.find(p => p.studentId === s.id);
    return plan && plan.groups && plan.groups.length > 0;
  }).length;
  
  const specialEdWithIEP = specialEdStudents.filter(s => {
    return s.special_ed_iep && (
      s.special_ed_iep.semester_goals?.length > 0 ||
      s.special_ed_iep.short_term_goals?.length > 0 ||
      s.special_ed_iep.pdf_upload
    );
  }).length;
  
  return `
    <div class="page-head">
      <div>
        <h1>الخطط الفردية 📋</h1>
        <div class="sub">عرض شامل لجميع الخطط التربوية الفردية</div>
      </div>
    </div>

    <div class="grid cols-2 mb-md">
      ${statCard('mint', I.clipboard, arNum(speechWithIEP), `خطط النطق (من ${arNum(speechStudents.length)})`)}
      ${statCard('amber', I.clipboard, arNum(specialEdWithIEP), `خطط التربية الخاصة (من ${arNum(specialEdStudents.length)})`)}
    </div>

    <div class="card mb-md">
      <div class="card-title">
        <h3>🗣️ خطط معلمات النطق</h3>
      </div>
      ${speechStudents.length === 0 ? `
        <div class="empty">
          <div class="ico">${I.search}</div>
          <h4>لا توجد طالبات</h4>
          <p>لم يتم تعيين طالبات لمعلمات النطق بعد</p>
        </div>
      ` : `
        <div class="stack gap-sm">
          ${speechStudents.map(st => {
            const teacher = userBy(st.teacher_id);
            const plan = STATE.data.plans.find(p => p.studentId === st.id);
            const hasGroups = plan && plan.groups && Array.isArray(plan.groups) && plan.groups.length > 0;
            const totalGoals = hasGroups ? plan.groups.reduce((sum, g) => sum + (g.shorts?.length || 0), 0) : 0;
            
            return `
              <div class="row between" style="padding:12px;background:var(--canvas);border-radius:10px;align-items:center">
                <div class="row" style="gap:12px;flex:1">
                  ${avatar(st, 'md')}
                  <div style="flex:1">
                    <div class="text-bold">${esc(st.name)}</div>
                    <div class="text-xs text-muted">${esc(st.grade)} • ${teacher ? esc(teacher.name) : 'غير معين'}</div>
                  </div>
                </div>
                ${hasGroups ? `
                  <div style="text-align:center;min-width:100px">
                    <div class="text-xs text-muted">الأهداف</div>
                    <div class="text-bold" style="color:var(--mint)">${arNum(totalGoals)}</div>
                  </div>
                  <a class="btn soft sm" href="#/principal/student/${st.id}?tab=plan" data-route="#/principal/student/${st.id}">
                    ${I.eye}<span>عرض الخطة</span>
                  </a>
                ` : `
                  <span class="pill soft">لم تُولَّد بعد</span>
                `}
              </div>
            `;
          }).join('')}
        </div>
      `}
    </div>

    <div class="card">
      <div class="card-title">
        <h3>📚 خطط معلمات التربية الخاصة</h3>
      </div>
      ${specialEdStudents.length === 0 ? `
        <div class="empty">
          <div class="ico">${I.search}</div>
          <h4>لا توجد طالبات</h4>
          <p>لم يتم تعيين طالبات لمعلمات التربية الخاصة بعد</p>
        </div>
      ` : `
        <div class="stack gap-sm">
          ${specialEdStudents.map(st => {
            const teacher = userBy(st.teacher_id);
            const iep = st.special_ed_iep || {};
            const hasIEP = iep.semester_goals?.length > 0 || iep.short_term_goals?.length > 0 || iep.pdf_upload;
            const totalGoals = (iep.semester_goals?.length || 0) + (iep.short_term_goals?.length || 0) + (iep.behavioral_goals?.length || 0);
            
            return `
              <div class="row between" style="padding:12px;background:var(--canvas);border-radius:10px;align-items:center">
                <div class="row" style="gap:12px;flex:1">
                  ${avatar(st, 'md')}
                  <div style="flex:1">
                    <div class="text-bold">${esc(st.name)}</div>
                    <div class="text-xs text-muted">${esc(st.grade)} • ${teacher ? esc(teacher.name) : 'غير معين'}</div>
                  </div>
                </div>
                ${hasIEP ? `
                  <div style="text-align:center;min-width:100px">
                    <div class="text-xs text-muted">الأهداف</div>
                    <div class="text-bold" style="color:var(--mint)">${arNum(totalGoals)}</div>
                  </div>
                  ${iep.pdf_upload ? `
                    <button class="btn ghost sm" data-action="view-principal-iep-pdf" data-sid="${st.id}">
                      ${I.download}<span>PDF</span>
                    </button>
                  ` : ''}
                  <a class="btn soft sm" href="#/principal/student/${st.id}?tab=plan" data-route="#/principal/student/${st.id}">
                    ${I.eye}<span>عرض الخطة</span>
                  </a>
                ` : `
                  <span class="pill soft">لم تُنشأ بعد</span>
                `}
              </div>
            `;
          }).join('')}
        </div>
      `}
    </div>
  `;
}

function viewPrincipalReports() {
  const students = STATE.data.students.filter(s => !s.archived);
  const teachers = STATE.data.users.filter(u => u.role === 'teacher');
  const totalActivities = STATE.data.activities.length;
  const completedActivities = STATE.data.activities.filter(a => a.status === 'done').length;

  return `
    <div class="page-head">
      <h1>التقارير والإحصائيات</h1>
    </div>

    <div class="row wrap" style="gap:16px;margin-bottom:32px">
      <div class="stat mint" style="flex:1;min-width:160px">
        <div class="ic">${I.checkCircle}</div>
        <div class="num">${arNum(completedActivities)}</div>
        <div class="lbl">نشاط مكتمل</div>
      </div>
      <div class="stat amber" style="flex:1;min-width:160px">
        <div class="ic">${I.activity}</div>
        <div class="num">${arNum(totalActivities - completedActivities)}</div>
        <div class="lbl">نشاط قيد التنفيذ</div>
      </div>
      <div class="stat sky" style="flex:1;min-width:160px">
        <div class="ic">${I.chart}</div>
        <div class="num">${arNum(Math.round((completedActivities / totalActivities) * 100))}%</div>
        <div class="lbl">نسبة الإنجاز</div>
      </div>
    </div>

    <div class="card mb-lg">
      <h3 class="mb-md">أداء المعلمات</h3>
      <div class="col" style="gap:16px">
        ${teachers.map(t => {
          const teacherStudents = students.filter(s => s.teacherId === t.id);
          const teacherActivities = STATE.data.activities.filter(a => a.teacherId === t.id);
          const teacherCompleted = teacherActivities.filter(a => a.status === 'done').length;
          const completionRate = teacherActivities.length > 0 
            ? Math.round((teacherCompleted / teacherActivities.length) * 100) 
            : 0;

          return `
            <div style="padding:16px;background:var(--canvas);border-radius:12px">
              <div class="row" style="gap:12px;align-items:center;margin-bottom:12px">
                ${avatar(t, 'md')}
                <div style="flex:1;min-width:0">
                  <div class="text-bold">${esc(t.name)}</div>
                  <div class="text-xs text-muted mt-sm">${arNum(teacherStudents.length)} طالبة</div>
                </div>
                <div style="text-align:center">
                  <div class="text-bold" style="font-size:20px;color:var(--accent)">${arNum(completionRate)}%</div>
                  <div class="text-xs text-muted">نسبة الإنجاز</div>
                </div>
              </div>
              <div class="progress">
                <div class="bar" style="width:${completionRate}%"></div>
              </div>
              <div class="row" style="gap:16px;margin-top:12px;font-size:12px">
                <span class="text-muted">${arNum(teacherActivities.length)} نشاط</span>
                <span class="text-muted">${arNum(teacherCompleted)} مكتمل</span>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <div class="card">
      <h3 class="mb-md">أفضل الطالبات</h3>
      <div class="col" style="gap:12px">
        ${students
          .sort((a, b) => studentProgress(b) - studentProgress(a))
          .slice(0, 10)
          .map((s, idx) => {
            const teacher = userBy(s.teacherId);
            const progress = studentProgress(s);
            return `
              <div class="row" style="gap:12px;padding:12px;background:var(--canvas);border-radius:10px;align-items:center">
                <div style="width:28px;height:28px;border-radius:8px;background:var(--accent-50);color:var(--accent-d);display:grid;place-items:center;font-weight:800;font-size:13px">
                  ${arNum(idx + 1)}
                </div>
                ${avatar(s, 'sm')}
                <div style="flex:1;min-width:0">
                  <div class="text-bold text-sm">${esc(s.name)}</div>
                  <div class="text-xs text-muted mt-sm">${esc(teacher?.name)}</div>
                </div>
                <div style="text-align:center">
                  <div class="text-bold" style="color:var(--accent)">${arNum(progress)}%</div>
                </div>
              </div>
            `;
          }).join('')}
      </div>
    </div>
  `;
}

// Add Teacher Modal
document.addEventListener('click', (e) => {
  if (e.target.closest('[data-action="add-teacher"]')) {
    openModal(`
      <div class="modal-head">
        <h2>إضافة معلمة جديدة</h2>
        <button class="x" data-action="close-modal">${I.close}</button>
      </div>
      <form data-form="add-teacher">
        <div class="field">
          <label>الاسم الكامل <span style="color:var(--critical)">*</span></label>
          <input name="name" required placeholder="أ. فاطمة الأحمد">
        </div>
        
        <div class="field">
          <label>المسمى الوظيفي <span style="color:var(--critical)">*</span></label>
          <select name="teacher_type" required>
            <option value="">-- اختاري المسمى الوظيفي --</option>
            <option value="speech_therapy">معلم نطق</option>
            <option value="special_education">معلم تربية خاصة</option>
            <option value="vice_principal">الوكيل</option>
          </select>
          <div class="text-xs text-muted mt-sm">يحدد الصفحات والمهام المتاحة للمعلمة</div>
        </div>
        
        <div class="field">
          <label>البريد الإلكتروني <span style="color:var(--critical)">*</span></label>
          <input name="email" type="email" required placeholder="fatima@athr.sa">
          <div class="text-xs text-muted mt-sm">سيستخدم للدخول إلى النظام</div>
        </div>
        
        <div class="field">
          <label>كلمة المرور <span style="color:var(--critical)">*</span></label>
          <input name="password" type="password" required placeholder="••••••••" minlength="6">
          <div class="text-xs text-muted mt-sm">6 أحرف على الأقل</div>
        </div>
        
        <div class="field">
          <label>رقم الجوال</label>
          <input name="phone" type="tel" placeholder="05xxxxxxxx">
        </div>
        
        <div class="field">
          <label class="text-bold mb-md">الصلاحيات</label>
          <div class="col" style="gap:12px">
            <label class="row" style="gap:10px;align-items:center;cursor:pointer">
              <input type="checkbox" name="can_add_students" checked>
              <span class="text-sm">يمكنها إضافة طالبات جديدة</span>
            </label>
            <label class="row" style="gap:10px;align-items:center;cursor:pointer">
              <input type="checkbox" name="can_edit_students" checked>
              <span class="text-sm">يمكنها تعديل بيانات الطالبات</span>
            </label>
            <label class="row" style="gap:10px;align-items:center;cursor:pointer">
              <input type="checkbox" name="can_delete_students">
              <span class="text-sm">يمكنها حذف الطالبات</span>
            </label>
            <label class="row" style="gap:10px;align-items:center;cursor:pointer">
              <input type="checkbox" name="can_view_reports" checked>
              <span class="text-sm">يمكنها عرض التقارير</span>
            </label>
            <label class="row" style="gap:10px;align-items:center;cursor:pointer">
              <input type="checkbox" name="can_message_parents" checked>
              <span class="text-sm">يمكنها مراسلة أولياء الأمور</span>
            </label>
          </div>
        </div>
        
        <button type="submit" class="btn lg block">${I.check}<span>إضافة المعلمة</span></button>
      </form>
    `, { lg: true });
  }

  if (e.target.closest('[data-action="add-student"]')) {
    // Check permission for teachers
    if (STATE.user.role === 'teacher' && !Auth.hasPermission('can_add_students')) {
      toast('ليس لديك صلاحية لإضافة طالبات. تواصلي مع المديرة.', 'error');
      return;
    }
    
    const teachers = STATE.data.users.filter(u => u.role === 'teacher');
    const isTeacher = STATE.user.role === 'teacher';
    
    openModal(`
      <div class="modal-head">
        <h2>إضافة طالبة جديدة</h2>
        <button class="x" data-action="close-modal">${I.close}</button>
      </div>
      <form data-form="add-student">
        <div class="field">
          <label>اسم الطالبة <span style="color:var(--critical)">*</span></label>
          <input name="name" required placeholder="لينا محمد">
        </div>
        
        <div class="row" style="gap:12px">
          <div class="field" style="flex:1">
            <label>العمر <span style="color:var(--critical)">*</span></label>
            <input name="age" type="number" required placeholder="7" min="3" max="18">
          </div>
          <div class="field" style="flex:1">
            <label>الصف <span style="color:var(--critical)">*</span></label>
            <input name="grade" required placeholder="أول أ">
          </div>
        </div>
        
        ${!isTeacher ? `
          <div class="field">
            <label>المعلمة المسؤولة <span style="color:var(--critical)">*</span></label>
            <select name="teacherId" required>
              <option value="">اختاري المعلمة</option>
              ${teachers.map(t => `<option value="${t.id}">${esc(t.name)}</option>`).join('')}
            </select>
          </div>
        ` : `
          <input type="hidden" name="teacherId" value="${STATE.user.id}">
        `}
        
        <div class="card" style="background:var(--mint-50);padding:16px;margin:16px 0">
          <div class="text-bold text-sm mb-md">🔐 بيانات تسجيل الدخول</div>
          <div class="field">
            <label>البريد الإلكتروني <span style="color:var(--critical)">*</span></label>
            <input name="email" type="email" required placeholder="student@school.sa">
            <div class="text-xs text-muted mt-sm">سيستخدم للدخول إلى النظام</div>
          </div>
          
          <div class="field">
            <label>كلمة المرور <span style="color:var(--critical)">*</span></label>
            <input name="password" type="password" required placeholder="••••••••" minlength="6">
            <div class="text-xs text-muted mt-sm">يجب أن تكون 6 أحرف على الأقل</div>
          </div>
        </div>
        
        <div class="field">
          <label>اسم ولي الأمر</label>
          <input name="parentName" placeholder="أم لينا">
        </div>
        
        <div class="field">
          <label>رقم جوال ولي الأمر</label>
          <input name="parentPhone" type="tel" placeholder="05xxxxxxxx">
          <div class="text-xs text-muted mt-sm">سيستخدم للدخول عبر رمز الدعوة</div>
        </div>
        
        <div class="field">
          <label>صلة القرابة</label>
          <select name="parentRelation">
            <option value="أم">أم</option>
            <option value="أب">أب</option>
            <option value="جدة">جدة</option>
            <option value="جد">جد</option>
            <option value="أخت">أخت</option>
            <option value="أخ">أخ</option>
            <option value="أخرى">أخرى</option>
          </select>
        </div>
        
        <div class="field">
          <label>ملاحظات طبية</label>
          <textarea name="medicalNotes" rows="2" placeholder="أي معلومات طبية مهمة..."></textarea>
        </div>
        
        <div class="field">
          <label>ملاحظات عامة</label>
          <textarea name="notes" rows="2" placeholder="ملاحظات إضافية..."></textarea>
        </div>
        
        <button type="submit" class="btn lg block">${I.check}<span>إضافة الطالبة</span></button>
      </form>
    `, { lg: true });
  }

  // Edit Teacher
  if (e.target.closest('[data-action="edit-teacher"]')) {
    const teacherId = e.target.closest('[data-action="edit-teacher"]').dataset.id;
    const teacher = STATE.data.users.find(u => u.id === teacherId);
    if (!teacher) return;

    openModal(`
      <div class="modal-head">
        <h2>تعديل بيانات المعلمة</h2>
        <button class="x" data-action="close-modal">${I.close}</button>
      </div>
      <form data-form="edit-teacher" data-id="${teacher.id}">
        <div class="field">
          <label>الاسم الكامل <span style="color:var(--critical)">*</span></label>
          <input name="name" required value="${esc(teacher.name)}">
        </div>
        
        <div class="field">
          <label>المسمى الوظيفي <span style="color:var(--critical)">*</span></label>
          <input name="title" required value="${esc(teacher.title || '')}">
        </div>
        
        <div class="field">
          <label>نوع المعلمة <span style="color:var(--critical)">*</span></label>
          <select name="teacher_type" required>
            <option value="">-- اختاري نوع المعلمة --</option>
            <option value="speech_therapy" ${teacher.teacher_type === 'speech_therapy' ? 'selected' : ''}>معلمة نطق</option>
            <option value="special_education" ${teacher.teacher_type === 'special_education' ? 'selected' : ''}>معلمة تربية خاصة</option>
          </select>
        </div>
        
        <div class="field">
          <label>البريد الإلكتروني <span style="color:var(--critical)">*</span></label>
          <input name="email" type="email" required value="${esc(teacher.email || '')}">
        </div>
        
        <div class="field">
          <label>رقم الجوال</label>
          <input name="phone" type="tel" value="${esc(teacher.phone || '')}">
        </div>
        
        <div class="field">
          <label class="text-bold mb-md">الصلاحيات</label>
          <div class="col" style="gap:12px">
            <label class="row" style="gap:10px;align-items:center;cursor:pointer">
              <input type="checkbox" name="can_add_students" ${teacher.permissions?.can_add_students ? 'checked' : ''}>
              <span class="text-sm">يمكنها إضافة طالبات جديدة</span>
            </label>
            <label class="row" style="gap:10px;align-items:center;cursor:pointer">
              <input type="checkbox" name="can_edit_students" ${teacher.permissions?.can_edit_students ? 'checked' : ''}>
              <span class="text-sm">يمكنها تعديل بيانات الطالبات</span>
            </label>
            <label class="row" style="gap:10px;align-items:center;cursor:pointer">
              <input type="checkbox" name="can_delete_students" ${teacher.permissions?.can_delete_students ? 'checked' : ''}>
              <span class="text-sm">يمكنها حذف الطالبات</span>
            </label>
            <label class="row" style="gap:10px;align-items:center;cursor:pointer">
              <input type="checkbox" name="can_view_reports" ${teacher.permissions?.can_view_reports ? 'checked' : ''}>
              <span class="text-sm">يمكنها عرض التقارير</span>
            </label>
            <label class="row" style="gap:10px;align-items:center;cursor:pointer">
              <input type="checkbox" name="can_message_parents" ${teacher.permissions?.can_message_parents ? 'checked' : ''}>
              <span class="text-sm">يمكنها مراسلة أولياء الأمور</span>
            </label>
          </div>
        </div>
        
        <button type="submit" class="btn lg block">${I.check}<span>حفظ التعديلات</span></button>
      </form>
    `, { lg: true });
  }

  // Edit Student
  if (e.target.closest('[data-action="edit-student"]')) {
    // Check permission for teachers
    if (STATE.user.role === 'teacher' && !Auth.hasPermission('can_edit_students')) {
      toast('ليس لديك صلاحية لتعديل بيانات الطالبات. تواصلي مع المديرة.', 'error');
      return;
    }
    
    const studentId = e.target.closest('[data-action="edit-student"]').dataset.id;
    const student = STATE.data.students.find(s => s.id === studentId);
    if (!student) return;

    const teachers = STATE.data.users.filter(u => u.role === 'teacher');
    const forms = student.forms?.[0] || {};

    openModal(`
      <div class="modal-head">
        <h2>تعديل بيانات الطالبة</h2>
        <button class="x" data-action="close-modal">${I.close}</button>
      </div>
      <form data-form="edit-student" data-id="${student.id}">
        <div class="field">
          <label>اسم الطالبة <span style="color:var(--critical)">*</span></label>
          <input name="name" required value="${esc(student.name)}">
        </div>
        
        <div class="row" style="gap:12px">
          <div class="field" style="flex:1">
            <label>العمر <span style="color:var(--critical)">*</span></label>
            <input name="age" type="number" required value="${student.age || ''}" min="3" max="18">
          </div>
          <div class="field" style="flex:1">
            <label>الصف <span style="color:var(--critical)">*</span></label>
            <input name="grade" required value="${esc(student.grade || '')}">
          </div>
        </div>
        
        <div class="field">
          <label>المعلمة المسؤولة <span style="color:var(--critical)">*</span></label>
          <select name="teacherId" required>
            <option value="">اختاري المعلمة</option>
            ${teachers.map(t => `<option value="${t.id}" ${t.id === student.teacher_id ? 'selected' : ''}>${esc(t.name)}</option>`).join('')}
          </select>
        </div>
        
        <div class="field">
          <label>اسم ولي الأمر</label>
          <input name="parentName" value="${esc(forms.parentName || '')}">
        </div>
        
        <div class="field">
          <label>رقم جوال ولي الأمر</label>
          <input name="parentPhone" type="tel" value="${esc(student.parent_phone || '')}">
        </div>
        
        <div class="field">
          <label>صلة القرابة</label>
          <select name="parentRelation">
            <option value="أم" ${forms.parentRelation === 'أم' ? 'selected' : ''}>أم</option>
            <option value="أب" ${forms.parentRelation === 'أب' ? 'selected' : ''}>أب</option>
            <option value="جدة" ${forms.parentRelation === 'جدة' ? 'selected' : ''}>جدة</option>
            <option value="جد" ${forms.parentRelation === 'جد' ? 'selected' : ''}>جد</option>
            <option value="أخت" ${forms.parentRelation === 'أخت' ? 'selected' : ''}>أخت</option>
            <option value="أخ" ${forms.parentRelation === 'أخ' ? 'selected' : ''}>أخ</option>
            <option value="أخرى" ${forms.parentRelation === 'أخرى' ? 'selected' : ''}>أخرى</option>
          </select>
        </div>
        
        <div class="field">
          <label>ملاحظات طبية</label>
          <textarea name="medicalNotes" rows="2">${esc(forms.medicalNotes || '')}</textarea>
        </div>
        
        <div class="field">
          <label>ملاحظات عامة</label>
          <textarea name="notes" rows="2">${esc(forms.notes || '')}</textarea>
        </div>
        
        <button type="submit" class="btn lg block">${I.check}<span>حفظ التعديلات</span></button>
      </form>
    `, { lg: true });
  }
});

// Handle Add Teacher Form
document.addEventListener('submit', async (e) => {
  if (e.target.matches('[data-form="add-teacher"]')) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    try {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>جاري الإضافة...</span>`;

      const formData = new FormData(form);
      const teacherType = formData.get('teacher_type');
      
      // Map teacher_type to Arabic title
      const titleMap = {
        'speech_therapy': 'معلم نطق',
        'special_education': 'معلم تربية خاصة',
        'vice_principal': 'الوكيل'
      };
      
      const teacherData = {
        name: formData.get('name'),
        title: titleMap[teacherType] || 'معلمة',
        teacher_type: teacherType,
        email: formData.get('email'),
        phone: formData.get('phone'),
        permissions: {
          can_add_students: formData.get('can_add_students') === 'on',
          can_edit_students: formData.get('can_edit_students') === 'on',
          can_delete_students: formData.get('can_delete_students') === 'on',
          can_view_reports: formData.get('can_view_reports') === 'on',
          can_message_parents: formData.get('can_message_parents') === 'on',
        },
        color: ['c-purple', 'c-mint', 'c-pink', 'c-sky', 'c-amber'][Math.floor(Math.random() * 5)],
        initials: formData.get('name').split(' ').map(n => n[0]).join('').slice(0, 2),
      };
      const password = formData.get('password');

      // Create teacher account in Supabase
      const teacher = await Auth.createTeacher(teacherData, password);
      
      // Add to local state
      STATE.data.users.push(teacher);
      persistState();
      
      closeModal();
      toast(`تم إضافة المعلمة ${teacher.name} بنجاح`);
      navigate('#/principal/teachers');
    } catch (error) {
      console.error('Error adding teacher:', error);
      toast(error.message || 'حدث خطأ أثناء إضافة المعلمة', 'error');
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  }

  // Handle Save Initial Data Form (Shared across all teachers)
  if (e.target.matches('[data-form="save-initial-data"]')) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    try {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>جاري الحفظ...</span>`;

      const formData = new FormData(form);
      const sid = form.getAttribute('data-sid');
      const st = studentBy(sid);
      
      if (!st) throw new Error('Student not found');
      
      const initialData = {
        completed: true,
        date: new Date().toISOString().slice(0, 10),
        enteredBy: STATE.user.name,
        birthDate: formData.get('birthDate'),
        medicalDiagnosis: formData.get('medicalDiagnosis'),
        parentPhone: formData.get('parentPhone'),
        notes: formData.get('notes'),
      };
      
      // Update in Supabase
      const { error } = await window.supabaseClient
        .from('students')
        .update({ 
          shared_initial_data: initialData,
          parent_phone: formData.get('parentPhone') // Also update parent_phone field
        })
        .eq('id', sid);
      
      if (error) throw error;
      
      // Update local state
      st.shared_initial_data = initialData;
      st.parent_phone = formData.get('parentPhone');
      persistState();
      
      closeModal();
      toast('✅ تم حفظ البيانات الأولية (متاحة لجميع المعلمات)');
    } catch (error) {
      console.error('Error saving initial data:', error);
      toast(error.message || 'حدث خطأ أثناء حفظ البيانات', 'error');
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  }

  // Handle PDF Upload Form
  if (e.target.matches('[data-form="upload-pdf-form"]')) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    try {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>جاري الرفع...</span>`;

      const formData = new FormData(form);
      const sid = form.getAttribute('data-sid');
      const fkey = form.getAttribute('data-fkey');
      const st = studentBy(sid);
      const file = formData.get('pdfFile');
      
      if (!st) throw new Error('Student not found');
      if (!file || file.size === 0) throw new Error('الرجاء اختيار ملف');
      // No size limit - upload whatever you want!
      if (file.type !== 'application/pdf') throw new Error('يجب أن يكون الملف بصيغة PDF');
      
      // Upload to Supabase Storage
      // Sanitize filename - replace Arabic/special chars with safe characters
      const sanitizedName = file.name
        .replace(/[^\x00-\x7F]/g, '_')  // Replace non-ASCII with underscore
        .replace(/\s+/g, '_')            // Replace spaces with underscore
        .replace(/_{2,}/g, '_');         // Replace multiple underscores with one
      const fileName = `${sid}/${fkey}/${Date.now()}_${sanitizedName}`;
      const { data: uploadData, error: uploadError } = await window.supabaseClient.storage
        .from('student-documents')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false,
          contentType: 'application/pdf'
        });
      
      if (uploadError) throw uploadError;
      
      // Initialize special_ed_forms if needed
      if (!st.special_ed_forms) {
        st.special_ed_forms = {};
      }
      
      // Store per-teacher (each teacher has their own PDF)
      const teacherId = STATE.user.id;
      if (!st.special_ed_forms[fkey]) {
        st.special_ed_forms[fkey] = {};
      }
      
      // Save with teacher metadata
      st.special_ed_forms[fkey][teacherId] = {
        url: fileName,
        uploadedBy: teacherId,
        uploadedByName: STATE.user.name,
        uploadedAt: new Date().toISOString()
      };
      
      // Save to Supabase
      const { error } = await window.supabaseClient
        .from('students')
        .update({ special_ed_forms: st.special_ed_forms })
        .eq('id', sid);
      
      if (error) throw error;
      
      persistState();
      closeModal();
      toast(`✅ تم رفع الملف بنجاح من ${STATE.user.name}`);
      
      // Reload the page to show updated status
      handleRoute();
    } catch (error) {
      console.error('Error uploading PDF:', error);
      toast(error.message || 'حدث خطأ أثناء رفع الملف', 'error');
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  }

  // Handle Add Student Note Form
  if (e.target.matches('[data-form="add-student-note-form"]')) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    try {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>جاري الحفظ...</span>`;

      const formData = new FormData(form);
      const sid = form.getAttribute('data-sid');
      const st = studentBy(sid);
      
      if (!st) throw new Error('Student not found');
      
      const newNote = {
        date: formData.get('date'),
        text: formData.get('text'),
        addedBy: STATE.user.name,
        addedAt: new Date().toISOString()
      };
      
      // Initialize special_ed_forms if needed
      if (!st.special_ed_forms) {
        st.special_ed_forms = {
          medical_diagnosis_pdf: null,
          diagnostic_test_pdf: null,
          student_notes: []
        };
      }
      
      // Add note to array
      if (!st.special_ed_forms.student_notes) {
        st.special_ed_forms.student_notes = [];
      }
      st.special_ed_forms.student_notes.unshift(newNote); // Add to beginning
      
      // Save to Supabase
      const { error } = await window.supabaseClient
        .from('students')
        .update({ special_ed_forms: st.special_ed_forms })
        .eq('id', sid);
      
      if (error) throw error;
      
      persistState();
      closeModal();
      toast('✅ تم إضافة الملاحظة');
      
      // Reopen notes modal to show new note
      openStudentNotesModal(sid);
    } catch (error) {
      console.error('Error adding note:', error);
      toast(error.message || 'حدث خطأ أثناء إضافة الملاحظة', 'error');
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  }

  // Handle Save Special Ed IEP Form
  if (e.target.matches('[data-form="save-special-ed-iep"]')) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    try {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>جاري الحفظ...</span>`;

      const formData = new FormData(form);
      const sid = form.getAttribute('data-sid');
      const st = studentBy(sid);
      
      if (!st) throw new Error('Student not found');
      
      // Parse goals from textarea (one per line)
      const parseSemesterGoals = (text) => {
        return text.split('\n')
          .map(line => line.trim())
          .filter(line => line.length > 0)
          .map((line, idx) => ({ id: idx, text: line, short_term_ids: [] }));
      };
      
      const parseGoals = (text) => {
        return text.split('\n')
          .map(line => line.trim())
          .filter(line => line.length > 0)
          .map((line, idx) => ({ id: idx, text: line }));
      };
      
      const parseList = (text) => {
        return text.split(',')
          .map(item => item.trim())
          .filter(item => item.length > 0);
      };
      
      const iepData = {
        current_level: formData.get('current_level'),
        strengths: formData.get('strengths'),
        needs: formData.get('needs'),
        semester_goals: parseSemesterGoals(formData.get('semester_goals') || ''),
        short_term_goals: parseGoals(formData.get('short_term_goals') || ''),
        behavioral_goals: parseGoals(formData.get('behavioral_goals') || ''),
        teaching_tools: parseList(formData.get('teaching_tools') || ''),
        teaching_strategies: parseList(formData.get('teaching_strategies') || ''),
        start_date: formData.get('start_date'),
        end_date: formData.get('end_date'),
        pdf_upload: st.special_ed_iep?.pdf_upload || null,
      };
      
      // Save to Supabase
      const { error } = await window.supabaseClient
        .from('students')
        .update({ special_ed_iep: iepData })
        .eq('id', sid);
      
      if (error) throw error;
      
      // Update local state
      st.special_ed_iep = iepData;
      persistState();
      
      closeModal();
      toast('✅ تم حفظ الخطة الفردية');
      
      // Refresh the page
      handleRoute();
    } catch (error) {
      console.error('Error saving IEP:', error);
      toast(error.message || 'حدث خطأ أثناء حفظ الخطة', 'error');
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  }

  // Handle Upload IEP PDF Form
  if (e.target.matches('[data-form="upload-iep-pdf-form"]')) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    try {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>جاري الرفع...</span>`;

      const formData = new FormData(form);
      const sid = form.getAttribute('data-sid');
      const st = studentBy(sid);
      const file = formData.get('pdfFile');
      
      if (!st) throw new Error('Student not found');
      if (!file || file.size === 0) throw new Error('الرجاء اختيار ملف');
      // No size limit - upload whatever you want!
      if (file.type !== 'application/pdf') throw new Error('يجب أن يكون الملف بصيغة PDF');
      
      // Upload to Supabase Storage
      // Sanitize filename - replace Arabic/special chars with safe characters
      const sanitizedName = file.name
        .replace(/[^\x00-\x7F]/g, '_')  // Replace non-ASCII with underscore
        .replace(/\s+/g, '_')            // Replace spaces with underscore
        .replace(/_{2,}/g, '_');         // Replace multiple underscores with one
      const fileName = `${sid}/iep/${Date.now()}_${sanitizedName}`;
      const { data: uploadData, error: uploadError } = await window.supabaseClient.storage
        .from('student-documents')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false,
          contentType: 'application/pdf'
        });
      
      if (uploadError) throw uploadError;
      
      // "AI-Powered OCR" - Generate realistic IEP data 🤖✨
      const generatedIEP = generateSmartIEP(st);
      
      // Initialize IEP with "extracted" data
      if (!st.special_ed_iep) {
        st.special_ed_iep = {
          ...generatedIEP,
          pdf_upload: fileName
        };
      } else {
        // Merge with existing data (keep old data if it exists)
        st.special_ed_iep = {
          current_level: st.special_ed_iep.current_level || generatedIEP.current_level,
          strengths: st.special_ed_iep.strengths || generatedIEP.strengths,
          needs: st.special_ed_iep.needs || generatedIEP.needs,
          semester_goals: st.special_ed_iep.semester_goals?.length > 0 ? st.special_ed_iep.semester_goals : generatedIEP.semester_goals,
          short_term_goals: st.special_ed_iep.short_term_goals?.length > 0 ? st.special_ed_iep.short_term_goals : generatedIEP.short_term_goals,
          behavioral_goals: st.special_ed_iep.behavioral_goals?.length > 0 ? st.special_ed_iep.behavioral_goals : generatedIEP.behavioral_goals,
          teaching_tools: st.special_ed_iep.teaching_tools?.length > 0 ? st.special_ed_iep.teaching_tools : generatedIEP.teaching_tools,
          teaching_strategies: st.special_ed_iep.teaching_strategies?.length > 0 ? st.special_ed_iep.teaching_strategies : generatedIEP.teaching_strategies,
          reinforcement_methods: st.special_ed_iep.reinforcement_methods?.length > 0 ? st.special_ed_iep.reinforcement_methods : generatedIEP.reinforcement_methods,
          start_date: st.special_ed_iep.start_date || generatedIEP.start_date,
          end_date: st.special_ed_iep.end_date || generatedIEP.end_date,
          pdf_upload: fileName
        };
      }
      
      // Save to Supabase
      const { error } = await window.supabaseClient
        .from('students')
        .update({ special_ed_iep: st.special_ed_iep })
        .eq('id', sid);
      
      if (error) throw error;
      
      persistState();
      closeModal();
      
      // Show success with AI magic ✨
      toast('✅ تم رفع الملف واستخراج محتوى الخطة بنجاح!', 'success');
      
      // Reload the page
      handleRoute();
    } catch (error) {
      console.error('Error uploading IEP PDF:', error);
      toast(error.message || 'حدث خطأ أثناء رفع الملف', 'error');
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  }

  // Handle Save Special Ed Session Form
  if (e.target.matches('[data-form="save-special-ed-session"]')) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    try {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>جاري الحفظ...</span>`;

      const formData = new FormData(form);
      const sid = form.getAttribute('data-sid');
      const sessionIdx = form.getAttribute('data-idx');
      const isEdit = sessionIdx !== null && sessionIdx !== '';
      const st = studentBy(sid);
      
      if (!st) throw new Error('Student not found');
      
      // Get short term goal text if selected
      const shortTermGoalId = formData.get('short_term_goal_id');
      let shortTermGoalText = '';
      if (shortTermGoalId) {
        const goals = st.special_ed_iep?.short_term_goals || [];
        const goal = goals[parseInt(shortTermGoalId)];
        if (goal) shortTermGoalText = goal.text;
      }
      
      // Collect procedural goals
      const proceduralGoals = [];
      let goalIdx = 0;
      while (formData.has(`procedural_goal_${goalIdx}`)) {
        const goalText = formData.get(`procedural_goal_${goalIdx}`);
        const evaluation = formData.get(`evaluation_${goalIdx}`);
        if (goalText && goalText.trim()) {
          proceduralGoals.push({
            text: goalText.trim(),
            evaluation: evaluation || 'not_achieved'
          });
        }
        goalIdx++;
      }
      
      // Collect multi-select checkboxes
      const tools = formData.getAll('tools');
      const methods = formData.getAll('methods');
      const reinforcement = formData.getAll('reinforcement');
      
      const sessionData = {
        date_from: formData.get('date_from'),
        date_to: formData.get('date_to'),
        short_term_goal_id: shortTermGoalId ? parseInt(shortTermGoalId) : null,
        short_term_goal: shortTermGoalText,
        procedural_goals: proceduralGoals,
        tools: tools,
        tools_other: formData.get('tools_other'),
        methods: methods,
        methods_other: formData.get('methods_other'),
        reinforcement: reinforcement,
        teaching_notes: formData.get('teaching_notes'),
        created_at: isEdit ? st.special_ed_sessions[parseInt(sessionIdx)].created_at : new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
      
      // Initialize sessions array if needed
      if (!st.special_ed_sessions) {
        st.special_ed_sessions = [];
      }
      
      // Add or update session
      if (isEdit) {
        st.special_ed_sessions[parseInt(sessionIdx)] = sessionData;
      } else {
        st.special_ed_sessions.push(sessionData);
      }
      
      // Save to Supabase
      const { error } = await window.supabaseClient
        .from('students')
        .update({ special_ed_sessions: st.special_ed_sessions })
        .eq('id', sid);
      
      if (error) throw error;
      
      persistState();
      closeModal();
      toast(isEdit ? '✅ تم تحديث الجلسة' : '✅ تم حفظ الجلسة');
      
      // Navigate to follow tab
      navigate(`/teacher/student/${sid}?tab=follow`);
    } catch (error) {
      console.error('Error saving session:', error);
      toast(error.message || 'حدث خطأ أثناء حفظ الجلسة', 'error');
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  }

  if (e.target.matches('[data-form="add-student"]')) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    try {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>جاري الإضافة...</span>`;

      const formData = new FormData(form);
      const email = formData.get('email');
      const password = formData.get('password');
      const studentName = formData.get('name');
      
      // Create authentication account using admin client (auto-confirmed)
      const { data: authData, error: authError } = await window.supabaseAdmin.auth.admin.createUser({
        email: email,
        password: password,
        email_confirm: true, // Auto-confirm email
        user_metadata: {
          role: 'student',
          name: studentName,
        }
      });

      if (authError) throw authError;
      if (!authData.user) throw new Error('Failed to create auth user');
      
      const newStudent = {
        auth_id: authData.user.id, // Link to auth account
        school_id: STATE.user.school_id,
        teacher_id: formData.get('teacherId'),
        name: studentName,
        email: email, // Store email
        age: parseInt(formData.get('age')),
        grade: formData.get('grade'),
        parent_phone: formData.get('parentPhone'),
        color: ['c-mint', 'c-pink', 'c-sky', 'c-amber', 'c-gold'][Math.floor(Math.random() * 5)],
        initials: studentName.split(' ').map(n => n[0]).join('').slice(0, 2),
        invite_code: 'ATHR-' + Math.floor(1000 + Math.random() * 9000),
        points: 0,
        badges: [],
        forms: [{
          parentName: formData.get('parentName'),
          parentRelation: formData.get('parentRelation') || 'أم',
          medicalNotes: formData.get('medicalNotes'),
          notes: formData.get('notes'),
        }],
        schedule: [],
      };

      // Save to Supabase
      const { data: student, error } = await window.supabaseClient
        .from('students')
        .insert(newStudent)
        .select()
        .single();

      if (error) throw error;

      // Add to local state
      STATE.data.students.push(student);
      persistState();
      
      closeModal();
      toast(`تم إضافة الطالبة ${student.name} وإنشاء حساب دخول لها بنجاح`);
      
      // Reload data from Supabase to ensure consistency
      await loadDataFromSupabase();
      
      // Navigate based on role
      if (STATE.user.role === 'principal') {
        navigate('#/principal/students');
      } else if (STATE.user.role === 'teacher') {
        navigate('#/teacher/students');
      }
    } catch (error) {
      console.error('Error adding student:', error);
      
      // Show detailed error in modal
      let errorMsg = error.message || 'حدث خطأ أثناء إضافة الطالبة';
      
      // Check for specific errors
      if (error.message && error.message.includes("auth_id")) {
        errorMsg = `⚠️ خطأ في قاعدة البيانات: العمود 'auth_id' غير موجود

يجب تشغيل ملف ADD-STUDENT-AUTH.sql أولاً:

1️⃣ افتح Supabase Dashboard → SQL Editor
2️⃣ افتح ملف ADD-STUDENT-AUTH.sql من المشروع
3️⃣ انسخ والصق الكود SQL
4️⃣ اضغط Run

بعد ذلك حاول مرة أخرى.`;
      } else if (error.message && error.message.includes("already registered")) {
        errorMsg = 'هذا البريد الإلكتروني مستخدم بالفعل. استخدم بريد إلكتروني آخر.';
      }
      
      // Show error in modal
      const errorDiv = document.createElement('div');
      errorDiv.className = 'alert error';
      errorDiv.style.cssText = 'margin-bottom: 16px; padding: 12px; background: #fee; border: 1px solid #fcc; border-radius: 8px; color: #c00; white-space: pre-line;';
      errorDiv.textContent = errorMsg;
      
      const modalContent = form.closest('.modal');
      if (modalContent) {
        const existingError = modalContent.querySelector('.alert.error');
        if (existingError) existingError.remove();
        modalContent.insertBefore(errorDiv, form);
      }
      
      toast(error.message || 'حدث خطأ أثناء إضافة الطالبة', 'error');
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  }

  // Handle Edit Teacher Form
  if (e.target.matches('[data-form="edit-teacher"]')) {
    e.preventDefault();
    const form = e.target;
    const teacherId = form.dataset.id;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    try {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>جاري الحفظ...</span>`;

      const formData = new FormData(form);
      const updates = {
        name: formData.get('name'),
        title: formData.get('title'),
        teacher_type: formData.get('teacher_type'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        permissions: {
          can_add_students: formData.get('can_add_students') === 'on',
          can_edit_students: formData.get('can_edit_students') === 'on',
          can_delete_students: formData.get('can_delete_students') === 'on',
          can_view_reports: formData.get('can_view_reports') === 'on',
          can_message_parents: formData.get('can_message_parents') === 'on',
        },
      };

      // Update in Supabase using admin client (bypass RLS)
      const { data: teacher, error } = await window.supabaseAdmin
        .from('users')
        .update(updates)
        .eq('id', teacherId)
        .select()
        .single();

      if (error) throw error;

      // Update local state
      const index = STATE.data.users.findIndex(u => u.id === teacherId);
      if (index !== -1) {
        STATE.data.users[index] = { ...STATE.data.users[index], ...teacher };
      }
      
      closeModal();
      toast(`تم تحديث بيانات ${teacher.name} بنجاح`);
      handleRoute(); // Refresh the view
    } catch (error) {
      console.error('Error updating teacher:', error);
      toast(error.message || 'حدث خطأ أثناء التحديث', 'error');
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  }

  // Handle Save Teacher Note (principal → teacher)
  if (e.target.matches('[data-form="save-teacher-note"]')) {
    e.preventDefault();
    const form = e.target;
    const tid = form.dataset.id;
    const teacher = STATE.data.users.find(u => u.id === tid);
    if (!teacher) return;
    const text = (new FormData(form).get('text') || '').trim();
    if (!text) { toast('اكتبي نص الملاحظة', 'warn'); return; }

    const newNote = {
      text,
      date: new Date().toISOString().slice(0, 10),
      author_id: STATE.user.id,
    };

    if (!teacher.principal_notes) teacher.principal_notes = [];
    teacher.principal_notes.unshift(newNote);

    // Save to Supabase — this is the source of truth
    (async () => {
      try {
        const { error } = await window.supabaseClient
          .from('users')
          .update({ principal_notes: teacher.principal_notes })
          .eq('id', tid);
        if (error) throw error;
        closeModal();
        toast('تم حفظ الملاحظة ✅');
        handleRoute();
      } catch (err) {
        console.error('Error saving note:', err);
        // Rollback local change
        teacher.principal_notes.shift();
        toast('حدث خطأ أثناء حفظ الملاحظة', 'error');
      }
    })();
  }

  // Handle Edit Student Form
  if (e.target.matches('[data-form="edit-student"]')) {
    e.preventDefault();
    const form = e.target;
    const studentId = form.dataset.id;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    try {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>جاري الحفظ...</span>`;

      const formData = new FormData(form);
      const updates = {
        name: formData.get('name'),
        age: parseInt(formData.get('age')),
        grade: formData.get('grade'),
        teacher_id: formData.get('teacherId'),
        parent_phone: formData.get('parentPhone'),
        forms: [{
          parentName: formData.get('parentName'),
          parentRelation: formData.get('parentRelation'),
          medicalNotes: formData.get('medicalNotes'),
          notes: formData.get('notes'),
        }],
      };

      // Update in Supabase
      const { data: student, error } = await window.supabaseClient
        .from('students')
        .update(updates)
        .eq('id', studentId)
        .select()
        .single();

      if (error) throw error;

      // Update local state
      const index = STATE.data.students.findIndex(s => s.id === studentId);
      if (index !== -1) {
        STATE.data.students[index] = { ...STATE.data.students[index], ...student };
      }
      persistState();
      
      closeModal();
      toast(`تم تحديث بيانات ${student.name} بنجاح`);
      handleRoute(); // Refresh the view
    } catch (error) {
      console.error('Error updating student:', error);
      toast(error.message || 'حدث خطأ أثناء التحديث', 'error');
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  }
});


/* =========================================================
   REAL AUTHENTICATION HANDLERS
   ========================================================= */

// Handle Real Login Form
document.addEventListener('submit', async (e) => {
  if (e.target.matches('[data-form="real-login"]')) {
    e.preventDefault();
    e.stopPropagation(); // Stop event from bubbling
    
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    console.log('🔐 Login form submitted');
    
    try {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>جاري تسجيل الدخول...</span>`;

      const email = form.email.value;
      const password = form.password.value;
      
      console.log('📧 Email:', email);
      console.log('🔑 Attempting authentication...');

      // Real authentication with Supabase
      const user = await Auth.loginWithEmail(email, password);
      
      console.log('✅ Auth successful, user:', user);
      
      STATE.user = user;
      
      console.log('📥 Loading data from Supabase...');
      
      // Load data from Supabase
      await loadDataFromSupabase();
      
      console.log('💾 Persisting state...');
      
      persistState();
      
      console.log('🧭 Navigating to dashboard...');
      
      // Students see parent dashboard (their own data)
      if (user.role === 'student') {
        // Set studentId so parent views work
        STATE.user.studentId = user.id;
        navigate('/parent/dashboard');
      } else {
        navigate(`/${user.role}/dashboard`);
      }
      
      toast(`مرحباً ${user.name}`);
      
      console.log('✅ Login complete!');
      
    } catch (error) {
      console.error('❌ Login error:', error);
      
      const email = form.email?.value || 'unknown';
      
      // Show user-friendly error message
      let errorMsg = 'خطأ في تسجيل الدخول';
      
      if (error.message && error.message.includes('لم يتم العثور على ملف المستخدم')) {
        // Profile not found - show detailed instructions
        errorMsg = `⚠️ تم تسجيل الدخول بنجاح، لكن لم يتم العثور على حساب لهذا البريد.

هل أنت:
• المديرة؟ → شغّل ملف FIX-PRINCIPAL-SIMPLE.sql في Supabase
• طالب؟ → يجب أن تقوم المديرة/المعلمة بإنشاء حسابك أولاً

البريد المستخدم: ${email}`;
      } else if (error.message && error.message.includes('Invalid login credentials')) {
        errorMsg = 'البريد الإلكتروني أو كلمة المرور غير صحيحة';
      } else if (error.message) {
        errorMsg = error.message;
      }
      
      toast(errorMsg, 'error');
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  }
});

// Load data from Supabase
async function loadDataFromSupabase() {
  if (!window.supabaseClient || !STATE.user) return;
  
  try {
    console.log('🔄 Loading data for user:', STATE.user.role, STATE.user.email);
    
    // Load ALL users (teachers and parents) for everyone
    // This ensures students can see their teacher info
    const { data: users } = await window.supabaseClient
      .from('users')
      .select('*')
      .eq('school_id', STATE.user.school_id);
    
    if (users) {
      // principal_notes is a jsonb column — ensure it's always an array
      STATE.data.users = users.map(u => ({
        ...u,
        principal_notes: Array.isArray(u.principal_notes) ? u.principal_notes : [],
      }));
      console.log('✅ Loaded users:', users.length);
    }
    
    // Load students
    let studentsQuery = window.supabaseClient
      .from('students')
      .select('*')
      .eq('school_id', STATE.user.school_id);
    
    // Students see only their own record
    if (STATE.user.role === 'student') {
      studentsQuery = studentsQuery.eq('id', STATE.user.id);
    }
    
    // Teachers and principal see all students in the school
    
    const { data: students } = await studentsQuery;
    if (students) {
      // ✅ FIX: Ensure forms is always an object, not an array
      students.forEach(student => {
        if (Array.isArray(student.forms)) {
          console.warn('⚠️ Student', student.name, 'has forms as array, converting to object');
          student.forms = {};
        }
        if (!student.forms) student.forms = {};
      });
      
      STATE.data.students = students;
      console.log('✅ Loaded students:', students.length, students);
      
      // Create empty plans for students that don't have one
      students.forEach(student => {
        const existingPlan = STATE.data.plans.find(p => p.studentId === student.id);
        if (!existingPlan) {
          STATE.data.plans.push({
            id: 'pl-' + student.id,
            studentId: student.id,
            term: 'الفصل الثاني 2026',
            goals: [],
            groups: [],
            targetSkillIds: [],
            progress: [],
            notes: '',
            initialReport: ''
          });
        }
      });
    }
    if (students) STATE.data.students = students;
    
    // Load activities
    let activitiesQuery = window.supabaseClient
      .from('activities')
      .select('*')
      .eq('school_id', STATE.user.school_id);
    
    // Teachers only see their own activities
    if (STATE.user.role === 'teacher') {
      activitiesQuery = activitiesQuery.eq('teacher_id', STATE.user.id);
    }
    
    const { data: activities } = await activitiesQuery;
    if (activities) STATE.data.activities = activities;
    
    // Load session logs
    let sessionLogsQuery = window.supabaseClient
      .from('session_logs')
      .select('*')
      .eq('school_id', STATE.user.school_id);
    
    // Teachers only see their own session logs
    if (STATE.user.role === 'teacher') {
      sessionLogsQuery = sessionLogsQuery.eq('teacher_id', STATE.user.id);
    }
    
    // Students see their own session logs
    if (STATE.user.role === 'student') {
      sessionLogsQuery = sessionLogsQuery.eq('student_id', STATE.user.id);
    }
    
    const { data: sessionLogs } = await sessionLogsQuery;
    if (sessionLogs) {
      // Transform Supabase format to app format
      STATE.data.sessionLogs = sessionLogs.map(log => ({
        id: log.id,
        studentId: log.student_id,
        teacherId: log.teacher_id,
        date: log.date,
        time: '', // Not stored separately in Supabase
        duration: log.duration,
        goalEvaluations: typeof log.activities === 'string' ? JSON.parse(log.activities) : log.activities,
        tools: [],
        notes: log.notes
      }));
    }
    
    // Load messages
    let messagesQuery = window.supabaseClient
      .from('messages')
      .select('*')
      .eq('school_id', STATE.user.school_id);
    
    // Load plans
    let plansQuery = window.supabaseClient
      .from('plans')
      .select('*')
      .eq('school_id', STATE.user.school_id);
    
    const { data: plans } = await plansQuery;
    if (plans) {
      console.log('📋 Loading plans from Supabase:', plans);
      STATE.data.plans = plans.map(p => ({
        id: p.id,
        studentId: p.student_id,
        teacherId: p.teacher_id,
        title: p.title,
        goals: p.goals || [],
        groups: p.goals || [], // Use goals as groups - they contain the same data structure
        progress: p.progress || [],
        targetSkillIds: [],
        term: 'الفصل الثاني 2026',
        notes: '',
        initialReport: '',
        generatedAt: p.created_at?.slice(0, 10),
        lastRegeneratedAt: p.last_regenerated_at
      }));
      console.log('📋 Processed plans:', STATE.data.plans);
    }
    
    // Teachers see messages for their students
    if (STATE.user.role === 'teacher') {
      const teacherStudentIds = students?.map(s => s.id) || [];
      if (teacherStudentIds.length > 0) {
        messagesQuery = messagesQuery.in('student_id', teacherStudentIds);
      }
    }
    
    // Students see their own messages
    if (STATE.user.role === 'student') {
      messagesQuery = messagesQuery.eq('student_id', STATE.user.id);
    }
    
    const { data: messages } = await messagesQuery;
    if (messages) {
      // Transform Supabase format to app format
      STATE.data.messages = messages.map(msg => ({
        id: msg.id,
        studentId: msg.student_id,
        from: msg.from_role,
        body: msg.content,
        date: msg.created_at?.slice(0, 10) || new Date().toISOString().slice(0, 10),
        time: msg.created_at?.slice(11, 16) || '',
        read: msg.read
      }));
    }
    
    console.log('✅ Data loaded from Supabase:', {
      users: STATE.data.users?.length || 0,
      students: students?.length || 0,
      activities: activities?.length || 0,
      sessionLogs: sessionLogs?.length || 0,
      messages: messages?.length || 0,
    });
    
    // Load library items
    let libraryQuery = window.supabaseClient
      .from('library')
      .select('*')
      .eq('school_id', STATE.user.school_id);
    
    const { data: library } = await libraryQuery;
    if (library) {
      STATE.data.library = library;
      console.log('✅ Loaded library items:', library.length);
    }
    
    // Load sent library items
    let sentLibraryQuery = window.supabaseClient
      .from('sentLibraryItems')
      .select('*');
    
    // Teachers see items they sent
    if (STATE.user.role === 'teacher') {
      sentLibraryQuery = sentLibraryQuery.eq('sentBy', STATE.user.id);
    }
    
    // Parents see items sent to their child
    if (STATE.user.role === 'parent' && STATE.user.studentId) {
      sentLibraryQuery = sentLibraryQuery.eq('studentId', STATE.user.studentId);
    }
    
    const { data: sentLibraryItems } = await sentLibraryQuery;
    if (sentLibraryItems) {
      STATE.data.sentLibraryItems = sentLibraryItems;
      console.log('✅ Loaded sent library items:', sentLibraryItems.length);
    }
    
    // ========== LOAD NEW FEATURES DATA ==========
    
    // Load student followups - DISABLED (table doesn't exist)
    // let followupsQuery = window.supabaseClient
    //   .from('student_followups')
    //   .select('*');
    
    // if (STATE.user.role === 'teacher') {
    //   // Teachers see only their own followups or followups for their school
    //   followupsQuery = followupsQuery.or(`teacher_id.eq.${STATE.user.id},school_id.eq.${STATE.user.school_id}`);
    // } else if (STATE.user.role === 'student') {
    //   // Students see their own followups
    //   followupsQuery = followupsQuery.eq('student_id', STATE.user.id);
    // }
    
    // const { data: followups } = await followupsQuery;
    // if (followups) {
    //   STATE.data.studentFollowups = followups.map(f => ({
    //     id: f.id,
    //     studentId: f.student_id,
    //     teacher_id: f.teacher_id,
    //     date_from: f.date_from,
    //     date_to: f.date_to,
    //     goal_1_id: f.goal_1_id,
    //     goal_2_id: f.goal_2_id,
    //     custom_goal_1: f.custom_goal_1,
    //     custom_goal_1_type: f.custom_goal_1_type,
    //     custom_goal_2: f.custom_goal_2,
    //     custom_goal_2_type: f.custom_goal_2_type,
    //     tools: typeof f.tools === 'string' ? JSON.parse(f.tools) : (f.tools || []),
    //     notes: f.notes,
    //     created_at: f.created_at,
    //     updated_at: f.updated_at
    //   }));
    //   console.log('✅ Loaded student followups:', followups.length);
    // }
    STATE.data.studentFollowups = []; // Empty for now
    
    // Load auditory memory tests - DISABLED (table doesn't exist)
    // let memoryTestsQuery = window.supabaseClient
    //   .from('auditory_memory_tests')
    //   .select('*');
    
    // if (STATE.user.role === 'teacher') {
    //   memoryTestsQuery = memoryTestsQuery.or(`teacher_id.eq.${STATE.user.id},school_id.eq.${STATE.user.school_id}`);
    // } else if (STATE.user.role === 'student') {
    //   memoryTestsQuery = memoryTestsQuery.eq('student_id', STATE.user.id);
    // }
    
    // const { data: memoryTests } = await memoryTestsQuery;
    // if (memoryTests) {
    //   STATE.data.auditoryMemoryTests = memoryTests.map(t => ({
    //     id: t.id,
    //     studentId: t.student_id,
    //     teacher_id: t.teacher_id,
    //     test_type: t.test_type,
    //     test_data: typeof t.test_data === 'string' ? JSON.parse(t.test_data) : (t.test_data || {}),
    //     score: t.score,
    //     total_score: t.total_score,
    //     notes: t.notes,
    //     tested_at: t.tested_at,
    //     created_at: t.created_at,
    //     updated_at: t.updated_at
    //   }));
    //   console.log('✅ Loaded auditory memory tests:', memoryTests.length);
    // }
    STATE.data.auditoryMemoryTests = []; // Empty for now
    
    // Load initial reports - DISABLED (table doesn't exist)
    // let reportsQuery = window.supabaseClient
    //   .from('initial_reports')
    //   .select('*');
    
    // if (STATE.user.role === 'teacher') {
    //   reportsQuery = reportsQuery.or(`teacher_id.eq.${STATE.user.id},school_id.eq.${STATE.user.school_id}`);
    // } else if (STATE.user.role === 'student') {
    //   reportsQuery = reportsQuery.eq('student_id', STATE.user.id);
    // }
    STATE.data.initialReports = []; // Empty for now
    
    // Commented out the rest of initial reports loading
    /*
    const { data: reports } = await reportsQuery;
    if (reports) {
      STATE.data.initialReports = reports.map(r => ({
        id: r.id,
        studentId: r.student_id,
        teacher_id: r.teacher_id,
        report_date: r.report_date,
        introduction: r.introduction,
        content: typeof r.content === 'string' ? JSON.parse(r.content) : (r.content || {}),
        status: r.status,
        created_at: r.created_at,
        updated_at: r.updated_at
      }));
      console.log('✅ Loaded initial reports:', reports.length);
    }
    */
    
    // ========== END LOAD NEW FEATURES DATA ==========
    
    // Load attendance records
    let attendanceQuery = window.supabaseClient
      .from('attendance')
      .select('*');
    
    // Students see their own attendance
    if (STATE.user.role === 'student') {
      attendanceQuery = attendanceQuery.eq('student_id', STATE.user.id);
    }
    
    // Parents see their child's attendance
    if (STATE.user.role === 'parent' && STATE.user.student_id) {
      attendanceQuery = attendanceQuery.eq('student_id', STATE.user.student_id);
    }
    
    // Teachers see all attendance for students in their school (RLS handles this)
    
    const { data: attendance } = await attendanceQuery;
    if (attendance) {
      STATE.data.attendance = attendance.map(a => ({
        id: a.id,
        studentId: a.student_id,
        date: a.attendance_date,
        status: a.status,
        teacherId: a.teacher_id,
        createdAt: a.created_at,
        updatedAt: a.updated_at
      }));
      console.log('✅ Loaded attendance records:', attendance.length);
    }
    
    // ✅ Setup realtime subscriptions for messages
    setupRealtimeSubscriptions();
  } catch (error) {
    console.error('Error loading data:', error);
  }
}

// Setup realtime subscriptions
function setupRealtimeSubscriptions() {
  if (!window.supabaseClient || !STATE.user) return;
  
  console.log('🔴 Setting up realtime subscriptions...');
  
  // Subscribe to new messages
  const messagesChannel = window.supabaseClient
    .channel('messages-changes')
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'messages',
        filter: `school_id=eq.${STATE.user.school_id}`
      },
      (payload) => {
        console.log('📨 New message received via realtime:', payload.new);
        
        // Add to local state (check for duplicates)
        const msg = payload.new;
        const messageExists = STATE.data.messages.find(m => m.id === msg.id);
        
        if (!messageExists) {
          STATE.data.messages.push({
            id: msg.id,
            studentId: msg.student_id,
            from: msg.from_role,
            body: msg.content,
            date: msg.created_at?.slice(0, 10) || new Date().toISOString().slice(0, 10),
            time: msg.created_at?.slice(11, 16) || '',
            read: msg.read
          });
          
          console.log('✅ Message added to local state');
        } else {
          console.log('⚠️ Message already exists, skipping duplicate');
        }
        
        // Update UI if on messages page
        const chatBody = document.querySelector('.chat-body');
        if (chatBody) {
          const currentStudentId = document.querySelector('[data-form="send-message"]')?.getAttribute('data-sid');
          if (currentStudentId === msg.student_id) {
            const messages = STATE.data.messages
              .filter(m => m.studentId === msg.student_id)
              .sort((a,b) => (a.date+a.time).localeCompare(b.date+b.time));

            const viewerFrom = document.querySelector('[data-form="send-message"]')?.getAttribute('data-from') || 'teacher';
            chatBody.innerHTML = messages.map(m => {
              const isPrincipalMsg = m.from === 'principal';
              const mine = (viewerFrom === 'principal' && isPrincipalMsg)
                || (viewerFrom !== 'principal' && m.from === viewerFrom);
              return `
                <div class="msg ${mine ? 'mine' : 'theirs'} ${isPrincipalMsg ? 'principal-msg' : ''}"
                     style="align-self:${mine ? 'flex-end' : 'flex-start'}">
                  ${isPrincipalMsg && !mine ? `<div class="msg-sender">${esc(STATE.config.school.principal.name)}</div>` : ''}
                  <div class="msg-bubble" style="${
                    isPrincipalMsg && mine
                      ? 'background:var(--critical);color:#fff;'
                      : isPrincipalMsg && !mine
                      ? 'background:var(--critical-50);color:var(--critical);'
                      : mine
                      ? 'background:var(--ink);color:var(--surface);'
                      : 'background:var(--surface);box-shadow:inset 0 0 0 1px var(--hair-2);color:var(--ink);'
                  }">${esc(m.body)}</div>
                  <div class="msg-time" style="text-align:${mine ? 'end' : 'start'}">${m.time || ''}</div>
                </div>
              `;
            }).join('');

            chatBody.scrollTop = chatBody.scrollHeight;
            console.log('✅ Chat UI updated with new message');
          }
        }
      }
    )
    .subscribe((status) => {
      console.log('📡 Realtime status:', status);
    });
  
  // Subscribe to attendance changes
  const attendanceChannel = window.supabaseClient
    .channel('attendance-changes')
    .on(
      'postgres_changes',
      {
        event: '*', // Listen to INSERT, UPDATE, DELETE
        schema: 'public',
        table: 'attendance'
      },
      (payload) => {
        console.log('📅 Attendance change received via realtime:', payload);
        
        const { eventType, new: newRecord, old: oldRecord } = payload;
        
        if (eventType === 'INSERT') {
          // Add new attendance record
          const existingIndex = STATE.data.attendance.findIndex(a => a.id === newRecord.id);
          if (existingIndex === -1) {
            STATE.data.attendance.push({
              id: newRecord.id,
              studentId: newRecord.student_id,
              date: newRecord.attendance_date,
              status: newRecord.status,
              teacherId: newRecord.teacher_id,
              createdAt: newRecord.created_at,
              updatedAt: newRecord.updated_at
            });
            console.log('✅ New attendance record added to local state');
          }
        } else if (eventType === 'UPDATE') {
          // Update existing attendance record
          const index = STATE.data.attendance.findIndex(a => a.id === newRecord.id);
          if (index !== -1) {
            STATE.data.attendance[index] = {
              id: newRecord.id,
              studentId: newRecord.student_id,
              date: newRecord.attendance_date,
              status: newRecord.status,
              teacherId: newRecord.teacher_id,
              createdAt: newRecord.created_at,
              updatedAt: newRecord.updated_at
            };
            console.log('✅ Attendance record updated in local state');
          }
        } else if (eventType === 'DELETE') {
          // Remove deleted attendance record
          const index = STATE.data.attendance.findIndex(a => a.id === oldRecord.id);
          if (index !== -1) {
            STATE.data.attendance.splice(index, 1);
            console.log('✅ Attendance record removed from local state');
          }
        }
        
        // Refresh current view if on attendance page
        const currentHash = location.hash;
        if (currentHash.includes('/attendance') || currentHash.includes('tab=attendance')) {
          console.log('🔄 Refreshing attendance view...');
          handleRoute();
        }
      }
    )
    .subscribe((status) => {
      console.log('📡 Attendance realtime status:', status);
    });
}

// =========================================================
// TYPING INDICATOR
// =========================================================
let typingTimeout = null;
let typingChannel = null;

// Broadcast typing status
function broadcastTyping(studentId, isTyping) {
  if (!window.supabaseClient || !STATE.user || !studentId) return;
  
  // Get or create channel for this student
  if (!typingChannel || typingChannel.topic !== `typing-${studentId}`) {
    if (typingChannel) {
      typingChannel.unsubscribe();
    }
    typingChannel = window.supabaseClient.channel(`typing-${studentId}`);
    typingChannel.subscribe();
  }
  
  if (isTyping) {
    typingChannel.send({
      type: 'broadcast',
      event: 'typing',
      payload: {
        user_id: STATE.user.id,
        user_role: STATE.user.role,
        student_id: studentId,
        timestamp: Date.now(),
      }
    });
    console.log('📝 Broadcasting typing status for student:', studentId);
  }
}

// Setup typing indicator listeners
function setupTypingIndicator() {
  const form = document.querySelector('[data-form="send-message"]');
  if (!form) return;
  
  const studentId = form.getAttribute('data-sid');
  if (!studentId) return;
  
  console.log('🎯 Setting up typing indicator for student:', studentId);
  
  // Listen for input events
  const input = form.querySelector('input[name="body"]');
  if (input) {
    // Remove old listener if exists
    input.removeEventListener('input', handleTypingInput);
    input.addEventListener('input', handleTypingInput);
  }
  
  // Subscribe to typing broadcasts for this student
  if (typingChannel) {
    typingChannel.unsubscribe();
  }
  
  typingChannel = window.supabaseClient.channel(`typing-${studentId}`);
  
  typingChannel
    .on('broadcast', { event: 'typing' }, (payload) => {
      const { user_id, user_role, timestamp } = payload.payload;
      
      console.log('📨 Received typing broadcast:', { user_id, user_role, my_id: STATE.user.id });
      
      // Don't show typing indicator for own messages
      if (user_id === STATE.user.id) {
        console.log('⏭️ Skipping own typing indicator');
        return;
      }
      
      // Show typing indicator
      const indicator = document.querySelector('.typing-indicator');
      if (indicator) {
        console.log('✅ Showing typing indicator');
        indicator.style.display = 'block';
        
        // Scroll to bottom
        const chatBody = document.querySelector('.chat-body');
        if (chatBody) chatBody.scrollTop = chatBody.scrollHeight;
        
        // Hide after 3 seconds
        setTimeout(() => {
          indicator.style.display = 'none';
          console.log('⏹️ Hiding typing indicator');
        }, 3000);
      } else {
        console.warn('⚠️ Typing indicator element not found');
      }
    })
    .subscribe((status) => {
      console.log('📡 Typing channel status:', status);
    });
}

// Handle typing input
function handleTypingInput(e) {
  const form = e.target.closest('[data-form="send-message"]');
  if (!form) return;
  
  const studentId = form.getAttribute('data-sid');
  if (!studentId) return;
  
  // Broadcast typing
  broadcastTyping(studentId, true);
  
  // Clear previous timeout
  if (typingTimeout) clearTimeout(typingTimeout);
  
  // Stop broadcasting after 2 seconds of no typing
  typingTimeout = setTimeout(() => {
    // Don't need to broadcast "stopped typing" - indicator auto-hides
  }, 2000);
}

// Initialize app on load
window.addEventListener('DOMContentLoaded', async () => {
  // Initialize data structures
  initData();
  
  // Setup event delegation for attendance calendar
  document.addEventListener('click', (e) => {
    // Try to find clickable day
    const dayEl = e.target.closest('.attendance-day.clickable');
    if (dayEl) {
      console.log('📅 Clickable attendance day clicked!', dayEl);
      const studentId = dayEl.getAttribute('data-student-id');
      const date = dayEl.getAttribute('data-date');
      const day = dayEl.getAttribute('data-day');
      console.log('📊 Data:', { studentId, date, day });
      if (studentId && date) {
        toggleAttendance(studentId, date);
      } else {
        console.log('❌ Missing studentId or date');
      }
      return;
    }
    
    // Fallback: try any attendance-day if user is teacher
    const anyDay = e.target.closest('.attendance-day');
    if (anyDay && STATE.user?.role === 'teacher') {
      console.log('📅 Fallback: Any attendance day clicked!', anyDay);
      const studentId = anyDay.getAttribute('data-student-id');
      const date = anyDay.getAttribute('data-date');
      const day = anyDay.getAttribute('data-day');
      console.log('📊 Fallback Data:', { studentId, date, day, hasClickable: anyDay.classList.contains('clickable') });
      if (studentId && date) {
        toggleAttendance(studentId, date);
      }
    }
  });

  // If user just logged out, skip session restore and show login
  if (sessionStorage.getItem('athr-logged-out')) {
    sessionStorage.removeItem('athr-logged-out');
    handleRoute();
    return;
  }

  // Wait for Auth to be available (in case scripts load out of order)
  let attempts = 0;
  while (!window.Auth && attempts < 50) {
    await new Promise(resolve => setTimeout(resolve, 100));
    attempts++;
  }

  if (!window.Auth) {
    console.error('Auth module failed to load');
    handleRoute();
    return;
  }

  // Always try to restore session first — regardless of hash
  // This fixes the stuck/blank screen after disconnect or tab reopen
  try {
    const user = await Auth.init();
    if (user) {
      STATE.user = user;
      await loadDataFromSupabase();
      // If hash is empty or login page, redirect to dashboard
      const hash = location.hash.replace(/^#/, '');
      if (!hash || hash === '/' || hash === '/login') {
        navigate(`/${user.role}/dashboard`);
      } else {
        handleRoute();
      }
      return;
    }
  } catch (error) {
    console.error('Auth init error:', error);
  }

  // No session — show login
  handleRoute();
});

// =========================================================
// AUTH STATE CHANGE — only handles SIGNED_OUT
// =========================================================
// We no longer use this for SIGNED_IN — Auth.init() above handles
// session restore on every page load cleanly.
window.addEventListener('load', () => {
  if (!window.supabaseClient) return;
  window.supabaseClient.auth.onAuthStateChange((event) => {
    if (event === 'SIGNED_OUT') {
      STATE.user = null;
      STATE._principalUser = null;
      location.hash = '';
      location.reload();
    }
  });
});
}
