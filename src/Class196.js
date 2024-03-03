import { Class124 } from 'Class124.js';
import { Class170 } from 'Class170.js';
import { Class192 } from 'Class192.js';
import { Class171 } from 'Class171.js';
import { Class174 } from 'Class174.js';
import { Class151 } from 'Class151.js';
import { Class188 } from 'Class188.js';
export var Class196 = function () {
    var a = function (l) {
        var m = {};
        var c;
        var d;
        var t;
        var r;
        var j, i;
        var h, g;
        var q;
        var e;
        var p = null;
        var k = false;
        var n = null;
        if (l.request.member2303 !== undefined) {
            c = l.request.member2303;
            d = l.request.member2304, t = l.request.member2305, r = l.request.member2306, j = l.request.member2307;
            i = l.request.member2308;
            h = l.request.member2309;
            g = l.request.member2310;
            q = l.request.resize;
            e = l.request.member2165;
            if (false) {
            } else {
                m.name = '';
            }
        } else {
            throw new Error('1842 ');
        }
        m.member1646 = function (v, x, u) {
        };
        var b = m.member1646;
        m.member1648 = function (u, v) {
            n = u;
            k = false;
        };
        var s = m.member1648;
        m.member78 = function (F, D) {
            if (p === null) {
                var z = new Array(0);
                var C = 0;
                for (var B = 0; B < c.length; B++) {
                    var A = Class124(undefined, c[B]);
                    var u = A.member609();
                    A.member607(0);
                    var v;
                    if (u === Class170.member1859) {
                        v = Class192(A);
                        if (v.member2197() < 13) {
                            v.member2226(2);
                        }
                        if (d !== undefined && d[B] !== undefined && d[B] !== 0) {
                            v.scale(d[B], d[B], d[B]);
                        }
                        if (t !== undefined && t[B] !== undefined) {
                            v.rotate(t[B]);
                        }
                        if (r !== undefined && r[B] !== undefined) {
                            v.translate(r[B]);
                        }
                    } else if (u === Class170.member1860) {
                        v = Class171({ data: A });
                    } else {
                        throw new Error('1843 ' + u);
                    }
                    z.push(v);
                    C++;
                }
                if (z.length === 1) {
                    p = z[0];
                } else if (z[0].member1886() === Class170.member1859) {
                    p = Class192(undefined, z);
                } else {
                    p = Class171({ member1876: z });
                }
                if (j !== undefined && j !== null) {
                    p.member2228(j, i);
                }
                if (h !== undefined && h !== null) {
                    p.member2230(h, g);
                }
                if (q !== undefined && q !== null) {
                    p.scale(q[0] / 128, q[1] / 128, q[2] / 128);
                }
                if (e !== undefined) {
                    p.member2231(e);
                }
            }
            if (n === null) {
                var E = p.member1885(Class174);
                if (E.length > 0) {
                    if (!k) {
                        F.member1654(E, D);
                        k = true;
                    }
                    return null;
                } else {
                    n = Class151({ empty: true });
                }
            }
            if (p.member1886() === Class170.member1859) {
                var G = Class188(p, undefined, undefined, n);
            } else {
                var G = Class188(undefined, p, undefined, n);
            }
            var x = new Array(0);
            var y = { member680: G.member681(false, x) };
            y.member2311 = p.member681(false, x);
            return {
                member1658: y,
                member1659: x
            };
        };
        var o = m.member78;
        l = undefined;
        return m;
    };
    return a;
}();