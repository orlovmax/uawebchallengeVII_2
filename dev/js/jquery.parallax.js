// Draft solution for screen parallax
(function($){
	var parallax = {
		init: function(options){
			var opt = options;
			this.action(opt);
		},
		action: function(o){
			var o = $.extend({}, this.settings, o),
					$item = o.item,
					$screen = o.screen

			$(window).scroll(function(){
				var scrolled = $(window).scrollTop();
				$item.each(function(){
					var itemOffset = ($(window).scrollTop()-$(this).closest($screen).offset().top) * 1.2
					$(this).css('bottom', itemOffset);
				});
			});
		},
		settings: {
			item: $('.js-parallaxItem'),
			screen: $('.js-parallax')
		}
	}

	parallax.init();
}(jQuery));
