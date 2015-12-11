var changeImg = function changeImg(){
	$.ajax({
		url: '/getImg',
		data: $('form').serialize(),
		type: 'POST',
		success: function(response){
			$('#test').attr("src",response);
		}
	})

	console.log("works");
}

$("#update").click(function(){
	changeImg();
});

$(function(){
	start();
	function start(){
		setTimeout(start,1000);
		$.getJSON('/carousel',function(response){
			console.log(response);
			$('cImg').attr("src",response);
		});
	}
});


