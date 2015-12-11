console.log("loaded js");
var searchButton = document.getElementById("submitsearch");
var searchOutput = document.getElementById("searchresults");

searchButton.addEventListener("click", function(e) {
    var searchinfo = document.getElementById("input").value;
    $.get("/" + searchinfo, function(e) {
	searchOutput.innerHTML = e;
    });
});

var counter = 0;
var rotateOutput = document.getElementById("rotatingresults");
var list = ['Salimbalan', 'Redakodi', 'Shigu', 'La Punta', 'Tamanan', 'Jiantian', 'Apt', 'Xianren', 'Terek', 'Ostrowsko']

var cycle = function cycle() {
    $.get("/" + list[counter], function(e) {
	rotateOutput.innerHTML = e;
    });
    counter++;
};

setInterval(cycle,5000);
