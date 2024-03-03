import { Class171 } from 'Class171.js';
export var Class325 = function () {
    var a = function (u) {
        var h = {};
        var j;
        h.member1881 = function () {
            return j;
        };
        var t;
        h.member1882 = function () {
            return t;
        };
        var k;
        h.member1883 = function () {
            return k;
        };
        var r;
        h.member2005 = function (v) {
            r = v;
        };
        h.member600 = function () {
            return r;
        };
        h.member1884 = function () {
            return undefined;
        };
        var c = -1;
        h.member1722 = function () {
            return c;
        };
        var o = -1;
        var n = 1;
        var g, s;
        var m = function (y, z, x) {
            for (var v = 0; v < x; v++) {
                z[v] = Math.cos(v * Math.PI * 2 / x);
                y[v] = Math.sin(v * Math.PI * 2 / x);
            }
        };
        if (u.member3764 !== undefined && u.member546 !== undefined) {
            n = u.member3764;
            r = u.member546;
            if (u.member2007 !== undefined) {
                o = u.member2007;
            }
            g = new Array(n);
            s = new Array(n);
            m(s, g, n);
            j = new Array(n * 2);
            t = new Array(n * 2);
            for (var i = 0; i < n; i++) {
                var q = g[i];
                var b = s[i];
                j[i] = [
                    q,
                    +0.5,
                    b
                ];
                t[i] = o;
            }
            for (var i = 0; i < n; i++) {
                var q = g[i];
                var b = s[i];
                j[i + n] = [
                    q,
                    -0.5,
                    b
                ];
                t[i + n] = o;
            }
            k = new Array(n * 2);
            for (var i = 0; i < n; i++) {
                var d = i + 1;
                if (d > n - 1) {
                    d = 0;
                }
                k[i * 2 + 0] = [
                    i + n,
                    i,
                    d
                ];
                var e = i + n + 1;
                if (e > n * 2 - 1) {
                    e *= 0.5;
                }
                k[i * 2 + 1] = [
                    d,
                    e,
                    i + n
                ];
            }
        } else {
            throw new Error('1084 ');
        }
        h.member2008 = function () {
            return Class171({ member1880: h });
        };
        u = undefined;
        return h;
    };
    return a;
}();