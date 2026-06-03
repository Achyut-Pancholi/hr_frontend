// Bot Screening Candidates Database
let candidates = [
  {
    id: "CAN-1024",
    name: "Dianne Russell",
    phone: "(406) 555-0120",
    email: "dianne.russell@example.com",
    role: "Frontend Developer",
    status: "Screening Completed",
    decision: "Proceed",
    notes: "Excellent performance in React component patterns and layout architecture. Answers were clear.",
    aiScore: { tech: "9.0", comm: "8.5", conf: "9.5" },
    aiSummary: "The candidate shows an exceptional grasp of frontend engineering foundations. Communication was highly technical, clear, and structured.",
    aiStrengths: [
      "Deep understanding of JavaScript scoping, event loops, and closures.",
      "Clear description of CSS repaint and reflow optimization passes.",
      "Articulated Core Web Vitals and image lazy-loading strategies."
    ],
    transcript: [
      { speaker: "AI Bot", text: "Welcome to the KadelLabs screening. First, please explain how closures work in JavaScript." },
      { speaker: "Candidate", text: "A closure is the combination of a function bundled together with references to its surrounding state or lexical environment. In other words, a closure gives an inner function access to the outer scope." },
      { speaker: "AI Bot", text: "Excellent. How would you optimize React page performance?" },
      { speaker: "Candidate", text: "I would use memoization strategies like React.memo, useMemo, and useCallback to avoid unnecessary re-renders. I would also code-split via React.lazy and optimize bundle size using tree shaking." }
    ]
  },
  {
    id: "CAN-1025",
    name: "Albert Flores",
    phone: "(302) 555-0107",
    email: "albert.flores@example.com",
    role: "Backend Engineer",
    status: "Screening Completed",
    decision: "Proceed",
    notes: "Good database normalisation explanation. Needs minor coding check in the next round.",
    aiScore: { tech: "8.5", comm: "8.0", conf: "9.0" },
    aiSummary: "Solid grasp of DB indexes and SQL queries. Communicates with good confidence and clear architectural concepts.",
    aiStrengths: [
      "Comprehensive explanation of database indexes.",
      "Clear explanation of REST vs GraphQL design choices.",
      "Excellent understanding of Redis caching logic."
    ],
    transcript: [
      { speaker: "AI Bot", text: "How would you optimize a slow database query?" },
      { speaker: "Candidate", text: "I would start by analyzing the execution plan with EXPLAIN. I would look for table scans and check if we need to add a proper index on the where clause column, or rewrite the query to avoid inefficient joins." },
      { speaker: "AI Bot", text: "When should we use Redis caching?" },
      { speaker: "Candidate", text: "We should use Redis for read-heavy operations where the data doesn't change frequently, like session storage, configuration states, or landing page layouts." }
    ]
  },
  {
    id: "CAN-1026",
    name: "Kathryn Murphy",
    phone: "(208) 555-0112",
    email: "kathryn.murphy@example.com",
    role: "HR Executive",
    status: "Invite Sent",
    decision: "Pending",
    notes: "",
    aiScore: { tech: "0", comm: "0", conf: "0" },
    aiSummary: "Awaiting video bot screening completion. Evaluation metrics will populate once recording is submitted.",
    aiStrengths: [],
    transcript: []
  },
  {
    id: "CAN-1027",
    name: "Courtney Henry",
    phone: "(307) 555-0133",
    email: "courtney.henry@example.com",
    role: "Frontend Developer",
    status: "Screening Completed",
    decision: "Rejected",
    notes: "Poor response on basic layout and CSS positioning. Communication lacked clarity.",
    aiScore: { tech: "5.5", comm: "6.5", conf: "6.0" },
    aiSummary: "Candidate struggled with core CSS layout details and flexbox properties. Communication lacked crisp technical articulation.",
    aiStrengths: [
      "Understands basic HTML semantics and DOM structures.",
      "Familiar with Git collaborative workflows and branching."
    ],
    transcript: [
      { speaker: "AI Bot", text: "Explain the difference between absolute and fixed positioning in CSS." },
      { speaker: "Candidate", text: "Absolute position is relative to its nearest positioned ancestor. And fixed is relative to the browser viewport... I think. I'm not fully sure of the exact parent conditions." },
      { speaker: "AI Bot", text: "Can you explain how JS closures work?" },
      { speaker: "Candidate", text: "A closure is when you have a function inside another function... and it remembers variables. But I don't use them much in my day to day coding." }
    ]
  },
  {
    id: "CAN-1028",
    name: "Jane Cooper",
    phone: "(209) 555-0104",
    email: "jane.cooper@example.com",
    role: "Backend Engineer",
    status: "Screening Completed",
    decision: "Proceed",
    notes: "Phenomenal architectural answers. System design concepts are highly mature.",
    aiScore: { tech: "9.5", comm: "9.0", conf: "9.5" },
    aiSummary: "Outstanding presentation. Jane articulated advanced microservices patterns, security headers, and authentication strategies with mastery.",
    aiStrengths: [
      "Phenomenal grasp of JWT, OAuth2, and secure web headers.",
      "Clear explanation of database sharding and replication tradeoffs.",
      "Articulated asynchronous queues (RabbitMQ/Kafka) with ease."
    ],
    transcript: [
      { speaker: "AI Bot", text: "How would you secure a REST API in a microservices environment?" },
      { speaker: "Candidate", text: "I would implement an API Gateway pattern where all external calls go through a single gateway. The gateway handles TLS termination, rate limiting, and JWT validation. The microservices behind the gateway use mutual TLS for secure service-to-service communication." },
      { speaker: "AI Bot", text: "How do you handle asynchronous background processing?" },
      { speaker: "Candidate", text: "We use a message broker like RabbitMQ or Apache Kafka. The API publishes an event to an exchange, and consumer groups pick up these events asynchronously, decouple the long-running task, and write states to the DB." }
    ]
  },
  {
    id: "CAN-1029",
    name: "Bessie Cooper",
    phone: "(626) 555-0193",
    email: "bessie.cooper@example.com",
    role: "React Native Developer",
    status: "Screening In Progress",
    decision: "Pending",
    notes: "Started video screening round. Checked the environment and camera permissions.",
    aiScore: { tech: "0", comm: "0", conf: "0" },
    aiSummary: "Awaiting video bot screening completion.",
    aiStrengths: [],
    transcript: []
  },
  {
    id: "CAN-1030",
    name: "Cody Fisher",
    phone: "(408) 555-0144",
    email: "cody.fisher@example.com",
    role: "React Native Developer",
    status: "Not Invited",
    decision: "Pending",
    notes: "",
    aiScore: { tech: "0", comm: "0", conf: "0" },
    aiSummary: "Invite not dispatched yet.",
    aiStrengths: [],
    transcript: []
  },
  {
    id: "CAN-1031",
    name: "Leslie Alexander",
    phone: "(601) 555-0155",
    email: "leslie.alexander@example.com",
    role: "Product Manager",
    status: "No Response",
    decision: "Rejected",
    notes: "Did not complete invite before deadline. Sent 2 reminders.",
    aiScore: { tech: "0", comm: "0", conf: "0" },
    aiSummary: "Awaiting video bot screening completion.",
    aiStrengths: [],
    transcript: []
  }
];

