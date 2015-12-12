var additem = function additem(str){
    var l = document.getElementById("todo");
    var n = document.createElement("li");
    n.innerHTML=str;
    l.appendChild(n);
};

var switchitem = function() {
    var two = document.getElementById("done");
    two.appendChild(this);
};

var removeitem = function(){
    var list = document.getElementById("done").getElementsByTagName("li");
    list.remove(this);
};

var buttonCallback = function buttonCallback(e){
    console.log(e);
    console.log(this);
    var n = document.getElementById("newitem").value;
    additem(n);
    var kew = document.getElementById("todo")
    kew.children[kew.children.length - 1].addEventListener('click', switchitem);
};

var greendale = document.getElementById("done");
var humans = greendale.children;
for (var i= 0; i < humans.length; i++) {
    humans[i].addEventListener('click',removeitem)
}

var button = document.getElementById("b");
b.addEventListener("click",buttonCallback);
