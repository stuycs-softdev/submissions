ind = 0;

var highlight = function highlight(){
    items=document.getElementById("list").children;
    console.log(items);
    document.getElementById("list")[ind-1].style.color="black";
    items[ind].style.color="yellow";  
};

var b1=document.getElementById("b1");
b1.addEventListener('click',highlight);
