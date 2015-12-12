var STREET_VIEW_URL = "https://maps.googleapis.com/maps/api/streetview?";
var KEY = "AIzaSyCtc4ULXKSocmcjjHzp-T78-xH53a0Sz2w";

var map;
var time;
var timer;

var mapinit = function mapinit(){
    map = new google.maps.Map(document.getElementById('map-canvas'), {
	zoom: 2,
	center: {lat: 0, lng: 0},
	scrollwheel: false,
	draggable: false,
	disableDoubleClickZoom: true
    });
    time = 30;
    newRound();
    setInterval(function(){
	time--;
	document.getElementById("time").innerHTML = "You have " + time + " seconds left";
    },1000);
};

var newRound = function newRound(){
    clearInterval(timer);
    time = 30;
    google.maps.event.clearListeners(map, 'click');
    $.get("/getCoordinates",function (d){
	document.getElementById("street-view").src = getStreetView(d.lat, d.lng)
	map.addListener('click',function(e){
	    checkAnswer(e,d);
	});
    });
    timer = setInterval(newRound, 30000);
}

var checkAnswer = function checkAnswer(e,ans){
    var dist = $.get("/distance", {lat1:ans.lat, lon1: ans.lng, lat2: e.latLng.lat(), lon2: e.latLng.lng()}, function(distance){
	console.log(distance);
	document.getElementById("results").innerHTML = "Actual Spot: "+ans.lat+","+ans.lng+"<br>"+"You Guessed: "+e.latLng.lat()+","+e.latLng.lng()+"<br>Distance was: "+distance;
    });
    newRound();
};

var getStreetView = function getStreetView(lat, lng){
    var size = "size=400x300";
    var location = "location="+lat+","+lng;
    var key = "key="+KEY;
    return STREET_VIEW_URL + size + "&" + location + "&" + key;
}

window.addEventListener('load', mapinit);
