
var click = function click(e){
    var texty = document.getElementById('texty');
    var listy = document.getElementById('listy');
    console.log(listy);
    var item = document.createElement("li");
    item.innerHTML = texty.value;
    item.addEventListener('click', move);
    //addListEvents();
    listy.appendChild(item);
};

var move = function(e){
    var donelisty = document.getElementById('donelisty');
    var item = document.createElement('li');
    item.innerHTML = this.innerHTML;
    item.addEventListener('click', remove);
    this.remove();
    donelisty.appendChild(item);
};

var remove = function(e){
    this.remove()
};

var eIndex = 0;

var highlight = function highlight(index){
    console.log('highlight called ' + index)
    var donelisty = document.getElementById('donelisty').children;
    if (index >= donelisty.length) {
	return;
    }
    donelisty[index].classList.add('highlight');
    donelisty[(index + donelisty.length -1) % donelisty.length].classList.remove('highlight');
    eIndex = (index+1) % donelisty.length;
    console.log(eIndex);
}

var on = true;
var interval = setInterval(function(){highlight(eIndex)}, 500);

var toggle = function(e){
    if (on) {
	on = false;
	clearInterval(interval);
    } else {
	on = true;
	interval = setInterval(function(){highlight(eIndex)}, 500);
    }
}

var b = document.getElementById('b');
b.addEventListener('click', click)

var b2 = document.getElementById('b2');
b2.addEventListener('click', toggle)
