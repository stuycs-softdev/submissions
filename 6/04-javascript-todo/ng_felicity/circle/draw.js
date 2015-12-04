/*var score = 0;
var c = document.getElementById("canvas");
c.width = dimension[0];
c.height = dimension[1];*/

//draws a circle
//Parameters: x coordinate, y coordinate, radius,
function drawCircle(x,y,r){
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
}
