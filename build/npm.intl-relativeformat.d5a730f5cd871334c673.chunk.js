(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "042310d2c88a09b0ee58":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/
Object.defineProperty(exports, "__esModule", { value: true });
/* jslint esnext: true */
var intl_messageformat_1 = __webpack_require__("a4ff480ace59cb3fc4f2");
var diff_1 = __webpack_require__("ce38dab43593f8fd3e2d");
var es5_1 = __webpack_require__("8f07153a86eaea139193");
exports.default = RelativeFormat;
// -----------------------------------------------------------------------------
var FIELDS = [
    'second', 'second-short',
    'minute', 'minute-short',
    'hour', 'hour-short',
    'day', 'day-short',
    'month', 'month-short',
    'year', 'year-short'
];
var STYLES = ['best fit', 'numeric'];
// -- RelativeFormat -----------------------------------------------------------
function RelativeFormat(locales, options) {
    options = options || {};
    // Make a copy of `locales` if it's an array, so that it doesn't change
    // since it's used lazily.
    if (es5_1.isArray(locales)) {
        locales = locales.concat();
    }
    es5_1.defineProperty(this, '_locale', { value: this._resolveLocale(locales) });
    es5_1.defineProperty(this, '_options', { value: {
            style: this._resolveStyle(options.style),
            units: this._isValidUnits(options.units) && options.units
        } });
    es5_1.defineProperty(this, '_locales', { value: locales });
    es5_1.defineProperty(this, '_fields', { value: this._findFields(this._locale) });
    es5_1.defineProperty(this, '_messages', { value: es5_1.objCreate(null) });
    // "Bind" `format()` method to `this` so it can be passed by reference like
    // the other `Intl` APIs.
    var relativeFormat = this;
    this.format = function format(date, options) {
        return relativeFormat._format(date, options);
    };
}
// Define internal private properties for dealing with locale data.
es5_1.defineProperty(RelativeFormat, '__localeData__', { value: es5_1.objCreate(null) });
es5_1.defineProperty(RelativeFormat, '__addLocaleData', { value: function () {
        for (var i = 0; i < arguments.length; i++) {
            var datum = arguments[i];
            if (!(datum && datum.locale)) {
                throw new Error('Locale data provided to IntlRelativeFormat is missing a ' +
                    '`locale` property value');
            }
            RelativeFormat.__localeData__[datum.locale.toLowerCase()] = datum;
            // Add data to IntlMessageFormat.
            intl_messageformat_1.default.__addLocaleData(datum);
        }
    } });
// Define public `defaultLocale` property which can be set by the developer, or
// it will be set when the first RelativeFormat instance is created by
// leveraging the resolved locale from `Intl`.
es5_1.defineProperty(RelativeFormat, 'defaultLocale', {
    enumerable: true,
    writable: true,
    value: undefined
});
// Define public `thresholds` property which can be set by the developer, and
// defaults to relative time thresholds from moment.js.
es5_1.defineProperty(RelativeFormat, 'thresholds', {
    enumerable: true,
    value: {
        second: 45, 'second-short': 45,
        minute: 45, 'minute-short': 45,
        hour: 22, 'hour-short': 22,
        day: 26, 'day-short': 26,
        month: 11, 'month-short': 11 // months to year
    }
});
RelativeFormat.prototype.resolvedOptions = function () {
    return {
        locale: this._locale,
        style: this._options.style,
        units: this._options.units
    };
};
RelativeFormat.prototype._compileMessage = function (units) {
    // `this._locales` is the original set of locales the user specified to the
    // constructor, while `this._locale` is the resolved root locale.
    var locales = this._locales;
    var resolvedLocale = this._locale;
    var field = this._fields[units];
    var relativeTime = field.relativeTime;
    var future = '';
    var past = '';
    var i;
    for (i in relativeTime.future) {
        if (relativeTime.future.hasOwnProperty(i)) {
            future += ' ' + i + ' {' +
                relativeTime.future[i].replace('{0}', '#') + '}';
        }
    }
    for (i in relativeTime.past) {
        if (relativeTime.past.hasOwnProperty(i)) {
            past += ' ' + i + ' {' +
                relativeTime.past[i].replace('{0}', '#') + '}';
        }
    }
    var message = '{when, select, future {{0, plural, ' + future + '}}' +
        'past {{0, plural, ' + past + '}}}';
    // Create the synthetic IntlMessageFormat instance using the original
    // locales value specified by the user when constructing the the parent
    // IntlRelativeFormat instance.
    return new intl_messageformat_1.default(message, locales);
};
RelativeFormat.prototype._getMessage = function (units) {
    var messages = this._messages;
    // Create a new synthetic message based on the locale data from CLDR.
    if (!messages[units]) {
        messages[units] = this._compileMessage(units);
    }
    return messages[units];
};
RelativeFormat.prototype._getRelativeUnits = function (diff, units) {
    var field = this._fields[units];
    if (field.relative) {
        return field.relative[diff];
    }
};
RelativeFormat.prototype._findFields = function (locale) {
    var localeData = RelativeFormat.__localeData__;
    var data = localeData[locale.toLowerCase()];
    // The locale data is de-duplicated, so we have to traverse the locale's
    // hierarchy until we find `fields` to return.
    while (data) {
        if (data.fields) {
            return data.fields;
        }
        data = data.parentLocale && localeData[data.parentLocale.toLowerCase()];
    }
    throw new Error('Locale data added to IntlRelativeFormat is missing `fields` for :' +
        locale);
};
RelativeFormat.prototype._format = function (date, options) {
    var now = options && options.now !== undefined ? options.now : es5_1.dateNow();
    if (date === undefined) {
        date = now;
    }
    // Determine if the `date` and optional `now` values are valid, and throw a
    // similar error to what `Intl.DateTimeFormat#format()` would throw.
    if (!isFinite(now)) {
        throw new RangeError('The `now` option provided to IntlRelativeFormat#format() is not ' +
            'in valid range.');
    }
    if (!isFinite(date)) {
        throw new RangeError('The date value provided to IntlRelativeFormat#format() is not ' +
            'in valid range.');
    }
    var diffReport = diff_1.default(now, date);
    var units = this._options.units || this._selectUnits(diffReport);
    var diffInUnits = diffReport[units];
    if (this._options.style !== 'numeric') {
        var relativeUnits = this._getRelativeUnits(diffInUnits, units);
        if (relativeUnits) {
            return relativeUnits;
        }
    }
    return this._getMessage(units).format({
        '0': Math.abs(diffInUnits),
        when: diffInUnits < 0 ? 'past' : 'future'
    });
};
RelativeFormat.prototype._isValidUnits = function (units) {
    if (!units || es5_1.arrIndexOf.call(FIELDS, units) >= 0) {
        return true;
    }
    if (typeof units === 'string') {
        var suggestion = /s$/.test(units) && units.substr(0, units.length - 1);
        if (suggestion && es5_1.arrIndexOf.call(FIELDS, suggestion) >= 0) {
            throw new Error('"' + units + '" is not a valid IntlRelativeFormat `units` ' +
                'value, did you mean: ' + suggestion);
        }
    }
    throw new Error('"' + units + '" is not a valid IntlRelativeFormat `units` value, it ' +
        'must be one of: "' + FIELDS.join('", "') + '"');
};
RelativeFormat.prototype._resolveLocale = function (locales) {
    if (typeof locales === 'string') {
        locales = [locales];
    }
    // Create a copy of the array so we can push on the default locale.
    locales = (locales || []).concat(RelativeFormat.defaultLocale);
    var localeData = RelativeFormat.__localeData__;
    var i, len, localeParts, data;
    // Using the set of locales + the default locale, we look for the first one
    // which that has been registered. When data does not exist for a locale, we
    // traverse its ancestors to find something that's been registered within
    // its hierarchy of locales. Since we lack the proper `parentLocale` data
    // here, we must take a naive approach to traversal.
    for (i = 0, len = locales.length; i < len; i += 1) {
        localeParts = locales[i].toLowerCase().split('-');
        while (localeParts.length) {
            data = localeData[localeParts.join('-')];
            if (data) {
                // Return the normalized locale string; e.g., we return "en-US",
                // instead of "en-us".
                return data.locale;
            }
            localeParts.pop();
        }
    }
    var defaultLocale = locales.pop();
    throw new Error('No locale data has been added to IntlRelativeFormat for: ' +
        locales.join(', ') + ', or the default locale: ' + defaultLocale);
};
RelativeFormat.prototype._resolveStyle = function (style) {
    // Default to "best fit" style.
    if (!style) {
        return STYLES[0];
    }
    if (es5_1.arrIndexOf.call(STYLES, style) >= 0) {
        return style;
    }
    throw new Error('"' + style + '" is not a valid IntlRelativeFormat `style` value, it ' +
        'must be one of: "' + STYLES.join('", "') + '"');
};
RelativeFormat.prototype._selectUnits = function (diffReport) {
    var i, l, units;
    var fields = FIELDS.filter(function (field) {
        return field.indexOf('-short') < 1;
    });
    for (i = 0, l = fields.length; i < l; i += 1) {
        units = fields[i];
        if (Math.abs(diffReport[units]) < RelativeFormat.thresholds[units]) {
            break;
        }
    }
    return units;
};
//# sourceMappingURL=core.js.map

/***/ }),

