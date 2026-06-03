// Initial Departments Database
let departments = [
  {
    id: "DEPT-101",
    name: "Engineering",
    description: "Builds and maintains core SaaS software, cloud platforms, and data pipelines.",
    status: "Active Hiring", // Active Hiring, Limited Hiring, Closed
    roles: [
      { name: "Backend Developer (Node.js)", status: "Open" }, // Open, Paused, Closed
      { name: "Senior Frontend Engineer", status: "Open" },
      { name: "Systems Architect", status: "Paused" },
      { name: "React Native Developer", status: "Open" },
      { name: "iOS Engineer", status: "Closed" },
      { name: "QA Lead", status: "Open" }
    ]
  },
  {
    id: "DEPT-102",
    name: "Design",
    description: "Designs UI/UX interface layouts, user journeys, graphics, and visual guidelines.",
    status: "Limited Hiring",
    roles: [
      { name: "Product Designer", status: "Open" },
      { name: "UI/UX Designer", status: "Paused" },
      { name: "Visual Illustrator", status: "Closed" }
    ]
  },
  {
    id: "DEPT-103",
    name: "Product Management",
    description: "Defines product strategy, prioritises pipelines, and coordinates releases.",
    status: "Limited Hiring",
    roles: [
      { name: "Product Manager", status: "Open" },
      { name: "Associate PM", status: "Closed" }
    ]
  },
  {
    id: "DEPT-104",
    name: "Technology and Delivery",
    description: "Ensures delivery quality metrics, release schedules, and testing pipelines.",
    status: "Active Hiring",
    roles: [
      { name: "QA Engineer", status: "Open" },
      { name: "Python Developer", status: "Open" }
    ]
  },
  {
    id: "DEPT-105",
    name: "Human Resources",
    description: "Manages recruiter sourcing, onboarding pipeline, benefits, and operations.",
    status: "Closed",
    roles: [
      { name: "HR Executive", status: "Closed" },
      { name: "Recruitment Consultant", status: "Closed" }
    ]
  }
];

// State Variables
let activeDeptId = null;
let currentSearchQuery = "";

// DOM Elements Selection
const deptSearch = document.getElementById("dept-search");
const btnAddDepartment = document.getElementById("btn-add-department");
const departmentsTableBody = document.getElementById("departments-table-body");
const actionsDropdown = document.getElementById("actions-menu-dropdown");
const toastHolder = document.getElementById("toast-holder");

// KPI elements
const kpiTotalDepts = document.getElementById("kpi-total-departments");
const kpiActiveRoles = document.getElementById("kpi-active-roles");
const kpiOpenHiringRoles = document.getElementById("kpi-open-hiring-roles");

// Modals
const deptModal = document.getElementById("dept-modal");
const deptModalTitle = document.getElementById("dept-modal-title");
const inputDeptName = document.getElementById("input-dept-name");
const inputDeptDesc = document.getElementById("input-dept-desc");
const selectDeptStatus = document.getElementById("select-dept-status");
const btnSaveDept = document.getElementById("btn-save-dept");
const btnCancelDept = document.getElementById("btn-cancel-dept");
const closeDeptModal = document.getElementById("close-dept-modal");

const rolesModal = document.getElementById("roles-modal");
const rolesModalTitle = document.getElementById("roles-modal-title");
const inputRoleName = document.getElementById("input-role-name");
const selectRoleStatus = document.getElementById("select-role-status");
const btnAddRoleSubmit = document.getElementById("btn-add-role-submit");
const rolesTableBody = document.getElementById("roles-table-body");
const btnCloseRoles = document.getElementById("btn-close-roles");
const closeRolesModal = document.getElementById("close-roles-modal");

// ----------------------------------------------------
// Toast Notification Engine
// ----------------------------------------------------
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = "toast";
  
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

  setTimeout(() => {
    toast.classList.add("removing");
    toast.addEventListener("animationend", () => {
      toast.remove();
    });
  }, 3200);
}

