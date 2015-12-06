
var i = 0;
var spin = function spin(){
    var lottery = document.getElementById("lottery");
    var items = lottery.children;
    items[i].style.color = 'red';
    
    //Making the previous line black again
    if(i == 0){
	items[items.length - 1].style.color = 'black';
    };
    else{
	items[i - 1].style.color = 'black';
    };
    
    //Incrementing or returning to 0
    if(i == items.length - 1){
	i = 0;
    };
    else{
	i++;
    };
};

var myInterval;

var start = document.getElementById("start");
start.addEventListener("click", function(){
    myInterval = setInterval(spin, 500);
});

var stop = document.getElementById("stop");
stop.addEventListener("click", function(){
    clearInterval(myInterval);
};
