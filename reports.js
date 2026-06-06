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
    reportDate: "2026-05-23",
    experience: "5.5 Years",
    qualification: "B.Tech in Computer Science",
    scores: {
      resume: 85,
      screening: 90,
      technical: 92
    },
    resumeData: {
      education: [
        { degree: "B.Tech in Computer Science", institution: "Stanford University", year: "2020", gpa: "3.8/4.0" }
      ],
      skills: {
        "Languages": ["JavaScript", "TypeScript", "HTML5", "CSS3/SCSS"],
        "Frameworks": ["React", "Next.js", "Redux Toolkit"],
        "Tools": ["Vite", "Webpack", "Git", "Docker"]
      },
      experience: [
        { role: "Tech Lead", company: "Elasticrew", period: "2024 - Present", description: "Lead frontend team of 4, built modular enterprise UI design system." },
        { role: "Senior Developer", company: "WebCorp", period: "2021 - 2024", description: "Designed scalable dashboards and reduced render times by 30%." }
      ],
      certifications: [
        { name: "AWS Certified Developer", issuer: "Amazon Web Services", year: "2023" },
        { name: "React Advanced Core Architect", issuer: "Meta", year: "2022" }
      ]
    },
    screeningData: {
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      transcript: [
        { time: "00:12", speaker: "Candidate", text: "Yes, I have been building modern React applications for over five years, focusing on modular architecture." },
        { time: "01:05", speaker: "Candidate", text: "When optimizing layouts, I ensure we avoid unnecessary rerenders by using structural memoization and layout refactoring." },
        { time: "02:22", speaker: "Candidate", text: "I also have experience integrating state managers like Redux Toolkit with TypeScript for type-safe selectors." }
      ],
      communication: {
        clarity: 92,
        speakingPace: 85,
        confidence: 90,
        engagement: 88,
        responseLength: 80
      }
    },
    technicalData: {
      competencies: {
        "Technical Knowledge": 95,
        "Problem Solving": 90,
        "Communication": 88,
        "Leadership": 82,
        "Professionalism": 95
      },
      evidence: {
        "Technical Knowledge": "Answered 8/10 technical questions correctly. Demonstrated deep understanding of React fiber architecture.",
        "Problem Solving": "Solved coding challenge in 18 minutes with O(N) complexity.",
        "Communication": "Articulated complex architectural patterns clearly.",
        "Leadership": "Successfully guided a team of 4 frontend engineers.",
        "Professionalism": "Courteous, punctual, and highly professional throughout the session."
      }
    },
    insights: [
      { text: "Candidate correctly answered 8/10 technical questions.", source: "Q1-Q10, Tech Round at 14:20" },
      { text: "Completed coding test in 18 minutes (average: 25 mins).", source: "Coding Session #4829" },
      { text: "Speaking pace stable at 130 words per minute.", source: "Video screening audio log analysis" }
    ],
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
    reportDate: "2026-05-20",
    experience: "3.5 Years",
    qualification: "M.Tech in Software Systems",
    scores: {
      resume: 78,
      screening: 82,
      technical: 0 // Not completed yet
    },
    resumeData: {
      education: [
        { degree: "M.Tech in Software Systems", institution: "BITS Pilani", year: "2022", gpa: "9.1/10" }
      ],
      skills: {
        "Languages": ["Python", "Go", "SQL"],
        "Databases": ["PostgreSQL", "Redis", "MongoDB"],
        "Frameworks": ["Django", "FastAPI"]
      },
      experience: [
        { role: "Backend Developer", company: "DataSys Ltd", period: "2022 - Present", description: "Maintained Python APIs, optimized SQL query execution times by 40%." }
      ],
      certifications: [
        { name: "Certified Kubernetes Administrator", issuer: "CNCF", year: "2024" }
      ]
    },
    screeningData: {
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      transcript: [
        { time: "00:15", speaker: "Candidate", text: "I've worked heavily with relational databases and backend caching structures." },
        { time: "01:20", speaker: "Candidate", text: "For write-heavy workloads, using a message queue like RabbitMQ can decouple the write pipeline." }
      ],
      communication: {
        clarity: 80,
        speakingPace: 78,
        confidence: 85,
        engagement: 82,
        responseLength: 75
      }
    },
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
    reportDate: "2026-05-26",
    experience: "2 Years",
    qualification: "MBA in HR",
    scores: {
      resume: 75,
      screening: 0,
      technical: 0
    },
    resumeData: {
      education: [
        { degree: "MBA in HR", institution: "Symbiosis", year: "2024", gpa: "3.5/4.0" }
      ],
      skills: {
        "Core": ["Talent Acquisition", "Onboarding", "HRIS Tools"]
      },
      experience: [
        { role: "HR Intern", company: "GlobalCorp", period: "2023 - 2024", description: "Assisted in recruitment pipeline management and candidate screening." }
      ],
      certifications: []
    },
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
    reportDate: "2026-05-12",
    experience: "1.5 Years",
    qualification: "B.C.A",
    scores: {
      resume: 60,
      screening: 50,
      technical: 45
    },
    resumeData: {
      education: [
        { degree: "B.C.A", institution: "Amity University", year: "2023", gpa: "2.9/4.0" }
      ],
      skills: {
        "Languages": ["HTML", "CSS", "Basic JS"]
      },
      experience: [
        { role: "Junior Frontend Intern", company: "PixelSoft", period: "2023 - 2024", description: "Created static layouts and landing pages using Bootstrap." }
      ],
      certifications: []
    },
    screeningData: {
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      transcript: [
        { time: "00:10", speaker: "Candidate", text: "I have experience with HTML and CSS and building simple layouts." },
        { time: "01:02", speaker: "Candidate", text: "JavaScript closures... I'm not very sure, but I know they have to do with function scopes." }
      ],
      communication: {
        clarity: 60,
        speakingPace: 55,
        confidence: 50,
        engagement: 45,
        responseLength: 50
      }
    },
    technicalData: {
      competencies: {
        "Technical Knowledge": 40,
        "Problem Solving": 45,
        "Communication": 60,
        "Leadership": 30,
        "Professionalism": 80
      },
      evidence: {
        "Technical Knowledge": "Lacks deep understanding of standard closures, asynchronous JavaScript, or flexbox layouts.",
        "Problem Solving": "Unable to complete recursive array traversal during coding check.",
        "Communication": "Hesitant when asked to explain conceptual problems.",
        "Leadership": "No leadership or project ownership experience reported.",
        "Professionalism": "Polite but struggled to express core methodologies."
      }
    },
    insights: [
      { text: "Candidate correctly answered 3/10 technical questions.", source: "Q1-Q10, Tech Round at 10:30" },
      { text: "Struggled with CSS centering and box model.", source: "Coding Screen #102" }
    ],
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
    hiringStage: "Offer Extended",
    notes: "Phenomenal architectural answers. System design concepts are highly mature. Selected unanimously.",
    dateApplied: "2026-04-28",
    reportDate: "2026-05-14",
    experience: "7.0 Years",
    qualification: "B.E in Computer Science",
    scores: {
      resume: 92,
      screening: 94,
      technical: 96
    },
    resumeData: {
      education: [
        { degree: "B.E in Computer Science", institution: "IIT Delhi", year: "2019", gpa: "9.6/10" }
      ],
      skills: {
        "Languages": ["Java", "Scala", "C++", "SQL"],
        "Microservices": ["Spring Boot", "gRPC", "Kafka", "Postgres"],
        "Cloud": ["AWS", "Terraform", "Kubernetes"]
      },
      experience: [
        { role: "Senior Engineer", company: "FinTech Hub", period: "2022 - Present", description: "Architected transaction settlement platform processing $10M+ daily." },
        { role: "Software Developer", company: "CloudScale", period: "2019 - 2022", description: "Built microservices using Spring Boot, improved database read performance by 50%." }
      ],
      certifications: [
        { name: "AWS Solutions Architect - Professional", issuer: "Amazon Web Services", year: "2023" }
      ]
    },
    screeningData: {
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      transcript: [
        { time: "00:10", speaker: "Candidate", text: "I specialize in low-latency event-driven microservices architectures." },
        { time: "01:15", speaker: "Candidate", text: "To guarantee eventual consistency across services, we implement the Saga pattern with transactional outboxes." },
        { time: "02:40", speaker: "Candidate", text: "Using Kafka partitions effectively enables parallel stream consumer execution without message reordering." }
      ],
      communication: {
        clarity: 95,
        speakingPace: 90,
        confidence: 96,
        engagement: 92,
        responseLength: 85
      }
    },
    technicalData: {
      competencies: {
        "Technical Knowledge": 98,
        "Problem Solving": 95,
        "Communication": 92,
        "Leadership": 85,
        "Professionalism": 96
      },
      evidence: {
        "Technical Knowledge": "Outstanding microservices and distributed database systems conceptual design answers.",
        "Problem Solving": "Solved hard graph partition puzzle, optimizing code space complexity.",
        "Communication": "Extremely clear whiteboard descriptions and architectural definitions.",
        "Leadership": "Led system migrations with a cross-functional engineering team.",
        "Professionalism": "Incredibly professional, well-prepared, and structured communicator."
      }
    },
    insights: [
      { text: "Candidate answered 10/10 technical assessment questions correctly.", source: "Q1-Q10, Tech Round at 11:00" },
      { text: "Designed a fault-tolerant system diagram with no Single Point of Failure.", source: "System Design Session #82" }
    ],
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
    reportDate: "2026-05-22",
    experience: "4 Years",
    qualification: "B.Tech in Information Technology",
    scores: {
      resume: 80,
      screening: 84,
      technical: 0
    },
    resumeData: {
      education: [
        { degree: "B.Tech in IT", institution: "NSUT", year: "2021", gpa: "3.6/4.0" }
      ],
      skills: {
        "Languages": ["JavaScript", "Kotlin", "Swift"],
        "Frameworks": ["React Native", "React"]
      },
      experience: [
        { role: "Mobile Developer", company: "AppStudio", period: "2021 - Present", description: "Developed React Native apps downloaded by over 500k users." }
      ],
      certifications: []
    },
    screeningData: {
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      transcript: [
        { time: "00:20", speaker: "Candidate", text: "React Native bridge rendering performance can be optimized using JSI and TurboModules." }
      ],
      communication: {
        clarity: 82,
        speakingPace: 80,
        confidence: 84,
        engagement: 80,
        responseLength: 75
      }
    },
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
    reportDate: "2026-05-28",
    experience: "6 Years",
    qualification: "B.A in Economics & MBA",
    scores: {
      resume: 86,
      screening: 88,
      technical: 90
    },
    resumeData: {
      education: [
        { degree: "MBA", institution: "ISB", year: "2020", gpa: "3.7/4.0" }
      ],
      skills: {
        "Product Management": ["A/B Testing", "Agile Roadmap", "Mixpanel", "Jira"],
        "Strategy": ["Customer Journey Mapping", "Retention Analysis"]
      },
      experience: [
        { role: "Product Manager", company: "GrowthTech", period: "2020 - Present", description: "Increased onboarding funnel conversion rate by 15%." }
      ],
      certifications: [
        { name: "Pragmatic Certified Product Manager", issuer: "Pragmatic Institute", year: "2021" }
      ]
    },
    screeningData: {
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      transcript: [
        { time: "00:15", speaker: "Candidate", text: "I prioritize roadmap features based on RICE score combined with qualitative user research feedback." },
        { time: "01:30", speaker: "Candidate", text: "When retention drops, the first step is analyzing user activity cohorts to find dropoff trigger points." }
      ],
      communication: {
        clarity: 90,
        speakingPace: 86,
        confidence: 88,
        engagement: 90,
        responseLength: 82
      }
    },
    technicalData: {
      competencies: {
        "Technical Knowledge": 85,
        "Problem Solving": 92,
        "Communication": 94,
        "Leadership": 90,
        "Professionalism": 92
      },
      evidence: {
        "Technical Knowledge": "Solid understanding of API integrations, database queries, and system architectures.",
        "Problem Solving": "Excellent data analytics interpretation and user pain points resolution.",
        "Communication": "Top-tier presenter, structure-oriented, and convincing.",
        "Leadership": "Successfully managed alignment between design, engineering, and sales.",
        "Professionalism": "Very articulate, highly professional, structured speaker."
      }
    },
    insights: [
      { text: "Successfully completed product case study task.", source: "Case Review #12" }
    ],
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
    reportDate: "2026-05-28",
    experience: "4.5 Years",
    qualification: "B.Des in Communication Design",
    scores: {
      resume: 88,
      screening: 85,
      technical: 88
    },
    resumeData: {
      education: [
        { degree: "B.Des in Communication Design", institution: "NID Ahmedabad", year: "2021", gpa: "8.5/10" }
      ],
      skills: {
        "Design Tools": ["Figma", "Adobe Creative Suite", "ProtoPie"],
        "Methodologies": ["Wireframing", "User Research", "Usability Testing"]
      },
      experience: [
        { role: "UX Designer", company: "StudioEleven", period: "2021 - Present", description: "Redesigned checkout flows and created comprehensive modern design systems." }
      ],
      certifications: []
    },
    screeningData: {
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      transcript: [
        { time: "00:18", speaker: "Candidate", text: "I start by mapping user friction points based on user heatmaps and behavioral sessions." }
      ],
      communication: {
        clarity: 88,
        speakingPace: 82,
        confidence: 85,
        engagement: 88,
        responseLength: 78
      }
    },
    technicalData: {
      competencies: {
        "Technical Knowledge": 86,
        "Problem Solving": 88,
        "Communication": 88,
        "Leadership": 75,
        "Professionalism": 90
      },
      evidence: {
        "Technical Knowledge": "Outstanding visual craft and design system mapping expertise.",
        "Problem Solving": "Heuristically solved critical checkout funnel leaks.",
        "Communication": "Articulate, design-focused presentation delivery.",
        "Leadership": "Managed design reviews with client steering committees.",
        "Professionalism": "Very polite, well-prepared design deck presentation."
      }
    },
    insights: [
      { text: "Portfolio score rated in the top 5% of design candidates.", source: "Portfolio Evaluation Panel" }
    ],
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


