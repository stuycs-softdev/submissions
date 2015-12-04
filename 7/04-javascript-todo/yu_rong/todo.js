var addItem = function addItem(s){
		var l = document.getElementById("todo");
		var n = document.createElement("li");
		n.innerHTML=s;
		n.addEventListener('click',removeItem);
		n.addEventListener('click',addItem2(s));
		l.appendChild(n);
};

var addItem2 = function addItem2(s){
    console.log("HI");
		var l = document.getElementById("done");
		var n = document.createElement("li");
		n.innerHTML=s;
		n.addEventListener('click',removeItem2);
		l.appendChild(n);
};

var removeItem = function removeItem(){
		this.parentNode.removeChild(this);
		//remove(s);
		var l = document.getElementById("done");
		var n = document.createElement("li");
		//n.innerHTML=s;
		l.appendChild(n);

};

var removeItem2 = function removeItem2(){
		this.parentNode.removeChild(this);
};

var buttonCallback = function(e){
		if (document.getElementById('texts').value != ""){
			addItem(document.getElementById('texts').value);
		}
};


var b = document.getElementById("b");
b.addEventListener('click',buttonCallback);


for (var i=0; i<todo.length; i++){
		// items[i].addEventListener('click',redCallback);
		addMouseEvents1(todo[i]);
		addEventListener('click',removeItem);
};
