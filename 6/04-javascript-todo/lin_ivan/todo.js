var todo = document.getElementById("todo");
document.getElementById("submit").addEventListener("click",function(){
    var text = document.getElementById("task").value;
    var el = document.createElement("li");
    el.innerHTML = text;
    todo.appendChild(el);
});
todo.addEventListener("click",function(e){
    todo.
});
