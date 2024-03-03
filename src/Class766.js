import { Class765 } from 'Class765.js';
import { Class315 } from 'Class315.js';
import { Class454 } from 'Class454.js';
import { Class316 } from 'Class316.js';
export var ClientParameters = function () {
    var a = {};
    a.member10325 = {
        id: Class765.member10296,
        name: false ? {} : ''
    };
    a.member8025 = {
        id: Class765.member10297,
        name: false ? {} : ''
    };
    a.member10326 = {
        id: Class765.member10276,
        name: false ? {} : ''
    };
    a.member7256 = {
        id: Class765.member10277,
        name: false ? {} : ''
    };
    a.member10327 = {
        id: Class765.member10298,
        name: false ? {} : ''
    };
    a.member10328 = {
        id: Class765.member10299,
        name: false ? {} : ''
    };
    a.member10329 = {
        id: Class765.member10317,
        name: false ? {} : ''
    };
    a.member10330 = {
        id: Class765.member10318,
        name: false ? {} : ''
    };
    a.member8784 = {
        id: Class765.member10283,
        name: false ? {} : ''
    };
    a.member10331 = {
        id: Class765.member10273,
        name: false ? {} : ''
    };
    a.member10332 = {
        id: Class765.member10274,
        name: false ? {} : ''
    };
    a.member10333 = {
        id: Class765.member10275,
        name: false ? {} : ''
    };
    a.member10334 = {
        id: Class765.member10319,
        name: false ? {} : ''
    };
    a.member10335 = {
        id: Class765.member10320,
        name: false ? {} : ''
    };
    a.member7138 = {
        id: Class765.member10278,
        name: false ? {} : ''
    };
    a.affiliate = {
        id: Class765.member10279,
        name: false ? {} : ''
    };
    a.member10336 = {
        id: Class765.member10280,
        name: false ? {} : ''
    };
    a.member10337 = {
        id: Class765.member10281,
        name: false ? {} : ''
    };
    a.member9630 = {
        id: Class765.member10282,
        name: false ? {} : ''
    };
    a.member10338 = {
        id: Class765.member10284,
        name: false ? {} : ''
    };
    a.member10339 = {
        id: Class765.member10285,
        name: false ? {} : ''
    };
    a.member10340 = {
        id: Class765.member10286,
        name: false ? {} : ''
    };
    a.member9628 = {
        id: Class765.member10287,
        name: false ? {} : ''
    };
    a.member8255 = {
        id: Class765.member10288,
        name: false ? {} : ''
    };
    a.member8779 = {
        id: Class765.member10289,
        name: false ? {} : ''
    };
    a.member8274 = {
        id: Class765.member10290,
        name: false ? {} : ''
    };
    a.member8275 = {
        id: Class765.member10306,
        name: false ? {} : ''
    };
    a.member8781 = {
        id: Class765.member10323,
        name: false ? {} : ''
    };
    a.member8780 = {
        id: Class765.member10324,
        name: false ? {} : ''
    };
    a.member8277 = {
        id: Class765.member10291,
        name: false ? {} : ''
    };
    a.member7666 = {
        id: Class765.member10292,
        name: false ? {} : ''
    };
    a.member10341 = {
        id: Class765.member10293,
        name: false ? {} : ''
    };
    a.member8502 = {
        id: Class765.member10294,
        name: false ? {} : ''
    };
    a.member10342 = {
        id: Class765.member10295,
        name: false ? {} : ''
    };
    a.member10343 = {
        id: Class765.member10300,
        name: false ? {} : ''
    };
    a.clientToken = {
        id: Class765.member10301,
        name: false ? {} : ''
    };
    a.member9619 = {
        id: Class765.member10302,
        name: false ? {} : ''
    };
    a.member10344 = {
        id: Class765.member10303,
        name: false ? {} : ''
    };
    a.member8276 = {
        id: Class765.member10304,
        name: false ? {} : ''
    };
    a.member10345 = {
        id: Class765.member10305,
        name: false ? {} : ''
    };
    a.member10346 = {
        id: Class765.member10307,
        name: false ? {} : ''
    };
    a.member10347 = {
        id: Class765.member10308,
        name: false ? {} : ''
    };
    a.member10348 = {
        id: Class765.member10310,
        name: false ? {} : ''
    };
    a.member10349 = {
        id: Class765.member10309,
        name: false ? {} : ''
    };
    a.member10350 = {
        id: Class765.member10313,
        name: false ? {} : ''
    };
    a.member10351 = {
        id: Class765.member10314,
        name: false ? {} : ''
    };
    a.member10352 = {
        id: Class765.member10322,
        name: false ? {} : ''
    };
    a.member10353 = {
        id: Class765.member10321,
        name: false ? {} : ''
    };
    a.member10354 = {
        id: Class765.member10315,
        name: false ? {} : ''
    };
    a.member10355 = {
        id: Class765.member10316,
        name: false ? {} : ''
    };
    a.member10356 = {
        id: Class765.member10311,
        name: false ? {} : ''
    };
    a.member10357 = {
        id: Class765.member10312,
        name: false ? {} : ''
    };
    if (false) {
    }
    a.member10358 = function (b) {
        for (var e in a) {
            var c = a[e];
            if (c.id === undefined) {
                continue;
            }
            c.value = b[c.id];
            if (c.value === 'true') {
                c.value = true;
            } else if (c.value === 'false') {
                c.value = false;
            } else if (c.value === 'undefined') {
                c.value = undefined;
            } else {
                try {
                    if (/^\-?([0-9]+|Infinity)$/.test(c.value)) {
                        var g = parseInt(c.value);
                        if (!isNaN(g)) {
                            c.value = g;
                        }
                    }
                } catch (d) {
                }
            }
        }
        a.member8025.value = Class315.getByID(a.member8025.value);
        a.member7256.value = Class454.getByID(a.member7256.value);
        a.member7138.value = Class316.getByID(a.member7138.value);
        if (a.member8277.value !== undefined && a.member8277.value.length > 100) {
            a.member8277.value = undefined;
        }
    };
    return a;
}();