;(function($, disqus_shortname, d, w, undefined) {
    "use strict";
    
    var $nav = $('header.navbar-fixed-top');
    

    var getScript = function(sn) {
        var s = d.createElement('script');
        s.async = true;
        s.src = '//'+sn+'.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        return s;
    };
    
    $(w).scroll({st: 0}, function(event) {
        var sn = $(w).scrollTop();
        (sn < this.st) ? $nav.slideDown() : $nav.slideUp();
        this.st = sn;
    });
    
    $('pre').addClass('prettyprint');
    $('blockquote').addClass('blockquote');
    $('body').has('#disqus_thread')
        .append($(getScript(disqus_shortname)));

})(jQuery, disqus_shortname, document, window, undefined);
