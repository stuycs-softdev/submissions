var api_key = "024b40b8c1e9ef1333054858a907a687:6:73721357";
var ajaxResult;
var rot;
var snip = new Array(20);
var author = new Array(20);
var url = new Array(20);
var title = new Array(20);
var artnum = 0;
var rotnum = 10;

var timeout; //used for the recursive callback

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
	    if(temp[i-10].byline !== null){
		author[i] = temp[i-10].byline.original;
	    }
	    url[i] = temp[i-10].web_url;
	    title[i] = temp[i-10].headline.main;
	}
    }
});

var getstuff = function(query){
    console.log("QUERY: " + query);
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
		title[i] = temp[i].headline.main;
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
    console.log("RIGHT");
    if (artnum == 10){
	artnum = 0;
    }
    else{
	artnum ++;
    }
};

var left = function(){
    if (artnum == -1){
	artnum = 9;
    }
    else{
	artnum --;
    }
};

var checktext = function() {
    console.log($("#form-input").val());
    if( $("#form-input").val() != "" ) {
	getstuff($("#form-input").val());
    }
};

var nextNotice = function() {
    if (ajaxResult == undefined) {
	clearTimeout(timeout);
	timeOut = setTimeout(nextNotice, 5000);

	$("#title").fadeOut(function() {
	    $("#title").text(title[rotnum]);
	}).fadeIn();

	$("#author").fadeOut(function() {
	    $("#author").html("<small>" + author[rotnum] + "</small>");
	}).fadeIn();

	$("#summary").fadeOut(function() {
	    $("#summary").html("<big>" + snip[rotnum] + "</big>");
	}).fadeIn();

	$("#link").fadeOut(function() {

	    $("#link").text("Link to Article");

	    $("#link").attr({
		"href" : url[rotnum]
	    });
	}).fadeIn();
	
	rotate();
    }
    else {
	clearTimeout(timeout);
	timeOut = setTimeout(nextNotice, 5000);
	    
	$("#title").fadeOut(function() {
	    $("#title").text(title[artnum]);
	}).fadeIn();

	$("#author").fadeOut(function() {
	    $("#author").html("<small>" + author[artnum] + "</small>");
	}).fadeIn();

	$("#summary").fadeOut(function() {
	    $("#summary").html("<big>" + snip[artnum] + "</big>");
	}).fadeIn();

	$("#link").fadeOut(function() {
	    $("#link").text("Link to Article");

	    $("#link").attr({
		"href" : url[artnum]
	    });
	}).fadeIn();

	right();
    }
};

var submit = document.getElementById("form-btn");
submit.addEventListener('click', checktext);

var goLeft = document.getElementById("left");
goLeft.addEventListener('click', left);

var goRight = document.getElementById("right");
goRight.addEventListener('click', right);

nextNotice();
