var addItem = function addItem(text, list) {
	var l = document.getElementById(list);
	var n = document.createElement("li");
	n.innerHTML = text;
	l.appendChild(n);
};

var removeItem = function removeItem(item, list) {
	var items = document.getElementById(list).children;
	for (var i=0; i < items.length; i++) {
		console.log(items[i] + " -- " + item);
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
}

var setDone = function setDone() {
	var i = document.getElementsByTagName("li");
	var t = this.innerHTML;
	console.log("setting " + t + " to done");
	removeItem(this, "todo-list");
	addItem(t, "done-list");
}

var addTodoEvents = function addTodoEvents(n, itemList) {
	itemList[n].addEventListener('click', setDone);
}

var todoItems = document.getElementById("todo-list").children;
for (var i=0; i < todoItems.length; i++) {
	addTodoEvents(i, todoItems);
}
