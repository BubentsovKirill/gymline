$(document).ready(function(){
	var height = $(window).height();
	if(height<600) {
		height = 600;
	}
	$('header').css({
		'minHeight': 0,
		'maxHeight': 'none',
		'height': height
	});

	$("#Carousel").carousel({
		interval : 5000
	});
});


