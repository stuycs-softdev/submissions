var count = 0;

var highlight = function highlight(){
    console.log(count);
    var l = document.querySelector("#cyclelist");
    var c = l.children;
    if (count == 0){
	c[c.length - 1].setAttribute("style", "color:white");
    }
    if (count > 0){
	c[count - 1].setAttribute("style", "color:white");
    }
    c[count].setAttribute("style", "color:black");
    if (count + 1 < c.length)
	count = count + 1;
    else
	count = 0;
};

var ButtonNext = function ButtonNext(){
    highlight();
};

var next = document.querySelector("#next");
next.addEventListener('click',ButtonNext);

var start = document.querySelector("#start");
var stop = document.querySelector("#stop");

var cycleInt;
start.addEventListener("click",function(){
	cycleInt = setInterval(highlight,500);
    });

stop.addEventListener("click",function(){
	clearInterval(cycleInt);
    });

var getCycleEl = function getCycleEl(){
    var a = document.getElementById("cycleForm").elements.namedItem("addcycle").value;
    //console.log(a);                                                                                                                                                                
    return a;
};

var addCycleEl = function addCycleEl(){
    var a = getCycleEl();
    var l = document.getElementById("cyclelist");
    var d = document.createElement("li");
    d.innerHTML = a;
    l.appendChild(d);
};

var FormCallBack = function FormCallBack(e){
    console.log("does this work?");
    e.preventDefault();
    addCycleEl();
};

var f = document.getElementById("cycleForm");
f.addEventListener('submit',FormCallBack);
