var additem = function additem(item, list){
    var n = document.createElement("li");
    var l = document.getElementById(list);
    n.innerHTML = item;
    l.appendChild(n);
    addEvent();
    var test = document.getElementById("to do");
    var out = test.children;
    var test2 = document.getElementById("done");
    var out2 = test2.children[0];
    for (var x = 0; x < out.length;x++){
	//console.log(out.getElement() + "edcwioucbho");
    }//console.log(out2);
};

var removeitem = function removeitem(item, list){
    var l = document.getElementById(list);
    l.removeChild(item);

};

var buttonCallback = function buttonCallback(e){
    var stuff = document.getElementById("new");
    var input = stuff.value;
    additem(input, "to do");
};

var change = function change(e){
    additem(this, "done");
    removeitem(this, "to do");

};

var change2 = function change2(e){
    additem(this, "to do");
    removeitem(this, "done");

};

var button = document.getElementById("add");
button.addEventListener("click",buttonCallback);

//addEvent();
var todo = document.getElementById("to do");
var done = document.getElementById("done");
var items=todo.children;
var items2=done.children;
console.log(items);
for (var i=0;i<items.length;i++){
    items[i].addEventListener("click",change);
}
    console.log(items2);
for (var i=0;i<items2.length;i++){
    items2[i].addEventListener("click",change2);
}
var addEvent = function addEvent(){
    console.log("print\n");
    var todo = document.getElementById("to do");
    var done = document.getElementById("done");
    var items=todo.children;
    var items2=done.children;
    //console.log(items);
    for (var i=0;i<items.length;i++){
	items[i].addEventListener("click",change);
    }
    //console.log(items2);
    for (var i=0;i<items2.length;i++){
	items2[i].addEventListener("click",change2);
    }
};
