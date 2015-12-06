var current = 0;
var next = document.getElementById("next");
var prev = document.getElementById("previous");
var Interval;
var start = document.getElementById("start");
var stop = document.getElementById("stop");

var moveNext = function nexter() {
    display(1);
}

next.addEventListener('click', function(){
    moveNext();
});

prev.addEventListener('click', function(){
    display(-1);
});

start.addEventListener('click', function(){
    Interval = setInterval(moveNext, 250);
});

stop.addEventListener('click', function(){
    clearInterval(Interval);
});

var display = function display(displacement) {
    var list = document.getElementById("goAround").children;
    var maxNum = list.length;

    list[current].className = "black";
    current = (current + maxNum + displacement) % maxNum;
    list[current].className = "red";
}

var moveNext = function moveNext() {
    display(1);
}
