var submit = function submit(){
	var toDoList = document.getElementById("toDoList");
	var input = document.getElementById("input").value;
	var attach = document.createElement("li");
	attach.innerHTML = input;
	toDoList.appendChild(attach);
	toDoList.children[toDoList.children.length-1].addEventListener("click", process);
};

var process = function process(){
	var toDoList = document.getElementById("toDoList");
	var result = document.getElementById("result");
	if (result.contains(this)){
		result.removeChild(this);
	} else {
		toDoList.removeChild(this);
		result.appendChild(this);
	}
};

var addMouseEvents = function(item){
		item.addEventListener('mouseover',function(e){
				this.classList.remove('green');
				this.classList.add('blue');
		});
		item.addEventListener('mouseout',function(e){
				this.classList.remove('blue');
				this.classList.add('green');
		});
};

for (var i=0; i<toDoList.length; i++){
		// items[i].addEventListener('click',redCallback);
		addMouseEvents(toDoList[i]);
};

var submitThis= document.getElementById("submitThis");
submitThis.addEventListener("click",submit);
