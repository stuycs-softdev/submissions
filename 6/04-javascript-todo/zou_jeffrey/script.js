/*
This functions creates a new list item and appends it to the list
*/
var addTodo = function addTodo(words) {
  var list = document.getElementById("todo");
  var newItem = document.createElement("li");
  newItem.innerHTML = words;
  list.appendChild(newItem);
};

var appendText() = function appendText(id,words) {
  if (id === "todo") {
    addTodo(words);
  }
};

document.getElementById("li").addEventListener("click", function(event){
  event.preventDefault();
  var words = 
  appendText(this.,words);
  deleteText(this.index);
});
