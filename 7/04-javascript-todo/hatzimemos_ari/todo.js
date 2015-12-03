console.log("Hello! JavaScript loaded");

var add = function add(){
    var newItem = document.getElementById("new").value;
    var list = document.getElementById("todo");
    var x = document.createElement("li");
    x.innerHTML = newItem;
    list.appendChild(x);
}

var AddButtonCallback = function(e){
    console.log(e);
    add();
};
var add_button = document.getElementById("add_button");
add_button.addEventListener('click',AddButtonCallback);

