// Initial Recruiter Mock Database
let candidates = [
  {
    id: "CAN-1024",
    name: "Dianne Russell",
    phone: "(406) 555-0120",
    email: "dianne.russell@example.com",
    role: "Frontend Developer",
    status: "Selected",
    notes: "Excellent performance in coding round. Strong knowledge of React/Next.js and Tailwind CSS.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Jest", "Webpack", "Responsive Design"],
    experience: [
      { role: "Senior Frontend Developer", company: "TechHive Solutions", duration: "2023 - Present", desc: "Led development of new SaaS analytics dashboard using React and Tailwind CSS. Optimised render cycles, reducing initial load time by 35%." },
      { role: "Software Engineer (UI)", company: "WebFlow Co", duration: "2020 - 2023", desc: "Developed and maintained corporate landing page builder. Collaborated with designers to design UI components and system guidelines." }
    ],
    education: [
      { degree: "B.E. in Computer Science", school: "Boston University", year: "2016 - 2020" }
    ],
    parsingMetadata: { confidence: 96, fileName: "Dianne_Russell_Resume.pdf", fileSize: "1.4 MB", parsedAt: "2026-06-03 10:15 AM", parserVersion: "v4.2-neural" }
  },
  {
    id: "CAN-1025",
    name: "Albert Flores",
    phone: "(302) 555-0107",
    email: "albert.flores@example.com",
    role: "Backend Engineer",
    status: "Pending",
    notes: "Awaiting response for technical screening scheduler invitation.",
    skills: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker", "AWS", "REST APIs", "GraphQL"],
    experience: [
      { role: "Backend Developer", company: "DataSync Systems", duration: "2022 - Present", desc: "Built scalable REST APIs handling 5M+ daily requests. Designed relational database schemas in PostgreSQL and migration scripts." },
      { role: "Junior Software Engineer", company: "SoftStack Technologies", duration: "2020 - 2022", desc: "Maintained legacy backend microservices and implemented data indexing tools using Redis and Elasticsearch." }
    ],
    education: [
      { degree: "B.Tech in Information Technology", school: "UT Austin", year: "2016 - 2020" }
    ],
    parsingMetadata: { confidence: 91, fileName: "Albert_Flores_CV.pdf", fileSize: "950 KB", parsedAt: "2026-06-03 10:20 AM", parserVersion: "v4.2-neural" }
  },
  {
    id: "CAN-1026",
    name: "Kathryn Murphy",
    phone: "(208) 555-0112",
    email: "kathryn.murphy@example.com",
    role: "HR Executive",
    status: "On Hold",
    notes: "Candidate has salary expectations slightly above budget. Holding for review with management.",
    skills: ["Talent Acquisition", "Employee Relations", "HRIS Tools", "Negotiation", "Onboarding", "Conflict Resolution"],
    experience: [
      { role: "HR Consultant", company: "Enterprise People Corp", duration: "2023 - Present", desc: "Managed end-to-end recruitment pipelines for technical and operational roles. Implemented new HRIS tool, reducing onboarding delays." },
      { role: "People Operations Associate", company: "ScaleUp Digital", duration: "2021 - 2023", desc: "Administered payroll, benefits, and conflict resolution processes. Hosted internal workshops and cultural feedback programs." }
    ],
    education: [
      { degree: "M.B.A in Human Resources", school: "NYU Stern School of Business", year: "2019 - 2021" }
    ],
    parsingMetadata: { confidence: 93, fileName: "Kathryn_Murphy_HR.pdf", fileSize: "1.1 MB", parsedAt: "2026-06-03 10:25 AM", parserVersion: "v4.2-neural" }
  },
  {
    id: "CAN-1027",
    name: "Courtney Henry",
    phone: "(307) 555-0133",
    email: "courtney.henry@example.com",
    role: "Frontend Developer",
    status: "Rejected",
    notes: "Lacked hands-on experience in production environments. Weak design mock implementation.",
    skills: ["HTML5", "CSS3", "JavaScript", "Vue.js", "SASS", "Bootstrap", "Git"],
    experience: [
      { role: "Web Developer", company: "Creative Pixel Agency", duration: "2022 - 2025", desc: "Developed responsive landing pages for regional e-commerce clients. Maintained WordPress templates and integrated basic custom styles." }
    ],
    education: [
      { degree: "B.Sc. in Web Design", school: "Ohio State University", year: "2018 - 2022" }
    ],
    parsingMetadata: { confidence: 88, fileName: "Courtney_Henry_Design.pdf", fileSize: "820 KB", parsedAt: "2026-06-03 10:30 AM", parserVersion: "v4.2-neural" }
  },
  {
    id: "CAN-1028",
    name: "Jane Cooper",
    phone: "(209) 555-0104",
    email: "jane.cooper@example.com",
    role: "Backend Engineer",
    status: "Cancelled",
    notes: "Withdrew candidacy due to relocation issues.",
    skills: ["Python", "Django", "PostgreSQL", "Kubernetes", "MongoDB", "gRPC", "CI/CD Pipelines"],
    experience: [
      { role: "Backend Architect", company: "Apex Systems Labs", duration: "2021 - 2026", desc: "Architected microservices migration to Kubernetes. Integrated gRPC communications for real-time internal event streaming pipelines." }
    ],
    education: [
      { degree: "M.S. in Computer Science", school: "Georgia Tech", year: "2019 - 2021" }
    ],
    parsingMetadata: { confidence: 95, fileName: "Jane_Cooper_Tech_Resume.pdf", fileSize: "1.3 MB", parsedAt: "2026-06-03 10:35 AM", parserVersion: "v4.2-neural" }
  }
];

