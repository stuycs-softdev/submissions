var add_todo = function(item) {
	var list = document.getElementById("list_todo");
	var new_item = document.createElement("li");
	new_item.innerHTML = item;
	list.appendChild(new_item);
};

var button_add_todo = function(foo) {
	console.log(foo);
	addItem("Item x");
};

var l = document.getElementById("list_todo");
l.addEventListener("click", button_add_todo);
