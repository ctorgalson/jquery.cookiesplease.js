(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#cookiesplease', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
      this.cookieName = 'cookiesPlease';
      this.iLikeCookiesButton = $('#i-like-cookies');
      this.iHateCookiesButton = $('#i-hate-cookies');
    }
  });

  /**
   * Tests that plugin is chainable.
   */
  test('plugin is chainable', function() {
    expect(1);
    strictEqual(this.elems.cookiesPlease(), this.elems, 'plugin should be chainable');
  });

  /**
   * Tests that clicking the "no" button creates a cookie with the value "no".
   */
  test('clicking "no" button creates "no" cookie', function() {
    var event = $.Event('click');
    expect(1);
    if ($.cookie(this.cookieName) !== undefined) {
      $.removeCookie(this.cookieName, {expires: 1, path: '/'});
    }
    this.elems.cookiesPlease();
    this.iHateCookiesButton.trigger(event);
    console.log($.cookie());
    strictEqual($.cookie(this.cookieName), 'no', 'clicking "no" button should create "no" cookie');
  });

  /**
   * Tests that clicking the "yes" button creates a cookie with the value "yes".
   */
  test('clicking "yes" button creates "yes" cookie', function() {
    var event = $.Event('click');
    expect(1);
    if ($.cookie(this.cookieName) !== undefined) {
      $.removeCookie(this.cookieName, {expires: 1, path: '/'});
    }
    this.elems.cookiesPlease();
    this.iLikeCookiesButton.trigger(event);
    strictEqual($.cookie(this.cookieName), 'yes', 'clicking "yes" button should create "yes" cookie');
  });

}(jQuery));
