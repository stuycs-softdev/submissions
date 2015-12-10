ind = -1;
ind2 = ind-1;
i=-1;
i2=i-1;

var highlight = function highlight(e){
    ind++;
    var items=document.getElementById("list").children;
    var ele = items[ind%items.length];
    ele.style.color="yellow";
    if (ind%items.length==0){
	ind2=items.length-1;
    }else{
	ind2=ind-1;
    }
    var ele2 = items[(ind2)%items.length];
    ele2.style.color="black";
};


var highlight2 = function highlight2(){
    i++;
    var items=document.getElementById("list").children;
    var ele = items[i%items.length];
    ele.style.color="yellow";
    if (i%items.length==0){
	i2=items.length-1;
    }else{
	i2=i-1;
    }
    var ele2 = items[(i2)%items.length];
    ele2.style.color="black";
};

var highlighter = function highlighter(e){
    myInterval = setInterval(highlight2,1000);
};

var b1=document.getElementById("b1");
b1.addEventListener('click',highlight);

var b2=document.getElementById("b2");
b2.addEventListener('click',highlighter);

var b3=document.getElementById("b3");
b3.addEventListener('click',function(e){
    clearInterval(myInterval);
});

