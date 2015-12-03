console.log("loaded js");

var addItem = function addItem(s){
    var l = document.getElementById("thelist");
    var n = document.createElement("li");
    n.innerHTML=s;
    l.appendChild(n);
};

var removeItem = function removeItem(n) {
    var items = document.getElementsByTagName("li");
    items[n].remove();
};

var b1Callback = function(e){
    console.log(e);
    addItem("HELLO");
};
var b = document.getElementById("b1");
b.addEventListener('click',b1Callback);

var b2Callback = function(e){
    e.preventDefault();
    removeItem(0);
};

var b = document.getElementById("b2");
b.addEventListener('click',b2Callback);

var thelist = document.getElementById("thelist");
var items = thelist.children;
for (var i=0; i < items.length; i++){
    // items[i].addEventListener('click',redCallback);
    addMouseEvents(items[i]);
};
