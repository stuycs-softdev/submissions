/*var score = 0;
var c = document.getElementById("canvas");
c.width = dimension[0];
c.height = dimension[1];*/

//score
var counter = -1;
function printScore(){
    var s = document.getElementById("score");
    s.innerHTML="Score: " + counter;
}
//draws a circle
//Parameters: x coordinate, y coordinate, radius,
function drawCircle(r){
    var c = document.getElementById("canvas");
    c.width = 2*r;
    c.height = 2*r;
    var leftStyle = String(Math.floor(document.documentElement.clientWidth/2))+"px";
    console.log(leftStyle);
    c.style.left = leftStyle;
    var topStyle = String(Math.floor(document.documentElement.clientHeight/2))+"px";
    console.log(topStyle);
    c.style.top = topStyle;
c.style.position = "absolute";
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(r, r, r, 0, 2 * Math.PI);
    ctx.stroke();
}

function middleCircle(){
}
printScore();
drawCircle(30);
