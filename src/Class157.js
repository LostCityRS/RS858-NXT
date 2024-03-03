import { Class29 } from 'Class29.js';
import { Class73 } from 'Class73.js';
import { Class4 } from 'Class4.js';
import { Class151 } from 'Class151.js';
import { Class41 } from 'Class41.js';
import { Class140 } from 'Class140.js';
import { Class87 } from 'Class87.js';
import { Class147 } from 'Class147.js';
import { Class154 } from 'Class154.js';
import { Class156 } from 'Class156.js';
import { Class99 } from 'Class99.js';
import { Class63 } from 'Class63.js';
import { Class5 } from 'Class5.js';
import { Class132 } from 'Class132.js';
import { Class72 } from 'Class72.js';
import { Class104 } from 'Class104.js';
import { Class130 } from 'Class130.js';
import { Class68 } from 'Class68.js';
import { Class155 } from 'Class155.js';
import { Class83 } from 'Class83.js';
import { Class82 } from 'Class82.js';
import { Class110 } from 'Class110.js';
import { Class7 } from 'Class7.js';
import { Class150 } from 'Class150.js';
export var Class157 = function () {
    var n = new Float32Array(4);
    var a = 0;
    var A = 0;
    var s = undefined;
    var g = undefined;
    var q = undefined;
    var o = undefined;
    var x;
    var v = Class29();
    var k = { member757: new Float32Array(3) };
    var j = { member757: new Float32Array(3) };
    var h = { member757: new Float32Array(3) };
    var b = new Array(3);
    b[0] = k;
    b[1] = j;
    b[2] = h;
    var d = new Float32Array(3);
    var z = new Float32Array(3);
    var i = {
        x: 0,
        y: 0,
        member756: 0
    };
    var e = {};
    var y = [
        [
            1,
            0,
            0
        ],
        [
            0,
            1,
            0
        ],
        [
            0,
            0,
            1
        ]
    ];
    var m = 0;
    m += 3 * 4;
    m += 3 * 2;
    m += 2;
    m += 4 * 4 * 3;
    m += 4 * 1;
    m += 3 * 1;
    m += 1;
    m += 4 * 1;
    var u = 0;
    u += 3 * 4;
    u += 4 * 1;
    var r = function (B) {
        this.member1559 = 0;
        this.member433;
        this.member1560 = undefined;
        this.size = undefined;
        this.member1562 = undefined;
        this.member1563 = undefined;
        this.member1564 = undefined;
        this.member1565 = undefined;
        this.member1566 = undefined;
        this.member1567 = false;
        this.member1568 = 0;
        this.member1569 = undefined;
        this.member1570 = undefined;
        this.member1571 = 0;
        this.member1572 = undefined;
        this.member1573 = {};
        this.member25(B);
        member46(this, Class73, Class4.member61);
    };
    member45(Class73, r);
    r.prototype.member25 = function (B) {
        if (B.member1560 !== undefined && B.size !== undefined && B.member1562 !== undefined) {
            this.member1560 = B.member1560;
            this.size = B.size;
            this.member1562 = B.member1562;
            this.member1565 = B.member1565;
            this.member1569 = B.member1569;
            this.member1574();
        } else if (B.member433 !== undefined && B.member680 !== undefined) {
            this.member433 = B.member433;
            this.member1568 = B.member680.member1568;
            this.member1570 = B.member680.member1570;
            if (B.member680.member1569 !== undefined) {
                this.member1569 = Class151(B.member680.member1569);
            }
            this.member1563 = B.member680.member1563;
            this.size = B.member680.size;
            this.member1560 = B.member680.member1560;
            this.member1565 = B.member680.member1565;
            this.member563();
        } else {
            throw new Error('892 ');
        }
    };
    r.prototype.member85 = function () {
        if (this.member1567) {
            return this.member1571;
        } else {
            return 0;
        }
    };
    r.prototype.member512 = function () {
        if (this.member433 !== undefined) {
            var C = this.member433.member1190();
            if (C !== undefined) {
                for (var B in this.member1573) {
                    C.deleteVertexArrayOES(this.member1573[B]);
                }
                this.member1573 = {};
            }
        }
        if (this.member1569 !== undefined) {
            this.member1569.member512();
        }
        if (this.member1567) {
            this.member433.gl.deleteBuffer(this.member1572);
            this.member1572 = undefined;
        } else {
            this.member1570 = undefined;
        }
    };
    r.prototype.member1574 = function () {
        a = 0;
        A = 0;
        var E = this.member1565 !== undefined ? u : m;
        this.member1570 = new ArrayBuffer(this.member1560 * this.member1560 * 12 * E);
        this.member1575 = new Float32Array(this.member1570);
        this.member1576 = new Uint16Array(this.member1570);
        this.member1577 = new Int16Array(this.member1570);
        this.member1578 = new Uint8Array(this.member1570);
        var C = 0;
        this.member1568 = 0;
        this.member1563 = new Array(1);
        this.member1563[this.member1559] = {
            member1579: 0,
            member1580: 0,
            member1581: 0
        };
        for (var F = 1; F < this.member1560 + 1; F++) {
            for (var B = 1; B < this.member1560 + 1; B++) {
                var D = this.member1562[B][F];
                if (D !== undefined) {
                    if (D.member1582 === undefined) {
                        D.member1582 = this.member1559;
                    }
                    if (this.member1563[D.member1582] === undefined) {
                        this.member1563[D.member1582] = {
                            member1579: 0,
                            member1580: 0,
                            member1581: 0
                        };
                    }
                    this.member1563[D.member1582].member1580++;
                }
            }
        }
        if (this.member1565 !== undefined) {
            z[0] = this.member1565.member1583;
            z[1] = this.member1565.member1584;
            z[2] = this.member1565.member1585;
            z = Class41.normalize(z);
            this.member1586(this.member1565.member1566);
        }
        for (var G = 0; G < this.member1563.length; G++) {
            for (var F = 1; F < this.member1560 + 1; F++) {
                for (var B = 1; B < this.member1560 + 1; B++) {
                    var D = this.member1562[B][F];
                    if (D !== undefined && D.member1582 === G) {
                        this.member770(B, F);
                    }
                }
            }
        }
        this.member1570 = this.member1570.slice(0, A * E);
        if (this.member1568 > 0 && this.member433 !== undefined) {
            this.member563();
        }
        this.member1575 = undefined;
        this.member1578 = undefined;
        this.member1576 = undefined;
        this.member1577 = undefined;
        this.member1566 = undefined;
    };
    r.prototype.member1587 = function (B) {
        if (B !== undefined && B !== null && B.member651 !== undefined) {
            B.member744 = this.member1588(B.member651);
            B.member745 = this.member1331(B.member651);
            B.member1589 = this.member1590(B.member651);
        }
    };
    r.prototype.member1586 = function (M) {
        if (M !== undefined) {
            this.member1566 = new Array(0);
            for (var G = 0; G < M.length; G++) {
                var B = M[G];
                if (B === undefined) {
                    continue;
                }
                var I = B.member1591 | 255;
                var D = Math.floor(B.width / B.member1592) + 2;
                var C = Math.floor(B.length / B.member1592) + 2;
                var F = B.width / 2;
                F = Math.floor(F / B.member1592) * B.member1592;
                var K = B.length / 2;
                K = Math.floor(K / B.member1592) * B.member1592;
                d[1] = 0;
                d[0] = -F;
                d[2] = -K;
                Class140.member318(B.member763, d);
                var H = {
                    x: d[0] + B.member1593[0],
                    y: d[2] + B.member1593[2]
                };
                d[0] = -F;
                d[2] = C * B.member1592 - K;
                Class140.member318(B.member763, d);
                var E = {
                    x: d[0] + B.member1593[0],
                    y: d[2] + B.member1593[2]
                };
                d[0] = D * B.member1592 - F;
                d[2] = C * B.member1592 - K;
                Class140.member318(B.member763, d);
                var J = {
                    x: d[0] + B.member1593[0],
                    y: d[2] + B.member1593[2]
                };
                d[0] = D * B.member1592 - F;
                d[2] = -K;
                Class140.member318(B.member763, d);
                var L = {
                    x: d[0] + B.member1593[0],
                    y: d[2] + B.member1593[2]
                };
                this.member1566.push({
                    member1594: E,
                    member1595: J,
                    member1596: L,
                    member1597: H,
                    member1593: {
                        x: B.member1593[0],
                        y: B.member1593[2]
                    },
                    member546: I
                });
            }
        }
    };
    r.prototype.member770 = function (G, E) {
        var D = this.member1562[G][E];
        if (D === undefined) {
            return;
        }
        var F = D.member1598.member767(D, G, E, this);
        if (F !== undefined) {
            var I = D.member766 === Class87.member749;
            for (var B = 0; B < F.length; B++) {
                if (F[B] === undefined) {
                    continue;
                }
                for (var C = 0; C < 3; C++) {
                    this.member1587(F[B][C]);
                }
                var H = I || F[B].member760;
                this.member1599(F[B], D.member1582, H);
            }
        }
    };
    r.prototype.member1588 = function (B) {
        var D = undefined;
        if (this.member1569 !== undefined) {
            var C = Class147.member1484(B);
            if (C !== undefined && C.member1469() && Class154.member553()) {
                D = this.member1569.member1517();
            } else {
                D = this.member1569.member1516();
            }
        }
        if (D === undefined) {
            return -1;
        } else {
            return D.member1330(B);
        }
    };
    r.prototype.member1331 = function (B) {
        var D = undefined;
        if (this.member1569 !== undefined) {
            var C = Class147.member1484(B);
            if (C !== undefined && C.member1469() && Class154.member553()) {
                D = this.member1569.member1517();
            } else {
                D = this.member1569.member1516();
            }
        }
        if (D === undefined) {
            return -1;
        } else {
            return D.member1331(B);
        }
    };
    r.prototype.member1590 = function (B) {
        if (this.member1569 !== undefined) {
            var C = Class147.member1484(B);
            if (C !== undefined && C.member1469() && Class154.member553()) {
                return 1;
            } else {
                return 0;
            }
        }
        return -1;
    };
    r.prototype.member765 = function (H, I, F, C, M, G) {
        if (!G.member759) {
            H.x = I * this.size;
            H.y = this.member1562[I][F].height;
            H.member756 = F * this.size;
            H.member757 = this.member1600(H.member757, I, F);
            Class87.member753(G, H);
            return H;
        }
        var B = true;
        var J = G;
        var L = this.member1562[I][F];
        if (L !== undefined) {
            J = Class87.member762(B, J, L.member1598.member762(L, Class87.member738, this));
            B = false;
        }
        var K = this.member1562[I - 1][F - 1];
        if (K !== undefined) {
            J = Class87.member762(B, J, K.member1598.member762(K, Class87.member740, this));
            B = false;
        }
        var E = this.member1562[I][F - 1];
        if (E !== undefined) {
            J = Class87.member762(B, J, E.member1598.member762(E, Class87.member739, this));
            B = false;
        }
        var D = this.member1562[I - 1][F];
        if (D !== undefined) {
            J = Class87.member762(B, J, D.member1598.member762(D, Class87.member741, this));
            B = false;
        }
        H.x = I * this.size;
        H.y = this.member1562[I][F].height;
        H.member756 = F * this.size;
        H.member757 = this.member1600(H.member757, I, F);
        Class87.member753(J, H);
        return H;
    };
    r.prototype.member764 = function (N, B, O, E, L, G, J) {
        var H = B * this.size + this.size * (1 + E) / 2;
        var F = O * this.size + this.size * (1 + L) / 2;
        var D = (1 - E) * (1 - L);
        var C = N.height * D;
        var M = N.member747 * D;
        var I = this.member1562[B + 1][O];
        var K;
        if (I !== undefined) {
            K = (1 + E) * (1 - L);
            C += I.height * K;
            M += I.member747 * K;
            D += K;
        }
        I = this.member1562[B + 1][O + 1];
        if (I !== undefined) {
            K = (1 + E) * (1 + L);
            C += I.height * K;
            M += I.member747 * K;
            D += K;
        }
        I = this.member1562[B][O + 1];
        if (I !== undefined) {
            K = (1 - E) * (1 + L);
            C += I.height * K;
            M += I.member747 * K;
            D += K;
        }
        C /= D;
        M /= D;
        G.x = H;
        G.y = C;
        G.member756 = F;
        G.member757 = this.member1601(G.member757, B, O, E, L);
        Class87.member753(J, G);
        G.member747 = M;
    };
    r.prototype.member1602 = function (C) {
        i.x = (C[0].x + C[1].x + C[2].x) / 3;
        i.y = (C[0].member756 + C[1].member756 + C[2].member756) / 3;
        var D = -1;
        var F = Number.MAX_VALUE;
        for (var B = 0; B < this.member1566.length; B++) {
            var G = this.member1566[B];
            if (Class156.member1558(i, G.member1594, G.member1595, G.member1596) || Class156.member1558(i, G.member1594, G.member1596, G.member1597)) {
                return G.member546;
            }
            var E = (G.member1593.x - i.x) * (G.member1593.x - i.x) + (G.member1593.y - i.y) * (G.member1593.y - i.y);
            if (E < F) {
                F = E;
                D = B;
            }
        }
        if (D > -1) {
            return this.member1566[D].member546;
        }
        return 4278255615;
    };
    r.prototype.member1599 = function (I, K, D) {
        var B = this.member1563[K];
        if (this.member1565 !== undefined) {
            var C = D ? this.member1602(I) : undefined;
            for (var G = 0; G < 3; G++, A++) {
                this.member1603(I[G], !D, this.member1565.level, C);
            }
        } else {
            var J = [
                I[0].member744,
                I[1].member744,
                I[2].member744
            ];
            var F = [
                I[0].member745,
                I[1].member745,
                I[2].member745
            ];
            var H = [
                I[0].member1589,
                I[1].member1589,
                I[2].member1589
            ];
            for (var G = 0; G < 3; G++, A++) {
                var E = [
                    [
                        I[G].x / this.size / I[0].member743,
                        I[G].member756 / this.size / I[0].member743
                    ],
                    [
                        I[G].x / this.size / I[1].member743,
                        I[G].member756 / this.size / I[1].member743
                    ],
                    [
                        I[G].x / this.size / I[2].member743,
                        I[G].member756 / this.size / I[2].member743
                    ]
                ];
                this.member1604(I[G], J, F, y[G], H, E);
            }
        }
        this.member1568++;
        B.member1581++;
    };
    r.prototype.member1603 = function (H, G, B, F) {
        this.member1575[a / 4] = Math.floor(H.x - this.size);
        a += 4;
        this.member1575[a / 4] = Math.floor(B !== undefined ? B : H.y);
        a += 4;
        this.member1575[a / 4] = Math.floor(H.member756 - this.size);
        a += 4;
        var E = 1;
        if (G) {
            var C = Class41.member327(z, H.member757);
            C = Math.max(0, Math.min(C, 1));
            E = this.member1565.member1605 + (this.member1565.member1606 - this.member1565.member1605) * C;
        }
        var D = F !== undefined ? F : H.member546;
        this.member1578[a++] = Math.min(255, (D >> 24 & 255) * E) & 255;
        this.member1578[a++] = Math.min(255, (D >> 16 & 255) * E) & 255;
        this.member1578[a++] = Math.min(255, (D >> 8 & 255) * E) & 255;
        this.member1578[a++] = D & 255;
    };
    r.prototype.member1604 = function (F, J, D, M, G, C) {
        this.member1575[a / 4] = Math.floor(F.x - this.size);
        a += 4;
        this.member1575[a / 4] = Math.floor(F.y);
        a += 4;
        this.member1575[a / 4] = Math.floor(F.member756 - this.size);
        a += 4;
        this.member1577[a / 2] = Math.floor(F.member757[0] * 32767);
        a += 2;
        this.member1577[a / 2] = Math.floor(F.member757[1] * 32767);
        a += 2;
        this.member1577[a / 2] = Math.floor(F.member757[2] * 32767);
        a += 2;
        a += 2;
        for (var B = 0; B < 3; B++) {
            var N = C[B][0], O = C[B][1];
            var K = J[B];
            var I = D[B];
            var H = G[B];
            this.member1575[a / 4] = N;
            a += 4;
            this.member1575[a / 4] = O;
            a += 4;
            this.member1575[a / 4] = K;
            a += 4;
            var L = I | H << 16;
            this.member1575[a / 4] = L;
            a += 4;
        }
        this.member1578[a++] = F.member546 >> 24 & 255;
        this.member1578[a++] = F.member546 >> 16 & 255;
        this.member1578[a++] = F.member546 >> 8 & 255;
        this.member1578[a++] = F.member546 & 255;
        for (var E = 0; E < 3; E++) {
            this.member1578[a++] = M[E];
        }
        a += 1;
        this.member1578[a++] = F.member746 >> 24 & 255;
        this.member1578[a++] = F.member746 >> 16 & 255;
        this.member1578[a++] = F.member746 >> 8 & 255;
        this.member1578[a++] = F.member747 * 255;
    };
    r.prototype.member1600 = function (D, C, F) {
        var E, B;
        if (C < this.member1560 + 1) {
            E = this.member1562[C - 1][F].height - this.member1562[C + 1][F].height;
        }
        if (F < this.member1560 + 1) {
            B = this.member1562[C][F - 1].height - this.member1562[C][F + 1].height;
        }
        if (C === 1 || C === this.member1560 + 1) {
            E = 0;
        }
        if (F === 1 || F === this.member1560 + 1) {
            B = 0;
        }
        D[0] = E;
        D[1] = this.size * 2;
        D[2] = B;
        Class41.normalize(D);
        return D;
    };
    r.prototype.member1601 = function (E, B, G, D, F) {
        var H = this.member1600(E, B, G);
        Class41.scale(H, (1 - D) * (1 - F));
        var C = this.member1600(d, B + 1, G);
        Class41.scale(C, (1 + D) * (1 - F));
        Class41.add(H, C);
        var C = this.member1600(d, B + 1, G + 1);
        Class41.scale(C, (1 + D) * (1 + F));
        Class41.add(H, C);
        var C = this.member1600(d, B, G + 1);
        Class41.scale(C, (1 - D) * (1 + F));
        Class41.add(H, C);
        Class41.scale(H, 1 / 4);
        return H;
    };
    r.prototype.member563 = function () {
        this.member1571 = this.member1570.byteLength;
        this.member1572 = this.member433.gl.createBuffer();
        this.member433.gl.bindBuffer(this.member433.gl.ARRAY_BUFFER, this.member1572);
        this.member433.gl.bufferData(this.member433.gl.ARRAY_BUFFER, this.member1570, this.member433.gl.STATIC_DRAW);
        this.member1570 = undefined;
        this.member1575 = undefined;
        this.member1576 = undefined;
        this.member1577 = undefined;
        this.member1578 = undefined;
        this.member1567 = true;
    };
    r.prototype.member681 = function () {
        return {
            member1568: this.member1568,
            member1570: this.member1570,
            member1569: this.member1569 === undefined ? undefined : this.member1569.member681(),
            member1563: this.member1563,
            size: this.size,
            member1560: this.member1560,
            member1565: this.member1565
        };
    };
    var t = function () {
        member46(this, Class99);
        this.member862 = Class63.member390.id;
        this.member1607 = undefined;
        this.member1608 = undefined;
        this.member1609 = undefined;
        this.member441 = undefined;
        this.member1610 = undefined;
        this.member1611 = undefined;
        this.member1612 = undefined;
        this.member1613 = undefined;
        this.member1614 = undefined;
        this.member1615 = undefined;
        this.member1616 = undefined;
        this.member1617 = undefined;
    };
    member45(Class99, t);
    t.prototype.member867 = function () {
        this.member1608.member990(this.member1609);
        this.member1607.member1618(this.member441, this.member1610, this.member1611, this.member1612, this.member1613, this.member1614, this.member1615, this.member1616, this.member1617);
    };
    var c = function () {
        return new t();
    };
    r.prototype.member1619 = function () {
        x = Class63.member390;
        v.enable(Class5.member110);
        if (this.member433.member860()) {
            v.enable(Class5.member111);
        }
    };
    r.prototype.member1620 = function (E, D, C, B) {
        this.member1621(E, D, C, B);
        v.enable(Class5.member96);
    };
    r.prototype.member1622 = function () {
        x = Class63.member390;
        v.enable(Class5.member110);
        if (this.member433.member860()) {
            v.enable(Class5.member111);
        }
    };
    r.prototype.member1623 = function () {
        x = Class63.member390;
        v.enable(Class5.member110);
        v.enable(Class5.member117);
        if (this.member433.member860()) {
            v.enable(Class5.member111);
        }
    };
    r.prototype.member1621 = function (G, F, E, B) {
        x = G;
        var D = Class132.member1266();
        if (F) {
            v.enable(Class5.member109);
        } else {
            v.enable(Class5.member109);
            v.enable(Class5.member89);
            if (this.member1569 !== undefined) {
                v.enable(Class5.member93);
                if (this.member1569.member1531()) {
                    v.enable(Class5.member94);
                }
            }
            if (E) {
                v.enable(Class5.member100);
            }
            if (D.member1025(Class72.member499)) {
                v.enable(Class5.member95);
                if (this.member433.member860()) {
                    v.enable(Class5.member111);
                }
                var C = D.member941(Class72.member499);
                Class104.member894(v, C.member967());
            }
            if (Class130.member1194()) {
                v.enable(Class5.member107);
            }
            if (Class130.member1195()) {
                v.enable(Class5.member108);
            }
            if (B && D.member1025(Class72.member102)) {
                v.enable(Class5.member102);
            }
            var H = D.member941(Class72.POINTLIGHT);
            if (H.member988() > 0) {
                v.enable(Class5.member91);
            }
            if (D.member1025(Class72.member118)) {
                v.enable(Class5.member118);
            }
        }
    };
    r.prototype.member952 = function (D, V, U, T, S, Q, P, N, G) {
        if (this.member1568 === 0) {
            return;
        }
        var L = this.member1565 !== undefined;
        var O = Class132.member1266();
        var M = O.member1025(Class72.member499);
        var B = O.member1025(Class72.member96);
        var F = O.member522(Class72.member499);
        var H = O.member522(Class72.member96);
        var R = O.member522(Class72.member416);
        var C = O.member522(Class72.member117);
        var E = false;
        if (O.member1025(Class72.member500)) {
            var I = O.member941(Class72.member500);
            if (I.member880(T, this.size * this.member1560, U.member1624)) {
                E = true;
            }
        }
        var J = !F && (E || Q !== undefined || Class130.member1194());
        var K;
        x = undefined;
        v.member301();
        if (F) {
            this.member1619();
        } else if (H) {
            this.member1620(G, L, E, P);
        } else if (R) {
            this.member1622();
        } else if (C) {
            this.member1623();
        } else {
            this.member1621(G, L, E, P);
            if (this.member433.member1625()) {
                v.enable(Class5.member96);
            }
        }
        K = Class68.member421(x.id, v);
        if (D.member1626(D.member1627)) {
            this.member1628(D, D.member1627, V, U, T, S, Q, P, N, L, K, J);
        }
        if (D.member1627 !== Class155.member117 && D.member1626(Class155.member117)) {
            v.member301();
            this.member1623();
            K = Class68.member421(x.id, v);
            this.member1628(D, Class155.member117, V, U, T, S, Q, P, N, L, K, J);
        }
        if (D.member1627 !== Class155.member416 && D.member1626(Class155.member416)) {
            v.member301();
            this.member1622();
            K = Class68.member421(x.id, v);
            this.member1628(D, Class155.member416, V, U, T, S, Q, P, N, L, K, J);
        }
        if (D.member1627 !== Class155.member96 && D.member1626(Class155.member96)) {
            v.member301();
            this.member1620(G, L, E, P);
            K = Class68.member421(x.id, v);
            this.member1628(D, Class155.member96, V, U, T, S, Q, P, N, L, K, J);
        }
    };
    r.prototype.member1628 = function (B, M, J, I, H, E, D, C, P, O, N, L) {
        var G = Class83.member619(Class82.member390, c);
        var F = Class132.member1266();
        var K = F.member941(Class72.POINTLIGHT);
        G.member863 = B.member863;
        G.member1607 = this;
        G.priority = Class110.member926;
        G.member1608 = K;
        G.member1609 = J;
        G.member441 = I;
        G.member1610 = H;
        G.member1611 = E;
        G.member1612 = D;
        G.member1613 = C;
        G.member1614 = P;
        G.member1615 = O;
        G.member1616 = N;
        G.member1617 = L;
        B.member1629(M, G);
    };
    r.prototype.member1630 = function (T, S, R, P, O, M, F) {
        if (this.member1568 === 0) {
            return;
        }
        var K = this.member1565 !== undefined;
        var N = Class132.member1266();
        var L = N.member1025(Class72.member499);
        var B = N.member1025(Class72.member96);
        var E = N.member522(Class72.member499);
        var G = N.member522(Class72.member96);
        var Q = N.member522(Class72.member416);
        var C = N.member522(Class72.member117);
        var D = false;
        if (N.member1025(Class72.member500)) {
            var H = N.member941(Class72.member500);
            if (H.member880(S, this.size * this.member1560, T.member1624)) {
                D = true;
            }
        }
        var I = !E && (D || P !== undefined || Class130.member1194());
        x = undefined;
        v.member301();
        if (E) {
            this.member1619();
        } else if (G) {
            this.member1620(F, K, D, O);
        } else if (Q) {
            this.member1622();
        } else if (C) {
            this.member1623();
        } else {
            this.member1621(F, K, D, O);
            if (this.member433.member1625()) {
                v.enable(Class5.member96);
            }
        }
        var J = Class68.member421(x.id, v);
        this.member1618(T, S, R, P, O, M, K, J, I);
    };
    r.prototype.member1618 = function (S, R, P, O, M, K, I, H, G) {
        var J = this.member433.gl;
        var L = Class132.member1266();
        this.member433.member590(G);
        var Q = H.member445();
        var N = this.member433.member1190();
        var E = this.member1573[Q];
        if (I) {
            N = undefined;
            E = undefined;
        }
        Class68.member483(H, N === undefined || E === undefined);
        if (E !== undefined) {
            N.bindVertexArrayOES(E);
        } else {
            if (N !== undefined) {
                E = this.member1573[Q] = N.createVertexArrayOES();
                N.bindVertexArrayOES(E);
                J.enableVertexAttribArray(H.member459(Class7.member262.id));
                if (!Q.member291(Class5.member96) && Q.member291(Class5.member109)) {
                    J.enableVertexAttribArray(H.member459(Class7.member265.id));
                }
                if (Q.member291(Class5.member96) || Q.member291(Class5.member88) || Q.member291(Class5.member89)) {
                    J.enableVertexAttribArray(H.member459(Class7.member264.id));
                }
                if (!Q.member291(Class5.member96) && Q.member291(Class5.member93)) {
                    J.enableVertexAttribArray(H.member459(Class7.member270.id));
                    J.enableVertexAttribArray(H.member459(Class7.member272.id));
                    J.enableVertexAttribArray(H.member459(Class7.member274.id));
                    J.enableVertexAttribArray(H.member459(Class7.member268.id));
                }
                if (!Q.member291(Class5.member96) && Q.member291(Class5.member101)) {
                    J.enableVertexAttribArray(H.member459(Class7.member278.id));
                }
            }
            J.bindBuffer(J.ARRAY_BUFFER, this.member1572);
            if (I) {
                this.member433.gl.vertexAttribPointer(H.member459(Class7.member262.id), 3, J.FLOAT, false, u, 0);
                if (!Q.member291(Class5.member96)) {
                    this.member433.gl.vertexAttribPointer(H.member459(Class7.member265.id), 4, J.UNSIGNED_BYTE, true, u, 12);
                }
            } else {
                J.vertexAttribPointer(H.member459(Class7.member262.id), 3, J.FLOAT, false, m, 0);
                if (Q.member291(Class5.member96) || Q.member291(Class5.member88) || Q.member291(Class5.member89)) {
                    J.vertexAttribPointer(H.member459(Class7.member264.id), 3, J.SHORT, true, m, 12);
                }
                if (!Q.member291(Class5.member96)) {
                    if (Q.member291(Class5.member109)) {
                        J.vertexAttribPointer(H.member459(Class7.member265.id), 4, J.UNSIGNED_BYTE, true, m, 68);
                    }
                    if (Q.member291(Class5.member93)) {
                        J.vertexAttribPointer(H.member459(Class7.member270.id), 4, J.FLOAT, false, m, 20);
                        J.vertexAttribPointer(H.member459(Class7.member272.id), 4, J.FLOAT, false, m, 36);
                        J.vertexAttribPointer(H.member459(Class7.member274.id), 4, J.FLOAT, false, m, 52);
                        J.vertexAttribPointer(H.member459(Class7.member268.id), 3, J.UNSIGNED_BYTE, false, m, 72);
                    }
                    if (Q.member291(Class5.member101)) {
                        J.vertexAttribPointer(H.member459(Class7.member278.id), 4, J.UNSIGNED_BYTE, false, m, 76);
                    }
                }
            }
        }
        S.member1631(H);
        H.member467(Class7.member144, R);
        if (!Q.member291(Class5.member96) && Q.member291(Class5.member93)) {
            Class150.member1515(this.member1569, H);
        }
        if (!Q.member291(Class5.member117) && !Q.member291(Class5.member110) && (!Q.member291(Class5.member96) || Q.member291(Class5.member88) || Q.member291(Class5.member89))) {
            H.member467(Class7.member145, P);
            if (!Q.member291(Class5.member96)) {
                L.member943(H);
            }
        }
        if (!Q.member291(Class5.member96)) {
            if (Q.member291(Class5.member109)) {
                if (O !== undefined) {
                    H.member467(Class7.member230, O);
                } else {
                    H.member467(Class7.member230, n);
                }
            }
            if (Q.member291(Class5.member95)) {
                var B = L.member941(Class72.member499);
                H.member467(Class7.member165, B.member977());
                B.member982(H);
            }
            if (Q.member291(Class5.member118)) {
                L.member1026(Class72.member118, H);
            }
            if (Q.member291(Class5.member100)) {
                L.member1026(Class72.member500, H);
            }
            if (Q.member291(Class5.member91)) {
                L.member1026(Class72.POINTLIGHT, H);
            }
        }
        if (Q.member291(Class5.member102)) {
            L.member1026(Class72.member102, H);
        }
        if (Q.member291(Class5.member107)) {
            H.member467(Class7.member213, Class130.member1182());
        }
        if (Q.member291(Class5.member108)) {
            H.member467(Class7.member214, Class130.member1182());
        }
        var F = 0, D = this.member1568 * 3;
        if (K !== undefined) {
            var C = this.member1563[K];
            if (C === undefined) {
                return;
            }
            F = C.member1579;
            D = C.member1581 * 3;
        }
        J.drawArrays(this.member433.member1198, F, D);
        if (N !== undefined) {
            N.bindVertexArrayOES(null);
        }
        this.member433.member1632();
        this.member433.member1633(this.member1568);
        this.member433.member587();
    };
    return function (B) {
        return new r(B);
    };
}();