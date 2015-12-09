var myevent;
function startit() {
    console.log("it started");
    myevent = setInterval(movePichu,100);
}
function stopit() {
    window.clearTimeout(myevent);
}
document.getElementById("start").addEventListener('click',startit);
document.getElementById("stop").addEventListener('click',stopit);
