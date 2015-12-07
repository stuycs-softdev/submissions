console.log("Minesweeper time!");

i = 0;

var makeBoard = function makeBoard(){
    var table = document.createElement("table");
    table.cellPadding = 0;
    table.cellSpacing = 0;
    for(var x = 0; x < 10; x++){
	var tr = document.createElement("tr");
	for(var y = 0;y < 10; y++){
	    var td = document.createElement("td");
	    var square = document.createElement("img");
	    square.src = "static/Normal.png";
	    square.style.display = "block";
	    square.height = 50;
	    square.width = 50;
	    square.addEventListener('click', BlowUp);
	    if(Math.random() < 0.2){
		square.bomb = 1;
		i++;
	    }else{
		square.bomb = 0;
	    }
	    td.appendChild(square);
	    tr.appendChild(td);
	}
	table.appendChild(tr);
    }
    document.body.appendChild(table);
};

var BlowUp = function BlowUp(e){
};

makeBoard();
