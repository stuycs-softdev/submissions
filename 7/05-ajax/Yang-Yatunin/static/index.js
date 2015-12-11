window.addEventListener('click', function(e) {
    $.ajax({
        'type': 'GET',
        'url': '/getpic',
        success: function(response) {
            console.log(response);
        },
        error: function(error) {
            console.log('aaaa');
            console.log(error);
        }
    });
});