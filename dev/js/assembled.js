google.maps.event.addDomListener(window, 'load', init);
var map;
function init() {
	var mapOptions = {
		center: new google.maps.LatLng(35.386505, -119.100633),
		zoom: 10,
		zoomControl: false,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.DEFAULT,
		},
		disableDoubleClickZoom: true,
		mapTypeControl: false,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
		},
		scaleControl: false,
		scrollwheel: false,
		panControl: false,
		streetViewControl: false,
		draggable : false,
		overviewMapControl: false,
		overviewMapControlOptions: {
			opened: false,
		},
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: [{"featureType":"all","elementType":"geometry","stylers":[{"lightness":"26"},{"gamma":"1.14"},{"saturation":"38"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"lightness":"-3"},{"saturation":"-20"},{"gamma":"1.2"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#c7c7c7"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"lightness":"84"},{"saturation":"79"},{"gamma":"2.93"},{"weight":"0.5"}]},{"featureType": "road","elementType": "labels","stylers": [{ "visibility": "off" }]}]
	};
	var mapElement = document.getElementById('gmap');
	var map = new google.maps.Map(mapElement, mapOptions);
	var locations = [['Poultry farm', '', '', '', '', 35.396505, -119.116333, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAA4BAMAAACI+Cx1AAAAMFBMVEUwMzQwMzQwMzQwMzQwMzQwMzQwMzQwMzQwMzQwMzQwMzQwMzQwMzQwMzQwMzQwMzSJLU9HAAAAD3RSTlMAESIzRFVmd4iZqrvM3e5GKvWZAAABUklEQVQ4jY2SsU4CQRCG/0MiQWPCAxhCZaudnVDQ4yNQ23iV7b2CjTWPgG9AYWMHPgGhsL7EGC4Ejt9iZnZnLxT+zV2+vZ2Z/W4BSTYe3yFJ9lSS/Bw51JqRJFlPIyuoOYT91wypFJ2VkfFV2IND3EnPpWfMAeAiQfwFgGedQz+ve0AmHd6Am7Vt7pAkPwB73QBXJHnoIZSpgKGuAcA5SR70XI86/oIke5jLkmRCkiMs3SmleI4wJwBcnmCdfzLduz7RY3FilkIeycxDkvxyZ9trWe9gC7SbrlYA1g2n0+j+uNBnmCmmCs1iRG+ZsDy9QZSJAaDv0c4JsvwIyzzTe4WZYwNltxHtzVo3smC8Fdm7McwDGwU2MVQHJF5JchtZ29gqMtg1nzpmXh0yr5Vn6nXjmf6oPGGF82npO5+WjvNpyUrn0xU8DhqsS36jmfuX0PUPxV4gOv0fYnUAAAAASUVORK5CYII=']];
	for (i = 0; i < locations.length; i++) {
		if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
		if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
		if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
		if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
		if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
		marker = new google.maps.Marker({
			icon: markericon,
			position: new google.maps.LatLng(locations[i][5], locations[i][6]),
			map: map,
			title: locations[i][0],
			desc: description,
			tel: telephone,
			email: email,
			web: web
		});
		if (web.substring(0, 7) != "http://") {
			link = "http://" + web;
		} else {
			link = web;
		}
		bindInfoWindow(marker, map, locations[i][0], description, telephone, email, web, link);
	}
	// function bindInfoWindow(marker, map, title, desc, telephone, email, web, link) {
	// 	var infoWindowVisible = (function () {
	// 		var currentlyVisible = false;
	// 		return function (visible) {
	// 			if (visible !== undefined) {
	// 				currentlyVisible = visible;
	// 			}
	// 			return currentlyVisible;
	// 		};
	// 	}());
	// 	iw = new google.maps.InfoWindow();
	// 	google.maps.event.addListener(marker, 'click', function() {
	// 		if (infoWindowVisible()) {
	// 			iw.close();
	// 			infoWindowVisible(false);
	// 		} else {
	// 			var html= "<div style='color:#000;background-color:#fff;padding:5px;width:150px;'><h4>"+title+"</h4><p>"+desc+"<p><a href='mailto:"+email+"' >"+email+"<a><a href='"+link+"'' >"+web+"<a></div>";
	// 			iw = new google.maps.InfoWindow({content:html});
	// 			iw.open(map,marker);
	// 			infoWindowVisible(true);
	// 		}
	// 	});
	// 	google.maps.event.addListener(iw, 'closeclick', function () {
	// 		infoWindowVisible(false);
	// 	});
	// }
}

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

$(function(){
	// Remove fallback diagram images
	$('.js-diagram').css('background', 'none');

	// Common settings
	var $container = $('.js-diagram'),
		τ = 2 * Math.PI,
		width = $container.width(),
		height = $container.height(),
		outerRadius = Math.min(width,height)/2,
		innerRadius = outerRadius-10,
		fontSizeText = (Math.min(width,height)/3);
		fontSizeSpan = (Math.min(width,height)/6);

	var arc = d3.svg.arc()
		.innerRadius(innerRadius)
		.outerRadius(outerRadius)
		.startAngle(0);

	var svg = d3.selectAll('.js-diagram').append('svg')
		.attr('width', '100%')
		.attr('height', '100%')
		.attr('viewBox','0 0 '+Math.min(width,height) +' '+Math.min(width,height) )
		.attr('preserveAspectRatio','xMinYMin')
		.append('g')
		.attr('transform', 'translate(' + Math.min(width,height) / 2 + ',' + Math.min(width,height) / 2 + ')');

	var text = svg.append('text')
		.text('0')
		.attr('fill', '#303334')
		.attr('text-anchor', 'middle')
		.style('font-size',fontSizeText+'px')
		.attr('dy',fontSizeText/3)
		.attr('dx',2);

	var background = svg.append('path')
		.datum({endAngle: τ})
		.style('fill', '#e9df4a')
		.attr('d', arc);

	var foreground = svg.append('path')
		.datum({endAngle: 0 * τ})
		.style('fill', '#fff')
		.attr('d', arc)
		.attr('class', 'progress');

	// Select specific charts and their text
	var firstChart = d3.select('.js-diagramFirst').select('.progress'),
		secondChart = d3.select('.js-diagramSecond').select('.progress'),
		thirdChart = d3.select('.js-diagramThird').select('.progress'),
		fourthChart = d3.select('.js-diagramFourth').select('.progress');

	var firstText = d3.select('.js-diagramFirst').select('text'),
		secondText = d3.select('.js-diagramSecond').select('text'),
		thirdText = d3.select('.js-diagramThird').select('text'),
		fourthText = d3.select('.js-diagramFourth').select('text');

	// Charts settings
	firstChart.transition()
		.duration(750)
		.call(arcTween, 0.5 * τ);

	secondChart.transition()
		.duration(750)
		.call(arcTween, 0.25 * τ);

	thirdChart.transition()
		.duration(750)
		.call(arcTween, 0.37 * τ);

	fourthChart.transition()
		.duration(750)
		.call(arcTween, 0.68 * τ);

	// Show this stuff
	function arcTween(transition, newAngle) {

		transition.attrTween('d', function(d) {

			var interpolate = d3.interpolate(d.endAngle, newAngle);

			return function(t) {

				d.endAngle = interpolate(t);

				firstText.text(50);
				secondText.text(25);
				thirdText.text(37);
				fourthText.text(68);

				return arc(d);
			};
		});
	}
});

;(function ( $, window, document, undefined ) {
  var defaults = {
    formElem: undefined     // form class or ID for validating
                            // else it will validate all forms
  };

  function SimpleForm( element, options ) {
    this.options = $.extend( {}, defaults, options) ;
    this.element = element;
    this.init();
  }

  SimpleForm.prototype.init = function () {
    var $this = $(this.element),
      formElem = this.options.formElem;

    // Custom validator for https://github.com/victorjonsson/jQuery-Form-Validator
    // Test for illegal characters in form fields
    $.formUtils.addValidator({
      name : 'illegal-field',
      validatorFunction : function(val, $el, conf, language) {
        var patternField = '^([^\\<\\>\\"\\%\\;\\:\\(\\)\\&\\!\\@\\#\\$\\^\\*\\+\\=\\\\\/\\|\\{\\}\\[\\]\\,]+)$';
        return new RegExp(patternField).test(val);
      },
      errorMessage : '',
      errorMessageKey: ''
    });
    // Test for illegal characters in form fields
    $.formUtils.addValidator({
      name : 'illegal-text',
      validatorFunction : function(val, $el, conf, language) {
        var patternText = '^([^\\<\\>\\%\\;\\&\\|\\^\\*\\+\\=\\{\\}\\[\\]]+)$';
        return new RegExp(patternText).test(val);
      },
      errorMessage : '',
      errorMessageKey: ''
    });

    // Validate form with https://github.com/victorjonsson/jQuery-Form-Validator
    if(!formElem){
      $.validate({
        addValidClassOnAll : true
      });
    }else{
      $.validate({
        form : formElem,
        addValidClassOnAll : true
      });
    }
  };

  $.fn.simpleForm = function ( options ) {
    return this.each(function () {
      new SimpleForm( this, options );
    });
  };

})( jQuery, window, document );

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

$(function() {

	// jQuery parallax
	$('.js-carousel').carousel();

	// Plugin init
	$(".js-form").simpleForm({formElem: ".js-form"});

});
