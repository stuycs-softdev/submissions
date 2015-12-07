var x;
var y;

document.onmousemove = function(e){
    x = e.pageX;
    y = e.pageY;
};

var position = function position(image, num){
    image.setAttribute("src", "follow.png");
    image.style.position = "relative";
    image.style.display = "block";
    image.style.left = x + num * 6 + "px";
    image.style.top = y + 8 + num + "px";
}

var move1 = function move1(){
    var image = document.getElementById("image1");
    position(image, 1);
};

var move2 = function move2(){
    var image = document.getElementById("image2");
    position(image, 2);
};

var move3 = function move3(){
    var image = document.getElementById("image3");
    position(image, 3);
};

var move4 = function move4(){
    var image = document.getElementById("image4");
    position(image, 4);
};

var move5 = function move5(){
    var image = document.getElementById("image5");
    position(image, 5);
};

var move6 = function move6(){
    var image = document.getElementById("image6");
    position(image, 6);
};

var set = false;

window.addEventListener("mousemove", function(e){
    if (!set){
	var moveInterval = setInterval(move1, 50);
	var moveInterval = setInterval(move2, 100);
	var moveInterval = setInterval(move3, 150);
	var moveInterval = setInterval(move4, 200);
	var moveInterval = setInterval(move5, 250);
	var moveInterval = setInterval(move6, 300);
	set = true;
    }
});
