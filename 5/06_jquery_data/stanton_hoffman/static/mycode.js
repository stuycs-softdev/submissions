console.log("HELLO");

var printresults = function(d){
		console.log(d);
};

var timingTest1 = function(){

		console.log("slow");
		$.get("/getslow",function(){
				console.log("Slow returned");
				console.log("FAST");
				$.get("/getfast",printresults);
				console.log("BACK FROM FAST");
		});
		
		console.log("BACK FROM SLOW");

		console.log("regular");
		$.get("/getstuff",printresults);
		console.log("BACK FROM REGULAR");


		
		
};

var stuffdemo = function(){

		console.log("Calling getstuff");

		$.get("/getstuff",function(d){
				console.log("getstuff returned: "+d);
		});


		
		console.log("back from getstuff");

};

var paramtest = function paramtest(){
		$.getJSON("/upcase",{data:'hello'},function(d){
				console.log(d);
				console.log(d.result);
		});

};


$("#b").click(function(){
		var input = $("#data");
		var d = input.val();
		input.val("");
		$.getJSON("/upcase",{data:d},function(d){
				$("#result").text(d.result);
				$("#thelist").append($("<li>"+d.result+"</li>"));
		});
});
