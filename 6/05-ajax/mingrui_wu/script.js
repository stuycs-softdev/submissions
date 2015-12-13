var array;

var load = function load() {
    $.ajax({
        mimeType: 'text/plain',
        url: 'MOCK_DATA.json',
        type: 'POST',
        dataType: 'text',
        success: function(data) {
            array = data.split("\n");
            var i;
            for(i = 0; i < 3; i++) {
                var json = JSON.parse(array[i]);
                alert(json.name);
            }
    }});
};
load();
