

function loaddata(){
    var filename = "data.json";
}

var keyname = function(i){
    if (i=="address"){
	return "Address";
    } else if (i=="bank"){
	return "Bank Account Number";
    } else if (i=="birth"){
	return "Birth Date";
    } else if (i=="credit"){
	return "Credit Card Number";
    } else if (i=="email"){
	return "Email";
    } else if (i=="first"){
	return "First Name";
    } else if (i=="last"){
	return "Last Name";
    } else if (i=="phone"){
	return "Phone Number";
    } else if (i=="pin"){
	return "Credit Card PIN";
    }
    return "";
}

var pusher = function(i, dic){
    return ("<tr id='"+i+"'>"+
	"<td><b>"+keyname(i)+"</b></td>"+
	"<td>"+dic[i]+"</td"+
	    "</tr>");
}

var search = function(a){
    a.preventDefault();
    var input = $("#query");
    var d = input.val();
    console.log(d);
    $.getJSON("/search",{query:d},function(data){
	var items = [];
	console.log(data.results);
	dic = data.results;
	items.push(pusher("first",dic));
	items.push(pusher("last",dic));
	items.push(pusher("email",dic));
	items.push(pusher("birth",dic));
	items.push(pusher("phone",dic));
	items.push(pusher("credit",dic));
	items.push(pusher("pin",dic));
	items.push(pusher("bank",dic));
	items.push(pusher("address",dic));
	$("<table/>", {
	    "class": "table",
	    html: "<tbody>" + items.join("") + "</tbody>"
	}).appendTo("#newtable");
    });
}
$('#search').click(search);
