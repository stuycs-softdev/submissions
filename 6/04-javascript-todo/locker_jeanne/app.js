var addItem = function addItem(s){
		var l = document.getElementById("rightcolumn");
		var n = document.createElement("li");
    var item = document.createElement("h4");
		item.innerHTML=s;
		l.appendChild(item);
};

