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
