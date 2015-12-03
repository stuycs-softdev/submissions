console.log("Javascript Loaded!");

var getToDo = function getToDo(){
    var x = document.getElementById("addForm").elements.namedItem("addtodo").value;
    return x;
};

var add = function add(){
	var a = getToDo();
   // var new_entry = document.getElementById("new").value;
    var todo_list = document.getElementById("todo");
    var create = document.createElement("li");
    create.innerHTML = a;
    d.setAttribute("id","todo");
    todo_list.appendChild(create);
    var c = todo_list.children;
    c[c.length - 1].addEventListener('click', ElementCallBack);
}

var AddButtonCallback = function(e){
    console.log(e);
    add();
};

var button = document.getElementById("button");
button.addEventListener('click',AddButtonCallback);

var ElementCallBack = function ElementCallBack(){    
    console.log("hello");
    var l = document.getElementById("donelist");
    l.appendChild(this);
}




