var mouseX;
var mouseY;
var winHeight;
var winWdith;

window.addEventListener("mousemove", function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    winHeight = window.innerHeight;
    winWidth = window.innerWidth;

    document.getElementById("location").innerHTML = mouseX + ", " + mouseY;
    document.getElementById("windowSize").innerHTML = winHeight + " by " + winWidth;
});

var summonX;
var summonY;
var summon = function summon(x,y) {
    summonX;
};

