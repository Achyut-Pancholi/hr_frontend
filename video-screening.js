// Bot Screening Candidates Database
let candidates = [
  {
    id: "CAN-1032",
    name: "Unnati Sutradhar",
    phone: "(555) 019-9923",
    email: "mahima.dangi@elasticrew.com",
    role: "Python Developer",
    status: "Screening Completed",
    decision: "On Hold",
    dateScreened: "2026-05-30",
    notes: "Candidate has basic programming syntax understanding but needs guidance on exception handling and crash recovery.",
    aiScore: { tech: "4.5", comm: "4.0", conf: "6.0" },
    metrics: { clarity: 2, relevance: 2, confidence: 3, communication: 2 },
    overallScore: "45%",
    overallBadge: "Needs Work",
    dateCreated: "May 30, 2026, 12:35 PM",
    dateCompleted: "May 30, 2026, 12:37 PM",
    dateExpires: "May 31, 2026, 12:35 PM",
    aiReport: {
      neutral: [
        "The candidate has some knowledge of exception handling in software development.",
        "However, they seem to oversimplify the concept, describing it as 'hiding errors'.",
        "They also mention the 'crash app program' as an example, which is not a clear or specific illustration."
      ],
      cons: [
        "Overall, the candidate demonstrates basic understanding of the topic but lacks depth and clarity."
      ]
    },
    questions: [
      "What is the exaception handling"
    ],
    transcript: [
      { speaker: "AI Bot", text: "What is the exaception handling" },
      { speaker: "Candidate", text: "It is used to hide the errors in the program. The classic error occurs in the program, which is the crash app program." }
    ]
  },
  {
    id: "CAN-1024",
    name: "Dianne Russell",
    phone: "(406) 555-0120",
    email: "dianne.russell@example.com",
    role: "Frontend Developer",
    status: "Screening Completed",
    decision: "Proceed",
    dateScreened: "2026-06-03",
    notes: "Excellent performance in React component patterns and layout architecture. Answers were clear.",
    aiScore: { tech: "9.0", comm: "8.5", conf: "9.5" },
    metrics: { clarity: 4, relevance: 5, confidence: 5, communication: 4 },
    overallScore: "90%",
    overallBadge: "Proceed",
    dateCreated: "Jun 03, 2026, 10:15 AM",
    dateCompleted: "Jun 03, 2026, 10:22 AM",
    dateExpires: "Jun 04, 2026, 10:15 AM",
    aiReport: {
      neutral: [
        "The candidate clearly understands the event loop and closure scoping.",
        "Articulated Core Web Vitals and image lazy-loading strategies."
      ],
      cons: [
        "Minor hesitation when explaining CSS repaint and reflow optimization passes."
      ]
    },
    questions: [
      "Explain the difference between absolute, relative, and fixed positioning in CSS.",
      "What is scoping in JavaScript and how does a closure work?",
      "How do you optimize page load times and Core Web Vitals in a modern web app?"
    ],
    transcript: [
      { speaker: "AI Bot", text: "Welcome to the Elasticrew screening. First, please explain how closures work in JavaScript." },
      { speaker: "Candidate", text: "A closure is the combination of a function bundled together with references to its surrounding state or lexical environment. In other words, a closure gives an inner function access to the outer scope." },
      { speaker: "AI Bot", text: "Excellent. How would you optimize React page performance?" },
      { speaker: "Candidate", text: "I would use memoization strategies like React.memo, useMemo, and useCallback to avoid unnecessary re-renders. I would also code-split via React.lazy and optimize bundle size using tree shaking." }
    ]
  },
  {
    id: "CAN-1024-2",
    name: "Dianne Russell",
    phone: "(406) 555-0120",
    email: "dianne.russell@example.com",
    role: "Frontend Developer",
    status: "Screening Completed",
    decision: "Rejected",
    dateScreened: "2026-06-01",
    notes: "First attempt. Poor audio quality and incomplete answers.",
    aiScore: { tech: "4.0", comm: "5.0", conf: "5.5" },
    metrics: { clarity: 2, relevance: 2, confidence: 2, communication: 3 },
    overallScore: "40%",
    overallBadge: "Needs Work",
    dateCreated: "Jun 01, 2026, 09:00 AM",
    dateCompleted: "Jun 01, 2026, 09:05 AM",
    dateExpires: "Jun 02, 2026, 09:00 AM",
    aiReport: {
      neutral: [
        "Familiar with basic HTML markup tags."
      ],
      cons: [
        "Candidate did not finish the video responses due to technical issues.",
        "Microphone problems during recording."
      ]
    },
    questions: [
      "What is scoping in JavaScript and how does a closure work?"
    ],
    transcript: [
      { speaker: "AI Bot", text: "Welcome to the Elasticrew screening. First, please explain how closures work in JavaScript." },
      { speaker: "Candidate", text: "I'm having trouble with my microphone. A closure is... sorry, can you hear me?" }
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
    dateScreened: "2026-06-04",
    notes: "Good database normalisation explanation. Needs minor coding check in the next round.",
    aiScore: { tech: "8.5", comm: "8.0", conf: "9.0" },
    metrics: { clarity: 4, relevance: 4, confidence: 5, communication: 4 },
    overallScore: "85%",
    overallBadge: "Strong Candidate",
    dateCreated: "Jun 04, 2026, 02:30 PM",
    dateCompleted: "Jun 04, 2026, 02:40 PM",
    dateExpires: "Jun 05, 2026, 02:30 PM",
    aiReport: {
      neutral: [
        "Solid grasp of DB indexes and SQL queries.",
        "Excellent understanding of Redis caching logic."
      ],
      cons: [
        "Could elaborate more on NoSQL write trade-offs."
      ]
    },
    questions: [
      "What is database normalization and when would you choose to denormalize?",
      "How do you handle secure session management and authentication in microservices?"
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
    dateScreened: "2026-06-05",
    notes: "",
    aiScore: { tech: "0", comm: "0", conf: "0" },
    metrics: { clarity: 0, relevance: 0, confidence: 0, communication: 0 },
    overallScore: "0%",
    overallBadge: "Pending",
    dateCreated: "Jun 05, 2026, 09:00 AM",
    dateCompleted: "N/A",
    dateExpires: "Jun 06, 2026, 09:00 AM",
    aiReport: {
      neutral: [
        "Awaiting video bot screening completion. Evaluation metrics will populate once recording is submitted."
      ],
      cons: []
    },
    questions: [
      "How do you handle conflict resolution between team employees and managers?"
    ],
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
    dateScreened: "2026-06-02",
    notes: "Poor response on basic layout and CSS positioning. Communication lacked clarity.",
    aiScore: { tech: "5.5", comm: "6.5", conf: "6.0" },
    metrics: { clarity: 3, relevance: 2, confidence: 3, communication: 3 },
    overallScore: "55%",
    overallBadge: "Needs Work",
    dateCreated: "Jun 02, 2026, 11:00 AM",
    dateCompleted: "Jun 02, 2026, 11:12 AM",
    dateExpires: "Jun 03, 2026, 11:00 AM",
    aiReport: {
      neutral: [
        "Understands basic HTML semantics and DOM structures.",
        "Familiar with Git collaborative workflows and branching."
      ],
      cons: [
        "Candidate struggled with core CSS layout details and flexbox properties.",
        "Communication lacked crisp technical articulation."
      ]
    },
    questions: [
      "Explain the difference between absolute and fixed positioning in CSS.",
      "Can you explain how JS closures work?"
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
    dateScreened: "2026-06-04",
    notes: "Phenomenal architectural answers. System design concepts are highly mature.",
    aiScore: { tech: "9.5", comm: "9.0", conf: "9.5" },
    metrics: { clarity: 5, relevance: 5, confidence: 5, communication: 4 },
    overallScore: "95%",
    overallBadge: "Strong Candidate",
    dateCreated: "Jun 04, 2026, 04:15 PM",
    dateCompleted: "Jun 04, 2026, 04:28 PM",
    dateExpires: "Jun 05, 2026, 04:15 PM",
    aiReport: {
      neutral: [
        "Outstanding presentation.",
        "Jane articulated advanced microservices patterns, security headers, and authentication strategies with mastery."
      ],
      cons: []
    },
    questions: [
      "How would you secure a REST API in a microservices environment?",
      "How do you handle asynchronous background processing?"
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
    dateScreened: "2026-06-05",
    notes: "Started video screening round. Checked the environment and camera permissions.",
    aiScore: { tech: "0", comm: "0", conf: "0" },
    metrics: { clarity: 0, relevance: 0, confidence: 0, communication: 0 },
    overallScore: "0%",
    overallBadge: "Pending",
    dateCreated: "Jun 05, 2026, 11:30 AM",
    dateCompleted: "N/A",
    dateExpires: "Jun 06, 2026, 11:30 AM",
    aiReport: {
      neutral: [
        "Awaiting video bot screening completion."
      ],
      cons: []
    },
    questions: [
      "How does the React Native JavaScript bridge communicate under the hood?"
    ],
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
    dateScreened: "",
    notes: "",
    aiScore: { tech: "0", comm: "0", conf: "0" },
    metrics: { clarity: 0, relevance: 0, confidence: 0, communication: 0 },
    overallScore: "0%",
    overallBadge: "Pending",
    dateCreated: "N/A",
    dateCompleted: "N/A",
    dateExpires: "N/A",
    aiReport: {
      neutral: [
        "Invite not dispatched yet."
      ],
      cons: []
    },
    questions: [],
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
    dateScreened: "2026-05-30",
    notes: "Did not complete invite before deadline. Sent 2 reminders.",
    aiScore: { tech: "0", comm: "0", conf: "0" },
    metrics: { clarity: 0, relevance: 0, confidence: 0, communication: 0 },
    overallScore: "0%",
    overallBadge: "Pending",
    dateCreated: "May 25, 2026, 10:00 AM",
    dateCompleted: "N/A",
    dateExpires: "May 30, 2026, 10:00 AM",
    aiReport: {
      neutral: [
        "Awaiting video bot screening completion."
      ],
      cons: []
    },
    questions: [],
    transcript: []
  }
];

// Enrich candidates database dynamically with mock details for the dedicated workspace
candidates.forEach(cand => {
  if (!cand.location) {
    if (cand.id === "CAN-1032") cand.location = "Kolkata, India";
    else if (cand.id === "CAN-1024" || cand.id === "CAN-1024-2") cand.location = "San Francisco, CA";
    else if (cand.id === "CAN-1025") cand.location = "Austin, TX";
    else if (cand.id === "CAN-1027") cand.location = "Seattle, WA";
    else if (cand.id === "CAN-1028") cand.location = "New York, NY";
    else cand.location = "Remote";
  }
  
  if (!cand.resumeSummary) {
    if (cand.role.includes("Python") || cand.role.includes("Backend")) {
      cand.resumeSummary = "Experienced developer specializing in scalable backend architectures, database optimizations, and API design. Over 4 years working with Python, Django, SQL, and AWS clouds.";
    } else if (cand.role.includes("Frontend") || cand.role.includes("React")) {
      cand.resumeSummary = "Frontend engineer focused on React/Redux components, UI performance optimization, and responsive design systems. Passionate about clean semantic markup and modern CSS patterns.";
    } else {
      cand.resumeSummary = "Professional candidate with strong communications and background matching the core role responsibilities. Organized, driven, and collaborative.";
    }
  }

  if (!cand.skills) {
    if (cand.role.includes("Python")) {
      cand.skills = ["Python", "Django", "PostgreSQL", "REST APIs", "Git", "Docker"];
    } else if (cand.role.includes("Frontend")) {
      cand.skills = ["React.js", "JavaScript (ES6+)", "CSS Grid/Flexbox", "HTML5", "Webpack", "TailwindCSS"];
    } else if (cand.role.includes("Backend")) {
      cand.skills = ["Node.js", "SQL Server", "Express", "Microservices", "Redis", "Git"];
    } else if (cand.role.includes("React Native")) {
      cand.skills = ["React Native", "iOS / Android Deployments", "Redux", "TypeScript", "Flexbox"];
    } else {
      cand.skills = ["Recruitment", "Communication", "Sourcing", "Applicant Tracking Systems", "Negotiation"];
    }
  }

  if (!cand.experience) {
    if (cand.role.includes("Python") || cand.role.includes("Backend")) {
      cand.experience = [
        { title: "Software Engineer", company: "DevSolutions Ltd", duration: "2024 - Present" },
        { title: "Junior Python Developer", company: "DataCraft Labs", duration: "2022 - 2024" }
      ];
    } else if (cand.role.includes("Frontend")) {
      cand.experience = [
        { title: "Frontend Developer", company: "WebStudio Inc", duration: "2023 - Present" },
        { title: "Junior UI Engineer", company: "PixelTech Agency", duration: "2021 - 2023" }
      ];
    } else {
      cand.experience = [
        { title: "Recruiter Specialist", company: "TalentHub Global", duration: "2024 - Present" },
        { title: "HR Generalist", company: "Enterprise Services", duration: "2022 - 2024" }
      ];
    }
  }

  if (!cand.strengths) {
    cand.strengths = cand.decision === "Proceed" 
      ? ["Strong technical depth and precise coding syntax", "Excellent response clarity and direct articulation", "Confident tone and structured answers"]
      : ["Basic familiarity with core definitions", "Polite and prompt responses"];
  }

  if (!cand.improvementAreas) {
    cand.improvementAreas = cand.decision === "Proceed"
      ? ["Could elaborate further on complex parent positioning scoping details"]
      : ["Needs deeper theoretical depth in event loop scheduling and browser paint lifecycle", "Improve speech pacing and reduce hesitation pauses"];
  }

  if (!cand.aiRecommendation) {
    if (cand.decision === "Proceed") cand.aiRecommendation = "Highly Recommended";
    else if (cand.decision === "On Hold") cand.aiRecommendation = "Requires Review";
    else if (cand.decision === "Rejected") cand.aiRecommendation = "Not Recommended";
    else cand.aiRecommendation = "Under Evaluation";
  }

  if (!cand.timeline) {
    cand.timeline = [
      { event: "Invite Sent", date: "Jun 02, 2026", details: "Dispatched by Recruitment Automator" },
      { event: "Screening Started", date: "Jun 03, 2026", details: "System connection established" },
      { event: "Screening Completed", date: "Jun 03, 2026", details: "Video answers parsed and saved" }
    ];
  }
});

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
const notesModal = document.getElementById("notes-drawer");
const notesModalTitle = document.getElementById("notes-modal-title");
const notesTextarea = document.getElementById("notes-textarea");
const btnSaveNotes = document.getElementById("btn-save-notes");
const btnCancelNotes = document.getElementById("btn-cancel-notes");
const closeNotesModal = document.getElementById("close-notes-modal");

const profileModal = document.getElementById("profile-drawer");
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
const questionsModal = document.getElementById("questions-drawer");
const closeQuestionsModal = document.getElementById("close-questions-modal");
const questionsRoleSelect = document.getElementById("questions-role-select");
const questionsListContainer = document.getElementById("questions-list-container");
const newQuestionInput = document.getElementById("new-question-input");
const btnAddQuestion = document.getElementById("btn-add-question");
const btnSaveQuestions = document.getElementById("btn-save-questions");

// Video Player Modal Elements
const videoModal = document.getElementById("video-drawer");
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

// Helper to update questions preview panel
function updateQuestionsPreview(roleVal) {
  const previewDiv = document.getElementById("role-questions-preview");
  if (!previewDiv) return;
  if (roleVal && roleQuestions[roleVal] && roleQuestions[roleVal].length > 0) {
    previewDiv.innerHTML = roleQuestions[roleVal].map((q, idx) => `
      <div style="display: flex; gap: 8px; margin-bottom: 6px;">
        <span style="font-weight: 600; color: var(--active-nav-bg);">${idx + 1}.</span>
        <span style="color: var(--text-primary); font-weight: 500;">${q}</span>
      </div>
    `).join("");
  } else {
    previewDiv.innerHTML = `<span style="font-style: italic; color: var(--text-secondary);">Select a role to preview questions bank config...</span>`;
  }
}

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
    updateQuestionsPreview("");

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
    updateQuestionsPreview("");

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
    updateQuestionsPreview(roleVal);

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

// Helper to map role to sub-department key
function getSubDeptKey(roleName) {
  for (const deptKey in deptData) {
    const subDepts = deptData[deptKey].subDepts;
    for (const subKey in subDepts) {
      if (subDepts[subKey].roles.includes(roleName)) {
        return subKey;
      }
    }
  }
  return "";
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
  const todayStr = new Date().toISOString().split('T')[0];

  const newCandidate = {
    id: `CAN-${currentCandidateCounter++}`,
    name: candName,
    phone: phone,
    email: email,
    role: roleVal,
    status: "Invite Sent",
    decision: "Pending",
    dateScreened: todayStr,
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
  updateQuestionsPreview("");

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
// Group candidates by email to group duplicates under collapsible attempts sub-rows
function groupCandidatesByEmail(candidateList) {
  const groups = {};
  candidateList.forEach(c => {
    const email = c.email.toLowerCase();
    if (!groups[email]) {
      groups[email] = [];
    }
    groups[email].push(c);
  });
  
  const result = [];
  for (const email in groups) {
    const list = groups[email];
    // Sort attempts by dateScreened descending (latest attempt first)
    list.sort((a, b) => {
      const dateA = a.dateScreened || "";
      const dateB = b.dateScreened || "";
      if (dateA !== dateB) {
        return dateB.localeCompare(dateA);
      }
      return b.id.localeCompare(a.id);
    });
    
    result.push({
      main: list[0],
      older: list.slice(1)
    });
  }
  
  // Sort grouped candidates by the main attempt's active sort key
  result.sort((groupA, groupB) => {
    const a = groupA.main;
    const b = groupB.main;
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
  
  return result;
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
  const filterSubdept = document.getElementById("filter-subdept");
  const filterDecision = document.getElementById("filter-decision");
  const filterDateFrom = document.getElementById("filter-date-from");
  const filterDateTo = document.getElementById("filter-date-to");

  const subdeptVal = filterSubdept ? filterSubdept.value : "";
  const decisionVal = filterDecision ? filterDecision.value : "";
  const dateFromVal = filterDateFrom ? filterDateFrom.value : "";
  const dateToVal = filterDateTo ? filterDateTo.value : "";

  // 1. Filter candidates list
  let filtered = candidates.filter(cand => {
    // Search match
    const matchesSearch = (
      cand.name.toLowerCase().includes(query) ||
      cand.email.toLowerCase().includes(query) ||
      cand.role.toLowerCase().includes(query) ||
      cand.id.toLowerCase().includes(query)
    );
    if (!matchesSearch) return false;

    // Sub-department match
    if (subdeptVal) {
      const candSubKey = getSubDeptKey(cand.role);
      if (candSubKey !== subdeptVal) return false;
    }

    // Decision match
    if (decisionVal) {
      if (cand.decision !== decisionVal) return false;
    }

    // Date range match
    if (dateFromVal) {
      if (!cand.dateScreened || cand.dateScreened < dateFromVal) return false;
    }
    if (dateToVal) {
      if (!cand.dateScreened || cand.dateScreened > dateToVal) return false;
    }

    return true;
  });

  // 2. Group candidates by email
  const grouped = groupCandidatesByEmail(filtered);

  // Empty state handling
  if (grouped.length === 0) {
    screeningTableBody.innerHTML = `
      <tr>
        <td colspan="6" style="padding: 0;">
          <div class="empty-state-wrapper">
            <svg class="empty-state-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <h3 class="empty-state-title">No screening results yet.</h3>
            <p class="empty-state-subtitle">Send a bot screening invite above or adjust filters to see records.</p>
          </div>
        </td>
      </tr>
    `;
    renderPagination(0);
    return;
  }

  // 3. Paginated chunk of grouped candidate emails
  const totalEntries = grouped.length;
  const totalPages = Math.ceil(totalEntries / rowsPerPage);
  if (currentPage > totalPages) currentPage = Math.max(1, totalPages);
  
  const startIdx = (currentPage - 1) * rowsPerPage;
  const paginatedData = grouped.slice(startIdx, startIdx + rowsPerPage);

  paginatedData.forEach(group => {
    const main = group.main;
    const older = group.older;

    const tr = document.createElement("tr");
    tr.id = `candidate-row-${main.id}`;
    tr.className = "main-candidate-row";

    const initials = getInitials(main.name);
    const grad = getAvatarGradient(main.name);
    
    // Status Badge colors for Screening Status
    let statusClass = "not-invited";
    if (main.status === "Invite Sent") statusClass = "invite-sent";
    else if (main.status === "Screening In Progress") statusClass = "screening-in-progress";
    else if (main.status === "Screening Completed") statusClass = "screening-completed";
    else if (main.status === "No Response") statusClass = "no-response";

    // Decision Colors for pill
    let decisionClass = "parsed";
    if (main.decision === "Proceed") decisionClass = "shortlisted";
    else if (main.decision === "Rejected") decisionClass = "rejected";
    else if (main.decision === "On Hold") decisionClass = "on-hold";

    // Notes icon configuration
    const noteClass = main.notes ? "has-notes" : "";
    const notesIcon = main.notes 
      ? `<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" style="width: 14px; height: 14px;"><path d="M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM2 9V6a3 3 0 013-3h14a3 3 0 013 3v3H2z"/></svg>`
      : `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" style="width: 14px; height: 14px;"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a.75.75 0 01-1.074-.765 6 6 0 001.257-2.737C3.038 16.289 1 14.368 1 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg>`;

    tr.innerHTML = `
      <td>
        <div class="col-candidate">
          <div class="candidate-avatar" style="background: ${grad}">${initials}</div>
          <div class="candidate-info">
            <div style="display: flex; align-items: center; gap: 6px;">
              <span class="candidate-name" style="font-weight: 600; color: var(--text-primary);">${main.name}</span>
              ${older.length > 0 ? `<span class="attempts-badge clickable" data-id="${main.id}" style="background-color: #e2e8f0; color: #4b5563; font-size: 10px; padding: 2px 6px; border-radius: var(--radius-pill); font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 2px;">${older.length + 1} attempts ▾</span>` : ""}
            </div>
            <span class="candidate-phone" style="font-size: 11px; color: var(--text-secondary);">${main.email}</span>
          </div>
        </div>
      </td>
      <td>
        <span class="role-tag" style="background-color: rgba(59, 130, 246, 0.08); color: #1d4ed8; font-weight: 500;">${main.role}</span>
      </td>
      <td>
        <span class="status-pill ${statusClass}">${main.status}</span>
      </td>
      <td>
        <span class="status-pill ${decisionClass} clickable decision-pill" data-id="${main.id}">${main.decision} ▾</span>
      </td>
      <td>
        <button class="notes-btn ${noteClass}" data-id="${main.id}">
          ${notesIcon}
        </button>
      </td>
      <td>
        <div style="display: flex; gap: 8px; justify-content: flex-end; align-items: center;">
          <button class="btn-action-trigger btn-view-interview" data-id="${main.id}" title="View Interview">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
          </button>
          <button class="btn-action-trigger btn-copy-link" data-id="${main.id}" title="Copy Share Link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 10.742a3 3 0 010-4.242l1.414-1.414a3 3 0 014.242 0M10.5 10.5a3 3 0 004.242 0l1.414-1.414a3 3 0 000-4.242M10.5 13.5a3 3 0 010 4.242l-1.414 1.414a3 3 0 01-4.242 0M13.5 13.5a3 3 0 00-4.242 0l-1.414 1.414a3 3 0 000 4.242" /></svg>
          </button>
          <button class="btn-action-trigger btn-delete-candidate" data-id="${main.id}" title="Delete Candidate">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
          </button>
        </div>
      </td>
    `;
    screeningTableBody.appendChild(tr);

    // Render attempts sub-row if duplicates exist
    if (older.length > 0) {
      const subTr = document.createElement("tr");
      subTr.className = "attempts-subrow";
      subTr.id = `attempts-subrow-${main.id}`;
      subTr.style.display = "none";
      subTr.style.backgroundColor = "#FAF9F6";
      subTr.style.borderTop = "1px dashed var(--divider-color)";
      subTr.style.borderBottom = "1px dashed var(--divider-color)";

      subTr.innerHTML = `
        <td colspan="6" style="padding: 12px 24px;">
          <div style="font-weight: 600; color: var(--text-secondary); margin-bottom: 8px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px;">Previous Screening Attempts</div>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            ${older.map(oldCand => {
              let oldStatusClass = "not-invited";
              if (oldCand.status === "Invite Sent") oldStatusClass = "invite-sent";
              else if (oldCand.status === "Screening In Progress") oldStatusClass = "screening-in-progress";
              else if (oldCand.status === "Screening Completed") oldStatusClass = "screening-completed";
              else if (oldCand.status === "No Response") oldStatusClass = "no-response";

              let oldDecisionClass = "parsed";
              if (oldCand.decision === "Proceed") oldDecisionClass = "shortlisted";
              else if (oldCand.decision === "Rejected") oldDecisionClass = "rejected";
              else if (oldCand.decision === "On Hold") oldDecisionClass = "on-hold";

              const oldNoteClass = oldCand.notes ? "has-notes" : "";
              const oldNotesIcon = oldCand.notes 
                ? `<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" style="width: 14px; height: 14px;"><path d="M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM2 9V6a3 3 0 013-3h14a3 3 0 013 3v3H2z"/></svg>`
                : `<svg viewBox="0 0 24 24" stroke="currentColor" fill="none" style="width: 14px; height: 14px;"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a.75.75 0 01-1.074-.765 6 6 0 001.257-2.737C3.038 16.289 1 14.368 1 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg>`;

              return `
                <div style="display: flex; align-items: center; justify-content: space-between; background: #FFFFFF; border: 0.5px solid var(--divider-color); padding: 8px 16px; border-radius: 8px;">
                  <div style="display: flex; gap: 24px; align-items: center; flex: 1; flex-wrap: wrap;">
                    <div style="min-width: 100px;">
                      <span style="font-size: 10px; color: var(--text-secondary); font-weight: 600; display: block; text-transform: uppercase;">Date</span>
                      <span style="font-weight: 600; font-size: 12px; color: var(--text-primary);">${oldCand.dateScreened || "N/A"}</span>
                    </div>
                    <div style="min-width: 140px;">
                      <span style="font-size: 10px; color: var(--text-secondary); font-weight: 600; display: block; text-transform: uppercase;">Role</span>
                      <span class="role-tag" style="background-color: rgba(59, 130, 246, 0.05); color: #2563eb; font-size: 11px; padding: 2px 6px; border-radius: 4px; font-weight: 500;">${oldCand.role}</span>
                    </div>
                    <div style="min-width: 130px;">
                      <span style="font-size: 10px; color: var(--text-secondary); font-weight: 600; display: block; text-transform: uppercase;">Screening Status</span>
                      <span class="status-pill ${oldStatusClass}" style="transform: scale(0.9); transform-origin: left center;">${oldCand.status}</span>
                    </div>
                    <div style="min-width: 110px;">
                      <span style="font-size: 10px; color: var(--text-secondary); font-weight: 600; display: block; text-transform: uppercase;">Decision</span>
                      <span class="status-pill ${oldDecisionClass} clickable decision-pill" data-id="${oldCand.id}" style="transform: scale(0.9); transform-origin: left center;">${oldCand.decision} ▾</span>
                    </div>
                    <div style="min-width: 50px; text-align: center;">
                      <span style="font-size: 10px; color: var(--text-secondary); font-weight: 600; display: block; text-transform: uppercase; margin-bottom: 2px;">Notes</span>
                      <button class="notes-btn ${oldNoteClass}" data-id="${oldCand.id}">
                        ${oldNotesIcon}
                      </button>
                    </div>
                  </div>
                  <div style="display: flex; gap: 8px; align-items: center;">
                    <button class="btn-action-trigger btn-view-interview" data-id="${oldCand.id}" title="View Interview">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                    </button>
                    <button class="btn-action-trigger btn-delete-candidate" data-id="${oldCand.id}" title="Delete Candidate">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </td>
      `;
      screeningTableBody.appendChild(subTr);
    }
  });

  // Attach toggle event listener on attempts badges
  document.querySelectorAll(".attempts-badge").forEach(badge => {
    badge.addEventListener("click", (e) => {
      e.stopPropagation();
      const mainId = badge.dataset.id;
      const subrow = document.getElementById(`attempts-subrow-${mainId}`);
      if (subrow) {
        const isCollapsed = subrow.style.display === "none";
        subrow.style.display = isCollapsed ? "table-row" : "none";
        badge.innerHTML = `${badge.textContent.split(" ")[0]} attempts ${isCollapsed ? "▴" : "▾"}`;
      }
    });
  });

  renderPagination(totalEntries);
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

  const filterSubdept = document.getElementById("filter-subdept");
  const filterDecision = document.getElementById("filter-decision");
  const filterDateFrom = document.getElementById("filter-date-from");
  const filterDateTo = document.getElementById("filter-date-to");

  if (filterSubdept && filterSubdept.value) params.set("subdept", filterSubdept.value);
  else params.delete("subdept");

  if (filterDecision && filterDecision.value) params.set("decision", filterDecision.value);
  else params.delete("decision");

  if (filterDateFrom && filterDateFrom.value) params.set("dateFrom", filterDateFrom.value);
  else params.delete("dateFrom");

  if (filterDateTo && filterDateTo.value) params.set("dateTo", filterDateTo.value);
  else params.delete("dateTo");

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

  const filterSubdept = document.getElementById("filter-subdept");
  const filterDecision = document.getElementById("filter-decision");
  const filterDateFrom = document.getElementById("filter-date-from");
  const filterDateTo = document.getElementById("filter-date-to");

  if (params.has("subdept") && filterSubdept) filterSubdept.value = params.get("subdept");
  if (params.has("decision") && filterDecision) filterDecision.value = params.get("decision");
  if (params.has("dateFrom") && filterDateFrom) filterDateFrom.value = params.get("dateFrom");
  if (params.has("dateTo") && filterDateTo) filterDateTo.value = params.get("dateTo");

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

// ----------------------------------------------------
// Click & Action Delegators for Table
// ----------------------------------------------------
// Event Delegator for clicks inside the table body
screeningTableBody.addEventListener("click", (e) => {
  // 1. Clicked decision pill (inline absolute dropdown trigger)
  const decisionPill = e.target.closest(".decision-pill");
  if (decisionPill) {
    e.stopPropagation();
    const id = decisionPill.dataset.id;
    activeCandidateId = id;
    
    const dropdown = document.getElementById("decision-change-dropdown");
    if (dropdown) {
      const isVisible = dropdown.style.display === "block";
      if (isVisible && dropdown.dataset.activeId === id) {
        dropdown.style.display = "none";
      } else {
        dropdown.style.display = "block";
        dropdown.dataset.activeId = id;
        
        // Position it below the pill
        const rect = decisionPill.getBoundingClientRect();
        dropdown.style.top = `${window.scrollY + rect.bottom + 4}px`;
        dropdown.style.left = `${window.scrollX + rect.left}px`;
      }
    }
    return;
  }
  
  // 2. Clicked Notes button
  const notesBtn = e.target.closest(".notes-btn");
  if (notesBtn) {
    const id = notesBtn.dataset.id;
    openNotesEditor(id);
    return;
  }

  // 3. Clicked row (excluding interactive elements) opens candidate workspace review
  const row = e.target.closest(".main-candidate-row");
  if (row) {
    const isInteractive = e.target.closest(".decision-pill") ||
                          e.target.closest(".notes-btn") ||
                          e.target.closest(".btn-action-trigger") ||
                          e.target.closest(".attempts-badge") ||
                          e.target.closest("a") ||
                          e.target.closest("button") ||
                          e.target.closest("select") ||
                          e.target.closest("input");
    if (!isInteractive) {
      const id = row.id.replace("candidate-row-", "");
      showCandidateWorkspace(id);
      return;
    }
  }
 
  // 4. Clicked View Interview action
  const viewInterviewBtn = e.target.closest(".btn-view-interview");
  if (viewInterviewBtn) {
    const id = viewInterviewBtn.dataset.id;
    showCandidateWorkspace(id);
    return;
  }

  // 5. Clicked Copy Link action
  const copyLinkBtn = e.target.closest(".btn-copy-link");
  if (copyLinkBtn) {
    const id = copyLinkBtn.dataset.id;
    const link = `${window.location.origin}${window.location.pathname}?search=${id}`;
    navigator.clipboard.writeText(link).then(() => {
      showToast("Interview share link copied!");
      
      const origBg = copyLinkBtn.style.backgroundColor;
      const origColor = copyLinkBtn.style.color;
      copyLinkBtn.style.backgroundColor = "#E8F5E9";
      copyLinkBtn.style.color = "#10B981";

      setTimeout(() => {
        copyLinkBtn.style.backgroundColor = origBg;
        copyLinkBtn.style.color = origColor;
      }, 1500);
    }).catch(() => {
      showToast("Failed to copy link.", "error");
    });
    return;
  }

  // 6. Clicked Delete Candidate action
  const deleteBtn = e.target.closest(".btn-delete-candidate");
  if (deleteBtn) {
    e.stopPropagation();
    const id = deleteBtn.dataset.id;
    activeCandidateId = id;
    
    const popover = document.getElementById("delete-confirm-popover");
    if (popover) {
      popover.style.display = "block";
      const btnRect = deleteBtn.getBoundingClientRect();
      popover.style.top = `${window.scrollY + btnRect.top - popover.offsetHeight - 8}px`;
      popover.style.left = `${window.scrollX + btnRect.left - popover.offsetWidth / 2 + btnRect.width / 2}px`;
    }
    return;
  }
});

// Dropdown item selection handler for Decision Stage change
document.querySelectorAll("#decision-change-dropdown .stage-dropdown-item").forEach(item => {
  item.addEventListener("click", () => {
    const decision = item.dataset.decision;
    if (activeCandidateId && decision) {
      const cand = candidates.find(c => c.id === activeCandidateId);
      if (cand) {
        cand.decision = decision;
        
        // Also update decision select inside player drawer if open
        const drawerSelect = document.getElementById("drawer-move-decision-select");
        if (drawerSelect) {
          drawerSelect.value = decision;
        }

        showToast(`Decision updated to ${decision}.`);
        renderScreeningTable();
      }
    }
    document.getElementById("decision-change-dropdown").style.display = "none";
  });
});

// Delete popover confirmation button events
const btnDeleteConfirmYes = document.getElementById("btn-delete-confirm-yes");
const btnDeleteConfirmNo = document.getElementById("btn-delete-confirm-no");

if (btnDeleteConfirmYes) {
  btnDeleteConfirmYes.addEventListener("click", () => {
    if (activeCandidateId) {
      const idx = candidates.findIndex(c => c.id === activeCandidateId);
      if (idx !== -1) {
        candidates.splice(idx, 1);
        showToast("Screening record removed.", "warning");
        renderScreeningTable();
      }
    }
    const popover = document.getElementById("delete-confirm-popover");
    if (popover) popover.style.display = "none";
  });
}

if (btnDeleteConfirmNo) {
  btnDeleteConfirmNo.addEventListener("click", () => {
    const popover = document.getElementById("delete-confirm-popover");
    if (popover) popover.style.display = "none";
  });
}

// Global click listener to close popover and inline dropdowns
document.addEventListener("click", (e) => {
  // Close decision change dropdown
  const dropdown = document.getElementById("decision-change-dropdown");
  if (dropdown && !dropdown.contains(e.target) && !e.target.closest(".decision-pill")) {
    dropdown.style.display = "none";
  }

  // Close delete confirm popover
  const popover = document.getElementById("delete-confirm-popover");
  if (popover && !popover.contains(e.target) && !e.target.closest(".btn-delete-candidate")) {
    popover.style.display = "none";
  }
});

// ----------------------------------------------------
// Notes Drawer Controller (Auto-save on blur / Enter)
// ----------------------------------------------------
function openNotesEditor(candidateId) {
  const cand = candidates.find(c => c.id === candidateId);
  if (!cand) return;

  activeCandidateId = candidateId;
  notesModalTitle.textContent = `Candidate Notes — ${cand.name}`;
  notesTextarea.value = cand.notes || "";
  notesModal.classList.add("active");
  document.getElementById("notes-drawer-overlay").classList.add("active");
  notesTextarea.focus();
}

function closeNotes() {
  notesModal.classList.remove("active");
  document.getElementById("notes-drawer-overlay").classList.remove("active");
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

// ----------------------------------------------------
// Profile Detail Drawer Controller
// ----------------------------------------------------
function openProfileView(candidateId) {
  const cand = candidates.find(c => c.id === candidateId);
  if (!cand) return;

  activeCandidateId = candidateId;
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
  document.getElementById("profile-drawer-overlay").classList.add("active");
}

function closeProfile() {
  profileModal.classList.remove("active");
  document.getElementById("profile-drawer-overlay").classList.remove("active");
  activeCandidateId = null;
}

btnCloseProfile.addEventListener("click", closeProfile);
closeProfileModal.addEventListener("click", closeProfile);

// ----------------------------------------------------
// Manage Question Bank Drawer Controller
// ----------------------------------------------------
btnManageQuestions.addEventListener("click", () => {
  questionsRoleSelect.value = "Frontend Developer";
  updateQuestionsModalList();
  questionsModal.classList.add("active");
  document.getElementById("questions-drawer-overlay").classList.add("active");
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
  document.getElementById("questions-drawer-overlay").classList.remove("active");
}

btnSaveQuestions.addEventListener("click", closeQuestions);
closeQuestionsModal.addEventListener("click", closeQuestions);

// ----------------------------------------------------
// Mock Video Screening Player Drawer Controller
// ----------------------------------------------------
let currentQuestionIndex = 0;
const transcriptChatContainer = document.getElementById("transcript-chat-container");

function openScreeningPlayer(candidateId) {
  const cand = candidates.find(c => c.id === candidateId);
  if (!cand) return;

  activeCandidateId = candidateId;
  currentQuestionIndex = 0;

  // 1. Header Population
  const vidPlayerAvatar = document.getElementById("vid-player-avatar");
  const vidPlayerName = document.getElementById("vid-player-name");
  const vidPlayerEmailRole = document.getElementById("vid-player-email-role");
  const vidPlayerStatus = document.getElementById("vid-player-status");

  if (vidPlayerName) vidPlayerName.textContent = cand.name;
  if (vidPlayerEmailRole) vidPlayerEmailRole.textContent = `${cand.email} · ${cand.role}`;
  if (vidPlayerAvatar) {
    vidPlayerAvatar.textContent = getInitials(cand.name);
    vidPlayerAvatar.style.background = getAvatarGradient(cand.name);
  }
  if (vidPlayerStatus) {
    vidPlayerStatus.textContent = cand.status === "Screening Completed" ? "Completed" : cand.status;
  }

  // Sync drawer decision select option
  const drawerSelect = document.getElementById("drawer-move-decision-select");
  if (drawerSelect) {
    drawerSelect.value = cand.decision;
  }

  // 2. AI Report Bullet Points
  const aiReportNeutral = document.getElementById("ai-report-neutral");
  const aiReportCons = document.getElementById("ai-report-cons");

  if (aiReportNeutral) {
    aiReportNeutral.innerHTML = "";
    if (cand.aiReport && cand.aiReport.neutral && cand.aiReport.neutral.length > 0) {
      cand.aiReport.neutral.forEach(pt => {
        const li = document.createElement("li");
        li.textContent = pt;
        aiReportNeutral.appendChild(li);
      });
    } else {
      aiReportNeutral.innerHTML = `<li style="list-style: none; font-style: italic; color: var(--text-secondary);">No neutral points logged.</li>`;
    }
  }

  if (aiReportCons) {
    aiReportCons.innerHTML = "";
    if (cand.aiReport && cand.aiReport.cons && cand.aiReport.cons.length > 0) {
      cand.aiReport.cons.forEach(pt => {
        const li = document.createElement("li");
        li.textContent = pt;
        aiReportCons.appendChild(li);
      });
    } else {
      aiReportCons.innerHTML = `<li style="list-style: none; font-style: italic; color: var(--text-secondary);">No cons or weaknesses logged.</li>`;
    }
  }

  // 3. Overall Rating SVG Donut & Badge
  const progressCircle = document.getElementById("overall-radial-progress");
  const scorePercentText = document.getElementById("overall-score-percent");
  const scoreBadge = document.getElementById("overall-score-badge");

  const scoreInt = cand.overallScore ? parseInt(cand.overallScore) : 0;
  if (scorePercentText) scorePercentText.textContent = `${scoreInt}%`;

  let strokeColor = "#EF4444";
  let badgeBg = "#FFEBEE";
  let badgeColor = "#C62828";

  if (scoreInt >= 75) {
    strokeColor = "#10B981";
    badgeBg = "#E8F5E9";
    badgeColor = "#2E7D32";
  } else if (scoreInt >= 50) {
    strokeColor = "#F59E0B";
    badgeBg = "#FFF3E0";
    badgeColor = "#B45309";
  }

  if (progressCircle) {
    progressCircle.setAttribute("stroke", strokeColor);
    progressCircle.setAttribute("stroke-dasharray", `${scoreInt}, 100`);
  }

  if (scoreBadge) {
    let badgeText = cand.overallBadge || "Requires follow-up";
    // Rename "Needs Work" → "Requires follow-up"
    if (badgeText === "Needs Work") badgeText = "Requires follow-up";
    scoreBadge.textContent = badgeText;
    scoreBadge.style.backgroundColor = badgeBg;
    scoreBadge.style.color = badgeColor;
  }

  // 4. Sub-metrics Progress Bars
  const m = cand.metrics || { clarity: 0, relevance: 0, confidence: 0, communication: 0 };
  
  const subMetrics = [
    { key: "clarity", val: m.clarity },
    { key: "relevance", val: m.relevance },
    { key: "confidence", val: m.confidence },
    { key: "comm", val: m.communication }
  ];

  subMetrics.forEach(metric => {
    const textEl = document.getElementById(`submetric-${metric.key}-val`);
    const barEl = document.getElementById(`submetric-${metric.key}-bar`);
    if (textEl) textEl.textContent = `${metric.val}/5`;
    if (barEl) barEl.style.width = `${(metric.val / 5) * 100}%`;
  });

  // 5. Score Breakdown Column Chart
  subMetrics.forEach(metric => {
    const numEl = document.getElementById(`breakdown-${metric.key}-num`);
    const barEl = document.getElementById(`breakdown-${metric.key}-bar`);
    if (numEl) numEl.textContent = `${metric.val}/5`;
    if (barEl) barEl.style.height = `${(metric.val / 5) * 80}px`;
  });

  // 6. Skill Radar SVG Coordinates
  const topY = 50 - (m.clarity / 5) * 35;
  const rightX = 50 + (m.relevance / 5) * 35;
  const bottomY = 50 + (m.confidence / 5) * 35;
  const leftX = 50 - (m.communication / 5) * 35;

  const radarPoly = document.getElementById("radar-polygon");
  const dotClarity = document.getElementById("radar-dot-clarity");
  const dotRelevance = document.getElementById("radar-dot-relevance");
  const dotConfidence = document.getElementById("radar-dot-confidence");
  const dotComm = document.getElementById("radar-dot-comm");

  if (radarPoly) radarPoly.setAttribute("points", `50,${topY} ${rightX},50 50,${bottomY} ${leftX},50`);
  if (dotClarity) dotClarity.setAttribute("cy", topY);
  if (dotRelevance) dotRelevance.setAttribute("cx", rightX);
  if (dotConfidence) dotConfidence.setAttribute("cy", bottomY);
  if (dotComm) dotComm.setAttribute("cx", leftX);

  // 7. Details Timestamps
  const createdEl = document.getElementById("detail-created-date");
  const completedEl = document.getElementById("detail-completed-date");
  const expiresEl = document.getElementById("detail-expires-date");

  if (createdEl) createdEl.textContent = cand.dateCreated || "N/A";
  if (completedEl) completedEl.textContent = cand.dateCompleted || "N/A";
  if (expiresEl) expiresEl.textContent = cand.dateExpires || "N/A";

  // 8. Questions List
  const questionsHeading = document.getElementById("detail-questions-heading");
  const questionsList = document.getElementById("detail-questions-list");
  const qArray = cand.questions || [];

  if (questionsHeading) questionsHeading.textContent = `Questions (${qArray.length})`;
  if (questionsList) {
    questionsList.innerHTML = qArray.map((q, idx) => `
      <div>Q${idx + 1}. ${q}</div>
    `).join("");
  }

  // 9. Live Transcript bubbles (answers expandable - truncated to 2 lines)
  transcriptChatContainer.innerHTML = "";
  if (cand.transcript && cand.transcript.length > 0) {
    cand.transcript.forEach((t, idx) => {
      const bubble = document.createElement("div");
      const isBot = t.speaker === "AI Bot";
      bubble.className = `transcript-bubble ${isBot ? "bot" : "candidate"}`;
      
      const avatarContent = isBot ? "Q" : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 12px; height: 12px;"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/></svg>`;
      const timeVal = isBot ? (idx === 0 ? "0:00" : (idx === 2 ? "1:15" : "2:05")) : "";
      
      // Candidate answers are expandable (truncated to 2 lines)
      const textClass = isBot ? "transcript-text-body" : "transcript-text-body transcript-answer-text";
      
      bubble.innerHTML = `
        <div class="transcript-avatar-circle">${avatarContent}</div>
        <div class="transcript-bubble-content">
          <div class="transcript-header-row">
            <span class="transcript-speaker-name">${isBot ? t.speaker : cand.name}</span>
            ${timeVal ? `<span class="transcript-time-stamp">${timeVal}</span>` : ""}
          </div>
          <span class="${textClass}">${t.text}</span>
        </div>
      `;
      
      // Add click-to-expand for candidate answers
      if (!isBot) {
        bubble.addEventListener("click", () => {
          const textEl = bubble.querySelector(".transcript-answer-text");
          if (textEl) textEl.classList.toggle("expanded");
        });
      }
      
      transcriptChatContainer.appendChild(bubble);
    });
  } else {
    transcriptChatContainer.innerHTML = `<div style="font-style: italic; color: var(--text-secondary); text-align: center; font-size: 12px; padding: 12px 0;">No transcript available.</div>`;
  }

  // Initialize playback state
  videoProgressPercentage = 0;
  isVideoPlaying = false;
  clearInterval(videoPlaybackInterval);
  updatePlayerUI();
  updateQuestionSelection(cand);

  // Wire up button copy actions for this candidate
  setupCopyBtn("drawer-btn-copy-link", cand.id);
  setupCopyBtn("drawer-header-share", cand.id);

  videoModal.classList.add("active");
  document.getElementById("video-drawer-overlay").classList.add("active");
}

function updateQuestionSelection(cand) {
  const qArray = cand.questions || [];
  if (qArray.length === 0) return;

  if (currentQuestionIndex < 0) currentQuestionIndex = 0;
  if (currentQuestionIndex >= qArray.length) currentQuestionIndex = qArray.length - 1;

  // Update controls display
  const qBadge = document.getElementById("vid-q-badge");
  const activeQuestionText = document.getElementById("video-active-question-text");
  
  if (qBadge) qBadge.textContent = `Q${currentQuestionIndex + 1}`;
  if (activeQuestionText) activeQuestionText.textContent = qArray[currentQuestionIndex];

  // Highlight corresponding bubble in transcript
  const bubbles = transcriptChatContainer.querySelectorAll(".transcript-bubble");
  bubbles.forEach((bubble, idx) => {
    // A question's transcript spans a pair: bot question (idx * 2) and candidate answer (idx * 2 + 1)
    const botIdx = currentQuestionIndex * 2;
    const candIdx = currentQuestionIndex * 2 + 1;
    if (idx === botIdx || idx === candIdx) {
      bubble.classList.add("active-highlight");
    } else {
      bubble.classList.remove("active-highlight");
    }
  });

  // Scroll active bot bubble into view
  const targetBubble = bubbles[currentQuestionIndex * 2];
  if (targetBubble) {
    targetBubble.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
}

// Question Navigation Button Listeners
const btnPrevQ = document.getElementById("vid-prev-q");
const btnNextQ = document.getElementById("vid-next-q");

if (btnPrevQ) {
  btnPrevQ.addEventListener("click", () => {
    if (activeCandidateId) {
      const cand = candidates.find(c => c.id === activeCandidateId);
      if (cand && currentQuestionIndex > 0) {
        currentQuestionIndex--;
        updateQuestionSelection(cand);
      }
    }
  });
}

if (btnNextQ) {
  btnNextQ.addEventListener("click", () => {
    if (activeCandidateId) {
      const cand = candidates.find(c => c.id === activeCandidateId);
      const qArray = cand ? cand.questions || [] : [];
      if (cand && currentQuestionIndex < qArray.length - 1) {
        currentQuestionIndex++;
        updateQuestionSelection(cand);
      }
    }
  });
}

// Copy button helper with micro-interactions
function setupCopyBtn(btnId, candidateId) {
  const btn = document.getElementById(btnId);
  if (!btn) return;

  // Clone to remove old listeners
  const newBtn = btn.cloneNode(true);
  btn.parentNode.replaceChild(newBtn, btn);

  newBtn.addEventListener("click", () => {
    const shareLink = `${window.location.origin}${window.location.pathname}?search=${candidateId}`;
    navigator.clipboard.writeText(shareLink).then(() => {
      showToast("Interview share link copied!");

      const origHtml = newBtn.innerHTML;
      
      newBtn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5" style="width: 14px; height: 14px;"><polyline points="20 6 9 17 4 12"></polyline></svg>
        Copied!
      `;
      newBtn.style.color = "#10B981";
      newBtn.style.borderColor = "#10B981";
      newBtn.style.backgroundColor = "#ECFDF5";

      setTimeout(() => {
        newBtn.innerHTML = origHtml;
        newBtn.style.color = "";
        newBtn.style.borderColor = "";
        newBtn.style.backgroundColor = "";
      }, 2000);
    }).catch(() => {
      showToast("Failed to copy link.", "error");
    });
  });
}

// Drawer Header Download action
const btnHeaderDownload = document.getElementById("drawer-header-download");
if (btnHeaderDownload) {
  btnHeaderDownload.addEventListener("click", () => {
    showToast("Candidate interview report downloaded successfully!");
  });
}

// Back Button Drawer Closer
const btnCloseVideoBack = document.getElementById("btn-close-video-back");
if (btnCloseVideoBack) {
  btnCloseVideoBack.addEventListener("click", closeVideo);
}

function updatePlayerUI() {
  vidTimelineProgress.style.width = `${videoProgressPercentage}%`;

  const elapsedSeconds = Math.floor((videoProgressPercentage / 100) * videoDurationSeconds);
  const m = Math.floor(elapsedSeconds / 60);
  const s = elapsedSeconds % 60;
  const sPad = s < 10 ? '0' + s : s;

  const totalM = Math.floor(videoDurationSeconds / 60);
  const totalS = videoDurationSeconds % 60;
  const totalSPad = totalS < 10 ? '0' + totalS : totalS;

  vidTimeDisplay.textContent = `${m}:${sPad} / ${totalM}:${totalSPad}`;

  const pauseSvg = `<svg viewBox="0 0 24 24" fill="currentColor" style="width: 14px; height: 14px; color: #FFFFFF;"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
  const playSvg = `<svg viewBox="0 0 24 24" fill="currentColor" style="width: 14px; height: 14px; color: #FFFFFF;"><path d="M8 5v14l11-7z"/></svg>`;
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
  document.getElementById("video-drawer-overlay").classList.remove("active");
  isVideoPlaying = false;
  clearInterval(videoPlaybackInterval);
  activeCandidateId = null;
}

btnCloseVideo.addEventListener("click", closeVideo);
closeVideoModal.addEventListener("click", closeVideo);

// ----------------------------------------------------
// Dedicated Workspace Controller & Playback Syncing
// ----------------------------------------------------
let wsVideoPlaybackInterval = null;
let isWsVideoPlaying = false;
let wsVideoProgressPercentage = 0;
let wsCurrentQuestionIndex = 0;
let originalUrlParams = "";

function showCandidateWorkspace(candidateId) {
  const cand = candidates.find(c => c.id === candidateId);
  if (!cand) return;

  activeCandidateId = candidateId;
  wsCurrentQuestionIndex = 0;
  wsVideoProgressPercentage = 0;
  isWsVideoPlaying = false;
  clearInterval(wsVideoPlaybackInterval);

  // Save list-view URL params state before modifying it
  originalUrlParams = window.location.search;

  // Toggle visible containers inside main-wrapper
  const listView = document.getElementById("screening-list-view");
  const workspaceView = document.getElementById("candidate-review-workspace");

  if (listView) listView.style.display = "none";
  if (workspaceView) {
    workspaceView.style.display = "flex";
    // Trigger animation frame/opacity
    setTimeout(() => {
      workspaceView.classList.add("active");
    }, 10);
  }

  // Update Page Title
  document.title = `Review: ${cand.name} | Video Screening`;

  // Update URL Search Param (deep linking style) without browser refresh
  const newParams = new URLSearchParams();
  newParams.set("search", candidateId);
  window.history.replaceState({}, "", `${window.location.pathname}?${newParams.toString()}`);

  // Populate Workspace details
  // 1. Header details
  const avatarEl = document.getElementById("ws-avatar");
  if (avatarEl) {
    avatarEl.textContent = getInitials(cand.name);
    avatarEl.style.background = getAvatarGradient(cand.name);
  }
  
  const nameEl = document.getElementById("ws-name");
  if (nameEl) nameEl.textContent = cand.name;

  const emailEl = document.getElementById("ws-email");
  if (emailEl) emailEl.textContent = cand.email;

  const roleEl = document.getElementById("ws-role");
  if (roleEl) roleEl.textContent = cand.role;

  const statusEl = document.getElementById("ws-status");
  if (statusEl) {
    statusEl.textContent = cand.status === "Screening Completed" ? "Completed" : cand.status;
    let statusClass = "not-invited";
    if (cand.status === "Invite Sent") statusClass = "invite-sent";
    else if (cand.status === "Screening In Progress") statusClass = "screening-in-progress";
    else if (cand.status === "Screening Completed") statusClass = "screening-completed";
    else if (cand.status === "No Response") statusClass = "no-response";
    statusEl.className = `status-pill ${statusClass}`;
  }

  // Progress Bar interview percentage
  const progressPercent = cand.status === "Screening Completed" ? 100 : (cand.status === "Screening In Progress" ? 50 : 0);
  const progressBar = document.getElementById("ws-progress-bar");
  const progressText = document.getElementById("ws-progress-text");
  if (progressBar) progressBar.style.width = `${progressPercent}%`;
  if (progressText) progressText.textContent = `${progressPercent}%`;

  // 2. Profile Details widget
  const profilePhone = document.getElementById("ws-profile-phone");
  if (profilePhone) profilePhone.textContent = cand.phone || "N/A";

  const profileLocation = document.getElementById("ws-profile-location");
  if (profileLocation) profileLocation.textContent = cand.location || "N/A";

  // 3. Resume Widget details
  const resumeSummary = document.getElementById("ws-resume-summary");
  if (resumeSummary) resumeSummary.textContent = cand.resumeSummary || "Resume attachment summary loading...";

  // 4. Skills Widget details
  const skillsContainer = document.getElementById("ws-skills-container");
  if (skillsContainer) {
    skillsContainer.innerHTML = "";
    if (cand.skills && cand.skills.length > 0) {
      cand.skills.forEach(skill => {
        const span = document.createElement("span");
        span.className = "role-tag";
        span.style.backgroundColor = "rgba(29, 158, 117, 0.08)";
        span.style.color = "#127454";
        span.style.fontWeight = "600";
        span.textContent = skill;
        skillsContainer.appendChild(span);
      });
    } else {
      skillsContainer.innerHTML = `<span style="font-style: italic; color: var(--text-secondary);">No skills indexed.</span>`;
    }
  }

  // 5. Experience Widget details
  const experienceContainer = document.getElementById("ws-experience-container");
  if (experienceContainer) {
    experienceContainer.innerHTML = "";
    if (cand.experience && cand.experience.length > 0) {
      cand.experience.forEach(exp => {
        const item = document.createElement("div");
        item.className = "experience-item";
        item.innerHTML = `
          <div class="experience-title">${exp.title}</div>
          <div class="experience-company-duration">${exp.company} · ${exp.duration}</div>
        `;
        experienceContainer.appendChild(item);
      });
    } else {
      experienceContainer.innerHTML = `<div style="font-style: italic; color: var(--text-secondary);">No experience logged.</div>`;
    }
  }

  // 6. AI Summary details
  const aiSummary = document.getElementById("ws-ai-summary");
  if (aiSummary) aiSummary.textContent = cand.aiSummary || "AI summary evaluation logging...";

  // Key Strengths bullet points
  const strengthsUl = document.getElementById("ws-strengths");
  if (strengthsUl) {
    strengthsUl.innerHTML = "";
    const strengths = cand.strengths || [];
    if (strengths.length > 0) {
      strengths.forEach(st => {
        const li = document.createElement("li");
        li.textContent = st;
        strengthsUl.appendChild(li);
      });
    } else {
      strengthsUl.innerHTML = `<li style="list-style:none; font-style:italic; color:var(--text-secondary);">None identified.</li>`;
    }
  }

  // Key Improvements bullet points
  const improvementsUl = document.getElementById("ws-improvements");
  if (improvementsUl) {
    improvementsUl.innerHTML = "";
    const improvements = cand.improvementAreas || [];
    if (improvements.length > 0) {
      improvements.forEach(imp => {
        const li = document.createElement("li");
        li.textContent = imp;
        improvementsUl.appendChild(li);
      });
    } else {
      improvementsUl.innerHTML = `<li style="list-style:none; font-style:italic; color:var(--text-secondary);">None identified.</li>`;
    }
  }

  // 7. Radial Screening Score
  const scoreInt = cand.overallScore ? parseInt(cand.overallScore) : 0;
  const radialProgress = document.getElementById("ws-radial-progress");
  const scorePercentText = document.getElementById("ws-score-percent");
  const scoreBadge = document.getElementById("ws-score-badge");

  if (scorePercentText) scorePercentText.textContent = `${scoreInt}%`;

  let strokeColor = "#E24B4A"; // rejected color
  let badgeBg = "#FEF0EF";
  let badgeColor = "#E24B4A";
  let badgeText = cand.overallBadge || "Requires follow-up";

  if (scoreInt >= 75) {
    strokeColor = "#1D9E75"; // accent success teal
    badgeBg = "#E6F7F2";
    badgeColor = "#1D9E75";
  } else if (scoreInt >= 50) {
    strokeColor = "#F59E0B"; // amber warning
    badgeBg = "#FEF3C7";
    badgeColor = "#D97706";
  }

  if (badgeText === "Needs Work") badgeText = "Requires follow-up";

  if (radialProgress) {
    radialProgress.setAttribute("stroke", strokeColor);
    radialProgress.setAttribute("stroke-dasharray", `${scoreInt}, 100`);
  }

  if (scoreBadge) {
    scoreBadge.textContent = badgeText;
    scoreBadge.style.backgroundColor = badgeBg;
    scoreBadge.style.color = badgeColor;
  }

  // AI Recommendation Badge
  const recBadge = document.getElementById("ws-ai-recommendation");
  if (recBadge) {
    recBadge.textContent = cand.aiRecommendation || "Recommended";
    if (cand.aiRecommendation === "Highly Recommended") {
      recBadge.style.backgroundColor = "#E6F7F2";
      recBadge.style.color = "#0D7A57";
    } else if (cand.aiRecommendation === "Requires Review" || cand.aiRecommendation === "Under Evaluation") {
      recBadge.style.backgroundColor = "#FEF3C7";
      recBadge.style.color = "#D97706";
    } else {
      recBadge.style.backgroundColor = "#FEF0EF";
      recBadge.style.color = "#E24B4A";
    }
  }

  // 8. Competency Radar Chart
  const m = cand.metrics || { clarity: 0, relevance: 0, confidence: 0, communication: 0 };
  const topY = 50 - (m.clarity / 5) * 35;
  const rightX = 50 + (m.relevance / 5) * 35;
  const bottomY = 50 + (m.confidence / 5) * 35;
  const leftX = 50 - (m.communication / 5) * 35;

  const radarPoly = document.getElementById("ws-radar-polygon");
  const dotClarity = document.getElementById("ws-radar-dot-clarity");
  const dotRelevance = document.getElementById("ws-radar-dot-relevance");
  const dotConfidence = document.getElementById("ws-radar-dot-confidence");
  const dotComm = document.getElementById("ws-radar-dot-comm");

  if (radarPoly) radarPoly.setAttribute("points", `50,${topY} ${rightX},50 50,${bottomY} ${leftX},50`);
  if (dotClarity) { dotClarity.setAttribute("cy", topY); dotClarity.setAttribute("cx", 50); }
  if (dotRelevance) { dotRelevance.setAttribute("cx", rightX); dotRelevance.setAttribute("cy", 50); }
  if (dotConfidence) { dotConfidence.setAttribute("cy", bottomY); dotConfidence.setAttribute("cx", 50); }
  if (dotComm) { dotComm.setAttribute("cx", leftX); dotComm.setAttribute("cy", 50); }

  // 9. Recruiter Sticky Decision and Notes
  const wsDecisionNotes = document.getElementById("ws-decision-notes");
  if (wsDecisionNotes) wsDecisionNotes.value = ""; // clear notes field

  // Highlight Decision button card based on current candidate decision status
  document.querySelectorAll(".decision-button").forEach(btn => {
    btn.classList.remove("selected");
    if (btn.dataset.decision === cand.decision) {
      btn.classList.add("selected");
    } else if (cand.decision === "Proceed" && btn.dataset.decision === "Proceed") {
      btn.classList.add("selected");
    }
  });

  // 10. Activity timeline widget
  const activityContainer = document.getElementById("ws-activity-container");
  if (activityContainer) {
    activityContainer.innerHTML = "";
    const timeline = cand.timeline || [];
    if (timeline.length > 0) {
      timeline.forEach(event => {
        const item = document.createElement("div");
        item.className = "experience-item";
        item.innerHTML = `
          <div class="experience-title">${event.event}</div>
          <div class="experience-company-duration">${event.date} · ${event.details}</div>
        `;
        activityContainer.appendChild(item);
      });
    } else {
      activityContainer.innerHTML = `<div style="font-style: italic; color: var(--text-secondary);">No timeline events.</div>`;
    }
  }

  // 11. Question Navigation pills
  const wsQuestionPills = document.getElementById("ws-question-pills");
  if (wsQuestionPills) {
    wsQuestionPills.innerHTML = "";
    if (cand.questions && cand.questions.length > 0) {
      cand.questions.forEach((q, idx) => {
        const pill = document.createElement("button");
        pill.className = `workspace-back-btn${idx === wsCurrentQuestionIndex ? " active" : ""}`;
        pill.style.height = "28px";
        pill.style.padding = "0 12px";
        pill.style.borderRadius = "4px";
        pill.style.fontSize = "11px";
        pill.style.borderColor = idx === wsCurrentQuestionIndex ? "var(--active-nav-bg)" : "#D1D9E8";
        pill.style.backgroundColor = idx === wsCurrentQuestionIndex ? "rgba(29, 158, 117, 0.08)" : "#FFF";
        pill.style.color = idx === wsCurrentQuestionIndex ? "#127454" : "var(--text-secondary)";
        pill.textContent = `Q${idx + 1}: ${q.substring(0, 25)}${q.length > 25 ? "..." : ""}`;
        pill.addEventListener("click", () => {
          seekWsVideoToQuestion(idx);
        });
        wsQuestionPills.appendChild(pill);
      });
    }
  }

  // 12. Video Question Markers (Tick marks)
  const timelineContainer = document.getElementById("ws-vid-timeline");
  if (timelineContainer) {
    // Remove old markers
    timelineContainer.querySelectorAll(".custom-video-timeline-marker").forEach(m => m.remove());
    // Render new markers
    const questionsCount = cand.questions ? cand.questions.length : 1;
    for (let i = 0; i < questionsCount; i++) {
      const marker = document.createElement("div");
      marker.className = "custom-video-timeline-marker";
      const pct = (i / questionsCount) * 100;
      marker.style.left = `${pct}%`;
      marker.title = `Seek to Question ${i + 1}`;
      marker.addEventListener("click", (e) => {
        e.stopPropagation(); // don't trigger timeline container click
        seekWsVideoToQuestion(i);
      });
      timelineContainer.appendChild(marker);
    }
  }

  // 13. Dialogue Transcript Chat
  const wsTranscriptContainer = document.getElementById("ws-transcript-container");
  if (wsTranscriptContainer) {
    wsTranscriptContainer.innerHTML = "";
    if (cand.transcript && cand.transcript.length > 0) {
      cand.transcript.forEach((t, idx) => {
        const card = document.createElement("div");
        const isBot = t.speaker === "AI Bot";
        card.className = `chat-bubble-card ${isBot ? "bot" : "candidate"}`;
        
        const avatarColor = isBot ? "var(--sidebar-bg)" : "var(--active-nav-bg)";
        const initials = isBot ? "Bot" : getInitials(cand.name);
        
        card.innerHTML = `
          <div class="chat-bubble-avatar ${isBot ? "bot" : ""}" style="background: ${avatarColor}">${initials}</div>
          <div style="display: flex; flex-direction: column; gap: 4px; flex-grow: 1;">
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <span style="font-weight: 700; font-size: 11.5px; color: var(--text-primary);">${isBot ? t.speaker : cand.name}</span>
              <span style="font-size: 10px; color: var(--text-secondary); font-family: var(--font-mono);">${isBot ? (idx === 0 ? "0:00" : (idx === 2 ? "1:15" : "2:05")) : ""}</span>
            </div>
            <div class="transcript-answer-text ${isBot ? "bot-text" : "candidate-text"}" style="font-size: 12px; line-height: 1.5; color: var(--text-primary);">
              ${t.text}
            </div>
          </div>
        `;
        
        // Link transcript bubbles to seeking: click seek to that question's timestamp
        const qIdx = Math.floor(idx / 2);
        card.addEventListener("click", () => {
          seekWsVideoToQuestion(qIdx);
          // Toggle expand candidate text bubble
          const textEl = card.querySelector(".transcript-answer-text");
          if (textEl && !isBot) {
            textEl.classList.toggle("expanded");
          }
        });

        wsTranscriptContainer.appendChild(card);
      });
    } else {
      wsTranscriptContainer.innerHTML = `<div style="font-style: italic; color: var(--text-secondary); text-align: center; font-size: 12px; padding: 12px 0;">No transcript available.</div>`;
    }
  }

  updateWsPlayerUI();
  updateWsQuestionSelection(cand);
}

function hideCandidateWorkspace() {
  activeCandidateId = null;
  isWsVideoPlaying = false;
  clearInterval(wsVideoPlaybackInterval);

  // Toggle visible containers
  const listView = document.getElementById("screening-list-view");
  const workspaceView = document.getElementById("candidate-review-workspace");

  if (workspaceView) {
    workspaceView.classList.remove("active");
    workspaceView.style.display = "none";
  }
  if (listView) listView.style.display = "block";

  // Restore document title
  document.title = `Video Screening | Elasticrew ATS`;

  // Restore original list URL parameters
  window.history.replaceState({}, "", `${window.location.pathname}${originalUrlParams || ""}`);

  // Re-trigger results table reload to sync decisions
  triggerTableReload();
}

function seekWsVideoToQuestion(index) {
  if (activeCandidateId) {
    const cand = candidates.find(c => c.id === activeCandidateId);
    const questionsCount = cand && cand.questions ? cand.questions.length : 1;
    if (index >= 0 && index < questionsCount) {
      wsVideoProgressPercentage = (index / questionsCount) * 100 + 0.5;
      updateWsPlayerUI();
      wsCurrentQuestionIndex = index;
      updateWsQuestionSelection(cand);
    }
  }
}

function updateWsQuestionSelection(cand) {
  const qArray = cand.questions || [];
  if (qArray.length === 0) return;

  if (wsCurrentQuestionIndex < 0) wsCurrentQuestionIndex = 0;
  if (wsCurrentQuestionIndex >= qArray.length) wsCurrentQuestionIndex = qArray.length - 1;

  // Update question text and badge in controls
  const qBadge = document.getElementById("ws-vid-q-badge");
  const activeQuestionText = document.getElementById("ws-video-active-question-text");
  
  if (qBadge) qBadge.textContent = `Q${wsCurrentQuestionIndex + 1}`;
  if (activeQuestionText) activeQuestionText.textContent = qArray[wsCurrentQuestionIndex];

  // Update pills active highlight
  const wsQuestionPills = document.getElementById("ws-question-pills");
  if (wsQuestionPills) {
    const pills = wsQuestionPills.querySelectorAll("button");
    pills.forEach((pill, idx) => {
      if (idx === wsCurrentQuestionIndex) {
        pill.className = "workspace-back-btn active";
        pill.style.borderColor = "var(--active-nav-bg)";
        pill.style.backgroundColor = "rgba(29, 158, 117, 0.08)";
        pill.style.color = "#127454";
      } else {
        pill.className = "workspace-back-btn";
        pill.style.borderColor = "#D1D9E8";
        pill.style.backgroundColor = "#FFF";
        pill.style.color = "var(--text-secondary)";
      }
    });
  }

  // Highlight corresponding bubble in transcript
  const transcriptContainer = document.getElementById("ws-transcript-container");
  if (transcriptContainer) {
    const cards = transcriptContainer.querySelectorAll(".chat-bubble-card");
    cards.forEach((card, idx) => {
      const botIdx = wsCurrentQuestionIndex * 2;
      const candIdx = wsCurrentQuestionIndex * 2 + 1;
      if (idx === botIdx || idx === candIdx) {
        card.classList.add("active-highlight");
      } else {
        card.classList.remove("active-highlight");
      }
    });

    // Scroll active bot bubble into view
    const targetCard = cards[wsCurrentQuestionIndex * 2];
    if (targetCard) {
      targetCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }
}

function updateWsPlayerUI() {
  const fill = document.getElementById("ws-vid-timeline-fill");
  if (fill) fill.style.width = `${wsVideoProgressPercentage}%`;

  const elapsedSeconds = Math.floor((wsVideoProgressPercentage / 100) * videoDurationSeconds);
  const m = Math.floor(elapsedSeconds / 60);
  const s = elapsedSeconds % 60;
  const sPad = s < 10 ? '0' + s : s;

  const totalM = Math.floor(videoDurationSeconds / 60);
  const totalS = videoDurationSeconds % 60;
  const totalSPad = totalS < 10 ? '0' + totalS : totalS;

  const display = document.getElementById("ws-vid-time-display");
  if (display) display.textContent = `${m}:${sPad} / ${totalM}:${totalSPad}`;

  const playToggleBtn = document.getElementById("ws-vid-btn-play-toggle");
  const wsPlaybackIcon = document.getElementById("ws-playback-state-icon");

  const pauseSvg = `<svg viewBox="0 0 24 24" fill="currentColor" style="width: 14px; height: 14px; color: #FFFFFF;"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
  const playSvg = `<svg viewBox="0 0 24 24" fill="currentColor" style="width: 14px; height: 14px; color: #FFFFFF;"><path d="M8 5v14l11-7z"/></svg>`;
  const centralPauseSvg = `<svg viewBox="0 0 24 24" fill="currentColor" style="width: 28px; height: 28px; color: #FFFFFF;"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
  const centralPlaySvg = `<svg viewBox="0 0 24 24" fill="currentColor" style="width: 28px; height: 28px; color: #FFFFFF; margin-left: 3px;"><path d="M8 5v14l11-7z"/></svg>`;

  if (playToggleBtn) playToggleBtn.innerHTML = isWsVideoPlaying ? pauseSvg : playSvg;
  if (wsPlaybackIcon) {
    wsPlaybackIcon.innerHTML = isWsVideoPlaying ? centralPauseSvg : centralPlaySvg;
    wsPlaybackIcon.style.transform = isWsVideoPlaying ? "scale(0.95)" : "scale(1)";
  }
}

function toggleWsVideoPlayback() {
  if (isWsVideoPlaying) {
    isWsVideoPlaying = false;
    clearInterval(wsVideoPlaybackInterval);
    updateWsPlayerUI();
  } else {
    isWsVideoPlaying = true;
    updateWsPlayerUI();
    
    wsVideoPlaybackInterval = setInterval(() => {
      const speedSelect = document.getElementById("ws-vid-speed-select");
      const speedMultiplier = speedSelect ? parseFloat(speedSelect.value) : 1.0;
      wsVideoProgressPercentage += 0.8 * speedMultiplier;
      
      if (wsVideoProgressPercentage >= 100) {
        wsVideoProgressPercentage = 100;
        isWsVideoPlaying = false;
        clearInterval(wsVideoPlaybackInterval);
        showToast("Playback completed.");
      }
      
      // Sync active question index based on playback progress
      if (activeCandidateId) {
        const cand = candidates.find(c => c.id === activeCandidateId);
        const questionsCount = cand && cand.questions ? cand.questions.length : 1;
        const chunk = 100 / questionsCount;
        let activeQIdx = Math.floor(wsVideoProgressPercentage / chunk);
        if (activeQIdx >= questionsCount) activeQIdx = questionsCount - 1;
        if (activeQIdx < 0) activeQIdx = 0;
        
        if (activeQIdx !== wsCurrentQuestionIndex) {
          wsCurrentQuestionIndex = activeQIdx;
          updateWsQuestionSelection(cand);
        }
      }
      
      updateWsPlayerUI();
    }, 100);
  }
}

// ----------------------------------------------------
// Setup filters and triggers
// ----------------------------------------------------
function setupFilters() {
  const filterSubdept = document.getElementById("filter-subdept");
  const filterDecision = document.getElementById("filter-decision");
  const filterDateFrom = document.getElementById("filter-date-from");
  const filterDateTo = document.getElementById("filter-date-to");

  if (filterSubdept) {
    filterSubdept.addEventListener("change", () => {
      currentPage = 1;
      updateUrlParams();
      triggerTableReload();
    });
  }
  if (filterDecision) {
    filterDecision.addEventListener("change", () => {
      currentPage = 1;
      updateUrlParams();
      triggerTableReload();
    });
  }
  if (filterDateFrom) {
    filterDateFrom.addEventListener("change", () => {
      currentPage = 1;
      updateUrlParams();
      triggerTableReload();
    });
  }
  if (filterDateTo) {
    filterDateTo.addEventListener("change", () => {
      currentPage = 1;
      updateUrlParams();
      triggerTableReload();
    });
  }
}

// ----------------------------------------------------
// Page Initializer
// ----------------------------------------------------
function initializePage() {
  setupInviteDropdowns();
  setupFilters();
  loadUrlParams();
  triggerTableReload();
  
  // Bind overlay click handlers to close drawers
  document.getElementById("notes-drawer-overlay").addEventListener("click", closeNotes);
  document.getElementById("profile-drawer-overlay").addEventListener("click", closeProfile);
  document.getElementById("questions-drawer-overlay").addEventListener("click", closeQuestions);
  document.getElementById("video-drawer-overlay").addEventListener("click", closeVideo);
  
  // Bind drawer select decision changer
  const drawerDecisionSelect = document.getElementById("drawer-move-decision-select");
  if (drawerDecisionSelect) {
    drawerDecisionSelect.addEventListener("change", (e) => {
      // No longer auto-saves on change — user must click Confirm
    });
  }

  // Bind Confirm Decision button (from old player modal, if still clicked)
  const btnConfirmDecision = document.getElementById("btn-confirm-decision");
  if (btnConfirmDecision) {
    btnConfirmDecision.addEventListener("click", () => {
      const decisionSelect = document.getElementById("drawer-move-decision-select");
      const notesField = document.getElementById("drawer-decision-notes");
      const value = decisionSelect ? decisionSelect.value : "";
      const notes = notesField ? notesField.value.trim() : "";

      if (activeCandidateId) {
        const cand = candidates.find(c => c.id === activeCandidateId);
        if (cand) {
          cand.decision = value === "Schedule Interview" ? "Proceed" : value;
          if (notes) {
            cand.notes = cand.notes ? cand.notes + "\n" + notes : notes;
          }
          showToast(`Decision confirmed: ${value}.`);
          if (notesField) notesField.value = "";
          renderScreeningTable();
        }
      }
    });
  }

  // Details tooltip toggle
  const btnDetailsTooltip = document.getElementById("btn-details-tooltip");
  const detailsTooltipPopup = document.getElementById("details-tooltip-popup");
  if (btnDetailsTooltip && detailsTooltipPopup) {
    btnDetailsTooltip.addEventListener("click", (e) => {
      e.stopPropagation();
      detailsTooltipPopup.style.display = detailsTooltipPopup.style.display === "none" ? "block" : "none";
    });
    document.addEventListener("click", () => {
      detailsTooltipPopup.style.display = "none";
    });
  }

  // Dedicated Workspace Event Bindings
  const wsBackBtn = document.getElementById("workspace-back-btn");
  if (wsBackBtn) wsBackBtn.addEventListener("click", hideCandidateWorkspace);

  const wsPlayOverlay = document.getElementById("ws-playback-state-icon");
  if (wsPlayOverlay) wsPlayOverlay.addEventListener("click", toggleWsVideoPlayback);

  const wsPlayBarBtn = document.getElementById("ws-vid-btn-play-toggle");
  if (wsPlayBarBtn) wsPlayBarBtn.addEventListener("click", toggleWsVideoPlayback);

  const wsPrevQBtn = document.getElementById("ws-vid-prev-q");
  if (wsPrevQBtn) {
    wsPrevQBtn.addEventListener("click", () => {
      if (activeCandidateId) {
        const cand = candidates.find(c => c.id === activeCandidateId);
        if (cand && wsCurrentQuestionIndex > 0) {
          seekWsVideoToQuestion(wsCurrentQuestionIndex - 1);
        }
      }
    });
  }

  const wsNextQBtn = document.getElementById("ws-vid-next-q");
  if (wsNextQBtn) {
    wsNextQBtn.addEventListener("click", () => {
      if (activeCandidateId) {
        const cand = candidates.find(c => c.id === activeCandidateId);
        const questionsCount = cand && cand.questions ? cand.questions.length : 0;
        if (cand && wsCurrentQuestionIndex < questionsCount - 1) {
          seekWsVideoToQuestion(wsCurrentQuestionIndex + 1);
        }
      }
    });
  }

  const wsSpeedSelect = document.getElementById("ws-vid-speed-select");
  if (wsSpeedSelect) {
    wsSpeedSelect.addEventListener("change", () => {
      if (isWsVideoPlaying) {
        // Restart play interval at new speed multiplier
        clearInterval(wsVideoPlaybackInterval);
        isWsVideoPlaying = false;
        toggleWsVideoPlayback();
      }
    });
  }

  const wsFullscreenBtn = document.getElementById("ws-vid-fullscreen-btn");
  if (wsFullscreenBtn) {
    wsFullscreenBtn.addEventListener("click", () => {
      const wrapper = document.querySelector(".custom-video-wrapper");
      if (wrapper) {
        if (!document.fullscreenElement) {
          wrapper.requestFullscreen().catch(err => {
            showToast("Error enabling fullscreen", "error");
          });
        } else {
          document.exitFullscreen();
        }
      }
    });
  }

  const wsTimeline = document.getElementById("ws-vid-timeline");
  if (wsTimeline) {
    wsTimeline.addEventListener("click", (e) => {
      const rect = wsTimeline.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percentage = (clickX / rect.width) * 100;
      wsVideoProgressPercentage = Math.max(0, Math.min(100, percentage));

      if (activeCandidateId) {
        const cand = candidates.find(c => c.id === activeCandidateId);
        const questionsCount = cand && cand.questions ? cand.questions.length : 1;
        const chunk = 100 / questionsCount;
        let activeQIdx = Math.floor(wsVideoProgressPercentage / chunk);
        if (activeQIdx >= questionsCount) activeQIdx = questionsCount - 1;
        if (activeQIdx < 0) activeQIdx = 0;
        wsCurrentQuestionIndex = activeQIdx;
        updateWsQuestionSelection(cand);
      }
      updateWsPlayerUI();
    });
  }

  // Reciprocal highlight decision buttons
  document.querySelectorAll(".decision-button").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".decision-button").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
    });
  });

  // Workspace decision confirmation
  const wsConfirmDecisionBtn = document.getElementById("ws-confirm-decision-btn");
  if (wsConfirmDecisionBtn) {
    wsConfirmDecisionBtn.addEventListener("click", () => {
      const activeBtn = document.querySelector(".decision-button.selected");
      const decision = activeBtn ? activeBtn.dataset.decision : "";
      const notesField = document.getElementById("ws-decision-notes");
      const notes = notesField ? notesField.value.trim() : "";

      if (activeCandidateId && decision) {
        const cand = candidates.find(c => c.id === activeCandidateId);
        if (cand) {
          cand.decision = decision;
          if (notes) {
            cand.notes = cand.notes ? cand.notes + "\n" + notes : notes;
          }
          showToast(`Decision confirmed: ${decision}.`);
          if (notesField) notesField.value = "";
          
          // Re-populate workspace to show updated notes, decision state, and timeline
          showCandidateWorkspace(activeCandidateId);
          renderScreeningTable();
        }
      } else {
        showToast("Please select a decision stage first.", "warning");
      }
    });
  }

  // Global keydown listeners for ESC close and Space Play/Pause
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeNotes();
      closeProfile();
      closeQuestions();
      closeVideo();
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
      // If candidate workspace is active, go back to candidates list
      if (activeCandidateId) {
        hideCandidateWorkspace();
      }
    } else if (e.key === " " && activeCandidateId && e.target.tagName !== "TEXTAREA" && e.target.tagName !== "INPUT") {
      // Spacebar plays/pauses video if workspace is active and not typing in textareas/inputs
      e.preventDefault();
      toggleWsVideoPlayback();
    }
  });

  // Deep-linking helper to automatically open the player drawer or full workspace
  const params = new URLSearchParams(window.location.search);
  if (params.has("search")) {
    const searchVal = params.get("search");
    const matchedCandidate = candidates.find(c => c.id === searchVal);
    if (matchedCandidate && matchedCandidate.status === "Screening Completed") {
      setTimeout(() => {
        showCandidateWorkspace(matchedCandidate.id);
      }, 500);
    }
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializePage);
} else {
  initializePage();
}
