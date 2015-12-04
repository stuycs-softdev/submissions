console.log("it works to here");
var add = function add(s){
    var l = document.getElementById("toDos");
    var n = document.createElement("li");
    n.addsetEventlistener("mouseclick", function(e){
	remove(s, "toDos");
	add2(s);
	});
    n.innerHTML=s;
    l.appendChild(n);
};
var add2 = function add2(s){
    var l = document.getElementById("dones");
    var n = document.createElement("li");
    n.addsetEventlistener("mouseclick", function(e){
	remove(s, "dones");
    });
    n.innerHTML=s;
    l.appendChild(n);
};
var removeItem = function(s, list){
    var items = document.getElementsById(list);
    for(var n = 0; n < items.length; n++){
	if(items[n].innerHTML == s){
	    items[n].remove();
	    return;
	};
    };
};

var button = document.getElementById("button");
button.addEventListener("click",buttonPress);

var buttonCallBack = function buttonPress(e){
    var stuff = document.getElementById("item")
    var text = stuff.value;
    add(text);
};
