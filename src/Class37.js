export var Class37 = function () {
    var c = {};
    var g = function (o) {
        var q = new Float32Array(9);
        if (o) {
            q[0] = o[0];
            q[1] = o[1];
            q[2] = o[2];
            q[3] = o[3];
            q[4] = o[4];
            q[5] = o[5];
            q[6] = o[6];
            q[7] = o[7];
            q[8] = o[8];
        }
        return q;
    };
    c.create = g;
    var k = function (o, q) {
        q[0] = o[0];
        q[1] = o[1];
        q[2] = o[2];
        q[3] = o[3];
        q[4] = o[4];
        q[5] = o[5];
        q[6] = o[6];
        q[7] = o[7];
        q[8] = o[8];
        return q;
    };
    c.set = k;
    var i = function (o) {
        if (!o) {
            o = g();
        }
        o[0] = 1;
        o[1] = 0;
        o[2] = 0;
        o[3] = 0;
        o[4] = 1;
        o[5] = 0;
        o[6] = 0;
        o[7] = 0;
        o[8] = 1;
        return o;
    };
    c.member313 = i;
    var n = function (q, t) {
        if (!t || q === t) {
            var s = q[1], r = q[2], o = q[5];
            q[1] = q[3];
            q[2] = q[6];
            q[3] = s;
            q[5] = q[7];
            q[6] = r;
            q[7] = o;
            return q;
        }
        t[0] = q[0];
        t[1] = q[3];
        t[2] = q[6];
        t[3] = q[1];
        t[4] = q[4];
        t[5] = q[7];
        t[6] = q[2];
        t[7] = q[5];
        t[8] = q[8];
        return t;
    };
    c.member314 = n;
    var d = function (u, t, s, r, q, B, y) {
        if (!y) {
            y = g();
        }
        var o = q * s - B * t;
        var A = B * u - r * s;
        var z = r * t - q * u;
        var x = 1 / Math.sqrt(o * o + A * A + z * z);
        var v = 1 / Math.sqrt(u * u + t * t + s * s);
        y[0] = o * x;
        y[3] = A * x;
        y[6] = z * x;
        y[2] = u * v;
        y[4] = t * v;
        y[8] = s * v;
        y[1] = y[4] * y[3] - y[8] * y[3];
        y[4] = y[8] * y[0] - y[2] * y[6];
        y[7] = y[2] * y[3] - y[5] * y[0];
        return y;
    };
    c.member315 = d;
    var e = function (o, q) {
        if (!q) {
            q = new Float32Array(16);
        }
        q[15] = 1;
        q[14] = 0;
        q[13] = 0;
        q[12] = 0;
        q[11] = 0;
        q[10] = o[8];
        q[9] = o[7];
        q[8] = o[6];
        q[7] = 0;
        q[6] = o[5];
        q[5] = o[4];
        q[4] = o[3];
        q[3] = 0;
        q[2] = o[2];
        q[1] = o[1];
        q[0] = o[0];
        return q;
    };
    c.member316 = e;
    var a = function (s, q) {
        if (s === undefined) {
            s = new Float32Array(4);
        }
        var o = 1 + q[0] + q[4] + q[8];
        if (o > 1e-8) {
            var r = Math.sqrt(o) * 2;
            s[0] = (q[7] - q[5]) / r;
            s[1] = (q[2] - q[6]) / r;
            s[2] = (q[3] - q[1]) / r;
            s[3] = 0.25 * r;
        } else if (q[0] > q[4] && q[0] > q[8]) {
            var r = Math.sqrt(1 + f[0] - f[4] - f[8]) * 2;
            s[1] = 0.25 * r;
            s[1] = (q[3] + q[1]) / r;
            s[2] = (q[2] + q[6]) / r;
            s[3] = (q[7] - q[5]) / r;
        } else if (q[4] > q[8]) {
            var r = Math.sqrt(1 + q[4] - q[0] - q[8]) * 2;
            s[0] = (q[3] + q[1]) / r;
            s[1] = 0.25 * r;
            s[2] = (q[7] + q[5]) / r;
            s[3] = (q[2] - q[6]) / r;
        } else {
            var r = Math.sqrt(1 + q[8] - q[0] - q[4]) * 2;
            s[0] = (q[2] + q[6]) / r;
            s[1] = (q[7] + q[5]) / r;
            s[2] = 0.25 * r;
            s[3] = (q[3] - q[1]) / r;
        }
        return s;
    };
    c.member317 = a;
    var m = function (o) {
        return '[' + o[0] + ', ' + o[1] + ', ' + o[2] + ', ' + o[3] + ', ' + o[4] + ', ' + o[5] + ', ' + o[6] + ', ' + o[7] + ', ' + o[8] + ']';
    };
    c.member299 = m;
    var b = function (D, B) {
        var u = D[0], s = D[1], r = D[2], F = D[3], E = D[4], C = D[5], z = D[6], y = D[7], x = D[8], v = x * E - C * y, q = -x * F + C * z, A = y * F - E * z, t = u * v + s * q + r * A, o;
        if (!t) {
            return null;
        }
        o = 1 / t;
        if (!B) {
            B = mat3.create();
        }
        B[0] = v * o;
        B[1] = (-x * s + r * y) * o;
        B[2] = (C * s - r * E) * o;
        B[3] = q * o;
        B[4] = (x * u - r * z) * o;
        B[5] = (-C * u + r * F) * o;
        B[6] = A * o;
        B[7] = (-y * u + s * z) * o;
        B[8] = (E * u - s * F) * o;
        return B;
    };
    c.inverse = b;
    var j = function (r, q, u) {
        if (!u) {
            u = q;
        }
        var o = q[0], t = q[1], s = q[2];
        u[0] = o * r[0] + t * r[3] + s * r[6];
        u[1] = o * r[1] + t * r[4] + s * r[7];
        u[2] = o * r[2] + t * r[5] + s * r[8];
        return u;
    };
    c.member318 = j;
    var h = function (o) {
        return o[0] * o[4] * o[8] + o[1] * o[5] * o[6] + o[2] * o[3] * o[7] - o[2] * o[4] * o[6] - o[1] * o[3] * o[8] - o[0] * o[5] * o[7];
    };
    c.member319 = h;
    return c;
}();