// ----------------------------------------------------
// Calculate & Render KPI Statistics
// ----------------------------------------------------
function renderKPIs() {
  // Total Departments
  kpiTotalDepts.textContent = departments.length;

  // Active Roles (Open or Paused, i.e., not Closed)
  let activeRolesCount = 0;
  // Open Hiring Roles
  let openHiringCount = 0;

  departments.forEach(dept => {
    dept.roles.forEach(role => {
      if (role.status === "Open" || role.status === "Paused") {
        activeRolesCount++;
      }
      if (role.status === "Open") {
        openHiringCount++;
      }
    });
  });

  kpiActiveRoles.textContent = activeRolesCount;
  kpiOpenHiringRoles.textContent = openHiringCount;
}

// ----------------------------------------------------
// Directory Rendering & UI Updates
// ----------------------------------------------------
function renderDirectory() {
  departmentsTableBody.innerHTML = "";
  const query = currentSearchQuery.trim().toLowerCase();

  const filteredDepts = departments.filter(dept => {
    const nameMatch = dept.name.toLowerCase().includes(query);
    const descMatch = dept.description.toLowerCase().includes(query);
    const rolesMatch = dept.roles.some(role => role.name.toLowerCase().includes(query));
    return nameMatch || descMatch || rolesMatch;
  });

  if (filteredDepts.length === 0) {
    departmentsTableBody.innerHTML = `
      <tr>
        <td colspan="4" style="text-align: center; color: var(--text-secondary); height: 120px; font-style: italic;">
          No matching departments or roles found. Click "+ Add Department" to create a new category.
        </td>
      </tr>
    `;
    return;
  }

  filteredDepts.forEach(dept => {
    const tr = document.createElement("tr");
    tr.id = `dept-row-${dept.id}`;
    tr.style.height = "70px";

    // 1. Department Name & Muted Desc
    const nameCol = `
      <td>
        <div style="display: flex; flex-direction: column; gap: 3px; padding-left: 8px;">
          <span style="font-weight: 700; color: var(--text-primary); font-size: 13.5px;">${dept.name}</span>
          <span style="color: var(--text-secondary); font-size: 11.5px; font-weight: 400; max-width: 320px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;" title="${dept.description}">${dept.description || 'No description provided.'}</span>
        </div>
      </td>
    `;

    // 2. Roles preview tags (Max 3, then +N more)
    let rolesHtml = "";
    const previewLimit = 3;
    const previewRoles = dept.roles.slice(0, previewLimit);
    
    previewRoles.forEach(role => {
      rolesHtml += `<span class="role-tag-blue" style="cursor: pointer; margin-right: 4px; margin-bottom: 4px;" onclick="openRolesManager('${dept.id}')">${role.name}</span>`;
    });

    if (dept.roles.length > previewLimit) {
      const remainderCount = dept.roles.length - previewLimit;
      rolesHtml += `<span class="role-tag" style="background-color: #EEEAE3; color: var(--text-primary); cursor: pointer; font-weight: 600;" onclick="openRolesManager('${dept.id}')">+${remainderCount} more</span>`;
    }

    if (dept.roles.length === 0) {
      rolesHtml = `<span style="font-style: italic; color: var(--text-secondary); font-size: 12px;">No roles configured. Click View Roles to add.</span>`;
    }

    const rolesCol = `
      <td>
        <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 4px; padding: 4px 0;">
          ${rolesHtml}
        </div>
      </td>
    `;

    // 3. Hiring Status badge
    const statusClass = dept.status.toLowerCase().replace(" ", "-");

    const statusCol = `
      <td>
        <span class="status-pill ${statusClass}">${dept.status}</span>
      </td>
    `;

    // 4. Actions Cell
    const actionsCol = `
      <td>
        <div class="actions-cell" style="justify-content: flex-start; gap: 8px;">
          <button class="btn-view" onclick="openRolesManager('${dept.id}')" style="height: 28px; line-height: 26px; padding: 0 12px; font-size: 11.5px; border-radius: var(--radius-pill);">View Roles</button>
          <button class="btn-action-trigger" data-id="${dept.id}" onclick="triggerContextMenu(event, '${dept.id}')" style="height: 28px; width: 28px; border-radius: var(--radius-pill);">
            <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" style="width: 14px; height: 14px;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" /></svg>
          </button>
        </div>
      </td>
    `;

    tr.innerHTML = nameCol + rolesCol + statusCol + actionsCol;
    departmentsTableBody.appendChild(tr);
  });
}