// --------------------------------------------------------
// Helper: Convert numeric score → descriptive English word
// --------------------------------------------------------
function scoreToWord(score) {
  if (!score || score === 0) return { label: 'Pending', cls: 'score-pending' };
  if (score >= 80) return { label: 'Strong', cls: 'score-strong' };
  if (score >= 60) return { label: 'Moderate', cls: 'score-moderate' };
  return { label: 'Weak', cls: 'score-weak' };
}

const SCORE_STYLES = {
  'score-strong':  'background:#E6F7F2; color:#0D7A57; border:1px solid #A7EFCF;',
  'score-moderate':'background:#FEF3C7; color:#B45309; border:1px solid #FCD34D;',
  'score-weak':    'background:#FEF0EF; color:#E24B4A; border:1px solid #FCA5A5;',
  'score-pending': 'background:#F3F4F6; color:#6B7280; border:1px solid #E5E7EB;'
};

// --------------------------------------------------------
// Helper: Generate & copy shareable read-only link
// --------------------------------------------------------
function generateShareLink(candidateId) {
  const url = `${window.location.origin}${window.location.pathname}?share=${encodeURIComponent(candidateId)}`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => {
      showToast(`🔗 Share link for ${candidateId} copied to clipboard!`);
    }).catch(() => prompt('Copy this share link:', url));
  } else {
    prompt('Copy this share link:', url);
  }
}

// Helper to resolve Department from Candidate Role
function getCandidateDepartment(role) {
  const r = role.toLowerCase();
  if (r.includes("developer") || r.includes("engineer")) return "Engineering";
  if (r.includes("designer") || r.includes("ui/ux")) return "Design";
  if (r.includes("product")) return "Product";
  if (r.includes("hr") || r.includes("recruiter") || r.includes("executive")) return "HR";
  return "General";
}

