//* TODO Lookup how to get the data out of a text entry

var addItem = function addItem(s, list_type){
    var n = document.createElement("li");
    n.innerHTML = s;
    var l = document.getElementById(list_type);
    l.appendChild(n);
    console.log(n);
};

var buttonCallback = function(e){
    //Retrieve the text that is currently in textarea
    //Then add the text to the list
    var t = document.getElementById("input_text").value;
    addItem(t, "taskList");
};

var b = document.getElementById("add_button");
b.addEventListener('click',buttonCallback);

