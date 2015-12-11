//google places:AIzaSyCtc4ULXKSocmcjjHzp-T78-xH53a0Sz2w

var map;

function mapinit(){
    map = new google.maps.Map(document.getElementById('map-canvas'), {
	zoom: 2,
	center: {lat: 0, lng: 0} 
    });

    map.addListener('click', function(e){
	return e;
    });
} 

window.addEventListener('load', mapinit);
