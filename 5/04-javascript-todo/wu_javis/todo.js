var addItemToDo = function addItemToDo(s){
    var toDoList = document.getElementById("todo");
    var newItem = document.createElement("li");
    newItem.innerHTML=s;
    newItem.addEventListener('click',itemCallback)
    toDoList.appendChild(newItem);
};

var addItemDone = function addItemDone(s){
    var doneList = document.getElementById("done");
    var newItem = document.createElement("li");
    newItem.innerHTML=s;
    doneList.appendChild(newItem);
};

var buttonCallback = function buttonCallback(e){
    var toAdd = document.getElementById("addon");
    addItemToDo(toAdd.value);
    toAdd.value=''; 
};

var itemCallback = function itemCallback(e){
    addItemDone(this.innerHTML);
    this.remove();
};
var button = document.getElementById("addButton");
button.addEventListener('click',buttonCallback);

