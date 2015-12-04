var todoList = document.getElementById("todoList")
var doneList = document.getElementById("doneList")
var button = document.getElementById("button");

<!-- Add New Task -->
var addTask = function addTask(task, list){
  var newTask = document.createElement("li");
  var List = document.getElementById(list);
  newTask.innerHTML = task;
  List.appendChild(newTask);
};

<!-- Remove Task -->
var removeTask = function removeTask(task, list){
  var List = document.getElementById(list)
  List.removeChild(task);
};

<!-- Move Task to To Do List -->
var toDo = function toDo(task){
  addTask(task, todoList);
  removeTask(task, doneList);
};

<!-- Move Task to Done List -->
var done = function done(task){
  addTask(task, doneList);
  removeTask(task, todoList);
};

<!-- Callback -->
var buttonCallback = function buttonCallback(e){
  var newTask = document.getElementById("newTask").value;
  addTask(newTask, todoList);
};

button.addEventListener("click", buttonCallback)
