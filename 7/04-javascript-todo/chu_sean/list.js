var addItem = function addItem(s,list) {
    var l = document.getElementById(list);
    var n = document.createElement("li");
    n.innerHTML=s;
    l.appendChild(n);
};

/*var removeItem = function removeItem() {
	var l = document.getElementByTagName("li");
	l[0].remove();
};*/
var buttonCallback = function(e){
	var text = document.getElementById("submission").value;
	addItem(text,"to-do");
};
var b = document.getElementById("button");
b.addEventListener('click',buttonCallback);

var auto_add = function(e){
	addItem("more stuff", "to-do");
};
/*
var removeCallback = function(e){
	removeItem;
};

var remove = document.getElementById("remove");
remove.addEventListener('click',removeCallback);
*/
var timeInterval;

var start = document.getElementById("start");
var stop = document.getElementById("stop");
start.addEventListener('click', function(){
	timeInterval = setInterval(auto_add,1000);
});
stop.addEventListener('click',function(){
	clearInterval(timeInterval);
});