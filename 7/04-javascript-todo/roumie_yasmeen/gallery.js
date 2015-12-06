var currentImage = document.getElementById("currentImage");

var changeImage(direction) {
  var images = document.getElementsByClassName("hide");
  var x = unhidden(images);
  images[x].style.display = "none"; <!-- hides things that are unhidden -->
  if(!direction){
    var unhide = previousImage(x, images.length);
  } else {
    var unhide = nextImage(x, images.length);
  }
  images[unhide].style.display = "block";
}

var unhidden = function unhidden(images) {
  var x = -1
  for(var i = 0; i < images.length; i++) {
    if images[i].style.display == "block" {
      x = i;
    }
  }
  return x;
};

var nextImage = function nextImage(count, total) {
  if (count == 0)
    return 0;
  else
    return count-1;
};

var previousImage = function previousImage(count, total) {
  if (count == 0)
    return total-1;
  else
    return count-1;
};

window.paused = false;
 