// ----------------------------------------------------
// Search Filtering
// ----------------------------------------------------
deptSearch.addEventListener("input", (e) => {
  currentSearchQuery = e.target.value;
  renderDirectory();
});

// ----------------------------------------------------
// Contextual Menu Handling
// ----------------------------------------------------
function hideActionMenu() {
  actionsDropdown.style.display = "none";
  document.querySelectorAll(".btn-action-trigger.active").forEach(btn => {
    btn.classList.remove("active");
  });
}

function triggerContextMenu(e, id) {
  e.stopPropagation();
  const triggerBtn = e.currentTarget;
  
  if (triggerBtn.classList.contains("active")) {
    hideActionMenu();
    return;
  }

  hideActionMenu();
  activeDeptId = id;

  const rect = triggerBtn.getBoundingClientRect();
  actionsDropdown.style.display = "block";
  const dropdownWidth = actionsDropdown.offsetWidth;
  const top = rect.bottom + window.scrollY + 6;
  const left = rect.right - dropdownWidth + window.scrollX;

  actionsDropdown.style.top = `${top}px`;
  actionsDropdown.style.left = `${left}px`;
  triggerBtn.classList.add("active");
}

document.addEventListener("click", (e) => {
  if (!actionsDropdown.contains(e.target)) {
    hideActionMenu();
  }
});

// Context Menu Commands Listeners
document.getElementById("menu-edit-dept").addEventListener("click", () => {
  if (activeDeptId) {
    openDepartmentEditor(activeDeptId);
  }
  hideActionMenu();
});

document.getElementById("menu-manage-roles").addEventListener("click", () => {
  if (activeDeptId) {
    openRolesManager(activeDeptId);
  }
  hideActionMenu();
});

document.getElementById("menu-archive-dept").addEventListener("click", () => {
  if (activeDeptId) {
    const dept = departments.find(d => d.id === activeDeptId);
    if (dept) {
      dept.status = "Closed";
      renderDirectory();
      renderKPIs();
      showToast(`Department ${dept.name} archived. Status set to Closed.`, "warning");
    }
  }
  hideActionMenu();
});

document.getElementById("menu-remove-dept").addEventListener("click", () => {
  if (activeDeptId) {
    const targetId = activeDeptId;
    const targetRow = document.getElementById(`dept-row-${targetId}`);
    
    if (targetRow) {
      targetRow.style.opacity = "0.2";
      targetRow.style.transition = "opacity 0.25s ease";
      
      setTimeout(() => {
        const dept = departments.find(d => d.id === targetId);
        departments = departments.filter(d => d.id !== targetId);
        renderDirectory();
        renderKPIs();
        showToast(`Department ${dept ? dept.name : targetId} successfully removed.`, "error");
      }, 250);
    }
  }
  hideActionMenu();
});

// ----------------------------------------------------
// Department Modal Controller (Add/Edit)
// ----------------------------------------------------
btnAddDepartment.addEventListener("click", () => {
  activeDeptId = null;
  deptModalTitle.textContent = "Add Department";
  inputDeptName.value = "";
  inputDeptDesc.value = "";
  selectDeptStatus.value = "Active Hiring";
  deptModal.classList.add("active");
});

