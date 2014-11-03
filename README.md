# Cookies Please

This is a very simple plugin for dealing with the EU's guidelines on Cookies. It does only one job: attempt to set a single cookie with the user's cookie preference. This cookie can be used (in conjunction with jquery.cookie, a dependency of this plugin) by other scripts to find out if they can/should use cookies. It can even be used to determine whether other scripts can be loaded at all.

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/ctorgalson/jquery.cookiesplease.js/master/dist/cookiesplease.min.js
[max]: https://raw.github.com/ctorgalson/jquery.cookiesplease.js/master/dist/cookiesplease.js

## Why another cookie plugin?

There are already lots of plugins like this, but the ones I've looked at
suffer from a few common problems:

1. **They often insist on providing their own markup and css**. This is
   aggravating if you're already working with a front-end framework like
   [Zurb's Foundation](http://foundation.zurb.com/) or [Twitter's Bootstrap](http://getbootstrap.com/).
   This one is a jQuery plugin called on a jQuery collection; it's completely
   agnostic about the html of the dialogue containing the buttons, and the
   selectors it uses to identify the dialogue and the buttons are configurable.
2. **They sometimes have unnecessarily complex ways of integrating with
   other scripts**. This one sets a cookie you can use to decide how or
   whether to call other scripts.
3. **They can be fairly large scripts**. This one is relatively small (about 500 bytes minified and uncompressed, under 300 bytes gzipped).
4. **They sometimes impose a specific choice model**. This one allows
   you to use 'Yes' and 'No' buttons, or simply a 'Yes' button (i.e.
   with text like "You need to have cookies enabled for this website to
   work [ Ok ]"

## Usage

When set up as shown below, a click on the "Go cookies!" button will create a
cookie, `cookiesPlease`, with the value `yes`.

When set up as shown below, a click on the "F--- cookies!" button will create a
cookie, `cookiesPlease`, with the value `no`.

Other scripts can be run&mdash;or not&mdash;according to the value of the
cookie.

### HTML

```html
<!-- Using Foundation's alert boxes -->
<div data-alert class="alert-box info cookies-please hide">
  <div class="row">
    <div class="columns medium-12">
      This is an info alert with a radius.
      <button id="i-like-cookies">Go cookies!</button>
      <button id="i-hate-cookies">F--- cookies!</button>
    </div>
  </div>
</div>
```

### Javascript

```javascript
$(document).ready(function () {
  $('.alert-info.cookies-please').cookiesPlease();
});
```

### Configurable options

The plugin can be configured by passing it a javascript object containing any or all of the three following options:

* `iLikeCookiesSelector` (string): a valid CSS selector uniquely identifying the element the user needs to click/tap/etc to agree to accept cookies (default: `#i-like-cookies`)
* `ihateCookiesSelector` (string): a valid CSS selector uniquely identifying the element the user needs to click/tap/etc to refuse to accept cookies (default: `#i-hate-cookies`)
* `cookieExpiry` (int): the cookie we set to store the user's preferences re: cookies will expire in this many days (default: `1`)
