console.log("HELLO, Js loaded");

//Add to lists function
var add = function add(s, listid) {
    var todo = document.getElementById(listid);
    var newItem = document.createElement("li");
    newItem.innerHTML = s;
    if (listid == 'todo') {
	newItem.addEventListener('click', clickToMove(newItem));
    } else if (listid == 'finished') {
	newItem.addEventListener('click', clickToRemove(newItem));
    }
    todo.appendChild(newItem);
};

//Button to add to list
var buttonTodo = document.getElementById("todoSubmit");
buttonTodo.addEventListener('click', function(e) {
    var text = document.getElementById("todoInput").value;
    add(text, "todo");
});

//Todo Variables
var todo = document.getElementById("todo");
var todoItems = todo.children;


//Moving and Removing Methods
var clickToMove = function(todoitem) {
    todoitem.addEventListener('click', function(e) {
	this.remove();
	add(this.innerHTML, "finished");
    });
};

var clickToRemove = function(finisheditem) {
    finisheditem.addEventListener('click', function(e) {
	this.remove();
    });    
};

for (var i=0; i<todoItems.length; i++){
    clickToMove(todoItems[i]);
};
