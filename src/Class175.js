import { Class29 } from 'Class29.js';
import { Class50 } from 'Class50.js';
import { Class144 } from 'Class144.js';
import { Class133 } from 'Class133.js';
import { Class147 } from 'Class147.js';
import { Class154 } from 'Class154.js';
import { Class145 } from 'Class145.js';
import { Class41 } from 'Class41.js';
import { Class49 } from 'Class49.js';
import { Class140 } from 'Class140.js';
import { Class99 } from 'Class99.js';
import { Class110 } from 'Class110.js';
import { Class5 } from 'Class5.js';
import { Class72 } from 'Class72.js';
import { Class68 } from 'Class68.js';
import { Class83 } from 'Class83.js';
import { Class82 } from 'Class82.js';
import { Class132 } from 'Class132.js';
import { Class7 } from 'Class7.js';
import { Class130 } from 'Class130.js';
import { Class150 } from 'Class150.js';
export var Class175 = function () {
    var e = new Float32Array(3);
    var k = new Float32Array(4);
    var m = Class29();
    var b = new Float32Array(Class50.member361 * 12);
    for (var c = 0; c < 12; c++) {
        b[c] = Class50.member379[c];
    }
    var a = new Float32Array(Class50.member362 * 4);
    for (var c = 0; c < 4; c++) {
        a[c] = Class50.member365[c];
    }
    var g = 0;
    g += 3 * 4;
    g += 2 * 2;
    g += 1 * 4;
    g += 4 * 1;
    g += 2 * 4;
    g += 4 * 2;
    g += 4 * 1;
    g += 1 * 1;
    g += 2 * 1;
    g += 1;
    var i = function (r, q, s, t, j, o, u) {
        this.member1568 = 0;
        this.member1901 = new Array(0);
        this.member1902 = 0;
        this.member1903 = new Array(0);
        this.member1691 = 1;
        this.member1692 = new Array(0);
        this.member1904 = undefined;
        this.member1905 = 1;
        this.member1906 = new Array(0);
        this.member1338;
        this.member1381;
        this.member1380;
        this.member1907;
        this.member1367;
        this.member1366;
        this.member1570;
        this.member1572;
        this.member1571;
        this.member1699;
        this.member1700;
        this.member1701;
        this.member1573 = {};
        this.member1702 = undefined;
        this.member1703 = undefined;
        this.member25(r, q, s, t, j, o, u);
    };
    i.prototype.member25 = function (t, u, x, s, o, v, r) {
        if (t !== undefined) {
            if (x !== undefined) {
                this.member1338 = x;
            } else {
                this.member1338 = t.member1417();
            }
            this.member1381 = t.member1418();
            this.member1380 = t.member1416();
            this.member1907 = t.member1412() > 0;
            this.member1367 = t.member1466();
            this.member1366 = t.member1465();
        } else if (u !== undefined) {
            if (x !== undefined) {
                this.member1338 = x;
            }
            this.member1381 = 0;
            this.member1380 = Class144.member1448;
            this.member1907 = false;
            this.member1367 = false;
            this.member1366 = false;
        } else if (o !== undefined) {
            this.member1568 = o.member1568;
            this.member1902 = o.member1902;
            this.member1691 = o.member1691;
            this.member1692 = o.member1692;
            this.member1905 = o.member1905;
            this.member1906 = o.member1906;
            this.member1338 = o.member1338;
            this.member1381 = o.member1381;
            this.member1380 = o.member1380;
            this.member1907 = o.member1907;
            this.member1367 = o.member1367;
            this.member1366 = o.member1366;
            this.member1570 = o.member1570;
            this.member1571 = o.member1571;
            this.member1699 = o.member1699;
            this.member1701 = o.member1701;
            this.member1703 = o.member1703;
        } else if (r !== undefined) {
            this.member1568 = r.member608();
            this.member1902 = r.member608();
            this.member1691 = r.member608();
            this.member1692 = [];
            for (var q = 0; q < this.member1691 - 1; q++) {
                this.member1692[r.member608()] = r.member608();
            }
            this.member1905 = r.member608();
            this.member1906 = [];
            for (var q = 0; q < this.member1905 - 1; q++) {
                this.member1906[r.member608()] = r.member608();
            }
            this.member1338 = r.member609();
            this.member1381 = r.member609();
            this.member1380 = r.member609();
            this.member1697 = r.member609();
            this.member1698 = r.member609();
            this.member1907 = r.member609() === 1;
            this.member1367 = r.member609() === 1;
            this.member1366 = r.member609() === 1;
            var j = r.member608();
            if (j > 0) {
                this.member1703 = new Array(j);
                for (var q = 0; q < this.member1703.length; q++) {
                    this.member1703[q] = {
                        member1704: r.member1073(),
                        member1579: r.member1073(),
                        member1705: r.member1073()
                    };
                }
            }
            this.member1570 = new ArrayBuffer(r.member1073());
            r.member1092(this.member1570, 0, this.member1570.byteLength);
            this.member1699 = new ArrayBuffer(r.member1073());
            r.member1092(this.member1699, 0, this.member1699.byteLength);
        } else if (s !== undefined) {
            this.member1338 = s.member1417();
            this.member1381 = s.member1418();
            this.member1380 = s.member1416();
            this.member1907 = s.member1908();
            this.member1367 = s.member1466();
            this.member1366 = s.member1465();
            this.member1702 = new Array(0);
            this.member1708(s, v);
        } else {
            throw new Error('1820 ');
        }
    };
    i.prototype.member1868 = function () {
        return this.member1568;
    };
    i.prototype.member1909 = function (j) {
        return this.member1901[j];
    };
    i.prototype.member1910 = function () {
        return this.member1902;
    };
    i.prototype.member1417 = function () {
        return this.member1338;
    };
    i.prototype.member1418 = function () {
        return this.member1381;
    };
    i.prototype.member1416 = function () {
        return this.member1380;
    };
    i.prototype.member1908 = function () {
        return this.member1907;
    };
    i.prototype.member1466 = function () {
        return this.member1367;
    };
    i.prototype.member1465 = function () {
        return this.member1366;
    };
    i.prototype.member1710 = function () {
        return this.member1570;
    };
    i.prototype.member1711 = function () {
        return this.member1699;
    };
    i.prototype.member1708 = function (o, j) {
        this.member1568 += o.member1868();
        this.member1902 += o.member1910();
        this.member1702.push({
            member1911: o,
            member1704: j
        });
    };
    i.prototype.member681 = function (q, r) {
        var o = q ? this.member1570.slice(0) : this.member1570;
        var j = q ? this.member1699.slice(0) : this.member1699;
        if (r !== undefined) {
            r.push(o);
            r.push(j);
        }
        return {
            member1568: this.member1568,
            member1902: this.member1902,
            member1691: this.member1691,
            member1692: this.member1692,
            member1905: this.member1905,
            member1906: this.member1906,
            member1338: this.member1338,
            member1381: this.member1381,
            member1380: this.member1380,
            member1907: this.member1907,
            member1367: this.member1367,
            member1366: this.member1366,
            member1570: o,
            member1571: this.member1571,
            member1699: j,
            member1701: this.member1701,
            member1703: this.member1703
        };
    };
    i.prototype.member1318 = function (o) {
        o.member1054(this.member1568);
        o.member1054(this.member1902);
        o.member1054(this.member1691);
        for (var j = 0; j < this.member1692.length; j++) {
            if (this.member1692[j] !== undefined) {
                o.member1054(j);
                o.member1054(this.member1692[j]);
            }
        }
        o.member1054(this.member1905);
        for (var j = 0; j < this.member1906.length; j++) {
            if (this.member1906[j] !== undefined) {
                o.member1054(j);
                o.member1054(this.member1906[j]);
            }
        }
        o.member1051(this.member1338);
        o.member1051(this.member1381);
        o.member1051(this.member1380);
        o.member1051(this.member1697);
        o.member1051(this.member1698);
        o.member1051(this.member1907 ? 1 : 0);
        o.member1051(this.member1367 ? 1 : 0);
        o.member1051(this.member1366 ? 1 : 0);
        if (this.member1703 !== undefined) {
            o.member1054(this.member1703.length);
            for (var j = 0; j < this.member1703.length; j++) {
                o.member1056(this.member1703[j].member1704);
                o.member1056(this.member1703[j].member1579);
                o.member1056(this.member1703[j].member1705);
            }
        } else {
            o.member1054(0);
        }
        o.member1056(this.member1570.byteLength);
        o.member1067(this.member1570, 0, this.member1570.byteLength);
        o.member1056(this.member1699.byteLength);
        o.member1067(this.member1699, 0, this.member1699.byteLength);
    };
    i.prototype.member1713 = function () {
        if (this.member1691 > 1 || this.member1905 > 1) {
            return true;
        } else {
            return false;
        }
    };
    i.prototype.member1714 = function () {
        return this.member1571 + this.member1701;
    };
    i.prototype.member1715 = function (j) {
        if (this.member1338 !== j.member1417()) {
            return false;
        }
        if (this.member1380 !== j.member1416()) {
            return false;
        }
        if (this.member1907 !== j.member1908()) {
            return false;
        }
        if (this.member1367 !== j.member1466()) {
            return false;
        }
        if (this.member1366 !== j.member1465()) {
            return false;
        }
        if ((this.member1568 + j.member1868()) * 3 > 65535) {
            return false;
        }
        if (this.member1338 === Class133.member1269 && this.member1381 !== j.member1418()) {
            return false;
        }
        return true;
    };
    i.prototype.member1716 = function () {
        this.member1702.sort(n);
        this.member1570 = new ArrayBuffer(this.member1902 * g);
        var z = new Uint8Array(this.member1570);
        var q = 0;
        this.member1699 = new ArrayBuffer(this.member1568 * 3 * 2);
        var t = new Uint16Array(this.member1699);
        var r = 0;
        var u = r;
        var A = 0;
        for (var o = 0; o < this.member1702.length; o++) {
            var B = this.member1702[o].member1911;
            var y = this.member1702[o].member1704;
            var j = new Uint16Array(B.member1711());
            var v = q / g;
            if (y !== undefined && (o === 0 || this.member1702[o - 1].member1704 !== y)) {
                u = r;
                A = o;
            }
            for (var x = 0; x < j.length; x++) {
                t[r++] = j[x] + v;
            }
            if (y !== undefined && (o === this.member1702.length - 1 || this.member1702[o + 1].member1704 !== y)) {
                if (this.member1703 === undefined) {
                    this.member1703 = new Array(0);
                }
                this.member1703.push({
                    member1704: y,
                    member1579: u,
                    member1705: r
                });
            }
            var s = new Uint8Array(B.member1710());
            z.set(s, q);
            q += s.length;
        }
        this.member1691 = 1;
        this.member1692 = [];
        this.member1905 = 1;
        this.member1906 = [];
        this.member1702 = undefined;
    };
    var n = function (o, j) {
        if (o.member1704 === undefined) {
            return -1;
        }
        if (j.member1704 === undefined) {
            return 1;
        }
        return o.member1704 - j.member1704;
    };
    i.prototype.member1912 = function (j, o, q, t, r) {
        if (r !== undefined && this.member1338 !== r) {
            return false;
        }
        if (o !== undefined) {
            if (this.member1380 !== o.member1416()) {
                return false;
            }
            if (r === undefined && this.member1338 !== o.member1417()) {
                return false;
            }
            if (this.member1907 !== o.member1412() > 0) {
                return false;
            }
            if (this.member1367 !== o.member1466()) {
                return false;
            }
            if (this.member1366 !== o.member1465()) {
                return false;
            }
            if (this.member1338 === Class133.member1269 && this.member1381 !== o.member1418()) {
                return false;
            }
        }
        if (q !== undefined) {
            var s = 0;
            if (q[0] !== undefined && this.member1692[q[0]] === undefined) {
                s++;
            }
            if (q[1] !== undefined && this.member1692[q[1]] === undefined) {
                s++;
            }
            if (q[2] !== undefined && this.member1692[q[2]] === undefined) {
                s++;
            }
            if (this.member1691 + s > Class50.member361) {
                return false;
            }
        }
        if (t !== undefined) {
            if (this.member1906[t] === undefined && this.member1905 + 1 > Class50.member362) {
                return false;
            }
        }
        if ((this.member1568 + 1) * 3 > 65535) {
            return false;
        }
        this.member1901.push(j);
        this.member1568++;
        if (q !== undefined) {
            if (q[0] !== undefined && this.member1692[q[0]] === undefined) {
                this.member1692[q[0]] = this.member1691++;
            }
            if (q[1] !== undefined && this.member1692[q[1]] === undefined) {
                this.member1692[q[1]] = this.member1691++;
            }
            if (q[2] !== undefined && this.member1692[q[2]] === undefined) {
                this.member1692[q[2]] = this.member1691++;
            }
        }
        if (t !== undefined) {
            if (this.member1906[t] === undefined) {
                this.member1906[t] = this.member1905++;
            }
        }
        return true;
    };
    i.prototype.member1913 = function (j) {
        if (j.member1891()) {
            this.member1901.sort(function (o, q) {
                return j.member1914(o) - j.member1914(q);
            });
        }
    };
    i.prototype.member1915 = function (aa, t, V, H) {
        var M = this.member1901.length * 3;
        this.member1699 = new ArrayBuffer(M * 2);
        var N = new Uint16Array(this.member1699);
        var Z = new Float32Array(6);
        for (var W = 0; W < this.member1901.length; W++) {
            var Q = this.member1901[W];
            var K = aa.member1890(Q);
            var J = aa.member1875(Q);
            var s;
            var r = 0;
            var q = 0;
            var A = 0;
            var z = 0;
            var v = 0;
            if (J !== undefined) {
                var G = Class147.member1484(J);
                if (G !== undefined) {
                    r = G.member1404();
                    q = G.member1405();
                    if (H !== undefined) {
                        if (G.member1361()) {
                            if (G.member1469() && Class154.member553()) {
                                A = H.member1517().member1330(J);
                                s = H.member1517().member1331(J);
                                z = 1;
                            } else {
                                A = H.member1516().member1330(J);
                                s = H.member1516().member1331(J);
                            }
                        }
                        if (G.member1362()) {
                            v = H.member1516().member1330(J);
                            if (s === undefined) {
                                s = H.member1516().member1331(J);
                            }
                        }
                    }
                }
            } else {
                G = undefined;
            }
            if (s === undefined) {
                s = 64;
            }
            var P = A !== 0 || v !== 0;
            var y;
            if (aa.member1889(Q)) {
                y = 0;
            } else {
                y = aa.member1887(Q, G);
            }
            var Y = aa.member1888(Q);
            t[Q] = aa.member1870(Q);
            aa.member1871(Q, Z);
            var F = aa.member1723(Q);
            var E = 0, D = 0, C = 0, B = 0;
            var R = 0;
            if (G !== undefined) {
                E = G.member1419() === Class145.member287 || G.member1419() === Class145.member1454 ? 1 : 0;
                C = G.member1419() === Class145.member288 ? 1 : 0;
                D = G.member1420() === Class145.member287 || G.member1420() === Class145.member1454 ? 1 : 0;
                B = G.member1420() === Class145.member288 ? 1 : 0;
                R = G.member1412();
            }
            for (var O = 0; O < 3; O++) {
                var T = aa.member1869(Q, O);
                if (V[T] === undefined) {
                    V[T] = {
                        member1916: Class41.create(t[Q]),
                        member1917: 1
                    };
                } else {
                    Class41.add(V[T].member1916, t[Q]);
                    V[T].member1917++;
                }
                var j = aa.member1865(T);
                var U = 0.01, S = 0.01;
                if (H !== undefined && P) {
                    U = Z[O];
                    S = Z[O + 3];
                }
                var o = undefined;
                if (Y === true) {
                    o = Q;
                }
                var L = undefined;
                var I = this.member1903[T];
                var X = false;
                if (I === undefined) {
                    this.member1903[T] = I = new Array(0);
                    L = this.member1902++;
                } else {
                    for (var ab = 0; ab < I.length; ab++) {
                        var x = I[ab];
                        if (x.member1918 === K && x.member1919 === J && x.member1920 === E && x.member1921 === D && x.member1922 === C && x.member1923 === B && x.u === U && x.member1873 === S && x.member1924 === y && x.member1925 === F && x.member1926 === o && x.member1927 === j && x.member1928 === R) {
                            L = x.member1929;
                            X = true;
                            break;
                        }
                    }
                    if (!X) {
                        L = this.member1902++;
                    }
                }
                if (!X) {
                    I.push({
                        member1929: L,
                        member1918: K,
                        member1919: J,
                        member1924: y,
                        member1925: F,
                        u: U,
                        member1873: S,
                        member1920: E,
                        member1921: D,
                        member1922: C,
                        member1923: B,
                        member1930: A,
                        member1931: z,
                        member1932: v,
                        member1933: s,
                        member1934: r,
                        member1935: q,
                        member1926: o,
                        member1927: j,
                        member1928: R
                    });
                }
                N[W * 3 + O] = L;
            }
        }
    };
    i.prototype.member1718 = function (D, I, L, H, G) {
        this.member1570 = new ArrayBuffer(this.member1902 * g);
        var u = new Float32Array(this.member1570);
        var C = new Uint16Array(this.member1570);
        var t = new Int16Array(this.member1570);
        var q = new Uint8Array(this.member1570);
        for (var K = 0; K < this.member1903.length; K++) {
            var J = this.member1903[K];
            if (J === undefined) {
                continue;
            }
            for (var z = 0; z < J.length; z++) {
                var j = J[z];
                var o = j.member1929 * g;
                var y = o / 4;
                var x = D.member1862(K);
                u[y++] = x;
                var v = D.member1863(K);
                u[y++] = v;
                var s = D.member1864(K);
                u[y++] = s;
                var r;
                if (j.member1926 > -1) {
                    r = L[j.member1926];
                } else {
                    r = I[K].member1916;
                }
                this.member1936(C, 2 * y++, r[0], r[1], r[2]);
                u[y++] = j.member1928;
                o = 4 * y++;
                var F;
                if (j.member1924 !== undefined) {
                    F = j.member1924;
                } else {
                    F = j.member1927;
                }
                q[o++] = F >> 24 & 255;
                q[o++] = F >> 16 & 255;
                q[o++] = F >> 8 & 255;
                q[o++] = F & 255;
                u[y++] = j.u;
                u[y++] = j.member1873;
                var E = y * 2;
                C[E++] = j.member1930;
                C[E++] = j.member1933;
                var B = j.member1934 * 8192;
                B += 32768;
                var A = j.member1935 * 8192;
                A += 32768;
                C[E++] = B;
                C[E++] = A;
                o = E * 2;
                q[o++] = j.member1920;
                q[o++] = j.member1921;
                q[o++] = j.member1922;
                q[o++] = j.member1923;
                q[o++] = j.member1931;
                if (D.member1722(K) !== undefined) {
                    q[o++] = this.member1692[D.member1722(K)];
                } else {
                    q[o++] = 0;
                }
                if (j.member1925 !== undefined) {
                    q[o++] = this.member1906[j.member1925];
                } else {
                    q[o++] = 0;
                }
                o++;
                if (o % g !== 0) {
                    throw new Error('1821 ');
                }
                if (x < H[0]) {
                    H[0] = x;
                }
                if (x > G[0]) {
                    G[0] = x;
                }
                if (v < H[1]) {
                    H[1] = v;
                }
                if (v > G[1]) {
                    G[1] = v;
                }
                if (s < H[2]) {
                    H[2] = s;
                }
                if (s > G[2]) {
                    G[2] = s;
                }
            }
        }
        u = undefined;
        C = undefined;
        t = undefined;
        q = undefined;
        this.member1901 = undefined;
        this.member1903 = undefined;
    };
    i.prototype.member1936 = function (x, s, t, r, q) {
        var o = Math.sqrt(t * t + r * r + q * q);
        var j = Math.sqrt(q * 8 / o + 8);
        var v = t / (o * j) + 0.5;
        var u = r / (o * j) + 0.5;
        x[s++] = v * 65535;
        x[s++] = u * 65535;
    };
    i.prototype.member563 = function (o) {
        var j = o.gl;
        this.member1572 = j.createBuffer();
        j.bindBuffer(j.ARRAY_BUFFER, this.member1572);
        j.bufferData(j.ARRAY_BUFFER, this.member1570, j.DYNAMIC_DRAW);
        this.member1700 = j.createBuffer();
        j.bindBuffer(j.ELEMENT_ARRAY_BUFFER, this.member1700);
        j.bufferData(j.ELEMENT_ARRAY_BUFFER, this.member1699, j.DYNAMIC_DRAW);
        this.member1571 = this.member1570.byteLength;
        this.member1570 = undefined;
        this.member1701 = this.member1699.byteLength;
        this.member1699 = undefined;
    };
    i.prototype.member512 = function (q) {
        if (q !== undefined) {
            var o = q.member1190();
            if (o !== undefined) {
                for (var j in this.member1573) {
                    o.deleteVertexArrayOES(this.member1573[j]);
                }
                this.member1573 = {};
            }
        }
        if (this.member1570 !== undefined) {
            this.member1570 = undefined;
        }
        if (this.member1572 !== undefined) {
            q.gl.deleteBuffer(this.member1572);
            this.member1572 = undefined;
        }
        if (this.member1699 !== undefined) {
            this.member1699 = undefined;
        }
        if (this.member1700 !== undefined) {
            q.gl.deleteBuffer(this.member1700);
            this.member1700 = undefined;
        }
    };
    i.prototype.transform = function (o) {
        var r = g / 4;
        var j = new Float32Array(this.member1570);
        for (var q = 0; q < this.member1902; q++) {
            e[0] = j[q * r + 0];
            e[1] = j[q * r + 1];
            e[2] = j[q * r + 2];
            Class49.member318(o, e);
            j[q * r + 0] = e[0];
            j[q * r + 1] = e[1];
            j[q * r + 2] = e[2];
        }
    };
    i.prototype.translate = function (j) {
        var r = g / 4;
        var o = new Float32Array(this.member1570);
        for (var q = 0; q < this.member1902; q++) {
            o[q * r + 0] += j[0];
            o[q * r + 1] += j[1];
            o[q * r + 2] += j[2];
        }
    };
    i.prototype.rotate = function (r, x) {
        var v = g / 4;
        var u = g / 2;
        var j = new Float32Array(this.member1570);
        var t;
        if (x) {
            t = new Uint16Array(this.member1570);
        }
        for (var q = 0; q < this.member1902; q++) {
            e[0] = j[q * v + 0];
            e[1] = j[q * v + 1];
            e[2] = j[q * v + 2];
            Class140.member318(r, e);
            j[q * v + 0] = e[0];
            j[q * v + 1] = e[1];
            j[q * v + 2] = e[2];
            if (x) {
                e[0] = t[q * u + 6] / 16384 - 2;
                e[1] = t[q * u + 7] / 16384 - 2;
                e[2] = 0;
                var o = Class41.member327(e, e);
                var s = Math.sqrt(1 - o / 4);
                e[0] *= s;
                e[1] *= s;
                e[2] = 1 - o / 2;
                Class140.member318(r, e);
                this.member1936(t, q * u + 6, e[0], e[1], e[2]);
            }
        }
    };
    i.prototype.member1668 = function (r, y) {
        var x = g / 4;
        var v = g / 2;
        var j = new Float32Array(this.member1570);
        var u;
        if (y) {
            u = new Uint16Array(this.member1570);
        }
        for (var s = 0; s < this.member1902; s++) {
            e[0] = j[s * x + 0];
            e[2] = j[s * x + 2];
            if (r == 1) {
                j[s * x + 0] = e[2];
                j[s * x + 2] = -e[0];
            } else if (r == 2) {
                j[s * x + 0] = -e[0];
                j[s * x + 2] = -e[2];
            } else if (r == 3) {
                j[s * x + 0] = -e[2];
                j[s * x + 2] = e[0];
            }
            if (y) {
                e[0] = u[s * v + 6] / 16384 - 2;
                e[1] = u[s * v + 7] / 16384 - 2;
                e[2] = 0;
                var o = Class41.member327(e, e);
                var t = Math.sqrt(1 - o / 4);
                e[0] *= t;
                e[1] *= t;
                e[2] = 1 - o / 2;
                if (r == 1) {
                    var q = e[2];
                    e[2] = -e[0];
                    e[0] = q;
                } else if (r == 2) {
                    e[0] = -e[0];
                    e[2] = -e[2];
                } else if (r == 3) {
                    var q = -e[2];
                    e[2] = e[0];
                    e[0] = q;
                }
                this.member1936(u, s * v + 6, e[0], e[1], e[2]);
            }
        }
    };
    i.prototype.member1725 = function (s, o, t, q, r, u, x) {
        var y = g / 4;
        var j = new Float32Array(this.member1570);
        for (var v = 0; v < this.member1902; v++) {
            j[v * y + 1] = x(s, o, t, q, r, u, j[v * y + 0], j[v * y + 1], j[v * y + 2]);
        }
    };
    i.prototype.member1726 = function (v) {
        var o = g / 2;
        var r = new Uint8Array(this.member1570);
        var j = new Uint16Array(this.member1570);
        for (var u = 0; u < this.member1902; u++) {
            var t = j[u * o + 16];
            var q = r[u * g + 44] === 1;
            var s;
            if (t === 0) {
                s = 0;
            } else if (!q) {
                s = v.member1520[t];
            } else {
                s = v.member1521[t];
            }
            j[u * o + 16] = s;
        }
    };
    var h = function () {
        member46(this, Class99);
        this.member1911 = undefined;
        this.member1608 = undefined;
        this.member1727 = undefined;
        this.member1616 = undefined;
        this.member1937 = undefined;
        this.member433 = undefined;
        this.member950 = undefined;
        this.member424 = undefined;
        this.member1381 = undefined;
        this.member441 = undefined;
        this.member1610 = undefined;
        this.member1611 = undefined;
        this.member1569 = undefined;
        this.member1612 = undefined;
        this.member1938 = undefined;
        this.member1728 = undefined;
        this.member1729 = undefined;
    };
    member45(Class99, h);
    h.prototype.member867 = function () {
        this.member1608.member990(this.member1727);
        this.member1911.member1618(this.member1616, this.member1937, this.member433, this.member950, this.member424, this.member425, this.member1381, this.member441, this.member1610, this.member1611, this.member1569, this.member1612, this.member1938, this.member1728, this.member1729);
        this.member433.member587();
    };
    var d = function () {
        return new h();
    };
    i.prototype.member952 = function (r, z, C, E, o, K, J, I, F, G, u, L, B) {
        m.member301();
        o.member302(m);
        var x = false;
        var H = Class110.member925;
        if ((m.member291(Class5.member109) || m.member291(Class5.member93)) && (this.member1338 === Class133.member1270 || m.member291(Class5.member100) || G !== undefined && G[3] < 0 || L !== undefined && L.member1843())) {
            x = true;
            H = Class110.member926;
        }
        if (this.member1366 || !C.member1017()) {
            m.disable(Class5.member88);
            m.disable(Class5.member89);
            m.disable(Class5.member90);
            m.disable(Class5.member91);
            m.disable(Class5.member95);
            m.enable(Class5.member92);
        }
        if ((m.member291(Class5.member109) || m.member291(Class5.member93)) && m.member308(Class5.member117) && m.member308(Class5.member110)) {
            if (this.member1907 === true) {
                if (m.member291(Class5.member89)) {
                    m.enable(Class5.member90);
                } else {
                    m.enable(Class5.member123);
                }
            }
            if (this.member1367) {
                if (C.member1025(Class72.member501)) {
                    m.enable(Class5.member103);
                } else {
                    m.enable(Class5.member123);
                }
            }
        }
        var t = this.member1381;
        if (this.member1338 === Class133.member1269) {
            m.enable(Class5.member121);
        } else if (x) {
            m.enable(Class5.member122);
        }
        var A = Class68.member421(E.id, m);
        var s = A.member445();
        var q = Class83.member619(Class82.member611, d);
        var v = Class132.member1266();
        var j = v.member941(Class72.member498);
        var D = j.member987();
        var y = -1;
        if (x) {
            y = r.member1939();
        }
        q.member864 = x;
        q.member865 = y;
        q.member862 = A.member444();
        q.member425 = s;
        q.member863 = r.member863;
        q.member1911 = this;
        q.member1608 = j;
        q.member1727 = D;
        q.member1616 = A;
        q.member1937 = x;
        q.member433 = z;
        q.priority = H;
        q.member950 = C;
        q.member424 = E;
        q.member1381 = t;
        q.member441 = K;
        q.member1610 = J;
        q.member1611 = I;
        q.member1569 = F;
        q.member1612 = G;
        q.member1938 = u;
        q.member1728 = L;
        q.member1729 = B;
        return q;
    };
    i.prototype.member1630 = function (o, x, t, j, z, y, u, s, r, E, D, q) {
        m.member301();
        j.member302(m);
        var C = false;
        if ((m.member291(Class5.member109) || m.member291(Class5.member93)) && (this.member1338 === Class133.member1270 || m.member291(Class5.member100) || r !== undefined && r[3] < 0 || D !== undefined && D.member1843())) {
            C = true;
        }
        if (this.member1366 || !x.member1017()) {
            m.disable(Class5.member88);
            m.disable(Class5.member89);
            m.disable(Class5.member90);
            m.disable(Class5.member91);
            m.disable(Class5.member95);
            m.enable(Class5.member92);
        }
        if ((m.member291(Class5.member109) || m.member291(Class5.member93)) && m.member308(Class5.member110) && m.member308(Class5.member117)) {
            if (this.member1907 === true) {
                if (m.member291(Class5.member89)) {
                    m.enable(Class5.member90);
                } else {
                    m.enable(Class5.member123);
                }
            }
            if (this.member1367) {
                if (x.member1025(Class72.member501)) {
                    m.enable(Class5.member103);
                } else {
                    m.enable(Class5.member123);
                }
            }
        }
        var B = this.member1381;
        if (this.member1338 === Class133.member1269) {
            m.enable(Class5.member121);
        } else if (C) {
            m.enable(Class5.member122);
        }
        var F = Class68.member421(t.id, m);
        var v = F.member445();
        var A = v.member303(m);
        this.member1618(F, C, o, x, t, v, B, z, y, u, s, r, E, D, q);
        return A;
    };
    i.prototype.member1940 = function () {
        var o = 0;
        for (var j = 0; j < this.member1692.length; j++) {
            if (this.member1692[j] !== undefined) {
                o++;
            }
        }
        this.member1904 = new Int32Array(o * 2);
        var q = 0;
        for (var j = 0; j < this.member1692.length; j++) {
            if (this.member1692[j] == undefined) {
                continue;
            }
            this.member1904[q++] = j;
            this.member1904[q++] = this.member1692[j];
        }
        this.member1692.member1904 = this.member1904;
    };
    i.prototype.member1941 = function (s, o, q, r) {
        if (o.member291(Class5.member96)) {
        } else if (o.member291(Class5.member117)) {
        } else if (o.member291(Class5.member110)) {
        } else {
            if (!o.member291(Class5.member103) && o.member291(Class5.member88) || o.member291(Class5.member89)) {
                q.member943(s);
            }
            if (o.member291(Class5.member91)) {
                q.member1026(Class72.member498, s);
            }
            if (o.member291(Class5.member95)) {
                var j = q.member941(Class72.member499);
                s.member467(Class7.member165, j.member977());
                j.member982(s);
            }
            if (o.member291(Class5.member100)) {
                q.member1026(Class72.member500, s);
            }
            if (o.member291(Class5.member101)) {
                q.member1026(Class72.member504, s);
            }
            if (o.member291(Class5.member118)) {
                q.member1026(Class72.member118, s);
            }
            if (o.member291(Class5.member102)) {
                q.member1026(Class72.member102, s);
            }
            if (o.member291(Class5.member103)) {
                q.member1026(Class72.member501, s);
            }
        }
        if (o.member291(Class5.member106)) {
            s.member467(Class7.member215, Class130.member1182());
        }
    };
    i.prototype.member1942 = function (v, j, u, t, r, s, o, q) {
        v.member467(Class7.member144, t);
        if (j.member291(Class5.member96) || !j.member291(Class5.member117) && !j.member291(Class5.member110) && (j.member291(Class5.member88) || j.member291(Class5.member89) || j.member291(Class5.member103))) {
            v.member467(Class7.member145, r);
        }
        if (j.member291(Class5.member93)) {
            Class150.member1515(u, v);
            v.member467(Class7.member160, s / 50);
        }
        if (j.member291(Class5.member109)) {
            if (o !== undefined) {
                v.member467(Class7.member230, o);
            } else {
                v.member467(Class7.member230, k);
            }
        }
    };
    i.prototype.member1943 = function (q, j, o) {
        if (j.member291(Class5.member104)) {
            if (this.member1692 !== undefined && this.member1904 === undefined) {
                this.member1940();
            }
            if (this.member1691 > 1) {
                o.member1733(this.member1692, -1, b);
            }
            q.member467(Class7.member161, b);
            if (j.member291(Class5.member109)) {
                if (this.member1905 > 1) {
                    o.member1734(this.member1906, a);
                }
                q.member467(Class7.member162, a);
            }
        }
    };
    i.prototype.member1944 = function (o, j, q) {
        if (j.member291(Class5.member121)) {
            o.member467(Class7.member219, Math.max(0, q - 0.5) / 255);
        }
    };
    i.prototype.member1618 = function (x, s, v, B, C, A, j, J, I, H, E, G, q, L, z) {
        var y = v.gl;
        v.member590(s);
        var D = v.member1190();
        var u = this.member1573[A];
        Class68.member483(x, D === undefined || u === undefined);
        if (u !== undefined) {
            D.bindVertexArrayOES(u);
        } else {
            if (D !== undefined) {
                u = this.member1573[A] = D.createVertexArrayOES();
                D.bindVertexArrayOES(u);
                v.member482();
                y.enableVertexAttribArray(x.member459(Class7.member262.id));
                if (A.member291(Class5.member96)) {
                    v.member482();
                    y.enableVertexAttribArray(x.member459(Class7.member264.id));
                } else if (A.member291(Class5.member117)) {
                } else if (A.member291(Class5.member110)) {
                } else if (A.member291(Class5.member88) || A.member291(Class5.member89) || A.member291(Class5.member103)) {
                    v.member482();
                    y.enableVertexAttribArray(x.member459(Class7.member264.id));
                    if (A.member291(Class5.member90)) {
                        v.member482();
                        y.enableVertexAttribArray(x.member459(Class7.member281.id));
                    }
                }
                if (A.member291(Class5.member109)) {
                    v.member482();
                    y.enableVertexAttribArray(x.member459(Class7.member265.id));
                }
                if (A.member291(Class5.member93)) {
                    v.member482();
                    v.member482();
                    v.member482();
                    y.enableVertexAttribArray(x.member459(Class7.member269.id));
                    y.enableVertexAttribArray(x.member459(Class7.member270.id));
                    y.enableVertexAttribArray(x.member459(Class7.member280.id));
                }
                if (A.member291(Class5.member94) || A.member291(Class5.member104)) {
                    v.member482();
                    y.enableVertexAttribArray(x.member459(Class7.member266.id));
                }
            }
            y.bindBuffer(y.ARRAY_BUFFER, this.member1572);
            y.bindBuffer(y.ELEMENT_ARRAY_BUFFER, this.member1700);
            y.vertexAttribPointer(x.member459(Class7.member262.id), 3, y.FLOAT, false, g, 0);
            if (A.member291(Class5.member104)) {
                y.vertexAttribPointer(x.member459(Class7.member266.id), 4, y.UNSIGNED_BYTE, false, g, 44);
            }
            if (A.member291(Class5.member96)) {
                y.vertexAttribPointer(x.member459(Class7.member264.id), 2, y.UNSIGNED_SHORT, false, g, 12);
            } else if (A.member291(Class5.member117)) {
            } else if (A.member291(Class5.member110)) {
            } else if (A.member291(Class5.member88) || A.member291(Class5.member89) || A.member291(Class5.member103)) {
                y.vertexAttribPointer(x.member459(Class7.member264.id), 2, y.UNSIGNED_SHORT, false, g, 12);
                if (A.member291(Class5.member90)) {
                    y.vertexAttribPointer(x.member459(Class7.member281.id), 1, y.FLOAT, false, g, 16);
                }
            }
            if (A.member291(Class5.member109)) {
                y.vertexAttribPointer(x.member459(Class7.member265.id), 4, y.UNSIGNED_BYTE, true, g, 20);
            }
            if (A.member291(Class5.member93)) {
                y.vertexAttribPointer(x.member459(Class7.member269.id), 2, y.FLOAT, false, g, 24);
                y.vertexAttribPointer(x.member459(Class7.member270.id), 4, y.UNSIGNED_SHORT, false, g, 32);
                y.vertexAttribPointer(x.member459(Class7.member280.id), 4, y.UNSIGNED_BYTE, false, g, 40);
            }
            if (A.member291(Class5.member94) || A.member291(Class5.member104)) {
                y.vertexAttribPointer(x.member459(Class7.member266.id), 4, y.UNSIGNED_BYTE, false, g, 44);
            }
        }
        J.member1631(x, A);
        this.member1941(x, A, B, v.member1945());
        this.member1942(x, A, E, I, H, q, G);
        this.member1943(x, A, L);
        this.member1944(x, A, j);
        if (z !== undefined && this.member1703 !== undefined) {
            var t = 0;
            var o = 0;
            for (var K = 0; K < this.member1703.length; K++) {
                var F = this.member1703[K];
                var r = z[F.member1704] === 0;
                if (!r) {
                    if (o > 0) {
                        y.drawElements(v.member1198, F.member1579 - t, y.UNSIGNED_SHORT, t * 2);
                        v.member1632();
                        v.member1633((F.member1579 - t) / 3);
                    }
                    t = F.member1705;
                    o = 0;
                } else if (r) {
                    if (K === this.member1703.length - 1) {
                        y.drawElements(v.member1198, F.member1705 - t, y.UNSIGNED_SHORT, t * 2);
                        v.member1632();
                        v.member1633((F.member1705 - t) / 3);
                    } else {
                        o++;
                    }
                }
            }
        } else {
            y.drawElements(v.member1198, this.member1568 * 3, y.UNSIGNED_SHORT, 0);
            v.member1632();
            v.member1633(this.member1568);
        }
        if (D !== undefined) {
            D.bindVertexArrayOES(null);
        }
    };
    return function (r, q, s, t, j, o, u) {
        return new i(r, q, s, t, j, o, u);
    };
}();