// Prospective Candidates available for sending invites
const prospectiveCandidates = [
  { name: "Robert Fox", email: "robert.fox@example.com", phone: "(704) 555-0189" },
  { name: "Cody Fisher", email: "cody.fisher@example.com", phone: "(408) 555-0144" },
  { name: "Bessie Cooper", email: "bessie.cooper@example.com", phone: "(626) 555-0193" },
  { name: "Arlene McCoy", email: "arlene.mccoy@example.com", phone: "(206) 555-0118" },
  { name: "Leslie Alexander", email: "leslie.alexander@example.com", phone: "(601) 555-0155" },
  { name: "Guy Hawkins", email: "guy.hawkins@example.com", phone: "(319) 555-0168" }
];

// Department / Role Cascading Configuration
const deptData = {
  engineering: {
    label: "Engineering",
    subDepts: {
      frontend: {
        label: "Frontend Development",
        roles: ["Frontend Developer", "Senior UI Developer"]
      },
      backend: {
        label: "Backend Development",
        roles: ["Backend Engineer", "Systems Architect"]
      },
      mobile: {
        label: "Mobile Development",
        roles: ["React Native Developer"]
      }
    }
  },
  product: {
    label: "Product Management",
    subDepts: {
      pm: {
        label: "Product Operations",
        roles: ["Product Manager"]
      }
    }
  },
  design: {
    label: "Product Design",
    subDepts: {
      uiux: {
        label: "UI/UX Design",
        roles: ["UI/UX Designer"]
      }
    }
  },
  hr: {
    label: "Human Resources",
    subDepts: {
      ta: {
        label: "Talent Acquisition",
        roles: ["HR Executive"]
      }
    }
  }
};

// Configured Screening Questions
let roleQuestions = {
  "Frontend Developer": [
    "Explain the difference between absolute, relative, and fixed positioning in CSS.",
    "What is scoping in JavaScript and how does a closure work?",
    "How do you optimize page load times and Core Web Vitals in a modern web app?"
  ],
  "Backend Engineer": [
    "What is database normalization and when would you choose to denormalize?",
    "How do you handle secure session management and authentication in microservices?",
    "Explain the architectural differences and tradeoffs between SQL and NoSQL databases."
  ],
  "React Native Developer": [
    "How does the React Native JavaScript bridge communicate under the hood?",
    "Explain standard methodologies for optimizing list rendering performance in mobile layouts."
  ],
  "Product Manager": [
    "How do you prioritize features when multiple stakeholders provide conflicting requirements?",
    "Describe your process of utilizing product user analytics to pivot a feature strategy."
  ],
  "UI/UX Designer": [
    "What is your approach to balancing client requests against target user interface requirements?",
    "Explain the heuristic principles you rely on most when designing dashboard platforms."
  ],
  "HR Executive": [
    "How do you handle conflict resolution between team employees and managers?",
    "Describe your sourcing pipeline for filling senior technical engineering positions."
  ]
};

