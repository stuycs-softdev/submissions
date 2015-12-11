var STREET_VIEW_URL = "https://maps.googleapis.com/maps/api/streetview?";
var KEY = "AIzaSyCtc4ULXKSocmcjjHzp-T78-xH53a0Sz2w";

var map;
var time;

var mapinit = function mapinit(){
    map = new google.maps.Map(document.getElementById('map-canvas'), {
	zoom: 2,
	center: {lat: 0, lng: 0} 
    });

    setInterval(newRound, 60000);
    setInterval(reduceTime, 1000);
};

var newRound = function newRound(){
    console.log('a');
    google.maps.event.clearListeners(map, 'click');
    $.get("/getCoordinates",function (d){
	document.getElementById("street-view").src = getStreetView(d.lat, d.lng);
	map.addListener('click', function(e){
	    checkAnswer(e,answer);
	});
    });
}

var checkAnswer = function checkAnswer(e){
    var dist = $.get("/distance", {lat1: 0, lon1: 0, lat2: e.latLng.lat(), lon2: e.latLng.lng()}, function(distance){
	console.log(distance);
    });
    
};

var getStreetView = function getStreetView(lat, lng){
    var size = "size=400x300";
    var location = "location="+lat+","+lng;
    var key = "key="+KEY;
    return STREET_VIEW_URL + size + "&" + location + "&" + key;
}

window.addEventListener('load', mapinit);