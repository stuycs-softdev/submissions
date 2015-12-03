console.log("loaded js");


var addItem = function addItem(id, s){
		var l = document.getElementById(id);
		var item = document.createElement("li");
		item.innerHTML = s;
		addMouseEvents(item);
		l.appendChild(item);
};

var removeItem = function removeItem(id, s){
		var l = document.getElementById(id);
		var items = l.children;
		for (var i = 0; i < items.length; i++){
				if (items[i].innerHTML == s){
						items[i].remove();
				}
		}
};


var getText = function(e){
		e.preventDefault();
		var n = document.getElementById("textarea");
		var text = n.value;
		if (/\S/.test(text)){
				addItem("todo", text);
				n.value = "";
		}
};

var clearList = function(e){
		var l = document.getElementById("todo");
		l.innerHTML = "";
		l = document.getElementById("done");
		l.innerHTML = "";
};

var addMouseEvents = function(item){
		item.addEventListener('mouseenter', function(e){
				this.classList.add('mouseover');
		});
		item.addEventListener('mouseleave', function(e){
				this.classList.remove('mouseover');
		});
	
		item.addEventListener('click', function(e){
				var parent = item.parentElement;
				if (parent.id == "todo"){
						addItem("done", this.innerHTML);
						removeItem("todo", this.innerHTML);
				}
				else {
						addItem("todo", this.innerHTML);
						removeItem("done", this.innerHTML);
				}			
		});


};


document.getElementById("submit").addEventListener('click', getText);
document.getElementById("clear").addEventListener('click', clearList);

