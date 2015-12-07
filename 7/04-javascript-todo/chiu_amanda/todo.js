var buttonCallback = function buttonCallback(e) {
    var todo = document.getElementById("todolist");
    var input = document.getElementById("whattodo").value;
    if (input != ""){
      init(input,todo);
    }
}

var init = function (item,list) {
  var stuff = document.createElement("li");
  stuff.innerHTML = item;
  stuff.addEventListener("click",inputCallback);
  list.appendChild(stuff);
}

var inputCallback = function itemCallback(e) {
    var todo = document.getElementById("todolist");
    var done = document.getElementById("donelist");
  if (this.parentNode.getAttribute('id') == "todolist") {
    done.appendChild(this);
    try{
      todo.removeChild(this);
    }catch(err){}
  }
  else if (this.parentNode.getAttribute('id') == "donelist") {
    try{
      done.removeChild(this);
    }catch(err){}
  }
}

var button = document.getElementById("go");
button.addEventListener("click", buttonCallback);
