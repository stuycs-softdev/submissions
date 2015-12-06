var player1 = document.querySelector("#player1")
var checkkeys =  function checkkeys(e) {
    if (e.keyCode == '38') {
	console.log('works');
	console.log(player1.style.top.value);
	player1.style.top.value=player1.style.top.value-5;
    }
    else if (e.keyCode == '40') {
	player2.style.top++;
    }
};
document.onkeydown = checkkeys;