// State Variables
let activeCandidateId = null;
let currentSearchQuery = "";
let currentRoleFilter = "";
let currentStageFilter = "";
let currentDeptFilter = "";
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
const kpiAvgScreeningScore = document.getElementById("kpi-avg-screening-score");
const kpiOfferExtended = document.getElementById("kpi-offer-extended");

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
    { value: "Offer Extended", label: "Offer Extended" },
    { value: "Rejected", label: "Rejected" }
  ];

  selectStageSel = initSearchableSelect("select-stage-container", stageOptions, (val) => {
    currentStageFilter = val;
    currentPage = 1;
    updateUrlParams();
    triggerReload();
  });

  // Department Options
  const uniqueDepts = ["Engineering", "Design", "Product", "HR", "General"];
  const deptOptions = [
    { value: "", label: "All Departments" },
    ...uniqueDepts.map(d => ({ value: d, label: d }))
  ];

  selectStatusSel = initSearchableSelect("select-status-container", deptOptions, (val) => {
    currentDeptFilter = val;
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
  if (s === "shortlisted" || s === "hired") return "status-pill shortlisted";
  if (s === "offer extended") return "status-pill offer-extended";
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

    // 4. Department filter
    if (currentDeptFilter) {
      const dept = getCandidateDepartment(cand.role);
      if (dept !== currentDeptFilter) return false;
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

    // ── Screening rating word ──
    const hasScreening = cand.botScreeningDone && cand.scores && cand.scores.screening > 0;
    const sw = hasScreening ? scoreToWord(cand.scores.screening) : { label: 'Pending', cls: 'score-pending' };
    const swStyle = SCORE_STYLES[sw.cls];

    // ── Screening Upload column ──
    const uploadCol = cand.botScreeningDone
      ? `<span style="display:inline-flex;align-items:center;gap:4px;color:#0D7A57;font-size:11px;font-weight:700;">
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:14px;height:14px;"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
           Done
         </span>`
      : `<label style="display:inline-flex;align-items:center;gap:5px;background:#EBF4FF;color:#378ADD;border:1px solid #C3DDFB;border-radius:999px;padding:4px 10px;font-size:11px;font-weight:700;cursor:pointer;" title="Upload Screening Video">
           <input type="file" accept="video/*" style="display:none;" class="screening-upload-input" data-id="${cand.id}">
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:12px;height:12px;"><path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"/></svg>
           Upload
         </label>`;

    // ── Remark (truncated notes) ──
    const remarkText = cand.notes
      ? cand.notes.substring(0, 55) + (cand.notes.length > 55 ? '…' : '')
      : '<em style="color:var(--text-secondary);font-style:italic;">No remark</em>';

    tr.innerHTML = `
      <td>
        <div class="col-candidate">
          <div class="candidate-avatar" style="background:${grad}">${initials}</div>
          <div class="candidate-info">
            <span class="candidate-name">${cand.name}</span>
            <span class="candidate-phone" style="font-size:11px;color:var(--text-secondary);">${cand.email}</span>
          </div>
        </div>
      </td>
      <td><span class="col-id">${cand.id}</span></td>
      <td><span class="role-tag-blue">${cand.role}</span></td>
      <td>
        <span style="display:inline-flex;align-items:center;border-radius:999px;padding:4px 12px;font-size:11px;font-weight:700;${swStyle}">${sw.label}</span>
      </td>
      <td>${uploadCol}</td>
      <td>
        <span class="${getStageBadgeClass(cand.hiringStage)} stage-pill" data-id="${cand.id}" style="cursor:pointer;">${cand.hiringStage}</span>
      </td>
      <td style="max-width:160px;white-space:normal;font-size:11.5px;color:var(--text-secondary);line-height:1.35;">${remarkText}</td>
      <td>
        <div style="display:flex;gap:6px;align-items:center;">
          <button class="btn-view-report-row" data-id="${cand.id}"
            style="display:inline-flex;align-items:center;gap:4px;background:var(--active-nav-bg);color:#FFF;border:none;border-radius:6px;padding:5px 10px;font-size:11px;font-weight:600;cursor:pointer;white-space:nowrap;transition:opacity .15s;"
            onmouseenter="this.style.opacity='.85'" onmouseleave="this.style.opacity='1'">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:12px;height:12px;"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.641 0-8.573-3.007-9.963-7.178z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            View Report
          </button>
          <button class="btn-generate-link-row" data-id="${cand.id}"
            style="display:inline-flex;align-items:center;gap:4px;background:#EBF4FF;color:#378ADD;border:1px solid #C3DDFB;border-radius:6px;padding:5px 10px;font-size:11px;font-weight:600;cursor:pointer;white-space:nowrap;transition:all .15s;"
            onmouseenter="this.style.background='#D1E9FF'" onmouseleave="this.style.background='#EBF4FF'">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:12px;height:12px;"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/></svg>
            Share Link
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
          <span class="${getStageBadgeClass(cand.hiringStage)} stage-pill" data-id="${cand.id}" style="cursor: pointer;">${cand.hiringStage}</span>
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
      <div class="applicant-card-actions" style="margin-top: auto; padding-top: 8px; border-top: 0.5px solid var(--divider-color); justify-content: flex-end;">
        <div class="card-doc-links">
          <button class="card-doc-btn active" data-tooltip="View Resume CV" data-id="${cand.id}" data-doc="transcript" style="color: var(--active-nav-bg);">
            <svg viewBox="0 0 24 24"><path d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.12 2.99 2.68 3.22l3.07.46V21l3.56-3.56h6.76c1.63 0 2.94-1.3 2.94-2.93V6.43c0-1.63-1.31-2.93-2.94-2.93H4.63c-1.63 0-2.94 1.3-2.94 2.93v7.08z" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <button class="card-doc-btn ${cand.botScreeningDone ? 'active' : ''}" ${cand.botScreeningDone ? '' : 'disabled'} data-tooltip="${cand.botScreeningDone ? 'Play Screening Video' : 'Video Pending'}" data-id="${cand.id}" data-doc="tech" style="${cand.botScreeningDone ? 'color: var(--active-nav-bg);' : ''}">
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
      <td colspan="7" style="padding: 0;">
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
      <td><div class="skeleton-block" style="width: 70px; height: 22px; border-radius: 999px;"></div></td>
      <td><div class="skeleton-block" style="width: 70px;"></div></td>
      <td><div class="skeleton-block" style="width: 80px; height: 22px; border-radius: 999px;"></div></td>
      <td><div class="skeleton-block" style="width: 120px;"></div></td>
      <td><div class="skeleton-block" style="width: 150px; height: 28px; border-radius: 6px;"></div></td>
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
  const offered = candidates.filter(c => c.hiringStage === "Offer Extended").length;

  kpiTotalApplicants.textContent = 180 + total;
  kpiBotScreeningDone.textContent = 139 + screened;
  kpiShortlistedCandidates.textContent = 53 + shortlisted;
  kpiOfferExtended.textContent = 25 + offered;

  // Calculate average screening score from candidates with botScreeningDone = true
  const screenedCandidates = candidates.filter(c => c.botScreeningDone && c.scores && typeof c.scores.screening !== "undefined");
  let avgScreeningScore = 0;
  if (screenedCandidates.length > 0) {
    const totalScreeningScore = screenedCandidates.reduce((acc, c) => acc + c.scores.screening, 0);
    avgScreeningScore = (totalScreeningScore / screenedCandidates.length).toFixed(1);
  } else {
    avgScreeningScore = "0.0";
  }
  kpiAvgScreeningScore.textContent = `${avgScreeningScore}%`;

  updateFunnelChart();
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
// Switch Main Report Tab
function switchMainReportTab(tabName) {
  let targetVal = tabName;
  if (targetVal === "overview") targetVal = "summary";
  if (targetVal === "notes" || targetVal === "notes-history") targetVal = "notes-history";
  if (targetVal === "tech" || targetVal === "technical") targetVal = "technical";
  if (targetVal === "screening") targetVal = "screening";
  if (targetVal === "resume") targetVal = "resume";

  const filterSelect = document.getElementById("report-section-filter");
  if (filterSelect) {
    filterSelect.value = targetVal;
  }
  applySectionFilter(targetVal);
}

// 1. Detailed Performance Report Modal
function openCandidateReport(candidateId, section) {
  const cand = candidates.find(c => c.id === candidateId);
  if (!cand) return;

  activeCandidateId = candidateId;

  // Set candidate info
  repAvatar.textContent = getInitials(cand.name);
  repAvatar.style.background = getAvatarGradient(cand.name);
  repName.textContent = cand.name;
  
  document.getElementById("rep-role").textContent = cand.role || "Data Not Available";
  document.getElementById("rep-experience").textContent = cand.experience || "Data Not Available";
  document.getElementById("rep-qualification").textContent = cand.qualification || "Data Not Available";
  document.getElementById("rep-date").textContent = cand.reportDate || "Data Not Available";
  document.getElementById("rep-id").textContent = cand.id || "Data Not Available";

  // Calculate Overall Scores
  const hasScores = cand.scores && typeof cand.scores.resume !== "undefined";
  const resumeScore = hasScores ? cand.scores.resume : 0;
  const screeningScore = hasScores ? cand.scores.screening : 0;
  const technicalScore = hasScores ? cand.scores.technical : 0;
  const overall = hasScores ? Math.round(resumeScore * 0.2 + screeningScore * 0.3 + technicalScore * 0.5) : 0;

  // Decision badge calculation
  const decisionBadge = document.getElementById("rep-decision-badge");
  decisionBadge.className = "status-pill";
  if (!hasScores) {
    decisionBadge.textContent = "Review Required";
    decisionBadge.classList.add("review-required");
  } else if (overall >= 85) {
    decisionBadge.textContent = "Strongly Recommended";
    decisionBadge.classList.add("strongly-recommended");
  } else if (overall >= 70) {
    decisionBadge.textContent = "Recommended";
    decisionBadge.classList.add("recommended");
  } else if (overall >= 50) {
    decisionBadge.textContent = "Review Required";
    decisionBadge.classList.add("review-required");
  } else {
    decisionBadge.textContent = "Not Recommended";
    decisionBadge.classList.add("rejected-pill");
  }

  // Top header Match Score display
  const overallScoreEl = document.getElementById("rep-overall-score");
  const riskLevelEl = document.getElementById("rep-risk-level");
  const completionStatusEl = document.getElementById("rep-completion-status");

  if (hasScores) {
    overallScoreEl.textContent = `${overall}%`;
    if (overall >= 85) {
      riskLevelEl.textContent = "Low Risk";
      riskLevelEl.style.color = "var(--active-nav-bg)";
    } else if (overall >= 70) {
      riskLevelEl.textContent = "Medium Risk";
      riskLevelEl.style.color = "#EF6C00";
    } else {
      riskLevelEl.textContent = "High Risk";
      riskLevelEl.style.color = "#C62828";
    }
  } else {
    overallScoreEl.textContent = "N/A";
    riskLevelEl.textContent = "Data Not Available";
    riskLevelEl.style.color = "var(--text-secondary)";
  }

  // Completion status calculation
  let compStatus = "Incomplete";
  if (cand.resumeUploaded && cand.botScreeningDone && cand.techInterviewDone) {
    compStatus = "Complete";
    completionStatusEl.style.color = "var(--active-nav-bg)";
  } else if (cand.resumeUploaded && cand.botScreeningDone) {
    compStatus = "Tech Pending";
    completionStatusEl.style.color = "#EF6C00";
  } else {
    compStatus = "Screening Pending";
    completionStatusEl.style.color = "#C62828";
  }
  completionStatusEl.textContent = compStatus;

  // Render KPI Score Cards — English words instead of numbers
  const rw = scoreToWord(resumeScore);
  const scw = scoreToWord(screeningScore);
  const tw = scoreToWord(technicalScore);
  const ow = scoreToWord(overall);

  const setScoreCard = (id, word) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = hasScores ? word.label : 'N/A';
    el.style.cssText = hasScores
      ? `font-size:20px;font-weight:800;${SCORE_STYLES[word.cls].replace(/border:[^;]+;/,'')}`
      : 'font-size:14px;font-weight:700;color:var(--text-secondary);';
  };
  setScoreCard('rep-resume-score', rw);
  setScoreCard('rep-screening-score', scw);
  setScoreCard('rep-technical-score', tw);
  setScoreCard('rep-final-score', ow);

  // Also update the match score in header to use word
  if (overallScoreEl) {
    overallScoreEl.textContent = hasScores ? ow.label : 'N/A';
    overallScoreEl.style.fontSize = '20px';
  }

  // Render Assessment Breakdown Table
  const breakdownBody = document.getElementById("breakdown-table-body");
  breakdownBody.innerHTML = "";
  if (hasScores) {
    const rows = [
      { name: "Resume Evaluation", score: resumeScore, weight: "20%", contrib: (resumeScore * 0.2).toFixed(1) },
      { name: "Video Screening", score: screeningScore, weight: "30%", contrib: (screeningScore * 0.3).toFixed(1) },
      { name: "Technical Interview", score: technicalScore, weight: "50%", contrib: (technicalScore * 0.5).toFixed(1) }
    ];
    rows.forEach(r => {
      const tr = document.createElement("tr");
      const rWord = scoreToWord(r.score);
      const rStyle = SCORE_STYLES[rWord.cls];
      tr.innerHTML = `
        <td style="padding:8px; font-weight:600;">${r.name}</td>
        <td style="padding:8px; text-align:center;">
          <span style="border-radius:999px;padding:3px 10px;font-size:11px;font-weight:700;${rStyle}">${rWord.label}</span>
        </td>
        <td style="padding:8px; text-align:center; color:var(--text-secondary);">${r.weight}</td>
        <td style="padding:8px; text-align:center; font-weight:700; color:var(--active-nav-bg);">${r.contrib}</td>
      `;
      breakdownBody.appendChild(tr);
    });
    // Add total row
    const totalTr = document.createElement("tr");
    totalTr.style.borderTop = "2px solid #EEEAE3";
    totalTr.innerHTML = `
      <td style="padding:8px; font-weight:700;">Total Score</td>
      <td style="padding:8px; text-align:center; font-weight:700;">-</td>
      <td style="padding:8px; text-align:center; font-weight:700; color:var(--text-secondary);">100%</td>
      <td style="padding:8px; text-align:center; font-weight:800; color:var(--active-nav-bg); font-size:14px;">${overall}%</td>
    `;
    breakdownBody.appendChild(totalTr);
  } else {
    breakdownBody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:12px; color:var(--text-secondary);">Data Not Available</td></tr>`;
  }

  // Render Evidence Insights
  const insightsList = document.getElementById("evidence-insights-list");
  insightsList.innerHTML = "";
  if (cand.insights && cand.insights.length > 0) {
    cand.insights.forEach(ins => {
      const div = document.createElement("div");
      div.className = "evidence-insight-item";
      div.innerHTML = `
        <div style="font-weight: 500;">✓ ${ins.text}</div>
        <div class="insight-source">Reference: ${ins.source}</div>
      `;
      insightsList.appendChild(div);
    });
  } else {
    insightsList.innerHTML = `<div class="data-unavail-container">Data Not Available</div>`;
  }

  // Render Hiring Recommendation reasoning
  const recBadgeDisplay = document.getElementById("rep-rec-badge-display");
  const recReasoning = document.getElementById("rep-rec-reasoning");
  recBadgeDisplay.className = "rec-badge-display";
  if (!hasScores) {
    recBadgeDisplay.textContent = "Review Required";
    recBadgeDisplay.classList.add("review-required");
    recReasoning.textContent = "Hiring decision requires completion of outstanding assessments. Scores for bot screening or technical interview rounds are currently unavailable.";
  } else {
    if (overall >= 85) {
      recBadgeDisplay.textContent = "Strongly Recommended";
      recBadgeDisplay.classList.add("strongly-recommended");
    } else if (overall >= 70) {
      recBadgeDisplay.textContent = "Recommended";
      recBadgeDisplay.classList.add("recommended");
    } else if (overall >= 50) {
      recBadgeDisplay.textContent = "Review Required";
      recBadgeDisplay.classList.add("review-required");
    } else {
      recBadgeDisplay.textContent = "Not Recommended";
      recBadgeDisplay.classList.add("not-recommended");
    }
    
    recReasoning.textContent = `Candidate completed the assessment pipeline with a weighted overall match score of ${overall}%.
- Resume Evaluation score: ${resumeScore}% (Weighted contribution: ${(resumeScore * 0.2).toFixed(1)}/20)
- Video Screening score: ${screeningScore}% (Weighted contribution: ${(screeningScore * 0.3).toFixed(1)}/30)
- Technical Interview score: ${technicalScore}% (Weighted contribution: ${(technicalScore * 0.5).toFixed(1)}/50)
Decision badge calculated automatically using established HR weights. No subjective assumptions applied.`;
  }

  // Render Resume Tabs Data
  renderResumeTabContent(cand);

  // Render Technical Radar Chart & Competency Table
  const competencyBody = document.getElementById("competency-table-body");
  competencyBody.innerHTML = "";
  const evidencePanel = document.getElementById("competency-evidence-panel");
  evidencePanel.style.display = "none";

  if (cand.technicalData && cand.technicalData.competencies) {
    document.getElementById("sec-tech-analysis").querySelector(".radar-chart-outer-container").style.display = "flex";
    renderRadarChart(cand.technicalData.competencies);
    
    // Legend render
    const legendEl = document.getElementById("radar-chart-legend");
    legendEl.innerHTML = "";
    Object.keys(cand.technicalData.competencies).forEach(key => {
      const val = cand.technicalData.competencies[key];
      const dotColor = "#1a7a4a";
      const span = document.createElement("span");
      span.className = "radar-legend-item";
      span.innerHTML = `<span style="display:inline-block; width:8px; height:8px; border-radius:50%; background-color:${dotColor}; margin-right:4px;"></span> ${key}`;
      span.addEventListener("click", () => {
        // Toggle active styling
        document.querySelectorAll(".radar-legend-item").forEach(item => item.classList.remove("active"));
        span.classList.add("active");
        showCompetencyEvidence(key, val, cand);
      });
      legendEl.appendChild(span);
    });

    // Competency Table render
    Object.keys(cand.technicalData.competencies).forEach(key => {
      const val = cand.technicalData.competencies[key];
      const tr = document.createElement("tr");
      tr.style.cursor = "pointer";
      tr.innerHTML = `
        <td style="padding:8px; font-weight:600; color:var(--text-primary);">${key}</td>
        <td style="padding:8px; text-align:center; font-weight:700; color:var(--active-nav-bg);">${val}/100</td>
      `;
      tr.addEventListener("click", () => {
        document.querySelectorAll(".competency-table-wrapper tr").forEach(row => row.style.backgroundColor = "");
        tr.style.backgroundColor = "#E8F5E9";
        showCompetencyEvidence(key, val, cand);
      });
      competencyBody.appendChild(tr);
    });
  } else {
    document.getElementById("sec-tech-analysis").querySelector(".radar-chart-outer-container").style.display = "none";
    competencyBody.innerHTML = `<tr><td colspan="2" style="text-align:center; padding:12px; color:var(--text-secondary);">Data Not Available</td></tr>`;
  }

  // Render Video Player
  const player = document.getElementById("report-video-player");
  const videoOverlay = document.getElementById("video-unavail-overlay");
  if (cand.screeningData && cand.screeningData.videoUrl) {
    player.src = cand.screeningData.videoUrl;
    player.style.display = "block";
    videoOverlay.style.display = "none";
  } else {
    player.src = "";
    player.style.display = "none";
    videoOverlay.style.display = "flex";
  }

  // Render Video Transcript Bubbles
  const transcriptArea = document.getElementById("transcript-scroll-area");
  transcriptArea.innerHTML = "";
  if (cand.screeningData && cand.screeningData.transcript && cand.screeningData.transcript.length > 0) {
    cand.screeningData.transcript.forEach(bubble => {
      const div = document.createElement("div");
      div.className = "transcript-bubble";
      div.dataset.time = bubble.time;
      div.innerHTML = `
        <div class="bubble-meta">
          <span>${bubble.speaker}</span>
          <span class="bubble-time">${bubble.time}</span>
        </div>
        <div style="font-weight: 500;">${bubble.text}</div>
      `;
      transcriptArea.appendChild(div);
    });
  } else {
    transcriptArea.innerHTML = `<div class="data-unavail-container">Data Not Available</div>`;
  }

  // Render Communication Assessment
  const commArea = document.getElementById("communication-metrics-list");
  commArea.innerHTML = "";
  if (cand.screeningData && cand.screeningData.communication) {
    const comm = cand.screeningData.communication;
    const metrics = [
      { name: "Clarity", score: comm.clarity },
      { name: "Speaking Pace", score: comm.speakingPace },
      { name: "Confidence", score: comm.confidence },
      { name: "Engagement", score: comm.engagement },
      { name: "Response Length", score: comm.responseLength }
    ];
    metrics.forEach(m => {
      // Trend calculation
      let trendText = "◀▶ Stable";
      let trendClass = "stable";
      if (m.score >= 85) {
        trendText = "▲ Strong";
        trendClass = "up";
      } else if (m.score < 65) {
        trendText = "▼ Review";
        trendClass = "down";
      }
      
      const div = document.createElement("div");
      div.className = "comm-metric-row";
      div.innerHTML = `
        <div class="comm-metric-header">
          <span>${m.name}</span>
          <span>${m.score}% <span class="comm-trend-indicator ${trendClass}" style="margin-left:6px;">${trendText}</span></span>
        </div>
        <div class="comm-metric-bar-bg">
          <div class="comm-metric-bar-fill" style="width: ${m.score}%;"></div>
        </div>
      `;
      commArea.appendChild(div);
    });
  } else {
    commArea.innerHTML = `<div class="data-unavail-container">Data Not Available</div>`;
  }

  // HR notes textarea display
  const hrNotesTextarea = document.getElementById("rep-hr-notes-textarea");
  if (hrNotesTextarea) {
    hrNotesTextarea.value = cand.notes || "";
  }

  // Render Process Timeline
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

  // Switch to appropriate tab
  let targetTab = section || "summary";
  if (targetTab === "overview") targetTab = "summary";
  if (targetTab === "notes") targetTab = "notes-history";
  if (targetTab === "tech") targetTab = "technical";

  const filterSelect = document.getElementById("report-section-filter");
  if (filterSelect) {
    filterSelect.value = targetTab;
  }
  applySectionFilter(targetTab);
  updateUrlParams();

  reportModal.classList.add("active");
  const overlay = document.getElementById("report-modal-overlay");
  if (overlay) overlay.classList.add("active");

  if (targetTab === "notes-history") {
    setTimeout(() => {
      const ta = document.getElementById("rep-hr-notes-textarea");
      if (ta) {
        ta.focus();
        const len = ta.value.length;
        ta.setSelectionRange(len, len);
      }
    }, 350);
  }

  if (targetTab === "screening") {
    setTimeout(() => {
      const player = document.getElementById("report-video-player");
      if (player && player.style.display !== "none") {
        player.play().catch(err => console.log("Video auto-play failed: ", err));
      }
    }, 350);
  }
}

function closeReport() {
  reportModal.classList.remove("active");
  const overlay = document.getElementById("report-modal-overlay");
  if (overlay) overlay.classList.remove("active");
  const player = document.getElementById("report-video-player");
  if (player) {
    player.pause();
  }
  activeCandidateId = null;
  updateUrlParams();
}

closeReportModal.addEventListener("click", closeReport);
btnCloseReport.addEventListener("click", closeReport);
const reportOverlay = document.getElementById("report-modal-overlay");
if (reportOverlay) {
  reportOverlay.addEventListener("click", closeReport);
}

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
  if (activeCandidateId) openCandidateReport(activeCandidateId, "notes-history");
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
  const target = e.target;

  // 1. Stage change pill click
  const stagePill = target.closest(".stage-pill");
  if (stagePill) {
    e.stopPropagation();
    const id = stagePill.dataset.id;
    openStageChangeDropdown(id, stagePill);
    return;
  }

  // 2. Resume document button click
  const resumeBtn = target.closest(".card-doc-btn[data-doc='transcript']");
  if (resumeBtn) {
    e.stopPropagation();
    const id = resumeBtn.dataset.id;
    openCandidateReport(id, "resume");
    return;
  }

  // 3. Screening video button click
  const screeningBtn = target.closest(".card-doc-btn[data-doc='tech']");
  if (screeningBtn) {
    e.stopPropagation();
    const id = screeningBtn.dataset.id;
    openCandidateReport(id, "screening");
    return;
  }

  // 4. Notes button click
  const notesBtn = target.closest(".notes-btn");
  if (notesBtn) {
    e.stopPropagation();
    const id = notesBtn.dataset.id;
    openCandidateReport(id, "notes");
    return;
  }

  // 5. View Report row button click
  const viewReportBtn = target.closest('.btn-view-report-row');
  if (viewReportBtn) {
    e.stopPropagation();
    openCandidateReport(viewReportBtn.dataset.id);
    return;
  }

  // 6. Share Link row button click
  const shareLinkBtn = target.closest('.btn-generate-link-row');
  if (shareLinkBtn) {
    e.stopPropagation();
    generateShareLink(shareLinkBtn.dataset.id);
    return;
  }

  // 7. Screening upload input change
  const uploadInput = target.closest('.screening-upload-input');
  if (uploadInput) {
    e.stopPropagation();
    uploadInput.addEventListener('change', (ev) => {
      const id = uploadInput.dataset.id;
      const cand = candidates.find(c => c.id === id);
      if (cand && ev.target.files.length > 0) {
        cand.botScreeningDone = true;
        cand.scores = cand.scores || {};
        if (!cand.scores.screening) cand.scores.screening = 75;
        renderCandidates();
        updateKpiCounters();
        showToast(`Screening video uploaded for ${cand.name}!`);
      }
    }, { once: true });
    return;
  }

  // 8. Table row click (excluding buttons/pills)
  const tr = target.closest("#pipeline-table-body tr");
  if (tr) {
    if (!target.closest("button") && !target.closest(".stage-pill") && !target.closest('label')) {
      const id = tr.id.replace("candidate-row-", "");
      openCandidateReport(id);
    }
    return;
  }

  // 9. Grid Card click (excluding buttons/pills)
  if (card) {
    if (!target.closest("button") && !target.closest(".stage-pill")) {
      const id = card.id.replace("grid-card-", "");
      openCandidateReport(id);
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

  if (currentDeptFilter) params.set("dept", currentDeptFilter);
  else params.delete("dept");

  params.set("sort", currentSortKey);
  params.set("order", currentSortOrder);
  params.set("page", currentPage);
  params.set("view", currentView);

  if (activeCandidateId) params.set("candidate", activeCandidateId);
  else params.delete("candidate");

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
  if (params.has("dept")) {
    currentDeptFilter = params.get("dept");
    if (selectStatusSel) {
      selectStatusSel.setValue(currentDeptFilter, currentDeptFilter || "All Departments");
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

  if (params.has("candidate")) {
    const candId = params.get("candidate");
    setTimeout(() => {
      openCandidateReport(candId);
    }, 150);
  }
}

// ----------------------------------------------------
// Global Event Binding
// Wire Generate Share Link button in the report modal
const btnGenerateShareLink = document.getElementById('btn-generate-share-link');
if (btnGenerateShareLink) {
  btnGenerateShareLink.addEventListener('click', (e) => {
    e.stopPropagation();
    if (activeCandidateId) generateShareLink(activeCandidateId);
  });
}

// ============================================================
// SHAREABLE READ-ONLY VIEW — detects ?share=CAN-XXXX in URL
// ============================================================
function initShareView() {
  const params = new URLSearchParams(window.location.search);
  const shareId = params.get('share');
  if (!shareId) return;

  const overlay = document.getElementById('share-view-overlay');
  const body = document.getElementById('share-view-body');
  const idLabel = document.getElementById('share-view-candidate-id');
  if (!overlay || !body) return;

  const cand = candidates.find(c => c.id === shareId);
  if (!cand) {
    body.innerHTML = `<div style="text-align:center;padding:60px;color:#6B7280;font-size:14px;">Candidate report not found for ID: <strong>${shareId}</strong></div>`;
    overlay.style.display = 'block';
    return;
  }

  idLabel.textContent = cand.id;

  const hasScores = cand.scores && typeof cand.scores.resume !== 'undefined';
  const resumeScore = hasScores ? cand.scores.resume : 0;
  const screeningScore = hasScores ? cand.scores.screening : 0;
  const technicalScore = hasScores ? cand.scores.technical : 0;
  const overall = hasScores ? Math.round(resumeScore*0.2 + screeningScore*0.3 + technicalScore*0.5) : 0;

  const rw = scoreToWord(resumeScore);
  const scw = scoreToWord(screeningScore);
  const tw = scoreToWord(technicalScore);
  const ow = scoreToWord(overall);

  const grad = getAvatarGradient(cand.name);
  const initials = getInitials(cand.name);

  const decisionText = overall >= 85 ? 'Strongly Recommended' : overall >= 70 ? 'Recommended' : overall >= 50 ? 'Review Required' : 'Not Recommended';
  const decisionColor = overall >= 85 ? '#0D7A57' : overall >= 70 ? '#2563EB' : overall >= 50 ? '#B45309' : '#E24B4A';
  const decisionBg = overall >= 85 ? '#E6F7F2' : overall >= 70 ? '#EBF4FF' : overall >= 50 ? '#FEF3C7' : '#FEF0EF';

  const scoreCard = (label, word) => `
    <div style="background:#FFF;border:0.5px solid #E2DFD7;border-radius:10px;padding:16px;text-align:center;">
      <div style="font-size:10px;text-transform:uppercase;font-weight:700;color:#6B7280;letter-spacing:0.4px;margin-bottom:8px;">${label}</div>
      <div style="font-size:18px;font-weight:800;${SCORE_STYLES[word.cls].replace(/border:[^;]+;/,'')}border-radius:8px;padding:6px 14px;display:inline-block;">${word.label}</div>
    </div>`;

  body.innerHTML = `
    <!-- Header card -->
    <div style="background:#FFF;border:0.5px solid #E2DFD7;border-radius:14px;padding:24px;display:flex;align-items:center;gap:20px;flex-wrap:wrap;">
      <div style="width:64px;height:64px;border-radius:50%;background:${grad};display:flex;align-items:center;justify-content:center;color:#FFF;font-weight:700;font-size:22px;flex-shrink:0;">${initials}</div>
      <div style="flex:1;min-width:200px;">
        <h2 style="font-size:22px;font-weight:800;margin:0 0 6px;">${cand.name}</h2>
        <div style="display:flex;flex-wrap:wrap;gap:10px 18px;font-size:12px;color:#6B7280;">
          <span><strong style="color:#111;">Role:</strong> ${cand.role}</span>
          <span><strong style="color:#111;">Experience:</strong> ${cand.experience || 'N/A'}</span>
          <span><strong style="color:#111;">Qualification:</strong> ${cand.qualification || 'N/A'}</span>
          <span><strong style="color:#111;">ID:</strong> <code>${cand.id}</code></span>
          <span><strong style="color:#111;">Date:</strong> ${cand.reportDate || 'N/A'}</span>
        </div>
      </div>
      <div style="background:${decisionBg};color:${decisionColor};border-radius:8px;padding:10px 18px;font-size:13px;font-weight:700;text-align:center;flex-shrink:0;">${decisionText}</div>
    </div>

    <!-- Score cards -->
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;">
      ${scoreCard('Resume', rw)}
      ${scoreCard('Screening', scw)}
      ${scoreCard('Technical', tw)}
      ${scoreCard('Overall Match', ow)}
    </div>

    <!-- Skills -->
    ${cand.resumeData && cand.resumeData.skills ? `
    <div style="background:#FFF;border:0.5px solid #E2DFD7;border-radius:14px;padding:20px;">
      <h3 style="font-size:14px;font-weight:700;margin:0 0 12px;border-bottom:0.5px solid #EEEAE3;padding-bottom:8px;">Skills</h3>
      <div style="display:flex;flex-direction:column;gap:10px;">
        ${Object.entries(cand.resumeData.skills).map(([cat,skills]) => `
          <div><span style="font-size:10px;font-weight:700;text-transform:uppercase;color:#6B7280;letter-spacing:0.3px;">${cat}:</span>
          <span style="margin-left:8px;">${skills.map(s=>`<span style="background:#EBF4FF;color:#2563EB;border-radius:999px;padding:2px 8px;font-size:11px;font-weight:600;margin-right:4px;">${s}</span>`).join('')}</span></div>
        `).join('')}
      </div>
    </div>` : ''}

    <!-- Experience -->
    ${cand.resumeData && cand.resumeData.experience && cand.resumeData.experience.length ? `
    <div style="background:#FFF;border:0.5px solid #E2DFD7;border-radius:14px;padding:20px;">
      <h3 style="font-size:14px;font-weight:700;margin:0 0 12px;border-bottom:0.5px solid #EEEAE3;padding-bottom:8px;">Work Experience</h3>
      ${cand.resumeData.experience.map(exp => `
        <div style="padding:12px 0;border-bottom:0.5px solid #F3F4F6;">
          <div style="font-size:11px;font-weight:700;color:#1a7a4a;font-family:monospace;">${exp.period}</div>
          <div style="font-size:13px;font-weight:700;margin:2px 0;">${exp.role} <span style="font-weight:500;color:#6B7280;">@ ${exp.company}</span></div>
          <div style="font-size:12px;color:#6B7280;line-height:1.4;">${exp.description}</div>
        </div>`).join('')}
    </div>` : ''}

    <!-- Insights -->
    ${cand.insights && cand.insights.length ? `
    <div style="background:#FFF;border:0.5px solid #E2DFD7;border-radius:14px;padding:20px;">
      <h3 style="font-size:14px;font-weight:700;margin:0 0 12px;border-bottom:0.5px solid #EEEAE3;padding-bottom:8px;">Evidence-Based Insights</h3>
      ${cand.insights.map(i => `<div style="padding:8px 0;border-bottom:0.5px solid #F3F4F6;font-size:12px;">✓ ${i.text} <span style="color:#9CA3AF;font-size:11px;">— ${i.source}</span></div>`).join('')}
    </div>` : ''}

    <!-- Footer -->
    <div style="text-align:center;padding:16px;color:#9CA3AF;font-size:11px;">
      This is a read-only shareable report generated by <strong>ElastiCrew ATS</strong>. Last updated: ${cand.reportDate || 'N/A'}.
    </div>
  `;

  // Hide normal app UI, show share overlay
  document.querySelector('.app-container').style.display = 'none';
  overlay.style.display = 'block';
}

initShareView();

// ----------------------------------------------------
document.addEventListener("click", (e) => {
  if (!actionsDropdown.contains(e.target)) {
    hideActionMenu();
  }
});

// ----------------------------------------------------
// REDESIGNED REPORT MODAL HELPER FUNCTIONS & EVENT LISTENERS
// ----------------------------------------------------

function renderResumeTabContent(cand) {
  const eduPanel = document.getElementById("panel-edu");
  const skillsPanel = document.getElementById("panel-skills");
  const expPanel = document.getElementById("panel-exp");
  const certsPanel = document.getElementById("panel-certs");

  const hasResume = cand.resumeData;

  // 1. Education
  if (hasResume && cand.resumeData.education && cand.resumeData.education.length > 0) {
    let html = `<table class="ats-table" style="width:100%; font-size:11.5px; border-collapse: collapse;">
      <thead>
        <tr style="background:#FAF9F6; border-bottom: 0.5px solid #EEEAE3;">
          <th style="padding:6px; text-align:left;">Degree</th>
          <th style="padding:6px; text-align:left;">Institution</th>
          <th style="padding:6px; text-align:center;">Year</th>
          <th style="padding:6px; text-align:center;">Result</th>
        </tr>
      </thead>
      <tbody>`;
    cand.resumeData.education.forEach(e => {
      html += `<tr style="border-bottom: 0.5px solid #EEEAE3;">
        <td style="padding:6px; font-weight:600;">${e.degree}</td>
        <td style="padding:6px; color:var(--text-secondary);">${e.institution}</td>
        <td style="padding:6px; text-align:center;">${e.year}</td>
        <td style="padding:6px; text-align:center; font-weight:700;">${e.gpa}</td>
      </tr>`;
    });
    html += `</tbody></table>`;
    eduPanel.innerHTML = html;
  } else {
    eduPanel.innerHTML = `<div class="data-unavail-container">Data Not Available</div>`;
  }

  // 2. Skills
  if (hasResume && cand.resumeData.skills && Object.keys(cand.resumeData.skills).length > 0) {
    let html = `<div style="display:flex; flex-direction:column; gap:10px;">`;
    Object.keys(cand.resumeData.skills).forEach(category => {
      const skillsList = cand.resumeData.skills[category];
      html += `<div style="display:flex; flex-direction:column; gap:4px;">
        <span style="font-size:10px; font-weight:700; color:var(--text-secondary); text-transform:uppercase; letter-spacing:0.3px;">${category}</span>
        <div style="display:flex; flex-wrap:wrap; gap:6px;">`;
      skillsList.forEach(s => {
        html += `<span class="role-tag-blue" style="font-size:10.5px; padding:3px 8px; cursor:pointer;" onclick="highlightSkillEvidence('${s}')">${s}</span>`;
      });
      html += `</div></div>`;
    });
    html += `</div>`;
    skillsPanel.innerHTML = html;
  } else {
    skillsPanel.innerHTML = `<div class="data-unavail-container">Data Not Available</div>`;
  }

  // 3. Experience
  if (hasResume && cand.resumeData.experience && cand.resumeData.experience.length > 0) {
    let html = `<div class="timeline-container" style="gap:14px; margin:0; padding:0;">`;
    cand.resumeData.experience.forEach(exp => {
      html += `<div class="timeline-item" style="padding-left:14px;">
        <div class="timeline-dot completed" style="width:8px; height:8px; left:-4px;"></div>
        <div class="timeline-content" style="padding:0;">
          <div style="font-size:10px; font-family:var(--font-mono); color:var(--active-nav-bg); font-weight:700;">${exp.period}</div>
          <h4 style="font-size:12px; font-weight:700; margin-top:2px;">${exp.role} <span style="font-weight:500; color:var(--text-secondary);">@ ${exp.company}</span></h4>
          <p style="font-size:11px; color:var(--text-secondary); margin-top:2px; line-height:1.4;">${exp.description}</p>
        </div>
      </div>`;
    });
    html += `</div>`;
    expPanel.innerHTML = html;
  } else {
    expPanel.innerHTML = `<div class="data-unavail-container">Data Not Available</div>`;
  }

  // 4. Certifications
  if (hasResume && cand.resumeData.certifications && cand.resumeData.certifications.length > 0) {
    let html = `<div style="display:grid; grid-template-columns:1fr; gap:8px;">`;
    cand.resumeData.certifications.forEach(c => {
      html += `<div style="background:#FAF9F6; border:0.5px solid #E2DFD7; border-radius:6px; padding:10px; display:flex; justify-content:space-between; align-items:center;">
        <div>
          <h4 style="font-size:11.5px; font-weight:700; color:var(--text-primary);">${c.name}</h4>
          <span style="font-size:10px; color:var(--text-secondary);">${c.issuer}</span>
        </div>
        <span style="font-size:10px; font-family:var(--font-mono); font-weight:700; color:var(--active-nav-bg);">${c.year}</span>
      </div>`;
    });
    html += `</div>`;
    certsPanel.innerHTML = html;
  } else {
    certsPanel.innerHTML = `<div class="data-unavail-container">Data Not Available</div>`;
  }
}

function renderRadarChart(scores) {
  const svg = document.getElementById("radar-chart-svg");
  if (!svg) return;
  svg.innerHTML = "";

  const cx = 150;
  const cy = 120;
  const r = 80;
  
  const axes = [
    "Technical Knowledge",
    "Problem Solving",
    "Communication",
    "Leadership",
    "Professionalism"
  ];
  const numAxes = axes.length;
  
  // Concentric levels
  for (let level = 1; level <= 5; level++) {
    const radiusLevel = (r / 5) * level;
    let points = [];
    for (let i = 0; i < numAxes; i++) {
      const angle = (i * 2 * Math.PI) / numAxes - Math.PI / 2;
      const x = cx + radiusLevel * Math.cos(angle);
      const y = cy + radiusLevel * Math.sin(angle);
      points.push(`${x},${y}`);
    }
    const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    polygon.setAttribute("points", points.join(" "));
    polygon.setAttribute("fill", "none");
    polygon.setAttribute("stroke", "#E2DFD7");
    polygon.setAttribute("stroke-width", "0.5");
    svg.appendChild(polygon);
    
    // Level values
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", cx + 2);
    text.setAttribute("y", cy - radiusLevel + 3);
    text.setAttribute("fill", "#9ca3af");
    text.setAttribute("font-size", "7px");
    text.textContent = level * 20;
    svg.appendChild(text);
  }

  // Draw axis lines and labels
  let labelCoords = [];
  for (let i = 0; i < numAxes; i++) {
    const angle = (i * 2 * Math.PI) / numAxes - Math.PI / 2;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", cx);
    line.setAttribute("y1", cy);
    line.setAttribute("x2", x);
    line.setAttribute("y2", y);
    line.setAttribute("stroke", "#E2DFD7");
    line.setAttribute("stroke-width", "1");
    svg.appendChild(line);
    
    const labelDistance = r + 16;
    const lx = cx + labelDistance * Math.cos(angle);
    const ly = cy + labelDistance * Math.sin(angle);
    labelCoords.push({ x: lx, y: ly, name: axes[i] });
  }

  // Draw labels
  labelCoords.forEach((coord, i) => {
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", coord.x);
    text.setAttribute("y", coord.y);
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("dominant-baseline", "middle");
    text.setAttribute("fill", "#6b7280");
    text.setAttribute("font-size", "8.5px");
    text.setAttribute("font-weight", "600");
    text.textContent = coord.name.split(" ")[0]; // just first word
    svg.appendChild(text);
  });

  // Calculate score polygon points
  let points = [];
  axes.forEach((axis, i) => {
    const scoreVal = scores[axis] || 0;
    const scorePercent = scoreVal / 100;
    const angle = (i * 2 * Math.PI) / numAxes - Math.PI / 2;
    const x = cx + r * scorePercent * Math.cos(angle);
    const y = cy + r * scorePercent * Math.sin(angle);
    points.push(`${x},${y}`);
  });

  // Score polygon
  const scorePolygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  scorePolygon.setAttribute("points", points.join(" "));
  scorePolygon.setAttribute("fill", "rgba(26,122,74,0.25)");
  scorePolygon.setAttribute("stroke", "#1a7a4a");
  scorePolygon.setAttribute("stroke-width", "1.5");
  svg.appendChild(scorePolygon);

  // Markers
  axes.forEach((axis, i) => {
    const scoreVal = scores[axis] || 0;
    const scorePercent = scoreVal / 100;
    const angle = (i * 2 * Math.PI) / numAxes - Math.PI / 2;
    const x = cx + r * scorePercent * Math.cos(angle);
    const y = cy + r * scorePercent * Math.sin(angle);
    
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", "4");
    circle.setAttribute("fill", "#1a7a4a");
    circle.setAttribute("stroke", "#FFFFFF");
    circle.setAttribute("stroke-width", "1");
    circle.style.cursor = "pointer";
    circle.addEventListener("click", () => {
      // Find candidate from activeCandidateId
      const cand = candidates.find(c => c.id === activeCandidateId);
      if (cand) {
        showCompetencyEvidence(axis, scoreVal, cand);
      }
    });
    svg.appendChild(circle);
  });
}

function showCompetencyEvidence(key, val, cand) {
  const panel = document.getElementById("competency-evidence-panel");
  const header = document.getElementById("evidence-panel-header");
  const body = document.getElementById("evidence-panel-body");
  
  if (cand && cand.technicalData && cand.technicalData.evidence && cand.technicalData.evidence[key]) {
    header.textContent = `Evidence: ${key} (${val}/100)`;
    body.textContent = cand.technicalData.evidence[key];
    panel.style.display = "block";
    panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  } else {
    panel.style.display = "none";
  }
}

function highlightSkillEvidence(skillName) {
  const searchInput = document.getElementById("transcript-search-input");
  
  if (searchInput) {
    const filterSelect = document.getElementById("report-section-filter");
    if (filterSelect && filterSelect.value !== "all" && filterSelect.value !== "screening") {
      filterSelect.value = "screening";
      applySectionFilter("screening");
    }
    
    searchInput.value = skillName;
    const event = new Event('input', { bubbles: true });
    searchInput.dispatchEvent(event);
    
    const transcriptOuter = document.querySelector(".transcript-outer-panel");
    if (transcriptOuter) {
      transcriptOuter.classList.add("highlight-flash");
      setTimeout(() => transcriptOuter.classList.remove("highlight-flash"), 1500);
    }
    showToast(`Filtering video transcript for "${skillName}" evidence...`);
  }
}

function applySectionFilter(section) {
  const panelOverview = document.getElementById("main-panel-overview");
  const panelResume = document.getElementById("main-panel-resume");
  const panelScreening = document.getElementById("main-panel-screening");
  const panelTechnical = document.getElementById("main-panel-technical");
  const panelNotesHistory = document.getElementById("main-panel-notes-history");

  const panels = [panelOverview, panelResume, panelScreening, panelTechnical, panelNotesHistory];
  panels.forEach(p => {
    if (p) p.style.display = "none";
  });

  if (section === "summary") {
    if (panelOverview) panelOverview.style.display = "grid";
  } else if (section === "resume") {
    if (panelResume) panelResume.style.display = "flex";
  } else if (section === "screening") {
    if (panelScreening) panelScreening.style.display = "grid";
  } else if (section === "technical") {
    if (panelTechnical) panelTechnical.style.display = "block";
  } else if (section === "notes-history") {
    if (panelNotesHistory) panelNotesHistory.style.display = "grid";
  }

  if (section !== "screening") {
    const player = document.getElementById("report-video-player");
    if (player) player.pause();
  }
}

function initRedesignedReportEvents() {
  const modal = document.getElementById("report-modal");
  if (modal) {
    // Main report tabs switching
    modal.querySelectorAll(".main-report-tab").forEach(btn => {
      btn.addEventListener("click", () => {
        const tabName = btn.dataset.tab;
        switchMainReportTab(tabName);
      });
    });

    // 1. Resume tab switching
    modal.querySelectorAll(".tab-triggers .tab-trigger").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const tabName = btn.dataset.tab;
        modal.querySelectorAll(".tab-triggers .tab-trigger").forEach(t => t.classList.remove("active"));
        btn.classList.add("active");
        modal.querySelectorAll(".tab-content-panels .tab-panel").forEach(p => p.style.display = "none");
        const panel = document.getElementById(`panel-${tabName}`);
        if (panel) panel.style.display = "block";
      });
    });
    
    // 2. Transcript Search filter
    const transcriptSearch = document.getElementById("transcript-search-input");
    if (transcriptSearch) {
      transcriptSearch.addEventListener("input", (e) => {
        const q = e.target.value.toLowerCase().trim();
        modal.querySelectorAll("#transcript-scroll-area .transcript-bubble").forEach(bubble => {
          const text = bubble.textContent.toLowerCase();
          if (text.includes(q)) {
            bubble.style.display = "block";
          } else {
            bubble.style.display = "none";
          }
        });
      });
    }

    // Transcript click to jump timestamp
    const transcriptArea = document.getElementById("transcript-scroll-area");
    if (transcriptArea) {
      transcriptArea.addEventListener("click", (e) => {
        const bubble = e.target.closest(".transcript-bubble");
        if (!bubble) return;
        
        const timeStr = bubble.dataset.time;
        if (!timeStr) return;
        
        const parts = timeStr.split(":");
        let seconds = 0;
        if (parts.length === 2) {
          seconds = parseInt(parts[0]) * 60 + parseInt(parts[1]);
        } else if (parts.length === 3) {
          seconds = parseInt(parts[0]) * 3600 + parseInt(parts[1]) * 60 + parseInt(parts[2]);
        }
        
        const player = document.getElementById("report-video-player");
        if (player && player.style.display !== "none") {
          player.currentTime = seconds;
          player.play();
          showToast(`Jumping to video screening timestamp ${timeStr}...`);
        }
        
        modal.querySelectorAll(".transcript-bubble").forEach(b => b.classList.remove("active-bubble"));
        bubble.classList.add("active-bubble");
      });
    }

    // Copy transcript
    const btnCopyTranscript = document.getElementById("btn-copy-transcript");
    if (btnCopyTranscript) {
      btnCopyTranscript.addEventListener("click", () => {
        const cand = candidates.find(c => c.id === activeCandidateId);
        if (!cand || !cand.screeningData || !cand.screeningData.transcript) return;
        
        const text = cand.screeningData.transcript.map(b => `[${b.time}] ${b.speaker}: ${b.text}`).join("\n");
        navigator.clipboard.writeText(text).then(() => {
          showToast("Screening transcript copied to clipboard!");
        }).catch(() => {
          showToast("Failed to copy transcript.", "error");
        });
      });
    }

    // Helper functions for downloads
    const downloadCandidateTranscript = (cand) => {
      if (!cand || !cand.screeningData || !cand.screeningData.transcript) return;
      const text = cand.screeningData.transcript.map(b => `[${b.time}] ${b.speaker}: ${b.text}`).join("\n");
      const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${cand.name.replace(/\s+/g, '_')}_screening_transcript.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast("Downloading screening transcript file...");
    };

    const downloadCandidateResume = (cand) => {
      if (!cand || !cand.resumeData) return;
      let resumeText = `==================================================\n`;
      resumeText += `CANDIDATE RESUME PROFILE: ${cand.name.toUpperCase()}\n`;
      resumeText += `Role: ${cand.role || ""}\n`;
      resumeText += `Experience: ${cand.experience || ""}\n`;
      resumeText += `Qualification: ${cand.qualification || ""}\n`;
      resumeText += `==================================================\n\n`;

      if (cand.resumeData.education && cand.resumeData.education.length > 0) {
        resumeText += `EDUCATION\n`;
        cand.resumeData.education.forEach(edu => {
          resumeText += `- ${edu.degree} | ${edu.institution} (${edu.year}) | GPA: ${edu.gpa}\n`;
        });
        resumeText += `\n`;
      }

      if (cand.resumeData.skills) {
        resumeText += `SKILLS\n`;
        Object.keys(cand.resumeData.skills).forEach(cat => {
          resumeText += `- ${cat}: ${cand.resumeData.skills[cat].join(", ")}\n`;
        });
        resumeText += `\n`;
      }

      if (cand.resumeData.experience && cand.resumeData.experience.length > 0) {
        resumeText += `WORK EXPERIENCE\n`;
        cand.resumeData.experience.forEach(exp => {
          resumeText += `- ${exp.role} at ${exp.company} (${exp.period})\n`;
          resumeText += `  Description: ${exp.description}\n`;
        });
        resumeText += `\n`;
      }

      if (cand.resumeData.certifications && cand.resumeData.certifications.length > 0) {
        resumeText += `CERTIFICATIONS\n`;
        cand.resumeData.certifications.forEach(cert => {
          resumeText += `- ${cert.name} (Issued by: ${cert.issuer}, ${cert.year})\n`;
        });
        resumeText += `\n`;
      }
      
      const blob = new Blob([resumeText], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${cand.name.replace(/\s+/g, '_')}_resume.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast(`Downloading resume for ${cand.name}...`);
    };

    // Download transcript
    const btnDlTranscript = document.getElementById("btn-dl-transcript");
    if (btnDlTranscript) {
      btnDlTranscript.addEventListener("click", () => {
        const cand = candidates.find(c => c.id === activeCandidateId);
        if (cand) downloadCandidateTranscript(cand);
      });
    }

    // 3. More actions toggle
    const btnMoreActions = document.getElementById("btn-more-actions");
    const moreActionsPanel = document.getElementById("more-actions-panel");
    if (btnMoreActions && moreActionsPanel) {
      btnMoreActions.addEventListener("click", (e) => {
        e.stopPropagation();
        const display = moreActionsPanel.style.display;
        moreActionsPanel.style.display = display === "flex" || display === "block" ? "none" : "block";
      });
      document.addEventListener("click", () => {
        moreActionsPanel.style.display = "none";
      });
    }

    // Section Dropdown selection handler
    const filterSelect = document.getElementById("report-section-filter");
    if (filterSelect) {
      filterSelect.addEventListener("change", (e) => {
        applySectionFilter(e.target.value);
      });
    }

    // PDF & Print Report
    ["btn-pdf-report", "btn-print-report"].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener("click", (e) => {
          e.stopPropagation();
          showToast("Opening system print dialogue...");
          window.print();
        });
      }
    });

    // Export Report (JSON)
    const btnExportReport = document.getElementById("btn-export-report");
    if (btnExportReport) {
      btnExportReport.addEventListener("click", (e) => {
        e.stopPropagation();
        const cand = candidates.find(c => c.id === activeCandidateId);
        if (!cand) return;
        const jsonStr = JSON.stringify(cand, null, 2);
        const blob = new Blob([jsonStr], { type: "application/json;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${cand.name.replace(/\s+/g, '_')}_report.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast(`Exported candidate profile JSON for ${cand.name}.`);
      });
    }

    // Share Report & Secure Link (Copy to Clipboard)
    ["btn-share-report", "btn-secure-link"].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener("click", (e) => {
          e.stopPropagation();
          const cand = candidates.find(c => c.id === activeCandidateId);
          if (!cand) return;
          const shareUrl = `${window.location.origin}${window.location.pathname}?candidate=${cand.id}`;
          navigator.clipboard.writeText(shareUrl).then(() => {
            showToast(`Shareable report link copied to clipboard!`);
          }).catch(() => {
            showToast("Failed to copy link.", "error");
          });
        });
      }
    });

    // Download Resume actions
    ["act-dl-resume", "btn-download-resume-modal"].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener("click", (e) => {
          e.stopPropagation();
          const cand = candidates.find(c => c.id === activeCandidateId);
          if (cand) downloadCandidateResume(cand);
        });
      }
    });

    // Download Transcript action
    const actDlTranscript = document.getElementById("act-dl-transcript");
    if (actDlTranscript) {
      actDlTranscript.addEventListener("click", (e) => {
        e.stopPropagation();
        const cand = candidates.find(c => c.id === activeCandidateId);
        if (cand) downloadCandidateTranscript(cand);
      });
    }

    // View Resume action
    const btnViewResumeModal = document.getElementById("btn-view-resume-modal");
    if (btnViewResumeModal) {
      btnViewResumeModal.addEventListener("click", (e) => {
        e.stopPropagation();
        const filterSel = document.getElementById("report-section-filter");
        if (filterSel) {
          filterSel.value = "resume";
        }
        applySectionFilter("resume");
      });
    }

    // View Raw Scores modal overlay
    const actViewRaw = document.getElementById("act-view-raw");
    if (actViewRaw) {
      actViewRaw.addEventListener("click", (e) => {
        e.stopPropagation();
        const cand = candidates.find(c => c.id === activeCandidateId);
        if (!cand) return;
        const rawScoresModal = document.getElementById("raw-scores-modal");
        const rawScoresPre = document.getElementById("raw-scores-pre");
        if (rawScoresModal && rawScoresPre) {
          rawScoresPre.textContent = JSON.stringify({
            id: cand.id,
            name: cand.name,
            role: cand.role,
            scores: cand.scores,
            technicalCompetencies: cand.technicalData ? cand.technicalData.competencies : null,
            communicationMetrics: cand.screeningData ? cand.screeningData.communication : null
          }, null, 2);
          rawScoresModal.classList.add("active");
        }
      });
    }

    // View Interview Recording action
    const actViewRecording = document.getElementById("act-view-recording");
    if (actViewRecording) {
      actViewRecording.addEventListener("click", (e) => {
        e.stopPropagation();
        if (activeCandidateId) {
          openScreeningVideoModal(activeCandidateId);
        }
      });
    }

    // Bind Close listeners for raw scores modal
    const rawScoresModal = document.getElementById("raw-scores-modal");
    const closeRaw1 = document.getElementById("close-raw-scores-modal");
    const closeRaw2 = document.getElementById("close-raw-scores-btn");
    if (closeRaw1) {
      closeRaw1.addEventListener("click", () => rawScoresModal.classList.remove("active"));
    }
    if (closeRaw2) {
      closeRaw2.addEventListener("click", () => rawScoresModal.classList.remove("active"));
    }
    if (rawScoresModal) {
      rawScoresModal.addEventListener("click", (e) => {
        if (e.target === rawScoresModal) rawScoresModal.classList.remove("active");
      });
    }
    
    // 7. KPI Score Cards Clicks - Switch to appropriate report tabs
    const kpiCards = [
      { id: "kpi-card-resume", tab: "resume" },
      { id: "kpi-card-screening", tab: "screening" },
      { id: "kpi-card-technical", tab: "technical" },
      { id: "kpi-card-final", tab: "overview" }
    ];
    kpiCards.forEach(card => {
      const el = document.getElementById(card.id);
      if (el) {
        el.addEventListener("click", () => {
          switchMainReportTab(card.tab);
          el.classList.add("highlight-flash");
          setTimeout(() => el.classList.remove("highlight-flash"), 1500);
        });
      }
    });

    // Auto-save HR notes in drawer on input or blur
    const notesTextarea = document.getElementById("rep-hr-notes-textarea");
    if (notesTextarea) {
      const saveNotes = () => {
        if (activeCandidateId) {
          const cand = candidates.find(c => c.id === activeCandidateId);
          if (cand) {
            const oldNotes = cand.notes || "";
            const newNotes = notesTextarea.value.trim();
            if (oldNotes !== newNotes) {
              cand.notes = newNotes;
              // Refresh lists and counters
              renderCandidates();
              updateKpiCounters();
              // Also update Grid Card preview notes if it exists
              const gridCardNotes = document.querySelector(`#grid-card-${cand.id} p`);
              if (gridCardNotes) {
                gridCardNotes.textContent = newNotes || "No notes added yet.";
              }
              showToast("HR notes saved.");
            }
          }
        }
      };
      
      notesTextarea.addEventListener("blur", saveNotes);
      notesTextarea.addEventListener("change", saveNotes);
    }
  }
}

