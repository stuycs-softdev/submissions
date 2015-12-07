var add_item= function add_item(text,list){
    var l = document.getElementById(list);
    var n = document.createElement("li");
    n.innerHTML=text;
    l.appendChild(n);
}

var add_item_todo= function add_item_todo(){
    var t= document.getElementById("new_item").value;
    add_item(t, "todo");
}
