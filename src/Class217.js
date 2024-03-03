import { Class216 } from 'Class216.js';
export var Class217 = function () {
    var s = {};
    var y = 1;
    var j = 2;
    var n = 10;
    var q = 14;
    var D = 0;
    var r = 4;
    var h = 4096;
    var x = 16;
    var z = 258;
    var m = 23;
    var g = 0;
    var d = 1;
    var v = 6;
    var o = 50;
    var c = 4;
    var A = 2 + 900000 / o;
    var a = Class216();
    s.member2691 = function (I, F, H, E, G) {
        a.member2653 = new Uint8Array(H);
        a.member2654 = G;
        a.member2658 = new Uint8Array(I);
        a.member2659 = 0;
        a.member2655 = E;
        a.member2660 = F;
        a.member2667 = 0;
        a.member2666 = 0;
        a.member2656 = 0;
        a.member2657 = 0;
        a.member2661 = 0;
        a.member2662 = 0;
        a.member2669 = 0;
        b(a);
        F -= a.member2660;
        a.member2653 = null;
        a.member2658 = null;
        return F;
    };
    var C = s.member2691;
    var b = function (H) {
        var ab;
        var aa, F;
        var an = 0;
        var ai = 0;
        var ac = 0;
        var M = 0;
        var ao = 0;
        var ad = 0;
        var U = 0;
        var K = 0;
        var aj = 0;
        var ak = 0;
        var ap = 0;
        var ag = 0;
        var ah = 0;
        var Z = 0;
        var E = 0;
        var R = 0;
        var G = 0;
        var V = 0;
        var ae = 0;
        var Q = null;
        var I = null;
        var W = null;
        H.member2668 = 1;
        if (H.member2677 === null) {
            H.member2677 = new Uint32Array(new ArrayBuffer(H.member2668 * 100000 * 4));
        }
        var L = true;
        while (L) {
            ab = B(H);
            if (ab == 23) {
                return;
            }
            ab = B(H);
            ab = B(H);
            ab = B(H);
            ab = B(H);
            ab = B(H);
            H.member2669++;
            ab = B(H);
            ab = B(H);
            ab = B(H);
            ab = B(H);
            ab = t(H);
            if (ab != 0) {
                H.member2665 = true;
            } else {
                H.member2665 = false;
            }
            if (false) {
            }
            H.member2670 = 0;
            ab = B(H);
            H.member2670 = H.member2670 << 8 | ab & 255;
            ab = B(H);
            H.member2670 = H.member2670 << 8 | ab & 255;
            ab = B(H);
            H.member2670 = H.member2670 << 8 | ab & 255;
            for (an = 0; an < 16; an++) {
                ab = t(H);
                if (ab == 1) {
                    H.member2680[an] = true;
                } else {
                    H.member2680[an] = false;
                }
            }
            for (an = 0; an < 256; an++) {
                H.member2679[an] = false;
            }
            for (an = 0; an < 16; an++) {
                if (H.member2680[an]) {
                    for (ai = 0; ai < 16; ai++) {
                        ab = t(H);
                        if (ab == 1) {
                            H.member2679[an * 16 + ai] = true;
                        }
                    }
                }
            }
            i(H);
            M = H.member2678 + 2;
            ao = k(3, H);
            ad = k(15, H);
            for (an = 0; an < ad; an++) {
                ai = 0;
                while (true) {
                    ab = t(H);
                    if (ab == 0) {
                        break;
                    }
                    ai++;
                }
                H.member2685[an] = ai & 255;
            }
            var J = new Uint8Array(new ArrayBuffer(v));
            var af, X;
            for (X = 0; X < ao; X++) {
                J[X] = X;
            }
            for (an = 0; an < ad; an++) {
                X = H.member2685[an];
                af = J[X];
                while (X > 0) {
                    J[X] = J[X - 1];
                    X--;
                }
                J[0] = af;
                H.member2684[an] = af;
            }
            for (ac = 0; ac < ao; ac++) {
                Z = k(5, H);
                for (an = 0; an < M; an++) {
                    while (true) {
                        ab = t(H);
                        if (ab == 0) {
                            break;
                        }
                        ab = t(H);
                        if (ab == 0) {
                            Z++;
                        } else {
                            Z--;
                        }
                    }
                    H.member2686[ac][an] = Z;
                }
            }
            for (ac = 0; ac < ao; ac++) {
                aa = 32;
                F = 0;
                for (an = 0; an < M; an++) {
                    if (H.member2686[ac][an] > F) {
                        F = H.member2686[ac][an];
                    }
                    if (H.member2686[ac][an] < aa) {
                        aa = H.member2686[ac][an];
                    }
                }
                e(H.member2687[ac], H.member1836[ac], H.member2688[ac], H.member2686[ac], aa, F, M);
                H.member2689[ac] = aa;
            }
            U = H.member2678 + 1;
            K = -1;
            aj = 0;
            for (an = 0; an <= 255; an++) {
                H.member2673[an] = 0;
            }
            var Y, P, am;
            am = h - 1;
            for (Y = 256 / x - 1; Y >= 0; Y--) {
                for (P = x - 1; P >= 0; P--) {
                    H.member2682[am] = Y * x + P & 255;
                    am--;
                }
                H.member2683[Y] = am + 1;
            }
            ap = 0;
            if (aj == 0) {
                K++;
                aj = o;
                V = H.member2684[K];
                ae = H.member2689[V];
                Q = H.member2687[V];
                W = H.member2688[V];
                I = H.member1836[V];
            }
            aj--;
            E = ae;
            R = k(E, H);
            while (true) {
                if (R <= Q[E]) {
                    break;
                }
                E++;
                G = t(H);
                R = R << 1 | G;
            }
            ak = W[R - I[E]];
            while (true) {
                if (ak == U) {
                    break;
                }
                if (ak == g || ak == d) {
                    ag = -1;
                    ah = 1;
                    do {
                        if (ak == g) {
                            ag = ag + (0 + 1) * ah;
                        } else if (ak == d) {
                            ag = ag + (1 + 1) * ah;
                        }
                        ah = ah * 2;
                        if (aj == 0) {
                            K++;
                            aj = o;
                            V = H.member2684[K];
                            ae = H.member2689[V];
                            Q = H.member2687[V];
                            W = H.member2688[V];
                            I = H.member1836[V];
                        }
                        aj--;
                        E = ae;
                        R = k(E, H);
                        while (true) {
                            if (R <= Q[E]) {
                                break;
                            }
                            E++;
                            G = t(H);
                            R = R << 1 | G;
                        }
                        ak = W[R - I[E]];
                    } while (ak == g || ak == d);
                    ag++;
                    ab = H.member2681[H.member2682[H.member2683[0]] & 255];
                    H.member2673[ab & 255] += ag;
                    while (ag > 0) {
                        H.member2677[ap] = ab & 255;
                        ap++;
                        ag--;
                    }
                    continue;
                } else {
                    var Y, P, am, N, S, O;
                    var al;
                    al = ak - 1;
                    if (al < x) {
                        N = H.member2683[0];
                        ab = H.member2682[N + al];
                        while (al > 3) {
                            var T = N + al;
                            H.member2682[T] = H.member2682[T - 1];
                            H.member2682[T - 1] = H.member2682[T - 2];
                            H.member2682[T - 2] = H.member2682[T - 3];
                            H.member2682[T - 3] = H.member2682[T - 4];
                            al -= 4;
                        }
                        while (al > 0) {
                            H.member2682[N + al] = H.member2682[N + al - 1];
                            al--;
                        }
                        H.member2682[N] = ab;
                    } else {
                        S = Math.floor(al / x);
                        O = al % x;
                        N = H.member2683[S] + O;
                        ab = H.member2682[N];
                        while (N > H.member2683[S]) {
                            H.member2682[N] = H.member2682[N - 1];
                            N--;
                        }
                        H.member2683[S]++;
                        while (S > 0) {
                            H.member2683[S]--;
                            H.member2682[H.member2683[S]] = H.member2682[H.member2683[S - 1] + x - 1];
                            S--;
                        }
                        H.member2683[0]--;
                        H.member2682[H.member2683[0]] = ab;
                        if (H.member2683[0] == 0) {
                            am = h - 1;
                            for (Y = 256 / x - 1; Y >= 0; Y--) {
                                for (P = x - 1; P >= 0; P--) {
                                    H.member2682[am] = H.member2682[H.member2683[Y] + P];
                                    am--;
                                }
                                H.member2683[Y] = am + 1;
                            }
                        }
                    }
                    H.member2673[H.member2681[ab & 255] & 255]++;
                    H.member2677[ap] = H.member2681[ab & 255] & 255;
                    ap++;
                    if (aj == 0) {
                        K++;
                        aj = o;
                        V = H.member2684[K];
                        ae = H.member2689[V];
                        Q = H.member2687[V];
                        W = H.member2688[V];
                        I = H.member1836[V];
                    }
                    aj--;
                    E = ae;
                    R = k(E, H);
                    while (true) {
                        if (R <= Q[E]) {
                            break;
                        }
                        E++;
                        G = t(H);
                        R = R << 1 | G;
                    }
                    ak = W[R - I[E]];
                    continue;
                }
            }
            H.member2664 = 0;
            H.member2663 = 0;
            H.member2675[0] = 0;
            for (an = 1; an <= 256; an++) {
                H.member2675[an] = H.member2673[an - 1];
            }
            for (an = 1; an <= 256; an++) {
                H.member2675[an] += H.member2675[an - 1];
            }
            for (an = 0; an < ap; an++) {
                ab = H.member2677[an] & 255;
                H.member2677[H.member2675[ab & 255]] |= an << 8;
                H.member2675[ab & 255]++;
            }
            H.member2671 = H.member2677[H.member2670] >> 8;
            H.member2674 = 0;
            H.member2671 = H.member2677[H.member2671];
            H.member2672 = H.member2671 & 255;
            H.member2671 >>= 8;
            H.member2674++;
            H.member2690 = ap;
            u(H);
            if (H.member2674 == H.member2690 + 1 && H.member2664 == 0) {
                L = true;
            } else {
                L = false;
            }
        }
        return;
    };
    var u = function (O) {
        var L;
        var J = O.member2663;
        var E = O.member2664;
        var G = O.member2674;
        var I = O.member2672;
        var H = O.member2677;
        var M = O.member2671;
        var Q = O.member2658;
        var N = O.member2659;
        var F = O.member2660;
        var P = F;
        var R = O.member2690 + 1;
        var K;
        member2692:
            while (true) {
                if (E > 0) {
                    while (true) {
                        if (F == 0) {
                            break member2692;
                        }
                        if (E == 1) {
                            break;
                        }
                        Q[N] = J;
                        E--;
                        N++;
                        F--;
                    }
                    if (F == 0) {
                        E = 1;
                        break member2692;
                    }
                    Q[N] = J;
                    N++;
                    F--;
                }
                while (true) {
                    if (G == R) {
                        E = 0;
                        break member2692;
                    }
                    J = I & 255;
                    M = H[M];
                    L = M & 255;
                    M >>= 8;
                    G++;
                    if (L != I) {
                        I = L;
                        if (F == 0) {
                            E = 1;
                            break member2692;
                        }
                        Q[N] = J;
                        N++;
                        F--;
                        continue;
                    }
                    if (G == R) {
                        if (F == 0) {
                            E = 1;
                            break member2692;
                        }
                        Q[N] = J;
                        N++;
                        F--;
                        continue;
                    }
                    break;
                }
                E = 2;
                M = H[M];
                L = M & 255;
                M >>= 8;
                G++;
                if (G == R) {
                    continue;
                }
                if (L != I) {
                    I = L;
                    continue;
                }
                E = 3;
                M = H[M];
                L = M & 255;
                M >>= 8;
                G++;
                if (G == R) {
                    continue;
                }
                if (L != I) {
                    I = L;
                    continue;
                }
                M = H[M];
                L = M & 255;
                M >>= 8;
                G++;
                E = (L & 255) + 4;
                M = H[M];
                I = M & 255;
                M >>= 8;
                G++;
            }
        K = O.member2661;
        O.member2661 += P - F;
        if (O.member2661 < K) {
            O.member2662++;
        }
        O.member2663 = J;
        O.member2664 = E;
        O.member2674 = G;
        O.member2672 = I;
        O.member2677 = H;
        O.member2671 = M;
        O.member2658 = Q;
        O.member2659 = N;
        O.member2660 = F;
    };
    var B = function (E) {
        return k(8, E);
    };
    var t = function (E) {
        return k(1, E);
    };
    var k = function (G, E) {
        while (true) {
            if (E.member2667 >= G) {
                var F;
                F = E.member2666 >> E.member2667 - G & (1 << G) - 1;
                E.member2667 -= G;
                return F;
            }
            E.member2666 = E.member2666 << 8 | E.member2653[E.member2654] & 255;
            E.member2667 += 8;
            E.member2654++;
            E.member2655--;
            E.member2656++;
            if (E.member2656 == 0) {
                E.member2657++;
            }
        }
    };
    var i = function (F) {
        var E;
        F.member2678 = 0;
        for (E = 0; E < 256; E++) {
            if (F.member2679[E]) {
                F.member2681[F.member2678] = E & 255;
                F.member2678++;
            }
        }
    };
    var e = function (L, O, J, G, I, K, E) {
        var H, N, M, F;
        H = 0;
        for (N = I; N <= K; N++) {
            for (M = 0; M < E; M++) {
                if (G[M] == N) {
                    J[H] = M;
                    H++;
                }
            }
        }
        for (N = 0; N < m; N++) {
            O[N] = 0;
        }
        for (N = 0; N < E; N++) {
            O[G[N] + 1]++;
        }
        for (N = 1; N < m; N++) {
            O[N] += O[N - 1];
        }
        for (N = 0; N < m; N++) {
            L[N] = 0;
        }
        F = 0;
        for (N = I; N <= K; N++) {
            F += O[N + 1] - O[N];
            L[N] = F - 1;
            F <<= 1;
        }
        for (N = I + 1; N <= K; N++) {
            O[N] = (L[N - 1] + 1 << 1) - O[N];
        }
    };
    return s;
}();