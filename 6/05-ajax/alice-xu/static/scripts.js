var title = document.getElementById("trend-title");
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
    ctx.clearRect(0, 0, canvas.width, canvas.height);
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
var counter;
var updatePopular = function updatePopular(){
  counter++;
  popInterval = setInterval(popular, 5000);
};

var popChart = function popChart(searchData) {
    var ctx = document.getElementById("pop").getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
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


function popular() {
  $.get("/popular", function(data){
    title.innerHTML = "Google Trends: " + query;
    searchData = JSON.parse(data);
    popChart(searchData);
  });
}

updatePopular()
