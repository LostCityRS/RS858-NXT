import { Class41 } from 'Class41.js';
import { Class140 } from 'Class140.js';
import { Class415 } from 'Class415.js';
export var Class569 = function () {
    var b = {};
    var e = Class41.create();
    var a = Class41.create();
    var d = Class41.create();
    var c = Class140.create();
    b.member8865 = function (k, j, h, m, i) {
        if (i >= 100) {
            Class41.set(h, j);
            return;
        }
        for (var g = 0; g < 3; g++) {
            var n = h[g] - j[g];
            if (n > 0) {
                j[g] += m + n * i / 1000;
                if (j[g] > h[g]) {
                    j[g] = h[g];
                }
            } else {
                j[g] -= m - n * i / 1000;
                if (j[g] < h[g]) {
                    j[g] = h[g];
                }
            }
        }
    };
    b.member8866 = function (t, j, k, h, s, i) {
        if (i >= 100) {
            Class41.set(h, k);
            return;
        }
        if (k[0] === h[0] && k[1] === h[1] && k[2] === h[2]) {
            return;
        }
        s = Class415.member4773(s);
        Class41.member322(k, j, e);
        Class41.member322(h, j, a);
        Class41.normalize(e);
        Class41.normalize(a);
        var n = Math.acos(Class41.member327(e, a));
        var m = s + n * i / 1000;
        if (m > n || isNaN(m)) {
            Class41.set(h, k);
            return;
        }
        Class41.member328(k, h, d);
        Class41.member325(e, a, a);
        Class41.normalize(a);
        Class140.member1353(a, m, c);
        Class140.member318(c, e);
        var r, o;
        if (j[0] === k[0]) {
            r = 1;
            o = 2;
        } else {
            r = 0;
            if (j[1] === k[1]) {
                o = 2;
            } else {
                o = 1;
            }
        }
        var q = e[o] * k[r] - e[r] * k[o] + e[r] * j[o] - e[o] * j[r];
        var g = d[o] * e[r] - e[o] * d[r];
        if (g === 0) {
            Class41.set(h, k);
        } else {
            q = q / g;
            Class41.scale(d, q);
            Class41.add(k, d);
        }
    };
    return b;
}();