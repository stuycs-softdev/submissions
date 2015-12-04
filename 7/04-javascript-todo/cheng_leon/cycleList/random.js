var addItem = function addItem(s){
    var n = document.createElement("li");
    n.innerHTML = s;
    var l = document.getElementById("theList");
    l.appendChild(n);
    console.log(n);
};

var buttonCallback = function(e){
    addItem("something");
}

var b = document.getElementById("addButton");
b.addEventListener('click', buttonCallback);
