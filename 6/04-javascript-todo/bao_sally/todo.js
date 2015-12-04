console.log("loaded js");

var itemId = 0;

var addItem = function addItem(lid, s){
		var l = document.getElementById(lid);
		var item = document.createElement("button");
		item.classList.add("list-group-item");
		item.id = "" + itemId;
		itemId += 1;
		if (lid == "done")
				item.classList.add("list-group-item-success");
		item.innerHTML = s;
		addMouseEvents(item);
		l.appendChild(item);
};

var removeItem = function removeItem(lid, itid){
		var l = document.getElementById(lid);
		var items = l.children;
		for (var i = 0; i < items.length; i++){
				if (items[i].id == itid){
						items[i].remove();
						break;
				}
		}
};


var getText = function(e){
		e.preventDefault();
		var n = document.getElementById("text");
		var text = n.value;
		if (/\S/.test(text)){
				addItem("todo", text);
				n.value = "";
		}
};

var clearList = function(e){
		var l = document.getElementById("todo");
		l.innerHTML = "";
		l = document.getElementById("done");
		l.innerHTML = "";
};

var addMouseEvents = function(item){
		item.addEventListener('click', function(e){
				var parent = item.parentElement;
				if (parent.id == "todo"){
						addItem("done", this.innerHTML);
						removeItem("todo", this.id);
				}
				else {
						removeItem("done", this.id);
				}			
		});
};


document.getElementById("submit").addEventListener('click', getText);
document.getElementById("clear").addEventListener('click', clearList);


var index = 0;
var changeColor = function changeColor(){
		var l = document.getElementById("todo").children;
		if (l.length == 0)
				return;
		if (index == l.length){
				l[index - 1].classList.remove("list-group-item-danger");
				index = 0;
		}
		if (index - 1 >= 0)
				l[index - 1].classList.remove("list-group-item-danger");
		
		l[index].classList.add("list-group-item-danger");
		index += 1;
};



var myInterval;
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var next = document.getElementById("next");

next.addEventListener('click', changeColor);

start.addEventListener('click', function(e){
		next.classList.add("disabled");
		myInterval = setInterval(changeColor, 200);
});
stop.addEventListener('click', function(e){
		next.classList.remove("disabled");
		clearInterval(myInterval);
});




