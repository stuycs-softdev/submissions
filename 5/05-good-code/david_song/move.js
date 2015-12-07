var mouseX;
var mouseY;

window.addEventListener('mousemove',function(e){
    mouseX=e.pageX;
    mouseY=e.pageY;
});

var movePichu = function movePichu(e) {
    var pichu = document.getElementById("pichu");
    var xPichu = parseInt(pichu.style.left);
    var yPichu = parseInt(pichu.style.top);
    if (mouseX > xPichu) {
	xPichu = xPichu + 3;
    }
    else {
	xPichu = xPichu - 3;
    }
    if (mouseY > yPichu) {
	yPichu = yPichu + 3;
    }
    else {
	yPichu = yPichu - 3;
    }
    pichu.style.left = xPichu + "px";
    pichu.style.top = yPichu + "px";
}

var myevent;
function startit() {
    console.log("it started");
    myevent = setInterval(movePichu,100);
}
function stopit() {
    window.clearTimeout(myevent);
}
document.getElementById("start").addEventListener('click',startit);
document.getElementById("stop").addEventListener('click',stopit);
