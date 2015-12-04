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
    addItem(document.getElementById("newItem").value)
};

// var OGlist = document.getElementsByTagName("li");
// for (i = 0; i < OGlist.length; i++) {
//     OGlist[i].style.color = "red";
//     OGlist[i].addEventListener("click",function(e){clickCallback(OGlist[i])});
//     }

document.getElementById("submitItem").addEventListener('click', submitCallback);

var counter = 0;
var cycle = function cycle(){
		var lists = Document.getElementById('cycler').children;
		for (var i = 0; i < lists.length; ++i) {
				lists[i].style.color = 'black';
		}
		lists[counter].style.color = 'green';
		counter = (counter+1) % lists.length;
};

document.getElementById("cycle-next").addEventListener("click",cycle);


