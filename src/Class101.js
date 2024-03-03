import { Class74 } from 'Class74.js';
import { Class72 } from 'Class72.js';
import { Class49 } from 'Class49.js';
import { Class7 } from 'Class7.js';
export var Class101 = function () {
    var a = new Float32Array(3);
    var b = function (m) {
        var h = null;
        var c;
        var e = 0;
        var i = new Float32Array([
            100000,
            100000
        ]);
        var d = {
            member466: i,
            member873: -1,
            member874: i,
            member875: -1,
            member876: i
        };
        var j = new Float32Array([
            0,
            0,
            0,
            1
        ]);
        var g = {
            member466: j,
            member873: -1,
            member874: j,
            member875: -1,
            member876: j
        };
        if (m.member433 !== undefined) {
            h = Class74({ member526: Class72.member500 });
            c = m.member433;
        } else {
            throw new Error('1782 ');
        }
        h.member523 = function () {
            o(i, 0);
        };
        h.member583 = function () {
        };
        h.member877 = function () {
            return d.member466;
        };
        h.member878 = function (q, r) {
            k(d, new Float32Array(q), r);
        };
        var o = h.member878;
        h.member879 = function (q, r) {
            k(g, new Float32Array(q), r);
        };
        h.member880 = function (r, q, s) {
            a[0] = r[12];
            a[1] = r[13];
            a[2] = r[14];
            Class49.member318(s, a);
            if (-a[2] > d.member466[0] - q) {
                return true;
            } else {
                return false;
            }
        };
        var k = function (r, s, q) {
            if (q < 1) {
                r.member466 = s;
            } else {
                r.member874 = new Float32Array(r.member466);
                r.member873 = e;
                r.member876 = s;
                r.member875 = e + q;
            }
        };
        h.bind = function (q) {
            if (h.member291()) {
                q.member467(Class7.member179, g.member466);
                q.member467(Class7.member181, d.member466[0]);
                q.member467(Class7.member180, d.member466[1]);
            } else {
                q.member467(Class7.member179, j);
                q.member467(Class7.member181, i[0]);
                q.member467(Class7.member180, i[1]);
            }
        };
        h.member487 = function (q) {
            e = q;
            n(d, e);
            n(g, e);
        };
        var n = function (s, t) {
            if (s.member875 >= t) {
                var r = (t - s.member873) / (s.member875 - s.member873);
                for (var q = 0; q < s.member874.length; q++) {
                    s.member466[q] = s.member874[q] + r * (s.member876[q] - s.member874[q]);
                }
                return true;
            } else {
                return false;
            }
        };
        m = undefined;
        return h;
    };
    return b;
}();