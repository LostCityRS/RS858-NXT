import { Class290 } from 'Class290.js';
import { Class32 } from 'Class32.js';
import { Class381 } from 'Class381.js';
import { Class390 } from 'Class390.js';
import { Class211 } from 'Class211.js';
import { Class86 } from 'Class86.js';
import { Class210 } from 'Class210.js';
import { Class124 } from 'Class124.js';
import { Class166 } from 'Class166.js';
import { Class377 } from 'Class377.js';
import { Class188 } from 'Class188.js';
import { Class378 } from 'Class378.js';
import { Class389 } from 'Class389.js';
import { Class121 } from 'Class121.js';
export var Class391 = function () {
    var b = Class290();
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
        M.member1051(this.member2504);
        var G = 0;
        var D = {};
        var F = 0;
        var N = M.member1047();
        M.member607(N + 2);
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
            var n = I.member4148.member4164(I.member2520) * Class86.member718;
            var e = I.member4148.member4165(I.member2520) * Class86.member718;
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
            M.member1056(I.member2506);
            M.member1051(I.level);
            M.member1051(j);
            M.member1051(I.x - this.member4514.member4521());
            M.member1051(I.member756 - this.member4514.member4522());
            var z = I.member4148.member2968();
            M.member1054((I.x - this.member4514.member4521()) * Class86.member718 + n / 2 + (z === null ? 0 : z[0]));
            M.member1054(d.height);
            M.member1054(z === null ? 0 : z[1]);
            M.member1054((I.member756 - this.member4514.member4522()) * Class86.member718 + e / 2 + (z === null ? 0 : z[2]));
            M.member1054(v);
            M.member1054(q);
            M.member1055(k);
            M.member1055(i);
            M.member1054(n);
            M.member1054(e);
            M.member1054(A);
            M.member1051(I.member2519);
            M.member1051(I.member2520);
            M.member1051(I.member2521 ? 1 : 0);
            var H = I.member4148.member4484(g, I.level, v, q, I.member2520);
            M.member1051(H === undefined ? -1 : H);
            M.member1051(I.member4148.member2985() || I.member4148.member4523() ? 1 : 0);
            M.member1051(I.member4148.member4524() ? 1 : 0);
            M.member1051(I.member4148.member4494(I.member2519) ? 1 : 0);
            M.member1051(I.member2527 ? 1 : 0);
            M.member1051(I.member4148.member4495() ? 1 : 0);
            M.member1051(I.member2529);
            M.member1051(I.member4148.member4333());
            M.member1054(I.member4148.member4334());
            M.member1051(d.member2532 ? 1 : 0);
            if (d.member2533 !== undefined) {
                var u = d.member2533;
                if (u.member2534 !== undefined) {
                    M.member1051(1);
                    M.member1051(u.member2534.length);
                    M.member1051(u.member2534[0].length);
                    for (var B = 0; B < u.member2534.length; B++) {
                        for (var s = 0; s < u.member2534[0].length; s++) {
                            M.member1054(u.member2534[B][s]);
                        }
                    }
                } else {
                    M.member1051(0);
                }
                if (u.member2371 !== undefined) {
                    M.member1051(1);
                    M.member1051(u.member2371.length);
                    M.member1051(u.member2371[0].length);
                    for (var B = 0; B < u.member2371.length; B++) {
                        for (var s = 0; s < u.member2371[0].length; s++) {
                            M.member1054(u.member2371[B][s]);
                        }
                    }
                } else {
                    M.member1051(0);
                }
            } else {
                M.member1054(0);
            }
            M.member1054(I.member2535);
            M.member1051(I.member2536 ? 1 : 0);
            b.level = I.level;
            b.member3454[0] = k;
            b.member3454[1] = d.height;
            b.member3454[2] = i;
            var m = o.member4485(b, c, false);
            if (m === -1) {
                m = 0;
            }
            M.member1051(m);
            for (var h = 0; h < m; h++) {
                M.member1054(c[h].member4525());
            }
            M.member1054(I.member4148.member4164());
            M.member1054(I.member4148.member4165());
            M.member1054(I.member4148.member4497());
            M.member1051(I.member4148.member4498());
            M.member1054(I.member4148.member4499());
            M.member1054(I.member4148.member4500());
            M.member1054(I.member4148.member4501());
            M.member1051(I.member4148.member4502());
            M.member1054(I.member4148.member4503());
            M.member1054(I.member4148.member4504());
            M.member1063(I.member4148.member4505());
            var r = I.member4148.member4506();
            if (r !== undefined) {
                M.member1051(r.length);
                for (var y = 0; y < r.length; y++) {
                    M.member1054(r[y]);
                }
                M.member1055(I.member4148.member4512());
                M.member1055(I.member4148.member4513());
                M.member1051(I.member4148.member4507());
                M.member1051(I.member4148.member4508());
                M.member1054(I.member4148.member4509());
                M.member1054(I.member4148.member4510());
                M.member1063(I.member4148.member4511());
            } else {
                M.member1051(0);
            }
            var C = I.member2519 | (I.member2527 ? 1 : 0) << 8 | I.member2506 << 9;
            if (D[C] === undefined) {
                D[C] = d.member4520.member2621;
                F++;
            }
            G++;
        }
        var J = M.member1047();
        M.member607(N);
        M.member1054(G);
        M.member607(J);
        M.member1054(F);
        for (var K in D) {
            M.member1056(K);
            D[K].member1318(M);
        }
    };
    a.prototype.member4243 = function (d) {
        this.member2560(d);
        d.member607(0);
        return Class210(d);
    };
    a.prototype.member4244 = function (i, W) {
        if (this.member4516) {
            this.member4517 = Class124(W);
            i.member1092(this.member4517.getData(), 0, W);
            i = this.member4517;
            i.member607(0);
        }
        var ac = {};
        var k = this.member4514.member4085();
        var e = k.member4114();
        var G = ac.member4526 = new Array(i.member608());
        for (var af = 0; af < G.length; af++) {
            var M = i.member609() === 1;
            var K = i.member609() === 1;
            var y = i.member609() === 1;
            var s = i.member609() === 1;
            var Z = i.member608();
            var o = new Uint32Array(Z);
            for (var z = 0; z < Z; z++) {
                o[z] = i.member608();
            }
            var ab = i.member608();
            var J = new Array(ab);
            for (var E = 0; E < ab; E++) {
                var S = J[E] = {};
                S.member2573 = i.member608();
                var d = new Float32Array(3);
                d[0] = i.g3();
                d[1] = i.g3();
                d[2] = i.g3();
                S.member2574 = d;
                S.member2538 = i.member608();
                S.member2539 = i.member608();
                S.member2542 = i.member608();
                S.member2543 = i.member608();
                S.member2544 = i.member608();
                S.member2575 = i.member609();
                S.member2576 = i.member609();
                S.member2577 = i.member608();
                S.member2578 = i.member608();
                S.member2579 = i.member320();
            }
            var Q = i.member608();
            var I = new Array(Q);
            for (var E = 0; E < Q; E++) {
                var A = I[E] = {};
                var r = i.member609();
                A.member2549 = new Uint32Array(r);
                for (var C = 0; C < r; C++) {
                    A.member2549[C] = i.member608();
                }
                A.member2550 = i.g3();
                A.member2551 = i.g3();
                var d = new Float32Array(3);
                d[0] = i.g3();
                d[1] = i.g3();
                d[2] = i.g3();
                A.member2574 = d;
                A.member2538 = i.member608();
                A.member2539 = i.member608();
                A.member2542 = i.member608();
                A.member2543 = i.member608();
                A.member2544 = i.member608();
                A.member2575 = i.member609();
                A.member2576 = i.member609();
                A.member2577 = i.member608();
                A.member2578 = i.member608();
                A.member2579 = i.member320();
            }
            var Y = i.member608();
            var U = new Array(Y);
            for (var n = 0; n < Y; n++) {
                var x = U[n] = {};
                x.member2079 = i.member1073();
                x.level = i.member1070();
                x.member2507 = i.member609();
                x.member2523 = i.member1070();
                if (x.member2523 === -1) {
                    x.member2523 = undefined;
                }
                var q = i.member608();
                var P = i.member608();
                var N = i.member608();
                x.member1794 = Class166({ member1524: i });
                var L = new Float32Array(3);
                L[0] = i.member608();
                L[1] = i.member608();
                L[2] = i.member608();
                x.member2581 = L;
                var T = i.member609();
                var R = i.member609();
                x.member2524 = i.member609() === 1;
                if (x.member2524) {
                    x.member2506 = i.member1073();
                    x.member2514 = P;
                    x.member2515 = N;
                    x.member2519 = i.member609();
                    x.member2520 = i.member609();
                    x.member2522 = i.member609() === 1;
                    x.member2518 = q;
                }
                x.member2582 = i.member609() === 1;
                if (q !== 0) {
                    e.member4162(x.member2507, P, N, T, R, q);
                }
            }
            member4527:
                for (var X = 0; X < U.length; X++) {
                    var O = U[X];
                    if (O.member2524) {
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
        var H = ac.member4529 = new Array(i.member608());
        for (var af = 0; af < H.length; af++) {
            var m = i.member1070();
            var F = i.member1070();
            if (F === -1) {
                F = undefined;
            }
            var ad = i.member1073();
            var s = i.member609() === 1;
            var u = i.member609();
            var t = i.member609();
            var D = i.member609() === 1;
            var j = i.member608();
            var h = i.member609() === 1;
            var P = i.member608();
            var N = i.member608();
            var V = i.member609();
            var Z = i.member609();
            var o = new Uint32Array(Z);
            for (var z = 0; z < Z; z++) {
                o[z] = i.member608();
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