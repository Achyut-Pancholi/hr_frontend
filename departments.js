// Department Configuration - Data Model
// Now includes sub-departments as an explicit layer between department and roles

let departments = [
  {
    id: "DEPT-101",
    name: "Engineering",
    description: "Builds and maintains core SaaS software, cloud platforms, and data pipelines.",
    subDepartments: [
      {
        id: "SUB-101-1",
        name: "Frontend Development",
        roles: [
          { id: "R-1001", title: "Frontend Developer" },
          { id: "R-1002", title: "Senior UI Developer" }
        ]
      },
      {
        id: "SUB-101-2",
        name: "Backend Development",
        roles: [
          { id: "R-1003", title: "Backend Engineer" },
          { id: "R-1004", title: "Systems Architect" }
        ]
      },
      {
        id: "SUB-101-3",
        name: "Mobile Development",
        roles: [
          { id: "R-1005", title: "React Native Developer" },
          { id: "R-1006", title: "iOS Engineer" }
        ]
      }
    ]
  },
  {
    id: "DEPT-102",
    name: "Design",
    description: "Designs UI/UX interface layouts, user journeys, graphics, and visual guidelines.",
    subDepartments: [
      {
        id: "SUB-102-1",
        name: "UI/UX Design",
        roles: [
          { id: "R-2001", title: "UI/UX Designer" },
          { id: "R-2002", title: "Product Designer" }
        ]
      },
      {
        id: "SUB-102-2",
        name: "Brand Graphics",
        roles: [
          { id: "R-2003", title: "Graphic Designer" },
          { id: "R-2004", title: "Visual Illustrator" }
        ]
      }
    ]
  },
  {
    id: "DEPT-103",
    name: "Product Management",
    description: "Defines product strategy, prioritises pipelines, and coordinates releases.",
    subDepartments: [
      {
        id: "SUB-103-1",
        name: "Product Operations",
        roles: [
          { id: "R-3001", title: "Product Manager" },
          { id: "R-3002", title: "Associate PM" }
        ]
      },
      {
        id: "SUB-103-2",
        name: "Technical Writing",
        roles: [
          { id: "R-3003", title: "Technical Writer" },
          { id: "R-3004", title: "Documentation Lead" }
        ]
      }
    ]
  },
  {
    id: "DEPT-104",
    name: "Human Resources",
    description: "Manages recruiter sourcing, onboarding pipeline, benefits, and operations.",
    subDepartments: [
      {
        id: "SUB-104-1",
        name: "Talent Acquisition",
        roles: [
          { id: "R-4001", title: "HR Executive" },
          { id: "R-4002", title: "Recruitment Consultant" }
        ]
      },
      {
        id: "SUB-104-2",
        name: "Employee Relations",
        roles: [
          { id: "R-4003", title: "HR Operations Specialist" },
          { id: "R-4004", title: "People Partner" }
        ]
      }
    ]
  },
  {
    id: "DEPT-105",
    name: "Marketing & Sales",
    description: "Drives growth marketing, brand awareness, content strategy, and revenue pipelines.",
    subDepartments: [
      {
        id: "SUB-105-1",
        name: "Digital Media",
        roles: [
          { id: "R-5001", title: "Marketing Manager" },
          { id: "R-5002", title: "Social Media Coordinator" }
        ]
      },
      {
        id: "SUB-105-2",
        name: "Growth Marketing",
        roles: [
          { id: "R-5003", title: "SEO Analyst" },
          { id: "R-5004", title: "Growth Specialist" }
        ]
      }
    ]
  }
];

// State
let currentSearchQuery = "";
let expandedDeptIds = new Set();
let editingRoleId = null;
let deleteTargetInfo = null; // { deptId, subDeptId, roleId }
let addRoleTargetInfo = null; // { deptId, subDeptId }
let editDeptTargetId = null;
let idCounter = 6000;

function generateId(prefix) {
  return `${prefix}-${idCounter++}`;
}

