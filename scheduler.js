/* =========================================================
   Interview Scheduler — scheduler.js
   KadelLabs ATS  ·  v2 — improved calendar + week view + Panel Management
   ========================================================= */

// ── Toast ─────────────────────────────────────────────────
function showToast(msg, type = 'success') {
  const holder = document.getElementById('toast-holder');
  if (!holder) return;
  const t = document.createElement('div');
  t.className = `toast-notification toast-${type}`;
  t.textContent = msg;
  holder.appendChild(t);
  requestAnimationFrame(() => t.classList.add('show'));
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 400); }, 3200);
}

// ── Mock Data ─────────────────────────────────────────────
const today = new Date();
const y = today.getFullYear();
const m = today.getMonth();

const panelists = [
  { 
    id: 'p1', 
    name: 'Ravi Mehta', 
    title: 'Engineering Lead', 
    color: '#1B2B5E',
    department: 'Engineering',
    email: 'ravi@kadellabs.com',
    skills: ['React', 'Node.js', 'System Design', 'Python'],
    interviewTypes: ['Technical', 'Managerial', 'Final Round'],
    timezone: 'IST',
    availabilityStatus: 'available',
    avail: { 
      Mon: [1,1,0,1,1,1,1,0], 
      Tue: [1,1,1,0,0,1,1,1], 
      Wed: [0,1,1,1,1,0,1,1], 
      Thu: [1,0,0,1,1,1,0,1], 
      Fri: [1,1,1,1,0,0,1,0] 
    }
  },
  { 
    id: 'p2', 
    name: 'Sanya Kapoor', 
    title: 'HR Manager', 
    color: '#1D9E75',
    department: 'HR',
    email: 'sanya@kadellabs.com',
    skills: ['Sourcing', 'Behavioral Evaluation', 'Culture Fit', 'Compensation'],
    interviewTypes: ['HR', 'Managerial'],
    timezone: 'IST',
    availabilityStatus: 'available',
    avail: { 
      Mon: [0,1,1,1,0,1,1,0], 
      Tue: [1,1,0,0,1,1,0,1], 
      Wed: [1,0,1,1,1,1,0,1], 
      Thu: [0,1,1,0,0,1,1,1], 
      Fri: [1,1,1,0,1,1,1,0] 
    }
  },
  { 
    id: 'p3', 
    name: 'Arjun Patel', 
    title: 'Sr. Developer', 
    color: '#7C3AED',
    department: 'Engineering',
    email: 'arjun@kadellabs.com',
    skills: ['Java', 'Spring Boot', 'AWS', 'Kubernetes', 'Microservices'],
    interviewTypes: ['Technical'],
    timezone: 'IST',
    availabilityStatus: 'busy',
    avail: { 
      Mon: [1,1,1,0,1,0,1,1], 
      Tue: [0,0,1,1,1,1,0,1], 
      Wed: [1,1,0,1,0,1,1,0], 
      Thu: [1,1,1,1,0,0,1,1], 
      Fri: [0,1,1,1,1,1,0,0] 
    }
  },
  { 
    id: 'p4', 
    name: 'Priya Sharma', 
    title: 'Product Manager', 
    color: '#D97706',
    department: 'Product',
    email: 'priya@kadellabs.com',
    skills: ['Product Strategy', 'Roadmapping', 'Agile', 'User Analytics'],
    interviewTypes: ['Managerial', 'Final Round'],
    timezone: 'IST',
    availabilityStatus: 'on-leave',
    avail: { 
      Mon: [1,0,0,1,1,1,1,1], 
      Tue: [1,1,1,1,0,0,1,0], 
      Wed: [0,1,1,0,1,1,1,1], 
      Thu: [1,1,0,1,1,0,0,1], 
      Fri: [1,0,1,1,1,1,1,0] 
    }
  },
];

