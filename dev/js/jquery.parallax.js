// Draft solution for screen parallax
jQuery(document).ready(function(){
  $(window).scroll(function(){
		var scrolled = $(window).scrollTop();
		$('.js-parallaxItem').each(function(){
			$(this).css('bottom',($(window).scrollTop()-$(this).closest('.js-parallax').offset().top) * 1.2);
    	});
	});
 });
