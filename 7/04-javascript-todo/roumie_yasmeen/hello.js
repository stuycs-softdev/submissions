var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var hellos = ["Hello", "Hola", "Ni Hao", "Salut", "Hallo", "Ciao", "Ahoj", "Hej", "Konichiwa", "Shalom", "Annyeonghaseyo"];
var colors = ["red", "yellow", "blue"]

$(document).ready(function(){
  $(this).click(function(e){
    var randomHello = hellos[Math.floor(Math.random() * hellos.length)];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    var xcor = e.pageX;
    var ycor = e.pageY;
    $("body").append($('<p style="left: ' + xcor + '; right: ' + ycor '; color: ' + randomColor + '">' + randomHello + '</p>'));
  });
});