function dateStr(year, month, day) {
  return `${year}-${String(month+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
}

const interviews = [
  { id:'i1',  candidate:'Dianne Russell',  role:'Frontend Developer', date:dateStr(y,m,3),  time:'10:00', duration:60, platform:'Google Meet', platformLink:'https://meet.google.com/abc-defg-hij', panelists:['p1','p2'], status:'confirmed', department:'Engineering', notes:'' },
  { id:'i2',  candidate:'Albert Flores',   role:'Backend Engineer',   date:dateStr(y,m,5),  time:'14:00', duration:45, platform:'Zoom',        platformLink:'https://zoom.us/j/123456789',          panelists:['p3','p4'], status:'pending',   department:'Engineering', notes:'' },
  { id:'i3',  candidate:'Jane Cooper',     role:'Backend Engineer',   date:dateStr(y,m,7),  time:'11:00', duration:30, platform:'MS Teams',    platformLink:'https://teams.microsoft.com/meet/abc', panelists:['p1','p3'], status:'confirmed', department:'Engineering', notes:'' },
  { id:'i4',  candidate:'Courtney Henry',  role:'UX Designer',        date:dateStr(y,m,10), time:'15:30', duration:60, platform:'Google Meet', platformLink:'https://meet.google.com/xyz-uvwx-yz',  panelists:['p2'],      status:'pending',   department:'Design', notes:'' },
  { id:'i5',  candidate:'Unnati Sutradhar',role:'Python Developer',   date:dateStr(y,m,12), time:'09:00', duration:90, platform:'Zoom',        platformLink:'https://zoom.us/j/987654321',          panelists:['p1','p2','p3'], status:'confirmed', department:'Engineering', notes:'' },
  { id:'i6',  candidate:'Marcus Webb',     role:'Data Analyst',       date:dateStr(y,m,14), time:'13:00', duration:45, platform:'Google Meet', platformLink:'https://meet.google.com/def-ghij-klm', panelists:['p4'],      status:'cancelled', department:'Analytics', notes:'' },
  { id:'i7',  candidate:'Sofia Almeda',    role:'HR Generalist',      date:dateStr(y,m,17), time:'10:30', duration:60, platform:'In-Person',   platformLink:'',                                     panelists:['p2'],      status:'confirmed', department:'HR', notes:'' },
  { id:'i8',  candidate:'Tarun Bose',      role:'DevOps Engineer',    date:dateStr(y,m,19), time:'16:00', duration:60, platform:'Zoom',        platformLink:'https://zoom.us/j/555666777',          panelists:['p1','p3'], status:'pending',   department:'Engineering', notes:'' },
  { id:'i9',  candidate:'Ananya Rao',      role:'Marketing Manager',  date:dateStr(y,m,21), time:'11:00', duration:45, platform:'MS Teams',    platformLink:'https://teams.microsoft.com/meet/xyz', panelists:['p2','p4'], status:'confirmed', department:'Marketing', notes:'' },
  { id:'i10', candidate:'Rohan Gupta',     role:'Frontend Developer', date:dateStr(y,m,24), time:'14:00', duration:60, platform:'Google Meet', platformLink:'https://meet.google.com/nop-qrst-uvw', panelists:['p1','p2'], status:'confirmed', department:'Engineering', notes:'' },
  // add a few on today's date for week-view demo
  { id:'i11', candidate:'Priya Nair',      role:'QA Engineer',        date:dateStr(y,m,today.getDate()), time:'09:30', duration:45, platform:'Zoom',        platformLink:'https://zoom.us/j/111222333', panelists:['p3'],      status:'pending',   department:'Engineering', notes:'' },
  { id:'i12', candidate:'Karan Mehta',     role:'Cloud Architect',    date:dateStr(y,m,today.getDate()), time:'14:00', duration:60, platform:'Google Meet', platformLink:'https://meet.google.com/aaa-bbb-ccc', panelists:['p1','p2'], status:'confirmed', department:'Engineering', notes:'' },
];

// ── State ─────────────────────────────────────────────────
let currentYear   = y;
let currentMonth  = m;
let currentView   = 'month';           // 'month' | 'week'
let weekStart     = getWeekStartDate(today); // Date object
let activeFilter  = 'all';
let activeEventId = null;
let selectedPlatform = 'Google Meet';
let selectedModalPanelists = [];
let editingInterviewId = null; // Interview ID being edited/rescheduled

// Skills Tag Input State (Drawer)
let selectedSkills = [];
let selectedInterviewTypes = [];
let selectedAvailabilityStatus = 'available';

// ── Helpers ───────────────────────────────────────────────
function getPanelist(id) { return panelists.find(p => p.id === id); }

function formatTime(t) {
  const [h, min] = t.split(':').map(Number);
  return `${h % 12 || 12}:${String(min).padStart(2,'0')} ${h >= 12 ? 'PM' : 'AM'}`;
}
function formatDate(ds) {
  return new Date(ds + 'T00:00:00').toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' });
}
function platformIcon(p) {
  return ({ 'Google Meet':'🎥', Zoom:'💻', 'MS Teams':'🖥', 'In-Person':'📍' }[p] || '📹') + ' ' + p;
}
function getWeekStartDate(d) {
  const s = new Date(d); s.setHours(0,0,0,0);
  s.setDate(s.getDate() - s.getDay());
  return s;
}
function isThisWeek(ds) {
  const s = getWeekStartDate(today);
  const e = new Date(s); e.setDate(s.getDate() + 6);
  const d = new Date(ds + 'T00:00:00');
  return d >= s && d <= e;
}
function getDayName(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return days[d.getDay()];
}
function getTimeSlotIndex(timeStr) {
  if (!timeStr) return -1;
  const [h] = timeStr.split(':').map(Number);
  if (h < 9 || h >= 17) return -1;
  return h - 9; // Slot 0 is 9 AM, 1 is 10 AM, etc.
}

// ── Stats ─────────────────────────────────────────────────
function updateStats() {
  const weekNum = interviews.filter(i => isThisWeek(i.date) && i.status !== 'cancelled').length;
  const pendingNum = interviews.filter(i => i.status === 'pending').length;
  const completedNum = interviews.filter(i => i.status === 'confirmed').length;
  const allNum = interviews.length;

  const statWeek = document.getElementById('stat-week-num');
  const statPending = document.getElementById('stat-pending-num');
  const statCompleted = document.getElementById('stat-completed-num');
  const statAll = document.getElementById('stat-all-num');

  if (statWeek) statWeek.textContent = weekNum;
  if (statPending) statPending.textContent = pendingNum;
  if (statCompleted) statCompleted.textContent = completedNum;
  if (statAll) statAll.textContent = allNum;

  // Refresh Panelist components too
  renderPanelManagementDashboard();
  renderPanelistDirectory();
}

// ── Filter ────────────────────────────────────────────────
function filterInterviews(f) {
  switch(f) {
    case 'week':      return interviews.filter(i => isThisWeek(i.date));
    case 'pending':   return interviews.filter(i => i.status === 'pending');
    case 'completed': return interviews.filter(i => i.status === 'confirmed');
    default:          return [...interviews];
  }
}
document.querySelectorAll('.stat-pill').forEach(pill => {
  pill.addEventListener('click', () => {
    activeFilter = pill.dataset.filter;
    document.querySelectorAll('.stat-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    const lbl = document.getElementById('active-filter-label');
    const names = { week:'This Week', pending:'Pending Confirmation', completed:'Completed', all:'' };
    if (lbl) {
      lbl.style.display = activeFilter === 'all' ? 'none' : '';
      lbl.textContent = names[activeFilter] || '';
    }
    renderCalendar();
    renderUpcomingList();
  });
});

// ══════════════════════════════════════════════════════════
//  CALENDAR
// ══════════════════════════════════════════════════════════
const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const dayAbbr = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

function renderCalendar() {
  if (currentView === 'week') renderWeekView();
  else renderMonthView();
}

/* ── Month View ──────────────────────────────────────────── */
function renderMonthView() {
  const filtered = filterInterviews(activeFilter);
  const monthLabel = document.getElementById('cal-month-label');
  if (monthLabel) monthLabel.textContent = `${monthNames[currentMonth]} ${currentYear}`;
  
  const headers = document.getElementById('cal-day-headers');
  if (headers) {
    headers.innerHTML = dayAbbr.map(d => `<div class="cal-day-hdr">${d}</div>`).join('');
  }

  const firstDay   = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMth  = new Date(currentYear, currentMonth + 1, 0).getDate();
  const prevDays   = new Date(currentYear, currentMonth, 0).getDate();
  const todayStr   = dateStr(today.getFullYear(), today.getMonth(), today.getDate());
  const container  = document.getElementById('cal-days');
  if (!container) return;
  container.innerHTML = '';
  container.className = 'cal-days';

  let total = firstDay + daysInMth;
  if (total % 7) total = Math.ceil(total / 7) * 7;

  for (let i = 0; i < total; i++) {
    let dn, ds, isOther = false;
    if (i < firstDay) {
      dn = prevDays - firstDay + i + 1;
      const pm = currentMonth === 0 ? 11 : currentMonth - 1;
      const py = currentMonth === 0 ? currentYear - 1 : currentYear;
      ds = dateStr(py, pm, dn); isOther = true;
    } else if (i >= firstDay + daysInMth) {
      dn = i - firstDay - daysInMth + 1;
      const nm = currentMonth === 11 ? 0 : currentMonth + 1;
      const ny = currentMonth === 11 ? currentYear + 1 : currentYear;
      ds = dateStr(ny, nm, dn); isOther = true;
    } else {
      dn = i - firstDay + 1;
      ds = dateStr(currentYear, currentMonth, dn);
    }

    const isToday   = ds === todayStr;
    const isWeekend = i % 7 === 0 || i % 7 === 6;
    const dayEvents = filtered.filter(iv => iv.date === ds);

    const cell = document.createElement('div');
    cell.className = 'cal-day' +
      (isOther   ? ' other-month' : '') +
      (isToday   ? ' today'       : '') +
      (isWeekend ? ' weekend'     : '');

    // Number badge
    const numWrap = document.createElement('div');
    numWrap.className = 'cal-day-num-wrap';
    const numEl = document.createElement('span');
    numEl.className = 'cal-day-num' + (isToday ? ' today-badge' : '');
    numEl.textContent = dn;
    numWrap.appendChild(numEl);
    
    if (dayEvents.length > 0 && isOther) {
      const dot = document.createElement('span');
      dot.className = 'cal-event-dot';
      numWrap.appendChild(dot);
    }
    cell.appendChild(numWrap);

    // Event chips
    const showMax = 3;
    dayEvents.slice(0, showMax).forEach(iv => {
      const ev = document.createElement('div');
      ev.className = `cal-event ${iv.status}`;

      const timeSpan = document.createElement('span');
      timeSpan.className = 'cal-event-time';
      timeSpan.textContent = formatTime(iv.time);

      const nameSpan = document.createElement('span');
      nameSpan.className = 'cal-event-name';
      nameSpan.textContent = iv.candidate.split(' ')[0] + ' · ' + iv.role.split(' ')[0];

      ev.appendChild(timeSpan);
      ev.appendChild(nameSpan);
      ev.title = `${iv.candidate} — ${iv.role} @ ${formatTime(iv.time)}`;
      ev.addEventListener('click', e => { e.stopPropagation(); openEventPopup(iv.id); });
      cell.appendChild(ev);
    });

    if (dayEvents.length > showMax) {
      const more = document.createElement('div');
      more.className = 'cal-more';
      more.textContent = `+${dayEvents.length - showMax} more`;
      more.addEventListener('click', e => { e.stopPropagation(); });
      cell.appendChild(more);
    }

    container.appendChild(cell);
  }
}

/* ── Week View ───────────────────────────────────────────── */
const WEEK_START_HOUR = 8;
const WEEK_END_HOUR   = 19;
const SLOT_H          = 52; // px per hour

function renderWeekView() {
  const filtered = filterInterviews(activeFilter);
  const ws = new Date(weekStart);
  const we = new Date(ws); we.setDate(ws.getDate() + 6);

  const monthLabel = document.getElementById('cal-month-label');
  if (monthLabel) {
    const opts = { day:'numeric', month:'short' };
    monthLabel.textContent = ws.toLocaleDateString('en-IN', opts) + ' – ' + we.toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' });
  }

  const todayStr = dateStr(today.getFullYear(), today.getMonth(), today.getDate());
  const headers = document.getElementById('cal-day-headers');
  if (headers) {
    headers.innerHTML = '<div class="cal-day-hdr week-time-col"></div>';
    for (let i = 0; i < 7; i++) {
      const d = new Date(ws); d.setDate(ws.getDate() + i);
      const ds = dateStr(d.getFullYear(), d.getMonth(), d.getDate());
      const isToday = ds === todayStr;
      headers.innerHTML += `
        <div class="cal-day-hdr week-col-hdr ${isToday ? 'today-col-hdr' : ''}">
          <span class="week-hdr-day">${dayAbbr[d.getDay()]}</span>
          <span class="week-hdr-num ${isToday ? 'today-badge' : ''}">${d.getDate()}</span>
        </div>`;
    }
  }

  const container = document.getElementById('cal-days');
  if (!container) return;
  container.className = 'cal-days week-grid';
  container.innerHTML = '';

  for (let h = WEEK_START_HOUR; h <= WEEK_END_HOUR; h++) {
    const timeCell = document.createElement('div');
    timeCell.className = 'week-time-cell';
    timeCell.textContent = h === 12 ? '12 PM' : h > 12 ? `${h-12} PM` : `${h} AM`;
    container.appendChild(timeCell);

    for (let col = 0; col < 7; col++) {
      const d = new Date(ws); d.setDate(ws.getDate() + col);
      const ds = dateStr(d.getFullYear(), d.getMonth(), d.getDate());
      const isToday = ds === todayStr;
      const isWeekend = col === 0 || col === 6;

      const slot = document.createElement('div');
      slot.className = 'week-slot' +
        (isToday   ? ' today-slot'   : '') +
        (isWeekend ? ' weekend-slot' : '');
      slot.style.height = SLOT_H + 'px';

      if (h < WEEK_END_HOUR) {
        const slotEvs = filtered.filter(iv => {
          if (iv.date !== ds) return false;
          const [eh] = iv.time.split(':').map(Number);
          return eh === h;
        });

        slotEvs.forEach(iv => {
          const [eh, emin] = iv.time.split(':').map(Number);
          const topPx = (emin / 60) * SLOT_H;
          const heightPx = Math.max(((iv.duration / 60) * SLOT_H) - 3, 22);

          const ev = document.createElement('div');
          ev.className = `week-event ${iv.status}`;
          ev.style.top    = topPx + 'px';
          ev.style.height = heightPx + 'px';
          ev.innerHTML = `
            <span class="week-ev-time">${formatTime(iv.time)}</span>
            <span class="week-ev-name">${iv.candidate.split(' ')[0]}</span>
            <span class="week-ev-role">${iv.role}</span>`;
          ev.title = `${iv.candidate} — ${iv.role} @ ${formatTime(iv.time)}`;
          ev.addEventListener('click', e => { e.stopPropagation(); openEventPopup(iv.id); });
          slot.appendChild(ev);
        });
      }
      container.appendChild(slot);
    }
  }

  // Current time line
  const nowDate = dateStr(today.getFullYear(), today.getMonth(), today.getDate());
  const nowH = today.getHours(); const nowMin = today.getMinutes();
  if (nowH >= WEEK_START_HOUR && nowH < WEEK_END_HOUR) {
    for (let col = 0; col < 7; col++) {
      const d = new Date(ws); d.setDate(ws.getDate() + col);
      if (dateStr(d.getFullYear(), d.getMonth(), d.getDate()) === nowDate) {
        const rowIndex = nowH - WEEK_START_HOUR;
        const slotEls = container.querySelectorAll('.today-slot');
        if (slotEls[rowIndex]) {
          slotEls[rowIndex].style.position = 'relative';
          const lineTop = (nowMin / 60) * SLOT_H;
          const line = document.createElement('div');
          line.style.cssText = `position:absolute;top:${lineTop}px;left:0;right:0;height:2px;background:#ef4444;z-index:5;border-radius:1px;pointer-events:none;`;
          const dot = document.createElement('div');
          dot.style.cssText = 'position:absolute;left:-4px;top:-4px;width:8px;height:8px;border-radius:50%;background:#ef4444;';
          line.appendChild(dot);
          slotEls[rowIndex].appendChild(line);
        }
        break;
      }
    }
  }
}

