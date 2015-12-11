console.log("Hi");

var getTeam = function getTeam(){
    $.get("/stats", function(n){
	$("#name").append("<div>"+n+"</div>")
    });
};
