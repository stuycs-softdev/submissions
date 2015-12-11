var getprofile = function getprofile(d) {
    data = []
    $.get("/getprofile", function(d) {
	console.log("js getprofile started");
	data = d
	console.log("js getprofile ended");
    });
    console.log(data[0])
};

var myevent;
function startit() {
    console.log("it started");
    myevent = setInterval(getdata,5000);
}
function stopit() {
    console.log("it ended");
    window.clearTimeout(myevent);
}
document.getElementById("start").addEventListener('click',startit);
document.getElementById("stop").addEventListener('click',stopit);


var csv;
$.get("/getdata", function(d) {
    console.log("js getdata started");
    //console.log("getdata returned: "+d);        //this works
    console.log("js getdata ended");
});
$.get("/getprofile", function(d) {
    console.log("js getprofile started");
    console.log("getprofile returned: "+d);
    console.log("js getprofile ended");
});
