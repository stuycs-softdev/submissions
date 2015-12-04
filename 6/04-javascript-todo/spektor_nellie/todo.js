console.log("loaded js");

itemNumber = 1;
var getItem = function getItem(){
    var a = document.getElementById("newItem").elements.namedItem("todoItem").value;
    return a;
};

var addItem = function addItem(){
    var a = getItem();
    var l = document.getElementById("todolist");
    var n = document.createElement("li");
    n.innerHTML = a;
    n.setAttribute("id", ""+itemNumber);
    l.appendChild(n);
    document.getElementById(itemNumber).addEventListener('click',b2CallBack);
    itemNumber = itemNumber + 1;
    
};

var moveItemToDone = function moveItemToDone(n) {
    var a = document.getElementById(""+n);
    var l = document.getElementById("donelist");
    var m = document.createElement("li"); 
    m = n;
    m.setAttribute("id", ""+itemNumber);
    l.appendChild(m);
    itemNumber= itemNumber+1;
    a.remove();    

};
var index = 0;
var lastIndex = 0;
var next = function next(){//highlights next item in todo list
    console.log("index = "+index);
    var todolist = document.getElementById("todolist");
    var items = todolist.getElementsByTagName("li");
    if(index > items.length-1){
	index = 0;
    }
    if(index == 0){
	items[index].style.background = "yellow";
	items[items.length-1].style.background = "white";
	index += 1;
    }
    else{
	items[index].style.background = "yellow";
	lastIndex = index;
	lastIndex -= 1;
	items[lastIndex].style.background = "white";
	console.log("highlighting "+index);
	index += 1;
    }

    /*if(index !== -1){
	items[index].style.background = "white";
    }
    if(index > items.length-1){
	index = 0;
	lastIndex = items.length-1;
	items[lastIndex].style.background = "white";
	
    }
    else{
	index += 1;
	if(index == 0){
	    lastIndex = items.length-1;
	}
	else{
	    lastIndex = index; 
	    index ++;
	    }
    }
    console.log("length "+ items.length);
    if(items.length > 0){
	items[index].style.background = "yellow";
	//items[lastIndex].style.background = "white";
	console.log("highlight");
    }
     //    if(index !== -1)
    //	items[index].style.background = "white";
    //    if(index >= items.length-1){
    //index = 0;
    //}
    //index++;
    console.log("index "+index);
   */
};


var start = document.getElementById("start");
var stop = document.getElementById("stop");

var interval;

start.addEventListener("click",function(e){
        interval = setInterval(next,3000);
    });
stop.addEventListener("click",function(e){
	clearInterval(interval);
    });

var index = 0;


var b2CallBack = function b2CallBack(){
    var id = this.id;
    moveItemToDone(this);
};

var ButtonCallBack = function ButtonCallBack(){ //add button is pressed
    addItem();
};

var b = document.getElementById("addbutton");
b.addEventListener('click',ButtonCallBack);

var nextb = document.getElementById("nextButton");
nextb.addEventListener('click',next);

//var todolist = document.getElementById("todolist");
var items = todolist.children;
    //for (var i=0; i < items.length; i++){

    //};
