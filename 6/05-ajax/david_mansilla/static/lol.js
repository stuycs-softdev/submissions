console.log("loaded script");

<!-- Make top 10 list -->
var ppg = document.getElementById("PPG");
var apg = document.getElementById("APG");
var rpg = document.getElementById("RPG");
var bpg = document.getElementById("BPG");
var output = document.getElementById("results");
var start = document.getElementById("cycle");	
var cyc = 0;
ppg.addEventListener("click", function(e) {
    $.get("/PPG", function(e) {
	output.innerHTML = e;
    });
    cyc = 1;
});

apg.addEventListener("click", function(e) {
    $.get("/APG", function(e) {
	output.innerHTML = e;
    });
    cyc = 2;
});

rpg.addEventListener("click", function(e) {
    $.get("/RPG", function(e) {
	output.innerHTML = e;
    });
    cyc = 3;
});

bpg.addEventListener("click", function(e) {
    $.get("/BPG", function(e) {
	output.innerHTML = e;
    });
    cyc = 4;
});

var counter = 0;
var more = document.getElementById("advanced");
var list1 = ['James Harden', 'Kevin Durant', 'LeBron James', 'Anthony Davis', 'Carmelo Anthony', 'DeMarcus Cousins', 'Stephen Curry', 'LaMarcus Aldridge', 'Kobe Bryant', 'Blake Griffin'];
var list2 = ['Chris Paul', 'John Wall', 'Ty Lawson', 'Reggie Jackson', 'Ricky Rubio', 'Russell Westbrook', 'Rajon Rondo', 'Stephen Curry', 'Michael Carter-Williams', 'LeBron James'];
var list3 = ['Andre Drummond', 'DeMarcus Cousins', 'Pau Gasol', 'Tyson Chandler', 'Enes Kanter', 'Nikola Vucevic', 'Dwight Howard', 'Zach Randolph', 'LaMarcus Aldridge', 'Anthony Davis'];
var list4 = ['Hassan Whiteside', 'Serge Ibaka', 'Rudy Gobert', 'DeAndre Jordan', 'Tim Duncan', 'John Henson', 'Andre Drummond', 'Pau Gasol', 'Nerlens Noel', 'Terrence Jones'];

var cycle = function cycle() {
    if (cyc == 1) {
	$.get("/home/" + list1[counter], function(e) {
	    more.innerHTML = e;
	});
	counter++;
	if (counter == 10) {
	    counter = 0;
	}
    }
    if (cyc == 2) {
	$.get("/home/" + list2[counter], function(e) {
	    more.innerHTML = e;
	});
	counter++;
	if (counter == 10) {
	    counter = 0;
	}
    }
    if (cyc == 3) {
	$.get("/home/" + list3[counter], function(e) {
	    more.innerHTML = e;
	});
	counter++;
	if (counter == 10) {
	    counter = 0;
	}
    }
    if (cyc == 4) {
	$.get("/home/" + list4[counter], function(e) {
	    more.innerHTML = e;
	});
	counter++;
	if (counter == 10) {
	    counter = 0;
	}
    }
};
setInterval(cycle,5000);
