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
    first.addEventListener('click', modScore);
    
    var j=document.getElementById("second");
    j.src="circles/"+getRandColor();
    second.addEventListener('click', modScore);
}

var myInterval = setInterval(changeColor,1000);

var modScore=function modScore(){
    console.log(this);
    var i=document.getElementById("first");
    var j=document.getElementById("second");
    if (i.src==j.src){
	score++;
    }else{
	score--;
    }
    var s=document.getElementById("score");
    s.innerHTML="Score: "+score;
}


    
   

