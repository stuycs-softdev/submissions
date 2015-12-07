var mousePos = {
    x:0,
    y:0
}
var dotPos = {
    x:0,
    y:0
}

var dot = document.getElementById("dot");
dot.style.position = "absolute";
/*dot.style.left = "400px";
dot.style.top = "400px";
*/
handleMouseMove = function handleMouseMove(e){
    //console.log("mouse moved");
    mousePos = {
	x: e.pageX,
	y: e.pageY
    }
    //console.log(mousePos);
}

moveDot = function moveDot(){
    //console.log(mousePos);
    var x = dotPos.x;
    var dif = mousePos.x - dotPos.x;
    if(dif<30){
	x+=7;
    }
    x += dif/2;
    x -= 13;
    console.log(x);

    var y = dotPos.y;
    var dify = mousePos.y - dotPos.y;
    if(dify<30){
	y+=7;
    }
    y += dify/2;
    y -= 13;
    console.log(y);
    
    dotPos.x = x;
    dotPos.y = y;
    dot.style.left = ""+x+"px";
    dot.style.top = ""+y+"px";
    //console.log(dot.style.left);
}


document.onmousemove = handleMouseMove;
setInterval(moveDot, 30);
