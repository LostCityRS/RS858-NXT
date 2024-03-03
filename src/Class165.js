export var Class165 = function () {
    var e = {};
    var n = function (v, o, r, x) {
        if (r < x) {
            var y = Math.floor((r + x) / 2);
            var u = r;
            var s = v[y];
            v[y] = v[x];
            v[x] = s;
            var q = o[y];
            o[y] = o[x];
            o[x] = q;
            var t = s === Number.MAX_VALUE ? 0 : 1;
            for (var A = r; A < x; A++) {
                if (v[A] < s + (A & t)) {
                    var z = v[A];
                    v[A] = v[u];
                    v[u] = z;
                    var j = o[A];
                    o[A] = o[u];
                    o[u++] = j;
                    continue;
                }
            }
            v[x] = v[u];
            v[u] = s;
            o[x] = o[u];
            o[u] = q;
            n(v, o, r, u - 1);
            n(v, o, u + 1, x);
        }
    };
    e.member1785 = n;
    var k = function (z, s, q, u, A) {
        if (u < A) {
            var B = Math.floor((u + A) / 2);
            var y = u;
            var v = z[B];
            z[B] = z[A];
            z[A] = v;
            var t = s[B];
            s[B] = s[A];
            s[A] = t;
            var r = q[B];
            q[B] = q[A];
            q[A] = r;
            var x = v === Number.MAX_VALUE ? 0 : 1;
            for (var D = u; D < A; D++) {
                if (z[D] < v + (D & x)) {
                    var C = z[D];
                    z[D] = z[y];
                    z[y] = C;
                    var o = s[D];
                    s[D] = s[y];
                    s[y] = o;
                    var j = q[D];
                    q[D] = q[y];
                    q[y] = j;
                    ++y;
                    continue;
                }
            }
            z[A] = z[y];
            z[y] = v;
            s[A] = s[y];
            s[y] = t;
            q[A] = q[y];
            q[y] = r;
            k(z, s, q, u, y - 1);
            k(z, s, q, y + 1, A);
        }
    };
    e.member1786 = k;
    var i = function (o, q) {
        h = 0;
        b = o;
        q.sort(d);
        for (var j = 2; j < arguments.length; j++) {
            arguments[j].sort(a());
        }
        g = [];
        b = undefined;
    };
    e.member1787 = i;
    var g = [];
    var h = 0;
    var b;
    var d = function (o, j) {
        return g[h++] = b(o, j);
    };
    var c = 0;
    var a = function () {
        c = 0;
        return m;
    };
    var m = function () {
        return g[c++];
    };
    return e;
}();