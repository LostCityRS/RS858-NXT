import { Class162 } from 'Class162.js';
import { Class41 } from 'Class41.js';
import { Class140 } from 'Class140.js';
import { Class37 } from 'Class37.js';
import { Class385 } from 'Class385.js';
import { Class372 } from 'Class372.js';
import { Class374 } from 'Class374.js';
import { Class131 } from 'Class131.js';
import { Class288 } from 'Class288.js';
import { Class386 } from 'Class386.js';
import { Class50 } from 'Class50.js';
import { Class387 } from 'Class387.js';
import { Class49 } from 'Class49.js';
import { Class132 } from 'Class132.js';
import { Class155 } from 'Class155.js';
import { Class72 } from 'Class72.js';
import { Class376 } from 'Class376.js';
import { Class394 } from 'Class394.js';
export var Class696 = function () {
    var d = Class162(function () {
        return Class41.create();
    }, function (e) {
        e.member313();
    }, undefined, 50);
    var a = Class162(function () {
        return Class140.create();
    }, function (e) {
        e.member313();
    }, undefined, 50);
    var c = Class162(function () {
        return Class37.create();
    }, function (e) {
        e.member313();
    }, undefined, 25);
    var b = function (h) {
        var N = {};
        var X;
        var U;
        var C;
        var y;
        var B;
        var z;
        var T;
        var S;
        var s;
        var r;
        var R;
        var o;
        var x;
        var v;
        var u;
        var t;
        var K = null;
        var V = null;
        var H = null;
        var W = null;
        var L = Class385();
        var O = undefined;
        var i = false;
        var P = 0;
        var E = 0;
        var n = 0;
        var j = 0;
        var I = 0;
        var A = d.get();
        var G = d.get();
        var J = a.get();
        var D = a.get();
        var m = c.get();
        var q = [
            1,
            0,
            0
        ];
        var g = [
            0,
            1,
            0
        ];
        if (h.node !== undefined && h.parent !== undefined && h.member4070 !== undefined && h.level !== undefined && h.member7710 !== undefined && h.member6432 !== undefined && h.member873 !== undefined && h.member875 !== undefined && h.member6433 !== undefined && h.member6434 !== undefined && h.member6435 !== undefined && h.member6436 !== undefined && h.member6437 !== undefined && h.member6438 !== undefined && h.member6439 !== undefined && h.member6440 !== undefined && h.member6441 !== undefined && h.member6442 !== undefined && h.member6443 !== undefined && h.member1788 !== undefined) {
            N = new Class372(h.node, h.parent, h.member4070, Class374.member4137, h.level);
            X = h.member7710;
            U = h.member6432;
            C = h.member873;
            y = h.member875;
            B = h.member6433;
            z = h.member6434;
            x = h.member6435;
            v = h.member6436;
            u = h.member6437;
            t = h.member6438;
            T = h.member6439;
            S = h.member6440;
            s = h.member6441;
            r = h.member6442;
            o = h.member6443;
            if (h.member1788 === 255) {
                R = -1;
            } else {
                R = h.member1788 * (2 * Math.PI / 255);
            }
        } else {
            throw new Error('1393 ');
        }
        N.member1999 = function (Y) {
            return Y > y;
        };
        N.member4380 = function (aa) {
            if (K === null) {
                K = X.member2970.member3227(Class131.member1217.member1204, U);
                if (K === member47) {
                    return false;
                }
            }
            if (V === null) {
                V = K.member7075(X.member433);
                if (V === null) {
                    return false;
                }
                V.member510();
            }
            if (H === null && V.member2101() !== undefined) {
                H = Class288({ member433: X.member433 });
            }
            i = true;
            if (W === null) {
                var Y = K.member4609();
                if (Y === -1) {
                    return true;
                }
                W = Class386({
                    id: Y,
                    member2970: X.member2970,
                    member4344: Class50.member369
                });
            }
            if (!W.member1540()) {
                var Z = K.member2008();
                if (Z === null) {
                    return true;
                }
                W.member4380(X.member2970, X.member4409, Class387.member104, U, Z, aa);
            }
            W.member4224(aa, 0);
            return true;
        };
        var M = N.member4380;
        N.member952 = function (ad, ac, ab, aa, Z) {
            Class49.member334(ab, m);
            V.member952(ad, aa, ac, ab, m, O, false, Z, undefined);
            if (H !== null) {
                var Y = Class132.member1266();
                ad.member4228(Class155.member96, false);
                if (!Y.member522(Class72.member499)) {
                    H.member952(ad, ac);
                }
                ad.member4229(Class155.member96);
            }
        };
        N.member486 = function (ac, ab, aa, Z) {
            Class49.member334(ab, m);
            V.member1630(aa, ac, ab, m, O, false, Z, undefined);
            if (H !== null) {
                var Y = Class132.member1266();
                if (!Y.member522(Class72.member499) && !Y.member522(Class72.member96)) {
                    H.member486(ac);
                }
            }
        };
        N.member3437 = function (Y, aa, ab, ac, Z) {
            if (N.member4103(Y)) {
                if (!i || Z < C) {
                    N.member4105(false);
                    return;
                }
                if (W !== null && W.member1540()) {
                    W.member1998(L, false);
                    O = L;
                } else {
                    O = undefined;
                }
                N.member4102();
                if (H !== null) {
                    V.member2128(H, aa, O);
                }
                N.member4105(true);
            } else if (!N.member4104()) {
                return;
            }
            N.member4107(true);
        };
        N.member4102 = function () {
            if (W !== null && W.member1843()) {
                N.member4101(Class376.member4172);
                return;
            }
            var Y = 0;
            if (H !== null) {
                Y |= Class376.member4171;
            }
            if (V !== null) {
                if (V.member2121()) {
                    Y |= Class376.member4171;
                }
                if (V.member2122()) {
                    Y |= Class376.member4169;
                }
            }
            N.member4101(Y);
        };
        N.member9909 = function (Z) {
            if (Z >= C) {
                k();
                N.member3320().member344(A);
                A[0] += P;
                A[2] += E;
                if (x) {
                    A[1] = N.member4085().member4114().member4115(N.member4110(), G[0], G[2], true) + v;
                } else if (R !== -1) {
                    A[1] += j + 0.5 * I;
                    j += I;
                } else {
                    A[1] += j;
                }
                N.member3320().member4193(A);
                var Y = Math.atan2(j, n);
                Class140.member1353(q, Y, J);
                var aa = Class394.member4543(P, E);
                Class140.member1353(g, aa, D);
                Class140.member323(D, J);
                N.member3320().member4197(D);
            }
        };
        var k = function () {
            var Z = Q(z);
            var ab = 0;
            if (Z !== undefined) {
                Z.member2026(G);
                ab = Z.member4110();
            } else if (s !== undefined && r !== undefined) {
                G[0] = s;
                G[2] = r;
                ab = N.member4110();
            } else {
                return;
            }
            var aa = X.member6116.member7139();
            N.member3320().member344(A);
            var ac = y + 1 - aa;
            P = (G[0] - A[0]) / ac;
            E = (G[2] - A[2]) / ac;
            n = Math.sqrt(P * P + E * E);
            if (R !== -1) {
                var Y = N.member4085().member4114().member4115(ab, G[0], G[2], true) + u;
                I = 2 * (Y - A[1] - j * ac) / (ac * ac);
            } else {
                j = (Y - A[1]) / ac;
            }
        };
        var F = function () {
            var ac = 0;
            var aa = Q(B);
            if (aa !== undefined) {
                aa.member2026(A);
                ac = aa.member4110();
            } else {
                A[0] = T;
                A[2] = S;
                ac = N.member4110();
            }
            A[1] = N.member4085().member4114().member4115(ac, A[0], A[2], true) + v;
            var Y = s - T;
            var Z = r - S;
            if (Y !== 0 || Z !== 0) {
                var ab = Math.sqrt(Y * Y + Z * Z);
                A[0] += Y * o / ab;
                A[2] += Z * o / ab;
            }
            if (x) {
                A[1] += v;
            }
            N.member3320().member4193(A);
        };
        var e = function () {
            N.member3320().member344(A);
            var Z = y + 1 - X.member6116.member7139();
            var Y = Q(z);
            if (Y !== undefined) {
                Y.member2026(G);
                P = (G[0] - A[0]) / Z;
                E = (G[2] - A[2]) / Z;
            } else if (s !== undefined && r !== undefined) {
                P = (s - A[0]) / Z;
                E = (r - A[2]) / Z;
            }
            n = Math.sqrt(P * P + E * E);
            if (R !== -1) {
                j = n * Math.tan(R);
            } else {
                j = (targetHeight - A[1]) / Z;
            }
        };
        var Q = function (Z) {
            if (Z !== 0) {
                var Y;
                if (Z < 0) {
                    return X.member6452.member6453(-Z - 1);
                } else {
                    return X.member6450.member6451(Z - 1);
                }
            }
            return undefined;
        };
        N.member512 = function () {
            if (V !== null) {
                V.member511();
                V = null;
            }
            W = null;
            L = undefined;
            O = undefined;
            K = null;
            if (H !== null) {
                H.member512();
            }
            N.member3320().member4189();
            d.member33(A);
            d.member33(G);
            a.member33(J);
            a.member33(D);
            c.member33(m);
        };
        F();
        e();
        h = undefined;
        return N;
    };
    return b;
}();