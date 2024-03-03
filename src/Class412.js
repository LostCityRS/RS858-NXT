import { Class86 } from 'Class86.js';
import { Class158 } from 'Class158.js';
import { Class411 } from 'Class411.js';
import { Class95 } from 'Class95.js';
import { Class271 } from 'Class271.js';
import { Priority } from 'Class96.js';
export var Class412 = function (j) {
    var c = {};
    var d, b;
    var g = undefined;
    var e = null;
    c.member4751 = function () {
        return e;
    };
    var h = null;
    if (j.member1643 !== undefined && j.member1642 !== undefined) {
        d = j.member1643;
        b = j.member1642;
        g = j.member1644;
    } else {
        throw new Error('1557 ');
    }
    c.member3250 = function () {
        return e !== null;
    };
    var i = function (G, t, A) {
        var F = 1;
        if (g !== undefined) {
            F = g.member3251.length;
        }
        if (h === null) {
            h = new Array(F);
        }
        var E = true;
        if (g === undefined) {
            h[0] = a(G, d, b);
            if (h[0] === null) {
                E = false;
            }
        } else {
            for (var L = 0; L < g.member3251.length; L++) {
                if (h[L] !== null && h[L] !== undefined) {
                    continue;
                }
                h[L] = a(G, g.member3251[L].member1643, g.member3251[L].member1642);
                if (h[L] === null) {
                    E = false;
                }
            }
        }
        if (!E) {
            return false;
        }
        if (g === undefined) {
            e = h[0];
        } else {
            e = new Array(0);
            for (var m = 0; m < Class86.member414; m++) {
                for (var x = 0; x < Class86.member716; x++) {
                    for (var u = 0; u < Class86.member716; u++) {
                        var y = g.member3252[m][x][u];
                        if (y !== undefined) {
                            var J = y.member4620 % Class86.member716 * Class86.member731;
                            var q = J + Class86.member731 - 1;
                            var H = y.member4621 % Class86.member716 * Class86.member731;
                            var n = H + Class86.member731 - 1;
                            var D = h[y.member3253];
                            for (var v = 0; v < D.length; v++) {
                                var s = D[v];
                                var C = s.member2026();
                                if (s.member4081() === y.level && C[0] >= J && C[0] <= q && C[2] >= H && C[2] <= n) {
                                    var B = C[0] % Class86.member731;
                                    var z = C[2] % Class86.member731;
                                    var r = Class158.member1636(B, z, y.member1668);
                                    var o = Class158.member1637(B, z, y.member1668);
                                    e.push(Class411({
                                        member4744: s,
                                        member4745: new Float32Array([
                                            x * Class86.member731 + r,
                                            C[1],
                                            u * Class86.member731 + o
                                        ]),
                                        member4746: m,
                                        member1668: y.member1668
                                    }));
                                }
                            }
                        }
                    }
                }
            }
        }
        for (var v = 0; v < e.length; v++) {
            var s = e[v];
            var K = d * Class86.member730 + s.member2026()[0];
            var I = b * Class86.member730 + s.member2026()[2];
            s.member4747(A.member4115(s.member4081(), K, I, true));
        }
        h = null;
        return true;
    };
    c.load = i;
    var k = function () {
        e = null;
        h = null;
    };
    c.member512 = k;
    var a = function (u, s, r) {
        var v = s | r << 7;
        var t = u.member1551(Class95.member809, v, Class271.member3213);
        if (t === undefined) {
            return new Array(0);
        } else if (t === false) {
            return NULL;
        } else {
            var o = u.getFile(Class95.member809, v, Class271.member3213, Priority.member841);
            var m = o.g1();
            var q = new Array(m);
            for (var n = 0; n < m; n++) {
                q[n] = Class411({ packet: o });
            }
            return q;
        }
    };
    j = undefined;
    return c;
};