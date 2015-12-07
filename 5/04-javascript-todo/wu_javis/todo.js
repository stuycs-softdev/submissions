var addItemToDo = function addItemToDo(s){
    var toDoList = document.getElementById("todo");
    var newItem = document.createElement("li");
    newItem.innerHTML=s;
    newItem.addEventListener('click',itemCallback)
    toDoList.appendChild(newItem);
};

var addItemDone = function addItemDone(s){
    var doneList = document.getElementById("done");
    var newItem = document.createElement("li");
    newItem.innerHTML=s;
    doneList.appendChild(newItem);
};

var buttonCallback = function buttonCallback(e){
    var toAdd = document.getElementById("addon");
    addItemToDo(toAdd.value);
    toAdd.value=''; 
};

var itemCallback = function itemCallback(e){
    addItemDone(this.innerHTML);
    this.remove();
};

var colorCallback = function colorCallback(e){
    todoItems = document.getElementById("todo").children;
    console.log(todoItems);
    var n = 0
    for (var i=0; i<todoItems.length; i++){
	if (todoItems[i].classList.contains('red')){
	    n = i;
	    todoItems[i].classList.toggle('red');
	    if (n == todoItems.length-1){
		n=-1;
	    }
	    todoItems[n+1].classList.toggle('red');
	    return; //have to make it stop here
	}
    }
    todoItems[0].classList.toggle('red');
};

var mouseX;
var mouseY;

window.addEventListener('mousemove',function(e){
    mouseX=e.pageX;
    mouseY=e.pageY;
});

var moving = function moving(e){
    var stickman = document.getElementById("stickman");
    var move = document.querySelector('.move');
    //var speed = document.getElementById("speed").value;
    var x = (move.style.left);
    var y = (move.style.top);
    x=x.substring(0,x.length-2);
    x=parseInt(x);
    y=y.substring(0,y.length-2);
    y=parseInt(y);

    if (isNaN(x)) x=300;
    if (isNaN(y)) y=400;
    
    if (mouseX<x){
	x=x-10;
	stickman.src = "stickmanL.jpg";
    } else{
	x=x+10;
	stickman.src = "stickmanR.jpg";
    }

    if (mouseY<y){
	y=y-10;
    } else{
	y=y+10;
    }
    move.style.left=x+"px";
    move.style.top=y+"px";
    console.log("mouseX "+mouseX);
    console.log("imageX "+x);
    console.log(" ");
    console.log("mouseY "+mouseY);
    console.log("imageY "+y);
    if (Math.abs(mouseX-x)<=10 && Math.abs(mouseY-y)<=10){
	clearInterval(movingInterval);
	move.style.left="300px";
	move.style.top="400px";
	window.alert("He got you!");
    }

};

var startMan = function startMan(){
    movingInterval = setInterval(moving,100);
};

var startTag = document.getElementById("startTag");
startTag.addEventListener('click',startMan);

var startB = document.getElementById("start");
startB.addEventListener('click',function(e){
     myInterval = setInterval(colorCallback,500);
});

var endB = document.getElementById("end");
endB.addEventListener('click',function(e){
    clearInterval(myInterval);
});

var button = document.getElementById("addButton");
button.addEventListener('click',buttonCallback);

document.getElementById("changeCol").addEventListener('click',colorCallback)
