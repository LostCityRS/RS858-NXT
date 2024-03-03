import { Class309 } from 'Class309.js';
import { Priority } from 'Class96.js';
import { Class93 } from 'Class93.js';
import { Class311 } from 'Class311.js';
import { Class262 } from 'Class262.js';
export var Class312 = function () {
    var a = function (n, h, k, g, b) {
        var i = {};
        var d = Class309.member3660;
        i.member3665 = function () {
            return d;
        };
        var j;
        i.getData = function (q) {
            var o = q;
            if (o === 0) {
                o = k;
            }
            j = n.getFile(h, o, 0, Priority.member840, Class93.member796);
            if (j === null || j === undefined) {
                return j;
            }
            return j.data;
        };
        i.member3685 = function () {
            return undefined;
        };
        var e = 0;
        i.member3686 = function () {
            var o = Class311(g);
            o.member3331(i);
            return o;
        };
        i.member3680 = function () {
            return true;
        };
        i.member2794 = function () {
            return Class262.member3036;
        };
        i.member3687 = function () {
            return k;
        };
        i.member3295 = function () {
            m();
        };
        var m = function () {
            if (d === Class309.member3660) {
                c();
                d = Class309.member3661;
                if (b !== undefined) {
                    b(i, i.member3685(), k, true);
                }
            }
        };
        var c = function () {
        };
        return i;
    };
    return a;
}();