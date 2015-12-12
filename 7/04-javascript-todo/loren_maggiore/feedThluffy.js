thluffySize = 5;
scoreNum = 0;
var thluffy = document.createElement('img');
thluffy.setAttribute("src", "thluffy.png");
thluffy.setAttribute("style", "position:absolute;"); 
thluffy.style.width = thluffySize + '%';
thluffy.style.height = 'auto';
document.body.appendChild(thluffy);



var moveThluffy = function(e) {
	mouseX=e.pageX - thluffy.clientWidth;
    mouseY=e.pageY - thluffy.clientHeight / 2;
    thluffy.style.left = mouseX + 'px';
    thluffy.style.top = mouseY + 'px';
 
} ;

window.addEventListener('mousemove', moveThluffy);

var thluffyEats = function(e){
	scoreNum += 1;
	score = document.getElementById("score");
	score.innerHTML = scoreNum;
	console.log(this);
	thluffySize++;
	thluffy.style.width = thluffySize + '%';
	thluffy.style.height = 'auto';
    this.parentNode.removeChild(this);

}

function getRandomPosition() {
	var x = document.body.offsetHeight;
	var y = document.body.offsetWidth;
	var randomX = (Math.random()*x);
	var randomY = (Math.random()*y);
	return [randomX,randomY];
}
for(var i = 0; i < 50; i++ ) {
	var img = document.createElement('img');
	img.setAttribute("style", "position:absolute;"); //this line makes it not uniform
	img.setAttribute("src", "blue.png");
	document.body.appendChild(img);
	img.style.width = '3%'
	img.style.height = 'auto'
	var xy = getRandomPosition(img);
	img.style.top = xy[0] + 'px';
	img.style.left = xy[1] + 'px';
	img.addEventListener('mouseover', thluffyEats);

}
