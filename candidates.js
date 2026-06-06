/* =========================================================
   Candidates Dashboard Controller — candidates.js
   Consolidated Candidate Directory, Video Screening (Bot Interview),
   and Interview Scheduler (Technical Round)
   ========================================================= */

// ── Toast Notifications ──────────────────────────────────
function showToast(message, type = "success") {
  const holder = document.getElementById("toast-holder");
  if (!holder) return;
  const toast = document.createElement("div");
  toast.className = `toast-notification toast-${type}`;
  toast.textContent = message;
  holder.appendChild(toast);
  
  // Trigger entry animation
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });
  
  // Auto-dismiss
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 3200);
}

// ── Date Helpers ─────────────────────────────────────────
const today = new Date();
const y = today.getFullYear();
const m = today.getMonth();

function dateStr(year, month, day) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function formatTime(t) {
  const [h, min] = t.split(":").map(Number);
  return `${h % 12 || 12}:${String(min).padStart(2, "0")} ${h >= 12 ? "PM" : "AM"}`;
}

function formatDate(ds) {
  return new Date(ds + "T00:00:00").toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}

function platformIcon(p) {
  return ({ "Google Meet": "🎥", Zoom: "💻", "MS Teams": "🖥", "In-Person": "📍" }[p] || "📹") + " " + p;
}

// ── Mock Databases ───────────────────────────────────────

// 1. Candidates Database
let candidates = [
  {
    id: "CAN-1032",
    name: "Unnati Sutradhar",
    phone: "(555) 019-9923",
    email: "mahima.dangi@kadellabs.com",
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
      "What is the exception handling"
    ],
    transcript: [
      { speaker: "AI Bot", text: "What is the exception handling" },
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
      { speaker: "AI Bot", text: "Welcome to the KadelLabs screening. First, please explain how closures work in JavaScript." },
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
      { speaker: "AI Bot", text: "Welcome to the KadelLabs screening. First, please explain how closures work in JavaScript." },
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

// Enrich candidates database dynamically with mock details
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

// 2. Prospective Candidates
const prospectiveCandidates = [
  { name: "Robert Fox", email: "robert.fox@example.com", phone: "(704) 555-0189" },
  { name: "Cody Fisher", email: "cody.fisher@example.com", phone: "(408) 555-0144" },
  { name: "Bessie Cooper", email: "bessie.cooper@example.com", phone: "(626) 555-0193" },
  { name: "Arlene McCoy", email: "arlene.mccoy@example.com", phone: "(206) 555-0118" },
  { name: "Leslie Alexander", email: "leslie.alexander@example.com", phone: "(601) 555-0155" },
  { name: "Guy Hawkins", email: "guy.hawkins@example.com", phone: "(319) 555-0168" }
];

// 3. Department Cascades
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
        label: "UI/UX Designer"
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

// 4. Screening Questions
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

// 5. Panelists Database
let panelists = [
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

// 6. Scheduled Interviews Database
let interviews = [
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
  { id:'i11', candidate:'Priya Nair',      role:'QA Engineer',        date:dateStr(y,m,today.getDate()), time:'09:30', duration:45, platform:'Zoom',        platformLink:'https://zoom.us/j/111222333', panelists:['p3'],      status:'pending',   department:'Engineering', notes:'' },
  { id:'i12', candidate:'Karan Mehta',     role:'Cloud Architect',    date:dateStr(y,m,today.getDate()), time:'14:00', duration:60, platform:'Google Meet', platformLink:'https://meet.google.com/aaa-bbb-ccc', panelists:['p1','p2'], status:'confirmed', department:'Engineering', notes:'' },
];

function getPanelist(id) { return panelists.find(p => p.id === id); }

// ── Global Controller State ──────────────────────────────
let activeTab = "bot-interview"; // "bot-interview" | "technical-round" | "final-submission" | "rejected" | "on-hold"
let activeCandidateId = null;
let activeOtherCandidateId = null;
let originalUrlParams = "";

// Sorting and search states
let searchBotQuery = "";
let searchOtherQuery = "";
let sortBotKey = "name";
let sortBotOrder = "asc";
let sortOtherKey = "name";
let sortOtherOrder = "asc";

// Video Playback Workspace state
let wsCurrentQuestionIndex = 0;
let wsVideoProgressPercentage = 0;
let isWsVideoPlaying = false;
let wsVideoPlaybackInterval = null;
const videoDurationSeconds = 165;

// Calendar configuration state
let currentYear = y;
let currentMonth = m;
let currentView = "month"; // "month" | "week"
let weekStart = getWeekStartDate(today);
let calendarFilter = "all"; // "all" | "completed" | "pending" | "week"
let activeScheduledEventId = null;

// Modal select details
let selectedPlatform = "Google Meet";
let selectedModalPanelists = [];
let editingInterviewId = null;

// Drawer state for adding panelists
let selectedSkills = [];
let selectedInterviewTypes = [];
let selectedAvailabilityStatus = "available";

// Calendar constants
const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const dayAbbr = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const WEEK_START_HOUR = 8;
const WEEK_END_HOUR = 19;
const SLOT_H = 50;

// Avatar gradient colors
const avatarGradients = [
  "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
  "linear-gradient(135deg, #10B981 0%, #059669 100%)",
  "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
  "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)",
  "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)"
];

function getInitials(name) {
  if (!name) return "CN";
  return name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
}

function getAvatarGradient(name) {
  let sum = 0;
  for (let i = 0; i < name.length; i++) sum += name.charCodeAt(i);
  return avatarGradients[sum % avatarGradients.length];
}

function getWeekStartDate(d) {
  const date = new Date(d);
  const day = date.getDay();
  const diff = date.getDate() - day; // Sunday is start of week
  return new Date(date.setDate(diff));
}

// ── Tab Management ───────────────────────────────────────
function updateTabBadges() {
  // Bot Interview stage count: candidates in screening stages (not Proceed, Rejected, On Hold, Final Submission)
  const botCount = candidates.filter(c => !c.decision || c.decision === "Pending").length;
  const techCount = interviews.length; // Live scheduler interviews
  const finalCount = candidates.filter(c => c.decision === "Final Submission").length;
  const rejCount = candidates.filter(c => c.decision === "Rejected").length;
  const holdCount = candidates.filter(c => c.decision === "On Hold").length;

  const bBot = document.getElementById("badge-bot-interview");
  const bTech = document.getElementById("badge-technical-round");
  const bFinal = document.getElementById("badge-final-submission");
  const bRej = document.getElementById("badge-rejected");
  const bHold = document.getElementById("badge-on-hold");

  if (bBot) bBot.textContent = botCount;
  if (bTech) bTech.textContent = techCount;
  if (bFinal) bFinal.textContent = finalCount;
  if (bRej) bRej.textContent = rejCount;
  if (bHold) bHold.textContent = holdCount;
}

function switchTab(tabName) {
  activeTab = tabName;
  
  // Update Header Title depending on active tab
  const mainHeader = document.getElementById("page-main-header");
  const schedulerActions = document.getElementById("header-scheduler-actions");
  
  if (mainHeader) {
    if (tabName === "technical-round") {
      mainHeader.textContent = "Technical Interview Scheduler";
      if (schedulerActions) schedulerActions.style.display = "flex";
    } else {
      mainHeader.textContent = "Candidates Directory";
      if (schedulerActions) schedulerActions.style.display = "none";
    }
  }

  // Update tabs active highlight classes
  document.querySelectorAll(".main-dashboard-tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === tabName);
  });

  // Show corresponding sections
  document.querySelectorAll(".tab-section").forEach(sec => {
    sec.style.display = "none";
    sec.classList.remove("active");
  });

  if (tabName === "bot-interview") {
    const s = document.getElementById("section-bot-interview");
    if (s) { s.style.display = "block"; s.classList.add("active"); }
    renderBotScreeningTable();
  } else if (tabName === "technical-round") {
    const s = document.getElementById("section-technical-round");
    if (s) { s.style.display = "block"; s.classList.add("active"); }
    renderCalendar();
    renderUpcomingList();
    renderPanelists();
    renderPanelManagementDashboard();
    renderPanelistDirectory();
  } else {
    // Stage-specific tabs (Final Submission, Rejected, On Hold)
    const s = document.getElementById("section-other-stages");
    if (s) { s.style.display = "block"; s.classList.add("active"); }
    
    // Set subtitle title on stage directory card
    const otherTitle = document.getElementById("other-stage-table-title");
    if (otherTitle) {
      if (tabName === "final-submission") otherTitle.textContent = "Final Submission Stage Candidates";
      else if (tabName === "rejected") otherTitle.textContent = "Rejected Candidates Directory";
      else if (tabName === "on-hold") otherTitle.textContent = "On Hold Candidates Directory";
    }
    renderOtherStagesTable();
  }

  // Deselect selected candidates in right action panels
  activeCandidateId = null;
  activeOtherCandidateId = null;
  updateBotActionPanel();
  updateOtherActionPanel();
}

// ── Bot Interview Controller ─────────────────────────────
function renderBotScreeningTable() {
  const tbody = document.getElementById("bot-screening-table-body");
  if (!tbody) return;
  tbody.innerHTML = "";

  // Filter candidates for Bot Interview (those with decision Pending or empty)
  let list = candidates.filter(c => !c.decision || c.decision === "Pending");

  // Search filter
  if (searchBotQuery) {
    const q = searchBotQuery.toLowerCase();
    list = list.filter(c => 
      c.name.toLowerCase().includes(q) || 
      c.role.toLowerCase().includes(q) || 
      c.status.toLowerCase().includes(q)
    );
  }

  // Sort list
  list.sort((a, b) => {
    let valA = a[sortBotKey] || "";
    let valB = b[sortBotKey] || "";
    
    if (sortBotKey === "overallScore") {
      valA = parseInt(a.overallScore) || 0;
      valB = parseInt(b.overallScore) || 0;
    }

    if (valA < valB) return sortBotOrder === "asc" ? -1 : 1;
    if (valA > valB) return sortBotOrder === "asc" ? 1 : -1;
    return 0;
  });

  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; padding: 24px; color: var(--text-secondary);">No screening candidates match the current filter.</td></tr>`;
    return;
  }

  list.forEach(c => {
    const tr = document.createElement("tr");
    tr.style.cursor = "pointer";
    tr.classList.toggle("selected", c.id === activeCandidateId);
    
    tr.addEventListener("click", () => {
      activeCandidateId = c.id;
      // highlight selected row
      tbody.querySelectorAll("tr").forEach(r => r.classList.remove("selected"));
      tr.classList.add("selected");
      updateBotActionPanel();
    });

    // Score badge formatting
    const scoreInt = parseInt(c.overallScore) || 0;
    let scoreClass = "badge-pending";
    if (c.status === "Screening Completed") {
      scoreClass = scoreInt >= 75 ? "badge-completed" : (scoreInt >= 50 ? "badge-pending" : "badge-rejected");
    }

    // Status mapping with styles
    let statusClass = "neutral";
    if (c.status === "Invite Sent" || c.status === "Screening In Progress") statusClass = "amber";
    else if (c.status === "Screening Completed") statusClass = "teal";
    else if (c.status === "No Response") statusClass = "blue";
    else if (c.status === "Rejected") statusClass = "red";

    const statusBadge = `<span class="dir-avail-badge ${c.status.toLowerCase().replace(/ /g, '-')}" style="background-color: ${getStatusBadgeBg(c.status)}; color: ${getStatusBadgeColor(c.status)};">${c.status}</span>`;

    tr.innerHTML = `
      <td>
        <div style="display: flex; align-items: center; gap: 10px;">
          <div class="panelist-avatar-sm" style="background: ${getAvatarGradient(c.name)}; font-weight: 700; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px;">${getInitials(c.name)}</div>
          <div>
            <span style="font-weight: 600; color: var(--text-primary); display: block;">${c.name}</span>
            <span style="font-size: 10.5px; color: var(--text-secondary);">${c.email}</span>
          </div>
        </div>
      </td>
      <td style="font-weight: 600; color: var(--text-primary);">${c.role}</td>
      <td>${statusBadge}</td>
      <td>
        <span class="dir-avail-badge" style="background-color: ${scoreInt >= 75 ? '#E6F7F2' : (scoreInt >= 50 ? '#FEF3C7' : '#FEF0EF')}; color: ${scoreInt >= 75 ? '#0D7A57' : (scoreInt >= 50 ? '#B45309' : '#E24B4A')}; font-weight: 700;">
          ${c.status === "Screening Completed" ? c.overallScore : "—"}
        </span>
      </td>
      <td style="color: var(--text-secondary); font-size: 11.5px;">${c.dateScreened ? formatDate(c.dateScreened) : "Pending"}</td>
    `;
    tbody.appendChild(tr);
  });
}

function getStatusBadgeBg(status) {
  if (status === "Screening Completed" || status === "Completed") return "#E6F7F2";
  if (status === "Invite Sent" || status === "Screening In Progress") return "#FEF3C7";
  if (status === "No Response") return "#EBF4FF";
  return "#F3F4F6";
}

function getStatusBadgeColor(status) {
  if (status === "Screening Completed" || status === "Completed") return "#0D7A57";
  if (status === "Invite Sent" || status === "Screening In Progress") return "#B45309";
  if (status === "No Response") return "#1d4ed8";
  return "#4B5563";
}

function updateBotActionPanel() {
  const empty = document.getElementById("bot-panel-empty-state");
  const content = document.getElementById("bot-panel-content");
  const title = document.getElementById("panel-candidate-name");
  const subtitle = document.getElementById("panel-candidate-role");
  const group = document.getElementById("panel-actions-group");

  if (!activeCandidateId) {
    if (empty) empty.style.display = "block";
    if (content) content.style.display = "none";
    return;
  }

  const cand = candidates.find(c => c.id === activeCandidateId);
  if (!cand) return;

  if (empty) empty.style.display = "none";
  if (content) content.style.display = "block";
  if (title) title.textContent = cand.name;
  if (subtitle) subtitle.textContent = cand.role;

  if (!group) return;
  group.innerHTML = "";

  // Dynamic actions depending on Screening Status
  if (cand.status === "Not Invited") {
    group.innerHTML = `
      <div class="action-card-section">
        <span class="action-card-label">Outbound actions</span>
        <button class="action-panel-btn primary" id="btn-action-send-invite">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;"><path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>
          Send Bot Screening
        </button>
      </div>
      <div class="action-card-section" style="margin-top: 14px;">
        <span class="action-card-label">Danger zone</span>
        <button class="action-panel-btn danger" id="btn-action-delete">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
          Delete Candidate
        </button>
      </div>
    `;

    document.getElementById("btn-action-send-invite").addEventListener("click", () => {
      cand.status = "Invite Sent";
      cand.dateCreated = new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }) + ", 10:00 AM";
      showToast(`Invited ${cand.name} to complete video screening.`, "success");
      updateTabBadges();
      renderBotScreeningTable();
      updateBotActionPanel();
    });

  } else if (cand.status === "Invite Sent" || cand.status === "Screening In Progress") {
    group.innerHTML = `
      <div class="action-card-section">
        <span class="action-card-label">Invite details</span>
        <div style="background:#FAF9F6; border: 0.5px solid #E2DFD7; padding: 12px; border-radius: 8px; font-size:11.5px; color: var(--text-secondary); line-height: 1.4;">
          <strong>Dispatched:</strong> ${cand.dateCreated}<br>
          <strong>Status:</strong> ${cand.status}<br>
          <span style="color:#B45309; font-weight:600; display:block; margin-top:5px;">⚠️ Awaiting candidate completion</span>
        </div>
      </div>
      <div class="action-card-section" style="margin-top: 14px;">
        <span class="action-card-label">Danger zone</span>
        <button class="action-panel-btn danger" id="btn-action-delete">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
          Delete Candidate
        </button>
      </div>
    `;
  } else if (cand.status === "Screening Completed") {
    group.innerHTML = `
      <div class="action-card-section">
        <span class="action-card-label">Screening evaluations</span>
        <button class="action-panel-btn primary" id="btn-action-view-report">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178zM15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          View Interview Report
        </button>
      </div>
      <div class="action-card-section" style="margin-top: 10px;">
        <span class="action-card-label">Shortlist decisions</span>
        <button class="action-panel-btn outline-blue" id="btn-action-select">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          Select Candidate (Schedule)
        </button>
        <button class="action-panel-btn outline-amber" id="btn-action-hold">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" /></svg>
          Put On Hold
        </button>
        <button class="action-panel-btn outline-red" id="btn-action-reject">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          Reject Candidate
        </button>
      </div>
    `;

    document.getElementById("btn-action-view-report").addEventListener("click", () => {
      showCandidateWorkspace(cand.id);
    });

    document.getElementById("btn-action-select").addEventListener("click", () => {
      // Transition candidate to proceed
      cand.decision = "Proceed";
      cand.dateScreened = new Date().toISOString().split("T")[0];
      showToast(`Shortlisted ${cand.name} for Technical live interview.`, "success");
      updateTabBadges();
      
      // Auto redirect to Technical Round calendar and open prefilled scheduling modal
      switchTab("technical-round");
      openScheduleModal(null, false, cand.name, cand.role);
    });

    document.getElementById("btn-action-hold").addEventListener("click", () => {
      cand.decision = "On Hold";
      showToast(`Moved ${cand.name} to On Hold pipeline list.`, "info");
      updateTabBadges();
      renderBotScreeningTable();
      updateBotActionPanel();
    });

    document.getElementById("btn-action-reject").addEventListener("click", () => {
      cand.decision = "Rejected";
      showToast(`Rejected ${cand.name} application.`, "danger");
      updateTabBadges();
      renderBotScreeningTable();
      updateBotActionPanel();
    });
  } else {
    // "No Response", etc.
    group.innerHTML = `
      <div class="action-card-section">
        <span class="action-card-label">Status info</span>
        <div style="background:#FEF0EF; border: 0.5px solid #FFCDD2; padding: 12px; border-radius: 8px; font-size:11.5px; color: #C62828; line-height: 1.4;">
          <strong>No response from candidate.</strong><br>
          Invite expired on ${cand.dateExpires || "N/A"}.
        </div>
      </div>
      <div class="action-card-section" style="margin-top: 14px;">
        <span class="action-card-label">Outbound actions</span>
        <button class="action-panel-btn outline-blue" id="btn-action-resend">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>
          Re-send Bot Invite
        </button>
      </div>
    `;

    document.getElementById("btn-action-resend").addEventListener("click", () => {
      cand.status = "Invite Sent";
      cand.dateCreated = new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }) + ", 10:00 AM";
      showToast(`Re-sent bot screening invitation to ${cand.name}.`, "success");
      updateTabBadges();
      renderBotScreeningTable();
      updateBotActionPanel();
    });
  }

  // Bind Delete listener
  const delBtn = document.getElementById("btn-action-delete");
  if (delBtn) {
    delBtn.addEventListener("click", () => {
      if (confirm(`Are you sure you want to permanently delete candidate ${cand.name}?`)) {
        candidates = candidates.filter(c => c.id !== cand.id);
        activeCandidateId = null;
        showToast("Candidate deleted successfully.", "danger");
        updateTabBadges();
        renderBotScreeningTable();
        updateBotActionPanel();
      }
    });
  }
}

