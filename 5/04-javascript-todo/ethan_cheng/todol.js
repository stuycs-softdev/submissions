var remove_card = function remove_card(card) {
    var list_element = card.parentElement.parentElement.parentElement.parentElement.parentElement;
    list_element.parentNode.removeChild(list_element);
    document.getElementById('left_panel').setAttribute("style","height:100vh");
    document.getElementById('right_panel').setAttribute("style","height:100vh");
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
        "<a href=\"javascript:void(0);\" onclick=\"remove_card(this);\">Remove</a>",
        "</div> </div> </div> </div>"
    ];
    var todo_list = document.getElementById("todolist");
    console.log(todo_list);
    var new_item = document.createElement("li");
    template[5] = document.getElementById('new_title').value;
    console.log(template[5]);
    template[8] = document.getElementById('new_content').value;
    console.log(template[8]);
    var combined = "";
    for (var i = 0; i < template.length; i++) {
        combined += template[i];
    }
    console.log(combined);
    new_item.innerHTML = combined;
    console.log(new_item.innerHTML);
    todo_list.appendChild(new_item);
    document.getElementById('new_title').value = "";
    document.getElementById('new_content').value = "";
    document.getElementById('left_panel').setAttribute("style","height:100vh");
    document.getElementById('right_panel').setAttribute("style","height:100vh");
    Materialize.showStaggeredList('#todolist');
};

var add = document.getElementById('add');
add.addEventListener('click', add_to_list);

