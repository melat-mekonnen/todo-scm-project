// Password reset function (CR-001)
function showPasswordReset() {
  alert("Password Reset:\n\nFor security purposes, please contact the system administrator at admin@todoapp.edu to reset your password.\n\nDefault credentials: admin / 123");
}

// Login function
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "123") {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials");
  }
}

// Enhanced addTask function with better validation and error handling (CR-002)
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (!taskInput || !taskList) {
    console.error("Required DOM elements not found");
    alert("Error: Could not find task input or list elements");
    return;
  }

  const task = taskInput.value.trim();

  // Enhanced validation (CR-002 improvement)
  if (task === "") {
    alert("Task cannot be empty. Please enter a task description.");
    taskInput.focus(); // Focus back to input for better UX
    return;
  }

  if (task.length > 200) {
    alert("Task description is too long. Please keep it under 200 characters.");
    return;
  }

  try {
    // Create and add the task item
    const li = document.createElement("li");
    li.textContent = task;
    li.className = "task-item"; // Add class for potential styling

    taskList.appendChild(li);

    // Clear input field and focus back to it (CR-002: ensure input is cleared)
    taskInput.value = "";
    taskInput.focus();

    console.log("Task added successfully:", task);
  } catch (error) {
    console.error("Error adding task:", error);
    alert("Error adding task. Please try again.");
  }
}