// ── Other Stages Controller ──────────────────────────────
function renderOtherStagesTable() {
  const tbody = document.getElementById("other-stages-table-body");
  if (!tbody) return;
  tbody.innerHTML = "";

  // Map activeTab to decision states
  let filterDecision = "On Hold";
  if (activeTab === "final-submission") filterDecision = "Final Submission";
  else if (activeTab === "rejected") filterDecision = "Rejected";

  let list = candidates.filter(c => c.decision === filterDecision);

  // Search filter
  if (searchOtherQuery) {
    const q = searchOtherQuery.toLowerCase();
    list = list.filter(c => 
      c.name.toLowerCase().includes(q) || 
      c.role.toLowerCase().includes(q)
    );
  }

  // Sort list
  list.sort((a, b) => {
    let valA = a[sortOtherKey] || "";
    let valB = b[sortOtherKey] || "";

    if (sortOtherKey === "overallScore") {
      valA = parseInt(a.overallScore) || 0;
      valB = parseInt(b.overallScore) || 0;
    }

    if (valA < valB) return sortOtherOrder === "asc" ? -1 : 1;
    if (valA > valB) return sortOtherOrder === "asc" ? 1 : -1;
    return 0;
  });

  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; padding: 24px; color: var(--text-secondary);">No stage directory entries.</td></tr>`;
    return;
  }

  list.forEach(c => {
    const tr = document.createElement("tr");
    tr.style.cursor = "pointer";
    tr.classList.toggle("selected", c.id === activeOtherCandidateId);

    tr.addEventListener("click", () => {
      activeOtherCandidateId = c.id;
      tbody.querySelectorAll("tr").forEach(r => r.classList.remove("selected"));
      tr.classList.add("selected");
      updateOtherActionPanel();
    });

    const scoreInt = parseInt(c.overallScore) || 0;
    let decisionColor = "#378ADD"; // blue hold
    if (c.decision === "Rejected") decisionColor = "#E24B4A"; // red reject
    else if (c.decision === "Final Submission") decisionColor = "#1D9E75"; // teal proceed

    tr.innerHTML = `
      <td>
        <div style="display: flex; align-items: center; gap: 10px;">
          <div class="panelist-avatar-sm" style="background: ${getAvatarGradient(c.name)}; font-weight: 700; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px;">${getInitials(c.name)}</div>
          <div>
            <span style="font-weight: 600; color: var(--text-primary); display: block;">${c.name}</span>
            <span style="font-size: 10.5px; color: var(--text-secondary);">${c.email}</span>
          </div>
        </div>
      </td>
      <td style="font-weight: 600; color: var(--text-primary);">${c.role}</td>
      <td>
        <span class="dir-avail-badge" style="background-color: ${decisionColor}1E; color: ${decisionColor}; font-weight: 700;">
          ${c.decision}
        </span>
      </td>
      <td>
        <span class="dir-avail-badge" style="background-color: ${scoreInt >= 75 ? '#E6F7F2' : (scoreInt >= 50 ? '#FEF3C7' : '#FEF0EF')}; color: ${scoreInt >= 75 ? '#0D7A57' : (scoreInt >= 50 ? '#B45309' : '#E24B4A')}; font-weight: 700;">
          ${c.status === "Screening Completed" ? c.overallScore : "—"}
        </span>
      </td>
      <td style="color: var(--text-secondary); font-size: 11.5px;">${c.dateScreened ? formatDate(c.dateScreened) : "Pending"}</td>
    `;
    tbody.appendChild(tr);
  });
}

