console.log("javascript loaded");

var additem = function additem(s,listname){
    var items = document.getElementsByTagName("li");
    var l = document.getElementById(listname);
    var n = document.createElement("li");
    n.innerHTML=s;
    if( items.length==0){
	n.classList.add("red");
    }
    l.appendChild(n);
};

var removeitem = function(n){
    var items = document.getElementsByTagName("li");
    var donestuff = items[n].innerHTML;
    additem(donestuff,"done")
    items[n].remove();
};

var highlight = function highlight(){
    var items = document.getElementsByTagName("li");
    for( var i = 0; i<items.length; i++){
	if( items[i].classList.contains("red")){
	    items[i].classList.remove("red");
	    if( i > items.length ){
		items[0].classList.add("red");
	    }else{
		items[i+1].classList.add("red");
	    }
	    break;
	}
    }
};
	  

var buttonCallback = function buttonCallback(e){
    var raw = document.getElementById("stuff")
    var text = raw.value;
    additem(text,"todo")
};

var b2Callback = function buttonCallback(e){
    removeitem(0);
};

var myInterval = setInterval(highlight,2000);

var button = document.getElementById('b');
b.addEventListener('click',buttonCallback);

var b2 = document.getElementById('b2');
b2.addEventListener('click',b2Callback);

var b3 = document.getElementById('b3');
b3.addEventListener('click',highlight);

var b4 = document.getElementById('b4');
b4.addEventListener('click',function(e){
    clearInterval(myInterval);})
