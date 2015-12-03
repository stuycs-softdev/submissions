var add = function add(item, list){
    var tag = document.createElement("li");
    tag.innerHTML = item;
    list.appendChild(tag);
};

var itemCallback = function itemCallback(e){
    var todo = document.getElementById("todo");
    var done = document.getElementById("done");
    if (done.contains(this)){
	done.removeChild(this);
    }else{
	todo.removeChild(this);
	done.appendChild(this);
    }
};

var buttonCallback = function buttonCallback(e){
    var list = document.getElementById("todo");
    var textBox = document.getElementById("item");
    var input = textBox.value;
    if (input != ""){
	add(input, list);
	list.children[list.children.length - 1].addEventListener("click", itemCallback);
    }
    textBox.value = "";
};

var button = document.getElementById("button");
button.addEventListener("click", buttonCallback);
