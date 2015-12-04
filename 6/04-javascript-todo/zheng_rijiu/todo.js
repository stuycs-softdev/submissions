console.log("This message brings good tidings.");

var Add = function Add(e){
    var thing = document.getElementById("todo").value
    var todoList = document.getElementById("thingstodo");
    var toAdd = document.createElement("li");
    toAdd.id = i++;
    toAdd.innerHTML = thing;
    toAdd.addEventListener('click', Done);
    todoList.appendChild(toAdd);
};

var Done = function Done(e){
    var haveDone = document.getElementById(e.target.id);
    haveDone.parentNode.removeChild(haveDone);
    haveDone.removeEventListener(Done);
    haveDone.addEventListener('click', RemoveItem);
    var doneList = document.getElementById("thingsdone");
    doneList.appendChild(haveDone)
}

var RemoveItem = function RemoveItem(e){
    e.preventDefault();
    var doner = document.getElementById(e.target.id);
    doner.parentNode.removeChild(doner);
};

var Start = function Start(e){
    interval = setInterval(Highlight, 1000);
};

var Highlight = function Highlight(){
    var listy = document.getElementById("thingsdone").children;    
    if(listy.length > 0){
	listy[x].style.color = "#000000";
	if(++x >= listy.length){
	    x = 0;
	}
	listy[x].style.color = "#ff0000";
    }
    console.log(document.getElementById("thingsdone"));
}

var Stop = function Stop(e){
    clearInterval(interval);
    var listy = document.getElementById("thingsdone").children;
    for(a = 0;a < listy.length;a++){
	listy[a].style.color = "#000000";
    }
};

var interval;
i = 1
x = 0

var button1 = document.getElementById("add");
button1.addEventListener('click', Add);

var button2 = document.getElementById("start");
button2.addEventListener('click', Start);

var button3 = document.getElementById("stop");
button3.addEventListener('click', Stop);