function updateOtherActionPanel() {
  const empty = document.getElementById("other-panel-empty-state");
  const content = document.getElementById("other-panel-content");
  const title = document.getElementById("other-panel-candidate-name");
  const subtitle = document.getElementById("other-panel-candidate-role");
  const group = document.getElementById("other-panel-actions-group");

  if (!activeOtherCandidateId) {
    if (empty) empty.style.display = "block";
    if (content) content.style.display = "none";
    return;
  }

  const cand = candidates.find(c => c.id === activeOtherCandidateId);
  if (!cand) return;

  if (empty) empty.style.display = "none";
  if (content) content.style.display = "block";
  if (title) title.textContent = cand.name;
  if (subtitle) subtitle.textContent = cand.role;

  if (!group) return;
  group.innerHTML = "";

  // Set actions contextual to this candidate stage
  group.innerHTML = `
    <div class="action-card-section">
      <span class="action-card-label">Screening reviews</span>
      <button class="action-panel-btn primary" id="btn-other-action-view-report" ${cand.status !== "Screening Completed" ? "disabled" : ""}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178zM15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
        View Interview Report
      </button>
    </div>
    
    <div class="action-card-section" style="margin-top:14px;">
      <span class="action-card-label">Stage shifts</span>
      ${cand.decision !== "Proceed" ? `
        <button class="action-panel-btn outline-blue" id="btn-other-action-move-tech">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          Move to Technical Round
        </button>
      ` : ""}
      ${cand.decision !== "Final Submission" ? `
        <button class="action-panel-btn outline-blue" id="btn-other-action-move-final">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          Move to Final Submission
        </button>
      ` : ""}
      ${cand.decision !== "On Hold" ? `
        <button class="action-panel-btn outline-amber" id="btn-other-action-move-hold">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" /></svg>
          Put On Hold
        </button>
      ` : ""}
      ${cand.decision !== "Rejected" ? `
        <button class="action-panel-btn outline-red" id="btn-other-action-move-reject">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          Reject Candidate
        </button>
      ` : ""}
    </div>

    <div class="action-card-section" style="margin-top:14px;">
      <span class="action-card-label">Danger zone</span>
      <button class="action-panel-btn danger" id="btn-other-action-delete">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
        Delete Candidate
      </button>
    </div>
  `;

  // Bind view report
  const viewRep = document.getElementById("btn-other-action-view-report");
  if (viewRep) {
    viewRep.addEventListener("click", () => {
      showCandidateWorkspace(cand.id);
    });
  }

  // Bind stage shifts
  const mTech = document.getElementById("btn-other-action-move-tech");
  if (mTech) {
    mTech.addEventListener("click", () => {
      cand.decision = "Proceed";
      showToast(`Moved ${cand.name} to Technical live interview stage.`, "success");
      updateTabBadges();
      switchTab("technical-round");
      openScheduleModal(null, false, cand.name, cand.role);
    });
  }

  const mFinal = document.getElementById("btn-other-action-move-final");
  if (mFinal) {
    mFinal.addEventListener("click", () => {
      cand.decision = "Final Submission";
      showToast(`Shortlisted ${cand.name} for Final Submission round.`, "success");
      updateTabBadges();
      renderOtherStagesTable();
      updateOtherActionPanel();
    });
  }

  const mHold = document.getElementById("btn-other-action-move-hold");
  if (mHold) {
    mHold.addEventListener("click", () => {
      cand.decision = "On Hold";
      showToast(`Moved ${cand.name} to On Hold list.`, "info");
      updateTabBadges();
      renderOtherStagesTable();
      updateOtherActionPanel();
    });
  }

  const mRej = document.getElementById("btn-other-action-move-reject");
  if (mRej) {
    mRej.addEventListener("click", () => {
      cand.decision = "Rejected";
      showToast(`Moved ${cand.name} to Rejected folder.`, "danger");
      updateTabBadges();
      renderOtherStagesTable();
      updateOtherActionPanel();
    });
  }

  // Bind delete
  const delBtn = document.getElementById("btn-other-action-delete");
  if (delBtn) {
    delBtn.addEventListener("click", () => {
      if (confirm(`Permanently delete ${cand.name} application record?`)) {
        candidates = candidates.filter(c => c.id !== cand.id);
        activeOtherCandidateId = null;
        showToast("Candidate deleted successfully.", "danger");
        updateTabBadges();
        renderOtherStagesTable();
        updateOtherActionPanel();
      }
    });
  }
}

