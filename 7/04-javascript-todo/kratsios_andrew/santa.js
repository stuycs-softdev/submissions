var mouseX;
var mouseY;

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
   
   if (isNaN(x)) x=200;
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

  var deltaYS = mouseY-y;
  var deltaXS = mouseX-x;
  var degs=Math.atan2(deltaYS,deltaXS) *180 / 3.14159;
  santa.style.webkitTransform = "rotate("+degs+"deg)";

}

function moveR(e) {
  var rudolf=document.getElementById("rudolf.jpg");
   var moveelt=document.querySelector('.move2');
   var x = (moveelt.style.left);
   var y = (moveelt.style.top);
   x=x.substring(0,x.length-2);
   x=parseInt(x);
   y=y.substring(0,y.length-2);
   y=parseInt(y);
   
   if (isNaN(x)) x=300;
   if (isNaN(y)) y=200;

   x = mouseX + 2;
   y = mouseY + 2;
   moveelt.style.left=x+"px";
   moveelt.style.top=y+"px";

  var deltaYR = mouseY-y;
  var deltaXR = mouseX-x;
  var degs=Math.atan2(deltaYR,deltaXR) *180 / 3.14159;
  rudolf.style.webkitTransform = "rotate("+degs+"deg)";

}


var myevent;
function startit() {
 myevent = setInterval(moveS,40);
 myeventR = setInterval(moveR,40);
}

function stopit() {
	window.clearTimeout(myevent);
  window.clearTimeout(myeventR);
}

 document.getElementById("start").addEventListener('click',startit);
 document.getElementById("stop").addEventListener('click',stopit);