// DOM Elements
const deptSearch = document.getElementById("dept-search");
const btnAddDepartment = document.getElementById("btn-add-department");
const deptCardsContainer = document.getElementById("dept-cards-container");
const toastHolder = document.getElementById("toast-holder");

// KPI Elements
const kpiTotalDepts = document.getElementById("kpi-total-departments");
const kpiTotalSubdepts = document.getElementById("kpi-total-subdepts");
const kpiTotalRoles = document.getElementById("kpi-total-roles");

// Add Department Modal
const addDeptModal = document.getElementById("add-dept-modal");
const addDeptModalTitle = document.getElementById("add-dept-modal-title");
const inputDeptName = document.getElementById("input-dept-name");
const inputSubdeptName = document.getElementById("input-subdept-name");
const inputDeptDesc = document.getElementById("input-dept-desc");
const btnSaveAddDept = document.getElementById("btn-save-add-dept");
const btnCancelAddDept = document.getElementById("btn-cancel-add-dept");
const closeAddDeptModal = document.getElementById("close-add-dept-modal");

// Edit Department Modal
const editDeptModal = document.getElementById("edit-dept-modal");
const editDeptModalTitle = document.getElementById("edit-dept-modal-title");
const editDeptName = document.getElementById("edit-dept-name");
const editDeptDesc = document.getElementById("edit-dept-desc");
const editSubdeptsList = document.getElementById("edit-subdepts-list");
const editAddSubdeptInput = document.getElementById("edit-add-subdept-input");
const btnEditAddSubdept = document.getElementById("btn-edit-add-subdept");
const btnSaveEditDept = document.getElementById("btn-save-edit-dept");
const btnCancelEditDept = document.getElementById("btn-cancel-edit-dept");
const closeEditDeptModal = document.getElementById("close-edit-dept-modal");

// Add Role Modal
const addRoleModal = document.getElementById("add-role-modal");
const addRoleModalTitle = document.getElementById("add-role-modal-title");
const inputNewRoleName = document.getElementById("input-new-role-name");
const btnSaveAddRole = document.getElementById("btn-save-add-role");
const btnCancelAddRole = document.getElementById("btn-cancel-add-role");
const closeAddRoleModal = document.getElementById("close-add-role-modal");

// Delete Popover
const deletePopover = document.getElementById("delete-popover");
const popoverCancel = document.getElementById("popover-cancel");
const popoverConfirm = document.getElementById("popover-confirm");

// ----------------------------------------------------
// Toast
// ----------------------------------------------------
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = "toast";
  if (type === "warning") toast.style.borderLeftColor = "#EF6C00";
  else if (type === "error") toast.style.borderLeftColor = "#C62828";
  else toast.style.borderLeftColor = "#2A7C4F";

  toast.innerHTML = `
    <span class="toast-icon"><svg viewBox="0 0 24 24" stroke="currentColor" fill="none"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></span>
    <span class="toast-message">${message}</span>
  `;
  toastHolder.appendChild(toast);
  setTimeout(() => {
    toast.classList.add("removing");
    toast.addEventListener("animationend", () => toast.remove());
  }, 3200);
}

// ----------------------------------------------------
// KPI Rendering
// ----------------------------------------------------
function renderKPIs() {
  kpiTotalDepts.textContent = departments.length;
  let subDeptCount = 0;
  let roleCount = 0;
  departments.forEach(dept => {
    subDeptCount += dept.subDepartments.length;
    dept.subDepartments.forEach(sub => {
      roleCount += sub.roles.length;
    });
  });
  kpiTotalSubdepts.textContent = subDeptCount;
  kpiTotalRoles.textContent = roleCount;
}

