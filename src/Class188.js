import { Class49 } from 'Class49.js';
import { Class29 } from 'Class29.js';
import { Class73 } from 'Class73.js';
import { Class151 } from 'Class151.js';
import { Cuboid } from 'Class166.js';
import { Class175 } from 'Class175.js';
import { Class163 } from 'Class163.js';
import { Class186 } from 'Class186.js';
import { Class4 } from 'Class4.js';
import { Class147 } from 'Class147.js';
import { Class174 } from 'Class174.js';
import { Class187 } from 'Class187.js';
import { Class185 } from 'Class185.js';
import { Class133 } from 'Class133.js';
import { Class150 } from 'Class150.js';
import { Class41 } from 'Class41.js';
import { Class140 } from 'Class140.js';
import { HillChange } from 'Class170.js';
import { Class132 } from 'Class132.js';
import { Class72 } from 'Class72.js';
import { Class63 } from 'Class63.js';
import { Class5 } from 'Class5.js';
import { Class104 } from 'Class104.js';
import { Class130 } from 'Class130.js';
import { Class155 } from 'Class155.js';
import { Class161 } from 'Class161.js';
export var Class188 = function () {
    var m = 1;
    var o = 2;
    var g = 3;
    var k = new Float32Array(3);
    var t = new Float32Array(3);
    var r = new Float32Array(3);
    var j = new Float32Array(4);
    var s = new Float32Array(4);
    var b = Class49.create();
    var h = Class49.create();
    var a = new Array(3);
    var c = function (z, A, C, D, v, E, u, y, x, B) {
        this.member433 = C;
        this.member2076 = true;
        this.member2077 = false;
        this.member2078 = null;
        this.member2079 = y;
        this.member1569 = undefined;
        this.member2080 = undefined;
        this.member2081 = Class29();
        this.member2082 = undefined;
        this.member2083 = Class29();
        this.member2084 = false;
        this.member2085 = false;
        this.member1794 = null;
        this.member1713 = false;
        this.member1728 = undefined;
        this.member2086 = null;
        this.member1564 = null;
        this.member1567 = false;
        this.member509 = false;
        this.member2087 = undefined;
        this.member2088 = 0;
        this.member2089 = undefined;
        this.member2090 = undefined;
        this.member2091 = 0;
        this.member2092 = 0;
        this.member2093 = 0;
        this.member2094 = undefined;
        this.member25(z, A, C, D, v, E, u, x, B);
    };
    member45(Class73, c);
    c.prototype.member25 = function (Y, E, S, O, v, K, N, y, G) {
        if (S !== undefined && (Y !== undefined || E !== undefined)) {
            if (Y !== undefined) {
                e.call(this, Y);
            } else if (E !== undefined) {
                e.call(this, E);
            }
            d.call(this);
        } else if ((Y !== undefined || E !== undefined) && O !== undefined) {
            if (Y !== undefined) {
                e.call(this, Y, O);
            } else if (E !== undefined) {
                e.call(this, E, O);
            }
            d.call(this);
        } else if (N !== undefined) {
            this.member1569 = Class151(N.member1569);
            this.member1794 = Cuboid({ member680: N.member2095 });
            this.member2085 = true;
            this.member2088 = N.member2090.length;
            this.member2090 = new Array(this.member2088);
            for (var aa = 0; aa < this.member2088; aa++) {
                this.member2090[aa] = Class175(undefined, undefined, undefined, undefined, N.member2090[aa]);
            }
            this.member2093 = N.member2094.length;
            this.member2094 = new Array(this.member2093);
            for (var aa = 0; aa < this.member2093; aa++) {
                this.member2094[aa] = Class163(undefined, undefined, N.member2094[aa], undefined);
            }
            this.member2087 = N.member2087;
            if (this.member2087 !== undefined) {
                for (var aa = 0; aa < this.member2087.length; aa++) {
                    this.member2087[aa] = Class186(this.member2087[aa]);
                }
            }
            d.call(this);
        } else if (y !== undefined) {
            this.member2088 = y.g1();
            this.member2090 = new Array(this.member2088);
            for (var X = 0; X < this.member2088; X++) {
                this.member2090[X] = Class175(undefined, undefined, undefined, undefined, undefined, undefined, y);
            }
            this.member2093 = y.g1();
            this.member2094 = new Array(this.member2093);
            for (var F = 0; F < this.member2093; F++) {
                this.member2094[F] = Class163(undefined, undefined, undefined, undefined, y);
            }
            var M = y.g2();
            if (M > 0) {
                this.member2087 = new Array(M);
                for (var aa = 0; aa < M; aa++) {
                    this.member2087[aa] = Class186({ member1524: y });
                }
            }
            var J = y.g1() === 1;
            if (J) {
                this.member1569 = Class151({
                    member1524: y,
                    member1525: G
                });
                if (G) {
                    for (var aa = 0; aa < this.member2088; aa++) {
                        this.member2090[aa].member1726(this.member1569);
                    }
                    for (var aa = 0; aa < this.member2093; aa++) {
                        this.member2094[aa].member1726(this.member1569);
                    }
                    this.member1569.member1535();
                }
            }
            this.member1794 = Cuboid({ member1524: y });
            d.call(this);
        } else if (v !== undefined) {
            if (v.member2096()) {
                throw new Error('1636 ');
            }
            this.member1569 = Class151(v.member2097().member681());
            this.member1794 = Cuboid(v.member2098());
            this.member2085 = true;
            var U = v.member2099();
            this.member2088 = U.length;
            this.member2090 = new Array(this.member2088);
            for (var aa = 0; aa < this.member2088; aa++) {
                this.member2090[aa] = Class175(undefined, undefined, undefined, undefined, U[aa].member681(true, undefined));
            }
            var P = v.member2100();
            this.member2093 = P.length;
            this.member2094 = new Array(this.member2093);
            for (var aa = 0; aa < this.member2093; aa++) {
                this.member2094[aa] = Class163(undefined, undefined, P[aa].member681(true, undefined), undefined);
            }
            var Z = v.member2101();
            if (Z !== undefined) {
                this.member2087 = i(Z);
            }
            d.call(this);
        } else if (K !== undefined) {
            this.member2090 = new Array(0);
            this.member2094 = new Array(0);
            this.member1794 = Cuboid(new Float32Array([
                0,
                0,
                0
            ]), new Float32Array([
                0,
                0,
                0
            ]));
            this.member2085 = true;
            this.member1569 = Class151({ empty: true });
            var z = 0;
            for (var aa = 0; aa < K.length; aa++) {
                var R = K[aa];
                this.member1794.member1800(R.member2098());
                this.member1569.member1532(R.member2097());
                var Q = R.member2101();
                z += Q === undefined ? 0 : Q.length;
                var W = R.member2099();
                for (var V = 0; V < W.length; V++) {
                    var I = W[V];
                    var H = false;
                    for (var X = 0; X < this.member2090.length; X++) {
                        var L = this.member2090[X];
                        if (!L.member1715(I)) {
                            continue;
                        }
                        L.member1708(I, R.member2102());
                        H = true;
                        break;
                    }
                    if (!H) {
                        this.member2090.push(Class175(undefined, undefined, undefined, I, undefined, R.member2102()));
                        this.member2088++;
                    }
                }
                var D = R.member2100();
                for (var u = 0; u < D.length; u++) {
                    var x = D[u];
                    var H = false;
                    for (var F = 0; F < this.member2094.length; F++) {
                        var C = this.member2094[F];
                        if (!C.member1715(x)) {
                            continue;
                        }
                        C.member1708(x, R.member2102());
                        H = true;
                        break;
                    }
                    if (!H) {
                        this.member2094.push(Class163(undefined, x, undefined, R.member2102()));
                        this.member2093++;
                    }
                }
            }
            for (var X = 0; X < this.member2090.length; X++) {
                this.member2090[X].member1716();
            }
            for (var F = 0; F < this.member2094.length; F++) {
                this.member2094[F].member1716();
            }
            if (z > 0) {
                this.member2087 = new Array(z);
                var B = 0;
                for (var aa = 0; aa < K.length; aa++) {
                    var R = K[aa];
                    var Q = R.member2101();
                    if (Q === undefined) {
                        continue;
                    }
                    for (var T = 0; T < Q.length; T++) {
                        var A = Q[T].member681();
                        A.member1704 = R.member2102();
                        this.member2087[B++] = Class186(A);
                    }
                }
            }
            this.member1569.member1332();
            d.call(this);
        } else {
            throw new Error('1637 ');
        }
    };
    var d = function () {
        var v = new Array(this.member2088);
        this.member2089 = this.member2103(this.member2090, v, this.member2088);
        this.member2090 = v;
        for (var u = 0; u < this.member2088; u++) {
            if (this.member2090[u].member1713()) {
                this.member1713 = true;
                break;
            }
        }
        if (!this.member1713) {
            for (var u = 0; u < this.member2093; u++) {
                if (this.member2094[u].member1713()) {
                    this.member1713 = true;
                    break;
                }
            }
        }
        member46(this, Class73, Class4.member60);
    };
    c.prototype.member2104 = function (u) {
        this.member433 = u;
    };
    c.prototype.member2102 = function () {
        return this.member2079;
    };
    c.prototype.member2097 = function () {
        return this.member1569;
    };
    c.prototype.member2098 = function () {
        return this.member1794;
    };
    c.prototype.member2096 = function () {
        return this.member1567;
    };
    c.prototype.member2105 = function () {
        return this.member509;
    };
    c.prototype.member2101 = function () {
        return this.member2087;
    };
    c.prototype.member2106 = function () {
        return this.member2088 + this.member2093;
    };
    c.prototype.member2099 = function () {
        return this.member2090;
    };
    c.prototype.member2100 = function () {
        return this.member2094;
    };
    c.prototype.member2107 = function () {
        return this.member2088 + this.member2093 === 0 && this.member2087 === undefined;
    };
    c.prototype.member2108 = function () {
        this.member2076 = true;
        this.constructFromModelRaw(member2078);
    };
    var e = function (ag, T) {
        this.member2078 = ag;
        var ah, af, z;
        if (!Class147.member1483() || !Class174.member1900()) {
            this.member2076 = false;
            return;
        }
        var I = {};
        this.member2093 = 0;
        this.member2094 = new Array(0);
        var ae = ag.member1709();
        for (var W = 0; W < ae; W++) {
            var C = Class174.member1719(ag.member2109(W));
            var M = Class147.member1484(C.getMaterial());
            if (C.member702()) {
                I[ag.member2110(W)] = true;
            }
            var B = ag.member2111(W);
            var y = ag.member2112(W);
            var v = ag.member2113(W);
            var F = Class187({
                member2070: C,
                member1594: ag.member2114(W, 0),
                member1595: ag.member2114(W, 1),
                member1596: ag.member2114(W, 2),
                member1924: ag.member1887(ag.member2110(W)),
                member2011: B,
                member2072: y,
                member2073: v,
                member2071: ag.member2115(W)
            });
            var D = false;
            for (var P = 0; P < this.member2093; P++) {
                D = this.member2094[P].member1717(F, M, B, y, v);
                if (D) {
                    break;
                }
            }
            if (!D) {
                this.member2094[this.member2093] = Class163(M, undefined, undefined, undefined);
                this.member2094[this.member2093].member1717(F, M, B, y, v);
                this.member2093++;
            }
        }
        var Q = ag.member1892();
        if (Q > 0) {
            this.member2087 = new Array(Q);
            for (var R = 0; R < Q; R++) {
                var S = ag.member2116(R);
                var N = Class185.member2030(S);
                if (N.member702()) {
                    I[ag.member2117(R)] = true;
                }
                var ad = {
                    member2069: ag.member2118(R, 0),
                    member2011: ag.member2119(R, 0)
                };
                var ac = {
                    member2069: ag.member2118(R, 1),
                    member2011: ag.member2119(R, 1)
                };
                var X = {
                    member2069: ag.member2118(R, 2),
                    member2011: ag.member2119(R, 2)
                };
                this.member2087[R] = Class186({
                    member2068: S,
                    member1594: ad,
                    member1595: ac,
                    member1596: X
                });
            }
        }
        var x = 0;
        var aj = new Array(0);
        var J = ag.member1868();
        var K = ag.member1861();
        for (var O = 0; O < J; O++) {
            if (I[O] === true) {
                continue;
            }
            var H = undefined;
            var L = ag.member1875(O);
            if (L !== undefined) {
                H = Class147.member1484(L);
                if (H !== undefined && H.member1477()) {
                    continue;
                }
            }
            var u = ag.member1867(O, a);
            var y = ag.member1723(O);
            var V = undefined;
            if (ag.member1866(O)) {
                V = Class133.member1270;
            }
            var D = false;
            for (var P = 0; P < x; P++) {
                D = aj[P].member1912(O, H, u, y, V);
                if (D) {
                    break;
                }
            }
            if (!D) {
                if (H !== undefined) {
                    aj[x] = Class175(H, undefined, V);
                } else {
                    aj[x] = Class175(undefined, true, V);
                }
                if (!aj[x].member1912(O, H, u, y, V)) {
                    throw new Error('1638 ');
                }
                x++;
            }
        }
        if (T !== undefined) {
            this.member1569 = T;
        } else {
            var Z = ag.member1885(Class174);
            this.member1569 = Class150.member1513(Z);
        }
        this.member2088 = x;
        this.member2090 = new Array(this.member2088);
        this.member2089 = this.member2103(aj, this.member2090, this.member2088, ag);
        var A = new Array(J);
        var ab = new Array(K);
        for (P = 0; P < this.member2088; P++) {
            this.member2090[P].member1915(ag, A, ab, this.member1569);
        }
        for (var ai = 0; ai < K; ai++) {
            var G = ab[ai];
            if (G !== undefined) {
                G.member1916[0] /= G.member1917;
                G.member1916[1] /= G.member1917;
                G.member1916[2] /= G.member1917;
                Class41.normalize(G.member1916);
            }
        }
        var aa = new Float32Array([
            9999999999,
            9999999999,
            9999999999
        ]);
        var Y = new Float32Array([
            -9999999999,
            -9999999999,
            -9999999999
        ]);
        for (P = 0; P < this.member2088; P++) {
            this.member2090[P].member1718(ag, ab, A, aa, Y);
        }
        for (var E = 0; E < this.member2093; E++) {
            this.member2094[E].member1718(this.member1569, aa, Y);
        }
        this.member1794 = Cuboid(aa, Y);
        if (this.member2087 !== undefined) {
            for (var ah = 0; ah < this.member2087.length; ah++) {
                var U = this.member2087[ah];
                this.member1794.member1799(U.member2064().member2069);
                this.member1794.member1799(U.member2065().member2069);
                this.member1794.member1799(U.member2066().member2069);
            }
        }
        this.member2085 = true;
        if (this.member433 !== undefined) {
            this.member563(true);
        }
        A = undefined;
        ab = undefined;
        this.member2077 = true;
    };
    c.prototype.member2103 = function (B, D, x, z) {
        var A = 0, y = 0;
        for (var u = 0; u < x; u++) {
            var v = B[u];
            var C = v.member1417();
            if (C !== Class133.member1270) {
                D[A++] = v;
            } else {
                D[x - 1 - y++] = v;
                if (z !== undefined) {
                    v.member1913(z);
                }
            }
        }
        return A;
    };
    c.prototype.transform = function (v) {
        if (this.member1567) {
            throw new Error('1639 ');
        }
        for (var y = 0; y < this.member2088; y++) {
            this.member2090[y].transform(v);
        }
        for (var x = 0; x < this.member2093; x++) {
            this.member2094[x].transform(v);
        }
        if (this.member2087 !== undefined) {
            for (var u = 0; u < this.member2087.length; u++) {
                this.member2087[u].transform(v);
            }
        }
        this.member1794.transform(v);
    };
    c.prototype.translate = function (v) {
        if (this.member1567) {
            throw new Error('1640 ');
        }
        for (var y = 0; y < this.member2088; y++) {
            this.member2090[y].translate(v);
        }
        for (var x = 0; x < this.member2093; x++) {
            this.member2094[x].translate(v);
        }
        if (this.member2087 !== undefined) {
            for (var u = 0; u < this.member2087.length; u++) {
                this.member2087[u].translate(v);
            }
        }
        this.member1794.translate(v);
    };
    c.prototype.rotate = function (x, v) {
        if (this.member1567) {
            throw new Error('1641 ');
        }
        for (var z = 0; z < this.member2088; z++) {
            this.member2090[z].rotate(x, v);
        }
        for (var y = 0; y < this.member2093; y++) {
            this.member2094[y].rotate(x);
        }
        if (this.member2087 !== undefined) {
            for (var u = 0; u < this.member2087.length; u++) {
                this.member2087[u].rotate(x);
            }
        }
        Class140.member316(x, b);
        this.member1794.transform(b);
    };
    c.prototype.member1668 = function (y, v) {
        if (this.member1567) {
            throw new Error('1642 ');
        }
        for (var z = 0; z < this.member2088; z++) {
            this.member2090[z].member1668(y, v);
        }
        for (var x = 0; x < this.member2093; x++) {
            this.member2094[x].member1668(y);
        }
        if (this.member2087 !== undefined) {
            for (var u = 0; u < this.member2087.length; u++) {
                this.member2087[u].member1668(y);
            }
        }
        Class49.member313(b);
        Class49.member346(b, Math.PI * 2 * y / 4);
        this.member1794.transform(b);
    };
    c.prototype.member1725 = function (y, u, A, v) {
        if (this.member1567) {
            throw new Error('1643 ');
        }
        var x = this.member1794.member1793()[1];
        var B = this.member1794.member557();
        for (var z = 0; z < this.member2088; z++) {
            this.member2090[z].member1725(y, u, A, v, x, B, n);
        }
        for (var F = 0; F < this.member2093; F++) {
            this.member2094[F].member1725(y, u, A, v, x, B, n);
        }
        if (this.member2087 !== undefined) {
            for (var C = 0; C < this.member2087.length; C++) {
                var G = this.member2087[C].member2064().member2069;
                G[1] = n(y, u, A, v, x, B, G[0], G[1], G[2]);
                var E = this.member2087[C].member2065().member2069;
                E[1] = n(y, u, A, v, x, B, E[0], E[1], E[2]);
                var D = this.member2087[C].member2066().member2069;
                D[1] = n(y, u, A, v, x, B, D[0], D[1], D[2]);
            }
        }
    };
    c.prototype.member2120 = function (C, I, K, J, A) {
        var x = undefined;
        var u = Math.PI * 2;
        var B = A(C, 0);
        var F = A(0, 0);
        var H = A(C, I);
        var v = A(0, I);
        var G = B > F ? B : F;
        var M = H > v ? H : v;
        var E = F > v ? F : v;
        var O = B > H ? B : H;
        if (I !== 0) {
            var D = Math.atan2(G - M, I) % u;
            if (D !== 0) {
                if (K !== 0) {
                    if (D > Math.PI) {
                        var N = u - K;
                        if (D < N) {
                            D = N;
                        }
                    } else if (D > K) {
                        D = K;
                    }
                }
                x = Class49.member313();
                Class49.member345(x, D);
            }
        }
        if (C !== 0) {
            var z = Math.atan2(O - E, C) % u;
            if (z !== 0) {
                if (J !== 0) {
                    if (z > Math.PI) {
                        var L = u - J;
                        if (z < L) {
                            z = L;
                        }
                    } else if (z > J) {
                        z = J;
                    }
                }
                if (x === undefined) {
                    x = Class49.member313();
                }
                Class49.member347(x, z);
            }
        }
        var y = B + v;
        if (F + H > y) {
            y = F + H;
        }
        if (y !== 0) {
            k[0] = k[2] = 0;
            k[1] = y / 2;
            if (x === undefined) {
                x = Class49.member313();
            }
            Class49.translate(x, k);
        }
        return x;
    };
    var n = function (y, u, z, v, x, A, F, D, B) {
        if (y === HillChange.FLOOR_SKEW) {
            return D + z(F, B);
        } else if (y === HillChange.TREE_SKEW) {
            var H = D * 65535 / x;
            if (H < u) {
                return D + z(F, B) * (u - H) / u;
            } else {
                return D;
            }
        } else if (y === HillChange.CEILING_SKEW) {
            var G = v(F, B);
            if (G === undefined) {
                return D;
            } else {
                return D + G - A;
            }
        } else if (y === HillChange.SKEW_TO_FIT) {
            var C = z(F, B);
            var G = v(F, B);
            if (G === undefined) {
                return D;
            } else {
                var E = G - C - u;
                return D / A * E + C;
            }
        }
    };
    c.prototype.member2121 = function () {
        if (this.member2093 > 0) {
            return true;
        }
        for (var u = 0; u < this.member2088; u++) {
            if (this.member2090[u].member1417() === Class133.member1270) {
                return true;
            }
        }
        return false;
    };
    c.prototype.member2122 = function () {
        for (var u = 0; u < this.member2088; u++) {
            if (this.member2090[u].member1417() !== Class133.member1270) {
                return true;
            }
        }
        return false;
    };
    c.prototype.member563 = function (u) {
        if (this.member1567 && !u) {
            return;
        }
        for (var x = 0; x < this.member2088; x++) {
            this.member2090[x].member563(this.member433);
        }
        for (var v = 0; v < this.member2093; v++) {
            this.member2094[v].member563(this.member433);
        }
        this.member1567 = true;
    };
    c.prototype.member2123 = function () {
        if (!this.member2076) {
            this.member2108();
        }
        if (!this.member2076) {
            return false;
        }
    };
    c.prototype.member2124 = function (u) {
        this.member1728 = u;
        if (this.member1728 === NULL || !this.member1713) {
            this.member1728 = undefined;
        }
    };
    c.prototype.member2125 = function (y, x) {
        this.member2084 = false;
        var v = Class132.member1266();
        if (v.member1025(Class72.member500)) {
            var u = v.member941(Class72.member500);
            if (u.member880(x, this.member1794.member1801(), y.member1624)) {
                this.member2084 = true;
            }
        }
    };
    c.prototype.member2126 = function (v, u) {
        this.member2091 = 0;
        this.member2092 = this.member2088;
        if (v !== undefined) {
            if (u !== undefined && u[3] < 0 || this.member1728 !== undefined && this.member1728.member1843()) {
                if (v !== Class133.member1270) {
                    return false;
                }
            } else if (v === Class133.member1270) {
                this.member2091 = this.member2089;
            } else {
                this.member2092 = this.member2089;
            }
        }
        return true;
    };
    c.prototype.member1619 = function (x) {
        var v = Class132.member1266();
        this.member2080 = Class63.member385;
        this.member2081.enable(Class5.member110);
        if (this.member433.member860()) {
            this.member2081.enable(Class5.member111);
        }
        if (this.member1728 !== undefined) {
            this.member2081.enable(Class5.member104);
        }
        var u = v.member941(Class72.member499);
        if (u.member967() >= Class104.member796 && this.member1569 !== undefined) {
            this.member2081.enable(Class5.member93);
            if (this.member1569.member1531()) {
                this.member2081.enable(Class5.member94);
            }
        }
        if (x) {
            this.member2082 = Class63.member389;
            this.member2083 = Class29([Class5.member93]);
            if (this.member1569 !== undefined && this.member1569.member1531()) {
                this.member2083.enable(Class5.member94);
            }
            if (this.member2084) {
                this.member2083.enable(Class5.member100);
            }
            if (this.member1728 !== undefined) {
                this.member2083.enable(Class5.member105);
            }
        }
    };
    c.prototype.member1620 = function (v, x, u) {
        this.member1621(v, x, u);
        this.member2081.enable(Class5.member96);
        this.member2083.enable(Class5.member96);
    };
    c.prototype.member1622 = function (x) {
        var v = Class132.member1266();
        this.member2080 = Class63.member385;
        this.member2081.enable(Class5.member109);
        this.member2081.enable(Class5.member110);
        if (this.member433.member860()) {
            this.member2081.enable(Class5.member111);
        }
        if (this.member1728 !== undefined) {
            this.member2081.enable(Class5.member104);
        }
        var u = v.member941(Class72.member499);
        if (this.member1569 !== undefined) {
            this.member2081.enable(Class5.member93);
            if (this.member1569.member1531()) {
                this.member2081.enable(Class5.member94);
            }
        }
        if (x) {
            this.member2082 = Class63.member389;
            this.member2083 = Class29([Class5.member93]);
            if (this.member1569 !== undefined && this.member1569.member1531()) {
                this.member2083.enable(Class5.member94);
            }
            if (this.member2084) {
                this.member2083.enable(Class5.member100);
            }
            if (this.member1728 !== undefined) {
                this.member2083.enable(Class5.member105);
            }
        }
    };
    c.prototype.member1623 = function (x, y, u) {
        var v = Class132.member1266();
        this.member2080 = Class63.member385;
        this.member2081.enable(Class5.member109);
        if (this.member1569 !== undefined) {
            this.member2081.enable(Class5.member93);
            if (this.member1569.member1531()) {
                this.member2081.enable(Class5.member94);
            }
        }
        if (!y) {
            if (this.member1728 !== undefined) {
                this.member2081.enable(Class5.member104);
            }
            if (u && v.member1025(Class72.member102)) {
                this.member2081.enable(Class5.member102);
            }
        }
        if (x) {
            this.member2082 = Class63.member389;
            this.member2083 = Class29([Class5.member93]);
            if (this.member1569 !== undefined && this.member1569.member1531()) {
                this.member2083.enable(Class5.member94);
            }
            if (this.member1728 !== undefined) {
                this.member2083.enable(Class5.member105);
            }
        }
        this.member2081.enable(Class5.member117);
        this.member2083.enable(Class5.member117);
    };
    c.prototype.member1621 = function (y, z, u) {
        var x = Class132.member1266();
        this.member2080 = Class63.member385;
        this.member2081.enable(Class5.member109);
        if (this.member1569 !== undefined) {
            this.member2081.enable(Class5.member93);
            if (this.member1569.member1531()) {
                this.member2081.enable(Class5.member94);
            }
        }
        if (z) {
            this.member2081.enable(Class5.member88);
        } else {
            this.member2081.enable(Class5.member89);
        }
        if (this.member2084) {
            this.member2081.enable(Class5.member100);
        }
        if (!z) {
            var A = x.member941(Class72.POINTLIGHT);
            if (A.member291() && A.member988() > 0) {
                this.member2081.enable(Class5.member91);
            }
            if (x.member1025(Class72.member499)) {
                this.member2081.enable(Class5.member95);
                if (this.member433.member860()) {
                    this.member2081.enable(Class5.member111);
                }
                var v = x.member941(Class72.member499);
                Class104.member894(this.member2081, v.member967());
            }
            if (this.member1728 !== undefined) {
                this.member2081.enable(Class5.member104);
            }
            if (u && x.member1025(Class72.member102)) {
                this.member2081.enable(Class5.member102);
            }
        }
        if (Class130.member1194()) {
            this.member2081.enable(Class5.member106);
        }
        if (x.member1025(Class72.member118)) {
            this.member2081.enable(Class5.member118);
        }
        if (y) {
            this.member2082 = Class63.member389;
            this.member2083 = Class29([Class5.member93]);
            if (this.member1569 !== undefined && this.member1569.member1531()) {
                this.member2083.enable(Class5.member94);
            }
            if (this.member2084) {
                this.member2083.enable(Class5.member100);
            }
            if (this.member1728 !== undefined) {
                this.member2083.enable(Class5.member105);
            }
        }
    };
    c.prototype.member1630 = function (z, L, K, I, J, u, C, G, F, D) {
        this.member2123();
        if (Class130.member1195()) {
            return;
        }
        this.member2124(J);
        this.member2125(L, K);
        if (!this.member2126(C, G)) {
            return;
        }
        var E = Class132.member1266();
        var N = E.member522(Class72.member505);
        var A = E.member522(Class72.member499);
        var B = E.member522(Class72.member96);
        var H = E.member522(Class72.member416);
        var y = E.member522(Class72.member117);
        var x = !u && !A && !N && !B && this.member2093 > 0 && (C === undefined || C === Class133.member1270);
        this.member2081.member301();
        this.member2083.member301();
        if (N) {
            return;
        } else if (A) {
            this.member1619(x);
        } else if (B) {
            this.member1620(x, u, F);
        } else if (H) {
            this.member1622(x);
        } else if (y) {
            this.member1623(x, u, F);
        } else {
            this.member1621(x, u, F);
            if (this.member433.member1625()) {
                this.member2081.enable(Class5.member96);
            }
        }
        var v = true;
        for (var M = this.member2091; M < this.member2092; M++) {
            v &= this.member2090[M].member1630(this.member433, E, this.member2080, this.member2081, L, K, I, this.member1569, G, z, this.member1728, D);
        }
        if (x) {
            this.member433.member590(true);
            this.member433.member942();
            for (var M = 0; M < this.member2093; M++) {
                v &= this.member2094[M].member1630(this.member433, E, this.member2082, this.member2083, L, K, this.member1569, G, this.member1728, D);
            }
            this.member433.member944();
        }
        this.member433.member2127();
        this.member433.member587();
        return v;
    };
    c.prototype.member952 = function (y, z, L, K, I, J, u, C, G, F, D) {
        this.member2123();
        if (Class130.member1195()) {
            return;
        }
        this.member2124(J);
        this.member2125(L, K);
        if (!this.member2126(C, G)) {
            return;
        }
        var E = Class132.member1266();
        var M = E.member522(Class72.member505);
        var A = E.member522(Class72.member499);
        var B = E.member522(Class72.member96);
        var H = E.member522(Class72.member416);
        var x = E.member522(Class72.member117);
        var v = !u && !A && !M && !B && this.member2093 > 0 && (C === undefined || C === Class133.member1270);
        this.member2081.member301();
        this.member2083.member301();
        if (M) {
            return;
        } else if (A) {
            this.member1619(v);
        } else if (B) {
            this.member1620(v, u, F);
        } else if (H) {
            this.member1622(v);
        } else if (x) {
            this.member1623(v, u, F);
        } else {
            this.member1621(v, u, F);
            if (this.member433.member1625()) {
                this.member2081.enable(Class5.member96);
            }
        }
        if (y.member1626(y.member1627)) {
            this.member1628(y, v, y.member1627, L, K, I, G, z, D);
        }
        if (y.member1627 !== Class155.member117 && y.member1626(Class155.member117)) {
            this.member2081.member301();
            this.member2083.member301();
            this.member1623(v, u, F);
            this.member1628(y, v, Class155.member117, L, K, I, G, z, D);
        }
        if (y.member1627 !== Class155.member416 && y.member1626(Class155.member416)) {
            this.member2081.member301();
            this.member2083.member301();
            this.member1622(v);
            this.member1628(y, v, Class155.member416, L, K, I, G, z, D);
        }
        if (y.member1627 !== Class155.member96 && y.member1626(Class155.member96)) {
            v = false;
            this.member2081.member301();
            this.member2083.member301();
            this.member1620(v, u, F);
            this.member1628(y, v, Class155.member96, L, K, I, G, z, D);
        }
        this.member433.member2127();
    };
    c.prototype.member1628 = function (u, F, H, C, B, y, x, I, v) {
        var z = Class132.member1266();
        var G = Class161.member619();
        G.member301();
        this.member2081.member302(G);
        for (var E = this.member2091; E < this.member2092; E++) {
            var A = this.member2090[E].member952(u, this.member433, z, this.member2080, G, C, B, y, this.member1569, x, I, this.member1728, v);
            u.member1629(H, A);
        }
        if (F) {
            var D = Class161.member619();
            D.member301();
            this.member2083.member302(D);
            for (var E = 0; E < this.member2093; E++) {
                var A = this.member2094[E].member952(u, true, false, this.member433, z, this.member2082, D, C, B, this.member1569, x, this.member1728, v);
                u.member1629(H, A);
            }
        }
    };
    c.prototype.member2128 = function (v, A, G, x, u) {
        if (this.member2087 === undefined) {
            return;
        }
        if (G === NULL || !this.member1713) {
            G = undefined;
        }
        for (var C = 0; C < this.member2087.length; C++) {
            var I = this.member2087[C];
            var y = x === undefined || x[I.member2067()] === 0;
            if (!y) {
                continue;
            }
            var F = I.member2064(), E = I.member2065(), D = I.member2066();
            Class41.set(F.member2069, k);
            Class41.set(E.member2069, t);
            Class41.set(D.member2069, r);
            if (G !== undefined) {
                var B;
                if (F.member2011 !== undefined) {
                    B = G.member1733(null, F.member2011, h);
                    Class49.member341(B, k);
                }
                if (E.member2011 !== undefined) {
                    var H;
                    if (E.member2011 === F.member2011) {
                        H = B;
                    } else {
                        H = G.member1733(null, E.member2011, h);
                    }
                    Class49.member341(H, t);
                }
                if (D.member2011 !== undefined) {
                    var z;
                    if (D.member2011 === F.member2011) {
                        z = B;
                    } else {
                        z = G.member1733(null, D.member2011, h);
                    }
                    Class49.member341(z, r);
                }
            }
            Class49.member318(A, k);
            Class49.member318(A, t);
            Class49.member318(A, r);
            v.member2129(this.member2087[C], k, t, r, u);
        }
    };
    c.prototype.member2130 = function () {
        return this.member1569 === undefined || this.member1569.member1335();
    };
    c.prototype.member681 = function (u, y) {
        if (this.member1567) {
            throw new Error('1644 ');
        }
        if (this.member509) {
            throw new Error('1645 ');
        }
        var v = {
            member2090: new Array(this.member2090.length),
            member2094: new Array(this.member2094.length),
            member2087: q(this.member2087),
            member1569: this.member1569 === undefined ? undefined : this.member1569.member681(false),
            member2095: this.member1794.member681()
        };
        for (var z = 0; z < this.member2088; z++) {
            v.member2090[z] = this.member2090[z].member681(u, y);
        }
        for (var x = 0; x < this.member2093; x++) {
            v.member2094[x] = this.member2094[x].member681(u, y);
        }
        return v;
    };
    c.prototype.member1318 = function (v) {
        if (this.member1567) {
            throw new Error('1646 ');
        }
        if (this.member509) {
            throw new Error('1647 ');
        }
        v.p1(this.member2090.length);
        for (var y = 0; y < this.member2088; y++) {
            this.member2090[y].member1318(v);
        }
        v.p1(this.member2094.length);
        for (var x = 0; x < this.member2093; x++) {
            this.member2094[x].member1318(v);
        }
        if (this.member2087 !== undefined) {
            v.p2(this.member2087.length);
            for (var u = 0; u < this.member2087.length; u++) {
                this.member2087[u].member1318(v);
            }
        } else {
            v.p2(0);
        }
        if (this.member1569 !== undefined) {
            v.p1(1);
            this.member1569.member1318(v, false, false);
        } else {
            v.p1(0);
        }
        this.member1794.member1318(v);
    };
    c.prototype.member512 = function () {
        if (this.member1569 !== undefined) {
            this.member1569.member512();
        }
        for (var u = 0; u < this.member2088; u++) {
            this.member2090[u].member512(this.member433);
        }
        for (var u = 0; u < this.member2093; u++) {
            this.member2094[u].member512(this.member433);
        }
        this.member2087 = undefined;
        this.member509 = true;
    };
    c.prototype.member85 = function () {
        if (this.member1567) {
            var v = 0;
            for (var u = 0; u < this.member2088; u++) {
                v += this.member2090[u].member1714();
            }
            for (var u = 0; u < this.member2093; u++) {
                v += this.member2094[u].member1714();
            }
            return v;
        } else {
            return 0;
        }
    };
    var q = function (x) {
        if (x === undefined) {
            return undefined;
        }
        var v = new Array(x.length);
        for (var u = 0; u < x.length; u++) {
            v[u] = x[u].member681();
        }
        return v;
    };
    var i = function (v) {
        var x = new Array(v.length);
        for (var u = 0; u < v.length; u++) {
            x[u] = Class186(v[u].member681());
        }
        return x;
    };
    return function (z, A, C, D, v, E, u, y, x, B) {
        return new c(z, A, C, D, v, E, u, y, x, B);
    };
}();