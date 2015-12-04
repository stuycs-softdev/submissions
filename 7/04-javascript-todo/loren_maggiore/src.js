console.log("YOYOY script i s loaded");



var todo = document.getElementById("todo");
var done = document.getElementById("done");

var addEvents = function(item){
	console.log("adding listener");
	item.addEventListener('click', function(e){
	console.log("clicked!");
	var stuff = item.innerHTML;
	console.log(stuff);
	var node = document.createElement("LI");              
	var textnode = document.createTextNode(stuff);         
	node.appendChild(textnode);                           
	document.getElementById("done").appendChild(node);
	item.parentNode.removeChild(item);
	});
};

var done = function(item){
	
	done.appendChild(item);
}

for (var i =0; i < todo.children.length; i++){
	console.log(todo.children.length);
	addEvents(todo.children[i]);
}