// ----------------------------------------------------
// Main Render: Department Cards
// ----------------------------------------------------
function renderDeptCards() {
  deptCardsContainer.innerHTML = "";
  const query = currentSearchQuery.trim().toLowerCase();

  const filtered = departments.filter(dept => {
    if (!query) return true;
    if (dept.name.toLowerCase().includes(query)) return true;
    for (const sub of dept.subDepartments) {
      if (sub.name.toLowerCase().includes(query)) return true;
      for (const role of sub.roles) {
        if (role.title.toLowerCase().includes(query)) return true;
      }
    }
    return false;
  });

  if (filtered.length === 0) {
    deptCardsContainer.innerHTML = `<div class="no-results-state">No departments or roles match your search.</div>`;
    return;
  }

  filtered.forEach(dept => {
    const isExpanded = expandedDeptIds.has(dept.id) || (query.length > 0);
    const totalSubDepts = dept.subDepartments.length;
    const totalRoles = dept.subDepartments.reduce((sum, s) => sum + s.roles.length, 0);

    const card = document.createElement("div");
    card.className = `dept-card${isExpanded ? " expanded" : ""}`;
    card.id = `dept-card-${dept.id}`;

    // Header
    const header = document.createElement("div");
    header.className = "dept-card-header";
    header.innerHTML = `
      <div class="dept-card-header-left">
        <svg class="dept-card-chevron" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
        <span class="dept-card-name">${dept.name}</span>
      </div>
      <div class="dept-card-meta">
        <span class="dept-card-count">${totalSubDepts} sub-dept${totalSubDepts !== 1 ? "s" : ""} · ${totalRoles} role${totalRoles !== 1 ? "s" : ""}</span>
        <div class="dept-card-actions" onclick="event.stopPropagation();">
          <button class="btn-icon" title="Edit Department" data-dept-id="${dept.id}" onclick="openEditDeptModal('${dept.id}')">
            <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" style="width:15px;height:15px;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125" /></svg>
          </button>
        </div>
      </div>
    `;

    header.addEventListener("click", (e) => {
      if (e.target.closest(".dept-card-actions")) return;
      if (expandedDeptIds.has(dept.id)) {
        expandedDeptIds.delete(dept.id);
      } else {
        expandedDeptIds.add(dept.id);
      }
      renderDeptCards();
    });

    card.appendChild(header);

    // Body (sub-departments + roles)
    const body = document.createElement("div");
    body.className = "dept-card-body";

    if (dept.subDepartments.length === 0) {
      body.innerHTML = `<div style="padding: 20px; text-align: center; color: var(--text-secondary); font-size: 12.5px; font-style: italic;">No sub-departments configured. Edit department to add one.</div>`;
    } else {
      dept.subDepartments.forEach(subDept => {
        const group = document.createElement("div");
        group.className = "subdept-group";

        // Filter roles if searching
        let visibleRoles = subDept.roles;
        if (query) {
          const subMatch = subDept.name.toLowerCase().includes(query);
          if (!subMatch) {
            visibleRoles = subDept.roles.filter(r => r.title.toLowerCase().includes(query));
            if (visibleRoles.length === 0 && !dept.name.toLowerCase().includes(query)) return;
          }
        }

        group.innerHTML = `
          <div class="subdept-group-header">
            <span class="subdept-group-name">${subDept.name}</span>
          </div>
          <table class="subdept-roles-table">
            <thead>
              <tr>
                <th>Sub-Department</th>
                <th>Role Title</th>
                <th class="col-actions">Actions</th>
              </tr>
            </thead>
            <tbody id="roles-tbody-${subDept.id}"></tbody>
          </table>
        `;

        body.appendChild(group);

        // Render role rows
        const tbody = group.querySelector(`#roles-tbody-${subDept.id}`);
        visibleRoles.forEach(role => {
          const tr = document.createElement("tr");
          tr.id = `role-row-${role.id}`;

          if (editingRoleId === role.id) {
            // Inline edit mode
            tr.className = "inline-edit-row";
            tr.innerHTML = `
              <td>${subDept.name}</td>
              <td><input class="inline-edit-input" id="inline-edit-input-${role.id}" type="text" value="${role.title}"></td>
              <td class="col-actions">
                <div class="inline-edit-actions">
                  <button class="btn-save-inline" onclick="saveInlineEdit('${dept.id}', '${subDept.id}', '${role.id}')">Save</button>
                  <button class="btn-cancel-inline" onclick="cancelInlineEdit()">Cancel</button>
                </div>
              </td>
            `;
          } else {
            tr.innerHTML = `
              <td style="color: var(--text-secondary);">${subDept.name}</td>
              <td style="font-weight: 500;">${role.title}</td>
              <td class="col-actions">
                <div class="actions-inline">
                  <button title="Edit Role Title" onclick="startInlineEdit('${role.id}')">
                    <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" style="width:13px;height:13px;" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125" /></svg>
                  </button>
                  <button class="delete-btn" title="Delete Role Title" onclick="showDeletePopover(event, '${dept.id}', '${subDept.id}', '${role.id}')">
                    <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" style="width:13px;height:13px;" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>
                  </button>
                </div>
              </td>
            `;
          }
          tbody.appendChild(tr);
        });

        // "+ Add Role" link at the bottom of each sub-department
        const addRoleLink = document.createElement("button");
        addRoleLink.className = "add-role-link";
        addRoleLink.innerHTML = `
          <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" style="width:12px;height:12px;stroke-width:2.5;"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
          Add Role
        `;
        addRoleLink.addEventListener("click", (e) => {
          e.stopPropagation();
          openAddRoleModal(dept.id, subDept.id, subDept.name);
        });
        group.appendChild(addRoleLink);
      });
    }

    card.appendChild(body);
    deptCardsContainer.appendChild(card);
  });

  renderKPIs();
}

