var myInterval;

count = 0
var doStuff = function doStuff(){
    console.log(count);
    count++;
};

var start = document.getElementById('start');
start.addEventListener('click', function(e){
    myInterval = setInterval(doStuff, 500);
});
var stop = document.getElementById('stop');
stop.addEventListener('click', function(e){
    clearInterval(myInterval);
});

var temp = function temp(){
    var items = document.getElementsByTagName("li");
    
    for (var i = 0; i<items.length; i++){
	items[i].classList.add("red");
    }
};

