var counter = 0;

var getProfile = function getProfile(){
    $.getJSON("/profile",{data:counter},function(d){
	counter++;
	if (counter == 100){
	    counter = 0;
	}
	$("#name").html(d.first+" "+d.last);
	$("#ID").html(d.ID);
	$("#email").html(d.email);
	$("#gender").html(d.gender);
	$("#country").html(d.country);
	$("#drugs").html(d.drugs);
	$("#name").css("color", d.color);
	$("#random").css("border-color", d.color);
	$("#search").css("border-color", d.color);
	/*
	var url = "https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=%s&userip=192.168.1.112%"+String(d.drugs);
	var img = $("<img />").attr("src", url);
	$("#drugimg").append(img);*/
	
    });
};

interval = setInterval(getProfile, 2000);

var searchProfile = function searchProfile(query){
	$.getJSON("/profile",{data:-1},function(d){
		result=[]		
		//console.log(d);
		//console.log(d.length);
		for (i=0; i<d.length; i++){
			query = query.toLowerCase();
			if (d[i].first.toLowerCase().indexOf(query)!=-1 ||
			    d[i].last.toLowerCase().indexOf(query)!=-1 ||
			    d[i].email.toLowerCase().indexOf(query)!=-1 ||
			    d[i].gender.toLowerCase().indexOf(query)!=-1 ||
			    d[i].country.toLowerCase().indexOf(query)!=-1 ||
			    d[i].drugs.toLowerCase().indexOf(query)!=-1){
				result.push(d[i]);
			}
			if (result.length>10){
				break;
			}
		}
		//console.log(result);
		displayResults(result);
	});
};

var displayResults = function displayResults(res){
	var tabl = document.getElementById("results");
	tabl.innerHTML = "";
	var newRow = tabl.insertRow(tabl.rows.length);
	var newCell = newRow.insertCell(0);
	var newText = document.createTextNode("Name");
	newCell.appendChild(newText);
	newCell = newRow.insertCell(1);
	newText = document.createTextNode("Email");
	newCell.appendChild(newText);
	newCell = newRow.insertCell(2);
	newText = document.createTextNode("Gender");
	newCell.appendChild(newText);
	newCell = newRow.insertCell(3);
	newText = document.createTextNode("Country");
	newCell.appendChild(newText);
	newCell = newRow.insertCell(4);
	newText = document.createTextNode("Drug");
	newCell.appendChild(newText);
	for (i=0; i<res.length; i++){
		newRow = tabl.insertRow(tabl.rows.length);
		newCell = newRow.insertCell(0);
		newText = document.createTextNode(res[i].first+" "+res[i].last)
		newCell.appendChild(newText);
		newCell = newRow.insertCell(1);
		newText = document.createTextNode(res[i].email)
		newCell.appendChild(newText);
		newCell = newRow.insertCell(2);
		newText = document.createTextNode(res[i].gender)
		newCell.appendChild(newText);
		newCell = newRow.insertCell(3);
		newText = document.createTextNode(res[i].country)
		newCell.appendChild(newText);
		newCell = newRow.insertCell(4);
		newText = document.createTextNode(res[i].drugs)
		newCell.appendChild(newText);					
	}
	console.log("done");
}

$("#button").click(function(){
    var data = document.getElementById("query").value;
    searchProfile(data);
});
