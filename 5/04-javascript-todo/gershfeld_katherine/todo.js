var addNew = function addNew(item, list){
    var tag = document.createElement("li");
    tag.innerHTML = item;
    list.appendChild(tag);
};

var itemCallback = function itemCallback(e){
    var no = document.getElementById("no");
    var yes = document.getElementById("yes");
    if (yes.contains(this)){
	yes.removeChild(this);
    }else{
	no.removeChild(this);
	yes.appendChild(this);
    }
};

var buttonCallback = function buttonCallback(e){
    var list = document.getElementById("no");
    var textBox = document.getElementById("item");
    var input = textBox.value;
    if (input != ""){
	addNew(input, list);
	list.children[list.children.length - 1].addEventListener("click", itemCallback);
	textBox.value = "";
    }
};

var button = document.getElementById("button");
button.addEventListener("click", buttonCallback);
