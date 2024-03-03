import { Class423 } from 'Class423.js';
import { Class302 } from 'Class302.js';
import { Class301 } from 'Class301.js';
import { Class298 } from 'Class298.js';
export var Class673 = function () {
    var a = function (k) {
        if (k === undefined || k === null) {
            throw new Error('880 ');
        }
        var q = {};
        var t = k;
        var n = t.member433.member3640;
        var i = t.member9179;
        var c = 31;
        var g = 31;
        var v = -1;
        q.getDamageFont = function () {
            return v;
        };
        q.member9558 = function (x) {
            v = x;
        };
        var j = null;
        q.member3598 = function () {
            return j.member3598();
        };
        var e = 0;
        q.member9788 = function () {
            return e;
        };
        var b = 3;
        q.member9789 = function () {
            return b;
        };
        q.member9790 = function (x) {
            b = x;
        };
        var r = 13;
        q.member9791 = function () {
            return r;
        };
        q.member9792 = function (x) {
            r = x;
        };
        var d = c;
        q.member9793 = function () {
            return d;
        };
        q.member9794 = function (x) {
            d = x;
        };
        var o = 22;
        q.member9795 = function () {
            return o;
        };
        q.member9796 = function (x) {
            o = x;
        };
        q.member9797 = function () {
            return c;
        };
        q.member9798 = function () {
            var x = j.member3598();
            e = x.member3599() + x.member3603();
        };
        var u = q.member9798;
        q.member3639 = function () {
            if (j === null) {
                if (v === -1) {
                    v = Class423.member6115.member6107.member1204;
                    if (v === -1) {
                        return NULL;
                    }
                }
                j = t.member7137.member3639(v);
                if (j === null) {
                    return NULL;
                }
                u();
            }
            return j;
        };
        var s = q.member3639;
        var h = function (B, F, D, A, E, C) {
            n.member3796(B, F, D, A, E, (E & 255) === 255);
            var z = (C & 255) === 255;
            n.member3796(B + 1, F + 1, D - 2, 16, C, z);
            n.member3800(B + 1, F + 18, D - 2, A - 19, 1, C, z);
        };
        q.member9799 = function (O, K, I, D, N, E, L, J, G) {
            if (O.x > K && O.x < K + D && O.y > E - b && O.y < E + r && L.member9800()) {
                J = G;
            }
            var C = L.member9801();
            var M = i.member9802(L);
            q.member9803(M, K + 3, E, j, J);
            if (C !== null) {
                M += ' ';
                for (var F = 0; F < C.length; F++) {
                    var B = i.member9804(C[F]);
                    if (B === NULL) {
                        continue;
                    }
                    var A = B.member3606.member1539();
                    var z = A.member1285(B.member3606.member1494());
                    n.member3623(K + 5 + Class302.member3609(M, j) + B.member1295.left, E, B.width, B.height, 4294967295, z.member493, z.member494, z.member495, z.member496, A.member1277(), false);
                    K += B.member1295.left + B.width + B.member1295.member596 + 3 + Class302.member3609(' ', j);
                }
            }
            if (L.member9805()) {
                var H = Class423.member6130(Class423.member6115.otherLevel);
                if (H === NULL || H.length === 0) {
                    return;
                }
                var A = H[0].member3606.member1539();
                var z = A.member1285(H[0].member3606.member1494());
                n.member3623(K + 5 + Class302.member3609(M, j), E - j.member3598().member3599(), z.member1292, z.member1293, 4294967295, z.member493, z.member494, z.member495, z.member496, A.member1277(), false);
            }
        };
        var m = q.member9799;
        q.member9806 = function (F, D, E, z, C, G, x) {
            s();
            if (j === null) {
                return;
            }
            var B = 1565804543;
            h(F, D, E, z, B, 255);
            Class302.member3601(i.member6946, F + 3, D + 2, j, undefined, Class301.member3594, B);
            var H = Class298.member3558();
            if (!x) {
                var y = D + q.member9797() - j.member3598().member3599() + 2;
                for (var A = 0; A < G; A++) {
                    m(Class298.member3558(), F, D, E, z, y, C[A], 4294967295, 4294902015);
                    y += q.member9788();
                }
            }
        };
        q.member9807 = function (I, F, D, z, H, A, B, E, C) {
            if (I.x > F && I.x < F + z && I.y > A - b && I.y < A + r) {
                E = C;
            }
            var G = B.member9808() + '<col=ffffff>  >';
            q.member9803(G, F + 3, A, j, E);
        };
        q.member9803 = function (C, y, A, z, B) {
            Class302.member3601(C, y, A, z, undefined, Class301.member3594, B, 255);
        };
        return q;
    };
    return a;
}();