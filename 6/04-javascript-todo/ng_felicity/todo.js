//the parameter s is the id from the node being removed
var addItemToDone = function addItemToDone(s){
    var n = document.getElementById("done");
    n.appendChild(s);
};

var removeItemFromToDo = function removeItemFromToDo(s){
    var n = document.getElementById("todo");
    n.removeChild(s);
};

//removes item from todo list and adds to done list
var b1Callback = function(e){
    console.log(e);
    addItemToDone(t1);
    removeItemFromToDo(t1);
};
document.getElementById("t1").addEventListener('click',b1Callback);

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

var highlight = function highlight(e){
    var x = document.getElementById(e);
    var y = x.getElementById("txt");
    var para = document.createElement("mark");
    para.appendChild(y);
}
