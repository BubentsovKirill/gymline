$(document).ready(function(){
	var height = $(window).height();
	if(height<600) {
		height = 600;
	}
	$('.index').css({
		'minHeight': 0,
		'maxHeight': 'none',
		'height': height
	});

	var topPadding = $('.top').height() + 40;
	$('.schedule, .gallery, #blog, .article-full, .page404, .contacts').css(
		'padding-top', topPadding
	)

	$(window).on('scroll',function(){
		var topLine = $('.top-line').height();
		if($(window).scrollTop()>topLine + 21){
			$('.nav-block').addClass('fixed filter');

		}
		else{
			$('.nav-block').removeClass('fixed filter');
		}
	});

	$('.schedule table tr:odd').css('background','rgb(153, 153, 153)');
	$('.schedule table tr:even').css('background','#fff');
	$('.price table tr:odd').css('background','rgb(153, 153, 153)');
	$('.price table tr:even').css('background','#e8e4e1');

	$('a.fancyimage').fancybox(); 
	$('.fancybox-skin').css('background','#333');
});


