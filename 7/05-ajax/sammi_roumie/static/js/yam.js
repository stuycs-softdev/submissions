$("#submit").click(function(){
    change()
});

var change = function change() {
    $.getJSON("/profile",function(r) {
	var random = Math.floor((Math.random() * 100));
	r=r["data"][random]
	name = r[0];
	$('#name').text(r[0]);
	$('#phone').text(r[1]);
	$('#email').text(r[2]);
	$('#street').text(r[3]);
	$('#zip').text(r[4]);
	$('#card').text(r[5]);
	$('#pin').text(r[6]);
	$.getJSON("/image", {name:r[0]},function(t) {
	    $('#image').attr("src",t["link"]);
	});
    });
}

var myInterval;
myInterval = setInterval(change,5000);




