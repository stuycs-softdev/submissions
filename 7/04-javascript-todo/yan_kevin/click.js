var addToDo = function addToDo(s){
    var t = document.getElementById("to-do");
    var td = document.createElement("td");
    td.innerHTML = s;
    var tr = document.createElement("tr");
    tr.appendChild(td);
    t.appendChild(tr);
};

var removeToDo = function removeToDo(n){
    var tditems = document.getElementByTagName("td");
    tditems[n].remove();
    return tditems[n].innerHTML;
};

//Making the add button work
var bCallback = function bCallback(e){
    addToDo("HUE");
};
var b = document.getElementById("add");
b.addEventListener("click", bCallback);

//Making clicking on to-do items work
var tdCallback = function tdCallback(e){
    removeToDo("HUE");
};
var todo = document.getElementById('to-do');
var items = todo.children;
for (var i = 0 ; i < items.length ; i++){
    items[i].addEventListener('click', function(e){
	removeToDo(i);
    });
};
