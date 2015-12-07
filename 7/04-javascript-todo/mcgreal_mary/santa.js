
var thluffy = document.querySelector("#thluffy");

console.log(thluffy);

window.addEventListener('mousemove',function(e){
		if (e.pageX > 550){
				thluffy.src = "thluffy-left.png";
		} else {
				thluffy.src = "thluffy-right.png";
		}
});

var count = 1;
var addItem = function addItem(){
		var l = document.getElementById("thelist");
		var n = document.createElement("li");
		n.innerHTML="Item: "+count;
		count = count + 1;
		l.appendChild(n);
};


var doStuff = function doStuff(){
		addItem();
		// setTimeout(doStuff,5000);
};

var myInterval;

var start = document.getElementById("start");
var stop = document.getElementById("stop");
start.addEventListener('click',function(){
		myInterval = setInterval(doStuff,1000);
});
stop.addEventListener('click',function(){
		clearInterval(myInterval);
});






