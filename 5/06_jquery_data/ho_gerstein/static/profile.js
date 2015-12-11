var getRandom = function getRandom(){
    $.get("/random", function(d){
	var profile = JSON.parse(d);
	nameTag = $("#randomName")
	emailTag = $("#randomEmail")
	countryTag = $("#randomCountry")
	ipTag = $("#randomIp")
	nameTag.html(profile.first + " " + profile.last)
	emailTag.html(profile.email)
	countryTag.html(profile.country)
	ipTag.html(profile.ip)
    });
};

getRandom();

interval = setInterval(getRandom, 1000);
