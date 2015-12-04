var addToDo = function addToDo(){
    var todoList = document.getElementById("todoList");
    var newThing = document.getElementById("addtodo").elements.namedItem("newtodo").value
    var newListItem = document.createElement("li");
    newListItem.innerHTML=newThing;
    newListItem.setAttribute("id", "newItem");
    todoList.appendChild(newListItem);
    var todos = todoList.children;
    todos[todos.length - 1].addEventListener("click", Callback);
    var listItems = document.getElementsByTagName("li");
    listItems[listItems.length - 1].addEventListener("mouseover",Highlight);
    listItems[listItems.length - 1].addEventListener("mouseout",Delight);
};



var Callback = function Callback(){
    var doneList = document.getElementById("doneList");
    console.log(this);
    doneList.appendChild(this);
};
var Highlight = function Highlight(){
    this.style.color = "blue";
};

var Delight = function Delight(){
    this.style.color = "black";
};

var button = document.getElementById("add");
button.addEventListener('click', addToDo);


