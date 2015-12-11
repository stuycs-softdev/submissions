console.log("Loaded js");

var key = "c1317daa479302572934e2b3f702d523:1:73728355";


var findList = function findList(){
		var list = document.getElementById("sellist"); 
		var listname = list.options[list.selectedIndex].id;
		var num = document.getElementById("number").value;

		var url = "http://api.nytimes.com/svc/books/v2/lists/" + listname + ".json";
		
		console.log("listname: " + listname);

		$.get(url, {'api-key': key, "response-format": "jsonp"}, function(data){
				updateList(data);
		});
};


var updateList = function updateList(data){
		console.log(data);
		var results = data["results"];
		console.log(results);

		var list = document.getElementById("booklist");

		for (var i = 0 ; i < results.length ; i++){
				
				var details = results[i]["book_details"][0];
				var title = details["title"];
				var author = details["author"];
				var pic = details["book_image"];
				var descript = details["description"];
				
				var el = document.createElement("a");
				el.classList.add("list-group-item");

				var img = document.createElement("img");
				img.src = pic;

				//console.log(details);
				//console.log(details[0]);

				el.appendChild(img);

				list.appendChild(el);
		}
};

document.getElementById("submit").addEventListener("click", function(e){
		e.preventDefault();
		findList();
});
