var Particle = function (a,b,c,d) {
    this.lX = a; //location
    this.lY = b;

    this.vX = c; //velocity
    this.vY = d;

    this.aX = 0; //acceleration
    this.aY = 1;
    
    this.dX = 6; //dimension
    this.dY = 6;
    
    this.color = '#'+Math.floor(Math.random()*16777215).toString(16);

    this.bounce = rnd(0.6,0.95);
    this.friction = 0.98;
}

Particle.prototype.move = function() {
    this.lX += this.vX;
    this.lY += this.vY;
    if (this.lY > 768){
	this.vY = -this.vY * this.bounce;
    }
    this.vX += this.aX;
    this.vX *= this.friction;
    this.vY += this.aY;
}

Particle.prototype.eliminate = function(){
    if (this.lX < 0 || this.lX > 1024){
	return true;
    }
    if (Math.abs(this.vX) < 0.05) {
	return true;
    }
    return false;
}

var particles = new Array();
var mouseX = 0;
var mouseY = 0;

var mousepos = function(e){
    mouseX = e.clientX;
    mouseY = e.clientY;
    console.log(mouseX+ ' ' +mouseY);
}

var rnd = function(min,max){
    return Math.random() * (max-min) + min;
}

var images = [];
images[0] = new Image();
images[1] = new Image();
images[2] = new Image();
images[3] = new Image();
images[4] = new Image();
images[5] = new Image();

images[0].src = 'img/pastel0.jpg';
images[1].src = 'img/pastel1.jpg';
images[2].src = 'img/pastel2.jpg';
images[3].src = 'img/pastel3.jpg';
images[4].src = 'img/pastel4.jpg';
images[5].src = 'img/pastel5.jpg';
var curImg = 0;
var opacity = 0.2;

var updateImg = function(){
    curImg = (curImg + 1) % 6;
}

var canvas = document.getElementById("screen");
var ctx = canvas.getContext("2d");

var update = function(){
    ctx.clearRect(0,0,1024,768);
    ctx.globalAlpha = opacity;
    ctx.drawImage(images[curImg],0,0,ctx.canvas.width,ctx.canvas.height);
    for (var i = 0; i<4;i++){
	//console.log(i, particles.length);
	particles.push(new Particle(mouseX,mouseY,rnd(-20,-10),rnd(-8,-2)));
    }
    var a = [];
    for (var i = 0; i<particles.length;i++){
	particles[i].move();
	if (particles[i].eliminate()){
	    a.push(i);
	}
	ctx.globalAlpha = 1;
	ctx.fillStyle = particles[i].color;
	ctx.fillRect((particles[i].lX),(particles[i].lY),(particles[i].dX),(particles[i].dY));
    }
    for (i in a){
	particles.splice(i,1);
    }
}
var game = setInterval(update,17);
var background = setInterval(updateImg,6000);
