var green = document.getElementById("green");
var red = document.getElementById("red");
var yellow = document.getElementById("yellow");
var blue = document.getElementById("blue");
var statusElement = document.getElementById("status");
var levelElement = document.getElementById("level");
var start = document.getElementById("start");

var level = 1;
var status = "Wait";
var gameLoop;
var count = 0;
var numberFlash = 4;
var answer = [];
var user = [];
correct = false;
updateLevel();
updateStatus();

start.addEventListener("click", starting);

function updateLevel() {
  levelElement.innerHTML = level;
}
function updateStatus() {
  statusElement.innerHTML = status;
  if (status == "Wait") {
    statusElement.style.color = "blue";
  } else if (status == "Ready") {
    statusElement.style.color = "green";
  } else if (status == "Incorrect") {
    statusElement.style.color = "red";
  } else {
    statusElement.style.color = "black";
  }
}
function starting() {
  this.innerHTML = "Stop";
  gameLoop = setInterval(game, 2000);
  level = 1;
  status = "Wait";
  updateLevel();
  updateStatus();
  this.addEventListener("click", stop);
  this.removeEventListener("click", starting);
}
function stop() {
  this.innerHTML = "Start";
  clearInterval(gameLoop);
  status = "End"
  updateStatus();
  user = [];
  answer = [];
  numberFlash = 4;
  count = 0;
  this.addEventListener("click", starting);
  this.removeEventListener("click", stop);
}
function resetColors() {
  green.style.opacity = 0.6;
  red.style.opacity = 0.6;
  yellow.style.opacity = 0.4;
  blue.style.opacity = 0.6;
}
function letUserClick() {
  green.addEventListener("click", greenClick);
  red.addEventListener("click", redClick);
  yellow.addEventListener("click", yellowClick);
  blue.addEventListener("click", blueClick);
  green.classList.add("ready");
  red.classList.add("ready");
  yellow.classList.add("ready");
  blue.classList.add("ready");
}
function noUserClick() {
  green.removeEventListener("click", greenClick);
  red.removeEventListener("click", redClick);
  yellow.removeEventListener("click", yellowClick);
  blue.removeEventListener("click", blueClick);
  green.classList.remove("ready");
  red.classList.remove("ready");
  yellow.classList.remove("ready");
  blue.classList.remove("ready");
}
function checkIfCorrect() {
  if (user[user.length - 1] != answer[user.length - 1]) {
    return false;
  } else {
    return true;
  }
}
function wrong() {
  clearInterval(gameLoop);
  status = "Incorrect";
  updateStatus();
  noUserClick();
  start.innerHTML = "Start"
  start.addEventListener("click", starting);
  start.removeEventListener("click", stop);
  count = 0;
  user = [];
  answer = [];
  numberFlash = 4;
}
function greenClick() {
    green.style.opacity = 1;
    setTimeout(function() {
      green.style.opacity = 0.6;
    }, 1000);
    user.push(0);
    if (checkIfCorrect()) {
      if (user.length == answer.length) {
        correct = true;
        noUserClick();
      }
    } else {
      wrong()
    }
}
function redClick() {
    red.style.opacity = 1;
    setTimeout(function() {
      red.style.opacity = 0.6;
    }, 1000);
    user.push(1);
    if (checkIfCorrect()) {
      if (user.length == answer.length) {
        correct = true;
        noUserClick();
      }
    } else {
      wrong()
    }
}
function yellowClick() {
    yellow.style.opacity = 1;
    setTimeout(function() {
      yellow.style.opacity = 0.4;
    }, 1000);
    user.push(2);
    if (checkIfCorrect()) {
      if (user.length == answer.length) {
        correct = true;
        noUserClick();
      }
    } else {
      wrong()
    }
}
function blueClick() {
    blue.style.opacity = 1;
    setTimeout(function() {
      blue.style.opacity = 0.6;
    }, 1000);
    user.push(3);
    if (checkIfCorrect()) {
      if (user.length == answer.length) {
        correct = true;
        noUserClick();
      }
    } else {
      wrong()
    }
}
function game() {
  var random;
  if (count < numberFlash) {
    if (answer[count] == undefined) {
      random = Math.floor((Math.random() * 4));
      answer.push(random);
    }
    switch(answer[count]) {
      case 0:
        green.style.opacity = 1;
        break;
      case 1:
        red.style.opacity = 1;
        break;
      case 2:
        yellow.style.opacity = 1;
        break;
      case 3:
        blue.style.opacity = 1;
        break;
    }
    setTimeout(function() {
      resetColors();
    }, 1000);
    count++;
  } else {
    if (correct) {
      correct = false;
      level++;
      status = "Wait";
      updateLevel();
      updateStatus();
      count = 0;
      user = [];
      numberFlash++;
    } else {
      status = "Ready";
      letUserClick();
      updateStatus();
    }
  }
 }
