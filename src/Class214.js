import { Packet } from 'Class124.js';
export var Class214 = function () {
    var b = 1;
    var a = {};
    a.member2637 = function (r, e, g, o) {
        r.setPos(g - 1);
        var m = r.g1();
        var d = g - 1 - o * m * 4;
        r.setPos(d);
        var s = new Array(o);
        var v;
        for (var k = 0; k < m; k++) {
            v = 0;
            for (var i = 0; i < o; i++) {
                v += r.g4s();
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
        var u = Packet(t);
        var c = new Int32Array(o);
        u.p1(b);
        var n = q;
        for (var k = 0; k < o; k++) {
            c[k] = n;
            u.p4(n);
            n += s[k];
        }
        u.p4(n);
        r.setPos(d);
        var h = e;
        for (k = 0; k < m; k++) {
            v = 0;
            for (i = 0; i < o; i++) {
                v += r.g4s();
                u.setPos(c[i]);
                u.member1067(r.getData(), h, v);
                c[i] += v;
                h += v;
            }
        }
        return u.getData();
    };
    a.member2638 = function (g, k) {
        var j = g.getPos();
        var e = g.g1();
        if (e > b) {
            throw new Error('1282 ' + e);
        }
        g.setPos(j + 1 + 4 * k);
        var i = g.g4();
        var d = g.g4();
        var h = d - i;
        var c = new ArrayBuffer(h);
        g.setPos(j + i);
        g.gdata(c, 0, h);
        return c;
    };
    return a;
}();