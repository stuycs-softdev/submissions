var add_item_to_todo = function add() {
    var new_item = document.getElementById("newThing").value;
    if (new_item == "") {
        return;
    }
    var priority = +document.getElementById("priority").value;
    if (isNaN(priority) || priority < 1) {
        priority = 1;
    }
    var patt = new RegExp("(0[0-9]|1[0-9]|2[0-4]):?([0-5][0-9]|60)?:?([0-5][0-9]|60)?");
    var res = patt.exec(document.getElementById("due_time").value);
    if (res) {
        var hour = +res[1];
        var minutes = +res[2];
        var seconds = +res[3];
        if (isNaN(hour)) { hour = 24; };
        if (isNaN(hour)) { minutes = 0; };
        if (isNaN(hour)) { seconds = 0; };
    }
    var li = document.createElement("li");
    var a = document.createElement("a");
    var text = document.createTextNode(new_item + " (" + priority + ")");
    a.appendChild(text);
    a.setAttribute("sort_priority", priority);
    a.setAttribute("hover_text", document.getElementById("description").value);
    a.setAttribute("due_hour", hour);
    a.setAttribute("due_minute", minutes);
    a.setAttribute("due_seconds", seconds);
    a.setAttribute("href", "#");
    add_event_todo(a);
    li.appendChild(a);
    var list = document.getElementById("todo");
    list.appendChild(li);
    var list_els = Array.prototype.slice.call(list.children, 0);
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    list_els.sort(function(a, b) {
        return +a.firstChild.getAttribute("sort_priority") - +b.firstChild.getAttribute("sort_priority");
    });

    for (var i = 0 ; i < list_els.length ; i++) {
        list.appendChild(list_els[i]);
    }

    document.getElementById("newThing").value="";
    document.getElementById("priority").value="";
    document.getElementById("description").value="";
    document.getElementById("newThing").focus();
};

var add_to_done = function() {
    var item = document.createTextNode(this.children[0].innerHTML);
    this.parentNode.parentNode.removeChild(this.parentNode);
    var li = document.createElement("li");
    var a = document.createElement("a");

    a.appendChild(item);
    a.setAttribute("href", "#");

    a.addEventListener('click', function(e) {
        this.parentNode.parentNode.removeChild(this.parentNode);
    });

    li.appendChild(a);
    document.getElementById('done').appendChild(li);
};

var add_event_todo = function(item) {
    item.addEventListener('click', add_to_done);
    item.addEventListener('mouseover', function(e) {
        var div_new = document.createElement("div");
        var hover = document.createTextNode(this.getAttribute("hover_text"));
        div_new.appendChild(hover);
        div_new.setAttribute("class", "popup");
        this.appendChild(div_new);
    });
    item.addEventListener('mouseout', function(e) {
        this.removeChild(this.getElementsByTagName("div")[0]);
    });
};

var enter = function(item) {
    item.addEventListener('keypress', function(e) {
        if (e.keyCode == 13) {
            add_item_to_todo();
        }
    });
};

enter(document.getElementById('newThing'));
enter(document.getElementById('priority'));
enter(document.getElementById('description'));
enter(document.getElementById('due_time'));

var update_due_time;

update_due_time = setInterval(update_todo, 5);
