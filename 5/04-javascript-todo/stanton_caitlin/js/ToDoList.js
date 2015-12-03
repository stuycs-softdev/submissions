var addItem = function addItem(name, deets) {
	var list = document.getElementById('listoftasks');
	var item = document.createElement('li');
	item.innerHTML = name + ": " + deets;
	list.appendChild(item);
	item.addEventListener('click',amDone);
};

var submitForm = function submitForm(e) {
	taskName = $("#newTask").val(); //gets value when there is nothing in the ()
	taskNotes = $("#taskNotes").val();
	
	if(taskName != " " && taskNotes != " "){
		addItem(taskName, taskNotes);
		console.log(taskName + " " + taskNotes);
		$("#newTask").val(' '); //sets value when there is something in the ()
		$("#taskNotes").val(' ');
	}
};

var button = document.getElementById('saveButton');
button.addEventListener('click',submitForm);

var amDone = function amDone() {
	var doneparent = document.getElementById('done');
	var listparent = document.getElementById('listoftasks');
	if (doneparent.contains(this)) {
		console.log('Removing ' + this);
		doneparent.removeChild(this);
	} else {
		listparent.removeChild(this);
		doneparent.appendChild(this);
	}
}

var tasklist = document.getElementById('listoftasks');
var items = tasklist.children;
var donelist = document.getElementById('done');
var doneitems = donelist.children;

console.log(items);
for (var i = 0; i < items.length; i++) {
	console.log('sup');
	items[i].addEventListener('mouseover',amDone);
	doneitems[i].addEventListener('mouseover',amDone);
}