
var addItem = function addItem(item, list) {
    var addition = document.createElement("li");
    addition.innerHTML = item;
    list.appendChild(addition);
};

var removeItem = function(item, list) {
    //var li = document.getElementById(list);
    list[item].remove();
};

var enterCallback = function enterCallback(e) {
    //window.alert("starting");
    //window.alert("passed first alert");

    var todo = document.getElementById("todolist");
    //window.alert("todo created");

    var textBox = document.getElementById("adding");
    var input = textBox.value;
    //window.alert("test");

    if (input != "") {
	addItem(input, todo);
	todo.children[todo.children.length - 1].addEventListener("click", finishCallback);
    }
    textBox.value = "";
};

var finishCallback = function finishCallback(e) {
    //window.alert("ftest");
    var todo = document.getElementById("todolist");
    var finished = document.getElementById("finishedlist");
    //window.alert("ftest");
    //addItem(this, finished);
    finished.appendChild(this);
    finished.children[finished.children.length - 1].addEventListener("click", deleteCallback);
    removeItem(this, todo);
};

var deleteCallback = function deleteCallback(e) {
    var finished = document.getElementById("finishedlist");
    removeItem(this, finished);
}

var enter = document.getElementById("enter");
enter.addEventListener("click", enterCallback);

var highlight = function highlight() {
    console.log("highlighting");
}

var interval = setInterval(highlight, 2000);
var start = document.getElementById("start");
var stop = document.getElementById("stop");
start.addEventListener("click", highlight);
stop.addEventListener("click", clearInterval(interval));

var stufftodo = document.getElementById("todolist");
var thingstodo = stufftodo.children;
for (var i = 0; i < thingstodo.length; i++) {
    thingstodo[i].addEventListener("click", finishCallback);
}
todo.children[todo.children.length - 1].addEventListener("click", finishCallback);
