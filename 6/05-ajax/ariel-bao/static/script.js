console.log("Loaded js");

var key = "c1317daa479302572934e2b3f702d523:1:73728355";

/************ List Based on User Input **************/

var findList = function findList(){
		var list = document.getElementById("sellist"); 
		var listname = list.options[list.selectedIndex].id;

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
		$("#booklist").empty();

		var num = document.getElementById("number").value;

		for (var i = 0 ; i < results.length && i < num; i++){
				
				var details = results[i]["book_details"][0];
				var title = details["title"];
				var author = details["author"];
				var pic = details["book_image"];
				var descript = details["description"];

/*				var el = document.createElement("a");
				el.classList.add("list-group-item");

				var img = document.createElement("img");
				img.src = pic;

				//console.log(details);
				//console.log(details[0]);

				el.appendChild(img);
				list.appendChild(el);
*/
				var item = "<a class='list-group-item'>";
			  	item += "<img src='"+pic+"' alt='No Image.'>";
				item += "<h5>"+title+"</h5>";
				item += "<h6>"+author+"</h6>";
				item += "</a>";	

				$("#booklist").append(item);
		}
};

document.getElementById("submit").addEventListener("click", function(e){
		e.preventDefault();
		findList();
});

/***************** List Updating on Interval *********************/

var defaultList = function defaultList() {
	var listname = "combined-print-and-e-book-fiction"; 
	var url = "http://api.nytimes.com/svc/books/v2/lists/" + listname + ".json";
	console.log("listname: " + listname);

	$("#listtitle").empty();
	$("#listtitle").append("Combined Print and E-Book Fiction");
	$.get(url, {'api-key': key, "response-format": "jsonp"}, function(data){
			updateIntervalList(data);
	});
};
defaultList();

var listOptions = document.getElementById("sellist").options;
console.log(listOptions);
var randomList = function randomList() {
	var rand = Math.floor(Math.random() * listOptions.length);
	console.log("rand: " + rand);
	var listname = listOptions[rand].id; 
	var url = "http://api.nytimes.com/svc/books/v2/lists/" + listname + ".json";
	console.log("listname: " + listname);

	$("#listtitle").empty();
	$("#listtitle").append(listOptions[rand].value);
	$.get(url, {'api-key': key, "response-format": "jsonp"}, function(data){
			updateIntervalList(data);
	});
};

var updateIntervalList = function updateIntervalList(data) {
	var results = data["results"];

	$("#intervallist").empty();
	for (var i = 0; i < results.length && i < 10; i++) {
		var details = results[i]["book_details"][0];
		var title = details["title"];
		var author = details["author"];

		var item = "<li class='list-group-item'>";
		item += "<span class='num'>"+(i+1)+"  </span>";
		item += "<u>"+title+"</u>, "+author;
		item += "</li>";	

		$("#intervallist").append(item);
	}
};

var time = 0;
var intervalList = function intervalList() {
	console.log("updating "+time);
	time += 1;
	randomList();
};

var onRandom = false;
var randInterval;
$("#random").click(function() {
	if (!onRandom) {
		console.log("randomizing");
		onRandom = true;
		randomList();
		randInterval = setInterval(intervalList, 5000);
	}
});
$("#default").click(function() {
	if (onRandom) {
		clearInterval(randInterval);
		onRandom = false;
		defaultList();
	}
});
