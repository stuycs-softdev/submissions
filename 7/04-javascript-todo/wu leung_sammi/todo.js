var buttonCallback = function(e){
    var new_todo = document.getElementById("new").value;
    if (new_todo != "") {
	addToDoItem(new_todo);
    }
};

var button = document.getElementById("add");
button.addEventListener("click",buttonCallback);

var addToDoItem = function addItem(item){
    var lst = document.getElementById("todo");
    var lstItem = document.createElement("li");
    lstItem.innerHTML = item;
    lst.appendChild(lstItem);
    var index = lst.children.length - 1;
    console.log(index);
    addListEventListeners(lstItem, index);
};

var addListEventListeners = function addListEventListeners(item, index) {
    item.addEventListener("mouseover",function(e) {
	this.classList.remove('black');
	this.classList.add('green');
    })
    item.addEventListener("mouseout",function(e) {
	this.classList.remove('green');
	this.classList.add('black');
    })
    console.log(index);
    item.addEventListener("click", function(e) {
	moveItemToDone(index);
    })
}

var moveItemToDone = function moveItemToDone(index) {
    var items = document.getElementsByTagName("li");
    console.log("ITEMS");
    console.log(items[index]);
    var lst = document.getElementById("done");
    var lstItem = document.createElement("li");
    lstItem.innerHTML = items[index].innerHTML;
    items[index].remove();
    lst.appendChild(lstItem);
    
}
