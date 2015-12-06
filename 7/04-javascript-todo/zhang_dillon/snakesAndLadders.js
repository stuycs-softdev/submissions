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

var board = document.getElementById("board").children[0].children;

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
