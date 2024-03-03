import { Class578 } from 'Class578.js';
import { Class299 } from 'Class299.js';
import { Class577 } from 'Class577.js';
export var Class592 = function () {
    var a = function (q) {
        var b = {};
        var j = false;
        var n = [];
        var d = [];
        var m = 0;
        var g = 0;
        var c = 0;
        var k = Class578.member8911;
        var e = [];
        var i = [];
        var h = [];
        b.member8916 = function (r, s) {
            j = true;
            n.push(r);
            if (s !== undefined) {
                d.push(s);
            } else {
                d.push(0);
            }
        };
        var o = function () {
            n.length = 0;
            d.length = 0;
            e.length = 0;
            i.length = 0;
            h.length = 0;
            m = 0;
            g = 0;
            c = 0;
        };
        b.member8917 = function (s, r) {
            if (k !== Class578.member8913) {
                throw new Error('882 ');
            }
            e.push(s);
            i.push(r);
        };
        b.member4224 = function (t, x, u) {
            var y = n[0];
            if (d[0] > 0) {
                if (d[0] >= t) {
                    d[0] -= t;
                    return;
                } else {
                    t -= d[0];
                    d[0] = 0;
                }
            }
            var r = y.member8892();
            if (m >= r) {
                if (n.length === 1) {
                    return;
                }
                if (d[1] >= t) {
                    d[1] -= t;
                    return;
                } else {
                    t -= d[1];
                    d[1] = 0;
                    n.shift();
                    d.shift();
                    e.shift();
                    i.shift();
                    h.shift();
                    m = 0;
                    g = 0;
                    c = 0;
                    y = n[0];
                    r = y.member8892();
                }
            }
            if (k === Class578.member8913) {
                var s = y.member8899();
                while (t > 0) {
                    c = Class578.member8914(g, s, e[0], i[0]);
                    g += c;
                    t--;
                }
                m = y.member8902(g);
                return;
            }
            if (k === Class578.member8911) {
                c = Class578.member8914(m, r, e[0], i[0], h[0]) * t;
            } else {
                var v = t / Class299.member3571;
                c = Class578.member8915(m, r, v, c, x, u);
            }
            m += c;
            if (m > r) {
                m = r;
            }
        };
        b.readyanim = function () {
            return j && n[0] !== undefined;
        };
        b.member8918 = function () {
            return g;
        };
        b.member8990 = function () {
            return m >= n[0].member8892();
        };
        b.member2026 = function (r) {
            n[0].getWorldPosition(m, r);
        };
        b.member8928 = function (r) {
            n[0].getWorldPosition(m, r);
        };
        b.member6219 = function (u, s) {
            o();
            var t = u.g1();
            for (var r = 0; r < t; r++) {
                n.push(Class577({ member3456: u }));
                d.push(u.gFloat());
            }
            if (k === Class578.member8911) {
                for (var r = 0; r < t; r++) {
                    e.push(u.gFloat());
                    i.push(u.gFloat());
                    h.push(u.gFloat());
                }
            }
            if (k === Class578.member8913) {
                for (var r = 0; r < t; r++) {
                    e.push(u.gFloat());
                    i.push(u.gFloat());
                }
            }
            j = true;
        };
        if (q !== undefined && q.member8919 !== undefined) {
            k = q.member8919;
        } else {
            throw new Error('883 ');
        }
        q = undefined;
        return b;
    };
    return a;
}();