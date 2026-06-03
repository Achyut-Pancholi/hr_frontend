// Hiring Reports & Analytics Database
let candidates = [
  {
    id: "CAN-1024",
    name: "Dianne Russell",
    email: "dianne.russell@example.com",
    role: "Frontend Developer",
    resumeUploaded: true,
    botScreeningDone: true,
    techInterviewDone: true,
    hiringStage: "Shortlisted",
    notes: "Excellent performance in React component patterns and layout architecture. Highly articulate on design patterns.",
    dateApplied: "2026-05-10",
    timeline: [
      { date: "May 10, 2026", event: "Application Submitted", desc: "Applied via Careers portal for Frontend Developer." },
      { date: "May 12, 2026", event: "Video Screening Invited", desc: "Sent AI Video Bot invite link." },
      { date: "May 15, 2026", event: "Video Screening Completed", desc: "Completed with AI overall rating of 9.0/10." },
      { date: "May 18, 2026", event: "Technical Interview Scheduled", desc: "Panel interview scheduled with Engineering Leads." },
      { date: "May 22, 2026", event: "Technical Interview Completed", desc: "Cleared. Shortlisted for Leadership and Culture round." }
    ]
  },
  {
    id: "CAN-1025",
    name: "Albert Flores",
    email: "albert.flores@example.com",
    role: "Backend Engineer",
    resumeUploaded: true,
    botScreeningDone: true,
    techInterviewDone: false,
    hiringStage: "Tech Scheduled",
    notes: "Good database normalisation explanation. Needs hands-on architectural checking in the next round.",
    dateApplied: "2026-05-15",
    timeline: [
      { date: "May 15, 2026", event: "Application Submitted", desc: "Applied via LinkedIn Referral." },
      { date: "May 16, 2026", event: "Video Screening Completed", desc: "Completed with AI overall rating of 8.5/10." },
      { date: "May 20, 2026", event: "L1 Technical Round Scheduled", desc: "Assigned to System Design Panel." }
    ]
  },
  {
    id: "CAN-1026",
    name: "Kathryn Murphy",
    email: "kathryn.murphy@example.com",
    role: "HR Executive",
    resumeUploaded: true,
    botScreeningDone: false,
    techInterviewDone: false,
    hiringStage: "Bot Screening Invited",
    notes: "Invitation mail dispatched. Waiting for candidate to complete recorded bot questionnaire.",
    dateApplied: "2026-05-25",
    timeline: [
      { date: "May 25, 2026", event: "Application Submitted", desc: "Applied for HR Executive role." },
      { date: "May 26, 2026", event: "Video Screening Invited", desc: "Dispatched automated video invite." }
    ]
  },
  {
    id: "CAN-1027",
    name: "Courtney Henry",
    email: "courtney.henry@example.com",
    role: "Frontend Developer",
    resumeUploaded: true,
    botScreeningDone: true,
    techInterviewDone: true,
    hiringStage: "Rejected",
    notes: "Struggled with basic layout and CSS positioning. Weak JavaScript closure principles.",
    dateApplied: "2026-05-05",
    timeline: [
      { date: "May 05, 2026", event: "Application Submitted", desc: "Applied via AngelList." },
      { date: "May 06, 2026", event: "Video Screening Completed", desc: "AI evaluation scored 5.5/10." },
      { date: "May 08, 2026", event: "Technical Interview Completed", desc: "Interview completed. Deficiencies in core layout execution." },
      { date: "May 12, 2026", event: "Application Rejected", desc: "HR status set to Rejected based on panel notes." }
    ]
  },
  {
    id: "CAN-1028",
    name: "Jane Cooper",
    email: "jane.cooper@example.com",
    role: "Backend Engineer",
    resumeUploaded: true,
    botScreeningDone: true,
    techInterviewDone: true,
    hiringStage: "Shortlisted",
    notes: "Phenomenal architectural answers. System design concepts are highly mature. Selected unanimously.",
    dateApplied: "2026-04-28",
    timeline: [
      { date: "Apr 28, 2026", event: "Application Submitted", desc: "Applied via Careers portal." },
      { date: "Apr 30, 2026", event: "Video Screening Completed", desc: "AI overall score 9.5/10." },
      { date: "May 05, 2026", event: "Technical Interview Completed", desc: "System Design and architectural round cleared." },
      { date: "May 10, 2026", event: "HR round Completed", desc: "Compensation and culture check done." },
      { date: "May 14, 2026", event: "Offer Extended", desc: "Sent formal offer letter." },
      { date: "May 20, 2026", event: "Offer Accepted", desc: "Candidate signed. Onboarding scheduled." }
    ]
  },
  {
    id: "CAN-1029",
    name: "Cody Fisher",
    email: "cody.fisher@example.com",
    role: "React Native Developer",
    resumeUploaded: true,
    botScreeningDone: true,
    techInterviewDone: false,
    hiringStage: "Shortlisted",
    notes: "Strong knowledge of bridge and native optimization techniques. Excellent portfolio.",
    dateApplied: "2026-05-18",
    timeline: [
      { date: "May 18, 2026", event: "Application Submitted", desc: "Applied via Github Jobs." },
      { date: "May 19, 2026", event: "Video Screening Completed", desc: "AI evaluation scored 8.2/10." },
      { date: "May 22, 2026", event: "L1 Interview Scheduled", desc: "Scheduled for React Native Panel." }
    ]
  },
  {
    id: "CAN-1030",
    name: "Bessie Cooper",
    email: "bessie.cooper@example.com",
    role: "Product Manager",
    resumeUploaded: true,
    botScreeningDone: true,
    techInterviewDone: true,
    hiringStage: "Shortlisted",
    notes: "Outstanding metrics prioritization logic. Great stakeholder management skills.",
    dateApplied: "2026-05-01",
    timeline: [
      { date: "May 01, 2026", event: "Application Submitted", desc: "Applied for Product Manager role." },
      { date: "May 03, 2026", event: "Video Screening Completed", desc: "AI evaluation score 8.8/10." },
      { date: "May 10, 2026", event: "L1 Product Round Completed", desc: "Case study round cleared." },
      { date: "May 18, 2026", event: "Leadership Round Completed", desc: "Shortlisted for offer." },
      { date: "May 28, 2026", event: "Offer Extended", desc: "Dispatched offer details." }
    ]
  },
  {
    id: "CAN-1031",
    name: "Guy Hawkins",
    email: "guy.hawkins@example.com",
    role: "UI/UX Designer",
    resumeUploaded: true,
    botScreeningDone: true,
    techInterviewDone: true,
    hiringStage: "Applied",
    notes: "Excellent heuristic evaluation presentation. Highly visual portfolio review.",
    dateApplied: "2026-05-22",
    timeline: [
      { date: "May 22, 2026", event: "Application Submitted", desc: "Applied via Dribbble referral." },
      { date: "May 24, 2026", event: "Video Screening Completed", desc: "AI evaluation score 9.0/10." },
      { date: "May 28, 2026", event: "Portfolio Review Completed", desc: "Shortlisted for UI panel." }
    ]
  }
];

