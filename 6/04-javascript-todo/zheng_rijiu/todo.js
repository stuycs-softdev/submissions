console.log("This message brings good tidings.");

i = 1

var add = function add(t){
    var thing = document.getElementById("todo").value
    var todoList = document.getElementById("thingstodo");
    var toAdd = document.createElement("li");
    toAdd.id = i++;
    toAdd.innerHTML = thing;
    toAdd.addEventListener('click', Done);
    todoList.appendChild(toAdd);
};

var ButtonCallBack = function ButtonCallBack(e){
    add();
};

var button = document.getElementById("add");
button.addEventListener('click', ButtonCallBack);

var Done = function Done(e){
    e.preventDefault();
    var haveDone = document.getElementById(e.target.id);
    haveDone.parentNode.removeChild(havedone);
    haveDone.removeEventListener(Done);
    haveDone.addEventListener('click', RemoveItem);
    var doneList = document.getElementById("thingsdone");
    doneList.appendChild(haveDone)
}

var RemoveItem = function RemoveItem(e){
    e.preventDefault();
    var doner = document.getElementById(e.target.id);
    doner.parentNode.removeChild(doner);
};
