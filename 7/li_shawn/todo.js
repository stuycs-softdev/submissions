console.log("HELLO, Js loaded");

var addItem = function addItem(s){
		var l = document.getElementById("thelist");
		var n = document.createElement("li");
		n.innerHTML=s;
		l.appendChild(n);
};


var removeItem = function removeItem(n){
		var items = document.getElementsByTagName("li");
		items[n].remove();
};

var buttonCallback = function(e){
		addItem("HELLO");
};

var b2Callback = function(e){
		e.preventDefault();
		removeItem(0);
};

var b = document.getElementById('b');
b.addEventListener('click',buttonCallback);

document.getElementById('b2').addEventListener('click',b2Callback);
