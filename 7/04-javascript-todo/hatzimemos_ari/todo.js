console.log("Hello! JavaScript loaded");

var add = function add(){
    var newItem = document.getElementById("new").value;
    var list = document.getElementById("todo");
    var x = document.createElement("li");
    x.innerHTML = newItem;
    list.appendChild(x);
};

var AddButtonCallback = function(e){
    console.log(e);
    add();
};
var button = document.getElementById("button");
button.addEventListener('click',AddButtonCallback);

var count = 1;
var addCount = function(){
    var list = document.getElementById("todo");
    var x = document.createElement("li");
    x.innerHTML = "Element: "+count;
    count+=1;
    list.appendChild(x);
}; 
xo
var myInterval;
var Start = function(){
    myInterval = setInterval(addCount,500);
};
var start = document.getElementById("start");
start.addEventListener('click',Start);

var Stop = function(){
    clearInterval(myInterval);
}
var stop = document.getElementById("stop");
stop.addEventListener('click',Stop);

def color = function(){
    
};
