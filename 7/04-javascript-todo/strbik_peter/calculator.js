var elem = function elem(element){
    if (element.charAt(0) === "#"{
	return document.querySelector(element);
    }
    return document.querySelectorAll(element);
};

var view = elem("#view");
var equals = elem("#equals");
var nums = elem(".num");
var ops = elem(".ops");
var curNum = "";
var oldNum = "";
var res;
var oper;

var setCurNum = function setCurNum(){
    if(res){
	curNum = this.getAttribute("data-num");
	res = "";
    }
    else{
	curNum += this.getAttribute("data-num");
    }
    view.innerHTML = curNum;
};

var switchNum = function switchNum(){
    oldNum = curNum;
    curNum = "";
    oper = this.getAttribute("data-ops");
    equals.setAttribute("data-result", "");
};

var display = function display(){
    oldNum = parseFloat(oldNum);
    curNum = parseFloat(curNum);
    
    if (oper === "plus"){
	res = oldNum + curNum;
    }
    else if (oper === "minus"){
	res = oldNum - curNum;
    }
    else if (oper === "times"){
	res = oldNum * curNum;
    }
    else if (oper === "divided by"){
	res = oldNum / curNum;
    }
    else{
	res = curNum
    }
    
    view.innerHTML = res;
    equals.setAttribute("data-result", res);
    
    oldNum = 0;
    curNum = res;
};

var clear = function clear(){
    oldNum = "";
    curNum = "";
    view.innerHTML = "0";
    equals.setAttribute("data-result", res);
};

for (var i = 0; i < nums.length; i++){
    nums[i].onclick = setCurNum;
}

for (var i = 0; i < ops.length; i++){
    ops[i].onclick = switchNum;
}

equals.onclick = display;
elem("#reset").onclick = clear;

