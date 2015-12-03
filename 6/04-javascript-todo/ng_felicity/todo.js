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
var t1Callback = function(e){
		console.log(e);
		addItemToDone(t1);
    removeItemFromToDo(t1);
};
document.getElementById("t1").addEventListener('click',t1Callback);

/*
var b2Callback = function(e){
		e.preventDefault();
		removeItem(0);
};
document.getElementById('b2').addEventListener('click',b2Callback);
*/

