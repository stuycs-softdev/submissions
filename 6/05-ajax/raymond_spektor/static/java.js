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

index = 0;
favlist = [150,730,162,688,556];
$("#start").click(function(){
	$.get('/carousel', {data:favlist[index]}, function(r){
		$("#cImg").attr("src",r);
	});
	setInterval(function(){
		if(index >= favlist.length-1)
			index = 0;
		else
			index += 1;
		$.get('/carousel', {data:favlist[index]}, function(r){
			$("#cImg").attr("src",r);
		});
	},10000);
})
