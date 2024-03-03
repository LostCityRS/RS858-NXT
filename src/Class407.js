import { Class86 } from 'Class86.js';
import { Class158 } from 'Class158.js';
import { Class195 } from 'Class195.js';
import { Class131 } from 'Class131.js';
import { Class95 } from 'Class95.js';
import { Class271 } from 'Class271.js';
import { Class96 } from 'Class96.js';
import { Class37 } from 'Class37.js';
import { Class140 } from 'Class140.js';
import { Class41 } from 'Class41.js';
export var Class407 = function () {
    var a = function (r) {
        var h = {};
        var n = new Float32Array(3);
        var c = new Float32Array(3);
        var d = new Float32Array(4);
        var b = [
            0,
            0,
            1
        ];
        var i, e;
        var o = undefined;
        var g = null;
        h.member4630 = function () {
            return g;
        };
        var m;
        if (r.member1643 !== undefined && r.member1642 !== undefined) {
            i = r.member1643;
            e = r.member1642;
            o = r.member1644;
            if (o !== undefined) {
                m = new Array(o.member3251.length);
            }
        } else {
            throw new Error('1047 ');
        }
        h.member3250 = function () {
            return g !== null;
        };
        var k = h.member3250;
        var q = function (O, y) {
            var P = null;
            if (o === undefined) {
                P = j(O, i, e);
            } else {
                var H = true;
                for (var W = 0; W < o.member3251.length; W++) {
                    if (m[W] === undefined) {
                        var I = j(O, o.member3251[W].member1643, o.member3251[W].member1642);
                        if (I === null) {
                            H = false;
                        } else {
                            m[W] = I;
                        }
                    }
                }
                if (!H) {
                    return false;
                }
                P = new Array(0);
                for (var u = 0; u < Class86.member414; u++) {
                    for (var A = 0; A < Class86.member716; A++) {
                        for (var z = 0; z < Class86.member716; z++) {
                            var B = o.member3252[u][A][z];
                            if (B !== undefined) {
                                var E = B.member4620 % Class86.member716 * Class86.member717;
                                var L = E + (Class86.member717 - 1);
                                var C = B.member4621 % Class86.member716 * Class86.member717;
                                var J = C + (Class86.member717 - 1);
                                var F = m[B.member3253];
                                for (var D = 0; D < F.length; D++) {
                                    var v = F[D];
                                    var Q = Math.floor(v.member1593[0] / Class86.member718);
                                    var N = Math.floor(v.member1593[2] / Class86.member718);
                                    if (Q >= E && Q <= L && N >= C && N <= J) {
                                        var U = Q % Class86.member717;
                                        var T = N % Class86.member717;
                                        var M = Class158.member1638(U, T, B.member1668, 1, 1, 0);
                                        var K = Class158.member1639(U, T, B.member1668, 1, 1, 0);
                                        var S = A * Class86.member717 + M;
                                        var R = z * Class86.member717 + K;
                                        var t = Class195();
                                        t.member1593 = new Float32Array([
                                            S * Class86.member718 + Class86.member718 / 2,
                                            v.member1593[1],
                                            R * Class86.member718 + Class86.member718 / 2
                                        ]);
                                        t.width = v.width;
                                        t.length = v.length;
                                        t.member763 = v.member763;
                                        t.depth = v.depth;
                                        t.member2267 = v.member2267;
                                        t.member2268 = v.member2268;
                                        t.member1592 = v.member1592;
                                        t.member2297 = v.member2297;
                                        t.member4661 = v.member4661;
                                        P.push(t);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (P === null) {
                return false;
            }
            var G = true;
            for (var x = 0; x < P.length; x++) {
                var V = y.member3227(Class131.member1258.member1204, P[x].member4661);
                if (V === member47) {
                    G = false;
                } else {
                    P[x].member1591 = V.member4662();
                    P[x].member2280 = V.member4663();
                    P[x].member2289 = V.member4664();
                    P[x].member2282 = V.member4665();
                    P[x].member2281 = V.member4666();
                    P[x].member2290 = V.member4667();
                    P[x].member2291 = V.member4668();
                    P[x].member2245 = V.member4669();
                    P[x].member2278 = V.member4670();
                    P[x].member2293 = V.member4671();
                    P[x].member1372 = V.member1413();
                    P[x].member1928 = V.member4672();
                    P[x].member1673 = V.member4673();
                    P[x].member1674 = V.member4674();
                    P[x].member1675 = V.member4675();
                    P[x].member2294 = V.member4676();
                    P[x].member2298 = V.member4677();
                    P[x].member2292 = V.member4678();
                    P[x].member2295 = V.member4679();
                    P[x].member2247 = V.member4680();
                    P[x].member2248 = V.member4681();
                    P[x].member2269 = V.member4682();
                    P[x].member2249 = V.member4683();
                    P[x].member2250 = V.member4684();
                    P[x].member2270 = V.member4685();
                    P[x].member2251 = V.member4686();
                    P[x].member2252 = V.member4687();
                    P[x].member2271 = V.member4688();
                    P[x].member2253 = V.member4689();
                    P[x].member2272 = V.member4690();
                    P[x].member2254 = V.member4691();
                    delete P[x].member4661;
                }
            }
            if (!G) {
                return false;
            }
            g = P;
            return true;
        };
        h.load = q;
        var s = function () {
            g = null;
            if (m !== undefined) {
                m.length = 0;
            }
        };
        h.member512 = s;
        var j = function (I, N, K) {
            var A = N | K << 7;
            var M = I.member1551(Class95.member809, A, Class271.member3214);
            if (M === undefined) {
                return new Array(0);
            } else if (M === false) {
                return member47;
            } else {
                var v = I.getFile(Class95.member809, A, Class271.member3214, Class96.member841);
                var z = v.member609();
                var J = new Array(z);
                for (var C = 0; C < z; C++) {
                    var D = v.member1070();
                    var y = v.member1070();
                    var H = v.member1070();
                    var B = v.member1070();
                    var F = v.member1071();
                    var x = new Float32Array(4);
                    var P = Class37.create();
                    v.member1088(n);
                    Class140.member1353(n, v.member320() * 2 * Math.PI, x);
                    Class140.normalize(x);
                    var O = v.member608();
                    var u = v.member1070() / 50;
                    var t = v.member1070() / 50;
                    var L = v.member608();
                    var E = J[C] = Class195();
                    E.member1593 = new Float32Array([
                        D * Class86.member718 + Class86.member718 / 2,
                        F,
                        y * Class86.member718 + Class86.member718 / 2
                    ]);
                    E.width = H * Class86.member718;
                    E.length = B * Class86.member718;
                    E.member763 = x;
                    E.depth = O;
                    E.member2267 = u;
                    E.member2268 = t;
                    E.member1592 = 150;
                    Class41.set(b, n);
                    Class41.set([
                        u,
                        0,
                        t
                    ], c);
                    Class41.normalize(c);
                    var G = -Math.acos(Class41.member327(n, c));
                    Class41.member325(n, c);
                    Class41.normalize(n);
                    Class140.member1353(n, G, d);
                    Class140.member334(d, P);
                    E.member2297 = P;
                    E.member4661 = L;
                }
                return J;
            }
        };
        r = undefined;
        return h;
    };
    return a;
}();