// Cascading Select Options Configuration
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
        roles: ["React Native Developer", "iOS Engineer"]
      }
    }
  },
  product: {
    label: "Product Management",
    subDepts: {
      pm: {
        label: "Product Operations",
        roles: ["Product Manager", "Associate PM"]
      },
      docs: {
        label: "Technical Writing",
        roles: ["Technical Writer", "Documentation Lead"]
      }
    }
  },
  design: {
    label: "Product Design",
    subDepts: {
      uiux: {
        label: "UI/UX Design",
        roles: ["UI/UX Designer", "Product Designer"]
      },
      brand: {
        label: "Brand Graphics",
        roles: ["Graphic Designer", "Visual Illustrator"]
      }
    }
  },
  hr: {
    label: "Human Resources",
    subDepts: {
      ta: {
        label: "Talent Acquisition",
        roles: ["HR Executive", "Recruitment Consultant"]
      },
      relations: {
        label: "Employee Relations",
        roles: ["HR Operations Specialist", "People Partner"]
      }
    }
  },
  marketing: {
    label: "Marketing & Sales",
    subDepts: {
      digital: {
        label: "Digital Media",
        roles: ["Marketing Manager", "Social Media Coordinator"]
      },
      growth: {
        label: "Growth Marketing",
        roles: ["SEO Analyst", "Growth Specialist"]
      }
    }
  }
};

// State Variables
let currentCandidateCounter = 1029;
let activeCandidateId = null;
let currentSearchQuery = "";

// Gradients for Candidate Avatars to look Premium
const avatarGradients = [
  "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)", // Purple/Indigo
  "linear-gradient(135deg, #10B981 0%, #059669 100%)", // Green
  "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)", // Amber/Yellow
  "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)", // Red
  "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)", // Blue
  "linear-gradient(135deg, #EC4899 0%, #DB2777 100%)", // Pink
  "linear-gradient(135deg, #6B7280 0%, #4B5563 100%)"  // Slate
];

// Init DOM Elements
const selectDept = document.getElementById("select-dept");
const selectSubDept = document.getElementById("select-sub-dept");
const selectRole = document.getElementById("select-role");
const dropZone = document.getElementById("drop-zone");
const fileInput = document.getElementById("file-input");
const btnBrowseTrigger = document.getElementById("btn-browse-trigger");
const progressListContainer = document.getElementById("progress-list-container");
const candidateSearch = document.getElementById("candidate-search");
const candidatesTableBody = document.getElementById("candidates-table-body");
const actionsDropdown = document.getElementById("actions-menu-dropdown");
const toastHolder = document.getElementById("toast-holder");

