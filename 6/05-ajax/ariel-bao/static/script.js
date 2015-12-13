console.log("Loaded js");


/************ List Based on User Input **************/

$(".dropdown-menu li a").click(function(e){
		e.preventDefault();
		var selText = $(this).text();
		var newText = selText + ' <span class="caret"></span>';
		$(this).parents(".dropdown").find(".dropdown-toggle").html(newText);
});


var formatText = function formatText(text){
		text = text.trim();
		text = text.toLowerCase();
		text = text.replace(/\s/g, "-");
		return text;
};

var findList = function findList(){
		var list = document.getElementById("booklist"); 
		var listname = document.getElementById("listnames").children[0].text;
		var sortby = document.getElementById("sortby").children[0].text;
		var searchby = document.getElementById("searchby").children[0].text;
		var query = document.getElementById("search");
		listname = formatText(listname);
		sortby = formatText(sortby);
		searchby = formatText(searchby);
		
		var params = {lname: listname, sort: sortby, search: searchby, q: query.value};
		
		$.getJSON("/getlist", params, function(data){
				updateList(data);
		});

		query.value = "";
		
};

var addItem = function addItem(itemInfo){
		var details = itemInfo["book_details"][0];
		var title = details["title"];
		var author = details["author"];
		var pic = details["book_image"];
		var descript = details["description"];
		var link = details["amazon_product_url"];
		
		var item = "<a class='list-group-item'>";
		item += "<img src='"+pic+"' alt='No Image.'>";
		item += "<h5>"+title+"</h5>";
		item += "<h6>"+author+"</h6>";
		item += "<span>" + descript + "</span>";
		item += "</a>";	

		$("#booklist").append(item);
};


var updateList = function updateList(data){
		var results = data["results"];
		var list = document.getElementById("booklist");
		$("#booklist").empty();
		
		for (var i = 0 ; i < results.length; i++){
				addItem(results[i]);
		}
};

document.getElementById("submit").addEventListener("click", function(e){
		e.preventDefault();
		findList();
});


/***************** List Updating on Interval *********************/

var setList = function setList(listname) {
		$("#listtitle").empty();
		$("#listtitle").append(listname);
		$.getJSON("/getlist", {lname: listname}, function(data){
				updateIntervalList(data);
		});
};


var defaultList = function defaultList() {
		var listname = "combined-print-and-e-book-fiction";
		console.log("listname: " + listname);
		setList(listname);
};

defaultList();

var listOptions = document.getElementById("listnames").children[1].children;
console.log(listOptions);
var randomList = function randomList() {
		var rand = Math.floor(Math.random() * listOptions.length);
		console.log("rand: " + rand);
		var listname = listOptions[rand].firstChild.id;
		console.log("listname: " + listname);

		setList(listname);
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
				item += "<u>"+title+"</u> "+author;
				item += "</li>";
				
				$("#intervallist").append(item);
		}
		$(document).on('click', "#intervallist li", function(e){
				var index = parseInt(this.firstChild.innerHTML) - 1;
				$("#booklist").empty();
				addItem(results[index]);
		});
		
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
