import { Class377 } from 'Class377.js';
import { Class166 } from 'Class166.js';
export var Class508 = function () {
    var a = function (c) {
        var e = {};
        var b = undefined;
        e.member8303 = function () {
            return b;
        };
        e.member301 = function () {
            if (b !== undefined) {
                b.member301();
            }
            b = Class377();
        };
        var g = e.member301;
        var d = Class166(new Float32Array(3), new Float32Array(3));
        var h = Class166(new Float32Array(3), new Float32Array(3));
        e.member4190 = function (i, k, m, j) {
            b.member4190(i, k, m, j);
        };
        e.member8304 = function (j, m, k, n, o) {
            d.member301();
            for (var i = 0; i < n; i++) {
                m[i].member2098(h);
                d.member1800(h);
            }
            if (k !== undefined) {
                d.member1800(k);
            }
            b.member4191(j, d, o);
        };
        e.member1805 = function (k, j, i, n, m) {
            return b.member1805(k, j, i, n, m);
        };
        if (true) {
            g();
        } else {
        }
        c = undefined;
        return e;
    };
    return a;
}();