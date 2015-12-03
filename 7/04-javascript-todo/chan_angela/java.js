// Adding activities
var buttonCallback = function(e){
    var activity = document.getElementById("activity").value;
    addItem(activity);
}

var button = document.getElementById("button");
button.addEventListener("click", buttonCallback);


// Moving activities
var activities = document.getElementById("todo");
var items = activities.children;

var addMouseEvents = function(item){
    item.addEventListener("mouseover", function(e){
	this.style.color = 'lightcoral';
    });
    item.addEventListener("mouseout", function(e){
	this.style.color = 'black';
    });
    item.addEventListener("click", function(e){
	var switching = this.innerHTML;
	switchItem(switching);
	this.remove();
    });
}

for(var i=1; i<items.length; i++){
    addMouseEvents(items[i]);
}

// Finishing activities
var finished = document.getElementById("done");
var list = finished.children;

var addEvents = function(item){
    item.addEventListener("mouseover", function(e){
	this.style.color = 'plum';
    });
    item.addEventListener("mouseout", function(e){
	this.style.color = 'black';
    });
    item.addEventListener("click", function(e){
	this.remove();
    });
}

for(var i=1; i<list.length; i++){
    addEvents(list[i]);
}


// Other functions
var addItem = function addItem(s){
    var l = document.getElementById("todo");
    var n = document.createElement("dd");
    n.innerHTML = s;
    l.appendChild(n);
    addMouseEvents(items[items.length-1]);
}
var switchItem = function switchItem(s){
    var l = document.getElementById("done");
    var n = document.createElement("dd");
    n.innerHTML = s;
    l.appendChild(n);
    addEvents(list[list.length-1]);
}
