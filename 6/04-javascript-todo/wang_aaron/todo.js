console.log("loaded the js file");

var addItem = function addItem(s) {
    var list = document.getElementById("TDL");
    var newItem = document.createElement("li");
    newItem.style.color = "red";
    newItem.addEventListener('click',function(e){clickCallback(newItem)});
    newItem.innerHTML = s;
    list.appendChild(newItem);
};

var clickCallback = function clickCallback(item) {
    item.style.color = "green";
};

var submitCallback = function submitCallback(e) {
    addItem(document.getElementById("newItem").value);
    document.getElementById("newItem").value = "";
};

document.getElementById("submitItem").addEventListener('click', submitCallback);


var index = 0;
document.getElementById("nextItem").addEventListener("click",function(e) {
    console.log("next");

    var TDL = document.getElementsByTagName("li");

    TDL[(index) % TDL.length].style.fontSize = "large";
    TDL[(index + 1) % TDL.length].style.fontSize = "xx-large";
    index += 1;
})

document.getElementById("prevItem").addEventListener("click",function(e) {
    console.log("prev");
    
    var TDL = document.getElementsByTagName("li");

    TDL[(index - 1) % TDL.length].style.fontSize = "xx-large";
    TDL[(index) % TDL.length].style.fontSize = "large";
    index -= 1;
    if (index ==0) {
	index += TDL.length;
    }
    
})

var goNext = function goNext() {
    console.log("next");

    var TDL = document.getElementsByTagName("li");

    TDL[(index) % TDL.length].style.fontSize = "large";
    TDL[(index + 1) % TDL.length].style.fontSize = "xx-large";
    index += 1;
};

var start = document.getElementById("startcycle");
var stop = document.getElementById("stopcycle");

start.addEventListener("click",function(e) {
    myInterval = setInterval(goNext , 1000 );
});

stop.addEventListener("click", function(e) {
    clearInterval(myInterval);
});
    

