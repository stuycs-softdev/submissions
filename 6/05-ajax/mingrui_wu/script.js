var load = function load() {
    $.ajax({
        mimeType: 'text/plain',
        url: 'MOCK_DATA.json',
        type: 'POST',
        dataType: 'text',
        success: function(data) {
            console.log(data);
        }});
};
load();
