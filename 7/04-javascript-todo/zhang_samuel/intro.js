

console.log("JS Loaded");

//Just testing understanding
var x = 20;

var l = [10,20, "hello", 30]

var d = {
    "k1" : "value 1",
    k2 : 123
    123 : [1,2,3,4,5]
    
};

//Backend functions
var addItem = function addItem(s) {
    var l = document.getElementById("List");
    var n = document.createElement("li");
    n.innerHTML=s;
    l.appendChild(n);   
}

var removeItem = function removeItem(n) {
    var items = document.getElementsByTagName("li");
    items[n].remove();
}

/*
var color = function() {
    var items = document.getElementsByTagName("li");
    for( var i =0; i < items.length; i++)
	items[i].classList.add("red");
    
}

var stripe = function() {
    var items = document.getElementsByTagName("li");
    for( var i = 0; i < items.length; i++) {
	if ( i%2==0)
	    items[i].classList.add("red")
	else
	    items[i].classList.add("green");
    }
}
*/


//Adds Item when "b" Add button is clicked
var buttonCallback = function(e){
    addItem("HELLO");
};

var b = document.getElementById('b');
b.addEventListener('click',buttonCallback);

//Prevents "Remove" b2 button from going to Stuy website
var b2Callback = function(e){
		e.preventDefault();
		removeItem(0);
};
document.getElementById('b2').addEventListener('click',b2Callback);

/*
var thelist = document.getElementById("thelist");
var items = thelist.children;

var redCallback = function(e){
		this.classList.toggle('red');		
};

var addMouseEvents = function(item){
		item.addEventListener('mouseover',function(e){
				this.classList.remove('green');
				this.classList.add('blue');
		});
		item.addEventListener('mouseout',function(e){
				this.classList.remove('blue');
				this.classList.add('green');
		});
};

for (var i=0; i<items.length; i++){
		// items[i].addEventListener('click',redCallback);
		addMouseEvents(items[i]);
};
*/
