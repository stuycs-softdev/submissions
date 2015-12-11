console.log("javascript loaded");

var displayData=function displayData(){
    $.getJSON("/loop",function (d){
	var info=""
	var ids=["First", "Last", "Email","Address","Country"]
	$.each(d, function(key, val){
	    info+=ids[key]+" : "+val+"<br>"
	});
	var s=document.getElementById("randData")
	s.innerHTML=info;
	       
    });
};

var myInterval = setInterval(displayData,1000);
