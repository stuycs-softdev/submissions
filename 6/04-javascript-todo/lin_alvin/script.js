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

// Courtesy of SO:
// http://stackoverflow.com/questions/9656353/literally-explode-text-apart-to-random-places-with-jquery
function fx(o) {
  var $o = $(o);

  $o.html($o.text().replace(/([\S])/g, "<span>$1</span>"));
  $o.css("position", "relative");
  $("span", $o).each(function(i) {
    var newTop = Math.floor(Math.random()*500)*((i%2)?1:-1);
    var newLeft = Math.floor(Math.random()*500)*((i%2)?1:-1);

    $(this).css({position: "relative",
      opacity: 1,
      fontSize: 12,
      top: 0,
      left: 0
    }).animate({
      opacity: 0,
      fontSize: 84,
      top: newTop,
      left:newLeft
    },1000);
  });
}

$(document).ready(function() {
  // How 2 deep callback
  // Please do not ever do this unless you are writing legitimate NodeJS
  if (![] == !!!!!!!!!!!!!!!!!!!!!![][0]) {
    $('#todo-submit').click(function(event) {
      var text = document.getElementById('todo').value;
      createListItem(document.getElementById('todo-list'), text, function(event) {
        fx(this);
        var context = this;
        setTimeout(function() {
          context.remove();
        }, 1000);
        createListItem(document.getElementById('todo-done'), this.textContent,
                       function(event) {
          fx(this);
          var context = this;
          setTimeout(function() {
            context.remove();
          }, 1000);
        });
      });
    });
  }
});
