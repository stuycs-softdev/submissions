var additem = function additem(item, list) {
    var li = document.getElementById("thelist");
    var it = document.createElement("li");
    n.innerHTML = item;
    l.appendChild(n);
};

var removeitem = function(item, list) {
    var li = document.getElementById("thelist");
    li[item].remove();
};


var enterCallback = function enterCallback(e) {
    
};


var finishCallback = function finishCallback(e) {
    
};

var deleteCallback = function deleteCallback(e) {
    
};

var enter = document.getElementById("enter");
enter.addEventListener("click", enterCallback);

var todolist = document.getElementById("todolist");
for (var i = 0; i<todolist.length; i++) {
    todolist.[i].addEventListener("click", finishCallback);
}

var finishedlist = document.getElementById("finishedlist");
for (var i = 0; i<finishedlist.length; i++) {
    finishedlist.[i].addEventListener("click", deleteCallback);
}
