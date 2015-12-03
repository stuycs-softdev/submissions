console.log("Initiate List");

var addItem = function addItem(e,l){
    console.log(e);
    var a = document.createElement("li");
    a.innerHTML = e;
    a.addEventListener('click', remItem);
    l.appendChild(a);
};


var ButtonCallback = function ButtonCallback(e){
    console.log(e);
    addItem(document.getElementById("input").value, document.getElementById("dolist"));
};
var b = document.getElementById('b');
b.addEventListener('click',ButtonCallback);

/*
var ClickCallback = function ClickCallback(e){
    console.log(e);
    var id = this.id;
    remItem(id);
};
*/
var remItem = function remItem(e){
    console.log(e);
    this.remove();
};

