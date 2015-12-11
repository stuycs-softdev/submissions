function getNewImage() {
    //gets a random image from api of options
}

setInterval(function() {
    var oldimage = document.getElementById('pic');
    oldimage.src = getNewImage();
}, 5000);
