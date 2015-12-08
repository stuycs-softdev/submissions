var mouseX;
var mouseY;
var deltaYR;
var deltaXR;
var deltaYS;
var deltaXS;

 window.addEventListener('mousemove',function(e){
     mouseX=e.pageX;
     mouseY=e.pageY;
   }); 

function moveS(e) {
  var santa=document.getElementById("santa.jpg");
   var moveelt=document.querySelector('.move');
   var x = (moveelt.style.left);
   var y = (moveelt.style.top);
   x=x.substring(0,x.length-2);
   x=parseInt(x);
   y=y.substring(0,y.length-2);
   y=parseInt(y);
   
   if (isNaN(x)) x=700;
   if (isNaN(y)) y=200;

  if (mouseX<x) {
     x=x-3;
  } else {
     x=x+3;
   }

  if (mouseY<y) {
     y=y-3;
  } else {
     y=y+3;
   }
   moveelt.style.left=x+"px";
   moveelt.style.top=y+"px";

  deltaYS = mouseY-y;
  deltaXS = mouseX-x;
  var degs=Math.atan2(deltaYS,deltaXS) *180 / 3.14159;
  santa.style.webkitTransform = "rotate("+degs+"deg)";

}

function moveR(e) {
  var rudolf=document.getElementById("Rudolf.png");
   var moveelt=document.querySelector('.move2');
   

   x = mouseX + 2;
   y = mouseY + 2;
   moveelt.style.left=x+"px";
   moveelt.style.top=y+"px";

  deltaYR = mouseY + 2;
  deltaXR = mouseX + 2;
  var degs=Math.atan2(deltaYR,deltaXR) *180 / 3.14159;
  rudolf.style.webkitTransform = "rotate("+degs+"deg)";

}

var count = 0;
function touch(e){
  if(deltaXS < deltaXR && deltaYS < deltaYR){
    count ++;
  }
}


var myevent;
var myeventR;
var touchy;
function startit() {
 myevent = setInterval(moveS,40);
 myeventR = setInterval(moveR,40);
 touchy = setInterval(touch,10);

}

function stopit() {
	window.clearTimeout(myevent);
  window.clearTimeout(myeventR);
  window.clearTimeout(touchy);
  //document.write(count);
}

 document.getElementById("start").addEventListener('click',startit);
 document.getElementById("stop").addEventListener('click',stopit);




