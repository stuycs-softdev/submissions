var getstuff = function(e){
    var Http = new XMLHttpRequest({mozSystem:true});
    var category = "sports";
    //var category = document.getElementById("form-input").value;
    var url = "http://api.nytimes.com/svc/topstories/v1/" + category + ".jsonp?callback=callbackTopStories&api-key=8cdfe439659b811ba7bd539c4c047ad5:4:73721357";
    Http.open("GET",url,true);
    Http.send();
    console.log(Http.responseText);
    return Http.responseText;
};

var submit = document.getElementById("form-btn");
submit.addEventListener('click',getstuff);


