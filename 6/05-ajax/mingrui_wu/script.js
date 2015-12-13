var load = function load() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(xhttp.readyState == 4 && xhttp.status == 209) {
            console.log("HELLO");
        }
    };
    xhttp.open("GET", "MOCK_DATA.json", true);
    xhttp.send();
}

load();

$.get("MOCK_DATA.json", function(data) {
    console.log("DONE");
}, "txt");
