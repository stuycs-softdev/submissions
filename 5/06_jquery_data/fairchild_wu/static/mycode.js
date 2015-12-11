console.log("running!");
var editCurrent = function editCurrent(data){
    console.log(data);
    console.log("code is about to break");
    var currentProfile = document.getElementById("currentProfile");
    //console.log("profile:");
    //console.log(currentProfile);
    currentProfile.innerHTML = data;
    console.log(currentProfile);
    console.log(currentProfile.innerHTML)
}

getNewProfile = function getNewProfile(){
    $.get("/getProfile",editCurrent);	 
}
console.log("getting");
getNewProfile();
    
