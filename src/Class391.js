import { CoordFine } from 'Class290.js';
import { Class32 } from 'Class32.js';
import { Class381 } from 'Class381.js';
import { Class390 } from 'Class390.js';
import { Class211 } from 'Class211.js';
import { Class86 } from 'Class86.js';
import { Class210 } from 'Class210.js';
import { Packet } from 'Class124.js';
import { Cuboid } from 'Class166.js';
import { Class377 } from 'Class377.js';
import { Class188 } from 'Class188.js';
import { Class378 } from 'Class378.js';
import { Class389 } from 'Class389.js';
import { Class121 } from 'Class121.js';
export var Class391 = function () {
    var b = CoordFine();
    var c = new Array(Class32.member310);
    var a = function (i, h, g, m, k, e, d, j) {
        if (i === undefined || h === undefined || m === undefined || k === undefined) {
            throw new Error('1424 ');
        }
        member46(this, Class381, Class390.member2585, Class211.member2585, i);
        this.member2504 = h;
        this.member433 = g;
        this.member4514 = m;
        this.member4515 = k;
        this.member1643 = e;
        this.member1642 = d;
        this.member4516 = j;
        this.member4517 = undefined;
    };
    member45(Class381, a);
    a.prototype.member4518 = function () {
        return this.member4517;
    };
    a.prototype.member2889 = function (e, d) {
        return true;
    };
    a.prototype.member2560 = function (M) {
        M.p1(this.member2504);
        var G = 0;
        var D = {};
        var F = 0;
        var N = M.getPos();
        M.setPos(N + 2);
        var o = this.member4514.member4085();
        var t = o.member4114();
        var g = o.member4111();
        for (var L = 0; L < this.member4515.length; L++) {
            var d = this.member4515[L];
            var I = d.member4519;
            if (d.member4520 === undefined || d.member4520.member2621 === undefined) {
                continue;
            }
            if (d.member4520.member2621.member2107()) {
                if (false) {
                }
                continue;
            }
            var n = I.member4148.getWidth(I.member2520) * Class86.member718;
            var e = I.member4148.getLength(I.member2520) * Class86.member718;
            var k = this.member1643 * Class86.member730 + I.x * Class86.member718 + n / 2;
            var i = this.member1642 * Class86.member730 + I.member756 * Class86.member718 + e / 2;
            var v = this.member1643 * Class86.member729 + I.x;
            var q = this.member1642 * Class86.member729 + I.member756;
            var j = I.level;
            if (g.member4112(v, q)) {
                j++;
            }
            var A = 0;
            if (I.member4148.member4161(I.member2519, !I.member2521)) {
                var E = I.member4148.member4496(I.member2519);
                A = E === 0 ? d.member4520.member2621.member2098().member1793()[1] : E;
            }
            M.p4(I.member2506);
            M.p1(I.level);
            M.p1(j);
            M.p1(I.x - this.member4514.member4521());
            M.p1(I.member756 - this.member4514.member4522());
            var z = I.member4148.getOffset();
            M.p2((I.x - this.member4514.member4521()) * Class86.member718 + n / 2 + (z === null ? 0 : z[0]));
            M.p2(d.height);
            M.p2(z === null ? 0 : z[1]);
            M.p2((I.member756 - this.member4514.member4522()) * Class86.member718 + e / 2 + (z === null ? 0 : z[2]));
            M.p2(v);
            M.p2(q);
            M.p3(k);
            M.p3(i);
            M.p2(n);
            M.p2(e);
            M.p2(A);
            M.p1(I.member2519);
            M.p1(I.member2520);
            M.p1(I.member2521 ? 1 : 0);
            var H = I.member4148.member4484(g, I.level, v, q, I.member2520);
            M.p1(H === undefined ? -1 : H);
            M.p1(I.member4148.getActive() || I.member4148.member4523() ? 1 : 0);
            M.p1(I.member4148.getAnim() ? 1 : 0);
            M.p1(I.member4148.member4494(I.member2519) ? 1 : 0);
            M.p1(I.member2527 ? 1 : 0);
            M.p1(I.member4148.member4495() ? 1 : 0);
            M.p1(I.member2529);
            M.p1(I.member4148.getHillChangeMode());
            M.p2(I.member4148.getHillChangeValue());
            M.p1(d.member2532 ? 1 : 0);
            if (d.member2533 !== undefined) {
                var u = d.member2533;
                if (u.member2534 !== undefined) {
                    M.p1(1);
                    M.p1(u.member2534.length);
                    M.p1(u.member2534[0].length);
                    for (var B = 0; B < u.member2534.length; B++) {
                        for (var s = 0; s < u.member2534[0].length; s++) {
                            M.p2(u.member2534[B][s]);
                        }
                    }
                } else {
                    M.p1(0);
                }
                if (u.member2371 !== undefined) {
                    M.p1(1);
                    M.p1(u.member2371.length);
                    M.p1(u.member2371[0].length);
                    for (var B = 0; B < u.member2371.length; B++) {
                        for (var s = 0; s < u.member2371[0].length; s++) {
                            M.p2(u.member2371[B][s]);
                        }
                    }
                } else {
                    M.p1(0);
                }
            } else {
                M.p2(0);
            }
            M.p2(I.member2535);
            M.p1(I.member2536 ? 1 : 0);
            b.level = I.level;
            b.member3454[0] = k;
            b.member3454[1] = d.height;
            b.member3454[2] = i;
            var m = o.member4485(b, c, false);
            if (m === -1) {
                m = 0;
            }
            M.p1(m);
            for (var h = 0; h < m; h++) {
                M.p2(c[h].member4525());
            }
            M.p2(I.member4148.getWidth());
            M.p2(I.member4148.getLength());
            M.p2(I.member4148.getBackgroundSound());
            M.p1(I.member4148.member4498());
            M.p2(I.member4148.getBackgroundSoundVolume());
            M.p2(I.member4148.getBackgroundSoundRange());
            M.p2(I.member4148.getBackgroundSoundSize());
            M.p1(I.member4148.member4502());
            M.p2(I.member4148.member4503());
            M.p2(I.member4148.member4504());
            M.pFloat(I.member4148.member4505());
            var r = I.member4148.getBackgroundSoundRandom();
            if (r !== undefined) {
                M.p1(r.length);
                for (var y = 0; y < r.length; y++) {
                    M.p2(r[y]);
                }
                M.p3(I.member4148.getBackgroundSoundMinDelay());
                M.p3(I.member4148.getBackgroundSoundMaxDelay());
                M.p1(I.member4148.member4507());
                M.p1(I.member4148.member4508());
                M.p2(I.member4148.member4509());
                M.p2(I.member4148.member4510());
                M.pFloat(I.member4148.member4511());
            } else {
                M.p1(0);
            }
            var C = I.member2519 | (I.member2527 ? 1 : 0) << 8 | I.member2506 << 9;
            if (D[C] === undefined) {
                D[C] = d.member4520.member2621;
                F++;
            }
            G++;
        }
        var J = M.getPos();
        M.setPos(N);
        M.p2(G);
        M.setPos(J);
        M.p2(F);
        for (var K in D) {
            M.p4(K);
            D[K].member1318(M);
        }
    };
    a.prototype.member4243 = function (d) {
        this.member2560(d);
        d.setPos(0);
        return Class210(d);
    };
    a.prototype.member4244 = function (i, W) {
        if (this.member4516) {
            this.member4517 = Packet(W);
            i.gdata(this.member4517.getData(), 0, W);
            i = this.member4517;
            i.setPos(0);
        }
        var ac = {};
        var k = this.member4514.member4085();
        var e = k.member4114();
        var G = ac.member4526 = new Array(i.g2());
        for (var af = 0; af < G.length; af++) {
            var M = i.g1() === 1;
            var K = i.g1() === 1;
            var y = i.g1() === 1;
            var s = i.g1() === 1;
            var Z = i.g2();
            var o = new Uint32Array(Z);
            for (var z = 0; z < Z; z++) {
                o[z] = i.g2();
            }
            var ab = i.g2();
            var J = new Array(ab);
            for (var E = 0; E < ab; E++) {
                var S = J[E] = {};
                S.member2573 = i.g2();
                var d = new Float32Array(3);
                d[0] = i.g3();
                d[1] = i.g3();
                d[2] = i.g3();
                S.member2574 = d;
                S.member2538 = i.g2();
                S.member2539 = i.g2();
                S.member2542 = i.g2();
                S.member2543 = i.g2();
                S.member2544 = i.g2();
                S.member2575 = i.g1();
                S.member2576 = i.g1();
                S.member2577 = i.g2();
                S.member2578 = i.g2();
                S.member2579 = i.gFloat();
            }
            var Q = i.g2();
            var I = new Array(Q);
            for (var E = 0; E < Q; E++) {
                var A = I[E] = {};
                var r = i.g1();
                A.bgsound_random = new Uint32Array(r);
                for (var C = 0; C < r; C++) {
                    A.bgsound_random[C] = i.g2();
                }
                A.bgsound_mindelay = i.g3();
                A.bgsound_maxdelay = i.g3();
                var d = new Float32Array(3);
                d[0] = i.g3();
                d[1] = i.g3();
                d[2] = i.g3();
                A.member2574 = d;
                A.member2538 = i.g2();
                A.member2539 = i.g2();
                A.member2542 = i.g2();
                A.member2543 = i.g2();
                A.member2544 = i.g2();
                A.member2575 = i.g1();
                A.member2576 = i.g1();
                A.member2577 = i.g2();
                A.member2578 = i.g2();
                A.member2579 = i.gFloat();
            }
            var Y = i.g2();
            var U = new Array(Y);
            for (var n = 0; n < Y; n++) {
                var x = U[n] = {};
                x.member2079 = i.g4();
                x.level = i.g1s();
                x.member2507 = i.g1();
                x.member2523 = i.g1s();
                if (x.member2523 === -1) {
                    x.member2523 = undefined;
                }
                var q = i.g2();
                var P = i.g2();
                var N = i.g2();
                x.member1794 = Cuboid({ member1524: i });
                var L = new Float32Array(3);
                L[0] = i.g2();
                L[1] = i.g2();
                L[2] = i.g2();
                x.member2581 = L;
                var T = i.g1();
                var R = i.g1();
                x.active = i.g1() === 1;
                if (x.active) {
                    x.member2506 = i.g4();
                    x.member2514 = P;
                    x.member2515 = N;
                    x.member2519 = i.g1();
                    x.member2520 = i.g1();
                    x.member2522 = i.g1() === 1;
                    x.member2518 = q;
                }
                x.member2582 = i.g1() === 1;
                if (q !== 0) {
                    e.member4162(x.member2507, P, N, T, R, q);
                }
            }
            member4527:
                for (var X = 0; X < U.length; X++) {
                    var O = U[X];
                    if (O.active) {
                        var ad = O.member2506;
                        for (var v = 0; v < this.member4515.length; v++) {
                            if (this.member4515[v].member4519.member4148.member682() === ad) {
                                O.member4148 = this.member4515[v].member4519.member4148;
                                continue member4527;
                            }
                        }
                    }
                }
            var aa = Class377();
            this.member4514.member3320().member2013(aa);
            var ae = Class188(undefined, undefined, this.member433, undefined, undefined, undefined, undefined, undefined, i, !this.member4516);
            G[af] = Class378(this.member433, aa, this.member4514, k, M, K, y, s, ae, J, I, k.member4528(o), this.member4514.member4491(aa.member4099()), U);
            aa.member4185(G[af]);
        }
        var H = ac.member4529 = new Array(i.g2());
        for (var af = 0; af < H.length; af++) {
            var m = i.g1s();
            var F = i.g1s();
            if (F === -1) {
                F = undefined;
            }
            var ad = i.g4();
            var s = i.g1() === 1;
            var u = i.g1();
            var t = i.g1();
            var D = i.g1() === 1;
            var j = i.g2();
            var h = i.g1() === 1;
            var P = i.g2();
            var N = i.g2();
            var V = i.g1();
            var Z = i.g1();
            var o = new Uint32Array(Z);
            for (var z = 0; z < Z; z++) {
                o[z] = i.g2();
            }
            var B = Class377();
            var ae = Class188(undefined, undefined, this.member433, undefined, undefined, undefined, undefined, undefined, i, !this.member4516);
            var g = H[af] = Class389(B, this.member4514, k, m, ad, u, t, D, s, P, N, P - this.member1643 * Class86.member729 - this.member4514.member4521(), N - this.member1642 * Class86.member729 - this.member4514.member4522(), F, k.member4528(o), j, h, ae);
            g.member4090(Class121.member893);
            g.member4473(V);
            B.member4185(g);
        }
        return ac;
    };
    return function (i, h, g, m, k, e, d, j) {
        return new a(i, h, g, m, k, e, d, j);
    };
}();