/***/ "0af9125b2ddad12112c8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* jslint esnext: true */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("042310d2c88a09b0ee58");
var en_1 = __webpack_require__("4210f3b9a38cb4ee8255");
core_1.default.__addLocaleData(en_1.default);
core_1.default.defaultLocale = 'en';
exports.default = core_1.default;
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "4210f3b9a38cb4ee8255":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* @generated */
exports.default = { "locale": "en", "pluralRuleFunction": function (n, ord) {
        var s = String(n).split('.'), v0 = !s[1], t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
        if (ord)
            return (n10 == 1 && n100 != 11) ? 'one'
                : (n10 == 2 && n100 != 12) ? 'two'
                    : (n10 == 3 && n100 != 13) ? 'few'
                        : 'other';
        return (n == 1 && v0) ? 'one' : 'other';
    }, "fields": { "year": { "displayName": "year", "relative": { "0": "this year", "1": "next year", "-1": "last year" }, "relativeTime": { "future": { "one": "in {0} year", "other": "in {0} years" }, "past": { "one": "{0} year ago", "other": "{0} years ago" } } }, "year-short": { "displayName": "yr.", "relative": { "0": "this yr.", "1": "next yr.", "-1": "last yr." }, "relativeTime": { "future": { "one": "in {0} yr.", "other": "in {0} yr." }, "past": { "one": "{0} yr. ago", "other": "{0} yr. ago" } } }, "month": { "displayName": "month", "relative": { "0": "this month", "1": "next month", "-1": "last month" }, "relativeTime": { "future": { "one": "in {0} month", "other": "in {0} months" }, "past": { "one": "{0} month ago", "other": "{0} months ago" } } }, "month-short": { "displayName": "mo.", "relative": { "0": "this mo.", "1": "next mo.", "-1": "last mo." }, "relativeTime": { "future": { "one": "in {0} mo.", "other": "in {0} mo." }, "past": { "one": "{0} mo. ago", "other": "{0} mo. ago" } } }, "week": { "displayName": "week", "relativePeriod": "the week of {0}", "relative": { "0": "this week", "1": "next week", "-1": "last week" }, "relativeTime": { "future": { "one": "in {0} week", "other": "in {0} weeks" }, "past": { "one": "{0} week ago", "other": "{0} weeks ago" } } }, "week-short": { "displayName": "wk.", "relativePeriod": "the week of {0}", "relative": { "0": "this wk.", "1": "next wk.", "-1": "last wk." }, "relativeTime": { "future": { "one": "in {0} wk.", "other": "in {0} wk." }, "past": { "one": "{0} wk. ago", "other": "{0} wk. ago" } } }, "day": { "displayName": "day", "relative": { "0": "today", "1": "tomorrow", "-1": "yesterday" }, "relativeTime": { "future": { "one": "in {0} day", "other": "in {0} days" }, "past": { "one": "{0} day ago", "other": "{0} days ago" } } }, "day-short": { "displayName": "day", "relative": { "0": "today", "1": "tomorrow", "-1": "yesterday" }, "relativeTime": { "future": { "one": "in {0} day", "other": "in {0} days" }, "past": { "one": "{0} day ago", "other": "{0} days ago" } } }, "hour": { "displayName": "hour", "relative": { "0": "this hour" }, "relativeTime": { "future": { "one": "in {0} hour", "other": "in {0} hours" }, "past": { "one": "{0} hour ago", "other": "{0} hours ago" } } }, "hour-short": { "displayName": "hr.", "relative": { "0": "this hour" }, "relativeTime": { "future": { "one": "in {0} hr.", "other": "in {0} hr." }, "past": { "one": "{0} hr. ago", "other": "{0} hr. ago" } } }, "minute": { "displayName": "minute", "relative": { "0": "this minute" }, "relativeTime": { "future": { "one": "in {0} minute", "other": "in {0} minutes" }, "past": { "one": "{0} minute ago", "other": "{0} minutes ago" } } }, "minute-short": { "displayName": "min.", "relative": { "0": "this minute" }, "relativeTime": { "future": { "one": "in {0} min.", "other": "in {0} min." }, "past": { "one": "{0} min. ago", "other": "{0} min. ago" } } }, "second": { "displayName": "second", "relative": { "0": "now" }, "relativeTime": { "future": { "one": "in {0} second", "other": "in {0} seconds" }, "past": { "one": "{0} second ago", "other": "{0} seconds ago" } } }, "second-short": { "displayName": "sec.", "relative": { "0": "now" }, "relativeTime": { "future": { "one": "in {0} sec.", "other": "in {0} sec." }, "past": { "one": "{0} sec. ago", "other": "{0} sec. ago" } } } } };
