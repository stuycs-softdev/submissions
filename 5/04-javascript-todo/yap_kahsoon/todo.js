//Adds item to the end of a list
//params: an item and a list
var additem = function additem(item,listname){
		var n = document.createElement("li");
		n.innerHTML=item;
		listname.appendChild(n);
};
//Removes item
var removeitem = function(n){
		var items = document.getElementsByTagName("li");
		items[n].remove();
};

//Adds an item to the todolist
//type something into textbox and press the button
var todoCallback = function todoCallback(e){
    var tdlist = document.getElementById("todolist");
    var text = document.getElementById("todo");
    var item = text.value;
    var index = tdlist.children.length
    additem(item,todolist);
    tdlist.children[index].addEventListener("click", doneCallback);
    text.value = "";
};

//Adds an item to the donelist
var doneCallback = function doneCallback(e){
    e.preventDefault();
    var tdlist = document.getElementById("todolist");
    var dlist = document.getElementById("donelist");
    dlist.appendChild(this);
};

//Adds an item to todolist
//press button
var button = document.getElementById("addtolist");
addtolist.addEventListener("click", todoCallback);

//var b1 = document.getElementById("b1");
//b1.addEventListener("click",doneCallback);
