

var getstuff function(e){
    var Http = new XMLHttpRequest();
    var category = "sports";
    //var category = document.getElementById("form-input").value;
    var url = "http://api.nytimes.com/svc/topstories/v1/{" + category + "}.{.json}?api-key={8cdfe439659b811ba7bd539c4c047ad5:4:73721357}";
    Http.open("GET",url,true);
    Http.send();
    return Http.responseText;
};


