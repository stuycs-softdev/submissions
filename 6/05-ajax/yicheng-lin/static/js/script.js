/**
 * Client side script.
 */

var QUERY = null;
var map = null;

google.maps.event.addDomListener(window, "load", function() {
  $("#map").hide();

  $("#searchbar").submit(function(event) {
    event.preventDefault();
    map = new google.maps.Map(document.getElementById("map"), {
      streetViewControl: false,
      zoom: 8
    });
    $("#map").show();

    QUERY = {
      address: $("#address").val()
    };

    var plantCircles = [];
    var plantMarkers = [];
    var plantLabels = [];

    $.getJSON("/result", QUERY, function(data) {
      var queriedLoc = new google.maps.LatLng(data.lat, data.lng);
      map.setCenter(queriedLoc);
      var youMarker = new google.maps.Marker({
        position: queriedLoc, map: map
      });

      for (var i = 0; i < data.nearby_plants.length; ++i) {
        var plantLoc = new google.maps.LatLng(
          data.nearby_plants[i].lat, data.nearby_plants[i].lng);
        plantCircles.push(plantCircle = new google.maps.Circle({
          strokeOpacity: 0,
          fillColor: "red",
          fillOpacity: 0.1,
          center: {
            lat: data.nearby_plants[i].lat,
            lng: data.nearby_plants[i].lng
          },
          radius: 40000,
          map: map
        }));
        plantMarkers.push(new google.maps.Marker({
          position: plantLoc,
          map: map
        }));
        plantLabels.push(new MapLabel({
          text: data.nearby_plants[i].name,
          fontSize: 12,
          fontColor: "blue",
          position: plantLoc,
          map: map
        }));
      }
    });

    setInterval(function() {
      $.getJSON("/result", QUERY, function(data) {
        for (var i = 0; i < plantCircles.length; ++i) {
          plantCircles[i].setMap(null);
          plantMarkers[i].setMap(null);
          plantLabels[i].setMap(null);
        };
        plantCircles = [];
        plantMarkers = [];
        plantLabels = [];

        for (var i = 0; i < data.nearby_plants.length; ++i) {
          var plantLoc = new google.maps.LatLng(
            data.nearby_plants[i].lat, data.nearby_plants[i].lng);
          plantCircles.push(plantCircle = new google.maps.Circle({
            strokeOpacity: 0,
            fillColor: "red",
            fillOpacity: 0.1,
            center: {
              lat: data.nearby_plants[i].lat,
              lng: data.nearby_plants[i].lng
            },
            radius: 40000,
            map: map
          }));
          plantMarkers.push(new google.maps.Marker({
            position: plantLoc,
            map: map
          }));
          plantLabels.push(new MapLabel({
            text: data.nearby_plants[i].name + ' - ' +
                data.nearby_plants[i].current_price,
            fontSize: 12,
            fontColor: "blue",
            position: plantLoc,
            map: map
          }));
        }
      });
    }, 1000);
  });
});
