var start = document.getElementById("start");
var save = document.getElementById("save");
var sink = function sink(E){
    var ij = document.getElementById("#ij");
    var moveIt = document.querySelector('.move')
    var y = (moveIt.style.top);
    y=y.substring(0,y.length-2);
    y=parseInt(y);
    if (isNaN(y)) y=200;
    y = y + 10;
    moveIt.style.top = y + "px";
    
}

var struggle = function struggle(E){
    var ij = document.getElementById("#ij");
    var moveIt.document.querySelector('.move');
    var y = (moveIt.style.top);
    y=y.substring(0,y.length-2);
    y=parseInt(y);
    if (isNaN(y)) y=200;
    y = y - 20;
    moveIt.style.top = y + "px";
}

var myInterval;

start.addEventListener('click',function(){
    myInterval = setInterval(sink, 20);
});

save.addEventListener('click',function(){
    struggle(
}
