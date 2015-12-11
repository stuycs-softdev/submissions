function getProfit(){
    $.get("/getProfit",function(array){
        var pro = document.getElementById("user")
        var x = document.createElement("ul");
        for(var i=0;i<array.length;i++){
            var y = document.createElement("li");
            y.innerHTML = array[i];
            y.id="listItem";
            x.appendChild(y);
        }
        x.id="list";
        pro.appendChild(x);
        addButton();
    })
}
function getLose(){
    $.get("/getLose",function(array){
        var pro = document.getElementById("user");
        var x = document.createElement("ul");
        for(var i = 0;i<array.length;i++){
            var y = document.createElement("li");
            y.innerHTML = array[i];
            y.id="listItem";
            x.appendChild(y);
        }
        x.id="list";
        pro.appendChild(x);
        addButton();
    })
}

document.getElementById("profit").addEventListener('click',getProfit);
document.getElementById("lose").addEventListener('click',getLose);

function updating(){
    $.get("/getNext",function(data){
        var jsonData = JSON.parse(data)
        var table = document.getElementById("profitLose");
        var x = document.createElement("tr");
        console.log(jsonData)
        x.innerHTML = "<td>"+jsonData[0]+"</td><td>"+jsonData[1]+"</td>";
        table.appendChild(x);
    })
}


function addButton(){
    var f = document.getElementById("user");
    var n = document.createElement("button");
    var txt = document.createTextNode("Back");
    n.appendChild(txt);
    n.id="back";
    f.appendChild(n);
    console.log("done");
    document.getElementById("back").addEventListener('click',remove());
}

function remove(){
    $('#listItem').remove();
}

var interval;
interval = setInterval(updating,5000);
