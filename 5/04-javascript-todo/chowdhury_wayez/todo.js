var additem = function additem(item, list){
	var n = document.createElement("li");
	var l = document.getElementById(list);
	n.innerHTML = item;
	l.appendChild(n);
	l[length - 1].addEventListener("click", change);
};

var removeitem = function removeitem(item, list){
	var l = document.getElementById(list);
	l.removeChild(item);

};

var buttonCallback = function buttonCallback(e){
	var stuff = document.getElementById("new");
	var input = stuff.value;
	additem(input, "to do");
};

var change = function change(e){
	removeitem(this, "to do");
	additem(this, "done");
};

var change2 = function change2(e){
	removeitem(this, "done");
	additem(this, "todo");
};

var button = document.getElementById("add");
button.addEventListener("click",buttonCallback);

var todo = document.getElementById("to do");
var done = document.getElementById("done");
var items=todo.children;
var items2=done.children;
console.log(items);
for (var i=0;i<items.length;i++){
	items[i].addEventListener("click",change);
}
console.log(items2);
for (var i=0;i<items2.length;i++){
	items2[i].addEventListener("click",change2);
}
