var interval;
//Looking at stocks//
var word;

$("#enter").click(function() {
  word = $("#compsym").val();
  quote();
  interval = setInterval(quote, 15000);
});

//if you want to use the enter button instead
$("#compsym").keyup(function(event) {
  if (event.which == 13) {
    word = $("#compsym").val();
    quote();
    interval = setInterval(quote, 15000);
  }
});

function quote() {
  url = "http://dev.markitondemand.com/Api/v2/Quote/jsonp?&callback=?&symbol="+word;
  $.getJSON(url, function(data){
    //empty the container so there wont be multiple tables
    $('#container').empty();
    if (data.isEmptyObject) {
      $("#container").append("<p class='error'>Error: please enter a valid symbol</p>");
    }
    else if ('Message' in data) {
      $("#container").append("<p class='error'>" + data['Message'].substring(0, data['Message'].length-24) + "</p>")
    }
    else if (data['Status'] === "SUCCESS") {
      //All the data we've gathered
      var name = data['Name'];
      var symbol = data['Symbol'];
      var change = data['Change'];
      var lastPrice = data['LastPrice'];
      var changePercent = data['ChangePercent'];
      var changeYTD = data['ChangeYTD'];
      var changePercentYTD = data['ChangePercentYTD'];
      var lastTraded = data['Timestamp'];
      var high = data['High'];
      var low = data['Low'];
      var open = data['Open'];

      //insert a table with the information in the container
      $("#container").append("<h3>" + name + " (" + symbol + ')' + "</h3>");
      $("#container").append("<table id='table'></table>");
      var tableHead = "<tr><th>Last Price<th>Open</th><th>Change</th><th>Change Percent</th><th>High</th><th>Low</th><th>Change YTD</th><th>Change Percent YTD</th><th>Last Traded</th></th></tr>"
      $("#table").append(tableHead);
      var row = "<tr><td>"+lastPrice+"</td><td>"+open+"</td><td>"+change+"</td><td>"+changePercent+"</td><td>"+high+"</td><td>"+low+"</td><td>"+changeYTD+"</td><td>"+changePercentYTD+"</td><td>"+lastTraded;
      $("#table").append(row);
      //Color the numbers red if negative, green if positive, blue if zero
      $("td").each(function() {
        if ($(this).html() > 0) {
          $(this).addClass("green");
        }
        else if ($(this).html() < 0) {
          $(this).addClass("red");
        }
        else {
          $(this).addClass("blue");
        }
      });
    }
    else {
      return;
    }
  });
};



//My Stocks//
var stox;

$("#add").click(function() {
  stox = $("#comp").val();
  addQuote();
});

$("#comp").keyup(function(event) {
  if (event.which == 13) {
    stox = $("#comp").val();
    addQuote();
  }
});

function addQuote() {
  url = "http://dev.markitondemand.com/Api/v2/Quote/jsonp?&callback=?&symbol="+stox;
  $.getJSON(url, function(data){
    $("#stocks p").remove(".error");
    if (data.isEmptyObject) {
      $("#stocks").append("<p class='error'>Error: please enter a valid symbol</p>");
    }
    else if ('Message' in data) {
      $("#stocks").append("<p class='error'>" + data['Message'].substring(0, data['Message'].length-24) + "</p>");
    }
    else if (data['Status'] === "SUCCESS") {
      //All the data we've gathered
      var name = data['Name'];
      var symbol = data['Symbol'];
      var change = data['Change'];
      var lastPrice = data['LastPrice'];
      var changePercent = data['ChangePercent'];
      var changeYTD = data['ChangeYTD'];
      var changePercentYTD = data['ChangePercentYTD'];
      var lastTraded = data['Timestamp'];
      var high = data['High'];
      var low = data['Low'];
      var open = data['Open'];

      //insert a table with the information into container with all the saved stocks
      var row = "<tr><td>"+name + ' (' +symbol+ ')' + "</td><td>"+lastPrice+"</td><td>"+open+"</td><td>"+change+"</td><td>"+changePercent+"</td><td>"+high+"</td><td>"+low+"</td><td>"+changeYTD+"</td><td>"+changePercentYTD+"</td><td>"+lastTraded+"<td><button id='delete'>Delete</button>";
      $("#table2").append(row);
      //Color the numbers red if negative, green if positive, blue if zero
      $("td").each(function() {
        if ($(this).html() > 0) {
          $(this).addClass("green");
        }
        else if ($(this).html() < 0) {
          $(this).addClass("red");
        }
        else {
          $(this).addClass("blue");
        }
      });
    }
    else {
      return;
    }
  });
};

$("#table2").on('click', '#delete', function() {
  $(this).closest('tr').remove();
});
