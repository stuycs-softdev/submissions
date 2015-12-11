
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

getSpecificProfile = function getSpecificProfile(data){
    console.log(data);
    var searched = document.getElementById("searched");
    searched.innerHTML = data;
    $.get("/getImage",setImage);    
}

getSearchedProfile = function getSearchedProfile(){
    console.log("button pressed");
    var text = document.getElementById("search");
    console.log("searching: "+text.value);
    $.get("/search/"+text.value,getSpecificProfile);
}

var button = document.getElementById("searchbutton");
button.addEventListener("click",getSearchedProfile);

getNewProfile();
setInterval(getNewProfile,5000);    
