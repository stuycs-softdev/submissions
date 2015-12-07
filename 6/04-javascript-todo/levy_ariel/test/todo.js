var addItem = function addItem(text, list) {
	var l = document.getElementById(list);
	var n = document.createElement("li");
	n.innerHTML = text;
	l.appendChild(n);
};

var removeItem = function removeItem(item, list) {
	var items = document.getElementById(list).children;
	for (var i=0; i < items.length; i++) {
		if (items[i] === item) {
			items[i].remove();
			return i;
		}
	}
};

var addItemTodo = function addItemTodo() {
	var t = document.getElementById("newItem").value;
	addItem(t, "todo-list");
	var ti = document.getElementById("todo-list").children;
	addTodoEvents(ti.length-1, ti);
};

var setDone = function setDone() {
	var i = document.getElementsByTagName("li");
	var t = this.innerHTML;
	console.log("setting " + t + " to done");
	removeItem(this, "todo-list");
	addItem(t, "done-list");
};

var addTodoEvents = function addTodoEvents(n, itemList) {
	itemList[n].addEventListener('click', setDone);
};

var todoItems = document.getElementById("todo-list").children;
for (var i=0; i < todoItems.length; i++) {
	addTodoEvents(i, todoItems);
};

var curItem = 0;
var markNext = function markNext() {
	var list = document.getElementById("mark-list").children;
	list[curItem].style.color = "#000000";
	if (curItem == list.length-1)
		curItem = 0;
	else
		curItem += 1;
	list[curItem].style.color = "#ff00ff";
};	

var start = document.getElementById("start");
var stop = document.getElementById("stop");

var markInterval;
start.addEventListener("click", function(e) {
	markInterval = setInterval(markNext, 1000);
});
stop.addEventListener("click", function(e) {
	clearInterval(markInterval);
});

