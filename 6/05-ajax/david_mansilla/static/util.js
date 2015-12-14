console.log("loaded script");
var points = document.getElementById("PPG");
var output = document.getElementById("results");

points.addEventListener("click", function(e) {
    $.get("/PPG", function(e) {
	output.innerHTML = e;
    });
});
