//score
var counter = -1;

function printScore(){
    var s = document.getElementById("score");
    s.innerHTML="Score: " + counter;
}

//get random integer for canvas
function getRandom(x){
    return Math.floor((Math.random()*(x-60))+1);
}

//draws a circle
//Parameters: x coordinate, y coordinate, radius,
function drawCircle(x,y,r){
    var c = document.getElementById("canvas");
    c.width = 2*r;
    c.height = 2*r;
    c.style.left = String(x)+"px";
    c.style.top = String(y)+"px";
    c.style.position = "absolute";
    var ctx = c.getContext("2d");
   // ctx.clearRect(0, 0, c.width, c.height);
    ctx.beginPath();
    ctx.arc(r, r, r, 0, 2 * Math.PI);
    ctx.stroke();

}

//clears the circle
function clearCircle(){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
}

function clickCircle(){
    var rr = getRandom(w);
    var rrr = getRandom(h);
    drawCircle(rr,rrr,30);
   // console.log("(" + rr+','+rrr+')');
    counter=counter+1;
    printScore();
}

var w = document.documentElement.clientWidth;
var h = document.documentElement.clientHeight;
var xCenter = Math.floor(w/2);
var yCenter = Math.floor(h/2);
var rx = getRandom(w);
var ry = getRandom(h);
var s = document.getElementById("score");
s.innerHTML="Click the circle to begin";
drawCircle(xCenter,yCenter,30);

var interval;
interval = setInterval(drawCircle,1000,getRandom(w),getRandom(h),30);

//document.getElementById("canvas").addEventListener('click',clickCircle);
