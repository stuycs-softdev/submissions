//google places:AIzaSyCtc4ULXKSocmcjjHzp-T78-xH53a0Sz2w

var map;
var answer;

var mapinit = function mapinit(){
    map = new google.maps.Map(document.getElementById('map-canvas'), {
	zoom: 2,
	center: {lat: 0, lng: 0} 
    });

    map.addListener('click', checkAnswer);
};

var checkAnswer = function checkAnswer(e){
    var guess = {lat: e.latLng.lat(), lng:e.latLng.lng()};
};

window.addEventListener('load', mapinit);
