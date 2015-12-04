ind = -1;

var highlight = function highlight(e){
    ind++;
    items=document.getElementById("list").children;
    ele = items[ind%items.length];
    ele.style.color="yellow";
    ele2 = items[(ind-1)%items.length];
    ele2.style.color="black";
};

var highlighter = function highlighter(i){
    items=document.getElementById("list").children;
    ele = items[i%items.length];
    ele.style.color="yellow";
    ele2 = items[(i-1)%items.length];
    ele2.style.color="black";
};



var b1=document.getElementById("b1");
b1.addEventListener('click',highlight);

var b2=document.getElementById("b2");
b2.addEventListener('click',function(e){
    items=document.getElementById("list").children;
    for(i=0;i<items.length;i++){
	window.setTimeout(highlighter(i),1000);
    }
});
