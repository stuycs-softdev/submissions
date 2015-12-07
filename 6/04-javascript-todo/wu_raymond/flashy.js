console.log("loaded");

var addItem = function addItem(text){
	var list = document.getElementById("list-row");
	var n = document.createElement("li");
	n.innerHTML=text;
	list.appendChild(n);
}
var addCallBack = function(){
	addItem(document.getElementById("textbox").value)
}
var addButton = document.getElementById("textbox-submit");
addButton.addEventListener('click',addCallBack);

var index = -1;
var flashItem = function flashItem(){
	var l1 = document.getElementById("list-row");
	var l2 = l1.getElementsByTagName("li");
	var hold;
	if(index!==-1){
		l2[index].style.background = "white";
	}
	if(index>=l2.length-1){
		index = 0;
	}
	else{
		index += 1;
	}
	if(l2.length>0){
		l2[index].style.background = "yellow";
		console.log("coloring");
	}
		console.log(index+"");
}
var flashButton = document.getElementById("flash-item")
flashButton.addEventListener('click',flashItem);
var start = document.getElementById("start");
var stop = document.getElementById("stop");

var myInterval;
start.addEventListener("click",function(e){
	myInterval = setInterval(flashItem,1000);
});
stop.addEventListener("click",function(e){
	clearInterval(myInterval);
})