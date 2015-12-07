
index = 0;

var colorNext = function color(){
    var items = document.getElementsByTagName("li");
    i = index%items.length;
    items[i].classList.add("red");
    if(i!=0 && items[i-1].classList.contains("red")){
	items[i-1].classList.remove("red");
    }
    if(items[0].classList.contains("red") && (items[items.length-1].classList.contains("red"))){
	items[items.length-1].classList.remove("red");
    }
    index++;
};

var myInterval;

var start = document.getElementById('start');
start.addEventListener('click', function(e){
    myInterval = setInterval(colorNext, 1000);
});

var stop = document.getElementById('stop');
stop.addEventListener('click', function(e){
    clearInterval(myInterval);
});

var next = document.getElementById('next');
next.addEventListener('click', function(e){
    colorNext();
});


