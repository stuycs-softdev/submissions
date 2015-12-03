//the parameter s is the id from the node being removed
var addItemToDone = function addItemToDone(s){
    var node = document.createElement("LI");
    var textnode = document.createTextNode(s);
    node.appendChild(textnode);
    document.getElementById("done").appendChild(node); 
//		var m = document.getElementById(s);
//		var n = document.getElementById("done");
//		n.appendChild(m);
};

var removeItemFromToDo = function removeItemFromToDo(s){
		var m = document.getElementById(s);
    var n = document.getElementById("todo");
    n.removeChild(m)
};

var addItemToDo = function addItemToDone(s){
		var m = document.getElementById(s);
		var n = document.getElementById("todo");
		n.appendChild(m);
};

var removeItemFromDone = function removeItemFromToDo(s){
		var m = document.getElementById(s);
    var n = document.getElementById("done");
    n.removeChild(m)
};

//removes item from todo list and adds to done list
var t1Callback = function(e){
		console.log(e);
		addItemToDone(t1);
    removeItenFromToDo(t1);
};
document.addEventListener('click',t1Callback("t1"));

/*
var b2Callback = function(e){
		e.preventDefault();
		removeItem(0);
};
document.getElementById('b2').addEventListener('click',b2Callback);
*/

