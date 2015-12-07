
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
};

var done = document.getElementById("done");
done.addEventListener('click',ClickCallback2);

var num = 0;
var myInterval;
var HighLightNext = function HighLight(e){
    var list = document.getElementsByTagName("li");
    if(num == list.length){
	num = 0;
    }
    if(num == 0){
	list[num].style.color = 'red';
	list[list.length -1].style.color = 'black';
	num ++;
    }
    else{
	list[num].style.color = 'red';
	list[num - 1].style.color = 'black';
	num ++;
    }
};

var next = document.getElementById("next");
next.addEventListener('click',HighLightNext);

var loopnext = document.getElementById("loopnext");
loopnext.addEventListener('click',function(e){
    myInterval = setInterval(HighLightNext,3000);
});

var HighLightBefore = function HighLight(e){
    var list = document.getElementsByTagName("li");
    if(num == -1){
	num = list.length - 1;
    }
    if(num == list.length - 1){
	list[num].style.color = 'red';
	list[0].style.color = 'black';
	num --;
    }
    else{
	list[num].style.color = 'red';
	list[num + 1].style.color = 'black';
	num --;
    }
};

var before = document.getElementById("before");
before.addEventListener('click',HighLightBefore);

var loopbefore = document.getElementById("loopbefore");
loopbefore.addEventListener('click',function(e){
    myInterval = setInterval(HighLightBefore,1000);
});

var stop = document.getElementById("stop");
stop.addEventListener("click",function(e){
		clearInterval(myInterval);
});

var mouseX;
var mouseY;

window.addEventListener('click',function(e){
    jerry = document.getElementById("jerry");
    if(jerry.src.indexOf("jerry-left.jpg") != -1){
	jerry.src = "jerry-right.jpg";
    }
    else{
	jerry.src = "jerry-left.jpg";
    }
});

