import { Class290 } from 'Class290.js';
import { Class291 } from 'Class291.js';
import { Class486 } from 'Class486.js';
import { Class377 } from 'Class377.js';
import { Class499 } from 'Class499.js';
import { Class86 } from 'Class86.js';
import { Class432 } from 'Class432.js';
export var Class524 = function () {
    var u = {};
    var z;
    var x = Class290();
    var v = false;
    u.member8448 = 2048;
    var A = u.member8448;
    var B = new Array(A);
    var i = 0;
    u.member8046 = function () {
        return i;
    };
    var k = new Array(A);
    var h = 0;
    var m = new Array(A);
    var g = new Array(0);
    var q = 0;
    var t = new Array(A);
    var o = 0;
    var y = function (H) {
        z = H;
    };
    u.member25 = y;
    var D = function (K, J) {
        i = 0;
        for (var H = 0; H < A; H++) {
            if (B[H] !== undefined) {
                if (B[H].member8449 !== undefined) {
                    var I = B[H].member8449.member7136();
                    if (I !== null && I !== undefined) {
                        I.member512();
                    }
                    B[H].member8449.member512();
                }
                B[H] = undefined;
            }
        }
    };
    u.member7183 = D;
    var C = function () {
        if (g.length > 0) {
            j();
        }
        for (var J = 0; J < i; J++) {
            var H = k[J];
            var I = B[H].member8449;
            if (I === undefined) {
                throw new Error('1598 ' + H);
            }
            I.member7825();
            if (I.member3429()) {
                I.member7853();
            }
        }
    };
    u.member487 = C;
    var G = function () {
        for (var J = 0; J < i; J++) {
            var H = k[J];
            var I = B[H].member8449;
            if (I === undefined) {
                throw new Error('1599 ' + H);
            }
            I.member7825();
            I.member4380();
        }
    };
    u.member486 = G;
    u.member6456 = function (I) {
        for (var K = 0; K < i; K++) {
            var H = k[K];
            var J = B[H].member8449;
            if (J === undefined) {
                throw new Error('1600 ' + H);
            }
            I(J);
        }
    };
    u.member776 = function () {
        o = 0;
        return d();
    };
    var e = u.member776;
    u.member777 = function () {
        if (o >= i) {
            return undefined;
        }
        var H = k[o];
        var I = B[H].member8449;
        if (I === undefined) {
            throw new Error('1601 ' + H);
        }
        o++;
        return I;
    };
    var d = u.member777;
    u.member8450 = function (H, J) {
        for (var L = 0; L < i; L++) {
            var I = k[L];
            var K = B[I].member8449;
            if (K === undefined) {
                throw new Error('1602 ' + I);
            }
            if (H(K, J)) {
                return K;
            }
        }
        return null;
    };
    var E = function (H) {
        if (B[H] !== undefined) {
            return B[H].member8449;
        } else {
            return undefined;
        }
    };
    u.member6453 = E;
    u.member8451 = function (H) {
        if (B[H] !== undefined) {
            return B[H].member7804;
        } else {
            return -1;
        }
    };
    u.member8452 = function (H, I) {
        if (B[H] !== undefined) {
            B[H].member7804 = I;
        }
    };
    u.member8039 = function (H, I) {
        if (B[H] !== undefined) {
            B[H].member8453 = I;
        }
    };
    u.member8042 = function (H, I) {
        if (B[H] !== undefined) {
            B[H].member8454 = I;
        }
    };
    var b = function (J, O) {
        J.member1096();
        var Q = z.member7135().member7649();
        var R = J.member1098(30);
        B[Q] = {
            position: Class291(R),
            member7777: 0,
            member8455: -1,
            member8456: Class486.member7729,
            member8457: false,
            member8458: false,
            member8459: false,
            member7804: 0
        };
        if (true) {
            var N = Class377();
            var M = B[Q].member8449 = Class499({
                node: N,
                parent: null,
                member4070: null,
                level: B[Q].position.level,
                member7710: z,
                slotID: Q
            });
            M.member7849(Class290(B[Q].position.level, B[Q].position.x * Class86.member718 + M.member7795() * Class86.member718 / 2, B[Q].position.member756 * Class86.member718 + M.member7795() * Class86.member718 / 2));
            N.member4185(M);
        } else {
        }
        i = 0;
        k[i++] = Q;
        h = 0;
        for (var P = 1; P < A; P++) {
            if (P === Q) {
                continue;
            }
            var H = J.member1098(18);
            var I = H >> 16 & 3;
            var L = H >> 8 & 255;
            var K = H & 255;
            B[P] = {
                position: Class291(I << 28 | L << 14 | K),
                member7777: 0,
                member8455: -1,
                member8456: Class486.member7729,
                member8457: false,
                member8458: false,
                member8459: false,
                member7804: Class432.member6227
            };
            m[h++] = P;
        }
        J.member1100();
    };
    u.member8460 = b;
    var a = function (H, I) {
        q = 0;
        s(H);
        n(H);
        if (H.member1047() !== I) {
            throw new Error('1603 ' + H.member1047() + '1603 ' + I);
        }
    };
    u.member8461 = a;
    var s = function (J) {
        if (false) {
        }
        var K = 0;
        J.member1096();
        for (var L = 0; L < i; L++) {
            var H = k[L];
            if (!B[H].member8459) {
                if (K > 0) {
                    K--;
                    B[H].member8458 = true;
                    continue;
                }
                var I = J.member1098(1);
                if (I === 0) {
                    K = F(J);
                    B[H].member8458 = true;
                    continue;
                }
                r(J, H);
            }
        }
        J.member1100();
        if (K !== 0) {
            throw new Error('1604 ' + K);
        }
        J.member1096();
        for (var L = 0; L < i; L++) {
            var H = k[L];
            if (B[H].member8459) {
                if (K > 0) {
                    K--;
                    B[H].member8458 = true;
                    continue;
                }
                var I = J.member1098(1);
                if (I === 0) {
                    K = F(J);
                    B[H].member8458 = true;
                    continue;
                }
                r(J, H);
            }
        }
        J.member1100();
        if (K !== 0) {
            throw new Error('1605 ' + K);
        }
        J.member1096();
        for (var L = 0; L < h; L++) {
            var H = m[L];
            if (B[H].member8459) {
                if (K > 0) {
                    K--;
                    B[H].member8458 = true;
                    continue;
                }
                var I = J.member1098(1);
                if (I === 0) {
                    K = F(J);
                    B[H].member8458 = true;
                    continue;
                }
                if (c(J, H)) {
                    B[H].member8458 = true;
                }
            }
        }
        J.member1100();
        if (K !== 0) {
            throw new Error('1606 ' + K);
        }
        J.member1096();
        for (var L = 0; L < h; L++) {
            var H = m[L];
            if (!B[H].member8459) {
                if (K > 0) {
                    K--;
                    B[H].member8458 = true;
                    continue;
                }
                var I = J.member1098(1);
                if (I === 0) {
                    K = F(J);
                    B[H].member8458 = true;
                    continue;
                }
                if (c(J, H)) {
                    B[H].member8458 = true;
                }
            }
        }
        J.member1100();
        if (K !== 0) {
            throw new Error('1607 ' + K);
        }
        i = 0;
        h = 0;
        for (var H = 1; H < A; H++) {
            if (B[H].member8458) {
                B[H].member8459 = true;
            } else {
                B[H].member8459 = false;
            }
            B[H].member8458 = false;
            if (B[H].member8449 !== undefined) {
                k[i++] = H;
            } else {
                m[h++] = H;
            }
        }
    };
    var F = function (J) {
        var I = J.member1098(2);
        var H;
        if (I === 0) {
            H = 0;
        } else if (I === 1) {
            H = J.member1098(5);
        } else if (I === 2) {
            H = J.member1098(8);
        } else {
            H = J.member1098(11);
        }
        return H;
    };
    var r = function (U, K) {
        if (false) {
        }
        var I = z.member6101.member6430();
        var aa = U.member1098(1) === 1;
        if (aa) {
            t[q++] = K;
        }
        var Y = U.member1098(2);
        var L = B[K].member8449;
        if (Y === 0) {
            if (aa) {
                return;
            }
            if (K === z.member7135().member7649()) {
                throw new Error('1608 ');
            }
            B[K].member8449.member7838(x);
            var ad = B[K].position;
            ad.x = Math.floor(x.member3454[0] / Class86.member730);
            ad.member756 = Math.floor(x.member3454[2] / Class86.member730);
            ad.member2017 = B[K].member7804;
            if (false) {
            }
            B[K].member8449.member3320().member4189();
            B[K].member8449.member512();
            B[K].member8449 = undefined;
            if (U.member1098(1) !== 0) {
                c(U, K);
            }
            return;
        }
        if (Y === 1) {
            var P = U.member1098(3);
            var H = U.member1098(1) === 1;
            L.member7839(x);
            var O = x.member3454[0], N = x.member3454[2];
            if (H) {
                var V = U.member1098(2);
                if (V === 0) {
                    N += Class86.member718;
                } else if (V === 1) {
                    O -= Class86.member718;
                } else if (V === 2) {
                    O += Class86.member718;
                } else if (V === 3) {
                    N -= Class86.member718;
                }
                O = x.member3454[0];
                N = x.member3454[2];
            }
            if (P === 0) {
                O -= Class86.member718;
                N -= Class86.member718;
            } else if (P === 1) {
                N -= Class86.member718;
            } else if (P === 2) {
                O += Class86.member718;
                N -= Class86.member718;
            } else if (P === 3) {
                O -= Class86.member718;
            } else if (P === 4) {
                O += Class86.member718;
            } else if (P === 5) {
                O -= Class86.member718;
                N += Class86.member718;
            } else if (P === 6) {
                N += Class86.member718;
            } else if (P === 7) {
                O += Class86.member718;
                N += Class86.member718;
            }
            var T = Class290(x.level, O, N);
            L.member7779(T, B[K].member7804);
            if (false) {
            }
            return;
        }
        if (Y == 2) {
            var ac = U.member1098(4);
            L.member7839(x);
            var O = x.member3454[0], N = x.member3454[2];
            if (ac === 0) {
                O -= Class86.member718 * 2;
                N -= Class86.member718 * 2;
            } else if (ac === 1) {
                O -= Class86.member718;
                N -= Class86.member718 * 2;
            } else if (ac === 2) {
                N -= Class86.member718 * 2;
            } else if (ac === 3) {
                O += Class86.member718;
                N -= Class86.member718 * 2;
            } else if (ac === 4) {
                O += Class86.member718 * 2;
                N -= Class86.member718 * 2;
            } else if (ac === 5) {
                O -= Class86.member718 * 2;
                N -= Class86.member718;
            } else if (ac === 6) {
                O += Class86.member718 * 2;
                N -= Class86.member718;
            } else if (ac === 7) {
                O -= Class86.member718 * 2;
            } else if (ac === 8) {
                O += Class86.member718 * 2;
            } else if (ac === 9) {
                O -= Class86.member718 * 2;
                N += Class86.member718;
            } else if (ac === 10) {
                O += Class86.member718 * 2;
                N += Class86.member718;
            } else if (ac === 11) {
                O -= Class86.member718 * 2;
                N += Class86.member718 * 2;
            } else if (ac === 12) {
                O -= Class86.member718;
                N += Class86.member718 * 2;
            } else if (ac === 13) {
                N += Class86.member718 * 2;
            } else if (ac === 14) {
                O += Class86.member718;
                N += Class86.member718 * 2;
            } else if (ac === 15) {
                O += Class86.member718 * 2;
                N += Class86.member718 * 2;
            }
            var T = Class290(x.level, O, N);
            L.member7779(T, B[K].member7804);
            if (false) {
            }
            return;
        }
        var X = U.member1098(1);
        if (X === 0) {
            var S = U.member1098(15);
            var Q = S >> 12 & 7;
            var Z = S >> 10 & 3;
            var R = S >> 5 & 31;
            if (R > 15) {
                R -= 32;
            }
            var ab = S & 31;
            if (ab > 15) {
                ab -= 32;
            }
            L.member7839(x);
            var O = x.member3454[0] + R * Class86.member718, N = x.member3454[2] + ab * Class86.member718;
            var T = Class290(x.level + Z & 3, O, N);
            if (Q - 1 == Class432.member6231) {
                L.member7849(T, true);
            } else {
                B[K].member7804 = Q - 1;
                L.member7779(T, B[K].member7804);
            }
            L.member4082(x.level + Z & 3);
            if (false) {
            }
            return;
        }
        var Q = U.member1098(3);
        var J = U.member1098(30);
        var Z = J >> 28 & 3;
        var M = (J >> 14 & 16383) * Class86.member718;
        var W = (J & 16383) * Class86.member718;
        L.member7839(x);
        var O = x.member3454[0] + M & 16384 * Class86.member718 - 1;
        var N = x.member3454[2] + W & 16384 * Class86.member718 - 1;
        var T = Class290(x.level + Z & 3, O, N);
        if (Q - 1 == Class432.member6231) {
            L.member7849(T, true);
        } else {
            B[K].member7804 = Q - 1;
            L.member7779(T, B[K].member7804);
        }
        L.member4082(x.level + Z & 3);
        if (false) {
        }
    };
    var c = function (R, J) {
        if (false) {
        }
        var S = R.member1098(2);
        if (S === 0) {
            if (R.member1098(1) !== 0) {
                c(R, J);
            }
            var T = R.member1098(6);
            var ab = R.member1098(6);
            var V = R.member1098(1) === 1;
            if (V) {
                t[q++] = J;
            }
            if (B[J].member8449 !== undefined) {
                throw new Error('1609 ');
            }
            if (true) {
                var K = B[J].position;
                var Y = (K.x << 6) + T, X = (K.member756 << 6) + ab;
                var H = Class377();
                var L = B[J].member8449 = Class499({
                    node: H,
                    parent: null,
                    member4070: null,
                    level: K.level,
                    member7710: z,
                    slotID: J
                });
                H.member4185(L);
                if (B[J].member8453 !== undefined && !L.member8024(B[J].member8453)) {
                    g.push(J);
                }
                if (B[J].member8454 !== undefined) {
                    L.member8029(B[J].member8454);
                }
                if (false) {
                }
                L.member7849(Class290(B[J].position.level, Y * Class86.member718 + L.member7795() * Class86.member718 / 2, X * Class86.member718 + L.member7795() * Class86.member718 / 2));
            } else {
            }
            return true;
        }
        if (S === 1) {
            var U = R.member1098(2);
            B[J].position.level = B[J].position.level + U & 3;
            if (false) {
            }
            return false;
        }
        if (S === 2) {
            var aa = R.member1098(5);
            var U = aa >> 3 & 3;
            var M = aa & 7;
            var I = B[J].position.level + U & 3;
            var Q = B[J].position.x & 255, P = B[J].position.member756 & 255;
            if (M == 0) {
                Q--;
                P--;
            }
            if (M == 1) {
                P--;
            }
            if (M == 2) {
                Q++;
                P--;
            }
            if (M == 3) {
                Q--;
            }
            if (M == 4) {
                Q++;
            }
            if (M == 5) {
                Q--;
                P++;
            }
            if (M == 6) {
                P++;
            }
            if (M == 7) {
                Q++;
                P++;
            }
            if (false) {
            }
            B[J].position.level = I;
            B[J].position.x = Q;
            B[J].position.member756 = P;
            return false;
        }
        var Z = R.member1098(20);
        var N = Z >> 18 & 3;
        var U = Z >> 16 & 3;
        var O = Z >> 8 & 255;
        var W = Z & 255;
        var I = B[J].position.level + U & 3;
        var Q = B[J].position.x + O & 255, P = B[J].position.member756 + W & 255;
        if (false) {
        }
        B[J].member2017 = N - 1;
        B[J].position.level = I;
        B[J].position.x = Q;
        B[J].position.member756 = P;
        return false;
    };
    var n = function (J) {
        for (var L = 0; L < q; L++) {
            var H = t[L];
            var K = B[H].member8449;
            var I = J.member608();
            if (false) {
            }
            K.member7802(J, I);
        }
    };
    var j = function () {
        for (var H = 0; H < g.length; H++) {
            var I = g[H];
            if (I === undefined || B[I].member8453 === undefined || B[I].member8449 == undefined || B[I].member8449.member8024(B[I].member8453)) {
                g.splice(H, 1);
                H--;
                continue;
            }
        }
    };
    return u;
}();