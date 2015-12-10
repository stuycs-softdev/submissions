var explode = function explode(txt) {
    $(txt).html($(txt).text().replace(/([\S])/g, "<span>$1</span>"));
    $(txt).css("position", "relative");
    $(txt).children().each(function() {
	var topFinal = Math.floor(Math.random()*1000)-500;
	var leftFinal = Math.floor(Math.random()*1000)-500;
	
	$(this).css({position: "relative",
		     top: 0,
		     left: 0,
		     opacity: 1,
		     fontSize: 10
		    }).animate({
			top: topFinal,
			left: leftFinal,
			opacity: 0,
			fontSize: 50
		    },1000);
    });
}


var getName = function getName(){
    $.get("/names", function(n){
	$("#name").append("<div>"+n+"</div>")
    });
};




