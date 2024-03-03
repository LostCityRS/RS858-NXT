import { Class291 } from 'Class291.js';
import { Class432 } from 'Class432.js';
import { CoordFine } from 'Class290.js';
import { Class803 } from 'Class803.js';
import { Class86 } from 'Class86.js';
import { Class730 } from 'Class730.js';
import { Class377 } from 'Class377.js';
import { Class733 } from 'Class733.js';
import { Class415 } from 'Class415.js';
export var Class804 = function () {
    var s = {};
    var u;
    var a = Class291();
    var m = true;
    var k = 1024;
    var B = 0;
    var o;
    var n = {};
    var A = 0;
    var g = new Array(k);
    var q = 0;
    var C = new Array(k);
    var j = 0;
    var r = new Array(k);
    var h = 0;
    var t = function (E) {
        u = E;
    };
    s.member25 = t;
    var z = function (F, E) {
        n = {};
        A = 0;
        q = 0;
    };
    s.member7183 = z;
    var v = function () {
        for (var G = 0; G < A; G++) {
            var E = g[G];
            var F = n[E];
            if (F === undefined) {
                throw new Error('915 ' + E);
            }
            F.member7825();
            if (F.member3429()) {
                F.member7853();
            }
        }
    };
    s.member487 = v;
    var D = function () {
        for (var G = 0; G < A; G++) {
            var E = g[G];
            var F = n[E];
            if (F === undefined) {
                throw new Error('916 ' + E);
            }
            F.member7825();
            F.member4380();
        }
    };
    s.member486 = D;
    s.member6457 = function (F) {
        for (var H = 0; H < A; H++) {
            var E = g[H];
            var G = n[E];
            if (G === undefined) {
                throw new Error('917 ' + E);
            }
            F(G);
        }
    };
    s.member776 = function () {
        h = 0;
        return b();
    };
    var d = s.member776;
    s.member777 = function () {
        if (h >= A) {
            return undefined;
        }
        var E = g[h];
        var F = n[E];
        if (F === undefined) {
            throw new Error('918 ' + E);
        }
        h++;
        return F;
    };
    var b = s.member777;
    s.member6451 = function (E) {
        return n[E];
    };
    var c = function (G, H) {
        B++;
        q = 0;
        j = 0;
        G.enterBitMode();
        i(G);
        y(G, H);
        G.leaveBitMode();
        x(G);
        for (var J = 0; J < q; J++) {
            var I = C[J];
            var E = n[I];
            if (E !== undefined && E.member7793() !== B) {
                if (u.member9179.isOpen() && u.member9179.member9851(I)) {
                    u.member9179.member9544();
                }
                E.member3320().member4189();
                E.member512();
                n[I] = undefined;
            }
        }
        if (G.getPos() !== H) {
            throw new Error('919 ' + G.getPos() + '919 ' + H);
        }
        for (var J = 0; J < A; J++) {
            if (n[g[J]] === undefined) {
                throw new Error('920 ' + J + '920 ' + A);
            }
        }
        for (var F in n) {
            var E = n[F];
            if (E !== undefined && E.member7793() !== B) {
                throw new Error('921 ' + E.slotID);
            }
        }
    };
    s.member9999 = c;
    var i = function (I) {
        var J = I.gBit(8);
        if (J < A) {
            for (var L = J; L < A; L++) {
                C[q++] = g[L];
            }
        }
        if (J > A) {
            throw new Error('922 ');
        }
        A = 0;
        for (var L = 0; L < J; L++) {
            var E = g[L];
            var F = n[E];
            var H = I.gBit(1);
            if (H === 0) {
                g[A++] = E;
                F.member7794(B);
                continue;
            }
            var G = I.gBit(2);
            if (G === 0) {
                g[A++] = E;
                F.member7794(B);
                r[j++] = E;
                continue;
            }
            if (G === 1) {
                g[A++] = E;
                F.member7794(B);
                e(F, I.gBit(3), Class432.member6229);
                var K = I.gBit(1);
                if (K === 1) {
                    r[j++] = E;
                }
                continue;
            }
            if (G === 2) {
                g[A++] = E;
                F.member7794(B);
                if (I.gBit(1) === 1) {
                    e(F, I.gBit(3), Class432.member6230);
                    e(F, I.gBit(3), Class432.member6230);
                } else {
                    e(F, I.gBit(3), Class432.member6228);
                }
                var K = I.gBit(1);
                if (K === 1) {
                    r[j++] = E;
                }
                continue;
            }
            if (G === 3) {
                C[q++] = E;
                continue;
            }
        }
    };
    var e = function (F, G, H) {
        var E = CoordFine();
        F.member7839(E);
        if (G === Class803.member10519) {
            E.member3454[2] += Class86.member718;
        } else if (G === Class803.member10520) {
            E.member3454[0] += Class86.member718;
            E.member3454[2] += Class86.member718;
        } else if (G === Class803.member10521) {
            E.member3454[0] += Class86.member718;
        } else if (G === Class803.member10522) {
            E.member3454[0] += Class86.member718;
            E.member3454[2] -= Class86.member718;
        } else if (G === Class803.member10523) {
            E.member3454[2] -= Class86.member718;
        } else if (G === Class803.member10524) {
            E.member3454[0] -= Class86.member718;
            E.member3454[2] -= Class86.member718;
        } else if (G === Class803.member10525) {
            E.member3454[0] -= Class86.member718;
        } else if (G === Class803.member10526) {
            E.member3454[0] -= Class86.member718;
            E.member3454[2] += Class86.member718;
        }
        F.member7779(E, H);
    };
    var y = function (H, J) {
        while (true) {
            if (H.getRemainingBits(J) < Class730.member10112) {
                break;
            }
            var N = H.gBit(Class730.member10112);
            if (N === Class730.member10113 - 1) {
                break;
            }
            var F = false;
            var M = n[N];
            if (M === undefined) {
                var R = Class377();
                M = Class733({
                    node: R,
                    parent: null,
                    member4070: null,
                    level: -1,
                    member7710: u,
                    slotID: N
                });
                R.member4185(M);
                n[N] = M;
                F = true;
            }
            g[A++] = N;
            M.member7794(B);
            var L = H.gBit(1);
            if (L === 1) {
                r[j++] = N;
            }
            var G = H.gBit(o);
            if (G > (1 << o - 1) - 1) {
                G -= 1 << o;
            }
            M.member10150(H.gBit(Class730.member10115));
            var K = Class415.member4776(H.gBit(3));
            var E = H.gBit(2);
            var Q = H.gBit(o);
            if (Q > (1 << o - 1) - 1) {
                Q -= 1 << o;
            }
            var O = H.gBit(1);
            if (F) {
                M.member7879(K);
            }
            var S = u.member7135().member6453();
            S.member7837(a);
            var I = Class86.member718 / 2;
            if (!F) {
                I *= M.member7795();
            }
            var P = CoordFine({
                level: E,
                x: (a.x + Q) * Class86.member718 + I,
                member756: (a.member756 + G) * Class86.member718 + I
            });
            M.member7849(P, O === 1);
            if (F) {
                M.member7796();
            }
        }
    };
    var x = function (H) {
        for (var I = 0; I < j; I++) {
            var E = r[I];
            var F = n[E];
            var G = H.g2();
            F.member7802(H, G);
        }
    };
    s.member10202 = function (E) {
        o = E;
    };
    return s;
}();