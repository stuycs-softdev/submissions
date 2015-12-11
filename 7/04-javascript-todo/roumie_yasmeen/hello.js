

var hellos = ["Hello", "Hola", "Ni Hao", "Salut", "Hallo", "Ciao", "Ahoj", "Hej", "Konichiwa", "Shalom", "Annyeonghaseyo"];
var colors = ["red", "yellow", "blue"]

$(document).ready(function(){
  $(document).click(function(e){
    var randomHello = hellos[Math.floor(Math.random() * hellos.length)];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    var xcor = e.pageX;
    var ycor = e.pageY;
    $("body").append("<p style='color: red; position: fixed; left:" + xcor + "'>Hi</p>");
    /* $('<p style="left: ' + xcor + '; right: ' + ycor '; color: ' + randomColor + '">' + randomHello + '</p>') */
  });
});
