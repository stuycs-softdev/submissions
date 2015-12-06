var colorRed = function colorRed(str){
    str.style.color = '#CC231E';
}
var colorBlack = function colorBlack(str){
    str.style.color = 'OldLace';
}
var colorGreen = function colorGreen(str){
    str.style.color = "#34A65F";
}

var count = 1;
var colorChange = function colorChange(){
    count = 1;
    while(count<16){
	var str = document.getElementById(count.toString());
	var myVar = setTimeout(colorRed, 250, str);
	var myVar = setTimeout(colorGreen, 500, str);
	var myVar = setTimeout(colorBlack, 750, str);
	count = count+3;
    } count = 2;
    while(count<16){
	var str = document.getElementById(count.toString());
	var myVar = setTimeout(colorGreen, 250, str);
	var myVar = setTimeout(colorBlack, 500, str);
	var myVar = setTimeout(colorRed, 750, str);
	count = count+3;
    } count = 3;
    while(count<16){
	var str = document.getElementById(count.toString());
	var myVar = setTimeout(colorBlack, 250, str);
	var myVar = setTimeout(colorRed, 500, str);
	var myVar = setTimeout(colorGreen, 750, str);
	count = count+3;
    }
}

var myInterval;
var title = document.getElementById("1");
window.addEventListener('load', function(){
    console.log("hello");
    setInterval(colorChange, 750);
});
//colorRed(title);

/* Please note! The Falling snow is NOT mine! Here is the link for reference
http://www.kirupa.com/html5/the_falling_snow_effect.htm */

