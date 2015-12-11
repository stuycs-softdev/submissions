console.log("we're here");
var face = document.getElementById("searcher");
//face.style.left=500;
window.addEventListener('mousemove', function(e) {
    face.style.left=e.pageX+'px';
    face.style.top=e.pageY+'px';
    //console.log(e.pageX);
    //console.log(face.style.left);
    var surX_r=cakeX+100;
    var surX_l=cake-100;
    var surY_a=cakeY+100;
    var surY_b=cakeY-100;
    console.log('xr: '+surX_r);
    console.log('xl: '+surX_l);
    console.log('ya: '+surY_a);
    console.log('yb: '+surY_b);
    
 
    
    if (((e.pageX>=surX_l) && (e.pageX<=surX_r)) && ((e.pageY>=surY_b) && (e.pageY<=surY_a))) {
	face.src="face_3.png";
    } else if (((e.pageX>=surX_l+50) && (e.pageX<=surX_r+50)) && ((e.pageY>=surY_b+50) && (e.pageY<=surY_a+50))) {
	face.src="face_2.png";
    } else if (((e.pageX>=surX_l+100) && (e.pageX<=surX_r+100)) && ((e.pageY>=surY_b+100) && (e.pageY<=surY_a+100))) {
	face.src="face_1.png";
    } else if (((e.pageX>=surX_l+250) && (e.pageX<=surX_r+250)) && ((e.pageY>=surY_b+250) && (e.pageY<=surY_a+250))) {
	face.src="face_0.png";
    } else if (((e.pageX>=surX_l+400) && (e.pageX<=surX_r+400)) && ((e.pageY>=surY_b+400) && (e.pageY<=surY_a+400))) {
	face.src="face_-1.png";
    } else if (((e.pageX>=surX_l+600) && (e.pageX<=surX_r+600)) && ((e.pageY>=surY_b+600) && (e.pageY<=surY_a+600))) {
	face.src="face_0.png";
    } else if (((e.pageX>=surX_l+800) && (e.pageX<=surX_r+800)) && ((e.pageY>=surY_b+800) && (e.pageY<=surY_a+800))) {
	face.src="face_-1.png";
    } else if (((e.pageX>=surX_l+950) && (e.pageX<=surX_r+950)) && ((e.pageY>=surY_b+950) && (e.pageY<=surY_a+950))) {
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

	
