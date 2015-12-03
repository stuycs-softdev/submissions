var addTask = function addTask(lister, tasker) {
    var listing = document.getElementById(lister);
    var tasking = document.createElement("li");
    tasking.innerHTML = tasker;
    listing.appendChild(tasking);
    listMaster(listing,listing.children.length - 1);
};

var removeTask = function removeTask(tasker) {
    tasker.parentNode.removeChild(tasker);
}

var buttonCallback = function(e) {
    var newTask = document.getElementById("todo");
    var emptyString = "";
    for (i = 0; i < newTask.value.length; i++) {
	emptyString += " ";
    }
    if (newTask.value != emptyString) {
	addTask("whattodo",newTask.value);
    }
    newTask.value = "";
}

var listMaster = function(lister, index) {
    var tasker = lister.children[index];

    tasker.addEventListener("mouseover", function(e) {
	this.style.textDecoration = "line-through";
	this.style.fontWeight = "bolder";
    });

    tasker.addEventListener("mouseout", function(e) {
	this.style.textDecoration = "none";
	this.style.fontWeight = "normal";
    });

    tasker.addEventListener("click",function(e){
	removeTask(this);
	if(lister.id =="whattodo") {
	    addTask("whatdone",this.innerHTML);
	}
    });
}

var button = document.getElementById("add");
button.addEventListener("click",buttonCallback);
