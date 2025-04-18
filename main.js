if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "auth.html";
  }
  
  let tasks = [];
  
  function renderTasks() {
    const list = document.getElementById("todoList");
    const filter = document.getElementById("filterSelect").value;
    list.innerHTML = "";
  
    tasks.forEach((task, index) => {
      if (filter === "completed" && !task.completed) return;
      if (filter === "pending" && task.completed) return;
  
      const li = document.createElement("li");
      li.className = "task";
      li.classList.add(task.completed ? "completed" : "pending");
  
      
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.completed;
      checkbox.onchange = () => toggleComplete(index);
      const span = document.createElement("span");
    span.textContent = task.text;

    // Remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "🗑️";
    removeBtn.onclick = () => removeTask(index);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(removeBtn);

    list.appendChild(li);
  });
}