$.ajax({
  type: 'GET',
  url: '/explore/',
  contentType: 'application/json',
  success: function(data) {
    updatePage($.parseJSON(data));
  },
});

function updatePage(data) {
  //console.log(Object.keys(data.response.groups[0].items[0].venue.location));
  // ^ Really love this function a whole super lot
  var div = $('#fs');
  div.children('h3').text(data.response.groups[0].type);
  var list = $('<ul>');
  div.append(list);
  $.each(data.response.groups[0].items, function(i, item) {
    list.append($('<li>').text(item.venue.name + ', ' + item.venue.location.address));
  });
}