// State Variables
let currentCandidateCounter = 1032;
let activeCandidateId = null;
let currentSearchQuery = "";
let currentSortKey = "name";
let currentSortOrder = "asc";
let currentPage = 1;
const rowsPerPage = 10;
let isTableLoading = false;

// Video Playback Animation Interval
let videoPlaybackInterval = null;
let isVideoPlaying = false;
let videoProgressPercentage = 0;
let videoDurationSeconds = 165; // 2m 45s

// DOM Variables
const btnSendInvite = document.getElementById("btn-send-invite");
const screeningTableBody = document.getElementById("screening-table-body");
const toastHolder = document.getElementById("toast-holder");
const candidateSearch = document.getElementById("candidate-search");

// Modals
const notesModal = document.getElementById("notes-modal");
const notesModalTitle = document.getElementById("notes-modal-title");
const notesTextarea = document.getElementById("notes-textarea");
const btnSaveNotes = document.getElementById("btn-save-notes");
const btnCancelNotes = document.getElementById("btn-cancel-notes");
const closeNotesModal = document.getElementById("close-notes-modal");

const profileModal = document.getElementById("profile-modal");
const profName = document.getElementById("prof-name");
const profEmail = document.getElementById("prof-email");
const profRole = document.getElementById("prof-role");
const profStatus = document.getElementById("prof-status");
const profDecision = document.getElementById("prof-decision");
const profNotes = document.getElementById("prof-notes");
const btnCloseProfile = document.getElementById("btn-close-profile");
const closeProfileModal = document.getElementById("close-profile-modal");

// Question Bank Modal Elements
const btnManageQuestions = document.getElementById("btn-manage-questions");
const questionsModal = document.getElementById("questions-modal");
const closeQuestionsModal = document.getElementById("close-questions-modal");
const questionsRoleSelect = document.getElementById("questions-role-select");
const questionsListContainer = document.getElementById("questions-list-container");
const newQuestionInput = document.getElementById("new-question-input");
const btnAddQuestion = document.getElementById("btn-add-question");
const btnSaveQuestions = document.getElementById("btn-save-questions");

// Video Player Modal Elements
const videoModal = document.getElementById("video-modal");
const closeVideoModal = document.getElementById("close-video-modal");
const btnCloseVideo = document.getElementById("btn-close-video");
const vidPlayerAvatar = document.getElementById("vid-player-avatar");
const vidPlayerName = document.getElementById("vid-player-name");
const vidPlayerRole = document.getElementById("vid-player-role");
const vidPlaybackStateIcon = document.getElementById("vid-playback-state-icon");
const vidPlaySvg = document.getElementById("vid-play-svg");
const vidTimeline = document.getElementById("vid-timeline");
const vidTimelineProgress = document.getElementById("vid-timeline-progress");
const vidTimelineHandle = document.getElementById("vid-timeline-handle");
const vidBtnPlayToggle = document.getElementById("vid-btn-play-toggle");
const vidBtnPlaySvg = document.getElementById("vid-btn-play-svg");
const vidTimeDisplay = document.getElementById("vid-time-display");

// Colors for Initials
const avatarGradients = [
  "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
  "linear-gradient(135deg, #10B981 0%, #059669 100%)",
  "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
  "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)",
  "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)"
];

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
    },
    disable: (disabled) => {
      if (disabled) {
        trigger.style.pointerEvents = "none";
        trigger.style.opacity = "0.5";
      } else {
        trigger.style.pointerEvents = "auto";
        trigger.style.opacity = "1";
      }
    }
  };
}

// Global click outside listener to close dropdowns
document.addEventListener("click", () => {
  document.querySelectorAll(".searchable-select").forEach(sel => {
    sel.classList.remove("active");
  });
});

// Dropdown State Elements
let selectDeptSel = null;
let selectSubDeptSel = null;
let selectRoleSel = null;
let selectCandidateSel = null;

