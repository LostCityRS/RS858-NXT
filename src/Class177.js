import { Class41 } from 'Class41.js';
import { Class140 } from 'Class140.js';
import { Class49 } from 'Class49.js';
import { Class50 } from 'Class50.js';
import { Class167 } from 'Class167.js';
export var Class177 = function () {
    var E = Class41.create();
    var A = Class41.create();
    var m = Class140.create();
    var q = Class140.create();
    var n = [
        1,
        0,
        0
    ];
    var c = [
        0,
        1,
        0
    ];
    var y = [
        0,
        0,
        1
    ];
    var u = Class41.create();
    var G = Class41.create();
    var k = Class49.member313();
    var B = Class41.create();
    var r = 0;
    var o = 1;
    var J = new Float32Array([
        0,
        0,
        0
    ]);
    var t = Class140.create();
    Class140.member1354(t);
    var j = new Float32Array([
        1,
        1,
        1
    ]);
    var z = Class50.member364;
    var d = 1 << 0;
    var b = 1 << 1;
    var L = 1 << 2;
    var F = 1 << 3;
    var D = 1 << 4;
    var C = 1 << 5;
    var a = 1 << 6;
    var K = 1 << 7;
    var I = 1 << 8;
    var i = function (R, O, Q, P, S, N) {
        this.member1955;
        this.member1956;
        this.member1957 = null;
        this.member1958 = null;
        this.member1959 = null;
        this.member1838 = false;
        this.member1960 = null;
        this.member1961 = null;
        this.member1962 = null;
        if (R !== undefined && O !== undefined && Q !== undefined) {
            g.call(this, R, O, Q);
        } else if (P !== undefined && S !== undefined) {
            x.call(this, P, S);
        } else if (N !== undefined) {
            this.member1956 = N.member1956;
            this.member1957 = N.member1957;
            this.member1958 = N.member1958;
            this.member1959 = N.member1959;
            this.member1838 = N.member1838;
            this.member1960 = N.member1960;
            this.member1961 = N.member1961;
            this.member1962 = N.member1962;
        } else {
            throw new Error('1346 ');
        }
        this.member1963 = true;
        if (this.member1960 !== undefined && this.member1960 !== null) {
            for (var M = 0; M < this.member1960.length; ++M) {
                if (this.member1960[M] !== 0) {
                    this.member1963 = false;
                    break;
                }
            }
        }
    };
    i.prototype.member1964 = function () {
        return this.member1963;
    };
    i.prototype.member1965 = function () {
        return this.member1956;
    };
    i.prototype.member1733 = function () {
        if (this.member1957 === null) {
            return Class50.member379;
        } else {
            return this.member1957;
        }
    };
    i.prototype.member1734 = function () {
        if (this.member1958 === null) {
            return Class50.member380;
        } else {
            return this.member1958;
        }
    };
    i.prototype.member1966 = function () {
        if (this.member1959 === null) {
            return Class50.member381;
        } else {
            return this.member1959;
        }
    };
    i.prototype.member1843 = function () {
        return this.member1838;
    };
    i.prototype.member1967 = function () {
        if (this.member1960 === null) {
            return Class50.member382;
        } else {
            return this.member1960;
        }
    };
    i.prototype.member1968 = function () {
        if (this.member1961 === null) {
            return Class50.member383;
        } else {
            return this.member1961;
        }
    };
    i.prototype.member1969 = function () {
        if (this.member1962 === null) {
            return Class50.member384;
        } else {
            return this.member1962;
        }
    };
    i.prototype.member681 = function (M) {
        if (this.member1957 !== null) {
            M.push(this.member1957.buffer);
        }
        if (this.member1958 !== null) {
            M.push(this.member1958.buffer);
        }
        if (this.member1959 !== null) {
            M.push(this.member1959.buffer);
        }
        if (this.member1960 !== null) {
            M.push(this.member1960.buffer);
        }
        if (this.member1961 !== null) {
            M.push(this.member1961.buffer);
        }
        if (this.member1962 !== null) {
            M.push(this.member1962.buffer);
        }
        return {
            member1956: this.member1956,
            member1957: this.member1957,
            member1958: this.member1958,
            member1959: this.member1959,
            member1838: this.member1838,
            member1960: this.member1960,
            member1961: this.member1961,
            member1962: this.member1962
        };
    };
    i.prototype.member1970 = function (P, N, M, S) {
        var V = 1;
        if (this.member1955 === o) {
            s.call(this, undefined, 0);
            if (P !== null) {
                for (var O = 0; O < 12; O++) {
                    M[O] = Class50.member379[O];
                }
                for (var Q = 0; Q < P.length; Q++) {
                    if (P[Q] === undefined) {
                        continue;
                    }
                    var T = P[Q] * 12;
                    var U;
                }
            } else {
                var U;
            }
        } else if (P !== null) {
            for (var O = 0; O < 12; O++) {
                M[O] = Class50.member379[O];
            }
            for (var Q = 0; Q < P.length; Q++) {
                if (P[Q] === undefined) {
                    continue;
                }
                var R = this.member1957;
                if (R === null || Q * 12 >= R.length) {
                    R = Class50.member379;
                }
                var T = P[Q] * 12;
                if (S !== undefined) {
                    V = S[Q];
                }
                for (var O = 0; O < 12; O++) {
                    M[T + O] = M[T + O] * (1 - V) + R[Q * 12 + O] * V;
                }
            }
        } else {
            var R = this.member1957;
            if (R === null || N * 12 >= R.length) {
                R = Class50.member379;
            }
            if (S !== undefined) {
                V = S[N];
            }
            for (var O = 0; O < 12; O++) {
                M[O] = M[O] * (1 - V) + R[N * 12 + O] * V;
            }
        }
        return M;
    };
    i.prototype.member1971 = function (O, M, S, P, N, W) {
        if (this.member1955 === o) {
            s.call(this, O, M);
            if (S !== null) {
                for (var Q = 0; Q < 12; Q++) {
                    N[Q] = Class50.member379[Q];
                }
                for (var T = 0; T < S.length; T++) {
                    if (S[T] === undefined) {
                        continue;
                    }
                    var Y = S[T] * 12;
                    var Z;
                }
            } else {
                var Z;
            }
        } else if (S !== null) {
            if (W !== undefined) {
                this.member1972(O, M, S, N, W);
            } else {
                this.member1973(O, M, S, N);
            }
        } else {
            var aa = 1;
            var V = this.member1957;
            var R = this.member1960;
            if (V === null || P * 12 >= V.length) {
                V = Class50.member379;
                R = Class50.member382;
            }
            var X = O.member1733();
            var U = O.member1967();
            if (X === null || P * 12 >= X.length) {
                X = Class50.member379;
                U = Class50.member382;
            }
            if (W !== undefined) {
                aa = W[P];
            }
            if (R !== null && (R[P] & Class50.member376) !== 0 || U !== null && (U[P] & Class50.member375) !== 0) {
                for (var Q = 0; Q < 12; Q++) {
                    N[Q] = N[Q] * (1 - aa) + V[P * 12 + Q] * aa;
                }
            } else {
                for (var Q = 0; Q < 12; Q++) {
                    N[Q] = N[Q] * (1 - aa) + (V[P * 12 + Q] + (X[P * 12 + Q] - V[P * 12 + Q]) * M) * aa;
                }
            }
        }
        return N;
    };
    i.prototype.member1973 = function (aa, ae, S, N) {
        var V = S.length;
        var W = this.member1957;
        var T = this.member1960;
        var ad = this.member1964() && aa.member1964();
        if (W === null) {
            W = Class50.member379;
        }
        if (T === null) {
            T = Class50.member382;
        }
        var U = W.length / 12;
        var ac = aa.member1733();
        var X = aa.member1967();
        if (ac === null) {
            ac = Class50.member379;
        }
        if (X === null) {
            X = Class50.member382;
        }
        var Z = ac.length / 12;
        if (V < U && V < Z && ad && S.member1904 !== undefined) {
            var O = S.member1904.length / 2 | 0;
            for (var Q = 0; Q < O; Q++) {
                var P = S.member1904[Q * 2 + 0] * 12;
                var R = S.member1904[Q * 2 + 1] * 12;
                for (var Y = 0; Y < 12; Y++) {
                    var M = W[P + Y];
                    N[R + Y] = M + (ac[P + Y] - M) * ae;
                }
            }
        } else {
            for (var ab = 0; ab < V; ab++) {
                if (S[ab] === undefined) {
                    continue;
                }
                if (ab >= U) {
                    W = Class50.member379;
                    T = Class50.member382;
                }
                if (ab >= Z) {
                    ac = Class50.member379;
                    X = Class50.member382;
                }
                var R = S[ab] * 12;
                var P = ab * 12;
                if ((T[ab] & Class50.member376) !== 0 || (X[ab] & Class50.member375) !== 0) {
                    for (var Y = 0; Y < 12; Y++) {
                        N[R + Y] = W[P + Y];
                    }
                } else {
                    for (var Y = 0; Y < 12; Y++) {
                        var M = W[P + Y];
                        N[R + Y] = M + (ac[P + Y] - M) * ae;
                    }
                }
            }
        }
    };
    i.prototype.member1972 = function (ab, ae, Q, N, Y) {
        var U = Q.length;
        var V = this.member1957;
        var S = this.member1960;
        if (V === null) {
            V = Class50.member379;
        }
        if (S === null) {
            S = Class50.member382;
        }
        var T = V.length / 12;
        var ac = ab.member1733();
        var W = ab.member1967();
        if (ac === null) {
            ac = Class50.member379;
        }
        if (W === null) {
            W = Class50.member382;
        }
        var aa = ac.length / 12;
        for (var ad = 0; ad < U; ad++) {
            if (Q[ad] === undefined) {
                continue;
            }
            if (ad >= T) {
                V = Class50.member379;
                S = Class50.member382;
            }
            if (ad >= aa) {
                ac = Class50.member379;
                W = Class50.member382;
            }
            var P = Q[ad] * 12;
            var Z = Y[ad];
            var R = 1 - Z;
            var O = ad * 12;
            if ((S[ad] & Class50.member376) !== 0 || (W[ad] & Class50.member375) !== 0) {
                for (var X = 0; X < 12; X++) {
                    N[P + X] = N[P + X] * R + V[O + X] * Z;
                }
            } else {
                for (var X = 0; X < 12; X++) {
                    var M = V[O + X];
                    N[P + X] = N[P + X] * R + (M + (ac[O + X] - M) * ae) * Z;
                }
            }
        }
    };
    var s = function (ae, ag) {
        var af;
        if (ae !== undefined) {
            af = ae.member1733();
        }
        for (var Z = 0; Z < this.member1957.length; Z++) {
            var N = this.member1957[Z].member1974;
            var Q = N;
            if (af !== undefined) {
                Q = af[Z].member1974;
            }
            var W = new Float32Array(3);
            Class41.member329(N, Q, ag, W);
            var ac = this.member1957[Z].member1975;
            var ab = ac;
            if (af !== undefined) {
                ab = af[Z].member1975;
            }
            var Y = Class140.member327(ac, ab);
            var P;
            if (Y < 0) {
                P = Class140.create();
                Class140.member324(ab, P);
            } else {
                P = ab;
            }
            var M = Class140.create();
            Class140.member1356(ac, P, ag, M);
            var V = this.member1957[Z].member1976;
            var ad = V;
            if (af !== undefined) {
                ad = af[Z].member1976;
            }
            var R = new Float32Array(3);
            Class41.member329(V, ad, ag, R);
            var O = Class49.member313();
            Class49.member354(M, W, O);
            Class49.member323(this.member1957[Z].member1977, O, O);
            var S = this.member1957[Z].member1978;
            var aa;
            if (S !== -1) {
                var T = this.member1957[S];
                aa = T.member1979;
                if (aa === undefined) {
                    throw new Error('1347 ');
                }
            } else {
                aa = Class49.member313();
            }
            var X = Class49.member313();
            Class49.member323(aa, O, X);
            this.member1957[Z].member1979 = X;
            var U = Class49.member313();
            Class49.member323(X, this.member1957[Z].member1980, U);
            this.member1957[Z].member1981 = U;
        }
    };
    var x = function (N, P) {
        this.member1955 = o;
        this.member1957 = new Array(P.member1982());
        P.member1983();
        this.member1956 = N.member1078();
        var O = N.member1078();
        var R = -1;
        if (O > 0) {
            R = N.member1078();
        }
        var Q = 0;
        for (var M = 0; M < this.member1957.length; M++) {
            if (M === R) {
                H.call(this, P, M, N);
                Q++;
                if (Q < O) {
                    R = N.member1078();
                } else {
                    R = -1;
                }
            } else {
                e.call(this, P, M);
            }
        }
    };
    var H = function (O, M, T) {
        var R = T.member1078();
        var U = new Float32Array(3);
        var P = new Float32Array(3);
        var N = new Float32Array(3);
        N[0] = N[1] = N[2] = 1;
        if ((R & d) !== 0) {
            U[0] = T.member1080();
        }
        if ((R & b) !== 0) {
            U[1] = T.member1080();
        }
        if ((R & L) !== 0) {
            U[2] = T.member1080();
        }
        if ((R & F) !== 0) {
            P[0] = T.member1080() / (16383 / (Math.PI * 2));
        }
        if ((R & D) !== 0) {
            P[1] = T.member1080() / (16383 / (Math.PI * 2));
        }
        if ((R & C) !== 0) {
            P[2] = T.member1080() / (16383 / (Math.PI * 2));
        }
        if ((R & a) !== 0) {
            N[0] = T.member1080() / 4095;
        }
        if ((R & K) !== 0) {
            N[1] = T.member1080() / 4095;
        }
        if ((R & I) !== 0) {
            N[2] = T.member1080() / 4095;
        }
        var Q = O.member1984(M);
        var S = Class140.create();
        Class140.member1353(n, P[0], S);
        Class140.member1353(c, P[1], m);
        Class140.member1353(y, P[2], q);
        Class140.member323(S, m);
        Class140.member323(S, q);
        Class140.normalize(S);
        this.member1957[M] = v(Q, U, S, N);
    };
    var e = function (O, N) {
        var M = O.member1984(N);
        this.member1957[N] = v(M, J, t, j);
    };
    var v = function (Q, P, T, S) {
        var N = Q.member1985();
        var O = -1;
        if (N !== undefined) {
            O = N.member1722();
        }
        var R = Q.member1986();
        var M = Class49.member313();
        Class49.inverse(R, M);
        return {
            member1978: O,
            member1977: Q.member1987(),
            member1988: R,
            member1980: M,
            member1974: P,
            member1975: T,
            member1976: S
        };
    };
    var h = function (N, M, P, R) {
        var Q = N.member1834(M);
        if (Q !== undefined) {
            for (var O = 0; O < Q.length; O++) {
                var S = Q[O];
                if (P === Class167.member1818 || P === Class167.member1819 || P === Class167.member1820 || P === Class167.member1817) {
                    if (S > R.member1989) {
                        R.member1989 = S;
                    }
                } else if (P === Class167.member1821 || P === Class167.member1823) {
                    if (S > R.member1831) {
                        R.member1831 = S;
                    }
                } else if (P === Class167.member1824 || P === Class167.member1825 || P === Class167.member1826) {
                    if (S > R.member1990) {
                        R.member1990 = S;
                    }
                }
            }
        }
    };
    var g = function (X, ac, af) {
        this.member1955 = r;
        this.member1956 = ac;
        if (X === undefined) {
            return;
        }
        var ae = X.member1842();
        var ah = X.member1832();
        var T = -1, Q = -1, P = -1;
        var O = {
            member1989: 0,
            member1831: 0,
            member1990: 0
        };
        for (var Z = 0; Z < ah; Z++) {
            var N = X.member1844(Z);
            var S = X.member1849(Z);
            var M = ae.member1833(N);
            h(ae, N, M, O);
            if (S !== -1) {
                h(ae, S, Class167.member1817, O);
            }
        }
        T = O.member1989;
        Q = O.member1831;
        P = O.member1990;
        if (T >= 0) {
            this.member1957 = new Float32Array(12 * (T + 1));
            for (var ak = 0; ak <= T; ak++) {
                this.member1957[ak * 12] = 1;
                this.member1957[ak * 12 + 4] = 1;
                this.member1957[ak * 12 + 8] = 1;
            }
        }
        if (Q >= 0) {
            this.member1958 = new Float32Array(4 * (Q + 1));
        }
        if (P >= 0) {
            this.member1959 = new Float32Array(Class50.member366 * (P + 1));
            for (var ak = 0; ak <= P; ak++) {
                this.member1959[ak * Class50.member366 + 2] = 1;
                this.member1959[ak * Class50.member366 + 3] = 1;
            }
        }
        Class41.member313(u);
        Class41.member313(G);
        Class49.member313(k);
        Class41.member313(B);
        for (var Z = 0; Z < ah; Z++) {
            var N = X.member1844(Z);
            var S = X.member1849(Z);
            var M = ae.member1833(N);
            var aa = ae.member1834(N);
            B[0] = X.member1845(Z);
            B[1] = X.member1846(Z);
            B[2] = X.member1847(Z);
            var R = X.member1848(Z);
            var ai = 0;
            if ((R & 1) === 1) {
                ai |= Class50.member375;
            }
            if ((R & 2) === 2) {
                ai |= Class50.member376;
            }
            if (M === Class167.member1817 || S !== -1) {
                var Y = N;
                if (S !== -1) {
                    Y = S;
                }
                var ab = ae.member1834(Y);
                u[0] = u[1] = u[2] = 0;
                var W = 0;
                if (ab !== undefined && af.member1991() && this.member1957 !== null) {
                    for (var V = 0; V < ab.length; V++) {
                        var ad = ab[V];
                        var ag = af.member1992(ad);
                        if (ag !== undefined) {
                            for (var U = 0; U < ag.length; U++) {
                                Class49.member343(this.member1957, af.member1993(ag[U], A), E, ad * 12);
                                u[0] += E[0];
                                u[1] += E[1];
                                u[2] += E[2];
                                W++;
                            }
                        }
                    }
                }
                if (W > 0) {
                    u[0] /= W;
                    u[1] /= W;
                    u[2] /= W;
                }
                if (M === Class167.member1817) {
                    Class41.add(u, B);
                }
                Class41.member324(u, G);
            }
            if (M !== Class167.member1817) {
                if (M === Class167.member1819) {
                    B[0] = (B[0] & 16383) / 16384 * (Math.PI * 2);
                    B[1] = (B[1] & 16383) / 16384 * (Math.PI * 2);
                    B[2] = (B[2] & 16383) / 16384 * (Math.PI * 2);
                } else if (M === Class167.member1820 || M === Class167.member1826) {
                    Class41.scale(B, 1 / 128);
                }
                if (aa !== undefined) {
                    for (V = 0; V < aa.length; V++) {
                        var aj = aa[V];
                        if (M === Class167.member1818 || M === Class167.member1819 || M === Class167.member1820) {
                            if (this.member1960 === null) {
                                this.member1960 = new Uint8Array(T + 1);
                            }
                            this.member1960[aj] |= ai;
                        } else if (M === Class167.member1821 || M === Class167.member1823) {
                            if (this.member1961 === null) {
                                this.member1961 = new Uint8Array(Q + 1);
                            }
                            this.member1961[aj] |= ai;
                        } else if (M === Class167.member1824 || M === Class167.member1825 || M === Class167.member1826) {
                            if (this.member1962 === null) {
                                this.member1962 = new Uint8Array(P + 1);
                            }
                            this.member1962[aj] |= ai;
                        }
                        if (M === Class167.member1818) {
                            Class49.translate(z, B, k);
                            Class49.member339(k, this.member1957, this.member1957, aj * 12);
                        } else if (M === Class167.member1819) {
                            Class140.member1353(y, B[2], m);
                            Class140.member1353(n, B[0], q);
                            Class140.member323(q, m, m);
                            Class140.member1353(c, B[1], q);
                            Class140.member323(q, m, m);
                            Class49.translate(z, G, k);
                            Class49.member339(k, this.member1957, this.member1957, aj * 12);
                            Class49.member354(m, u, k);
                            Class49.member339(k, this.member1957, this.member1957, aj * 12);
                        } else if (M === Class167.member1820) {
                            Class49.translate(z, G, k);
                            Class49.member339(k, this.member1957, this.member1957, aj * 12);
                            Class49.scale(z, B, k);
                            Class49.member339(k, this.member1957, this.member1957, aj * 12);
                            Class49.translate(z, u, k);
                            Class49.member339(k, this.member1957, this.member1957, aj * 12);
                        } else if (M === Class167.member1821) {
                            this.member1958[aj * 4 + 3] -= B[0] * 8 / 255;
                            this.member1838 = true;
                        } else if (M === Class167.member1823) {
                            this.member1958[aj * 4 + 0] += B[0];
                            this.member1958[aj * 4 + 1] += B[1];
                            this.member1958[aj * 4 + 2] += B[2];
                        } else if (M === Class167.member1824) {
                            this.member1959[aj * Class50.member366 + 0] += B[0];
                            this.member1959[aj * Class50.member366 + 1] += B[1];
                        } else if (M === Class167.member1825) {
                            this.member1959[aj * Class50.member366 + 4] += B[0];
                        } else if (M === Class167.member1826) {
                            this.member1959[aj * Class50.member366 + 2] *= B[0];
                            this.member1959[aj * Class50.member366 + 3] *= B[1];
                        }
                    }
                }
            }
        }
    };
    return function (Q, N, P, O, R, M) {
        return new i(Q, N, P, O, R, M);
    };
}();