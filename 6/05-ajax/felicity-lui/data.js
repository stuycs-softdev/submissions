$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "profit.csv",
        dataType: "text",
        success: function(data) {processData(data);}
    });
});

function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {

            var tarr = [];
            for (var j=0; j<headers.length; j++) {
                tarr.push(headers[j]+":"+data[j]);
            }
            lines.push(tarr);
        }
    }
    // alert(lines);
}


function getProfit(
//idk if needs parameters
){
//getNegative #s from CSV file
//assuming it's an array
var pro = document.getElementById("profitLose");
    for(int i = 0;i<array.length;i++){
        var x = document.createElement("tr");
        x.innerHTML = "<th>"+companyName+"</th><th>"+companyProfit+"/th>";
        pro.appendChild(x);
    }
}

function getLose(){
//get negative #s from CSV file
//same as getProfit but with negative #s. Need parameters?
}


document.getElementById("profit").addEventListener('click',getProfit);
document.getElementById("lose").addEventListener('click',getLose);
