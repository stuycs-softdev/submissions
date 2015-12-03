var buttonCallback = function buttonCallback(e) {
    var todo = document.getElementById("todolist");
    var input = document.getElementById("input").value;
    if (input != ""){
      add(input,todo);
      //todo.children[list.children.length -1].addEventListener("click",inputCallback)
    }
}

var add = function add(item, list) {
  var new = document.createElement("li");
  new.innerHTML = item;
  list.appendChild(new);
}
/*
var inputCallback = function itemCallback(e) {
  var todo = document.getElementById("todolist");
  var done = document.getElementById("donelist");
  if (done.)
}
*/
var button = document.getElementById("go");
button.addEventListener("click", buttonCallback);
