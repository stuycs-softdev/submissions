console.log("loaded js");


var word;
var wordIndex;
var wordlist;
var mistakes = 0;
var gameWon = false;
var myInterval;

var reset = function reset(){
		makeWord();
		var letter = "A".charCodeAt(0);
		var buttons = document.getElementsByClassName("btn-default");
		for (var i = 0 ; i < buttons.length - 4 ; i++){
				buttons[i].innerHTML = String.fromCharCode(letter);
				buttons[i].classList.remove("btn-danger");
				buttons[i].classList.remove("disabled");
				letter += 1;
		}
		mistakes = 0;
		gameWon = false;
		clearInterval(myInterval);
		document.getElementById("submit").classList.remove("disabled");
		document.getElementById("hangman").style.visibility = "hidden";
		document.getElementById("word").style.color = "black";
		document.getElementById("def").innerHTML = "";
};


var flash = function flash(){
		var n = document.getElementById("word");
		var color = "#" + Math.random().toString(16).slice(2, 8);
		n.style.color = color;
};



var gameStatus = function gameStatus(){
		if (gameWon == false){
				document.getElementById("def").innerHTML = "You have lost!";
		}
		else{
				var container = document.getElementById("def");
				var n = wordlist[wordIndex];
				def.innerHTML = n.substring(n.indexOf(" "), n.length);
				myInterval = setInterval(flash, 500);
		}
		var buttons = document.getElementsByClassName("btn");
		for (var i = 0 ; i < buttons.length ; i++){
				if (buttons[i].id != "reveal" &&
						buttons[i].id != "next"){
						buttons[i].classList.add("disabled");
				}
		}
};


var textFiletoArray = function textFiletoArray(){
		var reader = new XMLHttpRequest();
		reader.overrideMimeType("text/plain");
		reader.open("GET", "static/wordlist.csv", false);
		reader.send();
		wordlist = reader.responseText.split("\n");
};


var makeWord = function makeWord(){
		if (wordlist == undefined)
				textFiletoArray();
		
		wordIndex = Math.floor(Math.random() * wordlist.length);
		word = wordlist[wordIndex];
		word = word.substring(0, word.indexOf(",")).toUpperCase();
		//console.log("Word: " + word);
		var n = document.getElementById("word");
		n.innerHTML = word.replace(/[^\s]/g, "-");
};


var drawMan = function drawMan(){
		mistakes += 1;
		if (mistakes == 6)
				gameStatus();
		
		var image = document.getElementById("hangman");
		image.src = "static/hangman" + mistakes + ".jpeg";
		if (mistakes == 1)
				image.style.visibility = "visible";
};


var addLetter = function addLetter(letter){
		var n = document.getElementById("word");
		var index = word.indexOf(letter);
		if (index == -1){
				drawMan();
				return false;
		}

		var w = n.innerHTML;
		while (index != -1){
				w = w.substring(0, index) +
						letter +
						w.substring(index + 1, w.length);
				index = word.indexOf(letter, index + 1);
		}
		n.innerHTML = w;
		if (w == word){
				gameWon = true;
				gameStatus();
		}
		return true;	
};


var checkAnswer = function(){
		var n = document.getElementById("guess");
		var guess = n.value;
		if (guess.length > 0 && guess.trim()){
				n.value = "";
				guess = guess.trim().toUpperCase();
				if (guess == word){
						document.getElementById("word").innerHTML = word;
						gameWon = true;			
				}	
				gameStatus();
		}	
};


var setButtons = function setButtons(){
		var buttons = document.getElementsByClassName("btn-default");
		for (var i = 0 ; i < buttons.length ; i++){
				buttons[i].addEventListener('click', function(e){
						var bool = addLetter(this.innerHTML);
						this.classList.add("disabled");
						if (bool == false)
								this.classList.add("btn-danger");
						else
								this.innerHTML = "";
				});
		}
		document.getElementById("submit").addEventListener('click', checkAnswer);
		document.getElementById("next").addEventListener('click', reset);
		
		var reveal = document.getElementById("reveal");
		reveal.addEventListener('click', function(e){
				document.getElementById("word").innerHTML = word;
		});		
}


makeWord();
setButtons();

