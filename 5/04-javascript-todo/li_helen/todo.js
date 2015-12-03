//javascript document for todo.html



var buttonCallback = function buttonCallback(e){
    added = document.getElementById("form1").elements[0].value;
    addItemToDo(added);
};

var addItemToDo = function additemToDo(s){
    var listt = document.getElementById("todolist");
    var newElement = document.createElement("li");
    newElement.innerHTML=s;
    listt.appendChild(newElement);
    eventss();
};

var addItemDone = function additemDone(s){
    var listt = document.getElementById("donelist");
    var newElement = document.createElement("li");
    newElement.innerHTML=s;
    listt.appendChild(newElement);
    eventss();
};

var removeItemToDo = function removeItemToDo(n){
    var items1 = document.getElementById("todolist").children;
    items1[n].remove()
};

var removeItemDone = function removeItemDone(n){
    var items2 = document.getElementById("donelist").children;
    items2[n].remove()
};

var button = document.getElementById('b')
button.addEventListener('click',buttonCallback);

var eventss = function events(){
    var todoItems = document.getElementById("todolist").children;
    //console.log("todoItemsLength="+todoItems.length);
    for (var i=0;i<todoItems.length;i++){
	todoItems[i].addEventListener('click',function(e){
	    console.log(todoItems[i]);
	    console.log(i);
	    addItemDone(todoItems[i].innerHTML);
	    removeItemToDo(i);
	    todoItems = document.getElementById("todolist").children;
	    i--;
	});

    };

    var doneItems = document.getElementById("donelist").children;
    for (var q=0;q<doneItems.length;q++){
	doneItems[q].addEventListener('click',function(e){
	    console.log("legth"+doneItems.length);
	    console.log("done"+q);
	    removeItemDone(q);
	    doneItems = document.getElementById("donelist").children;	
	    q--;
	});

    };

};

