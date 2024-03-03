import { Class95 } from 'Class95.js';
import { Priority } from 'Class96.js';
import { Class93 } from 'Class93.js';
import { Class80 } from 'Class80.js';
import { Class76 } from 'Class76.js';
import { Class302 } from 'Class302.js';
import { Class301 } from 'Class301.js';
export var Class303 = function () {
    var x = {};
    x.member3630 = { priority: 10 };
    x.member3631 = { priority: 15 };
    x.member3632 = { priority: 20 };
    x.member3633 = { priority: 30 };
    x.member3634 = { priority: 4 };
    var y;
    var v;
    var E;
    var e = 0;
    var a = 1;
    var d = 2;
    var D;
    var G;
    var I;
    var g;
    var r;
    var c;
    var q;
    var C;
    var H;
    var b;
    var j;
    var t;
    var F;
    var u;
    var o;
    var h;
    var s;
    var i;
    var k = false;
    var n = undefined, m = undefined;
    x.member3635 = function (J, K) {
        if (n !== undefined && J.priority > n.priority) {
            return;
        }
        n = J;
        m = K;
    };
    x.member3636 = function (J) {
        if (n === J) {
            n = undefined;
            m = undefined;
        }
    };
    x.member3637 = function () {
        return m;
    };
    var B = function (J, L, K) {
        y = J;
        v = L;
        E = K;
    };
    x.member25 = B;
    x.member3638 = function (Q, T, O, M, L, J, K, S, P, N, R) {
        D = Q;
        G = T;
        I = O;
        g = M;
        r = L;
        c = J;
        q = K;
        C = S;
        H = P;
        j = NULL;
        F = NULL;
        o = NULL;
        i = N;
        b = R;
        A();
        k = true;
    };
    var A = function () {
        var K = true;
        var J;
        if (j === undefined || j === NULL) {
            J = v.getFile(Class95.member811, q, 0, Priority.member840, Class93.member796);
            if (J !== NULL && J !== undefined) {
                j = Class80.member605(J);
                t = Class76(y, j.member556(), j.member557(), j.getColour(), false);
                t.member563();
            } else {
                K = false;
            }
        }
        if (F === undefined || F === NULL) {
            J = v.getFile(Class95.member811, C, 0, Priority.member840, Class93.member796);
            if (J !== NULL && J !== undefined) {
                F = Class80.member605(J);
                u = Class76(y, F.member556(), F.member557(), F.getColour(), false);
                u.member563();
            } else {
                K = false;
            }
        }
        if (o === undefined || o === NULL) {
            J = v.getFile(Class95.member811, H, 0, Priority.member840, Class93.member796);
            if (J !== NULL && J !== undefined) {
                o = Class80.member605(J);
                h = Class76(y, o.member556(), o.member557(), o.getColour(), false);
                h.member563();
            } else {
                K = false;
            }
        }
        if (s === undefined || s === NULL) {
            s = E.member3639(b);
            if (s === NULL) {
                K = false;
            }
        }
        return K;
    };
    var z = function (L, N, M, K) {
        var J = F.member556();
        y.member3640.member3641(L + J, N + J, L + M - J * 2, N + K - J * 2, 4294967295, 0, 0, 1, 1, h, false);
        y.member3640.member3627(L, N, L + j.member556(), N + j.member557(), 4294967295, 0, 0, 1, 1, t, false);
        y.member3640.member3627(L + M - j.member556(), N, L + M, N + j.member557(), 4294967295, 1, 0, 0, 1, t, false);
        y.member3640.member3627(L, N + K - j.member557(), L + j.member556(), N + K, 4294967295, 0, 1, 1, 0, t, false);
        y.member3640.member3627(L + M - j.member556(), N + K - j.member557(), L + M, N + K, 4294967295, 1, 1, 0, 0, t, false);
        y.member3640.member3641(L, N + j.member557(), L + J, N + j.member557() + K - 2 * j.member557(), 4294967295, 0, 0, 1, 1, u, false);
        y.member3640.member3642(L + j.member556(), N, L + j.member556() + M - 2 * j.member556(), N + J, 4294967295, 0, 0, 1, 1, u, false, Math.PI / 2);
        y.member3640.member3642(L + M - J, N + j.member557(), L + M, N + K - j.member557(), 4294967295, 0, 0, 1, 1, u, false, Math.PI);
        y.member3640.member3642(L + j.member556(), N + K - J, L + j.member556() + M - 2 * j.member556(), N + K, 4294967295, 0, 0, 1, 1, u, false, 3 * Math.PI / 2);
    };
    x.member3643 = z;
    x.member486 = function () {
        if (!k || m === undefined || !A()) {
            return;
        }
        var P = 250;
        var O = s.member3598();
        var N = Class302.member3613(m, P, s, null);
        var L = Class302.member3612(m, P, O.member3602(), s, null);
        var K = F.member556();
        var M = K + 4;
        N += M * 2;
        L += M * 2;
        if (N < r) {
            N = r;
        }
        if (L < c) {
            L = c;
        }
        var J = I;
        var Q = g;
        if (D === d) {
            J += y.member588() - N;
        } else if (D === a) {
            J += (y.member588() - N) / 2;
        }
        if (G === d) {
            Q = y.member589() - Q - L;
        } else if (G === a) {
            Q += (y.member589() + L) / 2;
        }
        y.member3644();
        y.member1344(J, Q, J + N - F.member556(), Q + L - F.member556());
        z(J, Q, N, L);
        Class302.member3604(m, J + M, Q + M, s, N - M * 2, L - M * 2, Class301.member3595, Class301.member3595, O.member3602(), -1, i << 8 | 255, 255, null, null);
        y.member3640.member1630();
        y.member3645();
    };
    return x;
}();