// ----------------------------------------------------
// Hiring Funnel Chart & Collapse Logic
// ----------------------------------------------------
function updateFunnelChart() {
  const total = 180 + candidates.length;
  const screened = 139 + candidates.filter(c => c.botScreeningDone).length;
  const shortlisted = 53 + candidates.filter(c => c.hiringStage === "Shortlisted").length;
  const offered = 25 + candidates.filter(c => c.hiringStage === "Offer Extended").length;

  const pctScreened = total > 0 ? Math.round((screened / total) * 100) : 0;
  const pctShortlisted = total > 0 ? Math.round((shortlisted / total) * 100) : 0;
  const pctOffered = total > 0 ? Math.round((offered / total) * 100) : 0;

  const rows = document.querySelectorAll(".funnel-row");
  if (rows.length >= 4) {
    // Uploaded
    const bar0 = rows[0].querySelector(".funnel-bar-fill");
    const text0 = rows[0].querySelector(".funnel-bar-text");
    if (bar0 && text0) {
      bar0.style.width = "100%";
      text0.textContent = `${total} Candidates (100%)`;
    }

    // Screened
    const bar1 = rows[1].querySelector(".funnel-bar-fill");
    const text1 = rows[1].querySelector(".funnel-bar-text");
    if (bar1 && text1) {
      bar1.style.width = `${pctScreened}%`;
      text1.textContent = `${screened} Candidates (${pctScreened}% conversion)`;
    }

    // Shortlisted
    const bar2 = rows[2].querySelector(".funnel-bar-fill");
    const text2 = rows[2].querySelector(".funnel-bar-text");
    if (bar2 && text2) {
      bar2.style.width = `${pctShortlisted}%`;
      text2.textContent = `${shortlisted} Candidates (${pctShortlisted}% conversion)`;
    }

    // Offered
    const bar3 = rows[3].querySelector(".funnel-bar-fill");
    const text3 = rows[3].querySelector(".funnel-bar-text");
    if (bar3 && text3) {
      bar3.style.width = `${pctOffered}%`;
      text3.textContent = `${offered} Candidates (${pctOffered}% conversion)`;
    }
  }
}

