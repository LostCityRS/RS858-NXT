import { Class372 } from 'Class372.js';
import { Class374 } from 'Class374.js';
import { Class166 } from 'Class166.js';
import { Class86 } from 'Class86.js';
import { Class273 } from 'Class273.js';
import { Class407 } from 'Class407.js';
import { Class377 } from 'Class377.js';
import { Class413 } from 'Class413.js';
import { Class121 } from 'Class121.js';
import { Class402 } from 'Class402.js';
import { Class417 } from 'Class417.js';
import { Class412 } from 'Class412.js';
import { Class405 } from 'Class405.js';
import { Class399 } from 'Class399.js';
import { Class395 } from 'Class395.js';
import { Class398 } from 'Class398.js';
import { Class408 } from 'Class408.js';
export var Class418 = function () {
    var a = function (e, h, c, d, b, g) {
        this.member1643 = undefined;
        this.member1642 = undefined;
        this.member1644 = undefined;
        this.member4815 = null;
        this.member4816 = null;
        this.member4211 = null;
        this.member4817 = null;
        this.member4818 = null;
        this.member4631 = false;
        this.member4819 = null;
        this.member4820 = member47;
        this.member4821 = false;
        this.member4822 = null;
        this.member4699 = member47;
        this.member4823 = null;
        this.member4824 = null;
        this.member4825 = null;
        this.member4826 = null;
        if (e !== undefined && h !== undefined && c !== undefined && d !== undefined && b !== undefined) {
            member46(this, Class372, e, h, c, Class374.member4140, -1);
            this.member1643 = d;
            this.member1642 = b;
            if (g !== undefined) {
                this.member1644 = this.member4827(g);
            }
            this.member4093(Class166(new Float32Array([
                0,
                0,
                0
            ]), new Float32Array([
                Class86.member730,
                Class86.member730,
                Class86.member730
            ])));
        } else {
            throw new Error('1099 ');
        }
    };
    member45(Class372, a);
    a.prototype.member4828 = function () {
        return this.member1643;
    };
    a.prototype.member4829 = function () {
        return this.member1642;
    };
    a.prototype.member4830 = function () {
        return this.member4815;
    };
    a.prototype.member4831 = function () {
        return this.member4211;
    };
    a.prototype.member4832 = function () {
        return this.member4818;
    };
    a.prototype.member4833 = function () {
        return this.member4631;
    };
    a.prototype.member4834 = function () {
        return this.member4819;
    };
    a.prototype.member4835 = function () {
        return this.member4820;
    };
    a.prototype.member4380 = function (m, S, P, G, R, O, L, E, q, C, B, z, F, o) {
        var k = this.member4087();
        var j = this.member4089();
        var g = this.member4085();
        var r = true;
        if (g.member4836() && this.member4699 === member47) {
            this.member4837(S, this.member1643, this.member1642);
        }
        if (this.member4819 === null) {
            this.member4819 = Class273({
                member1643: this.member1643,
                member1642: this.member1642,
                member1644: this.member1644
            });
        }
        if (!this.member4819.member3250()) {
            if (!this.member4819.load(P, G)) {
                r = false;
            }
        }
        if (this.member4819.member3250() && this.member4823 !== null) {
            this.member4838();
        }
        if (this.member4817 === null) {
            this.member4817 = Class407({
                member1643: this.member1643,
                member1642: this.member1642,
                member1644: this.member1644
            });
        }
        if (!this.member4817.member3250()) {
            if (!this.member4817.load(P, G)) {
                return false;
            }
        }
        var n = this.member4817.member4630();
        if (this.member4815 === null) {
            var Q = Class377();
            this.member4815 = Class413(Q, this, g, this.member1643, this.member1642, n, this.member1644);
            Q.member4185(this.member4815);
            this.member3320().member2013(Q);
            if (this.member4824 !== null || Class121.member1033(j)) {
                this.member4815.member4765();
            }
        }
        this.member4815.member4090(j);
        if (!this.member4815.member4091()) {
            this.member4815.member4380(m, S, P, G, R, E, o);
            if (!this.member4815.member4091()) {
                return false;
            }
            if (this.member4824 !== null) {
                if (this.member4822 !== null) {
                    for (var H = 0; H < this.member4822.length; H++) {
                        for (var y = 0; y < this.member4822[H].length; y++) {
                            var D = this.member4822[H][y];
                            if (D !== undefined && D !== null) {
                                D.member4613();
                            }
                        }
                    }
                }
                this.member4839();
            }
        }
        if (n.length > 0) {
            this.member4631 = true;
            if (this.member4818 === member47) {
                var T = Class377();
                this.member4818 = Class402(T, this, g, this.member1643, this.member1642, n);
                T.member4185(this.member4818);
                this.member3320().member2013(T);
            }
            this.member4818.member4090(j);
            if (!this.member4818.member4091()) {
                this.member4818.member4380(m, S, P, R);
                if (!this.member4818.member4091()) {
                    r = false;
                } else {
                    this.member4840();
                }
            }
        } else {
            this.member4631 = false;
        }
        if (j <= Class121.member797 && j <= Class417.member4804()) {
            if (this.member4816 === null) {
                this.member4816 = Class412({
                    member1643: this.member1643,
                    member1642: this.member1642,
                    member1644: this.member1644
                });
            }
            if (!this.member4816.member3250()) {
                if (this.member4816.load(P, G, g.member4114())) {
                    var i = this.member3320();
                    var b = this.member4816.member4751();
                    this.member4211 = new Array(b.length);
                    for (var u = 0; u < b.length; u++) {
                        var N = Class377();
                        this.member3320().member2013(N);
                        var h = this.member4211[u] = Class405(N, i, g, G, b[u]);
                        N.member4185(h);
                        N.translate(h.member4653());
                        h.member4654();
                        g.member4841(h.member4525(), h);
                    }
                    this.member4842();
                } else {
                    r = false;
                }
            }
        } else {
            this.member4843();
        }
        if (j < Class121.member778 && j <= Class417.member4804()) {
            if (!this.member4821 || this.member4822 === member47) {
                if (this.member4820 === member47) {
                    this.member4820 = Class399({
                        member1643: this.member1643,
                        member1642: this.member1642,
                        member1644: this.member1644
                    });
                }
                if (!this.member4820.member3250()) {
                    if (!this.member4820.load(P, G, g.member4111())) {
                        r = false;
                    }
                }
                if (this.member4820.member3250()) {
                    var e = this.member1644 !== undefined ? Class395.member4546 : Class395.member4545;
                    var d = Class86.member729 / e;
                    if (Class121.member1033(j)) {
                        this.member4822 = null;
                        d = 0;
                    } else if (this.member4822 === null) {
                        this.member4822 = new Array(d);
                        for (var H = 0; H < d; H++) {
                            this.member4822[H] = new Array(d);
                        }
                    }
                    for (var H = 0; H < d; H++) {
                        for (var y = 0; y < d; y++) {
                            if (this.member4822[H][y] === undefined || this.member4822[H][y] === null) {
                                var v = Class377();
                                this.member4822[H][y] = Class398(v, this, g, this.member1643, this.member1642, H * e, y * e, (H + 1) * e - 1, (y + 1) * e - 1, this.member4820.member4617(), n);
                                v.member4185(this.member4822[H][y]);
                                v.translate(new Float32Array([
                                    H * e * Class86.member718,
                                    0,
                                    y * e * Class86.member718
                                ]));
                                this.member3320().member2013(v);
                            }
                        }
                    }
                    this.member4821 = true;
                } else {
                    r = false;
                }
            }
            if (this.member4821 && this.member4822 !== null) {
                var e = this.member1644 !== undefined ? Class395.member4546 : Class395.member4545;
                var d = Class86.member729 / e;
                var J = 0, I = 0;
                var M = d, K = d;
                if (E === q) {
                    if (this.member1642 - B === q) {
                        K--;
                    } else if (this.member1642 - B === -q) {
                        I++;
                    }
                    if (this.member1643 - C === q) {
                        M--;
                    } else if (this.member1643 - C === -q) {
                        J++;
                    }
                }
                for (var H = J; H < M; H++) {
                    for (var y = I; y < K; y++) {
                        var D = this.member4822[H][y];
                        var A = D.member3320();
                        var c = A.member4167();
                        var t = c.member1809(L);
                        var s = Class417.member4571(t, L[1]);
                        if (s < Class121.member778 && s <= Class417.member4804()) {
                            D.member4090(s);
                            if (!D.member4091()) {
                                D.member4380(m, S, P, G, R, O, z, F);
                                if (!D.member4091()) {
                                    r = false;
                                }
                            }
                        } else if (!F) {
                            D.member512();
                        }
                    }
                }
            }
        } else if (!F) {
            this.member4844();
        }
        if (r) {
            this.member4088(j);
            this.member3320().member4202(false);
            return true;
        } else if (this.member4091()) {
            this.member4088(j + 1);
            return false;
        }
    };
    a.prototype.member512 = function () {
        this.member4845();
        this.member4843();
        this.member4846();
        this.member4847();
        this.member4844();
        if (this.member4820 !== member47) {
            this.member4820.member512();
            this.member4820 = member47;
        }
        this.member4088(Class121.member778);
    };
    a.prototype.member4845 = function () {
        if (this.member4819 !== null) {
            this.member4819.member512();
            this.member4819 = null;
        }
        this.member4838();
    };
    a.prototype.member4848 = function () {
        if (this.member4819 !== null) {
            this.member4823 = this.member4819;
            this.member4819 = null;
        }
    };
    a.prototype.member4838 = function () {
        if (this.member4823 !== null) {
            this.member4823.member512();
            this.member4823 = null;
        }
    };
    a.prototype.member4846 = function () {
        if (this.member4815 !== null) {
            this.member4815.member512();
            this.member3320().removeChild(this.member4815.member3320());
            this.member4815 = null;
        }
        this.member4839();
    };
    a.prototype.member4849 = function () {
        if (this.member4815 !== null) {
            this.member4824 = this.member4815;
            this.member4815 = null;
        }
    };
    a.prototype.member4839 = function () {
        if (this.member4824 !== null) {
            this.member4824.member512();
            this.member3320().removeChild(this.member4824.member3320());
            this.member4824 = null;
        }
    };
    a.prototype.member4847 = function () {
        if (this.member4817 !== member47) {
            this.member4817.member512();
            this.member4817 = member47;
        }
        if (this.member4818 !== member47) {
            this.member4818.member512();
            this.member3320().removeChild(this.member4818.member3320());
            this.member4818 = member47;
        }
        this.member4840();
    };
    a.prototype.member4850 = function () {
        if (this.member4817 !== member47) {
            this.member4817.member512();
            this.member4817 = member47;
        }
        if (this.member4818 !== member47) {
            this.member4825 = this.member4818;
            this.member4818 = member47;
        }
    };
    a.prototype.member4840 = function () {
        if (this.member4825 !== member47) {
            this.member4825.member512();
            this.member3320().removeChild(this.member4825.member3320());
            this.member4825 = member47;
        }
    };
    a.prototype.member4843 = function () {
        if (this.member4816 !== null) {
            this.member4816.member512();
            this.member4816 = null;
        }
        if (this.member4211 !== null) {
            var c = this.member4085();
            for (var b = 0; b < this.member4211.length; b++) {
                var e = this.member4211[b];
                c.member4851(e.member4525());
                var d = e.member3320();
                this.member3320().removeChild(d);
                e.member512();
            }
            this.member4211 = null;
        }
        this.member4842();
    };
    a.prototype.member4852 = function () {
        if (this.member4816 !== null) {
            this.member4816.member512();
            this.member4816 = null;
        }
        if (this.member4211 !== null) {
            this.member4826 = this.member4211;
            this.member4211 = null;
        }
    };
    a.prototype.member4842 = function () {
        if (this.member4826 !== null) {
            var c = this.member4085();
            for (var b = 0; b < this.member4826.length; b++) {
                var e = this.member4826[b];
                c.member4851(e.member4525());
                var d = e.member3320();
                this.member3320().removeChild(d);
                e.member512();
            }
            this.member4826 = null;
        }
    };
    a.prototype.member4844 = function () {
        if (this.member4822 !== null) {
            for (var b = 0; b < this.member4822.length; b++) {
                for (var d = 0; d < this.member4822[b].length; d++) {
                    var c = this.member4822[b][d];
                    if (c !== null) {
                        c.member512();
                        this.member3320().removeChild(c.member3320());
                        c = null;
                    }
                }
            }
            this.member4822 = null;
        }
    };
    a.prototype.member4763 = function (h, e, d, c, b) {
        if (this.member4815 !== null && this.member4815.member4091()) {
            return this.member4815.member4763(h, e, d, c, b);
        }
        if (this.member4824 !== null && this.member4824.member4091()) {
            var g = this.member4824.member4763(h, e, d, c, b);
            if (g === 0) {
                g = -1;
            }
            return g;
        }
        return -1;
    };
    a.prototype.member4115 = function (h, e, d, c, b) {
        if (this.member4815 !== null && this.member4815.member4091()) {
            return this.member4815.member4115(h, e, d, c, b);
        }
        if (this.member4824 !== null && this.member4824.member4091()) {
            var g = this.member4824.member4115(h, e, d, c, b);
            if (g === 0) {
                g = -1;
            }
            return g;
        }
        return -1;
    };
    a.prototype.member4637 = function (d, c, b) {
        if (this.member4815 !== null && this.member4815.member4091()) {
            return this.member4815.member4637(d, c, b);
        }
        if (this.member4824 !== null && this.member4824.member4091()) {
            this.member4824.member4637(d, c, b);
        }
        return -1;
    };
    a.prototype.member4570 = function (d, c, b) {
        if (this.member4815 !== null && this.member4815.member4091()) {
            return this.member4815.member4570(d, c, b);
        }
        if (this.member4824 !== null && this.member4824.member4091()) {
            this.member4824.member4570(d, c, b);
        }
        return -1;
    };
    a.prototype.member4114 = function (b) {
        if (this.member4815 !== null && this.member4815.member4091()) {
            return this.member4815.member4114(b);
        }
        if (this.member4824 !== null && this.member4824.member4091()) {
            return this.member4824.member4114(b);
        }
        return null;
    };
    a.prototype.member4162 = function (h, e, c, b, d, g) {
        if (this.member4815 !== null) {
            this.member4815.member4162(h, e, c, b, d, g);
        }
    };
    a.prototype.member4163 = function (h, e, c, b, d, g) {
        if (this.member4815 !== null) {
            this.member4815.member4163(h, e, c, b, d, g);
        }
    };
    a.prototype.member4853 = function (c, e) {
        if (this.member4822 === null) {
            return null;
        }
        var g = this.member1644 !== undefined ? Class395.member4546 : Class395.member4545;
        var b = Math.floor(c / g);
        var d = Math.floor(e / g);
        return this.member4822[b][d];
    };
    a.prototype.member4854 = function (e) {
        if (e === undefined || e === null) {
            throw new Error('1100 ');
        }
        if (this.member1644 === undefined) {
            throw new Error('1101 ');
        }
        for (var d = 0; d < Class86.member414; d++) {
            for (var c = 0; c < Class86.member716; c++) {
                for (var b = 0; b < Class86.member716; b++) {
                    if (!this.member4855(this.member1644.member3252[d][c][b], e[d][c][b])) {
                        return false;
                    }
                }
            }
        }
        return true;
    };
    a.prototype.member4855 = function (c, b) {
        if (c === undefined && b === undefined) {
            return true;
        }
        if (c === undefined || b === undefined) {
            return false;
        }
        if (c.level !== b.level || c.member4620 !== b.member4620 || c.member4621 !== b.member4621 || c.member1668 !== b.member1668) {
            return false;
        }
        return true;
    };
    a.prototype.member4856 = function (e) {
        this.member4848();
        this.member4849();
        this.member4850();
        this.member4852();
        this.member4821 = false;
        if (this.member4820 !== member47) {
            this.member4820.member512();
            this.member4820 = member47;
        }
        if (this.member4822 !== null) {
            for (var c = 0; c < Class86.member716; c++) {
                for (var b = 0; b < Class86.member716; b++) {
                    for (var d = 0; d < Class86.member414; d++) {
                        if (!this.member4855(this.member1644.member3252[d][c][b], e[d][c][b])) {
                            if (this.member4822[c][b] !== null) {
                                this.member4822[c][b].member512();
                                this.member3320().removeChild(this.member4822[c][b].member3320());
                                this.member4822[c][b] = null;
                            }
                            break;
                        }
                    }
                }
            }
        }
        this.member1644 = this.member4827(e);
        this.member4088(Class121.member778);
    };
    a.prototype.member4857 = function (b) {
        if (b === undefined) {
            return '';
        } else {
            return b.level + ',' + b.member4620 + ',' + b.member4621 + ' (' + b.member1668 + ')';
        }
    };
    a.prototype.member4827 = function (j) {
        var o = {
            member3252: j,
            member3251: null
        };
        var d = new Array(0);
        var i = {};
        for (var b = 0; b < Class86.member414; b++) {
            for (var g = 0; g < Class86.member716; g++) {
                for (var e = 0; e < Class86.member716; e++) {
                    var c = o.member3252[b][g][e];
                    if (c !== undefined) {
                        var k = Math.floor(c.member4620 / Class86.member716);
                        var h = Math.floor(c.member4621 / Class86.member716);
                        var n = k | h << 16;
                        var m = i[n];
                        if (m === undefined) {
                            m = i[n] = d.length;
                            d.push({
                                member1643: k,
                                member1642: h
                            });
                        }
                        c.member3253 = m;
                    }
                }
            }
        }
        o.member3251 = d;
        return o;
    };
    a.prototype.member4837 = function (e, d, c) {
        var b = Class377();
        this.member4699 = Class408(e, b, this, this.member4085(), d, c);
        b.member4185(this.member4699);
        this.member3320().member2013(b);
    };
    a.prototype.member4858 = function () {
        if (this.member4699 !== undefined && this.member4699 !== member47) {
            this.member4699.member512();
            this.member4699.member3320().member4189();
            this.member4699 = member47;
        }
    };
    return function (e, h, c, d, b, g) {
        return new a(e, h, c, d, b, g);
    };
}();