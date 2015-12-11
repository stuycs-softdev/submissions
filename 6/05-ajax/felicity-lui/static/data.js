/*
function getProfit(){
    //getNegative #s from CSV file
    //assuming it's an array
    $.get("/getProfit",function(array)){
        var pro = document.getElementById("user")
        var x = document.createElement("ul");
        for(int i = 0;i<array.length;i++){
            var y = document.createElement("li");
            y.innerHTML = array[i];
            y.id="listItem";
            pro.appendChild(x);
        }
        x.id="list";
        addButton();
    }
}
function getLose(){
    $.get("/getLose",function(array)){
        var pro = document.getElementById("user");
        var x = document.createElement("ul");
        for(int i = 0;i<array.length;i++){
            var y = document.createElement("li");
            y.innerHTML = array[i];
            y.id="listItem";
            pro.appendChild(x);
        }
        x.id="list";
        addButton();
    }
}

document.getElementById("profit").addEventListener('click',getProfit);
document.getElementById("lose").addEventListener('click',getLose);

function updating(){
    $.get("/getNext",function(data)){
        var table = document.getElementById("profitLose");
        var x = document.createElement("tr");
        x.innerHTML = "<td>"+data[0]+"</td><td>"+data[1]+"/td>";
        table.appendChild(x);
    }
}
*/

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
    var x = document.getElementById("list");
    x.removeChild(document.getElementById("listItem"));
}

//var interval;
//interval = setInterval(updating,5000);
addButton();
