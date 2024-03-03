import { Class291 } from 'Class291.js';
import { CoordFine } from 'Class290.js';
import { Class41 } from 'Class41.js';
import { Class433 } from 'Class433.js';
import { Class86 } from 'Class86.js';
import { Class693 } from 'Class693.js';
import { Class198 } from 'Class198.js';
import { Class434 } from 'Class434.js';
import { Class694 } from 'Class694.js';
import { Class371 } from 'Class371.js';
import { Class332 } from 'Class332.js';
import { Class347 } from 'Class347.js';
import { Class351 } from 'Class351.js';
export var Class695 = function () {
    var d = {};
    var a;
    var g = false;
    var j = Class291();
    var e = CoordFine();
    var i = CoordFine();
    var c = Class41.create();
    var h = CoordFine();
    var b = function (k) {
        a = k;
    };
    d.member25 = b;
    d.member9905 = function () {
        return j.level;
    };
    Class433.member6331.member6428 = function (m, n) {
        var k = a.member6101.member6430();
        j.level = m.g1_alt1();
        j.x = m.g1s() * Class86.member717 + k.x;
        j.member756 = m.g1s_alt2() * Class86.member717 + k.member756;
    };
    Class433.member6332.member6428 = function (o, r) {
        var u = a.member6101.member6430();
        j.member756 = o.g1s() * Class86.member717 + u.member756;
        j.level = o.g1_alt2();
        j.x = o.g1s_alt1() * Class86.member717 + u.x;
        e = j.member3461(false);
        i.level = e.level;
        i.member3454[0] = e.member3454[0] + Class86.member717 * Class86.member718;
        i.member3454[2] = e.member3454[2] + Class86.member717 * Class86.member718;
        a.member9078.member8499(e, i);
        var n = a.member6444.member6445();
        var v = Math.floor(j.x / Class86.member729);
        var s = Math.floor(j.member756 / Class86.member729);
        var q = n.member8344(v, s);
        if (q === undefined) {
            return;
        }
        var m = j.x % Class86.member729;
        var x = j.member756 % Class86.member729;
        var t = q.member4853(m, x);
        if (t === null) {
            return;
        }
        var k = t.member4565();
        i.member3454[0] %= k;
        i.member3454[2] %= k;
        e.member3454[0] %= k;
        e.member3454[2] %= k;
        t.member4604(e, i);
    };
    Class433.member6333.member6428 = function (m, o) {
        var k = a.member6101.member6430();
        j.level = m.g1_alt2();
        j.x = m.g1s_alt3() * Class86.member717 + k.x;
        j.member756 = m.g1s_alt3() * Class86.member717 + k.member756;
        while (m.getPos() < o) {
            var n = m.g1();
            var q = Class693.member6097[n];
            if (q === undefined) {
                throw new Error('1109 ' + n);
            }
            if (q.member6428 === undefined) {
                if (false) {
                }
                m.setPos(m.getPos() + q.member2819);
            } else {
                q.member6428(m, q.member2819);
            }
        }
    };
    Class433.member6334.member6428 = function (n, u) {
        var x = n.g1_alt3();
        var q = x & 3;
        var t = x >> 2;
        var o = Class198.member2360(t);
        var k = n.g4_alt1();
        var r = n.g1();
        var v = j.x + (r >> 4 & 7);
        var s = j.member756 + (r & 7);
        var m = Class434({
            member2506: k,
            member2514: v,
            member2515: s,
            level: j.level,
            member2520: q,
            member2519: t,
            member6426: o
        });
        a.member6429.addRequest(m);
        a.member7619.member9239();
    };
    Class693.member6334.member6428 = Class433.member6334.member6428;
    Class433.member6336.member6428 = function (u, v) {
        var E = u.g1_alt3();
        var q = j.x + (E >> 4 & 7);
        var n = j.member756 + (E & 7);
        var o = u.g1_alt1();
        var y = u.g4_alt1();
        var x = u.g1_alt3();
        var r = x & 3;
        var s = x >> 2;
        var m = Class198.member2360(s);
        if (s === Class198.member2351) {
            s = Class198.member2350;
        }
        var z;
        if ((o & 1) === 0) {
            var k, C, G;
            if ((o & 2) !== 0) {
                var t = u.g1();
                k = new Array(t);
                for (var F = 0; F < t; F++) {
                    k[F] = u.g4();
                }
            }
            var C;
            if ((o & 4) !== 0) {
                var B = u.g1();
                C = new Array(B);
                for (var F = 0; F < B; F++) {
                    C[F] = u.g2();
                }
            }
            var G;
            if ((o & 8) !== 0) {
                var D = u.g1();
                G = new Array(D);
                for (var F = 0; F < D; F++) {
                    G[F] = u.g2();
                }
            }
            if (k !== undefined || C !== undefined || G !== undefined) {
                z = Class694({
                    model: k,
                    recol_d: C,
                    member2618: G
                });
            }
        }
        var A = Class434({
            member2506: y,
            member2514: q,
            member2515: n,
            level: j.level,
            member2520: r,
            member2519: s,
            member6426: m,
            member4454: z
        });
        a.member6429.addRequest(A);
    };
    Class693.member6336.member6428 = Class433.member6336.member6428;
    Class433.member6335.member6428 = function (m, t) {
        var v = m.g1_alt1();
        var o = m.g1_alt3();
        var u = j.x + (o >> 4 & 7);
        var r = j.member756 + (o & 7);
        var q = v & 3;
        var s = v >> 2;
        var n = Class198.member2360(s);
        var k = Class434({
            member2506: -1,
            member2514: u,
            member2515: r,
            level: j.level,
            member2520: q,
            member2519: s,
            member6426: n
        });
        a.member6429.addRequest(k);
        a.member7619.member9239();
    };
    Class693.member6335.member6428 = Class433.member6335.member6428;
    Class433.member6337.member6428 = function (o, v) {
        var m = o.g1_alt2();
        var k = o.g4();
        var s = o.g1_alt3();
        var x = j.x + (s >> 4 & 7);
        var u = j.member756 + (s & 7);
        var y = o.g1_alt3();
        var r = y & 3;
        var t = y >> 2;
        var q = Class198.member2360(t);
        var n = Class434({
            member2514: x,
            member2515: u,
            level: j.level,
            member2520: r,
            member2519: t,
            member6426: q,
            member4360: k,
            member6427: m
        });
        a.member6429.addRequest(n);
    };
    Class693.member6337.member6428 = Class433.member6337.member6428;
    Class433.member6340.member6428 = function (q, t) {
        var A = a.member6116.member7139();
        var u = q.g1();
        var m = (u & 128) !== 0;
        var B = j.x + (u >> 3 & 7);
        var y = j.member756 + (u & 7);
        var z = B + q.g1s();
        var x = y + q.g1s();
        var o = q.g2s();
        var D = q.g2();
        var k = q.g1() * 4;
        var C = q.g1() * 4;
        var n = q.g2();
        var s = q.g2();
        var v = q.g1();
        if (v === 255) {
            v = -1;
        }
        var r = q.g2();
        q.g2();
        B = (B + 0.5) * Class86.member718;
        y = (y + 0.5) * Class86.member718;
        z = (z + 0.5) * Class86.member718;
        x = (x + 0.5) * Class86.member718;
        k *= 4;
        C *= 4;
        r *= 4;
        a.member6431.add({
            member6432: D,
            member873: n + A,
            member875: s + A,
            member6433: 0,
            member6434: o,
            member6435: m,
            member6436: k,
            member6437: C,
            member6438: -1,
            member6439: B,
            member6440: y,
            member6441: z,
            member6442: x,
            member6443: r,
            member1788: v
        });
    };
    Class693.member6340.member6428 = Class433.member6340.member6428;
    Class433.member6345.member6428 = function (u, v) {
        var t = a.member6116.member7139();
        var G = u.g1();
        var B = j.x * 2 + (G >> 4 & 15);
        var A = j.member756 * 2 + (G & 15);
        var y = u.g1();
        var o = (y & 1) !== 0;
        var x = (y & 2) !== 0;
        var H = x ? y >> 2 : -1;
        var F = B + u.g1s();
        var E = A + u.g1s();
        var r = u.g2s();
        var q = u.g2s();
        var C = u.g2();
        var n = u.g1();
        if (!x) {
            n *= 4;
        }
        var m = u.g1() * 4;
        var k = u.g2();
        var s = u.g2();
        var z = u.g1();
        if (z === 255) {
            z = -1;
        }
        var D = u.g2();
        u.g2();
        B = B * Class86.member718 / 2;
        A = A * Class86.member718 / 2;
        F = F * Class86.member718 / 2;
        E = E * Class86.member718 / 2;
        n *= 4;
        m *= 4;
        D *= 4;
        a.member6431.add({
            member6432: C,
            member873: k + t,
            member875: s + t,
            member6433: r,
            member6434: q,
            member6435: o,
            member6436: n,
            member6437: m,
            member6438: H,
            member6439: B,
            member6440: A,
            member6441: F,
            member6442: E,
            member6443: D,
            member1788: z
        });
    };
    Class693.member6345.member6428 = Class433.member6345.member6428;
    Class433.member6341.member6428 = function (n, s) {
        var y = a.member6116.member7139();
        var r = n.g1();
        var v = j.x + (r >> 4 & 7);
        var k = j.member756 + (r & 7);
        var A = n.g2();
        if (A === 65535) {
            A = -1;
        }
        var z = n.g2();
        var t = n.g2();
        var u = n.g1() * Math.PI / 4;
        n.g2s();
        var q = (v + 0.5) * Class86.member718;
        var m = (k + 0.5) * Class86.member718;
        var o = a.member6444.member6445().member4111().member4112(v, k) && j.level < 3 ? 1 : 0;
        z += a.member6444.member6445().member4114().member4763(j.level + o, v, k, false, true);
        if (A === -1) {
            a.member6446.member6447(q, m);
        } else {
            a.member6446.add({
                member6432: A,
                member4345: t,
                member6439: q,
                member6440: m,
                member6448: z,
                level: j.level + o,
                member1788: u,
                member6449: false,
                member4179: null
            });
        }
    };
    Class693.member6341.member6428 = Class433.member6341.member6428;
    Class433.member6338.member6428 = function (q, t) {
        var m = q.g1_alt2();
        var r = j.x + (m >> 4 & 7);
        var s = j.member756 + (m & 7);
        h.level = j.level;
        h.member3454[0] = r * Class86.member718;
        h.member3454[2] = s * Class86.member718;
        var k = q.g2_alt3();
        var o = q.g2_alt1();
        if (false) {
        }
        var n = a.member9078.member8492(h);
        if (n || a.member6101.member4583().member4532) {
            a.member9078.member9906(CoordFine(h), o, k);
        }
        if (false) {
        }
    };
    Class693.member6338.member6428 = Class433.member6338.member6428;
    Class433.member6339.member6428 = function (n, r) {
        var k = n.g1();
        var o = j.x + (k >> 4 & 7);
        var q = j.member756 + (k & 7);
        h.level = j.level;
        h.member3454[0] = o * Class86.member718;
        h.member3454[2] = q * Class86.member718;
        var m = n.g2_alt3();
        if (false) {
        }
        a.member9078.member9907(CoordFine(h), m);
        if (false) {
        }
    };
    Class693.member6339.member6428 = Class433.member6339.member6428;
    Class433.member6342.member6428 = function (m, q) {
        var o = m.g1_alt3();
        var t = j.x + (o >> 4 & 7);
        var r = j.member756 + (o & 7);
        h.level = j.level;
        h.member3454[0] = t * Class86.member718;
        h.member3454[2] = r * Class86.member718;
        var k = m.g2_alt1();
        var n = m.g2();
        var s = m.g2_alt1();
        var v = a.member7135().member7649();
        if (false) {
        }
        if (k !== v) {
            var u = a.member9078.member8492(h);
            if (u || a.member6101.member4583().member4532) {
                a.member9078.member9906(CoordFine(h), s, n);
            }
        }
        if (false) {
        }
    };
    Class693.member6342.member6428 = Class433.member6342.member6428;
    Class433.member6343.member6428 = function (k, o) {
        var n = k.g1();
        var t = j.x + (n >> 4 & 7);
        var q = j.member756 + (n & 7);
        h.level = j.level;
        h.member3454[0] = t * Class86.member718;
        h.member3454[2] = q * Class86.member718;
        var s = k.g2();
        var r = k.g2();
        var m = k.g2();
        var u = a.member7135().member7649();
        if (false) {
        }
        a.member9078.member9908(CoordFine(h), s, r, m);
        if (false) {
        }
    };
    Class693.member6343.member6428 = Class433.member6343.member6428;
    Class433.member6344.member6428 = function (n, t) {
        var q = n.g1();
        var o = n.g2();
        var A = n.g1();
        var k = A >> 4 & 15;
        var z = A & 7;
        var x = n.g1();
        var r = n.g1();
        var v = n.g2();
        var u = j.x + (q >> 4 & 7);
        var s = j.member756 + (q & 7);
        h.level = j.level;
        h.member3454[0] = u * Class86.member718;
        h.member3454[2] = s * Class86.member718;
        if (false) {
        }
        var y = a.member9078.member8492(h);
        if (y) {
            var m = a.member6444.member6445();
            c[0] = h.member3454[0];
            c[2] = h.member3454[2];
            c[1] = m.member4114().member4115(h.level, c[0], c[2], true);
            Class371.member4060(Class332.member3781, o, z, r, Class347.member3905, Class351.member3918, {
                member4014: 1,
                maxDistance: k
            }, c, 0, v, x);
        }
    };
    Class693.member6344.member6428 = Class433.member6344.member6428;
    Class693.member9903.member6428 = function (o, u) {
        var r = o.g1();
        var q = o.g2();
        var C = o.g1();
        var m = C >> 4 & 15;
        var A = C & 7;
        var y = o.g1();
        var s = o.g1();
        var x = o.g2();
        var k = o.g1() === 1;
        var v = j.x + (r >> 4 & 7);
        var t = j.member756 + (r & 7);
        h.level = j.level;
        h.member3454[0] = v * Class86.member718;
        h.member3454[2] = t * Class86.member718;
        if (false) {
        }
        var z = a.member9078.member8492(h);
        if (z) {
            var n = a.member6444.member6445();
            c[0] = h.member3454[0];
            c[2] = h.member3454[2];
            c[1] = n.member4114().member4115(h.level, c[0], c[2], true);
            var B = k ? Class347.member3907 : Class347.member3905;
            Class371.member4060(Class332.member3781, q, A, s, B, Class351.member3918, {
                member4014: 1,
                maxDistance: m
            }, c, 0, x, y);
        }
    };
    return d;
}();