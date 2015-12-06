
var toDoLeftClick = function(err){
  err.preventDefault();
  addItem(this, 'finished');
  removeItem(this, 'todo');
};

var toDoRightClick = function(err){
  err.preventDefault();
  removeItem(this, 'todo');
}

var finishedLeftClick = function(err){
  err.preventDefault();
  removeItem(this, 'finished');
}

var finishedRightClick = function(err){
  err.preventDefault();
  addItem(this, 'todo')
  removeItem(this, 'finished');
}

var MouseEvents = function(item, l){
  if (l == 'todo'){
    item.removeEventListener('click', finishedLeftClick);
    item.removeEventListener('contextmenu', finishedRightClick);
    item.addEventListener('click', toDoLeftClick);
    item.addEventListener('contextmenu', toDoRightClick);
  }else if (l == 'finished'){
    item.removeEventListener('click', toDoLeftClick);
    item.removeEventListener('contextmenu', toDoRightClick);
    item.addEventListener('click', finishedLeftClick);
    item.addEventListener('contextmenu', finishedRightClick);
  }
}

var initItem = function(input){
  var todolist = document.getElementById('todo');
  var newitem = document.createElement('li');
  newitem.innerHTML = input;
  MouseEvents(newitem, 'todo');
  newitem.addEventListener('mouseover', function(err){
    err.preventDefault();
    newitem.classList.add('hover');
  });
  newitem.addEventListener('mouseout', function(err){
    newitem.classList.remove('hover');
  });
  todolist.appendChild(newitem);
};

var addItem = function(item, l){
  list = document.getElementById(l);
  MouseEvents(item, l);
  list.appendChild(item);
}

var removeItem = function(item, l){
  list = document.getElementById(l);
  try{
    list.removeChild(item);
  }catch(err){}
}

document.getElementById('add').addEventListener('click', function(err){
  var input = document.getElementById('input').value;
  if (input == "") document.getElementById("error").innerHTML = "Empty :(";
  else{
    document.getElementById('error').innerHTML = "";
    initItem(input);
  }
});
