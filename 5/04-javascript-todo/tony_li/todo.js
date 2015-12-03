
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
var items=todolist.children;
console.log(items);
