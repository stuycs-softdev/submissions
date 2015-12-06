var turn = 0; //Changes between 0, 1

var player1 = document.getElementById("p1");
var finalLocation1 = 1;
var currentLocation1 = 1;

var player2 = document.getElementById("p2");
var finalLocation2 = 1;
var currentLocation2 = 1;

var players = [player1, player2];
var finalLocations = [finalLocation1, finalLocation2];
var currentLocations = [currentLocation1, currentLocation2];

var myStatus = document.getElementById("status");

var board = document.getElementById("board").children[0].children;
var startmovements = [04, 09, 17, 20, 28, 40, 51, 54, 62, 63, 64, 71, 87, 93, 95, 99];
var endmovements =   [14, 31, 07, 38, 84, 59, 67, 34, 19, 81, 60, 91, 24, 73, 75, 78];

var findRow = function(num) {
    return 9 - Math.floor((num-1) / 10);
}

var findColumn = function(num) {
    return (10 - (1 - findRow(num) % 2 * 2) * ((num - 1) % 10) - 1 + (findRow(num) % 2)) % 10;
}

var movePiece = function() {
    board[findRow(currentLocations[turn])].children[findColumn(currentLocations[turn])].removeChild(players[turn]);
    currentLocations[turn]++;
    board[findRow(currentLocations[turn])].children[findColumn(currentLocations[turn])].appendChild(players[turn]);
}

var moveVertically = function() {
    var indexing = startmovements.indexOf(finalLocations[turn]);
    if (indexing >= 0) {
	board[findRow(currentLocations[turn])].children[findColumn(currentLocations[turn])].removeChild(players[turn]);
	currentLocations[turn] = endmovements[indexing];
	finalLocations[turn] = endmovements[indexing];
	board[findRow(currentLocations[turn])].children[findColumn(currentLocations[turn])].appendChild(players[turn]);
    }
}

var moveIt = function() {
    if (currentLocations[turn] < finalLocations[turn] || currentLocations[turn] >= 100) {
	movePiece();
    } else {
	clearInterval(myInterval);
	moveVertically();
	turn = (turn + 1) % 2;
	if (currentLocations[turn] == 100) {
	    myStatus.innerHTML = "Player " + (turn + 1) + "Wins!"
	} else {
	    myStatus.innerHTML = "Player " + (turn + 1) + "'s Turn"
	}
    }
}
    
var rollDie = function(id) {
    var imager = document.getElementById(id);
    var face = Math.ceil(Math.random() * 6)
    imager.src = "./img/" + face + ".png"
    return face;
}

var rollTime = 1;
var rollValue = 0;
var rollDice = function() {
    if (rollTime > 0 ){
	rollValue = rollDie("leftImg") + rollDie("rightImg");
	rollTime--;
    } else {
	clearInterval(myInterval);
	finalLocations[turn] += rollValue;
	myStatus.innerHTML = "Moving the your piece"
	myInterval = setInterval(moveIt, 100);
    }
}

var myInterval;
var rolling = document.getElementById("roll");
rolling.addEventListener('click', function(){
    myStatus.innerHTML = "Rolling the dice"
    rollTime = Math.floor(Math.random() * 10) + 5
    myInterval = setInterval(rollDice, 50);
});
