console.log("Ajax Loaded");

var fnln = document.getElementById("FNLN");
var fn = document.getElementById("FN");
var ln = document.getElementById("LN");
var id = document.getElementById("ID");
var osis = document.getElementById("OSIS");
var hr = document.getElementById("HR");
var output = document.getElementById("results");

pts.addEventListener("click", function(e) {
    $.get("/PTS", function(e) {
	output.innerHTML = e;
    });
});

ptsg.addEventListener("click", function(e) {
    $.get("/PTSG", function(e) {
	output.innerHTML = e;
    });
});

fgp.addEventListener("click", function(e) {
    $.get("/FG%", function(e) {
	output.innerHTML = e;
    });
});

thp.addEventListener("click", function(e) {
    $.get("/3P%", function(e) {
	output.innerHTML = e;
    });
});


twp.addEventListener("click", function(e) {
    $.get("/2P%", function(e) {
	output.innerHTML = e;
    });
});

