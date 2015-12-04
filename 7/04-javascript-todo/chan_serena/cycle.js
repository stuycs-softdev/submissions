var i = 0;
var imgs = new Array();

imgs[0] = "static/img1.jpg"
imgs[1] = "static/img2.jpg"
imgs[2] = "static/img3.jpg"
imgs[3] = "static/img4.jpg"

function imageCycle() {

	document.img.src = imgs[i];
	if (i < imgs.length - 1) {
		i++;
	}
	else {
		i=0;
	}
	setTimeout("imageCycle(), 3000");
}


window.onload = imageCycle;
