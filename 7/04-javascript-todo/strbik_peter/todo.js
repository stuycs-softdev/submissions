var addItem = function addItem(item, list){
    var nItem = document.createElement("li");
    nItem.innerHTML = item;
    list.appendChild(nItem);
};

var itemCallback = function itemCallback(e){
    var todo = document.getElementById("todo");
    var done = document.getElementById("done");
    if (done.contains(this)){
	done.removeChild(this);
    }
    else{
	todo.removeChild(this);
	done.appendChild(this);
    }
};

var buttonCallback = function buttonCallback(e){
    var ls = document.getElementById("todo");
    var text = document.getElementById("item");
    var input = text.value;
    if (input != ""){
	addItem(input, ls);
	ls.children[ls.children.length - 1].addEventListener("click", itemCallback);
    }
    text.value = "";
};

var button = document.getElementById("button");
button.addEventListener("click", buttonCallback);



