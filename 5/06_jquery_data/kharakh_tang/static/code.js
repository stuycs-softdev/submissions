//$clearInterval(myInterval);
var newPro = function newPro(){
    data = $.getJSON("../static/MOCK_DATA.json",function(){;
        console.log(data.responseText);
    })
    console.log("finished newPro");
};

//var myInterval = setInterval(newPro, 5000);

$("#b").click(function(){
    var input = $("#data");
    var d = input.val();
    input.val("");
});