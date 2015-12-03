
var addItem = function addItem(l, item){
    if (l == 'toDo'){
	var toDoList = document.getElementById("toDo");
	var n = document.createElement("li");
	n.innerHTML=item;
	n.addEventListener("click",removeCallback);
	toDoList.appendChild(n);
    }
    else if (l == 'done'){
	var doneList = document.getElementById("done");
	var n = document.createElement("li");
	n.innerHTML=item;
	n.addEventListener("click",removeCallback2);
	doneList.appendChild(n);
    }
};

var removeItem = function removeItem(l, n){
    if (l == 'toDo'){
	var toDoList = document.getElementById('toDo');
	for (var i=0; i<toDoList.children.length; i++){
	    if (toDoList.children[i].innerHTML == n){
		addItem('done',toDoList.children[i].innerHTML);
		toDoList.children[i].remove();
	    }
	}
    }
    else if (l == 'done'){
	var doneList = document.getElementById('done');
	for (var i=0; i<doneList.children.length; i++){
	    if (doneList.children[i].innerHTML == n){
		doneList.children[i].remove();
	    }
	}
    }
};

var addCallback = function(e){
    var item = document.getElementById('inputItem').value;
    addItem('toDo',item);
};

var removeCallback = function(e){
    removeItem('toDo',this.innerHTML);
};

var removeCallback2 = function(e){
    removeItem('done',this.innerHTML);
};

var start = document.getElementById('add');
start.addEventListener('click',addCallback);
