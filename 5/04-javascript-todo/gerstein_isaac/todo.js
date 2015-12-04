var add = function add(item, list){
    var tag = document.createElement("li");
    tag.innerHTML = item;
    list.appendChild(tag);
};

var highlight = -1;

var itemCallback = function itemCallback(e){
    var todo = document.getElementById("todo");
    var done = document.getElementById("done");
    if (done.contains(this)){
	done.removeChild(this);
    }else{
	this.style.color = "black";
	var index = -1;
	for (var i = 0; i < todo.children.length; i++){
	    if (todo.children[i] == this){
		index = i;
	    }
	}
	if (index == highlight){
	    highlight = -1;
	}else if (index < highlight){
	    highlight--;
	}
	todo.removeChild(this);
	done.appendChild(this);
    }
};

var addButton = document.getElementById("add");
addButton.addEventListener("click", function(e){
    var list = document.getElementById("todo");
    var textBox = document.getElementById("item");
    var input = textBox.value;
    if (input != ""){
	add(input, list);
	list.children[list.children.length - 1].addEventListener("click", itemCallback);
    }
    textBox.value = "";
});

var highlightEvent = function highlightEvent(e){
    var todo = document.querySelector("#todo");
    if (todo.children.length > 0){
	if (highlight == -1){
	    highlight = 0;
	}else{
	    todo.children[highlight].style.color = "black";
	    highlight++;
	    if (highlight == todo.children.length){
		highlight = 0;
	    }
	}
	todo.children[highlight].style.color = "red";
    }
};

var highlightButton = document.querySelector("#highlight");
highlightButton.addEventListener("click", highlightEvent);

var running = false;

var startButton = document.querySelector("#start");
startButton.addEventListener("click", function(e){
    if (!running){
	highlightInterval = setInterval(highlightEvent, 1000);
	running = true;
    }
});

var stopButton = document.querySelector("#stop");
stopButton.addEventListener("click", function(e){
    clearInterval(highlightInterval);
    running = false;
});
