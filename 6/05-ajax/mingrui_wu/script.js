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

load();

var change_row = function change_row() {
    setInterval(function() {
        var n = Math.floor(Math.random() * 1000); // gives int in set [0, 999]
        var json = JSON.parse(array[n]);
        console.log(json.name);
    }, 1000);
}

change_row();
