
console.log("loaded js");
itemNum = 1;
var addItem = function addItem(s,txt){
		if (s.id != null){
			var l = document.getElementById("theDoneList")
			var n = document.createElement("li");
			n=s;
		}else{
			var l = document.getElementById("thelist");
			var n = document.createElement("li");
			n.innerHTML=s
		}
	  n.setAttribute("id", (""+itemNum));
		l.appendChild(n);
		document.getElementById(itemNum).addEventListener('click',b2Callback);
		itemNum = itemNum + 1;
};

var removeItem = function removeItem(n) {
	  addItem(document.getElementById(""+n), document.getElementById(""+n).innerHTML);
		var items = document.getElementById(""+n);
		console.log(document.getElementById(""+n).innerHTML)
		items.remove();
};


var ButtonCallback = function(e){
		console.log(e);
		addItem(document.getElementById('todoItem').value);
};
var b = document.getElementById("b");
b.addEventListener('click',ButtonCallback);

var b2Callback = function(e){
		var idNum = this.id;
		removeItem(idNum);
};
