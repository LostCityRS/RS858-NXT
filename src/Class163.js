import { Class50 } from 'Class50.js';
import { Class133 } from 'Class133.js';
import { Class145 } from 'Class145.js';
import { Class147 } from 'Class147.js';
import { Class154 } from 'Class154.js';
import { Class41 } from 'Class41.js';
import { Class49 } from 'Class49.js';
import { Class140 } from 'Class140.js';
import { Class99 } from 'Class99.js';
import { Class83 } from 'Class83.js';
import { Class82 } from 'Class82.js';
import { Class132 } from 'Class132.js';
import { Class72 } from 'Class72.js';
import { Class5 } from 'Class5.js';
import { Class68 } from 'Class68.js';
import { Class7 } from 'Class7.js';
import { Class150 } from 'Class150.js';
export var Class163 = function () {
    var h = new Float32Array(3);
    var m = new Float32Array(4);
    var d = new Float32Array(Class50.member361 * 12);
    for (var e = 0; e < 16; e++) {
        d[e] = Class50.member379[e];
    }
    var b = new Float32Array(Class50.member362 * 4);
    for (var e = 0; e < 4; e++) {
        b[e] = Class50.member365[e];
    }
    var k = new Float32Array(Class50.member363 * Class50.member366);
    for (var e = 0; e < Class50.member366; e++) {
        k[e] = Class50.member367[e];
    }
    var i = 0;
    i += 4 * 4;
    i += 4 * 1;
    i += 4 * 4;
    i += 4 * 1;
    i += 1 * 1;
    i += 3 * 1;
    i += 4 * 1;
    var c = function (q, r, j, o, s) {
        this.member1688 = false;
        this.member1689;
        this.member1690;
        this.member1691;
        this.member1692;
        this.member1693;
        this.member1694;
        this.member1695;
        this.member1696;
        this.member1338;
        this.member1381;
        this.member1380;
        this.member1697;
        this.member1698;
        this.member1570;
        this.member1572;
        this.member1571;
        this.member1699;
        this.member1700;
        this.member1701;
        this.member1702 = undefined;
        this.member1703 = undefined;
        this.member1573 = {};
        this.member25(q, r, j, o, s);
    };
    c.prototype.member25 = function (s, t, o, r, u) {
        if (s !== undefined) {
            this.member1689 = 0;
            this.member1690 = new Array(0);
            this.member1691 = 1;
            this.member1692 = [];
            this.member1693 = 1;
            this.member1694 = [];
            this.member1695 = 1;
            this.member1696 = [];
            this.member1338 = s.member1417();
            this.member1381 = s.member1418();
            this.member1380 = s.member1416();
            this.member1697 = s.member1419();
            this.member1698 = s.member1420();
        } else if (o !== undefined) {
            this.member1689 = o.member1689;
            this.member1691 = o.member1691;
            this.member1692 = o.member1692;
            this.member1693 = o.member1693;
            this.member1694 = o.member1694;
            this.member1695 = o.member1695;
            this.member1696 = o.member1696;
            this.member1338 = o.member1338;
            this.member1381 = o.member1381;
            this.member1380 = o.member1380;
            this.member1697 = o.member1697;
            this.member1698 = o.member1698;
            this.member1570 = o.member1570;
            this.member1571 = o.member1571;
            this.member1699 = o.member1699;
            this.member1701 = o.member1701;
            this.member1703 = o.member1703;
        } else if (u !== undefined) {
            this.member1689 = u.g2();
            this.member1691 = u.g2();
            this.member1692 = [];
            for (var j = 0; j < this.member1691 - 1; j++) {
                this.member1692[u.g2()] = u.g2();
            }
            this.member1693 = u.g2();
            this.member1694 = [];
            for (var j = 0; j < this.member1693 - 1; j++) {
                this.member1694[u.g2()] = u.g2();
            }
            this.member1695 = u.g2();
            this.member1696 = [];
            for (var j = 0; j < this.member1695 - 1; j++) {
                this.member1696[u.g2()] = u.g2();
            }
            this.member1338 = u.g1();
            this.member1381 = u.g1();
            this.member1380 = u.g1();
            this.member1697 = u.g1();
            this.member1698 = u.g1();
            var q = u.g2();
            if (q > 0) {
                this.member1703 = new Array(q);
                for (var j = 0; j < this.member1703.length; j++) {
                    this.member1703[j] = {
                        member1704: u.g4(),
                        member1579: u.g4(),
                        member1705: u.g4()
                    };
                }
            }
            this.member1570 = new ArrayBuffer(u.g4());
            u.gdata(this.member1570, 0, this.member1570.byteLength);
            this.member1699 = new ArrayBuffer(u.g4());
            u.gdata(this.member1699, 0, this.member1699.byteLength);
        } else if (t !== undefined) {
            this.member1689 = 0;
            this.member1690 = new Array(0);
            this.member1691 = 1;
            this.member1692 = [];
            this.member1693 = 1;
            this.member1694 = [];
            this.member1695 = 1;
            this.member1696 = [];
            this.member1338 = t.member1417();
            this.member1381 = t.member1418();
            this.member1380 = t.member1416();
            this.member1697 = t.member1706();
            this.member1698 = t.member1707();
            this.member1702 = new Array(0);
            this.member1708(t, r);
        } else {
            throw new Error('1053 ');
        }
    };
    c.prototype.member1709 = function () {
        return this.member1689;
    };
    c.prototype.member1417 = function () {
        return this.member1338;
    };
    c.prototype.member1418 = function () {
        return this.member1381;
    };
    c.prototype.member1416 = function () {
        return this.member1380;
    };
    c.prototype.member1706 = function () {
        return this.member1697;
    };
    c.prototype.member1707 = function () {
        return this.member1698;
    };
    c.prototype.member1710 = function () {
        return this.member1570;
    };
    c.prototype.member1711 = function () {
        return this.member1699;
    };
    c.prototype.member1708 = function (j, o) {
        this.member1689 += j.member1709();
        if (this.member1702 === undefined) {
            this.member1702 = new Array(0);
        }
        this.member1702.push({
            member1712: j,
            member1704: o
        });
    };
    c.prototype.member681 = function (q, r) {
        var o = q ? this.member1570.slice(0) : this.member1570;
        var j = q ? this.member1699.slice(0) : this.member1699;
        if (r !== undefined) {
            r.push(o);
            r.push(j);
        }
        return {
            member1689: this.member1689,
            member1691: this.member1691,
            member1692: this.member1692,
            member1693: this.member1693,
            member1694: this.member1694,
            member1695: this.member1695,
            member1696: this.member1696,
            member1338: this.member1338,
            member1381: this.member1381,
            member1380: this.member1380,
            member1697: this.member1697,
            member1698: this.member1698,
            member1570: o,
            member1571: this.member1571,
            member1699: j,
            member1701: this.member1701,
            member1703: this.member1703
        };
    };
    c.prototype.member1318 = function (o) {
        o.p2(this.member1689);
        o.p2(this.member1691);
        for (var j = 0; j < this.member1692.length; j++) {
            if (this.member1692[j] !== undefined) {
                o.p2(j);
                o.p2(this.member1692[j]);
            }
        }
        o.p2(this.member1693);
        for (var j = 0; j < this.member1694.length; j++) {
            if (this.member1694[j] !== undefined) {
                o.p2(j);
                o.p2(this.member1694[j]);
            }
        }
        o.p2(this.member1695);
        for (var j = 0; j < this.member1696.length; j++) {
            if (this.member1696[j] !== undefined) {
                o.p2(j);
                o.p2(this.member1696[j]);
            }
        }
        o.p1(this.member1338);
        o.p1(this.member1381);
        o.p1(this.member1380);
        o.p1(this.member1697);
        o.p1(this.member1698);
        if (this.member1703 !== undefined) {
            o.p2(this.member1703.length);
            for (var j = 0; j < this.member1703.length; j++) {
                o.p4(this.member1703[j].member1704);
                o.p4(this.member1703[j].member1579);
                o.p4(this.member1703[j].member1705);
            }
        } else {
            o.p2(0);
        }
        o.p4(this.member1570.byteLength);
        o.member1067(this.member1570, 0, this.member1570.byteLength);
        o.p4(this.member1699.byteLength);
        o.member1067(this.member1699, 0, this.member1699.byteLength);
    };
    c.prototype.member1713 = function () {
        if (this.member1691 > 1 || this.member1693 > 1 || this.member1695 > 1) {
            return true;
        } else {
            return false;
        }
    };
    c.prototype.member1714 = function () {
        return this.member1571 + this.member1701;
    };
    c.prototype.member1715 = function (j) {
        if (this.member1338 !== j.member1417()) {
            return false;
        }
        if (this.member1380 !== j.member1416()) {
            return false;
        }
        if (this.member1697 !== j.member1706()) {
            return false;
        }
        if (this.member1698 !== j.member1707()) {
            return false;
        }
        if ((this.member1689 + j.member1709()) * 6 > 65535) {
            return false;
        }
        if (this.member1338 === Class133.member1269 && this.member1381 !== j.member1418()) {
            return false;
        }
        return true;
    };
    c.prototype.member1716 = function () {
        this.member1702.sort(n);
        this.member1690 = new Array(this.member1689);
        this.member1570 = new ArrayBuffer(this.member1689 * 4 * i);
        var z = new Uint8Array(this.member1570);
        var q = 0;
        this.member1699 = new ArrayBuffer(this.member1689 * 6 * 2);
        var t = new Uint16Array(this.member1699);
        var r = 0;
        var u = r;
        var A = 0;
        for (var o = 0; o < this.member1702.length; o++) {
            var B = this.member1702[o].member1712;
            var y = this.member1702[o].member1704;
            var j = new Uint16Array(B.member1711());
            var v = q / i;
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
            for (var x = 0; x < s.length; x++) {
                z[q++] = s[x];
            }
        }
        this.member1691 = 1;
        this.member1692 = [];
        this.member1693 = 1;
        this.member1694 = [];
        this.member1695 = 1;
        this.member1696 = [];
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
    c.prototype.member1717 = function (s, j, q, o, r) {
        if (j !== undefined) {
            if (this.member1380 !== j.member1416()) {
                return false;
            }
            if (this.member1338 !== j.member1417()) {
                return false;
            }
            if (this.member1338 === Class133.member1269 && this.member1381 !== j.member1418()) {
                return false;
            }
        }
        if (q !== undefined) {
            if (this.member1692[q] === undefined && this.member1691 + 1 > Class50.member361) {
                return false;
            }
        }
        if (o !== undefined) {
            if (this.member1694[o] === undefined && this.member1693 + 1 > Class50.member362) {
                return false;
            }
        }
        if (r !== undefined) {
            if (this.member1696[r] === undefined && this.member1695 + 1 > Class50.member363) {
                return false;
            }
        }
        this.member1690.push(s);
        this.member1689++;
        if (q !== undefined) {
            if (this.member1692[q] === undefined) {
                this.member1692[q] = this.member1691++;
            }
        }
        if (o !== undefined) {
            if (this.member1694[o] === undefined) {
                this.member1694[o] = this.member1693++;
            }
        }
        if (r !== undefined) {
            if (this.member1696[r] === undefined) {
                this.member1696[r] = this.member1695++;
            }
        }
        return true;
    };
    c.prototype.member1718 = function (L, H, F) {
        this.member1570 = new ArrayBuffer(this.member1690.length * 4 * i);
        var u = new Float32Array(this.member1570);
        var r = new Uint8Array(this.member1570);
        var E = this.member1690.length * 6;
        this.member1699 = new ArrayBuffer(E * 2);
        var D = new Uint16Array(this.member1699);
        var Q = this.member1697 === Class145.member287 || this.member1697 === Class145.member1454 ? 1 : 0;
        var M = this.member1697 === Class145.member288 ? 1 : 0;
        var N = this.member1698 === Class145.member287 || this.member1698 === Class145.member1454 ? 1 : 0;
        var K = this.member1698 === Class145.member288 ? 1 : 0;
        for (var t = 0; t < this.member1690.length; t++) {
            var s = this.member1690[t];
            var G = s.member1719();
            var P = s.getColour();
            var z = G.getMaterial();
            var O = Class147.member1484(z);
            var x = 0;
            var j = -1, C = -1;
            if (L !== undefined && O.member1361()) {
                var J;
                if (O.member1469() && Class154.member553()) {
                    J = L.member1517();
                    x = 1;
                } else {
                    J = L.member1516();
                }
                j = J.member1330(z);
                C = J.member1331(z);
            }
            var B = G.member1680();
            var o = G.member1681();
            var v = s.member1720();
            for (var y = 0; y < 4; y++) {
                var q = (t * 4 + y) * i;
                var A = q / 4;
                u[A++] = v[0];
                u[A++] = v[1];
                u[A++] = v[2];
                u[A++] = s.member1721();
                u[A++] = B;
                u[A++] = o;
                u[A++] = j;
                u[A++] = C;
                q += 32;
                r[q++] = P >> 24 & 255;
                r[q++] = P >> 16 & 255;
                r[q++] = P >> 8 & 255;
                r[q++] = P & 255;
                r[q++] = Q;
                r[q++] = N;
                r[q++] = M;
                r[q++] = K;
                r[q++] = x;
                if (s.member1722() !== undefined) {
                    r[q++] = this.member1692[s.member1722()];
                } else {
                    r[q++] = 0;
                }
                if (s.member1723() !== undefined) {
                    r[q++] = this.member1694[s.member1723()];
                } else {
                    r[q++] = 0;
                }
                if (s.member1724() !== undefined) {
                    r[q++] = this.member1696[s.member1724()] * 2;
                } else {
                    r[q++] = 0;
                }
                if (y === 0) {
                    r[q++] = 160;
                    r[q++] = 0;
                    r[q++] = 1;
                } else if (y === 1) {
                    r[q++] = 224;
                    r[q++] = 1;
                    r[q++] = 1;
                } else if (y === 2) {
                    r[q++] = 32;
                    r[q++] = 1;
                    r[q++] = 0;
                } else if (y === 3) {
                    r[q++] = 96;
                    r[q++] = 0;
                    r[q++] = 0;
                }
                r[q] = 0;
            }
            D[t * 6 + 0] = t * 4 + 0;
            D[t * 6 + 1] = t * 4 + 1;
            D[t * 6 + 2] = t * 4 + 2;
            D[t * 6 + 3] = t * 4 + 0;
            D[t * 6 + 4] = t * 4 + 2;
            D[t * 6 + 5] = t * 4 + 3;
            var I = Math.max(Math.abs(B), Math.abs(o));
            Class41.set(v, h);
            h[0] -= I;
            h[1] -= I;
            h[2] -= I;
            if (h[0] < H[0]) {
                H[0] = h[0];
            }
            if (h[1] < H[1]) {
                H[1] = h[1];
            }
            if (h[2] < H[2]) {
                H[2] = h[2];
            }
            I *= 2;
            h[0] += I;
            h[1] += I;
            h[2] += I;
            if (h[0] > F[0]) {
                F[0] = h[0];
            }
            if (h[1] > F[1]) {
                F[1] = h[1];
            }
            if (h[2] > F[2]) {
                F[2] = h[2];
            }
        }
        u = null;
        r = null;
        D = null;
        this.member1690 = null;
    };
    c.prototype.member563 = function (o) {
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
    c.prototype.member512 = function (q) {
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
    c.prototype.transform = function (j) {
        var r = this.member1689 * 4;
        var q = i / 4;
        var s = new Float32Array(this.member1570);
        for (var o = 0; o < r; o++) {
            h[0] = s[o * q + 0];
            h[1] = s[o * q + 1];
            h[2] = s[o * q + 2];
            Class49.member318(j, h);
            s[o * q + 0] = h[0];
            s[o * q + 1] = h[1];
            s[o * q + 2] = h[2];
        }
    };
    c.prototype.translate = function (j) {
        var r = this.member1689 * 4;
        var q = i / 4;
        var s = new Float32Array(this.member1570);
        for (var o = 0; o < r; o++) {
            s[o * q + 0] += j[0];
            s[o * q + 1] += j[1];
            s[o * q + 2] += j[2];
        }
    };
    c.prototype.rotate = function (j) {
        var r = this.member1689 * 4;
        var q = i / 4;
        var s = new Float32Array(this.member1570);
        for (var o = 0; o < r; o++) {
            h[0] = s[o * q + 0];
            h[1] = s[o * q + 1];
            h[2] = s[o * q + 2];
            Class140.member318(j, h);
            s[o * q + 0] = h[0];
            s[o * q + 1] = h[1];
            s[o * q + 2] = h[2];
        }
    };
    c.prototype.member1668 = function (q) {
        var r = this.member1689 * 4;
        var o = i / 4;
        var s = new Float32Array(this.member1570);
        for (var j = 0; j < r; j++) {
            h[0] = s[j * o + 0];
            h[2] = s[j * o + 2];
            if (q == 1) {
                s[j * o + 0] = h[2];
                s[j * o + 2] = -h[0];
            } else if (q == 2) {
                s[j * o + 0] = -h[0];
                s[j * o + 2] = -h[2];
            } else if (q == 3) {
                s[j * o + 0] = -h[2];
                s[j * o + 2] = h[0];
            }
        }
    };
    c.prototype.member1725 = function (r, j, s, o, q, t, x) {
        var y = this.member1689 * 4;
        var z = i / 4;
        var v = new Float32Array(this.member1570);
        for (var u = 0; u < y; u++) {
            v[u * z + 1] = x(r, j, s, o, q, t, v[u * z + 0], v[u * z + 1], v[u * z + 2]);
        }
    };
    c.prototype.member1726 = function (r) {
        var v = this.member1689 * 4;
        var x = i / 4;
        var q = new Uint8Array(this.member1570);
        var j = new Float32Array(this.member1570);
        for (var t = 0; t < v; t++) {
            var u = j[t * x + 6];
            var o = q[t * i + 40] === 1;
            var s;
            if (u === 0) {
                s = 0;
            } else if (!o) {
                s = r.member1520[u];
            } else {
                s = r.member1521[u];
            }
            j[t * x + 6] = s;
        }
    };
    var a = function () {
        member46(this, Class99);
        this.member1712 = undefined;
        this.member1608 = undefined;
        this.member1727 = undefined;
        this.member433 = undefined;
        this.member950 = undefined;
        this.member424 = undefined;
        this.member441 = undefined;
        this.member1610 = undefined;
        this.member1569 = undefined;
        this.member1612 = undefined;
        this.member1728 = undefined;
        this.member1729 = undefined;
    };
    member45(Class99, a);
    a.prototype.member867 = function () {
        this.member1608.member990(this.member1727);
        var j = this.member433.member1730();
        var o = this.member433.member1731();
        this.member433.member590(this.member864);
        this.member433.member1732(this.member866);
        this.member1712.member1630(this.member433, this.member950, this.member424, this.member425, this.member441, this.member1610, this.member1569, this.member1612, this.member1728, this.member1729);
        this.member433.member1732(o);
        this.member433.member590(j);
        this.member433.member587();
    };
    var g = function () {
        return new a();
    };
    c.prototype.member952 = function (q, j, F, o, y, x, r, C, B, v, u, E, t) {
        var A = Class83.member619(Class82.member612, g);
        A.member1712 = this;
        var s = Class132.member1266();
        var D = s.member941(Class72.POINTLIGHT);
        var z = D.member987();
        A.member864 = j;
        A.member866 = F;
        A.member862 = x.id;
        A.member863 = q.member863;
        A.member1608 = D;
        A.member1727 = z;
        A.member433 = o;
        A.member950 = y;
        A.member424 = x;
        A.member425 = r;
        A.member441 = C;
        A.member1610 = B;
        A.member1569 = v;
        A.member1612 = u;
        A.member1728 = E;
        A.member1729 = t;
        return A;
    };
    c.prototype.member1630 = function (t, z, A, y, H, G, C, E, J, x) {
        var v = t.gl;
        if (this.member1338 === Class133.member1269) {
            y.enable(Class5.member121);
        }
        var u = Class68.member421(A.id, y);
        var F = u.member445();
        if (y.member291(Class5.member94) && !F.member291(Class5.member94)) {
            return false;
        }
        var j = F.member303(y);
        y = F;
        var B = t.member1190();
        var r = this.member1573[F];
        Class68.member483(u, B === undefined || r === undefined);
        if (r !== undefined) {
            B.bindVertexArrayOES(r);
        } else {
            if (B !== undefined) {
                r = this.member1573[F] = B.createVertexArrayOES();
                B.bindVertexArrayOES(r);
                v.enableVertexAttribArray(u.member459(Class7.member262.id));
                v.enableVertexAttribArray(u.member459(Class7.member282.id));
                v.enableVertexAttribArray(u.member459(Class7.member270.id));
                v.enableVertexAttribArray(u.member459(Class7.member265.id));
                v.enableVertexAttribArray(u.member459(Class7.member280.id));
                if (F.member291(Class5.member105) || F.member291(Class5.member94)) {
                    v.enableVertexAttribArray(u.member459(Class7.member267.id));
                }
            }
            v.bindBuffer(v.ARRAY_BUFFER, this.member1572);
            v.bindBuffer(v.ELEMENT_ARRAY_BUFFER, this.member1700);
            v.vertexAttribPointer(u.member459(Class7.member262.id), 4, v.FLOAT, false, i, 0);
            v.vertexAttribPointer(u.member459(Class7.member270.id), 4, v.FLOAT, false, i, 16);
            v.vertexAttribPointer(u.member459(Class7.member265.id), 4, v.UNSIGNED_BYTE, true, i, 32);
            v.vertexAttribPointer(u.member459(Class7.member280.id), 1, v.UNSIGNED_BYTE, false, i, 36);
            if (F.member291(Class5.member105) || F.member291(Class5.member94)) {
                v.vertexAttribPointer(u.member459(Class7.member267.id), 4, v.UNSIGNED_BYTE, false, i, 40);
            }
            v.vertexAttribPointer(u.member459(Class7.member282.id), 4, v.UNSIGNED_BYTE, false, i, 44);
        }
        H.member1631(u);
        u.member467(Class7.member144, G);
        Class150.member1515(C, u);
        if (F.member291(Class5.member105)) {
            u.member467(Class7.member161, J.member1733(this.member1692, -1, d));
            u.member467(Class7.member162, J.member1734(this.member1694, b));
            u.member467(Class7.member163, J.member1735(this.member1696, k));
        }
        if (E !== undefined) {
            u.member467(Class7.member230, E);
        } else {
            u.member467(Class7.member230, m);
        }
        if (F.member291(Class5.member100)) {
            z.member1026(Class72.member500, u);
        }
        if (F.member291(Class5.member121)) {
            u.member467(Class7.member219, Math.max(0, this.member1381 - 0.5) / 255);
        }
        if (x !== undefined && this.member1703 !== undefined) {
            var s = 0;
            var o = 0;
            for (var I = 0; I < this.member1703.length; I++) {
                var D = this.member1703[I];
                var q = x[D.member1704] === 0;
                if (!q) {
                    if (o > 0) {
                        v.drawElements(t.member1198, D.member1579 - s, v.UNSIGNED_SHORT, s * 2);
                        t.member1632();
                        t.member1633((D.member1579 - s) / 3);
                    }
                    s = D.member1705;
                    o = 0;
                } else if (q) {
                    if (I === this.member1703.length - 1) {
                        v.drawElements(t.member1198, D.member1705 - s, v.UNSIGNED_SHORT, s * 2);
                        t.member1632();
                        t.member1633((D.member1705 - s) / 3);
                    } else {
                        o++;
                    }
                }
            }
        } else {
            v.drawElements(t.member1198, this.member1689 * 6, v.UNSIGNED_SHORT, 0);
            t.member1632();
            t.member1633(this.member1689 * 2);
        }
        if (B !== undefined) {
            B.bindVertexArrayOES(null);
        }
        return j;
    };
    return function (q, r, j, o, s) {
        return new c(q, r, j, o, s);
    };
}();