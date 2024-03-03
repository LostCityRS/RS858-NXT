import { Class285 } from 'Class285.js';
import { Class312 } from 'Class312.js';
import { Class330 } from 'Class330.js';
export var Class370 = function () {
    var b = {};
    var a = undefined;
    b.member4015 = function () {
        return a;
    };
    b.member4016 = function (d) {
        a = Class285({ member3387: d });
        var c = a.member3373();
        return c;
    };
    b.member3383 = function () {
        if (a !== undefined) {
            a.member3383();
        }
    };
    b.member3385 = function (d, c) {
        if (a !== undefined) {
            a.member3385(d, c);
        }
    };
    b.member4017 = function () {
    };
    b.member3300 = function (g, c, e, d) {
        a.member3374().member3300(g, c, e, d);
    };
    b.member3303 = function (c) {
        return a.member3374().member3303(c);
    };
    b.member4018 = function (c) {
    };
    b.member4019 = function (c) {
    };
    b.member4020 = function (c, e, d, h, g) {
        if (g) {
            return Class312(c, e, d, a, h);
        }
        return Class330(c, e, d, a, h);
    };
    b.member3376 = function () {
        return a.member3376();
    };
    b.member4021 = function (e, h) {
        if (a === undefined) {
            return false;
        }
        if (e == h) {
            return true;
        }
        var g = a.member3374().member3303(e);
        var d = a.member3374().member3303(h);
        var c = g;
        while (c != null) {
            c = c.member3290();
            if (c == d) {
                return true;
            }
            if (c == g) {
                return false;
            }
        }
        c = d;
        while (c != null) {
            c = c.member3290();
            if (c == g) {
                return true;
            }
            if (c == d) {
                return false;
            }
        }
        return false;
    };
    return b;
}();