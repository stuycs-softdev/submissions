console.log("JS loaded");


var addItem = function addItem(s, list) {
    var n = document.createElement("li");
    n.innerHTML = s;
    list.appendChild(n);
};


var itemCallback = function(e){
    var todo = document.getElementById("theList");
    var done = document.getElementById("Done");
    if (done.contains(this)){
	done.removeChild(this);
    }
    else{
	todo.removeChild(this);
	done.appendChild(this);
    }
};

var buttonCallback = function(e){
    var l = document.getElementById("theList");
    var text = document.getElementById("todo");
    var input = text.value;
    if (input != ""){
	addItem(input, l);
	l.children[l.children.length - 1].addEventListener("click", itemCallback);
    }
    text.value = "";
};

var button = document.getElementById("add");
button.addEventListener("click", buttonCallback);
