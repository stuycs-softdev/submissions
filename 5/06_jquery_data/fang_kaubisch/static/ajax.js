console.log("HELLO (Javascript Loaded)");
var cat = "http://random.cat/meow"

    var getData = function(){
    console.log("Getting new cat");
    $.getJSON(cat,function(data){
	    //console.log(data);                                            
	    $("#cathere").attr("src",data['file']);
        });
}

searchCat("");

// api key = 2d0f6fb08bbdc443a85afa2bb39823fa                                   
var searchurls =
"https://api.flickr.com/services/rest/?method=flickr.photos.search& \           
api_key=2d0f6fb08bbdc443a85afa2bb39823fa&tags=cats,%s%&format=json&nojsoncallba\
ck=1 \                                                                          
&per_page=1&safe_search=1&extras=url_m";
var contexturl =
"https://api.flickr.com/services/rest/?method=flickr.photos.getInfo& \          
api_key=2d0f6fb08bbdc443a85afa2bb39823fa&photo_id=23030495873&format=json&nojso\
ncallback=1";

var searchCat = function searchCat(s){
    var params = s.replace(/ /g, ",");
    var searchurl = searchurls.replace("%s%", params);
    console.log(searchurl);
    console.log("Attempting to access flickr");
    $.getJSON(searchurl,function(data){
            console.log(data);
            $("#flickrhere").attr("src",data['photos']['photo'][0]['url_m']);
            $.getJSON(contexturl,function(data){
                    var flickrurl = data['photo']['urls']['url'][0]['_content']\
			;
                    console.log(flickrurl);
                });
        });
};

console.log("Updating on Interval");
var interval = setInterval(getData,5000);

$("#stop").click(function(){
        console.log("Interval Cleared");
        clearInterval(interval);
});

$("#find").click(function(){
	var data = document.getElementById("params").value;
	searchCat(data);
});