// Initialize Invite Form searchable selectors
function setupInviteDropdowns() {
  // 1. Department dropdown
  const depts = Object.keys(deptData).map(key => ({
    value: key,
    label: deptData[key].label
  }));

  selectDeptSel = initSearchableSelect("select-dept-container", depts, (deptVal) => {
    // Reset child options
    selectSubDeptSel.reset("Select Sub-Department");
    selectRoleSel.reset("Select Role");
    selectCandidateSel.reset("Select Candidate");

    selectSubDeptSel.disable(true);
    selectRoleSel.disable(true);
    selectCandidateSel.disable(true);

    if (deptVal && deptData[deptVal]) {
      const subs = Object.keys(deptData[deptVal].subDepts).map(key => ({
        value: key,
        label: deptData[deptVal].subDepts[key].label
      }));
      selectSubDeptSel.setOptions(subs);
      selectSubDeptSel.disable(false);
    }
    validateInviteForm();
  });

  // 2. Sub-Department dropdown
  selectSubDeptSel = initSearchableSelect("select-subdept-container", [], (subVal) => {
    selectRoleSel.reset("Select Role");
    selectCandidateSel.reset("Select Candidate");

    selectRoleSel.disable(true);
    selectCandidateSel.disable(true);

    const deptVal = selectDeptSel.getValue();
    if (deptVal && subVal && deptData[deptVal].subDepts[subVal]) {
      const roles = deptData[deptVal].subDepts[subVal].roles.map(r => ({
        value: r,
        label: r
      }));
      selectRoleSel.setOptions(roles);
      selectRoleSel.disable(false);
    }
    validateInviteForm();
  });
  selectSubDeptSel.disable(true);

  // 3. Role dropdown
  selectRoleSel = initSearchableSelect("select-role-container", [], (roleVal) => {
    selectCandidateSel.reset("Select Candidate");
    selectCandidateSel.disable(true);

    if (roleVal) {
      const prospects = prospectiveCandidates.map(p => ({
        value: p.name,
        label: `${p.name} (${p.email})`
      }));
      selectCandidateSel.setOptions(prospects);
      selectCandidateSel.disable(false);
    }
    validateInviteForm();
  });
  selectRoleSel.disable(true);

  // 4. Candidate dropdown
  selectCandidateSel = initSearchableSelect("select-candidate-container", [], () => {
    validateInviteForm();
  });
  selectCandidateSel.disable(true);
}

// Enable/Disable Send button based on dropdown validation
function validateInviteForm() {
  const dept = selectDeptSel.getValue();
  const sub = selectSubDeptSel.getValue();
  const role = selectRoleSel.getValue();
  const cand = selectCandidateSel.getValue();

  if (dept && sub && role && cand) {
    btnSendInvite.disabled = false;
    btnSendInvite.style.opacity = "1";
    btnSendInvite.style.cursor = "pointer";
  } else {
    btnSendInvite.disabled = true;
    btnSendInvite.style.opacity = "0.6";
    btnSendInvite.style.cursor = "not-allowed";
  }
}

