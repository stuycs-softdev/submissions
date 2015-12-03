var addItem = function addItem(s){
    var l = document.getElementById("list");
    var n = document.createElement("li");
    n.innerHTML=s;
    l.appendChild(n);
};

var removeItem = function(n){
    n.remove();
};

var buttonCallback = function buttonCallback(e){
    console.log(e);
    console.log(this);
    addItem(document.getElementById("textbox").value);
    document.getElementById("textbox").value = "";
};

function removeFunction(event) {
    var x = event.target;
    removeItem(x);
}

var button = document.getElementById('b1');
b1.addEventListener('click', buttonCallback);

var list = document.getElementById("list");
var items=list.children;
console.log(items);

for (var i=0;i<items.length;i++){
    addListEvents();
};
