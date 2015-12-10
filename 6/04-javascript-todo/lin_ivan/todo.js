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

var items = todo.children;
var cnt = 0;
var color = function color(){
    if (cnt == 0){
	items[items.length-1].style.color = "black";
    }
    else{
	items[cnt-1].style.color = "black";
    }
    items[cnt].style.color = "red";
    cnt = (cnt + 1)%items.length;
};

document.getElementById("grow").addEventListener("click",color);

var on = false;
var stuff;
document.getElementById("grow-cycle").addEventListener("click",function(e){
    if (on){
	clearInterval(stuff);
    }else{
	stuff = setInterval(color,2000);
    }
    on = !on;
});
