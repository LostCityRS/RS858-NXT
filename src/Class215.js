export var Class215 = function () {
    var a = {};
    a.member2639 = function () {
        function j() {
            this.pos = 0;
            this.member2640 = 0;
            this.member2641 = false;
            this.buffer = null;
        }
        j.prototype = {
            member2642: function i(s) {
                var o = this.buffer;
                var r = o ? o.byteLength : 0;
                if (s < r) {
                    return o;
                }
                var q = 512;
                while (q < s) {
                    q <<= 1;
                }
                var n = new Uint8Array(q);
                for (var m = 0; m < r; ++m) {
                    n[m] = o[m];
                }
                return this.buffer = n;
            },
            member2643: function b() {
                var m = this.pos;
                while (this.member2640 <= m) {
                    if (this.member2641) {
                        return null;
                    }
                    this.member2644();
                }
                return this.buffer[this.pos++];
            },
            member2645: function k(q) {
                var o = this.pos;
                if (q) {
                    this.member2642(o + q);
                    var n = o + q;
                    while (!this.member2641 && this.member2640 < n) {
                        this.member2644();
                    }
                    var m = this.member2640;
                    if (n > m) {
                        n = m;
                    }
                } else {
                    while (!this.member2641) {
                        this.member2644();
                    }
                    var n = this.member2640;
                }
                this.pos = n;
                return this.buffer.subarray(o, n);
            },
            member2646: function g() {
                var m = this.pos;
                while (this.member2640 <= m) {
                    if (this.member2641) {
                        return null;
                    }
                    this.member2644();
                }
                return String.fromCharCode(this.buffer[this.pos]);
            },
            member2647: function c() {
                var m = this.pos;
                while (this.member2640 <= m) {
                    if (this.member2641) {
                        return null;
                    }
                    this.member2644();
                }
                return String.fromCharCode(this.buffer[this.pos++]);
            },
            member2648: function e(q, n, o) {
                var m = q + n;
                while (this.member2640 <= m && !this.member2641) {
                    this.member2644();
                }
                return new Stream(this.buffer, q, n, o);
            },
            skip: function d(m) {
                if (!m) {
                    m = 1;
                }
                this.pos += m;
            },
            member301: function h() {
                this.pos = 0;
            }
        };
        return j;
    }();
    a.member2649 = function () {
        var h = new Uint32Array([
            16,
            17,
            18,
            0,
            8,
            7,
            9,
            6,
            10,
            5,
            11,
            4,
            12,
            3,
            13,
            2,
            14,
            1,
            15
        ]);
        var d = new Uint32Array([
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            65547,
            65549,
            65551,
            65553,
            131091,
            131095,
            131099,
            131103,
            196643,
            196651,
            196659,
            196667,
            262211,
            262227,
            262243,
            262259,
            327811,
            327843,
            327875,
            327907,
            258,
            258,
            258
        ]);
        var e = new Uint32Array([
            1,
            2,
            3,
            4,
            65541,
            65543,
            131081,
            131085,
            196625,
            196633,
            262177,
            262193,
            327745,
            327777,
            393345,
            393409,
            459009,
            459137,
            524801,
            525057,
            590849,
            591361,
            657409,
            658433,
            724993,
            727041,
            794625,
            798721,
            868353,
            876545
        ]);
        var c = [
            new Uint32Array([
                459008,
                524368,
                524304,
                524568,
                459024,
                524400,
                524336,
                590016,
                459016,
                524384,
                524320,
                589984,
                524288,
                524416,
                524352,
                590048,
                459012,
                524376,
                524312,
                589968,
                459028,
                524408,
                524344,
                590032,
                459020,
                524392,
                524328,
                590000,
                524296,
                524424,
                524360,
                590064,
                459010,
                524372,
                524308,
                524572,
                459026,
                524404,
                524340,
                590024,
                459018,
                524388,
                524324,
                589992,
                524292,
                524420,
                524356,
                590056,
                459014,
                524380,
                524316,
                589976,
                459030,
                524412,
                524348,
                590040,
                459022,
                524396,
                524332,
                590008,
                524300,
                524428,
                524364,
                590072,
                459009,
                524370,
                524306,
                524570,
                459025,
                524402,
                524338,
                590020,
                459017,
                524386,
                524322,
                589988,
                524290,
                524418,
                524354,
                590052,
                459013,
                524378,
                524314,
                589972,
                459029,
                524410,
                524346,
                590036,
                459021,
                524394,
                524330,
                590004,
                524298,
                524426,
                524362,
                590068,
                459011,
                524374,
                524310,
                524574,
                459027,
                524406,
                524342,
                590028,
                459019,
                524390,
                524326,
                589996,
                524294,
                524422,
                524358,
                590060,
                459015,
                524382,
                524318,
                589980,
                459031,
                524414,
                524350,
                590044,
                459023,
                524398,
                524334,
                590012,
                524302,
                524430,
                524366,
                590076,
                459008,
                524369,
                524305,
                524569,
                459024,
                524401,
                524337,
                590018,
                459016,
                524385,
                524321,
                589986,
                524289,
                524417,
                524353,
                590050,
                459012,
                524377,
                524313,
                589970,
                459028,
                524409,
                524345,
                590034,
                459020,
                524393,
                524329,
                590002,
                524297,
                524425,
                524361,
                590066,
                459010,
                524373,
                524309,
                524573,
                459026,
                524405,
                524341,
                590026,
                459018,
                524389,
                524325,
                589994,
                524293,
                524421,
                524357,
                590058,
                459014,
                524381,
                524317,
                589978,
                459030,
                524413,
                524349,
                590042,
                459022,
                524397,
                524333,
                590010,
                524301,
                524429,
                524365,
                590074,
                459009,
                524371,
                524307,
                524571,
                459025,
                524403,
                524339,
                590022,
                459017,
                524387,
                524323,
                589990,
                524291,
                524419,
                524355,
                590054,
                459013,
                524379,
                524315,
                589974,
                459029,
                524411,
                524347,
                590038,
                459021,
                524395,
                524331,
                590006,
                524299,
                524427,
                524363,
                590070,
                459011,
                524375,
                524311,
                524575,
                459027,
                524407,
                524343,
                590030,
                459019,
                524391,
                524327,
                589998,
                524295,
                524423,
                524359,
                590062,
                459015,
                524383,
                524319,
                589982,
                459031,
                524415,
                524351,
                590046,
                459023,
                524399,
                524335,
                590014,
                524303,
                524431,
                524367,
                590078,
                459008,
                524368,
                524304,
                524568,
                459024,
                524400,
                524336,
                590017,
                459016,
                524384,
                524320,
                589985,
                524288,
                524416,
                524352,
                590049,
                459012,
                524376,
                524312,
                589969,
                459028,
                524408,
                524344,
                590033,
                459020,
                524392,
                524328,
                590001,
                524296,
                524424,
                524360,
                590065,
                459010,
                524372,
                524308,
                524572,
                459026,
                524404,
                524340,
                590025,
                459018,
                524388,
                524324,
                589993,
                524292,
                524420,
                524356,
                590057,
                459014,
                524380,
                524316,
                589977,
                459030,
                524412,
                524348,
                590041,
                459022,
                524396,
                524332,
                590009,
                524300,
                524428,
                524364,
                590073,
                459009,
                524370,
                524306,
                524570,
                459025,
                524402,
                524338,
                590021,
                459017,
                524386,
                524322,
                589989,
                524290,
                524418,
                524354,
                590053,
                459013,
                524378,
                524314,
                589973,
                459029,
                524410,
                524346,
                590037,
                459021,
                524394,
                524330,
                590005,
                524298,
                524426,
                524362,
                590069,
                459011,
                524374,
                524310,
                524574,
                459027,
                524406,
                524342,
                590029,
                459019,
                524390,
                524326,
                589997,
                524294,
                524422,
                524358,
                590061,
                459015,
                524382,
                524318,
                589981,
                459031,
                524414,
                524350,
                590045,
                459023,
                524398,
                524334,
                590013,
                524302,
                524430,
                524366,
                590077,
                459008,
                524369,
                524305,
                524569,
                459024,
                524401,
                524337,
                590019,
                459016,
                524385,
                524321,
                589987,
                524289,
                524417,
                524353,
                590051,
                459012,
                524377,
                524313,
                589971,
                459028,
                524409,
                524345,
                590035,
                459020,
                524393,
                524329,
                590003,
                524297,
                524425,
                524361,
                590067,
                459010,
                524373,
                524309,
                524573,
                459026,
                524405,
                524341,
                590027,
                459018,
                524389,
                524325,
                589995,
                524293,
                524421,
                524357,
                590059,
                459014,
                524381,
                524317,
                589979,
                459030,
                524413,
                524349,
                590043,
                459022,
                524397,
                524333,
                590011,
                524301,
                524429,
                524365,
                590075,
                459009,
                524371,
                524307,
                524571,
                459025,
                524403,
                524339,
                590023,
                459017,
                524387,
                524323,
                589991,
                524291,
                524419,
                524355,
                590055,
                459013,
                524379,
                524315,
                589975,
                459029,
                524411,
                524347,
                590039,
                459021,
                524395,
                524331,
                590007,
                524299,
                524427,
                524363,
                590071,
                459011,
                524375,
                524311,
                524575,
                459027,
                524407,
                524343,
                590031,
                459019,
                524391,
                524327,
                589999,
                524295,
                524423,
                524359,
                590063,
                459015,
                524383,
                524319,
                589983,
                459031,
                524415,
                524351,
                590047,
                459023,
                524399,
                524335,
                590015,
                524303,
                524431,
                524367,
                590079
            ]),
            9
        ];
        var g = [
            new Uint32Array([
                327680,
                327696,
                327688,
                327704,
                327684,
                327700,
                327692,
                327708,
                327682,
                327698,
                327690,
                327706,
                327686,
                327702,
                327694,
                0,
                327681,
                327697,
                327689,
                327705,
                327685,
                327701,
                327693,
                327709,
                327683,
                327699,
                327691,
                327707,
                327687,
                327703,
                327695,
                0
            ]),
            5
        ];
        function b(j) {
            var m = 0;
            var k = j[m++];
            var i = j[m++];
            if (k == -1 || i == -1) {
                throw new Error('1304 ');
            }
            if ((k & 15) != 8) {
                throw new Error('1305 ');
            }
            if (((k << 8) + i) % 31 != 0) {
                throw new Error('1306 ');
            }
            if (i & 32) {
                throw new Error('1307 ');
            }
            this.bytes = j;
            this.bytesPos = m;
            this.codeSize = 0;
            this.codeBuf = 0;
            return a.member2639.call(this);
        }
        b.prototype = Object.create(a.member2639.prototype);
        b.prototype.member2650 = function (n) {
            var k = this.codeSize;
            var m = this.codeBuf;
            var j = this.bytes;
            var o = this.bytesPos;
            var i;
            while (k < n) {
                if (typeof (i = j[o++]) == 'undefined') {
                    throw new Error('1308 ');
                }
                m |= i << k;
                k += 8;
            }
            i = m & (1 << n) - 1;
            this.codeBuf = m >> n;
            this.codeSize = k -= n;
            this.bytesPos = o;
            return i;
        };
        b.prototype.member2651 = function (r) {
            var i = r[0];
            var j = r[1];
            var m = this.codeSize;
            var s = this.codeBuf;
            var u = this.bytes;
            var o = this.bytesPos;
            while (m < j) {
                var q;
                if (typeof (q = u[o++]) == 'undefined') {
                    throw new Error('1309 ');
                }
                s |= q << m;
                m += 8;
            }
            var n = i[s & (1 << j) - 1];
            var k = n >> 16;
            var t = n & 65535;
            if (m == 0 || m < k || k == 0) {
                throw new Error('1310 ');
            }
            this.codeBuf = s >> k;
            this.codeSize = m - k;
            this.bytesPos = o;
            return t;
        };
        b.prototype.member2652 = function (m) {
            var k = m.length;
            var o = 0;
            for (var q = 0; q < k; ++q) {
                if (m[q] > o) {
                    o = m[q];
                }
            }
            var y = 1 << o;
            var i = new Uint32Array(y);
            for (var x = 1, r = 0, u = 2; x <= o; ++x, r <<= 1, u <<= 1) {
                for (var j = 0; j < k; ++j) {
                    if (m[j] == x) {
                        var s = 0;
                        var v = r;
                        for (var q = 0; q < x; ++q) {
                            s = s << 1 | v & 1;
                            v >>= 1;
                        }
                        for (var q = s; q < y; q += u) {
                            i[q] = x << 16 | j;
                        }
                        ++r;
                    }
                }
            }
            return [
                i,
                o
            ];
        };
        b.prototype.member2644 = function () {
            function x(S, T, n, R, Q) {
                var P = S.member2650(n) + R;
                while (P-- > 0) {
                    T[O++] = Q;
                }
            }
            var k = this.member2650(3);
            if (k & 1) {
                this.member2641 = true;
            }
            k >>= 1;
            if (k == 0) {
                var C = this.bytes;
                var v = this.bytesPos;
                var L;
                if (typeof (L = C[v++]) == 'undefined') {
                    throw new Error('1311 ');
                }
                var F = L;
                if (typeof (L = C[v++]) == 'undefined') {
                    throw new Error('1312 ');
                }
                F |= L << 8;
                if (typeof (L = C[v++]) == 'undefined') {
                    throw new Error('1313 ');
                }
                var K = L;
                if (typeof (L = C[v++]) == 'undefined') {
                    throw new Error('1314 ');
                }
                K |= L << 8;
                if (K != (~F & 65535)) {
                    throw new Error('1315 ');
                }
                this.codeBuf = 0;
                this.codeSize = 0;
                var D = this.member2640;
                var G = this.member2642(D + F);
                var o = D + F;
                this.member2640 = o;
                for (var E = D; E < o; ++E) {
                    if (typeof (L = C[v++]) == 'undefined') {
                        this.member2641 = true;
                        break;
                    }
                    G[E] = L;
                }
                this.bytesPos = v;
                return;
            }
            var t;
            var u;
            if (k == 1) {
                t = c;
                u = g;
            } else if (k == 2) {
                var N = this.member2650(5) + 257;
                var y = this.member2650(5) + 1;
                var i = this.member2650(4) + 4;
                var q = Array(h.length);
                var O = 0;
                while (O < i) {
                    q[h[O++]] = this.member2650(3);
                }
                var B = this.member2652(q);
                var A = 0;
                var O = 0;
                var J = N + y;
                var I = new Array(J);
                while (O < J) {
                    var j = this.member2651(B);
                    if (j == 16) {
                        x(this, I, 2, 3, A);
                    } else if (j == 17) {
                        x(this, I, 3, 3, A = 0);
                    } else if (j == 18) {
                        x(this, I, 7, 11, A = 0);
                    } else {
                        I[O++] = A = j;
                    }
                }
                t = this.member2652(I.slice(0, N));
                u = this.member2652(I.slice(N, J));
            } else {
                throw new Error('1316 ');
            }
            var G = this.buffer;
            var H = G ? G.length : 0;
            var M = this.member2640;
            while (true) {
                var s = this.member2651(t);
                if (s < 256) {
                    if (M + 1 >= H) {
                        G = this.member2642(M + 1);
                        H = G.length;
                    }
                    G[M++] = s;
                    continue;
                }
                if (s == 256) {
                    this.member2640 = M;
                    return;
                }
                s -= 257;
                s = d[s];
                var r = s >> 16;
                if (r > 0) {
                    r = this.member2650(r);
                }
                var A = (s & 65535) + r;
                s = this.member2651(u);
                s = e[s];
                r = s >> 16;
                if (r > 0) {
                    r = this.member2650(r);
                }
                var z = (s & 65535) + r;
                if (M + A >= H) {
                    G = this.member2642(M + A);
                    H = G.length;
                }
                for (var m = 0; m < A; ++m, ++M) {
                    G[M] = G[M - z];
                }
            }
        };
        return b;
    }();
    return a;
}();