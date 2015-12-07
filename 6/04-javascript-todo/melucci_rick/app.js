/*
  * Rick Melucci
  *
  * This is a website with three parts
  ***The first part is a simple to-do list where one can put in elements
  ***** I will add a remove elements funtionality as soon as possible
  ***The second part is to show hovers and addEventListener()
  ***The third part is a fun little game I tried to make
  *****Basically a fun little snake game but with meme-starting legend "Drake"
  * - Lots of things to still fix, will do as soon as possible but made good progress
*/

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
      var score = 0;
      $("#main").fadeOut(1000);
      $('body').css('background-image', 'url(http://cdn.pitchfork.com/tracks/17609/homepage_large.ee5af306.jpg)');
      $("#drake").show(1000);
      $("#body").css('overflow', 'hidden');
      game();
      $('#scoreboard').show(1000);
      number = document.getElementById('score');
      number.innerHTML = score;
      window.setTimeout(function(){
        $('.drakeheader').hide(500);
        $("#score").show(1000);
      }, 5000);




    }

});

var drake = document.getElementById('drake');
var moveBox = document.getElementById('move');
var phone = document.getElementById('phone');
var divsize = ((Math.random()*100) + 50).toFixed();
var phoneTop = $("#phone").offset().top,
    phoneLeft = $("#phone").offset().left,
    phoneWidth = $("#phone").width(),
    phoneHeight = $("#phone").height();

var game = function game(){
  phone.style.width = divsize;
  phone.style.height = divsize;

  var posx = (Math.random() * $(document).width() - divsize).toFixed();
  var posy = (Math.random() * $(document).height() - divsize).toFixed();

  phone.style.left = posx + "px";
  phone.style.top = posy + "px";

  $("#phone").show(300);
  drake.style.margin = "";
  document.onkeydown = checkKey;


}

function isOver(){
  var drakeLeft = $("#drake").offset().left,
      drakeTop = $("#drake").offset().top,
      drakeWidth = $("#drake").width(),
      drakeHeight = $("#drake").height();

  if((phoneLeft + phoneWidth) > drakeLeft && phoneLeft < (drakeLeft + drakeWidth) && (phoneTop + phoneHeight) > drakeTop && phoneTop < (drakeTop + drakeHeight)){
    return true;
  }
}

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
      $("#drake").animate({
          top: '-=100px'
      });
    }
    else if (e.keyCode == '40') {
      $("#drake").animate({
          top: '+=100px'
      });
    }
    else if (e.keyCode == '37') {
      $("#drake").animate({
          left: '-=100px'
      });
    }
    else if (e.keyCode == '39') {
      $("#drake").animate({
          left: '+=100px'
      });
    }

    if (drake.style.left < 0 || drake.style.left > $(document).width()){
       drake.style.left = 0;
    }
    else if (drake.style.top < 0 || drake.style.top > $(document).height()) {
      drake.style.top = 0;
    }

    if (isOver()){
      console.log("woo");
      score += 1;
      posx = (Math.random() * $(document).width() - divsize).toFixed();
      posy = (Math.random() * $(document).height() - divsize).toFixed();
      phone.style.left = posx + "px";
      phone.style.top = posy + "px";
    }
}


//purpleHover.addEventListener('hover', changeColor("purp"));
//brownHover.addEventListener('hover', changeColor("brown"))
