console.log("javascript loaded");

var additem = function additem(s,listname){
    var l = document.getElementById(listname);
    var n = document.createElement("li");
    n.innerHTML=s;
    l.appendChild(n);
};

var buttonCallback = function buttonCallback(e){
    var raw = document.getElementById("stuff")
    var text = raw.value;
    additem(text,"todo")
};

var button = document.getElementById('b');
b.addEventListener('click',buttonCallback);

