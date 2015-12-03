console.log("This message brings good tidings.");

i = 1

var add = function add(t){
    var thing = document.getElementById("todo").value
    var list = document.getElementById("thingstodo");
    var toAdd = document.createElement("li");
    var a = document.createElement("a");
    a.innerHTML = thing;
    a.id = i;
    a.addEventListener('click', RemoveItem);
    toAdd.appendChild(a);
    toAdd.id = i++;
    list.appendChild(toAdd);
};

var ButtonCallBack = function ButtonCallBack(e){
    add();
};

var button = document.getElementById("add");
button.addEventListener('click', ButtonCallBack);

var RemoveItem = function RemoveItem(e){
    e.preventDefault();
    var deader = document.getElementById(e.target.id);
    deader.parentNode.removeChild(deader);
};
