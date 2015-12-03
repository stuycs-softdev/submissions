var addItem = function addItem(s){
		var l = document.getElementById("thelist");
		var n = document.createElement("li");
    var item = document.createElement("h4");
		item.innerHTML=s;
    //n.innerHTML=item;
		l.appendChild(item);
};

addItem("hi")
