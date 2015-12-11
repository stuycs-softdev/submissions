// JS for the left_panel (Scrolling cities)

var curr_city = 0;

var city_list = ["NYC", "London", "Boston", "Washington DC",
    "Chicago", "Beijing", "Seoul", "Tokyo", "Taipei", "Berlin"];

var scroll_through_city_list = function scroll_through_city_list() {
    $.getJSON("http://localhost:8000/weather/?loc=" + city_list[curr_city], function(res) {
        $("#world_location").text(res["name"]);
        $("#world_conditions").text("Conditions: " + res["wtype"]);
        $("#world_temp").text("Current Temperature: " + res["temp_curr"]);
        $("#world_temp_min").text("Low of: " + res["temp_min"]);
        $("#world_temp_max").text("High of: " + res["temp_max"]);
        // Get the picture
        $.getJSON("http://localhost:8000/picture/?condition=" + res["wtype"], function(pic) {
            // Use DOM to save time
            document.getElementById("left_panel").style.backgroundSize = "cover";
            document.getElementById("left_panel").style.backgroundImage = "url(" + pic["url"] +")";
        });
        curr_city = (curr_city + 1) % city_list.length
    });
};

scroll_through_city_list(); // Load the first one
var city_scroller = setInterval(scroll_through_city_list, 5000);

// JS for the right_panel (Queried)

var lookup_weather = function lookup_weather() {
    var textbox = $("#query_city");
    var loc = textbox.val();
    textbox.val(""); // Clear the query box
    $.getJSON("http://localhost:8000/weather/?loc=" + loc, function(res) {
        $("#query_location").text(res["name"]);
        $("#query_conditions").text("Conditions: " + res["wtype"]);
        $("#query_temp").text("Current Temperature: " + res["temp_curr"]);
        $("#query_temp_min").text("Low of: " + res["temp_min"]);
        $("#query_temp_max").text("High of: " + res["temp_max"]);
        $.getJSON("http://localhost:8000/picture/?condition=" + res["wtype"], function(pic) {
            // Use DOM to save time
            document.getElementById("query_display").style.backgroundSize = "cover";
            document.getElementById("query_display").style.backgroundImage = "url(" + pic["url"] +")";
        });
    });
};

$("#lookup").click(lookup_weather);

