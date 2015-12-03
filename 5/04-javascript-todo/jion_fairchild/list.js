var els = 0;
var remove = function remove(e){
    var list = document.getElementById("list");
    name = "li"+(this.id.substring(12));
    list.removeChild(document.getElementById(name));
    
    /*for(var x=0;x<list.length;x++){	
	console.log(list[x].contains(this));
	if(list[x].contains(this)){
	    list.removeChild(list[x])
	    break;
	}
    }*/
}

var addHtml = function addHtml(html){
    var list = document.getElementById("list");
    var newel = document.createElement("li");
    newel.id = "li"+(els-1);
    newel.innerHTML = html;
    list.appendChild(newel);
    //list.innerHTML += html;
    
    var removebutton = document.getElementById("removeButton"+(els-1));
    removebutton.addEventListener("click",remove);
}



var genHtml = function genHtml(title,content){
    var ans = "<li>";
    ans+="<h3>"+title+"</h1\n";
    ans+="<p>"+content+"</p>\n";
    ans+="<input type='button' value='remove' id='removeButton"+els+"'></input>";
    els++;

    return ans+"</li>";
}

var submit = function submit(e){
    var title = document.getElementById("title").value;
    var content = document.getElementById("todo").value;
    document.getElementById("title").value = "";
    document.getElementById("todo").value = "";
    
    var html = genHtml(title,content);
    addHtml(html);
}



var button = document.getElementById("add");
button.addEventListener("click",submit)
