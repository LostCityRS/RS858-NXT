export var Class409 = function () {
    var h = {};
    var j;
    var g = function (o, r, q) {
        var n = new Array(o);
        a();
        for (var m = 0; m < o; m++) {
            n[m] = i(m / o * q, 0.6, 0.8);
        }
        return n;
    };
    h.member4702 = g;
    var e = function (m, n, o) {
    };
    h.member4703 = e;
    var a = function () {
        j = new Array(512);
        for (var m = 0; m < 255; m++) {
            j[m] = m;
        }
        for (var m = 0; m < 255; m++) {
            var q = 255 - m;
            var r = Math.floor(Math.random() * q);
            var o = j[r];
            j[r] = j[q];
            j[q] = j[511 - m] = o;
        }
    };
    var i = function (E, D, t) {
        var s = Math.floor(E) & 255;
        var o = Math.floor(D) & 255;
        var m = Math.floor(t) & 255;
        E -= Math.floor(E);
        D -= Math.floor(D);
        t -= Math.floor(t);
        var G = d(E);
        var H = d(D);
        var F = d(t);
        var r = j[s] + o, C = j[r] + m, z = j[r + 1] + m, n = j[s + 1] + o, v = j[n] + m, q = j[n + 1] + m;
        return c(b(F, b(H, b(G, k(j[C], E, D, t), k(j[v], E - 1, D, t)), b(G, k(j[z], E, D - 1, t), k(j[q], E - 1, D - 1, t))), b(H, b(G, k(j[C + 1], E, D, t - 1), k(j[v + 1], E - 1, D, t - 1)), b(G, k(j[z + 1], E, D - 1, t - 1), k(j[q + 1], E - 1, D - 1, t - 1)))));
    };
    var d = function (m) {
        return m * m * m * (m * (m * 6 - 15) + 10);
    };
    var b = function (o, n, m) {
        return n + o * (m - n);
    };
    var k = function (r, n, t, q) {
        var m = r & 15;
        var o = m < 8 ? n : t, s = m < 4 ? t : m == 12 || m == 14 ? n : q;
        return ((m & 1) == 0 ? o : -o) + ((m & 2) == 0 ? s : -s);
    };
    var c = function (m) {
        return (1 + m) / 2;
    };
    return h;
}();