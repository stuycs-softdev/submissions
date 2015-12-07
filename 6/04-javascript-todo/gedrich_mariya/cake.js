console.log("we're here");
var face = document.getElementById("searcher");
//face.style.left=500;
var cake = document.getElementById("cake");
var cakeX, cakeY;
var isFashion=false;
var placeCake = function placeCake() {
    var speshul=Math.random() * 100;
    console.log(speshul);
    if (speshul<40) {
	console.log('yay');
	isFashion=true;
	cake.src='fashion.jpg';
    }
    cakeX=Math.floor((Math.random() * (window.innerWidth-100)) + 1);
    cakeY=Math.floor((Math.random() * (window.innerHeight-100)) + 1);
    cake.style.left=cakeX+'px';
    cake.style.top=cakeY+'px';
   
};

placeCake();

window.addEventListener('mousemove', function(e) {
    face.style.left=e.pageX+'px';
    face.style.top=e.pageY+'px';
    //console.log(e.pageX);
    //console.log(face.style.left);
    if ((e.pageX>=cakeX-50) && (e.pageX<=cakeX+50) && (e.pageY>=cakeY-50) && (e.pageY<=cakeY+50)) {
	face.src="face_3.png";
    } else if ((e.pageX>=cakeX-150) && (e.pageX<=cakeX+150) && (e.pageY>=cakeY-150) && (e.pageY<=cakeY+150)) {
	face.src="face_2.png";
    } else if ((e.pageX>=cakeX-250) && (e.pageX<=cakeX+250) && (e.pageY>=cakeY-250) && (e.pageY<=cakeY+250)) {
	face.src="face_1.png";
    } else if ((e.pageX>=cakeX-400) && (e.pageX<=cakeX+400) && (e.pageY>=cakeY-400) && (e.pageY<=cakeY+400)) {
	face.src="face_0.png";
    } else if ((e.pageX>=cakeX-500) && (e.pageX<=cakeX+500) && (e.pageY>=cakeY-500) && (e.pageY<=cakeY+500)) {
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


var restart = function restart() {
    location.reload();
}

window.addEventListener('click', function(e) {
     if ((e.pageX>=cakeX-100) && (e.pageX<=cakeX+100) && (e.pageY>=cakeY-100) && (e.pageY<=cakeY+100)) {
	 console.log('found it!');
	 cake.style.display='';
	 b1.display='';
	 //face.src='face_3.png';
	 setTimeout(restart, 3000);
     }
});





