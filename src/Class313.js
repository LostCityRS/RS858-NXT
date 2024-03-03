export var Class313 = function () {
    var a = {};
    a.create = function (k) {
        var m = new Float32Array(4);
        if (k) {
            m[0] = k[0];
            m[1] = k[1];
            m[2] = k[2];
            m[3] = k[3];
        }
        return m;
    };
    var c = a.create;
    a.set = function (k, m) {
        m[0] = k[0];
        m[1] = k[1];
        m[2] = k[2];
        m[3] = k[3];
        return m;
    };
    var h = a.set;
    a.member313 = function (k) {
        if (!k) {
            k = c();
        }
        k[0] = 1;
        k[1] = 0;
        k[2] = 0;
        k[3] = 1;
        return k;
    };
    var g = a.member313;
    a.member314 = function (k, n) {
        if (!n || k === n) {
            var m = k[1];
            k[1] = k[2];
            k[2] = m;
            return k;
        }
        n[0] = k[0];
        n[1] = k[2];
        n[2] = k[1];
        n[3] = k[3];
        return n;
    };
    var j = a.member314;
    a.member299 = function (k) {
        return '[' + k[0] + ', ' + k[1] + ', ' + k[2] + ', ' + k[3] + ']';
    };
    var i = a.member299;
    a.inverse = function (o, s) {
        if (!s) {
            s = o;
        }
        var n = o[0], m = o[1], k = o[2], r = o[3];
        var q = n * r - k * m;
        if (q === 0) {
            return null;
        }
        q = 1 / q;
        s[0] = r * q;
        s[1] = -m * q;
        s[2] = -k * q;
        s[3] = n * q;
        return s;
    };
    var b = a.inverse;
    a.member3688 = function (n, m, q) {
        if (!q) {
            q = m;
        }
        var k = m[0], o = m[1];
        q[0] = k * n[0] + o * n[1];
        q[1] = k * n[2] + o * n[3];
        return q;
    };
    var e = a.member3688;
    a.member319 = function (k) {
        return k[0] * k[3] - k[1] * k[2];
    };
    var d = a.member319;
    return a;
}();