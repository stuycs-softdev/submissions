var addItem = function addItem(s,list) {
    var l = document.getElementById(list);
    var n = document.createElement("li");
    n.innerHTML=s;
    l.appendChild(n);
};


var buttonCallback = function(e){
	var text = document.getElementById("submission").value;
	addItem(text,"to-do");
};
var b = document.getElementById("button");
b.addEventListener('click',buttonCallback);