// ----------------------------------------------------
// Toast Alert Banner System
// ----------------------------------------------------
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = "toast";
  
  if (type === "warning") {
    toast.style.borderLeftColor = "#EF6C00";
  } else if (type === "error") {
    toast.style.borderLeftColor = "#C62828";
  } else {
    toast.style.borderLeftColor = "#1a7a4a";
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

// Helpers
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

// ----------------------------------------------------
// Invite Dispatcher Action
// ----------------------------------------------------
btnSendInvite.addEventListener("click", () => {
  const roleVal = selectRoleSel.getValue();
  const candName = selectCandidateSel.getValue();

  if (!roleVal || !candName) return;

  const prospect = prospectiveCandidates.find(p => p.name === candName);
  const email = prospect ? prospect.email : `${candName.toLowerCase().replace(/\s+/g, ".")}@example.com`;
  const phone = prospect ? prospect.phone : "(555) 019-9923";

  const newCandidate = {
    id: `CAN-${currentCandidateCounter++}`,
    name: candName,
    phone: phone,
    email: email,
    role: roleVal,
    status: "Invite Sent",
    decision: "Pending",
    notes: "",
    aiScore: { tech: "8.0", comm: "8.0", conf: "8.5" },
    aiSummary: "The candidate demonstrated solid baseline skills in the screening questionnaire.",
    aiStrengths: ["Clear explanation of personal project contributions."],
    transcript: [
      { speaker: "AI Bot", text: "Welcome. Please summarize your role in your previous company." },
      { speaker: "Candidate", text: "I worked as a software developer, building components and writing tests." }
    ]
  };

  candidates.unshift(newCandidate);
  showToast("Screening invite sent successfully!");
  
  // Reset Form
  selectDeptSel.reset("Select Department");
  selectSubDeptSel.reset("Select Sub-Department");
  selectRoleSel.reset("Select Role");
  selectCandidateSel.reset("Select Candidate");

  selectSubDeptSel.disable(true);
  selectRoleSel.disable(true);
  selectCandidateSel.disable(true);
  validateInviteForm();

  // Re-render with skeleton loader simulation
  triggerTableReload();
});

// ----------------------------------------------------
// Render Screening Results Grid (Search, Filter, Sort, Pagination)
// ----------------------------------------------------
function renderScreeningTable() {
  screeningTableBody.innerHTML = "";
  
  if (isTableLoading) {
    renderSkeletons();
    return;
  }

  const query = currentSearchQuery.trim().toLowerCase();

  // Filter candidates
  let filtered = candidates.filter(cand => {
    return (
      cand.name.toLowerCase().includes(query) ||
      cand.email.toLowerCase().includes(query) ||
      cand.role.toLowerCase().includes(query) ||
      cand.id.toLowerCase().includes(query)
    );
  });

  // Sort candidates
  filtered.sort((a, b) => {
    let valA = a[currentSortKey] || "";
    let valB = b[currentSortKey] || "";
    
    if (typeof valA === "string") {
      valA = valA.toLowerCase();
      valB = valB.toLowerCase();
    }
    
    if (valA < valB) return currentSortOrder === "asc" ? -1 : 1;
    if (valA > valB) return currentSortOrder === "asc" ? 1 : -1;
    return 0;
  });

  // Empty state handling
  if (filtered.length === 0) {
    screeningTableBody.innerHTML = `
      <tr>
        <td colspan="6" style="padding: 0;">
          <div class="empty-state-wrapper">
            <svg class="empty-state-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <h3 class="empty-state-title">No screening results yet.</h3>
            <p class="empty-state-subtitle">Send a bot screening invite above to get started.</p>
          </div>
        </td>
      </tr>
    `;
    renderPagination(0);
    return;
  }

  // Paginated chunk
  const totalEntries = filtered.length;
  const totalPages = Math.ceil(totalEntries / rowsPerPage);
  if (currentPage > totalPages) currentPage = Math.max(1, totalPages);
  
  const startIdx = (currentPage - 1) * rowsPerPage;
  const paginatedData = filtered.slice(startIdx, startIdx + rowsPerPage);

  paginatedData.forEach(cand => {
    const tr = document.createElement("tr");
    tr.id = `candidate-row-${cand.id}`;

    const initials = getInitials(cand.name);
    const grad = getAvatarGradient(cand.name);
    
    // Status Badge colors
    let statusClass = "not-invited";
    if (cand.status === "Invite Sent") statusClass = "invite-sent";
    else if (cand.status === "Screening In Progress") statusClass = "screening-in-progress";
    else if (cand.status === "Screening Completed") statusClass = "screening-completed";
    else if (cand.status === "No Response") statusClass = "no-response";

    // Decision Colors for select option
    let decisionClass = "pending";
    if (cand.decision === "Proceed") decisionClass = "proceed";
    else if (cand.decision === "Rejected") decisionClass = "rejected";
    else if (cand.decision === "On Hold") decisionClass = "on-hold";

    // Notes icon filled/outline
    const noteClass = cand.notes ? "has-notes" : "";
    const notesIcon = cand.notes 
      ? `<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor"><path d="M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM2 9V6a3 3 0 013-3h14a3 3 0 013 3v3H2z"/></svg>`
      : `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a.75.75 0 01-1.074-.765 6 6 0 001.257-2.737C3.038 16.289 1 14.368 1 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg>`;

    // Action button layouts
    const showRecordingBtn = cand.status === "Screening Completed";
    const recordingHtml = showRecordingBtn 
      ? `<button class="btn-pill btn-view-recording" data-id="${cand.id}" style="background-color: var(--active-nav-bg); padding: 0 12px; height: 28px; font-size: 11px;">View Recording</button>`
      : "";

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
        <span class="role-tag" style="background-color: rgba(59, 130, 246, 0.08); color: #1d4ed8; font-weight: 500;">${cand.role}</span>
      </td>
      <td>
        <span class="status-pill ${statusClass}">${cand.status}</span>
      </td>
      <td>
        <select class="table-decision-select ${decisionClass}" data-id="${cand.id}">
          <option value="Pending" ${cand.decision === "Pending" ? "selected" : ""}>Pending</option>
          <option value="Proceed" ${cand.decision === "Proceed" ? "selected" : ""}>Proceed</option>
          <option value="On Hold" ${cand.decision === "On Hold" ? "selected" : ""}>On Hold</option>
          <option value="Rejected" ${cand.decision === "Rejected" ? "selected" : ""}>Rejected</option>
        </select>
      </td>
      <td>
        <button class="notes-btn ${noteClass}" data-id="${cand.id}">
          ${notesIcon}
        </button>
      </td>
      <td>
        <div style="display: flex; gap: 6px; align-items: center;">
          <button class="btn-pill btn-view-details" data-id="${cand.id}" style="background-color: transparent; border: 1px solid var(--active-nav-bg); color: var(--active-nav-bg); padding: 0 12px; height: 28px; font-size: 11px; box-shadow: none;">View Details</button>
          ${recordingHtml}
        </div>
      </td>
    `;
    screeningTableBody.appendChild(tr);
  });

  renderPagination(totalEntries);
}

// Render Skeleton Loaders
function renderSkeletons() {
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
      <td><div class="skeleton-block" style="width: 100px;"></div></td>
      <td><div class="skeleton-block" style="width: 80px;"></div></td>
      <td><div class="skeleton-block" style="width: 80px;"></div></td>
      <td><div class="skeleton-block" style="width: 30px;"></div></td>
      <td><div class="skeleton-block" style="width: 160px; height: 28px; border-radius: 999px;"></div></td>
    `;
    screeningTableBody.appendChild(tr);
  }
}

// Render pagination bar
function renderPagination(totalEntries) {
  // Remove existing pagination bar first
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

  const card = document.getElementById("card-screening-results");
  card.appendChild(pagBar);

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
      triggerTableReload();
    });
  });
}

function triggerTableReload() {
  isTableLoading = true;
  renderScreeningTable();
  setTimeout(() => {
    isTableLoading = false;
    renderScreeningTable();
  }, 300);
}

