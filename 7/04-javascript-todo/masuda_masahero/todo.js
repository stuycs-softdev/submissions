console.log("HELLO, Js loaded");

var buttonCallback = function(e){
    var input = document.getElementById("todo").value;
    addItem(input);
}

var button = document.getElementById("button");
button.addEventListener("click", buttonCallback);

var addItem = function addItem(s){
		var l = document.getElementById("todo_list");
		var n = document.createElement("li");
		n.innerHTML=s;
		l.appendChild(n);
};

var removeItem = function removeItem(n){
		var items = document.getElementsByTagName("li");
		items[n].remove();
};

for(var i=1; i<items.length; i++){
    addMouseEvents(items[i]);
}
