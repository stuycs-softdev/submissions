console.log("HELLO");


var demo1 = function demo1(){
		console.log("Calling getstuff");
		$.get("/getslow",function(d){
				console.log("We got: "+d);});
		console.log("back from getstuff\n");
};

var printresult = function printresult(d){
		console.log("We got: "+d);
};

var demo2 = function demo2() {

		console.log("Calling getslow");
		$.get("/getslow",function(){
				console.log("Back from getslow\n\n");
				console.log("Calling getfast");
				$.get("/getfast",printresult);
				console.log("Back from getfast\n\n");
		});

		
		console.log("Calling Getstuff");
		$.get("/getstuff",printresult);
		console.log("Back from getstuff\n\n");



};

var testparam = function testparam(){

		$.getJSON("/upcase",{data:'Hello'},function(r){
				console.log(r);
				console.log(r.result);

		});

};


$("#b").click(function(){
		var data = $("#data").val();
		$("#data").val("");

		$.getJSON("/upcase",{data:data},function(r){
				$("#result").text(r.result);
				$("#thelist").append($("<li>"+r.result+"</li>"));
		});
});
