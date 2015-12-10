var getstuff = function(e){
    var Http = new XMLHttpRequest({mozSystem:true});
    var category = "sports";
    //var category = document.getElementById("form-input").value;
    var url = "http://api.nytimes.com/svc/search/v2/articlesearch" + category + ".jsonp?callback=nyt_biz_news_cb&api-key=024b40b8c1e9ef1333054858a907a687:6:73721357";
    Http.open("GET",url,true);
    Http.send();
    console.log(Http.responseText);
    return Http.responseText;
};

var rotate = function(e){
    var Http = new XMLHttpRequest();
    var category = "sports";
    //var category = document.getElementById("form-input").value;
    var url = "http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/1[.json]?api-key=610f642ea004ddd5aae700828e5aeec7:1:73721357";
    Http.open("GET",url,true);
    Http.send();
    console.log(Http.responseText);
    return Http.responseText;
}

var submit = document.getElementById("form-btn");
submit.addEventListener('click',getstuff);


