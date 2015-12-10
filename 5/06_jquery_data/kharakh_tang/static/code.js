myInterval = setInterval(newPro, 5000);

//$clearInterval(myInterval);

var newPro = function newPro(){
    $.getJSON("data");
};

$("#b").click(function(){
    var input = $("#data");
    var d = input.val();
    input.val("");
-