// Color Gradients for Candidate Initials Avatars
const avatarGradients = [
  "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
  "linear-gradient(135deg, #10B981 0%, #059669 100%)",
  "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
  "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)",
  "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)"
];

// State Variables
let activeCandidateId = null;
let currentSearchQuery = "";
let currentRoleFilter = "";
let currentStageFilter = "";
let currentStatusFilter = "";
let currentSortKey = "name";
let currentSortOrder = "asc";
let currentPage = 1;
const rowsPerPage = 10;
let isTableLoading = false;
let currentView = "list"; // list or grid

// DOM Element Selections
const candidateSearch = document.getElementById("candidate-search");
const pipelineTableBody = document.getElementById("pipeline-table-body");
const pipelineGridBody = document.getElementById("pipeline-grid-body");
const reportsTableView = document.getElementById("reports-table-view");
const reportsGridView = document.getElementById("reports-grid-view");

const btnViewList = document.getElementById("btn-view-list");
const btnViewGrid = document.getElementById("btn-view-grid");
const btnExportTrigger = document.getElementById("btn-export-trigger");

// KPI Counters
const kpiTotalApplicants = document.getElementById("kpi-total-applicants");
const kpiBotScreeningDone = document.getElementById("kpi-bot-screening-done");
const kpiShortlistedCandidates = document.getElementById("kpi-shortlisted-candidates");
const kpiAvgScore = document.getElementById("kpi-avg-score");

// Context Menu Actions Dropdown
const actionsDropdown = document.getElementById("actions-menu-dropdown");
const menuViewReport = document.getElementById("menu-view-report");
const menuAddNote = document.getElementById("menu-add-note");
const menuExportData = document.getElementById("menu-export-data");
const menuRemoveCandidate = document.getElementById("menu-remove-candidate");

// Modals
const notesModal = document.getElementById("notes-modal");
const notesModalTitle = document.getElementById("notes-modal-title");
const notesTextarea = document.getElementById("notes-textarea");
const btnSaveNotes = document.getElementById("btn-save-notes");
const btnCancelNotes = document.getElementById("btn-cancel-notes");
const closeNotesModal = document.getElementById("close-notes-modal");

const reportModal = document.getElementById("report-modal");
const closeReportModal = document.getElementById("close-report-modal");
const btnCloseReport = document.getElementById("btn-close-report");
const repAvatar = document.getElementById("rep-avatar");
const repName = document.getElementById("rep-name");
const repEmail = document.getElementById("rep-email");
const repRole = document.getElementById("rep-role");
const repScreeningBadge = document.getElementById("rep-screening-badge");
const repInterviewBadge = document.getElementById("rep-interview-badge");
const repDecisionBadge = document.getElementById("rep-decision-badge");
const repNotes = document.getElementById("rep-notes");
const repTimeline = document.getElementById("rep-timeline");

const exportModal = document.getElementById("export-modal");
const closeExportModal = document.getElementById("close-export-modal");
const btnCancelExport = document.getElementById("btn-cancel-export");
const btnDownloadReport = document.getElementById("btn-download-report");
const toastHolder = document.getElementById("toast-holder");

// Dropdown State Elements
let selectRoleSel = null;
let selectStageSel = null;
let selectStatusSel = null;

// Helper Functions
function getInitials(name) {
  if (!name) return "KL";
  const parts = name.trim().split(" ");
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return parts[0].substring(0, 2).toUpperCase();
}

function getAvatarGradient(name) {
  let code = 0;
  for (let i = 0; i < name.length; i++) {
    code += name.charCodeAt(i);
  }
  return avatarGradients[code % avatarGradients.length];
}

function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = "toast";
  
  if (type === "warning") {
    toast.style.borderLeftColor = "#EF6C00";
  } else if (type === "error") {
    toast.style.borderLeftColor = "#C62828";
  } else {
    toast.style.borderLeftColor = "#1a7a4a"; // forest green
  }

  const iconSvg = `
    <svg viewBox="0 0 24 24" stroke="currentColor" fill="none">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>`;
  
  toast.innerHTML = `
    <span class="toast-icon">${iconSvg}</span>
    <span class="toast-message">${message}</span>
  `;

  toastHolder.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("removing");
    toast.addEventListener("animationend", () => {
      toast.remove();
    });
  }, 3200);
}

