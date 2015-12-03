var addTodo = function addTodo(words) {
  var list = document.getElementById("todo");
  var newItem = document.createElement("li");
  newItem.innerHTML = words;
  list.appendChild(newItem);
};

var addDone = function addDone(words) {
  var list = document.getElementById("done");
  var newItem = document.createElement("li");
  newItem.innerHTML = words;
  list.appendChild(newItem);
};


var appendText() = function appendText(id,words) {
  if (id === "done") {
    addTodo(words);
  }
  else {
    addDone(words);
  }
};

document.getElementById("li").addEventListener("click", function(event){
  event.preventDefault();
  var words =
  appendText(this.id,words);
  deleteText(this.index);
});
