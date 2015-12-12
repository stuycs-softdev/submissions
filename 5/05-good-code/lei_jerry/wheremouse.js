var mousepos = function mousepos(e){
    var xpos = document.getElementById('x_pos');
    var ypos = document.getElementById('y_pos');
    var newx = e.clientX-75;
    var newy = e.clientY-75;
    xpos.innerHTML=newx;
    ypos.innerHTML=newy;
    var duck = document.querySelector("#duck");
    duck.style.left=newx+"px";
    duck.style.top=newy+"px";
}
document.onmousemove = mousepos;