// ----------------------------------------------------
// Custom Searchable Dropdown Helper Class
// ----------------------------------------------------
function initSearchableSelect(containerId, options, onSelectCallback) {
  const container = document.getElementById(containerId);
  if (!container) return null;

  const trigger = container.querySelector(".select-trigger");
  const triggerText = container.querySelector(".select-trigger-text");
  const panel = container.querySelector(".select-dropdown-panel");
  const searchInput = container.querySelector(".select-search-input");
  const optionsList = container.querySelector(".select-options-list");

  let selectedValue = "";

  function render(filterText = "") {
    optionsList.innerHTML = "";
    const filtered = options.filter(opt => 
      opt.label.toLowerCase().includes(filterText.toLowerCase())
    );

    if (filtered.length === 0) {
      const div = document.createElement("div");
      div.className = "select-option disabled";
      div.textContent = "No options found";
      optionsList.appendChild(div);
      return;
    }

    filtered.forEach(opt => {
      const div = document.createElement("div");
      const isSelected = selectedValue === opt.value;
      div.className = `select-option${isSelected ? " selected" : ""}`;
      div.textContent = opt.label;
      div.dataset.value = opt.value;
      div.addEventListener("click", (e) => {
        e.stopPropagation();
        selectValue(opt.value, opt.label);
        close();
      });
      optionsList.appendChild(div);
    });
  }

  function selectValue(value, label) {
    selectedValue = value;
    trigger.dataset.value = value;
    triggerText.textContent = label;
    if (onSelectCallback) onSelectCallback(value);
  }

  function toggle() {
    document.querySelectorAll(".searchable-select").forEach(sel => {
      if (sel !== container) sel.classList.remove("active");
    });
    container.classList.toggle("active");
    if (container.classList.contains("active")) {
      searchInput.value = "";
      render();
      searchInput.focus();
    }
  }

  function close() {
    container.classList.remove("active");
  }

  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    toggle();
  });

  searchInput.addEventListener("input", (e) => {
    render(e.target.value);
  });

  return {
    getValue: () => selectedValue,
    setValue: (val, label) => selectValue(val, label),
    setOptions: (newOptions) => {
      options = newOptions;
      if (container.classList.contains("active")) {
        render(searchInput.value);
      }
    },
    reset: (placeholderText) => {
      selectedValue = "";
      trigger.dataset.value = "";
      triggerText.textContent = placeholderText;
      optionsList.innerHTML = "";
    }
  };
}

// Global click outside listener to close dropdowns
document.addEventListener("click", () => {
  document.querySelectorAll(".searchable-select").forEach(sel => {
    sel.classList.remove("active");
  });
});

// Setup the Filter Dropdowns
function setupFilterDropdowns() {
  // Extract unique roles from candidates list
  const uniqueRoles = [...new Set(candidates.map(c => c.role))];
  const roleOptions = [
    { value: "", label: "All Roles" },
    ...uniqueRoles.map(r => ({ value: r, label: r }))
  ];

  selectRoleSel = initSearchableSelect("select-role-container", roleOptions, (val) => {
    currentRoleFilter = val;
    currentPage = 1;
    updateUrlParams();
    triggerReload();
  });

  // Stages Options
  const stageOptions = [
    { value: "", label: "All Stages" },
    { value: "Applied", label: "Applied" },
    { value: "Bot Screening Invited", label: "Bot Screening Invited" },
    { value: "Bot Screening Done", label: "Bot Screening Done" },
    { value: "Tech Scheduled", label: "Tech Scheduled" },
    { value: "Tech Done", label: "Tech Done" },
    { value: "Shortlisted", label: "Shortlisted" },
    { value: "Rejected", label: "Rejected" }
  ];

  selectStageSel = initSearchableSelect("select-stage-container", stageOptions, (val) => {
    currentStageFilter = val;
    currentPage = 1;
    updateUrlParams();
    triggerReload();
  });

  // Status Check Options
  const statusOptions = [
    { value: "", label: "All Status" },
    { value: "transcript", label: "Transcript Available" },
    { value: "tech", label: "Tech Interview Done" }
  ];

  selectStatusSel = initSearchableSelect("select-status-container", statusOptions, (val) => {
    currentStatusFilter = val;
    currentPage = 1;
    updateUrlParams();
    triggerReload();
  });
}

// Get Tinted Badge Style matching stage
function getStageBadgeClass(stage) {
  const s = stage.toLowerCase();
  if (s === "applied") return "status-pill applied";
  if (s === "bot screening invited") return "status-pill bot-screening-invited";
  if (s === "bot screening done") return "status-pill bot-screening-done";
  if (s === "tech scheduled" || s === "l1 interview" || s === "technical interview") return "status-pill tech-scheduled";
  if (s === "tech done" || s === "interview completed") return "status-pill tech-done";
  if (s === "shortlisted" || s === "hired" || s === "offer extended") return "status-pill shortlisted";
  if (s === "rejected") return "status-pill rejected-pill";
  return "status-pill applied";
}

// ----------------------------------------------------
// Core Filtering and Data Processing
// ----------------------------------------------------
function getFilteredCandidates() {
  const query = currentSearchQuery.trim().toLowerCase();
  
  return candidates.filter(cand => {
    // 1. Search Query filter
    if (query) {
      const matchSearch = cand.name.toLowerCase().includes(query) ||
                          cand.email.toLowerCase().includes(query) ||
                          cand.role.toLowerCase().includes(query) ||
                          cand.id.toLowerCase().includes(query);
      if (!matchSearch) return false;
    }

    // 2. Role filter
    if (currentRoleFilter && cand.role !== currentRoleFilter) return false;

    // 3. Stage filter
    if (currentStageFilter && cand.hiringStage !== currentStageFilter) return false;

    // 4. Status filter
    if (currentStatusFilter) {
      if (currentStatusFilter === "transcript" && !cand.botScreeningDone) return false;
      if (currentStatusFilter === "tech" && !cand.techInterviewDone) return false;
    }

    return true;
  });
}

