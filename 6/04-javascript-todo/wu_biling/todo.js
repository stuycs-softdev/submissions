var add_item= function add_item(text,list){
    var l = document.getElementById(list);
    var n = document.createElement("li");
    n.innerHTML=text;
    l.appendChild(n);
}

var remove_item= function remove_item(item,list){
    var items = document.getElementsByTagName("li");
    items[n].remove();
}
var add_item_todo= function add_item_todo(){
    var t= document.getElementById("new_item").value;
    add_item(t, "todo");
}


