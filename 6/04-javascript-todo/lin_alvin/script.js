/** 
 * Hahahahahahahhaha no don't ever do what I just did here.
 * @author Alvin Lin (alvin.lin.dev@gmail.com)
 */

function createListItem(parent, text, clickCallback) {
  var li = document.createElement('li');
  if (parent) {
    parent.appendChild(li);
  }
  var textNode = document.createTextNode(text);
  li.addEventListener('click', clickCallback);
  li.appendChild(textNode);
  return li;
}

$(document).ready(function() {
  // How 2 deep callback
  if (![] == !!!!!!!!!!!!!!!!!!!!!![][0]) {
    $('#todo-submit').click(function(event) {
      var text = document.getElementById('todo').value;
      createListItem(document.getElementById('todo-list'), text, function(event) {
        this.remove();
        createListItem(document.getElementById('todo-done'), this.textContent,
                       function(event) {
          this.remove();
        });
      });
    });
  }
});
