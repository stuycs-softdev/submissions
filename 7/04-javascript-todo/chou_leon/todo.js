
var todolist = document.getElementById("todo");
var finished = document.getElementById("finished");

var update = function(){
  todolist = document.getElementById("todo");
  finished = document.getElementById("finished");

  addEvents();
}

var addItem = function(s, l){
  var list = document.getElementById(l);
  var newitem = document.createElement("li");
  newitem.innerHTML = s;
  list.appendChild(newitem);
  update();
};

var removeItem = function(item, l){
  var list = document.getElementById(l);
  list.removeChild(item);
  update();
};

var moveItemToFinished = function(item){
  addItem(item, 'finished');
  removeItem(item, 'todo');
  update();
};

var moveItemToToDo = function(item){
  addItem(item, 'todo');
  removeItem(item, 'finished');
  update();
}

var addbuttoncallback = function(error){
  var input = document.getElementById('input').value;
  if (input != ""){
    addItem(input, 'todo');
    document.getElementById('error').innerHTML = "";
  }else{
    document.getElementById('error').innerHTML = "EMPTY!!";
  }
  document.getElementById('input').value = "";
}

var addMouseEvents = function(item){
  item.addEventListener('mouseover', function(err){
    this.classList.remove("neutral");
    this.classList.add("hover");
  });
  item.addEventListener('mouseout', function(err){
    this.classList.remove("hover");
    this.classList.add("neutral");
  })
}

var addToDoMouseEvents = function(item){
  var list = todolist.children
  item.addEventListener('onclick', function(err){
    console.log("aa");
    moveItemToFinished(item);
  });
  item.addEventListener('contextmenu', function(err){
    err.preventDefault();
    removeItem(item, 'todo');
  });
};

var addEvents = function(){
  document.getElementById('add').addEventListener('click', addbuttoncallback);
  var list = document.getElementsByTagName('li');
  for (var i = 0; i < list.length; i++){
    addMouseEvents(list[i]);
  }
  list = todolist.children
  for (var i = 0; i < list.length; i++){
    addToDoMouseEvents(list[i]);
  }

}

addEvents();
