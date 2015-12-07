var hellos = ["Hello", "Hola", "Ni Hao", "Salut", "Hallo", "Ciao", "Ahoj", "Hej", "Konichiwa", "Shalom", "Annyeonghaseyo"];
$(document).ready(function(){
  $("body").click(function(e){
    var randomHello = hellos[Math.floor(Math.random() * hellos.length)];
    $("body").append("<p style='left: " + e.pageX + "; right: " + e.pageY "'>" + randomHello + "</p>");
  });
});
