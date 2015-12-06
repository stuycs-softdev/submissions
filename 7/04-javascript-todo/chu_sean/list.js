var addItem = function addItem(s,list) {
    var l = document.getElementById(list);
    var n = document.createElement("li");
    n.innerHTML=s;
    l.appendChild(n);
};

var removeItem = function removeItem(list) {
	var l = document.getElementById(list);
	l.removeChild(l.childNodes[0]);
};
var buttonCallback = function(e){
	var text = document.getElementById("submission").value;
	addItem(text,"to-do");
};
var b = document.getElementById("button");
b.addEventListener('click',buttonCallback);

var count = -1;
var auto_add = function(e){
    count += 1;
    addItem(count, "to-do");
};

var timeInterval;

var start = document.getElementById("start");
var stop = document.getElementById("stop");
start.addEventListener('click', function(){
	timeInterval = setInterval(auto_add,1000);
});
stop.addEventListener('click',function(){
	clearInterval(timeInterval);
});
