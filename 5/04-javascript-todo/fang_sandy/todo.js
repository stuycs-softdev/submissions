var additem = function additem(s){
		var l = document.getElementById("todo");
		var n = document.createElement("li");
		n.innerHTML=s;
		l.appendChild(n);
};

var removeitem = function removeitem(n){
		var tasks = document.getElementsByTagName("li");
		tasks[n-1].remove(); //indexing is weird
};

var changeColor = function changeColor(){
		var items = document.getElementsByTagName("li");
		for( var i = 0; i < items.length; i++ ){
			if( items[i].classList.contains("green")){
				items[i].classList.remove("green");
				if( i == items.length-1 ){
					items[0].classList.add("green");
				}else{
					items[i+1].classList.add("green");
				}
			break;
			}
		}
};
var buttonAdd = function buttonAdd(e){
		console.log(e);
		console.log(this);
		task = document.getElementById("task").value;
		additem(task);
};
var buttonRemove = function buttonRemove(e){
		console.log(e);
		console.log(this);
		rmno = +document.getElementById("rmno").value;
		removeitem(rmno);
};

var button = document.getElementById("add");
add.addEventListener("click",buttonAdd);

var button2 = document.getElementById("remove");
remove.addEventListener("click",buttonRemove);

var button3 = document.getElementById("chcol");
chcol.addEventListener("click",changeColor);