jQuery(function($){
	$('#speakers a, .talks-list a').click(function(event){
		var objThis = this;
		event.preventDefault();
		var top = parseInt($('.talks-list a[href="' + $(objThis).attr('href') + '"]').parent().position().top);
		console.log($('.talks-list a[href="' + $(objThis).attr('href') + '"]').position().top);
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
//	$("*[rel=popover]").popover();
//	$(".popover").popover();
});
