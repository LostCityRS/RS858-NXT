import { Class87 } from 'Class87.js';
export var Class127 = function () {
    var d = new Array(4);
    for (var a = 0; a < d.length; a++) {
        d[a] = new Array(3);
        for (var c = 0; c < d[a].length; c++) {
            d[a][c] = { member757: new Float32Array(3) };
        }
    }
    var b = { member757: new Float32Array(3) };
    var g = { member757: new Float32Array(3) };
    var e = new Array(4);
    var h = function (i) {
        var l = {};
        var o;
        var n;
        if (i.id === undefined || i.member1160 === undefined) {
            throw new Error('1731 ');
        }
        o = l.id = i.id;
        n = i.member1160;
        var m = function (B, p, D, z, s, A, x) {
            var t = Class87.member752(Class87.member734, B.member763);
            var E = Class87.member752(Class87.member737, B.member763);
            x.member764(B, p, D, t[0], t[1], b, z);
            x.member764(B, p, D, E[0], E[1], g, z);
            if (s !== null && (s.member546 & 255) !== 0) {
                var C = Class87.member751(Class87.member738, B.member763);
                d[0].member760 = B.member766 === Class87.member750 && !n;
                var q = e[0] = d[0];
                Class87.member755(b, q[0]);
                Class87.member753(s.member759 ? b : s, q[0]);
                x.member765(q[1], p + C[0], D + C[1], p, D, s);
                Class87.member755(g, q[2]);
                Class87.member753(s.member759 ? g : s, q[2]);
            } else {
                e[0] = undefined;
            }
            if (A !== null && (A.member546 & 255) !== 0) {
                var v = Class87.member751(Class87.member739, B.member763);
                var r = Class87.member751(Class87.member740, B.member763);
                var u = Class87.member751(Class87.member741, B.member763);
                var y = B.member766 === Class87.member750 && n;
                d[1].member760 = d[2].member760 = d[3].member760 = y;
                var q = e[1] = d[1];
                Class87.member755(b, q[0]);
                Class87.member753(A.member759 ? b : A, q[0]);
                x.member765(q[1], p + r[0], D + r[1], p, D, A);
                x.member765(q[2], p + v[0], D + v[1], p, D, A);
                var q = e[2] = d[2];
                Class87.member755(b, q[0]);
                Class87.member753(A.member759 ? b : A, q[0]);
                Class87.member755(g, q[1]);
                Class87.member753(A.member759 ? g : A, q[1]);
                x.member765(q[2], p + r[0], D + r[1], p, D, A);
                var q = e[3] = d[3];
                Class87.member755(g, q[0]);
                Class87.member753(A.member759 ? g : A, q[0]);
                x.member765(q[1], p + u[0], D + u[1], p, D, A);
                x.member765(q[2], p + r[0], D + r[1], p, D, A);
            } else {
                e[1] = e[2] = e[3] = undefined;
            }
        };
        l.member767 = function (q, t, s, p) {
            var r = n ? q.member768 : q.member769;
            var u = n ? q.member769 : q.member768;
            if (r !== null) {
                r.member746 = q.member746;
                r.member747 = q.member747;
            }
            if (u !== null) {
                u.member746 = q.member746;
                u.member747 = q.member747;
            }
            var v = Class87.member762(false, Class87.member742, q.member768, q.member769);
            m(q, t, s, v, r, u, p);
            return e;
        };
        var k = l.member770;
        l.member762 = function (q, s, p) {
            var r = n ? q.member768 : q.member769;
            var t = n ? q.member769 : q.member768;
            switch (s) {
            case Class87.member738:
                return q.member763 === 0 ? r : t;
            case Class87.member741:
                return q.member763 === 3 ? r : t;
            case Class87.member739:
                return q.member763 === 1 ? r : t;
            case Class87.member740:
                return q.member763 === 2 ? r : t;
            default:
                throw new Error('1732 ' + member328);
            }
        };
        var j = l.member762;
        i = undefined;
        return l;
    };
    return h;
}();