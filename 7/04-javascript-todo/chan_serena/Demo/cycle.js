/*
var i = 0;
var imgs = new Array();

imgs[0] = "static/img1.jpg"
imgs[1] = "static/img2.jpg"
imgs[2] = "static/img3.jpg"
imgs[3] = "static/img4.jpg"

function imageCycle() {

    document.img.src = imgs[i];
    if (i < imgs.length - 1) {
	i++;
    }
    else {
	i=0;
    }
    setTimeout("imageCycle(), 3000");
    
}


var ImgFade = function(){
    var myInterval = setInterval(function(){
	this.style.opacity = 0;
    }, 1000);
}

item.addEventListener("load", function(e){
    var myInterval = setInterval(function(){
	this.style.opacity = 1;
    }, 1000);
});


item.addEventListener("load", function(e){
    setTimeout(ImgFade(), 1000);
});
    
window.onload = imageCycle();
*/

var ul;
var li_items; 
var li_num;
var image_num = 0;
var slider_width = 0;
var image_width;
var current = 0;
function init(){    
    ul = document.getElementById('image_slider');
    li_items = ul.children;
    li_num = li_items.length;
    for (i = 0; i < li_num; i++){
        // nodeType == 1 means the node is an element.
        // in this way it's a cross-browser way.
        //if (li_items[i].nodeType == 1){
            //clietWidth and width???
            image_width = li_items[i].childNodes[0].clientWidth;
            slider_width += image_width;
            image_num++;
    }
    
    ul.style.width = parseInt(slider_width) + 'px';
    slider(ul);
}

function slider(){      
        animate({
            delay:17,
            duration: 3000,
            delta:function(p){return Math.max(0, -1 + 2 * p)},
            step:function(delta){
                    ul.style.left = '-' + parseInt(current * image_width + delta * image_width) + 'px';
                },
            callback:function(){
                current++;
                if(current < li_num-1){
                    slider();
                }
                else{
                    var left = (li_num - 1) * image_width;                   
                    setTimeout(function(){goBack(left)},2000);              
                    setTimeout(slider, 4000);
                }
            }
        });
}
function goBack(left_limits){
    current = 0;    
    setInterval(function(){
        if(left_limits >= 0){
            ul.style.left = '-' + parseInt(left_limits) + 'px';
            left_limits -= image_width / 10;
        }   
    }, 17);
}
function animate(opts){
    var start = new Date;
    var id = setInterval(function(){
        var timePassed = new Date - start;
        var progress = timePassed / opts.duration
        if(progress > 1){
            progress = 1;
        }
        var delta = opts.delta(progress);
        opts.step(delta);
        if (progress == 1){
            clearInterval(id);
            opts.callback();
        }
    }, opts.dalay || 17);
}
window.onload = init;
