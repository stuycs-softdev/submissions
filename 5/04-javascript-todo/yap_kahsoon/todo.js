var indx = 0;
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

//Changes colors
var changeColor = function(){
    var items = document.getElementById("todolist");
    var stuff = items.children;
    //console.log(stuff.length);
    //console.log(indx);
    if (stuff.length == 0){
    } else if (stuff.length == 1){
	stuff[0].style.color = "red";
	console.log(stuff);
	indx = 1;
    } else if (stuff.length > indx){
	stuff[indx-1].style.color = "black";
	stuff[indx].style.color = "red";
	indx++;
    } else if (stuff.length == indx){
	stuff[stuff.length-1].style.color = "black";
	stuff[0].style.color = "red";
	indx = 1;
    } else {
	console.log("COLORS!!!");	
    }
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
    tdlist.children[index].classList.add("red");
    text.value = "";
};

//Adds an item to the donelist
var doneCallback = function doneCallback(e){
    e.preventDefault();
    var tdlist = document.getElementById("todolist");
    var dlist = document.getElementById("donelist");
    dlist.appendChild(this);
};

var button = document.getElementById("addtolist");
addtolist.addEventListener("click", todoCallback);

var colorButton = document.getElementById("colors");
colors.addEventListener("click", changeColor);