// Modals
const notesModal = document.getElementById("notes-modal");
const notesModalTitle = document.getElementById("notes-modal-title");
const notesTextarea = document.getElementById("notes-textarea");
const btnSaveNotes = document.getElementById("btn-save-notes");
const btnCancelNotes = document.getElementById("btn-cancel-notes");
const closeNotesModal = document.getElementById("close-notes-modal");

const profileModal = document.getElementById("profile-modal");
const profileModalTitle = document.getElementById("profile-modal-title");
const profId = document.getElementById("prof-id");
const profName = document.getElementById("prof-name");
const profEmail = document.getElementById("prof-email");
const profPhone = document.getElementById("prof-phone");
const profRole = document.getElementById("prof-role");
const profStatus = document.getElementById("prof-status");
const profNotes = document.getElementById("prof-notes");
const btnCloseProfile = document.getElementById("btn-close-profile");
const closeProfileModal = document.getElementById("close-profile-modal");

// ----------------------------------------------------
// UI Cascading Select logic
// ----------------------------------------------------
selectDept.addEventListener("change", (e) => {
  const deptVal = e.target.value;
  selectSubDept.innerHTML = '<option value="" disabled selected>Select Sub Department</option>';
  selectRole.innerHTML = '<option value="" disabled selected>Select Role</option>';
  selectRole.disabled = true;

  if (deptVal && deptData[deptVal]) {
    const subs = deptData[deptVal].subDepts;
    for (const key in subs) {
      const option = document.createElement("option");
      option.value = key;
      option.textContent = subs[key].label;
      selectSubDept.appendChild(option);
    }
    selectSubDept.disabled = false;
  } else {
    selectSubDept.disabled = true;
  }
});

selectSubDept.addEventListener("change", (e) => {
  const deptVal = selectDept.value;
  const subVal = e.target.value;
  selectRole.innerHTML = '<option value="" disabled selected>Select Role</option>';

  if (deptVal && subVal && deptData[deptVal].subDepts[subVal]) {
    const roles = deptData[deptVal].subDepts[subVal].roles;
    roles.forEach(role => {
      const option = document.createElement("option");
      option.value = role;
      option.textContent = role;
      selectRole.appendChild(option);
    });
    selectRole.disabled = false;
  } else {
    selectRole.disabled = true;
  }
});

// ----------------------------------------------------
// Toast Notification Engine
// ----------------------------------------------------
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = "toast";
  
  // Custom border based on toast status
  if (type === "warning") {
    toast.style.borderLeftColor = "#EF6C00";
  } else if (type === "error") {
    toast.style.borderLeftColor = "#C62828";
  } else {
    toast.style.borderLeftColor = "#2A7C4F";
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

  // Animate slide-out after 3.2 seconds
  setTimeout(() => {
    toast.classList.add("removing");
    toast.addEventListener("animationend", () => {
      toast.remove();
    });
  }, 3200);
}

// Helper: Generate Initials
function getInitials(name) {
  if (!name) return "KL";
  const parts = name.trim().split(" ");
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return parts[0].substring(0, 2).toUpperCase();
}

// Helper: Select deterministic avatar gradient
function getAvatarGradient(name) {
  let code = 0;
  for (let i = 0; i < name.length; i++) {
    code += name.charCodeAt(i);
  }
  return avatarGradients[code % avatarGradients.length];
}

