var thelist = document.getElementById("toDo");
var listItems=thelist.children;

for (var i=0;i<listItems.length;i++){
    listItems[i].addEventListener("click", removeCallBack);
};

var addItem = function(n, list){
    var l = document.getElementById(list);
    var s = document.createElement("li");
    s.innerHTML = n
    l.appendChild(s);
};

var removeItem = function(n){
    var items = document.getElementsById("toDo");        
    items[n].remove();
};

var removeCallBack = function removeCallBack(e){
    console.log("Something's happening");
    var text = this.innerHTML;
    addItem(text,"done");
    this.remove();
};

var buttonCallBack = function buttonCallBack(e){
    var stuff = document.getElementById("item")
    var text = stuff.value;
    addItem(text,"toDo");
    console.log("Something's happening");
};

var button = document.getElementById("button");
button.addEventListener("click",buttonCallBack);

/*var b2CallBack = function b2CallBack(e){    
    listItems[i].classList.toggle("red");
};

var b2 = document.getElementById("b2");
b2.addEventListener("click",b2CallBack);

var b3CallBack = function b3CallBack(e){
    for (var i=0;i<listItems.length;i++){
	listItems[i].classList.toggle("red");
    };
};

var b3 = document.getElementById("b3");
b3.addEventListener("click",b3CallBack);

var b4 = document.getElementById("b4");

var myInterval = setInterval(b3CallBack,2000);
b4.addEventListener("click",function(e){
    clearInterval(myInterval);
});
*/
