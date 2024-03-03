import { Class334 } from 'Class334.js';
export var Class716 = function () {
    var d = Class334();
    var g;
    var e = false;
    d.member3795 = function () {
        e = !e;
    };
    d.member25 = function (i) {
        g = i.member433;
    };
    var h = d.member25;
    d.member3796 = function (j, n, k, i, m) {
        if (e) {
            return;
        }
        if (!g.member3814(j, n, j + k, n + i)) {
            return;
        }
        g.fillRect(j, n, k, i, m);
    };
    var b = d.member3796;
    d.member3623 = function (o, m, i, s, n, t, r, q, k, j) {
        c(o, m, o + i, m + s, n, t, r, q, k, j);
    };
    var a = d.member3623;
    d.member3800 = function (j, o, m, i, k, n) {
        m--;
        i--;
        b(j, o, m, k, n);
        b(j, o + i, m + 1, k, n);
        b(j, o, k, i, n);
        b(j + m, o, k, i, n);
    };
    d.member3801 = function (i, n, k, j, m) {
        b(i, n, j, k, m);
    };
    d.member3624 = function (i, n, k, j, m) {
        b(i, n, k, j, m);
    };
    d.member3627 = function (t, j, r, i, n, s, q, o, m, k) {
        c(t, j, r, i, n, s, q, o, m, k);
    };
    d.member3803 = function (t, j, r, i, n, s, q, o, m, k) {
        c(t, j, r, i, n, s, q, o, m, k);
    };
    d.member3641 = function (C, D, A, z, B, r, q, n, k, v) {
        var i = v.member556() * Math.abs(n - r);
        var E = v.member557() * Math.abs(k - q);
        var s = A - C;
        var j = z - D;
        var o = Math.ceil(s / i);
        var m = Math.ceil(j / E);
        for (var u = 0; u < o; u++) {
            for (var t = 0; t < m; t++) {
                c(C + u * i, D + t * E, C + u * i + i, D + t * E + E, B, r, q, n, k, v);
            }
        }
    };
    var c = function (u, k, s, i, o, t, r, q, n, m) {
        if (m === member47) {
            b(u, k, s - u, i - k, o);
            return;
        }
        if (!g.member3814(u, k, s, i)) {
            return;
        }
        var j = m.member561();
        g.member10001(j, m.member556(), m.member557(), u, k, s, i, t, r, q, n);
    };
    d.member1630 = function () {
    };
    return d;
}();