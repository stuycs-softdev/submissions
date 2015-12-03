console.log("javascript loaded");

var additem = function additem(s,listname){
    var l = document.getElementById(listname);
    var n = document.createElement("li");
    n.innerHTML=s;
    l.appendChild(n);
};

var removeitem = function(n){
    var items = document.getElementsByTagName("li");
    var donestuff = items[n].innerHTML;
    additem(donestuff,"done")
    items[n].remove();
};

var buttonCallback = function buttonCallback(e){
    var raw = document.getElementById("stuff")
    var text = raw.value;
    additem(text,"todo")
};

var b2Callback = function buttonCallback(e){
    removeitem(0);
};

var button = document.getElementById('b');
b.addEventListener('click',buttonCallback);

var b2 = document.getElementById('b2');
b2.addEventListener('click',b2Callback);
