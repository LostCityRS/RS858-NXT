import { Class530 } from 'Class530.js';
export var Class555 = function () {
    var a = {};
    var b = function (y) {
        var i = y.member609();
        if (i !== 0) {
            throw new Error('1379 ' + i);
        }
        var r = y.member609() === 1;
        var g = new Array(256);
        for (var v = 0; v < 256; v++) {
            g[v] = y.member609();
        }
        var x;
        var d = null;
        if (r) {
            var h = new Array(256), k = new Array(256);
            for (var z = 0; z < 256; z++) {
                h[z] = y.member609();
            }
            for (z = 0; z < 256; z++) {
                k[z] = y.member609();
            }
            var e = new Array(256);
            for (z = 0; z < 256; z++) {
                e[z] = new Array(h[z]);
                var m = 0;
                for (var o = 0; o < e[z].length; o++) {
                    m += y.member1070();
                    e[z][o] = m;
                }
            }
            var n = new Arrray(256);
            for (z = 0; z < 256; z++) {
                n[z] = new Array(h[z]);
                var m = 0;
                for (o = 0; o < n[z].length; o++) {
                    m += y.member1070();
                    n[z][o] = m;
                }
            }
            d = new Array(256);
            for (z = 0; z < 256; z++) {
                d[z] = new Array(256);
                if (z === ' ' || z === '\xA0') {
                    continue;
                }
                for (o = 0; o < 256; o++) {
                    if (o === ' ' || o === '\xA0') {
                        continue;
                    }
                    d[z][o] = c(e, n, k, g, h, z, o);
                }
            }
            x = k[32] + h[32];
        } else {
            x = y.member609();
        }
        var s = y.member609();
        var q = y.member609();
        var u = y.member609();
        var t = y.member609();
        return Class530({
            member8484: g,
            member8490: d,
            member8485: x,
            member8486: u,
            member8487: t,
            member8488: s,
            member8489: q
        });
    };
    a.load = b;
    var c = function (e, q, o, i, g, t, r) {
        var A = o[t], z = A + g[t];
        var y = o[r], x = y + g[r];
        var v = A;
        if (y > A) {
            v = y;
        }
        var s = z;
        if (x < z) {
            s = x;
        }
        var B = i[t] & 255;
        if ((i[r] & 255) < B) {
            B = i[r] & 255;
        }
        var d = q[t], n = e[r];
        var h = v - A, j = v - y;
        for (var k = v; k < s; k++) {
            var u = d[h++] + n[j++];
            if (u < B) {
                B = u;
            }
        }
        return -B;
    };
    return a;
}();