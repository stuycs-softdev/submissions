function getProfit(){
    //getNegative #s from CSV file
    //assuming it's an array
    $.get("/getProfit",function(array)){
        var pro = document.getElementById("profitLose")
        var x = document.createElement("ul");
        for(int i = 0;i<array.length;i++){
            var x = document.createElement("li");
            x.innerHTML = array[i];
            pro.appendChild(x);
        }
        
    }
}

function getLose(){
    $.get("/getLose",function(array)){
        var pro = document.getElementById("profitLose");
        for(int i = 0;i<array.length;i++){
            var x = document.createElement("li");
            x.innerHTML = array[i];
            pro.appendChild(x);
        }
    }
}

document.getElementById("profit").addEventListener('click',getProfit);
document.getElementById("lose").addEventListener('click',getLose);

function updating(){
    $.get("/getNext",function(data)){
        var table = document.getElementById("profitLose");
        var x = document.createElement("tr");
        x.innerHTML = "<th>"+companyName+"</th><th>"+companyProfit+"/th>";
        table.appendChild(x);
    }
}
