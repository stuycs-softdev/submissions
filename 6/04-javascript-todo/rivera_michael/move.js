console.log("Initiate");

var MouseX;
var MouseY;

window.addEventListener('mousemove',function(e){console.log("moved"); MouseX = e.pageX; MouseY = e.pageY;console.log(MouseX);});

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
    if(MouseX < x){
	l = x - MouseX;
	x = x - 1;
	img.src = "pacl.png";
    }else{
	l = MouseX - x;
	x = x + 1;
	img.src = "pacr.png";
    }
    if(MouseY < y){
	if(l < y - MouseY){
	    img.src = "pacu.png";
	}
	y = y - 1;
    }else{
	if(l < MouseY - y){
	    img.src = "pacd.png";
	}
	y = y + 1;
    }
    cl.style.left = x + "px";
    cl.style.top = y + "px";
};

var running = 0;
var myevent;
var ButtonCallback = function ButtonCallback(e){
    if(running < 1){
	console.log("1");
	running = 1;
	myevent = setInterval(move,10);
    }else{
	console.log("0");
	running = 0;
	clearInterval(myevent);
    }
};
var s = document.getElementById("s");
s.addEventListener("click",ButtonCallback);
