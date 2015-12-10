function newItem() {
  var checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  var span = createSpan('New Item');
  checkbox.addEventListener('click', function(e) { checkboxListener(e) });
  var item = document.createElement('li');
  item.appendChild(checkbox);
  item.appendChild(document.createTextNode(" "));
  item.appendChild(span);
  document.querySelector(
    '.todo .undone').appendChild(item);
}

function checkboxListener(e) {
  var elem = e.target.parentElement;
  elem.parentElement.removeChild(elem);
  if (e.target.checked == true) {
    document.querySelector('.todo .done').appendChild(elem);
  } else {
    document.querySelector('.todo .undone').appendChild(elem);
  }
}

function createSpan(contents) {
  var span = document.createElement('span');
  span.setAttribute('class', 'editable');
  span.appendChild(document.createTextNode(contents));
  span.addEventListener('click', function(e) { editSpan(e.target) });
  return span;
}

function editSpan(span) {
  var item = span.parentElement;
  var input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('value', span.innerHTML);
  input.addEventListener('blur', function(e) { submitSpan(e) });
  input.addEventListener('keyup', function(e) { submitSpan(e) });
  item.replaceChild(input, span);
  input.select();
}

function submitSpan(e) {
  if (e.type == 'blur' || e.type == 'keyup' && e.keyCode == 13) {
    var span = createSpan(e.target.value);
    e.target.parentElement.replaceChild(span, e.target);
  }
}

document.querySelector('.todo .new-item').addEventListener('click', function() { newItem() });
