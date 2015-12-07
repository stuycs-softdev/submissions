var mouseX;
var mouseY;

window.addEventListener('mousemove',function(e){
    mouseX=e.pageX;
    mouseY=e.pageY;
}
		       );

var moveThePotato = function moveThePotato(e){
    var potato = document.getElementById("potato");
    var potatoXCor = parseInt(potato.style.left);
    var potatoYCor = parseInt(potato.style.top);
    
    if (potatoXCor < mouseX) {
	potatoXCor = potatoXCor+5;
    }
    else {
	potatoXCor = potatoXCor+5;
    }
    
    if (potatoYCor < mouseY) {
	potatoYCor = potatoYCor+5;
    }
    else {
	potatoXCor = potatoYCor-5;
    }
    potato.style.left = potatoXCor + "px";
    potato.style.top = potatoXCor + "px";
};

var otatop;
function start(){
    otatop = setInterval(moveThePotato, 50);
}
function end(){
    window.clearTimeout(otatop);
}
document.getElementById("start").addEventListener("click",start);
document.getElementById("end").addEventListener("click",end);
