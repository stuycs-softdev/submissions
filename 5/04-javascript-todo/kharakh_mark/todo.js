var addItem = function(n, list){
    var l = document.getElementById(list);
    var s = document.createElement("li");
    s.innerHTML = n
    l.appendChild(s);
};

var removeItem = function(n){
    var items = document.getElementsById("toDo");
    var done = items[n].value;
    addItem(done,done);
    items[n].remove();
};

var buttonCallBack = function buttonCallBack(e){
    var stuff = document.getElementById("item")
    var text = stuff.value;
    addItem(text,"toDo");
};

var button = document.getElementById("button");
button.addEventListener("click",buttonCallBack);

var thelist = document.getElementById("toDo");
var listItems=thelist.children;
console.log(listItems);
for (var i=0;i<listItems.length;i++){
    listItems[i].addEventListener("click", removeItem);
};

    
