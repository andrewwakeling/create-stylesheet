create-stylesheet
=================

Create, replace and remove spreadsheets in most modern desktop browsers. It was designed specifically to address [several issues in IE8+](https://github.com/andrewwakeling/ie-css-bugs).


Usage
==
In [dist](https://github.com/andrewwakeling/create-stylesheet/tree/master/dist) there exists minified and non-minified versions which support AMD and CommonJS loaders.
If no loader is used, then the API will be available through a `stylesheet` global.


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
        // The style was successfully created.
    }
}
```

## replaceStyleSheet(node, css, callback)

Create a new stylesheet and replace the specified node. Replacement occurs by inserting the new stylesheet after the specified node and then deleting the specified node.
**Note:** This means that any attributes on the specified node will be lost.
If no node is specified, the new stylesheet will be appended to the head element.

Example:

``` javascript
stylesheet.insertStyleSheetBefore(document.getElementById('foo'), 'body { background-color: red; }', function(err, style) {
    if (err) {
        // Do your error handling here.
    } else {
        // The style was successfully created.
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



## Upcoming Features
- attributes of the replaced stylesheet can be copied to the new stylesheet
- tests
- support this module in bower and component package management/repositories

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