// ----------------------------------------------------
// Render ATS Table
// ----------------------------------------------------
function renderCandidatesTable() {
  candidatesTableBody.innerHTML = "";
  
  // Filter list based on search
  const query = currentSearchQuery.trim().toLowerCase();
  const filteredCandidates = candidates.filter(candidate => {
    return (
      candidate.id.toLowerCase().includes(query) ||
      candidate.name.toLowerCase().includes(query) ||
      candidate.email.toLowerCase().includes(query) ||
      candidate.role.toLowerCase().includes(query)
    );
  });

  if (filteredCandidates.length === 0) {
    candidatesTableBody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; color: var(--text-secondary); height: 120px; font-style: italic;">
          No matching candidates found. Select categories above to drag-and-drop new resumes.
        </td>
      </tr>
    `;
    return;
  }

  filteredCandidates.forEach(cand => {
    const tr = document.createElement("tr");
    tr.id = `candidate-row-${cand.id}`;
    
    // Initials & gradient
    const initials = getInitials(cand.name);
    const grad = getAvatarGradient(cand.name);

    // HR Note Tooltip Class
    const noteClass = cand.notes ? "has-notes" : "";
    const tooltipText = cand.notes ? cand.notes : "No notes yet. Click ⋮ menu to add note.";

    tr.innerHTML = `
      <td class="col-id">${cand.id}</td>
      <td>
        <div class="col-candidate">
          <div class="candidate-avatar" style="background: ${grad}">${initials}</div>
          <div class="candidate-info">
            <span class="candidate-name">${cand.name}</span>
            <span class="candidate-phone">${cand.phone}</span>
          </div>
        </div>
      </td>
      <td class="col-email" title="${cand.email}">${cand.email}</td>
      <td>
        <span class="role-tag">${cand.role}</span>
      </td>
      <td>
        <span class="status-pill ${cand.status.toLowerCase().replace(" ", "-")}">${cand.status}</span>
      </td>
      <td>
        <button class="notes-btn ${noteClass}" data-id="${cand.id}" data-tooltip="${tooltipText}">
          <svg viewBox="0 0 24 24" stroke="currentColor" fill="none"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a.75.75 0 01-1.074-.765 6 6 0 001.257-2.737C3.038 16.289 1 14.368 1 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" /></svg>
        </button>
      </td>
      <td>
        <div class="actions-cell">
          <button class="btn-view" data-id="${cand.id}">View</button>
          <button class="btn-action-trigger" data-id="${cand.id}">
            <svg viewBox="0 0 24 24" stroke="currentColor" fill="none"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" /></svg>
          </button>
        </div>
      </td>
    `;
    candidatesTableBody.appendChild(tr);
  });
}

// ----------------------------------------------------
// Search Input Handler
// ----------------------------------------------------
candidateSearch.addEventListener("input", (e) => {
  currentSearchQuery = e.target.value;
  renderCandidatesTable();
});

// ----------------------------------------------------
// Drag & Drop / File Upload Actions
// ----------------------------------------------------
btnBrowseTrigger.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", (e) => {
  handleFiles(e.target.files);
  fileInput.value = ""; // clear
});

// Dragover styling triggers
["dragenter", "dragover"].forEach(eventName => {
  dropZone.addEventListener(eventName, (e) => {
    e.preventDefault();
    dropZone.classList.add("dragover");
  }, false);
});

["dragleave", "drop"].forEach(eventName => {
  dropZone.addEventListener(eventName, (e) => {
    e.preventDefault();
    dropZone.classList.remove("dragover");
  }, false);
});

dropZone.addEventListener("drop", (e) => {
  const dt = e.dataTransfer;
  const files = dt.files;
  handleFiles(files);
}, false);

function handleFiles(files) {
  if (files.length === 0) return;
  
  // Validation: Check if dropdowns are fully filled out
  const deptVal = selectDept.value;
  const subDeptVal = selectSubDept.value;
  const roleVal = selectRole.value;

  if (!deptVal || !subDeptVal || !roleVal) {
    showToast("Please select Department, Sub Department, and Role before uploading.", "warning");
    return;
  }

  // Parse and process all selected files
  Array.from(files).forEach(file => {
    if (file.type !== "application/pdf" && !file.name.endsWith(".pdf")) {
      showToast(`Skipped '${file.name}': Only PDF files are supported.`, "error");
      return;
    }
    
    // Simulate upload and parse progress
    simulateFileUpload(file, roleVal);
  });
}

function simulateFileUpload(file, roleVal) {
  // Create progress bar card element
  const progressId = "progress-" + Math.random().toString(36).substring(2, 9);
  const item = document.createElement("div");
  item.className = "progress-item";
  item.id = progressId;
  
  item.innerHTML = `
    <div class="progress-item-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
    </div>
    <div class="progress-item-details">
      <div class="progress-item-title">
        <span style="max-width: 250px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${file.name}</span>
        <span class="progress-percentage" id="${progressId}-pct">0%</span>
      </div>
      <div class="progress-bar-container">
        <div class="progress-bar-fill" id="${progressId}-bar" style="width: 0%"></div>
      </div>
    </div>
  `;

  progressListContainer.appendChild(item);

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 15) + 5;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      
      // Update UI element complete
      document.getElementById(`${progressId}-pct`).textContent = "Parsing...";
      document.getElementById(`${progressId}-bar`).style.width = "100%";

      setTimeout(() => {
        // Complete Parsing and Add to database
        const newCandidate = createParsedCandidate(file.name, roleVal);
        candidates.unshift(newCandidate); // Add to the top
        renderCandidatesTable();
        
        // Success feedback
        showToast(`AI parsed successfully: ${newCandidate.name} (ID: ${newCandidate.id})`);
        
        // Remove progress element
        item.style.animation = "toastSlideOut 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards";
        item.addEventListener("animationend", () => {
          item.remove();
        });
      }, 600);
    } else {
      document.getElementById(`${progressId}-pct`).textContent = `${progress}%`;
      document.getElementById(`${progressId}-bar`).style.width = `${progress}%`;
    }
  }, 100);
}

// Generate candidate details from filename
function createParsedCandidate(filename, roleVal) {
  // Convert "john_doe_resume.pdf" or "Jane-Doe.pdf" to "John Doe"
  let cleanName = filename.replace(/\.[^/.]+$/, ""); // Strip extension
  cleanName = cleanName.replace(/[_-]/g, " "); // Replace separators with spaces
  cleanName = cleanName.replace(/resume/gi, ""); // Remove 'resume' case-insensitively
  cleanName = cleanName.trim();
  
  // Format casing (capitalize first letter of each word)
  cleanName = cleanName.split(/\s+/).map(word => {
    if (!word) return "";
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join(" ");

  if (!cleanName || cleanName.length < 2) {
    cleanName = "Applicant Profile";
  }

  // Generate phone
  const rand1 = Math.floor(100 + Math.random() * 900);
  const rand2 = Math.floor(100 + Math.random() * 900);
  const rand3 = Math.floor(1000 + Math.random() * 9000);
  const mockPhone = `(${rand1}) ${rand2}-${rand3}`;

  // Generate email
  const userPrefix = cleanName.toLowerCase().replace(/\s+/g, ".");
  const mockEmail = `${userPrefix}@example.com`;

  // ID Counter
  const newId = `CAN-${currentCandidateCounter++}`;

  // Dynamic skill matching based on role
  let skills = ["JavaScript", "Git", "Problem Solving", "Communication"];
  const roleLower = roleVal.toLowerCase();
  if (roleLower.includes("frontend") || roleLower.includes("ui developer")) {
    skills = ["React", "TypeScript", "Next.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3", "Redux", "Jest", "Git"];
  } else if (roleLower.includes("backend") || roleLower.includes("architect")) {
    skills = ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "REST APIs", "gRPC", "Git"];
  } else if (roleLower.includes("design") || roleLower.includes("designer") || roleLower.includes("illustrator")) {
    skills = ["Figma", "Adobe XD", "UI/UX Design", "Wireframing", "Prototyping", "User Research", "Heuristic Evaluation", "Interaction Design"];
  } else if (roleLower.includes("mobile") || roleLower.includes("ios") || roleLower.includes("react native")) {
    skills = ["React Native", "Swift", "iOS SDK", "Objective-C", "Mobile UI", "App Store Deployment", "Redux", "TypeScript", "Git"];
  } else if (roleLower.includes("product") || roleLower.includes("pm")) {
    skills = ["Product Strategy", "Roadmapping", "Agile/Scrum", "User Stories", "Market Research", "Jira", "A/B Testing", "SQL"];
  } else if (roleLower.includes("hr") || roleLower.includes("recruitment") || roleLower.includes("partner") || roleLower.includes("people")) {
    skills = ["Talent Acquisition", "Employee Relations", "HRIS", "Onboarding", "Conflict Resolution", "Behavioral Interviewing", "Sourcing"];
  } else if (roleLower.includes("writer") || roleLower.includes("documentation")) {
    skills = ["Technical Writing", "Markdown", "API Documentation", "DITA/XML", "Confluence", "Copyediting", "Git", "SaaS Docs"];
  } else if (roleLower.includes("marketing") || roleLower.includes("seo") || roleLower.includes("growth")) {
    skills = ["Growth Marketing", "SEO", "Google Analytics", "Content Strategy", "Email Campaigns", "Copywriting", "A/B Testing", "Semrush"];
  }

  // Dynamic experience matching
  const experience = [
    {
      role: `Senior ${roleVal}`,
      company: "Apex Global Solutions",
      duration: "2023 - Present",
      desc: `Led core strategic initiatives as a Senior ${roleVal}. Improved development/operations workflow speed by 25% and delivered key milestones on time.`
    },
    {
      role: roleVal,
      company: "Vanguard Tech Labs",
      duration: "2021 - 2023",
      desc: `Contributed as a key member of the ${roleVal} division. Designed scalable architectures, improved test coverage, and optimized stakeholder communications.`
    }
  ];

  // Dynamic education matching
  const education = [
    {
      degree: "B.S. in Computer Science",
      school: "State Engineering University",
      year: "2017 - 2021"
    }
  ];
  if (roleLower.includes("hr") || roleLower.includes("product") || roleLower.includes("marketing")) {
    education[0].degree = "B.B.A. in Business Administration";
  } else if (roleLower.includes("design") || roleLower.includes("illustrator")) {
    education[0].degree = "B.F.A. in Graphic & Interaction Design";
  }

  // Dynamic metadata
  const confidence = Math.floor(Math.random() * 11) + 87; // 87% - 97%
  const sizes = ["1.1 MB", "980 KB", "1.3 MB", "1.5 MB", "840 KB"];
  const fileSize = sizes[Math.floor(Math.random() * sizes.length)];
  const parsedAt = new Date().toLocaleString("en-US", { 
    year: "numeric", 
    month: "short", 
    day: "numeric", 
    hour: "2-digit", 
    minute: "2-digit", 
    hour12: true 
  });

  const parsingMetadata = {
    confidence: confidence,
    fileName: filename,
    fileSize: fileSize,
    parsedAt: parsedAt,
    parserVersion: "v4.2-neural"
  };

  return {
    id: newId,
    name: cleanName,
    phone: mockPhone,
    email: mockEmail,
    role: roleVal,
    status: "Pending",
    notes: "",
    skills: skills,
    experience: experience,
    education: education,
    parsingMetadata: parsingMetadata
  };
}

// ----------------------------------------------------
// Action Dropdown Menu & Modals handling
// ----------------------------------------------------

// Hide menu function
function hideActionMenu() {
  actionsDropdown.style.display = "none";
  document.querySelectorAll(".btn-action-trigger.active").forEach(btn => {
    btn.classList.remove("active");
  });
}

// Context Menu triggering
candidatesTableBody.addEventListener("click", (e) => {
  // Check if click was view button
  const viewBtn = e.target.closest(".btn-view");
  if (viewBtn) {
    const id = viewBtn.dataset.id;
    openProfileView(id);
    return;
  }

  // Check if click was notes button
  const noteBtn = e.target.closest(".notes-btn");
  if (noteBtn) {
    const id = noteBtn.dataset.id;
    openNotesEditor(id);
    return;
  }

  // Check if click was triple-dot button
  const triggerBtn = e.target.closest(".btn-action-trigger");
  if (triggerBtn) {
    e.stopPropagation();
    const id = triggerBtn.dataset.id;
    
    // Toggle active state
    if (triggerBtn.classList.contains("active")) {
      hideActionMenu();
      return;
    }
    
    hideActionMenu();
    activeCandidateId = id;
    
    // Position menu relative to trigger button
    const rect = triggerBtn.getBoundingClientRect();
    actionsDropdown.style.display = "block";
    const dropdownWidth = actionsDropdown.offsetWidth;
    const top = rect.bottom + window.scrollY + 6;
    const left = rect.right - dropdownWidth + window.scrollX;
    
    actionsDropdown.style.top = `${top}px`;
    actionsDropdown.style.left = `${left}px`;
    triggerBtn.classList.add("active");
  }
});

// Close actions menu when clicking outside
document.addEventListener("click", (e) => {
  if (!actionsDropdown.contains(e.target)) {
    hideActionMenu();
  }
});

// Context Menu Action Listeners
document.getElementById("menu-view-profile").addEventListener("click", () => {
  if (activeCandidateId) {
    openProfileView(activeCandidateId);
  }
  hideActionMenu();
});

document.getElementById("menu-add-note").addEventListener("click", () => {
  if (activeCandidateId) {
    openNotesEditor(activeCandidateId);
  }
  hideActionMenu();
});

document.getElementById("menu-remove-candidate").addEventListener("click", () => {
  if (activeCandidateId) {
    const targetId = activeCandidateId;
    const targetRow = document.getElementById(`candidate-row-${targetId}`);
    
    if (targetRow) {
      targetRow.style.opacity = "0.2";
      targetRow.style.transition = "opacity 0.25s ease";
      
      setTimeout(() => {
        candidates = candidates.filter(cand => cand.id !== targetId);
        renderCandidatesTable();
        showToast(`Candidate ${targetId} successfully removed.`, "warning");
      }, 250);
    }
  }
  hideActionMenu();
});

// Status change trigger inside context menu
document.querySelectorAll(".status-change-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const statusVal = e.currentTarget.dataset.status;
    if (activeCandidateId && statusVal) {
      const cand = candidates.find(c => c.id === activeCandidateId);
      if (cand) {
        const oldStatus = cand.status;
        cand.status = statusVal;
        renderCandidatesTable();
        showToast(`Status updated to ${statusVal} for ${cand.name}`, "success");
      }
    }
    hideActionMenu();
  });
});

// ----------------------------------------------------
// Notes Modal Controller
// ----------------------------------------------------
function openNotesEditor(candidateId) {
  const cand = candidates.find(c => c.id === candidateId);
  if (!cand) return;
  
  activeCandidateId = candidateId;
  notesModalTitle.textContent = `Candidate Notes — ${cand.name} (${cand.id})`;
  notesTextarea.value = cand.notes || "";
  
  notesModal.classList.add("active");
  notesTextarea.focus();
}

function closeNotes() {
  notesModal.classList.remove("active");
  activeCandidateId = null;
}

btnSaveNotes.addEventListener("click", () => {
  if (activeCandidateId) {
    const cand = candidates.find(c => c.id === activeCandidateId);
    if (cand) {
      cand.notes = notesTextarea.value.trim();
      renderCandidatesTable();
      showToast(`HR notes updated for ${cand.name}`);
    }
  }
  closeNotes();
});

btnCancelNotes.addEventListener("click", closeNotes);
closeNotesModal.addEventListener("click", closeNotes);

// Close modal clicking overlay
notesModal.addEventListener("click", (e) => {
  if (e.target === notesModal) closeNotes();
});

// ----------------------------------------------------
// Profile Detail Modal Controller
// ----------------------------------------------------
function openProfileView(candidateId) {
  const cand = candidates.find(c => c.id === candidateId);
  if (!cand) return;
  
  profId.textContent = cand.id;
  profName.textContent = cand.name;
  profEmail.textContent = cand.email;
  profPhone.textContent = cand.phone;
  profRole.textContent = cand.role;
  profNotes.textContent = cand.notes ? cand.notes : "No recruitment remarks saved yet. Use 'Add HR Note' inside candidate actions to update.";
  
  // Color code status inside detail
  profStatus.textContent = cand.status;
  profStatus.className = `status-pill ${cand.status.toLowerCase().replace(" ", "-")}`;
  
  // Populate avatar initials & background
  const profAvatar = document.getElementById("prof-avatar");
  if (profAvatar) {
    profAvatar.textContent = getInitials(cand.name);
    profAvatar.style.background = getAvatarGradient(cand.name);
  }
  
  // Populate parser insights & metadata
  const meta = cand.parsingMetadata || {
    confidence: 90,
    fileName: `${cand.name.replace(/\s+/g, "_")}_Resume.pdf`,
    fileSize: "1.2 MB",
    parsedAt: "2026-06-03 10:00 AM"
  };
  
  const profConfidence = document.getElementById("prof-confidence");
  const profConfidenceBar = document.getElementById("prof-confidence-bar");
  const profFilename = document.getElementById("prof-filename");
  const profFilesize = document.getElementById("prof-filesize");
  const profParsedAt = document.getElementById("prof-parsedat");
  
  if (profConfidence) profConfidence.textContent = `${meta.confidence}%`;
  if (profConfidenceBar) profConfidenceBar.style.width = `${meta.confidence}%`;
  if (profFilename) {
    profFilename.textContent = meta.fileName;
    profFilename.title = meta.fileName;
  }
  if (profFilesize) profFilesize.textContent = meta.fileSize;
  if (profParsedAt) profParsedAt.textContent = meta.parsedAt;
  
  // Populate Skills
  const skillsContainer = document.getElementById("prof-skills-container");
  if (skillsContainer) {
    skillsContainer.innerHTML = "";
    const skillsList = cand.skills || ["Communication", "Problem Solving", "Teamwork"];
    skillsList.forEach(skill => {
      const tag = document.createElement("span");
      tag.className = "parsed-skill-tag";
      tag.textContent = skill;
      skillsContainer.appendChild(tag);
    });
  }
  
  // Populate Experience Timeline
  const expTimeline = document.getElementById("prof-experience-timeline");
  if (expTimeline) {
    expTimeline.innerHTML = "";
    const experienceList = cand.experience || [
      { role: cand.role, company: "Previous Company", duration: "2021 - Present", desc: "Successfully performed core job responsibilities." }
    ];
    
    experienceList.forEach(exp => {
      const item = document.createElement("div");
      item.className = "parsed-timeline-item";
      item.innerHTML = `
        <div class="parsed-timeline-dot"></div>
        <div class="parsed-timeline-content">
          <div class="parsed-timeline-header">
            <h5 class="parsed-timeline-title" style="margin: 0; padding: 0;">${exp.role}</h5>
            <span class="parsed-timeline-date">${exp.duration}</span>
          </div>
          <div class="parsed-timeline-subtitle">${exp.company}</div>
          <p class="parsed-timeline-desc">${exp.desc}</p>
        </div>
      `;
      expTimeline.appendChild(item);
    });
  }
  
  // Populate Education
  const eduContainer = document.getElementById("prof-education-container");
  if (eduContainer) {
    eduContainer.innerHTML = "";
    const educationList = cand.education || [
      { degree: "Bachelor's Degree", school: "Graduated University", year: "2016 - 2020" }
    ];
    
    educationList.forEach(edu => {
      const card = document.createElement("div");
      card.className = "parsed-edu-card";
      card.innerHTML = `
        <div class="parsed-edu-degree">${edu.degree}</div>
        <div class="parsed-edu-school">${edu.school}</div>
        <div class="parsed-edu-year">${edu.year}</div>
      `;
      eduContainer.appendChild(card);
    });
  }
  
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
// Page Initializer
// ----------------------------------------------------
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    renderCandidatesTable();
  });
} else {
  renderCandidatesTable();
}

