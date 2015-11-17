;(function($, d, w, undefined) {
    "use strict";
    
    var $nav = $('header.navbar-fixed-top');
    $(window).scroll({st: 0}, function(event) {
        var sn = $(window).scrollTop();
        (sn < this.st) ? $nav.slideDown() : $nav.slideUp();
        this.st = sn;
    });

    $.fn.bootstrap = function(options) {
        var opts = $.extend({}, $.fn.bootstrap.defaults, options);
        return this.each(function() {
            for(var p in opts) {
                $(p).addClass(opts[p]);
            }
        });
    };
            
    $.fn.disqus = function(sn) {
        return this.each(function() {
            $(this).has($.fn.disqus.defaults.id)
                .append($(getScript(sn)));
        });
    };
    
    var getScript = function(sn) {
        var s = d.createElement('script');
        s.async = true;
        s.src = '//'+sn+'.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        return s;
    };
    
    $.fn.disqus.defaults = {id: '#disqus_thread'};
    $.fn.bootstrap.defaults = {pre: 'prettyprint', blockquote: 'blockquote'};
    $('body').bootstrap().disqus(disqus_shortname);
})(jQuery, document, window, undefined);
