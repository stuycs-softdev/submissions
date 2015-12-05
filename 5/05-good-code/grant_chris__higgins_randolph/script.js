var mouseX = 0;
var mouseY = 0;
var bXdir = 2;
var bYdir = 2;

window.addEventListener('mousemove',function(e){
    mouseX=e.pageX;
    mouseY=e.pageY;
    console.log(e.pageX);
    console.log(""+mouseX+","mouseY);
});

var move = function(e){
    var holder=document.querySelector('.move');
    var x = (holder.style.left);
    var y = (holder.style.top);
    x+=20;
    y+=20
    x+=bXdir;
    y+=bYdir;
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
    if(Math.abs(mouseX-x) < 300){
	bXdir=parseInt(20/(x-mouseX));
    };
    if(Math.abs(mouseY-y) < 300){
	bYdir=parseInt(20/(y-mouseY));
    };
    if(bXdir > 1){
	bXdir-=1;
    }else{
	if(bXdir < -1){
	    bXdir+=1;
	}};
    if(bYdir > 1){
	bYdir-=1;
    }else{
	if(bYdir < -1){
	    bYdir+=1;
	}};
    x-=20;
    y-=20;
};
var myevent;
function startit(){
    myevent = setInterval(move,20);
}
startit();