// ----------------------------------------------------
// Search
// ----------------------------------------------------
deptSearch.addEventListener("input", (e) => {
  currentSearchQuery = e.target.value;
  renderDeptCards();
});

// ----------------------------------------------------
// Inline Edit for Role
// ----------------------------------------------------
function startInlineEdit(roleId) {
  editingRoleId = roleId;
  renderDeptCards();
  // Focus the input
  setTimeout(() => {
    const input = document.getElementById(`inline-edit-input-${roleId}`);
    if (input) { input.focus(); input.select(); }
  }, 50);
}

function cancelInlineEdit() {
  editingRoleId = null;
  renderDeptCards();
}

function saveInlineEdit(deptId, subDeptId, roleId) {
  const input = document.getElementById(`inline-edit-input-${roleId}`);
  if (!input) return;
  const newTitle = input.value.trim();
  if (!newTitle) {
    showToast("Role Title cannot be empty.", "error");
    return;
  }

  const dept = departments.find(d => d.id === deptId);
  if (!dept) return;
  const sub = dept.subDepartments.find(s => s.id === subDeptId);
  if (!sub) return;
  const role = sub.roles.find(r => r.id === roleId);
  if (!role) return;

  const oldTitle = role.title;
  role.title = newTitle;
  editingRoleId = null;
  renderDeptCards();
  if (oldTitle !== newTitle) {
    showToast(`Renamed "${oldTitle}" → "${newTitle}".`);
  }
}

// ----------------------------------------------------
// Delete Role Popover
// ----------------------------------------------------
function showDeletePopover(event, deptId, subDeptId, roleId) {
  event.stopPropagation();
  deleteTargetInfo = { deptId, subDeptId, roleId };
  
  const btn = event.currentTarget;
  const rect = btn.getBoundingClientRect();
  deletePopover.style.top = `${rect.bottom + window.scrollY + 6}px`;
  deletePopover.style.left = `${rect.right - 240 + window.scrollX}px`;
  deletePopover.classList.add("visible");
}

function hideDeletePopover() {
  deletePopover.classList.remove("visible");
  deleteTargetInfo = null;
}

popoverCancel.addEventListener("click", hideDeletePopover);

