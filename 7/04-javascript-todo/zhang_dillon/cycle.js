var current = 0;
var display = function display(displacement) {
    console.log("displayed: " + current);
    var lister = document.getElementById("cycler").children;
    var maxer = lister.length;

    lister[current].style.color = "green";
    current = (current + maxer + displacement) % maxer;
    console.log("post: " + current);
    lister[current].style.color = "red";
}

var nexter = function nexter() {
    display(1);
}

var next = document.getElementById("next");
next.addEventListener('click', function(){
    nexter();
});

var prev = document.getElementById("previous");
prev.addEventListener('click', function(){
    display(-1);
});

var myInterval;
var start = document.getElementById("start");
var stop = document.getElementById("stop");

start.addEventListener('click', function(){
    console.log("starting");
    myInterval = setInterval(nexter, 250);
    console.log("waiting");
});

stop.addEventListener('click', function(){
    clearInterval(myInterval);
});

