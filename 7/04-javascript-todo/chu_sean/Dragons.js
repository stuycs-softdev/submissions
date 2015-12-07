console.log("loaded");
var poked = function poked() {
	var t1 = document.getElementById('h1');
	t1.style.display="none";
	var t = document.getElementById('h2');
	//console.log(t.style);
	t.style.display="inline";
	var b = document.getElementById('poke');
	b.style.display="none";
};

var poking = document.getElementById('poke');
poking.addEventListener('click',poked);

var run = function run() {
	document.body.style.backgroundImage="url('Explosion.jpg')";
	var button = document.getElementById('hidden');
	button.style.display="inline";
	var t = document.getElementById('h1');
	t.style.display="none";
	var t2 = document.getElementById('h2');
	t2.style.display="none";
	var poke = document.getElementById('poke');
	poke.style.display="none";
	var run = document.getElementById('run');
	run.style.display="none";
};

var running = document.getElementById('run');
running.addEventListener('click',run);

var reset = function reset() {
	document.body.style.backgroundImage="url('RedDragon.jpg')";
	var t2 = document.getElementById('h2');
	t2.style.display="none";
	var t1 = document.getElementById('h1');
	t1.style.display="inline";
	var reset = document.getElementById('hidden');
	reset.style.display="none";
	var run = document.getElementById('run');
	run.style.display="inline";
	var poke = document.getElementById('poke');
	poke.style.display="inline";
}

var oops = document.getElementById('hidden');
oops.addEventListener('click',reset);