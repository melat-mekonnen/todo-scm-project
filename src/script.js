function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "123") {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials");
  }
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();
  if (task === "") {
    alert("Task cannot be empty");
    return;
  }
  const li = document.createElement("li");
  li.textContent = task;
  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}
