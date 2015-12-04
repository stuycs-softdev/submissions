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

purpleHover.addEventListener('onmouseover', function(){
  if (mouseenter()) {
    purpleHover.style.color = "white";
  }
});

brownHover.addEventListener('onmouseenter', function(){
  if (mouseenter()) {
    brownHover.style.color = "brown";
  }
});




//purpleHover.addEventListener('hover', changeColor("purp"));
//brownHover.addEventListener('hover', changeColor("brown"))