// Calendar Navigation
const calPrev = document.getElementById('cal-prev');
const calNext = document.getElementById('cal-next');
const calToday = document.getElementById('cal-today');

if (calPrev) {
  calPrev.addEventListener('click', () => {
    if (currentView === 'month') {
      currentMonth--;
      if (currentMonth < 0) { currentMonth = 11; currentYear--; }
    } else {
      weekStart.setDate(weekStart.getDate() - 7);
    }
    renderCalendar();
  });
}
if (calNext) {
  calNext.addEventListener('click', () => {
    if (currentView === 'month') {
      currentMonth++;
      if (currentMonth > 11) { currentMonth = 0; currentYear++; }
    } else {
      weekStart.setDate(weekStart.getDate() + 7);
    }
    renderCalendar();
  });
}
if (calToday) {
  calToday.addEventListener('click', () => {
    currentMonth = today.getMonth();
    currentYear  = today.getFullYear();
    weekStart    = getWeekStartDate(today);
    renderCalendar();
  });
}

document.querySelectorAll('.cal-view-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cal-view-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentView = btn.dataset.view;
    renderCalendar();
  });
});

// ── Upcoming Interviews Sidebar ───────────────────────────
function renderUpcomingList() {
  const list  = document.getElementById('upcoming-list');
  const badge = document.getElementById('upcoming-count-badge');
  if (!list) return;

  const data  = filterInterviews(activeFilter)
    .filter(i => i.status !== 'cancelled')
    .sort((a,b) => (a.date+a.time).localeCompare(b.date+b.time));

  if (badge) badge.textContent = data.length;
  list.innerHTML = '';
  
  if (!data.length) {
    list.innerHTML = '<div class="upcoming-empty">No interviews match the current filter.</div>';
    return;
  }

  data.forEach(iv => {
    const ivPanelists = iv.panelists.map(pid => getPanelist(pid)).filter(Boolean);
    const panelistNames = ivPanelists.map(p => p.name).join(', ');
    
    // Stacked avatars HTML
    const maxAvatars = 3;
    let avatarsHTML = '<div class="panelist-avatars">';
    ivPanelists.slice(0, maxAvatars).forEach(p => {
      const initials = p.name.split(' ').map(n=>n[0]).join('');
      avatarsHTML += `<div class="pa-mini-avatar" style="background:${p.color || '#1B2B5E'}" title="${p.name}">${initials}</div>`;
    });
    if (ivPanelists.length > maxAvatars) {
      avatarsHTML += `<div class="pa-mini-overflow" title="and ${ivPanelists.length - maxAvatars} more">+${ivPanelists.length - maxAvatars}</div>`;
    }
    avatarsHTML += '</div>';

    const item = document.createElement('div');
    item.className = 'upcoming-item';
    item.innerHTML = `
      <div class="upcoming-item-top">
        <span class="upcoming-cand-name">${iv.candidate}</span>
        <span class="upcoming-status-dot ${iv.status}" title="${iv.status}"></span>
      </div>
      <div class="upcoming-meta">
        <span class="upcoming-meta-tag">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" /></svg>
          ${iv.role}
        </span>
        <span class="upcoming-meta-tag">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          ${formatDate(iv.date)}, ${formatTime(iv.time)}
        </span>
        <span class="upcoming-meta-tag">${platformIcon(iv.platform)}</span>
        <span class="upcoming-meta-tag" title="Interviewer(s): ${panelistNames}" style="gap:4px; align-items:center; display:flex;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
          ${avatarsHTML}
        </span>
      </div>
      <div class="upcoming-actions">
        <button class="btn-join-sm" data-link="${iv.platformLink}" data-platform="${iv.platform}">Join</button>
        <div style="position:relative;">
          <button class="btn-more-sm" data-iv="${iv.id}" title="More options">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zm0 5.25a.75.75 0 110-1.5.75.75 0 010 1.5zm0 5.25a.75.75 0 110-1.5.75.75 0 010 1.5z"/></svg>
          </button>
          <div class="more-dropdown" id="dd-${iv.id}">
            <button class="more-dd-item" data-action="copy" data-link="${iv.platformLink}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"/></svg>
              Copy Link
            </button>
            <button class="more-dd-item" data-action="reschedule" data-iv="${iv.id}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/></svg>
              Reschedule
            </button>
            <button class="more-dd-item" data-action="change-panelists" data-iv="${iv.id}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 13px; height: 13px;"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5L12 14.5l-3-3m0 0a9 9 0 1112.75 0"/></svg>
              Change Panelists
            </button>
            <div class="more-dd-divider"></div>
            <button class="more-dd-item danger" data-action="cancel" data-iv="${iv.id}">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
              Cancel Interview
            </button>
          </div>
        </div>
      </div>`;

    item.querySelector('.btn-join-sm').addEventListener('click', e => {
      const lnk = e.currentTarget.dataset.link;
      if (lnk) window.open(lnk, '_blank');
      else showToast(`In-person interview — check calendar invite.`, 'info');
    });

    const moreBtn = item.querySelector('.btn-more-sm');
    const dd = item.querySelector('.more-dropdown');
    if (moreBtn && dd) {
      moreBtn.addEventListener('click', e => {
        e.stopPropagation();
        const was = dd.classList.contains('open');
        document.querySelectorAll('.more-dropdown.open').forEach(x => x.classList.remove('open'));
        if (!was) dd.classList.add('open');
      });

      dd.querySelectorAll('.more-dd-item').forEach(btn => {
        btn.addEventListener('click', () => {
          const action = btn.dataset.action; 
          dd.classList.remove('open');
          if (action === 'copy') {
            const lnk = btn.dataset.link;
            if (lnk) navigator.clipboard.writeText(lnk).then(() => showToast('Link copied!', 'success'));
            else showToast('No link — in-person.', 'warning');
          } else if (action === 'reschedule') {
            openScheduleModal(btn.dataset.iv, false);
            showToast('Edit fields to reschedule.', 'info');
          } else if (action === 'change-panelists') {
            openScheduleModal(btn.dataset.iv, true);
          } else if (action === 'cancel') {
            const idx = interviews.findIndex(i => i.id === btn.dataset.iv);
            if (idx !== -1) { 
              interviews[idx].status = 'cancelled'; 
              renderUpcomingList(); 
              renderCalendar(); 
              updateStats(); 
              showToast('Interview cancelled.', 'warning'); 
            }
          }
        });
      });
    }

    item.addEventListener('click', e => {
      if (!e.target.closest('.btn-join-sm,.btn-more-sm,.more-dropdown')) openEventPopup(iv.id);
    });
    list.appendChild(item);
  });
}

