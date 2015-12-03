var remove_card = function remove_card(card) {
    var list_element = card.parentElement.parentElement.parentElement.parentElement.parentElement;
    list_element.parentNode.removeChild(list_element);
    document.getElementById('left_panel').setAttribute("style","height:100vh");
    document.getElementById('right_panel').setAttribute("style","height:100vh");
}

var mark_as_active = function mark_as_active(card) {
    var card_div = card.parentElement.parentElement;
    card_div.className = "card cyan darken-4";
}

var mark_as_inactive = function mark_as_active(card) {
    var card_div = card.parentElement.parentElement;
    card_div.className = "card blue-grey darken-1";
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

var add = document.getElementById('add');
add.addEventListener('click', add_to_list);

