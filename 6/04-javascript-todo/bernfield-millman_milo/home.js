var addItem = function addItemTodo(s) {
		var l = document.getElementById("to-do");
		var n = document.createElement("li");
		n.innerHTML=s;
		l.appendChild(n);
};

var addItem = function addItemDone(s) {
		var l = document.getElementById("done");
		var n = document.createElement("li");
		n.innerHTML=s;
		l.appendChild(n);
};

var removeItem = function removeItemTodo(n) {
		var items = document.getElementsByTagName("li");
		items[n].remove();
};

var ButtonCallback = function(e){
		addItemTodo(document.getElementById("input").value);
};
