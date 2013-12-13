create-stylesheet
=================

Create, replace and remove spreadsheets in most modern desktop browsers. It was designed specifically to address [several issues in IE8+](https://github.com/andrewwakeling/ie-css-bugs).


Usage
==
In [dist](https://github.com/andrewwakeling/create-stylesheet/tree/master/dist) there exists minified and non-minified versions which support AMD and CommonJS loaders.
If no loader is used, then the API will be available through a `stylesheet` global. There is also an "unwrapped" distributable which gives you the freedom in how you structure your closure to define a module.


Supported Platforms
==
This module currently supports IE8+ and other modern desktop browsers, however if you find issues on any mobile browsers, please raise an [issue](https://github.com/andrewwakeling/create-stylesheet/issues/new).

API
==

## appendStyleSheet(css, callback)

Create a new stylesheet and append it to the head element.

Example:

``` javascript
stylesheet.appendStyleSheet('body { background-color: red; }', function(err, style) {
    if (err) {
        // Do your error handling here.
    } else {
        // The style was successfully created.
    }
}
```

## insertStyleSheetBefore(node, css, callback)

Create a new stylesheet and insert it before the specified node. If no node is specified, the new stylesheet will be appended to the head element.

Example:

``` javascript
stylesheet.insertStyleSheetBefore(document.getElementById('foo'), 'body { background-color: red; }', function(err, style) {
    if (err) {
        // Do your error handling here.
    } else {
        // The style was successfully inserted.
    }
}
```

## replaceStyleSheet(node, css, callback)

Create a new stylesheet and replace the specified node. If no node is specified, the new stylesheet will be appended to the head element.

**Note:** This function works by deleting the existing stylesheet and replacing the new stylesheet in its place. This means that any attribute (other than `type`) will **not exist** on the new stylesheet.
As demonstrated in the example below, this can be solved by setting any attributes after the stylesheet is created.
If this approach can not work for you, please raise an [issue](https://github.com/andrewwakeling/create-stylesheet/issues/new).

Example:

``` javascript
var id = 'foo'
stylesheet.replaceStyleSheet(document.getElementById(id), 'body { background-color: red; }', function(err, style) {
    if (err) {
        // Do your error handling here.
    } else {
        // The stylesheet was successfully replaced. Set any attributes which may have been lost.
        style.setAttribute('id', id);
    }
}
```

## removeStyleSheet(style)

Remove the specified stylesheet.

Example:

``` javascript
stylesheet.removeStyleSheet(document.getElementById('foo'));
```

## stylesheet.ignoreKB262161

For awareness of [KB262161](http://support.microsoft.com/kb/262161), if 31 or more total stylesheets exist when invoking appendStyleSheet, insertStyleSheetBefore or replaceStyleSheet,
an error will be thrown in ANY browser. If you really want to disable this error (for non-IE), set this property to true. The default value is false.

Example:

``` javascript
stylesheet.ignoreKB262161 = true;
```

## Upcoming Plans
- support this module in bower and component package management/repositories
- cross-browser unit testing
- attributes of the replaced stylesheet can be copied to the new stylesheet (Unfortunately this is unlikely to happen soon due to odd behaviour I have witnessed in IE around attributes)

License
==

The MIT License (MIT)

Copyright (c) 2013 Andrew Wakeling <[andrew.wakeling@gmail.com](mailto:andrew.wakeling@gmail.com)>

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.