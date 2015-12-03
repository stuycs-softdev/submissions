var addItem = function addItem(s){
    var l = document.getElementById("thelist");
    var n = document.createElement("li");
    n.innerHTML=s;
    l.appendChild(n);
};

var removeItem = function removeItem(n){
    var items = document.getElementsByTagName("li");
    items[n].remove();
};
