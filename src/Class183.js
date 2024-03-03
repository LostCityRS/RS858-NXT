import { Class96 } from 'Class96.js';
import { Class164 } from 'Class164.js';
import { Class176 } from 'Class176.js';
export var Class183 = function () {
    var d = {};
    var m;
    var k;
    var j;
    var i;
    var h = 0;
    d.member2039 = function () {
        return h;
    };
    var g = 0;
    d.member2040 = function () {
        return g;
    };
    var e = null;
    d.member2041 = function () {
        return e;
    };
    var c = 0;
    var b = 0;
    d.member2042 = function () {
        return b;
    };
    var a = null;
    d.member2043 = function () {
        return a;
    };
    d.member25 = function (r, o, q, n) {
        m = r;
        k = o;
        j = q;
        i = n;
    };
    d.member512 = function () {
        h = 0;
        g = 0;
        e = null;
        c = 0;
        b = 0;
        a = null;
    };
    d.member2044 = function (n) {
        return e[n];
    };
    d.member78 = function () {
        if (!m.member1437(k)) {
            return false;
        }
        var r = true;
        if (e === null) {
            var q = m.member1438(k, j);
            if (q) {
                g = m.member1439(k).member1440(j);
                e = new Array(g + 1);
                for (var o = 0; o < g; o++) {
                    var n = m.getFile(k, j, o, Class96.member841);
                    if (n !== undefined) {
                        e[o] = Class164(n);
                        h++;
                    }
                }
                if (false) {
                }
            } else {
                r = false;
            }
        }
        if (a === null) {
            var q = m.member1438(k, i);
            if (q) {
                b = m.member1439(k).member1440(i);
                a = new Array(b + 1);
                for (var o = 0; o < b; o++) {
                    var n = m.getFile(k, i, o, Class96.member841);
                    if (n !== undefined) {
                        a[o] = Class176(n);
                        c++;
                    }
                }
                if (false) {
                }
            } else {
                r = false;
            }
        }
        return r;
    };
    return d;
}();