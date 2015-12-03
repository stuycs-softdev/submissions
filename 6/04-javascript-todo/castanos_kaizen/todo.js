var addItem = function addItem(n, s, b){
		var l = document.getElementById(n);
		var x = document.createElement("li");
		x.innerHTML=s;
  	if (b==1){
      addMouseEvents1(x);
    }
  	if (b==2){
      addMouseEvents2(x);
    }
  	l.appendChild(x);
};

var removeItem = function removeItem(n) {
		var list = document.getElementById(n);
		list.parentNode.removeChild(list);
};

var ButtonCallback = function(e){
		addItem("list1", document.getElementById("text").value, 1);
  	document.getElementById("text").value = ''
};
var sub = document.getElementById("sub");
sub.addEventListener('click',ButtonCallback);

var addMouseEvents1 = function(item){
		item.addEventListener('click',function(e){
      	addItem("list2", this.innerHTML, 2);
				this.parentNode.removeChild(this);
		});
};
var thelist = document.getElementById("list1");
var items = thelist.children;
for (var i=0; i < items.length; i++){
		addMouseEvents1(items[i]);
};

var addMouseEvents2 = function(item){
		item.addEventListener('click',function(e){
				this.parentNode.removeChild(this);
		});
};
var thelist2 = document.getElementById("list2");
var items2 = thelist2.children;
for (var i=0; i < items2.length; i++){
		addMouseEvents2(items2[i]);
};