function getSortedCandidates(filtered) {
  return filtered.sort((a, b) => {
    let valA = a[currentSortKey] || "";
    let valB = b[currentSortKey] || "";
    
    // stage maps to hiringStage
    if (currentSortKey === "stage") {
      valA = a.hiringStage || "";
      valB = b.hiringStage || "";
    }
    
    if (typeof valA === "string") {
      valA = valA.toLowerCase();
      valB = valB.toLowerCase();
    }
    
    if (valA < valB) return currentSortOrder === "asc" ? -1 : 1;
    if (valA > valB) return currentSortOrder === "asc" ? 1 : -1;
    return 0;
  });
}

function getPaginatedCandidates(sorted) {
  const totalEntries = sorted.length;
  const totalPages = Math.ceil(totalEntries / rowsPerPage);
  if (currentPage > totalPages) currentPage = Math.max(1, totalPages);
  
  const startIdx = (currentPage - 1) * rowsPerPage;
  return sorted.slice(startIdx, startIdx + rowsPerPage);
}

// ----------------------------------------------------
// UI Render Loops
// ----------------------------------------------------
function renderCandidates() {
  pipelineTableBody.innerHTML = "";
  pipelineGridBody.innerHTML = "";

  if (isTableLoading) {
    if (currentView === "list") {
      renderListSkeletons();
    } else {
      renderGridSkeletons();
    }
    return;
  }

  const filtered = getFilteredCandidates();
  const sorted = getSortedCandidates(filtered);
  const paginated = getPaginatedCandidates(sorted);

  if (sorted.length === 0) {
    if (currentView === "list") {
      renderListEmptyState();
    } else {
      renderGridEmptyState();
    }
    renderPagination(0);
    return;
  }

  if (currentView === "list") {
    renderListView(paginated);
  } else {
    renderGridView(paginated);
  }

  renderPagination(sorted.length);
}

function renderListView(paginated) {
  paginated.forEach(cand => {
    const tr = document.createElement("tr");
    tr.id = `candidate-row-${cand.id}`;

    const initials = getInitials(cand.name);
    const grad = getAvatarGradient(cand.name);

    // Document Status Buttons
    const transcriptBtn = `
      <button class="card-doc-btn ${cand.botScreeningDone ? 'active' : ''}" ${cand.botScreeningDone ? '' : 'disabled'} data-tooltip="${cand.botScreeningDone ? 'Transcript Available' : 'Transcript Pending'}" data-id="${cand.id}" data-doc="transcript" style="${cand.botScreeningDone ? 'color: var(--active-nav-bg);' : ''}">
        <svg viewBox="0 0 24 24"><path d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.12 2.99 2.68 3.22l3.07.46V21l3.56-3.56h6.76c1.63 0 2.94-1.3 2.94-2.93V6.43c0-1.63-1.31-2.93-2.94-2.93H4.63c-1.63 0-2.94 1.3-2.94 2.93v7.08z" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
    `;

    const techBtn = `
      <button class="card-doc-btn ${cand.techInterviewDone ? 'active' : ''}" ${cand.techInterviewDone ? '' : 'disabled'} data-tooltip="${cand.techInterviewDone ? 'Technical Interview Completed' : 'Technical Interview Pending'}" data-id="${cand.id}" data-doc="tech" style="${cand.techInterviewDone ? 'color: var(--active-nav-bg);' : ''}">
        <svg viewBox="0 0 24 24"><path d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
    `;

    // Notes Button
    const noteClass = cand.notes ? "has-notes" : "";
    const notesIcon = cand.notes 
      ? `<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor"><path d="M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM2 9V6a3 3 0 013-3h14a3 3 0 013 3v3H2z"/></svg>`
      : `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a.75.75 0 01-1.074-.765 6 6 0 001.257-2.737C3.038 16.289 1 14.368 1 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg>`;

    tr.innerHTML = `
      <td>
        <div class="col-candidate">
          <div class="candidate-avatar" style="background: ${grad}">${initials}</div>
          <div class="candidate-info">
            <span class="candidate-name">${cand.name}</span>
            <span class="candidate-phone" style="font-size: 11px; color: var(--text-secondary);">${cand.email}</span>
          </div>
        </div>
      </td>
      <td>
        <span class="col-id">${cand.id}</span>
      </td>
      <td>
        <span class="role-tag-blue">${cand.role}</span>
      </td>
      <td>
        ${transcriptBtn}
      </td>
      <td>
        ${techBtn}
      </td>
      <td>
        <span class="${getStageBadgeClass(cand.hiringStage)}">${cand.hiringStage}</span>
      </td>
      <td>
        <button class="notes-btn ${noteClass}" data-id="${cand.id}" data-tooltip="${cand.notes || 'Add HR Notes'}">
          ${notesIcon}
        </button>
      </td>
      <td>
        <div class="actions-cell">
          <button class="btn-view btn-view-report" data-id="${cand.id}">View</button>
          <button class="btn-action-trigger" data-id="${cand.id}">
            <svg viewBox="0 0 24 24" stroke="currentColor" fill="none"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" /></svg>
          </button>
        </div>
      </td>
    `;
    pipelineTableBody.appendChild(tr);
  });
}

