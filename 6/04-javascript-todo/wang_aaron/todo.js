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
var TDL = document.getElementsByTagName("li");
document.getElementById("nextItem").addEventListener("click",function(e) {
    TDL[index].style.fontSize = "xx-large";
    console.log("next");
})
document.getElementById("prevItem").addEventListener("click",function(e) {
    console.log("prev");
})

