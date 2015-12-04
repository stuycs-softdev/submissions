var addContent = function addContent(){
    console.log(this);
    var c = document.getElementById("content");
    var txt = c.value;
    additem(txt);
};

var button = document.getElementById('submit');
submit.addEventListener('click',addContent);

var additem = function additem(s){
    console.log(this);
    var l = document.getElementById("thelist");
    var n = document.createElement("li");
    n.innerHTML=s;
    l.appendChild(n);
};

var thelist = document.getElementById("thelist");
var items = thelist.children;
var donelist = document.getElementById("donelist");
var doneitems = donelist.children;

var listOn = function listOn(n){
    n.addEventListener('click',done);
}

var dlistOn = function dlistOn(n){
    n.addEventListener('click',undone);
}

//done
var done = function done(){
            var n = document.createElement("li");
            n.innerHTML = this.innerHTML;
            donelist.appendChild(n);     
	    dlistOn(n);
	    //                                                               
            this.remove();
};
//un-done
var undone = function undone(){
	    var n = document.createElement("li");
	    n.innerHTML = this.innerHTML;
	    thelist.appendChild(n);
	    listOn(n);
	    //
	    this.remove();
	};

//initialize
for (var i=0;i<items.length;i++){
    listOn(items[i]);
	}
for (var i=0;i<undone.length;i++){
    dlistOn(undone[i]);
	}

//highlight
var hitems = document.getElementById("hlist").children;

var i = 0
var highlight = function highlight(){
    console.log(hitems[i]);
    hitems[i].classList.add("red");
    if (i == 0){
        hitems[hitems.length-1].classList.remove('red');
    }
    else{
        hitems[i-1].classList.remove('red');
    }
}

var doStuff = function doStuff() {
    i = i%hitems.length;
    highlight(i);
    i++;
    console.log("Stuff has been done");
};
var myInterval;

var b2 = document.getElementById("start");
start.addEventListener('click',function(e){
    myInterval =  setInterval(doStuff,2000);
});

var b3 = document.getElementById("s");
s.addEventListener('click',function(e){
        clearInterval(myInterval);
});