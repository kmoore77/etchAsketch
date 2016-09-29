var row = 16;
var column = 16;
var $row = $("<div />", {class: "row"});
var $square = $("<div />", {class: "square"});

$(document).ready(function(){
	for (var i = 0; i < column; i++) {
		$row.append($square.clone());
	}

	for (var i = 0; i < row; i++) {
		$(".container").append($row.clone());
	}
	$(".square").hover(function(){
		$(this).addClass("active");
	});

	$("#button").click(function(){
		location.reload();
	});

});
