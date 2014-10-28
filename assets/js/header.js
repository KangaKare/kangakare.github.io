$(document).ready(function() {
  var timeouts = {};
  $('.hover').hover(
    function() {
      var offset = $(this).offset();
      var menu = $('ul.menu' + this.id.charAt(5));
      menu.css('top', offset.top + 4 - $(window).scrollTop());
      menu.css('left', offset.left - menu.width()/2);
      if (timeouts[this.id]) clearTimeout(timeouts[this.id]);
      timeouts[this.id] = setTimeout(function() { menu.fadeIn('fast').show(); })
    }, function() {
      var menu = $('ul.menu' + this.id.charAt(5));
      if (timeouts[this.id]) clearTimeout(timeouts[this.id]);
      timeouts[this.id] = setTimeout(function() { menu.hide() }, 400);
    }
  );
});
