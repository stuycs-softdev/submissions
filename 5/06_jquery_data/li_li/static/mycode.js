console.log("javascript loaded");

//random results
var displayRandomData=function displayRandomData(){
    $.getJSON("/loop",function (d){
	var info="";
	var ids=["First Name", "Last Name", "Email","Address","Country"];
	//$.each(d, function(key, val){
	    //info+=ids[key]+" : "+val+"<br>";
	//});
	info+=ids[0]+" : "+d["first"]+"<br>"
	info+=ids[1]+" : "+d["last"]+"<br>"
	info+=ids[2]+" : "+d["email"]+"<br>"
	info+=ids[3]+" : "+d["address"]+"<br>"
	info+=ids[4]+" : "+d["country"]+"<br>"

	var s=document.getElementById("randData");
	s.innerHTML=info;
	       
    });
};

var myInterval = setInterval(displayRandomData,2000);



//search results
var displaySearchData=function displaySearchData(){
    //console.log("clicking clicking!");
    $.getJSON("/search",function (d){
	//console.log("searching searching");
	var info2="";
	var ids2=["First Name", "Last Name", "Email","Address","Country"];
	//$.each(d, function(key2, val2){
	    //info2+=ids2[key2]+" : "+val2+"<br>";
	//});
	info2+=ids2[0]+" : "+d["first"]+"<br>";
	info2+=ids2[1]+" : "+d["last"]+"<br>";
	info2+=ids2[2]+" : "+d["email"]+"<br>";
	info2+=ids2[3]+" : "+d["address"]+"<br>";
	info2+=ids2[4]+" : "+d["country"]+"<br>";

	var s2=document.getElementById("searchData");
	s2.innerHTML=info2;
	       
    });
};



$('#b').click(displaySearchData);

