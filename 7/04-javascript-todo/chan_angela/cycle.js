var colorRed = function colorRed(str){
    str.style.color = 'red';
}

var myInterval;
var title = document.getElementById("title");
title.addEventListener('load', function(){
    myInterval = setInterval(colorRed(title),1000);
});
//colorRed(title);
