var addNew = function addNew(item, list){
    var tag = document.createElement("li");
    tag.innerHTML = item;
    list.appendChild(tag);
};

var itemCallback = function itemCallback(e){
    var no = document.getElementById("no");
    var yes = document.getElementById("yes");
    if (yes.contains(this)){
	yes.removeChild(this);
    }else{
	clearInterval(interval);
	no.removeChild(this);
	yes.appendChild(this);
    }
};

var addCallback = function addCallback(e){
    var list = document.getElementById("no");
    var textBox = document.getElementById("item");
    var input = textBox.value;
    if (input != ""){
	addNew(input, list);
	list.children[list.children.length - 1].addEventListener("click", itemCallback);
	textBox.value = "";
    }
};

var i = -1;
var interval;
var startCallback = function startCallback(e){
    var todo = document.getElementById("no");
    var items = todo.getElementsByTagName("li");
    if (items.length>=0) {
    	if (i>=0) {
    	    items[i].style.color = "black"
    	}
    	i++;
    	if (i==items.length) {
	    i = 0;
    	}
    	items[i].style.color = "red"
    }
    interval = setTimeout(startCallback, 2000);
};

var stopCallback = function stopCallback(e){
    clearInterval(interval);
};

var adder = document.getElementById("adder");
adder.addEventListener("click", addCallback);

var start = document.getElementById("start");
start.addEventListener("click", startCallback);

var stop = document.getElementById("stop");
stop.addEventListener("click", stopCallback);
