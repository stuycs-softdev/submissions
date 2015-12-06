var mouseX = 0;
var mouseY = 0;
var bXdir = 3;
var bYdir = .5;
var globX = 200;
var globY = 200;
var xWall = 1000;
var yWall = 500;
window.addEventListener('mousemove',function(e){
    mouseX=e.pageX;
    mouseY=e.pageY;
    xWall = mouseX;
    yWall = mouseY;
});
var move = function(e){
    console.log("---");
    var ball=document.getElementById("ball");
    var holder = document.querySelector('.move');
    if(globX == NaN){
	globX = 200;
    };
    if(globY == NaN){
	globY = 200;
    };
    var x = globX;
    var y = globY;
    console.log(x);
    x+=20;
    y+=20
    if(x<20){
	x=20;
	bXdir=Math.abs(bXdir);
    };
    if(y<20){
	y=20;
	bYdir=Math.abs(bYdir);
    };
    if(x>xWall){
	x=xWall;
	bXdir*=-1;
    };
    if(y>yWall){
	y=yWall;
	bYdir*=-1;
    };
    /*if(x>document.body.clientWidth){
	x=document.body.clientWidth;
	bXdir=Math.abs(bXdir)*-1;
    };
    if(y>document.body.clientHeight){
	x=document.body.clientHeight;
	bXdir=Math.abs(bXdir)*-1;
    };*/
    bYdir+=.05;
    x+=bXdir-20;
    y+=bYdir-20;
    console.log(x);
    console.log(" ");
    holder.style.left=""+parseInt(x)+"px";
    holder.style.top=""+parseInt(y)+"px";
    globX = x;
    globY = y;
};
var move2 = function(e){
    var ball=document.getElementById("ball");
    var holder = document.querySelector('.move');
    if(globX == NaN){
	globX = 200;
    };
    if(globY == NaN){
	globY = 200;
    };
    var x = globX;
    var y = globY;
    console.log(x);
    x+=20;
    y+=20
    if(x<20){
	x=20;
	bXdir=Math.abs(bXdir);
    };
    if(y<20){
	y=20;
	bYdir=Math.abs(bYdir);
    };
    if(x>document.body.clientWidth){
	x=document.body.clientWidth;
	bXdir=Math.abs(bXdir)*-1;
    };
    if(y>document.body.clientHeight){
	x=document.body.clientHeight;
	bXdir=Math.abs(bXdir)*-1;
    };
    if(Math.abs(mouseX-x) < 1024){
	bXdir+=parseInt(32/(mouseX-x));
    };
    if(Math.abs(mouseY-y) < 1024){
	bYdir+=parseInt(32/(mouseY-y));
    };
    if(bXdir > 5){
	bXdir-=1;
    }else{
	if(bXdir < -5){
	    bXdir+=1;
	}};
    if(bYdir > 1){
	bYdir-=1;
    }else{
	if(bYdir < -1){
	    bYdir+=1;
	}};
    x+=bXdir-20;
    y+=bYdir-20;
    console.log(x);
    console.log(" ");
    holder.style.left=""+x+"px";
    holder.style.top=""+y+"px";
    globX = x;
    globY = y;
};
var myevent;
function startit(){
    myevent = setInterval(move,1);
}
startit();