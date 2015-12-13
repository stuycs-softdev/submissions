console.log("loaded script");
var points = document.getElementById("PPG");
var assists = document.getElementById("APG");
var rebounds = document.getElementById("RPG");
var blocks = document.getElementById("BPG");

var list = ['DeMarcus Cousins: 9.5 DRPG', 'Pau Gasol: 9.0 DRPG', 'Andre Drummond: 8.1 DRPG', 'Kevin Love: 7.9 DRPG', 'Dwight Howard: 7.8 DRPG', 'LaMarcus Aldridge: 7.7 DRPG', 'Anthony Davis: 7.7 DRPG', 'Nikola Vucevic: 7.7 DRPG', 'Tyson Chandler: 7.6 DRPG', 'Zach Randolph: 7.4 DRPG']

var counter = 0; 
var advanced = document.getElementById("advanced");

var cycle = function cycle() {
    $.get("/" + list[counter], function(e) {
	advanced.innerHTML = e;
    });
    counter++;
}

setInterval(cycle, 5000);
