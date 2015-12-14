var artist;
var formattedName;
var tog=false;
var interval;
var count=0;

var link="http://api.songkick.com/api/3.0/events.json?apikey=fKR4qB0M4VT3h025&jsoncallback=?"

$("#submit-button").click(
  function(){
    if ($("#error").length) {
      $("#error").remove();
    }
    artist = $("#artist-input").val();
    $("#artist-input").val("");
    formattedName = artist.split(" ");
    if (artist !== "") {
      link = link + "&artist_name=";
      for (var i = 0; i < formattedName.length; i++) {
        link = link + formattedName[i];
        if (i < formattedName.length - 1){
          link = link + "+";
        }
      }
    }
    if (tog) {
      link = link + "&location=clientip";
    }

    //Start reaching out to api here
    //The corresponding index of each array should be of the same event
    var name = new Array(); //Names of the events
    var types = new Array(); //types e.g. concert
    var dates = new Array();
    var time = new Array();
    var tickets = new Array();
    var storage = new Array();
    $.getJSON(link, function(data) {
      if (data['resultsPage']['totalEntries'] != 0) {
        var events = data["resultsPage"]["results"]["event"];
        $(events).each(function() {
          storage.push(this);
        });
        $(storage).each(function() {
          if (this['displayName'] === null) {
            this['displayName'] = "N/A";
          }
          if (this['type'] === null) {
            this['type'] = "N/A";
          }
          if (this['start']['date'] === null) {
            this['start']['date'] = "N/A";
          }
          if (this['start']['time'] === null) {
            this['start']['time'] = "N/A";
          }

          name.push(this['displayName']);
          types.push(this['type']);
          dates.push(this['start']['date']);
          time.push(this['start']['time']);
          tickets.push(this['venue']['uri']);
        });
        console.log("here");
        //interval = setInterval(slideShow(name, types, dates, time), 3000);
        console.log(tickets);
        interval = setInterval(function(){
            slideShow(name, types, dates, time, tickets);
        }, 3000);

      }
      else {
        var message = "Error: Artist not found";
        $("#slideshow").append("<p style='color:red' id='error'>" + message + "</p>");
      }
    });
  });

//If the button is clicked, it toggles it on or off, based on its pervious state
$('#toggle').click(function(event){
  event.preventDefault();
  tog = !tog;
});

function slideShow(name, types, dates, time, tickets) {
  //make slide
  var slide = $("#moving");
  console.log("slide" + count + "; name:" + name.length);
  slide.empty(); // isn't working yet come back to it soon
  slide.append("<h3>"+name[count]+"</h3>");
  slide.append("<p>Type: "+types[count]+"</p>");
  slide.append("<p>Date: "+dates[count]+' Time: '+time[count]+"</p>");
  if (tickets[count] !== null) {
    //slide.append("<p><a href='"+tickets[count]+"'>Tickets</a></p>");
    slide.append("<a href='"+tickets[count]+"' class='btn btn-block btn-lg btn-danger'>Tickets</a>")
  }



  if (count >= name.length - 1) {
    count = 0;
  }
  count = count + 1;
};




/*function stop() {
  clearTimeout(interval);
}*/

  /*Change the url based on input
  $("#toggle").click(function(){
    link = link + "&location=clientip";
  });
  if (artist !== "") {
    link = link + "&artist_name=";
    for (i=0;i<formattedName.length;i++) {
      link = link + formattedName[i];
      link = link + "+";
      //This should be in the form: part1+part2+part3+...
    }
  }*/

  /*formatedName = artist.split(" ");
  var link="http://api.songkick.com/api/3.0/events.json?apikey=fKR4qB0M4VT3h025&jsoncallback=?"
  //Change the url based on input
  $("#toggle").click(function(){
    link = link + "&location=clientip";
  });
  if (artist !== "") {
    link = link + "&artist_name=";
    for (i=0;i<formatedName.length;i++) {
      link = link + formatedName[i];
      link = link + "+";
      //This should be in the form: part1+part2+part3+...
    }
  }
  if (tog) {
    link = link + "&location=clientip";
    //clientip is the current location of the user
  }
  //The corresponding index of each array should be of the same event
  name = []; //Names of the events
  types = []; //types e.g. concert
  dates = [];
  time = [];
  $.getJSON(link, function(data) {
    $.each(storage.append(data["resultsPage"]["results"]["event"]));
    for (i=0;i<storage.length;i++) {
      name.append(storage[i]['displayName']);
      types.append(storage[i]['type']);
      dates.append(storage[i]['start']['date']);
      time.append(storage[i]['start']['time']);
    }
    //do stuff with the data
    $.each(name, function(index, value) {
      var head = "<h1 id='" + index + "'></h1>";
      var paragraph = "<p id='"+ index + "'></p>";
      //This makes the heading for the event
      $("#cell2").append(head).text(value);
      //This should append the type,date,time to a paragraph on the jumbotron, but we need it to loop
      $("#cell2").append(paragraph).text("Type: " + types[index] + ", Date: " + date[index] + ", Time: " + time[index]);
    });
  });*/
