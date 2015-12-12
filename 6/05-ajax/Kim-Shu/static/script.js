var api_key = "024b40b8c1e9ef1333054858a907a687:6:73721357";
var ajaxResult = null;
//test code

$.ajax({
    'type': 'GET',
    'url': 'http://api.nytimes.com/svc/search/v2/articlesearch.json',
    data: {
        'q': "hello",
        'response-format': "jsonp",
        'api-key': "024b40b8c1e9ef1333054858a907a687:6:73721357",
        'callback': 'svc_search_v2_articlesearch'
    },
    success: function(data) {
        console.log(data);
    },
    error: function(){
	alert('Call failed');
    }
});


var getstuff = function(query){
    console.log(query);
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
	    ajaxResult = JSON.stringify(data);
	},
	error: function(){
	    alert('Call failed');
	}
    });
};

var getdata = function(data){
    return data;
}

var rotate = function(e){
    $.ajax({
	'type': 'GET',
	'url': 'http://api.nytimes.com/svc/search/v2/articlesearch.json',
	data: {
	    'q': "trump",
	    'response-format': "jsonp",
	    'api-key': "024b40b8c1e9ef1333054858a907a687:6:73721357",
	    'callback': 'svc_search_v2_articlesearch'
	},
	success: function(data) {
	    ajaxResult = JSON.stringify(data);
	}
    });
};

var checktext = function() {
    console.log($("#form-input").val());
    if( $("#form-input").val() != "" ) {
	getstuff($("#form-input").val());
    }
}

var submit = document.getElementById("form-btn");
submit.addEventListener('click', checktext);
