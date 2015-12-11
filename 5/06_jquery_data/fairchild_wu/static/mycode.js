//console.log("running!");
var editCurrent = function editCurrent(data){
   // console.log(data);
   // console.log("code is about to break");
    var currentProfile = document.getElementById("currentProfile");
    //console.log("profile:");
    //console.log(currentProfile);
    currentProfile.innerHTML = data;
//    console.log(currentProfile);
    console.log(currentProfile.innerHTML)
}

var setImage = function setImage(data){
    var currentProfile = document.getElementById("currentProfile");
    currentProfile.innerHTML+=data;
}
getNewProfile = function getNewProfile(){
    $.get("/getProfile",editCurrent);	 
    $.get("/getImage",setImage);
}
//console.log("getting");
getNewProfile();

setInterval(getNewProfile,5000);    
