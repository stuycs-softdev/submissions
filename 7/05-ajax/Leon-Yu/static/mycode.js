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
       document.getElementById("maxTemp").innerHTML = r['main']['temp_max'];
       document.getElementById("minTemp").innerHTML = r['main']['temp_min'];
       document.getElementById("temp").innerHTML = r['main']['temp'];
       //document.getElementById("minTemp").innerHTML = r['main']['temp_max'];
           //return render_template("home.html", temp=temp, maxTemp=r['main']['temp_max'], minTemp=r['main']['temp_min'])

    });
});

