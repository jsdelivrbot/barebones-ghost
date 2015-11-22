;(function($, disqus_shortname, d, w, undefined) {
  "use strict";
  
  var disqusOptions = {
    async: true,
    src: '//'+disqus_shortname+'.disqus.com/embed.js',
    data: { timestamp: +new Date() }
  };

  var disqus_config = function () {
    this.page.url = location.href;
    this.page.identifier = location.pathname;
  };
  
  var $nav = $('header.later.navbar-fixed-top');
  $(w).scroll({st: 0}, function(event) {
    var sn = $(w).scrollTop();
    var x = (sn < this.st) ? $nav.slideDown() : $nav.slideUp();
    this.st = sn;
  });

  $('pre').addClass('prettyprint');
  $('blockquote').addClass('blockquote');
  
  $('body').has('#disqus_thread')
    .append($('<script/>', disqusOptions));

})(jQuery, disqus_shortname, document, window, undefined);
