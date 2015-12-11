var cards = [];
cards.push("mirror force");
cards.push("bottomless trap hole");
cards.push("compulsory evacuation device");
cards.push("solemn warning");
cards.push("clear wing synchro dragon");
cards.push("moonlight rose dragon");
cards.push("stardust dragon");
cards.push("black rose dragon");
cards.push("trishula dragon of the ice barrier");
var index = 0;

var request = new XMLHttpRequest();
var myInterval;

var updateCard = function updateCard(){
console.log('yes');
var name = cards[index];
var url = 'http://yugiohprices.com/api/get_card_prices/' + name;
request.open('GET', url);
request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
}
//Code to replace h1 and h2 with data
};

request.send();
index = index + 1;
if (index >= cards.length) {
	index = 0;
	}
}

window.addEventListener('load', function(){
		myInterval = setInterval(updateCard,1000);
});

var buttonCallback = function buttonCallback(e){
	var l = document.getElementbyId("name").value;
	var url = 'http://yugiohprices.com/api/get_card_prices/' + l;
	request.open('GET', url);
	request.onreadystatechange = function () {
 		 if (this.readyState === 4) {
    		console.log('Status:', this.status);
    		console.log('Headers:', this.getAllResponseHeaders());
    		console.log('Body:', this.responseText);
  		}
	}
	//Code to replace h4 and h5 with retrieved data and set their styles to visible
}
}

var submit = document.getElementbyId("entry");
entry.addEventListener('click', buttonCallback);