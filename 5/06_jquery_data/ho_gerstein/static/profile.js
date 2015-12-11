var getRandom = function getRandom(){
    $.get("/random", function(d){
	randomName = $("#randomName")
	randomName.html(d)
    });
};

getRandom();

interval = setInterval(getRandom, 5000);

