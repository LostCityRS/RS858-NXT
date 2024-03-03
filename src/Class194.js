import { Class41 } from 'Class41.js';
import { Class37 } from 'Class37.js';
import { Class49 } from 'Class49.js';
import { Class140 } from 'Class140.js';
import { Class29 } from 'Class29.js';
import { Class73 } from 'Class73.js';
import { Class4 } from 'Class4.js';
import { Class147 } from 'Class147.js';
import { Class151 } from 'Class151.js';
import { Class137 } from 'Class137.js';
import { Class154 } from 'Class154.js';
import { Class150 } from 'Class150.js';
import { Class99 } from 'Class99.js';
import { Class63 } from 'Class63.js';
import { Class83 } from 'Class83.js';
import { Class82 } from 'Class82.js';
import { Class132 } from 'Class132.js';
import { Class72 } from 'Class72.js';
import { Class130 } from 'Class130.js';
import { Class5 } from 'Class5.js';
import { Class104 } from 'Class104.js';
import { Class68 } from 'Class68.js';
import { Class7 } from 'Class7.js';
export var Class194 = function () {
    var n = new Float32Array(4);
    var m = Class41.create();
    var d = Class41.create();
    var b = Class37.create();
    var a = Class49.create();
    var e = Class140.create();
    var g = new Float32Array(2);
    var c = Class29();
    var k = Math.pow(2, 16) - 1;
    var i = 0;
    i += 4 * 2;
    i += 4 * 2;
    i += 4 * 2;
    i += 1 * 2;
    i += 2;
    var j = function (q) {
        this.member433;
        this.member2238 = false;
        this.member2239;
        this.member2240;
        this.member1564 = null;
        this.member2241;
        this.member2242;
        this.width;
        this.length;
        this.member2245 = new Float32Array(4);
        this.member1675 = new Float32Array(3);
        this.member2246;
        this.member2247;
        this.member2248;
        this.member2249;
        this.member2250;
        this.member2251;
        this.member2252;
        this.member2253;
        this.member2254;
        this.member2255 = false;
        this.member1569 = null;
        this.member2256 = false;
        this.member2257;
        this.member2258;
        this.member2259;
        this.member2260;
        this.member1568 = 0;
        this.member1570 = null;
        this.member1571;
        this.member1572;
        this.member1699 = null;
        this.member1701;
        this.member1700;
        this.member1567 = false;
        this.member2261 = 0;
        this.member1577;
        this.member2262;
        this.member2263 = 0;
        this.member1573 = {};
        this.member25(q);
        this.member2264 = Class37.create();
        member46(this, Class73, Class4.member62);
    };
    member45(Class73, j);
    j.prototype.member25 = function (q) {
        if (q.member2239 !== undefined && q.member2240 !== undefined) {
            this.member433 = q.member433;
            this.member2239 = q.member2239;
            if (q.member1569 !== undefined) {
                this.member1569 = q.member1569;
            }
            this.member2247 = Class147.member1484(this.member2239.member2247);
            this.member2248 = Class147.member1484(this.member2239.member2248);
            this.member2249 = Class147.member1484(this.member2239.member2249);
            this.member2250 = Class147.member1484(this.member2239.member2250);
            this.member2251 = this.member2239.member2251;
            this.member2252 = Class147.member1484(this.member2239.member2252);
            this.member2253 = Class147.member1484(this.member2239.member2253);
            this.member2254 = this.member2239.member2254;
            this.member2240 = q.member2240;
            this.member2265();
            this.member2266();
        } else if (q.member433 !== undefined && q.member680 !== undefined) {
            this.member433 = q.member433;
            this.member2238 = q.member680.member2238;
            this.member2239 = q.member680.member2239;
            this.member1568 = q.member680.member1568;
            this.member1570 = q.member680.member1570;
            this.member1699 = q.member680.member1699;
            this.member1569 = Class151(q.member680.member1569);
            this.member2247 = Class147.member1484(this.member2239.member2247);
            this.member2248 = Class147.member1484(this.member2239.member2248);
            this.member2249 = Class147.member1484(this.member2239.member2249);
            this.member2250 = Class147.member1484(this.member2239.member2250);
            this.member2251 = this.member2239.member2251;
            this.member2252 = Class147.member1484(this.member2239.member2252);
            this.member2253 = Class147.member1484(this.member2239.member2253);
            this.member2254 = this.member2239.member2254;
            this.member2255 = true;
            this.member2265();
            this.member563();
        } else {
            throw new Error('1827 ');
        }
    };
    j.prototype.member2265 = function () {
        this.member2246 = [
            this.member2239.member2267 * Class137.member1304,
            this.member2239.member2268 * Class137.member1304
        ];
        this.member2245[0] = this.member2239.member2245 >> 24 & 255;
        this.member2245[1] = this.member2239.member2245 >> 16 & 255;
        this.member2245[2] = this.member2239.member2245 >> 8 & 255;
        this.member2245[3] = this.member2239.member2245 & 255;
        if (this.member2247 !== undefined || this.member2248 !== undefined) {
            var q = this.member1569.member1516();
            if (this.member2247 !== undefined && this.member2247.member1469() && Class154.member553()) {
                q = this.member1569.member1517();
            }
            if (q !== undefined) {
                if (this.member2247 !== undefined && this.member2247.member1361()) {
                    this.member2256 = true;
                }
                var r = this.member2247 !== undefined ? this.member2247.getSize() : this.member2248.getSize();
                this.member2257 = new Float32Array([
                    r * Class137.member1304,
                    this.member2247 !== undefined ? q.member1330(this.member2247.getID()) : -1,
                    this.member2248 !== undefined ? q.member1330(this.member2248.getID()) : -1,
                    this.member2239.member2269 / Class137.member1304
                ]);
            }
        }
        if (this.member2249 !== undefined || this.member2250 !== undefined) {
            var q = this.member1569.member1516();
            if (this.member2249 !== undefined && this.member2249.member1469() && Class154.member553()) {
                q = this.member1569.member1517();
            }
            if (q !== undefined) {
                if (this.member2249 !== undefined && this.member2249.member1361()) {
                    this.member2256 = true;
                }
                var r = this.member2247 !== undefined ? this.member2249.getSize() : this.member2250.getSize();
                this.member2258 = new Float32Array([
                    r * Class137.member1304,
                    this.member2249 !== undefined ? q.member1330(this.member2249.getID()) : -1,
                    this.member2250 !== undefined ? q.member1330(this.member2250.getID()) : -1,
                    this.member2239.member2270 / Class137.member1304
                ]);
            }
        }
        if (this.member2252 !== undefined) {
            var q = this.member1569.member1516();
            if (this.member2252.member1469() && Class154.member553()) {
                q = this.member1569.member1517();
            }
            if (q !== undefined) {
                this.member2259 = new Float32Array([
                    this.member2252.getSize() * Class137.member1304,
                    q.member1330(this.member2252.getID()),
                    -1,
                    1 / this.member2239.member2271 / Class137.member1304
                ]);
            }
        }
        if (this.member2253 !== undefined) {
            var q = this.member1569.member1516();
            if (this.member2253.member1469() && Class154.member553()) {
                q = this.member1569.member1517();
            }
            if (q !== undefined) {
                this.member2260 = new Float32Array([
                    this.member2253.getSize() * Class137.member1304,
                    q.member1330(this.member2253.getID()),
                    -1,
                    this.member2239.member2272 / Class137.member1304
                ]);
            }
        }
    };
    j.prototype.member2273 = function () {
        return this.member2239;
    };
    j.prototype.member2274 = function () {
        return this.member2255;
    };
    j.prototype.member2275 = function (s, u) {
        var r = this.member2276(s, u);
        this.member2277(r);
        var q = this.member2240(r[0], r[2]);
        var t = r[1] + this.member2239.member2278 - q;
        return t;
    };
    j.prototype.member2279 = function (q, x) {
        var s = q * this.member2239.member1592;
        var u = x * this.member2239.member1592;
        var r = this.member2239.width - s;
        var t = this.member2239.length - u;
        var v = s < u ? s : u;
        v = v < r ? v : r;
        v = v < t ? v : t;
        if (v < 0) {
            v = 0;
        }
        return v;
    };
    j.prototype.member2266 = function () {
        if (this.member1569 === null) {
            this.member1569 = Class150.member1512([
                this.member2239.member2247,
                this.member2239.member2248,
                this.member2239.member2249,
                this.member2239.member2250,
                this.member2239.member2252,
                this.member2239.member2253
            ]);
        }
        this.width = Math.floor(this.member2239.width / this.member2239.member1592) + 2;
        this.length = Math.floor(this.member2239.length / this.member2239.member1592) + 2;
        this.member1570 = new ArrayBuffer(this.width * this.length * i);
        this.member1577 = new Int16Array(this.member1570);
        this.member1699 = new ArrayBuffer(this.width * this.length * 2 * 3 * 2);
        this.member2262 = new Uint16Array(this.member1699);
        this.member2238 = false;
        if (this.member2239.member2280 !== 0) {
            for (var q = 0; q < this.width; ++q) {
                for (var y = 0; y < this.length; ++y) {
                    if (!this.member2238) {
                        this.member2238 |= this.member2275(q, y) >= 0;
                    }
                    this.member1604(q, y);
                    if (q < this.width - 1 && y < this.length - 1) {
                        this.member2262[this.member1568 * 3 + 0] = q * this.length + y;
                        this.member2262[this.member1568 * 3 + 1] = (q + 1) * this.length + y;
                        this.member2262[this.member1568 * 3 + 2] = q * this.length + y + 1;
                        this.member1568++;
                        this.member2262[this.member1568 * 3 + 0] = (q + 1) * this.length + y;
                        this.member2262[this.member1568 * 3 + 1] = (q + 1) * this.length + y + 1;
                        this.member2262[this.member1568 * 3 + 2] = q * this.length + y + 1;
                        this.member1568++;
                    }
                }
            }
        } else {
            var s = new ArrayBuffer(this.width * this.length * 2);
            var t = new Uint16Array(s);
            var v = new ArrayBuffer(this.width * this.length);
            for (var q = 0; q < this.width; ++q) {
                for (var y = 0; y < this.length; ++y) {
                    var z = this.member2275(q, y);
                    this.member2238 |= z >= 0;
                    var u = this.member2279(q, y);
                    var r = z < 0 || z <= this.member2239.member2281 * 8 || u <= this.member2239.member2282 * 1.5;
                    v[q * this.length + y] = !r;
                    t[q * this.length + y] = k;
                }
            }
            this.member2283(t, v, 0, this.width, 0, this.length);
        }
        if (this.member433 !== undefined) {
            this.member563();
        }
        this.member2255 = true;
    };
    j.prototype.member2283 = function (q, E, G, F, D, B) {
        if (F - G === 0 || B - D === 0) {
            return;
        }
        var t = new Array();
        var s = 1;
        t[0] = [
            G,
            F,
            D,
            B
        ];
        while (s > 0) {
            --s;
            G = t[s][0];
            F = t[s][1];
            D = t[s][2];
            B = t[s][3];
            var A = F - G;
            var v = B - D;
            var C;
            if (A > 1 && v > 1) {
                C = true;
                for (var z = G; C && z <= F; z++) {
                    if (z <= 0 || z >= this.width) {
                        C = false;
                        continue;
                    }
                    for (var r = D; r <= B; r++) {
                        if (r <= 0 || r >= this.length) {
                            C = false;
                            break;
                        }
                        if (!E[z * this.length + r]) {
                            C = false;
                            break;
                        }
                    }
                }
            } else {
                C = A === 1 && v === 1;
            }
            if (C) {
                this.member2284(q, G, D);
                this.member2284(q, F, D);
                this.member2284(q, G, B);
                this.member2284(q, F, B);
                this.member2262[this.member1568 * 3 + 0] = q[G * this.length + D];
                this.member2262[this.member1568 * 3 + 1] = q[F * this.length + D];
                this.member2262[this.member1568 * 3 + 2] = q[G * this.length + B];
                this.member1568++;
                this.member2262[this.member1568 * 3 + 0] = q[F * this.length + D];
                this.member2262[this.member1568 * 3 + 1] = q[F * this.length + B];
                this.member2262[this.member1568 * 3 + 2] = q[G * this.length + B];
                this.member1568++;
            } else {
                var y = Math.floor(A / 2);
                var u = Math.floor(v / 2);
                if (y > 0 && u > 0) {
                    t[s++] = [
                        G,
                        G + y,
                        D,
                        D + u
                    ];
                }
                if (F - y - G > 0 && u > 0) {
                    t[s++] = [
                        G + y,
                        F,
                        D,
                        D + u
                    ];
                }
                if (y > 0 && B - u - D > 0) {
                    t[s++] = [
                        G,
                        G + y,
                        D + u,
                        B
                    ];
                }
                if (F - y - G > 0 && B - u - D > 0) {
                    t[s++] = [
                        G + y,
                        F,
                        D + u,
                        B
                    ];
                }
            }
        }
    };
    j.prototype.member2284 = function (r, q, s) {
        if (r[q * this.length + s] === k) {
            r[q * this.length + s] = this.member2261 / i;
            this.member1604(q, s);
        }
    };
    j.prototype.member1604 = function (r, u) {
        var q = this.member2276(r, u);
        var s = this.member2277(q, d);
        this.member1577[this.member2261 / 2] = Math.round(q[0] / this.member2239.member1592);
        this.member2261 += 2;
        this.member1577[this.member2261 / 2] = q[1];
        this.member2261 += 2;
        this.member1577[this.member2261 / 2] = Math.round(q[2] / this.member2239.member1592);
        this.member2261 += 2;
        this.member1577[this.member2261 / 2] = s[1] - this.member2240(s[0], s[2]);
        this.member2261 += 2;
        var t = this.member2279(r, u);
        s = this.member2276(r, u + 1);
        this.member2277(s);
        this.member1577[this.member2261 / 2] = s[1];
        this.member2261 += 2;
        this.member1577[this.member2261 / 2] = s[1] - this.member2240(s[0], s[2]);
        this.member2261 += 2;
        s = this.member2276(r + 1, u);
        this.member2277(s);
        this.member1577[this.member2261 / 2] = s[1];
        this.member2261 += 2;
        this.member1577[this.member2261 / 2] = s[1] - this.member2240(s[0], s[2]);
        this.member2261 += 2;
        s = this.member2276(r, u - 1);
        this.member2277(s);
        this.member1577[this.member2261 / 2] = s[1];
        this.member2261 += 2;
        this.member1577[this.member2261 / 2] = s[1] - this.member2240(s[0], s[2]);
        this.member2261 += 2;
        s = this.member2276(r - 1, u);
        this.member2277(s);
        this.member1577[this.member2261 / 2] = s[1];
        this.member2261 += 2;
        this.member1577[this.member2261 / 2] = s[1] - this.member2240(s[0], s[2]);
        this.member2261 += 2;
        this.member1577[this.member2261 / 2] = t;
        this.member2261 += 2;
        this.member2261 += 2;
    };
    j.prototype.member2276 = function (q, t) {
        var r = this.member2239.width / 2;
        r = Math.floor(r / this.member2239.member1592) * this.member2239.member1592;
        var s = this.member2239.length / 2;
        s = Math.floor(s / this.member2239.member1592) * this.member2239.member1592;
        m[0] = q * this.member2239.member1592 - r;
        m[2] = t * this.member2239.member1592 - s;
        m[1] = 0;
        return m;
    };
    j.prototype.member2277 = function (q, r) {
        if (r === undefined) {
            r = q;
        }
        Class140.member318(this.member2239.member763, q, r);
        r[1] += this.member2239.member1593[1];
        return r;
    };
    j.prototype.member563 = function () {
        this.member1571 = this.member1570.byteLength;
        this.member1701 = this.member1699.byteLength;
        this.member1572 = this.member433.gl.createBuffer();
        this.member433.gl.bindBuffer(this.member433.gl.ARRAY_BUFFER, this.member1572);
        this.member433.gl.bufferData(this.member433.gl.ARRAY_BUFFER, this.member1570, this.member433.gl.STATIC_DRAW);
        this.member1570 = null;
        this.member1700 = this.member433.gl.createBuffer();
        this.member433.gl.bindBuffer(this.member433.gl.ELEMENT_ARRAY_BUFFER, this.member1700);
        this.member433.gl.bufferData(this.member433.gl.ELEMENT_ARRAY_BUFFER, this.member1699, this.member433.gl.STATIC_DRAW);
        this.member1699 = null;
        this.member1567 = true;
    };
    var o = function () {
        member46(this, Class99);
        this.member862 = Class63.member391.id;
        this.member2285 = undefined;
        this.member1608 = undefined;
        this.member2286 = undefined;
        this.member1938 = undefined;
        this.member441 = undefined;
        this.member1610 = undefined;
        this.member1611 = undefined;
        this.member1612 = undefined;
    };
    member45(Class99, o);
    o.prototype.member867 = function () {
        this.member1608.member990(this.member2286);
        this.member2285.member1630(this.member1938, this.member441, this.member1610, this.member1611, this.member1612);
    };
    var h = function () {
        return new o();
    };
    j.prototype.member952 = function (q, A, y, v, u, t) {
        if (this.member2255 && !this.member2238) {
            return;
        }
        var x = Class83.member619(Class82.member391, h);
        var s = Class132.member1266();
        var z = s.member941(Class72.POINTLIGHT);
        var r = z.member987();
        x.member863 = q.member863;
        x.member2285 = this;
        x.member1608 = z;
        x.member2286 = r;
        x.member1938 = A;
        x.member441 = y;
        x.member1610 = v;
        x.member1611 = u;
        x.member1612 = t;
        q.append(x);
    };
    j.prototype.member1630 = function (t, K, J, G, F) {
        var A = this.member433.gl;
        if (!this.member2255) {
            this.member2266();
        }
        if (!this.member2255) {
            return;
        }
        if (!this.member2238) {
            return;
        }
        var C = Class132.member1266();
        var z = C.member1025(Class72.member499);
        var u = C.member522(Class72.member499);
        var v = C.member522(Class72.member96);
        var B = C.member1020();
        if (u) {
            return;
        }
        if (v) {
            return;
        }
        if (Class130.member1194()) {
            return;
        }
        this.member433.member590(true);
        c.member301();
        c.enable(Class5.member89);
        c.enable(Class5.member90);
        c.enable(Class5.member93);
        if (this.member2256) {
            c.enable(Class5.member124);
        }
        if (this.member1569.member1531()) {
            c.enable(Class5.member94);
        }
        if (C.member1025(Class72.member118)) {
            c.enable(Class5.member118);
        }
        if (C.member1025(Class72.member500)) {
            c.enable(Class5.member100);
        }
        if (C.member1025(Class72.member499)) {
            c.enable(Class5.member95);
            var E = C.member941(Class72.member499);
            Class104.member894(c, E.member967());
        }
        if (Class130.member1020() && B) {
            c.enable(Class5.member112);
            c.enable(Class5.member113);
        }
        c.enable(Class5.member103);
        var y = Class68.member421(Class63.member391.id, c);
        var I = y.member445();
        var D = this.member433.member1190();
        var x = this.member1573[I];
        Class68.member483(y, D === undefined || x === undefined);
        if (x !== undefined) {
            D.bindVertexArrayOES(x);
        } else {
            if (D !== undefined) {
                x = this.member1573[I] = D.createVertexArrayOES();
                D.bindVertexArrayOES(x);
                A.enableVertexAttribArray(y.member459(Class7.member262.id));
                A.enableVertexAttribArray(y.member459(Class7.member275.id));
                A.enableVertexAttribArray(y.member459(Class7.member276.id));
                A.enableVertexAttribArray(y.member459(Class7.member277.id));
            }
            A.bindBuffer(A.ARRAY_BUFFER, this.member1572);
            A.bindBuffer(A.ELEMENT_ARRAY_BUFFER, this.member1700);
            A.vertexAttribPointer(y.member459(Class7.member262.id), 4, A.SHORT, false, i, 0);
            A.vertexAttribPointer(y.member459(Class7.member275.id), 4, A.SHORT, false, i, 8);
            A.vertexAttribPointer(y.member459(Class7.member276.id), 4, A.SHORT, false, i, 16);
            A.vertexAttribPointer(y.member459(Class7.member277.id), 1, A.SHORT, false, i, 24);
        }
        K.member1631(y);
        y.member467(Class7.member144, J);
        Class140.member334(this.member2239.member763, this.member2264);
        y.member467(Class7.member148, this.member2264);
        y.member467(Class7.member255, this.member2239.member1593[1]);
        if (I.member291(Class5.member93)) {
            Class150.member1515(this.member1569, y);
        }
        if (I.member291(Class5.member88) || I.member291(Class5.member89)) {
            C.member943(y);
            if (I.member291(Class5.member90)) {
                y.member467(Class7.member153, this.member2239.member1928);
            }
        }
        if (F !== undefined) {
            y.member467(Class7.member230, F);
        } else {
            y.member467(Class7.member230, n);
        }
        if (I.member291(Class5.member95)) {
            var q = C.member941(Class72.member499);
            y.member467(Class7.member165, q.member977());
            q.member982(y);
        }
        if (I.member291(Class5.member112)) {
            var s = Class130.member1179();
            var r = Class130.member1180();
            g[0] = s / this.member433.member2287 / s;
            g[1] = r / this.member433.member2288 / r;
            y.member467(Class7.member208, g);
            Class130.member1196(y);
            Class130.member1197(y);
        }
        if (I.member291(Class5.member118)) {
            C.member1026(Class72.member118, y);
        }
        if (I.member291(Class5.member103)) {
            C.member1026(Class72.member501, y);
        }
        if (I.member291(Class5.member100)) {
            C.member1026(Class72.member500, y);
        }
        y.member467(Class7.member226, t);
        y.member467(Class7.member231, this.member2246);
        y.member467(Class7.member232, this.member2239.member2280);
        y.member467(Class7.member243, this.member2239.member2289 / (Math.PI * 2));
        y.member467(Class7.member233, this.member2239.member1591 / 256);
        y.member467(Class7.member234, this.member2239.member1592);
        y.member467(Class7.member238, this.member2239.member2282);
        y.member467(Class7.member239, this.member2239.member2281);
        y.member467(Class7.member244, this.member2239.member2290);
        y.member467(Class7.member240, this.member2239.member2291);
        y.member467(Class7.member241, this.member2245);
        if (I.member291(Class5.member112) || I.member291(Class5.member113)) {
            y.member467(Class7.member245, this.member2239.member2292);
        } else {
            y.member467(Class7.member246, this.member2239.member2292);
        }
        y.member467(Class7.member253, this.member2239.member2278);
        y.member467(Class7.member251, this.member2239.member2293);
        y.member467(Class7.member252, this.member2239.member1372);
        if (I.member291(Class5.member112)) {
            var H = 1 - Math.abs(Class130.member1182() - this.member2239.member1593[1]) / 256;
            if (H < 0) {
                H = 0;
            } else if (H > 0) {
                H = 1;
            }
            y.member467(Class7.member254, H * Class130.member1184());
        }
        y.member467(Class7.member242, this.member2239.member2294);
        y.member467(Class7.member247, this.member2239.member2295);
        y.member467(Class7.member248, this.member2296(t));
        this.member1675[0] = (this.member2239.member1675 >> 16 & 255) / 255;
        this.member1675[1] = (this.member2239.member1675 >> 8 & 255) / 255;
        this.member1675[2] = (this.member2239.member1675 & 255) / 255;
        y.member467(Class7.member210, this.member1675);
        y.member467(Class7.member211, this.member2239.member1673);
        y.member467(Class7.member212, this.member2239.member1674);
        if (this.member2257 !== undefined) {
            y.member467(Class7.member235, this.member2257);
        }
        if (this.member2258 !== undefined) {
            y.member467(Class7.member236, this.member2258);
        }
        if (this.member2259 !== undefined) {
            if (this.member2239.member2271 !== 0) {
                this.member2259[3] = 1 / this.member2239.member2271;
            }
            y.member467(Class7.member237, this.member2259);
        }
        if (this.member2260 !== undefined) {
            y.member467(Class7.member249, this.member2260);
        }
        y.member467(Class7.member147, this.member2239.member2297);
        this.member433.member942();
        A.drawElements(this.member433.member1198, this.member1568 * 3, A.UNSIGNED_SHORT, 0);
        this.member433.member944();
        if (D !== undefined) {
            D.bindVertexArrayOES(null);
        }
        this.member433.member1632();
        this.member433.member1633(this.member1568);
        this.member433.member587();
    };
    j.prototype.member2296 = function (r) {
        if (this.member2251 === 0 || this.flowMaterial2 === undefined) {
            return 0;
        }
        var q = r % (2 * this.member2251);
        if (q > this.member2251) {
            q = 2 * this.member2251 - q;
        }
        return q / this.member2251;
    };
    j.prototype.member681 = function () {
        return {
            member2238: this.member2238,
            member2239: this.member2239,
            member1568: this.member1568,
            member1570: this.member1570,
            member1699: this.member1699,
            member1569: this.member1569.member681(false)
        };
    };
    j.prototype.member512 = function () {
        if (this.member433 !== undefined) {
            var r = this.member433.member1190();
            if (r !== undefined) {
                for (var q in this.member1573) {
                    r.deleteVertexArrayOES(this.member1573[q]);
                }
                this.member1573 = {};
            }
        }
        if (this.member1569 !== null) {
            this.member1569.member512();
        }
        if (this.member1567) {
            this.member433.gl.deleteBuffer(this.member1572);
            this.member1572 = null;
            this.member433.gl.deleteBuffer(this.member1700);
            this.member1700 = null;
        } else {
            this.member1570 = null;
            this.member1699 = null;
        }
    };
    j.prototype.member85 = function () {
        if (this.member1567) {
            var q = 0;
            q += this.member1571;
            q += this.member1701;
            return q;
        } else {
            return 0;
        }
    };
    return function (q) {
        return new j(q);
    };
}();