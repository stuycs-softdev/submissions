console.log("STARTING");

var testparam = function testparam(s){
    $.getJSON("/results",{data:s},function(r){
	     console.log(r);
	     console.log(r.result);
    });
};

//gets result from upcase page and uses it here
$("#submit_button").click(function(){
    var data = $("#data").val();
    $("#data").val("");
    
    $.getJSON("/results",{data:data},function(r){
       console.log("You entered...");
	     console.log(r.result);
       //$("#thelist").append($("<li>"+r.result+"</li>"));
       //$("#thelist").append($("<li>"+r+"</li>"));
       document.getElementById("p1").innerHTML = r;
    });
});

