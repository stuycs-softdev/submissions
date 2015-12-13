var api_key = "024b40b8c1e9ef1333054858a907a687:6:73721357";
var ajaxResult;
var rot;
var snip = new Array(20);
var author = new Array(20);
var url = new Array(20);
var artnum = 0;
var rotnum = 10;

//sets up the rotation stuff
$.ajax({
    'type': 'GET',
    'url': 'http://api.nytimes.com/svc/search/v2/articlesearch.json',
    data: {
	'q': "Donald Trump",
	'response-format': "jsonp",
	'api-key': "024b40b8c1e9ef1333054858a907a687:6:73721357",
	'callback': 'svc_search_v2_articlesearch'
    },
    success: function(data) {
	rot = data; //JSON Object
	var i = 10;
	var temp = rot.response.docs;
	for(i;i < 20; i ++){
	    snip[i] = temp[i-10].snippet
	    author[i] = temp[i-10].byline.original;
	    url[i] = temp[i-10].web_url;
	}
    }
});

var getstuff = function(query){
    $.ajax({
	'type': 'GET',
	'url': 'http://api.nytimes.com/svc/search/v2/articlesearch.json',
	data: {
	    'q': query,
	    'response-format': "jsonp",
	    'api-key': "024b40b8c1e9ef1333054858a907a687:6:73721357",
	    'callback': 'svc_search_v2_articlesearch'
	},
	success: function(data) {
	    ajaxResult = data;
	    var i = 0;
	    var temp = ajaxResult.response.docs;
	    for(i;i < 10; i ++){
		snip[i] = temp[i].snippet;
		if(temp[i].byline !== null){
		    author[i] = temp[i].byline.original;
		}
		url[i] = temp[i].web_url;
	    }
	},
	error: function(){
	    alert('Call failed');
	}
    });
};

var rotate = function(){
    if (rotnum == 20){
	rotnum = 10;
    }
    else{
	rotnum ++;
    }
};

var right = function(){
    if (artnum == 10){
	artnum = 0;
    }
    else{
	artnum ++;
    }
};

var checktext = function() {
    console.log($("#form-input").val());
    if( $("#form-input").val() != "" ) {
	getstuff($("#form-input").val());
    }
}
;
var nextNotice = function(e) {
    var timeOut = setTimeout(nextNotice, 5000);
    
    $("#title").text(url[rotnum]);
    $("#author").text(author[rotnum]);
    $("#summary").text(snip[rotnum]);
    
    rotate();
};

var submit = document.getElementById("form-btn");
submit.addEventListener('click', checktext);

nextNotice();