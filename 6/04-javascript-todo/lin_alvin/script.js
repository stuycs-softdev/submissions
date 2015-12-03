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

var counter = 0;
function cycle() {
  var lists = document.getElementById('cycler-list').children;
  for (var i = 0; i < lists.length; ++i) {
    lists[i].style.color = 'black';
  }
  lists[counter].style.color = 'red';
  counter = (counter + 1) % lists.length;
}

$(document).ready(function() {
  // How 2 deep callback
  // Please do not ever do this.
  if (![] == !!!!!!!!!!!!!!!!!!!!!![][0]) {
    $('#todo-submit').click(function() {
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

  $('#cycler-next').click(function() {
    cycle();
  });

  var looper = null;
  $('#cycler-auto').click(function() {
    if (looper) {
      clearInterval(looper);
      looper = null;
    } else {
      looper = setInterval(cycle, 1000);
    }
  });

  cycle();

});
