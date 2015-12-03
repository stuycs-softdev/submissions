var addTodo = document.getElementById("new-todo");
var todoList = document.getElementById("todo-list");
var todoBox = document.getElementById("todo-text-box");
var todoExit = document.getElementById("todo-text-exit");
var todoText = document.getElementById("todo-text");
var todoTitle = document.getElementById("todo-title");
var cover = document.getElementById("cover");
var submit = document.getElementById("todo-text-submit");
var error = document.getElementById("error");
var header = document.getElementById("todo-text-header");
var toComplete = document.getElementsByClassName("move-to-completed");
var completed = document.getElementById("completed-list");

todoExit.addEventListener("click", function(e) {
  e.preventDefault();
  error.innerHTML = "";
  todoBox.style.display = "none";
  cover.style.display = "none";
});

addTodo.addEventListener("click", function(e) {
  e.preventDefault();
  todoBox.style.display = "block";
  cover.style.display = "block";
  todoTitle.value = "";
  todoText.value = "";
});

submit.addEventListener("click", function(e) {
  e.preventDefault();
  if (todoTitle.value == "") {
    header.style.marginBottom = 0;
    error.innerHTML = "Please Fill in Both Inputs";
  } else {
    error.innerHTML = "";
    todoBox.style.display = "none";
    cover.style.display = "none";
    var todo = document.createElement("li");
    todo.classList.add("todo-item");
    var todoItemTitle = document.createElement("h1");
    todoItemTitle.classList.add("todo-item-title");
    todoItemTitle.innerHTML = todoTitle.value;
    var todoItemText = document.createElement("p");
    todoItemText.classList.add("todo-item-text");
    todoItemText.innerHTML = todoText.value;
    var arrow = document.createElement("button");
    arrow.classList.add("move-to-completed");
    arrow.innerHTML = "-->";
    arrow.addEventListener("click", moveToComplete);
    todo.appendChild(todoItemTitle);
    todo.appendChild(todoItemText);
    todo.appendChild(arrow);
    todoList.appendChild(todo);
  }
});

function moveToComplete(e) {
  this.innerHTML = "<--";
  this.style.cssFloat = "left";
  completed.appendChild(this.parentElement);
  this.removeEventListener("click", moveToComplete);
  this.addEventListener("click", moveToTodo);
}
function moveToTodo(e) {
  this.innerHTML = "-->";
  this.style.cssFloat = "right";
  todoList.appendChild(this.parentElement);
  this.removeEventListener("click", moveToTodo);
  this.addEventListener("click", moveToComplete);
}
