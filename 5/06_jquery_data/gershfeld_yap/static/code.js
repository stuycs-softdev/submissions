var searchProfile = function searchProfile(query){
		$.getJSON("/profile",{data:-1},function(d){
				console.log(d);
				console.log(d.result);
		});

};
