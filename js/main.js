jQuery(function($){
	$('#speakers a, .talks-list a').click(function(event){
		var objThis = this;
		event.preventDefault();
		var top = parseInt($('.talks-list a[href="' + $(objThis).attr('href') + '"]').parent().position().top);
		$('body,html').animate({
			scrollTop: top
		}, 800, function(){
			document.location = $(objThis).attr('href');
		});
		return false;
	});
	$('a[rel="external"]').click( function() {
		window.open( $(this).attr('href'));
		return false;
	});
	$("#speakers ul li").shuffle();

	$(".talks-list li:odd").addClass("right");

});

function initialize() {
		var icon = 'img/icons/map/marker.png',
			latlng = new google.maps.LatLng(-9.65573,-35.73758); //Longitude e Latitude do local http://universimmedia.pagesperso-orange.fr/geo/loc.htm
		var options = {
		  zoom: 16,
		  center: latlng,
		  scrollwheel: false,
		  streetViewControl: true,
		  labels: true,
		  mapTypeId: google.maps.MapTypeId.HYBRID
		};
		var map = new google.maps.Map(document.getElementById("gmap"), options);
		map.setTilt(45);
		var marker = new google.maps.Marker({
		    position: latlng,
		    map: map,
		    icon: icon
		});
} 
initialize();