import { Class49 } from 'Class49.js';
import { Class37 } from 'Class37.js';
import { Class166 } from 'Class166.js';
import { Class290 } from 'Class290.js';
import { Class86 } from 'Class86.js';
import { Class372 } from 'Class372.js';
import { Class374 } from 'Class374.js';
import { Class373 } from 'Class373.js';
import { Class131 } from 'Class131.js';
import { Class41 } from 'Class41.js';
import { Class32 } from 'Class32.js';
import { Class304 } from 'Class304.js';
import { Class132 } from 'Class132.js';
import { Class72 } from 'Class72.js';
import { Class130 } from 'Class130.js';
import { Class376 } from 'Class376.js';
export var Class776 = function () {
    var e = new Float32Array(3);
    var g = new Class49.member313();
    var d = Class37.create();
    var h = Class166(new Float32Array(3), new Float32Array(3));
    var c = Class166(new Float32Array(3), new Float32Array(3));
    var b = Class290();
    var a = function (B) {
        var n = null;
        var i;
        var r;
        var v = false;
        var j = new Array();
        var k = new Array(3);
        var u = undefined;
        var q = false;
        var m = function (D, I, G, E) {
            for (var F = I - 1; F >= 0; F--) {
                for (var C = G - 1; C < G + 1; C++) {
                    for (var H = E - 1; H < E + 1; H++) {
                        if (D.member8301(F, C, H)) {
                            return F;
                        }
                    }
                }
            }
            return undefined;
        };
        var x = function () {
            var D = n.member3320();
            var C = n.member4117(0, 0, true);
            D.member4195(C);
            if (C !== -1) {
                D.member344(e);
                n.member4084(m(n.member4085().member4111(), n.member4081(), Math.floor(e[0] / Class86.member718), Math.floor(e[2] / Class86.member718)));
            }
        };
        if (B.node !== undefined && B.parent !== undefined && B.member4070 !== undefined && B.member7710 !== undefined && B.member10414 !== undefined) {
            n = new Class372(B.node, B.parent, B.member4070, Class374.member4135, B.member10414.level);
            i = B.member7710;
            r = B.member10414;
            B.node.member4193(r.member3454);
            x();
            n.member4096(Class373({ empty: true }));
        } else {
            throw new Error('1129 ');
        }
        n.member8493 = function () {
            return r;
        };
        n.member890 = function () {
            return j.length;
        };
        n.member9595 = function (C) {
            return j[C];
        };
        n.member4484 = m;
        n.member8494 = function (D, C) {
            j.push({
                member9764: D,
                member1917: C,
                member2621: null,
                member4700: null
            });
            v = false;
            z();
        };
        n.member8496 = function (E) {
            for (var C = 0; C < j.length; C++) {
                var D = j[C];
                if (D.member9764 === E) {
                    j.splice(C, 1);
                    A();
                    break;
                }
            }
        };
        n.member9908 = function (E, F, G) {
            for (var C = 0; C < j.length; C++) {
                var D = j[C];
                if (D.member9764 === E && D.member1917 === F) {
                    D.member1917 = G;
                    v = false;
                    break;
                }
            }
        };
        n.member4380 = function () {
            z();
            var H = n.member3320();
            if (!H.member4188()) {
                var E = n.member4085().member7842();
                E.member2013(H);
                n.member4080(E);
            }
            if (H.member4196() === -1) {
                x();
            }
            for (var D = 0; D < k.length; D++) {
                if (k[D] === undefined) {
                    continue;
                }
                if (k[D].member2621 === null) {
                    var C = i.member2970.member3227(Class131.member1214.member1204, k[D].member9764);
                    if (C === member47) {
                        continue;
                    }
                    k[D].member2621 = C.member9981(i.member433, k[D].member1917);
                    if (k[D].member2621 !== null) {
                        k[D].member2621.member510();
                    }
                }
            }
            if (u === undefined) {
                var G = n.member4085();
                b.level = n.member4081();
                Class41.set(n.getWorldPosition(), b.member3454);
                var I = new Array(Class32.member310);
                var F = n.member4085().member4485(b, I, false);
                if (F === -1) {
                    return;
                }
                I.length = F;
                u = Class304(I);
            }
        };
        n.member952 = function (I, H, G, F, E) {
            if (q) {
                member1608.member990(u);
            }
            for (var C = k.length - 1; C >= 0; C--) {
                var D = k[C];
                if (D === undefined || D.member2621 === null) {
                    continue;
                }
                D.member2621.member952(I, F, H, D.member4700, d, undefined, false, E, undefined);
            }
            if (q) {
                member1608.member991();
            }
        };
        n.member486 = function (H, G, F, E) {
            if (q) {
                member1608.member990(u);
            }
            for (var C = k.length - 1; C >= 0; C--) {
                var D = k[C];
                if (D === undefined || D.member2621 === null) {
                    continue;
                }
                D.member2621.member1630(F, H, D.member4700, d, undefined, false, E, undefined);
            }
            if (q) {
                member1608.member991();
            }
        };
        n.member3437 = function (L, U, I, Z, S) {
            var O = Class132.member1266();
            var M = O.member522(Class72.member499);
            if (n.member4103(L)) {
                var P = n.member3320();
                if (P.member4196() === -1) {
                    n.member4105(false);
                    return;
                }
                if (n.member4085().member4836()) {
                    n.member4105(false);
                    return;
                }
                Class49.member334(U, d);
                var J = false;
                var K = true;
                for (var aa = k.length - 1; aa >= 0; aa--) {
                    var N = k[aa];
                    if (N === undefined) {
                        continue;
                    }
                    if (N.member2621 !== null) {
                        var Q = undefined;
                        if (N.member4700 === null) {
                            var W = false;
                            if (Q === undefined) {
                                Q = i.member2970.member3227(Class131.member1214.member1204, N.member9764);
                            }
                            if (Q !== member47) {
                                W = Q.member9973();
                            }
                            var X, R;
                            if (W) {
                                X = 0.5 + Math.random();
                                R = 0.5 + Math.random();
                            } else {
                                X = R = 1;
                            }
                            var G = Class49.create(U);
                            e[0] = Math.floor(X * (Class86.member718 / 2));
                            e[2] = Math.floor(R * (Class86.member718 / 2));
                            e[1] = n.member4116(e[0], e[2], true);
                            Class49.translate(G, e);
                            if (W) {
                                Class49.member346(G, Math.random() * 2 * Math.PI - Math.PI);
                            }
                            if (!n.member4085().member4114().member8328(n.member4110(), N.member2621.member2098(), G, true)) {
                                n.member4105(false);
                                return;
                            }
                            N.member4700 = G;
                        }
                        N.member4700[13] = n.member4117(N.member4700[12] % Class86.member718, N.member4700[14] % Class86.member718, true);
                        J = true;
                        if (N.member10415 === undefined) {
                            if (Q === undefined) {
                                Q = i.member2970.member3227(Class131.member1214.member1204, N.member9764);
                            }
                            if (Q !== member47) {
                                N.member10415 = Q.member4494();
                            }
                        }
                        if (M && !N.member10415) {
                            K = false;
                        }
                    }
                }
                if (!J) {
                    n.member4105(false);
                    return;
                }
                var Y = n.member4095();
                if (Y !== undefined) {
                    h.member301();
                    for (var aa = 0; aa < k.length; aa++) {
                        if (k[aa] !== undefined && k[aa].member2621 !== null) {
                            c.member1797(k[aa].member2621.member2098());
                            c.transform(k[aa].member4700);
                            h.member1800(c);
                        }
                    }
                    var E = n.member4085().member4166();
                    var T = h.member1812(Z, I, E.width, E.height, Y);
                    n.member4098(T);
                    if (T) {
                        n.member4085().member4168(n);
                    }
                }
                n.member4102();
                n.member4105(true);
                n.member4107(K);
                if (!K) {
                    return;
                }
            } else if (!n.member4104()) {
                return;
            }
            if (Class130.member1194() && !this.member4108()) {
                n.member4107(false);
                return;
            }
            var C = O.member941(Class72.member498);
            var V = u !== undefined && !M && C.member291();
            if (V) {
                var D = u.member427();
                for (var F = 0; F < D.length; F++) {
                    var H = D[F];
                    if (H !== undefined) {
                        H.member4224(S, false);
                    }
                }
            }
        };
        n.member4102 = function () {
            var D = 0;
            for (var C = 0; C < k.length; C++) {
                if (k[C] === undefined) {
                    continue;
                }
                if (k[C].member2621 !== null) {
                    if (k[C].member2621.member2121()) {
                        D |= Class376.member4171;
                    }
                    if (k[C].member2621.member2122()) {
                        D |= Class376.member4169;
                    }
                }
            }
            n.member4101(D);
        };
        n.member512 = function () {
            for (var C = 0; C < k.length; C++) {
                s(undefined, C);
            }
            n.member3320().member4189();
        };
        n.member10416 = function () {
            return j.length === 0;
        };
        n.toString = function () {
            var D = '{serverLocationFine:' + r.toString() + ', sorted:' + v + ', allObjs:[\n';
            for (var C = 0; C < j.length; C++) {
                D += '\t{objTypeID:' + j[C].member9764 + ', count:' + j[C].member1917 + '}\n';
            }
            D += '], displayObjs:[';
            for (C = 0; C < k.length; C++) {
                if (k[C] === undefined) {
                    continue;
                }
                D += '\t{objTypeID:' + k[C].member9764 + '}\n';
            }
            D += ']}\n';
            return D;
        };
        var o = function (E, D) {
            var C = E.member9579();
            if (E.member7079() === 1) {
                C *= D + 1;
            }
            return C;
        };
        var t = function (E, C) {
            var D = i.member2970.member3227(Class131.member1214.member1204, E.member9764);
            var F = i.member2970.member3227(Class131.member1214.member1204, C.member9764);
            if (D === member47 && F !== member47) {
                return 1;
            }
            if (D !== member47 && F === member47) {
                return -1;
            }
            if (D === member47 && F === member47) {
                return 0;
            }
            return o(F, C.member1917) - o(D, E.member1917);
        };
        var s = function (C, D) {
            if (k[D] !== undefined && k[D].member2621 !== null) {
                k[D].member2621.member511();
                k[D].member2621 = null;
            }
            k[D] = C;
        };
        var A = function () {
            if (n.member4085() === null) {
                return;
            }
            for (var D = 0; D < k.length; D++) {
                s(undefined, D);
            }
            var G = -1, C = -1, H = null;
            for (var D = 0; D < j.length; D++) {
                var F = j[D];
                var E = F.member9764;
                if (G === -1) {
                    G = E;
                    s(F, 0);
                    continue;
                }
                if (C === -1 && E !== G) {
                    C = E;
                    s(F, 1);
                    continue;
                }
                if (E !== G && E !== C) {
                    H = F;
                }
            }
            if (H !== null) {
                s(H, 2);
            }
        };
        var z = function () {
            if (!v) {
                j.sort(t);
                if (i.member2970.member3227(Class131.member1214.member1204, j[j.length - 1].member9764) !== member47) {
                    v = true;
                }
                A();
            }
        };
        n.member2026 = function (C) {
            n.member3320().member344(C);
        };
        var y = n.member2026;
        B = undefined;
        return n;
    };
    return a;
}();