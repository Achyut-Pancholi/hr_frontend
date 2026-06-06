console.log("=== app.js: Script execution started ===");
// Initial Recruiter Mock Database
let candidates = [
  {
    id: "CAN-1024",
    name: "Dianne Russell",
    phone: "(406) 555-0120",
    email: "dianne.russell@example.com",
    role: "Frontend Developer",
    status: "Shortlisted",
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
    status: "Resume Received",
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
    status: "Under Review",
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
let currentFilterStage = "all";
let selectedCandidateIds = new Set();

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
const toastHolder = document.getElementById("toast-holder");

// Collapsible Upload Panel Elements
const cardUploadResumes = document.getElementById("card-upload-resumes");
const btnToggleUpload = document.getElementById("btn-toggle-upload");
const uploadSetupFlow = document.getElementById("upload-setup-flow");

// Drawers & Overlays
const notesDrawer = document.getElementById("notes-drawer");
const notesDrawerOverlay = document.getElementById("notes-drawer-overlay");
const notesTextarea = document.getElementById("notes-textarea");
const btnSaveNotes = document.getElementById("btn-save-notes");
const btnCancelNotes = document.getElementById("btn-cancel-notes");
const btnCloseNotesDrawer = document.getElementById("close-notes-drawer");

const profileDrawer = document.getElementById("profile-drawer");
const profileDrawerOverlay = document.getElementById("profile-drawer-overlay");
const profId = document.getElementById("prof-id");
const profName = document.getElementById("prof-name");
const profEmail = document.getElementById("prof-email");
const profPhone = document.getElementById("prof-phone");
const profRole = document.getElementById("prof-role");
const profStatus = document.getElementById("prof-status");
const profNotes = document.getElementById("prof-notes");
const btnCloseProfile = document.getElementById("btn-close-profile");
const btnCloseProfileDrawer = document.getElementById("close-profile-drawer");
const drawerMoveStageSelect = document.getElementById("drawer-move-stage-select");

// Inline Dropdowns
const stageChangeDropdown = document.getElementById("stage-change-dropdown");

// Bulk actions elements
const bulkSelectAll = document.getElementById("bulk-select-all");
const bulkActionsDock = document.getElementById("bulk-actions-dock");
const bulkSelectedCount = document.getElementById("bulk-selected-count");
const bulkChangeStageSelect = document.getElementById("bulk-change-stage-select");
const btnBulkExport = document.getElementById("btn-bulk-export");
const btnBulkDelete = document.getElementById("btn-bulk-delete");
const btnClearBulk = document.getElementById("btn-clear-bulk");

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
  updateStepIndicator();
  updateDropZoneText();
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
  updateStepIndicator();
  updateDropZoneText();
});

selectRole.addEventListener("change", () => {
  updateStepIndicator();
  updateDropZoneText();
});

