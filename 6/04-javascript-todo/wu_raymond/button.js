console.log("loaded");
//List Initialization
var array = [];
array.push("Do Not Push This Button");
array.push("Do Not Push This Button...");
array.push("Stop it!");
array.push("Can't you read?!?!?");
array.push("Try Now!");//index = 4
array.push("Great, now I'm stuck up here.");
array.push("I hope you're happy...");
array.push("Stop Clicking to Help Me Back Down");
array.push("You can't possibly click me now!");//index = 8
array.push("STOP IT!");
array.push("You're making me angry.");
array.push("You wouldn't like it when I'm angry...");
array.push("RARRRGARRAARARA");//index = 12
array.push("...");
array.push("...");
array.push("...");
array.push("Time to intiate epic dodging skills");
array.push("Can't Touch This!");//index = 17
array.push("Muahahahahahahaha!");
array.push("*pant pant*");
array.push("...");
array.push("Seems like running won't work...");
array.push("Time to use covert tactics.");
array.push("OMG WHERE DID I GO");//index = 23
array.push("How did you do that?");
array.push("Are you a wizard?");
array.push("Or a hacker?");
array.push("Either ways you should have better things to do than this...");
array.push("Where's Waldo?");//index = 28
array.push("...");
array.push("..");
array.push(".");
array.push("No.");
array.push("I refuse to give you any more satisfaction.");
array.push("Go Away.");
array.push("Arrivederci");
array.push("Adios");
array.push("Au Revoir");
array.push("Why are you still here?");
array.push("...");
array.push("Let me tell you a story");
array.push("inspired by http://sprott.physics.wisc.edu/pickover/pc/redbut.html");
array.push("It starts off with...");
//Comment Initialization
var index = 0;
var pushing = 0;
document.getElementById("comment").innerHTML=array[index];
//Button Clicky Functions
var buttonPressed = function(e){
	e.preventDefault();
	pushing = 1;
	this.src="static/pressed.png";
	//console.log('pushing');
}
var buttonPressed2 = function(e){
	e.preventDefault();
	this.src="static/pressed.png";
}
var buttonReleased = function(e){
	var l=document.getElementsByTagName('img');
	//console.log(l.length);
	for(i = 0; i < l.length; i++){
		l[i].src="static/unpressed.png";
		//console.log(i);
	}
	if (pushing){
		index += 1;
		//console.log(document.getElementById("comment").innerHtml);
		if(index >= array.length){
			index = 0;
		}
		checkEvent();
		document.getElementById("comment").innerHTML=array[index];
		//console.log('works');
		pushing = 0;
	}
}
var button = document.images["button"];
button.addEventListener('mousedown', buttonPressed);
document.addEventListener('mouseup',buttonReleased)
//Fun Functions for random events
var myInterval;
var myInterval2;
var percent =45;
var left = 1;
var btn;
function checkEvent(){
	if(index == 4){
		button.style.marginTop="-20px";
	}
	if(index == 8){
		button.style.height="10px";
		button.style.width="10px";
		button.style.marginTop="100px";
	}
	if(index == 9){
		button.style.height="auto";
		button.style.width ="auto";
	}
	if(index == 12){
		button.style.height="100%";
		button.style.width ="100%";
	}
	if(index == 13){
		button.style.height="auto";
		button.style.width ="auto";
	}
	if(index == 17){
		myInterval = setInterval(moveButton,100);
	}
	if(index == 18){
		myInterval2 = setInterval(moveButton,100);
	}
	if(index == 19){
		clearInterval(myInterval2);
	}
	if(index == 20){
		clearInterval(myInterval);
		button.style.marginLeft="auto";
	}
	if(index == 23){
		button.style.marginLeft="10000px";
	}
	if(index == 24){
		button.style.marginLeft="auto";
	}
	if(index == 28){
		button.remove();
		for(i = 0; i < 18; i++) {
			btn = document.createElement("img");
			btn.setAttribute('src',"static/unpressed.png");
			if(i == 15){
				button = btn;
				//button.setAttribute('class',"button");
				button.setAttribute('name',"button");
				button.addEventListener('mousedown',buttonPressed);
				document.getElementById("area").appendChild(button);
			}
			else{
				btn.addEventListener('mousedown',buttonPressed2);
				btn.setAttribute('name',"temp");
				document.getElementById("area").appendChild(btn);
			}
		}
	}
	if(index==29){
		button.setAttribute('class','button');
		while(document.images['temp'])
			document.images['temp'].remove();
	}
}

function moveButton(){
	if(left)
		percent -= 2;
	else
		percent += 2;
	button.style.marginLeft=percent + "%";
	console.log(percent);
	if(percent < 20)
		left = 0;
	if(percent > 80)
		left = 1;
}