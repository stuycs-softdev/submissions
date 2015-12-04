
console.log("javascript loaded");
var additem = function additem(s){
    console.log(this);
    var l = document.getElementById("todolist");
    var n = document.createElement("li");
    n.innerHTML=s;
    l.appendChild(n);
};


var addTask = function addTask(){
    console.log(this);
    var s=document.getElementById("task").value;
    additem(s);
};

var button = document.getElementById('add');
add.addEventListener('click',addTask);

var todolist = document.getElementById("todolist");
var doItems=todolist.children;
var checklist=document.getElementById("checklist");
var checkItems=checklist.children;


console.log(this);
var shiftClick = function shiftClick(n){
    n.addEventListener('click',shiftitem);
}

var undoClick = function undoClick(n){
    console.log("hello");
    n.addEventListener('click',undoitem);
}

var shiftitem = function shiftitem(){
    var n = document.createElement("li");
    n.innerHTML = this.innerHTML;
    checklist.appendChild(n);     
    shiftClick(n);
                                                                   
    this.remove();
};

var undoitem=function undoitem(){
    var n = document.createElement("li");
    n.innerHTML = this.innerHTML;
    todolist.appendChild(n);     
    undoClick(n);
                                                                   
    this.remove();
};

var j=0;
var quit=0;
var highlight=function highlight(){
    if (quit==1){
	return;
    }
    var l=document.getElementsByTagName("li");
    l[l.length-1].classList.remove("highlight");
    l[j].classList.add("highlight");
    if (j>0){
	l[j-1].classList.remove("highlight");
    }
    j++;
    if (l.length==j){
	j=0;
    }
    console.log(l);
}

var highlightButton=document.getElementById("hl");
hl.addEventListener('click',highlight);

var run=function run(){
    quit=0;
    var myInterval =  setInterval(highlight,1000);
    
}

var goButton=document.getElementById("go");
go.addEventListener('click',run);

var stopIt = function stopIt(){
    quit=1;
}

var stopButton=document.getElementById("Stop");
console.log(Stop);
Stop.addEventListener('click',stopIt);

//stop.addEventListener("stop",stopIt);

for (var i=0;i<doItems.length;i++){
    shiftClick(doItems[i]);
};


for (var i=0;i<checkItems.length;i++){
    console.log(this);
    undoClick(checkItems[i]);
};

