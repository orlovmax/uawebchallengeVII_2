// JQuery carousel, just a draft version

;(function ( $, window, document, undefined ) {
	var defaults = {
		btnNext: 'js-carouselNext',
		btnPrev: 'js-carouselPrev',
		item: 'js-carouselItem',
		visibleItem: 'is-visible'
	};

	function Carousel( element, options ) {
		this.options = $.extend( {}, defaults, options) ;
		this.element = element;
		this.init();
	}

	Carousel.prototype.init = function () {
		var $this = $(this.element),
			$btnNext = $this.find('.' + this.options.btnNext),
			$btnPrev = $this.find('.' + this.options.btnPrev),
			$item = $this.find('.' + this.options.item),
			count = $item.length;

		function removeClass (index, classNames) {
			var current_classes = classNames.split(" "), // change the list into an array
					classes_to_remove = []; // array of classes which are to be removed

			$.each(current_classes, function (index, class_name) {
				// if the classname begins with bg add it to the classes_to_remove array
				if (/screen_slider_.*/.test(class_name)) {
					classes_to_remove.push(class_name);
				}
			});
			// turn the array back into a string
			return classes_to_remove.join(" ");
		}

		// set display:none for all members of $slide except the first
		$item.not(":eq(0)").hide();

		// for "next" button we'll hide current slide and show next one
		$btnNext.click($.proxy(function (e) {
			e.preventDefault();

			// store the currently-visible item
			var $currentItem = $item.filter(':visible');

			// Switch content
			if ($currentItem.is($item.last())) {
				$currentItem.hide();
				$item.first().show();
				var bgName = $item.first().data('bg')
			} else {
				// else, hide current item and show the next one
				$currentItem.hide().next().show();
				var bgName = $currentItem.next().data('bg')
			}

			// Getting deal with screen background
			$this.removeClass(removeClass)
			$this.addClass('screen_slider_' + bgName)

		}, this));

		// for "prev" button we'll hide current item and show previous
		$btnPrev.click($.proxy(function (e) {
			e.preventDefault();

			// store the currently-visible item
			var $currentItem = $item.filter(':visible');

			// Getting deal with screen background
			var bgName = $currentItem.data('bg')
			$this.removeClass(removeClass)
			$this.addClass('screen_slider_' + bgName)

			// Switch content
			if ($currentItem.is($item.first())) {
				$currentItem.hide();
				$item.last().show();
				var bgName = $item.last().data('bg')
			} else {
				// else, hide current item and show the previous
				$currentItem.hide().prev().show();
				var bgName = $currentItem.prev().data('bg')
			}

			// Getting deal with screen background
			$this.removeClass(removeClass)
			$this.addClass('screen_slider_' + bgName)

		}, this));
	};

	$.fn.carousel = function ( options ) {
		return this.each(function () {
			new Carousel( this, options );
		});
	};

})( jQuery, window, document );
