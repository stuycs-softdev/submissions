var additem = function additem(item){
    var list = document.getElementById("LIST");
    var items = document.createElement("li");
    items.innerHTML=item;
    list.appendChild(items);
}
var addtableitem = function addtableitem(fn,nn,ln){
    var table =document.getElementById("TABLE");
    var row = table.insertRow(1);
    var cell1 =row.insertCell(0);
    var cell2 =row.insertCell(1);
    var cell3 =row.insertCell(2);
    cell1.innerHTML=fn;
    cell2.innerHTML=nn;
    cell3.innerHTML=ln;
}
var buttonCallback = function buttonCallback(e){
    console.log(e);
    console.log(this);
    additem("NEWITEM");
    additem("NEW2ITEM");
}
var button2Callback = function buttonCallback(e){
    e.preventDefault();
    console.log(e);
    console.log(this)
    addtableitem("Holly","The Preacher's Daughter", "Holm");
    addtableitem("Joanna","JJ", "Jedrzejczyk");
}

var bigbutton = document.getElementById('submit');
submit.addEventListener('click', buttonCallback);

var bigbutton2 = document.getElementById('button');
button.addEventListener('click', button2Callback);

    
    