popoverConfirm.addEventListener("click", () => {
  if (!deleteTargetInfo) return;
  const { deptId, subDeptId, roleId } = deleteTargetInfo;
  const dept = departments.find(d => d.id === deptId);
  if (!dept) return;
  const sub = dept.subDepartments.find(s => s.id === subDeptId);
  if (!sub) return;

  const roleIdx = sub.roles.findIndex(r => r.id === roleId);
  if (roleIdx === -1) return;

  const removedTitle = sub.roles[roleIdx].title;
  sub.roles.splice(roleIdx, 1);
  hideDeletePopover();
  renderDeptCards();
  showToast(`"${removedTitle}" deleted.`, "warning");
});

// Close popover on outside click
document.addEventListener("click", (e) => {
  if (!deletePopover.contains(e.target) && !e.target.closest(".delete-btn")) {
    hideDeletePopover();
  }
});

// ----------------------------------------------------
// Add Department Modal
// ----------------------------------------------------
btnAddDepartment.addEventListener("click", () => {
  addDeptModalTitle.textContent = "+ Add Department";
  inputDeptName.value = "";
  inputSubdeptName.value = "";
  inputDeptDesc.value = "";
  addDeptModal.classList.add("active");
  setTimeout(() => inputDeptName.focus(), 100);
});

function closeAddDeptModalView() {
  addDeptModal.classList.remove("active");
}

closeAddDeptModal.addEventListener("click", closeAddDeptModalView);
btnCancelAddDept.addEventListener("click", closeAddDeptModalView);
addDeptModal.addEventListener("click", (e) => { if (e.target === addDeptModal) closeAddDeptModalView(); });

btnSaveAddDept.addEventListener("click", () => {
  const name = inputDeptName.value.trim();
  if (!name) {
    showToast("Department Name is required.", "error");
    inputDeptName.focus();
    return;
  }

  const subDeptName = inputSubdeptName.value.trim();
  const desc = inputDeptDesc.value.trim();

  const newDept = {
    id: generateId("DEPT"),
    name: name,
    description: desc,
    subDepartments: []
  };

  if (subDeptName) {
    newDept.subDepartments.push({
      id: generateId("SUB"),
      name: subDeptName,
      roles: []
    });
  }

  departments.push(newDept);
  closeAddDeptModalView();
  expandedDeptIds.add(newDept.id);
  renderDeptCards();
  showToast(`Department "${name}" created.`);
});

// ----------------------------------------------------
// Edit Department Modal
// ----------------------------------------------------
function openEditDeptModal(deptId) {
  const dept = departments.find(d => d.id === deptId);
  if (!dept) return;

  editDeptTargetId = deptId;
  editDeptModalTitle.textContent = `Edit Department — ${dept.name}`;
  editDeptName.value = dept.name;
  editDeptDesc.value = dept.description || "";
  editAddSubdeptInput.value = "";

  renderEditSubdeptsList(dept);
  editDeptModal.classList.add("active");
}

function renderEditSubdeptsList(dept) {
  editSubdeptsList.innerHTML = "";
  dept.subDepartments.forEach((sub, idx) => {
    const row = document.createElement("div");
    row.style.cssText = "display: flex; align-items: center; gap: 8px; padding: 6px 10px; background: #f9fafb; border-radius: 6px;";
    row.innerHTML = `
      <span style="flex:1; font-size: 12.5px; font-weight: 500;">${sub.name}</span>
      <button onclick="removeSubDeptFromEdit(${idx})" style="border:none; background:none; cursor:pointer; color: var(--status-rejected-text); padding: 2px;" title="Remove sub-department">
        <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" style="width:13px;height:13px;" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    `;
    editSubdeptsList.appendChild(row);
  });
}

function removeSubDeptFromEdit(idx) {
  const dept = departments.find(d => d.id === editDeptTargetId);
  if (!dept) return;
  const removed = dept.subDepartments[idx];
  dept.subDepartments.splice(idx, 1);
  renderEditSubdeptsList(dept);
  showToast(`Sub-department "${removed.name}" removed.`, "warning");
}

