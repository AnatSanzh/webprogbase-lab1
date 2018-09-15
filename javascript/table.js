function ClickableRowsInit(){
	function createClickFunc(row) {
		var href = row.dataset.href;

		return function(){
			window.location.href=href;
		}
	}

	var rows = document.getElementsByClassName("clickableRow");
	var len = rows.length;

	for(var i = 0; i<len ;i++){
		rows[i].onclick=createClickFunc(rows[i]);
	}
}