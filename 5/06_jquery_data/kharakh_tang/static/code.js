var num;

var rand = function rand(){
    num = Math.floor(Math.random() * 20);
}

var intPro = function intPro(){
    rand();
    $.getJSON("../static/MOCK_DATA.json",
	      function(data){
		  $("#id").text(data[num]["id"]);
		  $("#first").text(data[num]["first_name"]);
		  $("#last").text(data[num]["last_name"]);
		  $("#email").text(data[num]["email"]);
		  $("#country").text(data[num]["country"]);

		  console.log(data[num]);  
	      })
    console.log("finished newPro")
};

var myInterval = setInterval(intPro, 5000);

//use getjson to get the data, will return array length 20, each index is a person, and has keys id, first_name, last_name,email, country
$("#b").click(function(){
    var input = $("#data");
    var d = input.val();
    input.val("");
});
