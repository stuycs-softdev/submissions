console.log("we're here");
var face = document.getElementById("searcher");
//face.style.left=500;
window.addEventListener('mousemove', function(e) {
    face.style.left=e.pageX+'px';
    face.style.top=e.pageY+'px';
    //console.log(e.pageX);
    //console.log(face.style.left);
    if ((e.pageX>=cakeX-100) && (e.pageX<=cakeX+100) && (e.pageY>=cakeY-100) && (e.pageY<=cakeY+100)) {
	face.src="face_3.png";
    } else if ((e.pageX>=cakeX-250) && (e.pageX<=cakeX+250) && (e.pageY>=cakeY-250) && (e.pageY<=cakeY+250)) {
	face.src="face_2.png";
    } else if ((e.pageX>=cakeX-350) && (e.pageX<=cakeX+350) && (e.pageY>=cakeY-350) && (e.pageY<=cakeY+350)) {
	face.src="face_1.png";
    } else if ((e.pageX>=cakeX-4500) && (e.pageX<=cakeX+450) && (e.pageY>=cakeY-450) && (e.pageY<=cakeY+450)) {
	face.src="face_0.png";
    } else if ((e.pageX>=cakeX-550) && (e.pageX<=cakeX+550) && (e.pageY>=cakeY-550) && (e.pageY<=cakeY+550)) {
	face.src="face_-1.png";
    } else if ((e.pageX>=cakeX-650) && (e.pageX<=cakeX+650) && (e.pageY>=cakeY-650) && (e.pageY<=cakeY+650)) {
	face.src="face_0.png";
    } else if ((e.pageX>=cakeX-750) && (e.pageX<=cakeX+750) && (e.pageY>=cakeY-750) && (e.pageY<=cakeY+750)) {
	face.src="face_-1.png";
    } else if ((e.pageX>=cakeX-850) && (e.pageX<=cakeX+850) && (e.pageY>=cakeY-850) && (e.pageY<=cakeY+850)) {
	face.src="face_-2.png";
    } else {
	face.src="face_-3.png";
    }
});

var cake = document.getElementById("cake");
var cakeX, cakeY;
var placeCake = function placeCake() {
    cakeX=Math.floor((Math.random() * (window.innerWidth-100)) + 1);
    cakeY=Math.floor((Math.random() * (window.innerHeight-100)) + 1);
    cake.style.left=cakeX+'px';
    cake.style.top=cakeY+'px';
}

placeCake();

	
