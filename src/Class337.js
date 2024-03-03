export var Class337 = function () {
    var g = {};
    var i = function (q) {
        var r = new Float32Array(2);
        if (q) {
            r[0] = q[0];
            r[1] = q[1];
        } else {
            r[0] = r[1] = 0;
        }
        return r;
    };
    g.create = i;
    var j = function (q, r) {
        r[0] = q[0];
        r[1] = q[1];
        return r;
    };
    g.set = j;
    var n = function (q, r, s) {
        if (!s || q === s) {
            q[0] += r[0];
            q[1] += r[1];
            return q;
        }
        s[0] = q[0] + r[0];
        s[1] = q[1] + r[1];
        return s;
    };
    g.add = n;
    var e = function (q, r, s) {
        if (!s || q === s) {
            q[0] -= r[0];
            q[1] -= r[1];
            return q;
        }
        s[0] = q[0] - r[0];
        s[1] = q[1] - r[1];
        return s;
    };
    g.member322 = e;
    var m = function (q, r, s) {
        if (!s || q === s) {
            q[0] *= r[0];
            q[1] *= r[1];
            return q;
        }
        s[0] = q[0] * r[0];
        s[1] = q[1] * r[1];
        return s;
    };
    g.member323 = m;
    var o = function (q, r) {
        if (!r) {
            r = q;
        }
        r[0] = -q[0];
        r[1] = -q[1];
        return r;
    };
    g.member324 = o;
    var d = function (q, r, s) {
        if (!s || q === s) {
            q[0] *= r;
            q[1] *= r;
            return q;
        }
        s[0] = q[0] * r;
        s[1] = q[1] * r;
        return s;
    };
    g.scale = d;
    var h = function (r, u) {
        if (!u) {
            u = r;
        }
        var q = r[0], t = r[1], s = Math.sqrt(q * q + t * t);
        if (!s) {
            u[0] = 0;
            u[1] = 0;
            return u;
        } else if (s === 1) {
            u[0] = q;
            u[1] = t;
            return u;
        }
        s = 1 / s;
        u[0] = q * s;
        u[1] = t * s;
        return u;
    };
    g.normalize = h;
    var a = function (r) {
        var q = r[0], s = r[1];
        return Math.sqrt(q * q + s * s);
    };
    g.length = a;
    var c = function (r, s) {
        var q = s[0] - r[0], t = s[1] - r[1];
        return Math.sqrt(q * q + t * t);
    };
    g.member330 = c;
    var k = function (q) {
        return '[' + q[0] + ', ' + q[1] + ']';
    };
    g.member299 = k;
    var b = function (q, r) {
        return q[0] * r[0] + q[1] * r[1];
    };
    g.member327 = b;
    return g;
}();