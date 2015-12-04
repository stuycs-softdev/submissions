console.log("loaded js");

//adds item with value s to to-do list
var addItemToDo = function addItemToDo(s) {
    var list = document.getElementById("todo");
    var item = document.createElement("li");
    item.innerHTML = s;
    list.appendChild(item);
};

//removes item from to-do list
var removeItem = function removeItem(item) {
    //var list = document.getElementById("todo");
    //var items = list.children;
    item.remove();
};

//adds item to done list
var addItemDone = function addItemDone(item) {
    var list = document.getElementById("done");
    //var item = document.createElement("li");
    //item.innerHTML = s;
    list.appendChild(item);
};

//highlighter
var highlight = function highlight() {
    var list=document.getElementById("todo");
    var items=list.children;
    var item=items[itemInd];
    
    if (itemInd==0) {
	var lastItem=items[items.length-1];	
    } else {
	var lastItem=items[itemInd-1];
    }
    
    lastItem.classList.remove('high');
    item.classList.add('high');
    
    if (itemInd==items.length-1) {
	itemInd=0;
    } else {
	itemInd++;
    }
    setTimeout(highlight, 5000);
}

//stuff for add button
var add = document.getElementById("add");
//var b1 = document.getElementById("todo");



var addCallback = function(e) {
    var text = document.getElementById("new_task");
    console.log('hi');
    addItemToDo(text.value);
    text.value="";
};

//stuff for shifty button
var move = document.getElementById("move");

var moveCallback = function(e) {
    var list = document.getElementById("todo");
    var items = list.children;
    var thing = items[0];
    thing.remove();
    addItemDone(thing);
};

var itemInd=0;
var lastInd=-1;

var start = document.getElementById("start");
var stop=document.getElementById("stop");
var step=document.getElementById("step");

var interval;
add.addEventListener('click', addCallback);
move.addEventListener('click', moveCallback);
step.addEventListener('click', highlight);
start.addEventListener('click', function(e) {
    interval=setInterval(highlight, 3000);
});
stop.addEventListener('click', function(e) {
    clearInterval(interval);
});

