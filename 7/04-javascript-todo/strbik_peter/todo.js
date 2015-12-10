var addItem = function addItem(item, list){
    var nItem = document.createElement("li");
    nItem.innerHTML = item;
    list.appendChild(nItem);
};

var itemCallback = function itemCallback(e){
    var todo = document.getElementById("todo");
    var done = document.getElementById("done");
    if (done.contains(this)){
	done.removeChild(this);
    }
    else{
	todo.removeChild(this);
	done.appendChild(this);
    }
};

var buttonCallback = function buttonCallback(e){
    var ls = document.getElementById("todo");
    var text = document.getElementById("item");
    var input = text.value;
    if (input != ""){
	addItem(input, ls);
	ls.children[ls.children.length - 1].addEventListener("click", itemCallback);
    }
    text.value = "";
};

var button = document.getElementById("button");
button.addEventListener("click", buttonCallback);

var cur = 0;
var change = function change(dis){
    var list = document.getElementById("cycle").children;
    var max = list.length
    list[cur].style.color = "blue";
    cur = (cur + max + dis) % max;
    list[cur].style.color = "red";
}

var next = function next(){
    change(1);
}

var nextButton = document.getElementById("next");
nextButton.addEventListener('click', function(){next();});

var myInterval;
var start = document.getElementById("start");
var stop = document.getElementById("stop");

start.addEventListener('click', function(){
    myInterval = setInterval(next, 500);
});

stop.addEventListener('click', function(){
    clearInterval(myInterval);
});





