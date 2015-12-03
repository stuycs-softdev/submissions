console.log("This message brings good tidings.");

var add = function add(t){
    var thing = document.getElementById("todo").value
    var list = document.getElementById("thingstodo");
    var toAdd = document.createElement("li");
    toAdd.innerHTML = thing;
    list.appendChild(toAdd);
};

var ButtonCallBack = function ButtonCallBack(){
    add();
};

var button = document.getElementById("add");
button.addEventListener('click', ButtonCallBack);

