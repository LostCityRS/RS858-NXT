import { Class37 } from 'Class37.js';
import { Class170 } from 'Class170.js';
import { Class41 } from 'Class41.js';
import { Class143 } from 'Class143.js';
import { Class124 } from 'Class124.js';
import { Class165 } from 'Class165.js';
import { Class49 } from 'Class49.js';
import { Class81 } from 'Class81.js';
export var Class192 = function () {
    var m = 0;
    var A = -1;
    var G = -1;
    var u = 65535;
    var D = 65535;
    var H = 65535;
    var r = 32766;
    var i = 65535;
    var h = new Float32Array(3);
    var e = new Float32Array(3);
    var c = new Float32Array(3);
    var y = new Float32Array(3);
    var x = new Float32Array(3);
    var q = new Float32Array(3);
    var t = new Float32Array(3);
    var a = new Float32Array(3);
    var d = new Float32Array(3);
    var g = new Float32Array(3);
    var C = Class37.create();
    var z = Class37.create();
    var b = Class37.create();
    var p = 1;
    var I = 3;
    var F = 26;
    var J = function (M, S, L, Q) {
        this.member2145 = -1;
        this.member2146 = Class170.member1859;
        this.member2147 = undefined;
        this.member2148 = 12;
        this.member1879 = 0;
        this.member2149 = 0;
        this.member2150 = undefined, this.member2151 = undefined, this.member2152 = undefined;
        this.member2153 = undefined;
        this.member2154 = undefined;
        this.member434 = undefined;
        this.member2155 = undefined;
        this.member1568 = 0;
        this.member2156 = undefined, this.member2157 = undefined, this.member2158 = undefined;
        this.member2159 = undefined;
        this.member2160 = undefined;
        this.member2161 = 0;
        this.member2162 = undefined;
        this.member2163 = undefined;
        this.member2164 = undefined;
        this.member2165 = 127;
        this.member1877 = undefined;
        this.member2166 = undefined;
        this.member2167 = undefined;
        this.member2168 = undefined;
        this.member2169 = undefined;
        this.member2170 = undefined;
        this.member1878 = undefined;
        this.member2171 = 0;
        this.member2172 = undefined;
        this.member2173 = undefined;
        this.member2174 = undefined;
        this.member2175 = undefined;
        this.member2176 = undefined;
        this.member2177 = undefined;
        this.member2178 = undefined;
        this.member2179 = undefined;
        this.member2180 = undefined;
        this.member2181 = undefined;
        this.member2182 = undefined;
        this.member2183 = undefined;
        this.member2184 = undefined;
        this.member2185 = undefined;
        this.member2186 = 0;
        this.member1872 = undefined;
        this.member1873 = undefined;
        this.member2087 = undefined;
        this.member2187 = undefined;
        this.member2086 = undefined;
        if (M !== undefined) {
            K.call(this, M);
            j.call(this);
            E.call(this);
        } else if (L !== undefined) {
            this.member2148 = L.member2148;
            this.member1879 = L.member1879;
            this.member2149 = L.member2149;
            this.member2150 = L.member2150;
            this.member2151 = L.member2151;
            this.member2152 = L.member2152;
            this.member2153 = L.member2153;
            this.member2154 = L.member2154;
            this.member434 = L.member434;
            this.member2155 = L.member2155;
            this.member1568 = L.member1568;
            this.member2156 = L.member2156;
            this.member2157 = L.member2157;
            this.member2158 = L.member2158;
            this.member2159 = L.member2159;
            this.member2160 = L.member2160;
            this.member2161 = L.member2161;
            this.member2162 = L.member2162;
            this.member2163 = L.member2163;
            this.member2164 = L.member2164;
            this.member2165 = L.member2165;
            this.member1877 = L.member1877;
            this.member2166 = L.member2166;
            this.member2167 = L.member2167;
            this.member2168 = L.member2168;
            this.member2169 = L.member2169;
            this.member2170 = L.member2170;
            this.member1878 = L.member1878;
            this.member2171 = L.member2171;
            this.member2172 = L.member2172;
            this.member2173 = L.member2173;
            this.member2174 = L.member2174;
            this.member2175 = L.member2175;
            this.member2176 = L.member2176;
            this.member2177 = L.member2177;
            this.member2178 = L.member2178;
            this.member2179 = L.member2179;
            this.member2180 = L.member2180;
            this.member2181 = L.member2181;
            this.member2182 = L.member2182;
            this.member2183 = L.member2183;
            this.member2186 = L.member2186;
            this.member1872 = L.member1872;
            this.member1873 = L.member1873;
            this.member2087 = L.member2087;
            this.member2187 = L.member2187;
            this.member2086 = L.member2086;
        } else if (Q !== undefined) {
            this.member2146 = Q.member609();
            this.member2148 = Q.member609();
            this.member1879 = Q.member608();
            this.member2149 = Q.member608();
            this.member2150 = new Int32Array(this.member1879);
            Q.member1092(this.member2150.buffer, 0, this.member2150.buffer.byteLength);
            this.member2151 = new Int32Array(this.member1879);
            Q.member1092(this.member2151.buffer, 0, this.member2151.buffer.byteLength);
            this.member2152 = new Int32Array(this.member1879);
            Q.member1092(this.member2152.buffer, 0, this.member2152.buffer.byteLength);
            this.member2153 = this.member2188(Q, Int32Array);
            var W = Q.member608();
            if (W > 0) {
                this.member2154 = new Array(W);
                for (var R = 0; R < W; R++) {
                    var P = Q.member608();
                    var X = Q.member1073();
                    this.member2154[P] = new Int32Array(X / 4);
                    member2189.member1092(this.member2154[P], 0, X);
                }
            }
            this.member434 = this.member2188(Q, Int16Array);
            this.member2155 = this.member2188(Q, Uint16Array);
            this.member1568 = Q.member608();
            this.member2156 = this.member2188(Q, Int16Array);
            this.member2157 = this.member2188(Q, Int16Array);
            this.member2158 = this.member2188(Q, Int16Array);
            this.member2159 = this.member2188(Q, Int8Array);
            this.member2160 = this.member2188(Q, Int8Array);
            this.member2161 = Q.member1071();
            this.member2162 = this.member2188(Q, Uint16Array);
            this.member2163 = this.member2188(Q, Uint16Array);
            this.member2164 = this.member2188(Q, Int8Array);
            this.member2165 = Q.member608();
            this.member1877 = this.member2188(Q, Uint16Array);
            this.member2166 = this.member2188(Q, Int32Array);
            this.member2167 = this.member2188(Q, Int16Array);
            this.member2168 = this.member2188(Q, Uint8Array);
            this.member2169 = this.member2188(Q, Uint8Array);
            this.member2170 = this.member2188(Q, Uint8Array);
            this.member1878 = this.member2188(Q, Float32Array);
            this.member2171 = Q.member608();
            this.member2172 = this.member2188(Q, Int8Array);
            this.member2173 = this.member2188(Q, Int16Array);
            this.member2174 = this.member2188(Q, Int16Array);
            this.member2175 = this.member2188(Q, Int16Array);
            this.member2176 = this.member2188(Q, Int32Array);
            this.member2177 = this.member2188(Q, Int32Array);
            this.member2178 = this.member2188(Q, Int32Array);
            this.member2179 = this.member2188(Q, Int8Array);
            this.member2180 = this.member2188(Q, Int8Array);
            this.member2181 = this.member2188(Q, Int8Array);
            this.member2182 = this.member2188(Q, Int8Array);
            this.member2183 = this.member2188(Q, Int8Array);
            this.member2186 = Q.member608();
            this.member1872 = this.member2188(Q, Float32Array);
            this.member1873 = this.member2188(Q, Float32Array);
            var V = Q.member608();
            if (V > 0) {
                this.member2087 = new Array(V);
                for (var R = 0; R < this.member2087.length; R++) {
                    var U = this.member2087[R] = {};
                    U.member2190 = Q.member608();
                    U.member2191 = Q.member608();
                    U.member1594 = Q.member608();
                    U.member1595 = Q.member608();
                    U.member1596 = Q.member608();
                    U.member2192 = Q.member608();
                }
            }
            var N = Q.member608();
            if (N > 0) {
                this.member2187 = new Array(N);
                for (var R = 0; R < this.member2187.length; R++) {
                    var U = this.member2187[R] = {};
                    U.member2193 = Q.member608();
                    U.member2194 = Q.member608();
                }
            }
            var O = Q.member608();
            if (O > 0) {
                this.member2086 = new Array(O);
                for (var R = 0; R < this.member2086.length; R++) {
                    var T = this.member2086[R] = {};
                    T.member2070 = Q.member608();
                    T.member2195 = Q.member608();
                    T.member2196 = Q.member608();
                    T.member2071 = Q.member608();
                }
            }
        } else if (S !== undefined) {
            k.call(this, S);
            j.call(this);
            E.call(this);
        } else {
            throw new Error('2037 ');
        }
        v.call(this);
    };
    J.prototype.member1886 = function () {
        return Class170.member1859;
    };
    J.prototype.member2197 = function () {
        return this.member2148;
    };
    var v = function () {
        this.member2145 = m++;
    };
    J.prototype.member2198 = function () {
        return this.member2145;
    };
    J.prototype.member1861 = function () {
        return this.member1879;
    };
    J.prototype.member1862 = function (L) {
        return this.member2150[L];
    };
    J.prototype.member1863 = function (L) {
        return this.member2151[L];
    };
    J.prototype.member1864 = function (L) {
        return this.member2152[L];
    };
    J.prototype.member1993 = function (M, L) {
        L[0] = this.member2150[M];
        L[1] = this.member2151[M];
        L[2] = this.member2152[M];
        return L;
    };
    J.prototype.member1991 = function () {
        return this.member2153 !== undefined;
    };
    J.prototype.member1722 = function (L) {
        if (this.member2153 === undefined) {
            return undefined;
        } else if (this.member2153[L] === A) {
            return undefined;
        } else {
            return this.member2153[L];
        }
    };
    J.prototype.member1867 = function (L, M) {
        if (this.member2153 === undefined) {
            return undefined;
        } else {
            M[0] = this.member2153[this.member2156[L]] === A ? undefined : this.member2153[this.member2156[L]];
            M[1] = this.member2153[this.member2157[L]] === A ? undefined : this.member2153[this.member2157[L]];
            M[2] = this.member2153[this.member2158[L]] === A ? undefined : this.member2153[this.member2158[L]];
            return M;
        }
    };
    J.prototype.member1992 = function (L) {
        return this.member2154[L];
    };
    J.prototype.member1868 = function () {
        return this.member1568;
    };
    J.prototype.member1869 = function (L, N) {
        var M;
        if (N === 0) {
            M = this.member2156[L];
        } else if (N === 1) {
            M = this.member2157[L];
        } else if (N === 2) {
            M = this.member2158[L];
        }
        if (M === i) {
            M = undefined;
        }
        return M;
    };
    J.prototype.member1870 = function (O) {
        var T = this.member2156[O];
        var R = this.member2158[O];
        var Q = this.member2157[O];
        var S = this.member2150[T];
        var N = this.member2151[T];
        var M = this.member2152[T];
        var L = new Float32Array(3);
        L[0] = S - this.member2150[R];
        L[1] = N - this.member2151[R];
        L[2] = M - this.member2152[R];
        g[0] = S - this.member2150[Q];
        g[1] = N - this.member2151[Q];
        g[2] = M - this.member2152[Q];
        var P = L;
        Class41.member325(P, g);
        Class41.normalize(P);
        return P;
    };
    J.prototype.member2199 = function () {
        return this.member2159 !== undefined;
    };
    J.prototype.member2200 = function (L) {
        return this.member2159[L];
    };
    J.prototype.member1889 = function (L) {
        if (this.member2159 === undefined) {
            return false;
        } else if (this.member2159[L] === 2) {
            return true;
        } else {
            return false;
        }
    };
    J.prototype.member1888 = function (L) {
        if (this.member2159 === undefined) {
            return false;
        } else if (this.member2159[L] === 1) {
            return true;
        } else {
            return false;
        }
    };
    J.prototype.member1891 = function () {
        return this.member2160 !== undefined;
    };
    J.prototype.member1914 = function (L) {
        if (this.member2160 === undefined) {
            return this.member2161;
        } else {
            return this.member2160[L];
        }
    };
    J.prototype.member2201 = function () {
        return this.member2161;
    };
    J.prototype.member2202 = function () {
        return this.member2162 !== undefined;
    };
    J.prototype.member1890 = function (L) {
        if (this.member2162 !== undefined) {
            if (this.member2162[L] === r || this.member2162[L] === H) {
                return undefined;
            } else {
                return this.member2162[L];
            }
        } else {
            return undefined;
        }
    };
    J.prototype.member2203 = function (L) {
        return this.member2163[L];
    };
    J.prototype.member2204 = function () {
        return this.member2164 !== undefined;
    };
    J.prototype.member2205 = function (L) {
        return this.member2164[L];
    };
    J.prototype.member1887 = function (M, O) {
        var N = this.member2163[M];
        var L = Class143.member1441(N);
        if (O !== undefined) {
            L = Class143.member1445(L, this.member2165, O.member1430(), O.member1429());
        }
        var P = L << 8;
        if (this.member2164 !== undefined) {
            P |= 255 - this.member2164[M];
        } else {
            P |= 255;
        }
        return P;
    };
    J.prototype.member1866 = function (L) {
        if (this.member2164 === undefined) {
            return false;
        } else {
            return this.member2164[L] !== 0;
        }
    };
    J.prototype.member1874 = function () {
        return this.member1877 !== undefined;
    };
    J.prototype.member1875 = function (L) {
        if (this.member1877 !== undefined) {
            return this.member1877[L];
        } else {
            return undefined;
        }
    };
    J.prototype.member2206 = function () {
        return this.member2166 !== undefined;
    };
    J.prototype.member1723 = function (L) {
        if (this.member2166 !== undefined) {
            if (this.member2166[L] === G) {
                return undefined;
            } else {
                return this.member2166[L];
            }
        } else {
            return undefined;
        }
    };
    J.prototype.member1871 = function (M, N) {
        if (this.member1878 === undefined) {
            return undefined;
        }
        for (var L = 0; L < 6; L++) {
            N[L] = this.member1878[M * 6 + L];
        }
    };
    J.prototype.member2207 = function () {
        return this.member2171;
    };
    J.prototype.member2208 = function (L) {
        return this.member2172[L];
    };
    J.prototype.member2209 = function (L) {
        return this.member2173[L];
    };
    J.prototype.member2210 = function (L) {
        return this.member2174[L];
    };
    J.prototype.member2211 = function (L) {
        return this.member2175[L];
    };
    J.prototype.member2212 = function (L) {
        return this.member2176[L];
    };
    J.prototype.member2213 = function (L) {
        return this.member2177[L];
    };
    J.prototype.member2214 = function (L) {
        return this.member2178[L];
    };
    J.prototype.member2215 = function (L) {
        return this.member2179[L];
    };
    J.prototype.member2216 = function (L) {
        return this.member2180[L];
    };
    J.prototype.member2217 = function (L) {
        return this.member2181[L];
    };
    J.prototype.member2218 = function (L) {
        return this.member2182[L];
    };
    J.prototype.member2219 = function (L) {
        return this.member2183[L];
    };
    J.prototype.member1892 = function () {
        if (this.member2087 === undefined) {
            return 0;
        } else {
            return this.member2087.length;
        }
    };
    J.prototype.member2116 = function (L) {
        if (this.member2087 === undefined) {
            return undefined;
        } else {
            return this.member2087[L].member2190;
        }
    };
    J.prototype.member2220 = function (L) {
        if (this.member2087 === undefined) {
            return undefined;
        } else {
            return this.member2087[L].member2192;
        }
    };
    J.prototype.member2117 = function (L) {
        if (this.member2087 === undefined) {
            return undefined;
        } else {
            return this.member2087[L].member2191;
        }
    };
    J.prototype.member2221 = function (L, M) {
        if (this.member2087 === undefined) {
            return undefined;
        } else if (M === 0) {
            return this.member2087[L].member1594;
        } else if (M === 1) {
            return this.member2087[L].member1595;
        } else if (M === 2) {
            return this.member2087[L].member1596;
        }
    };
    J.prototype.member2118 = function (M, N) {
        if (this.member2087 === undefined) {
            return undefined;
        } else {
            var L;
            if (N === 0) {
                L = this.member2087[M].member1594;
            } else if (N === 1) {
                L = this.member2087[M].member1595;
            } else if (N === 2) {
                L = this.member2087[M].member1596;
            }
            return new Float32Array([
                this.member2150[L],
                this.member2151[L],
                this.member2152[L]
            ]);
        }
    };
    J.prototype.member2119 = function (M, N) {
        if (this.member2087 === undefined || this.member2153 === undefined) {
            return undefined;
        } else {
            var L;
            if (N === 0) {
                L = this.member2087[M].member1594;
            } else if (N === 1) {
                L = this.member2087[M].member1595;
            } else if (N === 2) {
                L = this.member2087[M].member1596;
            }
            if (this.member2153[L] === A) {
                return undefined;
            }
            return this.member2153[L];
        }
    };
    J.prototype.member2222 = function () {
        if (this.member2187 === undefined) {
            return 0;
        } else {
            return this.member2187.length;
        }
    };
    J.prototype.member2223 = function (L) {
        if (this.member2187 === undefined) {
            return undefined;
        } else {
            return this.member2187[L].member2193;
        }
    };
    J.prototype.member2224 = function (L) {
        if (this.member2187 === undefined) {
            return undefined;
        } else {
            return this.member2187[L].member2194;
        }
    };
    J.prototype.member1709 = function () {
        if (this.member2086 === undefined) {
            return 0;
        } else {
            return this.member2086.length;
        }
    };
    J.prototype.member2109 = function (L) {
        if (this.member2086 === undefined) {
            return undefined;
        } else {
            return this.member2086[L].member2070;
        }
    };
    J.prototype.member2110 = function (L) {
        if (this.member2086 === undefined) {
            return undefined;
        } else {
            return this.member2086[L].member2195;
        }
    };
    J.prototype.member2114 = function (N, O) {
        if (this.member2086 === undefined) {
            return undefined;
        } else {
            var M = this.member2086[N].member2195;
            var L;
            if (O === 0) {
                L = this.member2156[M];
            } else if (O === 1) {
                L = this.member2157[M];
            } else if (O === 2) {
                L = this.member2158[M];
            }
            return new Float32Array([
                this.member2150[L],
                this.member2151[L],
                this.member2152[L]
            ]);
        }
    };
    J.prototype.member2115 = function (L) {
        if (this.member2086 === undefined) {
            return undefined;
        } else {
            return this.member2086[L].member2071;
        }
    };
    J.prototype.member2111 = function (L) {
        if (this.member2086 === undefined || this.member2153 === undefined) {
            return undefined;
        }
        var M = this.member2153[this.member2156[this.member2086[L].member2195]];
        if (M === A) {
            return undefined;
        } else {
            return M;
        }
    };
    J.prototype.member2112 = function (M) {
        if (this.member2086 === undefined || this.member2166 === undefined) {
            return undefined;
        } else {
            var L = this.member2166[this.member2086[M].member2195];
            if (L === G) {
                return undefined;
            } else {
                return L;
            }
        }
    };
    J.prototype.member2113 = function (L) {
        if (this.member2086 === undefined) {
            return undefined;
        } else {
            return this.member2086[L].member2196;
        }
    };
    var K = function (ah) {
        var a0;
        var Y = Class124(undefined, ah.getData());
        var X = Class124(undefined, ah.getData());
        var V = Class124(undefined, ah.getData());
        var U = Class124(undefined, ah.getData());
        var T = Class124(undefined, ah.getData());
        var Q = Class124(undefined, ah.getData());
        var O = Class124(undefined, ah.getData());
        var bq = Y.member609();
        if (bq !== Class170.member1859) {
            throw new Error('2038 ' + bq);
        }
        this.member2147 = Y.member609();
        this.member2148 = Y.member609();
        Y.member607(ah.getSize() - F);
        this.member1879 = Y.member608();
        this.member1568 = Y.member608();
        this.member2171 = Y.member608();
        var aj = Y.member609();
        var at = (aj & 1) === 1;
        var bp = (aj & 2) === 2;
        var ar = (aj & 4) === 4;
        var aI = (aj & 16) === 16;
        var an = (aj & 32) === 32;
        var Z = (aj & 64) === 64;
        var ax = (aj & 128) === 128;
        var ac = Y.member609();
        var ao = Y.member609();
        var ap = Y.member609();
        var aJ = Y.member609();
        var R = Y.member609();
        var ba = Y.member608();
        var be = Y.member608();
        var bk = Y.member608();
        var aZ = Y.member608();
        var bb = Y.member608();
        var bo = Y.member608();
        var a5 = Y.member608();
        if (!aI) {
            if (R === 1) {
                bo = this.member1879;
            } else {
                bo = 0;
            }
        }
        if (!an) {
            if (ap === 1) {
                a5 = this.member1568;
            } else {
                a5 = 0;
            }
        }
        var a3 = 0, aM = 0, a2 = 0;
        if (this.member2171 > 0) {
            this.member2172 = new Int8Array(this.member2171);
            Y.member607(I);
            for (a0 = 0; a0 < this.member2171; a0++) {
                var aK = this.member2172[a0] = Y.member1070();
                if (aK === 0) {
                    a3++;
                }
                if (aK >= 1 && aK <= 3) {
                    aM++;
                }
                if (aK === 2) {
                    a2++;
                }
            }
        }
        var a1 = I + this.member2171;
        var aV = a1;
        a1 += this.member1879;
        var ak = a1;
        if (at) {
            a1 += this.member1568;
        }
        var aX = a1;
        a1 += this.member1568;
        var ai = a1;
        if (ac === 255) {
            a1 += this.member1568;
        }
        var af = a1;
        a1 += a5;
        var aR = a1;
        a1 += bo;
        var ag = a1;
        if (ao === 1) {
            a1 += this.member1568;
        }
        var aY = a1;
        a1 += aZ;
        var ae = a1;
        if (aJ === 1) {
            a1 += this.member1568 * 2;
        }
        var ad = a1;
        a1 += bb;
        var am = a1;
        a1 += this.member1568 * 2;
        var aU = a1;
        a1 += ba;
        var aT = a1;
        a1 += be;
        var aS = a1;
        a1 += bk;
        var bj = a1;
        a1 += a3 * 6;
        var bi = a1;
        a1 += aM * 6;
        var aa = 6;
        if (this.member2148 === 14) {
            aa = 7;
        } else if (this.member2148 >= 15) {
            aa = 9;
        }
        var bh = a1;
        a1 += aM * aa;
        var bg = a1;
        a1 += aM;
        var bf = a1;
        a1 += aM;
        var bd = a1;
        a1 += aM + a2 * 2;
        var W = a1;
        var aW = ah.getSize();
        var aQ = ah.getSize();
        var aP = ah.getSize();
        var aN = ah.getSize();
        if (ax) {
            var bc = Class124(undefined, ah.getData());
            bc.member1045 = ah.getSize() - F - 1;
            bc.member1045 -= bc.member609() - 1;
            this.member2186 = bc.member608();
            var S = bc.member608();
            var P = bc.member608();
            aW = W + S;
            aQ = aW + P;
            aP = aQ + this.member1879;
            aN = aP + this.member2186 * 2;
        }
        this.member2150 = new Int32Array(this.member1879);
        this.member2151 = new Int32Array(this.member1879);
        this.member2152 = new Int32Array(this.member1879);
        this.member2156 = new Int16Array(this.member1568);
        this.member2157 = new Int16Array(this.member1568);
        this.member2158 = new Int16Array(this.member1568);
        if (R === 1) {
            this.member2153 = new Int32Array(this.member1879);
        }
        if (at) {
            this.member2159 = new Int8Array(this.member1568);
        }
        if (ac === 255) {
            this.member2160 = new Int8Array(this.member1568);
        } else {
            this.member2161 = ac;
        }
        if (ao) {
            this.member2164 = new Int8Array(this.member1568);
        }
        if (ap) {
            this.member2166 = new Int32Array(this.member1568);
        }
        if (aJ === 1) {
            this.member1877 = new Uint16Array(this.member1568);
            if (this.member2171 > 0 || this.member2186 > 0) {
                this.member2162 = new Uint16Array(this.member1568);
            }
        }
        this.member2163 = new Uint16Array(this.member1568);
        if (this.member2171 > 0) {
            this.member2173 = new Int16Array(this.member2171);
            this.member2174 = new Int16Array(this.member2171);
            this.member2175 = new Int16Array(this.member2171);
            if (aM > 0) {
                this.member2176 = new Int32Array(this.member2171);
                this.member2177 = new Int32Array(this.member2171);
                this.member2178 = new Int32Array(this.member2171);
                this.member2182 = new Int8Array(this.member2171);
                this.member2183 = new Int8Array(this.member2171);
                this.member2179 = new Int8Array(this.member2171);
            }
            if (a2 > 0) {
                this.member2180 = new Int8Array(this.member2171);
                this.member2181 = new Int8Array(this.member2171);
            }
        }
        Y.member607(aV);
        X.member607(aU);
        V.member607(aT);
        U.member607(aS);
        T.member607(aR);
        var a8 = 0, a7 = 0, a6 = 0;
        for (a0 = 0; a0 < this.member1879; a0++) {
            var al = Y.member609();
            var N = 0;
            if ((al & 1) !== 0) {
                N = X.member1080();
            }
            var M = 0;
            if ((al & 2) !== 0) {
                M = -V.member1080();
            }
            var br = 0;
            if ((al & 4) !== 0) {
                br = U.member1080();
            }
            a8 = this.member2150[a0] = a8 + N;
            a7 = this.member2151[a0] = a7 + M;
            a6 = this.member2152[a0] = a6 + br;
            if (R === 1) {
                if (aI) {
                    this.member2153[a0] = T.member1081();
                } else {
                    this.member2153[a0] = T.member609();
                    if (this.member2153[a0] === 255) {
                        this.member2153[a0] = A;
                    }
                }
            }
        }
        if (this.member2186 > 0) {
            Y.member607(aQ);
            X.member607(aP);
            V.member607(aN);
            this.member2155 = new Uint16Array(this.member1879);
            for (var aw = 0, av = 0; aw < this.member1879; ++aw) {
                this.member2155[aw] = av;
                av += Y.member609();
            }
            this.member2168 = new Uint8Array(this.member1568);
            this.member2169 = new Uint8Array(this.member1568);
            this.member2170 = new Uint8Array(this.member1568);
            this.member1872 = new Float32Array(this.member2186);
            this.member1873 = new Float32Array(this.member2186);
            for (var aw = 0; aw < this.member2186; ++aw) {
                this.member1872[aw] = X.member1071() / 4096;
                this.member1873[aw] = V.member1071() / 4096;
            }
        }
        Y.member607(am);
        X.member607(ak);
        V.member607(ai);
        U.member607(ag);
        T.member607(af);
        Q.member607(ae);
        O.member607(ad);
        for (a0 = 0; a0 < this.member1568; a0++) {
            this.member2163[a0] = Y.member608();
            if (at) {
                this.member2159[a0] = X.member609();
            }
            if (ac === 255) {
                this.member2160[a0] = V.member609();
            }
            if (ao === 1) {
                this.member2164[a0] = U.member609();
            }
            if (ap === 1) {
                if (an) {
                    this.member2166[a0] = T.member1081();
                } else {
                    this.member2166[a0] = T.member609();
                    if (this.member2166[a0] === 255) {
                        this.member2166[a0] = -1;
                    }
                }
            }
            if (aJ === 1) {
                this.member1877[a0] = Q.member608() - 1;
            }
            if (this.member2162 !== undefined) {
                if (this.member1877[a0] !== D) {
                    if (this.member2148 >= 16) {
                        this.member2162[a0] = O.member1078() - 1;
                    } else {
                        this.member2162[a0] = O.member609() - 1;
                    }
                } else {
                    this.member2162[a0] = H;
                }
            }
        }
        this.member2149 = -1;
        Y.member607(aY);
        X.member607(aX);
        V.member607(aW);
        var bn = 0, bm = 0, bl = 0;
        var aH = 0, aG = 0, aF = 0;
        var L = 0;
        for (a0 = 0; a0 < this.member1568; a0++) {
            var aK = X.member609();
            var au = aK & 7;
            if (au === 1) {
                aH = Y.member1080() + L;
                L = aH;
                aG = Y.member1080() + L;
                L = aG;
                aF = Y.member1080() + L;
                L = aF;
                this.member2156[a0] = aH;
                this.member2157[a0] = aG;
                this.member2158[a0] = aF;
                if (aH > this.member2149) {
                    this.member2149 = aH;
                }
                if (aG > this.member2149) {
                    this.member2149 = aG;
                }
                if (aF > this.member2149) {
                    this.member2149 = aF;
                }
            } else if (au === 2) {
                aG = aF;
                aF = Y.member1080() + L;
                L = aF;
                this.member2156[a0] = aH;
                this.member2157[a0] = aG;
                this.member2158[a0] = aF;
                if (aF > this.member2149) {
                    this.member2149 = aF;
                }
            } else if (au === 3) {
                aH = aF;
                aF = Y.member1080() + L;
                L = aF;
                this.member2156[a0] = aH;
                this.member2157[a0] = aG;
                this.member2158[a0] = aF;
                if (aF > this.member2149) {
                    this.member2149 = aF;
                }
            } else if (au === 4) {
                var aO = aH;
                aH = aG;
                aG = aO;
                aF = Y.member1080() + L;
                L = aF;
                this.member2156[a0] = aH;
                this.member2157[a0] = aG;
                this.member2158[a0] = aF;
                if (aF > this.member2149) {
                    this.member2149 = aF;
                }
            }
            if (this.member2186 > 0) {
                if ((aK & 8) !== 0) {
                    this.member2168[a0] = V.member609();
                    this.member2169[a0] = V.member609();
                    this.member2170[a0] = V.member609();
                }
            }
        }
        this.member2149++;
        Y.member607(bj);
        X.member607(bi);
        V.member607(bh);
        U.member607(bg);
        T.member607(bf);
        Q.member607(bd);
        for (a0 = 0; a0 < this.member2171; a0++) {
            var aK = this.member2172[a0];
            if (aK === 0) {
                this.member2173[a0] = Y.member1071();
                this.member2174[a0] = Y.member1071();
                this.member2175[a0] = Y.member1071();
            } else {
                this.member2173[a0] = X.member1071();
                this.member2174[a0] = X.member1071();
                this.member2175[a0] = X.member1071();
                if (this.member2148 < 15) {
                    this.member2176[a0] = V.member608();
                    if (this.member2148 < 14) {
                        this.member2177[a0] = V.member608();
                    } else {
                        this.member2177[a0] = V.g3();
                    }
                    this.member2178[a0] = V.member608();
                } else {
                    this.member2176[a0] = V.g3();
                    this.member2177[a0] = V.g3();
                    this.member2178[a0] = V.g3();
                }
                this.member2182[a0] = U.member609();
                this.member2183[a0] = T.member1070();
                this.member2179[a0] = Q.member1070();
                if (aK === 2) {
                    this.member2180[a0] = Q.member1070();
                    this.member2181[a0] = Q.member1070();
                }
            }
        }
        Y.member607(W);
        if (bp) {
            var aq = Y.member609();
            if (aq > 0) {
                this.member2087 = new Array(aq);
                for (var a0 = 0; a0 < aq; a0++) {
                    var aE = Y.member608();
                    var aD = Y.member608();
                    var aC = ac;
                    if (ac === 255) {
                        aC = this.member2160[aD];
                    }
                    this.member2087[a0] = {
                        member2190: aE,
                        member2191: aD,
                        member1594: this.member2156[aD],
                        member1595: this.member2157[aD],
                        member1596: this.member2158[aD],
                        member2192: aC
                    };
                }
            }
            var ab = Y.member609();
            if (ab > 0) {
                this.member2187 = new Array(ab);
                for (var a0 = 0; a0 < ab; a0++) {
                    var aB = Y.member608();
                    var aA = Y.member608();
                    this.member2187[a0] = {
                        member2193: aB,
                        member2194: aA
                    };
                }
            }
        }
        if (ar) {
            var aL = Y.member609();
            if (aL > 0) {
                this.member2086 = new Array(aL);
                for (var a0 = 0; a0 < aL; a0++) {
                    var a9 = Y.member608();
                    var az = Y.member608();
                    var ay;
                    if (Z) {
                        ay = Y.member1081();
                        if (ay === -1) {
                            ay = undefined;
                        }
                    } else {
                        ay = Y.member609();
                        if (ay === 255) {
                            ay = undefined;
                        }
                    }
                    var a4 = Y.member1070();
                    this.member2086[a0] = {
                        member2070: a9,
                        member2195: az,
                        member2196: ay,
                        member2071: a4
                    };
                }
            }
        }
    };
    var k = function (P) {
        var ah = false, an = false, aa = false, M = false, S = false, ac = false;
        var ad = 0, ar = 0, V = 0;
        this.member2161 = undefined;
        for (var O = 0; O < P.length; O++) {
            var Y = P[O];
            if (Y !== null && Y !== undefined) {
                this.member1879 += Y.member1861();
                this.member1568 += Y.member1868();
                this.member2171 += Y.member2207();
                this.member2186 += Y.member2186;
                ad += Y.member1892();
                ar += Y.member2222();
                V += Y.member1709();
                ah |= Y.member2199();
                if (Y.member1891()) {
                    an = true;
                } else {
                    if (this.member2161 === undefined) {
                        this.member2161 = Y.member2201();
                    }
                    if (this.member2161 !== Y.member2201()) {
                        an = true;
                    }
                }
                aa |= Y.member2204();
                M |= Y.member2202();
                S |= Y.member1874();
                ac |= Y.member2206();
            }
        }
        this.member2150 = new Int32Array(this.member1879);
        this.member2151 = new Int32Array(this.member1879);
        this.member2152 = new Int32Array(this.member1879);
        this.member2153 = new Int32Array(this.member1879);
        this.member434 = new Int16Array(this.member1879);
        this.member2156 = new Int16Array(this.member1568);
        this.member2157 = new Int16Array(this.member1568);
        this.member2158 = new Int16Array(this.member1568);
        if (ah) {
            this.member2159 = new Int8Array(this.member1568);
        }
        if (an) {
            this.member2160 = new Int8Array(this.member1568);
        }
        if (aa) {
            this.member2164 = new Int8Array(this.member1568);
        }
        if (M) {
            this.member2162 = new Uint16Array(this.member1568);
        }
        this.member2163 = new Uint16Array(this.member1568);
        if (S) {
            this.member1877 = new Uint16Array(this.member1568);
        }
        if (ac) {
            this.member2166 = new Int32Array(this.member1568);
        }
        this.member2167 = new Int16Array(this.member1568);
        if (this.member2171 > 0) {
            this.member2172 = new Int8Array(this.member2171);
            this.member2173 = new Int16Array(this.member2171);
            this.member2174 = new Int16Array(this.member2171);
            this.member2175 = new Int16Array(this.member2171);
            this.member2176 = new Int32Array(this.member2171);
            this.member2177 = new Int32Array(this.member2171);
            this.member2178 = new Int32Array(this.member2171);
            this.member2182 = new Int8Array(this.member2171);
            this.member2183 = new Int8Array(this.member2171);
            this.member2179 = new Int8Array(this.member2171);
            this.member2180 = new Int8Array(this.member2171);
            this.member2181 = new Int8Array(this.member2171);
        }
        if (V > 0) {
            this.member2086 = new Array(V);
        }
        if (ad > 0) {
            this.member2087 = new Array(ad);
        }
        if (ar > 0) {
            this.member2187 = new Array(ar);
        }
        if (this.member2186 > 0) {
            this.member1872 = new Float32Array(this.member2186);
            this.member1873 = new Float32Array(this.member2186);
            this.member2155 = new Uint16Array(this.member1879);
            this.member2168 = new Uint8Array(this.member1568);
            this.member2169 = new Uint8Array(this.member1568);
            this.member2170 = new Uint8Array(this.member1568);
        }
        var aC = new Uint8Array(this.member1879);
        var av = new Uint32Array(this.member2186);
        var Q = new Uint16Array(this.member1879);
        var al = new Uint8Array(this.member1879);
        var aq = new Uint16Array(3);
        this.member1879 = 0;
        this.member1568 = 0;
        this.member2171 = 0;
        this.member2186 = 0;
        ad = 0;
        ar = 0;
        V = 0;
        for (O = 0; O < P.length; O++) {
            var af = 1 << O;
            Y = P[O];
            if (Y !== null && Y !== undefined) {
                var N = new Uint8Array(Y.member1879);
                var L = Y.member1709();
                for (var az = 0; az < L; az++) {
                    this.member2086[V++] = {
                        member2070: Y.member2109(az),
                        member2195: Y.member2110(az) + this.member1568,
                        member2196: Y.member2113(az),
                        member2071: Y.member2115(az)
                    };
                }
                for (var ax = 0; ax < Y.member1568; ax++) {
                    aq[0] = Y.member2156[ax];
                    aq[1] = Y.member2157[ax];
                    aq[2] = Y.member2158[ax];
                    for (var au = 0; au < 3; au++) {
                        var X = aq[au];
                        var am = Y.member2150[X];
                        var ak = Y.member2151[X];
                        var ae = Y.member2152[X];
                        var ai;
                        for (ai = 0; ai < this.member1879; ai++) {
                            if (am == this.member2150[ai] && ak == this.member2151[ai] && ae == this.member2152[ai]) {
                                this.member434[ai] |= af;
                                Q[X] = ai;
                                break;
                            }
                        }
                        if (Y.member2186 > 0 && N[X] === 0) {
                            var U = (X < Y.member1879 - 1 ? Y.member2155[X + 1] : Y.member2186) - Y.member2155[X];
                            for (var ab = 0; ab < U; ++ab) {
                                this.member1872[this.member2186] = Y.member1872[Y.member2155[X] + ab];
                                this.member1873[this.member2186] = Y.member1873[Y.member2155[X] + ab];
                                av[this.member2186] = ai << 16 | aC[ai] + ab;
                                this.member2186++;
                            }
                            al[X] = aC[ai];
                            aC[ai] += U;
                            N[X] = 1;
                        }
                        if (ai >= this.member1879) {
                            this.member2150[this.member1879] = am;
                            this.member2151[this.member1879] = ak;
                            this.member2152[this.member1879] = ae;
                            this.member434[this.member1879] = af;
                            this.member2153[this.member1879] = Y.member2153 != null ? Y.member2153[X] : A;
                            Q[X] = this.member1879;
                            this.member1879++;
                        }
                    }
                }
                var aj = Y.member1868();
                for (var R = 0; R < aj; R++) {
                    if (ah) {
                        if (Y.member2199()) {
                            this.member2159[this.member1568] = Y.member2200(R);
                        }
                    }
                    if (an) {
                        if (Y.member1891()) {
                            this.member2160[this.member1568] = Y.member1914(R);
                        } else {
                            this.member2160[this.member1568] = Y.member2201();
                        }
                    }
                    if (aa) {
                        if (Y.member2204()) {
                            this.member2164[this.member1568] = Y.member2205(R);
                        } else {
                            this.member2164[this.member1568] = 0;
                        }
                    }
                    if (S) {
                        if (Y.member1874() && Y.member1875(R) !== undefined) {
                            this.member1877[this.member1568] = Y.member1875(R);
                        } else {
                            this.member1877[this.member1568] = D;
                        }
                    }
                    if (ac) {
                        if (Y.member2206() && Y.member1723(R) !== undefined) {
                            this.member2166[this.member1568] = Y.member1723(R);
                        } else {
                            this.member2166[this.member1568] = G;
                        }
                    }
                    if (Y.member2186 > 0) {
                        this.member2168[this.member1568] = Y.member2168[R] + al[Y.member2156[R]];
                        this.member2169[this.member1568] = Y.member2169[R] + al[Y.member2157[R]];
                        this.member2170[this.member1568] = Y.member2170[R] + al[Y.member2158[R]];
                    }
                    this.member2156[this.member1568] = Q[Y.member2156[R]];
                    this.member2157[this.member1568] = Q[Y.member2157[R]];
                    this.member2158[this.member1568] = Q[Y.member2158[R]];
                    this.member2167[this.member1568] = af;
                    this.member2163[this.member1568] = Y.member2203(R);
                    this.member1568++;
                }
                var at = Y.member1892();
                for (var aw = 0; aw < at; aw++) {
                    this.member2087[ad] = {
                        member2190: Y.member2116(aw),
                        member1594: Q[Y.member2221(aw, 0)],
                        member1595: Q[Y.member2221(aw, 1)],
                        member1596: Q[Y.member2221(aw, 2)],
                        member2192: Y.member2220(aw)
                    };
                    ad++;
                }
                var W = Y.member2222();
                for (var ay = 0; ay < W; ay++) {
                    this.member2187[ar] = {
                        member2193: Y.member2223(ay),
                        member2194: Q[Y.member2224(ay)]
                    };
                    ar++;
                }
            }
        }
        if (this.member2186 > 0) {
            Class165.member1786(av, this.member1872, this.member1873, 0, this.member2186 - 1);
            for (var ap = 0, ao = 0; ap < this.member1879; ++ap) {
                this.member2155[ap] = ao;
                ao += aC[ap];
            }
        }
        var ag = 0;
        this.member2149 = this.member1879;
        for (var O = 0; O < P.length; O++) {
            var af = 1 << O;
            var Y = P[O];
            if (Y !== null && Y !== undefined) {
                if (M) {
                    var aj = Y.member1868();
                    for (R = 0; R < aj; R++) {
                        var aB = Y.member2202() ? Y.member2162[R] : H;
                        this.member2162[ag++] = aB !== r && aB !== H ? aB + this.member2171 : aB;
                    }
                }
                var T = Y.member2207();
                for (var Z = 0; Z < T; Z++) {
                    var aA = this.member2172[this.member2171] = Y.member2208(Z);
                    if (aA === 0) {
                        this.member2173[this.member2171] = n.call(this, Y, Y.member2209(Z), af);
                        this.member2174[this.member2171] = n.call(this, Y, Y.member2210(Z), af);
                        this.member2175[this.member2171] = n.call(this, Y, Y.member2211(Z), af);
                    }
                    if (aA >= 1 && aA <= 3) {
                        this.member2173[this.member2171] = Y.member2209(Z);
                        this.member2174[this.member2171] = Y.member2210(Z);
                        this.member2175[this.member2171] = Y.member2211(Z);
                        this.member2176[this.member2171] = Y.member2212(Z);
                        this.member2177[this.member2171] = Y.member2213(Z);
                        this.member2178[this.member2171] = Y.member2214(Z);
                        this.member2182[this.member2171] = Y.member2218(Z);
                        this.member2183[this.member2171] = Y.member2219(Z);
                        this.member2179[this.member2171] = Y.member2215(Z);
                    }
                    if (aA === 2) {
                        this.member2180[this.member2171] = Y.member2216(Z);
                        this.member2181[this.member2171] = Y.member2217(Z);
                    }
                    this.member2171++;
                }
            }
        }
    };
    var n = function (R, N, Q) {
        var L = R.member1862(N), S = R.member1863(N), P = R.member1864(N);
        for (var O = 0; O < this.member1879; O++) {
            if (L === this.member2150[O] && S === this.member2151[O] && P === this.member2152[O]) {
                this.member434[O] |= Q;
                return O;
            }
        }
        this.member2150[this.member1879] = L;
        this.member2151[this.member1879] = S;
        this.member2152[this.member1879] = P;
        this.member434[this.member1879] = Q;
        var M = R.member1722(N);
        if (M === undefined) {
            M = A;
        }
        this.member2153[this.member1879] = M;
        return this.member1879++;
    };
    var j = function () {
        if (this.member2162 !== undefined) {
            var U = new Array(this.member2171), T = new Array(this.member2171);
            var S = new Array(this.member2171), R = new Array(this.member2171);
            var Q = new Array(this.member2171), P = new Array(this.member2171);
            for (var ac = 0; ac < this.member2171; ac++) {
                U[ac] = Number.MAX_VALUE;
                T[ac] = -Number.MAX_VALUE;
                S[ac] = Number.MAX_VALUE;
                R[ac] = -Number.MAX_VALUE;
                Q[ac] = Number.MAX_VALUE;
                P[ac] = -Number.MAX_VALUE;
            }
            for (var ag = 0; ag < this.member1568; ag++) {
                if (this.member2162[ag] !== r && this.member2162[ag] !== H) {
                    var N = this.member2162[ag];
                    for (var ae = 0; ae < 3; ae++) {
                        var ad;
                        if (ae === 0) {
                            ad = this.member2156[ag];
                        } else if (ae === 1) {
                            ad = this.member2157[ag];
                        } else {
                            ad = this.member2158[ag];
                        }
                        var Z = this.member2150[ad], X = -this.member2151[ad], W = this.member2152[ad];
                        if (Z < U[N]) {
                            U[N] = Z;
                        }
                        if (Z > T[N]) {
                            T[N] = Z;
                        }
                        if (X < S[N]) {
                            S[N] = X;
                        }
                        if (X > R[N]) {
                            R[N] = X;
                        }
                        if (W < Q[N]) {
                            Q[N] = W;
                        }
                        if (W > P[N]) {
                            P[N] = W;
                        }
                    }
                }
            }
            this.member2184 = new Array(this.member2171);
            this.member2185 = new Array(this.member2171);
            for (var ac = 0; ac < this.member2171; ac++) {
                var ab = this.member2172[ac];
                if (ab > 0) {
                    this.member2184[ac] = new Float32Array([
                        Math.floor((U[ac] + T[ac]) / 2),
                        Math.floor((S[ac] + R[ac]) / 2),
                        Math.floor((Q[ac] + P[ac]) / 2)
                    ]);
                    if (ab === 1) {
                        var af = this.member2176[ac];
                        if (af === 0) {
                            a[0] = 1;
                            a[2] = 1;
                        } else if (af > 0) {
                            a[0] = 1;
                            a[2] = af / 1024;
                        } else {
                            a[2] = 1;
                            a[0] = -af / 1024;
                        }
                        a[1] = 64 / this.member2177[ac];
                    } else if (ab === 2) {
                        a[0] = 64 / this.member2176[ac];
                        a[1] = 64 / this.member2177[ac];
                        a[2] = 64 / this.member2178[ac];
                    } else {
                        a[0] = this.member2176[ac] / 1024;
                        a[1] = this.member2177[ac] / 1024;
                        a[2] = this.member2178[ac] / 1024;
                    }
                    var aa = this.member2182[ac] / 256 * (Math.PI * 2);
                    var O = Math.cos(aa);
                    var L = Math.sin(aa);
                    z[0] = O;
                    z[1] = 0;
                    z[2] = L;
                    z[3] = 0;
                    z[4] = 1;
                    z[5] = 0;
                    z[6] = -L;
                    z[7] = 0;
                    z[8] = O;
                    var Y = 1, V = 0;
                    O = this.member2174[ac] / 32767;
                    L = -Math.sqrt(1 - O * O);
                    var ah = 1 - O;
                    var M = Math.sqrt(this.member2173[ac] * this.member2173[ac] + this.member2175[ac] * this.member2175[ac]);
                    if (M === 0 && O === 0) {
                        Class37.set(z, b);
                    } else {
                        if (M != 0) {
                            Y = -this.member2175[ac] / M;
                            V = this.member2173[ac] / M;
                        }
                        C[0] = O + Y * Y * ah;
                        C[1] = V * L;
                        C[2] = V * Y * ah;
                        C[3] = -V * L;
                        C[4] = O;
                        C[5] = Y * L;
                        C[6] = Y * V * ah;
                        C[7] = -Y * L;
                        C[8] = O + V * V * ah;
                        b[0] = z[0] * C[0] + z[1] * C[3] + z[2] * C[6];
                        b[1] = z[0] * C[1] + z[1] * C[4] + z[2] * C[7];
                        b[2] = z[0] * C[2] + z[1] * C[5] + z[2] * C[8];
                        b[3] = z[3] * C[0] + z[4] * C[3] + z[5] * C[6];
                        b[4] = z[3] * C[1] + z[4] * C[4] + z[5] * C[7];
                        b[5] = z[3] * C[2] + z[4] * C[5] + z[5] * C[8];
                        b[6] = z[6] * C[0] + z[7] * C[3] + z[8] * C[6];
                        b[7] = z[6] * C[1] + z[7] * C[4] + z[8] * C[7];
                        b[8] = z[6] * C[2] + z[7] * C[5] + z[8] * C[8];
                    }
                    b[0] *= a[0];
                    b[1] *= a[0];
                    b[2] *= a[0];
                    b[3] *= a[1];
                    b[4] *= a[1];
                    b[5] *= a[1];
                    b[6] *= a[2];
                    b[7] *= a[2];
                    b[8] *= a[2];
                    Class37.member314(b);
                    this.member2185[ac] = Class37.member316(b);
                }
            }
        }
    };
    var E = function () {
        this.member1878 = new Float32Array(this.member1568 * 6);
        var ay;
        for (var aL = 0; aL < this.member1568; aL++) {
            var aF = 0, al = 0, aE = 0, ak = 0, aD = 0, aj = 0;
            if (this.member1877 !== undefined && this.member1877[aL] !== D) {
                var aM = H;
                if (this.member2162 !== undefined) {
                    aM = this.member2162[aL];
                }
                if (aM === H) {
                    aF = 0;
                    al = 1;
                    aE = 1;
                    ak = 1;
                    aD = 0;
                    aj = 0;
                } else if (aM === r) {
                    var ar = this.member2155[this.member2156[aL]] + this.member2168[aL];
                    var aq = this.member2155[this.member2157[aL]] + this.member2169[aL];
                    var ao = this.member2155[this.member2158[aL]] + this.member2170[aL];
                    aF = this.member1872[ar];
                    al = this.member1873[ar];
                    aE = this.member1872[aq];
                    ak = this.member1873[aq];
                    aD = this.member1872[ao];
                    aj = this.member1873[ao];
                } else {
                    var ah = this.member2172[aM];
                    if (ah === 0) {
                        var ai = this.member2156[aL], ag = this.member2157[aL], M = this.member2158[aL];
                        var az = this.member2173[aM], ax = this.member2174[aM], aw = this.member2175[aM];
                        var aJ = this.member2150[az], ap = this.member2151[az], W = this.member2152[az];
                        var aI = this.member2150[ax] - aJ, an = this.member2151[ax] - ap, U = this.member2152[ax] - W;
                        var aG = this.member2150[aw] - aJ, am = this.member2151[aw] - ap, S = this.member2152[aw] - W;
                        var ae = this.member2150[ai] - aJ, O = this.member2151[ai] - ap, aC = this.member2152[ai] - W;
                        var ad = this.member2150[ag] - aJ, N = this.member2151[ag] - ap, aB = this.member2152[ag] - W;
                        var ac = this.member2150[M] - aJ, L = this.member2151[M] - ap, aA = this.member2152[M] - W;
                        var V = an * S - U * am;
                        var aK = U * aG - aI * S;
                        var av = aI * am - an * aG;
                        var R = am * av - S * aK;
                        var Q = S * V - aG * av;
                        var P = aG * aK - am * V;
                        var aH = 1 / (R * aI + Q * an + P * U);
                        aF = (R * ae + Q * O + P * aC) * aH;
                        aE = (R * ad + Q * N + P * aB) * aH;
                        aD = (R * ac + Q * L + P * aA) * aH;
                        R = an * av - U * aK;
                        Q = U * V - aI * av;
                        P = aI * aK - an * V;
                        aH = 1 / (R * aG + Q * am + P * S);
                        al = (R * ae + Q * O + P * aC) * aH;
                        ak = (R * ad + Q * N + P * aB) * aH;
                        aj = (R * ac + Q * L + P * aA) * aH;
                    } else {
                        var ai = this.member2156[aL], ag = this.member2157[aL], M = this.member2158[aL];
                        h[0] = this.member2150[ai];
                        h[1] = -this.member2151[ai];
                        h[2] = this.member2152[ai];
                        e[0] = this.member2150[ag];
                        e[1] = -this.member2151[ag];
                        e[2] = this.member2152[ag];
                        c[0] = this.member2150[M];
                        c[1] = -this.member2151[M];
                        c[2] = this.member2152[M];
                        var af = this.member2184[aM];
                        var au = this.member2185[aM];
                        var Y = this.member2183[aM];
                        var ab = this.member2179[aM] / 256;
                        if (ah === 1) {
                            var at = this.member2178[aM] / 1024;
                            ay = s(h, af, au, at, Y, ab);
                            aF = ay.member1872;
                            al = ay.member1873;
                            ay = s(e, af, au, at, Y, ab);
                            aE = ay.member1872;
                            ak = ay.member1873;
                            ay = s(c, af, au, at, Y, ab);
                            aD = ay.member1872;
                            aj = ay.member1873;
                            var T = at / 2;
                            if ((Y & 1) === 0) {
                                if (aE - aF > T) {
                                    aE -= at;
                                } else if (aF - aE > T) {
                                    aE += at;
                                }
                                if (aD - aF > T) {
                                    aD -= at;
                                } else if (aF - aD > T) {
                                    aD += at;
                                }
                            } else {
                                if (ak - al > T) {
                                    ak -= at;
                                } else if (al - ak > T) {
                                    ak += at;
                                }
                                if (aj - al > T) {
                                    aj -= at;
                                } else if (al - aj > T) {
                                    aj += at;
                                }
                            }
                        } else if (ah === 2) {
                            var aa = this.member2180[aM] / 256;
                            var Z = this.member2181[aM] / 256;
                            Class41.member322(e, h, y);
                            Class41.member322(c, h, x);
                            Class41.member325(x, y, q);
                            Class49.member318(au, q, t);
                            a[0] = 1 / (64 / this.member2176[aM]);
                            a[1] = 1 / (64 / this.member2177[aM]);
                            a[2] = 1 / (64 / this.member2178[aM]);
                            Class41.member323(t, a);
                            var X = B(t);
                            ay = l(h, af, X, au, Y, ab, aa, Z);
                            aF = ay.member1872;
                            al = ay.member1873;
                            ay = l(e, af, X, au, Y, ab, aa, Z);
                            aE = ay.member1872;
                            ak = ay.member1873;
                            ay = l(c, af, X, au, Y, ab, aa, Z);
                            aD = ay.member1872;
                            aj = ay.member1873;
                        } else if (ah === 3) {
                            ay = o(h, af, au, Y, ab);
                            aF = ay.member1872;
                            al = ay.member1873;
                            ay = o(e, af, au, Y, ab);
                            aE = ay.member1872;
                            ak = ay.member1873;
                            ay = o(c, af, au, Y, ab);
                            aD = ay.member1872;
                            aj = ay.member1873;
                            if ((Y & 1) === 0) {
                                if (aE - aF > 0.5) {
                                    aE -= 1;
                                } else if (aF - aE > 0.5) {
                                    aE += 1;
                                }
                                if (aD - aF > 0.5) {
                                    aD -= 1;
                                } else if (aF - aD > 0.5) {
                                    aD += 1;
                                }
                            } else {
                                if (ak - al > 0.5) {
                                    ak -= 1;
                                } else if (al - ak > 0.5) {
                                    ak += 1;
                                }
                                if (aj - al > 0.5) {
                                    aj -= 1;
                                } else if (al - aj > 0.5) {
                                    aj += 1;
                                }
                            }
                        }
                    }
                }
            }
            this.member1878[aL * 6] = aF;
            this.member1878[aL * 6 + 1] = aE;
            this.member1878[aL * 6 + 2] = aD;
            this.member1878[aL * 6 + 3] = al;
            this.member1878[aL * 6 + 4] = ak;
            this.member1878[aL * 6 + 5] = aj;
        }
    };
    var o = function (L, S, N, P, R) {
        Class41.member322(L, S);
        Class49.member318(N, L);
        Class41.normalize(L);
        var Q = Math.atan2(L[0], L[2]) / (Math.PI * 2) + 0.5;
        var O = Math.asin(L[1]) / Math.PI + 0.5 + R;
        if (P === 1) {
            var M = Q;
            Q = -O;
            O = M;
        } else if (P === 2) {
            Q = -Q;
            O = -O;
        } else if (P === 3) {
            var M = Q;
            Q = O;
            O = -M;
        }
        return {
            member1872: Q,
            member1873: O
        };
    };
    var s = function (S, Q, R, M, L, P) {
        Class41.member322(S, Q);
        Class49.member318(R, S);
        var O = Math.atan2(S[0], S[2]) / (Math.PI * 2) + 0.5;
        if (M !== 1) {
            O *= M;
        }
        var N = S[1] + 0.5 + P;
        if (L === 1) {
            var T = O;
            O = -N;
            N = T;
        } else if (L === 2) {
            O = -O;
            N = -N;
        } else if (L === 3) {
            var T = O;
            O = N;
            N = -T;
        }
        return {
            member1872: O,
            member1873: N
        };
    };
    var B = function (O) {
        var N = O[0] < 0 ? -O[0] : O[0];
        var M = O[1] < 0 ? -O[1] : O[1];
        var L = O[2] < 0 ? -O[2] : O[2];
        if (M > N && M > L) {
            if (O[1] < 0) {
                return 0;
            } else {
                return 1;
            }
        } else if (L > N && L > M) {
            if (O[2] > 0) {
                return 2;
            } else {
                return 3;
            }
        } else if (O[0] > 0) {
            return 4;
        } else {
            return 5;
        }
    };
    var l = function (U, S, R, T, L, Q, P, O) {
        Class41.member322(U, S);
        Class49.member318(T, U);
        var N, M;
        if (R === 0) {
            N = U[0] + Q + 0.5;
            M = -U[2] + O + 0.5;
        } else if (R === 1) {
            N = U[0] + Q + 0.5;
            M = U[2] + O + 0.5;
        } else if (R === 2) {
            N = U[0] + Q + 0.5;
            M = -U[1] + P + 0.5;
        } else if (R === 3) {
            N = -U[0] + Q + 0.5;
            M = -U[1] + P + 0.5;
        } else if (R === 4) {
            N = -U[2] + O + 0.5;
            M = -U[1] + P + 0.5;
        } else {
            N = U[2] + O + 0.5;
            M = -U[1] + P + 0.5;
        }
        if (L === 1) {
            var V = N;
            N = -M;
            M = V;
        } else if (L === 2) {
            N = -N;
            M = -M;
        } else if (L == 3) {
            var V = N;
            N = M;
            M = -V;
        }
        return {
            member1872: N,
            member1873: M
        };
    };
    J.prototype.member681 = function (O, P) {
        var M = this;
        if (O) {
            M = this.member1319();
        }
        var N = {
            member2148: M.member2148,
            member1879: M.member1879,
            member2149: M.member2149,
            member2150: M.member2150,
            member2151: M.member2151,
            member2152: M.member2152,
            member2153: M.member2153,
            member2154: M.member2154,
            member434: M.member434,
            member2155: M.member2155,
            member1568: M.member1568,
            member2156: M.member2156,
            member2157: M.member2157,
            member2158: M.member2158,
            member2159: M.member2159,
            member2160: M.member2160,
            member2161: M.member2161,
            member2162: M.member2162,
            member2163: M.member2163,
            member2164: M.member2164,
            member2165: M.member2165,
            member1877: M.member1877,
            member2166: M.member2166,
            member2167: M.member2167,
            member2168: M.member2168,
            member2169: M.member2169,
            member2170: M.member2170,
            member1878: M.member1878,
            member2171: M.member2171,
            member2172: M.member2172,
            member2173: M.member2173,
            member2174: M.member2174,
            member2175: M.member2175,
            member2176: M.member2176,
            member2177: M.member2177,
            member2178: M.member2178,
            member2179: M.member2179,
            member2180: M.member2180,
            member2181: M.member2181,
            member2182: M.member2182,
            member2183: M.member2183,
            member2186: M.member2186,
            member1872: M.member1872,
            member1873: M.member1873,
            member2087: M.member2087,
            member2187: M.member2187,
            member2086: M.member2086
        };
        if (P !== undefined) {
            P.push(M.member2150.buffer);
            P.push(M.member2151.buffer);
            P.push(M.member2152.buffer);
            if (M.member2153 !== undefined) {
                P.push(M.member2153.buffer);
            }
            if (M.member2154 !== undefined) {
                for (var L = 0; L < M.member2154.length; L++) {
                    if (M.member2154[L] !== undefined) {
                        P.push(M.member2154[L].buffer);
                    }
                }
            }
            if (M.member434 !== undefined) {
                P.push(M.member434.buffer);
            }
            if (M.member2156 !== undefined) {
                P.push(M.member2156.buffer);
            }
            if (M.member2157 !== undefined) {
                P.push(M.member2157.buffer);
            }
            if (M.member2158 !== undefined) {
                P.push(M.member2158.buffer);
            }
            if (M.member2159 !== undefined) {
                P.push(M.member2159.buffer);
            }
            if (M.member2160 !== undefined) {
                P.push(M.member2160.buffer);
            }
            if (M.member2162 !== undefined) {
                P.push(M.member2162.buffer);
            }
            if (M.member2163 !== undefined) {
                P.push(M.member2163.buffer);
            }
            if (M.member2164 !== undefined) {
                P.push(M.member2164.buffer);
            }
            if (M.member1877 !== undefined) {
                P.push(M.member1877.buffer);
            }
            if (M.member2166 !== undefined) {
                P.push(M.member2166.buffer);
            }
            if (M.member2167 !== undefined) {
                P.push(M.member2167.buffer);
            }
            if (M.member2172 !== undefined) {
                P.push(M.member2172.buffer);
            }
            if (M.member2173 !== undefined) {
                P.push(M.member2173.buffer);
            }
            if (M.member2174 !== undefined) {
                P.push(M.member2174.buffer);
            }
            if (M.member2175 !== undefined) {
                P.push(M.member2175.buffer);
            }
            if (M.member2176 !== undefined) {
                P.push(M.member2176.buffer);
            }
            if (M.member2177 !== undefined) {
                P.push(M.member2177.buffer);
            }
            if (M.member2178 !== undefined) {
                P.push(M.member2178.buffer);
            }
            if (M.member2179 !== undefined) {
                P.push(M.member2179.buffer);
            }
            if (M.member2180 !== undefined) {
                P.push(M.member2180.buffer);
            }
            if (M.member2181 !== undefined) {
                P.push(M.member2181.buffer);
            }
            if (M.member2182 !== undefined) {
                P.push(M.member2182.buffer);
            }
            if (M.member2183 !== undefined) {
                P.push(M.member2183.buffer);
            }
            if (M.member1878 !== undefined) {
                P.push(M.member1878.buffer);
            }
        }
        return N;
    };
    J.prototype.member1318 = function (Q) {
        Q.member1051(this.member2146);
        Q.member1051(this.member2148);
        Q.member1054(this.member1879);
        Q.member1054(this.member2149);
        Q.member1067(this.member2150.buffer, 0, this.member1879 * 4);
        Q.member1067(this.member2151.buffer, 0, this.member1879 * 4);
        Q.member1067(this.member2152.buffer, 0, this.member1879 * 4);
        this.member2225(Q, this.member2153);
        if (this.member2154 !== undefined) {
            var N = Q.member1047();
            Q.member607(N + 2);
            var O = 0;
            for (var L = 0; L < this.member2154.length; L++) {
                if (this.member2154[L] !== undefined) {
                    Q.member1054(L);
                    Q.member1056(this.member2154[L].buffer.byteLength);
                    Q.pArrayBufffer(this.member2154[L].buffer, 0, this.member2154[L].buffer.byteLength);
                    O++;
                }
            }
            var M = Q.member1047();
            Q.member607(N);
            Q.member1054(O);
            Q.member607(M);
        } else {
            Q.member1054(0);
        }
        this.member2225(Q, this.member434);
        this.member2225(Q, this.member2155);
        Q.member1054(this.member1568);
        this.member2225(Q, this.member2156);
        this.member2225(Q, this.member2157);
        this.member2225(Q, this.member2158);
        this.member2225(Q, this.member2159);
        this.member2225(Q, this.member2160);
        Q.member1054(this.member2161);
        this.member2225(Q, this.member2162);
        this.member2225(Q, this.member2163);
        this.member2225(Q, this.member2164);
        Q.member1054(this.member2165);
        this.member2225(Q, this.member1877);
        this.member2225(Q, this.member2166);
        this.member2225(Q, this.member2167);
        this.member2225(Q, this.member2168);
        this.member2225(Q, this.member2169);
        this.member2225(Q, this.member2170);
        this.member2225(Q, this.member1878);
        Q.member1054(this.member2171);
        this.member2225(Q, this.member2172);
        this.member2225(Q, this.member2173);
        this.member2225(Q, this.member2174);
        this.member2225(Q, this.member2175);
        this.member2225(Q, this.member2176);
        this.member2225(Q, this.member2177);
        this.member2225(Q, this.member2178);
        this.member2225(Q, this.member2179);
        this.member2225(Q, this.member2180);
        this.member2225(Q, this.member2181);
        this.member2225(Q, this.member2182);
        this.member2225(Q, this.member2183);
        Q.member1054(this.member2186);
        this.member2225(Q, this.member1872);
        this.member2225(Q, this.member1873);
        if (this.member2087 !== undefined) {
            Q.member1054(this.member2087.length);
            for (var L = 0; L < this.member2087.length; L++) {
                var R = this.member2087[L];
                Q.member1054(R.member2190);
                Q.member1054(R.member2191);
                Q.member1054(R.member1594);
                Q.member1054(R.member1595);
                Q.member1054(R.member1596);
                Q.member1054(R.member2192);
            }
        } else {
            Q.member1054(0);
        }
        if (this.member2187 !== undefined) {
            Q.member1054(this.member2187.length);
            for (var L = 0; L < this.member2187.length; L++) {
                var R = this.member2187[L];
                Q.member1054(R.member2193);
                Q.member1054(R.member2194);
            }
        } else {
            Q.member1054(0);
        }
        if (this.member2086 !== undefined) {
            Q.member1054(this.member2086.length);
            for (var L = 0; L < this.member2086.length; L++) {
                var P = this.member2086[L];
                Q.member1054(P.member2070);
                Q.member1054(P.member2195);
                Q.member1054(P.member2196);
                Q.member1054(P.member2071);
            }
        } else {
            Q.member1054(0);
        }
    };
    J.prototype.member2225 = function (L, M) {
        if (M !== undefined) {
            L.member1051(1);
            L.member1056(M.buffer.byteLength);
            L.member1067(M.buffer, 0, M.buffer.byteLength);
        } else {
            L.member1051(0);
        }
    };
    J.prototype.member2188 = function (M, N) {
        var L = M.member609() === 1;
        if (L) {
            var O = new N(new ArrayBuffer(M.member1073()));
            M.member1092(O.buffer, 0, O.buffer.byteLength);
            return O;
        } else {
            return undefined;
        }
    };
    J.prototype.member1319 = function () {
        var N;
        if (this.member2087 !== undefined) {
            N = new Array(this.member2087.length);
            for (var M = 0; M < N.length; M++) {
                var P = this.member2087[M];
                N[M] = {
                    member2190: P.member2190,
                    member2191: P.member2191,
                    member1594: P.member1594,
                    member1595: P.member1595,
                    member1596: P.member1596,
                    member2192: P.member2192
                };
            }
        }
        var R;
        if (this.member2187 !== undefined) {
            R = new Array(this.member2187.length);
            for (var M = 0; M < R.length; M++) {
                var P = this.member2187[M];
                R[M] = {
                    member2193: P.member2193,
                    member2194: P.member2194
                };
            }
        }
        var L;
        if (this.member2086 !== undefined) {
            L = new Array(this.member2086.length);
            for (var M = 0; M < L.length; M++) {
                var O = this.member2086[M];
                L[M] = {
                    member2070: O.member2070,
                    member2195: O.member2195,
                    member2196: O.member2196,
                    member2071: O.member2071
                };
            }
        }
        var Q;
        if (this.member2154 !== undefined) {
            Q = [];
            for (var M = 0; M < this.member2154.length; M++) {
                if (this.member2154[M] !== undefined) {
                    Q[M] = new Int32Array(this.member2154[M].buffer.slice(0));
                }
            }
        }
        return new J(undefined, undefined, {
            member2148: this.member2148,
            member1879: this.member1879,
            member2149: this.member2149,
            member2150: new Int32Array(this.member2150.buffer.slice(0)),
            member2151: new Int32Array(this.member2151.buffer.slice(0)),
            member2152: new Int32Array(this.member2152.buffer.slice(0)),
            member2153: this.member2153 === undefined ? undefined : new Int32Array(this.member2153.buffer.slice(0)),
            member2154: Q,
            member434: this.member434 === undefined ? undefined : new Int16Array(this.member434.buffer.slice(0)),
            member2155: this.member2155 === undefined ? undefined : new Uint16Array(this.member2155.buffer.slice(0)),
            member1568: this.member1568,
            member2156: this.member2156 === undefined ? undefined : new Int16Array(this.member2156.buffer.slice(0)),
            member2157: this.member2157 === undefined ? undefined : new Int16Array(this.member2157.buffer.slice(0)),
            member2158: this.member2158 === undefined ? undefined : new Int16Array(this.member2158.buffer.slice(0)),
            member2159: this.member2159 === undefined ? undefined : new Int8Array(this.member2159.buffer.slice(0)),
            member2160: this.member2160 === undefined ? undefined : new Int8Array(this.member2160.buffer.slice(0)),
            member2161: this.member2161,
            member2162: this.member2162 === undefined ? undefined : new Uint16Array(this.member2162.buffer.slice(0)),
            member2163: this.member2163 === undefined ? undefined : new Uint16Array(this.member2163.buffer.slice(0)),
            member2164: this.member2164 === undefined ? undefined : new Int8Array(this.member2164.buffer.slice(0)),
            member2165: this.member2165,
            member1877: this.member1877 === undefined ? undefined : new Uint16Array(this.member1877.buffer.slice(0)),
            member2166: this.member2166 === undefined ? undefined : new Int32Array(this.member2166.buffer.slice(0)),
            member2167: this.member2167 === undefined ? undefined : new Int16Array(this.member2167.buffer.slice(0)),
            member2168: this.member2168 === undefined ? undefined : new Uint8Array(this.member2168.buffer.slice(0)),
            member2169: this.member2169 === undefined ? undefined : new Uint8Array(this.member2169.buffer.slice(0)),
            member2170: this.member2170 === undefined ? undefined : new Uint8Array(this.member2170.buffer.slice(0)),
            member1878: this.member1878 === undefined ? undefined : new Float32Array(this.member1878.buffer.slice(0)),
            member2171: this.member2171,
            member2172: this.member2172 === undefined ? undefined : new Int8Array(this.member2172.buffer.slice(0)),
            member2173: this.member2173 === undefined ? undefined : new Int16Array(this.member2173.buffer.slice(0)),
            member2174: this.member2174 === undefined ? undefined : new Int16Array(this.member2174.buffer.slice(0)),
            member2175: this.member2175 === undefined ? undefined : new Int16Array(this.member2175.buffer.slice(0)),
            member2176: this.member2176 === undefined ? undefined : new Int32Array(this.member2176.buffer.slice(0)),
            member2177: this.member2177 === undefined ? undefined : new Int32Array(this.member2177.buffer.slice(0)),
            member2178: this.member2178 === undefined ? undefined : new Int32Array(this.member2178.buffer.slice(0)),
            member2179: this.member2179 === undefined ? undefined : new Int8Array(this.member2179.buffer.slice(0)),
            member2180: this.member2180 === undefined ? undefined : new Int8Array(this.member2180.buffer.slice(0)),
            member2181: this.member2181 === undefined ? undefined : new Int8Array(this.member2181.buffer.slice(0)),
            member2182: this.member2182 === undefined ? undefined : new Int8Array(this.member2182.buffer.slice(0)),
            member2183: this.member2183 === undefined ? undefined : new Int8Array(this.member2183.buffer.slice(0)),
            member2186: this.member2186,
            member1872: this.member1872 === undefined ? undefined : new Float32Array(this.member1872.buffer.slice(0)),
            member1873: this.member1873 === undefined ? undefined : new Float32Array(this.member1873.buffer.slice(0)),
            member2087: N,
            member2187: R,
            member2086: L
        });
    };
    J.prototype.member1885 = function (N) {
        var O = 0;
        var S = {};
        var Q = new Array(0);
        if (this.member1877 !== undefined) {
            for (var P = 0; P < this.member1568; P++) {
                var L = this.member1877[P];
                if (L !== D) {
                    if (S[L] === undefined) {
                        Q[O++] = L;
                        S[L] = 1;
                    }
                }
            }
        }
        if (this.member2086 !== undefined) {
            for (var R = 0; R < this.member2086.length; R++) {
                var M = N.member1719(this.member2086[R].member2070);
                var L = M.member701();
                if (L !== undefined) {
                    if (S[L] === undefined) {
                        Q[O++] = L;
                        S[L] = 1;
                    }
                }
            }
        }
        return Q;
    };
    J.prototype.translate = function (L) {
        if (L[0] === 0 && L[1] === 0 && L[2] === 0) {
            return;
        }
        for (var M = 0; M < this.member1879; M++) {
            this.member2150[M] += L[0];
            this.member2151[M] += L[1];
            this.member2152[M] += L[2];
        }
        v.call(this);
    };
    J.prototype.rotate = function (P) {
        if (P[2] != 0) {
            var N = Class81.sin(P[2]);
            var L = Class81.cos(P[2]);
            for (var O = 0; O < this.member1879; O++) {
                var M = this.member2150[O] * L - this.member2151[O] * N >> Class81.member610;
                this.member2151[O] = this.member2151[O] * L + this.member2150[O] * N >> Class81.member610;
                this.member2150[O] = M;
            }
        }
        if (P[0] != 0) {
            var N = Class81.sin(P[0]);
            var L = Class81.cos(P[0]);
            for (var O = 0; O < this.member1879; O++) {
                var M = this.member2151[O] * L + this.member2152[O] * N >> Class81.member610;
                this.member2152[O] = this.member2152[O] * L - this.member2151[O] * N >> Class81.member610;
                this.member2151[O] = M;
            }
        }
        if (P[1] != 0) {
            var N = Class81.sin(P[1]);
            var L = Class81.cos(P[1]);
            for (var O = 0; O < this.member1879; O++) {
                var M = this.member2152[O] * N + this.member2150[O] * L >> Class81.member610;
                this.member2152[O] = this.member2152[O] * L - this.member2150[O] * N >> Class81.member610;
                this.member2150[O] = M;
            }
        }
    };
    J.prototype.member2226 = function (N) {
        if (N === 0) {
            return;
        }
        for (var M = 0; M < this.member1879; M++) {
            this.member2150[M] <<= N;
            this.member2151[M] <<= N;
            this.member2152[M] <<= N;
        }
        if (this.member2171 > 0) {
            if (this.member2176 !== undefined) {
                for (var L = 0; L < this.member2176.length; L++) {
                    this.member2176[L] <<= N;
                    this.member2177[L] <<= N;
                    if (this.member2172[L] !== 1) {
                        this.member2178[L] <<= N;
                    }
                }
            }
        }
        v.call(this);
    };
    J.prototype.scale = function (N, M, L) {
        if (N === 1 && M === 1 && L === 1) {
            return;
        }
        for (var P = 0; P < this.member1879; P++) {
            this.member2150[P] *= N;
            this.member2151[P] *= M;
            this.member2152[P] *= L;
        }
        if (this.member2171 > 0) {
            if (this.member2176 !== undefined) {
                for (var O = 0; O < this.member2176.length; O++) {
                    this.member2176[O] *= N;
                    this.member2177[O] *= M;
                    if (this.member2172[O] !== 1) {
                        this.member2178[O] *= L;
                    }
                }
            }
        }
        v.call(this);
    };
    J.prototype.member2227 = function () {
        for (var O = 0; O < this.member1879; O++) {
            this.member2152[O] = -this.member2152[O];
        }
        var L = this.member2157;
        this.member2157 = this.member2158;
        this.member2158 = L;
        if (this.member1878 !== undefined) {
            for (var P = 0; P < this.member1568; P++) {
                var N = this.member1878[P * 6 + 1];
                this.member1878[P * 6 + 1] = this.member1878[P * 6 + 2];
                this.member1878[P * 6 + 2] = N;
                var M = this.member1878[P * 6 + 4];
                this.member1878[P * 6 + 4] = this.member1878[P * 6 + 5];
                this.member1878[P * 6 + 5] = M;
            }
        }
        v.call(this);
    };
    J.prototype.member2228 = function (Q, L) {
        var O = false;
        for (var N = 0; N < this.member1568; N++) {
            var M = this.member2163[N];
            for (var P = 0; P < Q.length; P++) {
                if (M === Q[P]) {
                    this.member2163[N] = L[P];
                    O = true;
                    break;
                }
            }
        }
        if (O) {
            v.call(this);
        }
    };
    J.prototype.member2229 = function (P, O) {
        var N = false;
        for (var M = 0; M < this.member1568; M++) {
            var L = this.member2163[M];
            if (L === P) {
                this.member2163[M] = O;
                N = true;
            }
        }
        if (N) {
            v.call(this);
        }
    };
    J.prototype.member2230 = function (O, M) {
        if (this.member1877 === undefined) {
            return;
        }
        var R = false;
        for (var Q = 0; Q < this.member1568; Q++) {
            var P = this.member1877[Q];
            for (var L = 0; L < O.length; L++) {
                if (P === O[L]) {
                    var N = M[L];
                    if (N === undefined) {
                        N = D;
                    }
                    this.member1877[Q] = N;
                    R = true;
                    break;
                }
            }
        }
        if (R) {
            v.call(this);
        }
    };
    J.prototype.member2231 = function (O) {
        for (var N = 0; N < this.member1568; N++) {
            var M = this.member2163[N];
            var L = (M & 127) * O >> 7;
            if (L < 0) {
                L = 0;
            } else if (L > 127) {
                L = 127;
            }
            this.member2163[N] = M & ~127 | L;
        }
        this.member2165 = O;
        v.call(this);
    };
    J.prototype.member2232 = function () {
        if (this.member2153 === undefined || this.member2154 !== undefined) {
            return;
        }
        var O = new Array(400);
        var L = 0;
        var N = this.member2149;
        for (var P = 0; P < N; P++) {
            var M = this.member2153[P];
            if (M !== A) {
                if (O[M] === undefined) {
                    O[M] = 0;
                }
                O[M]++;
                if (M > L) {
                    L = M;
                }
            }
        }
        this.member2154 = new Array(L + 1);
        for (P = 0; P <= L; P++) {
            if (O[P] !== undefined) {
                this.member2154[P] = new Int32Array(O[P]);
                O[P] = 0;
            }
        }
        for (P = 0; P < N; P++) {
            var M = this.member2153[P];
            if (M !== A) {
                this.member2154[M][O[M]++] = P;
            }
        }
    };
    J.prototype.member1865 = function (L) {
        return undefined;
    };
    return function (M, N, L, O) {
        return new J(M, N, L, O);
    };
}();