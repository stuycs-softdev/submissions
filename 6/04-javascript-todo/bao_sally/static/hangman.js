console.log("loaded js");

var definition;
var word;
var mistakes = 0;
var gameWon = false;
var myInterval;

var reset = function reset(){
		makeWord();
		var letter = "A".charCodeAt(0);

		$(".btn-default").each(function(i, item){
				$(item).removeClass("btn-danger disabled");
				if (i < 26)
						$(item).html(String.fromCharCode(65+i));
		});
		mistakes = 0;
		gameWon = false;
		clearInterval(myInterval);
		document.getElementById("submit").classList.remove("disabled");
		document.getElementById("hangman").style.visibility = "hidden";
		document.getElementById("word").style.color = "black";
		document.getElementById("def").style.visiblity = "hidden";
		document.body.style.backgroundImage = "none";
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
				document.body.style.backgroundImage = 'url(http://i.stack.imgur.com/8IjyR.gif)';
				myInterval = setInterval(flash, 500);
		}
		$(".btn-default, #submit").addClass("disabled");
		document.getElementById("def").style.visibility = "visible";
};



var makeWord = function makeWord(){
		$.get("/getlist", function(data){
				word = data.substring(0, data.indexOf(", "));
				word = word.toUpperCase();
				definition = data.substring(data.indexOf(", ") + 1, data.length);
				//console.log("Word: " + word);
				var n = document.getElementById("word");
				var m = document.getElementById("def");
				n.innerHTML = word.replace(/[^\s]/g, "-");
				m.innerHTML = definition;
				m.style.visibility = "hidden";
		});
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

		$(".btn-default").click(function(e){
				var bool = addLetter(this.innerHTML);
				$(this).addClass("disabled");
				if (!bool)
						$(this).addClass("btn-danger");
				else
						this.innerHTML = "";
		});
		document.getElementById("submit").addEventListener('click', checkAnswer);
		document.getElementById("next").addEventListener('click', reset);
		
		var reveal = document.getElementById("reveal");
		reveal.addEventListener('click', function(e){
				document.getElementById("word").innerHTML = word;
		});		
}


makeWord();
setButtons();

