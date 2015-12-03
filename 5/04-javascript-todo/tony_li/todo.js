
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



var shiftClick = function shiftClick(n){
    n.addEventListener('click',shiftitem);
}

var undoClick = function undoClick(n){
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

for (var i=0;i<doItems.length;i++){
    shiftClick(doItems[i]);
};


for (var i=0;i<checkItems.length;i++){
    console.log(this);
    undoClick(checkItems[i]);
};

