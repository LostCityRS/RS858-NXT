import { Class578 } from 'Class578.js';
import { Class299 } from 'Class299.js';
import { Class577 } from 'Class577.js';
export var Class579 = function () {
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
        b.member8916 = function (s, t) {
            j = true;
            n.push(s);
            if (t !== undefined) {
                d.push(t);
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
        b.member8917 = function (t, s) {
            if (k !== Class578.member8913) {
                throw new Error('1745 ');
            }
            e.push(t);
            i.push(s);
        };
        b.member3590 = function () {
            return j && n[0] !== undefined;
        };
        var r = b.member3590;
        b.member8918 = function () {
            return g;
        };
        b.member4224 = function (u, y, v) {
            var z = n[0];
            if (d[0] > 0) {
                if (d[0] >= u) {
                    d[0] -= u;
                    return;
                } else {
                    u -= d[0];
                    d[0] = 0;
                }
            }
            var s = z.member8892();
            if (m >= s) {
                if (n.length === 1) {
                    return;
                }
                if (d[1] >= u) {
                    d[1] -= u;
                    return;
                } else {
                    u -= d[1];
                    d[1] = 0;
                    n.shift();
                    d.shift();
                    e.shift();
                    i.shift();
                    h.shift();
                    m = 0;
                    g = 0;
                    c = 0;
                    z = n[0];
                    s = z.member8892();
                }
            }
            if (k === Class578.member8913) {
                var t = z.member8899();
                while (u > 0) {
                    c = Class578.member8914(g, t, e[0], i[0]);
                    g += c;
                    u--;
                }
                m = z.member8902(g);
                return;
            }
            if (k === Class578.member8911) {
                c = Class578.member8914(m, s, e[0], i[0], h[0]) * u;
            } else {
                var x = u / Class299.member3571;
                c = Class578.member8915(m, s, x, c, y, v);
            }
            m += c;
            if (m > s) {
                m = s;
            }
        };
        b.member6215 = function (s) {
            n[0].getWorldPosition(m, s);
        };
        b.member6208 = function (s) {
            n[0].getWorldPosition(m, s);
        };
        b.member6218 = function () {
            return n[0].member8904(m);
        };
        b.member6219 = function (v, t) {
            o();
            var u = v.member609();
            for (var s = 0; s < u; s++) {
                n.push(Class577({ member3456: v }));
                d.push(v.member320());
            }
            if (k === Class578.member8911) {
                for (var s = 0; s < u; s++) {
                    e.push(v.member320());
                    i.push(v.member320());
                    h.push(v.member320());
                }
            }
            if (k === Class578.member8913) {
                for (var s = 0; s < u; s++) {
                    e.push(v.member320());
                    i.push(v.member320());
                }
            }
            j = true;
        };
        if (q !== undefined && q.member8919 !== undefined) {
            k = q.member8919;
        } else {
            throw new Error('1746 ');
        }
        q = undefined;
        return b;
    };
    return a;
}();