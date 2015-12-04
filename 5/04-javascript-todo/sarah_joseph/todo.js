var additem = function additem(str){
    var l = document.getElementById("todo");
    var n = document.createElement("li");
    n.innerHTML=str;
    l.appendChild(n);
};

var removeitem = function(item, li){
    var ul = document.getElementById(li);
    var items = ul.getElementsByTagName("li");
    items[item].remove();
};

var buttonCallback = function buttonCallback(e){
    console.log(e);
    console.log(this);
    var n = document.getElementById("newitem").value;
    additem(n);
};

var button = document.getElementById("b");
b.addEventListener("click",buttonCallback);
