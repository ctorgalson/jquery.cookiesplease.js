# Cookies Please

This is a very simple plugin for dealing with the EU's guidelines on Cookies. It does only one job: attempt to set a single cookie with the user's cookie preference. This cookie can be used (in conjunction with jquery.cookie, a dependency of this plugin) by other scripts to find out if they can/should use cookies. It can even be used to determine whether other scripts can be loaded at all.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/ctorgalson/jquery.cookiesplease.js/master/dist/cookiesplease.min.js
[max]: https://raw.github.com/ctorgalson/jquery.cookiesplease.js/master/dist/cookiesplease.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/cookiesplease.min.js"></script>
<script>
jQuery(function($) {
  $.awesome(); // "awesome"
});
</script>
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Release History
_(Nothing yet)_
