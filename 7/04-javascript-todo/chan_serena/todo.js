 function updateItemStatus() {
 	var cbId = this.id.replace("cb_", "");
 	var itemText = document.getElementById("item_" + cbId);

 	//removeItem(itemText);
	itemText.style.textDecoration = "line-through";
 }

 function addNewItem(list, itemText){
 	totalItems++;

	var listItem = document.createElement("li");
	var checkBox = document.createElement("input");
	checkBox.type = "checkBox";
	checkBox.id = "cb_" + totalItems;
	checkBox.onclick = updateItemStatus;

	var span = document.createElement("span");
	span.id = "item_" + totalItems;
	span.innerText = itemText;

	listItem.appendChild(checkBox);
	listItem.appendChild(span);

	list.appendChild(listItem);

}

var totalItems = 0;
var inItemText = document.getElementById("inItemText");
inItemText.focus();
inItemText.onkeyup = function(event) {

	//Enter key stuff
	if (event.which == 13) {
		var itemText = inItemText.value;

		if (!itemText || itemText=="") {
			return false;
		}

		addNewItem(document.getElementById("todoList"), itemText);

		inItemText.focus();
		inItemText.select();
	}
};

var removeItem = function removeItem(n){
	n.parentNode.removeChild(n);
}