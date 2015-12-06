console.log("Initiate List");

var addItem = function addItem(e,l){
    console.log(e);
    var a = document.createElement("li");
    a.innerHTML = e;
    a.addEventListener('click', remItem);
    addMouseEvents(a);
    l.appendChild(a);
};

var remItem = function remItem(e){
    console.log(e);
    var temp = this.innerHTML;
    this.remove();
    addItem2(temp, document.getElementById("donelist"));
};

var addItem2 = function addItem(e,l){
    console.log(e);
    var a = document.createElement("li");
    a.innerHTML = e;
    a.addEventListener('click', remItem2);
    addMouseEvents(a);
    l.appendChild(a);
};

var remItem2 = function remItem(e){
    console.log(e);
    this.remove();
};

var ButtonCallback = function ButtonCallback(e){
    console.log(e);
    addItem(document.getElementById("input").value, document.getElementById("dolist"));
};
var b = document.getElementById('b');
b.addEventListener('click',ButtonCallback);


var addMouseEvents = function(item){
    item.addEventListener('mouseover',function(e){this.classList.remove('red');this.classList.add('blue');});
    item.addEventListener('mouseout',function(e){this.classList.remove('blue');this.classList.add('red');});    
};


var lis = document.getElementById("dolist").children;
for (var i=0; i < lis.length; i++){
    addMouseEvents(lis[i]);
};

var lisd = document.getElementById("donelist").children;
for (var i=0; i < lisd.length; i++){
    addMouseEvents(lisd[i]);
};

var c = 1;
var flash = function flash(e){
    var l1 = document.getElementById("dolist").children;
    var l2 = document.getElementById("donelist").children;
    l1[(c - 1)%l1.length].style.color = 'red';
    l1[(c)%l1.length].style.color = 'green';
    l2[(c - 1)%l2.length].style.color = 'red';
    l2[(c)%l2.length].style.color = 'green';
    c = c + 1;
}

var myInterval;
var start = document.getElementById("start");
start.addEventListener('click',function(e){myInterval = setInterval(flash,1000);});
var stop = document.getElementById("stop");
stop.addEventListener('click',function(e){clearInterval(myInterval);});
