// Task management variables
let tasks = [];
let currentFilter = 'all';

// Password strength validation function
function validatePassword(password) {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);

  if (password.length < minLength) {
    return { isValid: false, message: "Password must be at least 8 characters long" };
  }
  if (!hasUpperCase) {
    return { isValid: false, message: "Password must contain at least one uppercase letter" };
  }
  if (!hasLowerCase) {
    return { isValid: false, message: "Password must contain at least one lowercase letter" };
  }
  if (!hasNumbers) {
    return { isValid: false, message: "Password must contain at least one number" };
  }

  return { isValid: true, message: "Password is strong" };
}

// Display password validation feedback
function updatePasswordValidation() {
  const password = document.getElementById("password").value;
  const validationDiv = document.getElementById("password-validation");

  if (password.length === 0) {
    validationDiv.textContent = "";
    validationDiv.className = "password-validation";
    return;
  }

  const validation = validatePassword(password);
  validationDiv.textContent = validation.message;

  if (validation.isValid) {
    validationDiv.className = "password-validation valid";
  } else {
    validationDiv.className = "password-validation invalid";
  }
}

// Load tasks from JSON file (simulated)
function loadTasks() {
  // In a real application, this would fetch from a server
  // For now, we'll initialize with sample data
  fetch('tasks.json')
    .then(response => response.json())
    .then(data => {
      tasks = data;
      renderTasks();
    })
    .catch(error => {
      console.log('Tasks file not found, starting with empty list');
      tasks = [];
      renderTasks();
    });
}

// Save tasks to localStorage (simulating persistence)
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Render tasks based on current filter
function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = '';

  const filteredTasks = tasks.filter(task => {
    if (currentFilter === 'all') return true;
    return task.category.toLowerCase() === currentFilter.toLowerCase();
  });

  filteredTasks.forEach(task => {
    const li = document.createElement("li");

    // Create task content
    const taskContent = document.createElement("div");
    taskContent.className = "task-content";

    const taskText = document.createElement("span");
    taskText.textContent = task.text;
    taskText.className = task.completed ? "completed" : "";

    const categoryBadge = document.createElement("span");
    categoryBadge.textContent = task.category;
    categoryBadge.className = `category-badge category-${task.category.toLowerCase()}`;

    taskContent.appendChild(taskText);
    taskContent.appendChild(categoryBadge);

    // Create task actions
    const taskActions = document.createElement("div");
    taskActions.className = "task-actions";

    const completeBtn = document.createElement("button");
    completeBtn.textContent = task.completed ? "Undo" : "Complete";
    completeBtn.className = "action-btn complete-btn";
    completeBtn.onclick = () => toggleTask(task.id);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "action-btn delete-btn";
    deleteBtn.onclick = () => deleteTask(task.id);

    taskActions.appendChild(completeBtn);
    taskActions.appendChild(deleteBtn);

    li.appendChild(taskContent);
    li.appendChild(taskActions);

    if (task.completed) {
      li.classList.add("completed");
    }

    taskList.appendChild(li);
  });
}

// Add new task
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const categorySelect = document.getElementById("categorySelect");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Task cannot be empty");
    return;
  }

  const newTask = {
    id: Date.now(),
    text: taskText,
    category: categorySelect.value,
    completed: false,
    created: new Date().toISOString()
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();

  // Clear input
  taskInput.value = "";
}

// Toggle task completion
function toggleTask(taskId) {
  const task = tasks.find(t => t.id === taskId);
  if (task) {
    task.completed = !task.completed;
    saveTasks();
    renderTasks();
  }
}

// Delete task
function deleteTask(taskId) {
  tasks = tasks.filter(t => t.id !== taskId);
  saveTasks();
  renderTasks();
}

// Filter tasks by category
function filterTasks(category) {
  currentFilter = category;

  // Update active filter button
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`[onclick="filterTasks('${category}')"]`).classList.add('active');

  renderTasks();
}

// Login function
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // For demo purposes, accept any valid password with the admin username
  // In a real application, this would check against a database
  if (username === "admin" || username === "Admin") {
    // Validate password strength
    const passwordValidation = validatePassword(password);
    if (!passwordValidation.isValid) {
      alert(passwordValidation.message);
      return;
    }
    // If password is valid, allow login
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid username. Please use 'admin' or 'Admin'");
  }
}

// Initialize dashboard
function initDashboard() {
  loadTasks();
}

// Load tasks from localStorage on page load (for dashboard)
if (window.location.pathname.includes('dashboard.html')) {
  document.addEventListener('DOMContentLoaded', initDashboard);
}
