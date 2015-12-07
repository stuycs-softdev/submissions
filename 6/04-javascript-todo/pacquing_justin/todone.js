console.log("hi");
var getToDo = function getToDo(){
    var a = document.getElementById("addForm").elements.namedItem("addtodo").value;
    //console.log(a);
    return a;
};

var addToDo = function addToDo(){
    var a = getToDo();
    var l = document.getElementById("todolist");
    var d = document.createElement("li");
    d.innerHTML = a;
    d.setAttribute("id","todoel");
    l.appendChild(d);
    var c = l.children;
    c[c.length - 1].addEventListener('click', DoCallBack);
};

var ButtonCallBack = function ButtonCallback(){
    addToDo();
};
/*
var b = document.getElementById("but");
b.addEventListener('click',ButtonCallBack);
*/
var FormCallBack = function FormCallBack(e){
    console.log("does this work?");
    e.preventDefault();
    addToDo();
};

var f = document.getElementById("addForm");
f.addEventListener('submit',FormCallBack);

var DoCallBack = function DoCallBack(){    
    //console.log("is this even working lol");
    var l = document.getElementById("todonelist");
    l.appendChild(this);
    this.addEventListener('click', DoneCallBack);
};

var DoneCallBack =  function DoneCallBack(){
    var l = document.getElementById("todonelist");
    l.removeChild(this);
};