//# sourceMappingURL=en.js.map

/***/ }),

/***/ "8f07153a86eaea139193":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/
Object.defineProperty(exports, "__esModule", { value: true });
/* jslint esnext: true */
// Purposely using the same implementation as the Intl.js `Intl` polyfill.
// Copyright 2013 Andy Earnshaw, MIT License
var hop = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;
var realDefineProp = (function () {
    try {
        return !!Object.defineProperty({}, 'a', {});
    }
    catch (e) {
        return false;
    }
})();
var es3 = !realDefineProp && !Object.prototype.__defineGetter__;
var defineProperty = realDefineProp ? Object.defineProperty :
    function (obj, name, desc) {
        if ('get' in desc && obj.__defineGetter__) {
            obj.__defineGetter__(name, desc.get);
        }
        else if (!hop.call(obj, name) || 'value' in desc) {
            obj[name] = desc.value;
        }
    };
exports.defineProperty = defineProperty;
var objCreate = Object.create || function (proto, props) {
    var obj, k;
    function F() { }
    F.prototype = proto;
    obj = new F();
    for (k in props) {
        if (hop.call(props, k)) {
            defineProperty(obj, k, props[k]);
        }
    }
    return obj;
};
exports.objCreate = objCreate;
var arrIndexOf = Array.prototype.indexOf || function (search, fromIndex) {
    /*jshint validthis:true */
    var arr = this;
    if (!arr.length) {
        return -1;
    }
    for (var i = fromIndex || 0, max = arr.length; i < max; i++) {
        if (arr[i] === search) {
            return i;
        }
    }
    return -1;
};
exports.arrIndexOf = arrIndexOf;
var isArray = Array.isArray || function (obj) {
    return toString.call(obj) === '[object Array]';
};
exports.isArray = isArray;
var dateNow = Date.now || function () {
    return new Date().getTime();
};
exports.dateNow = dateNow;
//# sourceMappingURL=es5.js.map

