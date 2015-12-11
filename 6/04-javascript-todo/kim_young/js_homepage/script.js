function load_page(id, page) {
  document.getElementById(id).innerHTML = '<object type="text/html" data="home.html"></object>';
}

var counter = 0;

var addItem = function addItem(item,list,url){
		var youngkimissohandsome = document.createElement("li");
		youngkimissohandsome.innerHTML = '<a class="listlinks" id="'+ url +'">' + item + "</a>";
		list.appendChild(youngkimissohandsome);
};

// I got the code to store the URL in the id tag for the list elements,
// and also the class tag as "listlinks"

var itemCallback = function itemCallback(e){
		var urllist = document.getElementById("urllist");
		urllist.appendChild(this);
};

var buttonCallback = function buttonCallback(e){
		var list = document.getElementById("urllist");
		var textbox = document.getElementById("textbox");
		var urlbox = document.getElementById("urlbox");

		var input = textbox.value;
		var urlinput = urlbox.value;

		if (input != "" && urlinput!=""){
				addItem(input,list,urlinput);
				list.children[list.children.length - 1].addEventListener("click",itemCallback);
		}
		textbox.value = "";
		urlbox.value= "";

		var new_list_elements = document.getElementById("urllist").getElementsByClassName("listlinks");
		for(var i=0;i<new_list_elements.length;++i){
				var temp = new_list_elements[i].getAttribute("id");
				new_list_elements[i].addEventListener("click",youngCallback);
				// I have to figure out a way to add individual event listeners to each element
				// with it's individual URL (basically do a load_page(temp) but idk how
				// I'm using fun.com as a default for now and it works
		}
		// Also for some reason the list order keeps switching if you have multiple
		// websites added; when you click them they shuffle lol
};

var youngCallback = function youngCallback(e){
	load_page(e.target.id);
};

var load_page = function load_page(link){ 
        var clientHeight = 800;
        var clientWidth = document.getElementById('content').clientWidth - 15;
		document.getElementById("content").innerHTML=('<object type="text/html" data="' +link+ '" width="' + clientWidth + '" height="' + clientHeight + '" style="overflow:auto;border:2px ridge blue"></object>');
};

var button = document.getElementById("button");
button.addEventListener("click",buttonCallback);

var list_elements = document.getElementById("urllist").getElementsByClassName("listlinks");
for(var i=0;i<list_elements.length;++i){
		var temp = list_elements[i].getAttribute("id");
		list_elements[i].addEventListener("click",youngCallback);
}

