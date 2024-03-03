import { Class37 } from 'Class37.js';
import { Class41 } from 'Class41.js';
import { Class49 } from 'Class49.js';
export var Class393 = function () {
    var c = Class37.create();
    var h = Class37.create();
    var g = Class37.create();
    var e = Class37.create();
    var a = Class41.create();
    var d = Class41.create();
    return function (k) {
        var t = {};
        var j = new Array(6);
        var A = new Array(6);
        for (var B = 0; B < 6; B++) {
            j[B] = new Array(4);
            A[B] = 0;
        }
        var n = Class49.create();
        t.member4224 = function (E, C) {
            Class49.member323(C, E, n);
            var D;
            D = j[0];
            D[0] = n[3] - n[0];
            D[1] = n[7] - n[4];
            D[2] = n[11] - n[8];
            D[3] = n[15] - n[12];
            i(D);
            D = j[1];
            D[0] = n[3] + n[0];
            D[1] = n[7] + n[4];
            D[2] = n[11] + n[8];
            D[3] = n[15] + n[12];
            i(D);
            D = j[2];
            D[0] = n[3] + n[1];
            D[1] = n[7] + n[5];
            D[2] = n[11] + n[9];
            D[3] = n[15] + n[13];
            i(D);
            D = j[3];
            D[0] = n[3] - n[1];
            D[1] = n[7] - n[5];
            D[2] = n[11] - n[9];
            D[3] = n[15] - n[13];
            i(D);
            D = j[4];
            D[0] = n[3] - n[2];
            D[1] = n[7] - n[6];
            D[2] = n[11] - n[10];
            D[3] = n[15] - n[14];
            i(D);
            D = j[5];
            D[0] = n[3] + n[2];
            D[1] = n[7] + n[6];
            D[2] = n[11] + n[10];
            D[3] = n[15] + n[14];
            i(D);
        };
        var i = function (C) {
            var D = Math.sqrt(C[0] * C[0] + C[1] * C[1] + C[2] * C[2]);
            C[0] /= D;
            C[1] /= D;
            C[2] /= D;
            C[3] /= D;
        };
        t.member4538 = function (C, E) {
            for (var D = 0; D < A.length - 2; D++) {
                var F = C;
                if (F >= 0) {
                    d[0] = j[D][0];
                    d[1] = j[D][1];
                    d[2] = j[D][2];
                    var G = Class41.member327(d, E);
                    F *= Math.abs(G);
                }
                A[D] = F;
            }
        };
        var z = function (G) {
            var F = G.member1792();
            var Q = F[0], D = F[1], O = F[2];
            var I = G.member1793();
            var N = I[0], C = I[1], M = I[2];
            for (var E = 0; E < 6; E++) {
                var H = j[E];
                var P = H[0], L = H[1], K = H[2], J = H[3];
                if (P * Q + L * D + K * O + J + A[E] > 0) {
                    continue;
                }
                if (P * N + L * D + K * O + J + A[E] > 0) {
                    continue;
                }
                if (P * Q + L * C + K * O + J + A[E] > 0) {
                    continue;
                }
                if (P * N + L * C + K * O + J + A[E] > 0) {
                    continue;
                }
                if (P * Q + L * D + K * M + J + A[E] > 0) {
                    continue;
                }
                if (P * N + L * D + K * M + J + A[E] > 0) {
                    continue;
                }
                if (P * Q + L * C + K * M + J + A[E] > 0) {
                    continue;
                }
                if (P * N + L * C + K * M + J + A[E] > 0) {
                    continue;
                }
                return false;
            }
            return true;
        };
        t.member1803 = z;
        var b = function (C) {
            C.member301();
            y(d);
            C.member1799(d);
            x(d);
            C.member1799(d);
            u(d);
            C.member1799(d);
            s(d);
            C.member1799(d);
            r(d);
            C.member1799(d);
            q(d);
            C.member1799(d);
            o(d);
            C.member1799(d);
            m(d);
            C.member1799(d);
        };
        t.member2098 = b;
        var v = function (H, F, E, D) {
            c[0] = H[0];
            c[1] = H[1];
            c[2] = H[2];
            c[3] = F[0];
            c[4] = F[1];
            c[5] = F[2];
            c[6] = E[0];
            c[7] = E[1];
            c[8] = E[2];
            var J = Class37.member319(c);
            a[0] = -H[3];
            a[1] = -F[3];
            a[2] = -E[3];
            h[0] = a[0];
            h[1] = c[1];
            h[2] = c[2];
            h[3] = a[1];
            h[4] = c[4];
            h[5] = c[5];
            h[6] = a[2];
            h[7] = c[7];
            h[8] = c[8];
            var K = Class37.member319(h);
            var M = K / J;
            g[0] = c[0];
            g[1] = a[0];
            g[2] = c[2];
            g[3] = c[3];
            g[4] = a[1];
            g[5] = c[5];
            g[6] = c[6];
            g[7] = a[2];
            g[8] = c[8];
            var I = Class37.member319(g);
            var L = I / J;
            e[0] = c[0];
            e[1] = c[1];
            e[2] = a[0];
            e[3] = c[3];
            e[4] = c[4];
            e[5] = a[1];
            e[6] = c[6];
            e[7] = c[7];
            e[8] = a[2];
            var G = Class37.member319(e);
            var C = G / J;
            D[0] = M;
            D[1] = L;
            D[2] = C;
        };
        var y = function (C) {
            v(j[5], j[3], j[1], C);
        };
        t.member939 = y;
        var x = function (C) {
            v(j[5], j[3], j[0], C);
        };
        t.member937 = x;
        var u = function (C) {
            v(j[5], j[2], j[1], C);
        };
        t.member933 = u;
        var s = function (C) {
            v(j[5], j[2], j[0], C);
        };
        t.member935 = s;
        var r = function (C) {
            v(j[4], j[3], j[1], C);
        };
        t.member940 = r;
        var q = function (C) {
            v(j[4], j[3], j[0], C);
        };
        t.member938 = q;
        var o = function (C) {
            v(j[4], j[2], j[1], C);
        };
        t.member934 = o;
        var m = function (C) {
            v(j[4], j[2], j[0], C);
        };
        t.member936 = m;
        if (k !== undefined && k.member1624 !== undefined && k.member3463 !== undefined) {
            t.member4224(k.member1624, k.member3463);
        }
        k = undefined;
        return t;
    };
}();