btnEditAddSubdept.addEventListener("click", () => {
  const dept = departments.find(d => d.id === editDeptTargetId);
  if (!dept) return;
  const name = editAddSubdeptInput.value.trim();
  if (!name) return;

  dept.subDepartments.push({
    id: generateId("SUB"),
    name: name,
    roles: []
  });
  editAddSubdeptInput.value = "";
  renderEditSubdeptsList(dept);
});

function closeEditDeptModalView() {
  editDeptModal.classList.remove("active");
  editDeptTargetId = null;
}

closeEditDeptModal.addEventListener("click", closeEditDeptModalView);
btnCancelEditDept.addEventListener("click", closeEditDeptModalView);
editDeptModal.addEventListener("click", (e) => { if (e.target === editDeptModal) closeEditDeptModalView(); });

btnSaveEditDept.addEventListener("click", () => {
  const dept = departments.find(d => d.id === editDeptTargetId);
  if (!dept) return;

  const newName = editDeptName.value.trim();
  if (!newName) {
    showToast("Department Name is required.", "error");
    editDeptName.focus();
    return;
  }

  dept.name = newName;
  dept.description = editDeptDesc.value.trim();
  closeEditDeptModalView();
  renderDeptCards();
  showToast(`Department "${newName}" saved & activated.`);
});

// ----------------------------------------------------
// Add Role Modal
// ----------------------------------------------------
function openAddRoleModal(deptId, subDeptId, subDeptName) {
  addRoleTargetInfo = { deptId, subDeptId };
  addRoleModalTitle.textContent = `+ Add Role Title — ${subDeptName}`;
  inputNewRoleName.value = "";
  addRoleModal.classList.add("active");
  setTimeout(() => inputNewRoleName.focus(), 100);
}

function closeAddRoleModalView() {
  addRoleModal.classList.remove("active");
  addRoleTargetInfo = null;
}

closeAddRoleModal.addEventListener("click", closeAddRoleModalView);
btnCancelAddRole.addEventListener("click", closeAddRoleModalView);
addRoleModal.addEventListener("click", (e) => { if (e.target === addRoleModal) closeAddRoleModalView(); });

btnSaveAddRole.addEventListener("click", () => {
  if (!addRoleTargetInfo) return;
  const title = inputNewRoleName.value.trim();
  if (!title) {
    showToast("Role Title is required.", "error");
    inputNewRoleName.focus();
    return;
  }

  const { deptId, subDeptId } = addRoleTargetInfo;
  const dept = departments.find(d => d.id === deptId);
  if (!dept) return;
  const sub = dept.subDepartments.find(s => s.id === subDeptId);
  if (!sub) return;

  // Duplicate check
  if (sub.roles.some(r => r.title.toLowerCase() === title.toLowerCase())) {
    showToast(`"${title}" already exists in this sub-department.`, "warning");
    return;
  }

  sub.roles.push({ id: generateId("R"), title: title });
  closeAddRoleModalView();
  renderDeptCards();
  showToast(`"${title}" added.`);
});

// Handle Enter key in add role input
inputNewRoleName.addEventListener("keydown", (e) => {
  if (e.key === "Enter") btnSaveAddRole.click();
});

inputDeptName.addEventListener("keydown", (e) => {
  if (e.key === "Enter") btnSaveAddDept.click();
});

// ----------------------------------------------------
// Global helpers for inline onclick
// ----------------------------------------------------
window.startInlineEdit = startInlineEdit;
window.cancelInlineEdit = cancelInlineEdit;
window.saveInlineEdit = saveInlineEdit;
window.showDeletePopover = showDeletePopover;
window.openEditDeptModal = openEditDeptModal;
window.removeSubDeptFromEdit = removeSubDeptFromEdit;

// ----------------------------------------------------
// Init
// ----------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  renderDeptCards();
});
