var colorscroll_init;
var colorscroll_stop;

var remove_card = function remove_card(card) {
    colorscroll_stop();
    var list_element = card.parentElement.parentElement.parentElement.parentElement.parentElement;
    list_element.parentNode.removeChild(list_element);
    document.getElementById('left_panel').setAttribute("style","height:100vh");
    document.getElementById('right_panel').setAttribute("style","height:100vh");
}

// Activation and deactivation setters to be called by card actions:
var mark_as_active = function mark_as_active(card) {
    var card_div = card.parentElement.parentElement;
    card_div.className = "card cyan darken-4";
}

var mark_as_inactive = function mark_as_inactive(card) {
    var card_div = card.parentElement.parentElement;
    card_div.className = "card blue-grey darken-1";
}

// Activation and deactivation setters to be called by functions directly on
// cards
var set_active = function set_active(card) {
    card.className = "card cyan darken-4";
}

var set_inactive = function set_inactive(card) {
    card.className = "card blue-grey darken-1";
}

var add_to_list = function add_to_list(e) {
    // Keep template parts within function to prevent global overwrites
    var template = [
        "<div class=\"row\">",
        "<div class=\"col s12\">",
        "<div class=\"card blue-grey darken-1\">",
        "<div class=\"card-content white-text\">",
        "<span class=\"card-title\">",
        "Card Title",
        "</span>",
        "<p>",
        "Card Content",
        "</p>",
        "</div>",
        "<div class=\"card-action\">",
        "<a href=\"javascript:void(0);\" onclick=\"mark_as_active(this);\">Mark As Active</a>",
        "<a href=\"javascript:void(0);\" onclick=\"mark_as_inactive(this);\">Mark As Inactive</a>",
        "<a href=\"javascript:void(0);\" onclick=\"remove_card(this);\">Remove</a>",
        "</div> </div> </div> </div>"
    ];
    var todo_list = document.getElementById("todolist");
    var new_item = document.createElement("li");
    template[5] = document.getElementById('new_title').value;
    template[8] = document.getElementById('new_content').value;
    var combined = "";
    for (var i = 0; i < template.length; i++) {
        combined += template[i];
    }
    new_item.innerHTML = combined;
    todo_list.appendChild(new_item);
    document.getElementById('new_title').value = "";
    document.getElementById('new_content').value = "";
    document.getElementById('left_panel').setAttribute("style","height:100vh");
    document.getElementById('right_panel').setAttribute("style","height:100vh");
    Materialize.showStaggeredList('#todolist');
};

var colorscroll_current = 0;
var tick = 0;
var bg_color = {"red":255, "green":255, "blue":255};

var colorscroll = function colorscroll(e) {
    // Scroll the background color
    var delta = Math.floor((Math.random() * 100) + 1) - 50;
    if (delta < -20) {
        delta = -2;
    } else if (delta > -20) {
        delta = 2;
    } else {
        delta = 0;
    }
    bg_color['red'] = (bg_color['red'] + delta + 256) % 256;

    delta = Math.floor((Math.random() * 100) + 1) - 50;
    if (delta < -20) {
        delta = -2;
    } else if (delta > -20) {
        delta = 2;
    } else {
        delta = 0;
    }
    bg_color['green'] = (bg_color['green'] + delta + 256) % 256;

    delta = Math.floor((Math.random() * 100) + 1) - 50;
    if (delta < -20) {
        delta = -2;
    } else if (delta > -20) {
        delta = 2;
    } else {
        delta = 0;
    }
    bg_color['blue'] = (bg_color['blue'] + delta + 256) % 256;

    document.body.style.backgroundColor = "rgb(" + [bg_color['red'],bg_color['green'],bg_color['blue']].join() + ")";

    // Scroll the cards
    var todo_list = document.getElementsByClassName("card");
    if (todo_list.length < 1) {
        return;
    }
    set_active(todo_list[colorscroll_current]);
    tick++;
    if (todo_list.length === 1 && tick % 2 === 1) {
        return;
    }
    var i = colorscroll_current > 0 ? colorscroll_current - 1 : todo_list.length - 1;
    set_inactive(todo_list[i]);
    colorscroll_current = (colorscroll_current + 1) % todo_list.length;
}

var add = document.getElementById('add');
var colorscroll_button = document.getElementById('colorscroll');
var colorscroll_run;

colorscroll_init = function colorscroll_init() {
    bg_color["red"] = Math.floor((Math.random() * 256) + 1);
    bg_color["green"] = Math.floor((Math.random() * 256) + 1);
    bg_color["blue"] = Math.floor((Math.random() * 256) + 1);
    document.getElementById('left_panel').className = "col s6 transparent";
    document.getElementById('right_panel').className = "col s6 transparent";
    colorscroll_button.removeEventListener('click', colorscroll_init);
    colorscroll_button.addEventListener('click', colorscroll_stop);
    colorscroll_run = setInterval(colorscroll, 100);
}

colorscroll_stop = function colorscroll_stop() {
    window.clearTimeout(colorscroll_run);
    document.getElementById('left_panel').className = "col s6 light-blue darken-4";
    document.getElementById('right_panel').className = "col s6 orange darken-4";
    colorscroll_button.removeEventListener('click', colorscroll_stop);
    colorscroll_button.addEventListener('click', colorscroll_init);
}

add.addEventListener('click', add_to_list);
colorscroll_button.addEventListener('click', colorscroll_init);

