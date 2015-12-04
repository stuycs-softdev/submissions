console.log("HELLO, Js loaded");

//Add to lists function
var add = function add(s) {
    var list = document.getElementById("list");
    var newItem = document.createElement("li");
    newItem.innerHTML = s;
    list.appendChild(newItem);
};

//Button to add to list
var buttonNew = document.getElementById("submit");
buttonNew.addEventListener('click', function(e) {
    var text = document.getElementById("newitem").value;
    add(text);
});

var list = document.getElementById("list");
var items = list.children;
var colored = 0;
var buttonAdvance = document.getElementById("advance");
buttonAdvance.addEventListener('click', advance);

var advance = function advance() {
    //var list = document.getElementById("list");
    //var items = list.children;
    items[colored].style.color = "red";
    if (items.length > 1) {
	if (colored == 0) {
	    items[items.length - 1].style.color = "black";
	    colored++;
	}
	else if (colored == items.length - 1) {
	    items[colored - 1].style.color = "black";
	    colored = 0;
	}
	else {
	    items[colored - 1].style.color = "black";
	    colored++;
	}
    }
};

var myInterval;
var buttonCycle = document.getElementById("cycle");
buttonCycle.addEventListener('click', function(e) {
    myInterval = setInterval(advance, 100);
});
var buttonStop = document.getElementById("stop");
buttonStop.addEventListener('click', function() {
    clearInterval(myInterval);
});
	
/*
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
*/
