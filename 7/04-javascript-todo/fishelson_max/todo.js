var submit = function submit(){
    var todo = document.getElementById("todo");
    var input = document.getElementById("input").value;
    var insert = document.createElement("li");
    insert.innerHTML = input;
    todo.appendChild(insert);
    todo.children[todo.children.length-1].addEventListener("click", done);
};

var done = function done(){
    var todo = document.getElementById("todo");
    var complete = document.getElementById("complete");
    if (complete.contains(this)){
	complete.removeChild(this);
    } else {
	todo.removeChild(this);
	complete.appendChild(this);
    }
};

var button = document.getElementById("button");
button.addEventListener("click",submit);
