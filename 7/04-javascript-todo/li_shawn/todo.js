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

var index = 0;

var cycle = function cycle(){
	var toDoList = document.getElementsByTagName("li");
	if (toDoList.length > 1){
		toDoList[index].style.color="white";
		index = (index + 1) % toDoList.length;
		toDoList[index].style.color="red";
	}
	console.log(toDoList[index]);
};

var myInterval;

var start = document.getElementById("start");
var stop = document.getElementById("stop");
start.addEventListener('click',function(){
		myInterval = setInterval(cycle,100);
});
stop.addEventListener('click',function(){
		clearInterval(myInterval);
});

var submitThis= document.getElementById("submitThis");
submitThis.addEventListener("click",submit);