function renderGridView(paginated) {
  paginated.forEach(cand => {
    const initials = getInitials(cand.name);
    const grad = getAvatarGradient(cand.name);

    const card = document.createElement("div");
    card.className = "applicant-grid-card";
    card.id = `grid-card-${cand.id}`;

    card.innerHTML = `
      <div class="applicant-card-header">
        <div class="candidate-avatar" style="background: ${grad}">${initials}</div>
        <div class="candidate-info">
          <span class="candidate-name" style="font-size: 14px; font-weight: 700;">${cand.name}</span>
          <span class="candidate-phone" style="font-size: 11px; color: var(--text-secondary);">${cand.email}</span>
        </div>
      </div>
      <div class="applicant-card-body" style="gap: 12px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span class="col-id">${cand.id}</span>
          <span class="${getStageBadgeClass(cand.hiringStage)}">${cand.hiringStage}</span>
        </div>
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <span style="font-size: 11.5px; font-weight: 600; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.3px;">Role Applied</span>
          <span class="role-tag-blue" style="align-self: flex-start;">${cand.role}</span>
        </div>
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <span style="font-size: 11.5px; font-weight: 600; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.3px;">HR Remarks</span>
          <p style="font-size: 12px; color: var(--text-primary); line-height: 1.4; background-color: #FAF9F6; padding: 8px 10px; border-radius: 6px; border: 0.5px solid #EEEAE3; min-height: 36px; max-height: 72px; overflow-y: auto; white-space: pre-wrap;">${cand.notes || 'No notes added yet.'}</p>
        </div>
      </div>
      <div class="applicant-card-actions" style="margin-top: auto; padding-top: 8px; border-top: 0.5px solid var(--divider-color);">
        <div style="display: flex; gap: 6px; align-items: center;">
          <button class="btn-view btn-view-report" data-id="${cand.id}">View</button>
          <button class="btn-action-trigger" data-id="${cand.id}">
            <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" style="width: 14px; height: 14px; stroke-width: 2;"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" /></svg>
          </button>
        </div>
        <div class="card-doc-links">
          <button class="card-doc-btn ${cand.botScreeningDone ? 'active' : ''}" ${cand.botScreeningDone ? '' : 'disabled'} data-tooltip="${cand.botScreeningDone ? 'Transcript Available' : 'Transcript Pending'}" data-id="${cand.id}" data-doc="transcript" style="${cand.botScreeningDone ? 'color: var(--active-nav-bg);' : ''}">
            <svg viewBox="0 0 24 24"><path d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.12 2.99 2.68 3.22l3.07.46V21l3.56-3.56h6.76c1.63 0 2.94-1.3 2.94-2.93V6.43c0-1.63-1.31-2.93-2.94-2.93H4.63c-1.63 0-2.94 1.3-2.94 2.93v7.08z" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <button class="card-doc-btn ${cand.techInterviewDone ? 'active' : ''}" ${cand.techInterviewDone ? '' : 'disabled'} data-tooltip="${cand.techInterviewDone ? 'Technical Interview Completed' : 'Technical Interview Pending'}" data-id="${cand.id}" data-doc="tech" style="${cand.techInterviewDone ? 'color: var(--active-nav-bg);' : ''}">
            <svg viewBox="0 0 24 24"><path d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
      </div>
    `;
    pipelineGridBody.appendChild(card);
  });
}

function renderListEmptyState() {
  pipelineTableBody.innerHTML = `
    <tr>
      <td colspan="8" style="padding: 0;">
        <div class="empty-state-wrapper">
          <svg class="empty-state-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <h3 class="empty-state-title">No candidate reports found.</h3>
          <p class="empty-state-subtitle">Adjust your search or filter tags to refine results.</p>
        </div>
      </td>
    </tr>
  `;
}

function renderGridEmptyState() {
  pipelineGridBody.innerHTML = `
    <div style="grid-column: 1 / -1; width: 100%; display: flex; justify-content: center;">
      <div class="empty-state-wrapper">
        <svg class="empty-state-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <h3 class="empty-state-title">No candidate reports found.</h3>
        <p class="empty-state-subtitle">Adjust your search or filter tags to refine results.</p>
      </div>
    </div>
  `;
}

function renderListSkeletons() {
  for (let i = 0; i < 5; i++) {
    const tr = document.createElement("tr");
    tr.className = "skeleton-row";
    tr.innerHTML = `
      <td>
        <div class="col-candidate">
          <div class="skeleton-avatar"></div>
          <div class="candidate-info" style="width: 120px;">
            <div class="skeleton-block" style="height: 12px; margin-bottom: 4px;"></div>
            <div class="skeleton-block" style="height: 10px; width: 80%;"></div>
          </div>
        </div>
      </td>
      <td><div class="skeleton-block" style="width: 60px;"></div></td>
      <td><div class="skeleton-block" style="width: 100px;"></div></td>
      <td><div class="skeleton-block" style="width: 24px;"></div></td>
      <td><div class="skeleton-block" style="width: 24px;"></div></td>
      <td><div class="skeleton-block" style="width: 80px;"></div></td>
      <td><div class="skeleton-block" style="width: 32px; height: 32px; border-radius: 999px;"></div></td>
      <td><div class="skeleton-block" style="width: 80px; height: 28px; border-radius: 999px;"></div></td>
    `;
    pipelineTableBody.appendChild(tr);
  }
}

