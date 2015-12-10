var moveSnake = function moveSnake(e){
    var x = event.clientX;
    var y = event.clientY;
    var snakex = parseInt(document.getElementById("snakedude").style.left);
    var snakey = parseInt(document.getElementById("snakedude").style.top);
    var angle = Math.atan(y-snakey,x-snakex);
    if (x-snakex > 0){
	snakex = snakex+ Math.cos(angle)*5;
    }
    else{
	snakex = snakex-Math.cos(angle)*5;
    }
    snakey = snakey+Math.sin(angle)*5;
    document.getElementById("snakedude").style.left=snakex + "px";
    document.getElementById("snakedude").style.top=snakey+"px";
};
    
document.getElementById("snakedude").addEventListener("mouse",moveSnake);
