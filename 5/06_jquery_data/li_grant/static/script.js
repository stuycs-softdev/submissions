$(document).ready(function() {
    var rand = function(){
	$.get("/random", function(data){
	    $("#random .name span").text(data.first + " " + data.last);
	    $("#random .phone span").text(data.phone);
	    $("#random .email span").text(data.email);
	    $("#random .address span").text(data.street);
	})
    };

    /* Alternate method for random

    var random = function(){
	$.get("/random", function(d){
	    $.getJSON("static/data.json", function(d){
		var profile = d[Math.floor(Math.random()*d.length)];
		$("#random .name span").text(profile.first + " " + profile.last);
		$("#random .phone span").text(profile.phone);
		$("#random .email span").text(profile.email);
		$("#random .address span").text(profile.street);
	    });
	});
    };
    */

    rand();

    setInterval(rand, 2000);

    $("#search").click(function(e) {
	e.preventDefault();

	var first = $("#firstname").val();
	var last = $("#lastname").val();
	var url;

	if (first) {
	    url = "/search?first=" + first;
	} else if (last) {
	    url = "/search?last=" + last;
	} else {
	    return;
	}

	$.get(url, function(data) {
	    $("#searchResult").removeClass('panel-danger');
	    if (data == 'Not Found') {
		$("#searchResult").addClass('panel-danger');
	    } else {
		$("#searchResult .name span").text(data.first + " " + data.last);
		$("#searchResult .phone span").text(data.phone);
		$("#searchResult .email span").text(data.email);
		$("#searchResult .address span").text(data.street);
	    }
	    $("#searchResult").show();
	});
    })
})




//var test = function(){
//  $.get("/getprofile",
