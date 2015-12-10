console.log("JavaScript successfully loaded");

var addToTDL = function addToTDL(s){
    var tdl = document.getElementById("todolist");
    var n = document.createElement("li");
    n.innerHTML = s;
    tdl.appendChild(n);
    var tdlItems = todolist.children;
    var length = tdlItems.length;
    tdlItems[length-1].addEventListener("click", function(){moveToDL(length-1)});
};

var removeFromTDL = function removeFromTDL(n){
    var items = todolist.children;
    items[n].remove();
};

var moveToDL = function moveToDL(n){
    console.log("hello")
    var tdlItem = document.getElementsByTagName("li")[n];
    var dl = document.getElementById("donelist");
    var doneItem = document.createElement("li");
    doneItem.innerHTML = tdlItem.innerHTML;
    dl.appendChild(doneItem);
    removeFromTDL(n);
    var dlItems = donelist.children;
    var length = dlItems.length;
    dlItems[length-1].addEventListener("click",function(){moveToTDL(length-1)});
};

var removeFromDL = function removeFromDL(n){
    var items = donelist.children;
    items[n].remove();
};

var moveToTDL = function moveToTDL(n){
    var dlItem = document.getElementsByTagName("li")[n];
    var tdl = document.getElementById("todolist");
    var todoItem = document.createElement("li");
    todoItem.innerHTML = dlItem.innerHTML;
    tdl.appendChild(todoItem);
    removeFromDL(n);
    var tdlItems = todolist.children;
    var length = tdlItems.length;
    tdlItems[length-1].addEventListener("click",function(){moveToDL(length-1)});
}

var buttonCallBack = function buttonCallBack(e){
    console.log(e);
    console.log(this);
    var input = document.getElementById("TDLinput");
    var text = input.value;
    addToTDL(text);
};

var highlightedItem = 0;

var highlightButtonCallBack = function highlightButtonCallBack(){
    var tdlItems = todolist.children;
    console.log(highlightedItem);
    if (tdlItems.length > 0){
	if (highlightedItem < tdlItems.length){
	    tdlItems[highlightedItem].classList.toggle("liRed");
	};
	if (highlightedItem > 0){
	    tdlItems[highlightedItem-1].classList.toggle("liRed");
	};
	if (highlightedItem <= tdlItems.length-1){
	    highlightedItem++;
	}
	else {
	    highlightedItem = 0;
	};
    };
};

var addButton = document.getElementById("addButton");
addButton.addEventListener("click",buttonCallBack);

var highlightButton = document.getElementById("highlightButton");
highlightButton.addEventListener("click",function(){highlightButtonCallBack()});

var autoHighlight = setInterval(highlightButtonCallBack,1000);

var startButton = document.querySelector("#startButton");
startButton.addEventListener("click",function(){
    autoHighlight = setInterval(highlightButtonCallBack,1000);
});

var stopButton = document.querySelector("#stopButton");
stopButton.addEventListener("click",function(e){
    clearInterval(autoHighlight);
});

var mouseX;
var mouseY;

window.addEventListener("mousemove",function(e){
    mouseX=e.pageX;
    mouseY=e.pageY;
});

function move(e){
    var pusheen = document.getElementById("pusheen");
    var moveElement = document.querySelector(".move");
    var x = (moveElement.style.left);
    var y = (moveElement.style.top);
    x = x.substring(0,x.length-2);
    x = parseInt(x);
    y = y.substring(0,y.length-2);
    y = parseInt(y);
    
    if (isNaN(x))
	x = 500;
    if (isNaN(y))
	y = 500;

    if (mouseX < x){
	x = x-3;
	pusheen.src="pusheen_left.jpg";
    } else {
	x = x+3;
	pusheen.src="pusheen.jpg";
	}

    if (mouseY < y){
	y = y-3;
    } else {
	y = y+3;
    }

    moveElement.style.left=x+"px";
    moveElement.style.top=y+"px";
};

var movePusheen;

// pusheen will only move if nothing is in the done list
function startPusheen(){
    var dlItems = donelist.children;
    if (dlItems.length == 0){
	movePusheen = setInterval(move,100);
	console.log("start");
    } else {}
    console.log("start");
};

function stopPusheen(){
    clearInterval(movePusheen);
    console.log("stop");
};

var startPusheenButton = document.getElementById("startPusheen");
startPusheenButton.addEventListener("click",function(){startPusheen()});

var stopPusheenButton = document.getElementById("stopPusheen");
stopPusheenButton.addEventListener("click",function(){stopPusheen()});

console.log("Pusheen?");
