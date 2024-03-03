import { Class673 } from 'Class673.js';
import { Class423 } from 'Class423.js';
import { Class302 } from 'Class302.js';
import { Class301 } from 'Class301.js';
import { Class298 } from 'Class298.js';
export var Class676 = function () {
    var a = function (q) {
        if (q === undefined || q === null) {
            throw new Error('1142 ');
        }
        var A = q;
        var x = A.member433.member3640;
        var n = A.member9179;
        var y = Class673(A);
        var r = 20;
        var b = 0;
        y.member9547 = function (F) {
            b = F;
        };
        var z = 0;
        y.member9548 = function (F) {
            z = F;
        };
        var h = 0;
        y.member9549 = function (F) {
            h = F;
        };
        var C = 0;
        y.member9550 = function (F) {
            C = F;
        };
        var m = -1;
        y.member9552 = function (F) {
            m = F;
        };
        var o = member47;
        var D = -1;
        y.member9551 = function (F) {
            D = F;
        };
        var j = member47;
        var c = -1;
        y.member9554 = function (F) {
            c = F;
        };
        var u = member47;
        var s = -1;
        y.member9553 = function (F) {
            s = F;
        };
        var B = member47;
        var d = -1;
        y.member9555 = function (F) {
            d = F;
        };
        var g = member47;
        var e = 0;
        y.member9556 = function (F) {
            e = F;
        };
        var v = 0;
        y.member9557 = function (F) {
            v = F;
        };
        y.member9797 = function () {
            return r + y.member9789();
        };
        y.member9796(26);
        var i = y.member9798;
        y.member9798 = function (F) {
            i(F);
            member9790(y.member3598().member3599() + 1);
            member9792(y.member3598().member3603());
            member9794(20 + y.member9789());
            n.member9815();
        };
        var E = function (G) {
            var F = Class423.member6131(G, false);
            if (F === member47) {
                return member47;
            } else {
                return F[0];
            }
        };
        var t = function (O, L, H, Q, I, P) {
            var R = 255 - z;
            if (R < 0) {
                R = 0;
            }
            var K = R | b << 8;
            var N = I.member3598();
            if (j === member47) {
                j = E(D);
            }
            if (o === member47) {
                o = E(m);
            }
            if (j === member47 || o === member47) {
                x.member3796(O, L, H, r, K, R === 255);
            } else {
                var M = (H - o.width * 2) / j.width;
                var G = j.member3606.member1539();
                var F = G.member1285(j.member3606.member1494());
                for (var J = 0; J < M; J++) {
                    x.member3623(O + o.width + J * j.width, L, j.width, j.height, 4294967295, F.member493, F.member494, F.member495, F.member496, G.member1277(), false);
                }
                G = o.member3606.member1539();
                F = G.member1285(o.member3606.member1494());
                x.member3623(O, L, o.width, o.height, 4294967295, F.member493, F.member494, F.member495, F.member496, G.member1277(), false);
                x.member3623(O + H - o.width, L, o.width, o.height, 4294967295, F.member495, F.member494, F.member493, F.member496, G.member1277(), false);
            }
            Class302.member3601(P, O + 3, L + 4, I, undefined, Class301.member3594, e << 8 | 255);
            x.member3796(O, L + r, H, Q - r, K, R === 255);
        };
        var k = function (M, K, I, N) {
            if (B === member47) {
                B = E(s);
            }
            if (u === member47) {
                u = E(c);
            }
            if (g === member47) {
                g = E(d);
            }
            if (B !== member47 && u !== member47 && g !== member47) {
                var L = (I - g.width * 2) / B.width;
                var H = B.member3606.member1539();
                var G = H.member1285(B.member3606.member1494());
                for (var J = 0; J < L; J++) {
                    x.member3623(M + g.width + J * B.width, K + N - B.height, B.width, B.height, 4294967295, G.member493, G.member494, G.member495, G.member496, H.member1277(), false);
                }
                var F = (N - r - g.height) / u.height;
                H = u.member3606.member1539();
                G = H.member1285(u.member3606.member1494());
                for (var J = 0; J < F; J++) {
                    x.member3623(M, K + r + J * u.height, u.width, u.height, 4294967295, G.member493, G.member494, G.member495, G.member496, H.member1277(), false);
                    x.member3623(M + I - u.width, K + r + J * u.height, u.width, u.height, 4294967295, G.member495, G.member494, G.member493, G.member496, H.member1277(), false);
                }
                H = g.member3606.member1539();
                G = H.member1285(g.member3606.member1494());
                x.member3623(M, K + N - g.height, g.width, g.height, 4294967295, G.member493, G.member494, G.member495, G.member496, H.member1277(), false);
                x.member3623(M + I - g.width, K + N - g.height, g.width, g.height, 4294967295, G.member495, G.member494, G.member493, G.member496, H.member1277(), false);
            }
        };
        y.member9806 = function (H, G, F, S, Q, M, K, V, U, N, O, aa, I, ad) {
            var R = y.member3639();
            if (R === null) {
                return;
            }
            var P = R.member3598();
            t(H, G, F, S, R, n.member6946);
            var L = 255 - C;
            if (L < 0) {
                L = 0;
            }
            var Y = L | h << 8;
            var Z = Class298.member3558();
            if (!K) {
                if (Z.x > H && Z.x < H + F) {
                    var J = n.member9816(Z, M, G);
                    if (J != -1 && Q[J].member9800()) {
                        var T = G + y.member9797() + (M - 1 - J) * y.member9788();
                        x.member3796(H, T, F, y.member9788(), Y, L === 255);
                    }
                }
            } else {
                if (Z.x > H && Z.x < H + F) {
                    var J = n.member9816(Z, ad, G);
                    var T = G + y.member9797() + (ad - 1 - J) * y.member9788();
                    if (J !== -1) {
                        x.member3796(H, T, F, y.member9788(), Y, L === 255);
                    }
                }
                if (aa !== undefined) {
                    t(V, U, N, O, R, aa.member9808());
                    if (Z.x > V && Z.x < V + N) {
                        var J = n.member9816(Z, aa.member9813(), U);
                        var T = U + y.member9797() + (aa.member9813() - 1 - J) * y.member9788();
                        if (J !== -1) {
                            x.member3796(V, T, N, y.member9788(), Y, L === 255);
                        }
                    }
                }
            }
            k(H, G, F, S);
            if (!K) {
                for (var ac = 0; ac < M; ac++) {
                    var T = G + y.member9797() + (M - 1 - ac) * y.member9788();
                    y.member9799(Z, H, G, F, S - 3, T, Q[ac], e << 8 | 255, v << 8 | 255);
                }
            } else {
                var ab = 0;
                for (var W = I.member776(); W !== null; W = I.member777()) {
                    var T = G + y.member9797() + ab++ * y.member9788();
                    if (W.member9813() === 1) {
                        y.member9799(Z, H, G, F, S - 3, T, W.member9811.member776(), e << 8 | 255, v << 8 | 255);
                    } else {
                        y.member9807(Z, H, G, F, S - 3, T, W, e << 8 | 255, v << 8 | 255);
                    }
                }
                if (aa !== undefined) {
                    k(V, U, N, O);
                    ab = 0;
                    for (var X = aa.member9811.member776(); X !== null; X = aa.member9811.member777()) {
                        var T = U + y.member9797() + ab++ * y.member9788();
                        y.member9799(Z, V, U, N, O - 3, T, X, e << 8 | 255, v << 8 | 255);
                    }
                }
            }
        };
        return y;
    };
    return a;
}();