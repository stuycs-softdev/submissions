var todo = document.getElementById("todo");
var done = document.getElementById("done");

document.getElementById("submit").addEventListener("click",function(){
    var input = document.getElementById("task");
    var text = input.value;
    var el = document.createElement("li");
    el.innerHTML = text;
    input.value = "";
    el.addEventListener("click",function(){
	this.remove(this);
	done.appendChild(this);
	el.removeEventListener("click");
	el.addEventListener("click",function(){
	    this.remove(this);
	});
    });
    todo.appendChild(el);
});
