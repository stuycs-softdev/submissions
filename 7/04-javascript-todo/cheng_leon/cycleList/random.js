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
