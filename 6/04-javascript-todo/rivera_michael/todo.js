console.log("Initiate List");

c = 1;

var button = document.getElementById('button');
button.addEventListener('click',ButtonCallback);

var ButtonCallback = function(e){
    var add = document.getElementById("input").value;
    addItem(add);
};

var addItem = function addItem(e){
    var l = document.getElementById("dolist");
    var a = document.createElement("li");
    a.id = c++;
    a.innerHTML = e;
    a.addEventListener('click',remItem);
    l.appendChild(a);
};

var remItem = function remItem(e){
    this.remove();
};
