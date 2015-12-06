var todo_select = 0;
function todo_cycle() {
	if (todo_len > 0) {
		todo.rows[todo_select].classList.remove('success');
		todo_select = (todo_select + 1) % todo_len;
		todo.rows[todo_select].classList.add('success');
	}
}

var done_select = 0;
function done_cycle() {
	if (done_len > 0) {
		done.rows[done_select].classList.remove('success');
		done_select = (done_select + 1) % done_len;
		done.rows[done_select].classList.add('success');
	}
}

var todo_cycle_on = false;
var todo_interval;
document.getElementById('todo_cycle').addEventListener('click', function(e) {
	todo_cycle_on = !todo_cycle_on;
	if (todo_cycle_on) {
		this.classList.remove('btn-default');
		this.classList.add('btn-primary');
		if (todo_len > 0) {
			todo.rows[todo_select].classList.add('success');
		}
		todo_interval = setInterval(todo_cycle, 1000);
	}
	else {
		this.classList.remove('btn-primary');
		this.classList.add('btn-default');
		clearInterval(todo_interval);
		if (todo_len > 0) {
			todo.rows[todo_select].classList.remove('success');
		}
	}
});

var done_cycle_on = false;
var done_interval;
document.getElementById('done_cycle').addEventListener('click', function(e) {
	done_cycle_on = !done_cycle_on;
	if (done_cycle_on) {
		this.classList.remove('btn-default');
		this.classList.add('btn-primary');
		if (done_len > 0) {
			done.rows[done_select].classList.add('success');
		}
		done_interval = setInterval(done_cycle, 1000);
	}
	else {
		this.classList.remove('btn-primary');
		this.classList.add('btn-default');
		clearInterval(done_interval);
		if (done_len > 0) {
			done.rows[done_select].classList.remove('success');
		}
	}
});

var time, hours, minutes, seconds;
function getTime() {
	time = new Date();
	hours   = time.getHours();
	minutes = time.getMinutes();
	seconds = time.getSeconds();
	return ((hours > 12) ? hours - 12 : hours) +
	((minutes < 10) ? ':0' : ':') + minutes +
	((seconds < 10) ? ':0' : ':') + seconds +
	((hours >= 12) ? ' P.M.' : ' A.M.');
}

var todo = document.getElementById('todo');
var done = document.getElementById('done');
var todo_len = 0;
var done_len = 0;
var row;
document.getElementById('new_item').addEventListener('keyup', function(e) {
	if(e.keyCode == 13) {
		if (this.value.length > 0) {
			todo_len++;
			row = todo.insertRow();
			row.insertCell().innerHTML = getTime();
			row.insertCell().innerHTML = this.value;
			this.value = '';
			row.addEventListener('click', function(e) {
				done_len++;
				row = done.insertRow();
				row.insertCell().innerHTML = getTime();
				row.insertCell().innerHTML = this.cells[0].innerHTML;
				row.insertCell().innerHTML = this.cells[1].innerHTML;
				todo_len--;
				if (todo_len > 0) {
					if (this.rowIndex <= todo_select)
						todo_select--;
					else if (this.rowIndex == todo_select + 1) {
						if (todo_select == todo_len) {
							todo_select = 0;
							if (todo_cycle_on)
								todo.rows[0].classList.add('success');
						}
						else if (todo_cycle_on) {
							todo.rows[todo_select + 1].classList.add('success');
						}
					}
				}
				this.parentElement.removeChild(this);
				row.addEventListener('click', function(e) {
					done_len--;
					if (done_len > 0) {
						if (this.rowIndex <= done_select)
							done_select--;
						else if (this.rowIndex == done_select + 1) {
							if (done_select == done_len) {
								done_select = 0;
								if (done_cycle_on)
									done.rows[0].classList.add('success');
							}
							else if (done_cycle_on) {
								done.rows[done_select + 1].classList.add('success');
							}
						}
					}
					this.parentElement.removeChild(this);
				});
			});
		}
	}
});