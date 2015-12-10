var displayData=function displatData(){
    function(){
	var d=$("#data").val();
	//$("#data").val("");
	$.getJSON("data.csv", function(d){
	    //get a random line of data
	    /*
	    $("#result").text(d.result);
	    $("#thelist").append($("<li>"+d.result+"</li>"));
	    */
	});
    }	
}

var myInterval = setInterval(displayData,1000);