// ── Candidate Review Workspace ────────────────────────────
function showCandidateWorkspace(candidateId) {
  const cand = candidates.find(c => c.id === candidateId);
  if (!cand) return;

  activeCandidateId = candidateId;
  wsCurrentQuestionIndex = 0;
  wsVideoProgressPercentage = 0;
  isWsVideoPlaying = false;
  clearInterval(wsVideoPlaybackInterval);

  originalUrlParams = window.location.search;

  // Open the full-page review drawer overlay (slide from right 100vw)
  const overlay = document.getElementById("workspace-review-overlay");
  if (overlay) {
    overlay.style.display = "block";
    // Trigger slide-in transition
    setTimeout(() => {
      overlay.classList.add("active");
      const drawer = overlay.querySelector(".mp-drawer");
      if (drawer) drawer.style.right = "0";
    }, 10);
  }

  // Update URL Search Param (deep linking style)
  const newParams = new URLSearchParams();
  newParams.set("search", candidateId);
  window.history.replaceState({}, "", `${window.location.pathname}?${newParams.toString()}`);

  // Populate Review Details
  const avatarEl = document.getElementById("ws-avatar");
  if (avatarEl) {
    avatarEl.textContent = getInitials(cand.name);
    avatarEl.style.background = getAvatarGradient(cand.name);
  }

  document.getElementById("ws-name").textContent = cand.name;
  document.getElementById("ws-email").textContent = cand.email;
  document.getElementById("ws-role").textContent = cand.role;

  const statusEl = document.getElementById("ws-status");
  if (statusEl) {
    statusEl.textContent = cand.status === "Screening Completed" ? "Completed" : cand.status;
    let statusClass = "screening-completed";
    if (cand.status === "Invite Sent") statusClass = "invite-sent";
    else if (cand.status === "Screening In Progress") statusClass = "screening-in-progress";
    statusEl.className = `status-pill ${statusClass}`;
  }

  // Progress Bar
  const progressPercent = cand.status === "Screening Completed" ? 100 : (cand.status === "Screening In Progress" ? 50 : 0);
  const progressBar = document.getElementById("ws-progress-bar");
  const progressText = document.getElementById("ws-progress-text");
  if (progressBar) progressBar.style.width = `${progressPercent}%`;
  if (progressText) progressText.textContent = `${progressPercent}%`;

  document.getElementById("ws-profile-phone").textContent = cand.phone || "N/A";
  document.getElementById("ws-profile-location").textContent = cand.location || "N/A";
  document.getElementById("ws-resume-summary").textContent = cand.resumeSummary || "Resume attachment summary loading...";

  // Skills
  const skillsContainer = document.getElementById("ws-skills-container");
  if (skillsContainer) {
    skillsContainer.innerHTML = "";
    if (cand.skills && cand.skills.length > 0) {
      cand.skills.forEach(skill => {
        const span = document.createElement("span");
        span.className = "pm-dept-chip";
        span.style.fontWeight = "600";
        span.textContent = skill;
        skillsContainer.appendChild(span);
      });
    } else {
      skillsContainer.innerHTML = `<span style="font-style: italic; color: var(--text-secondary);">No skills indexed.</span>`;
    }
  }

  // Experience
  const expContainer = document.getElementById("ws-experience-container");
  if (expContainer) {
    expContainer.innerHTML = "";
    if (cand.experience && cand.experience.length > 0) {
      cand.experience.forEach(exp => {
        const item = document.createElement("div");
        item.style.marginBottom = "8px";
        item.innerHTML = `
          <div style="font-weight: 600; color: var(--text-primary); font-size:12.5px;">${exp.title}</div>
          <div style="font-size:11px; color: var(--text-secondary);">${exp.company} · ${exp.duration}</div>
        `;
        expContainer.appendChild(item);
      });
    } else {
      expContainer.innerHTML = `<div style="font-style: italic; color: var(--text-secondary);">No experience logged.</div>`;
    }
  }

  // AI Summary Details
  document.getElementById("ws-ai-summary").textContent = cand.notes || "AI summary evaluation logging...";

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

  // Radial Screening Score
  const scoreInt = cand.overallScore ? parseInt(cand.overallScore) : 0;
  const radialProgress = document.getElementById("ws-radial-progress");
  const scorePercentText = document.getElementById("ws-score-percent");
  const scoreBadge = document.getElementById("ws-score-badge");

  if (scorePercentText) scorePercentText.textContent = `${scoreInt}%`;

  let strokeColor = "#E24B4A"; // rejected
  let badgeBg = "#FEF0EF";
  let badgeColor = "#E24B4A";
  let badgeText = cand.overallBadge || "Requires review";

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

  // Competency Radar Chart
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

  // Recruiter Decision
  document.getElementById("ws-decision-notes").value = "";
  document.querySelectorAll(".decision-button").forEach(btn => {
    btn.classList.remove("selected");
    if (btn.dataset.decision === cand.decision) {
      btn.classList.add("selected");
    } else if (cand.decision === "Proceed" && btn.dataset.decision === "Technical") {
      btn.classList.add("selected");
    }
  });

  // Activity Timeline
  const actContainer = document.getElementById("ws-activity-container");
  if (actContainer) {
    actContainer.innerHTML = "";
    const timeline = cand.timeline || [];
    if (timeline.length > 0) {
      timeline.forEach(event => {
        const item = document.createElement("div");
        item.style.marginBottom = "8px";
        item.innerHTML = `
          <div style="font-weight: 600; color: var(--text-primary); font-size:12.5px;">${event.event}</div>
          <div style="font-size:11px; color: var(--text-secondary);">${event.date} · ${event.details}</div>
        `;
        actContainer.appendChild(item);
      });
    } else {
      actContainer.innerHTML = `<div style="font-style: italic; color: var(--text-secondary);">No timeline logs.</div>`;
    }
  }

  // Question Navigation pills
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
        pill.style.fontSize = "11.5px";
        pill.style.borderColor = idx === wsCurrentQuestionIndex ? "var(--active-nav-bg)" : "#D1D9E8";
        pill.style.backgroundColor = idx === wsCurrentQuestionIndex ? "rgba(29, 158, 117, 0.08)" : "#FFF";
        pill.style.color = idx === wsCurrentQuestionIndex ? "#127454" : "var(--text-secondary)";
        pill.textContent = `Q${idx + 1}: ${q.substring(0, 20)}${q.length > 20 ? "..." : ""}`;
        
        pill.addEventListener("click", () => {
          seekWsVideoToQuestion(idx);
        });
        wsQuestionPills.appendChild(pill);
      });
    }
  }

  // Video Question markers inside timeline
  const timelineContainer = document.getElementById("ws-vid-timeline");
  if (timelineContainer) {
    // Remove old markers
    timelineContainer.querySelectorAll(".custom-video-timeline-marker").forEach(m => m.remove());
    // Add markers
    const questionsCount = cand.questions ? cand.questions.length : 1;
    for (let i = 0; i < questionsCount; i++) {
      const marker = document.createElement("div");
      marker.className = "custom-video-timeline-marker";
      const pct = (i / questionsCount) * 100;
      marker.style.left = `${pct}%`;
      marker.style.position = "absolute";
      marker.style.width = "4px";
      marker.style.height = "100%";
      marker.style.backgroundColor = "#FFF";
      marker.style.opacity = "0.6";
      marker.style.cursor = "pointer";
      marker.title = `Seek to Q${i + 1}`;
      
      marker.addEventListener("click", (e) => {
        e.stopPropagation();
        seekWsVideoToQuestion(i);
      });
      timelineContainer.appendChild(marker);
    }
  }

  // Dialogue Transcript Chat bubbles
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
          <div class="chat-bubble-avatar ${isBot ? 'bot' : ''}" style="background: ${avatarColor}">${initials}</div>
          <div style="display: flex; flex-direction: column; gap: 4px; flex-grow: 1;">
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <span style="font-weight: 700; font-size: 11.5px; color: var(--text-primary);">${isBot ? t.speaker : cand.name}</span>
              <span style="font-size: 10px; color: var(--text-secondary); font-family: var(--font-mono);">${isBot ? (idx === 0 ? "0:00" : (idx === 2 ? "1:15" : "2:05")) : ""}</span>
            </div>
            <div class="transcript-answer-text ${isBot ? 'bot-text' : 'candidate-text'}" style="font-size: 12px; line-height: 1.5; color: var(--text-primary);">
              ${t.text}
            </div>
          </div>
        `;
        
        // Link transcript bubbles to seeking
        const qIdx = Math.floor(idx / 2);
        card.addEventListener("click", () => {
          seekWsVideoToQuestion(qIdx);
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

  const overlay = document.getElementById("workspace-review-overlay");
  if (overlay) {
    overlay.classList.remove("active");
    const drawer = overlay.querySelector(".mp-drawer");
    if (drawer) drawer.style.right = "-100vw";
    setTimeout(() => { overlay.style.display = "none"; }, 300);
  }

  // Restore Title & URL
  document.title = `Candidates Directory | KadelLabs ATS`;
  window.history.replaceState({}, "", `${window.location.pathname}${originalUrlParams || ""}`);

  // Reload lists
  renderBotScreeningTable();
  renderOtherStagesTable();
}

function seekWsVideoToQuestion(index) {
  if (!activeCandidateId) return;
  const cand = candidates.find(c => c.id === activeCandidateId);
  const questionsCount = cand && cand.questions ? cand.questions.length : 1;
  if (index >= 0 && index < questionsCount) {
    wsVideoProgressPercentage = (index / questionsCount) * 100 + 0.5;
    updateWsPlayerUI();
    wsCurrentQuestionIndex = index;
    updateWsQuestionSelection(cand);
  }
}

function updateWsQuestionSelection(cand) {
  const qArray = cand.questions || [];
  if (qArray.length === 0) return;

  if (wsCurrentQuestionIndex < 0) wsCurrentQuestionIndex = 0;
  if (wsCurrentQuestionIndex >= qArray.length) wsCurrentQuestionIndex = qArray.length - 1;

  const qBadge = document.getElementById("ws-vid-q-badge");
  const activeQuestionText = document.getElementById("ws-video-active-question-text");
  
  if (qBadge) qBadge.textContent = `Q${wsCurrentQuestionIndex + 1}`;
  if (activeQuestionText) activeQuestionText.textContent = qArray[wsCurrentQuestionIndex];

  // Highlight pills active state
  const wsQuestionPills = document.getElementById("ws-question-pills");
  if (wsQuestionPills) {
    wsQuestionPills.querySelectorAll("button").forEach((pill, idx) => {
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

  // Highlight active chat bubbles in transcript
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
  const sPad = s < 10 ? "0" + s : s;

  const totalM = Math.floor(videoDurationSeconds / 60);
  const totalS = videoDurationSeconds % 60;
  const totalSPad = totalS < 10 ? "0" + totalS : totalS;

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
      
      // Sync active question index based on progress
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

// ── Live Scheduler (Technical Round) ─────────────────────
function filterInterviews(f) {
  let list = interviews;
  if (f === "completed") {
    list = list.filter(i => i.status === "confirmed");
  } else if (f === "pending") {
    list = list.filter(i => i.status === "pending");
  } else if (f === "week") {
    list = list.filter(i => isThisWeek(i.date));
  }
  return list;
}

function isThisWeek(dateStrVal) {
  const d = new Date(dateStrVal + "T00:00:00");
  const ws = new Date(weekStart);
  const we = new Date(ws); we.setDate(ws.getDate() + 6);
  return d >= ws && d <= we;
}

function updateStats() {
  const allCount = interviews.length;
  const compCount = interviews.filter(i => i.status === "confirmed").length;
  const pendCount = interviews.filter(i => i.status === "pending").length;
  const weekCount = interviews.filter(i => isThisWeek(i.date)).length;

  document.getElementById("stat-all-num").textContent = allCount;
  document.getElementById("stat-completed-num").textContent = compCount;
  document.getElementById("stat-pending-num").textContent = pendCount;
  document.getElementById("stat-week-num").textContent = weekCount;
}

function renderCalendar() {
  updateStats();
  if (currentView === "week") renderWeekView();
  else renderMonthView();
}

function renderMonthView() {
  const filtered = filterInterviews(calendarFilter);
  const monthLabel = document.getElementById("cal-month-label");
  if (monthLabel) monthLabel.textContent = `${monthNames[currentMonth]} ${currentYear}`;

  const headers = document.getElementById("cal-day-headers");
  if (headers) {
    headers.className = "cal-day-headers";
    headers.innerHTML = dayAbbr.map(d => `<div class="cal-day-hdr">${d}</div>`).join("");
  }

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const prevDays = new Date(currentYear, currentMonth, 0).getDate();
  const todayStr = dateStr(today.getFullYear(), today.getMonth(), today.getDate());

  const container = document.getElementById("cal-days");
  if (!container) return;
  container.className = "cal-days";
  container.innerHTML = "";

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

    const isToday = ds === todayStr;
    const isWeekend = i % 7 === 0 || i % 7 === 6;
    const dayEvents = filtered.filter(iv => iv.date === ds);

    const cell = document.createElement("div");
    cell.className = "cal-day" +
      (isOther ? " other-month" : "") +
      (isToday ? " today" : "") +
      (isWeekend ? " weekend" : "");

    // Number badge
    const numWrap = document.createElement("div");
    numWrap.className = "cal-day-num-wrap";
    const numEl = document.createElement("span");
    numEl.className = "cal-day-num" + (isToday ? " today-badge" : "");
    numEl.textContent = dn;
    numWrap.appendChild(numEl);
    cell.appendChild(numWrap);

    // Event chips
    const showMax = 2;
    dayEvents.slice(0, showMax).forEach(iv => {
      const ev = document.createElement("div");
      ev.className = `cal-event ${iv.status}`;

      const timeSpan = document.createElement("span");
      timeSpan.className = "cal-event-time";
      timeSpan.textContent = formatTime(iv.time);

      const nameSpan = document.createElement("span");
      nameSpan.className = "cal-event-name";
      nameSpan.textContent = iv.candidate.split(" ")[0] + " · " + iv.role.split(" ")[0];

      ev.appendChild(timeSpan);
      ev.appendChild(nameSpan);
      ev.title = `${iv.candidate} — ${iv.role} @ ${formatTime(iv.time)}`;
      ev.addEventListener("click", e => {
        e.stopPropagation();
        openEventPopup(iv.id);
      });
      cell.appendChild(ev);
    });

    if (dayEvents.length > showMax) {
      const more = document.createElement("div");
      more.style.fontSize = "8.5px";
      more.style.fontWeight = "700";
      more.style.color = "var(--text-secondary)";
      more.style.paddingLeft = "4px";
      more.style.marginTop = "2px";
      more.textContent = `+${dayEvents.length - showMax} more`;
      cell.appendChild(more);
    }

    // Double-click cell triggers scheduling modal with this date
    cell.addEventListener("dblclick", () => {
      openScheduleModal(null, false, "", "", ds);
    });

    container.appendChild(cell);
  }
}

function renderWeekView() {
  const filtered = filterInterviews(calendarFilter);
  const ws = new Date(weekStart);
  const we = new Date(ws); we.setDate(ws.getDate() + 6);

  const monthLabel = document.getElementById("cal-month-label");
  if (monthLabel) {
    const opts = { day: "numeric", month: "short" };
    monthLabel.textContent = ws.toLocaleDateString("en-IN", opts) + " – " + we.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  }

  const todayStr = dateStr(today.getFullYear(), today.getMonth(), today.getDate());
  const headers = document.getElementById("cal-day-headers");
  if (headers) {
    headers.className = "cal-day-headers week-headers";
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

  const container = document.getElementById("cal-days");
  if (!container) return;
  container.className = "cal-days week-grid";
  container.innerHTML = "";

  for (let h = WEEK_START_HOUR; h <= WEEK_END_HOUR; h++) {
    const timeCell = document.createElement("div");
    timeCell.className = "week-time-cell";
    timeCell.textContent = h === 12 ? "12 PM" : h > 12 ? `${h - 12} PM` : `${h} AM`;
    container.appendChild(timeCell);

    for (let col = 0; col < 7; col++) {
      const d = new Date(ws); d.setDate(ws.getDate() + col);
      const ds = dateStr(d.getFullYear(), d.getMonth(), d.getDate());
      const isToday = ds === todayStr;
      const isWeekend = col === 0 || col === 6;

      const slot = document.createElement("div");
      slot.className = "week-slot" +
        (isToday ? " today-slot" : "") +
        (isWeekend ? " weekend-slot" : "");
      slot.style.height = SLOT_H + "px";

      if (h < WEEK_END_HOUR) {
        const slotEvs = filtered.filter(iv => {
          if (iv.date !== ds) return false;
          const [eh] = iv.time.split(":").map(Number);
          return eh === h;
        });

        slotEvs.forEach(iv => {
          const [eh, emin] = iv.time.split(":").map(Number);
          const topPx = (emin / 60) * SLOT_H;
          const heightPx = Math.max(((iv.duration / 60) * SLOT_H) - 3, 22);

          const ev = document.createElement("div");
          ev.className = `week-event ${iv.status}`;
          ev.style.top = topPx + "px";
          ev.style.height = heightPx + "px";
          ev.innerHTML = `
            <span class="week-ev-time">${formatTime(iv.time)}</span>
            <span class="week-ev-name" style="font-weight:700;">${iv.candidate.split(' ')[0]}</span>
            <span class="week-ev-role" style="font-size:8.5px; opacity:0.8;">${iv.role.substring(0, 14)}</span>`;
          
          ev.title = `${iv.candidate} — ${iv.role} @ ${formatTime(iv.time)}`;
          ev.addEventListener("click", e => {
            e.stopPropagation();
            openEventPopup(iv.id);
          });
          slot.appendChild(ev);
        });
      }

      // dblclick slot triggers modal
      slot.addEventListener("dblclick", () => {
        const timeVal = `${String(h).padStart(2, '0')}:00`;
        openScheduleModal(null, false, "", "", ds, timeVal);
      });

      container.appendChild(slot);
    }
  }

  // Draw current time red line if today is within weekStart
  const nowDate = dateStr(today.getFullYear(), today.getMonth(), today.getDate());
  const nowH = today.getHours(); const nowMin = today.getMinutes();
  if (nowH >= WEEK_START_HOUR && nowH < WEEK_END_HOUR) {
    for (let col = 0; col < 7; col++) {
      const d = new Date(ws); d.setDate(ws.getDate() + col);
      if (dateStr(d.getFullYear(), d.getMonth(), d.getDate()) === nowDate) {
        const rowIndex = nowH - WEEK_START_HOUR;
        const slotEls = container.querySelectorAll(".today-slot");
        if (slotEls[rowIndex]) {
          slotEls[rowIndex].style.position = "relative";
          const lineTop = (nowMin / 60) * SLOT_H;
          const line = document.createElement("div");
          line.style.cssText = `position:absolute;top:${lineTop}px;left:0;right:0;height:2px;background:#E24B4A;z-index:5;pointer-events:none;`;
          const dot = document.createElement("div");
          dot.style.cssText = "position:absolute;left:-4px;top:-3px;width:7px;height:7px;border-radius:50%;background:#E24B4A;";
          line.appendChild(dot);
          slotEls[rowIndex].appendChild(line);
        }
        break;
      }
    }
  }
}

