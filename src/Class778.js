import { Class377 } from 'Class377.js';
import { Class537 } from 'Class537.js';
import { Class538 } from 'Class538.js';
import { Class770 } from 'Class770.js';
export var Class778 = function () {
    var c = {};
    var a;
    var b = new Array(8);
    var d = new Array(8);
    c.member25 = function (e) {
        a = e;
    };
    c.member7183 = function (h, g) {
        for (var e = 0; e < b.length; e++) {
            if (b[e] !== undefined) {
                b[e].member512();
                b[e] = undefined;
            }
            if (d[e] !== undefined) {
                d[e].member512();
                d[e] = undefined;
            }
        }
    };
    c.member10417 = function (g) {
        for (var e = 0; e < b.length; e++) {
            var h = b[e];
            if (h !== undefined) {
                g(h);
            }
        }
    };
    c.member10161 = function (h) {
        for (var e = 0; e < b.length; e++) {
            var g = b[e];
            if (g !== undefined && g.member8581() === h.member7649()) {
                return true;
            }
        }
        return false;
    };
    c.add = function (u, q, y, n, m, v, i, h) {
        if (u === undefined || q === undefined || y === undefined || n === undefined) {
            throw new Error('1814 ');
        }
        var s = a.member7135().member6453();
        if (s === undefined) {
            return false;
        }
        var k = Class377();
        var j = a.member6444.member6445();
        var r;
        if (q === Class537.member8573) {
            var o = a.member6452.member6453(m);
            if (o === undefined) {
                return false;
            }
            r = o.member3320();
        } else if (q === Class537.member8571) {
            var x = a.member6450.member6451(m);
            if (x === undefined) {
                return false;
            }
            r = x.member3320();
        } else if (q === Class537.member8572) {
            if (j === null) {
                return false;
            }
            r = j.member7842();
        }
        r.member2013(k);
        var g = s.member4081();
        if (i !== undefined) {
            g = i.level;
        }
        var t = Class538(a, k, r, j, g, q, y, m, v, i, h);
        k.member4185(t);
        b[u] = t;
        if (n !== -1) {
            if (d[u] !== undefined) {
                d[u].member512();
            }
            var r = s.member3320();
            var e = Class377();
            r.member2013(e);
            d[u] = Class770(a, e, r, j, g, q, n, m, i, h);
            e.member4185(d[u]);
            d[u].member4380();
        }
        return true;
    };
    c.member486 = function () {
        for (var e = 0; e < b.length; e++) {
            if (d[e] !== undefined) {
                d[e].member4380();
            }
        }
    };
    c.member487 = function () {
        for (var e = 0; e < b.length; e++) {
            if (b[e] !== undefined) {
                b[e].member487();
            }
            if (d[e] !== undefined) {
                d[e].member9909();
            }
        }
    };
    c.remove = function (e) {
        if (b[e] !== undefined) {
            b[e].member512();
        }
        b[e] = undefined;
        if (d[e] !== undefined) {
            d[e].member512();
        }
        d[e] = undefined;
    };
    c.member8734 = function (e) {
        return b[e] !== undefined;
    };
    return c;
}();