function closeDeptModalView() {
  deptModal.classList.remove("active");
  activeDeptId = null;
}

closeDeptModal.addEventListener("click", closeDeptModalView);
btnCancelDept.addEventListener("click", closeDeptModalView);
deptModal.addEventListener("click", (e) => {
  if (e.target === deptModal) closeDeptModalView();
});

function openDepartmentEditor(id) {
  const dept = departments.find(d => d.id === id);
  if (!dept) return;

  activeDeptId = id;
  deptModalTitle.textContent = "Edit Department";
  inputDeptName.value = dept.name;
  inputDeptDesc.value = dept.description || "";
  selectDeptStatus.value = dept.status;
  
  deptModal.classList.add("active");
}

btnSaveDept.addEventListener("click", () => {
  const nameVal = inputDeptName.value.trim();
  const descVal = inputDeptDesc.value.trim();
  const statusVal = selectDeptStatus.value;

  if (!nameVal) {
    showToast("Department Name is required.", "error");
    inputDeptName.focus();
    return;
  }

  if (activeDeptId) {
    // Edit mode
    const dept = departments.find(d => d.id === activeDeptId);
    if (dept) {
      dept.name = nameVal;
      dept.description = descVal;
      dept.status = statusVal;
      showToast(`Department ${dept.name} successfully updated.`);
    }
  } else {
    // Add mode
    const newId = `DEPT-${Math.floor(106 + Math.random() * 900)}`;
    const newDept = {
      id: newId,
      name: nameVal,
      description: descVal,
      status: statusVal,
      roles: []
    };
    departments.push(newDept);
    showToast(`Department ${newDept.name} successfully added.`);
  }

  renderDirectory();
  renderKPIs();
  closeDeptModalView();
});

// ----------------------------------------------------
// Manage Roles Modal Controller
// ----------------------------------------------------
function openRolesManager(id) {
  const dept = departments.find(d => d.id === id);
  if (!dept) return;

  activeDeptId = id;
  rolesModalTitle.textContent = `Manage Roles — ${dept.name}`;
  inputRoleName.value = "";
  selectRoleStatus.value = "Open";
  
  renderRolesTable(dept);
  rolesModal.classList.add("active");
}

function closeRolesModalView() {
  rolesModal.classList.remove("active");
  activeDeptId = null;
}

closeRolesModal.addEventListener("click", closeRolesModalView);
btnCloseRoles.addEventListener("click", closeRolesModalView);
rolesModal.addEventListener("click", (e) => {
  if (e.target === rolesModal) closeRolesModalView();
});

function renderRolesTable(dept) {
  rolesTableBody.innerHTML = "";

  if (dept.roles.length === 0) {
    rolesTableBody.innerHTML = `
      <tr>
        <td colspan="3" style="text-align: center; color: var(--text-secondary); padding: 16px 0; font-style: italic; font-size: 12px;">
          No roles configured for this department. Fill the form above to add a role.
        </td>
      </tr>
    `;
    return;
  }

  dept.roles.forEach((role, idx) => {
    const tr = document.createElement("tr");
    tr.style.height = "52px";

    // Role Name column
    const nameCol = `
      <td style="padding: 8px 12px; font-weight: 600; color: var(--text-primary); font-size: 12.5px;">${role.name}</td>
    `;

    // Status column
    const statusClass = role.status.toLowerCase();

    const statusCol = `
      <td style="padding: 8px 12px;">
        <span class="status-pill ${statusClass}" style="padding: 2px 8px; font-size: 10px;">${role.status}</span>
      </td>
    `;

    // Actions column
    const actionsCol = `
      <td style="padding: 8px 12px; text-align: center;">
        <div style="display: flex; gap: 8px; justify-content: center; align-items: center;">
          <button class="notes-btn" title="Edit Role Title" onclick="editRolePrompt('${dept.id}', ${idx})" style="padding: 4px; height: auto; width: auto; border-radius: 4px;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 13px; height: 13px;"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125" /></svg>
          </button>
          <button class="notes-btn" title="Toggle Status" onclick="toggleRoleStatus('${dept.id}', ${idx})" style="padding: 4px; height: auto; width: auto; border-radius: 4px;">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 13px; height: 13px;"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>
          </button>
          <button class="notes-btn" title="Remove Role" onclick="deleteRole('${dept.id}', ${idx})" style="padding: 4px; height: auto; width: auto; border-radius: 4px; color: var(--status-rejected-text); border-color: rgba(198, 40, 40, 0.1);">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 13px; height: 13px;"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>
          </button>
        </div>
      </td>
    `;

    tr.innerHTML = nameCol + statusCol + actionsCol;
    rolesTableBody.appendChild(tr);
  });
}

