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
addButton.addEventListener('click',addCallBack)


var moveItem = function moveItem(){
	var l1 = document.getElementById("list-row");
	var l2 = l1.getElementsByTagName("li");
	var d1 = document.getElementById("done-row");
	d1.appendChild(l2[0]);
}
var moveButton = document.getElementById("move-item");
moveButton.addEventListener('click',moveItem);

var removeItem = function removeItem(){
	var l1 = document.getElementById("done-row");
	var l2 = l1.getElementsByTagName("li");
	l2[0].remove();
}
var removeButton = document.getElementById("remove-item");
removeButton.addEventListener('click',removeItem);

var moveItem2= function moveItem2(){
	var l1 = document.getElementById("done-row");
	var l2 = l1.getElementsByTagName("li");
	var d1 = document.getElementById("list-row");
	d1.appendChild(l2[0]);
}
var moveButton2 = document.getElementById("move-item2");
moveButton2.addEventListener('click',moveItem2);