//Bug: cannot use "click" before you use "next" or "start" to cycle through whole list first

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

var addMouseEvents = function addMouseEvents(item){
    item.addEventListener('click', function(e){
	for (var j = 0; j<items.length;j++){
	    if (items[j]==item){
		break;
	    }
	}
	items[index%items.length-1].classList.remove("red");
	console.log(index%items.length);
	index = j;
	colorNext();
    });
};

var items = document.getElementsByTagName("li");
for (var j = 0; j<items.length;j++){
    addMouseEvents(items[j]);
}


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

