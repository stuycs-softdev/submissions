console.log("javascript loaded");

var score=0;
var colorList=["redcircle.png","greencircle.png","yellowcircle.png","bluecircle.png","blackcircle.png","purplecircle.png"];
console.log(colorList);

var getRandColor=function getRandColor(){
    var index=Math.floor(Math.random()*6);
   // var index=Math.floor(Math.random*6);
    console.log(index);
   // console.log(index);
    var img=colorList[index];
    return img;
}
console.log(getRandColor());
var changeColor=function changeColor1(s){
   // console.log(this);
   // document.write('<img src="redcircle.png" id="red">');
    
    var i=document.getElementById("first");
    i.src="circles/"+getRandColor();
    first.addEventListener('click', subScore);
    
    var j=document.getElementById("second");
}

var myInterval = setInterval(changeColor,1000);

var subScore=function subScore(){
    console.log(this);
    score=score-1;
    var s=document.getElementById("score");
    s.innerHTML="Score: "+score;
}


    
   

