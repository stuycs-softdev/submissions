var getRandom = function getRandom(){
    $.get("/random", function(e){
	var profile = JSON.parse(e);
	first = $("#rFirst");
	last = $("#rLast");
	country = $("#rCountry");
	id = $("#rID");
	first.html(profile.first_name);
	last.html(profile.last_name);
	country.html(profile.country);
	id.html(profile.id);
    });
};

var searchProfile = function searchProfile(){
    name = document.getElementById("name").value.replace(" ","");
    $.get("/search",{name:name}, function(e){
	var profile = JSON.parse(e);
	first = $("#sFirst");
	last = $("#sLast");
	country = $("#sCountry");
	id = $("#sID");
	first.html(profile.first_name);
	last.html(profile.last_name);
	country.html(profile.country);
	id.html(profile.id);
    });
};

document.getElementById("search").addEventListener("click",searchProfile);

getRandom();

interval = setInterval(getRandom, 5000);
