var getRandom = function randomPokemon(){
    $.get("/randompokemon", function(d){
	var pokemon = JSON.parse(d);
	nameTag = $("#randomName");
	emailTag = $("#randomEmail");
	countryTag = $("#randomCountry");
	ipTag = $("#randomIp");
	nameTag.html(profile.name);
	emailTag.html(profile.attack);
	countryTag.html(profile.defense);
	ipTag.html(profile.hp);
    });
};

getRandom();

interval = setInterval(getRandom, 3000);