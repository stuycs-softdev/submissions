
//$clearInterval(myInterval);
var num;

var rand = function rand(){
    num = Math.floor(Math.random() * 20);
}

var newPro = function newPro(){
    $.getJSON("../static/MOCK_DATA.json",
	      function(data){
		  console.log(num);
		  console.log(data[num]);
		     })    
    console.log("finished newPro");
};

setInterval(rand,5000);
var myInterval = setInterval(newPro, 5000);

$("#b").click(function(){
    var input = $("#data");
    var d = input.val();
    input.val("");
});