function renderGridSkeletons() {
  for (let i = 0; i < 4; i++) {
    const card = document.createElement("div");
    card.className = "applicant-grid-card skeleton-card";
    card.style.pointerEvents = "none";
    card.innerHTML = `
      <div class="applicant-card-header">
        <div class="skeleton-avatar"></div>
        <div class="candidate-info" style="width: 120px;">
          <div class="skeleton-block" style="height: 12px; margin-bottom: 4px;"></div>
          <div class="skeleton-block" style="height: 10px; width: 80%;"></div>
        </div>
      </div>
      <div class="applicant-card-body" style="gap: 12px;">
        <div style="display: flex; justify-content: space-between;">
          <div class="skeleton-block" style="width: 60px;"></div>
          <div class="skeleton-block" style="width: 80px;"></div>
        </div>
        <div class="skeleton-block" style="width: 120px; height: 20px; border-radius: 999px;"></div>
        <div class="skeleton-block" style="width: 100%; height: 40px; border-radius: 6px;"></div>
      </div>
      <div class="applicant-card-actions" style="margin-top: 4px;">
        <div class="skeleton-block" style="width: 60px; height: 28px; border-radius: 999px;"></div>
        <div style="display: flex; gap: 8px;">
          <div class="skeleton-block" style="width: 20px; height: 20px;"></div>
          <div class="skeleton-block" style="width: 20px; height: 20px;"></div>
        </div>
      </div>
    `;
    pipelineGridBody.appendChild(card);
  }
}

function renderPagination(totalEntries) {
  const existingBar = document.querySelector(".pagination-bar");
  if (existingBar) existingBar.remove();

  if (totalEntries === 0) return;

  const totalPages = Math.ceil(totalEntries / rowsPerPage);
  const startEntry = (currentPage - 1) * rowsPerPage + 1;
  const endEntry = Math.min(currentPage * rowsPerPage, totalEntries);

  const pagBar = document.createElement("div");
  pagBar.className = "pagination-bar";
  
  let buttonsHtml = `
    <button class="pagination-btn" id="pag-prev" ${currentPage === 1 ? "disabled" : ""}>
      &lt; Prev
    </button>
  `;

  for (let i = 1; i <= totalPages; i++) {
    buttonsHtml += `
      <button class="pagination-btn ${i === currentPage ? "active" : ""}" data-page="${i}">
        ${i}
      </button>
    `;
  }

  buttonsHtml += `
    <button class="pagination-btn" id="pag-next" ${currentPage === totalPages ? "disabled" : ""}>
      Next &gt;
    </button>
  `;

  pagBar.innerHTML = `
    <span class="pagination-info">Showing ${startEntry} to ${endEntry} of ${totalEntries} entries</span>
    <div class="pagination-buttons">
      ${buttonsHtml}
    </div>
  `;

  const card = document.getElementById("card-pipeline-report");
  if (card) card.appendChild(pagBar);

  // Bind pagination click events
  document.querySelectorAll(".pagination-buttons .pagination-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const pageVal = btn.dataset.page;
      const idVal = btn.id;

      if (pageVal) {
        currentPage = parseInt(pageVal);
      } else if (idVal === "pag-prev" && currentPage > 1) {
        currentPage--;
      } else if (idVal === "pag-next" && currentPage < totalPages) {
        currentPage++;
      }

      updateUrlParams();
      triggerReload();
    });
  });
}

function updateKpiCounters() {
  const total = candidates.length;
  const screened = candidates.filter(c => c.botScreeningDone).length;
  const shortlisted = candidates.filter(c => c.hiringStage === "Shortlisted").length;

  kpiTotalApplicants.textContent = 180 + total;
  kpiBotScreeningDone.textContent = 138 + screened;
  kpiShortlistedCandidates.textContent = 50 + shortlisted;
  kpiAvgScore.textContent = "81.4%";
}

function triggerReload() {
  isTableLoading = true;
  renderCandidates();
  setTimeout(() => {
    isTableLoading = false;
    renderCandidates();
  }, 300);
}

// ----------------------------------------------------
// Modals Controllers
// ----------------------------------------------------

// 1. Detailed Performance Report Modal
function openCandidateReport(candidateId) {
  const cand = candidates.find(c => c.id === candidateId);
  if (!cand) return;

  repAvatar.textContent = getInitials(cand.name);
  repAvatar.style.background = getAvatarGradient(cand.name);
  repName.textContent = cand.name;
  repEmail.textContent = cand.email;
  repRole.textContent = cand.role;

  // Screening status
  repScreeningBadge.textContent = cand.botScreeningDone ? "Completed" : "Pending";
  repScreeningBadge.className = `status-pill ${cand.botScreeningDone ? 'selected' : 'pending'}`;

  // Interview status
  let intStatus = "Pending";
  let intClass = "pending";
  if (cand.techInterviewDone) {
    intStatus = "Completed";
    intClass = "selected";
  } else if (cand.hiringStage === "Tech Scheduled") {
    intStatus = "Scheduled";
    intClass = "on-hold";
  }
  repInterviewBadge.textContent = intStatus;
  repInterviewBadge.className = `status-pill ${intClass}`;

  // Hiring Decision status
  repDecisionBadge.textContent = cand.hiringStage;
  repDecisionBadge.className = `${getStageBadgeClass(cand.hiringStage)}`;

  // Notes
  repNotes.textContent = cand.notes || "No candidate remarks logged yet.";

  // Render vertical timeline history
  repTimeline.innerHTML = "";
  if (cand.timeline && cand.timeline.length > 0) {
    cand.timeline.forEach(item => {
      const node = document.createElement("div");
      node.className = "timeline-item";
      
      let dotClass = "";
      const ev = item.event.toLowerCase();
      if (ev.includes("completed") || ev.includes("cleared") || ev.includes("accepted") || ev.includes("extended") || ev.includes("done")) {
        dotClass = "completed";
      } else if (ev.includes("scheduled")) {
        dotClass = "scheduled";
      } else if (ev.includes("rejected")) {
        dotClass = "rejected";
      } else {
        dotClass = "pending";
      }

      node.innerHTML = `
        <div class="timeline-dot ${dotClass}"></div>
        <div class="timeline-content">
          <div class="timeline-date">${item.date}</div>
          <h4 class="timeline-title" style="font-size: 13px; font-weight: 600; margin-top: 2px;">${item.event}</h4>
          <p class="timeline-desc" style="font-size: 11.5px; color: var(--text-secondary); margin-top: 2px;">${item.desc}</p>
        </div>
      `;
      repTimeline.appendChild(node);
    });
  } else {
    repTimeline.innerHTML = `<div style="font-style: italic; color: var(--text-secondary); font-size: 12px;">No historical milestones logged.</div>`;
  }

  reportModal.classList.add("active");
}

