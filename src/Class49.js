import { Class37 } from 'Class37.js';
import { Class41 } from 'Class41.js';
export var Class49 = function () {
    var H = {};
    var h = function (O) {
        var P = new Float32Array(16);
        if (O) {
            P[0] = O[0];
            P[1] = O[1];
            P[2] = O[2];
            P[3] = O[3];
            P[4] = O[4];
            P[5] = O[5];
            P[6] = O[6];
            P[7] = O[7];
            P[8] = O[8];
            P[9] = O[9];
            P[10] = O[10];
            P[11] = O[11];
            P[12] = O[12];
            P[13] = O[13];
            P[14] = O[14];
            P[15] = O[15];
        }
        return P;
    };
    H.create = h;
    var C = function (O, P) {
        P[0] = O[0];
        P[1] = O[1];
        P[2] = O[2];
        P[3] = O[3];
        P[4] = O[4];
        P[5] = O[5];
        P[6] = O[6];
        P[7] = O[7];
        P[8] = O[8];
        P[9] = O[9];
        P[10] = O[10];
        P[11] = O[11];
        P[12] = O[12];
        P[13] = O[13];
        P[14] = O[14];
        P[15] = O[15];
        return P;
    };
    H.set = C;
    var b = function (O) {
        if (!O) {
            O = h();
        }
        O[0] = 1;
        O[1] = 0;
        O[2] = 0;
        O[3] = 0;
        O[4] = 0;
        O[5] = 1;
        O[6] = 0;
        O[7] = 0;
        O[8] = 0;
        O[9] = 0;
        O[10] = 1;
        O[11] = 0;
        O[12] = 0;
        O[13] = 0;
        O[14] = 0;
        O[15] = 1;
        return O;
    };
    H.member313 = b;
    var y = function (Q, V) {
        if (!V || Q === V) {
            var U = Q[1], S = Q[2], R = Q[3], O = Q[6], T = Q[7], P = Q[11];
            Q[1] = Q[4];
            Q[2] = Q[8];
            Q[3] = Q[12];
            Q[4] = U;
            Q[6] = Q[9];
            Q[7] = Q[13];
            Q[8] = S;
            Q[9] = O;
            Q[11] = Q[14];
            Q[12] = R;
            Q[13] = T;
            Q[14] = P;
            return Q;
        }
        V[0] = Q[0];
        V[1] = Q[4];
        V[2] = Q[8];
        V[3] = Q[12];
        V[4] = Q[1];
        V[5] = Q[5];
        V[6] = Q[9];
        V[7] = Q[13];
        V[8] = Q[2];
        V[9] = Q[6];
        V[10] = Q[10];
        V[11] = Q[14];
        V[12] = Q[3];
        V[13] = Q[7];
        V[14] = Q[11];
        V[15] = Q[15];
        return V;
    };
    H.member314 = y;
    var r = function (ac) {
        var V = ac[0], U = ac[1], S = ac[2], Q = ac[3], ae = ac[4], ad = ac[5], ab = ac[6], aa = ac[7], Z = ac[8], Y = ac[9], X = ac[10], W = ac[11], T = ac[12], R = ac[13], P = ac[14], O = ac[15];
        return T * Y * ab * Q - Z * R * ab * Q - T * ad * X * Q + ae * R * X * Q + Z * ad * P * Q - ae * Y * P * Q - T * Y * S * aa + Z * R * S * aa + T * U * X * aa - V * R * X * aa - Z * U * P * aa + V * Y * P * aa + T * ad * S * W - ae * R * S * W - T * U * ab * W + V * R * ab * W + ae * U * P * W - V * ad * P * W - Z * ad * S * O + ae * Y * S * O + Z * U * ab * O - V * Y * ab * O - ae * U * X * O + V * ad * X * O;
    };
    H.member319 = r;
    var M = Class37.create();
    var E = function (O, P) {
        if (!P) {
            P = Class41.create();
        }
        H.member334(O, M);
        Class37.member314(M);
        P[0] = O[12];
        P[1] = O[13];
        P[2] = O[14];
        Class41.scale(P, -1);
        Class37.member318(M, P);
        return P;
    };
    H.member335 = E;
    var t = function (ak, af) {
        if (!af) {
            af = ak;
        }
        var ar = ak[0], ap = ak[1], ao = ak[2], am = ak[3], R = ak[4], Q = ak[5], P = ak[6], O = ak[7], ah = ak[8], ag = ak[9], ae = ak[10], ac = ak[11], au = ak[12], at = ak[13], aq = ak[14], an = ak[15], ab = ar * Q - ap * R, aa = ar * P - ao * R, Z = ar * O - am * R, Y = ap * P - ao * Q, X = ap * O - am * Q, W = ao * O - am * P, V = ah * at - ag * au, U = ah * aq - ae * au, T = ah * an - ac * au, S = ag * aq - ae * at, al = ag * an - ac * at, aj = ae * an - ac * aq, ad = ab * aj - aa * al + Z * S + Y * T - X * U + W * V, ai;
        if (!ad) {
            return null;
        }
        ai = 1 / ad;
        af[0] = (Q * aj - P * al + O * S) * ai;
        af[1] = (-ap * aj + ao * al - am * S) * ai;
        af[2] = (at * W - aq * X + an * Y) * ai;
        af[3] = (-ag * W + ae * X - ac * Y) * ai;
        af[4] = (-R * aj + P * T - O * U) * ai;
        af[5] = (ar * aj - ao * T + am * U) * ai;
        af[6] = (-au * W + aq * Z - an * aa) * ai;
        af[7] = (ah * W - ae * Z + ac * aa) * ai;
        af[8] = (R * al - Q * T + O * V) * ai;
        af[9] = (-ar * al + ap * T - am * V) * ai;
        af[10] = (au * X - at * Z + an * ab) * ai;
        af[11] = (-ah * X + ag * Z - ac * ab) * ai;
        af[12] = (-R * S + Q * U - P * V) * ai;
        af[13] = (ar * S - ap * U + ao * V) * ai;
        af[14] = (-au * Y + at * aa - aq * ab) * ai;
        af[15] = (ah * Y - ag * aa + ae * ab) * ai;
        return af;
    };
    H.inverse = t;
    var D = function (O, P) {
        if (!P) {
            P = h();
        }
        P[0] = O[0];
        P[1] = O[1];
        P[2] = O[2];
        P[3] = O[3];
        P[4] = O[4];
        P[5] = O[5];
        P[6] = O[6];
        P[7] = O[7];
        P[8] = O[8];
        P[9] = O[9];
        P[10] = O[10];
        P[11] = O[11];
        P[12] = 0;
        P[13] = 0;
        P[14] = 0;
        P[15] = 1;
        return P;
    };
    H.member336 = D;
    var I = function (O, P) {
        if (!P) {
            P = Class37.create();
        }
        P[0] = O[0];
        P[1] = O[1];
        P[2] = O[2];
        P[3] = O[4];
        P[4] = O[5];
        P[5] = O[6];
        P[6] = O[8];
        P[7] = O[9];
        P[8] = O[10];
        return P;
    };
    H.member334 = I;
    var B = function (ab, Z) {
        var T = ab[0], R = ab[1], Q = ab[2], ad = ab[4], ac = ab[5], aa = ab[6], X = ab[8], W = ab[9], V = ab[10], U = V * ac - aa * W, P = -V * ad + aa * X, Y = W * ad - ac * X, S = T * U + R * P + Q * Y, O;
        if (!S) {
            return null;
        }
        O = 1 / S;
        if (!Z) {
            Z = Class37.create();
        }
        Z[0] = U * O;
        Z[1] = (-V * R + Q * W) * O;
        Z[2] = (aa * R - Q * ac) * O;
        Z[3] = P * O;
        Z[4] = (V * T - Q * X) * O;
        Z[5] = (-aa * T + Q * ad) * O;
        Z[6] = Y * O;
        Z[7] = (-W * T + R * X) * O;
        Z[8] = (ac * T - R * ad) * O;
        return Z;
    };
    H.member337 = B;
    var L = function (an, W, ah) {
        if (!ah) {
            ah = an;
        }
        var av = an[0], au = an[1], ar = an[2], ap = an[3], V = an[4], U = an[5], T = an[6], S = an[7], aj = an[8], ai = an[9], ag = an[10], af = an[11], ax = an[12], aw = an[13], at = an[14], aq = an[15], ad = W[0], ab = W[1], Z = W[2], X = W[3], ao = W[4], am = W[5], al = W[6], ak = W[7], R = W[8], Q = W[9], P = W[10], O = W[11], ae = W[12], ac = W[13], aa = W[14], Y = W[15];
        ah[0] = ad * av + ab * V + Z * aj + X * ax;
        ah[1] = ad * au + ab * U + Z * ai + X * aw;
        ah[2] = ad * ar + ab * T + Z * ag + X * at;
        ah[3] = ad * ap + ab * S + Z * af + X * aq;
        ah[4] = ao * av + am * V + al * aj + ak * ax;
        ah[5] = ao * au + am * U + al * ai + ak * aw;
        ah[6] = ao * ar + am * T + al * ag + ak * at;
        ah[7] = ao * ap + am * S + al * af + ak * aq;
        ah[8] = R * av + Q * V + P * aj + O * ax;
        ah[9] = R * au + Q * U + P * ai + O * aw;
        ah[10] = R * ar + Q * T + P * ag + O * at;
        ah[11] = R * ap + Q * S + P * af + O * aq;
        ah[12] = ae * av + ac * V + aa * aj + Y * ax;
        ah[13] = ae * au + ac * U + aa * ai + Y * aw;
        ah[14] = ae * ar + ac * T + aa * ag + Y * at;
        ah[15] = ae * ap + ac * S + aa * af + Y * aq;
        return ah;
    };
    H.member323 = L;
    var A = function (ag, Q, ab, af) {
        if (!ab) {
            ab = ag;
        }
        var am = ag[0], ak = ag[1], aj = ag[2], ai = ag[3], W = ag[4], V = ag[5], U = ag[6], T = ag[7], ay = ag[8], ax = ag[9], aw = ag[10], av = ag[11], ap = ag[12], ao = ag[13], an = ag[14], al = ag[15], ac = Q[af + 0], aa = Q[af + 1], Y = Q[af + 2], X = Q[af + 3], S = Q[af + 4], R = Q[af + 5], P = Q[af + 6], O = Q[af + 7], au = Q[af + 8], at = Q[af + 9], ar = Q[af + 10], aq = Q[af + 11], ah = Q[af + 12], ae = Q[af + 13], ad = Q[af + 14], Z = Q[af + 15];
        ab[af + 0] = ac * am + aa * W + Y * ay + X * ap;
        ab[af + 1] = ac * ak + aa * V + Y * ax + X * ao;
        ab[af + 2] = ac * aj + aa * U + Y * aw + X * an;
        ab[af + 3] = ac * ai + aa * T + Y * av + X * al;
        ab[af + 4] = S * am + R * W + P * ay + O * ap;
        ab[af + 5] = S * ak + R * V + P * ax + O * ao;
        ab[af + 6] = S * aj + R * U + P * aw + O * an;
        ab[af + 7] = S * ai + R * T + P * av + O * al;
        ab[af + 8] = au * am + at * W + ar * ay + aq * ap;
        ab[af + 9] = au * ak + at * V + ar * ax + aq * ao;
        ab[af + 10] = au * aj + at * U + ar * aw + aq * an;
        ab[af + 11] = au * ai + at * T + ar * av + aq * al;
        ab[af + 12] = ah * am + ae * W + ad * ay + Z * ap;
        ab[af + 13] = ah * ak + ae * V + ad * ax + Z * ao;
        ab[af + 14] = ah * aj + ae * U + ad * aw + Z * an;
        ab[af + 15] = ah * ai + ae * T + ad * av + Z * al;
        return ab;
    };
    H.member338 = A;
    var z = function (ag, Q, ab, af) {
        if (!ab) {
            ab = ag;
        }
        var am = ag[0], ak = ag[1], aj = ag[2], ai = ag[3], W = ag[4], V = ag[5], U = ag[6], T = ag[7], ay = ag[8], ax = ag[9], aw = ag[10], av = ag[11], ap = ag[12], ao = ag[13], an = ag[14], al = ag[15], ac = Q[af + 0], aa = Q[af + 1], Y = Q[af + 2], X = 0, S = Q[af + 3], R = Q[af + 4], P = Q[af + 5], O = 0, au = Q[af + 6], at = Q[af + 7], ar = Q[af + 8], aq = 0, ah = Q[af + 9], ae = Q[af + 10], ad = Q[af + 11], Z = 1;
        ab[af + 0] = ac * am + aa * W + Y * ay + X * ap;
        ab[af + 1] = ac * ak + aa * V + Y * ax + X * ao;
        ab[af + 2] = ac * aj + aa * U + Y * aw + X * an;
        ab[af + 3] = S * am + R * W + P * ay + O * ap;
        ab[af + 4] = S * ak + R * V + P * ax + O * ao;
        ab[af + 5] = S * aj + R * U + P * aw + O * an;
        ab[af + 6] = au * am + at * W + ar * ay + aq * ap;
        ab[af + 7] = au * ak + at * V + ar * ax + aq * ao;
        ab[af + 8] = au * aj + at * U + ar * aw + aq * an;
        ab[af + 9] = ah * am + ae * W + ad * ay + Z * ap;
        ab[af + 10] = ah * ak + ae * V + ad * ax + Z * ao;
        ab[af + 11] = ah * aj + ae * U + ad * aw + Z * an;
        return ab;
    };
    H.member339 = z;
    var J = function (Q, P, T) {
        if (!T) {
            T = P;
        }
        var O = P[0], S = P[1], R = P[2];
        T[0] = Q[0] * O + Q[4] * S + Q[8] * R + Q[12];
        T[1] = Q[1] * O + Q[5] * S + Q[9] * R + Q[13];
        T[2] = Q[2] * O + Q[6] * S + Q[10] * R + Q[14];
        return T;
    };
    H.member318 = J;
    var x = function (Q, P, T) {
        if (!T) {
            T = P;
        }
        var O = P[0], S = P[1], R = P[2];
        T[0] = Q[0] * O + Q[4] * S + Q[8] * R;
        T[1] = Q[1] * O + Q[5] * S + Q[9] * R;
        T[2] = Q[2] * O + Q[6] * S + Q[10] * R;
        return T;
    };
    H.member340 = x;
    var v = function (Q, P, T) {
        if (!T) {
            T = P;
        }
        var O = P[0], S = P[1], R = P[2];
        T[0] = Q[0] * O + Q[3] * S + Q[6] * R + Q[9];
        T[1] = Q[1] * O + Q[4] * S + Q[7] * R + Q[10];
        T[2] = Q[2] * O + Q[5] * S + Q[8] * R + Q[11];
        return T;
    };
    H.member341 = v;
    var u = function (Q, P, U, R) {
        if (!U) {
            U = P;
        }
        var O = P[0], T = P[1], S = P[2];
        U[0] = Q[R + 0] * O + Q[R + 4] * T + Q[R + 8] * S + Q[R + 12];
        U[1] = Q[R + 1] * O + Q[R + 5] * T + Q[R + 9] * S + Q[R + 13];
        U[2] = Q[R + 2] * O + Q[R + 6] * T + Q[R + 10] * S + Q[R + 14];
        return U;
    };
    H.member342 = u;
    var s = function (Q, P, U, R) {
        if (!U) {
            U = P;
        }
        var O = P[0], T = P[1], S = P[2];
        U[0] = Q[R + 0] * O + Q[R + 3] * T + Q[R + 6] * S + Q[R + 9];
        U[1] = Q[R + 1] * O + Q[R + 4] * T + Q[R + 7] * S + Q[R + 10];
        U[2] = Q[R + 2] * O + Q[R + 5] * T + Q[R + 8] * S + Q[R + 11];
        return U;
    };
    H.member343 = s;
    var q = function (R, Q, U) {
        if (!U) {
            U = Q;
        }
        var O = Q[0], T = Q[1], S = Q[2], P = Q[3];
        U[0] = R[0] * O + R[4] * T + R[8] * S + R[12] * P;
        U[1] = R[1] * O + R[5] * T + R[9] * S + R[13] * P;
        U[2] = R[2] * O + R[6] * T + R[10] * S + R[14] * P;
        U[3] = R[3] * O + R[7] * T + R[11] * S + R[15] * P;
        return U;
    };
    H.member331 = q;
    var a = function (ab, O, Y) {
        var V = O[0], U = O[1], T = O[2], af, ae, ad, ac, S, R, Q, P, aa, Z, X, W;
        if (!Y || ab === Y) {
            ab[12] = ab[0] * V + ab[4] * U + ab[8] * T + ab[12];
            ab[13] = ab[1] * V + ab[5] * U + ab[9] * T + ab[13];
            ab[14] = ab[2] * V + ab[6] * U + ab[10] * T + ab[14];
            ab[15] = ab[3] * V + ab[7] * U + ab[11] * T + ab[15];
            return ab;
        }
        af = ab[0];
        ae = ab[1];
        ad = ab[2];
        ac = ab[3];
        S = ab[4];
        R = ab[5];
        Q = ab[6];
        P = ab[7];
        aa = ab[8];
        Z = ab[9];
        X = ab[10];
        W = ab[11];
        Y[0] = af;
        Y[1] = ae;
        Y[2] = ad;
        Y[3] = ac;
        Y[4] = S;
        Y[5] = R;
        Y[6] = Q;
        Y[7] = P;
        Y[8] = aa;
        Y[9] = Z;
        Y[10] = X;
        Y[11] = W;
        Y[12] = af * V + S * U + aa * T + ab[12];
        Y[13] = ae * V + R * U + Z * T + ab[13];
        Y[14] = ad * V + Q * U + X * T + ab[14];
        Y[15] = ac * V + P * U + W * T + ab[15];
        return Y;
    };
    H.translate = a;
    H.member344 = function (O, P) {
        if (P === undefined) {
            P = new Float32Array(3);
        }
        P[0] = O[12];
        P[1] = O[13];
        P[2] = O[14];
        return P;
    };
    var F = function (Q, P, T) {
        var O = P[0], S = P[1], R = P[2];
        if (!T || Q === T) {
            Q[0] *= O;
            Q[1] *= O;
            Q[2] *= O;
            Q[3] *= O;
            Q[4] *= S;
            Q[5] *= S;
            Q[6] *= S;
            Q[7] *= S;
            Q[8] *= R;
            Q[9] *= R;
            Q[10] *= R;
            Q[11] *= R;
            return Q;
        }
        T[0] = Q[0] * O;
        T[1] = Q[1] * O;
        T[2] = Q[2] * O;
        T[3] = Q[3] * O;
        T[4] = Q[4] * S;
        T[5] = Q[5] * S;
        T[6] = Q[6] * S;
        T[7] = Q[7] * S;
        T[8] = Q[8] * R;
        T[9] = Q[9] * R;
        T[10] = Q[10] * R;
        T[11] = Q[11] * R;
        T[12] = Q[12];
        T[13] = Q[13];
        T[14] = Q[14];
        T[15] = Q[15];
        return T;
    };
    H.scale = F;
    var K = function (an, ak, P, ai) {
        var Z = P[0], Y = P[1], X = P[2], ac = Math.sqrt(Z * Z + Y * Y + X * X), O, ap, ae, au, at, ar, aq, W, V, U, T, aj, ah, ag, af, ad, ab, aa, ao, am, al, S, R, Q;
        if (!ac) {
            return null;
        }
        if (ac !== 1) {
            ac = 1 / ac;
            Z *= ac;
            Y *= ac;
            X *= ac;
        }
        O = Math.sin(ak);
        ap = Math.cos(ak);
        ae = 1 - ap;
        au = an[0];
        at = an[1];
        ar = an[2];
        aq = an[3];
        W = an[4];
        V = an[5];
        U = an[6];
        T = an[7];
        aj = an[8];
        ah = an[9];
        ag = an[10];
        af = an[11];
        ad = Z * Z * ae + ap;
        ab = Y * Z * ae + X * O;
        aa = X * Z * ae - Y * O;
        ao = Z * Y * ae - X * O;
        am = Y * Y * ae + ap;
        al = X * Y * ae + Z * O;
        S = Z * X * ae + Y * O;
        R = Y * X * ae - Z * O;
        Q = X * X * ae + ap;
        if (!ai) {
            ai = an;
        } else if (an !== ai) {
            ai[12] = an[12];
            ai[13] = an[13];
            ai[14] = an[14];
            ai[15] = an[15];
        }
        ai[0] = au * ad + W * ab + aj * aa;
        ai[1] = at * ad + V * ab + ah * aa;
        ai[2] = ar * ad + U * ab + ag * aa;
        ai[3] = aq * ad + T * ab + af * aa;
        ai[4] = au * ao + W * am + aj * al;
        ai[5] = at * ao + V * am + ah * al;
        ai[6] = ar * ao + U * am + ag * al;
        ai[7] = aq * ao + T * am + af * al;
        ai[8] = au * S + W * R + aj * Q;
        ai[9] = at * S + V * R + ah * Q;
        ai[10] = ar * S + U * R + ag * Q;
        ai[11] = aq * S + T * R + af * Q;
        return ai;
    };
    H.rotate = K;
    var o = function (Y, T, V) {
        var W = Math.sin(T), S = Math.cos(T), aa = Y[4], Z = Y[5], X = Y[6], U = Y[7], R = Y[8], Q = Y[9], P = Y[10], O = Y[11];
        if (!V) {
            V = Y;
        } else if (Y !== V) {
            V[0] = Y[0];
            V[1] = Y[1];
            V[2] = Y[2];
            V[3] = Y[3];
            V[12] = Y[12];
            V[13] = Y[13];
            V[14] = Y[14];
            V[15] = Y[15];
        }
        V[4] = aa * S + R * W;
        V[5] = Z * S + Q * W;
        V[6] = X * S + P * W;
        V[7] = U * S + O * W;
        V[8] = aa * -W + R * S;
        V[9] = Z * -W + Q * S;
        V[10] = X * -W + P * S;
        V[11] = U * -W + O * S;
        return V;
    };
    H.member345 = o;
    var n = function (aa, X, Y) {
        var Z = Math.sin(X), W = Math.cos(X), R = aa[0], Q = aa[1], P = aa[2], O = aa[3], V = aa[8], U = aa[9], T = aa[10], S = aa[11];
        if (!Y) {
            Y = aa;
        } else if (aa !== Y) {
            Y[4] = aa[4];
            Y[5] = aa[5];
            Y[6] = aa[6];
            Y[7] = aa[7];
            Y[12] = aa[12];
            Y[13] = aa[13];
            Y[14] = aa[14];
            Y[15] = aa[15];
        }
        Y[0] = R * W + V * -Z;
        Y[1] = Q * W + U * -Z;
        Y[2] = P * W + T * -Z;
        Y[3] = O * W + S * -Z;
        Y[8] = R * Z + V * W;
        Y[9] = Q * Z + U * W;
        Y[10] = P * Z + T * W;
        Y[11] = O * Z + S * W;
        return Y;
    };
    H.member346 = n;
    var m = function (Z, T, V) {
        var W = Math.sin(T), S = Math.cos(T), R = Z[0], Q = Z[1], P = Z[2], O = Z[3], aa = Z[4], Y = Z[5], X = Z[6], U = Z[7];
        if (!V) {
            V = Z;
        } else if (Z !== V) {
            V[8] = Z[8];
            V[9] = Z[9];
            V[10] = Z[10];
            V[11] = Z[11];
            V[12] = Z[12];
            V[13] = Z[13];
            V[14] = Z[14];
            V[15] = Z[15];
        }
        V[0] = R * S + aa * W;
        V[1] = Q * S + Y * W;
        V[2] = P * S + X * W;
        V[3] = O * S + U * W;
        V[4] = R * -W + aa * S;
        V[5] = Q * -W + Y * S;
        V[6] = P * -W + X * S;
        V[7] = O * -W + U * S;
        return V;
    };
    H.member347 = m;
    var k = function (Q, U, S, V, T, R, W) {
        if (!W) {
            W = h();
        }
        var P = U - Q, O = V - S, X = R - T;
        W[0] = T * 2 / P;
        W[1] = 0;
        W[2] = 0;
        W[3] = 0;
        W[4] = 0;
        W[5] = T * 2 / O;
        W[6] = 0;
        W[7] = 0;
        W[8] = (U + Q) / P;
        W[9] = (V + S) / O;
        W[10] = -(R + T) / X;
        W[11] = -1;
        W[12] = 0;
        W[13] = 0;
        W[14] = -(R * T * 2) / X;
        W[15] = 0;
        return W;
    };
    H.member348 = k;
    var j = function (Q, P, R, O, U) {
        var S = R * Math.tan(Q * Math.PI / 360), T = S * P;
        return k(-T, T, -S, S, R, O, U);
    };
    H.member349 = j;
    var i = function (Y, X, S, P, Q, O, T, R, W) {
        var V = T * Math.tan(Q * Math.PI / 360);
        var U = V * O;
        var aa = -2 * Y * U / S;
        var Z = -2 * X * V / P;
        return k(-U + aa, U + aa, -V + Z, V + Z, T, R, W);
    };
    H.member350 = i;
    var g = function (Q, U, S, V, T, R, W) {
        if (!W) {
            W = h();
        }
        var P = U - Q, O = V - S, X = R - T;
        W[0] = 2 / P;
        W[1] = 0;
        W[2] = 0;
        W[3] = 0;
        W[4] = 0;
        W[5] = 2 / O;
        W[6] = 0;
        W[7] = 0;
        W[8] = 0;
        W[9] = 0;
        W[10] = -2 / X;
        W[11] = 0;
        W[12] = -(Q + U) / P;
        W[13] = -(V + S) / O;
        W[14] = -(R + T) / X;
        W[15] = 1;
        return W;
    };
    H.member351 = g;
    var N = function (au, av, Y, ah) {
        if (!ah) {
            ah = h();
        }
        var ar, aq, at, O, U, S, ad, aa, Z, ac, ap = au[0], ao = au[1], an = au[2], T = Y[0], R = Y[1], Q = Y[2], am = av[0], al = av[1], ak = av[2];
        if (ap === am && ao === al && an === ak) {
            return b(ah);
        }
        var aj = am - ap;
        var ai = al - ao;
        var ag = ak - an;
        var P = Math.sqrt(aj * aj + ai * ai + ag * ag);
        aj /= P;
        ai /= P;
        ag /= P;
        var X = ag * R - ai * Q;
        var W = aj * Q - ag * T;
        var V = ai * T - aj * R;
        var P = Math.sqrt(X * X + W * W + V * V);
        X /= P;
        W /= P;
        V /= P;
        var af = ai * V - ag * W;
        var ae = ag * X - aj * V;
        var ab = aj * W - ai * X;
        var P = Math.sqrt(af * af + ae * ae + ab * ab);
        af /= P;
        ae /= P;
        ab /= P;
        ah[0] = X;
        ah[1] = W;
        ah[2] = V;
        ah[3] = 0;
        ah[4] = af;
        ah[5] = ae;
        ah[6] = ab;
        ah[7] = 0;
        ah[8] = aj;
        ah[9] = ai;
        ah[10] = ag;
        ah[11] = 0;
        ah[12] = ap;
        ah[13] = ao;
        ah[14] = an;
        ah[15] = 1;
        return ah;
    };
    H.member352 = N;
    var e = function (P, O) {
        if (P === undefined) {
            P = Class37.create();
        }
        P[0] = O[0];
        P[1] = O[4];
        P[2] = O[8];
        P[3] = O[1];
        P[4] = O[5];
        P[5] = O[9];
        P[6] = O[2];
        P[7] = O[6];
        P[8] = O[10];
        return P;
    };
    H.member353 = e;
    var d = function (O, P, ae) {
        if (!ae) {
            ae = h();
        }
        var Z = O[0], Y = O[1], V = O[2], aa = O[3], af = Z + Z, S = Y + Y, ab = V + V, T = Z * af, R = Z * S, Q = Z * ab, ad = Y * S, ac = Y * ab, ag = V * ab, U = aa * af, W = aa * S, X = aa * ab;
        ae[0] = 1 - (ad + ag);
        ae[1] = R + X;
        ae[2] = Q - W;
        ae[3] = 0;
        ae[4] = R - X;
        ae[5] = 1 - (T + ag);
        ae[6] = ac + U;
        ae[7] = 0;
        ae[8] = Q + W;
        ae[9] = ac - U;
        ae[10] = 1 - (T + ad);
        ae[11] = 0;
        ae[12] = P[0];
        ae[13] = P[1];
        ae[14] = P[2];
        ae[15] = 1;
        return ae;
    };
    H.member354 = d;
    var c = function (O, P, Q) {
        if (!Q) {
            Q = h();
        }
        Q[0] = -2 * O[0] * O[0] + 1;
        Q[1] = -2 * O[1] * O[0];
        Q[2] = -2 * O[2] * O[0];
        Q[3] = 0;
        Q[4] = -2 * O[0] * O[1];
        Q[5] = -2 * O[1] * O[1] + 1;
        Q[6] = -2 * O[2] * O[1];
        Q[7] = 0;
        Q[8] = -2 * O[0] * O[2];
        Q[9] = -2 * O[1] * O[2];
        Q[10] = -2 * O[2] * O[2] + 1;
        Q[11] = 0;
        Q[12] = -2 * O[0] * P;
        Q[13] = -2 * O[1] * P;
        Q[14] = -2 * O[2] * P;
        Q[15] = 1;
        return Q;
    };
    H.member355 = c;
    var G = function (O) {
        return '[' + O[0] + ', ' + O[1] + ', ' + O[2] + ', ' + O[3] + ', ' + O[4] + ', ' + O[5] + ', ' + O[6] + ', ' + O[7] + ', ' + O[8] + ', ' + O[9] + ', ' + O[10] + ', ' + O[11] + ', ' + O[12] + ', ' + O[13] + ', ' + O[14] + ', ' + O[15] + ']';
    };
    H.member299 = G;
    H.member356 = function (U, T, R, W, S, Q, P, O, V) {
        if (!V) {
            V = h();
        }
        V[0] = R * 2 / P;
        V[1] = 0;
        V[2] = 0;
        V[3] = 0;
        V[4] = 0;
        V[5] = W * 2 / O;
        V[6] = 0;
        V[7] = 0;
        V[8] = -(U * 2 / P - 1);
        V[9] = T * 2 / O - 1;
        V[10] = -(Q + S) / (Q - S);
        V[11] = -1;
        V[12] = 0;
        V[13] = 0;
        V[14] = 2 * Q * S / (S - Q);
        V[15] = 0;
        return V;
    };
    H.member357 = function (Y, W, T, aa, U, R, Q, O, ab, Z) {
        var P = -(Y * ab) / T;
        var V = ab * (Q - Y) / T;
        var S = -(W * ab) / aa;
        var X = ab * (O - W) / aa;
        Z = g(P, V, S, X, U, R, Z);
        Z[13] = -Z[13];
        return Z;
    };
    return H;
}();