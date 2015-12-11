var counter = 0;
var getProfile = function getProfile(){
    $.getJSON("/profile",{data:counter},function(d){
	counter++;
	if (counter == 11){
	    counter = 0;
	}
	$("#name").html(d.first+" "+d.last);
	$("#ID").html(d.ID);
	$("#email").html(d.email);
	$("#gender").html(d.gender);
	$("#drugs").html(d.drugs);
	$("body").css("background-color", d.color);
	/*
	var url = "https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=%s&userip=192.168.1.112%"+String(d.drugs);
	var img = $("<img />").attr("src", url);
	$("#drugimg").append(img);
	*/
    });
};


interval = setInterval(getProfile, 1000);
