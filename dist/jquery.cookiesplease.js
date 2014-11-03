/*! Cookies Please - v0.1.0 - 2014-11-03
* https://github.com/ctorgalson/jquery.cookiesplease.js
* Copyright (c) 2014 Christopher Torgalson; Licensed GPL */
(function($) {
  "use strict";
  /**
   * @param object overrides
   *  This contains configuration options for the plugin:
   *  -- iLikeCookiesSelector (string): a valid CSS selector uniquely identifying
   *     the element the user needs to click/tap/etc to agree to accept cookies
   *  -- iHateCookiesSelector (string): a valid CSS selector uniquely identifying
   *     the element the user needs to click/tap/etc to refuse to accept cookies
   *  -- cookieExpiry (int): the cookie we set to store the user's preferences re:
   *     cookies will expire in this many days
   *
   * @note Both the iLikeCookiesSelector and the iHateCookiesSelector items in the
   *       settings variable are used inside jQuery's .find() function, so the do
   *       not need to be globlly unique in the document.
   *
   * @see http://ico.org.uk/for_organisations/privacy_and_electronic_communications/~/media/documents/library/Privacy_and_electronic/Practical_application/guidance_on_the_new_cookies_regulations.ashx
   */
  $.fn.cookiesPlease = function (overrides) {
    // Define overridable defaults, and get the current cookie value:
    var defaults = {
      iLikeCookiesSelector: '#i-like-cookies',
      iHateCookiesSelector: '#i-hate-cookies',
      cookieExpiry: 1
    },
    settings = $.extend({}, defaults, overrides),
    cookieValue = $.cookie('cookiesPlease');
    // Return collection for chaining:
    return this.each(function () {
      // We actually don't need to do anything unless the cookie has no value:
      if (cookieValue === undefined) {
        // We only need to make a collection out of the current element once:
        var $current = $(this);
        // Define click handlers on the 'like' and 'hate' buttons. Click handlers
        // are identical except for the cookie value ('yes' or 'no'):
        $current
          .find(settings.iLikeCookiesSelector).click(function (e) {
            // Prevent default in case the current element is a link:
            e.preventDefault();
            // Set the cookie value:
            $.cookie('cookiesPlease', 'yes', {expires: settings.cookieExpiry, path: '/'});
            // Hide the message/modal etc:
            $current.hide();
          })
          .end()
          .find(settings.iHateCookiesSelector).click(function (e) {
            e.preventDefault();
            $.cookie('cookiesPlease', 'no', {expires: settings.cookieExpiry, path: '/'});
            $current.hide();
          })
          .end()
          .show();
      }
    });
  };
}(jQuery));
