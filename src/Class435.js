import { CoordFine } from 'Class290.js';
import { Class433 } from 'Class433.js';
import { Class198 } from 'Class198.js';
import { Class434 } from 'Class434.js';
import { Class86 } from 'Class86.js';
import { Class432 } from 'Class432.js';
export var Class435 = function () {
    var d = {};
    var b;
    var g = function (h) {
        b = h;
    };
    d.member25 = g;
    var e = CoordFine();
    Class433.member6296.member6428 = function (m, s) {
        var v = m.g4_alt1();
        var u = m.g1_alt2();
        var i = m.g4();
        var j = m.g1_alt1();
        var h = v >> 28 & 3;
        var t = v >> 14 & 16383;
        var r = v & 16383;
        var o = u & 3;
        var q = u >> 2;
        var n = Class198.member2360(q);
        var k = Class434({
            member2514: t,
            member2515: r,
            level: h,
            member2520: o,
            member2519: q,
            member6426: n,
            member4360: i,
            member6427: j
        });
        b.member6429.addRequest(k);
    };
    Class433.member6298.member6428 = function (t, u) {
        var h = t.g2s_alt3();
        var o = t.g2s_alt3();
        var z = t.g1_alt3();
        if (z === 255) {
            z = -1;
        }
        var k = t.g1_alt1();
        var F = t.g1s();
        var i = t.g2_alt2();
        var y = t.g1_alt2();
        var D = t.g2();
        var s = t.g2_alt1();
        var C = t.g2_alt2();
        var j = t.g1() * 4;
        var E = t.g1s_alt3();
        var n = t.g2();
        var q = t.g2_alt1();
        var m = (y & 1) !== 0;
        var v = (y & 2) !== 0;
        var G = v ? y >> 2 : -1;
        if (!v) {
            k *= 4;
        }
        var r = b.member6101.member6430();
        var B = s - r.x * 2;
        var A = q - r.member756 * 2;
        F += s;
        E += q;
        B = B * Class86.member718 / 2;
        A = A * Class86.member718 / 2;
        F = F * Class86.member718 / 2;
        E = E * Class86.member718 / 2;
        k *= 4;
        j *= 4;
        C *= 4;
        b.member6431.add({
            member6432: D,
            member873: i,
            member875: n,
            member6433: h,
            member6434: o,
            member6435: m,
            member6436: k,
            member6437: j,
            member6438: G,
            member6439: B,
            member6440: A,
            member6441: F,
            member6442: E,
            member6443: C,
            member1788: z
        });
    };
    Class433.member6297.member6428 = function (k, q) {
        var x = k.g2();
        var v = k.g1_alt3();
        var s = k.g4();
        var r = k.g1();
        var t = k.g2();
        var y = k.g2();
        if (y === 65535) {
            y = -1;
        }
        var u = (r & 7) * Math.PI / 4;
        var m = (r >> 7 & 1) === 1;
        if (s >> 30 !== 0) {
            var i = s >> 28 & 3;
            var o = (s >> 14 & 16383) * Class86.member718 + Class86.member733;
            var j = (s & 16383) * Class86.member718 + Class86.member733;
            x += b.member6444.member6445().member4114().member4115(i, o, j, true);
            if (y === -1) {
                b.member6446.member6447(o, j);
            } else {
                b.member6446.add({
                    member6432: y,
                    member4345: t,
                    member6439: o,
                    member6440: j,
                    member6448: x,
                    level: i,
                    member1788: u,
                    member6449: m,
                    member4179: null
                });
            }
        } else {
            var h = s >> 29 !== 0;
            var n;
            if (h) {
                n = b.member6450.member6451(s & 65535);
            } else {
                n = b.member6452.member6453(s & 65535);
            }
            if (n !== undefined) {
                b.member6446.member6454({
                    member6432: y,
                    member4345: t,
                    member6439: 0,
                    member6440: 0,
                    member6448: x,
                    level: n.member4081(),
                    member1788: u,
                    member6449: m,
                    member4179: n,
                    slotID: v
                });
            }
        }
    };
    Class433.member6295.member6428 = function (m, n) {
        var o = m.g1_alt2();
        var k = m.g2_alt3();
        var j = new Array(Class432.member6232);
        for (var h = 0; h < Class432.member6232; h++) {
            j[h] = m.g4();
        }
        var i = b.member6450.member6451(k);
        if (i !== undefined && i !== null) {
            i.member6455(j, o);
        }
    };
    Class433.member6255.member6428 = function (h, i) {
        b.member6452.member6456(c);
        b.member6450.member6457(a);
    };
    Class433.member6424.member6428 = function (h, i) {
    };
    var c = function (h) {
        h.getID0();
    };
    var a = function (h) {
        h.getID0();
    };
    return d;
}();