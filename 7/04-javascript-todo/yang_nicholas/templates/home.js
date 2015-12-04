console.log("HELLO, Js loaded");

var readTextBox = function readTextBox(){
    var list = document.getElementById("todoList")
    var input = document.getElementById("todoInput").value
    var li = document.createElement("li")
    li.innerHTML = input
    list.appendChild(li)
    console.log(input);
}
var moveToDone = function moveToDone(id)
{
    
    

}
var buttonListener = function(e)
{
    e.preventDefault();
    readTextBox();

}

var addListEvents = function(item)
{
    item.addEventListener("click", moveToDone();
}   
var button = document.getElementById("submit")
button.addEventListener("click", buttonListener);
