//add element to to-do list
var c = 0;
function add(s){
  c++;
  var x = document.createElement("li");
  x.id="t"+c;
  var text = document.getElementById("td").value;
  x.innerHTML=text;
  if(text!=""){
    var z = document.createElement("button");
    z.innerHTML="finished";
    z.id="b"+c;
    x.appendChild(z);
    var y= document.getElementById("todo");
    y.appendChild(x);
    x.addEventListener('click',bCallback);
  }
}
document.getElementById("submit").addEventListener('click',add);

//the parameter s is the id from the node being removed
function addItemToDone(s){
    var n = document.getElementById("done");
    n.appendChild(s);
};

function addItemToDo(s){
    var n = document.getElementById("todo");
    n.appendChild(s);
};

//removes item from todo list and adds to done list
function bCallback(e){
    addItemToDone(this);
    this.removeEventListener("click", bCallback);
    this.addEventListener('click',dCallback);
};

function dCallback(e){
  addItemToDo(this);
  this.removeEventListener("click", dCallback);
  this.addEventListener('click',bCallback);
};

var counter = 1;
function unhighlight(e){
  var y = document.getElementById(e);
  y.classList.remove("highlight");
}

function highlight(e){
  if(counter == 1){
    unhighlight("t"+c);
  }else{
    unhighlight("t"+(counter-1));
  }
  var y = document.getElementById("t"+counter);
  y.classList.add("highlight");
  if(counter==c){
    counter = 1;
  }else{
    counter++;
  }
}
var myInterval;
document.getElementById("s1").addEventListener('click', function(e) {
  myInterval = setInterval(highlight,1000);
});

document.getElementById("s2").addEventListener('click', function(e){
  clearInterval(myInterval);
});
