console.log("Ajax Loaded");

var fnln = document.getElementById("FNLN");
var fn = document.getElementById("FN");
var ln = document.getElementById("LN");
var id = document.getElementById("ID");
var osis = document.getElementById("OSIS");
var hr = document.getElementById("HR");
var output = document.getElementById("results");

fnln.addEventListener("click", function(e) {
    $.get("/FNLN", function(e) {
	output.innerHTML = e;
    });
});

fn.addEventListener("click", function(e) {
    $.get("/FN", function(e) {
	output.innerHTML = e;
    });
});

id.addEventListener("click", function(e) {
    $.get("/ID", function(e) {
	output.innerHTML = e;
    });
});

osis.addEventListener("click", function(e) {
    $.get("/OSIS", function(e) {
	output.innerHTML = e;
    });
});

hr.addEventListener("click", function(e) {
    $.get("/HR", function(e) {
	output.innerHTML = e;
    });
});

