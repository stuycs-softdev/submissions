var addItem = function addItem(s){
		var l = document.getElementById("todo");
		var n = document.createElement("li");
		n.innerHTML=s;
		n.addEventListener('click',removeItem);
		n.addEventListener('click',addItem2(s));
		l.appendChild(n);
};

var addItem2 = function addItem2(s){
    console.log("HI");
		var l = document.getElementById("done");
		var n = document.createElement("li");
		n.innerHTML=s;
		n.addEventListener('click',removeItem2);
		l.appendChild(n);
};

var removeItem = function removeItem(){
		this.parentNode.removeChild(this);
		//remove(s);
		var l = document.getElementById("done");
		var n = document.createElement("li");
		//n.innerHTML=s;
		l.appendChild(n);

};

var removeItem2 = function removeItem2(){
		this.parentNode.removeChild(this);
};

var buttonCallback = function(e){
		if (document.getElementById('texts').value != ""){
			addItem(document.getElementById('texts').value);
		}
};


var b = document.getElementById("b");
b.addEventListener('click',buttonCallback);
var mouseX;
var mouseY;

 window.addEventListener('mousemove',function(e){
     mouseX=e.pageX;
     mouseY=e.pageY;
   }); 
var count = 0;
function move(e) {
  var zamansky=document.getElementById("zamansky");
   var moveelt=document.querySelector('.move');
   var x = (moveelt.style.left);
   var y = (moveelt.style.top);
   x=x.substring(0,x.length-2);
   x=parseInt(x);
   y=y.substring(0,y.length-2);
   y=parseInt(y);
   
   if (isNaN(x)) x=500;
   if (isNaN(y)) y=200;

  if (mouseX<x) {
     x=x-3-count;
  } else {
     x=x+3+count;
   }

  if (mouseY<y) {
     y=y-3-count;
  } else {
     y=y+3+count;
   }
   count+=.1;
   moveelt.style.left=x+"px";
   moveelt.style.top=y+"px";
   console.log(count); 
   if (count > 40) {
	count+= .6;
	document.body.style.background = "#000000";
   } else if (count > 25){
	count+= .4;
        document.body.style.background = "#FF0000";
   } else if (count > 11){
	count += .2;
	document.body.style.background = "#00FF00";
   } else if (count > 5){
	document.body.style.background = "#0000FF";
   } else {
	document.body.style.background = "#FFFFFF";
   }

   if ( Math.abs(mouseY - y) < 5+count && Math.abs(mouseX - x) < 5+count ){
        alert("You lose");
        count = 0;
        moveelt.style.left=500+"px";
        moveelt.style.top=200+"px";
	stopit();
        //console.log("You lose");
	document.body.style.background = "#FFFFFF";
    }
}

var myevent;
function startit() {
 myevent = setInterval(move,100);
}
function stopit() {
	window.clearTimeout(myevent);
}

 document.getElementById("be").addEventListener('click',startit);
 document.getElementById("s").addEventListener('click',stopit);



for (var i=0; i<todo.length; i++){
		// items[i].addEventListener('click',redCallback);
		addMouseEvents1(todo[i]);
		addEventListener('click',removeItem);
};
