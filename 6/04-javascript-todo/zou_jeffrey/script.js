/*******
List Methods
******/

/*Main helpers*/
var addTodo = function addTodo(task) {
  var list = document.getElementById("todo");
  var newItem = document.createElement("li");
  newItem.innerHTML = task;
  list.appendChild(newItem);
  listEventer("todo", newItem, list.children.length-1);
};

var addDone = function addDone(task) {
  var list = document.getElementById("done");
  var newItem = document.createElement("li");
  newItem.innerHTML = task;
  list.appendChild(newItem);
  listEventer("done", newItem, list.children.length-1);
};

var deleteText = function deleteText(item) {
  item.parentNode.removeChild(item);
}

var buttonCallback = function(event) {
  var task = document.getElementById("addThis").value;
  if (task.length !== 0) {
    addTodo(task);
  }
};

var button = document.getElementById("submitButton");
button.addEventListener("click", buttonCallback);

/*Colorful scripts + swapping tasks*/
var listEventer = function listEventer(parentId, item, index) {
  item.addEventListener("mouseover", function(event) {
    if (parentId === "todo") {
      this.classList.remove("red");
      this.classList.add("green");
      this.style.textDecoration = "line-through";
    }
    else if (parentId === "done") {
      this.classList.remove("green");
      this.classList.add("red");
    }
  })

  item.addEventListener("mouseout", function(event){
    if (parentId === "todo") {
      this.classList.remove("green");
      this.classList.add("red");
      this.style.textDecoration = "none";
    }
    else if (parentId === "done") {
      this.classList.remove("red");
      this.classList.add("green");
    }
  })

  item.addEventListener("click", function(event) {
    console.log(this);
    if (parentId === "todo") {
      addDone(this.innerHTML);
    }
    else if (parentId === "done") {
      addTodo(this.innerHTML);
    }
    deleteText(this);
  })
};

/*****
Highlighting todo list
*****/
var highlightTodo = function highlightTodo() {
  var index = 0;
  var list = document.getElementById("todo").children;
  if (index == list.length) {
    index = 0;
  }
  list[index].classList.add("highlight");
  setTimeout(list[index].classList.remove("highlight"), 3000)
}

var repeat = function repeat() {
  highlightTodo();
}

var newInterval;
var startButton = document.getElementById("start");
startButton.addEventListener("click", function(event) {
  newInterval = setInterval(repeat, 3000);
});

var stopButton = document.getElementById("stop");
stopButton.addEventListener("click", function(event) {
  clearInterval(newInterval);
});
