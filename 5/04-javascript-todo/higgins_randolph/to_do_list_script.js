console.log("it works to here");
var add_to_toDos = function add_to_toDos(s){
    var l = document.getElementById("toDos");
    var n = document.createElement("li");
    n.setAttribute("onClick", n.classList.add("green"));
    n.innerHTML=s;
    l.appendChild(s);
   // var butt = document.createElement("button")
    
    l.appendChild(n);
};

var add_to_dones = function add_to_dones(s){
    var l = document.getElementById("dones");
    l.appendChild(s);
};
var move = function move(x){
    var k = docuemnt.getElementByTagName("li");
    for(var i = 0; i < items.length; i++){
	if(x == k[i].innerHTML){
	    add_to_dones(k[i]);
	    k[i].parentNode.removeChild(k[i]);
	    return;
	};
    };
};