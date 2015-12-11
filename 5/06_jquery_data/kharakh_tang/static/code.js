//myInterval = setInterval(newPro, 5000);

//$clearInterval(myInterval);

var newPro = function newPro(){
    data = $.getJSON("../MOCK_DATA.json");
    console.log(data);
};

$("#b").click(function(){
    var input = $("#data");
    var d = input.val();
    input.val("");

/*
    result;

    for item in data{
    	if item. ==  {
    		result = item;
    	}

    }

    $("#result").text(d.result);
*/
}