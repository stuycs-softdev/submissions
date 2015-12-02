var buttonCallback = function buttonCallback(e){
    console.log(e);
    console.log(this);
    var c = document.getElementById("content");
    var txt = c.value;
    console.log(txt);
    additem(txt);
};

var button = document.getElementById('submit');
submit.addEventListener('click',buttonCallback);

var additem = function additem(s){
    var l = document.getElementById("thelist");
    var n = document.createElement("li");
    n.innerHTML=s;
    l.appendChild(n);
};