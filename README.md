Barebones Ghost
---

A minimalist theme using Bootstrap 4 with Disqus comments, Google Code Prettify, and Google Analytics.  

####Configuration  

Define your Google Analytics tracking id and Disqus shortname in the Code Injection section of Ghost's admin:  
````javascript
<script>
    var gaUid = YOUR-ID;
    var disqus_shortname = YOUR_SHORTNAME;
</script>
````  

Add pretty-printing:
````html
<script async src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js"></script>
````  

