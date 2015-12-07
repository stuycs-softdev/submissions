
index = 0;

var colorNext = function color(){
    var pics = document.getElementsByTagName("img");
    i = index%pics.length;
    pics[i].height = "200";
    if(i!=0){
	pics[i-1].height = "100";
    }
    else {
	pics[pics.length-1].height = "100";
    }
    index++;
};

var addMouseEvents = function addMouseEvents(item){
    item.addEventListener('click', function(e){
	for (var j = 0; j<pics.length;j++){
	    if (pics[j]==pics){
		break;
	    }
	}
	pics[index%pics.length-1].height = 100;
	console.log(pics%items.length);
	index = j;
	colorNext();
    });
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

