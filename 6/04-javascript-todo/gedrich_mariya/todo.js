console.log("loaded js");

//adds item with value s to to-do list
var addItemToDo = function addItemToDo(s) {
    var list = document.getElementById("todo");
    var item = document.createElement("li");
    item.innerHTML = s;
    list.appendChild(item);
};

//removes item from to-do list
var removeItem = function removeItem(item) {
    //var list = document.getElementById("todo");
    //var items = list.children;
    item.remove();
};

//adds item to done list
var addItemDone = function addItemDone(item) {
    var list = document.getElementById("done");
    //var item = document.createElement("li");
    //item.innerHTML = s;
    list.appendChild(item);
};

//stuff for add button
var b1 = document.getElementById("b1");
//var b1 = document.getElementById("todo");



var b1Callback = function(e) {
    var text = document.getElementById("new_task");
    console.log('hi');
    addItemToDo(text.value);
    text.value="";
};

//stuff for shifty button
var b2 = document.getElementById("b2");


var b2Callback = function(e) {
    var list = document.getElementById("todo");
    var items = list.children;
    var thing = items[0];
    thing.remove();
    addItemDone(thing);
};

b1.addEventListener('click', b1Callback);
b2.addEventListener('click', b2Callback);


