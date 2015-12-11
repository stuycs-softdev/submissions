console.log("running!");
editCurrent = function editCurrent(data){
    console.log(data);
    console.log("code is about to break");
    var currentProfile = document.getElementById("currentProfile");
    //console.log("profile:");
    //console.log(currentProfile);
    currentProfile.innerhtml = data["name"];
    console.log(currentProfile.innerhtml)
}

getNewProfile = function getNewProfile(){
    $.get("/getProfile",editCurrent);	 
}
console.log("getting");
getNewProfile();
    