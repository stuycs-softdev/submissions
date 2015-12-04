
var add = function(s){
    var l = document.getElementById("toDos");
    var n = document.createElement("li");
    n.addEventListener("click", function(e){
	add2(s);
	remove(s, "toDos");
	});
    n.innerHTML=s;
    l.appendChild(n);
};
var add2 = function(s){
    var l = document.getElementById("dones");
    var n = document.createElement("li");
    n.addEventListener("click", function(e){
	remove(s, "dones");
    });
    n.innerHTML=s;
    l.appendChild(n);
};
var remove = function(s, list){
    var items = document.getElementById(list);
    add("Check");
    for(var n = 0; n < items.length; n++){
	if(items[n].innerHTML == s){
	    items[n].remove();
	    return;
	};
    };
};

var button = document.getElementById('button');
button.addEventListener("click", function(e){
    console.log("it works to here");
    var stuff = document.getElementById("item");
    var text = stuff.value;
    add(text);
});
