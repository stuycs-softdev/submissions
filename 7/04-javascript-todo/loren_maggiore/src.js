console.log("YOYOY script i s loaded");



var todo = document.getElementById("todo");
var done = document.getElementById("done");

var addEvents = function(item){
	console.log("adding listener");
	item.addEventListener('click', function(e){
		console.log("clicked!");
		item.parentNode.removeChild(item);	
		done.appendChild(item);
	});
};

var done = function(item){
	
	done.appendChild(item);
}

for (var i =0; i < todo.children.length; i++){
	console.log(todo.children.length);
	addEvents(todo.children[i]);
}


