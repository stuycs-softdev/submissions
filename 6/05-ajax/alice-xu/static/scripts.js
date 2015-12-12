var title = document.getElementById("trend-title");
var list = document.getElementById("popular-list")
var pop = document.getElementById("pop")
var popcontain = document.getElementById("pop-contain")
$("#search").click(function(){
    var input = $("#query");
    var query = input.val();
    input.val("");
    searchQ(query);
});

var searchData;
var searchQ = function searchQ(query){
    $.get("/search",{search:query}).done(function(data){
      title.innerHTML = "Google Trends: " + query;
    	searchData = JSON.parse(data);
    	getChart(searchData);
    });
};


var yearLabels = [];

var getChart = function getChart(searchData) {
    var ctx = document.getElementById("chart").getContext("2d");
    var year = 2004;
    for (var i=0;i<searchData.length;i++){
    	yearLabels.push(year.toString());
    	year++;
    }
    var chartData = {
        labels: yearLabels,
        datasets: [
        	{
        	    label: "Google Trends Data",
        	    fillColor: "rgba(220,220,220,0.2)",
        	    strokeColor: "rgba(220,220,220,1)",
        	    pointColor: "rgba(220,220,220,1)",
        	    pointStrokeColor: "#fff",
        	    pointHighlightFill: "#fff",
        	    pointHighlightStroke: "rgba(220,220,220,1)",
        	    data: searchData
        	}
        ]
    };
    var lineChart = new Chart(ctx).Line(chartData);
};

var popInterval;
var counter = 0;
var updatePopular = function updatePopular(){
  if (popcontain != null) {
    popular();
    popInterval = setInterval(popular, 5000);
  }
};

var popChart = function popChart(searchData) {
  if (pop != null) {
    pop.remove();
  }
  newPop = document.createElement("canvas");
  newPop.id = "pop";
  newPop.width = "800";
  newPop.height = "300"
  popcontain.appendChild(newPop);
  pop = document.getElementById("pop");
  var ctx = pop.getContext("2d");
  var year = 2004;
  yearLabels = [];
  for (var i=0;i<searchData.length;i++){
  	yearLabels.push(year.toString());
  	year++;
  }
  var chartData = {
      labels: yearLabels,
      datasets: [
      	{
      	    label: "Google Trends Data",
      	    fillColor: "rgba(220,220,220,0.2)",
      	    strokeColor: "rgba(220,220,220,1)",
      	    pointColor: "rgba(220,220,220,1)",
      	    pointStrokeColor: "#fff",
      	    pointHighlightFill: "#fff",
      	    pointHighlightStroke: "rgba(220,220,220,1)",
      	    data: searchData
      	}
      ]
  };
  var lineChart = new Chart(ctx).Line(chartData);
};


function popular() {
  var child = list.children;
  if (counter > 0) {
    child[counter - 1].classList.remove("selected");
  }
  else if (counter == 0){
    child[19].classList.remove("selected");
  }
  child[counter].classList.add("selected");
  $.get("/popular", function(data){
    searchData = JSON.parse(data);
    popChart(searchData);
  });
  counter++;
  if (counter == 20) {
    counter = 0;
  }
}

updatePopular()
