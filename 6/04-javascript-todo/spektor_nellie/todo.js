console.log("loaded js");

itemNumber = 1;
var getItem = function getItem(){
    var a = document.getElementById("newItem").elements.namedItem("todoItem").value;
    return a;
};

var addItem = function addItem(){
    var a = getItem();
    var l = document.getElementById("todolist");
    var n = document.createElement("li");
    n.innerHTML = a;
    n.setAttribute("id", ""+itemNumber);
    l.appendChild(n);
    document.getElementById(itemNumber).addEventListener('click',b2CallBack);
    itemNumber = itemNumber + 1;
    
};

var moveItemToDone = function moveItemToDone(n) {
    var a = document.getElementById(""+n);
    var l = document.getElementById("donelist");
    var m = document.createElement("li"); 
    m = n;
    m.setAttribute("id", ""+itemNumber);
    l.appendChild(m);
    itemNumber= itemNumber+1;
    a.remove();    

};

var startCycling = function startCycling(){
};

var stopCycling = funciton stopCycling(){
};


var startbCallBack = function startbCallBack(){
    startCycling();
};

var stopbCallBack = function stopbCallBack(){
};

var b2CallBack = function b2CallBack(){
    var id = this.id;
    moveItemToDone(this);
};

var ButtonCallBack = function ButtonCallBack(){ //add button is pressed
    addItem();
};

var b = document.getElementById("addbutton");
b.addEventListener('click',ButtonCallBack);


var todolist = document.getElementById("todolist");
var items = todolist.children;
for (var i=0; i < items.length; i++){
    addMouseEvents(items[i]);
};
