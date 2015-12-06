var thluffy = document.getElementById('thluffy');

var blank = document.getElementById('blank');
var currpos = 0;
var isfacingright = true;
var isshrinking = true;
thluffy.width = 400;
var currangle = 0;
	
//second attempt; trigonometric flip; looks much better
var trigflip = function trigflip(){
	if (isshrinking){
		if (isfacingright){
			if (currangle <= 90){
				thluffy.width = 564 * Math.cos((currangle/180)*Math.PI);
				blank.width = 400 + (564 - thluffy.width)/2
				currangle += 1;
			}
			else{
				//thluffy.width = 400;
				//blank.width = 400;
				currangle = 89; //only do 90 once
				thluffy.src = "thluffy-left.png";
				isfacingright = false;
				isshrinking = false;
			}
		}
		else{ //is facing left
			if (currangle <= 90){
				thluffy.width = 564 * Math.cos((currangle/180)*Math.PI);
				blank.width = 400 + (564 - thluffy.width)/2
				currangle += 1;
			}
			else{ //reached width of 0
				//thluffy.width = 400;
				//blank.width = 400;
				currangle = 89; //only do 90 once
				thluffy.src = "thluffy-right.png"
				isfacingright = true;
				isshrinking = false;
			}	
		}
	}
	else{ //is expanding
		if (isfacingright){
			if (currangle >= 0){
				thluffy.width = 564 * Math.cos((currangle/180)*Math.PI);
				blank.width = 400 + (564 - thluffy.width)/2
				currangle -= 1;
			}
			else{
				//thluffy.width = 400;
				//blank.width = 400;
				//thluffy.src = "thluffy-right.png";
				//isfacingright = true;
				currangle = 1;
				isshrinking = true;
			}
		}
		else{ //is facing left
			if (currangle >= 0){
				thluffy.width = 564 * Math.cos((currangle/180)*Math.PI);
				blank.width = 400 + (564 - thluffy.width)/2
				currangle -= 1;
			}
			else{ //reached end and currpos = 0
				//thluffy.width = 400;
				//blank.width = 400;
				//thluffy.src = "thluffy-left.png";
				//isfacingright = false;
				currangle = 1; //only do 0 once
				isshrinking = true;
			}
		}
	}
};

//first attempt; linear flip; looks much worse; sets max width to 400 for simplicity.
var linearflip = function linearflip(){
	if (isshrinking){
		if (isfacingright){
			if (currpos < 200){
				thluffy.width -= 2;
				blank.width += 1;
				currpos += 1;
			}
			else{
				//thluffy.width = 400;
				//blank.width = 400;
				//currpos = 0;
				thluffy.src = "thluffy-left.png";
				isfacingright = false;
				isshrinking = false;
			}
		}
		else{ //is facing left
			if (currpos < 200){
				thluffy.width -= 2;
				blank.width += 1;
				currpos += 1;
			}
			else{ //reached width of 0
				//thluffy.width = 400;
				//blank.width = 400;
				//currpos = 0;
				thluffy.src = "thluffy-right.png"
				isfacingright = true;
				isshrinking = false;
			}	
		}
	}
	else{ //is expanding
		if (isfacingright){
			if (currpos > 0){
				thluffy.width += 2;
				blank.width -= 1;
				currpos -= 1;
			}
			else{
				//thluffy.width = 400;
				//blank.width = 400;
				//currpos = 0;
				//thluffy.src = "thluffy-right.png";
				//isfacingright = true;
				isshrinking = true;
			}
		}
		else{ //is facing left
			if (currpos > 0){
				thluffy.width += 2;
				blank.width -= 1;
				currpos -= 1;
			}
			else{ //reached end and currpos = 0
				//thluffy.width = 400;
				//blank.width = 400;
				//currpos = 0;
				//thluffy.src = "thluffy-left.png";
				//isfacingright = false;
				isshrinking = true;
			}
		}
	}
};

//myInterval = setInterval(linearflip,10);
myInterval = setInterval(trigflip,20);