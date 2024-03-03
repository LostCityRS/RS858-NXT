import { Class258 } from 'Class258.js';
export var Class259 = function () {
    var a = 2000000000;
    return function (q) {
        var c = {};
        var o;
        var d = 0;
        var k;
        var e = 1;
        var b = 1;
        if (q.member2998 !== undefined && q.member2999 !== undefined) {
            o = q.member2998;
            k = q.member2999;
        } else {
            throw new Error('1357 ');
        }
        var s = function () {
            return d;
        };
        c.member3000 = s;
        var r = function (u) {
            if (u === Class258.member2996 && o.member2981() && o.member2993()) {
                var t = o.member2991();
                if (!k) {
                    t /= 10;
                }
                if (d > t) {
                    return t;
                }
            }
            return d;
        };
        c.member3001 = r;
        var n = function (t) {
            d = t;
            if (d < 0) {
                d = 0;
            } else if (k && d > a) {
                d = a;
            } else if (!k && d > a / 10) {
                d = a / 10;
            }
            m();
        };
        c.member3002 = n;
        var j = function (t) {
            if (t === Class258.member2996 && o.member2981() && o.member2993()) {
                var u = o.member2992();
                if (e > u) {
                    return u;
                }
            }
            return e;
        };
        c.member3003 = j;
        var i = function () {
            return b;
        };
        c.member3004 = i;
        var h = function (t) {
            b = t;
        };
        c.member3005 = h;
        var g = function () {
            return e;
        };
        c.member3006 = g;
        var m = function () {
            if (k) {
                e = o.member2990(d);
            } else {
                e = o.member2989(d);
            }
        };
        q = undefined;
        return c;
    };
}();