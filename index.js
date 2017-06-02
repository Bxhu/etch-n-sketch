$(document).ready(function() {
	function createGrid(n) {
		var m = 640/n;

		for (var i = 0; i < n; i++) {
			// var rowId = "row" + i;
			// var row = $('<div id="' + rowId + '" class="row"></div>');
			var row = $('<div class="row"></div>');
			$("#container").append(row);
		}

		$(".row").css({height: m + "px"});

		for (var i = 0; i < n; i++) {
			// var colId = "col" + i;
			// var col = $('<div id="' + colId + '" class="col"></div>');
			var col = $('<div class="col"></div>');
			$(".row").append(col);
		}

		$(".col").css({width: (m-2) + "px"});
		$(".col").css({height: (m-2) + "px"});
	}

	createGrid(16);

	$("#container").on('mouseenter', '.col',
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