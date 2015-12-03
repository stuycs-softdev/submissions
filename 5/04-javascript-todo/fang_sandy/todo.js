var additem = function additem(s){
		var l = document.getElementById("todo");
		var n = document.createElement("li");
		n.innerHTML=s;
		l.appendChild(n);
};

var removeitem = function(n){
		var tasks = document.getElementsByTagName("li");
		tasks[n].remove();

};

var buttonAdd = function buttonAdd(e){
		console.log(e);
		console.log(this);
		console.log(task);
		additem(task);
};
var buttonRemove = function buttonRemove(e){
		console.log(e);
		console.log(this);
		console.log(rmno);
		removeitem(n);
};

var button = document.getElementById('add');
add.addEventListener('click',buttonAdd);

var button2 = document.getElementById('remove');
remove.addEventListener('click',buttonRemove);