/***/ }),

/***/ "ce38dab43593f8fd3e2d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/
Object.defineProperty(exports, "__esModule", { value: true });
/* jslint esnext: true */
var round = Math.round;
function daysToYears(days) {
    // 400 years have 146097 days (taking into account leap year rules)
    return days * 400 / 146097;
}
// Thanks to date-fns
// https://github.com/date-fns/date-fns
// MIT © Sasha Koss
var MILLISECONDS_IN_MINUTE = 60000;
var MILLISECONDS_IN_DAY = 86400000;
function startOfDay(dirtyDate) {
    var date = new Date(dirtyDate);
    date.setHours(0, 0, 0, 0);
    return date;
}
function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
    var startOfDayLeft = startOfDay(dirtyDateLeft);
    var startOfDayRight = startOfDay(dirtyDateRight);
    var timestampLeft = startOfDayLeft.getTime() -
        startOfDayLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE;
    var timestampRight = startOfDayRight.getTime() -
        startOfDayRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE;
    // Round the number of days to the nearest integer
    // because the number of milliseconds in a day is not constant
    // (e.g. it's different in the day of the daylight saving time clock shift)
    return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
}
function default_1(from, to) {
    // Convert to ms timestamps.
    from = +from;
    to = +to;
    var millisecond = round(to - from), second = round(millisecond / 1000), minute = round(second / 60), hour = round(minute / 60);
    // We expect a more precision in rounding when dealing with
    // days as it feels wrong when something happended 13 hours ago and
    // is regarded as "yesterday" even if the time was this morning.
    var day = differenceInCalendarDays(to, from);
    var week = round(day / 7);
    var rawYears = daysToYears(day), month = round(rawYears * 12), year = round(rawYears);
    return {
        millisecond: millisecond,
        second: second,
        'second-short': second,
        minute: minute,
        'minute-short': minute,
        hour: hour,
        'hour-short': hour,
        day: day,
        'day-short': day,
        week: week,
        'week-short': week,
        month: month,
        'month-short': month,
        year: year,
        'year-short': year
    };
}
exports.default = default_1;
//# sourceMappingURL=diff.js.map

/***/ }),

/***/ "d5ac0686acfc76f4b206":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* jshint node:true */



var IntlRelativeFormat = __webpack_require__("0af9125b2ddad12112c8")['default'];

// Add all locale data to `IntlRelativeFormat`. This module will be ignored when
// bundling for the browser with Browserify/Webpack.
__webpack_require__(2);

// Re-export `IntlRelativeFormat` as the CommonJS default exports with all the
// locale data registered, and with English set as the default locale. Define
// the `default` prop for use with other compiled ES6 Modules.
exports = module.exports = IntlRelativeFormat;
exports['default'] = exports;


/***/ })

}]);