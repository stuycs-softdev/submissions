console.log("java");
var displayData=function displayData(){
    function(){
	var d=$("#randData").val();
	//$("#data").val("");
	$.getJSON("/loop", function(d){
	    console.log(this);
	    
	    //get a random line of data
	    
	    
	    $("#randData").text(d.result);
	    /*
	    $("#thelist").append($("<li>"+d.result+"</li>"));
	    */
	});
    }	
}

var myInterval = setInterval(displayData,1000);