document.addEventListener('click', () => {
  document.querySelectorAll('.more-dropdown.open').forEach(d => d.classList.remove('open'));
});

// ── Panelists sidebar ─────────────────────────────────────
function renderPanelists() {
  const cont = document.getElementById('panelists-list');
  if (!cont) return;
  cont.innerHTML = '';

  const searchVal = document.getElementById('pa-search-input')?.value.toLowerCase() || '';
  const deptVal = document.getElementById('pa-filter-dept')?.value || 'all';

  const days = ['Mon','Tue','Wed','Thu','Fri'];

  const filtered = panelists.filter(p => {
    const nameMatch = p.name.toLowerCase().includes(searchVal);
    const skillMatch = p.skills && p.skills.some(s => s.toLowerCase().includes(searchVal));
    const roleMatch = p.title && p.title.toLowerCase().includes(searchVal);
    const textMatch = nameMatch || skillMatch || roleMatch;
    const deptMatch = deptVal === 'all' || p.department === deptVal;
    return textMatch && deptMatch;
  });

  if (filtered.length === 0) {
    cont.innerHTML = '<div style="padding:16px;font-size:12px;color:var(--text-secondary);text-align:center;">No matching panelists</div>';
    return;
  }

  filtered.forEach(p => {
    // calculate workload %
    const assignedInterviews = interviews.filter(i => i.status !== 'cancelled' && i.panelists.includes(p.id));
    const workloadPct = Math.min(Math.round((assignedInterviews.length / 5) * 100), 100);

    const row = document.createElement('div');
    row.className = 'panelist-row-enhanced';

    const statusClass = p.availabilityStatus === 'available' ? 'available' : p.availabilityStatus === 'busy' ? 'busy' : 'on-leave';
    const statusText = p.availabilityStatus === 'available' ? 'Available' : p.availabilityStatus === 'busy' ? 'Busy' : 'On Leave';

    const allSlots = days.flatMap(d => p.avail?.[d] || [1,1,1,1,1,1,1,1]);
    const barHTML  = allSlots.map(s => `<div class="avail-slot ${s?'free':'busy'}"></div>`).join('');
    
    const tipHTML  = `
      <div class="panelist-tooltip">
        <h6>${p.name}</h6>
        <div style="font-size:10.5px;color:rgba(255,255,255,0.7);margin-bottom:6px;">
          ${p.title} · ${p.department || 'General'}
        </div>
        ${days.map(d=>`
          <div class="avail-day-row">
            <span class="avail-day-label">${d}</span>
            <div class="avail-day-slots">
              ${(p.avail?.[d] || [1,1,1,1,1,1,1,1]).map(s=>`<div class="avail-day-slot ${s?'free':'busy'}"></div>`).join('')}
            </div>
          </div>
        `).join('')}
        <div class="tooltip-legend">
          <span><div class="legend-dot" style="background:rgba(26,122,74,0.55)"></div>Available</span>
          <span><div class="legend-dot" style="background:rgba(239,68,68,0.45)"></div>Busy</span>
        </div>
      </div>`;

    row.innerHTML  = `
      <div class="pa-avail-indicator ${statusClass}" title="${statusText}"></div>
      <div class="panelist-avatar-sm" style="background:${p.color || '#1B2B5E'}">
        ${p.name.split(' ').map(n=>n[0]).join('')}
      </div>
      <div class="pa-workload-wrap">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div class="panelist-name-sm">${p.name}</div>
          <span class="pa-workload-label">${workloadPct}% Workload</span>
        </div>
        <div class="pa-workload-bar-bg">
          <div class="pa-workload-bar-fill" style="width:${workloadPct}%; background:${workloadPct > 80 ? '#E24B4A' : workloadPct > 50 ? '#F59E0B' : '#0D7A57'}"></div>
        </div>
        <div class="panelist-avail-bar" style="margin-top:2px;">${barHTML}</div>
      </div>
      ${tipHTML}`;

    cont.appendChild(row);
  });
}

// Attach listeners for filters in availability
const paSearch = document.getElementById('pa-search-input');
const paDept = document.getElementById('pa-filter-dept');
if (paSearch) paSearch.addEventListener('input', renderPanelists);
if (paDept) paDept.addEventListener('change', renderPanelists);

// ── Collapsible panels ────────────────────────────────────
function setupCollapsible(tid, cid) {
  const toggle = document.getElementById(tid);
  const card = document.getElementById(cid);
  if (toggle && card) {
    toggle.addEventListener('click', () => card.classList.toggle('collapsed'));
  }
}
setupCollapsible('panel-avail-toggle', 'panel-avail-card');
setupCollapsible('upcoming-toggle',    'upcoming-card');

