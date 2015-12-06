console.log("JS loaded");


var addItem = function addItem(s, list) {
    var n = document.createElement("li");
    n.innerHTML = s;
    list.appendChild(n);
};


var itemCallback = function(e){
    var todo = document.getElementById("theList");
    var done = document.getElementById("Done");
    if (done.contains(this)){
	done.removeChild(this);
    }
    else{
	todo.removeChild(this);
	done.appendChild(this);
    }
};

var buttonCallback = function(e){
    var l = document.getElementById("theList");
    var text = document.getElementById("todo");
    var input = text.value;
    if (input != ""){
	addItem(input, l);
	l.children[l.children.length - 1].addEventListener("click", itemCallback);
    }
    text.value = "";
};

var button = document.getElementById("add");
button.addEventListener("click", buttonCallback);

/** Highlighting **/
var count = -1;
var highlight = function highlight() {
    var l = document.getElementById("theList").children;
    var c = l.length-1;
    
    if (count == c) {
	count = 0;
    } else {
	count = count + 1;
    }
    if (count != 0) {
	l[count-1].classList.remove("red");
    } else {
	l[c].classList.remove("red");
    }
    l[count].classList.add("red");
  
};

var next = document.getElementById("next");
next.addEventListener('click', highlight);

var myInterval;
var start = document.getElementById("start");
var stop = document.getElementById("stop");

start.addEventListener('click', function(){
    myInterval = setInterval(highlight, 500);
});

stop.addEventListener('click', function(){
    clearInterval(myInterval);
});
