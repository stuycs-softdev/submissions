var searchStock = function searchStock() {
    stockTicker = document.getElementById("stockTicker").value;
    initialInvestment = document.getElementById("initialInvestment").value;
    $.get("/search",{stockTicker:stockTicker, initialInvestment:initialInvestment}, function(e){
	var information = JSON.parse(e);
	returnInfo = $("#returnInfo");
	returnInfo.html(information.returnInfo);
    });
};

document.getElementById("search").addEventListener("click",searchStock);

var updateStock = function updateStock() {
    $.get("/update", function(e) {
	var information = JSON.parse(e);
	GOOG = $("#GOOG");
	GOOG.html(information['GOOG']);
	AMBA = $("#AMBA");
	AMBA.html(information.AMBA);
	AAPL = $("#AAPL");
	AAPL.html(information.AAPL);
	ABM = $("#ABM");
	ABM.html(information.ABM);
	PSEC = $("#PSEC");
	PSEC.html(information.PSEC);
	RAVE = $("#RAVE");
	RAVE.html(information.RAVE);
	NE = $("#NE");
	NE.html(information.NE);
	ODFL = $("#ODFL");
	ODFL.html(information.ODFL);
	YHOO = $("#YHOO");
	YHOO.html(information.YHOO);
	MSFT = $("#MSFT");
	MSFT.html(information.MSFT);
    });
};

updateStock();
interval = setInterval(updateStock, 300000);