// ----------------------------------------------------
// Toast Notification Engine
// ----------------------------------------------------
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = "toast";
  
  // Custom border based on toast status
  if (type === "warning") {
    toast.style.borderLeftColor = "#F59E0B";
  } else if (type === "error") {
    toast.style.borderLeftColor = "#E24B4A";
  } else {
    toast.style.borderLeftColor = "#1D9E75";
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
  
  // Filter list based on search and selected stage pill
  const query = currentSearchQuery.trim().toLowerCase();
  const filteredCandidates = candidates.filter(cand => {
    const matchesSearch = (
      cand.id.toLowerCase().includes(query) ||
      cand.name.toLowerCase().includes(query) ||
      cand.email.toLowerCase().includes(query) ||
      cand.role.toLowerCase().includes(query)
    );
    const matchesStage = currentFilterStage === "all" || cand.status.toLowerCase() === currentFilterStage.toLowerCase();
    return matchesSearch && matchesStage;
  });

  // Check state of bulk select all checkbox
  bulkSelectAll.checked = filteredCandidates.length > 0 && filteredCandidates.every(cand => selectedCandidateIds.has(cand.id));

  if (filteredCandidates.length === 0) {
    candidatesTableBody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; color: var(--text-secondary); height: 120px; font-style: italic;">
          No matching candidates found. Select categories above to drag-and-drop new resumes.
        </td>
      </tr>
    `;
    updateSummaryCounters();
    return;
  }

  filteredCandidates.forEach(cand => {
    const tr = document.createElement("tr");
    tr.id = `candidate-row-${cand.id}`;
    
    // Apply selected class if checked
    if (selectedCandidateIds.has(cand.id)) {
      tr.classList.add("selected");
    }
    
    // Initials & gradient
    const initials = getInitials(cand.name);
    const grad = getAvatarGradient(cand.name);

    // HR Note Tooltip Class
    const noteClass = cand.notes ? "has-notes" : "";
    const tooltipText = cand.notes ? cand.notes : "No notes yet.";

    tr.innerHTML = `
      <td class="col-checkbox" onclick="event.stopPropagation();">
        <input type="checkbox" class="row-select" data-id="${cand.id}" ${selectedCandidateIds.has(cand.id) ? 'checked' : ''}>
      </td>
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
        <span class="status-pill clickable ${cand.status.toLowerCase().replace(" ", "-")}" data-id="${cand.id}">
          ${cand.status}
        </span>
      </td>
      <td>
        <div class="actions-cell" style="justify-content: flex-end;" onclick="event.stopPropagation();">
          <button class="btn-action-icon btn-view-drawer" data-id="${cand.id}" title="View Profile">
            <svg viewBox="0 0 24 24" stroke="currentColor" fill="none"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </button>
          <button class="btn-action-icon btn-note-drawer" data-id="${cand.id}" title="Add Note">
            <svg viewBox="0 0 24 24" stroke="currentColor" fill="none"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>
          </button>
          <button class="btn-action-icon btn-stage-dropdown" data-id="${cand.id}" title="Change Stage">
            <svg viewBox="0 0 24 24" stroke="currentColor" fill="none"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" /></svg>
          </button>
        </div>
      </td>
    `;
    
    // Clicking row (except check or action buttons) opens profile drawer
    tr.addEventListener("click", (e) => {
      openProfileDrawer(cand.id);
    });

    // Checkbox selection toggle
    const checkbox = tr.querySelector(".row-select");
    checkbox.addEventListener("change", (e) => {
      if (e.target.checked) {
        selectedCandidateIds.add(cand.id);
        tr.classList.add("selected");
      } else {
        selectedCandidateIds.delete(cand.id);
        tr.classList.remove("selected");
      }
      updateBulkDock();
      // Re-evaluate select all header
      bulkSelectAll.checked = filteredCandidates.every(c => selectedCandidateIds.has(c.id));
    });

    // Inline pill click opens inline dropdown
    const pill = tr.querySelector(".status-pill");
    pill.addEventListener("click", (e) => {
      e.stopPropagation();
      openInlineStageDropdown(pill, cand.id);
    });

    // Action buttons inside row
    tr.querySelector(".btn-view-drawer").addEventListener("click", (e) => {
      e.stopPropagation();
      openProfileDrawer(cand.id);
    });

    tr.querySelector(".btn-note-drawer").addEventListener("click", (e) => {
      e.stopPropagation();
      openNotesDrawer(cand.id);
    });

    tr.querySelector(".btn-stage-dropdown").addEventListener("click", (e) => {
      e.stopPropagation();
      openInlineStageDropdown(e.currentTarget, cand.id);
    });

    candidatesTableBody.appendChild(tr);
  });
  
  updateSummaryCounters();
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
    cleanName = "Candidate Profile";
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
    status: "Resume Received",
    notes: "",
    skills: skills,
    experience: experience,
    education: education,
    parsingMetadata: parsingMetadata
  };
}

// ----------------------------------------------------
// Collapsible Upload Resumes Card & Steps Logic
// ----------------------------------------------------
btnToggleUpload.addEventListener("click", () => {
  const isCollapsed = cardUploadResumes.classList.toggle("collapsed");
  dropZone.classList.toggle("compact", isCollapsed);
  updateDropZoneText();
});

function updateDropZoneText() {
  const isCompact = dropZone.classList.contains("compact");
  const heading = document.getElementById("upload-zone-heading");
  const subheading = document.getElementById("upload-zone-subheading");
  const roleVal = selectRole.value;
  const deptText = selectDept.options[selectDept.selectedIndex]?.text;

  if (isCompact) {
    if (roleVal) {
      heading.innerHTML = `Drag & drop resumes to upload for <strong style="color: var(--active-nav-bg);">${roleVal}</strong> (${deptText})`;
    } else {
      heading.innerHTML = `No job selected. Click expand arrow to select department and role.`;
    }
    subheading.style.display = "none";
  } else {
    heading.textContent = "Drag & drop resumes here";
    subheading.textContent = "Supports PDF up to 5MB each.";
    subheading.style.display = "block";
  }
}

function updateStepIndicator() {
  const deptVal = selectDept.value;
  const roleVal = selectRole.value;
  const badge = document.getElementById("step-indicator-badge");
  const text = document.getElementById("step-indicator-text");
  
  if (!deptVal) {
    badge.className = "step-badge";
    badge.textContent = "Step 1 of 2";
    text.textContent = "Select job department and sub-department";
  } else if (!roleVal) {
    badge.className = "step-badge";
    badge.textContent = "Step 1 of 2";
    text.textContent = "Select target role for candidate uploads";
  } else {
    badge.className = "step-badge complete";
    badge.textContent = "✓ Step 1 Complete";
    text.innerHTML = ` &nbsp;|&nbsp; <span class="step-badge">Step 2 of 2</span> Drag and drop candidate resumes below for <strong style="color: var(--active-nav-bg);">${roleVal}</strong>`;
  }
}

// ----------------------------------------------------
// Summary Pill-counters & Filtering
// ----------------------------------------------------
function updateSummaryCounters() {
  const total = candidates.length;
  const parsed = candidates.filter(c => c.status.toLowerCase() === "resume received").length;
  const underReview = candidates.filter(c => c.status.toLowerCase() === "under review").length;
  const onHold = candidates.filter(c => c.status.toLowerCase() === "on hold").length;

  document.getElementById("count-total").textContent = total;
  document.getElementById("count-parsed").textContent = parsed;
  document.getElementById("count-under-review").textContent = underReview;
  document.getElementById("count-on-hold").textContent = onHold;
}

document.querySelectorAll(".summary-pill").forEach(pill => {
  pill.addEventListener("click", () => {
    document.querySelectorAll(".summary-pill").forEach(p => p.classList.remove("active"));
    pill.classList.add("active");
    currentFilterStage = pill.dataset.filter;
    renderCandidatesTable();
  });
});

// ----------------------------------------------------
// Sliding Side Drawers Control
// ----------------------------------------------------

// Profile Drawer
function openProfileDrawer(candidateId) {
  const cand = candidates.find(c => c.id === candidateId);
  if (!cand) return;
  
  activeCandidateId = candidateId;
  
  profId.textContent = cand.id;
  profName.textContent = cand.name;
  profEmail.textContent = cand.email;
  profPhone.textContent = cand.phone;
  profRole.textContent = cand.role;
  profNotes.textContent = cand.notes ? cand.notes : "No recruitment remarks saved yet.";
  
  profStatus.textContent = cand.status;
  profStatus.className = `status-pill ${cand.status.toLowerCase().replace(" ", "-")}`;
  
  drawerMoveStageSelect.value = cand.status;
  
  const profAvatar = document.getElementById("prof-avatar");
  if (profAvatar) {
    profAvatar.textContent = getInitials(cand.name);
    profAvatar.style.background = getAvatarGradient(cand.name);
  }
  
  const meta = cand.parsingMetadata || {
    confidence: 90,
    fileName: `${cand.name.replace(/\s+/g, "_")}_Resume.pdf`,
    fileSize: "1.2 MB",
    parsedAt: "2026-06-03 10:00 AM"
  };
  
  document.getElementById("prof-confidence").textContent = `${meta.confidence}%`;
  document.getElementById("prof-confidence-bar").style.width = `${meta.confidence}%`;
  document.getElementById("prof-filename").textContent = meta.fileName;
  document.getElementById("prof-filesize").textContent = meta.fileSize;
  
  const skillsContainer = document.getElementById("prof-skills-container");
  skillsContainer.innerHTML = "";
  const skillsList = cand.skills || [];
  skillsList.forEach(skill => {
    const tag = document.createElement("span");
    tag.className = "parsed-skill-tag";
    tag.textContent = skill;
    skillsContainer.appendChild(tag);
  });
  
  const expTimeline = document.getElementById("prof-experience-timeline");
  expTimeline.innerHTML = "";
  const experienceList = cand.experience || [];
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
  
  const eduContainer = document.getElementById("prof-education-container");
  eduContainer.innerHTML = "";
  const educationList = cand.education || [];
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
  
  profileDrawer.classList.add("active");
  profileDrawerOverlay.classList.add("active");
}

function closeProfileDrawer() {
  profileDrawer.classList.remove("active");
  profileDrawerOverlay.classList.remove("active");
  activeCandidateId = null;
}

btnCloseProfile.addEventListener("click", closeProfileDrawer);
btnCloseProfileDrawer.addEventListener("click", closeProfileDrawer);
profileDrawerOverlay.addEventListener("click", closeProfileDrawer);

// Move stage dropdown inside profile drawer
drawerMoveStageSelect.addEventListener("change", (e) => {
  const newStage = e.target.value;
  if (activeCandidateId && newStage) {
    const cand = candidates.find(c => c.id === activeCandidateId);
    if (cand) {
      cand.status = newStage;
      profStatus.textContent = newStage;
      profStatus.className = `status-pill ${newStage.toLowerCase().replace(" ", "-")}`;
      renderCandidatesTable();
      updateSummaryCounters();
      showToast(`Pipeline stage updated to ${newStage} for ${cand.name}`);
    }
  }
});

// Notes Drawer
function openNotesDrawer(candidateId) {
  const cand = candidates.find(c => c.id === candidateId);
  if (!cand) return;
  
  activeCandidateId = candidateId;
  document.getElementById("notes-drawer-title").textContent = `Candidate Notes — ${cand.name} (${cand.id})`;
  notesTextarea.value = cand.notes || "";
  
  notesDrawer.classList.add("active");
  notesDrawerOverlay.classList.add("active");
  notesTextarea.focus();
}

function closeNotesDrawer() {
  notesDrawer.classList.remove("active");
  notesDrawerOverlay.classList.remove("active");
  activeCandidateId = null;
}

btnCancelNotes.addEventListener("click", closeNotesDrawer);
btnCloseNotesDrawer.addEventListener("click", closeNotesDrawer);
notesDrawerOverlay.addEventListener("click", closeNotesDrawer);

btnSaveNotes.addEventListener("click", () => {
  if (activeCandidateId) {
    const cand = candidates.find(c => c.id === activeCandidateId);
    if (cand) {
      cand.notes = notesTextarea.value.trim();
      renderCandidatesTable();
      showToast(`HR Notes saved for ${cand.name}`);
      
      // Update profile drawer notes text inline if open for the same applicant
      if (profileDrawer.classList.contains("active") && activeCandidateId === cand.id) {
        profNotes.textContent = cand.notes || "No recruitment remarks saved yet.";
      }
    }
  }
  closeNotesDrawer();
});

// ----------------------------------------------------
// Absolute Inline Dropdown for Stage Changer
// ----------------------------------------------------
let activeStageDropdownCandId = null;

function openInlineStageDropdown(triggerEl, candidateId) {
  activeStageDropdownCandId = candidateId;
  const rect = triggerEl.getBoundingClientRect();
  
  stageChangeDropdown.style.display = "block";
  stageChangeDropdown.style.top = `${rect.bottom + window.scrollY + 6}px`;
  stageChangeDropdown.style.left = `${rect.left + window.scrollX}px`;
}

function hideInlineStageDropdown() {
  stageChangeDropdown.style.display = "none";
  activeStageDropdownCandId = null;
}

document.querySelectorAll(".stage-dropdown-item").forEach(item => {
  item.addEventListener("click", (e) => {
    e.stopPropagation();
    const newStage = item.dataset.stage;
    if (activeStageDropdownCandId && newStage) {
      const cand = candidates.find(c => c.id === activeStageDropdownCandId);
      if (cand) {
        cand.status = newStage;
        renderCandidatesTable();
        updateSummaryCounters();
        showToast(`Stage updated to ${newStage} for ${cand.name}`);
        
        // Synchronize profile drawer stage if open
        if (profileDrawer.classList.contains("active") && activeCandidateId === cand.id) {
          profStatus.textContent = newStage;
          profStatus.className = `status-pill ${newStage.toLowerCase().replace(" ", "-")}`;
          drawerMoveStageSelect.value = newStage;
        }
      }
    }
    hideInlineStageDropdown();
  });
});

document.addEventListener("click", (e) => {
  if (!stageChangeDropdown.contains(e.target) && !e.target.closest(".status-pill") && !e.target.closest(".btn-stage-dropdown")) {
    hideInlineStageDropdown();
  }
});

// ----------------------------------------------------
// Bulk Selection & Operations Dock Logic
// ----------------------------------------------------
bulkSelectAll.addEventListener("change", (e) => {
  const query = currentSearchQuery.trim().toLowerCase();
  const visibleCandidates = candidates.filter(cand => {
    const matchesSearch = (
      cand.id.toLowerCase().includes(query) ||
      cand.name.toLowerCase().includes(query) ||
      cand.email.toLowerCase().includes(query) ||
      cand.role.toLowerCase().includes(query)
    );
    const matchesStage = currentFilterStage === "all" || cand.status.toLowerCase() === currentFilterStage.toLowerCase();
    return matchesSearch && matchesStage;
  });

  if (e.target.checked) {
    visibleCandidates.forEach(cand => selectedCandidateIds.add(cand.id));
  } else {
    visibleCandidates.forEach(cand => selectedCandidateIds.delete(cand.id));
  }
  
  renderCandidatesTable();
  updateBulkDock();
});

function updateBulkDock() {
  const count = selectedCandidateIds.size;
  bulkSelectedCount.textContent = count;
  
  if (count > 0) {
    bulkActionsDock.classList.add("active");
  } else {
    bulkActionsDock.classList.remove("active");
  }
}

btnClearBulk.addEventListener("click", () => {
  selectedCandidateIds.clear();
  renderCandidatesTable();
  updateBulkDock();
});

btnBulkDelete.addEventListener("click", () => {
  const deletedCount = selectedCandidateIds.size;
  if (deletedCount === 0) return;
  
  candidates = candidates.filter(cand => !selectedCandidateIds.has(cand.id));
  selectedCandidateIds.clear();
  renderCandidatesTable();
  updateSummaryCounters();
  updateBulkDock();
  showToast(`Bulk deleted ${deletedCount} candidates.`, "warning");
});

bulkChangeStageSelect.addEventListener("change", (e) => {
  const newStage = e.target.value;
  if (!newStage) return;
  
  let count = 0;
  candidates.forEach(cand => {
    if (selectedCandidateIds.has(cand.id)) {
      cand.status = newStage;
      count++;
    }
  });
  
  selectedCandidateIds.clear();
  bulkChangeStageSelect.selectedIndex = 0; // reset
  renderCandidatesTable();
  updateSummaryCounters();
  updateBulkDock();
  showToast(`Bulk updated stage to ${newStage} for ${count} candidates.`);
});

btnBulkExport.addEventListener("click", () => {
  const selectedList = candidates.filter(c => selectedCandidateIds.has(c.id));
  if (selectedList.length === 0) return;
  
  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "Candidate ID,Applicant,Email,Phone,Role Applied,Pipeline Stage,Notes\n";
  
  selectedList.forEach(c => {
    const row = [
      c.id,
      `"${c.name.replace(/"/g, '""')}"`,
      c.email,
      `"${c.phone}"`,
      `"${c.role}"`,
      c.status,
      `"${(c.notes || "").replace(/"/g, '""')}"`
    ].join(",");
    csvContent += row + "\n";
  });
  
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `Elasticrew_ATS_Export_${Date.now()}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  showToast(`Successfully exported CSV file containing ${selectedList.length} candidate records.`);
});

// ----------------------------------------------------
// Page Initializer
// ----------------------------------------------------
function initPage() {
  // Collapse upload panel by default because candidates already exist in initial DB
  if (candidates.length > 0) {
    cardUploadResumes.classList.add("collapsed");
    dropZone.classList.add("compact");
  }
  
  updateStepIndicator();
  updateDropZoneText();
  renderCandidatesTable();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPage);
} else {
  initPage();
}

