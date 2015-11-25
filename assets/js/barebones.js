;(function($, disqus_shortname, d, w, undefined) {
  "use strict";
  
  (function($, shortname, d, w) {
    var DISQUS_ID = '#disqus_thread';

    var disqusOptions = {
      async: true,
      src: '//'+shortname+'.disqus.com/embed.js',
      data: { timestamp: +new Date() }
    };
    
    var disqus_config = function () {
      this.page.url = location.href;
      this.page.identifier = location.pathname;
    };
  
    $(w).one('scroll', function(event) {
      $(DISQUS_ID)
        .append($('<script/>', disqusOptions))
        .delay(500)
        .fadeTo(null, 1);
    });
  })($, disqus_shortname, d, w);

 
  (function($, d, w) {
    var $nav = $('header.later.navbar-fixed-top');
  
    $(w).scroll({st: 0}, function(event) {
      var sn = $(w).scrollTop();
      var x = (sn < this.st) ? $nav.slideDown() : $nav.slideUp();
      this.st = sn;
    });
  })($, d, w);

  $('pre').addClass('prettyprint');
  $('blockquote').addClass('blockquote');
})(jQuery, disqus_shortname, document, window, undefined);