function initFunnelCollapse() {
  const funnelToggle = document.getElementById("funnel-toggle");
  const funnelBody = document.getElementById("funnel-body");
  const funnelArrow = document.getElementById("funnel-arrow");

  if (funnelToggle && funnelBody && funnelArrow) {
    funnelToggle.addEventListener("click", () => {
      const isCollapsed = funnelBody.style.maxHeight === "0px";
      if (isCollapsed) {
        funnelBody.style.maxHeight = "500px";
        funnelArrow.style.transform = "rotate(0deg)";
      } else {
        funnelBody.style.maxHeight = "0px";
        funnelArrow.style.transform = "rotate(-90deg)";
      }
    });
  }
}

// ----------------------------------------------------
// Interactive Modals and Pop-overs Controllers
// ----------------------------------------------------
function openStageChangeDropdown(candidateId, anchorEl) {
  activeCandidateId = candidateId;
  const dropdown = document.getElementById("stage-change-dropdown");
  if (!dropdown) return;

  dropdown.style.display = "block";
  const rect = anchorEl.getBoundingClientRect();
  const dropdownWidth = dropdown.offsetWidth;
  const top = rect.bottom + window.scrollY + 6;
  const left = rect.right - dropdownWidth + window.scrollX;

  dropdown.style.top = `${top}px`;
  dropdown.style.left = `${left}px`;
}

