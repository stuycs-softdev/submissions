

var addItem = function addItem(lst, item){
    var l = document.getElementById(lst);
    var n = document.createElement("li");
    n.innerHTML = item;
    l.appendChild(n);
    var i = l.children.length - 1;
    addListEvents(l, i);
    if (i == 0){
	addHorizontal(lst)
    }
};

var removeItem = function removeItem(n){
    n.parentNode.removeChild(n);
};

var buttonCallback = function(e){
    var newItem = document.getElementById("newtodo");
    if (newItem.value != ""){
	addItem("todolist", newItem.value);
	newItem.value="";
    }
};

var addListEvents = function(lst, index){
    var item = lst.children[index];
    item.addEventListener("mouseover",function(e){
	if (lst.id == "todolist"){
	    this.style.color = "blue";
	} else {
	    this.style.color = "red";
	}
    });
    item.addEventListener("mouseout",function(e){
	this.style.color = "black";
    });
    item.addEventListener("click",function(e){
	removeItem(this);
	if (lst.id != "donelist"){
	    addItem("donelist",this.innerHTML);
	}
    });
};

var addHorizontal = function addHorizontal(lst){
    var s = document.getElementsByTagName("span");
    if (lst == "todolist"){
	for(var i =0; i < s.length;i++){
	    if(s[i].id == "td"){
		s[i].style.visibility = "visible";
	    }
	}
    } else {
	for(var i =0; i < s.length;i++){
	    if(s[i].id == "done"){
		s[i].style.visibility = "visible";
	    }
	}
    }
}