// ── Upcoming Interviews Sidebar ──────────────────────────
function renderUpcomingList() {
  const container = document.getElementById("upcoming-list");
  if (!container) return;
  container.innerHTML = "";

  const list = interviews.filter(i => {
    const isFuture = new Date(i.date + "T" + i.time) >= new Date();
    return isFuture && i.status !== "cancelled";
  });

  // Sort upcoming chronologically
  list.sort((a, b) => new Date(a.date + "T" + a.time) - new Date(b.date + "T" + b.time));

  const countBadge = document.getElementById("upcoming-count-badge");
  if (countBadge) countBadge.textContent = list.length;

  if (list.length === 0) {
    container.innerHTML = `<div style="text-align: center; padding: 16px; color: var(--text-secondary); font-size:11.5px; font-style:italic;">No upcoming interviews.</div>`;
    return;
  }

  list.forEach(iv => {
    const item = document.createElement("div");
    item.className = "upcoming-item";
    item.addEventListener("click", () => openEventPopup(iv.id));

    const pAvatars = iv.panelists.map(pid => {
      const p = getPanelist(pid);
      if (!p) return "";
      return `<span class="pa-mini-avatar" style="background:${p.color || '#1B2B5E'};" title="${p.name}">${getInitials(p.name)}</span>`;
    }).join("");

    item.innerHTML = `
      <div class="upcoming-item-top">
        <span class="upcoming-cand-name">${iv.candidate}</span>
        <span class="upcoming-status-dot ${iv.status}"></span>
      </div>
      <div style="font-size:11px; color: var(--text-secondary); margin-bottom:4px;">${iv.role} · ${iv.format || 'Technical'} Round</div>
      <div class="upcoming-meta">
        <span class="upcoming-meta-tag">
          📅 ${formatDate(iv.date)}
        </span>
        <span class="upcoming-meta-tag">
          ⏰ ${formatTime(iv.time)}
        </span>
        <div class="panelist-avatars" style="margin-left: auto;">
          ${pAvatars}
        </div>
      </div>
      <div style="display:flex; justify-content:flex-end; gap:6px; margin-top:8px;">
        <button class="btn-join-sm" onclick="event.stopPropagation(); window.open('${iv.platformLink || '#'}', '_blank'); showToast('Opening interview video room...');">Join</button>
      </div>
    `;
    container.appendChild(item);
  });
}

// ── Panel Management (Availability / Tooltip / Directory) 
function renderPanelists() {
  const container = document.getElementById("panelists-list");
  if (!container) return;
  container.innerHTML = "";

  const searchVal = document.getElementById("pa-search-input") ? document.getElementById("pa-search-input").value.toLowerCase() : "";
  const deptVal = document.getElementById("pa-filter-dept") ? document.getElementById("pa-filter-dept").value : "all";

  let list = panelists;
  if (searchVal) {
    list = list.filter(p => p.name.toLowerCase().includes(searchVal) || p.skills.some(s => s.toLowerCase().includes(searchVal)));
  }
  if (deptVal !== "all") {
    list = list.filter(p => p.department === deptVal);
  }

  if (list.length === 0) {
    container.innerHTML = `<div style="text-align: center; padding: 14px; color: var(--text-secondary); font-size: 11px; font-style:italic;">No panelists found.</div>`;
    return;
  }

  list.forEach(p => {
    // Calculate workload (interviews assigned this week)
    const assignedCount = interviews.filter(i => i.panelists.includes(p.id) && isThisWeek(i.date) && i.status !== "cancelled").length;
    const loadPct = Math.min((assignedCount / 6) * 100, 100);
    
    // Choose workload fill color
    let barColor = "#0D7A57"; // normal load green
    if (assignedCount >= 5) barColor = "#E24B4A"; // heavy load red
    else if (assignedCount >= 3) barColor = "#F59E0B"; // medium load warning amber

    const row = document.createElement("div");
    row.className = "panelist-row-enhanced";

    // Weekly availability tooltip content
    let tooltipRowsHtml = "";
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
    days.forEach(day => {
      const slots = p.avail[day] || [0,0,0,0,0,0,0,0];
      const slotDots = slots.map(val => `<span class="avail-day-slot ${val === 1 ? 'free' : 'busy'}"></span>`).join("");
      tooltipRowsHtml += `
        <div class="avail-day-row">
          <span class="avail-day-label">${day}</span>
          <div class="avail-day-slots">${slotDots}</div>
        </div>
      `;
    });

    row.innerHTML = `
      <span class="pa-avail-indicator ${p.availabilityStatus}"></span>
      <div class="panelist-avatar-sm" style="background:${p.color || '#1B2B5E'};">${getInitials(p.name)}</div>
      <div class="pa-workload-wrap">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:12px; font-weight:600; color:var(--text-primary);">${p.name}</span>
          <span class="pa-workload-label">${assignedCount} scheduled</span>
        </div>
        <div class="pa-workload-bar-bg">
          <div class="pa-workload-bar-fill" style="width: ${loadPct}%; background: ${barColor};"></div>
        </div>
      </div>
      
      <!-- Availability Tooltip -->
      <div class="panelist-tooltip">
        <h6>${p.name} — Weekly Availability</h6>
        <div style="display:flex; flex-direction:column; gap:4px; margin-bottom:8px;">
          ${tooltipRowsHtml}
        </div>
        <div class="tooltip-legend">
          <span><span class="legend-dot free"></span> Available</span>
          <span><span class="legend-dot busy"></span> Occupied</span>
        </div>
      </div>
    `;
    container.appendChild(row);
  });
}

function renderPanelManagementDashboard() {
  const total = panelists.length;
  const avail = panelists.filter(p => p.availabilityStatus === "available").length;
  const busy = panelists.filter(p => p.availabilityStatus === "busy").length;
  const leave = panelists.filter(p => p.availabilityStatus === "on-leave").length;
  
  // Calculate total workload this week
  const weekCount = interviews.filter(i => isThisWeek(i.date) && i.status !== "cancelled").length;

  document.getElementById("kpi-total-panelists").textContent = total;
  document.getElementById("kpi-avail-today").textContent = avail;
  document.getElementById("kpi-busy-today").textContent = busy;
  document.getElementById("kpi-leave-today").textContent = leave;
  document.getElementById("kpi-assigned-week").textContent = weekCount;

  // Render Department pills counts
  const container = document.getElementById("pm-dept-pills");
  if (!container) return;
  container.innerHTML = "";

  const depts = ["Engineering", "Product", "HR", "Design"];
  const colors = { Engineering: "#1B2B5E", Product: "#D97706", HR: "#1D9E75", Design: "#7C3AED" };

  depts.forEach(dept => {
    const count = panelists.filter(p => p.department === dept).length;
    const dotColor = colors[dept] || "var(--active-nav-bg)";
    const chip = document.createElement("span");
    chip.className = "pm-dept-chip";
    chip.innerHTML = `
      <span class="dept-dot" style="background-color: ${dotColor}"></span>
      ${dept} (${count})
    `;
    container.appendChild(chip);
  });
}

