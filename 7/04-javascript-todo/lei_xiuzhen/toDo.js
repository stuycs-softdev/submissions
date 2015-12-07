
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

var enter = document.getElementById('add');
enter.addEventListener('click',addCallback);

var i = 0;
var rotation = function(e){
    var toDoList = document.getElementById('toDo');
    toDoList.children[toDoList.children.length-1].style.color="black";
    if (i<toDoList.children.length){
	if (i != 0){
	    toDoList.children[i-1].style.color="black";
	}
	toDoList.children[i].style.color="blue";
	i++;
    }
    if (i == toDoList.children.length){
	i=0;
    }
    myInterval;
};

var start = document.getElementById('start');
var stop = document.getElementById('stop');
var myInterval;

start.addEventListener('click',function(){
    myInterval = setInterval(rotation,1000);
});
stop.addEventListener('click',function(){
    clearInterval(myInterval);
});
next.addEventListener('click',rotation);
