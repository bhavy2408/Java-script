# Task Manager

A simple **Task Manager Web Application** built using **HTML, CSS, and JavaScript**.

This project allows users to add, edit, delete, search, and filter tasks. Tasks are stored in the browser using **Local Storage**, so the data remains available after refreshing the page.

## Features

* Add new tasks
* Edit existing tasks
* Delete tasks
* Search tasks by title
* Filter tasks by priority
* Set task due date
* Add task description
* Priority selection
* Store tasks using Local Storage
* Display tasks dynamically
* Responsive and simple user interface

## Technologies Used

* HTML5
* CSS3
* JavaScript
* DOM Manipulation
* Local Storage
* JSON

## Project Structure

```text
Task-Manager/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Task Fields

Each task contains:

* **Title** – Name of the task
* **Description** – Details about the task
* **Due Date** – Deadline of the task
* **Priority** – Low, Medium, or High

## How It Works

### 1. Add Task

Enter the task title, description, due date, and priority.

Click the **Add Task** button to add the task.

### 2. Edit Task

Click the **Edit** button on an existing task.

The task information will appear in the form. Make the required changes and click **Update Task**.

### 3. Delete Task

Click the **Delete** button.

A confirmation message will appear before deleting the task.

### 4. Search Task

Enter a task name in the search box.

The application will display tasks matching the entered title.

### 5. Filter Task

Use the priority filter to display tasks according to:

* All
* Low
* Medium
* High

## Local Storage

The application uses browser Local Storage to save tasks.

Tasks are converted into JSON before storing:

```javascript
localStorage.setItem("tasks", JSON.stringify(tasks));
```

When the application starts, the saved tasks are loaded:

```javascript
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
```

This means tasks will remain saved even after refreshing the browser.

## Validation

The application checks that:

* Task title is not empty
* Due date is selected

If required information is missing, an error message is displayed.

## How to Run

1. Download or clone the project.
2. Open the project folder in VS Code.
3. Open `index.html` in your browser.
4. Start adding tasks.

You can also use the **Live Server** extension in VS Code.

## Learning Objectives

This project helps practice:

* JavaScript variables
* Functions
* Arrays
* Objects
* Array methods
* `find()`
* `filter()`
* DOM manipulation
* Event listeners
* Form handling
* Local Storage
* JSON
* CRUD operations

## CRUD Operations

The Task Manager demonstrates basic CRUD operations:

| Operation | Function      |
| --------- | ------------- |
| Create    | Add Task      |
| Read      | Display Tasks |
| Update    | Edit Task     |
| Delete    | Delete Task   |

## Author

**Bhavy Ladva**

## Project

**Task Manager – JavaScript Practical Project**
