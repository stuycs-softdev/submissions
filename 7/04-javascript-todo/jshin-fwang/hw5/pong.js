var dx = 1;
var dy = 1;
var player2score = document.querySelector('#score2'); 
var player2scoreval=player2score.innerHTML;
player2scoreval = player2scoreval.substring(player2scoreval.length-1, player2scoreval.length);
player2scoreval = parseInt(player2scoreval);

var started = false;

//images
var myPix = new Array("images/ball.png","images/DWHead.png","images/ZamanskyHead.png","images/KHead.png", "images/ball.png");
var picIndex = 0;

function choosePic() {
    picIndex++;
     document.getElementById("ball").src = myPix[picIndex%4];
}

//Keystate for multitouch
var keyState = {};

window.addEventListener('keydown',function(e){
    keyState[e.keyCode || e.which] = true;
},true);

window.addEventListener('keyup',function(e){
    keyState[e.keyCode || e.which] = false;
},true);

//Player 1
var player1score = document.querySelector('#score1');
var player1scoreval=player1score.innerHTML;
player1scoreval = player1scoreval.substring(player1scoreval.length-1, player1scoreval.length);
player1scoreval = parseInt(player1scoreval);



var player1pos=document.querySelector('#player1');
var player1x = (player1pos.style.left);
var player1y = (player1pos.style.top);
   
player1x=player1x.substring(0,player1x.length-1);
player1x=parseInt(player1x);
player1y=player1y.substring(0,player1y.length-1);
player1y=parseInt(player1y);
   
if (isNaN(player1x)) player1x=85;
if (isNaN(player1y)) player1y=50;
   
//~~~~~player 2~~~~~
   
var player2pos=document.querySelector('#player2');
var player2x = (player2pos.style.left);
var player2y = (player2pos.style.top);
   
player2x=player2x.substring(0,player2x.length-1);
player2x=parseInt(player2x);
player2y=player2y.substring(0,player2y.length-1);
player2y=parseInt(player2y);
   
if (isNaN(player2x)) player2x=15;
if (isNaN(player2y)) player2y=50;
   
//Ball
var bounceball=document.querySelector('#ball');
var x = (bounceball.style.left);
var y = (bounceball.style.top);
   
x=x.substring(0,x.length-1);
x=parseFloat(x);
y=y.substring(0,y.length-1);
y=parseFloat(y);
   
if (isNaN(x)) x=50;
if (isNaN(y)) y=50;

function bounce(e){
   if ((x<15+3 && y<player2y+15 && y>player2y) || (x > 85-3 && y<player1y+15 && y>player1y)) {
     dx*=-1;
     x+=dx/Math.abs(dx) * 2;
   } else if (y<30+3 || y > 75 + 13) {
     dy*=-1;
     y+=dy/Math.abs(dy) * 2;
   }
   console.log(x, dx);
   console.log(y, dy);
   x+=dx;
   y+=dy;
   if (x < 15 || x > 85) {
     if (x < 15) {
        player2scoreval++;
        player2score.innerHTML="Player 2: " + (player2scoreval);
        dx*=-1;
     } else {
        player1scoreval++;
        player1score.innerHTML="Player 1: " + (player1scoreval);
        dx*=-1;
     }
     stopit()
     x = 50;
     y = 50;
   }
   
   bounceball.style.left=x+"%";
   bounceball.style.top=y+"%";
   //setTimeout(bounce, 100)
}

function move(e) {
    
  if (keyState[38] && player1y > 30) {
     player1y=player1y-2;
  } else if (keyState[40] && player1y < 75) {
     player1y=player1y+2;
  }
   
  player1pos.style.left=player1x+"%";
  player1pos.style.top=player1y+"%";
   
  if (keyState[87] && player2y > 30) {
     player2y=player2y-2;
  } else if (keyState[83] && player2y < 75) {
     player2y=player2y+2;
  }
   
  player2pos.style.left=player2x+"%";
  player2pos.style.top=player2y+"%";
  //setTimeout(move, 100)
}

var playermove;
var ballmove;

function startit() {
 if (!started) {
   started = true;
   //move()
   //bounce()
   playermove = setInterval(move,20);
   ballmove = setInterval(bounce, 20);
  }
}

function stopit() {
	window.clearTimeout(playermove);
	window.clearTimeout(ballmove);
	x = 50;
	y = 50;
	bounceball.style.left=x+"%";
	bounceball.style.top=y+"%";
	started = false;
}

function reset() {
    stopit()
    player1scoreval = 0;
    player2scoreval = 0;
    player1score.innerHTML="Player 1: " + '0';
    player2score.innerHTML="Player 2: " + '0';
}

 document.getElementById("start").addEventListener('click',startit);
 document.getElementById("stop").addEventListener('click',reset);
 document.getElementById("changeball").addEventListener('click', choosePic);

document.onkeydown = move;
