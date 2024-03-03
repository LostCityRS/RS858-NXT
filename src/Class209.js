import { Class37 } from 'Class37.js';
import { HillChange } from 'Class170.js';
import { Class41 } from 'Class41.js';
import { Class143 } from 'Class143.js';
import { Packet } from 'Class124.js';
import { Class165 } from 'Class165.js';
import { Class49 } from 'Class49.js';
import { Class81 } from 'Class81.js';
export var Class209 = function () {
    var o = 0;
    var C = -1;
    var I = -1;
    var x = 65535;
    var F = 65535;
    var J = 65535;
    var t = 32766;
    var i = 65535;
    var h = new Float32Array(3);
    var e = new Float32Array(3);
    var c = new Float32Array(3);
    var A = new Float32Array(3);
    var z = new Float32Array(3);
    var q = new Float32Array(3);
    var v = new Float32Array(3);
    var a = new Float32Array(3);
    var d = new Float32Array(3);
    var g = new Float32Array(3);
    var E = Class37.create();
    var B = Class37.create();
    var b = Class37.create();
    var s = 1;
    var K = 3;
    var H = 26;
    var L = function (O, U, N, T) {
        this.member4249 = -1;
        this.member4250 = HillChange.member1859;
        this.member4251 = undefined;
        this.member4252 = 12;
        this.member1879 = 0;
        this.member4253 = 0;
        this.member4254 = undefined, this.member4255 = undefined, this.member4256 = undefined;
        this.member4257 = undefined;
        this.member4258 = undefined;
        this.member434 = undefined;
        this.member4259 = undefined;
        this.member1568 = 0;
        this.member4260 = undefined, this.member4261 = undefined, this.member4262 = undefined;
        this.member4263 = undefined;
        this.member4264 = undefined;
        this.member4265 = 0;
        this.member4266 = undefined;
        this.member4267 = undefined;
        this.member4268 = undefined;
        this.member2431 = 127;
        this.member1877 = undefined;
        this.member4269 = undefined;
        this.member4270 = undefined;
        this.member4271 = undefined;
        this.member4272 = undefined;
        this.member4273 = undefined;
        this.member1878 = undefined;
        this.member4274 = 0;
        this.member4275 = undefined;
        this.member4276 = undefined;
        this.member4277 = undefined;
        this.member4278 = undefined;
        this.member4279 = undefined;
        this.member4280 = undefined;
        this.member4281 = undefined;
        this.member4282 = undefined;
        this.member4283 = undefined;
        this.member4284 = undefined;
        this.member4285 = undefined;
        this.member4286 = undefined;
        this.member4287 = undefined;
        this.member4288 = undefined;
        this.member4289 = 0;
        this.u = undefined;
        this.member1873 = undefined;
        this.member2087 = undefined;
        this.member4290 = undefined;
        this.member2086 = undefined;
        if (O !== undefined) {
            M.call(this, O);
            j.call(this);
            G.call(this);
        } else if (N !== undefined) {
            this.member4252 = N.member4252;
            this.member1879 = N.member1879;
            this.member4253 = N.member4253;
            this.member4254 = N.member4254;
            this.member4255 = N.member4255;
            this.member4256 = N.member4256;
            this.member4257 = N.member4257;
            this.member4258 = N.member4258;
            this.member434 = N.member434;
            this.member4259 = N.member4259;
            this.member1568 = N.member1568;
            this.member4260 = N.member4260;
            this.member4261 = N.member4261;
            this.member4262 = N.member4262;
            this.member4263 = N.member4263;
            this.member4264 = N.member4264;
            this.member4265 = N.member4265;
            this.member4266 = N.member4266;
            this.member4267 = N.member4267;
            this.member4268 = N.member4268;
            this.member2431 = N.member2431;
            this.member1877 = N.member1877;
            this.member4269 = N.member4269;
            this.member4270 = N.member4270;
            this.member4271 = N.member4271;
            this.member4272 = N.member4272;
            this.member4273 = N.member4273;
            this.member1878 = N.member1878;
            this.member4274 = N.member4274;
            this.member4275 = N.member4275;
            this.member4276 = N.member4276;
            this.member4277 = N.member4277;
            this.member4278 = N.member4278;
            this.member4279 = N.member4279;
            this.member4280 = N.member4280;
            this.member4281 = N.member4281;
            this.member4282 = N.member4282;
            this.member4283 = N.member4283;
            this.member4284 = N.member4284;
            this.member4285 = N.member4285;
            this.member4286 = N.member4286;
            this.member4289 = N.member4289;
            this.u = N.u;
            this.member1873 = N.member1873;
            this.member2087 = N.member2087;
            this.member4290 = N.member4290;
            this.member2086 = N.member2086;
        } else if (T !== undefined) {
            this.member4250 = T.g1();
            this.member4252 = T.g1();
            this.member1879 = T.g2();
            this.member4253 = T.g2();
            this.member4254 = new Int32Array(this.member1879);
            T.gdata(this.member4254.buffer, 0, this.member4254.buffer.byteLength);
            this.member4255 = new Int32Array(this.member1879);
            T.gdata(this.member4255.buffer, 0, this.member4255.buffer.byteLength);
            this.member4256 = new Int32Array(this.member1879);
            T.gdata(this.member4256.buffer, 0, this.member4256.buffer.byteLength);
            this.member4257 = this.member4291(T, Int32Array);
            var X = T.g2();
            if (X > 0) {
                this.member4258 = new Array(X);
                for (var R = 0; R < X; R++) {
                    var Q = T.g2();
                    var Z = T.g4();
                    this.member4258[Q] = new Int32Array(Z / 4);
                    member4292.gdata(this.member4258[Q], 0, Z);
                }
            }
            this.member434 = this.member4291(T, Int16Array);
            this.member4259 = this.member4291(T, Uint16Array);
            this.member1568 = T.g2();
            this.member4260 = this.member4291(T, Int16Array);
            this.member4261 = this.member4291(T, Int16Array);
            this.member4262 = this.member4291(T, Int16Array);
            this.member4263 = this.member4291(T, Int8Array);
            this.member4264 = this.member4291(T, Int8Array);
            this.member4265 = T.g2s();
            this.member4266 = this.member4291(T, Uint16Array);
            this.member4267 = this.member4291(T, Uint16Array);
            this.member4268 = this.member4291(T, Int8Array);
            this.member2431 = T.g2();
            this.member1877 = this.member4291(T, Uint16Array);
            this.member4269 = this.member4291(T, Int32Array);
            this.member4270 = this.member4291(T, Int16Array);
            this.member4271 = this.member4291(T, Uint8Array);
            this.member4272 = this.member4291(T, Uint8Array);
            this.member4273 = this.member4291(T, Uint8Array);
            this.member1878 = this.member4291(T, Float32Array);
            this.member4274 = T.g2();
            this.member4275 = this.member4291(T, Int8Array);
            this.member4276 = this.member4291(T, Int16Array);
            this.member4277 = this.member4291(T, Int16Array);
            this.member4278 = this.member4291(T, Int16Array);
            this.member4279 = this.member4291(T, Int32Array);
            this.member4280 = this.member4291(T, Int32Array);
            this.member4281 = this.member4291(T, Int32Array);
            this.member4282 = this.member4291(T, Int8Array);
            this.member4283 = this.member4291(T, Int8Array);
            this.member4284 = this.member4291(T, Int8Array);
            this.member4285 = this.member4291(T, Int8Array);
            this.member4286 = this.member4291(T, Int8Array);
            this.member4289 = T.g2();
            this.u = this.member4291(T, Float32Array);
            this.member1873 = this.member4291(T, Float32Array);
            var S = T.g2();
            if (S > 0) {
                this.member2087 = new Array(S);
                for (var R = 0; R < this.member2087.length; R++) {
                    var W = this.member2087[R] = {};
                    W.member3413 = T.g2();
                    W.member4293 = T.g2();
                    W.member1594 = T.g2();
                    W.member1595 = T.g2();
                    W.member1596 = T.g2();
                    W.member4294 = T.g2();
                }
            }
            var P = T.g2();
            if (P > 0) {
                this.member4290 = new Array(P);
                for (var R = 0; R < this.member4290.length; R++) {
                    var W = this.member4290[R] = {};
                    W.member4295 = T.g2();
                    W.member4296 = T.g2();
                }
            }
            var Y = T.g2();
            if (Y > 0) {
                this.member2086 = new Array(Y);
                for (var R = 0; R < this.member2086.length; R++) {
                    var V = this.member2086[R] = {};
                    V.member2070 = T.g2();
                    V.member4297 = T.g2();
                    V.member4298 = T.g2();
                    V.member2071 = T.g2();
                }
            }
        } else if (U !== undefined) {
            k.call(this, U);
            j.call(this);
            G.call(this);
        } else {
            throw new Error('1186 ');
        }
        y.call(this);
    };
    L.prototype.member1886 = function () {
        return HillChange.member1859;
    };
    L.prototype.member2463 = function () {
        return this.member4252;
    };
    var y = function () {
        this.member4249 = o++;
    };
    L.prototype.member4299 = function () {
        return this.member4249;
    };
    L.prototype.member1861 = function () {
        return this.member1879;
    };
    L.prototype.member1862 = function (N) {
        return this.member4254[N];
    };
    L.prototype.member1863 = function (N) {
        return this.member4255[N];
    };
    L.prototype.member1864 = function (N) {
        return this.member4256[N];
    };
    L.prototype.member1993 = function (O, N) {
        N[0] = this.member4254[O];
        N[1] = this.member4255[O];
        N[2] = this.member4256[O];
        return N;
    };
    L.prototype.member1991 = function () {
        return this.member4257 !== undefined;
    };
    L.prototype.member1722 = function (N) {
        if (this.member4257 === undefined) {
            return undefined;
        } else if (this.member4257[N] === C) {
            return undefined;
        } else {
            return this.member4257[N];
        }
    };
    L.prototype.member1867 = function (N, O) {
        if (this.member4257 === undefined) {
            return undefined;
        } else {
            O[0] = this.member4257[this.member4260[N]] === C ? undefined : this.member4257[this.member4260[N]];
            O[1] = this.member4257[this.member4261[N]] === C ? undefined : this.member4257[this.member4261[N]];
            O[2] = this.member4257[this.member4262[N]] === C ? undefined : this.member4257[this.member4262[N]];
            return O;
        }
    };
    L.prototype.member1992 = function (N) {
        return this.member4258[N];
    };
    L.prototype.member1868 = function () {
        return this.member1568;
    };
    L.prototype.member1869 = function (N, P) {
        var O;
        if (P === 0) {
            O = this.member4260[N];
        } else if (P === 1) {
            O = this.member4261[N];
        } else if (P === 2) {
            O = this.member4262[N];
        }
        if (O === i) {
            O = undefined;
        }
        return O;
    };
    L.prototype.member1870 = function (Q) {
        var V = this.member4260[Q];
        var T = this.member4262[Q];
        var S = this.member4261[Q];
        var U = this.member4254[V];
        var P = this.member4255[V];
        var O = this.member4256[V];
        var N = new Float32Array(3);
        N[0] = U - this.member4254[T];
        N[1] = P - this.member4255[T];
        N[2] = O - this.member4256[T];
        g[0] = U - this.member4254[S];
        g[1] = P - this.member4255[S];
        g[2] = O - this.member4256[S];
        var R = N;
        Class41.member325(R, g);
        Class41.normalize(R);
        return R;
    };
    L.prototype.member4300 = function () {
        return this.member4263 !== undefined;
    };
    L.prototype.member4301 = function (N) {
        return this.member4263[N];
    };
    L.prototype.member1889 = function (N) {
        if (this.member4263 === undefined) {
            return false;
        } else if (this.member4263[N] === 2) {
            return true;
        } else {
            return false;
        }
    };
    L.prototype.member1888 = function (N) {
        if (this.member4263 === undefined) {
            return false;
        } else if (this.member4263[N] === 1) {
            return true;
        } else {
            return false;
        }
    };
    L.prototype.member1891 = function () {
        return this.member4264 !== undefined;
    };
    L.prototype.member1914 = function (N) {
        if (this.member4264 === undefined) {
            return this.member4265;
        } else {
            return this.member4264[N];
        }
    };
    L.prototype.member4302 = function () {
        return this.member4265;
    };
    L.prototype.member4303 = function () {
        return this.member4266 !== undefined;
    };
    L.prototype.member1890 = function (N) {
        if (this.member4266 !== undefined) {
            if (this.member4266[N] === t || this.member4266[N] === J) {
                return undefined;
            } else {
                return this.member4266[N];
            }
        } else {
            return undefined;
        }
    };
    L.prototype.member4304 = function (N) {
        return this.member4267[N];
    };
    L.prototype.member4305 = function () {
        return this.member4268 !== undefined;
    };
    L.prototype.member4306 = function (N) {
        return this.member4268[N];
    };
    L.prototype.member1887 = function (O, Q) {
        var P = this.member4267[O];
        var N = Class143.member1441(P);
        if (Q !== undefined) {
            N = Class143.member1445(N, this.member2431, Q.member1430(), Q.member1429());
        }
        var R = N << 8;
        if (this.member4268 !== undefined) {
            R |= 255 - this.member4268[O];
        } else {
            R |= 255;
        }
        return R;
    };
    L.prototype.member1866 = function (N) {
        if (this.member4268 === undefined) {
            return false;
        } else {
            return this.member4268[N] !== 0;
        }
    };
    L.prototype.member1874 = function () {
        return this.member1877 !== undefined;
    };
    L.prototype.member1875 = function (N) {
        if (this.member1877 !== undefined) {
            return this.member1877[N];
        } else {
            return undefined;
        }
    };
    L.prototype.member4307 = function () {
        return this.member4269 !== undefined;
    };
    L.prototype.member1723 = function (N) {
        if (this.member4269 !== undefined) {
            if (this.member4269[N] === I) {
                return undefined;
            } else {
                return this.member4269[N];
            }
        } else {
            return undefined;
        }
    };
    L.prototype.member1871 = function (O, P) {
        if (this.member1878 === undefined) {
            return undefined;
        }
        for (var N = 0; N < 6; N++) {
            P[N] = this.member1878[O * 6 + N];
        }
    };
    L.prototype.member4308 = function () {
        return this.member4274;
    };
    L.prototype.member4309 = function (N) {
        return this.member4275[N];
    };
    L.prototype.member4310 = function (N) {
        return this.member4276[N];
    };
    L.prototype.member4311 = function (N) {
        return this.member4277[N];
    };
    L.prototype.member4312 = function (N) {
        return this.member4278[N];
    };
    L.prototype.member4313 = function (N) {
        return this.member4279[N];
    };
    L.prototype.member4314 = function (N) {
        return this.member4280[N];
    };
    L.prototype.member4315 = function (N) {
        return this.member4281[N];
    };
    L.prototype.member4316 = function (N) {
        return this.member4282[N];
    };
    L.prototype.member4317 = function (N) {
        return this.member4283[N];
    };
    L.prototype.member4318 = function (N) {
        return this.member4284[N];
    };
    L.prototype.member4319 = function (N) {
        return this.member4285[N];
    };
    L.prototype.member4320 = function (N) {
        return this.member4286[N];
    };
    L.prototype.member1892 = function () {
        if (this.member2087 === undefined) {
            return 0;
        } else {
            return this.member2087.length;
        }
    };
    L.prototype.member2116 = function (N) {
        if (this.member2087 === undefined) {
            return undefined;
        } else {
            return this.member2087[N].member3413;
        }
    };
    L.prototype.member4321 = function (N) {
        if (this.member2087 === undefined) {
            return undefined;
        } else {
            return this.member2087[N].member4294;
        }
    };
    L.prototype.member2117 = function (N) {
        if (this.member2087 === undefined) {
            return undefined;
        } else {
            return this.member2087[N].member4293;
        }
    };
    L.prototype.member4322 = function (N, O) {
        if (this.member2087 === undefined) {
            return undefined;
        } else if (O === 0) {
            return this.member2087[N].member1594;
        } else if (O === 1) {
            return this.member2087[N].member1595;
        } else if (O === 2) {
            return this.member2087[N].member1596;
        }
    };
    L.prototype.member2118 = function (O, P) {
        if (this.member2087 === undefined) {
            return undefined;
        } else {
            var N;
            if (P === 0) {
                N = this.member2087[O].member1594;
            } else if (P === 1) {
                N = this.member2087[O].member1595;
            } else if (P === 2) {
                N = this.member2087[O].member1596;
            }
            return new Float32Array([
                this.member4254[N],
                this.member4255[N],
                this.member4256[N]
            ]);
        }
    };
    L.prototype.member2119 = function (O, P) {
        if (this.member2087 === undefined || this.member4257 === undefined) {
            return undefined;
        } else {
            var N;
            if (P === 0) {
                N = this.member2087[O].member1594;
            } else if (P === 1) {
                N = this.member2087[O].member1595;
            } else if (P === 2) {
                N = this.member2087[O].member1596;
            }
            if (this.member4257[N] === C) {
                return undefined;
            }
            return this.member4257[N];
        }
    };
    L.prototype.member4323 = function () {
        if (this.member4290 === undefined) {
            return 0;
        } else {
            return this.member4290.length;
        }
    };
    L.prototype.member4324 = function (N) {
        if (this.member4290 === undefined) {
            return undefined;
        } else {
            return this.member4290[N].member4295;
        }
    };
    L.prototype.member4325 = function (N) {
        if (this.member4290 === undefined) {
            return undefined;
        } else {
            return this.member4290[N].member4296;
        }
    };
    L.prototype.member1709 = function () {
        if (this.member2086 === undefined) {
            return 0;
        } else {
            return this.member2086.length;
        }
    };
    L.prototype.member2109 = function (N) {
        if (this.member2086 === undefined) {
            return undefined;
        } else {
            return this.member2086[N].member2070;
        }
    };
    L.prototype.member2110 = function (N) {
        if (this.member2086 === undefined) {
            return undefined;
        } else {
            return this.member2086[N].member4297;
        }
    };
    L.prototype.member2114 = function (P, Q) {
        if (this.member2086 === undefined) {
            return undefined;
        } else {
            var O = this.member2086[P].member4297;
            var N;
            if (Q === 0) {
                N = this.member4260[O];
            } else if (Q === 1) {
                N = this.member4261[O];
            } else if (Q === 2) {
                N = this.member4262[O];
            }
            return new Float32Array([
                this.member4254[N],
                this.member4255[N],
                this.member4256[N]
            ]);
        }
    };
    L.prototype.member2115 = function (N) {
        if (this.member2086 === undefined) {
            return undefined;
        } else {
            return this.member2086[N].member2071;
        }
    };
    L.prototype.member2111 = function (N) {
        if (this.member2086 === undefined || this.member4257 === undefined) {
            return undefined;
        }
        var O = this.member4257[this.member4260[this.member2086[N].member4297]];
        if (O === C) {
            return undefined;
        } else {
            return O;
        }
    };
    L.prototype.member2112 = function (O) {
        if (this.member2086 === undefined || this.member4269 === undefined) {
            return undefined;
        } else {
            var N = this.member4269[this.member2086[O].member4297];
            if (N === I) {
                return undefined;
            } else {
                return N;
            }
        }
    };
    L.prototype.member2113 = function (N) {
        if (this.member2086 === undefined) {
            return undefined;
        } else {
            return this.member2086[N].member4298;
        }
    };
    var M = function (ah) {
        var ab;
        var V = Packet(undefined, ah.getData());
        var U = Packet(undefined, ah.getData());
        var S = Packet(undefined, ah.getData());
        var R = Packet(undefined, ah.getData());
        var Q = Packet(undefined, ah.getData());
        var O = Packet(undefined, ah.getData());
        var N = Packet(undefined, ah.getData());
        var X = V.g1();
        if (X !== HillChange.member1859) {
            throw new Error('1187 ' + X);
        }
        this.member4251 = V.g1();
        this.member4252 = V.g1();
        V.setPos(ah.getSize() - H);
        this.member1879 = V.g2();
        this.member1568 = V.g2();
        this.member4274 = V.g2();
        var aj = V.g1();
        var aw = (aj & 1) === 1;
        var bB = (aj & 2) === 2;
        var aq = (aj & 4) === 4;
        var aB = (aj & 16) === 16;
        var am = (aj & 32) === 32;
        var W = (aj & 64) === 64;
        var av = (aj & 128) === 128;
        var aa = V.g1();
        var an = V.g1();
        var ao = V.g1();
        var aC = V.g1();
        var P = V.g1();
        var a8 = V.g2();
        var bh = V.g2();
        var br = V.g2();
        var aY = V.g2();
        var a9 = V.g2();
        var bA = V.g2();
        var a4 = V.g2();
        if (!aB) {
            if (P === 1) {
                bA = this.member1879;
            } else {
                bA = 0;
            }
        }
        if (!am) {
            if (ao === 1) {
                a4 = this.member1568;
            } else {
                a4 = 0;
            }
        }
        var a3 = 0, aE = 0, a2 = 0;
        if (this.member4274 > 0) {
            this.member4275 = new Int8Array(this.member4274);
            V.setPos(K);
            for (ab = 0; ab < this.member4274; ab++) {
                var aD = this.member4275[ab] = V.g1s();
                if (aD === 0) {
                    a3++;
                }
                if (aD >= 1 && aD <= 3) {
                    aE++;
                }
                if (aD === 2) {
                    a2++;
                }
            }
        }
        var ax = K + this.member4274;
        var aT = ax;
        ax += this.member1879;
        var ak = ax;
        if (aw) {
            ax += this.member1568;
        }
        var aW = ax;
        ax += this.member1568;
        var ai = ax;
        if (aa === 255) {
            ax += this.member1568;
        }
        var af = ax;
        ax += a4;
        var aL = ax;
        ax += bA;
        var ag = ax;
        if (an === 1) {
            ax += this.member1568;
        }
        var aX = ax;
        ax += aY;
        var ad = ax;
        if (aC === 1) {
            ax += this.member1568 * 2;
        }
        var ac = ax;
        ax += a9;
        var al = ax;
        ax += this.member1568 * 2;
        var aR = ax;
        ax += a8;
        var aP = ax;
        ax += bh;
        var aN = ax;
        ax += br;
        var bq = ax;
        ax += a3 * 6;
        var bo = ax;
        ax += aE * 6;
        var Y = 6;
        if (this.member4252 === 14) {
            Y = 7;
        } else if (this.member4252 >= 15) {
            Y = 9;
        }
        var bm = ax;
        ax += aE * Y;
        var bl = ax;
        ax += aE;
        var bj = ax;
        ax += aE;
        var be = ax;
        ax += aE + a2 * 2;
        var T = ax;
        var aV = ah.getSize();
        var aK = ah.getSize();
        var aI = ah.getSize();
        var aF = ah.getSize();
        if (av) {
            var bb = Packet(undefined, ah.getData());
            bb.pos = ah.getSize() - H - 1;
            bb.pos -= bb.g1() - 1;
            this.member4289 = bb.g2();
            var bH = bb.g2();
            var bG = bb.g2();
            aV = T + bH;
            aK = aV + bG;
            aI = aK + this.member1879;
            aF = aI + this.member4289 * 2;
        }
        this.member4254 = new Int32Array(this.member1879);
        this.member4255 = new Int32Array(this.member1879);
        this.member4256 = new Int32Array(this.member1879);
        this.member4260 = new Int16Array(this.member1568);
        this.member4261 = new Int16Array(this.member1568);
        this.member4262 = new Int16Array(this.member1568);
        if (P === 1) {
            this.member4257 = new Int32Array(this.member1879);
        }
        if (aw) {
            this.member4263 = new Int8Array(this.member1568);
        }
        if (aa === 255) {
            this.member4264 = new Int8Array(this.member1568);
        } else {
            this.member4265 = aa;
        }
        if (an) {
            this.member4268 = new Int8Array(this.member1568);
        }
        if (ao) {
            this.member4269 = new Int32Array(this.member1568);
        }
        if (aC === 1) {
            this.member1877 = new Uint16Array(this.member1568);
            if (this.member4274 > 0 || this.member4289 > 0) {
                this.member4266 = new Uint16Array(this.member1568);
            }
        }
        this.member4267 = new Uint16Array(this.member1568);
        if (this.member4274 > 0) {
            this.member4276 = new Int16Array(this.member4274);
            this.member4277 = new Int16Array(this.member4274);
            this.member4278 = new Int16Array(this.member4274);
            if (aE > 0) {
                this.member4279 = new Int32Array(this.member4274);
                this.member4280 = new Int32Array(this.member4274);
                this.member4281 = new Int32Array(this.member4274);
                this.member4285 = new Int8Array(this.member4274);
                this.member4286 = new Int8Array(this.member4274);
                this.member4282 = new Int8Array(this.member4274);
            }
            if (a2 > 0) {
                this.member4283 = new Int8Array(this.member4274);
                this.member4284 = new Int8Array(this.member4274);
            }
        }
        V.setPos(aT);
        U.setPos(aR);
        S.setPos(aP);
        R.setPos(aN);
        Q.setPos(aL);
        var a7 = 0, a6 = 0, a5 = 0;
        for (ab = 0; ab < this.member1879; ab++) {
            var a1 = V.g1();
            var bF = 0;
            if ((a1 & 1) !== 0) {
                bF = U.gSmart1or2s();
            }
            var bE = 0;
            if ((a1 & 2) !== 0) {
                bE = -S.gSmart1or2s();
            }
            var bD = 0;
            if ((a1 & 4) !== 0) {
                bD = R.gSmart1or2s();
            }
            a7 = this.member4254[ab] = a7 + bF;
            a6 = this.member4255[ab] = a6 + bE;
            a5 = this.member4256[ab] = a5 + bD;
            if (P === 1) {
                if (aB) {
                    this.member4257[ab] = Q.gSmart1or2null();
                } else {
                    this.member4257[ab] = Q.g1();
                    if (this.member4257[ab] === 255) {
                        this.member4257[ab] = C;
                    }
                }
            }
        }
        if (this.member4289 > 0) {
            V.setPos(aK);
            U.setPos(aI);
            S.setPos(aF);
            this.member4259 = new Uint16Array(this.member1879);
            for (var au = 0, at = 0; au < this.member1879; ++au) {
                this.member4259[au] = at;
                at += V.g1();
            }
            this.member4271 = new Uint8Array(this.member1568);
            this.member4272 = new Uint8Array(this.member1568);
            this.member4273 = new Uint8Array(this.member1568);
            this.u = new Float32Array(this.member4289);
            this.member1873 = new Float32Array(this.member4289);
            for (var au = 0; au < this.member4289; ++au) {
                this.u[au] = U.g2s() / 4096;
                this.member1873[au] = S.g2s() / 4096;
            }
        }
        V.setPos(al);
        U.setPos(ak);
        S.setPos(ai);
        R.setPos(ag);
        Q.setPos(af);
        O.setPos(ad);
        N.setPos(ac);
        for (ab = 0; ab < this.member1568; ab++) {
            this.member4267[ab] = V.g2();
            if (aw) {
                this.member4263[ab] = U.g1();
            }
            if (aa === 255) {
                this.member4264[ab] = S.g1();
            }
            if (an === 1) {
                this.member4268[ab] = R.g1();
            }
            if (ao === 1) {
                if (am) {
                    this.member4269[ab] = Q.gSmart1or2null();
                } else {
                    this.member4269[ab] = Q.g1();
                    if (this.member4269[ab] === 255) {
                        this.member4269[ab] = -1;
                    }
                }
            }
            if (aC === 1) {
                this.member1877[ab] = O.g2() - 1;
            }
            if (this.member4266 !== undefined) {
                if (this.member1877[ab] !== F) {
                    if (this.member4252 >= 16) {
                        this.member4266[ab] = N.gSmart1or2() - 1;
                    } else {
                        this.member4266[ab] = N.g1() - 1;
                    }
                } else {
                    this.member4266[ab] = J;
                }
            }
        }
        this.member4253 = -1;
        V.setPos(aX);
        U.setPos(aW);
        S.setPos(aV);
        var bx = 0, bv = 0, bt = 0;
        var aA = 0, az = 0, ay = 0;
        var bC = 0;
        for (ab = 0; ab < this.member1568; ab++) {
            var aD = U.g1();
            var ar = aD & 7;
            if (ar === 1) {
                aA = V.gSmart1or2s() + bC;
                bC = aA;
                az = V.gSmart1or2s() + bC;
                bC = az;
                ay = V.gSmart1or2s() + bC;
                bC = ay;
                this.member4260[ab] = aA;
                this.member4261[ab] = az;
                this.member4262[ab] = ay;
                if (aA > this.member4253) {
                    this.member4253 = aA;
                }
                if (az > this.member4253) {
                    this.member4253 = az;
                }
                if (ay > this.member4253) {
                    this.member4253 = ay;
                }
            } else if (ar === 2) {
                az = ay;
                ay = V.gSmart1or2s() + bC;
                bC = ay;
                this.member4260[ab] = aA;
                this.member4261[ab] = az;
                this.member4262[ab] = ay;
                if (ay > this.member4253) {
                    this.member4253 = ay;
                }
            } else if (ar === 3) {
                aA = ay;
                ay = V.gSmart1or2s() + bC;
                bC = ay;
                this.member4260[ab] = aA;
                this.member4261[ab] = az;
                this.member4262[ab] = ay;
                if (ay > this.member4253) {
                    this.member4253 = ay;
                }
            } else if (ar === 4) {
                var aH = aA;
                aA = az;
                az = aH;
                ay = V.gSmart1or2s() + bC;
                bC = ay;
                this.member4260[ab] = aA;
                this.member4261[ab] = az;
                this.member4262[ab] = ay;
                if (ay > this.member4253) {
                    this.member4253 = ay;
                }
            }
            if (this.member4289 > 0) {
                if ((aD & 8) !== 0) {
                    this.member4271[ab] = S.g1();
                    this.member4272[ab] = S.g1();
                    this.member4273[ab] = S.g1();
                }
            }
        }
        this.member4253++;
        V.setPos(bq);
        U.setPos(bo);
        S.setPos(bm);
        R.setPos(bl);
        Q.setPos(bj);
        O.setPos(be);
        for (ab = 0; ab < this.member4274; ab++) {
            var aD = this.member4275[ab];
            if (aD === 0) {
                this.member4276[ab] = V.g2s();
                this.member4277[ab] = V.g2s();
                this.member4278[ab] = V.g2s();
            } else {
                this.member4276[ab] = U.g2s();
                this.member4277[ab] = U.g2s();
                this.member4278[ab] = U.g2s();
                if (this.member4252 < 15) {
                    this.member4279[ab] = S.g2();
                    if (this.member4252 < 14) {
                        this.member4280[ab] = S.g2();
                    } else {
                        this.member4280[ab] = S.g3();
                    }
                    this.member4281[ab] = S.g2();
                } else {
                    this.member4279[ab] = S.g3();
                    this.member4280[ab] = S.g3();
                    this.member4281[ab] = S.g3();
                }
                this.member4285[ab] = R.g1();
                this.member4286[ab] = Q.g1s();
                this.member4282[ab] = O.g1s();
                if (aD === 2) {
                    this.member4283[ab] = O.g1s();
                    this.member4284[ab] = O.g1s();
                }
            }
        }
        V.setPos(T);
        if (bB) {
            var ap = V.g1();
            if (ap > 0) {
                this.member2087 = new Array(ap);
                for (var ab = 0; ab < ap; ab++) {
                    var aU = V.g2();
                    var aS = V.g2();
                    var aQ = aa;
                    if (aa === 255) {
                        aQ = this.member4264[aS];
                    }
                    this.member2087[ab] = {
                        member3413: aU,
                        member4293: aS,
                        member1594: this.member4260[aS],
                        member1595: this.member4261[aS],
                        member1596: this.member4262[aS],
                        member4294: aQ
                    };
                }
            }
            var Z = V.g1();
            if (Z > 0) {
                this.member4290 = new Array(Z);
                for (var ab = 0; ab < Z; ab++) {
                    var aO = V.g2();
                    var aM = V.g2();
                    this.member4290[ab] = {
                        member4295: aO,
                        member4296: aM
                    };
                }
            }
        }
        if (aq) {
            var ae = V.g1();
            if (ae > 0) {
                this.member2086 = new Array(ae);
                for (var ab = 0; ab < ae; ab++) {
                    var a0 = V.g2();
                    var aJ = V.g2();
                    var aG;
                    if (W) {
                        aG = V.gSmart1or2null();
                        if (aG === -1) {
                            aG = undefined;
                        }
                    } else {
                        aG = V.g1();
                        if (aG === 255) {
                            aG = undefined;
                        }
                    }
                    var aZ = V.g1s();
                    this.member2086[ab] = {
                        member2070: a0,
                        member4297: aJ,
                        member4298: aG,
                        member2071: aZ
                    };
                }
            }
        }
    };
    var k = function (ah) {
        var P = false, am = false, aw = false, O = false, U = false, ac = false;
        var ad = 0, aq = 0, at = 0;
        this.member4265 = undefined;
        for (var R = 0; R < ah.length; R++) {
            var az = ah[R];
            if (az !== null && az !== undefined) {
                this.member1879 += az.member1861();
                this.member1568 += az.member1868();
                this.member4274 += az.member4308();
                this.member4289 += az.member4289;
                ad += az.member1892();
                aq += az.member4323();
                at += az.member1709();
                P |= az.member4300();
                if (az.member1891()) {
                    am = true;
                } else {
                    if (this.member4265 === undefined) {
                        this.member4265 = az.member4302();
                    }
                    if (this.member4265 !== az.member4302()) {
                        am = true;
                    }
                }
                aw |= az.member4305();
                O |= az.member4303();
                U |= az.member1874();
                ac |= az.member4307();
            }
        }
        this.member4254 = new Int32Array(this.member1879);
        this.member4255 = new Int32Array(this.member1879);
        this.member4256 = new Int32Array(this.member1879);
        this.member4257 = new Int32Array(this.member1879);
        this.member434 = new Int16Array(this.member1879);
        this.member4260 = new Int16Array(this.member1568);
        this.member4261 = new Int16Array(this.member1568);
        this.member4262 = new Int16Array(this.member1568);
        if (P) {
            this.member4263 = new Int8Array(this.member1568);
        }
        if (am) {
            this.member4264 = new Int8Array(this.member1568);
        }
        if (aw) {
            this.member4268 = new Int8Array(this.member1568);
        }
        if (O) {
            this.member4266 = new Uint16Array(this.member1568);
        }
        this.member4267 = new Uint16Array(this.member1568);
        if (U) {
            this.member1877 = new Uint16Array(this.member1568);
        }
        if (ac) {
            this.member4269 = new Int32Array(this.member1568);
        }
        this.member4270 = new Int16Array(this.member1568);
        if (this.member4274 > 0) {
            this.member4275 = new Int8Array(this.member4274);
            this.member4276 = new Int16Array(this.member4274);
            this.member4277 = new Int16Array(this.member4274);
            this.member4278 = new Int16Array(this.member4274);
            this.member4279 = new Int32Array(this.member4274);
            this.member4280 = new Int32Array(this.member4274);
            this.member4281 = new Int32Array(this.member4274);
            this.member4285 = new Int8Array(this.member4274);
            this.member4286 = new Int8Array(this.member4274);
            this.member4282 = new Int8Array(this.member4274);
            this.member4283 = new Int8Array(this.member4274);
            this.member4284 = new Int8Array(this.member4274);
        }
        if (at > 0) {
            this.member2086 = new Array(at);
        }
        if (ad > 0) {
            this.member2087 = new Array(ad);
        }
        if (aq > 0) {
            this.member4290 = new Array(aq);
        }
        if (this.member4289 > 0) {
            this.u = new Float32Array(this.member4289);
            this.member1873 = new Float32Array(this.member4289);
            this.member4259 = new Uint16Array(this.member1879);
            this.member4271 = new Uint8Array(this.member1568);
            this.member4272 = new Uint8Array(this.member1568);
            this.member4273 = new Uint8Array(this.member1568);
        }
        var aE = new Uint8Array(this.member1879);
        var av = new Uint32Array(this.member4289);
        var S = new Uint16Array(this.member1879);
        var ak = new Uint8Array(this.member1879);
        var ap = new Uint16Array(3);
        this.member1879 = 0;
        this.member1568 = 0;
        this.member4274 = 0;
        this.member4289 = 0;
        ad = 0;
        aq = 0;
        at = 0;
        for (R = 0; R < ah.length; R++) {
            var ae = 1 << R;
            az = ah[R];
            if (az !== null && az !== undefined) {
                var Q = new Uint8Array(az.member1879);
                var N = az.member1709();
                for (var aB = 0; aB < N; aB++) {
                    this.member2086[at++] = {
                        member2070: az.member2109(aB),
                        member4297: az.member2110(aB) + this.member1568,
                        member4298: az.member2113(aB),
                        member2071: az.member2115(aB)
                    };
                }
                for (var ay = 0; ay < az.member1568; ay++) {
                    ap[0] = az.member4260[ay];
                    ap[1] = az.member4261[ay];
                    ap[2] = az.member4262[ay];
                    for (var au = 0; au < 3; au++) {
                        var Y = ap[au];
                        var al = az.member4254[Y];
                        var aj = az.member4255[Y];
                        var Z = az.member4256[Y];
                        var ag;
                        for (ag = 0; ag < this.member1879; ag++) {
                            if (al == this.member4254[ag] && aj == this.member4255[ag] && Z == this.member4256[ag]) {
                                this.member434[ag] |= ae;
                                S[Y] = ag;
                                break;
                            }
                        }
                        if (az.member4289 > 0 && Q[Y] === 0) {
                            var W = (Y < az.member1879 - 1 ? az.member4259[Y + 1] : az.member4289) - az.member4259[Y];
                            for (var ab = 0; ab < W; ++ab) {
                                this.u[this.member4289] = az.u[az.member4259[Y] + ab];
                                this.member1873[this.member4289] = az.member1873[az.member4259[Y] + ab];
                                av[this.member4289] = ag << 16 | aE[ag] + ab;
                                this.member4289++;
                            }
                            ak[Y] = aE[ag];
                            aE[ag] += W;
                            Q[Y] = 1;
                        }
                        if (ag >= this.member1879) {
                            this.member4254[this.member1879] = al;
                            this.member4255[this.member1879] = aj;
                            this.member4256[this.member1879] = Z;
                            this.member434[this.member1879] = ae;
                            this.member4257[this.member1879] = az.member4257 != null ? az.member4257[Y] : C;
                            S[Y] = this.member1879;
                            this.member1879++;
                        }
                    }
                }
                var ai = az.member1868();
                for (var T = 0; T < ai; T++) {
                    if (P) {
                        if (az.member4300()) {
                            this.member4263[this.member1568] = az.member4301(T);
                        }
                    }
                    if (am) {
                        if (az.member1891()) {
                            this.member4264[this.member1568] = az.member1914(T);
                        } else {
                            this.member4264[this.member1568] = az.member4302();
                        }
                    }
                    if (aw) {
                        if (az.member4305()) {
                            this.member4268[this.member1568] = az.member4306(T);
                        } else {
                            this.member4268[this.member1568] = 0;
                        }
                    }
                    if (U) {
                        if (az.member1874() && az.member1875(T) !== undefined) {
                            this.member1877[this.member1568] = az.member1875(T);
                        } else {
                            this.member1877[this.member1568] = F;
                        }
                    }
                    if (ac) {
                        if (az.member4307() && az.member1723(T) !== undefined) {
                            this.member4269[this.member1568] = az.member1723(T);
                        } else {
                            this.member4269[this.member1568] = I;
                        }
                    }
                    if (az.member4289 > 0) {
                        this.member4271[this.member1568] = az.member4271[T] + ak[az.member4260[T]];
                        this.member4272[this.member1568] = az.member4272[T] + ak[az.member4261[T]];
                        this.member4273[this.member1568] = az.member4273[T] + ak[az.member4262[T]];
                    }
                    this.member4260[this.member1568] = S[az.member4260[T]];
                    this.member4261[this.member1568] = S[az.member4261[T]];
                    this.member4262[this.member1568] = S[az.member4262[T]];
                    this.member4270[this.member1568] = ae;
                    this.member4267[this.member1568] = az.member4304(T);
                    this.member1568++;
                }
                var ar = az.member1892();
                for (var ax = 0; ax < ar; ax++) {
                    this.member2087[ad] = {
                        member3413: az.member2116(ax),
                        member1594: S[az.member4322(ax, 0)],
                        member1595: S[az.member4322(ax, 1)],
                        member1596: S[az.member4322(ax, 2)],
                        member4294: az.member4321(ax)
                    };
                    ad++;
                }
                var X = az.member4323();
                for (var aA = 0; aA < X; aA++) {
                    this.member4290[aq] = {
                        member4295: az.member4324(aA),
                        member4296: S[az.member4325(aA)]
                    };
                    aq++;
                }
            }
        }
        if (this.member4289 > 0) {
            Class165.member1786(av, this.u, this.member1873, 0, this.member4289 - 1);
            for (var ao = 0, an = 0; ao < this.member1879; ++ao) {
                this.member4259[ao] = an;
                an += aE[ao];
            }
        }
        var af = 0;
        this.member4253 = this.member1879;
        for (var R = 0; R < ah.length; R++) {
            var ae = 1 << R;
            var az = ah[R];
            if (az !== null && az !== undefined) {
                if (O) {
                    var ai = az.member1868();
                    for (T = 0; T < ai; T++) {
                        var aD = az.member4303() ? az.member4266[T] : J;
                        this.member4266[af++] = aD !== t && aD !== J ? aD + this.member4274 : aD;
                    }
                }
                var V = az.member4308();
                for (var aa = 0; aa < V; aa++) {
                    var aC = this.member4275[this.member4274] = az.member4309(aa);
                    if (aC === 0) {
                        this.member4276[this.member4274] = n.call(this, az, az.member4310(aa), ae);
                        this.member4277[this.member4274] = n.call(this, az, az.member4311(aa), ae);
                        this.member4278[this.member4274] = n.call(this, az, az.member4312(aa), ae);
                    }
                    if (aC >= 1 && aC <= 3) {
                        this.member4276[this.member4274] = az.member4310(aa);
                        this.member4277[this.member4274] = az.member4311(aa);
                        this.member4278[this.member4274] = az.member4312(aa);
                        this.member4279[this.member4274] = az.member4313(aa);
                        this.member4280[this.member4274] = az.member4314(aa);
                        this.member4281[this.member4274] = az.member4315(aa);
                        this.member4285[this.member4274] = az.member4319(aa);
                        this.member4286[this.member4274] = az.member4320(aa);
                        this.member4282[this.member4274] = az.member4316(aa);
                    }
                    if (aC === 2) {
                        this.member4283[this.member4274] = az.member4317(aa);
                        this.member4284[this.member4274] = az.member4318(aa);
                    }
                    this.member4274++;
                }
            }
        }
    };
    var n = function (S, P, R) {
        var N = S.member1862(P), U = S.member1863(P), T = S.member1864(P);
        for (var Q = 0; Q < this.member1879; Q++) {
            if (N === this.member4254[Q] && U === this.member4255[Q] && T === this.member4256[Q]) {
                this.member434[Q] |= R;
                return Q;
            }
        }
        this.member4254[this.member1879] = N;
        this.member4255[this.member1879] = U;
        this.member4256[this.member1879] = T;
        this.member434[this.member1879] = R;
        var O = S.member1722(P);
        if (O === undefined) {
            O = C;
        }
        this.member4257[this.member1879] = O;
        return this.member1879++;
    };
    var j = function () {
        if (this.member4266 !== undefined) {
            var V = new Array(this.member4274), U = new Array(this.member4274);
            var T = new Array(this.member4274), S = new Array(this.member4274);
            var R = new Array(this.member4274), Q = new Array(this.member4274);
            for (var ac = 0; ac < this.member4274; ac++) {
                V[ac] = Number.MAX_VALUE;
                U[ac] = -Number.MAX_VALUE;
                T[ac] = Number.MAX_VALUE;
                S[ac] = -Number.MAX_VALUE;
                R[ac] = Number.MAX_VALUE;
                Q[ac] = -Number.MAX_VALUE;
            }
            for (var aj = 0; aj < this.member1568; aj++) {
                if (this.member4266[aj] !== t && this.member4266[aj] !== J) {
                    var O = this.member4266[aj];
                    for (var ag = 0; ag < 3; ag++) {
                        var ad;
                        if (ag === 0) {
                            ad = this.member4260[aj];
                        } else if (ag === 1) {
                            ad = this.member4261[aj];
                        } else {
                            ad = this.member4262[aj];
                        }
                        var aa = this.member4254[ad], Y = -this.member4255[ad], X = this.member4256[ad];
                        if (aa < V[O]) {
                            V[O] = aa;
                        }
                        if (aa > U[O]) {
                            U[O] = aa;
                        }
                        if (Y < T[O]) {
                            T[O] = Y;
                        }
                        if (Y > S[O]) {
                            S[O] = Y;
                        }
                        if (X < R[O]) {
                            R[O] = X;
                        }
                        if (X > Q[O]) {
                            Q[O] = X;
                        }
                    }
                }
            }
            this.member4287 = new Array(this.member4274);
            this.member4288 = new Array(this.member4274);
            for (var ac = 0; ac < this.member4274; ac++) {
                var ab = this.member4275[ac];
                if (ab > 0) {
                    this.member4287[ac] = new Float32Array([
                        Math.floor((V[ac] + U[ac]) / 2),
                        Math.floor((T[ac] + S[ac]) / 2),
                        Math.floor((R[ac] + Q[ac]) / 2)
                    ]);
                    if (ab === 1) {
                        var ai = this.member4279[ac];
                        if (ai === 0) {
                            a[0] = 1;
                            a[2] = 1;
                        } else if (ai > 0) {
                            a[0] = 1;
                            a[2] = ai / 1024;
                        } else {
                            a[2] = 1;
                            a[0] = -ai / 1024;
                        }
                        a[1] = 64 / this.member4280[ac];
                    } else if (ab === 2) {
                        a[0] = 64 / this.member4279[ac];
                        a[1] = 64 / this.member4280[ac];
                        a[2] = 64 / this.member4281[ac];
                    } else {
                        a[0] = this.member4279[ac] / 1024;
                        a[1] = this.member4280[ac] / 1024;
                        a[2] = this.member4281[ac] / 1024;
                    }
                    var af = this.member4285[ac] / 256 * (Math.PI * 2);
                    var P = Math.cos(af);
                    var N = Math.sin(af);
                    B[0] = P;
                    B[1] = 0;
                    B[2] = N;
                    B[3] = 0;
                    B[4] = 1;
                    B[5] = 0;
                    B[6] = -N;
                    B[7] = 0;
                    B[8] = P;
                    var Z = 1, W = 0;
                    P = this.member4277[ac] / 32767;
                    N = -Math.sqrt(1 - P * P);
                    var ae = 1 - P;
                    var ah = Math.sqrt(this.member4276[ac] * this.member4276[ac] + this.member4278[ac] * this.member4278[ac]);
                    if (ah === 0 && P === 0) {
                        Class37.set(B, b);
                    } else {
                        if (ah != 0) {
                            Z = -this.member4278[ac] / ah;
                            W = this.member4276[ac] / ah;
                        }
                        E[0] = P + Z * Z * ae;
                        E[1] = W * N;
                        E[2] = W * Z * ae;
                        E[3] = -W * N;
                        E[4] = P;
                        E[5] = Z * N;
                        E[6] = Z * W * ae;
                        E[7] = -Z * N;
                        E[8] = P + W * W * ae;
                        b[0] = B[0] * E[0] + B[1] * E[3] + B[2] * E[6];
                        b[1] = B[0] * E[1] + B[1] * E[4] + B[2] * E[7];
                        b[2] = B[0] * E[2] + B[1] * E[5] + B[2] * E[8];
                        b[3] = B[3] * E[0] + B[4] * E[3] + B[5] * E[6];
                        b[4] = B[3] * E[1] + B[4] * E[4] + B[5] * E[7];
                        b[5] = B[3] * E[2] + B[4] * E[5] + B[5] * E[8];
                        b[6] = B[6] * E[0] + B[7] * E[3] + B[8] * E[6];
                        b[7] = B[6] * E[1] + B[7] * E[4] + B[8] * E[7];
                        b[8] = B[6] * E[2] + B[7] * E[5] + B[8] * E[8];
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
                    this.member4288[ac] = Class37.member316(b);
                }
            }
        }
    };
    var G = function () {
        this.member1878 = new Float32Array(this.member1568 * 6);
        var az;
        for (var aM = 0; aM < this.member1568; aM++) {
            var aH = 0, am = 0, aG = 0, al = 0, aF = 0, ak = 0;
            if (this.member1877 !== undefined && this.member1877[aM] !== F) {
                var aO = J;
                if (this.member4266 !== undefined) {
                    aO = this.member4266[aM];
                }
                if (aO === J) {
                    aH = 0;
                    am = 1;
                    aG = 1;
                    al = 1;
                    aF = 0;
                    ak = 0;
                } else if (aO === t) {
                    var at = this.member4259[this.member4260[aM]] + this.member4271[aM];
                    var ar = this.member4259[this.member4261[aM]] + this.member4272[aM];
                    var ap = this.member4259[this.member4262[aM]] + this.member4273[aM];
                    aH = this.u[at];
                    am = this.member1873[at];
                    aG = this.u[ar];
                    al = this.member1873[ar];
                    aF = this.u[ap];
                    ak = this.member1873[ap];
                } else {
                    var aj = this.member4275[aO];
                    if (aj === 0) {
                        var ab = this.member4260[aM], Y = this.member4261[aM], aN = this.member4262[aM];
                        var aA = this.member4276[aO], ay = this.member4277[aO], ax = this.member4278[aO];
                        var aK = this.member4254[aA], aq = this.member4255[aA], Z = this.member4256[aA];
                        var aJ = this.member4254[ay] - aK, ao = this.member4255[ay] - aq, W = this.member4256[ay] - Z;
                        var aI = this.member4254[ax] - aK, an = this.member4255[ax] - aq, U = this.member4256[ax] - Z;
                        var ai = this.member4254[ab] - aK, P = this.member4255[ab] - aq, aE = this.member4256[ab] - Z;
                        var ah = this.member4254[Y] - aK, O = this.member4255[Y] - aq, aC = this.member4256[Y] - Z;
                        var ag = this.member4254[aN] - aK, N = this.member4255[aN] - aq, aB = this.member4256[aN] - Z;
                        var X = ao * U - W * an;
                        var aL = W * aI - aJ * U;
                        var aw = aJ * an - ao * aI;
                        var S = an * aw - U * aL;
                        var R = U * X - aI * aw;
                        var Q = aI * aL - an * X;
                        var T = 1 / (S * aJ + R * ao + Q * W);
                        aH = (S * ai + R * P + Q * aE) * T;
                        aG = (S * ah + R * O + Q * aC) * T;
                        aF = (S * ag + R * N + Q * aB) * T;
                        S = ao * aw - W * aL;
                        R = W * X - aJ * aw;
                        Q = aJ * aL - ao * X;
                        T = 1 / (S * aI + R * an + Q * U);
                        am = (S * ai + R * P + Q * aE) * T;
                        al = (S * ah + R * O + Q * aC) * T;
                        ak = (S * ag + R * N + Q * aB) * T;
                    } else {
                        var ab = this.member4260[aM], Y = this.member4261[aM], aN = this.member4262[aM];
                        h[0] = this.member4254[ab];
                        h[1] = -this.member4255[ab];
                        h[2] = this.member4256[ab];
                        e[0] = this.member4254[Y];
                        e[1] = -this.member4255[Y];
                        e[2] = this.member4256[Y];
                        c[0] = this.member4254[aN];
                        c[1] = -this.member4255[aN];
                        c[2] = this.member4256[aN];
                        var aD = this.member4287[aO];
                        var av = this.member4288[aO];
                        var ac = this.member4286[aO];
                        var af = this.member4282[aO] / 256;
                        if (aj === 1) {
                            var au = this.member4281[aO] / 1024;
                            az = u(h, aD, av, au, ac, af);
                            aH = az.u;
                            am = az.member1873;
                            az = u(e, aD, av, au, ac, af);
                            aG = az.u;
                            al = az.member1873;
                            az = u(c, aD, av, au, ac, af);
                            aF = az.u;
                            ak = az.member1873;
                            var V = au / 2;
                            if ((ac & 1) === 0) {
                                if (aG - aH > V) {
                                    aG -= au;
                                } else if (aH - aG > V) {
                                    aG += au;
                                }
                                if (aF - aH > V) {
                                    aF -= au;
                                } else if (aH - aF > V) {
                                    aF += au;
                                }
                            } else {
                                if (al - am > V) {
                                    al -= au;
                                } else if (am - al > V) {
                                    al += au;
                                }
                                if (ak - am > V) {
                                    ak -= au;
                                } else if (am - ak > V) {
                                    ak += au;
                                }
                            }
                        } else if (aj === 2) {
                            var ae = this.member4283[aO] / 256;
                            var ad = this.member4284[aO] / 256;
                            Class41.member322(e, h, A);
                            Class41.member322(c, h, z);
                            Class41.member325(z, A, q);
                            Class49.member318(av, q, v);
                            a[0] = 1 / (64 / this.member4279[aO]);
                            a[1] = 1 / (64 / this.member4280[aO]);
                            a[2] = 1 / (64 / this.member4281[aO]);
                            Class41.member323(v, a);
                            var aa = D(v);
                            az = m(h, aD, aa, av, ac, af, ae, ad);
                            aH = az.u;
                            am = az.member1873;
                            az = m(e, aD, aa, av, ac, af, ae, ad);
                            aG = az.u;
                            al = az.member1873;
                            az = m(c, aD, aa, av, ac, af, ae, ad);
                            aF = az.u;
                            ak = az.member1873;
                        } else if (aj === 3) {
                            az = r(h, aD, av, ac, af);
                            aH = az.u;
                            am = az.member1873;
                            az = r(e, aD, av, ac, af);
                            aG = az.u;
                            al = az.member1873;
                            az = r(c, aD, av, ac, af);
                            aF = az.u;
                            ak = az.member1873;
                            if ((ac & 1) === 0) {
                                if (aG - aH > 0.5) {
                                    aG -= 1;
                                } else if (aH - aG > 0.5) {
                                    aG += 1;
                                }
                                if (aF - aH > 0.5) {
                                    aF -= 1;
                                } else if (aH - aF > 0.5) {
                                    aF += 1;
                                }
                            } else {
                                if (al - am > 0.5) {
                                    al -= 1;
                                } else if (am - al > 0.5) {
                                    al += 1;
                                }
                                if (ak - am > 0.5) {
                                    ak -= 1;
                                } else if (am - ak > 0.5) {
                                    ak += 1;
                                }
                            }
                        }
                    }
                }
            }
            this.member1878[aM * 6] = aH;
            this.member1878[aM * 6 + 1] = aG;
            this.member1878[aM * 6 + 2] = aF;
            this.member1878[aM * 6 + 3] = am;
            this.member1878[aM * 6 + 4] = al;
            this.member1878[aM * 6 + 5] = ak;
        }
    };
    var r = function (N, T, P, R, S) {
        Class41.member322(N, T);
        Class49.member318(P, N);
        Class41.normalize(N);
        var Q = Math.atan2(N[0], N[2]) / (Math.PI * 2) + 0.5;
        var U = Math.asin(N[1]) / Math.PI + 0.5 + S;
        if (R === 1) {
            var O = Q;
            Q = -U;
            U = O;
        } else if (R === 2) {
            Q = -Q;
            U = -U;
        } else if (R === 3) {
            var O = Q;
            Q = U;
            U = -O;
        }
        return {
            u: Q,
            member1873: U
        };
    };
    var u = function (S, R, Q, O, N, P) {
        Class41.member322(S, R);
        Class49.member318(Q, S);
        var U = Math.atan2(S[0], S[2]) / (Math.PI * 2) + 0.5;
        if (O !== 1) {
            U *= O;
        }
        var V = S[1] + 0.5 + P;
        if (N === 1) {
            var T = U;
            U = -V;
            V = T;
        } else if (N === 2) {
            U = -U;
            V = -V;
        } else if (N === 3) {
            var T = U;
            U = V;
            V = -T;
        }
        return {
            u: U,
            member1873: V
        };
    };
    var D = function (Q) {
        var P = Q[0] < 0 ? -Q[0] : Q[0];
        var O = Q[1] < 0 ? -Q[1] : Q[1];
        var N = Q[2] < 0 ? -Q[2] : Q[2];
        if (O > P && O > N) {
            if (Q[1] < 0) {
                return 0;
            } else {
                return 1;
            }
        } else if (N > P && N > O) {
            if (Q[2] > 0) {
                return 2;
            } else {
                return 3;
            }
        } else if (Q[0] > 0) {
            return 4;
        } else {
            return 5;
        }
    };
    var m = function (U, T, R, S, N, Q, P, O) {
        Class41.member322(U, T);
        Class49.member318(S, U);
        var W, X;
        if (R === 0) {
            W = U[0] + Q + 0.5;
            X = -U[2] + O + 0.5;
        } else if (R === 1) {
            W = U[0] + Q + 0.5;
            X = U[2] + O + 0.5;
        } else if (R === 2) {
            W = U[0] + Q + 0.5;
            X = -U[1] + P + 0.5;
        } else if (R === 3) {
            W = -U[0] + Q + 0.5;
            X = -U[1] + P + 0.5;
        } else if (R === 4) {
            W = -U[2] + O + 0.5;
            X = -U[1] + P + 0.5;
        } else {
            W = U[2] + O + 0.5;
            X = -U[1] + P + 0.5;
        }
        if (N === 1) {
            var V = W;
            W = -X;
            X = V;
        } else if (N === 2) {
            W = -W;
            X = -X;
        } else if (N == 3) {
            var V = W;
            W = X;
            X = -V;
        }
        return {
            u: W,
            member1873: X
        };
    };
    L.prototype.member681 = function (Q, O) {
        var R = this;
        if (Q) {
            R = this.clone();
        }
        var P = {
            member4252: R.member4252,
            member1879: R.member1879,
            member4253: R.member4253,
            member4254: R.member4254,
            member4255: R.member4255,
            member4256: R.member4256,
            member4257: R.member4257,
            member4258: R.member4258,
            member434: R.member434,
            member4259: R.member4259,
            member1568: R.member1568,
            member4260: R.member4260,
            member4261: R.member4261,
            member4262: R.member4262,
            member4263: R.member4263,
            member4264: R.member4264,
            member4265: R.member4265,
            member4266: R.member4266,
            member4267: R.member4267,
            member4268: R.member4268,
            member2431: R.member2431,
            member1877: R.member1877,
            member4269: R.member4269,
            member4270: R.member4270,
            member4271: R.member4271,
            member4272: R.member4272,
            member4273: R.member4273,
            member1878: R.member1878,
            member4274: R.member4274,
            member4275: R.member4275,
            member4276: R.member4276,
            member4277: R.member4277,
            member4278: R.member4278,
            member4279: R.member4279,
            member4280: R.member4280,
            member4281: R.member4281,
            member4282: R.member4282,
            member4283: R.member4283,
            member4284: R.member4284,
            member4285: R.member4285,
            member4286: R.member4286,
            member4289: R.member4289,
            u: R.u,
            member1873: R.member1873,
            member2087: R.member2087,
            member4290: R.member4290,
            member2086: R.member2086
        };
        if (O !== undefined) {
            O.push(R.member4254.buffer);
            O.push(R.member4255.buffer);
            O.push(R.member4256.buffer);
            if (R.member4257 !== undefined) {
                O.push(R.member4257.buffer);
            }
            if (R.member4258 !== undefined) {
                for (var N = 0; N < R.member4258.length; N++) {
                    if (R.member4258[N] !== undefined) {
                        O.push(R.member4258[N].buffer);
                    }
                }
            }
            if (R.member434 !== undefined) {
                O.push(R.member434.buffer);
            }
            if (R.member4260 !== undefined) {
                O.push(R.member4260.buffer);
            }
            if (R.member4261 !== undefined) {
                O.push(R.member4261.buffer);
            }
            if (R.member4262 !== undefined) {
                O.push(R.member4262.buffer);
            }
            if (R.member4263 !== undefined) {
                O.push(R.member4263.buffer);
            }
            if (R.member4264 !== undefined) {
                O.push(R.member4264.buffer);
            }
            if (R.member4266 !== undefined) {
                O.push(R.member4266.buffer);
            }
            if (R.member4267 !== undefined) {
                O.push(R.member4267.buffer);
            }
            if (R.member4268 !== undefined) {
                O.push(R.member4268.buffer);
            }
            if (R.member1877 !== undefined) {
                O.push(R.member1877.buffer);
            }
            if (R.member4269 !== undefined) {
                O.push(R.member4269.buffer);
            }
            if (R.member4270 !== undefined) {
                O.push(R.member4270.buffer);
            }
            if (R.member4275 !== undefined) {
                O.push(R.member4275.buffer);
            }
            if (R.member4276 !== undefined) {
                O.push(R.member4276.buffer);
            }
            if (R.member4277 !== undefined) {
                O.push(R.member4277.buffer);
            }
            if (R.member4278 !== undefined) {
                O.push(R.member4278.buffer);
            }
            if (R.member4279 !== undefined) {
                O.push(R.member4279.buffer);
            }
            if (R.member4280 !== undefined) {
                O.push(R.member4280.buffer);
            }
            if (R.member4281 !== undefined) {
                O.push(R.member4281.buffer);
            }
            if (R.member4282 !== undefined) {
                O.push(R.member4282.buffer);
            }
            if (R.member4283 !== undefined) {
                O.push(R.member4283.buffer);
            }
            if (R.member4284 !== undefined) {
                O.push(R.member4284.buffer);
            }
            if (R.member4285 !== undefined) {
                O.push(R.member4285.buffer);
            }
            if (R.member4286 !== undefined) {
                O.push(R.member4286.buffer);
            }
            if (R.member1878 !== undefined) {
                O.push(R.member1878.buffer);
            }
        }
        return P;
    };
    L.prototype.member1318 = function (Q) {
        Q.p1(this.member4250);
        Q.p1(this.member4252);
        Q.p2(this.member1879);
        Q.p2(this.member4253);
        Q.member1067(this.member4254.buffer, 0, this.member1879 * 4);
        Q.member1067(this.member4255.buffer, 0, this.member1879 * 4);
        Q.member1067(this.member4256.buffer, 0, this.member1879 * 4);
        this.member4326(Q, this.member4257);
        if (this.member4258 !== undefined) {
            var P = Q.getPos();
            Q.setPos(P + 2);
            var R = 0;
            for (var N = 0; N < this.member4258.length; N++) {
                if (this.member4258[N] !== undefined) {
                    Q.p2(N);
                    Q.p4(this.member4258[N].buffer.byteLength);
                    Q.pArrayBufffer(this.member4258[N].buffer, 0, this.member4258[N].buffer.byteLength);
                    R++;
                }
            }
            var O = Q.getPos();
            Q.setPos(P);
            Q.p2(R);
            Q.setPos(O);
        } else {
            Q.p2(0);
        }
        this.member4326(Q, this.member434);
        this.member4326(Q, this.member4259);
        Q.p2(this.member1568);
        this.member4326(Q, this.member4260);
        this.member4326(Q, this.member4261);
        this.member4326(Q, this.member4262);
        this.member4326(Q, this.member4263);
        this.member4326(Q, this.member4264);
        Q.p2(this.member4265);
        this.member4326(Q, this.member4266);
        this.member4326(Q, this.member4267);
        this.member4326(Q, this.member4268);
        Q.p2(this.member2431);
        this.member4326(Q, this.member1877);
        this.member4326(Q, this.member4269);
        this.member4326(Q, this.member4270);
        this.member4326(Q, this.member4271);
        this.member4326(Q, this.member4272);
        this.member4326(Q, this.member4273);
        this.member4326(Q, this.member1878);
        Q.p2(this.member4274);
        this.member4326(Q, this.member4275);
        this.member4326(Q, this.member4276);
        this.member4326(Q, this.member4277);
        this.member4326(Q, this.member4278);
        this.member4326(Q, this.member4279);
        this.member4326(Q, this.member4280);
        this.member4326(Q, this.member4281);
        this.member4326(Q, this.member4282);
        this.member4326(Q, this.member4283);
        this.member4326(Q, this.member4284);
        this.member4326(Q, this.member4285);
        this.member4326(Q, this.member4286);
        Q.p2(this.member4289);
        this.member4326(Q, this.u);
        this.member4326(Q, this.member1873);
        if (this.member2087 !== undefined) {
            Q.p2(this.member2087.length);
            for (var N = 0; N < this.member2087.length; N++) {
                var T = this.member2087[N];
                Q.p2(T.member3413);
                Q.p2(T.member4293);
                Q.p2(T.member1594);
                Q.p2(T.member1595);
                Q.p2(T.member1596);
                Q.p2(T.member4294);
            }
        } else {
            Q.p2(0);
        }
        if (this.member4290 !== undefined) {
            Q.p2(this.member4290.length);
            for (var N = 0; N < this.member4290.length; N++) {
                var T = this.member4290[N];
                Q.p2(T.member4295);
                Q.p2(T.member4296);
            }
        } else {
            Q.p2(0);
        }
        if (this.member2086 !== undefined) {
            Q.p2(this.member2086.length);
            for (var N = 0; N < this.member2086.length; N++) {
                var S = this.member2086[N];
                Q.p2(S.member2070);
                Q.p2(S.member4297);
                Q.p2(S.member4298);
                Q.p2(S.member2071);
            }
        } else {
            Q.p2(0);
        }
    };
    L.prototype.member4326 = function (N, O) {
        if (O !== undefined) {
            N.p1(1);
            N.p4(O.buffer.byteLength);
            N.member1067(O.buffer, 0, O.buffer.byteLength);
        } else {
            N.p1(0);
        }
    };
    L.prototype.member4291 = function (N, O) {
        var P = N.g1() === 1;
        if (P) {
            var Q = new O(new ArrayBuffer(N.g4()));
            N.gdata(Q.buffer, 0, Q.buffer.byteLength);
            return Q;
        } else {
            return undefined;
        }
    };
    L.prototype.clone = function () {
        var P;
        if (this.member2087 !== undefined) {
            P = new Array(this.member2087.length);
            for (var O = 0; O < P.length; O++) {
                var R = this.member2087[O];
                P[O] = {
                    member3413: R.member3413,
                    member4293: R.member4293,
                    member1594: R.member1594,
                    member1595: R.member1595,
                    member1596: R.member1596,
                    member4294: R.member4294
                };
            }
        }
        var T;
        if (this.member4290 !== undefined) {
            T = new Array(this.member4290.length);
            for (var O = 0; O < T.length; O++) {
                var R = this.member4290[O];
                T[O] = {
                    member4295: R.member4295,
                    member4296: R.member4296
                };
            }
        }
        var N;
        if (this.member2086 !== undefined) {
            N = new Array(this.member2086.length);
            for (var O = 0; O < N.length; O++) {
                var Q = this.member2086[O];
                N[O] = {
                    member2070: Q.member2070,
                    member4297: Q.member4297,
                    member4298: Q.member4298,
                    member2071: Q.member2071
                };
            }
        }
        var S;
        if (this.member4258 !== undefined) {
            S = [];
            for (var O = 0; O < this.member4258.length; O++) {
                if (this.member4258[O] !== undefined) {
                    S[O] = new Int32Array(this.member4258[O].buffer.slice(0));
                }
            }
        }
        return new L(undefined, undefined, {
            member4252: this.member4252,
            member1879: this.member1879,
            member4253: this.member4253,
            member4254: new Int32Array(this.member4254.buffer.slice(0)),
            member4255: new Int32Array(this.member4255.buffer.slice(0)),
            member4256: new Int32Array(this.member4256.buffer.slice(0)),
            member4257: this.member4257 === undefined ? undefined : new Int32Array(this.member4257.buffer.slice(0)),
            member4258: S,
            member434: this.member434 === undefined ? undefined : new Int16Array(this.member434.buffer.slice(0)),
            member4259: this.member4259 === undefined ? undefined : new Uint16Array(this.member4259.buffer.slice(0)),
            member1568: this.member1568,
            member4260: this.member4260 === undefined ? undefined : new Int16Array(this.member4260.buffer.slice(0)),
            member4261: this.member4261 === undefined ? undefined : new Int16Array(this.member4261.buffer.slice(0)),
            member4262: this.member4262 === undefined ? undefined : new Int16Array(this.member4262.buffer.slice(0)),
            member4263: this.member4263 === undefined ? undefined : new Int8Array(this.member4263.buffer.slice(0)),
            member4264: this.member4264 === undefined ? undefined : new Int8Array(this.member4264.buffer.slice(0)),
            member4265: this.member4265,
            member4266: this.member4266 === undefined ? undefined : new Uint16Array(this.member4266.buffer.slice(0)),
            member4267: this.member4267 === undefined ? undefined : new Uint16Array(this.member4267.buffer.slice(0)),
            member4268: this.member4268 === undefined ? undefined : new Int8Array(this.member4268.buffer.slice(0)),
            member2431: this.member2431,
            member1877: this.member1877 === undefined ? undefined : new Uint16Array(this.member1877.buffer.slice(0)),
            member4269: this.member4269 === undefined ? undefined : new Int32Array(this.member4269.buffer.slice(0)),
            member4270: this.member4270 === undefined ? undefined : new Int16Array(this.member4270.buffer.slice(0)),
            member4271: this.member4271 === undefined ? undefined : new Uint8Array(this.member4271.buffer.slice(0)),
            member4272: this.member4272 === undefined ? undefined : new Uint8Array(this.member4272.buffer.slice(0)),
            member4273: this.member4273 === undefined ? undefined : new Uint8Array(this.member4273.buffer.slice(0)),
            member1878: this.member1878 === undefined ? undefined : new Float32Array(this.member1878.buffer.slice(0)),
            member4274: this.member4274,
            member4275: this.member4275 === undefined ? undefined : new Int8Array(this.member4275.buffer.slice(0)),
            member4276: this.member4276 === undefined ? undefined : new Int16Array(this.member4276.buffer.slice(0)),
            member4277: this.member4277 === undefined ? undefined : new Int16Array(this.member4277.buffer.slice(0)),
            member4278: this.member4278 === undefined ? undefined : new Int16Array(this.member4278.buffer.slice(0)),
            member4279: this.member4279 === undefined ? undefined : new Int32Array(this.member4279.buffer.slice(0)),
            member4280: this.member4280 === undefined ? undefined : new Int32Array(this.member4280.buffer.slice(0)),
            member4281: this.member4281 === undefined ? undefined : new Int32Array(this.member4281.buffer.slice(0)),
            member4282: this.member4282 === undefined ? undefined : new Int8Array(this.member4282.buffer.slice(0)),
            member4283: this.member4283 === undefined ? undefined : new Int8Array(this.member4283.buffer.slice(0)),
            member4284: this.member4284 === undefined ? undefined : new Int8Array(this.member4284.buffer.slice(0)),
            member4285: this.member4285 === undefined ? undefined : new Int8Array(this.member4285.buffer.slice(0)),
            member4286: this.member4286 === undefined ? undefined : new Int8Array(this.member4286.buffer.slice(0)),
            member4289: this.member4289,
            u: this.u === undefined ? undefined : new Float32Array(this.u.buffer.slice(0)),
            member1873: this.member1873 === undefined ? undefined : new Float32Array(this.member1873.buffer.slice(0)),
            member2087: P,
            member4290: T,
            member2086: N
        });
    };
    L.prototype.member1885 = function (P) {
        var Q = 0;
        var U = {};
        var S = new Array(0);
        if (this.member1877 !== undefined) {
            for (var R = 0; R < this.member1568; R++) {
                var O = this.member1877[R];
                if (O !== F) {
                    if (U[O] === undefined) {
                        S[Q++] = O;
                        U[O] = 1;
                    }
                }
            }
        }
        if (this.member2086 !== undefined) {
            for (var T = 0; T < this.member2086.length; T++) {
                var N = P.member1719(this.member2086[T].member2070);
                var O = N.getMaterial();
                if (O !== undefined) {
                    if (U[O] === undefined) {
                        S[Q++] = O;
                        U[O] = 1;
                    }
                }
            }
        }
        return S;
    };
    L.prototype.translate = function (N) {
        if (N[0] === 0 && N[1] === 0 && N[2] === 0) {
            return;
        }
        for (var O = 0; O < this.member1879; O++) {
            this.member4254[O] += N[0];
            this.member4255[O] += N[1];
            this.member4256[O] += N[2];
        }
        y.call(this);
    };
    L.prototype.rotate = function (Q) {
        if (Q[2] != 0) {
            var P = Class81.sin(Q[2]);
            var N = Class81.cos(Q[2]);
            for (var R = 0; R < this.member1879; R++) {
                var O = this.member4254[R] * N - this.member4255[R] * P >> Class81.member610;
                this.member4255[R] = this.member4255[R] * N + this.member4254[R] * P >> Class81.member610;
                this.member4254[R] = O;
            }
        }
        if (Q[0] != 0) {
            var P = Class81.sin(Q[0]);
            var N = Class81.cos(Q[0]);
            for (var R = 0; R < this.member1879; R++) {
                var O = this.member4255[R] * N + this.member4256[R] * P >> Class81.member610;
                this.member4256[R] = this.member4256[R] * N - this.member4255[R] * P >> Class81.member610;
                this.member4255[R] = O;
            }
        }
        if (Q[1] != 0) {
            var P = Class81.sin(Q[1]);
            var N = Class81.cos(Q[1]);
            for (var R = 0; R < this.member1879; R++) {
                var O = this.member4256[R] * P + this.member4254[R] * N >> Class81.member610;
                this.member4256[R] = this.member4256[R] * N - this.member4254[R] * P >> Class81.member610;
                this.member4254[R] = O;
            }
        }
    };
    L.prototype.member2495 = function (N) {
        if (N === 0) {
            return;
        }
        for (var P = 0; P < this.member1879; P++) {
            this.member4254[P] <<= N;
            this.member4255[P] <<= N;
            this.member4256[P] <<= N;
        }
        if (this.member4274 > 0) {
            if (this.member4279 !== undefined) {
                for (var O = 0; O < this.member4279.length; O++) {
                    this.member4279[O] <<= N;
                    this.member4280[O] <<= N;
                    if (this.member4275[O] !== 1) {
                        this.member4281[O] <<= N;
                    }
                }
            }
        }
        y.call(this);
    };
    L.prototype.scale = function (P, O, N) {
        if (P === 1 && O === 1 && N === 1) {
            return;
        }
        for (var R = 0; R < this.member1879; R++) {
            this.member4254[R] *= P;
            this.member4255[R] *= O;
            this.member4256[R] *= N;
        }
        if (this.member4274 > 0) {
            if (this.member4279 !== undefined) {
                for (var Q = 0; Q < this.member4279.length; Q++) {
                    this.member4279[Q] *= P;
                    this.member4280[Q] *= O;
                    if (this.member4275[Q] !== 1) {
                        this.member4281[Q] *= N;
                    }
                }
            }
        }
        y.call(this);
    };
    L.prototype.member2496 = function () {
        for (var Q = 0; Q < this.member1879; Q++) {
            this.member4256[Q] = -this.member4256[Q];
        }
        var N = this.member4261;
        this.member4261 = this.member4262;
        this.member4262 = N;
        if (this.member1878 !== undefined) {
            for (var P = 0; P < this.member1568; P++) {
                var O = this.member1878[P * 6 + 1];
                this.member1878[P * 6 + 1] = this.member1878[P * 6 + 2];
                this.member1878[P * 6 + 2] = O;
                var R = this.member1878[P * 6 + 4];
                this.member1878[P * 6 + 4] = this.member1878[P * 6 + 5];
                this.member1878[P * 6 + 5] = R;
            }
        }
        y.call(this);
    };
    L.prototype.member2497 = function (S, N) {
        var Q = false;
        for (var P = 0; P < this.member1568; P++) {
            var O = this.member4267[P];
            for (var R = 0; R < S.length; R++) {
                if (O === S[R]) {
                    this.member4267[P] = N[R];
                    Q = true;
                    break;
                }
            }
        }
        if (Q) {
            y.call(this);
        }
    };
    L.prototype.member4327 = function (R, Q) {
        var P = false;
        for (var O = 0; O < this.member1568; O++) {
            var N = this.member4267[O];
            if (N === R) {
                this.member4267[O] = Q;
                P = true;
            }
        }
        if (P) {
            y.call(this);
        }
    };
    L.prototype.member2499 = function (P, O) {
        if (this.member1877 === undefined) {
            return;
        }
        var S = false;
        for (var R = 0; R < this.member1568; R++) {
            var Q = this.member1877[R];
            for (var N = 0; N < P.length; N++) {
                if (Q === P[N]) {
                    var T = O[N];
                    if (T === undefined) {
                        T = F;
                    }
                    this.member1877[R] = T;
                    S = true;
                    break;
                }
            }
        }
        if (S) {
            y.call(this);
        }
    };
    L.prototype.member4328 = function (N, S) {
        if (this.member1877 === undefined) {
            return;
        }
        var Q = false;
        for (var P = 0; P < this.member1568; P++) {
            var O = this.member1877[P];
            if (O === N) {
                var R = S;
                if (R === undefined) {
                    R = F;
                }
                this.member1877[P] = R;
                Q = true;
            }
        }
        if (Q) {
            y.call(this);
        }
    };
    L.prototype.member2500 = function (Q) {
        for (var P = 0; P < this.member1568; P++) {
            var N = this.member4267[P];
            var O = (N & 127) * Q >> 7;
            if (O < 0) {
                O = 0;
            } else if (O > 127) {
                O = 127;
            }
            this.member4267[P] = N & ~127 | O;
        }
        this.member2431 = Q;
        y.call(this);
    };
    L.prototype.member2938 = function () {
        if (this.member4257 === undefined || this.member4258 !== undefined) {
            return;
        }
        var O = new Array(400);
        var N = 0;
        var Q = this.member4253;
        for (var R = 0; R < Q; R++) {
            var P = this.member4257[R];
            if (P !== C) {
                if (O[P] === undefined) {
                    O[P] = 0;
                }
                O[P]++;
                if (P > N) {
                    N = P;
                }
            }
        }
        this.member4258 = new Array(N + 1);
        for (R = 0; R <= N; R++) {
            if (O[R] !== undefined) {
                this.member4258[R] = new Int32Array(O[R]);
                O[R] = 0;
            }
        }
        for (R = 0; R < Q; R++) {
            var P = this.member4257[R];
            if (P !== C) {
                this.member4258[P][O[P]++] = R;
            }
        }
    };
    L.prototype.member1865 = function (N) {
        return undefined;
    };
    return function (O, P, N, Q) {
        return new L(O, P, N, Q);
    };
}();