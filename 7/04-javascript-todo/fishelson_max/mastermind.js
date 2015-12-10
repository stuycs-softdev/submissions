var colors = ["./img/mt.gif","./img/r.gif","./img/b.gif","./img/y.gif","./img/g.gif","./img/o.gif","./img/k.gif"];
var turn = 0;
var color = 1;
var current = document.getElementById("current");

var changeColor = function changeColor(){
    if(color == 6){
        color = 1;
    }else{
        color ++;
    }
    current.src=colors[color];
}
current.addEventListener("click",changeColor);

var board = document.getElementById("board").children[0].children;

var code = [Math.floor(Math.random() * 6)+1,Math.floor(Math.random() * 6)+1,Math.floor(Math.random() * 6)+1,Math.floor(Math.random() * 6)+1];
var guess = [0,0,0,0];

var setColor = function setColor(){
    this.src = colors[color];
    var count = 0;
    var child = this.parentNode;
    while((child = child.previousSibling) != null ) count++;
    guess[Math.floor(count/2)-1]=color;
}

var setUp = function setUp(){
    guess = [0,0,0,0];
    var i;
    for(i=1; i<=4; i++){
        board[turn].children[i].children[0].addEventListener("click",setColor);
        if(turn!=0) board[turn-1].children[i].children[0].removeEventListener("click",setColor);
    }
}

setUp();

var submit = function submit(){
    var r = 0;
    var w = 0;
    var j;
    for(j=0; j<4; j++){
        if(guess[j]==code[j]){
            r++;
        }
    }
    for(j=0; j<7; j++){
	var x = 0;
	var y = 0;
	var k;
	for(k=0; k<4; k++){
	    if(guess[k]==j) x++;
	    if(code[k]==j) y++;
	}
	w+=Math.min(x,y);
    }
    w-=r;
    if(guess[0]==0 || guess[1]==0 || guess[2]==0 || guess[3]==0){
        alert("You must place a peg in every slot of row "+(turn+1)+" in order to submit a guess!");
    }else if(r==4){
        alert("You win!");
    }else if (turn == 9){
        alert("You lose! The code was "+code.toString()+".");
    }else{
        board[turn].children[5].innerHTML = "# of right color and right place: " + r + "<br># of right color but wrong place: " + w;
        turn++;
        setUp();
    }
}

var button = document.getElementById("button");
button.addEventListener("click",submit);
