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
    //var data = JSON.parse(d);
    $.get("/getprofile", function(d) {
	console.log("js getprofile started");
	var data = JSON.parse(d);
	console.log("js getprofile ended");
	$("#first").text(data.first);
	$("#last").text(data.last);
	$("#age").text(data.age);
	$("#email").text(data.email);
	$("#country").text(data.country);
	//$("#picture").html("<img src="+ data.picture +" width='300' height='267' alt=''>");
    });
    //console.log(data.value)       //after /getprofile, data loses its value
    
};

var findprofile = function findprofile(input) {
    $.get("/findprofile", {data:input}, function(d){
	console.log("js findprofile started");
	var data = JSON.parse(d);
	console.log("js findprofile ended");
	$("#first").text(data.first);
	$("#last").text(data.last);
	$("#age").text(data.age);
	$("#email").text(data.email);
	$("#country").text(data.country);
    });
    stopit();
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
function searchit() {
    console.log("searching person");
    var input = document.getElementById("input").value;
    findprofile(input)
}
document.getElementById("start").addEventListener('click',startit);
document.getElementById("stop").addEventListener('click',stopit);
document.getElementById("search").addEventListener('click',searchit);
getprofile();
