$('a[rel="external"]').click( function() {
  window.open( $(this).attr('href'));
  return false;
});

$("#speakers ul li").shuffle();

$("*[rel=popover]").popover();
