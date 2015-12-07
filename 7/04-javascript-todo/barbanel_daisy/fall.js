var score = 0;
var createImg = function createImg(source){
    var img = document.createElement("img");
    img.src = source;
    img.style.position = "absolute";
    img.style.top = 0 + "px";
    var width = window.innerWidth;
    img.style.left = randInt(1,width-100) + "px";
    document.body.appendChild(img);
    return img;
}

var randInt = function randInt(lower , upper){
    return Math.random() * (upper - lower) + lower;
}

var addToScore = function addToScore(n){
    score += n;
    text = document.getElementById("score");
    text.innerHTML = score;
}

var moveDown = function moveDown(img,umbrella){
    loc = parseInt(img.style.top)
    img.style.top = loc + 5 + "px";
    var height = window.innerHeight;
    if (loc > height -200){
	document.body.removeChild(img);
	if (umbrella){
	    addToScore(-10);
	}
    }
}

var populate = function populate(){
    var n = Math.random();
    if (n < .35){
	cat = createImg("images/cat.png");
	catDogEvent(cat);
    } else if (n < .7) {
	dog = createImg("images/dog.png");
	catDogEvent(dog);
    } else {
	umb = createImg("images/umb.png");
	umbrellaEvent(umb)
    }
}

var umbrellaEvent = function addEvents(img){
     img.addEventListener('click',function(){
	 addToScore(10);
	 document.body.removeChild(img);
    });
    setInterval(function() {moveDown(img,true)},50);
}

var catDogEvent = function catDogEvent(img){
    img.addEventListener('mouseover', function(){
	addToScore(-3);
    });
    setInterval(function() {moveDown(img,false)},50);
}

var newGame = function(e){
    //clearS(this);
    var interval;
    interval = setInterval(populate, 1000);
}

var clearS = function(e){
    location.reload();
}
//interval = setInterval(function () { moveDown(image)},100);
