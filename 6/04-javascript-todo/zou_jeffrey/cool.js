//QUOTE//
var word;

$("#enter").click(function() {
  word = $("#compsym").val();
  quote();
  graph();
});

$("#compsym").keyup(function(event) {
  if (event.which == 13) {
    word = $("#compsym").val();
    quote();
  }
});

function quote() {
  url = "http://dev.markitondemand.com/Api/v2/Quote/jsonp?&callback=?&symbol="+word;
  $.getJSON(url, function(data){
    $('#container').empty();
    console.log(data);
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

      //empty the container and insert a table with the information in it
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

function graph() {
  url = "http://dev.markitondemand.com/Api/v2/InteractiveChart";
}
