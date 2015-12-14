console.log("Initiate program");

var changeMar = function changeMar(e){
    $.get("/marquee",function(i){
	var mar = document.getElementById("rol");
	$("marquee").html(i);
    });
};

var b = document.getElementById("b");
b.addEventListener("click",search);

var search = function search(e){
    console.log("Testing");
    $.get("/contentload",function(i){
	console.log("Check Search Again");
	var tbl = document.getElementById("res");
	var a = i.split("\n");
	var typ = document.getElementById("plce").innerHTML;
	var bor = document.getElementById("boro").innerHTML;
	for(q in a){
	    var t1 = a[q].split("-");
	    var t2 = a[q].split(",");
	    if(typ.localeCompare(t1[0]) == 0 && bor.localeCompare(t2[t2.length-1]) == 0){ #LOOK AT BOTTOM OF FILE
		var row = $("<tr>");
		var e1 = $("<td>");
		var e2 = $("<td>");
		e1.append(t1[0]);
		e2.append(t2[2]);
		row.appendChild(e1);
		row.appendChild(e2);
		tbl.appendChild(row);
	    };
	};
    });
};

console.log("Testing2");

var myInterval = setInterval(changeMar,1000);


'''In the CVS, there was a row that had several ',' so the boro was NOT the 3rd split element. I made it take the last element in the array, it should work. 
For an example, look in LINE 21 of the CVS'''