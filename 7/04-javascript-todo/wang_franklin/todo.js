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
    var complete = document.getElementById("done");
    
    if (complete.contains(this)){
	complete.removeChild(this);
    } 
    else {
	todo.removeChild(this);
	complete.appendChild(this);
    }
};

var remove = function remove(){
  
    var todo = document.getElementById("todo");
    var complete = document.getElementById("done");
    
    if (complete.contains(complete.children[0])){
	complete.removeChild(complete.children[0]);
    } 
    else {
    }
};

var myInterval;

var start = document.getElementById("start");
var stop = document.getElementById("stop");

start.addEventListener('click',function(){
		myInterval = setInterval(remove,10000);
});

stop.addEventListener('click',function(){
		clearInterval(myInterval);
});

var button = document.getElementById("submit");

button.addEventListener("click",submit);

document.getElementById('b2').addEventListener('click',done);