// ----------------------------------------------------
// Search, Filter, Sort and Query Params syncing
// ----------------------------------------------------
candidateSearch.addEventListener("input", (e) => {
  currentSearchQuery = e.target.value;
  currentPage = 1; // reset page
  updateUrlParams();
  renderScreeningTable();
});

// Headers Sorting handler
document.querySelectorAll(".ats-table th.sort-header").forEach(header => {
  header.addEventListener("click", () => {
    const key = header.dataset.sort;
    if (currentSortKey === key) {
      currentSortOrder = currentSortOrder === "asc" ? "desc" : "asc";
    } else {
      currentSortKey = key;
      currentSortOrder = "asc";
    }

    // Update active class on DOM
    document.querySelectorAll(".ats-table th.sort-header").forEach(h => {
      h.classList.remove("asc", "desc");
    });
    header.classList.add(currentSortOrder);

    updateUrlParams();
    triggerTableReload();
  });
});

// URL state management
function updateUrlParams() {
  const params = new URLSearchParams(window.location.search);
  if (currentSearchQuery) params.set("search", currentSearchQuery);
  else params.delete("search");

  params.set("sort", currentSortKey);
  params.set("order", currentSortOrder);
  params.set("page", currentPage);

  window.history.replaceState({}, "", `${window.location.pathname}?${params.toString()}`);
}

function loadUrlParams() {
  const params = new URLSearchParams(window.location.search);
  if (params.has("search")) {
    currentSearchQuery = params.get("search");
    candidateSearch.value = currentSearchQuery;
  }
  if (params.has("sort")) currentSortKey = params.get("sort");
  if (params.has("order")) currentSortOrder = params.get("order");
  if (params.has("page")) currentPage = parseInt(params.get("page")) || 1;

  // Set sort header UI classes
  document.querySelectorAll(".ats-table th.sort-header").forEach(h => {
    if (h.dataset.sort === currentSortKey) {
      h.classList.add(currentSortOrder);
    } else {
      h.classList.remove("asc", "desc");
    }
  });
}

// Change Decision Event Delegator
screeningTableBody.addEventListener("change", (e) => {
  const select = e.target.closest(".table-decision-select");
  if (select) {
    const id = select.dataset.id;
    const value = select.value;
    const cand = candidates.find(c => c.id === id);
    if (cand) {
      cand.decision = value;
      
      // Update UI select color classes
      select.className = "table-decision-select";
      let dClass = "pending";
      if (value === "Proceed") dClass = "proceed";
      else if (value === "Rejected") dClass = "rejected";
      else if (value === "On Hold") dClass = "on-hold";
      select.classList.add(dClass);

      showToast("Decision updated.");
    }
  }
});

// Click Delegator for Notes / Buttons
screeningTableBody.addEventListener("click", (e) => {
  const notesBtn = e.target.closest(".notes-btn");
  if (notesBtn) {
    const id = notesBtn.dataset.id;
    openNotesEditor(id);
    return;
  }

  const viewDetailsBtn = e.target.closest(".btn-view-details");
  if (viewDetailsBtn) {
    const id = viewDetailsBtn.dataset.id;
    openProfileView(id);
    return;
  }

  const viewRecordingBtn = e.target.closest(".btn-view-recording");
  if (viewRecordingBtn) {
    const id = viewRecordingBtn.dataset.id;
    openScreeningPlayer(id);
    return;
  }
});

// ----------------------------------------------------
// Notes Modal Controller (Auto-save on blur / Enter)
// ----------------------------------------------------
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
        renderScreeningTable();
        showToast("Notes saved.");
      }
    }
  }
}

// Bind blur and keydown listeners to textarea
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

// Buttons
btnSaveNotes.addEventListener("click", () => {
  saveNotesFromForm();
  closeNotes();
});
btnCancelNotes.addEventListener("click", closeNotes);
closeNotesModal.addEventListener("click", closeNotes);
notesModal.addEventListener("click", (e) => {
  if (e.target === notesModal) closeNotes();
});

// ----------------------------------------------------
// Profile Detail Modal Controller
// ----------------------------------------------------
function openProfileView(candidateId) {
  const cand = candidates.find(c => c.id === candidateId);
  if (!cand) return;

  profName.textContent = cand.name;
  profEmail.textContent = cand.email;
  profRole.textContent = cand.role;
  profNotes.textContent = cand.notes || "No remarks configured.";
  
  profStatus.textContent = cand.status;
  
  // Tint class matching status badge
  let statusClass = "not-invited";
  if (cand.status === "Invite Sent") statusClass = "invite-sent";
  else if (cand.status === "Screening In Progress") statusClass = "screening-in-progress";
  else if (cand.status === "Screening Completed") statusClass = "screening-completed";
  else if (cand.status === "No Response") statusClass = "no-response";
  profStatus.className = `status-pill ${statusClass}`;
  
  // Decision colors
  let decClass = "pending";
  if (cand.decision === "Proceed") decClass = "selected";
  else if (cand.decision === "Rejected") decClass = "rejected";
  else if (cand.decision === "On Hold") decClass = "on-hold";

  profDecision.textContent = cand.decision;
  profDecision.className = `status-pill ${decClass}`;

  profileModal.classList.add("active");
}

