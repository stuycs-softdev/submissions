//Bug: cannot use "click" before you use "next" or "start" to cycle through whole list first

index = 0;


var colorNext = function color(){
    //var items = document.getElementsByTagName("li");
    var pics = document.getElementsByTagName("img");
    i = index%pics.length;
    //items[i].classList.add("red");
    pics[i].height = "200";
    if(i!=0){
	//items[i-1].classList.remove("red");
	pics[i-1].height = "100";
    }
    else {
	pics[pics.length-1].height = "100";
    }
    //if(items[0].classList.contains("red") && (items[items.length-1].classList.contains("red"))){
    //items[items.length-1].classList.remove("red");
    //pics[i].height = "200";
    //}
    index++;
    console.log(i);
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

//var items = document.getElementsByTagName("li");
//for (var j = 0; j<items.length;j++){
//    addMouseEvents(items[j]);
//}


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

