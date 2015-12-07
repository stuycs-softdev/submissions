console.log("Initiate");

var MouseX;
var MouseY;

window.addEventListener('mousemove',function(e){MouseX = e.pageX; MouseY = e.pageY;});

var move = function move(e){
    var img = document.getElementById("pac");
    var cl = document.querySelector(".move");
    var x = (cl.style.left);
    var y = (cl.style.top);
    x = x.substring(0, x.length - 2);
    x = parseInt(x);
    y = y.substring(0, y.length - 2);
    y = parseInt(y);
    if(isNaN(x)){
	x = 200;
    }
    if(isNaN(y)){
	y = 200;
    }
    var l;
    if(mouseX < x){
	l = x - mouseX;
	x = x - 3;
	img.src = "pacl.png";
    }else{
	l = mouseX - x;
	x = x + 3;
	img.src = "pacr.png";
    }
    if(mouseY < y){
	if(l < y - mouseY){
	    img.src = "pacd.png";
	}
	y = y - 3;
    }else{
	if(l < mouseY - y){
	    img.src = "pacu.png";
	}
	y = y + 3;
    }
    moveelt.style.left = x + "px";
    moveelt.style.top = y + "px";
};

var s = document.getElementById("s");
s.addEventListener("click",star);
var running = 0;
var myevent;
var star = function star(e){
    if(running == 0){
	running = 1;
	myevent = setInterval(move,100);
    }else{
	running = 0;
	window.clearTimeout(myevent);
    }
};
