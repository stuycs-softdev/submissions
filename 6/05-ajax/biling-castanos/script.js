console.log("Welcome back");

/*********Initial Load***********/
//Receives the data, throws it into the lines array, header line is removed
var lines = [];
$.get("data.CSV", function processData(allText){
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {

            var tarr = [];
            for (var j=0; j<headers.length; j++) {
                tarr.push(/*headers[j]+":"+*/data[j]);
            }
            lines.push(tarr);
        }
    }
});
//Populate the dropdown boxes

/*********Random Criminal***********/
//Refreshes the...thing every 5 seconds (5000 ms)
var randomDIV = document.getElementById("random");
var refresh = function refresh(){
	var index = Math.floor((Math.random() * 1000));//returns random # btwn 0 and 1000
	var item = lines[index];
	replaceData(randomDIV, item);
};
var replaceData = function replaceData(d, i){
    /**d.children[0].innerHTML = i[0];
    
    d is for the div, i is for the item/line of data
    d.children[0] is the first DOM element (in this case, the container) under the div
    d.children[0].innerHTML returns "CrimeName"
    i[0] will be the thing inside the line that you want to replace the child with
    Rinse and repeat**/
};
var myInterval = setInterval(refresh,5000);

//Some dropdown stuff
//$('#dropDownId').val();