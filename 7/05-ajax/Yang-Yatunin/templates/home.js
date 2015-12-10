var getFriends = function()
{
    // Friends should come in a list of JSON objects, with 'name':name and 'url':url
    $.get("/getFriends", function(friends){
	for (i = 0; i < friends.length; i++)
	{
	    console.log("Got friends: " + friends[i]['name']);
	}

    })

};
