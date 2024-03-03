import { Class41 } from 'Class41.js';
import { Class140 } from 'Class140.js';
import { Class299 } from 'Class299.js';
export var Class419 = function () {
    var g = Class41.create();
    var k = Class41.create();
    var n = Class41.create();
    var j = Class41.create();
    var h = Class41.create();
    var m = Class41.create();
    var e = Class41.create();
    var i = Class41.create();
    var a = Class140.create();
    var c = {
        member4859: 0,
        member4860: 1,
        member4861: 2
    };
    c.member4862 = function (o) {
        return o === c.member4859 || o === c.member4860;
    };
    c.member4863 = function (o) {
        return o === c.member4859 || o === c.member4860 || o === c.member4861;
    };
    var b = 0.8;
    c.member4864 = Number.POSITIVE_INFINITY;
    c.member4865 = function (v, s, q, t, A, B, y, u, z, x) {
        Class41.member322(q, s, g);
        var o = Class41.length(g);
        if (o === 0) {
            return;
        }
        if (A[0] === c.member4864 || z > 0 && o > z) {
            Class41.set(q, s);
            Class41.member313(t);
            return;
        }
        var r = v / Class299.member3571;
        Class41.set(A, k);
        if (y > 0) {
            Class41.scale(k, o / y * u);
        }
        j = d(r, t, A, B, g);
        Class41.member329(t, j, b);
        if (o < x && Class41.length(t) < x) {
            Class41.set(q, s);
            Class41.member313(t);
        } else {
            Class41.scale(t, r, g);
            Class41.add(s, g);
        }
    };
    c.member4866 = function (y, s, u, q, B, v, t, A, x, C, z) {
        Class41.member322(q, s, g);
        Class140.member318(u, g);
        var o = Class41.length(g);
        if (o === 0) {
            return;
        }
        if (v[0] === c.member4864 || C > 0 && o > C || o < z) {
            Class41.set(q, s);
            Class41.member313(B);
            return;
        }
        var r = y / Class299.member3571;
        Class41.set(v, k);
        if (A > 0) {
            Class41.scale(k, o / A * x);
        }
        Class140.member318(u, B, m);
        j = d(r, m, k, t, g);
        Class140.member1355(u, a);
        Class140.member318(a, j);
        Class41.member329(B, j, b);
        Class41.scale(B, r, g);
        Class41.add(s, g);
    };
    c.member4867 = function (z, s, t, q, A, u, y, B, x) {
        Class41.member322(q, s, g);
        Class140.member318(t, g);
        var o = Class41.length(g);
        if (o === 0) {
            return;
        }
        if (u[0] === c.member4864 || B > 0 && o > B || o < x) {
            Class41.set(q, s);
            Class41.member313(A);
            return;
        }
        var r = z / Class299.member3571;
        Class140.member318(t, A, m);
        for (var v = 0; v < 3; v++) {
            k[v] = u[v] * g[v];
        }
        Class41.set(m, j);
        Class41.add(j, Class41.scale(k, r));
        Class41.scale(j, 1 / y);
        Class140.member1355(t, a);
        Class140.member318(a, j);
        Class41.set(j, A);
        Class41.scale(A, r, g);
        Class41.add(s, g);
    };
    var d = function (u, r, s, t, q) {
        Class41.set(r, j);
        Class41.member323(r, r, n);
        Class41.scale(s, 2, e);
        Class41.member333(n, e);
        for (var o = 0; o < 3; o++) {
            if (n[o] > Math.abs(q[o])) {
                if (q[o] < 0) {
                    j[o] += s[o] * u;
                    if (j[o] > 0) {
                        j[o] = 0;
                    }
                } else {
                    j[o] -= s[o] * u;
                    if (j[o] < 0) {
                        j[o] = 0;
                    }
                }
            } else if (Math.abs(r[o]) < t[o]) {
                if (q[o] < 0) {
                    j[o] -= s[o] * u;
                    if (j[o] < -t[o]) {
                        j[o] = -t[o];
                    }
                } else {
                    j[o] += s[o] * u;
                    if (j[o] > t[o]) {
                        j[o] = t[o];
                    }
                }
            }
        }
        return j;
    };
    return c;
}();