var getdata = function getdata(e) {
    data = $.get("/getdata", function() {
	console.log("js getdata started");
	
	console.log("js getdata ended");
    });
    console.log(data)
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

$.get("/getprofile", function() {
    console.log("js getprofile started");
    
    console.log("js getprofile ended");
});
