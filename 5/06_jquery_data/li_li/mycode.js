console.log("javascript loaded");

var displayData=function displayData(){
    $.getJSON("/loop", function (d){
	var s=document.getElementById("randData");
	s.innerHTML="sas"
    });
}

//var myInterval = setInterval(displayData,1000);
