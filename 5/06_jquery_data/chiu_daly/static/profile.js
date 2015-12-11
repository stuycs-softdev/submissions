var getRandom = function getRandom(){
    $.get("/random", function(e){
	var profile = JSON.parse(e);
	first = $("#rFirst");
	last = $("#rLast");
	country = $("#rCountry");
	id = $("#rID");
	first.html("First Name: " + profile.first_name);
	last.html("Last Name: " + profile.last_name);
	country.html("Country: " + profile.country);
	id.html("ID: " + profile.id);
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
	first.html("First Name: " + profile.first_name);
	last.html("Last Name: " + profile.last_name);
	country.html("Country: " + profile.country);
	id.html("ID: " + profile.id);
    });
};

document.getElementById("search").addEventListener("click",searchProfile);

getRandom();

interval = setInterval(getRandom, 3000);
