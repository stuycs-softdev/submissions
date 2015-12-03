//* TODO Lookup how to get the data out of a text entry

var addItem = function addItem(s, listType){
    var n = document.createElement("li");
    n.innerHTML = s;
    var l = document.getElementById(listType);
    l.appendChild(n);
    console.log(n);
};

//var markDone = function markDone(){};

var addMouseEvents = function(item){
    item.addEventListener('click', function(e){
	this.classList.toggle('red');
	console.log('p');
	console.log(this);
    });
};

var buttonCallback = function(e){
    //Retrieve the text that is currently in textarea
    //Then add the text to the list
    var t = document.getElementById("inputText").value;
    addItem(t, "taskList");
    
    //update the listeners for each list item
    var theTaskList = document.getElementById("taskList");
    var tasks = theTaskList.children;
    addMouseEvents(tasks[tasks.length-1]);
};

var b = document.getElementById("addButton");
b.addEventListener('click',buttonCallback);



// var redCallback = function(e){
//     this.classList.toggle('red');
// };

// for (var i = 0; i<tasks.length;i++){
//     tasks[i].addEventListener('click', redCallback);
// }

