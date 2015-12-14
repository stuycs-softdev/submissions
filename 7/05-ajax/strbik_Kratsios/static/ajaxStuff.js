console.log("Hi");

var fgp = document.getElementById("FG%");
var thp = document.getElementById("3P%");
var twp = document.getElementById("2P%");
var pts = document.getElementById("PTS");
var ptsg = document.getElementById("PTSG");
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

