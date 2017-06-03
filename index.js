$(document).ready(function() {
	function createGrid(n) {
		// var m = (n/640) * 100;
		var m = (1/n) * 100;

		// for (var i = 0; i < n; i++) {
		// 	// var rowId = "row" + i;
		// 	// var row = $('<div id="' + rowId + '" class="row"></div>');
		// 	var row = $('<div class="row"></div>');
		// 	$("#container").append(row);
		// }

		// $(".row").css({height: m + ""});

		// for (var i = 0; i < n; i++) {
		// 	// var colId = "col" + i;
		// 	// var col = $('<div id="' + colId + '" class="col"></div>');
		// 	var col = $('<div class="col"></div>');
		// 	$(".row").append(col);
		// }

		// $(".col").css({width: m + "px"});
		// $(".col").css({height: m + "px"});




		for (var i = 0; i < n*n; i++) {
			var cell = $('<div class="cell"></div>');
			cell.css({width: m + "%"});
			cell.css({height: m + "%"});
			$("#container").append(cell);
		}
	}

	createGrid(16);

	$("#container").on('mouseenter', '.cell',
		function() {
			$(this).addClass("visited");
		}
	);

	$("#reset").click(function() {
		$("#container").empty();
		var n = prompt("Enter new cellsize", 16);
		createGrid(n);
	});
});