function getProfit(){
    $.get("/getProfit",function(data){
        var jsonData = JSON.parse(data)
        var pro = document.getElementById("user")
        var x = document.createElement("ul");
        for(var i=0;i<jsonData.length;i++){
            var y = document.createElement("li");
            y.innerHTML = jsonData[i];
            y.id="listItem";
            x.appendChild(y);
        }
        x.id="list";
        pro.appendChild(x);
        addButton();
    })
}
function getLose(){
    $.get("/getLose",function(data){
        var jsonData = JSON.parse(data)
        var pro = document.getElementById("user");
        var x = document.createElement("ul");
        for(var i = 0;i<jsonData.length;i++){
            var y = document.createElement("li");
            y.innerHTML = jsonData[i];
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
        x.innerHTML = "<td>"+jsonData[0]+"</td><td>"+jsonData[1]+"</td>";
        table.appendChild(x);
    })
}


function addButton(){
    var f = document.getElementById("user");
    var n = document.createElement("button");
    n.id="back";
    var txt = document.createTextNode("Back");
    n.appendChild(txt);
    f.appendChild(n);
    document.getElementById("back").addEventListener('click',remove());
}

function remove(){
    $('#listItem').remove();
    console.log("gone");
}

var interval;
interval = setInterval(updating,2000);
