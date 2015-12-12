console.log("Minesweeper time!");

var makeBoard = function makeBoard(){
    document.body.innerHTML = '    <script src="minesweeper.js"></script>';
    i = 0;
    j = 0;
    mineSweeper = new Array(10);
    gameOver = 0;
    var table = document.createElement("table");
    table.cellPadding = 0;
    table.cellSpacing = 0;
    for(var x = 0; x < 10; x++){
	var tr = document.createElement("tr");
	mineSweeper[x] = new Array(10);
	for(var y = 0;y < 10; y++){
	    var td = document.createElement("td");
	    var div = document.createElement("div");
	    var square = document.createElement("img");
	    square.src = "static/Normal.png";
	    square.style.display = "block";
	    square.height = 50;
	    square.width = 50;
	    square.addEventListener('click', BlowUp);
	    square.addEventListener('contextmenu', Flag);
	    if(Math.random() < 0.1){
		mineSweeper[x][y] = 1;
		div.bomb = 1;
		i++;
	    }else{
		mineSweeper[x][y] = 0;
		div.bomb = 0;
	    }
	    div.x = x;
	    div.y = y;
	    div.appendChild(square);
	    td.appendChild(div);
	    tr.appendChild(td);
	}
	table.appendChild(tr);
    }
    document.body.appendChild(table);
};

var BlowUp = function BlowUp(e){
    if(e.target.src.indexOf("static/Normal.png") == -1){
    }else if(gameOver == 0){
	var table = document.getElementsByTagName("table")[0];
	var parent = e.target.parentNode;
	if(parent.bomb == 1){
	    e.target.src = "static/Bomb.png";
	    gameOver = 1;
	    ResetButton(1);
	}else{
	    j++;
	    var bombs = 0;
	    var x = parent.x;
	    var y = parent.y;
	    if(x > 0 && y > 0 && mineSweeper[x-1][y-1] == 1){
		bombs++;
	    }
	    if(x > 0 && mineSweeper[x-1][y] == 1){
		bombs++;
	    }
	    if(x > 0 && y < 9 && mineSweeper[x-1][y+1] == 1){
		bombs++;
	    }
	    if(y > 0 && mineSweeper[x][y-1] == 1){
		bombs++;
	    }
	    if(y < 9 && mineSweeper[x][y+1] == 1){
		bombs++;
	    }
	    if(x < 9 && y > 0 && mineSweeper[x+1][y-1] == 1){
		bombs++;
	    }
	    if(x < 9 && mineSweeper[x+1][y] == 1){
		bombs++;
	    }
	    if(x < 9 && y < 9 && mineSweeper[x+1][y+1] == 1){
		bombs++;
	    }
	    e.target.src = "static/" + bombs + ".png";
	    if(bombs == 0){
		if(x > 0 && y > 0){
		    table.childNodes[x-1].childNodes[y-1].childNodes[0].childNodes[0].click();
		}
		if(x > 0){
		    table.childNodes[x-1].childNodes[y].childNodes[0].childNodes[0].click();
		}
		if(x > 0 && y < 9){
		    table.childNodes[x-1].childNodes[y+1].childNodes[0].childNodes[0].click();
		}
		if(y > 0){
		    table.childNodes[x].childNodes[y-1].childNodes[0].childNodes[0].click();
		}
		if(y < 9){
		    table.childNodes[x].childNodes[y+1].childNodes[0].childNodes[0].click();
		}
		if(x < 9 && y > 0){
		    table.childNodes[x+1].childNodes[y-1].childNodes[0].childNodes[0].click();
		}
		if(x < 9){
		    table.childNodes[x+1].childNodes[y].childNodes[0].childNodes[0].click();
		}
		if(x < 9 && y < 9){
		    table.childNodes[x+1].childNodes[y+1].childNodes[0].childNodes[0].click();
		}
	    }
	}
    }
    if(i + j == 100){
	gameOver = 1;
	ResetButton(0);
    }
};


var Flag = function Flag(e){
    if(gameOver == 0){
	if(e.target.src.indexOf("static/Normal.png") > -1){
	    e.target.src = "static/Flag.png";
	}else if(e.target.src.indexOf("static/Flag.png") > -1){
	    e.target.src = "static/Normal.png";
	}
    }
}

var ResetButton = function ResetButton(win){
    if(document.getElementsByTagName("button").length == 0){
	var button = document.createElement("button");
	if(win == 0){
	    button.innerHTML = "You Win";
	}else if(win == 1){
	    button.innerHTML = "You Lose";
	}
	button.addEventListener('click', makeBoard);
	document.body.appendChild(button);
    }
}

document.oncontextmenu = function(){
   return false;
};

window.addEventListener('contextmenu', function(e){
    e.preventDefault();
}, false);

makeBoard();
