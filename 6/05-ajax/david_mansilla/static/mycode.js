console.log("loaded script");
var ppg = document.getElementById("PPG");
var apg = document.getElementById("APG");
var rpg = document.getElementById("RPG");
var bpg = document.getElementById("BPG");
var output = document.getElementById("results");

ppg.addEventListener("click", function(e) {
    $.get("/PPG", function(e) {
	output.innerHTML = e;
    });
});

apg.addEventListener("click", function(e) {
    $.get("/APG", function(e) {
	output.innerHTML = e;
    });
});

rpg.addEventListener("click", function(e) {
    $.get("/RPG", function(e) {
	output.innerHTML = e;
    });
});

bpg.addEventListener("click", function(e) {
    $.get("/BPG", function(e) {
	output.innerHTML = e;
    });
});
