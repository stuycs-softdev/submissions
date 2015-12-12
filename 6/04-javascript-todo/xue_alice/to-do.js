console.log("loaded js");

var add_to_do = function(task){
    var l = document.getElementById("todolist");
    var t = document.createElement("li");
    t.innerHTML = task;
    l.appendChild(t);
    items = l.children;
    updateItems(items);
};

var add_to_done = function(task){
    console.log(task);
    var l = document.getElementById("donelist");
    var t = document.createElement("li");
    t.innerHTML = task;
    l.appendChild(t);
};

var remove_to_do_task = function(item){
    var items = document.getElementById('todolist');
    items.removeChild(item);
};

var addTodoButtonCallback = function(e){
    var task = document.getElementById('task').value;
    add_to_do(task);
    console.log('added task');
};

var b = document.getElementById("add_task");
b.addEventListener('click',addTodoButtonCallback);

var addDoneButtonCallback = function(e){
    add_to_done(item.innerHTML);
    remove_to_do_task(item);
    console.log('moved task to done');
    items = document.getElementById('todolist').children;
    updateItems(items);
};

var addMouseEvents = function(i){
    items = document.getElementById('todolist').children;
    item = items[i];
    item.addEventListener('click',addDoneButtonCallback);
    console.log('added events to log');
};

var items = document.getElementById('todolist').children;

var updateItems = function(items){
    for (var i = 0; i < items.length; i++){
	addMouseEvents(i);
    };
};

var changeColor = function(item){
    if (item.style.color.localeCompare('red') == 0){
	item.style.color = 'black';
    } else {
	item.style.color = 'red';
    };    
};


var changeColorButtonCallback = function(e){
    items = document.getElementById('todolist').children;
    changeColor(items[0]);
};


var c = document.getElementById('add_color');
c.addEventListener('click',changeColorButtonCallback);

var i;
var incI = function(e){
    items = document.getElementById('todolist').children;
    if (i < items.length){
	changeColor(items[i]);
	i++;
    } else {
	i = 0;
	changeColor(itmes[i]);
    };
};

var start = document.getElementById('start');
var stop = document.getElementById('stop');
start.addEventListener('click',function(e){
    i = 0;
    myInterval = setInterval(incI,800);
});
stop.addEventListener('click',function(e){
    clearInterval(myInterval);
});
 
updateItems(items);