function closeReport() {
  reportModal.classList.remove("active");
}

closeReportModal.addEventListener("click", closeReport);
btnCloseReport.addEventListener("click", closeReport);
reportModal.addEventListener("click", (e) => {
  if (e.target === reportModal) closeReport();
});

// 2. Notes Editor Modal
function openNotesEditor(candidateId) {
  const cand = candidates.find(c => c.id === candidateId);
  if (!cand) return;

  activeCandidateId = candidateId;
  notesModalTitle.textContent = `Candidate Notes — ${cand.name}`;
  notesTextarea.value = cand.notes || "";
  notesModal.classList.add("active");
  notesTextarea.focus();
}

function closeNotes() {
  notesModal.classList.remove("active");
  activeCandidateId = null;
}

function saveNotesFromForm() {
  if (activeCandidateId) {
    const cand = candidates.find(c => c.id === activeCandidateId);
    if (cand) {
      const oldNotes = cand.notes || "";
      const newNotes = notesTextarea.value.trim();
      if (oldNotes !== newNotes) {
        cand.notes = newNotes;
        renderCandidates();
        showToast("Notes saved.");
      }
    }
  }
}

// Bind blur and keydown listeners to notes modal textarea for auto-saving
notesTextarea.addEventListener("blur", () => {
  saveNotesFromForm();
});

notesTextarea.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    saveNotesFromForm();
    closeNotes();
  }
});

btnSaveNotes.addEventListener("click", () => {
  saveNotesFromForm();
  closeNotes();
});

btnCancelNotes.addEventListener("click", closeNotes);
closeNotesModal.addEventListener("click", closeNotes);
notesModal.addEventListener("click", (e) => {
  if (e.target === notesModal) closeNotes();
});

// 3. Export Modal Controls
btnExportTrigger.addEventListener("click", () => {
  exportModal.classList.add("active");
});

function closeExport() {
  exportModal.classList.remove("active");
}

closeExportModal.addEventListener("click", closeExport);
btnCancelExport.addEventListener("click", closeExport);
exportModal.addEventListener("click", (e) => {
  if (e.target === exportModal) closeExport();
});

// Export Option Cards interactive toggle selection
document.querySelectorAll(".export-option-card").forEach(card => {
  card.addEventListener("click", (e) => {
    document.querySelectorAll(".export-option-card").forEach(c => c.classList.remove("selected"));
    e.currentTarget.classList.add("selected");
  });
});

btnDownloadReport.addEventListener("click", () => {
  const selectedCard = document.querySelector(".export-option-card.selected");
  const format = selectedCard ? selectedCard.dataset.format.toUpperCase() : "PDF";
  
  closeExport();
  showToast(`Hiring Pipeline Analytics successfully generated and saved as ${format}!`);
});

// Hide context menu
function hideActionMenu() {
  actionsDropdown.style.display = "none";
  document.querySelectorAll(".btn-action-trigger.active").forEach(btn => {
    btn.classList.remove("active");
  });
}

// Context Menu Action Listeners
menuViewReport.addEventListener("click", () => {
  if (activeCandidateId) openCandidateReport(activeCandidateId);
  hideActionMenu();
});

menuAddNote.addEventListener("click", () => {
  if (activeCandidateId) openNotesEditor(activeCandidateId);
  hideActionMenu();
});

menuExportData.addEventListener("click", () => {
  if (activeCandidateId) {
    const cand = candidates.find(c => c.id === activeCandidateId);
    if (cand) {
      showToast(`Exported candidate profile sheet for ${cand.name} (PDF).`);
    }
  }
  hideActionMenu();
});

menuRemoveCandidate.addEventListener("click", () => {
  if (activeCandidateId) {
    const targetId = activeCandidateId;
    const row = document.getElementById(`candidate-row-${targetId}`);
    const card = document.getElementById(`grid-card-${targetId}`);
    
    const fadeOut = (el) => {
      if (el) {
        el.style.opacity = "0.2";
        el.style.transition = "opacity 0.2s ease";
      }
    };
    
    fadeOut(row);
    fadeOut(card);
    
    setTimeout(() => {
      candidates = candidates.filter(c => c.id !== targetId);
      renderCandidates();
      updateKpiCounters();
      showToast(`Candidate hiring records for ${targetId} removed from dashboard.`, "warning");
    }, 200);
  }
  hideActionMenu();
});

// ----------------------------------------------------
// View Toggles and URL Syncing
// ----------------------------------------------------
btnViewList.addEventListener("click", () => {
  if (currentView !== "list") {
    currentView = "list";
    btnViewList.classList.add("active");
    btnViewGrid.classList.remove("active");
    reportsTableView.style.display = "block";
    reportsGridView.style.display = "none";
    updateUrlParams();
    triggerReload();
  }
});

