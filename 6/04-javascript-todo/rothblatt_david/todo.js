
console.log("loaded js");

var addToDoItem = function addToDoItem(){
    var new_item = document.getElementById("new_item").value;
    if (new_item != ""){
	var l = document.getElementById("todo_list");
	var n = document.createElement("li");
	n.innerHTML=new_item;
	l.appendChild(n);
	var ind = l.children.length-1;
	console.log(ind);
	var item = l.children[ind];
	addMouseEvents(item, "todo_list");
    }
};

var addDoneItem = function addDoneItem(item){
    if (item != ""){
	var l = document.getElementById("done_list");
	var n = document.createElement("li");
	n.innerHTML= item;
	l.appendChild(n);
	var ind = l.children.length-1;
	console.log(ind);
	var item = l.children[ind];
	addMouseEvents(item,"done_list");
    }

}

var removeFirstItem = function removeItem(n) {
    var items = document.getElementsByTagName("li");
    items[n].remove(); 
};

var removeItem = function removeItem(x) {
    x.parentNode.removeChild(x);
};


var AddButtonCallback = function(e){
    console.log(e);
    addToDoItem();
};
var add_button = document.getElementById("add_button");
add_button.addEventListener('click',AddButtonCallback);

var RemoveButtonCallback = function(e){
    e.preventDefault();
    removeFirstItem(0);
}
var remove_button = document.getElementById("remove_button");
remove_button.addEventListener('click',RemoveButtonCallback);

var addMouseEvents = function(item, which_list){
    item.addEventListener('mouseover',function(e){
	this.classList.add('green');
    });
    item.addEventListener('mouseout',function(e){
	this.classList.remove('green');
    });
    item.addEventListener('click',function(e){
	removeItem(this);
	if (which_list == "todo_list")
	    addDoneItem(this.innerHTML);
    });

};
