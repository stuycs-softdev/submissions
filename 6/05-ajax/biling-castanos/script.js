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
	console.log("works");
};
var replaceData = function replaceData(d, i){
    /**d.children[0].innerHTML = i[0];
    
    d is for the div, i is for the item/line of data
    d.children[0] is the first DOM element (in this case, the container) under the div
    d.children[0].innerHTML returns "CrimeName"
    i[0] will be the thing inside the line that you want to replace the child with
    Rinse and repeat**/
    d.children[1].innerHTML = i[10].split("/", 1)[0].split("-",1);//Crime
    d.children[3].innerHTML = i[2].split(" ", 1);//Date
    d.children[5].innerHTML = i[16];//Number
    d.children[6].innerHTML = i[17]+" St";//Street
    d.children[8].innerHTML = i[18];//X
    d.children[9].innerHTML = i[19];//Y
    
};
var myInterval = setInterval(refresh,3000);

//Some dropdown stuff
//$('#dropDownId').val();

var temp = [];
var search = function Search(cr,dt){
    for(var i = 0;i<lines.length;i++){
        if(cr == lines[i][10].split("/", 1)[0].split("-",1)){
            temp.push(lines[i]);
        }
    }
    replaceData(document.getElementById("search"),temp[0]);
};
/*
Loop through the crimes/dates and try to
fill up each dropdown depending on the
types of dates/crimes inside the csv file.

Afterwards, search for the stuff in the csv
file using whatever function. Throw it into
an array and hook up the previous/next buttons
and also use the replaceData function written
above. 

Good luck! 

- Kaizen

P.S. I'll probably work on this also during
systems alongside the semaphone project so if
you need to msg me then do so. 
*/