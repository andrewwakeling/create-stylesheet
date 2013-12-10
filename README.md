create-stylesheet
=================

Create, replace and remove spreadsheets in most modern desktop browsers. It was designed specifically to address [several issues in IE8+](https://github.com/andrewwakeling/ie-css-bugs).


Usage
==
This module currently supports AMD or CommonJS loaders. If no loader is used, the API will be available from the **stylesheet** global.

This module currently supports IE8+ and other modern desktop browsers.

## createStyleSheet(options, callback)

Create a new stylesheet with the specified options.

Example:

``` javascript
stylesheet.createStyleSheet({
    css: 'body { background-color: red; }',
}, function(err, style) {
    if (err) {
        // Do your error handling here.
    } else {
        // The style was successfully created.
    }
}
```

### Options

#### options.css
Type: `String`

The CSS text which will be used to create a new stylesheet.

#### options.replace
Type: `DOMElement`
Default value: undefined

If specified, the new stylesheet will replace the specified stylesheet.

#### options.ignoreKB262161
Type: `Boolean`
Default value: `false`

For awareness of [KB262161](http://support.microsoft.com/kb/262161), if there are a total of 31 or more stylesheets present when invoking createStyle, it will throw an error.
If you wish to ignore this error for non-IE browsers, set this option to true.



## removeStyleSheet(style)

Remove the specified stylesheet.

Example:

``` javascript
stylesheet.removeStyleSheet(document.getElementById('foo'));
```

## TODO
- attributes of the replaced stylesheet can be copied to the new stylesheet
- ability to specify a "insert before" target in createStyleSheet
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

