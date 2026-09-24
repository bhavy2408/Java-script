// DOM

let taskForm = document.getElementById("taskForm");
let title = document.getElementById("title");
let description = document.getElementById("description");
let date = document.getElementById("dueDate");
let priority = document.getElementById("priority");
let error = document.getElementById("error");
let Addbtn = document.getElementById("submitBtn");
let search = document.getElementById("search");
let filter = document.getElementById("filter");
let tasklist = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];



//add task

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (title.value.trim() == "") {
    error.textContent = "Please Enter the title";
    return;
  }

  if (dueDate.value == "") {
    error.textContent = "Please Select the Date";
    return;
  }

  error.textContent = "";

  

  if (editid !== null) {
    let task = tasks.find(function (task) {
      return task.id === editid;
    });

    task.title = title.value;
    task.description = description.value;
    task.dueDate = dueDate.value;
    task.priority = priority.value;

    editid = null;

    Addbtn.textContent = "Add Task";
  } else {
    addtask();
  }

  saveTasks();
  displayTasks();
  clearForm();
});

  function addtask() {
    const task = {
      id: Date.now(),
      title: title.value,
      description: description.value,
      dueDate: dueDate.value,
      priority: priority.value,
    };
    tasks.push(task);
  }

// save

let saveTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// display task
let displayTasks = () => {
  tasklist.innerHTML = "";

  let searchvalue = search.value.toLowerCase();

  let filtervalue = filter.value;

  const filteredTasks = tasks.filter(function (task) {
    const matchessearch = task.title.toLowerCase().includes(searchvalue);

    const matchespriority = filtervalue === "ALL" || task.priority === filtervalue;

    return matchessearch && matchespriority;
  });

  if (filteredTasks.length == "") {
    tasklist.innerHTML = "No tasks found.";
    return;
  }

  filteredTasks.forEach(function (task) {
    let tasksdiv = document.createElement("div");

    tasksdiv.innerHTML = `

       <h3>${task.title}</h3>
        <p> <strong>Description:</strong> 
        ${task.description} </p>
        <p> <strong>Due Date:</strong> 
        ${task.dueDate} </p>
        <p class="priority"> 
        <strong>Priority:</strong> ${task.priority} </p>
        <div class="actions"> <button class="edit" onclick="editTasks(${task.id})"> Edit </button> <button class="delete"
        onclick="deleteTask(${task.id})"> Delete </button> </div>

    `;
    tasklist.appendChild(tasksdiv);
  });
};

// edit task
let editid = null;
function editTasks(id) {
  const task = tasks.find(function (task) {
    return task.id === id;
  });

  if (!task) {
    return;
  }

  title.value = task.title;
  description.value = task.description;
  dueDate.value = task.dueDate;
  priority.value = task.priority;

  editid === id;

  Addbtn.textContent = "Update Task.";
};

// delete Tasks

function deleteTask(id){
  let confiremation = confirm("Are you sure to delete the task");

  if (!confiremation) {
    return;
  }

  tasks = tasks.filter(function (task) {
    return task.id != id;
  });

  saveTasks();
  displayTasks();
};


// Clear Form
function clearForm() {

    title.value = "";

    description.value = "";

    dueDate.value = "";

    priority.value = "Low";

}

// Search
search.addEventListener("input", function () {

    displayTasks();

});

// Priority Filter
filter.addEventListener("change", function () {

    displayTasks();

});

// Display tasks when page loads
displayTasks();



