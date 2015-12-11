console.log("Hi");

var getTeam = function getTeam(){
    $.get("stats.csv", function(n){
	$("#name").append("<div>"+n+"</div>")
    });
};

var getdata = function() {
	$.get("stats.csv",function(f){
		console.log("Team: "+f);
	});
	console.log("Found Team");
};
