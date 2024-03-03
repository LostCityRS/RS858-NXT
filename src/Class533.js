import { Class532 } from 'Class532.js';
export var Class533 = function () {
    var c = 500;
    var a = 100;
    var b = 6;
    return function (H) {
        var R = {};
        R.member8513 = 127;
        R.member8514 = 126;
        R.member8515 = 125;
        R.member8516 = 100;
        R.member8517 = 6;
        R.member8518 = 5;
        R.member8519 = 4;
        R.member8520 = 3;
        R.member8521 = 2;
        R.member8522 = 1;
        R.member8523 = 0;
        R.member8524 = -1;
        var C = 0;
        R.member8525 = function () {
            return C;
        };
        R.member8526 = function () {
            C++;
        };
        var A = undefined;
        R.member2798 = function () {
            return A;
        };
        var I = 0;
        R.member8527 = function () {
            return I;
        };
        var o = 0;
        R.member8528 = function () {
            return o;
        };
        var k;
        R.member8529 = function () {
            return k;
        };
        var i;
        R.member8530 = function () {
            return i;
        };
        var g;
        R.member8531 = function () {
            return g;
        };
        var t;
        R.member8532 = function () {
            return t;
        };
        var r;
        R.member8533 = function () {
            return r;
        };
        var F = 0;
        R.member8534 = function () {
            return F;
        };
        var G = [];
        R.member8535 = function (U) {
            return G[U];
        };
        var P = [];
        R.member8536 = function (U) {
            return P[U];
        };
        var N = undefined;
        R.member8537 = function (V) {
            if (N === undefined) {
                N = new Array(F);
                for (var U = 0; U < F; U++) {
                    N[U] = {
                        member7233: G[U],
                        member8538: U
                    };
                    if (N[U].member7233 !== undefined) {
                        N[U].member7233 = N[U].member7233.toLowerCase();
                    }
                }
                N.sort(function (X, W) {
                    return X.member7233.localeCompare(W.member7233);
                });
            }
            return N[V].member8538;
        };
        var K = [];
        R.member8539 = function (V, X, W) {
            var U = W === 31 ? -1 : (1 << W + 1) - 1;
            return (K[V] & U) >>> X;
        };
        var L = [];
        R.member8540 = function (U) {
            return L[U];
        };
        var x = [];
        R.member8541 = function (U) {
            return x[U];
        };
        var O = -1;
        R.member8542 = function () {
            return O;
        };
        var J = -1;
        R.member8543 = function () {
            return J;
        };
        var S = 0;
        R.member8544 = function () {
            return S;
        };
        var y = [];
        R.member8545 = function (U) {
            return y[U];
        };
        var M = [];
        var E = function (V) {
            if (V === undefined || V === '') {
                return -1;
            }
            for (var U = 0; U < F; U++) {
                if (G[U] === V) {
                    return U;
                }
            }
            return -1;
        };
        R.member8546 = E;
        var D = function (U, V) {
            if (U === undefined || U === '') {
                throw new Error();
            }
            G[F] = U;
            if (O === -1) {
                O = F;
                P[F] = Class532.member8502;
            } else {
                P[F] = Class532.member8511;
            }
            K[F] = 0;
            L[F] = V;
            x[F] = false;
            F++;
            N = undefined;
        };
        R.member8547 = D;
        var B = function (U) {
            if (U < 0 || U >= F) {
                throw new Error();
            }
            F--;
            N = undefined;
            G.splice(U, 1);
            P.splice(U, 1);
            K.splice(U, 1);
            L.splice(U, 1);
            x.splice(U, 1);
            Q();
        };
        R.member8548 = B;
        var z = function (U) {
            if (U === undefined || U === '') {
                throw new Error();
            }
            y[S] = U;
            S++;
        };
        R.member8549 = z;
        var v = function (U) {
            if (U < 0 || U >= S) {
                throw new Error();
            }
            S--;
            y.splice(U, 1);
        };
        R.member8550 = v;
        var u = function (U, V) {
            if (U < 0 || U >= F) {
                throw new Error();
            }
            P[U] = V;
            Q();
        };
        R.member8551 = u;
        var s = function (V, Z, Y, W) {
            if (V < 0 || V >= F) {
                throw new Error();
            }
            var ab = (1 << Y) - 1;
            var X = W === 31 ? 4294967295 : (1 << W + 1) - 1;
            var U = X ^ ab;
            Z <<= Y;
            Z &= U;
            var aa = K[V];
            if ((aa & U) === Z) {
                return;
            }
            aa &= ~U;
            K[V] = aa | Z;
        };
        R.member8552 = s;
        var q = function (U, V) {
            if (U < 0 || U >= F) {
                throw new Error();
            }
            x[U] = V;
        };
        R.member8553 = q;
        var n = function (V, U) {
            A = V;
            member8554 = U;
        };
        R.member8555 = n;
        var T = function (X, W, U, Y, V) {
            k = X;
            i = W;
            g = U;
            t = Y;
            r = V;
        };
        R.member8556 = T;
        var m = function (V, U) {
            M[V] = U;
        };
        R.member8557 = m;
        var j = function (ab, Z, Y, W) {
            var aa = (1 << Y) - 1;
            var X = W === 31 ? 4294967295 : (1 << W + 1) - 1;
            var U = X ^ aa;
            Z <<= Y;
            Z &= U;
            var V = M[ab];
            if (V === undefined) {
                V = 0;
            }
            V &= ~U;
            M[ab] = V | Z;
        };
        R.member8558 = j;
        var Q = function () {
            if (F === 0) {
                O = -1;
                J = -1;
                return;
            }
            O = -1;
            J = -1;
            var V = 0;
            var U = P[0];
            for (var W = 1; W < F; W++) {
                if (P[W] > U) {
                    if (U === Class532.member8503) {
                        J = V;
                    }
                    V = W;
                    U = P[W];
                } else if (J === -1 && P[W] === Class532.member8503) {
                    J = W;
                }
            }
            O = V;
            if (O !== -1) {
                P[O] = Class532.member8502;
            }
        };
        var d = function (Y) {
            var aa = Y.g1();
            if (aa < 1 || aa > b) {
                if (false) {
                } else {
                    throw new Error();
                }
            }
            var Z = Y.g1();
            if ((Z & 1) !== 0) {
                if (false) {
                } else {
                    throw new Error();
                }
            }
            if ((Z & 2) === 0) {
                if (false) {
                } else {
                    throw new Error();
                }
            }
            C = Y.g4();
            I = Y.g4();
            if (aa <= 3 && I !== 0) {
                I += 11745 * 24 * 60;
            }
            F = Y.g2();
            S = Y.g1();
            A = Y.gjstr();
            if (aa >= 4) {
                o = Y.g4();
            } else {
                o = 0;
            }
            k = Y.g1() === 1;
            i = Y.g1s();
            g = Y.g1s();
            t = Y.g1s();
            r = Y.g1s();
            if (F > 0) {
                G = new Array(F);
                P = new Array(F);
                K = new Array(F);
                L = new Array(F);
                x = new Array(F);
                for (var X = 0; X < F; X++) {
                    G[X] = Y.gjstr();
                    if (G[X] === '') {
                        G[X] = undefined;
                    }
                    P[X] = Y.g1s();
                    if (aa >= 2) {
                        K[X] = Y.g4();
                    } else {
                        K[X] = 0;
                    }
                    if (aa >= 5) {
                        L[X] = Y.g2();
                    } else {
                        L[X] = 0;
                    }
                    if (aa >= 6) {
                        x[X] = Y.g1() === 1;
                    } else {
                        x[X] = false;
                    }
                }
                Q();
            }
            if (S > 0) {
                y = new Array(S);
                for (var X = 0; X < S; X++) {
                    y[X] = Y.gjstr();
                    if (y[X] === '') {
                        y[X] = undefined;
                    }
                }
            }
            if (aa >= 3) {
                var W = Y.g2();
                if (W > 0) {
                    M = [];
                    while (W-- > 0) {
                        var U = Y.g4();
                        var V = U & 1073741823;
                        var ab = U >>> 30;
                        var ac;
                        if (ab === 0) {
                            ac = Y.g4();
                        } else if (ab === 1) {
                            ac = Y.g8();
                        } else if (ab === 2) {
                            ac = Y.gjstr();
                        }
                        M[V] = ac;
                    }
                }
            }
        };
        if (H !== undefined) {
            d(H);
        } else {
            throw new Error('1739 ');
        }
        var h = function (U) {
            if (M[U.getID()] === undefined) {
                return U.member2944();
            }
            return M[U.getID()];
        };
        R.getVarInt = h;
        var e = function (U) {
            return U.member2948(h(U.member2949()));
        };
        R.getVarBit = e;
        return R;
    };
}();