function closeProfile() {
  profileModal.classList.remove("active");
}

btnCloseProfile.addEventListener("click", closeProfile);
closeProfileModal.addEventListener("click", closeProfile);
profileModal.addEventListener("click", (e) => {
  if (e.target === profileModal) closeProfile();
});

// ----------------------------------------------------
// Manage Question Bank Controller
// ----------------------------------------------------
btnManageQuestions.addEventListener("click", () => {
  questionsRoleSelect.value = "Frontend Developer";
  updateQuestionsModalList();
  questionsModal.classList.add("active");
});

function updateQuestionsModalList() {
  questionsListContainer.innerHTML = "";
  const role = questionsRoleSelect.value;
  const questions = roleQuestions[role] || [];
  
  if (questions.length === 0) {
    questionsListContainer.innerHTML = `
      <div style="font-style: italic; color: var(--text-secondary); font-size: 12px; text-align: center; padding: 12px 0;">
        No screening questions configured for this role.
      </div>`;
    return;
  }

  questions.forEach((q, idx) => {
    const item = document.createElement("div");
    item.className = "question-item";
    item.innerHTML = `
      <span class="question-text">${idx + 1}. ${q}</span>
      <button class="btn-remove-question" data-idx="${idx}">
        <svg viewBox="0 0 24 24" stroke="currentColor" fill="none"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
      </button>
    `;
    questionsListContainer.appendChild(item);
  });
}

questionsRoleSelect.addEventListener("change", updateQuestionsModalList);

questionsListContainer.addEventListener("click", (e) => {
  const rmBtn = e.target.closest(".btn-remove-question");
  if (rmBtn) {
    const idx = parseInt(rmBtn.dataset.idx);
    const role = questionsRoleSelect.value;
    if (roleQuestions[role] && roleQuestions[role][idx] !== undefined) {
      roleQuestions[role].splice(idx, 1);
      updateQuestionsModalList();
      showToast("Question removed.", "warning");
    }
  }
});

btnAddQuestion.addEventListener("click", () => {
  const role = questionsRoleSelect.value;
  const text = newQuestionInput.value.trim();
  
  if (!text) {
    showToast("Please enter question text before adding.", "warning");
    return;
  }

  if (!roleQuestions[role]) {
    roleQuestions[role] = [];
  }

  roleQuestions[role].push(text);
  newQuestionInput.value = "";
  updateQuestionsModalList();
  showToast("New question added.");
});

function closeQuestions() {
  questionsModal.classList.remove("active");
}

btnSaveQuestions.addEventListener("click", closeQuestions);
closeQuestionsModal.addEventListener("click", closeQuestions);
questionsModal.addEventListener("click", (e) => {
  if (e.target === questionsModal) closeQuestions();
});

// ----------------------------------------------------
// Mock Video Screening Player controller
// ----------------------------------------------------
const btnTabEval = document.getElementById("btn-tab-eval");
const btnTabTranscript = document.getElementById("btn-tab-transcript");
const evalTabContent = document.getElementById("eval-tab-content");
const transcriptTabContent = document.getElementById("transcript-tab-content");
const aiScoreTech = document.getElementById("ai-score-tech");
const aiScoreComm = document.getElementById("ai-score-comm");
const aiScoreConf = document.getElementById("ai-score-conf");
const aiSummaryText = document.getElementById("ai-summary-text");
const aiStrengthsList = document.getElementById("ai-strengths-list");
const transcriptChatContainer = document.getElementById("transcript-chat-container");

btnTabEval.addEventListener("click", () => {
  btnTabEval.classList.add("active");
  btnTabTranscript.classList.remove("active");
  evalTabContent.style.display = "flex";
  transcriptTabContent.style.display = "none";
});

btnTabTranscript.addEventListener("click", () => {
  btnTabTranscript.classList.add("active");
  btnTabEval.classList.remove("active");
  evalTabContent.style.display = "none";
  transcriptTabContent.style.display = "flex";
});