function openScreeningVideoModal(candidateId) {
  const cand = candidates.find(c => c.id === candidateId);
  if (!cand) return;

  const videoModal = document.getElementById("video-screening-modal");
  const tag = document.getElementById("video-modal-candidate-tag");
  if (tag) {
    tag.textContent = `${cand.name} — AI Screening (${cand.role})`;
  }
  const modalVideoPlayer = document.getElementById("modal-video-player");
  if (modalVideoPlayer && cand.screeningData && cand.screeningData.videoUrl) {
    modalVideoPlayer.src = cand.screeningData.videoUrl;
    modalVideoPlayer.play().catch(err => console.log("Video auto-play failed: ", err));
  }
  if (videoModal) {
    videoModal.classList.add("active");
  }
}

function getFormattedDate() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const d = new Date();
  const month = months[d.getMonth()];
  const day = String(d.getDate()).padStart(2, '0');
  const year = d.getFullYear();
  return `${month} ${day}, ${year}`;
}

function flashElement(el) {
  if (!el) return;
  el.classList.remove("highlight-flash");
  void el.offsetWidth; // Trigger reflow
  el.classList.add("highlight-flash");
  el.scrollIntoView({ behavior: "smooth", block: "center" });
}

// Initialize stage change popover item clicks
const stageDropdown = document.getElementById("stage-change-dropdown");
if (stageDropdown) {
  stageDropdown.querySelectorAll(".dropdown-item").forEach(item => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      const newStage = item.dataset.stage;
      if (activeCandidateId && newStage) {
        const cand = candidates.find(c => c.id === activeCandidateId);
        if (cand) {
          const oldStage = cand.hiringStage;
          if (oldStage !== newStage) {
            cand.hiringStage = newStage;
            
            // Add milestone to timeline
            if (!cand.timeline) cand.timeline = [];
            const formattedDate = getFormattedDate();
            cand.timeline.push({
              date: formattedDate,
              event: `Stage Updated`,
              desc: `Recruitment status moved from "${oldStage}" to "${newStage}".`
            });

            renderCandidates();
            updateKpiCounters();
            showToast(`Stage updated to ${newStage} for ${cand.name}.`);
          }
        }
      }
      stageDropdown.style.display = "none";
    });
  });
}

