console.log("Javascript loaded");

var open_box = function open_box(item){
    item.getElementsByTagName('div')[0].style.display = 'block';
}

var searchIDButton = $("#searchIDButton");
searchIDButton.click(function(){
    var searchIDBox = $("#searchIDBox");
    var IDQuery = searchIDBox.val();
    searchIDBox.val("");
    $.getJSON("/searchbyid",{searchIDBox:IDQuery},function(IDQuery){
	// empties the list so it only displays the Pokemon in the current search
	console.log(IDQuery);
	$("#resultList").empty();
	$("#resultList").append($("<li id='name0' onclick='open_box(this);'>"+IDQuery.name
				  + "<div style='display: none;'>"  //inside table of data
				  + "<table border='1'>"
				  + "<tr><td>ID</td><td>" + IDQuery.id + "</td></tr>"
				  + "<tr><td>Species ID</td><td>" + IDQuery.species_id + "</td></tr>"
				  + "<tr><td>Height</td><td>" + IDQuery.height + "</td></tr>"
				  + "<tr><td>Weight</td><td>" + IDQuery.weight + "</td></tr>"
				  + "<tr><td>Base Experience</td><td>" + IDQuery.base_experience + "</td></tr>"
				  + "</table></div></li>"));

    });
});

var searchNameButton = $("#searchNameButton");
searchNameButton.click(function(){
    var searchNameBox = $("#searchNameBox");
    var NameQuery = searchNameBox.val();
    searchNameBox.val("");
    $.getJSON("/searchbyname",{searchNameBox:NameQuery},function(NameQuery){
	// empties the list so it only displays the Pokemon in the current search
	$("#resultList").empty();
	console.log(NameQuery);
	keys = Object.keys(NameQuery);
	console.log(keys);
	length = keys.length;
	console.log(length);
	for (i=0; i<length; i++){
	    console.log(NameQuery[keys[i]]);
	    $("#resultList").append($("<li id='name"+i+"' onclick='open_box(this);'>"+NameQuery[keys[i]].name
				      + "<div style='display:none;'>"
				      + "<table border='1'>"
				      + "<tr><td>ID</td><td>" + NameQuery[keys[i]].id + "</td></tr>"
				      + "<tr><td>Species ID</td><td>" + NameQuery[keys[i]].species_id + "</td></tr>"
				      + "<tr><td>Height</td><td>" + NameQuery[keys[i]].height + "</td></tr>"
				      + "<tr><td>Weight</td><td>" + NameQuery[keys[i]].weight + "</td></tr>"
				      + "<tr><td>Base Experience</td><td>" + NameQuery[keys[i]].base_experience + "</td></tr>"
				      + "</table></div></li>"));
	};
    });
});

function getRandomInt(min,max){
    return (Math.floor(Math.random() * (max - min + 1)) + min);
};

randomProfile = function randomProfile(){
    var random = getRandomInt(0,811);
    console.log(random);
    $.getJSON("/randomprofile",{randomProfileBox:random},function(random){
	$("#randomProfile").empty();
	$("#randomProfile").append($("<li id='name'>"+random.name
				     + "<div>"  //inside table of data
				     + "<table border='1'>"
				     + "<tr><td>ID</td><td>" + random.id + "</td></tr>"
				     + "<tr><td>Species ID</td><td>" + random.species_id + "</td></tr>"
				     + "<tr><td>Height</td><td>" + random.height + "</td></tr>"
				     + "<tr><td>Weight</td><td>" + random.weight + "</td></tr>"
				     + "<tr><td>Base Experience</td><td>" + random.base_experience + "</td></tr>"
				     + "</table></div></li>"));
    });
};

setInterval(randomProfile,3000);
