# Cookies Please

This is a very simple plugin for dealing with the [EU's guidelines on Cookies](http://ico.org.uk/for_organisations/privacy_and_electronic_communications/~/media/documents/library/Privacy_and_electronic/Practical_application/guidance_on_the_new_cookies_regulations.ashx). It does only one job: attempt to set a single cookie with the user's cookie preference. This cookie can be used (in conjunction with jquery.cookie, a dependency of this plugin) by other scripts to find out if they can/should use cookies. It can even be used to determine whether other scripts can be loaded at all.

## Why another cookie plugin?

There are already lots of plugins like this, but the ones I've looked at
suffer from two common problems:

1. **They often insist on providing their own markup and css**. This is
   aggravating if you're already working with a front-end framework like
   [Zurb's Foundation](http://foundation.zurb.com/) or [Twitter's Bootstrap](http://getbootstrap.com/).
   This one is a jQuery plugin called on a jQuery collection.
2. **They sometimes have unnecessarily complex ways of integrating with
   other scripts**. This one sets a cookie you can use to decide how or
   whether to call other scripts.
3. **They can be fairly large scripts**. This one is relatively small.
4. **They sometimes impose a specific choice model**. This one allows
   you to use 'Yes' and 'No' buttons, or simply a 'Yes' button (i.e.
   with text like "You need to have cookies enabled for this website to
   work [ Ok ]"

## Usage

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

### Javascript

```javascript
    $(document).ready(function () {
      $('.alert-info.cookies-please').cookiesPlease();
    });

