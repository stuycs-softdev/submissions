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

var deleteText = function deleteText(index) {
  var items = document.getElementsByTagName("li");
  items.remove(index);
}

document.getElementById("li").addEventListener("click", function(event){
  event.preventDefault();
  var words = this.innerHTML;
  appendText(this.id,words);
  deleteText(this.index);
});

document.getElementsByClassName("todo").addEventListener("mouseover", function(event){
  this.classList.remove("red");
  this.classList.add("blue");
});

document.getElementsByClassName("done").addEventListener("mouseover", function(event) {
  this.classList.remove("red");
  this.classList.add("blue");
});
