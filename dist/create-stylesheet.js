// create-stylesheet 0.1.0
// Andrew Wakeling <andrew.wakeling@gmail.com>
// create-stylesheet may be freely distributed under the MIT license.
(function(root, factory) {
    if(typeof exports === 'object') {
        module.exports = factory();
    }
    else if(typeof define === 'function' && define.amd) {
        define([], factory);
    }
    else {
        root.stylesheet = factory();
    }
}(this, function() {
/**
 * Create an empty stylesheet and insert it into the DOM.
 *
 * @param target - target DOM element. If specified, insert it before the target, otherwise it will be appended at the end of the head.
 * @param callback - function(err, style)
 */
function insertEmptyStyle(target, callback) {
    var style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    var head = document.getElementsByTagName('head')[0];
    if (target) {
        head.insertBefore(style, target);
    } else {
        head.appendChild(style);
    }
    if (style.styleSheet && style.styleSheet.disabled) {
        head.removeChild(style);
        return callback('Unable to add any more stylesheets because you have exceeded the maximum allowable stylesheets. See KB262161 for more information.');
    }
    callback(null, style);
}

/**
 * Set the CSS text on the specified style element.
 * @param style
 * @param css
 * @param callback - function(err)
 */
function setStyleCss(style, css, callback) {
    try {
        // Favor cssText over textContent as it appears to be slightly faster for IE browsers.
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else if ('textContent' in style) {
            style.textContent = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        return callback(null);
    } catch (e) {
        // Ideally this should never happen but there are still obscure cases with IE where attempting to set cssText can fail.
        callback(e);
    }
}

/**
 * Remove a style node from the DOM unless it's not in the DOM already.
 *
 * Note: This isn't doing anything special now, but if any edge-cases arise which need handling (e.g. IE), they can be implemented here.
 * @param node
 */
function removeStyleSheet(node) {
    if (node.tagName === 'STYLE' && node.parentNode) {
        node.parentNode.removeChild(node);
    }
}

/**
 * Create
 * @param options - options object. e.g. {ignoreKB262161: true, replace: null, css: 'body {}' }
 * @param callback - function(err, style)
 */
function createStyleSheet(options, callback) {
    if (!options.ignoreKB262161 && document.styleSheets.length >= 31) {
        callback('Unable to add any more stylesheets because you have exceeded the maximum allowable stylesheets. See KB262161 for more information.');
    }

    insertEmptyStyle(options.replace ? options.replace.nextSibling : null, function (err, style) {
        if (err) {
            callback(err);
        } else {
            setStyleCss(style, options.css || "", function (err) {
                if (err) {
                    removeStyleSheet(style);
                    callback(err);
                } else {
                    // TODO: If we want to transfer any attributes from an existing style node, this is the time and place to do it.
                    if (options.replace) {
                        removeStyleSheet(options.replace);
                    }
                    callback(null, style);
                }
            });
        }
    });
}

var functions = {
    createStyleSheet: createStyleSheet,
    removeStyleSheet: removeStyleSheet
};
    return functions;
}));
