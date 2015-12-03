
var addItem = function addItem(s){
    var l = document.getElementById("todo");
    var n = document.createElement("li");
    n.innerHTML = s;
    l.appendChild(n);
};

var removeItem = function removeItem(s){
    var list = document.getElementsByTagName("li");
    for(i = 0; i < list.length; i ++){
	if(list[i].innerHTML == s){
	    list[i].remove();
	    break;
	}
    }
}


var ButtonCallback = function(e){
    var add = document.getElementById("add").value;
    addItem(add);
};

var button = document.getElementById("b");
b.addEventListener('click',ButtonCallback);

var addFinish = function addFinish(s){
    var l = document.getElementById("done");
    var n = document.createElement("li");
    n.innerHTML = s;
    l.appendChild(n);
};

var ClickCallback = function(e){
    var s = document.getElementById("todo").getElementsByTagName("li")[0].innerHTML;
    removeItem(s);
    addFinish(s);
};

var todo = document.getElementById("todo");
todo.addEventListener('click',ClickCallback);

var ClickCallback2 = function(e){
    document.getElementById("done").getElementsByTagName("li")[0].remove();
}

var done = document.getElementById("done");
done.addEventListener('click',ClickCallback2);

var num = 0;

var HighLightNext = function HighLight(e){
    var list = document.getElementsByTagName("li");
    if(num = list.length()){
	num = 0;
    }
    else{
	list[num] = "<li>" + list[num].innerHTML + "</li>";
	num ++;
	list[num] = "<li><font color ='red'>" + list[num].innerHTML + "</font></li>";
    }
}

var next = document.getElementById("next");
next.addEventListener('click',HighLightNext);
