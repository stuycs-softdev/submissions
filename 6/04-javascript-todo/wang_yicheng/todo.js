var add_item_to_todo = function add() {
    var new_item = document.getElementById("newThing").value;
    var li = document.createElement("li");
    var a = document.createElement("a");
    var text = document.createTextNode(new_item);
    a.appendChild(text);
    a.setAttribute("href", "#");
    a.setAttribute("class", "red")
    add_mouse_events(a);
    add_event_todo(a);
    li.appendChild(a);
    document.getElementById("todo").appendChild(li);
};

var add_mouse_events = function(item) {
    item.addEventListener('mouseover', function(e) {
        this.classList.remove('red');
        this.classList.add('blue');
    });
    item.addEventListener('mouseout', function(e) {
        this.classList.remove('blue');
        this.classList.add('red');
    });
};

var add_to_done = function() {
    var item = document.createTextNode(this.innerHTML);
    this.parentNode.parentNode.removeChild(this.parentNode);
    var li = document.createElement("li");
    var a = document.createElement("a");

    a.appendChild(item);
    a.setAttribute("href", "#");
    a.setAttribute("class", "blue")

    a.addEventListener('mouseover', function(e) {
        this.classList.remove('blue');
        this.classList.add('red');
    });
    a.addEventListener('mouseout', function(e) {
        this.classList.remove('red');
        this.classList.add('blue');
    });
    a.addEventListener('click', function(e) {
        this.parentNode.parentNode.removeChild(this.parentNode);
    });

    li.appendChild(a);
    document.getElementById('done').appendChild(li);
}

var add_event_todo = function(item) {
    item.addEventListener('click', add_to_done);
};

var add_event_remove = function(item) {
}
