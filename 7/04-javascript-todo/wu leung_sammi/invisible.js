var mouseX, mouseY;
var hidden = document.getElementById("find");
var hiddenX, hiddenY;
var counter = 0;

window.addEventListener('mousemove',function(e){
    mouseX=e.pageX;
    mouseY=e.pageY;
});

function move(e) {
    var mouse =document.getElementById("place");
    var move=document.querySelector('.move');
    var distance = Math.sqrt( ((hiddenX - mouseX) * (hiddenX - mouseX)) + ((hiddenY - mouseY) * (hiddenY - mouseY)));
    counter  = counter + 1;
    
    if (distance <= 30) {
	mouse.src = "closest.gif";
	}
    else if (distance <= 100) {
	mouse.src = "close.png";
    }
    else if (distance <= 300){
	    mouse.src = "closer.png";
    }
    else {
	mouse.src = "far.png";
    }
    
    move.style.left= mouseX + 2 + "px";
    move.style.top= mouseY + 2 + "px";
}


var myevent = 0;
function newGame() {
    clearInterval(myevent);
    myevent = setInterval(move, 100);
    hidden.src = "blank.png";
    hidden.style.height = "20px";
    hidden.style.width = "20px";
    hidden.style.left=Math.floor((Math.random() * 1000) + 50) + "px";
    hidden.style.top =Math.floor((Math.random() * 10) * 50) + "px";
    hiddenX = hidden.style.left
    hiddenX = parseInt(hiddenX.substring(0,hiddenX.length-2));
    hiddenY = hidden.style.top
    hiddenY = parseInt(hiddenY.substring(0,hiddenY.length-2));
}

function win() {
    clearInterval(myevent);
    var mouse =document.getElementById("place");
    mouse.src = "";
    hidden.style.height = "200px";
    hidden.style.width = "200px";
    hidden.src = "there.gif";
    console.log("you won");
}

document.getElementById("new").addEventListener('click',newGame);
document.getElementById("find").addEventListener('click',win);
