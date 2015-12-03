

console.log("JS Loaded");

var x = 20;

var l = [10,20, "hello", 30]

var d = {
    "k1" : "value 1",
    k2 : 123
    123 : [1,2,3,4,5]
    
};

var addItem = function addItem(s) {
    var l = document.getElementById("List");
    var n = Document.createElement("li");
    n.innterHTML=s;
    l.appendChild(n);   
}

var removeItem = function removeItem(n) {
    var items = document.getElementsByTagName("li");
    items[n].remove();
}

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

