var add_todo = function add_todo() {
	var list = document.getElementById("list_todo");
	var new_li = document.createElement("li");
	var new_todo = document.getElementById("new_todo").value;
	new_li.innerHTML = new_todo;
	new_li.addEventListener("click", move_to_done);
	list.appendChild(new_li);
};

var move_to_done = function move_to_done() {
	this.addEventListener("click", function(foo) {
		this.parentNode.removeChild(this);
	});
	document.getElementById("list_done").appendChild(this);
};
