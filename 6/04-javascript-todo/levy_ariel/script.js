var show = function show(element) {
	element.style.visibility = "visible";
};
var hide = function hide(element) {
	element.style.visibility = "collapse";
};

var showAdd = function showAdd() {
	var addForm = document.getElementById("addTask");
	show(addForm);
	var content = document.getElementById("content");
	content.style.top = "0px";
};
	
var hideAdd = function hideAdd() {
	var addForm = document.getElementById("addTask");
	hide(addForm);
	var content = document.getElementById("content");
	content.style.top = "-250px";
};

var addTask = function addTask() {
	console.log("adding");
	var newName = document.getElementById("inputName").value;
	var newDate = document.getElementById("inputDate").value;
	var newNotes = document.getElementById("inputNotes").value;	

	var datePattern = new RegExp("[0-9][0-9]-[0-9][0-9]-[0-9][0-9][0-9][0-9]");
	if (datePattern.test(newDate)) {
		var todoTable = document.getElementById("todo-table");
		var num = 1;
		while (num < todoTable.rows.length && isLater(newDate, todoTable.rows[num].cells[2].innerHTML)) {
			num += 1;
		}

		var row = todoTable.insertRow(num);
		var boxCell = row.insertCell(0);
		var nameCell = row.insertCell(1);
		var dateCell = row.insertCell(2);
		var notesCell = row.insertCell(3);
		boxCell.innerHTML = "<input type='checkbox'>";	
		nameCell.innerHTML = newName;
		dateCell.innerHTML = newDate;
		notesCell.innerHTML = newNotes;
		addMouseEvents();
		checkDates();
	}
};

var isLater = function isLater(date1, date2) {
	var splits1 = date1.split("-");
	var splits2 = date2.split("-");
	for (var i=2; i >= 0; i--) {
		var num1 = parseInt(splits1[i]);
		var num2 = parseInt(splits2[i]);
		if (num1 > num2)
			return true;
		else if (num2 > num1)
			return false;
	}
	return true;
};

var removeRow = function removeRow(row, table) {
	for (var i=0; i < table.rows.length; i++) {
		if (row == table.rows[i]) {
			table.deleteRow(i);
			return i;
		}
	}
};

var setDone = function setDone() {
	var todoTable = document.getElementById("todo-table");
	var row = this;
	removeRow(row, todoTable);
	var doneTable = document.getElementById("done-table");
	var newRow = doneTable.insertRow(1);
	var cell0 = newRow.insertCell(0);
	cell0.innerHTML = "<input type='checkbox' checked>";	
	for (var i=1; i < row.cells.length; i++) {
		var cell = newRow.insertCell(i);
		cell.innerHTML = row.cells[i].innerHTML;
	}
};

var addMouseEvents = function addMouseEvents() {
	var todoRows = document.getElementById("todo-table").rows;
	for (var i=1; i < todoRows.length; i++) {
		todoRows[i].addEventListener('click',setDone);
	}
};
addMouseEvents();

/* code from Stack Overflow
 * http://stackoverflow.com/questions/1531093/how-to-get-current-date-in-javascript
 * answer by Samuel Meadows
 */
var curDate = function curDate() {
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();
	if(dd<10) {
		    dd='0'+dd
	} 
	if(mm<10) {
		    mm='0'+mm
	} 
	today = dd+'-'+mm+'-'+yyyy;
	return today;
};
var docDate = document.getElementById("date");
docDate.innerHTML = curDate();

var checkDates = function checkDates() {
	var todoRows = document.getElementById("todo-table").rows;
	var today = curDate();
	for (var i=1; i < todoRows.length; i++) {
		var dateCell = todoRows[i].cells[2];
		if (dateCell.innerHTML == today) {
			dateCell.style.color = '#ff0000';
		}
	}
};
checkDates();

var todayDone = function todayDone() {
	var today = curDate();
	var todoTable = document.getElementById("todo-table");
	while (todoTable.rows.length > 1 && todoTable.rows[1].cells[2].innerHTML == today) {
		todoTable.rows[1].setDone();
		//todoTable.deleteRow(1);
	}
};

var clearDone = function clearDone() {
	var doneTable = document.getElementById("done-table");
	while (doneTable.rows.length > 1) {
		doneTable.deleteRow(1);
	}
};

