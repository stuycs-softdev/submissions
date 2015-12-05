
var add = function(s){
    var l = document.getElementById("toDos");
    var n = document.createElement("li");
    n.addEventListener("click", function(e){
	add2(s);
	n.parentNode.removeChild(n);
	});
    n.addEventListener("mouseover", function(e){
	n.classList.toggle("red");
    });
    n.addEventListener("mouseout", function(e){
	n.classList.toggle("red");
    });
    n.innerHTML=s;
    l.appendChild(n);
};
var add2 = function(s){
    var l = document.getElementById("dones");
    var n = document.createElement("li");
    n.addEventListener("click", function(e){
	n.parentNode.removeChild(n);
    });
     n.addEventListener("mouseover", function(e){
	n.classList.toggle("red");
     });
    n.addEventListener("mouseout", function(e){
	n.classList.toggle("red");
    });
    n.innerHTML=s;
    l.appendChild(n);
};


var button = document.getElementById('button');
button.addEventListener("click", function(e){
    console.log("it works to here");
    var stuff = document.getElementById("item");
    var text = stuff.value;
    add(text);
});
