$(document).ready(function() {
    var rand = function() {
        $.get("/random",function(data) {
            $("#randomResult #name span").text(data.first_name + " " + data.last_name);
            $("#randomResult #gender span").text(data.gender);
            $("#randomResult #email span").text(data.email);
            $("#randomResult #country span").text(data.country);
            $("#randomResult #career span").text(data.career);
        })
    };

    rand();
    
    setInterval(rand,2000);

    $("#searchButton").click(function(e) {
        e.preventDefault();
        var first = $("#firstname").val();
        var last = $("#lastname").val();
        var url;

        if (first) {
            url = "/search?first=" + first;
        }
        else if (last) {
            url = "/search?last=" + last;
        }
        else {
            return;
        }

        $.get(url,function(data) {
            if (data == 'Person Not Found') {
                $("#searchResult #name span").text("NOT FOUND");
                $("#searchResult #gender span").text("NOT FOUND");
                $("#searchResult #email span").text("NOT FOUND");
                $("#searchResult #country span").text("NOT FOUND");
                $("#searchResult #career span").text("NOT FOUND");
            }
            else {
                $("#searchResult #name span").text(data.first_name + " " + data.last_name);
                $("#searchResult #gender span").text(data.gender);
                $("#searchResult #email span").text(data.email);
                $("#searchResult #country span").text(data.country);
                $("#searchResult #career span").text(data.career);
            
            }
        });
    
    })

});