// ── Event Popup ───────────────────────────────────────────
function openEventPopup(ivId) {
  const iv = interviews.find(i => i.id === ivId); if (!iv) return;
  activeEventId = ivId;
  
  const candName = document.getElementById('popup-candidate-name');
  const roleTag = document.getElementById('popup-role-tag');
  const badge = document.getElementById('popup-status-badge');
  const datetime = document.getElementById('popup-datetime');
  const duration = document.getElementById('popup-duration');
  const platform = document.getElementById('popup-platform');
  const pc = document.getElementById('popup-panelists');

  if (candName) candName.textContent = iv.candidate;
  if (roleTag) roleTag.textContent = iv.role;
  if (badge) {
    badge.textContent = iv.status.charAt(0).toUpperCase() + iv.status.slice(1);
    badge.className = 'status-pill ' + ({confirmed:'status-active',pending:'status-pending',cancelled:'status-failed'}[iv.status]||'status-pending');
  }
  if (datetime) datetime.textContent = `${formatDate(iv.date)}, ${formatTime(iv.time)}`;
  if (duration) duration.textContent  = `${iv.duration} min`;
  if (platform) platform.textContent  = platformIcon(iv.platform);
  
  if (pc) {
    pc.innerHTML = '';
    iv.panelists.forEach(pid => { 
      const p = getPanelist(pid); 
      if (p) {
        const chip = document.createElement('div');
        chip.className = 'popup-panelist-chip';
        chip.textContent = p.name;
        pc.appendChild(chip);
      } 
    });
  }
  
  const popup = document.getElementById('event-popup-overlay');
  if (popup) popup.classList.add('active');
}

const closeEventPopup = document.getElementById('close-event-popup');
if (closeEventPopup) {
  closeEventPopup.addEventListener('click', () => {
    const popup = document.getElementById('event-popup-overlay');
    if (popup) popup.classList.remove('active');
  });
}

const overlayPopup = document.getElementById('event-popup-overlay');
if (overlayPopup) {
  overlayPopup.addEventListener('click', e => {
    if (e.target === e.currentTarget) e.currentTarget.classList.remove('active');
  });
}

const popupJoinBtn = document.getElementById('popup-btn-join');
if (popupJoinBtn) {
  popupJoinBtn.addEventListener('click', () => {
    const iv = interviews.find(i => i.id === activeEventId);
    if (iv?.platformLink) window.open(iv.platformLink,'_blank');
    else showToast('In-person interview.', 'info');
  });
}

const popupCancelBtn = document.getElementById('popup-btn-cancel');
if (popupCancelBtn) {
  popupCancelBtn.addEventListener('click', () => {
    const idx = interviews.findIndex(i => i.id === activeEventId);
    if (idx !== -1) { 
      interviews[idx].status='cancelled'; 
      const popup = document.getElementById('event-popup-overlay');
      if (popup) popup.classList.remove('active');
      renderCalendar(); 
      renderUpcomingList(); 
      updateStats(); 
      showToast('Interview cancelled.','warning'); 
    }
  });
}

const popupRescheduleBtn = document.getElementById('popup-btn-reschedule');
if (popupRescheduleBtn) {
  popupRescheduleBtn.addEventListener('click', () => {
    const popup = document.getElementById('event-popup-overlay');
    if (popup) popup.classList.remove('active');
    openScheduleModal(activeEventId, false); 
    showToast('Update fields to reschedule.','info');
  });
}

// ── Schedule Modal ────────────────────────────────────────
function openScheduleModal(interviewId = null, focusPanelists = false) {
  const sel = document.getElementById('modal-panelist-selector');
  if (!sel) return;
  sel.innerHTML = ''; 
  selectedModalPanelists = [];
  editingInterviewId = interviewId;

  const iv = interviewId ? interviews.find(i => i.id === interviewId) : null;

  panelists.forEach(p => {
    const chip = document.createElement('div');
    chip.className = 'panelist-chip-sel'; 
    chip.textContent = p.name; 
    chip.dataset.pid = p.id;

    const isSelected = iv ? iv.panelists.includes(p.id) : false;
    if (isSelected) {
      chip.classList.add('selected');
      selectedModalPanelists.push(p.id);
    }

    chip.addEventListener('click', () => {
      chip.classList.toggle('selected');
      if (chip.classList.contains('selected')) {
        selectedModalPanelists.push(p.id);
      } else {
        selectedModalPanelists = selectedModalPanelists.filter(id => id !== p.id);
      }
      checkScheduleConflicts();
    });
    sel.appendChild(chip);
  });

  const applicantInput = document.getElementById('modal-applicant');
  const dateInput = document.getElementById('modal-date');
  const timeInput = document.getElementById('modal-time');
  const durationSelect = document.getElementById('modal-duration');
  const notesText = document.getElementById('modal-notes');
  const titleText = document.querySelector('.schedule-modal-title');
  const submitBtn = document.getElementById('modal-submit-btn');

  if (iv) {
    if (applicantInput) applicantInput.value = `${iv.candidate} – ${iv.role}`;
    if (dateInput) dateInput.value = iv.date;
    if (timeInput) timeInput.value = iv.time;
    if (durationSelect) durationSelect.value = iv.duration;
    if (notesText) notesText.value = iv.notes || '';
    if (titleText) titleText.textContent = 'Reschedule Interview';
    if (submitBtn) submitBtn.textContent = 'Update Interview';

    selectedPlatform = iv.platform;
    document.querySelectorAll('#platform-btns .platform-btn').forEach(b => {
      b.classList.toggle('selected', b.dataset.platform === iv.platform);
    });
  } else {
    if (applicantInput) applicantInput.value = '';
    if (dateInput) dateInput.value = today.toISOString().split('T')[0];
    if (timeInput) timeInput.value = '10:00';
    if (durationSelect) durationSelect.value = '60';
    if (notesText) notesText.value = '';
    if (titleText) titleText.textContent = 'Schedule Interview';
    if (submitBtn) submitBtn.textContent = 'Schedule Interview';

    selectedPlatform = 'Google Meet';
    document.querySelectorAll('#platform-btns .platform-btn').forEach(b => {
      b.classList.toggle('selected', b.dataset.platform === 'Google Meet');
    });
  }

  // Bind change listeners to check conflicts in real-time
  if (dateInput) {
    dateInput.onchange = () => {
      checkScheduleConflicts();
      updatePanelistRecommendations();
    };
  }
  if (timeInput) {
    timeInput.onchange = () => {
      checkScheduleConflicts();
      updatePanelistRecommendations();
    };
  }
  if (applicantInput) {
    applicantInput.oninput = () => {
      updatePanelistRecommendations();
    };
  }

  updatePanelistRecommendations();
  checkScheduleConflicts();

  const overlay = document.getElementById('schedule-modal-overlay');
  if (overlay) overlay.classList.add('active');

  if (focusPanelists) {
    setTimeout(() => {
      const searchBox = document.getElementById('modal-panelist-search');
      if (searchBox) {
        searchBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        searchBox.focus();
        searchBox.style.boxShadow = '0 0 0 3px rgba(29,158,117,0.25)';
        setTimeout(() => searchBox.style.boxShadow = '', 1800);
      }
    }, 300);
  }
}

// Filter interviewer chips
const modalPanelistSearch = document.getElementById('modal-panelist-search');
if (modalPanelistSearch) {
  modalPanelistSearch.addEventListener('input', () => {
    const q = modalPanelistSearch.value.toLowerCase();
    document.querySelectorAll('#modal-panelist-selector .panelist-chip-sel').forEach(chip => {
      const p = getPanelist(chip.dataset.pid);
      if (!p) return;
      const matches = p.name.toLowerCase().includes(q) || 
                      (p.skills && p.skills.some(s => s.toLowerCase().includes(q))) ||
                      (p.title && p.title.toLowerCase().includes(q));
      chip.style.display = matches ? 'flex' : 'none';
    });
  });
}

function updatePanelistRecommendations() {
  const applicantVal = document.getElementById('modal-applicant')?.value.trim() || '';
  const dateVal = document.getElementById('modal-date')?.value || '';
  const timeVal = document.getElementById('modal-time')?.value || '';

  if (!applicantVal) return;

  const parts = applicantVal.split('–');
  const role = (parts[1] || '').trim().toLowerCase();

  const dayName = getDayName(dateVal);
  const slotIdx = getTimeSlotIndex(timeVal);

  document.querySelectorAll('#modal-panelist-selector .panelist-chip-sel').forEach(chip => {
    const pid = chip.dataset.pid;
    const p = getPanelist(pid);
    if (!p) return;

    let isMatch = false;
    if (role) {
      const roleKeywords = role.split(/\s+/);
      const skillMatch = p.skills && p.skills.some(skill => 
        roleKeywords.some(keyword => keyword.length > 2 && skill.toLowerCase().includes(keyword))
      );
      const deptMatch = p.department && roleKeywords.some(keyword => 
        keyword.length > 2 && p.department.toLowerCase().includes(keyword)
      );
      isMatch = skillMatch || deptMatch;
    }

    let isAvailable = p.availabilityStatus === 'available';
    if (dayName && slotIdx !== -1 && p.avail?.[dayName]) {
      isAvailable = isAvailable && (p.avail[dayName][slotIdx] === 1);
    }

    if (isMatch && isAvailable) {
      chip.classList.add('recommended');
      chip.title = 'Recommended: Matches skills & is available';
    } else {
      chip.classList.remove('recommended');
      chip.title = '';
    }
  });
}

