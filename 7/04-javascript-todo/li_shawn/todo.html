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

var mouseX;
var mouseY;
 window.addEventListener('mousemove',function(e){
     mouseX=e.pageX;
     mouseY=e.pageY;
   }); 
function move(e) {
  var SAP=document.getElementById("SAP");
   var moveelt=document.querySelector('.move');
   var x = (moveelt.style.left);
   var y = (moveelt.style.top);
   x=x.substring(0,x.length-2);
   x=parseInt(x);
   y=y.substring(0,y.length-2);
   y=parseInt(y);
   
   if (isNaN(x)) x=200;
   if (isNaN(y)) y=200;
  if (mouseX<x) {
     x=x-3;
  } else {
     x=x+3;
   }
  if (mouseY<y) {
     y=y-3;
  } else {
     y=y+3;
   }
   moveelt.style.left=x+"px";
   moveelt.style.top=y+"px";
  var deltaY = mouseY-y;
  var deltaX = mouseX-x;
  var degs=Math.atan2(deltaY,deltaX) *360 / 3.14159;
  SAP.style.webkitTransform = "rotate("+degs+"deg)";
  //('-webkit-transform','rotate('+degs+"deg)");
}
var myevent;
function startit() {
 myevent = setInterval(move,20);
}
function stopit() {
	window.clearTimeout(myevent);
}
 document.getElementById("start").addEventListener('click',startit);
 document.getElementById("stop").addEventListener('click',stopit);


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
