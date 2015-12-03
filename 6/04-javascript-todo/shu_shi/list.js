
var addItem = function addItem(s){
    var l = document.getElementById("todo");
    var n = document.createElement("li");
    n.innerHTML = s;
    l.appendChild(n);
};

var removeItem = function removeItem(s){
    var list = document.getElementsByTagName("li");
    for(i = 0; i < list.length; i ++){
	if(list[i].innerHTML == s){
	    list[i].remove();
	    break;
	}
    }
}


var ButtonCallback = function(e){
    var add = document.getElementById("add").value;
    addItem(add);
};

var addFinish = function addFinish(s){
    var l = document.getElementById("done");
    var n = document.createElement("li");
    n.innerHTML = s;
    l.appendChild(n);
};

var ClickCallback = function(e){
    var s = document.getElementById("todo").getElementsByTagName("li")[0].innerHTML;
    removeItem(s);
    addFinish(s);
};

var ClickCallback2 = function(e){
    document.getElementById("done").getElementsByTagName("li")[0].remove();
}

var button = document.getElementById("b");
b.addEventListener('click',ButtonCallback);

var todo = document.getElementById("todo");
todo.addEventListener('click',ClickCallback);

var done = document.getElementById("done");
done.addEventListener('click',ClickCallback2);