function checkScheduleConflicts() {
  const dateVal = document.getElementById('modal-date')?.value || '';
  const timeVal = document.getElementById('modal-time')?.value || '';
  const conflictEl = document.getElementById('modal-conflict-warning');

  if (!conflictEl) return;
  conflictEl.classList.remove('show');
  conflictEl.innerHTML = '';

  if (!dateVal || !timeVal) return;

  const dayName = getDayName(dateVal);
  const slotIdx = getTimeSlotIndex(timeVal);

  const conflictingNames = [];

  selectedModalPanelists.forEach(pid => {
    const p = getPanelist(pid);
    if (!p) return;

    const chip = document.querySelector(`#modal-panelist-selector .panelist-chip-sel[data-pid="${pid}"]`);
    let hasConflict = false;

    // Check Availability Status
    if (p.availabilityStatus === 'on-leave') {
      conflictingNames.push(`${p.name} (On Leave)`);
      hasConflict = true;
    } else if (p.availabilityStatus === 'busy') {
      conflictingNames.push(`${p.name} (Busy today)`);
      hasConflict = true;
    } else {
      // Check Slot Availability
      const dayAvail = p.avail?.[dayName];
      if (dayAvail && slotIdx !== -1 && slotIdx < dayAvail.length) {
        if (dayAvail[slotIdx] === 0) {
          conflictingNames.push(`${p.name} (Unavailable at this hour)`);
          hasConflict = true;
        }
      }
    }

    // Check Double Booking
    const isDoubleBooked = interviews.some(iv => {
      if (editingInterviewId && iv.id === editingInterviewId) return false;
      if (iv.status === 'cancelled') return false;
      
      if (iv.date === dateVal && iv.panelists.includes(pid)) {
        const [h1] = iv.time.split(':').map(Number);
        const [h2] = timeVal.split(':').map(Number);
        return Math.abs(h1 - h2) < 1; // Double booked if within the same hour
      }
      return false;
    });

    if (isDoubleBooked) {
      conflictingNames.push(`${p.name} (Double-booked at this time)`);
      hasConflict = true;
    }

    if (chip) {
      chip.classList.toggle('conflict', hasConflict);
    }
  });

  if (conflictingNames.length > 0) {
    conflictEl.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style="width:14px;height:14px;flex-shrink:0;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
      <span>Conflict Detected: ${conflictingNames.join(', ')}</span>
    `;
    conflictEl.classList.add('show');
  }
}

const openScheduleBtn = document.getElementById('btn-open-schedule-modal');
if (openScheduleBtn) openScheduleBtn.addEventListener('click', () => openScheduleModal());

const closeScheduleBtn = document.getElementById('close-schedule-modal');
if (closeScheduleBtn) {
  closeScheduleBtn.addEventListener('click', () => {
    const modal = document.getElementById('schedule-modal-overlay');
    if (modal) modal.classList.remove('active');
  });
}

const cancelModalBtn = document.getElementById('modal-cancel-btn');
if (cancelModalBtn) {
  cancelModalBtn.addEventListener('click', () => {
    const modal = document.getElementById('schedule-modal-overlay');
    if (modal) modal.classList.remove('active');
  });
}

const overlaySchedule = document.getElementById('schedule-modal-overlay');
if (overlaySchedule) {
  overlaySchedule.addEventListener('click', e => {
    if (e.target === e.currentTarget) e.currentTarget.classList.remove('active');
  });
}

const platformBtns = document.getElementById('platform-btns');
if (platformBtns) {
  platformBtns.addEventListener('click', e => {
    const btn = e.target.closest('.platform-btn'); if (!btn) return;
    document.querySelectorAll('#platform-btns .platform-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected'); selectedPlatform = btn.dataset.platform;
  });
}

const submitModalBtn = document.getElementById('modal-submit-btn');
if (submitModalBtn) {
  submitModalBtn.addEventListener('click', () => {
    const applicant = document.getElementById('modal-applicant').value.trim();
    const date = document.getElementById('modal-date').value;
    const time = document.getElementById('modal-time').value;
    if (!applicant) { showToast('Please enter an applicant name.','warning'); return; }
    if (!date)      { showToast('Please select a date.','warning'); return; }
    if (!time)      { showToast('Please select a time.','warning'); return; }
    if (!selectedModalPanelists.length) { showToast('Select at least one interviewer.','warning'); return; }

    const parts = applicant.split('–');
    const candName = parts[0].trim();
    const candRole = parts[1]?.trim() || 'Not specified';
    const duration = parseInt(document.getElementById('modal-duration').value);
    const notes = document.getElementById('modal-notes').value.trim();

    if (editingInterviewId) {
      const idx = interviews.findIndex(i => i.id === editingInterviewId);
      if (idx !== -1) {
        interviews[idx].candidate = candName;
        interviews[idx].role = candRole;
        interviews[idx].date = date;
        interviews[idx].time = time;
        interviews[idx].duration = duration;
        interviews[idx].platform = selectedPlatform;
        interviews[idx].platformLink = selectedPlatform==='In-Person'?'':`https://meet.google.com/${Math.random().toString(36).slice(2,8)}`;
        interviews[idx].panelists = [...selectedModalPanelists];
        interviews[idx].notes = notes;
        
        showToast(`Interview with ${candName} updated!`, 'success');
      }
    } else {
      const newIv = {
        id: 'i' + Date.now(),
        candidate: candName,
        role: candRole,
        date,
        time,
        duration,
        platform: selectedPlatform,
        platformLink: selectedPlatform==='In-Person'?'':`https://meet.google.com/${Math.random().toString(36).slice(2,8)}`,
        panelists: [...selectedModalPanelists],
        status: 'pending',
        department: 'General',
        notes
      };
      interviews.push(newIv);
      showToast(`Interview with ${candName} scheduled!`, 'success');
    }

    const modal = document.getElementById('schedule-modal-overlay');
    if (modal) modal.classList.remove('active');

    renderCalendar(); 
    renderUpcomingList(); 
    updateStats();
  });
}

// ── Panel Management Dashboard ────────────────────────────
function renderPanelManagementDashboard() {
  const totalEl = document.getElementById('pm-total');
  const availEl = document.getElementById('pm-available');
  const busyEl = document.getElementById('pm-busy');
  const leaveEl = document.getElementById('pm-leave');
  const weekEl = document.getElementById('pm-week-assigned');
  const deptRow = document.getElementById('pm-dept-row');

  if (!totalEl) return;

  totalEl.textContent = panelists.length;
  availEl.textContent = panelists.filter(p => p.availabilityStatus === 'available').length;
  busyEl.textContent = panelists.filter(p => p.availabilityStatus === 'busy').length;
  leaveEl.textContent = panelists.filter(p => p.availabilityStatus === 'on-leave').length;

  const weeklyInterviews = interviews.filter(i => i.status !== 'cancelled' && isThisWeek(i.date));
  weekEl.textContent = weeklyInterviews.length;

  if (deptRow) {
    deptRow.innerHTML = '';
    const depts = {};
    panelists.forEach(p => {
      const dept = p.department || 'General';
      depts[dept] = (depts[dept] || 0) + 1;
    });

    const colors = { 
      Engineering: '#378ADD', 
      HR: '#1D9E75', 
      Product: '#D97706', 
      Design: '#7C3AED', 
      Marketing: '#E24B4A', 
      General: '#6B7280' 
    };

    Object.entries(depts).forEach(([dept, count]) => {
      const color = colors[dept] || '#1B2B5E';
      const chip = document.createElement('div');
      chip.className = 'pm-dept-chip';
      chip.innerHTML = `
        <span class="dept-dot" style="background:${color}"></span>
        ${dept}: ${count}
      `;
      deptRow.appendChild(chip);
    });
  }
}

