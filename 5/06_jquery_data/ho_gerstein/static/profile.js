var getRandom = function getRandom(){
    $.get("/random", function(d){
	var profile = JSON.parse(d);
	nameTag = $("#randomName");
	emailTag = $("#randomEmail");
	countryTag = $("#randomCountry");
	ipTag = $("#randomIp");
	nameTag.html(profile.first + " " + profile.last);
	emailTag.html(profile.email);
	countryTag.html(profile.country);
	ipTag.html(profile.ip);
    });
};

var searchProfile = function searchProfile(){
    wantedName = document.getElementById("firstandlast").value.replace(" ","");
    $.get("/search",{name:wantedName}, function(d){
	var profile = JSON.parse(d);
	console.log(profile);
	nameTag = $("#searchedName");
	emailTag = $("#searchedEmail");
	countryTag = $("#searchedCountry");
	ipTag = $("#searchedIp");
	nameTag.html(profile.first + " " + profile.last);
	emailTag.html(profile.email);
	countryTag.html(profile.country);
	ipTag.html(profile.ip);
    });
};

document.getElementById("searchIt").addEventListener("click",searchProfile);

getRandom();

interval = setInterval(getRandom, 3000);
