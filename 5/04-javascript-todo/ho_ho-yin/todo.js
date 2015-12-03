var addToDo = function addToDo(){
    var todoList = document.getElementById("todoList");
    var newThing = document.getElementById("addtodo").elements.namedItem("newtodo").value;
    var newListItem = document.createElement("li");
    newListItem.innerHTML=newThing;
    newListItem.setAttribute("id", "newItem");
    todoList.appendChild(newListItem);
    var todos = todoList.children;
    todos[todos.length - 1].addEventListener("click", Callback);
};

var Callback = function Callback(){
    var doneList = document.getElementById("doneList");
    doneList.appendChild(this);
};

var button = document.getElementById("add");
button.addEventListener('click', addToDo);
    