// Close listeners for screening video modal
const videoModal = document.getElementById("video-screening-modal");
const closeVideo1 = document.getElementById("close-video-modal");
const closeVideo2 = document.getElementById("close-video-modal-btn");

function closeVideoModal() {
  const videoModalEl = document.getElementById("video-screening-modal");
  if (videoModalEl) videoModalEl.classList.remove("active");
  const modalVideoPlayer = document.getElementById("modal-video-player");
  if (modalVideoPlayer) {
    modalVideoPlayer.pause();
    modalVideoPlayer.src = "";
  }
}

if (closeVideo1) closeVideo1.addEventListener("click", closeVideoModal);
if (closeVideo2) closeVideo2.addEventListener("click", closeVideoModal);
if (videoModal) {
  videoModal.addEventListener("click", (e) => {
    if (e.target === videoModal) closeVideoModal();
  });
}

// Document click outside listeners
document.addEventListener("click", (e) => {
  const stageDropdown = document.getElementById("stage-change-dropdown");
  if (stageDropdown && !stageDropdown.contains(e.target)) {
    stageDropdown.style.display = "none";
  }
});

// Page Initializer
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    setupFilterDropdowns();
    loadUrlParams();
    updateKpiCounters();
    triggerReload();
    initRedesignedReportEvents();
    initFunnelCollapse();
  });
} else {
  setupFilterDropdowns();
  loadUrlParams();
  updateKpiCounters();
  triggerReload();
  initRedesignedReportEvents();
  initFunnelCollapse();
}
