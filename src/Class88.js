import { Class87 } from 'Class87.js';
export var Class88 = function () {
    var c = new Array(4);
    for (var a = 0; a < c.length; a++) {
        c[a] = new Array(3);
        for (var b = 0; b < c[a].length; b++) {
            c[a][b] = { member757: new Float32Array(3) };
        }
        c[a].member760 = false;
    }
    var e = { member757: new Float32Array(3) };
    var g = { member757: new Float32Array(3) };
    var d = new Array(4);
    var h = function (i) {
        var l = {};
        var n;
        if (i.id === undefined) {
            throw new Error('2187 ');
        }
        n = l.id = i.id;
        var m = function (y, o, B, x, p, A, v) {
            var C = Class87.member752(Class87.member735, y.member763);
            var s = Class87.member752(Class87.member737, y.member763);
            v.member764(y, o, B, C[0], C[1], e, x);
            v.member764(y, o, B, s[0], s[1], g, x);
            if (p !== null && (p.member546 & 255) !== 0) {
                var u = Class87.member751(Class87.member739, y.member763);
                var z = Class87.member751(Class87.member738, y.member763);
                var q = d[0] = c[0];
                Class87.member755(e, q[0]);
                Class87.member753(p.member759 ? e : p, q[0]);
                v.member765(q[1], o + u[0], B + u[1], o, B, p);
                v.member765(q[2], o + z[0], B + z[1], o, B, p);
                var q = d[1] = c[1];
                Class87.member755(e, q[0]);
                Class87.member753(p.member759 ? e : p, q[0]);
                v.member765(q[1], o + z[0], B + z[1], o, B, p);
                Class87.member755(g, q[2]);
                Class87.member753(p.member759 ? g : p, q[2]);
            } else {
                d[0] = d[1] = undefined;
            }
            if (A !== null && (A.member546 & 255) !== 0) {
                var r = Class87.member751(Class87.member740, y.member763);
                var t = Class87.member751(Class87.member741, y.member763);
                c[2].member760 = c[3].member760 = y.member766 === Class87.member750;
                var q = d[2] = c[2];
                Class87.member755(e, q[0]);
                Class87.member753(A.member759 ? e : A, q[0]);
                Class87.member755(g, q[1]);
                Class87.member753(A.member759 ? g : A, q[1]);
                v.member765(q[2], o + t[0], B + t[1], o, B, A);
                var q = d[3] = c[3];
                Class87.member755(e, q[0]);
                Class87.member753(A.member759 ? e : A, q[0]);
                v.member765(q[1], o + t[0], B + t[1], o, B, A);
                v.member765(q[2], o + r[0], B + r[1], o, B, A);
            } else {
                d[2] = d[3] = undefined;
            }
        };
        l.member767 = function (q, t, r, p) {
            var s = q.member768;
            var o = q.member769;
            if (s !== null) {
                s.member746 = q.member746;
                s.member747 = q.member747;
            }
            if (o !== null) {
                o.member746 = q.member746;
                o.member747 = q.member747;
            }
            var u = Class87.member762(false, Class87.member742, s, o);
            m(q, t, r, u, s, o, p);
            return d;
        };
        var k = l.member770;
        l.member762 = function (p, q, o) {
            switch (q) {
            case Class87.member738:
                return p.member763 === 0 || p.member763 === 3 ? p.member768 : p.member769;
            case Class87.member741:
                return p.member763 === 2 || p.member763 === 3 ? p.member768 : p.member769;
            case Class87.member739:
                return p.member763 === 0 || p.member763 === 1 ? p.member768 : p.member769;
            case Class87.member740:
                return p.member763 === 1 || p.member763 === 2 ? p.member768 : p.member769;
            default:
                throw new Error('2188 ' + member328);
            }
        };
        var j = l.member762;
        i = undefined;
        return l;
    };
    return h;
}();