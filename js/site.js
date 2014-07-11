/*
 * site.js -- Full site JavaScript
 */
$(document).ready(function() {

  /*
   * Page-wide text functions:
   * *************************
   */

  /*
   * Open all links outside the current site in a new window.
   */
  $('a').each(function(index) {
    var link = $(this)[0];

    if (link.hostname && link.hostname != window.location.hostname) {
      link.target = '_blank';
      link.title = 'Link opens in new window';
    }
  });

  /*
   * scale.fix.js -- Scale fix for GitHub pages
   */
  var metas = document.getElementsByTagName('meta');
  var i;
  if (navigator.userAgent.match(/iPhone/i)) {
    for (i=0; i<metas.length; i++) {
      if (metas[i].name == "viewport") {
        metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
      }
    }
    document.addEventListener("gesturestart", gestureStart, false);
  }
  function gestureStart() {
    for (i=0; i<metas.length; i++) {
      if (metas[i].name == "viewport") {
        metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
      }
    }
  }
}());
