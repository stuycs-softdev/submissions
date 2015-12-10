//javascript document for todo.html

var count = 0;

var buttonCallback = function buttonCallback(e){
    added = document.getElementById("form1").elements[0].value;
    addItemToDo(added);
    eventss();
};

var addItemToDo = function additemToDo(s){
    var listt = document.getElementById("todolist");
    var newElement = document.createElement("li");
    newElement.innerHTML=s;
    listt.appendChild(newElement);
    count++;
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
    eventss();
    count--;
};

var removeItemDone = function removeItemDone(n){
    var items2 = document.getElementById("donelist").children;
    items2[n].remove()
    eventss();
};

var highlight = document.getElementById('highlight');
highlight.addEventListener('click',)
function highlight(n) {
    var items = document.querySelector("todolist").children;
    items[currItem] = items[currItem] + hello;
}

var button = document.getElementById('b')
button.addEventListener('click',buttonCallback);

var eventss = function events(){
    var todoItems = document.getElementById("todolist").children;
    //console.log("todoItemsLength="+todoItems.length);
    console.log(todoItems);
    for (var i=0;i<todoItems.length;i++){
	//todoItems[i].addEventListener('click',function(e){
	todoItems[i].onclick=function(){
	    //console.log(todoItems[i-1]);
	    //console.log(i-1);
	    addItemDone(todoItems[i-1].innerHTML);
	    removeItemToDo(i-1);
	    todoItems = document.getElementById("todolist").children;
	    i=0;
	//});
	};

    };

    var doneItems = document.getElementById("donelist").children;
    for (var q=0;q<doneItems.length;q++){
	//doneItems[q].addEventListener('click',function(e){
	doneItems[q].onclick=function(){
	    removeItemDone(q-1);
	    doneItems = document.getElementById("donelist").children;
	    i=0;
	//});
	};

    };

};


