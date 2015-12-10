
var stripe = function(sel){
		var items = $(sel);

		items.each(function(i,item){
				if (i%2==0){
						$(item).addClass('green');
				} else {
						$(item).addClass('red');
				}
		});


};
