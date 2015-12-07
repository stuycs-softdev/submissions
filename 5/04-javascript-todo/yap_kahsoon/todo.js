//Adds item to the end of a list
//params: an item and a list
var additem = function additem(item,listname){
		var n = document.createElement("li");
		n.innerHTML=item;
		listname.appendChild(n);
};

//Changes colors
var colorCallback = function(){
    var items = document.getElementById("todolist").children;
    for (var i = 0; i < items.length; i++){
	if (items[i].classList.contains("red")){
	    items[i].classList.toggle("red");
	    if (items.length != 1){
		i++;
		if (i == items.length){
		    items[0].classList.toggle("red");
		} else {
		    items[i].classList.toggle("red");
		}
	    }
	    return;
	} else if (i == items.length-1){
	    items[0].classList.toggle("red");
	}
    }
};

//Adds an item to the todolist
//type something into textbox and press the button
var todoCallback = function todoCallback(){
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

var event;

var startCallback = function startCallback(){
    event = setInterval(colorCallback, 1000);
};

var stopCallback = function stopCallback(){
    clearInterval(event);
}
var button = document.getElementById("addtolist");
addtolist.addEventListener("click", todoCallback);

var colorButton = document.getElementById("colors");
colors.addEventListener("click", colorCallback);

var startButton = document.getElementById("start");
start.addEventListener("click", startCallback);

var endButton = document.getElementById("end");
end.addEventListener("click", stopCallback);
