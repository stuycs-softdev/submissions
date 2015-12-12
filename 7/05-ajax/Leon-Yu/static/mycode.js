console.log("STARTING");

var testparam = function testparam(s){
    $.getJSON("/results",{data:s},function(r){
	     console.log(r);
	     console.log(r.result);
    });
};

$("#submit_button").click(function(){
    var data = $("#data").val();
    $("#data").val("");

    $.getJSON("/results",{data:data},function(r){
       document.getElementById("place").innerHTML = r['name'];
       document.getElementById("maxTemp").innerHTML = r['main']['temp_max'];
       document.getElementById("minTemp").innerHTML = r['main']['temp_min'];
       document.getElementById("temp").innerHTML = r['main']['temp'];
       //document.getElementById("minTemp").innerHTML = r['main']['temp_max'];
           //return render_template("home.html", temp=temp, maxTemp=r['main']['temp_max'], minTemp=r['main']['temp_min'])

    });
});


var myInterval;
var zip = 10000;

var incrementZip = function incrementZip(){
  zip+=5;
  console.log(zip);
  var data = zip;


  $.getJSON("/results",{data:data},function(r){
     if(r['name']==undefined){
       incrementZip();
       console.log('hello');
     }
     else{
       document.getElementById("place").innerHTML = r['name'];
       document.getElementById("maxTemp").innerHTML = r['main']['temp_max'];
       document.getElementById("minTemp").innerHTML = r['main']['temp_min'];
       document.getElementById("temp").innerHTML = r['main']['temp'];
     }
   });
};

myInterval = setInterval(incrementZip, 5000);
