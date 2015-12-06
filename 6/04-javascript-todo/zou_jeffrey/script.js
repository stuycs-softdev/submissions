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
var index = 0;
var highlightTodo = function highlightTodo() {
  var list = document.querySelector("#todo").children;
  //when it loops back to the beginning, set the last item back to red
  if (index == 0) {
    list[list.length - 1].setAttribute("style", "color:red");
  }
  //loops throught list turning previous list items red
  if (index > 0) {
    list[index - 1].setAttribute("style", "color:red");
  }
  list[index].setAttribute("class", "highlight");
  //prevents index from going out of range
  if (index < list.length - 1) {
    index += 1;
  }
  else {
    index = 0;
  }
};
/*
var repeat = function repeat() {
  highlightTodo();
};
*/
var newInterval;
var startButton = document.getElementById("start");
startButton.addEventListener("click", function(event) {
  newInterval = setInterval(highlightTodo, 3000);
});

var stopButton = document.getElementById("stop");
stopButton.addEventListener("click", function(event) {
  clearInterval(newInterval);
});