// ── Panelist Directory ────────────────────────────────────
function renderPanelistDirectory() {
  const grid = document.getElementById('dir-grid');
  const innerGrid = document.getElementById('mp-dir-inner-grid');
  const countBadge = document.getElementById('dir-count-badge');

  const searchVal = document.getElementById('dir-search-input')?.value.toLowerCase() || '';
  const deptVal = document.getElementById('dir-filter-dept')?.value || 'all';

  const filtered = panelists.filter(p => {
    const nameMatch = p.name.toLowerCase().includes(searchVal);
    const skillMatch = p.skills && p.skills.some(s => s.toLowerCase().includes(searchVal));
    const roleMatch = p.title && p.title.toLowerCase().includes(searchVal);
    const textMatch = nameMatch || skillMatch || roleMatch;
    const deptMatch = deptVal === 'all' || p.department === deptVal;
    return textMatch && deptMatch;
  });

  if (countBadge) countBadge.textContent = filtered.length;

  // Main Directory Grid
  if (grid) {
    grid.innerHTML = '';
    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; padding:32px; font-size:13px; color:var(--text-secondary); text-align:center; background:#FAFAFA; border-radius:10px; border:0.5px dashed #E8E6E0;">
          No panelists found matching the filters.
        </div>`;
    } else {
      filtered.forEach(p => {
        // Calculate upcoming count
        const upcomingCount = interviews.filter(i => {
          if (i.status === 'cancelled' || !i.panelists.includes(p.id)) return false;
          const ivDate = new Date(i.date + 'T' + i.time);
          return ivDate >= new Date();
        }).length;

        const card = document.createElement('div');
        card.className = 'dir-card';

        const statusClass = p.availabilityStatus === 'available' ? 'available' : p.availabilityStatus === 'busy' ? 'busy' : 'on-leave';
        const statusText = p.availabilityStatus === 'available' ? 'Available' : p.availabilityStatus === 'busy' ? 'Busy' : 'On Leave';

        const skillsHTML = (p.skills || []).map(s => `<span class="dir-skill-chip">${s}</span>`).join('');
        const typesHTML = (p.interviewTypes || []).map(t => `<span class="dir-type-chip">${t}</span>`).join('');

        card.innerHTML = `
          <div class="dir-card-top">
            <div class="dir-avatar" style="background:${p.color || '#1B2B5E'}">
              ${p.name.split(' ').map(n=>n[0]).join('')}
            </div>
            <div class="dir-card-info">
              <div class="dir-card-name">${p.name}</div>
              <div class="dir-card-role">${p.title}</div>
              <div class="dir-card-dept">${p.department || 'General'}</div>
            </div>
            <div class="dir-avail-badge ${statusClass}">
              <span class="dir-avail-dot"></span>${statusText}
            </div>
          </div>
          <div class="dir-skills" style="margin-top: 4px;">
            ${skillsHTML || '<span style="font-size:10px;color:var(--text-secondary);font-style:italic;">No skills tags</span>'}
          </div>
          <div class="dir-interview-types" style="margin-top: 8px;">
            ${typesHTML}
          </div>
          <div class="dir-card-footer" style="margin-top: auto; padding-top: 10px; border-top: 0.5px solid #F0EEE8;">
            <div class="dir-upcoming-count" title="Upcoming Interviews">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              <span>${upcomingCount} upcoming</span>
            </div>
            <div class="dir-actions">
              <button class="dir-action-btn" onclick="editPanelist('${p.id}')" title="Edit Panelist">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
              </button>
              <button class="dir-action-btn danger" onclick="removePanelist('${p.id}')" title="Remove Panelist">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
              </button>
            </div>
          </div>
        `;
        grid.appendChild(card);
      });
    }
  }

  // Drawer Panelist List
  if (innerGrid) {
    innerGrid.innerHTML = '';
    panelists.forEach(p => {
      const item = document.createElement('div');
      item.className = 'mp-dir-item';
      item.innerHTML = `
        <div class="dir-avatar" style="background:${p.color || '#1B2B5E'}; width:30px; height:30px; font-size:11px; flex-shrink:0;">
          ${p.name.split(' ').map(n=>n[0]).join('')}
        </div>
        <div class="mp-dir-item-info">
          <div class="mp-dir-item-name" style="font-size:12px; font-weight:600;">${p.name}</div>
          <div class="mp-dir-item-meta" style="font-size:10.5px; color:var(--text-secondary);">${p.title} · ${p.department}</div>
        </div>
        <div class="mp-dir-item-actions">
          <button class="dir-action-btn" onclick="editPanelist('${p.id}')" title="Edit Panelist" style="width:24px; height:24px;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style="width:12px; height:12px;"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
          </button>
          <button class="dir-action-btn danger" onclick="removePanelist('${p.id}')" title="Remove Panelist" style="width:24px; height:24px;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style="width:12px; height:12px;"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
          </button>
        </div>
      `;
      innerGrid.appendChild(item);
    });
  }
}

// Bind filter listeners for page directory
const dirSearch = document.getElementById('dir-search-input');
const dirDept = document.getElementById('dir-filter-dept');
if (dirSearch) dirSearch.addEventListener('input', renderPanelistDirectory);
if (dirDept) dirDept.addEventListener('change', renderPanelistDirectory);

// ── Manage Panelists Drawer Form & Operations ─────────────

// Tags UI manager
function setupSkillsInput() {
  const wrap = document.getElementById('mp-skills-wrap');
  const input = document.getElementById('mp-skills-input');
  if (!wrap || !input) return;

  const renderSkillsChips = () => {
    wrap.querySelectorAll('.mp-tag').forEach(tag => tag.remove());
    selectedSkills.forEach((skill, idx) => {
      const chip = document.createElement('span');
      chip.className = 'mp-tag';
      chip.innerHTML = `
        ${skill}
        <button type="button" onclick="removeSkillChip(${idx})">&times;</button>
      `;
      wrap.insertBefore(chip, input);
    });
  };

  window.removeSkillChip = (idx) => {
    selectedSkills.splice(idx, 1);
    renderSkillsChips();
  };

  input.onkeydown = (e) => {
    if (e.key === ',' || e.key === 'Enter') {
      e.preventDefault();
      const val = input.value.trim().replace(/,/g, '');
      if (val && !selectedSkills.includes(val)) {
        selectedSkills.push(val);
        input.value = '';
        renderSkillsChips();
      }
    }
  };

  window.clearSkillsChips = () => {
    selectedSkills = [];
    renderSkillsChips();
  };

  window.setSkillsChips = (skillsArray) => {
    selectedSkills = [...skillsArray];
    renderSkillsChips();
  };
}

// Interview coverage buttons
function setupInterviewTypesInput() {
  const container = document.getElementById('mp-interview-types');
  if (!container) return;

  container.querySelectorAll('.mp-type-btn').forEach(btn => {
    btn.onclick = () => {
      const type = btn.dataset.type;
      btn.classList.toggle('active');
      if (btn.classList.contains('active')) {
        if (!selectedInterviewTypes.includes(type)) selectedInterviewTypes.push(type);
      } else {
        selectedInterviewTypes = selectedInterviewTypes.filter(t => t !== type);
      }
    };
  });
}

// Availability status buttons
function setupAvailabilityStatusInput() {
  const btns = document.querySelectorAll('.mp-avail-btns .mp-avail-btn');
  btns.forEach(btn => {
    btn.onclick = () => {
      btns.forEach(b => {
        b.classList.remove('active-avail', 'active-busy', 'active-leave');
      });
      const status = btn.dataset.status;
      selectedAvailabilityStatus = status;
      
      if (status === 'available') btn.classList.add('active-avail');
      else if (status === 'busy') btn.classList.add('active-busy');
      else if (status === 'on-leave') btn.classList.add('active-leave');
    };
  });
}

// Open/Close drawer handlers
function openMPDrawer() {
  const drawer = document.getElementById('mp-drawer-overlay');
  if (drawer) {
    drawer.classList.add('active');
    renderPanelistDirectory();
  }
}

function closeMPDrawer() {
  const drawer = document.getElementById('mp-drawer-overlay');
  if (drawer) {
    drawer.classList.remove('active');
    clearMPForm();
  }
}

// Clear form fields
function clearMPForm() {
  const editId = document.getElementById('mp-edit-id');
  const formTitle = document.getElementById('mp-form-title');
  const nameInput = document.getElementById('mp-name');
  const roleInput = document.getElementById('mp-role');
  const deptSelect = document.getElementById('mp-dept');
  const emailInput = document.getElementById('mp-email');
  const tzSelect = document.getElementById('mp-timezone');

  if (editId) editId.value = '';
  if (formTitle) formTitle.textContent = 'Add New Panelist';
  if (nameInput) nameInput.value = '';
  if (roleInput) roleInput.value = '';
  if (deptSelect) deptSelect.value = '';
  if (emailInput) emailInput.value = '';
  if (tzSelect) tzSelect.value = 'IST';

  if (window.clearSkillsChips) window.clearSkillsChips();

  selectedInterviewTypes = [];
  document.querySelectorAll('#mp-interview-types .mp-type-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  selectedAvailabilityStatus = 'available';
  document.querySelectorAll('.mp-avail-btns .mp-avail-btn').forEach(btn => {
    btn.classList.remove('active-avail', 'active-busy', 'active-leave');
    if (btn.dataset.status === 'available') btn.classList.add('active-avail');
  });
}

// Edit Panelist Action
window.editPanelist = (pid) => {
  const p = getPanelist(pid);
  if (!p) return;

  openMPDrawer();

  const editId = document.getElementById('mp-edit-id');
  const formTitle = document.getElementById('mp-form-title');
  const nameInput = document.getElementById('mp-name');
  const roleInput = document.getElementById('mp-role');
  const deptSelect = document.getElementById('mp-dept');
  const emailInput = document.getElementById('mp-email');
  const tzSelect = document.getElementById('mp-timezone');

  if (editId) editId.value = p.id;
  if (formTitle) formTitle.textContent = 'Edit Panelist';
  if (nameInput) nameInput.value = p.name;
  if (roleInput) roleInput.value = p.title;
  if (deptSelect) deptSelect.value = p.department || '';
  if (emailInput) emailInput.value = p.email || '';
  if (tzSelect) tzSelect.value = p.timezone || 'IST';

  if (window.setSkillsChips) window.setSkillsChips(p.skills || []);

  selectedInterviewTypes = [...(p.interviewTypes || [])];
  document.querySelectorAll('#mp-interview-types .mp-type-btn').forEach(btn => {
    const isSelected = selectedInterviewTypes.includes(btn.dataset.type);
    btn.classList.toggle('active', isSelected);
  });

  selectedAvailabilityStatus = p.availabilityStatus || 'available';
  document.querySelectorAll('.mp-avail-btns .mp-avail-btn').forEach(btn => {
    btn.classList.remove('active-avail', 'active-busy', 'active-leave');
    if (btn.dataset.status === selectedAvailabilityStatus) {
      if (selectedAvailabilityStatus === 'available') btn.classList.add('active-avail');
      else if (selectedAvailabilityStatus === 'busy') btn.classList.add('active-busy');
      else if (selectedAvailabilityStatus === 'on-leave') btn.classList.add('active-leave');
    }
  });
};

// Remove Panelist Action
window.removePanelist = (pid) => {
  const p = getPanelist(pid);
  if (!p) return;

  const upcomingCount = interviews.filter(i => {
    if (i.status === 'cancelled' || !i.panelists.includes(pid)) return false;
    const ivDate = new Date(i.date + 'T' + i.time);
    return ivDate >= new Date();
  }).length;

  let msg = `Are you sure you want to remove ${p.name}?`;
  if (upcomingCount > 0) {
    msg += `\n\nWarning: This panelist is scheduled for ${upcomingCount} upcoming interviews.`;
  }

  if (confirm(msg)) {
    const idx = panelists.findIndex(item => item.id === pid);
    if (idx !== -1) {
      panelists.splice(idx, 1);
      
      // Also disassociate panelist from interviews
      interviews.forEach(iv => {
        iv.panelists = iv.panelists.filter(id => id !== pid);
      });

      // Update UI
      renderPanelists();
      renderPanelistDirectory();
      renderPanelManagementDashboard();
      renderUpcomingList();
      renderCalendar();
      updateStats();
      
      showToast(`Panelist ${p.name} removed.`, 'warning');
    }
  }
};

// Save Panelist
const mpForm = document.getElementById('mp-form');
if (mpForm) {
  mpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const editId = document.getElementById('mp-edit-id')?.value || '';
    const name = document.getElementById('mp-name')?.value.trim() || '';
    const role = document.getElementById('mp-role')?.value.trim() || '';
    const dept = document.getElementById('mp-dept')?.value || '';
    const email = document.getElementById('mp-email')?.value.trim() || '';
    const timezone = document.getElementById('mp-timezone')?.value || 'IST';

    if (!name || !role || !dept || !email) {
      showToast('Please complete all required fields.', 'warning');
      return;
    }

    if (selectedInterviewTypes.length === 0) {
      showToast('Please select at least one interview type coverage.', 'warning');
      return;
    }

    if (editId) {
      // Edit mode
      const p = getPanelist(editId);
      if (p) {
        p.name = name;
        p.title = role;
        p.department = dept;
        p.email = email;
        p.timezone = timezone;
        p.skills = [...selectedSkills];
        p.interviewTypes = [...selectedInterviewTypes];
        p.availabilityStatus = selectedAvailabilityStatus;
        showToast(`Panelist ${name} updated!`, 'success');
      }
    } else {
      // Add new
      const colors = ['#1B2B5E', '#1D9E75', '#7C3AED', '#D97706', '#E24B4A', '#2563EB', '#059669'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      const newPanelist = {
        id: 'p' + Date.now(),
        name,
        title: role,
        color: randomColor,
        department: dept,
        email,
        timezone,
        skills: [...selectedSkills],
        interviewTypes: [...selectedInterviewTypes],
        availabilityStatus: selectedAvailabilityStatus,
        avail: {
          Mon: [1,1,1,1,1,1,1,1],
          Tue: [1,1,1,1,1,1,1,1],
          Wed: [1,1,1,1,1,1,1,1],
          Thu: [1,1,1,1,1,1,1,1],
          Fri: [1,1,1,1,1,1,1,1]
        }
      };
      panelists.push(newPanelist);
      showToast(`Panelist ${name} added!`, 'success');
    }

    closeMPDrawer();
    renderPanelists();
    renderPanelistDirectory();
    renderPanelManagementDashboard();
    renderUpcomingList();
    renderCalendar();
    updateStats();
  });
}

// Bind open/close drawer events
const btnOpenMPDrawer = document.getElementById('btn-open-mp-drawer');
const btnQuickAddPanelist = document.getElementById('btn-quick-add-panelist');
const btnCloseMPDrawer = document.getElementById('close-mp-drawer');
const btnClearMPForm = document.getElementById('mp-clear-btn');
const mpDrawerOverlay = document.getElementById('mp-drawer-overlay');

if (btnOpenMPDrawer) btnOpenMPDrawer.addEventListener('click', openMPDrawer);
if (btnQuickAddPanelist) btnQuickAddPanelist.addEventListener('click', openMPDrawer);
if (btnCloseMPDrawer) btnCloseMPDrawer.addEventListener('click', closeMPDrawer);
if (btnClearMPForm) btnClearMPForm.addEventListener('click', closeMPDrawer);
if (mpDrawerOverlay) {
  mpDrawerOverlay.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeMPDrawer();
  });
}

// ── Init ──────────────────────────────────────────────────
setupSkillsInput();
setupInterviewTypesInput();
setupAvailabilityStatusInput();

updateStats(); 
renderCalendar(); 
renderUpcomingList(); 
renderPanelists();
renderPanelistDirectory();
renderPanelManagementDashboard();
