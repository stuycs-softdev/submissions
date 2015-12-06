var addMouseEvents = function(item){
    item.addEventListener('mouseover',function(e){
	this.classList.remove('red');
	this.classList.add('green');
    });
    item.addEventListener('mouseout',function(e){
	this.classList.remove('green');
	this.classList.add('red');
    });
};

var greet = document.getElementById('greeting');
addMouseEvents(greet);

var letItSnow = function(e){
    document.body.style.backgroundImage = "url('http://rs257.pbsrc.com/albums/hh234/tfm448/Snow411.gif~c200'), url('http://www.psdgraphics.com/file/blue-winter-background.jpg')";
};

var stopSnowing = function(e){
    document.body.style.backgroundImage = "url('http://www.psdgraphics.com/file/blue-winter-background.jpg')";
};

var snow = document.getElementById('snow');
snow.addEventListener('click',letItSnow);
var noMoreSnow = document.getElementById('noMoreSnow');
noMoreSnow.addEventListener('click',stopSnowing);
