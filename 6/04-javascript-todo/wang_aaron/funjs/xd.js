var mouseX;
var mouseY;
var winHeight;
var winWdith;
var ball = document.getElementById("ball");
var ballx;
var bally;

winHeight = window.innerHeight;
winWidth = window.innerWidth;
document.getElementById("windowSize").innerHTML = winHeight + " by " + winWidth;

window.addEventListener("mousemove", function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    
    document.getElementById("location").innerHTML = mouseX + ", " + mouseY;
    winWidth = window.innerWidth;
});

window.addEventListener("resize", function(e) {
    winHeight = window.innerHeight;
    winWidth = window.innerWidth;

    document.getElementById("windowSize").innerHTML = winHeight + " by " + winWidth;
});

ball.style.position = "absolute";
ball.style.left = "500px";
ball.style.top = "200px";
ball.addEventListener("mouseover", function(e) {
    console.log("enter");
    var ballx = Math.floor((Math.random() * winWidth) + 1);
    var bally = Math.floor((Math.random() * winHeight) + 1);

    ball.style.left=ballx + "px"
    ball.style.top=bally + "px"
});
