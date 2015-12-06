var slideCount = 0;

var add = function add(item, list){
    var listItem = document.createElement("li");
    listItem.innerHTML = item;
    list.appendChild(listItem);
};

var itemAddition = function itemAddition(){
  var thelist = document.getElementById('thelist');
  var inputBox = document.getElementById('add-task');
  var input = inputBox.value;
  if (input != "") {
    add(input, thelist);
  }
  inputBox.value = "";
}

var btn = document.getElementById('submit-button');
btn.addEventListener('click', itemAddition);

var purpleHover = document.getElementById('hover1');
var brownHover = document.getElementById('hover2');
var yellowHover = document.getElementById('hover3');

var checkHover = function checkHover(){
  purpleHover.onmouseover = function(){
    purpleHover.style.color = "white";
  }
  purpleHover.onmouseout = function(){
    purpleHover.style.color = "";
  }

  brownHover.onmouseover = function(){
    brownHover.style.color = "brown";
  }
  brownHover.onmouseout = function(){
    brownHover.style.color = "";
  }

  yellowHover.onmouseover = function(){
    yellowHover.style.color = "yellow";
  }
  yellowHover.onmouseout = function(){
    yellowHover.style.color = "";
  }
}

checkHover();
/*purpleHover.addEventListener('mouseover', function(){
    purpleHover.style.color = "white";
});

brownHover.addEventListener('mouseover', function(){
    brownHover.style.color = "brown";
});

yellowHover.addEventListener('mouseover', function(){
    yellowHover.style.color = "yellow";
});*/

$("#next").click(
  function () {

    /*if(slideCount == 0){
      $("#main1").show();
      slideCount ++;
    }*/

    if(slideCount == 0){
      $("#main1").hide(1000);
      $("#main2").show(300);
      slideCount ++;
    }

    else if (slideCount == 2) {
      $("#main2").hide(1000);
      slideCount ++;
    }

    else if (slideCount == 1) {
      $("#main").fadeOut(1000);
      $('body').css('background-image', 'url(http://cdn.pitchfork.com/tracks/17609/homepage_large.ee5af306.jpg)');
      $("#drake").show(1000);
      $("#body").css('overflow', 'hidden');
      game();
    }

});

var game = function game(){
  document.onkeydown = checkKey;
}

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        console.log("up")
    }
    else if (e.keyCode == '40') {
        console.log("down");
    }
    else if (e.keyCode == '37') {
       console.log("left");
    }
    else if (e.keyCode == '39') {
       console.log("right");
    }

}


//purpleHover.addEventListener('hover', changeColor("purp"));
//brownHover.addEventListener('hover', changeColor("brown"))
