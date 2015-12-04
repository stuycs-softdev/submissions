var submit = function submit(){
	var toDoList = document.getElementById("toDoList");
	var input = document.getElementById("input").value;
	var attach = document.createElement("li");
	attach.innerHTML = input;
	toDoList.appendChild(attach);
	toDoList.children[toDoList.children.length-1].addEventListener("click", process);
};

var process = function process(){
	var toDoList = document.getElementById("toDoList");
	var result = document.getElementById("result");
	if (result.contains(this)){
		result.removeChild(this);
	} else {
		toDoList.removeChild(this);
		result.appendChild(this);
	}
};

var start = document.getElementById("start");
var stop = document.getElementById("stop");
start.addEventListener('click',function(){
		myInterval = setInterval(doStuff,1000);
});
stop.addEventListener('click',function(){
		clearInterval(myInterval);
});

var redCallback = function(e){
		this.classList.toggle('red');		
};

var submitThis= document.getElementById("submitThis");
submitThis.addEventListener("click",submit);