function openScreeningPlayer(candidateId) {
  const cand = candidates.find(c => c.id === candidateId);
  if (!cand) return;

  if (cand.status !== "Screening Completed") {
    showToast(`Cannot play recording: Status is ${cand.status}.`, "warning");
    return;
  }

  vidPlayerName.textContent = cand.name;
  vidPlayerRole.textContent = cand.role;
  vidPlayerAvatar.textContent = getInitials(cand.name);
  vidPlayerAvatar.style.background = getAvatarGradient(cand.name);

  aiScoreTech.textContent = `${cand.aiScore.tech}/10`;
  aiScoreComm.textContent = `${cand.aiScore.comm}/10`;
  aiScoreConf.textContent = `${cand.aiScore.conf}/10`;
  aiSummaryText.textContent = cand.aiSummary;

  aiStrengthsList.innerHTML = "";
  if (cand.aiStrengths && cand.aiStrengths.length > 0) {
    cand.aiStrengths.forEach(str => {
      const li = document.createElement("li");
      li.textContent = str;
      aiStrengthsList.appendChild(li);
    });
  } else {
    aiStrengthsList.innerHTML = `<li style="list-style: none; font-style: italic; color: var(--text-secondary);">No specific strengths logged.</li>`;
  }

  transcriptChatContainer.innerHTML = "";
  if (cand.transcript && cand.transcript.length > 0) {
    cand.transcript.forEach(t => {
      const bubble = document.createElement("div");
      const isBot = t.speaker === "AI Bot";
      bubble.className = `transcript-bubble ${isBot ? "bot" : "candidate"}`;
      bubble.innerHTML = `
        <span class="transcript-speaker" style="font-weight: 700; font-size: 8px; margin-bottom: 2px;">${t.speaker}</span>
        <span class="transcript-txt" style="font-weight: 500;">${t.text}</span>
      `;
      transcriptChatContainer.appendChild(bubble);
    });
  } else {
    transcriptChatContainer.innerHTML = `<div style="font-style: italic; color: var(--text-secondary); text-align: center; font-size: 12px; padding: 12px 0;">No transcript available.</div>`;
  }

  btnTabEval.click();
  videoProgressPercentage = 0;
  isVideoPlaying = false;
  clearInterval(videoPlaybackInterval);
  updatePlayerUI();

  videoModal.classList.add("active");
}

function updatePlayerUI() {
  vidTimelineProgress.style.width = `${videoProgressPercentage}%`;
  vidTimelineHandle.style.left = `${videoProgressPercentage}%`;

  const elapsedSeconds = Math.floor((videoProgressPercentage / 100) * videoDurationSeconds);
  const m = Math.floor(elapsedSeconds / 60);
  const s = elapsedSeconds % 60;
  const sPad = s < 10 ? '0' + s : s;

  const totalM = Math.floor(videoDurationSeconds / 60);
  const totalS = videoDurationSeconds % 60;
  const totalSPad = totalS < 10 ? '0' + totalS : totalS;

  vidTimeDisplay.textContent = `${m}:${sPad} / ${totalM}:${totalSPad}`;

  const pauseSvg = `<svg viewBox="0 0 24 24" fill="currentColor" style="width: 18px; height: 18px; color: #FFFFFF;"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
  const playSvg = `<svg viewBox="0 0 24 24" fill="currentColor" style="width: 18px; height: 18px; color: #FFFFFF;"><path d="M8 5v14l11-7z"/></svg>`;
  const centralPauseSvg = `<svg viewBox="0 0 24 24" fill="currentColor" style="width: 20px; height: 20px; color: #FFFFFF;"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
  const centralPlaySvg = `<svg viewBox="0 0 24 24" fill="currentColor" style="width: 20px; height: 20px; color: #FFFFFF; margin-left: 2px;"><path d="M8 5v14l11-7z"/></svg>`;

  if (isVideoPlaying) {
    vidBtnPlayToggle.innerHTML = pauseSvg;
    vidPlaybackStateIcon.innerHTML = centralPauseSvg;
    vidPlaybackStateIcon.style.transform = "scale(0.95)";
  } else {
    vidBtnPlayToggle.innerHTML = playSvg;
    vidPlaybackStateIcon.innerHTML = centralPlaySvg;
    vidPlaybackStateIcon.style.transform = "scale(1)";
  }
}

function toggleVideoPlayback() {
  if (isVideoPlaying) {
    isVideoPlaying = false;
    clearInterval(videoPlaybackInterval);
    updatePlayerUI();
  } else {
    isVideoPlaying = true;
    updatePlayerUI();
    
    videoPlaybackInterval = setInterval(() => {
      videoProgressPercentage += 0.8;
      
      if (videoProgressPercentage >= 100) {
        videoProgressPercentage = 100;
        isVideoPlaying = false;
        clearInterval(videoPlaybackInterval);
        showToast("Playback completed.");
      }
      
      updatePlayerUI();
    }, 100);
  }
}

vidPlaybackStateIcon.addEventListener("click", toggleVideoPlayback);
vidBtnPlayToggle.addEventListener("click", toggleVideoPlayback);

vidTimeline.addEventListener("click", (e) => {
  const rect = vidTimeline.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const percentage = (clickX / rect.width) * 100;
  
  videoProgressPercentage = Math.max(0, Math.min(100, percentage));
  updatePlayerUI();
});

function closeVideo() {
  videoModal.classList.remove("active");
  isVideoPlaying = false;
  clearInterval(videoPlaybackInterval);
}

btnCloseVideo.addEventListener("click", closeVideo);
closeVideoModal.addEventListener("click", closeVideo);
videoModal.addEventListener("click", (e) => {
  if (e.target === videoModal) closeVideo();
});

// ----------------------------------------------------
// Page Initializer
// ----------------------------------------------------
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    setupInviteDropdowns();
    loadUrlParams();
    triggerTableReload();
  });
} else {
  setupInviteDropdowns();
  loadUrlParams();
  triggerTableReload();
}
