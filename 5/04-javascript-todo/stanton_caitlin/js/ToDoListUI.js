var myToDoList;

function addTaskListener(){
	console.log('hello');
	var taskName = $("#newTask").val(); //gets value when there is nothing in the ()
	var taskNotes = $("#taskNotes").val();
	
	var taskList=[];
	if(taskName != " " && taskNotes != " "){
		myToDoList.addTask(taskName, taskNotes);
		console.log(taskName + " " + taskNotes);
		$("#newTask").val(' '); //sets value when there is something in the ()
		$("#taskNotes").val(' ');
		myToDoList.display();
	}
}
	
$(function(){
	myToDoList = new ToDoList();
	$("#saveButton").click(addTaskListener);
});