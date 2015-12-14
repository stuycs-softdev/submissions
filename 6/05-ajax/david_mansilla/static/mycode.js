console.log("loaded script");
var points = document.getElementById("PPG");
var assits = document.getElementById("APG");
var rebounds = document.getElementById("RPG");
var blocks = document.getElementById("BPG");
var output = document.getElementById("results");

points.addEventListener("click", function(e) {
    $.get("/PPG", function(e) {
	output.innerHTML = e;
    });
});

assits.addEventListener("click", function(e) {
    $.get("/APG", function(e) {
	output.innerHTML = e;
    });
});

rebounds.addEventListener("click", function(e) {
    $.get("/RPG", function(e) {
	output.innerHTML = e;
    });
});

blocks.addEventListener("click", function(e) {
    $.get("/BPG", function(e) {
	output.innerHTML = e;
    });
});