function renderPanelistDirectory() {
  const container = document.getElementById("dir-grid-container");
  if (!container) return;
  container.innerHTML = "";

  const searchVal = document.getElementById("dir-search-input") ? document.getElementById("dir-search-input").value.toLowerCase() : "";
  const deptVal = document.getElementById("dir-filter-dept") ? document.getElementById("dir-filter-dept").value : "all";

  let list = panelists;
  if (searchVal) {
    list = list.filter(p => 
      p.name.toLowerCase().includes(searchVal) || 
      p.skills.some(s => s.toLowerCase().includes(searchVal)) || 
      p.title.toLowerCase().includes(searchVal)
    );
  }
  if (deptVal !== "all") {
    list = list.filter(p => p.department === deptVal);
  }

  document.getElementById("dir-count-badge").textContent = list.length;

  if (list.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 24px; font-size:12.5px; color: var(--text-secondary); font-style:italic;">No interviewers indexed for directory search.</div>`;
    return;
  }

  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "dir-card";

    // Skills chips
    const skillsHtml = p.skills.slice(0, 3).map(s => `<span class="dir-skill-chip">${s}</span>`).join("");
    const typeChips = p.interviewTypes.map(t => `<span class="dir-type-chip">${t}</span>`).join("");
    
    // Workload count
    const assignedCount = interviews.filter(i => i.panelists.includes(p.id) && i.status !== "cancelled").length;

    card.innerHTML = `
      <div class="dir-card-top">
        <div class="dir-avatar" style="background:${p.color || '#1B2B5E'};">${getInitials(p.name)}</div>
        <div class="dir-card-info">
          <div class="dir-card-name">${p.name}</div>
          <div class="dir-card-role">${p.title}</div>
          <div class="dir-card-dept">${p.department}</div>
        </div>
        <span class="dir-avail-badge ${p.availabilityStatus}">
          <span class="dir-avail-dot"></span>
          ${p.availabilityStatus}
        </span>
      </div>
      
      <div class="dir-skills">
        ${skillsHtml}
        ${p.skills.length > 3 ? `<span class="dir-skill-chip">+${p.skills.length - 3}</span>` : ""}
      </div>
      
      <div class="dir-interview-types">
        ${typeChips}
      </div>

      <div class="dir-card-footer">
        <span class="dir-upcoming-count">
          📅 ${assignedCount} interviews assigned
        </span>
        
        <div class="dir-actions">
          <button class="dir-action-btn" title="Edit panelist profile" onclick="editPanelistProfile('${p.id}')">
            ✏️
          </button>
          <button class="dir-action-btn danger" title="Remove interviewer" onclick="deletePanelistProfile('${p.id}')">
            🗑️
          </button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function editPanelistProfile(id) {
  const p = panelists.find(p => p.id === id);
  if (!p) return;

  editingInterviewId = null; // We are editing panelist, not scheduling
  activeCandidateId = id; // Store id of panelist being edited in activeCandidateId for reference

  document.getElementById("mp-drawer-title").textContent = "Edit Panelist Profile";
  document.getElementById("mp-name").value = p.name;
  document.getElementById("mp-title").value = p.title;
  document.getElementById("mp-department").value = p.department;
  document.getElementById("mp-email").value = p.email;
  document.getElementById("mp-timezone").value = p.timezone || "IST";

  // Availability
  selectedAvailabilityStatus = p.availabilityStatus;
  document.querySelectorAll(".mp-avail-btn").forEach(btn => {
    btn.classList.toggle("active-avail", btn.dataset.status === p.availabilityStatus && p.availabilityStatus === "available");
    btn.classList.toggle("active-busy", btn.dataset.status === p.availabilityStatus && p.availabilityStatus === "busy");
    btn.classList.toggle("active-leave", btn.dataset.status === p.availabilityStatus && p.availabilityStatus === "on-leave");
  });

  // Skills
  selectedSkills = [...p.skills];
  renderSkillsTags();

  // Formats Mapped
  selectedInterviewTypes = [...p.interviewTypes];
  document.querySelectorAll(".mp-type-btn").forEach(btn => {
    btn.classList.toggle("active", selectedInterviewTypes.includes(btn.dataset.type));
  });

  openMPDrawer();
}

function deletePanelistProfile(id) {
  const p = panelists.find(p => p.id === id);
  if (!p) return;

  if (confirm(`Remove panelist ${p.name} from directory database?`)) {
    panelists = panelists.filter(p => p.id !== id);
    showToast(`Removed panelist ${p.name} from panel registry.`, "info");
    renderPanelists();
    renderPanelManagementDashboard();
    renderPanelistDirectory();
  }
}

// ── Manage Panelists Drawer ──────────────────────────────
function renderSkillsTags() {
  const container = document.getElementById("mp-skills-tags-container");
  if (!container) return;
  container.innerHTML = "";
  selectedSkills.forEach((s, idx) => {
    const chip = document.createElement("span");
    chip.className = "mp-tag";
    chip.innerHTML = `
      ${s}
      <button onclick="removeSkillTag(${idx})">×</button>
    `;
    container.appendChild(chip);
  });
}

function removeSkillTag(idx) {
  selectedSkills.splice(idx, 1);
  renderSkillsTags();
}

function openMPDrawer() {
  const overlay = document.getElementById("mp-drawer-overlay");
  if (overlay) overlay.classList.add("active");
}

function closeMPDrawer() {
  const overlay = document.getElementById("mp-drawer-overlay");
  if (overlay) overlay.classList.remove("active");
  clearMPForm();
}

function clearMPForm() {
  document.getElementById("mp-drawer-title").textContent = "Add New Interview Panelist";
  document.getElementById("mp-name").value = "";
  document.getElementById("mp-title").value = "";
  document.getElementById("mp-department").value = "Engineering";
  document.getElementById("mp-email").value = "";
  document.getElementById("mp-timezone").value = "IST";
  selectedSkills = [];
  selectedInterviewTypes = [];
  selectedAvailabilityStatus = "available";
  activeCandidateId = null; // Reset edit ref

  document.querySelectorAll(".mp-type-btn").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".mp-avail-btn").forEach(btn => {
    btn.classList.toggle("active-avail", btn.dataset.status === "available");
    btn.classList.toggle("active-busy", false);
    btn.classList.toggle("active-leave", false);
  });
  renderSkillsTags();
}

// ── Schedule Interview Modal ─────────────────────────────
function openScheduleModal(interviewId = null, focusPanelists = false, prefillName = "", prefillRole = "", prefillDate = "", prefillTime = "") {
  selectedModalPanelists = [];
  editingInterviewId = interviewId;

  const iv = interviewId ? interviews.find(i => i.id === interviewId) : null;
  const container = document.getElementById("sch-panelists-chips");
  if (container) {
    container.innerHTML = "";
    panelists.forEach(p => {
      const chip = document.createElement("div");
      chip.className = "panelist-chip-sel";
      chip.textContent = p.name;
      chip.dataset.pid = p.id;

      const isSel = iv ? iv.panelists.includes(p.id) : false;
      if (isSel) {
        chip.classList.add("selected");
        selectedModalPanelists.push(p.id);
      }

      chip.addEventListener("click", () => {
        chip.classList.toggle("selected");
        if (chip.classList.contains("selected")) {
          selectedModalPanelists.push(p.id);
        } else {
          selectedModalPanelists = selectedModalPanelists.filter(id => id !== p.id);
        }
        checkConflicts();
      });

      container.appendChild(chip);
    });
  }

  // Populate inputs
  const nameInput = document.getElementById("sch-candidate");
  const roleInput = document.getElementById("sch-role");
  const dateInput = document.getElementById("sch-date");
  const timeInput = document.getElementById("sch-time");
  const durationInput = document.getElementById("sch-duration");
  const formatInput = document.getElementById("sch-format");
  const notesInput = document.getElementById("sch-notes");
  const titleText = document.getElementById("schedule-modal-title");
  const submitBtn = document.getElementById("btn-save-schedule");

  if (iv) {
    if (nameInput) nameInput.value = iv.candidate;
    if (roleInput) roleInput.value = iv.role;
    if (dateInput) dateInput.value = iv.date;
    if (timeInput) timeInput.value = iv.time;
    if (durationInput) durationInput.value = iv.duration;
    if (formatInput) formatInput.value = iv.format || "Technical";
    if (notesInput) notesInput.value = iv.notes || "";
    if (titleText) titleText.textContent = "Reschedule Live Interview";
    if (submitBtn) submitBtn.textContent = "Update Schedule";

    selectedPlatform = iv.platform;
    document.querySelectorAll(".platform-btn").forEach(b => {
      b.classList.toggle("selected", b.dataset.platform === iv.platform);
    });
  } else {
    // Prefills or defaults
    if (nameInput) nameInput.value = prefillName;
    if (roleInput) roleInput.value = prefillRole;
    if (dateInput) dateInput.value = prefillDate || today.toISOString().split("T")[0];
    if (timeInput) timeInput.value = prefillTime || "10:00";
    if (durationInput) durationInput.value = "45";
    if (formatInput) formatInput.value = "Technical";
    if (notesInput) notesInput.value = "";
    if (titleText) titleText.textContent = "Schedule Live Interview";
    if (submitBtn) submitBtn.textContent = "Confirm Schedule";

    selectedPlatform = "Google Meet";
    document.querySelectorAll(".platform-btn").forEach(b => {
      b.classList.toggle("selected", b.dataset.platform === "Google Meet");
    });
  }

  checkConflicts();

  const overlay = document.getElementById("schedule-modal-overlay");
  if (overlay) overlay.classList.add("active");
}

function closeScheduleModal() {
  const overlay = document.getElementById("schedule-modal-overlay");
  if (overlay) overlay.classList.remove("active");
}

function checkConflicts() {
  const dateVal = document.getElementById("sch-date").value;
  const timeVal = document.getElementById("sch-time").value;
  const alertBox = document.getElementById("sch-conflict-alert");
  const msgText = document.getElementById("conflict-msg");

  if (!dateVal || !timeVal || selectedModalPanelists.length === 0) {
    if (alertBox) alertBox.classList.remove("show");
    return;
  }

  let conflicts = [];

  selectedModalPanelists.forEach(pid => {
    const p = getPanelist(pid);
    if (!p) return;

    // 1. Availability Status check
    if (p.availabilityStatus === "on-leave") {
      conflicts.push(`${p.name} is On Leave`);
      return;
    } else if (p.availabilityStatus === "busy") {
      conflicts.push(`${p.name} availability status is Busy`);
      return;
    }

    // 2. Calendar overlap check with other scheduled interviews at same date & time
    const matches = interviews.filter(i => 
      i.date === dateVal && 
      i.time === timeVal && 
      i.panelists.includes(p.id) &&
      i.id !== editingInterviewId &&
      i.status !== "cancelled"
    );

    if (matches.length > 0) {
      conflicts.push(`${p.name} has overlapping schedule (${matches[0].candidate} @ ${formatTime(matches[0].time)})`);
    }
  });

  if (conflicts.length > 0) {
    if (msgText) msgText.textContent = conflicts.join(", ");
    if (alertBox) alertBox.classList.add("show");
  } else {
    if (alertBox) alertBox.classList.remove("show");
  }
}

// ── Event Popup Detail Card ──────────────────────────────
function openEventPopup(ivId) {
  activeScheduledEventId = ivId;
  const iv = interviews.find(i => i.id === ivId);
  if (!iv) return;

  document.getElementById("popup-candidate-name").textContent = iv.candidate;
  document.getElementById("popup-role-tag").textContent = iv.role;
  document.getElementById("popup-datetime").textContent = formatDate(iv.date) + " at " + formatTime(iv.time);
  document.getElementById("popup-duration").textContent = `${iv.duration} min`;
  document.getElementById("popup-platform").textContent = iv.platform;

  const badge = document.getElementById("popup-status-badge");
  if (badge) {
    badge.textContent = iv.status === "confirmed" ? "Confirmed" : (iv.status === "pending" ? "Pending" : "Cancelled");
    badge.style.backgroundColor = iv.status === "confirmed" ? "#E6F7F2" : (iv.status === "pending" ? "#FEF3C7" : "#FEF0EF");
    badge.style.color = iv.status === "confirmed" ? "#0D7A57" : (iv.status === "pending" ? "#B45309" : "#E24B4A");
  }

  // Panelists chips
  const container = document.getElementById("popup-panelists");
  if (container) {
    container.innerHTML = "";
    iv.panelists.forEach(pid => {
      const p = getPanelist(pid);
      if (!p) return;
      const chip = document.createElement("span");
      chip.className = "popup-panelist-chip";
      chip.textContent = p.name;
      container.appendChild(chip);
    });
  }

  const overlay = document.getElementById("event-popup-overlay");
  if (overlay) overlay.classList.add("active");
}

function closeEventPopup() {
  const overlay = document.getElementById("event-popup-overlay");
  if (overlay) overlay.classList.remove("active");
  activeScheduledEventId = null;
}

// ── Initialization and Setup ─────────────────────────────
function setupCascadingDropdowns() {
  // Cascading Select for Send Bot Screening Invite Form
  const triggerDept = document.getElementById("select-dept-trigger");
  const optionsDept = document.getElementById("select-dept-options");
  const triggerSub = document.getElementById("select-subdept-trigger");
  const optionsSub = document.getElementById("select-subdept-options");
  const triggerRole = document.getElementById("select-role-trigger");
  const optionsRole = document.getElementById("select-role-options");
  const triggerCand = document.getElementById("select-candidate-trigger");
  const optionsCand = document.getElementById("select-candidate-options");

  const sendBtn = document.getElementById("btn-send-invite");

  // Render Dept Options
  if (optionsDept) {
    optionsDept.innerHTML = "";
    Object.keys(deptData).forEach(key => {
      const opt = document.createElement("div");
      opt.className = "select-option";
      opt.textContent = deptData[key].label;
      opt.addEventListener("click", () => {
        triggerDept.querySelector(".select-trigger-text").textContent = deptData[key].label;
        triggerDept.dataset.value = key;
        optionsDept.parentElement.classList.remove("open");
        
        // Reset sub, role, cand
        triggerSub.querySelector(".select-trigger-text").textContent = "Select Sub-Department";
        triggerSub.dataset.value = "";
        triggerRole.querySelector(".select-trigger-text").textContent = "Select Role";
        triggerRole.dataset.value = "";
        triggerCand.querySelector(".select-trigger-text").textContent = "Select Candidate";
        triggerCand.dataset.value = "";
        if (sendBtn) { sendBtn.disabled = true; sendBtn.style.opacity = "0.6"; sendBtn.style.cursor = "not-allowed"; }

        renderSubDepts(key);
      });
      optionsDept.appendChild(opt);
    });
  }

  function renderSubDepts(deptKey) {
    if (!optionsSub) return;
    optionsSub.innerHTML = "";
    const subs = deptData[deptKey].subDepts;
    Object.keys(subs).forEach(sKey => {
      const opt = document.createElement("div");
      opt.className = "select-option";
      opt.textContent = subs[sKey].label;
      opt.addEventListener("click", () => {
        triggerSub.querySelector(".select-trigger-text").textContent = subs[sKey].label;
        triggerSub.dataset.value = sKey;
        optionsSub.parentElement.classList.remove("open");
        
        // Reset role, cand
        triggerRole.querySelector(".select-trigger-text").textContent = "Select Role";
        triggerRole.dataset.value = "";
        triggerCand.querySelector(".select-trigger-text").textContent = "Select Candidate";
        triggerCand.dataset.value = "";
        if (sendBtn) { sendBtn.disabled = true; sendBtn.style.opacity = "0.6"; sendBtn.style.cursor = "not-allowed"; }

        renderRoles(deptKey, sKey);
      });
      optionsSub.appendChild(opt);
    });
  }

  function renderRoles(deptKey, subKey) {
    if (!optionsRole) return;
    optionsRole.innerHTML = "";
    const roles = deptData[deptKey].subDepts[subKey].roles || [];
    roles.forEach(roleName => {
      const opt = document.createElement("div");
      opt.className = "select-option";
      opt.textContent = roleName;
      opt.addEventListener("click", () => {
        triggerRole.querySelector(".select-trigger-text").textContent = roleName;
        triggerRole.dataset.value = roleName;
        optionsRole.parentElement.classList.remove("open");
        
        // Reset cand
        triggerCand.querySelector(".select-trigger-text").textContent = "Select Candidate";
        triggerCand.dataset.value = "";
        if (sendBtn) { sendBtn.disabled = true; sendBtn.style.opacity = "0.6"; sendBtn.style.cursor = "not-allowed"; }

        renderCandidates(roleName);
      });
      optionsRole.appendChild(opt);
    });
  }

  function renderCandidates(roleName) {
    if (!optionsCand) return;
    optionsCand.innerHTML = "";
    
    // Get prospective candidates or filter candidates whose status is Not Invited
    const prospects = prospectiveCandidates;
    prospects.forEach(c => {
      const opt = document.createElement("div");
      opt.className = "select-option";
      opt.textContent = `${c.name} (${c.email})`;
      opt.addEventListener("click", () => {
        triggerCand.querySelector(".select-trigger-text").textContent = c.name;
        triggerCand.dataset.value = c.email;
        optionsCand.parentElement.classList.remove("open");
        
        // Enable Send Button
        if (sendBtn) {
          sendBtn.disabled = false;
          sendBtn.style.opacity = "1";
          sendBtn.style.cursor = "pointer";
        }
      });
      optionsCand.appendChild(opt);
    });
  }

  // Toggle selects opens
  [triggerDept, triggerSub, triggerRole, triggerCand].forEach(tr => {
    if (!tr) return;
    tr.addEventListener("click", (e) => {
      e.stopPropagation();
      const panel = tr.nextElementSibling;
      const isOpen = panel.classList.contains("open");
      // close all panels
      document.querySelectorAll(".select-dropdown-panel").forEach(p => p.classList.remove("open"));
      if (!isOpen) panel.classList.add("open");
    });
  });

  // Bind searchable input searches
  document.querySelectorAll(".select-search-input").forEach(input => {
    input.addEventListener("input", () => {
      const val = input.value.toLowerCase();
      const list = input.nextElementSibling;
      if (!list) return;
      list.querySelectorAll(".select-option").forEach(opt => {
        const txt = opt.textContent.toLowerCase();
        opt.style.display = txt.includes(val) ? "block" : "none";
      });
    });
  });

  // Global click closes select panels
  document.addEventListener("click", () => {
    document.querySelectorAll(".select-dropdown-panel").forEach(p => p.classList.remove("open"));
  });
}

function initializeEvents() {
  // Tabs click handler
  document.querySelectorAll(".main-dashboard-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      switchTab(tab.dataset.tab);
    });
  });

  // Bot Interview search input
  const botSearch = document.getElementById("candidate-search-bot");
  if (botSearch) {
    botSearch.addEventListener("input", () => {
      searchBotQuery = botSearch.value;
      renderBotScreeningTable();
    });
  }

  // Other stages search input
  const otherSearch = document.getElementById("candidate-search-other");
  if (otherSearch) {
    otherSearch.addEventListener("input", () => {
      searchOtherQuery = otherSearch.value;
      renderOtherStagesTable();
    });
  }

  // Question Bank drawer events
  const navQB = document.getElementById("nav-question-bank");
  if (navQB) {
    navQB.addEventListener("click", (e) => {
      e.preventDefault();
      // Render Question Bank drawer
      const overlay = document.getElementById("questions-drawer-overlay");
      if (overlay) overlay.classList.add("active");
      updateQuestionsList();
    });
  }
  const closeQB = document.getElementById("close-questions-drawer");
  if (closeQB) {
    closeQB.addEventListener("click", () => {
      document.getElementById("questions-drawer-overlay").classList.remove("active");
    });
  }
  const saveQB = document.getElementById("btn-save-questions");
  if (saveQB) {
    saveQB.addEventListener("click", () => {
      document.getElementById("questions-drawer-overlay").classList.remove("active");
    });
  }

  // Manage Panelists drawer triggers
  const btnOpenMP = document.getElementById("btn-open-mp-drawer");
  if (btnOpenMP) {
    btnOpenMP.addEventListener("click", () => {
      clearMPForm();
      openMPDrawer();
    });
  }
  const closeMP = document.getElementById("close-mp-drawer");
  if (closeMP) closeMP.addEventListener("click", closeMPDrawer);
  const btnCancelMP = document.getElementById("btn-cancel-mp");
  if (btnCancelMP) btnCancelMP.addEventListener("click", closeMPDrawer);

  const btnOpenSchedule = document.getElementById("btn-open-schedule-modal");
  if (btnOpenSchedule) {
    btnOpenSchedule.addEventListener("click", () => {
      openScheduleModal();
    });
  }
  const closeSchedule = document.getElementById("close-schedule-modal");
  if (closeSchedule) closeSchedule.addEventListener("click", closeScheduleModal);
  const btnCancelSchedule = document.getElementById("btn-cancel-schedule");
  if (btnCancelSchedule) btnCancelSchedule.addEventListener("click", closeScheduleModal);

  // platform btns toggle
  document.querySelectorAll(".platform-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".platform-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      selectedPlatform = btn.dataset.platform;
    });
  });

  // Availability inputs in panelist drawer
  document.querySelectorAll(".mp-avail-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".mp-avail-btn").forEach(b => {
        b.classList.remove("active-avail", "active-busy", "active-leave");
      });
      selectedAvailabilityStatus = btn.dataset.status;
      btn.classList.add(selectedAvailabilityStatus === "available" ? "active-avail" : (selectedAvailabilityStatus === "busy" ? "active-busy" : "active-leave"));
    });
  });

  // Mapping formats toggles in panelist drawer
  document.querySelectorAll(".mp-type-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      const val = btn.dataset.type;
      if (btn.classList.contains("active")) {
        if (!selectedInterviewTypes.includes(val)) selectedInterviewTypes.push(val);
      } else {
        selectedInterviewTypes = selectedInterviewTypes.filter(t => t !== val);
      }
    });
  });

  // Skills tag press enter in panelist drawer
  const skillInp = document.getElementById("mp-skills-input");
  if (skillInp) {
    skillInp.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const val = skillInp.value.trim();
        if (val && !selectedSkills.includes(val)) {
          selectedSkills.push(val);
          renderSkillsTags();
          skillInp.value = "";
        }
      }
    });
  }

  // Save Panelist
  const saveMPBtn = document.getElementById("btn-save-mp");
  if (saveMPBtn) {
    saveMPBtn.addEventListener("click", () => {
      const name = document.getElementById("mp-name").value.trim();
      const title = document.getElementById("mp-title").value.trim();
      const dept = document.getElementById("mp-department").value;
      const email = document.getElementById("mp-email").value.trim();
      const zone = document.getElementById("mp-timezone").value;

      if (!name || !title || !email) {
        showToast("Please fill in all required fields marked with *.", "warning");
        return;
      }

      if (activeCandidateId) {
        // Edit panelist
        const p = panelists.find(p => p.id === activeCandidateId);
        if (p) {
          p.name = name;
          p.title = title;
          p.department = dept;
          p.email = email;
          p.timezone = zone;
          p.skills = [...selectedSkills];
          p.interviewTypes = [...selectedInterviewTypes];
          p.availabilityStatus = selectedAvailabilityStatus;
          showToast(`Successfully updated panelist profile for ${name}.`, "success");
        }
      } else {
        // Add new panelist
        const newP = {
          id: "p" + (panelists.length + 1),
          name: name,
          title: title,
          department: dept,
          email: email,
          timezone: zone,
          color: avatarGradients[panelists.length % avatarGradients.length],
          skills: selectedSkills.length > 0 ? [...selectedSkills] : ["General"],
          interviewTypes: selectedInterviewTypes.length > 0 ? [...selectedInterviewTypes] : ["Technical"],
          availabilityStatus: selectedAvailabilityStatus,
          avail: { 
            Mon: [1,1,1,1,1,1,1,1], 
            Tue: [1,1,1,1,1,1,1,1], 
            Wed: [1,1,1,1,1,1,1,1], 
            Thu: [1,1,1,1,1,1,1,1], 
            Fri: [1,1,1,1,1,1,1,1] 
          }
        };
        panelists.push(newP);
        showToast(`Registered new interviewer ${name} to directory.`, "success");
      }

      closeMPDrawer();
      renderPanelists();
      renderPanelManagementDashboard();
      renderPanelistDirectory();
    });
  }

  // Save Schedule Live Interview
  const saveSchBtn = document.getElementById("btn-save-schedule");
  if (saveSchBtn) {
    saveSchBtn.addEventListener("click", () => {
      const candName = document.getElementById("sch-candidate").value.trim();
      const role = document.getElementById("sch-role").value.trim();
      const date = document.getElementById("sch-date").value;
      const time = document.getElementById("sch-time").value;
      const duration = parseInt(document.getElementById("sch-duration").value) || 45;
      const format = document.getElementById("sch-format").value;
      const notes = document.getElementById("sch-notes").value.trim();

      if (!candName || !role || !date || !time) {
        showToast("Please fill in Candidate Name, Role, Date and Time.", "warning");
        return;
      }

      if (selectedModalPanelists.length === 0) {
        showToast("Please assign at least one panelist to conduct the round.", "warning");
        return;
      }

      if (editingInterviewId) {
        // Edit Schedule
        const iv = interviews.find(i => i.id === editingInterviewId);
        if (iv) {
          iv.candidate = candName;
          iv.role = role;
          iv.date = date;
          iv.time = time;
          iv.duration = duration;
          iv.format = format;
          iv.platform = selectedPlatform;
          iv.panelists = [...selectedModalPanelists];
          iv.notes = notes;
          showToast(`Updated interview schedule details for ${candName}.`, "success");
        }
      } else {
        // Add Schedule
        const newIv = {
          id: "i" + (interviews.length + 1),
          candidate: candName,
          role: role,
          date: date,
          time: time,
          duration: duration,
          format: format,
          platform: selectedPlatform,
          platformLink: selectedPlatform === "Zoom" ? "https://zoom.us/j/999888777" : "https://meet.google.com/abc-xyz-123",
          panelists: [...selectedModalPanelists],
          status: "confirmed",
          department: "Engineering",
          notes: notes
        };
        interviews.push(newIv);
        showToast(`Live ${format} round scheduled for ${candName}.`, "success");
      }

      closeScheduleModal();
      updateTabBadges();
      renderCalendar();
      renderUpcomingList();
      renderPanelists();
      renderPanelManagementDashboard();
    });
  }

  // Popup modal actions
  document.getElementById("popup-btn-cancel").addEventListener("click", () => {
    if (activeScheduledEventId) {
      const iv = interviews.find(i => i.id === activeScheduledEventId);
      if (iv) {
        if (confirm(`Cancel scheduled interview with ${iv.candidate}?`)) {
          iv.status = "cancelled";
          showToast("Interview cancelled successfully.", "info");
          closeEventPopup();
          updateTabBadges();
          renderCalendar();
          renderUpcomingList();
          renderPanelists();
          renderPanelManagementDashboard();
        }
      }
    }
  });

  document.getElementById("popup-btn-reschedule").addEventListener("click", () => {
    if (activeScheduledEventId) {
      const id = activeScheduledEventId;
      closeEventPopup();
      openScheduleModal(id);
    }
  });

  document.getElementById("popup-btn-join").addEventListener("click", () => {
    if (activeScheduledEventId) {
      const iv = interviews.find(i => i.id === activeScheduledEventId);
      if (iv) {
        window.open(iv.platformLink || "#", "_blank");
        showToast("Joining scheduled video call...", "success");
        closeEventPopup();
      }
    }
  });

  document.getElementById("event-popup-overlay").addEventListener("click", closeEventPopup);
  document.querySelector(".event-popup").addEventListener("click", (e) => e.stopPropagation());

  // Workspace overlay close buttons
  document.getElementById("workspace-review-back-btn").addEventListener("click", hideCandidateWorkspace);
  
  // Workspace player play toggles
  document.getElementById("ws-playback-state-icon").addEventListener("click", toggleWsVideoPlayback);
  document.getElementById("ws-vid-btn-play-toggle").addEventListener("click", toggleWsVideoPlayback);

  // Prev/Next Q seeking
  document.getElementById("ws-vid-prev-q").addEventListener("click", () => {
    if (activeCandidateId && wsCurrentQuestionIndex > 0) {
      seekWsVideoToQuestion(wsCurrentQuestionIndex - 1);
    }
  });

  document.getElementById("ws-vid-next-q").addEventListener("click", () => {
    if (activeCandidateId) {
      const cand = candidates.find(c => c.id === activeCandidateId);
      const qCount = cand && cand.questions ? cand.questions.length : 0;
      if (wsCurrentQuestionIndex < qCount - 1) {
        seekWsVideoToQuestion(wsCurrentQuestionIndex + 1);
      }
    }
  });

  // Timeline click seek
  document.getElementById("ws-vid-timeline").addEventListener("click", (e) => {
    const wsTimeline = document.getElementById("ws-vid-timeline");
    const rect = wsTimeline.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = (clickX / rect.width) * 100;
    wsVideoProgressPercentage = Math.max(0, Math.min(100, percentage));

    if (activeCandidateId) {
      const cand = candidates.find(c => c.id === activeCandidateId);
      const qCount = cand && cand.questions ? cand.questions.length : 1;
      const chunk = 100 / qCount;
      let activeQIdx = Math.floor(wsVideoProgressPercentage / chunk);
      if (activeQIdx >= qCount) activeQIdx = qCount - 1;
      if (activeQIdx < 0) activeQIdx = 0;
      wsCurrentQuestionIndex = activeQIdx;
      updateWsQuestionSelection(cand);
    }
    updateWsPlayerUI();
  });

  // Video Speed selector
  document.getElementById("ws-vid-speed-select").addEventListener("change", () => {
    if (isWsVideoPlaying) {
      clearInterval(wsVideoPlaybackInterval);
      isWsVideoPlaying = false;
      toggleWsVideoPlayback();
    }
  });

  // Fullscreen toggle
  document.getElementById("ws-vid-fullscreen-btn").addEventListener("click", () => {
    const wrapper = document.querySelector(".custom-video-screen");
    if (wrapper) {
      if (!document.fullscreenElement) {
        wrapper.requestFullscreen().catch(err => {
          showToast("Fullscreen disabled on this browser", "error");
        });
      } else {
        document.exitFullscreen();
      }
    }
  });

  // Reciprocal highlight decision buttons in workspace
  document.querySelectorAll(".decision-button").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".decision-button").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
    });
  });

  // Confirm Decision button in workspace
  document.getElementById("ws-confirm-decision-btn").addEventListener("click", () => {
    const activeBtn = document.querySelector(".decision-button.selected");
    const decision = activeBtn ? activeBtn.dataset.decision : "";
    const notesField = document.getElementById("ws-decision-notes");
    const notes = notesField ? notesField.value.trim() : "";

    if (activeCandidateId && decision) {
      const cand = candidates.find(c => c.id === activeCandidateId);
      if (cand) {
        // Map "Technical" button to Proceed decision state
        const mappedDecision = decision === "Technical" ? "Proceed" : (decision === "HR" ? "Proceed" : decision);
        cand.decision = mappedDecision;
        
        if (notes) {
          cand.notes = cand.notes ? cand.notes + "\n" + notes : notes;
        }

        showToast(`Decision updated to ${mappedDecision}.`, "success");
        if (notesField) notesField.value = "";

        hideCandidateWorkspace();
        updateTabBadges();
        
        if (mappedDecision === "Proceed") {
          switchTab("technical-round");
          openScheduleModal(null, false, cand.name, cand.role);
        } else if (mappedDecision === "On Hold") {
          switchTab("on-hold");
        } else if (mappedDecision === "Rejected") {
          switchTab("rejected");
        } else {
          switchTab("final-submission");
        }
      }
    } else {
      showToast("Please select a decision stage button first.", "warning");
    }
  });

  // Panel Availability quick search/filter
  const paSearch = document.getElementById("pa-search-input");
  if (paSearch) paSearch.addEventListener("input", renderPanelists);
  const paFilter = document.getElementById("pa-filter-dept");
  if (paFilter) paFilter.addEventListener("change", renderPanelists);

  // Panel Availability quick Add button
  document.getElementById("pa-quick-add-btn").addEventListener("click", () => {
    clearMPForm();
    openMPDrawer();
  });

  // Panelist Directory filters
  const dirSearch = document.getElementById("dir-search-input");
  if (dirSearch) dirSearch.addEventListener("input", renderPanelistDirectory);
  const dirFilter = document.getElementById("dir-filter-dept");
  if (dirFilter) dirFilter.addEventListener("change", renderPanelistDirectory);

  // Question Form Select Role changes
  const qSelect = document.getElementById("questions-role-select");
  if (qSelect) qSelect.addEventListener("change", updateQuestionsList);

  // Add question to bank button
  document.getElementById("btn-add-question").addEventListener("click", () => {
    const roleVal = document.getElementById("questions-role-select").value;
    const qInp = document.getElementById("new-question-input");
    const val = qInp ? qInp.value.trim() : "";

    if (!val) {
      showToast("Please enter a question string.", "warning");
      return;
    }

    if (!roleQuestions[roleVal]) roleQuestions[roleVal] = [];
    roleQuestions[roleVal].push(val);
    showToast("Added screening question to role.", "success");
    if (qInp) qInp.value = "";
    updateQuestionsList();
  });

  // Calendar prev/next buttons
  const calPrev = document.getElementById("cal-prev");
  if (calPrev) {
    calPrev.addEventListener("click", () => {
      if (currentView === "month") {
        currentMonth--;
        if (currentMonth < 0) { currentMonth = 11; currentYear--; }
      } else {
        weekStart.setDate(weekStart.getDate() - 7);
      }
      renderCalendar();
    });
  }
  const calNext = document.getElementById("cal-next");
  if (calNext) {
    calNext.addEventListener("click", () => {
      if (currentView === "month") {
        currentMonth++;
        if (currentMonth > 11) { currentMonth = 0; currentYear++; }
      } else {
        weekStart.setDate(weekStart.getDate() + 7);
      }
      renderCalendar();
    });
  }
  const calToday = document.getElementById("cal-today");
  if (calToday) {
    calToday.addEventListener("click", () => {
      currentMonth = today.getMonth();
      currentYear = today.getFullYear();
      weekStart = getWeekStartDate(today);
      renderCalendar();
    });
  }

  // Calendar view mode toggle
  document.querySelectorAll(".cal-view-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".cal-view-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentView = btn.dataset.view;
      renderCalendar();
    });
  });

  // Calendar statistic filter pills
  document.querySelectorAll(".stat-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".stat-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      calendarFilter = pill.dataset.filter;
      renderCalendar();
    });
  });

  // Keyboard shortcut listeners (Esc to close overlays, space to play/pause player)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeScheduleModal();
      closeMPDrawer();
      closeEventPopup();
      document.getElementById("questions-drawer-overlay").classList.remove("active");
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
      if (activeCandidateId) {
        hideCandidateWorkspace();
      }
    } else if (e.key === " " && activeCandidateId && e.target.tagName !== "TEXTAREA" && e.target.tagName !== "INPUT") {
      e.preventDefault();
      toggleWsVideoPlayback();
    }
  });

  // Send Bot Screening Invite Form Submission button
  const formSendBtn = document.getElementById("btn-send-invite");
  if (formSendBtn) {
    formSendBtn.addEventListener("click", () => {
      const role = document.getElementById("select-role-trigger").dataset.value;
      const cEmail = document.getElementById("select-candidate-trigger").dataset.value;
      const prospect = prospectiveCandidates.find(p => p.email === cEmail);

      if (!prospect || !role) return;

      // Register new candidate
      const newC = {
        id: "CAN-" + (1000 + candidates.length + 1),
        name: prospect.name,
        phone: prospect.phone,
        email: prospect.email,
        role: role,
        status: "Invite Sent",
        decision: "Pending",
        dateCreated: new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" }) + ", 10:00 AM",
        dateCompleted: "N/A",
        overallScore: "0%",
        overallBadge: "Pending",
        questions: roleQuestions[role] ? [...roleQuestions[role]] : ["General introduce yourself"],
        transcript: []
      };

      candidates.push(newC);
      showToast(`Invited ${prospect.name} to complete bot screening.`, "success");
      
      // Reset Select Dropdowns
      document.getElementById("select-dept-trigger").querySelector(".select-trigger-text").textContent = "Select Department";
      document.getElementById("select-dept-trigger").dataset.value = "";
      document.getElementById("select-subdept-trigger").querySelector(".select-trigger-text").textContent = "Select Sub-Department";
      document.getElementById("select-subdept-trigger").dataset.value = "";
      document.getElementById("select-role-trigger").querySelector(".select-trigger-text").textContent = "Select Role";
      document.getElementById("select-role-trigger").dataset.value = "";
      document.getElementById("select-candidate-trigger").querySelector(".select-trigger-text").textContent = "Select Candidate";
      document.getElementById("select-candidate-trigger").dataset.value = "";

      formSendBtn.disabled = true;
      formSendBtn.style.opacity = "0.6";
      formSendBtn.style.cursor = "not-allowed";

      updateTabBadges();
      renderBotScreeningTable();
    });
  }
}

function updateQuestionsList() {
  const roleVal = document.getElementById("questions-role-select").value;
  const container = document.getElementById("questions-list-container");
  if (!container) return;
  container.innerHTML = "";

  const qList = roleQuestions[roleVal] || [];
  if (qList.length === 0) {
    container.innerHTML = `<div style="font-size:11.5px; color:var(--text-secondary); font-style:italic;">No questions configured for this role.</div>`;
    return;
  }

  qList.forEach((q, idx) => {
    const item = document.createElement("div");
    item.style.display = "flex";
    item.style.alignItems = "center";
    item.style.justifyContent = "space-between";
    item.style.backgroundColor = "#FAFAF8";
    item.style.border = "0.5px solid #E2DFD7";
    item.style.borderRadius = "8px";
    item.style.padding = "6px 12px";
    item.style.fontSize = "12px";

    item.innerHTML = `
      <span style="font-weight:600; color:var(--text-primary); flex:1; padding-right:8px;">Q${idx + 1}: ${q}</span>
      <button onclick="removeQuestion(${idx})" style="background:none; border:none; color:#E24B4A; cursor:pointer; font-size:14px; font-weight:700;">×</button>
    `;
    container.appendChild(item);
  });
}

window.removeQuestion = function(idx) {
  const roleVal = document.getElementById("questions-role-select").value;
  if (roleQuestions[roleVal]) {
    roleQuestions[roleVal].splice(idx, 1);
    updateQuestionsList();
    showToast("Removed question from role bank.", "info");
  }
};

function loadUrlDeepLinking() {
  const params = new URLSearchParams(window.location.search);
  
  // Deep-link: ?openQuestions=true
  if (params.has("openQuestions")) {
    setTimeout(() => {
      const overlay = document.getElementById("questions-drawer-overlay");
      if (overlay) overlay.classList.add("active");
      updateQuestionsList();
    }, 300);
  }

  // Deep-link: ?search=CAN-XXXX
  if (params.has("search")) {
    const searchVal = params.get("search");
    const matched = candidates.find(c => c.id === searchVal);
    if (matched) {
      // Switch to correct tab first
      if (matched.decision === "Proceed") {
        switchTab("technical-round");
      } else if (matched.decision === "On Hold") {
        switchTab("on-hold");
      } else if (matched.decision === "Rejected") {
        switchTab("rejected");
      } else if (matched.decision === "Final Submission") {
        switchTab("final-submission");
      } else {
        switchTab("bot-interview");
      }

      if (matched.status === "Screening Completed") {
        setTimeout(() => {
          showCandidateWorkspace(matched.id);
        }, 500);
      }
    }
  }
}

function initializeDashboard() {
  setupCascadingDropdowns();
  initializeEvents();
  
  // Default: load Bot Interview tab
  switchTab("bot-interview");
  updateTabBadges();

  loadUrlDeepLinking();
}

// Kick off dashboard on load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeDashboard);
} else {
  initializeDashboard();
}
