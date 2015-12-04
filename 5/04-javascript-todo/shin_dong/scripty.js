
var click = function click(e){
    var texty = document.getElementById('texty');
    var listy = document.getElementById('listy');
    console.log(listy);
    var item = document.createElement("li");
    item.innerHTML = texty.value;
    item.addEventListener('click', move);
    //addListEvents();
    console.log(item);
    listy.appendChild(item);
};

var move = function(e){
    console.log('yy');
    var donelisty = document.getElementById('donelisty');
    var item = document.createElement('li');
    item.innerHTML = this.innerHTML;
    this.remove();
    donelisty.appendChild(item);
}

var highlight = function(e){
    var listy = document.getElementById('listy');
    var donelisty = document.getElementById('donelisty');

    for (item in listy.children) {
	
    
}

var b = document.getElementById('b');
b.addEventListener('click', click)

var b2 = document.getElementById('b2');
b2.addEventListener('click', highlight)

    var inter = setInterval(
