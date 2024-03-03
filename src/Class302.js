import { Class301 } from 'Class301.js';
import { CP1252 } from 'Class122.js';
export var Class302 = function () {
    var D = {};
    var C;
    var B = '<'.charCodeAt(0);
    var A = '>'.charCodeAt(0);
    var c = ' '.charCodeAt(0);
    var n = '\xA0'.charCodeAt(0);
    var q = '\xAD'.charCodeAt(0);
    var m = '\xD7'.charCodeAt(0);
    var I = '\u20AC'.charCodeAt(0);
    var v = '\xA9'.charCodeAt(0);
    var G = '\xAE'.charCodeAt(0);
    var h = '-'.charCodeAt(0);
    D.member25 = function (K) {
        C = K;
    };
    var z = function (N, R, P, L, S, O, Q, K, U, T) {
        if (N.length === 0) {
            return;
        }
        F(Q, K);
        P += L.member3598().member3599();
        if (O === Class301.member3594) {
            E(N, R, P, L, U, undefined);
        } else if (O === Class301.member3595) {
            var M = s(N, L, U);
            E(N, R - Math.floor(M / 2), P, L, U, undefined);
        } else if (O === Class301.member3596) {
            var M = s(N, L, U);
            E(N, R - M, P, L, U, undefined);
        } else if (O === Class301.member3597) {
            var M = s(N, L, U);
            x.member3600 = J(N, M, S);
            E(N, R, P, L, U, undefined);
        } else {
            throw new Error('1539 ' + O);
        }
    };
    D.member3601 = z;
    var u = function (K, aa, Z, ac, X, Q, V, U, T, S, ad, R, N, W) {
        if (K.length === 0) {
            return;
        }
        F(ad, R);
        var ae = ac.member3598();
        if (T === 0) {
            T = ae.member3602();
        }
        var L;
        if (Q < ae.member3599() + ae.member3603() + T && Q < T + T) {
            L = undefined;
        } else {
            L = X;
        }
        var M = e(K, ac, L, N, true);
        if (S === undefined) {
            S = Math.floor(Q / T);
            if (S <= 0) {
                S = 1;
            }
        }
        if (S > 0 && M.length > S) {
            M = M.slice(0, S);
            M[M.length - 1] = y(M[M.length - 1], X, N);
        }
        var Y = 0;
        if (U === Class301.member3597 && M.length === 1) {
            U = Class301.member3595;
        }
        if (U === Class301.member3594) {
            Y = Z + ae.member3599();
        } else if (U === Class301.member3595) {
            Y = Z + ae.member3599() + Math.floor((Q - ae.member3599() - ae.member3603() - (M.length - 1) * T) / 2);
        } else if (U === Class301.member3596) {
            Y = Z + Q - ae.member3603() - (M.length - 1) * T;
        } else if (U === Class301.member3597) {
            var ab = Math.floor((Q - ae.member3599() - ae.member3603() - (M.length - 1) * T) / (M.length + 1));
            if (ab < 0) {
                ab = 0;
            }
            Y = Z + ae.member3599() + ab;
            T += ab;
        }
        for (var P = 0; P < M.length; P++) {
            if (V === Class301.member3594) {
                E(M[P], aa, Y, ac, N, undefined);
            } else if (V === Class301.member3595) {
                var O = s(M[P], ac, N);
                E(M[P], aa + Math.floor((X - O) / 2), Y, ac, N, undefined);
            } else if (V === Class301.member3596) {
                var O = s(M[P], ac, N);
                E(M[P], aa + (X - O), Y, ac, N, undefined);
            } else if (V === Class301.member3597) {
                if (P === M.length - 1) {
                    x.member3600 = 0;
                    E(M[P], aa, Y, ac, N, undefined);
                } else {
                    var O = s(M[P], ac, N);
                    x.member3600 = J(M[P], O, X);
                    E(M[P], aa, Y, ac, N, undefined);
                }
            } else {
                throw new Error('1540 ');
            }
            Y += T;
        }
    };
    D.member3604 = u;
    var t = function (O, S, Q, L, U, P, R, K, W, V, N) {
        if (O.length === 0) {
            return;
        }
        F(R, K);
        if (P === Class301.member3594) {
            E(O, S, Q, L, W, N);
        } else if (P === Class301.member3595) {
            var T = L.member3598();
            var M = s(O, L, W);
            E(O, S - Math.floor(M / 2), Q, L, W, N);
        } else if (P === Class301.member3596) {
            var T = L.member3598();
            var M = s(O, L, W);
            E(O, S - M, Q, L, W, N);
        } else if (P === Class301.member3597) {
            var T = L.member3598();
            var M = s(O, L, W);
            x.member3600 = J(O, M, U);
            E(O, S, Q, L, W, N);
        } else {
            throw new Error('1541 ' + P);
        }
    };
    D.member3605 = t;
    var s = function (Q, N, U) {
        var S = N.member3598();
        var K = -1;
        var R = -1;
        var O = 0;
        var V = Q.length;
        for (var M = 0; M < V; M++) {
            var T = CP1252.member1035(Q.charCodeAt(M));
            if (T === B) {
                K = M;
                continue;
            }
            if (T === A && K != -1) {
                var W = Q.substring(K + 1, M);
                K = -1;
                T = b(W);
                if (T !== -1) {
                } else if (W.substring(0, 4) === 'img=' && U !== undefined && U !== null) {
                    var P = W.substring(4);
                    if (P > U.length) {
                        continue;
                    }
                    var L = U[P];
                    if (L === undefined || L.member3606 === undefined || L.member3606 === NULL) {
                        continue;
                    }
                    O += L.width;
                    R = -1;
                    continue;
                } else {
                    continue;
                }
            }
            if (K == -1) {
                O += S.member3607(T);
                O += S.member3608(T, R);
                R = T;
            }
        }
        return O;
    };
    D.member3609 = s;
    var r = function (M, N, L, K) {
        return e(M, L, N, K, true).length;
    };
    D.member3610 = r;
    var o = function (N, O, M, L, P) {
        var K = e(N, M, O, L, true);
        if (P >= 0 && P < K.length) {
            return K[P];
        }
        return undefined;
    };
    D.member3611 = o;
    var k = function (O, P, R, N, M) {
        var Q = N.member3598();
        if (R === 0) {
            R = Q.member3602();
        }
        var L = e(O, N, P, M, true).length;
        var K = (L - 1) * R;
        return Q.member3599() + K + Q.member3603();
    };
    D.member3612 = k;
    var j = function (O, P, N, M) {
        var K = e(O, N, P, M, true);
        var Q = 0;
        for (var R = 0; R < K.length; R++) {
            var L = s(K[R], N, M);
            if (L > Q) {
                Q = L;
            }
        }
        return Q;
    };
    D.member3613 = j;
    var i = function (L) {
        var M = '';
        for (var K = 0; K < L.length; K++) {
            var N = L.charCodeAt(K);
            if (N === B) {
                M += '<lt>';
            } else if (N === A) {
                M += '<gt>';
            } else {
                M += L.charAt(K);
            }
        }
        return M;
    };
    D.member3614 = i;
    var b = function (K) {
        var L = -1;
        if (K === 'lt') {
            L = B;
        } else if (K === 'gt') {
            L = A;
        } else if (K === 'nbsp') {
            L = n;
        } else if (K === 'shy') {
            L = q;
        } else if (K === 'times') {
            L = m;
        } else if (K === 'euro') {
            L = I;
        } else if (K === 'copy') {
            L = v;
        } else if (K === 'reg') {
            L = G;
        }
        return L;
    };
    var J = function (N, O, M) {
        var L = 0;
        var Q = false;
        for (var P = 0; P < N.length; P++) {
            var K = N.charCodeAt(P);
            if (K === B) {
                Q = true;
            } else if (K === A) {
                Q = false;
            } else if (!Q && K === c) {
                L++;
            }
        }
        if (L > 0) {
            return (M - O) / L;
        } else {
            return 0;
        }
    };
    var e = function (K, W, M, P, Z) {
        var aa = W.member3598();
        var L = 0, X = 0;
        var U = -1, ac = 0, S = 0;
        var N = -1;
        var T = -1;
        var R = 0;
        var O = new Array(0);
        for (var Y = 0; Y < K.length; Y++) {
            var Q = CP1252.member1035(K.charCodeAt(Y));
            var ad = 0;
            var V;
            if (Q === B) {
                N = Y;
                continue;
            }
            if (N !== -1) {
                if (Q !== A) {
                    continue;
                }
                V = N;
                var af = K.substring(N + 1, Y);
                N = -1;
                if (af === 'br') {
                    O[R] = K.substring(X, Y + 1);
                    R++;
                    X = Y + 1;
                    L = 0;
                    U = -1;
                    T = -1;
                    continue;
                } else if (af === 'lt') {
                    ad += aa.member3607(B);
                    ad += aa.member3608(B, T);
                    T = B;
                } else if (af === 'gt') {
                    ad += aa.member3607(A);
                    ad += aa.member3608(A, T);
                    T = A;
                } else if (af === 'nbsp') {
                    ad += aa.member3607(n);
                    ad += aa.member3608(n, T);
                    T = n;
                } else if (af === 'shy') {
                    ad += aa.member3607(q);
                    ad += aa.member3608(q, T);
                    T = q;
                } else if (af === 'times') {
                    ad += aa.member3607(m);
                    ad += aa.member3608(m, T);
                    T = m;
                } else if (af === 'euro') {
                    ad += aa.member3607(I);
                    ad += aa.member3608(I, T);
                    T = I;
                } else if (af === 'copy') {
                    ad += aa.member3607(v);
                    ad += aa.member3608(v, T);
                    T = v;
                } else if (af === 'reg') {
                    ad += aa.member3607(G);
                    ad += aa.member3608(G, T);
                    T = G;
                } else if (af.substring(0, af.length) === 'img=' && P !== undefined && P !== null) {
                    var ae = af.substring(4);
                    if (ae > P.length) {
                        continue;
                    }
                    var ab = P[ae];
                    if (ab === undefined || ab.member3606 === undefined || ab.member3606 === NULL) {
                        continue;
                    }
                    ad += member3615.width;
                    T = -1;
                }
                Q = -1;
            } else {
                V = Y;
                ad += aa.member3607(Q);
                ad += aa.member3608(Q, T);
                T = Q;
            }
            if (ad > 0) {
                L += ad;
                if (M !== undefined) {
                    if (Q === c) {
                        U = Y;
                        ac = L;
                        if (Z) {
                            S = 1;
                        } else {
                            S = 0;
                        }
                    }
                    if (L > M) {
                        if (U >= 0) {
                            O[R] = K.substring(X, U + 1 - S);
                            R++;
                            X = U + 1;
                            U = -1;
                            L -= ac;
                            T = -1;
                        } else {
                            O[R] = K.substring(X, V);
                            R++;
                            X = V;
                            U = -1;
                            L = ad;
                            T = -1;
                        }
                    }
                    if (Q === h) {
                        U = Y;
                        ac = L;
                        S = 0;
                    }
                }
            }
        }
        if (K.length > X) {
            O[R] = K.substring(X, K.length);
            R++;
        }
        return O;
    };
    var y = function (M, L, K) {
        return M;
    };
    var x = {};
    var F = function (K, L) {
        x.member3616 = -1;
        x.member3617 = -1;
        x.member546 = x.member3618 = K;
        x.member3600 = 0;
        if (L === -1) {
            L = 0;
        }
        x.member3619 = x.member3620 = L;
    };
    var g = function (K) {
        try {
            if (K.indexOf('col=') === 0) {
                x.member546 = x.member546 & 255 | (parseInt(K.substr(4), 16) & 16777215) << 8;
            } else if (K === '/col') {
                x.member546 = x.member546 & 255 | x.member3618 & 4294967040;
            } else if (K.indexOf('argb=') === 0) {
                var M = parseInt(K.substr(5), 16);
                x.member546 = (M & 16777215) << 8 | (M & 4278190080) >> 24;
            } else if (K === '/argb') {
                x.member546 = x.member3618;
            } else if (K.indexOf('str=') === 0) {
                x.member3616 = x.member546 & 255 | (parseInt(K.substr(4), 16) & 16777215) << 8;
            } else if (K === 'str') {
                x.member3616 = x.member546 & 255 | 2147483648;
            } else if (K === '/str') {
                x.member3616 = -1;
            } else if (K.indexOf('u=') === 0) {
                x.member3617 = x.member546 & 255 | (parseInt(K.substr(2), 16) & 16777215) << 8;
            } else if (K === 'u') {
                x.member3617 = x.member546 & 255;
            } else if (K === '/u') {
                x.member3617 = -1;
            }
            if (K.toLowerCase() === 'shad=-1') {
                x.member3619 = 0;
            } else if (K.indexOf('shad=') === 0) {
                x.member3619 = x.member546 & 255 | (parseInt(K.substr(5), 16) & 16777215) << 8;
            } else if (K === 'shad') {
                x.member3619 = x.member546 & 255;
            } else if (K === '/shad') {
                x.member3619 = x.member3620;
            }
            if (K === 'br') {
                F(x.member3618, x.member3620);
            }
        } catch (L) {
            if (false) {
            }
        }
    };
    var E = function (K, V, T, X, N, P) {
        var Z = X.member3598();
        T -= Z.member3602();
        var ac = X.member3621();
        var af = X.member3622(x.member546);
        var M;
        if (x.member3619 !== undefined) {
            M = X.member3622(x.member3619);
        }
        var L = -1;
        var Q = -1;
        if (P !== undefined) {
            if (P.x === undefined || P.y === undefined) {
                P = undefined;
            } else if (P.x.length < K.length) {
                P = undefined;
            } else if (P.y.length < K.length) {
                P = undefined;
            }
        }
        for (var Y = 0; Y < K.length; Y++) {
            var O = CP1252.member1035(K.charCodeAt(Y));
            var ad = V;
            var aa = T;
            if (O === B) {
                L = Y;
                continue;
            }
            if (O === A && L != -1) {
                var ag = K.substring(L + 1, Y);
                L = -1;
                O = b(ag);
                if (O !== -1) {
                } else if (ag.substring(0, 4) === 'img=' && N !== null && N !== undefined) {
                    var ae = ag.substring(4);
                    if (ae > N.length) {
                        continue;
                    }
                    var ab = N[ae];
                    if (ab === undefined || ab.member3606 === undefined || ab.member3606 === NULL) {
                        continue;
                    }
                    if (P !== undefined) {
                        ad += P.x[Y];
                        aa += P.y[Y];
                    }
                    var U = ab.member3606.member1539();
                    var S = U.member1285(ab.member3606.member1494());
                    C.member3623(ad, aa + X.member3598().member3599() - ab.height, ab.width, ab.height, 4294967295, S.member493, S.member494, S.member495, S.member496, U.member1277(), false);
                    V += ab.width;
                    continue;
                } else {
                    g(ag);
                    af = X.member3622(x.member546);
                    if (x.member3619 !== undefined) {
                        M = X.member3622(x.member3619);
                    }
                    continue;
                }
            }
            if (L === -1) {
                var W = Z.member3608(O, Q);
                V += W;
                ad += W;
                if (P !== undefined) {
                    ad += P.x[Y];
                    aa += P.y[Y];
                }
                if (O !== c) {
                    if (x.member3619 !== undefined) {
                        H(O, ad + 1, aa + 1, x.member3619, X, M);
                    }
                    H(O, ad, aa, x.member546, X, af);
                } else if (x.member3600 > 0) {
                    V += x.member3600;
                }
                var R = Z.member3607(O);
                if (x.member3616 !== -1) {
                    C.member3624(ad, aa + Math.floor(Z.member3602() * 0.6), R, 1, x.member3616, (x.member3616 & 255) !== 255);
                }
                if (x.member3617 !== -1) {
                    C.member3624(ad, aa + Z.member3602() + 1, R, 1, x.member3617, (x.member3617 & 255) !== 255);
                }
                V += R;
                Q = O;
            }
        }
    };
    var H = function (R, Q, O, P, L, S) {
        var N = L.member3625(P, R);
        var M = L.member3626(R);
        var K = L.member3621();
        C.member3627(Q + M.left, O + M.top, Q + M.left + K, O + M.top + K, P, N.member493, N.member494, N.member495, N.member496, S, false);
    };
    var d = function (U, M, R, O, K, X) {
        var T = O.member3598();
        if (K <= 0) {
            return [
                0,
                T.member3599() + R
            ];
        }
        if (K > U.length) {
            K = U.length;
        }
        if (R === 0) {
            R = T.member3602();
        }
        var Y = e(U, O, M, X, false);
        var P = Y.length;
        var W = 0;
        var V = 0;
        while (V < P) {
            var L = Y[V].length;
            if (L + W > K || V === P - 1 && K === U.length) {
                var S = U.substring(W, K);
                if (S.member56('<br>')) {
                    S = '';
                    W += L;
                    V++;
                }
                var Q = s(S, O, X);
                var N = T.member3599() + V * R;
                return [
                    Q,
                    N
                ];
            }
            W += L;
            V++;
        }
    };
    D.member3628 = d;
    var a = function (W, L, R, M, U, T, X) {
        var V = M.member3598();
        if (R === 0) {
            R = V.member3602();
        }
        var Y = e(W, M, L, X, false);
        var O = Y.length;
        if (O === 0) {
            return 0;
        }
        if (T < 0) {
            T = 0;
        }
        T = Math.round(T / R);
        if (T >= O) {
            T = O - 1;
        }
        var S = Y[T];
        var N = 0;
        var K = 0;
        var P = 0;
        while (P < U && N < S.length) {
            K = P;
            P = s(S.substring(0, ++N), M, X);
        }
        if (N == S.length && S.member56('<br>')) {
            N -= 4;
        }
        if (U - K < P - U) {
            N--;
        }
        for (var Q = 0; Q < T; Q++) {
            N += Y[Q].length;
        }
        return N;
    };
    D.member3629 = a;
    return D;
}();