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

//Highlighting assignment
var counter = -1;
var cycle = function cycle(){
		var lists = document.getElementById('cycler').children;
		var c = lists.length-1;
		if (counter == c) {
				counter = 0;
				//resets the loop, starts back at zero again
		} else {
				counter = counter + 1;
				//else, advance in the loop
		}
		if (counter != 0) {
				l[counter-1].classList.remove("red");
				//if not the first element, then remove "red" from the one before it
		} else {
				l[c].classList.remove("red");
				//if the first element, remove "red" from the last in the list
		}
		l[counter].classList.add("red");
		//turns the current element red
};
var cycle_next = document.getElementById("next").addEventListener("click",cycle);


