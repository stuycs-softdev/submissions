//javascript document for todo.html

var buttonCallback = function buttonCallback(e){
    added = document.getElementById("form1").elements[0].value;
    addItemToDo(added);
};


var button = document.getElementById('b');
button.addEventListener('click',buttonCallback);

var addItemToDo = function additemToDo(s){
    var listt = document.getElementById("todolist");
    var newElement = document.createElement("li");
    newElement.innerHTML=s;
    listt.appendChild(newElement);
};

var addItemDone = function additemDone(s){
    var listt = document.getElementById("donelist");
    var newElement = document.createElement("li");
    newElement.innerHTML=s;
    listt.appendChild(newElement);
};

var removeItemToDo = function removeItemToDo(n){
    var items1 = document.getElementById("todolist").children;
    items1[n].remove();
};

var removeItemDone = function removeItemDone(n){
    var items2 = document.getElementById("donelist").children;
    items2[n].remove();
};


todoItems = document.getElementById("todolist").children;
console.log(todoItems.length);
doneItems = document.getElementById("donelist").children;

for (var i=0;i<todoItems.length;i++){
    todoItems[i].addEventListener('click',function(e){
	console.log("hello");
	//todoItems[i].onclick=function(){
	//console.log(todoItems[i-1].innerHTML);
	addItemDone(todoItems[i].innerHTML);
	//removeItemToDo(i-1);
	removeItemToDo(i);
	//todoItems = document.getElementById("todolist").children;
	//i=0;
	//});
    });

};

for (var i=0;i<doneItems.length;i++){
    todoItems[i].addEventListener('click',function(e){
    removeItemDone(i);
    });

};

/*
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
*/


