var getprofile = function getprofile(e) {
    $.get("/getprofile", function() {
	console.log("js getprofile started");
	
	console.log("js getprofile ended");
    });
};

var myevent;
function startit() {
    console.log("it started");
    myevent = setInterval(getprofile,5000);
}
function stopit() {
    window.clearTimeout(myevent);
}
document.getElementById("start").addEventListener('click',startit);
document.getElementById("stop").addEventListener('click',stopit);
