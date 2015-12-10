console.log("HELLO");

var printresults = function(d){
		console.log(d);
};

var timingTest1 = function(){

		console.log("slow");
		$.get("/getslow",printresults);
		console.log("BACK FROM SLOW");

		console.log("regular");
		$.get("/getstuff",printresults);
		console.log("BACK FROM REGULAR");


		console.log("FAST");
		$.get("/getfast",printresults);
		console.log("BACK FROM FAST");
		
		
};

var stuffdemo = function(){

		console.log("Calling getstuff");

		$.get("/getstuff",function(d){
				console.log("getstuff returned: "+d);
		});


		
		console.log("back from getstuff");

};
