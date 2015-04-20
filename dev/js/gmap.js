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
