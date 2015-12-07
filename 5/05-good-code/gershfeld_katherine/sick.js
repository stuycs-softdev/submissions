var x;
var y;
var current = 0;

document.onmousemove = function(e){
    x = e.pageX;
    y = e.pageY;
    current++;
    console.log(current);
    if (current > 300) {
	document.getElementById("headr").innerHTML = "Just Kidding!! There is no cure :(";
    }
};

var position = function position(){
    image = document.getElementById("sick")
    image.setAttribute("src", "sick.gif");
    image.style.position = "relative";
    image.style.display = "block";
    image.style.left = x+"px";
    image.style.top = y+"px";
}

window.addEventListener("mousemove", function(e){
    var moveInterval = setInterval(position, 50);
});
