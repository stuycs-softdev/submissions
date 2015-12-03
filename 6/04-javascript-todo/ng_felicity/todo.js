//the parameter s is the id from the node being removed
function addItemToDone(s){
    var n = document.getElementById("done");
    n.appendChild(s);
};

function addItemToDo(s){
    var n = document.getElementById("todo");
    n.appendChild(s);
};

//removes item from todo list and adds to done list
function bCallback(e){
    addItemToDone(this);
    this.removeEventListener("click", bCallback);
    this.addEventListener('click',dCallback);
};
document.getElementById("t1").addEventListener('click',bCallback);
document.getElementById("t2").addEventListener('click',bCallback);
document.getElementById("t3").addEventListener('click',bCallback);
document.getElementById("t4").addEventListener('click',bCallback);
document.getElementById("t5").addEventListener('click',bCallback);

function dCallback(e){
  addItemToDo(this);
  this.removeEventListener("click", dCallback);
  this.addEventListener('click',bCallback);
};
/*
document.getElementById("t1").addEventListener('click',dCallback);
document.getElementById("t2").addEventListener('click',dCallback);
document.getElementById("t3").addEventListener('click',dCallback);
document.getElementById("t4").addEventListener('click',dCallback);
document.getElementById("t5").addEventListener('click',dCallback);*/

/*
var b2Callback = function(e){
    console.log(e);
    addItemToDone(t2);
    removeItemFromToDo(t2);
};
document.getElementById("t2").addEventListener('click',b2Callback);

var b3Callback = function(e){
    console.log(e);
    addItemToDone(t3);
    removeItemFromToDo(t3);
};
document.getElementById("t3").addEventListener('click',b3Callback);

var b4Callback = function(e){
    console.log(e);
    addItemToDone(t4);
    removeItemFromToDo(t4);
};
document.getElementById("t4").addEventListener('click',b4Callback);
var b5Callback = function(e){
    console.log(e);
    addItemToDone(t5);
    removeItemFromToDo(t5);
};
document.getElementById("t4").addEventListener('click',b5Callback);
*/
var highlight = function highlight(e){
    var x = document.getElementById(e);
    var y = x.getElementById("txt");
    var para = document.createElement("mark");
    para.appendChild(y);
}
