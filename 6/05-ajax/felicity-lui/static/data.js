function getProfit(){
    $.get("/getProfit",function(data){
        var jsonData = JSON.parse(data)
        var pro = document.getElementById("user")
        var x = document.createElement("ul");
        x.id="list";
        var e = document.createElement("h2");
        e.innerHTML = "Companies with Profit";
        x.appendChild(e);
        for(var i=0;i<jsonData.length;i++){
            var y = document.createElement("li");
            y.innerHTML = jsonData[i];
            y.id="listItem";
            x.appendChild(y);
        }
        pro.appendChild(x);
        addButton();
    })
}
function getLose(){
    $.get("/getLose",function(data){
        var jsonData = JSON.parse(data)
        var pro = document.getElementById("user");
        var x = document.createElement("ul");
        x.id="list";
        var e = document.createElement("h2");
        e.innerHTML = "Companies without Profit";
        x.appendChild(e);
        for(var i = 0;i<jsonData.length;i++){
            var y = document.createElement("li");
            y.innerHTML = jsonData[i];
            y.id="listItem";
            x.appendChild(y);
        }
        pro.appendChild(x);
        addButton();
    })
}

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
    document.getElementById("profit").remove();
    document.getElementById("lose").remove();
    var f = document.getElementById("user");
    var n = document.createElement("button");
    n.id="back";
    var txt = document.createTextNode("Back");
    n.appendChild(txt);
    f.appendChild(n);
    n.addEventListener('click',remove);
}


function remove(){
    var x = document.getElementById("user");
    while (list.hasChildNodes()) {   
        list.removeChild(list.firstChild);
    }
    document.getElementById("back").remove();
    var y = document.getElementById("meow");
    y.appendChild(p);
    y.appendChild(l);
    console.log("gone");
}

var p=document.getElementById("profit");
var l=document.getElementById("lose");
p.addEventListener('click',getProfit);
l.addEventListener('click',getLose);
var interval;
interval = setInterval(updating,2000);
