$(document).ready(function() {

	var imgnum = 2;
	var pickedNum = 2;

	function getImage(i) {
	$.get("/image/" + i, function(data){
		console.log("What");
		console.log(data);
		$("#slideimg").attr("src",data);
	    });
	};

	var slideshow = function slideshow(){
	    getImage(imgnum);
	    if (imgnum < 10)
		imgnum++;
	    else
		imgnum = 1;
	};

	var addPicked = function addPicked(){
		pickedNum = imgnum - 1;
		$.get("/image/" + pickedNum, function(data){
			$("#pickedImg").attr("src",data);
		});
	};

	var bCallback = function(e){
		console.log("working");
		addPicked();
		};

	document.getElementById("addtopicked").addEventListener('click',bCallback);

	setInterval(slideshow,2000);
    });
