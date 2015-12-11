

//adds n percentage points to the hunger progress bar
var updateHunger = function updateHunger(n) {
    newPercent = getHunger() + n + '%';
    $("#hunger")[0].style.width = newPercent;
    $("#hunger").text(newPercent);
    if ((getHunger()<=50) && (getHunger()>=25)) {
        $("#bubble").attr('src', 'static/speech.png');
    } 
    else if (getHunger()<25) {
         $("#pet").attr('src', 'static/sadcat.gif');
         $("#bubble").attr('src', '');
    }
    else {
        $("#bubble").attr('src', '');
        $("#pet").attr('src', 'static/cat.png');
    } 
    
}

//returns the value of the hunger progress bar
var getHunger = function getHunger(){
    var h = $("#hunger")[0].style.width;
    return parseFloat(h);
}

//changes temp based on location
//calls feels()
var temp = function temp(location){
    $('#loc').text(location);
    $.get("/temp", {city:location}, function(d){
	      $("#temp").text(d + " " + decodeURI('%C2%B0') + "F")
        feels(d);});
}

//Changes how the pet is feeling based on hunger and temperature
var feels = function feels(temp){
    h = getHunger();
    if (h < 50){
        if (temp < 68){
            $("#feels").text("hungry and cold");
        } else {
            $("#feels").text("hungry");
        }
    } else if (temp < 68){
        $("#feels").text("cold");
    } else {
        $("#feels").text("happy");
    }
}

locButtonCallback = function(e){
    newCity = $("#newLoc").val();
    temp(newCity);
    $("#newLoc").val("");
};

//updates the Temperature and Hunger levels
var updateEverything = function updateEverything(){
    loc = $('#loc').text();
    temp(loc);
    updateHunger(-1);
}

var myInterval;
myInterval = setInterval(updateEverything, 5000);            

feedPet = function(){
    if (getHunger() <= 95) {
        updateHunger(5);
    }
    else {
        diff = 100 - getHunger();
        updateHunger(diff);
    }
}

updateHunger(-40);