// Add role action submit
btnAddRoleSubmit.addEventListener("click", () => {
  if (!activeDeptId) return;
  const roleNameVal = inputRoleName.value.trim();
  const roleStatusVal = selectRoleStatus.value;

  if (!roleNameVal) {
    showToast("Role Name is required.", "error");
    inputRoleName.focus();
    return;
  }

  const dept = departments.find(d => d.id === activeDeptId);
  if (dept) {
    const isDuplicate = dept.roles.some(r => r.name.toLowerCase() === roleNameVal.toLowerCase());
    if (isDuplicate) {
      showToast(`Role "${roleNameVal}" already exists in ${dept.name}.`, "warning");
      return;
    }

    dept.roles.push({
      name: roleNameVal,
      status: roleStatusVal
    });

    inputRoleName.value = "";
    inputRoleName.focus();
    
    renderRolesTable(dept);
    renderDirectory();
    renderKPIs();
    showToast(`Role "${roleNameVal}" added to ${dept.name}.`);
  }
});

// Delete role helper
function deleteRole(deptId, roleIdx) {
  const dept = departments.find(d => d.id === deptId);
  if (dept && dept.roles[roleIdx]) {
    const removedName = dept.roles[roleIdx].name;
    dept.roles.splice(roleIdx, 1);
    
    renderRolesTable(dept);
    renderDirectory();
    renderKPIs();
    showToast(`Role "${removedName}" removed.`, "warning");
  }
}

// Toggle role status helper
function toggleRoleStatus(deptId, roleIdx) {
  const dept = departments.find(d => d.id === deptId);
  if (dept && dept.roles[roleIdx]) {
    const role = dept.roles[roleIdx];
    const statuses = ["Open", "Paused", "Closed"];
    const nextIdx = (statuses.indexOf(role.status) + 1) % statuses.length;
    
    role.status = statuses[nextIdx];
    
    renderRolesTable(dept);
    renderDirectory();
    renderKPIs();
    showToast(`Role "${role.name}" status set to ${role.status}.`);
  }
}

// Edit role name helper
function editRolePrompt(deptId, roleIdx) {
  const dept = departments.find(d => d.id === deptId);
  if (dept && dept.roles[roleIdx]) {
    const role = dept.roles[roleIdx];
    const newName = prompt(`Edit name for role "${role.name}":`, role.name);
    
    if (newName && newName.trim() && newName.trim() !== role.name) {
      const oldName = role.name;
      role.name = newName.trim();
      
      renderRolesTable(dept);
      renderDirectory();
      showToast(`Role renamed from "${oldName}" to "${role.name}".`);
    }
  }
}

// Make helpers globally accessible for inline html onclick handlers
window.openRolesManager = openRolesManager;
window.triggerContextMenu = triggerContextMenu;
window.editRolePrompt = editRolePrompt;
window.toggleRoleStatus = toggleRoleStatus;
window.deleteRole = deleteRole;

// ----------------------------------------------------
// Page Initializer
// ----------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  renderDirectory();
  renderKPIs();
});
