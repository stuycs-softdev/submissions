function explode(txt) {
    $(txt).html($(txt).text().replace(/([\S])/g, "<span>$1</span>"));
    $(txt).css("position", "relative");
    $("span", $(txt)).each(function() {
	$(this).css({position: "relative",
		     opacity: 1,
		     fontSize: 12,
		     top: 0,
		     left: 0
		    }).animate({
			opacity: 0,
			fontSize: 84,
			top: Math.floor(Math.random()*1000)-500,
			left: Math.floor(Math.random()*1000)-500
		    },1000);
    });
}
