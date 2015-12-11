

var readTextBox = function readTextBox(){
    var list = document.getElementById("todoList")
    var input = document.getElementById("todoInput").value
    var li = document.createElement("li")
    li.innerHTML = input
    list.appendChild(li)
    console.log(input);
};
var moveToDone = function moveToDone(item)
{
    console.log("moving")
    var toDoList = document.getElementById("todoList");
    toDoList.remove(toDoList.indexOf(item));
    var doneList = document.getElementById("doneList");
    doneList.append(item);
};
var buttonListener = function(e)
{
    e.preventDefault();
    readTextBox();
};

var addListEvents = function(list)
{
    for (i = 0; i < list.length; i++)
    {
	item = list[i];
	item.addEventListener("click", moveToDone(this));
    }
};  
var button = document.getElementById("submit");
button.addEventListener("click", buttonListener);
var todoList = document.getElementById("todoList");
addListEvents(todoList);

