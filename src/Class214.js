import { Class124 } from 'Class124.js';
export var Class214 = function () {
    var b = 1;
    var a = {};
    a.member2637 = function (r, e, g, o) {
        r.member607(g - 1);
        var m = r.member609();
        var d = g - 1 - o * m * 4;
        r.member607(d);
        var s = new Array(o);
        var v;
        for (var k = 0; k < m; k++) {
            v = 0;
            for (var i = 0; i < o; i++) {
                v += r.member1074();
                if (s[i] === undefined) {
                    s[i] = v;
                } else {
                    s[i] += v;
                }
            }
        }
        var q = 1;
        q += 4 * o;
        q += 4;
        var t = q;
        for (var k = 0; k < o; k++) {
            t += s[k];
        }
        var u = Class124(t);
        var c = new Int32Array(o);
        u.member1051(b);
        var n = q;
        for (var k = 0; k < o; k++) {
            c[k] = n;
            u.member1056(n);
            n += s[k];
        }
        u.member1056(n);
        r.member607(d);
        var h = e;
        for (k = 0; k < m; k++) {
            v = 0;
            for (i = 0; i < o; i++) {
                v += r.member1074();
                u.member607(c[i]);
                u.member1067(r.getData(), h, v);
                c[i] += v;
                h += v;
            }
        }
        return u.getData();
    };
    a.member2638 = function (g, k) {
        var j = g.member1047();
        var e = g.member609();
        if (e > b) {
            throw new Error('1282 ' + e);
        }
        g.member607(j + 1 + 4 * k);
        var i = g.member1073();
        var d = g.member1073();
        var h = d - i;
        var c = new ArrayBuffer(h);
        g.member607(j + i);
        g.member1092(c, 0, h);
        return c;
    };
    return a;
}();