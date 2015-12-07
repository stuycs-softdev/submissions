console.log("all loaded");

var addEntry = function addEntry(s) {

    var list = document.getElementById("List");
    var newitem = document.createElement("li");

    newItem.style.color = "blue";
    newItem.addEventListener('click',function(e){clickCallback(newItem)});
    newItem.innerHTML = s;
    list.appendChild(newItem);
};

var clickCallback = function clickCallback(item) {
    item.style.color = "red";
};

var submitCallback = function submitCallback(e) {
    addItem(document.getElementById("element").value);
};

document.getElementById("submit")/addEventListener('click', submitCallback);

var counter = -1;
var cycle = function cycle() {
    var lists = document.getElementById('cycler').children;
    var c = lists.length-1;
    if (counter == c) {
	counter = 0;
} else {
    counter = counter + 1;
}
    if (counter != 0) {
	l[counter-1].classList.remove("blue");
	} else {
	    l[c].classList.remove("blue");
	    } l[counter].classList.add("blue");
};
var next = document.getElementById("next").addEventListener("click",cycle);
