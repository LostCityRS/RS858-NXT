import { Class419 } from 'Class419.js';
import { Class41 } from 'Class41.js';
export var Class578 = function () {
    var a = {
        member8911: 0,
        member8912: 1,
        member8913: 2
    };
    a.member8914 = function (h, d, e, c, g) {
        var b = h / d;
        if (b < 0) {
            b = 0;
        }
        if (b > 1) {
            b = 1;
        }
        var i = e + (c - e) * b;
        if (g !== undefined) {
            i = i * d / g;
        }
        return i;
    };
    a.member8915 = function (m, k, b, c, o, j) {
        if (j[0] === Class419.member4864) {
            return Class41.length(o);
        }
        var g = Class41.length(o);
        var h = Class41.length(j);
        var i = k - m;
        var d = c / h;
        var n = c / (2 * d);
        var e = c;
        if (n > i) {
            e -= h * b;
            if (e < 0) {
                e = 0;
            }
        } else if (c < g) {
            e += h * b;
            if (e > g) {
                e = g;
            }
        }
        return e;
    };
    return a;
}();