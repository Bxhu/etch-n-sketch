$(document).ready(function() {
	var setting = "default";
	var color = "black";
	var speed = 0.1;
	var hue = 0;
	var n = 16;
	var evenRow = false;
	var count = 0;

	createGrid(16);

	//Button Functions

	$("#speed").click(function() {
		speed = prompt("Enter new shading speed 1 - 100", 10) / 100;
	});

	$("#size").click(function() {
		$("#container").empty();
		n = prompt("Enter new cellsize", 16);
		hue = 0;
		count = 0;
		evenRow = false;
		createGrid(n);
	});

	$("#black").click(function() {
		$("#container").empty();
		setting = "default";
		color = "black";
		createGrid(n);
	});

	$("#grayscale").click(function() {
		$("#container").empty();
		setting = "increment";
		color = "black";
		createGrid(n);
	});

	$("#red").click(function() {
		$("#container").empty();
		setting = "increment";
		color = "red";
		createGrid(n);
	});

	$("#green").click(function() {
		$("#container").empty();
		setting = "increment";
		color = "green";
		createGrid(n);
	});

	$("#blue").click(function() {
		$("#container").empty();
		setting = "increment";
		color = "blue";
		createGrid(n);
	});

	$("#rainbow").click(function() {
		$("#container").empty();
		setting = "increment";
		color = "rainbow";
		hue = 0;
		evenRow = false;
		createGrid(n);
	});

	$("#random").click(function() {
		$("#container").empty();
		setting = "random";
		color = "black";
		createGrid(n);
	});


	$("#container").on('mouseenter', '.cell',
		function() {
			switch (setting) {
				case "increment":
					$(this).css("opacity", "+=" + speed);
					break;
				case "random":
					var opacity = $(this).css("opacity");
					var red = Math.floor(Math.random() * 255) * (1 - opacity);
					var green = Math.floor(Math.random() * 255) * (1 - opacity);
					var blue = Math.floor(Math.random() * 255) * (1 - opacity);
					$(this).css("background-color", "rgb("+red+", "+green+", "+blue+")");
					$(this).css("opacity", "+=" + speed);
					break;
				default:
					$(this).css("opacity", 1);
			}
		}
	);

	function createGrid(n) {
		var m = (1/n) * 100;

		for (var i = 0; i < n*n; i++) {
			var cell = $('<div class="cell"></div>');
			cell.css({width: m + "%"});
			cell.css({height: m + "%"});
			cell.css("opacity", 0);

			switch (color) {
				case "red":
					cell.css("background-color", "rgb(255, 0, 0)");
					break;
				case "green":
					cell.css("background-color", "rgb(0, 255, 0)");
					break;
				case "blue":
					cell.css("background-color", "rgb(0, 0, 255)");
					break;
				case "rainbow":
					cell.css("background-color", "hsl("+hue+", 100%, 50%)");
					if (evenRow) {
						hue -= 360/(n*n);
						count++;
						if (count === n) {
							hue += 360/n;
							count = 0;
							evenRow = false;
						}
					}
					else {
						hue += 360/(n*n);
						count++;
						if (count === n) {
							hue += 360/n;
							count = 0;
							evenRow = true;
						}
					}
					break;
				default:
					cell.css("background-color", "rgb(0, 0, 0)");
			}

			$("#container").append(cell);
		}
	}
});