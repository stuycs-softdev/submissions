console.log("loaded js");

$("#search").click(function(){
    var input = $("#query");
    var query = input.val();
    input.val("");
    console.log(query);
    query = JSON.stringify(query);
    searchQ(query);
});

var searchData;
var searchQ = function searchQ(query){
    $.get("/search",{search:query}).done(function(data){
	alert("data loaded:"+data);
	console.log("data loaded");
	searchData = data;
	getChart(searchData);
    });
};


var yearLabels = [];

var getChart = function getChart() {
    var ctx = document.getElementById("chart").getContext("2d");
    var year = 2004;
    for (i=0;i<searchData.length;i++){
	yearLabels.push(year.toString());
	year++;
    }
    var lineChart = new Chart(ctx).Line(chartData);

};

var chartData = {
    labels: yearLabels,
    // labels: ["January", "February", "March", "April", "May", "June", "July"],
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
	    // data: [28, 48, 40, 19, 86, 27, 90]
	}
    ]
};

// for popular - not currently used
var updatePopular = updatePopular(results){
    searchData = results;
    getChart();
};