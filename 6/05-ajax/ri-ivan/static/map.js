var map;

function mapinit(){
    map = new google.maps.Map(document.getElementById('map-canvas'), {
	zoom: 40,
	center: {lat: 0, lng: 0} 
    });

    map.addListener('click', function(e){
	console.log(e.latLng);
    });
} 
