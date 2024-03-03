import { Class41 } from 'Class41.js';
import { Class575 } from 'Class575.js';
export var Class576 = function () {
    var c = new Float64Array(3);
    var b = new Float64Array(3);
    var a = function (o) {
        var j = {};
        var h = new Array(4);
        var n = null;
        var q = -1;
        var i = null;
        var d = function () {
            q = -1;
            n = null;
            i = null;
        };
        j.setControlPoint = function (r, s) {
            Class41.set(s, h[r]);
            d();
        };
        j.getControlPoint = function (r, s) {
            Class41.set(h[r], s);
        };
        j.member8890 = function () {
            return h;
        };
        j.member8891 = function (s, r) {
            if (i === null) {
                g();
            }
            return i.getWorldPosition(s, r);
        };
        j.getWorldPosition = function (x, v) {
            var u = x * x;
            var y = x * u;
            for (var s = 0; s < 3; s++) {
                var z = 3 * (h[1][s] - h[0][s]);
                var r = 3 * (h[2][s] - h[1][s]) - z;
                var t = h[3][s] - h[0][s] - z - r;
                v[s] = t * y + r * u + z * x + h[0][s];
            }
        };
        var k = j.getWorldPosition;
        j.member8892 = function () {
            if (q === -1) {
                e();
            }
            return q;
        };
        j.member8893 = function (v) {
            if (q === -1) {
                e();
            }
            if (v <= 0) {
                return 0;
            }
            if (v >= 1) {
                return q;
            }
            var s = v * n.length;
            var u = Math.floor(s);
            var x = s - u;
            var t = 0;
            for (var r = 0; r < u; r++) {
                t += n[r];
            }
            t += n[u] * x;
            return t;
        };
        j.member8894 = function (v) {
            if (q === -1) {
                e();
            }
            if (v <= 0) {
                return 0;
            } else if (v >= q) {
                return 1;
            }
            var s = 0;
            var t = n[0];
            for (var r = 1; r < n.length; r++) {
                if (v < t) {
                    var u = (v - s) / (t - s);
                    var y = (r - 1) / n.length;
                    var x = r / n.length;
                    return y + (x - y) * u;
                }
                s = t;
                t += n[r];
            }
            var u = (v - s) / (t - s);
            var y = (n.length - 1) / n.length;
            return y + (1 - y) * u;
        };
        var e = function () {
            var s = 20;
            var x = 0;
            k(0, c);
            for (var r = 1; r <= s; r++) {
                k(r / s, b);
                x += Class41.member330(c, b);
                Class41.set(b, c);
            }
            var t = Math.floor(x / s);
            if (t < s) {
                t = s;
            }
            n = new Array(t);
            k(0, c);
            var v = 0;
            for (var r = 1; r <= t; r++) {
                k(r / t, b);
                var u = Class41.member330(c, b);
                v += u;
                n[r - 1] = u;
                Class41.set(b, c);
            }
            q = v;
        };
        var g = function () {
            i = Class575();
            for (var r = 0; r < 3; r++) {
                for (var s = 0; s < 3; s++) {
                    c[s] = 3 * (h[r + 1][s] - h[r][s]);
                }
                i.setControlPoint(r, c);
            }
        };
        if (o !== undefined) {
            if (o.member8895 !== undefined) {
                if (o.member8895.length !== 4) {
                    throw new Error('1527 ' + o.member8895.length + '1527 ');
                }
                for (var m = 0; m < 4; m++) {
                    h[m] = Class41.create(o.member8895[m]);
                }
            } else if (o.member3456 !== undefined) {
                for (var m = 0; m < 4; m++) {
                    h[m] = Class41.member321(o.member3456);
                }
            } else {
                throw new Error('1528 ');
            }
        } else {
            throw new Error('1529 ');
        }
        o = undefined;
        return j;
    };
    return a;
}();