btnViewGrid.addEventListener("click", () => {
  if (currentView !== "grid") {
    currentView = "grid";
    btnViewGrid.classList.add("active");
    btnViewList.classList.remove("active");
    reportsGridView.style.display = "block";
    reportsTableView.style.display = "none";
    updateUrlParams();
    triggerReload();
  }
});

// Delegated click event handler for candidate interactions in table and grid
function handleCandidateClick(e) {
  // 1. View Report Button
  const viewBtn = e.target.closest(".btn-view-report");
  if (viewBtn) {
    const id = viewBtn.dataset.id;
    openCandidateReport(id);
    return;
  }

  // 2. Action Menu Trigger Button (⋮)
  const triggerBtn = e.target.closest(".btn-action-trigger");
  if (triggerBtn) {
    e.stopPropagation();
    const id = triggerBtn.dataset.id;
    
    if (triggerBtn.classList.contains("active")) {
      hideActionMenu();
      return;
    }
    
    hideActionMenu();
    activeCandidateId = id;
    
    const rect = triggerBtn.getBoundingClientRect();
    actionsDropdown.style.display = "block";
    const dropdownWidth = actionsDropdown.offsetWidth;
    const top = rect.bottom + window.scrollY + 6;
    const left = rect.right - dropdownWidth + window.scrollX;
    
    actionsDropdown.style.top = `${top}px`;
    actionsDropdown.style.left = `${left}px`;
    triggerBtn.classList.add("active");
    return;
  }

  // 3. Notes Button
  const notesBtn = e.target.closest(".notes-btn");
  if (notesBtn) {
    const id = notesBtn.dataset.id;
    openNotesEditor(id);
    return;
  }

  // 4. Document Status buttons
  const docBtn = e.target.closest(".card-doc-btn");
  if (docBtn) {
    const id = docBtn.dataset.id;
    const docType = docBtn.dataset.doc;
    const cand = candidates.find(c => c.id === id);
    if (cand) {
      if (docType === "transcript" && cand.botScreeningDone) {
        showToast(`Opening bot screening transcript for ${cand.name}...`);
        openCandidateReport(id);
      } else if (docType === "tech" && cand.techInterviewDone) {
        showToast(`Opening technical interview report for ${cand.name}...`);
        openCandidateReport(id);
      }
    }
    return;
  }
}

pipelineTableBody.addEventListener("click", handleCandidateClick);
pipelineGridBody.addEventListener("click", handleCandidateClick);

// URL state management
function updateUrlParams() {
  const params = new URLSearchParams(window.location.search);
  
  if (currentSearchQuery) params.set("search", currentSearchQuery);
  else params.delete("search");

  if (currentRoleFilter) params.set("role", currentRoleFilter);
  else params.delete("role");

  if (currentStageFilter) params.set("stage", currentStageFilter);
  else params.delete("stage");

  if (currentStatusFilter) params.set("status", currentStatusFilter);
  else params.delete("status");

  params.set("sort", currentSortKey);
  params.set("order", currentSortOrder);
  params.set("page", currentPage);
  params.set("view", currentView);

  window.history.replaceState({}, "", `${window.location.pathname}?${params.toString()}`);
}

function loadUrlParams() {
  const params = new URLSearchParams(window.location.search);
  
  if (params.has("search")) {
    currentSearchQuery = params.get("search");
    candidateSearch.value = currentSearchQuery;
  }
  if (params.has("role")) {
    currentRoleFilter = params.get("role");
    if (selectRoleSel) {
      selectRoleSel.setValue(currentRoleFilter, currentRoleFilter || "All Roles");
    }
  }
  if (params.has("stage")) {
    currentStageFilter = params.get("stage");
    if (selectStageSel) {
      selectStageSel.setValue(currentStageFilter, currentStageFilter || "All Stages");
    }
  }
  if (params.has("status")) {
    currentStatusFilter = params.get("status");
    if (selectStatusSel) {
      let label = "All Status";
      if (currentStatusFilter === "transcript") label = "Transcript Available";
      if (currentStatusFilter === "tech") label = "Tech Interview Done";
      selectStatusSel.setValue(currentStatusFilter, label);
    }
  }
  if (params.has("sort")) currentSortKey = params.get("sort");
  if (params.has("order")) currentSortOrder = params.get("order");
  if (params.has("page")) currentPage = parseInt(params.get("page")) || 1;
  
  if (params.has("view")) {
    currentView = params.get("view");
    if (currentView === "grid") {
      btnViewGrid.classList.add("active");
      btnViewList.classList.remove("active");
      reportsGridView.style.display = "block";
      reportsTableView.style.display = "none";
    } else {
      btnViewList.classList.add("active");
      btnViewGrid.classList.remove("active");
      reportsTableView.style.display = "block";
      reportsGridView.style.display = "none";
    }
  }

  // Set sort header UI classes
  document.querySelectorAll(".ats-table th.sort-header").forEach(h => {
    if (h.dataset.sort === currentSortKey) {
      h.classList.add(currentSortOrder);
    } else {
      h.classList.remove("asc", "desc");
    }
  });
}

// ----------------------------------------------------
// Global Event Binding
// ----------------------------------------------------
document.addEventListener("click", (e) => {
  if (!actionsDropdown.contains(e.target)) {
    hideActionMenu();
  }
});

// Page Initializer
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    setupFilterDropdowns();
    loadUrlParams();
    updateKpiCounters();
    triggerReload();
  });
} else {
  setupFilterDropdowns();
  loadUrlParams();
  updateKpiCounters();
  triggerReload();
}
