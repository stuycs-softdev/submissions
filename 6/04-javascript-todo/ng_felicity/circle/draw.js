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
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.beginPath();
    ctx.arc(r, r, r, 0, 2 * Math.PI);
    ctx.stroke();
    c.addEventListener('click',console.log("clicked"));
}

function clearCircle(){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
}

function clickCircle(){
    drawCircle(getRandom(w),getRandom(h),30);
    counter++;
}

var w = document.documentElement.clientWidth;
var h = document.documentElement.clientHeight;
var xCenter = Math.floor(w/2);
var yCenter = Math.floor(h/2);
clickCircle();

//document.getElementById("canvas").addEventListener('click',clearCircle());

printScore();
