var array;

var load = function load() {
    $.ajax({
        mimeType: 'text/plain',
        url: 'MOCK_DATA.json',
        type: 'POST',
        dataType: 'text',
        success: function(data) {
            array = data.split("\n");
    }});
};

var add_row = function add_row(json_num, table_num) {
    var table = document.getElementById("table");
    if(table_num < 0) {
        table_num = table_num + table.rows.length + 1;
    }
    var json = JSON.parse(array[json_num]);
    var row = table.insertRow(table_num);
    var id = row.insertCell(0);
    var name = row.insertCell(1);
    var email = row.insertCell(2);
    var country = row.insertCell(3);
    var ip_address = row.insertCell(4);
    var shirt_color = row.insertCell(5);
    var credit_card_number = row.insertCell(6);
    var words = row.insertCell(7);
    id.innerHTML = json.id;
    name.innerHTML = json.name;
    email.innerHTML = json.email;
    country.innerHTML = json.country;
    ip_address.innerHTML = json.ip_address;
    shirt_color.innerHTML = json.shirt_color
//    shirt_color.style.color = json.shirt_color;
    credit_card_number.innerHTML = json.credit_card_number;
    words.innerHTML = json.words;
};

var change_row = function change_row() {
    setInterval(function() {
        var json_num = Math.floor(Math.random() * 1000); // gives int in set [0, 999]
        add_row(json_num, -1);
    }, 1500);
}

// mingrui, put your eventlisteners here

document.getElementById("button").addEventListener("click", function(){
    add_row(document.getElementById("text").value - 1, 1);
});


load();
change_row();
