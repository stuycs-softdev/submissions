var csv = [];
$.get("/getdata", function(d) {
    console.log("js getdata started");
    //console.log("getdata returned: "+d);        //this works
    csv.value = d;
    console.log("js getdata ended");
    //console.log("this is csv: " +csv.value);        //this works
});
//console.log(csv);  this gets read before /getdata runs

var getprofile = function getprofile(d) {
    var data = [];
    $.get("/getprofile", function(d) {
	console.log("js getprofile started");
	data.value = d;
	console.log("js getprofile ended");
	console.log(data.value);
	$("#first").text("HELLO" + d[1]);
	$("#last").text(data.value[1]);
	//firstname.value = data[1];
	//lastname.value = data[2];
    });
    //console.log(data.value)       //after /getprofile, data loses its value
    
};

var myevent;
function startit() {
    console.log("timer started");
    myevent = setInterval(getprofile,5000);
}
function stopit() {
    console.log("timer ended");
    window.clearTimeout(myevent);
}
document.getElementById("start").addEventListener('click',startit);
document.getElementById("stop").addEventListener('click',stopit);
