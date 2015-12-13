var load = function load() {
    $.ajax({
        mimeType: 'text/plain',
        url: 'MOCK_DATA.json',
        type: 'POST',
        dataType: 'text',
        success: function(data) {
            var array = data.split("\n");
            var i;
            for(i = 0; i < 3; i++) {
                console.log(array[i]);
            }
    }});
};
load();
