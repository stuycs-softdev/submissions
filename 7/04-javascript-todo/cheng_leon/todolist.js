//* TODO Lookup how to get the data out of a text entry

var addItem = function addItem(s, listType){
    var n = document.createElement("li");
    n.innerHTML = s;
    var l = document.getElementById(listType);
    l.appendChild(n);
    console.log(n);
};

var buttonCallback = function(e){
    //Retrieve the text that is currently in textarea
    //Then add the text to the list
    var t = document.getElementById("inputText").value;
    addItem(t, "taskList");
};

var b = document.getElementById("addButton");
b.addEventListener('click',buttonCallback);

