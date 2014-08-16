// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}

// http://james.padolsey.com/javascript/shuffling-the-dom/
(function($){
  $.fn.shuffle = function() {
    var allElems = this.get(),
    getRandom = function(max) {
      return Math.floor(Math.random() * max);
    },
    shuffled = $.map(allElems, function(){
      var random = getRandom(allElems.length),
          randEl = $(allElems[random]).clone(true)[0];
          allElems.splice(random, 1);
          return randEl;
  });
  this.each(function(i){
    $(this).replaceWith($(shuffled[i]));
  });
    return $(shuffled);
  };
})(jQuery);