var getProfile = function getProfile(){
		console.log("ll")
		$.getJSON("/profile",{data:2},function(d){
				console.log(d);
				console.log(d.result);
		});

};
