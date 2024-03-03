import { Class276 } from 'Class276.js';
export var Class277 = function () {
    var a = function () {
        var e = {};
        var i = false;
        e.member67 = function () {
            return i;
        };
        var g = -1;
        var j = 1;
        e.getID = function () {
            if (!i) {
                return undefined;
            }
            return g;
        };
        var n = 1;
        e.member3280 = function (s) {
            if (o == undefined) {
                r = s;
                k = n;
                q = c.member3281().member3282();
                d = q + 0.1;
            }
        };
        e.member3283 = function () {
            if (!i) {
                return undefined;
            }
            return n;
        };
        var b = -1;
        var m;
        e.member3284 = function () {
            if (!i) {
                return undefined;
            }
            return m;
        };
        var c;
        var o;
        var h;
        var r;
        var k;
        var q;
        var d;
        e.member25 = function (s, t, v, u, y, x) {
            if (v === undefined || u === undefined) {
                return false;
            }
            g = s;
            m = v;
            o = y;
            c = u;
            i = true;
            j = t;
            h = x;
            r = -1;
            k = -1;
            q = -1;
            d = -1;
            return true;
        };
        e.member3285 = function () {
            return m !== undefined && m.length > 0 ? m[0] : undefined;
        };
        e.member3286 = function () {
            if (!i) {
                return undefined;
            }
            for (var s = 0; s < m.length; s++) {
                if (m[s].member2794() === Class276.member3269) {
                    return m[s];
                }
            }
            return undefined;
        };
        e.member3287 = function () {
            if (!i) {
                return undefined;
            }
            for (var s = 0; s < m.length; s++) {
                if (m[s].member2794() === Class276.member3273) {
                    return m[s];
                }
            }
            return undefined;
        };
        e.member3288 = function (v, s, u, t) {
            var x = e.member3287();
            if (v === true) {
                if (x === undefined) {
                    c.member3281().member3289(m, e.member3290());
                    x = e.member3287();
                }
                if (x !== undefined) {
                    c.member3281().member3291(x, s, u, t);
                }
            } else if (x !== undefined) {
                c.member3281().member3291(x, 22000, 1, 1);
            }
        };
        e.member3292 = function () {
            return j;
        };
        e.member3293 = function () {
            var s = e.member3292();
            var t = e.member3290();
            while (t != undefined) {
                s *= t.member3292();
                t = t.member3290();
            }
            return s;
        };
        e.member3294 = function () {
            var t = e.member3283();
            var s = e.member3290();
            while (s != undefined) {
                t *= s.member3283();
                s = s.member3290();
            }
            return t;
        };
        e.member3290 = function () {
            return h;
        };
        e.member3295 = function () {
            if (!i) {
                return;
            }
            if (o !== undefined) {
                var v;
                if (o.member3296() !== undefined) {
                    v = o.member3296();
                } else {
                    v = o.member3297.value;
                }
                if (o.member3298 !== undefined) {
                    v /= o.member3298;
                }
                if (n !== v && r < 0) {
                    r = v;
                    k = n;
                    q = c.member3281().member3282();
                    d = q + 0.1;
                }
            }
            if (r >= 0) {
                var x = c.member3281().member3282();
                if (x > d) {
                    n = r;
                    r = -1;
                } else {
                    var s = r - k;
                    var t = d - q;
                    var u = s / t;
                    n = k + u * (x - q);
                    if (n == r) {
                        r = -1;
                    }
                }
            }
            if (n !== b) {
                c.member3281().member3299(m, n);
                b = n;
            }
        };
        return e;
    };
    return a;
}();