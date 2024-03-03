import { Class374 } from 'Class374.js';
import { Class489 } from 'Class489.js';
import { Class486 } from 'Class486.js';
import { Class465 } from 'Class465.js';
import { Class423 } from 'Class423.js';
import { Class490 } from 'Class490.js';
import { Class495 } from 'Class495.js';
import { Class315 } from 'Class315.js';
import { Class131 } from 'Class131.js';
import { Class497 } from 'Class497.js';
import { Class494 } from 'Class494.js';
import { Class86 } from 'Class86.js';
import { Class166 } from 'Class166.js';
import { Class130 } from 'Class130.js';
import { Class498 } from 'Class498.js';
import { Class491 } from 'Class491.js';
import { Class432 } from 'Class432.js';
import { Class415 } from 'Class415.js';
import { Class124 } from 'Class124.js';
import { Class462 } from 'Class462.js';
import { Class450 } from 'Class450.js';
import { Class371 } from 'Class371.js';
import { Class332 } from 'Class332.js';
import { Class347 } from 'Class347.js';
import { Class351 } from 'Class351.js';
import { Class496 } from 'Class496.js';
export var Class499 = function () {
    var c = false;
    var b = 50;
    var a = function (e) {
        e.member508 = Class374.member4134;
        member46(this, Class489, e);
        this.member7992 = member47;
        this.member7993 = false;
        this.member7994 = false;
        this.member7995 = Class486.member7729;
        this.member7996 = 0;
        this.member7997 = -1;
        this.member7998 = -1;
        this.member7999 = -1;
        this.member8000 = -1;
        this.member8001 = false;
        this.member8002 = 0;
        this.member8003 = 0;
        this.member8004 = 255;
        this.member8005 = 0;
        this.member8006 = 0;
        this.member8007 = -1;
        this.member8008 = 0;
        this.member8009 = false;
        this.member8010 = 8;
        this.member8011 = new Float32Array(this.member8010);
        for (var d = 0; d < this.member8011.length; d++) {
            this.member8011[d] = -1;
        }
        this.member8012 = new Float32Array(this.member8010);
        for (var d = 0; d < this.member8012.length; d++) {
            this.member8012[d] = -1;
        }
        this.member8013 = new Array(this.member8010);
        this.member8014 = undefined;
    };
    member45(Class489, a);
    a.prototype.member7136 = function () {
        return this.member7992;
    };
    a.prototype.member6721 = function () {
        return -this.member7649() - 1;
    };
    a.prototype.member8015 = function () {
        return this.member7993;
    };
    a.prototype.member7799 = function () {
        return this.member7994;
    };
    a.prototype.member7798 = function () {
        return this.member7995;
    };
    a.prototype.member3018 = function () {
        return this.member7996;
    };
    a.prototype.member8016 = function () {
        return this.member8005;
    };
    a.prototype.member8017 = function () {
        return this.member8006;
    };
    a.prototype.member8018 = function () {
        return this.member8007;
    };
    a.prototype.member8019 = function () {
        return this.member8008;
    };
    a.prototype.member7743 = function () {
        return Class465.member4134;
    };
    a.prototype.member8020 = function () {
        return this.member8014;
    };
    a.prototype.member7817 = function () {
        for (var d = 0; d < this.member8013.length; d++) {
            if (this.member8011[d] === -1) {
                this.member8013[d] = undefined;
                continue;
            }
            var e = undefined;
            e = Class423.member6131(this.member8012[d], true);
            if (e === member47) {
                this.member8013[d] = member47;
            } else if (e === undefined) {
                this.member8013[d] = undefined;
            } else {
                this.member8013[d] = e[this.member8011[d]];
            }
        }
        return this.member8013;
    };
    a.prototype.member7831 = function () {
        return this.member8009;
    };
    a.prototype.member8021 = function (e, d, g) {
        this.member7811(Class490({
            text: e,
            member7892: d,
            member7893: g,
            member7894: Date.now() + 1000 * this.member7710.member6116.member6117().member8022(),
            member7710: this.member7710
        }));
    };
    a.prototype.member7810 = function () {
        var e = this.member7710.member7259;
        var d = this.member7710.member8023.member7179();
        if (d === Class495.member7145 || d === Class495.member7932 || d === Class495.member7931 && e.member7232(this.member7787())) {
            return false;
        }
        return true;
    };
    a.prototype.member4440 = function () {
        this.member7823();
    };
    a.prototype.member8024 = function (m) {
        m.member607(0);
        var e = m.member609();
        var d = e & 1;
        var g = this.member8001;
        this.member8001 = (e & 2) !== 0;
        var j = (e & 4) !== 0;
        var i = this.member7795();
        this.member7835((e >> 3 & 7) + 1);
        var k = (e & 64) !== 0;
        var h = (e & 128) !== 0;
        if (k) {
            this.member7789(m.member1089(true));
        } else {
            this.member7789(undefined);
        }
        if (h) {
            this.member7790(m.member1089(true));
        } else {
            this.member7790(undefined);
        }
        this.member8009 = m.member1070() === 1;
        if (this.member7710.clientParameters.member8025.value === Class315.member3696 && this.member7710.member7135().member8026() >= 2) {
            this.member8009 = false;
        }
        if (!this.member8027(m, d)) {
            return false;
        }
        this.member3010(m.member1089());
        this.member7788(this.member3009());
        if (this === this.member7710.member7135().member6453()) {
            this.member7710.member7135().member3010(this.member3009());
        }
        this.member8028();
        this.member8005 = m.member609();
        if (j) {
            this.member8008 = m.member608();
            if (this.member8008 === 65535) {
                this.member8008 = -1;
            }
            this.member8006 = this.member8005;
            this.member8007 = -1;
        } else {
            this.member8008 = 0;
            this.member8006 = m.member609();
            this.member8007 = m.member609();
            if (this.member8007 === 255) {
                this.member8007 = -1;
            }
        }
        this.member8002 = m.member609();
        if (this.member8002 != 0) {
            this.member7997 = m.member608();
            this.member7998 = m.member608();
            this.member7999 = m.member608();
            this.member8000 = m.member608();
            this.member8004 = m.member609();
        } else {
            this.member7997 = -1;
            this.member7998 = -1;
            this.member7999 = -1;
            this.member8000 = -1;
            this.member8004 = -1;
        }
        return true;
    };
    a.prototype.member8029 = function (g) {
        g.member607(0);
        var d = g.member609();
        for (var e = 0; e < this.member8013.length; e++) {
            if ((d & 1 << e) != 0) {
                this.member8011[e] = g.member609();
                this.member8012[e] = g.member608();
            } else {
                this.member8011[e] = -1;
                this.member8012[e] = -1;
            }
        }
    };
    if (true) {
        a.prototype.member8027 = function (y, r) {
            var v = -1;
            this.member7996 = 0;
            var d = this.member7710.member6116.member8030();
            var u = d.member8031();
            var k = new Array(u.length);
            var m = new Array(u.length);
            var j = new Array(u.length);
            for (var E = 0; E < u.length; E++) {
                if (u[E] !== d.member8032) {
                    var z = y.member609();
                    if (z === 0) {
                        k[E] = undefined;
                        continue;
                    }
                    var F = y.member609();
                    var A = (z << 8) + F;
                    if (E === 0 && A === 65535) {
                        v = y.member1086();
                        this.member7996 = y.member609();
                        break;
                    }
                    if (A >= 16384) {
                        A = A - 16384;
                        k[E] = { member7907: A };
                        var q = this.member7710.member2970.member3227(Class131.member1214.member1204, A);
                        if (q === member47) {
                            return false;
                        }
                        j[E] = q;
                        var e = q.member3018();
                        if (e !== 0) {
                            this.member7996 = e;
                        }
                        continue;
                    }
                    k[E] = { member7470: A - 256 };
                }
            }
            if (v === -1) {
                var s = y.member608();
                var i = 0;
                for (var E = 0; E < u.length; E++) {
                    if (u[E] !== d.member8033) {
                        continue;
                    }
                    if ((s & 1 << i) !== 0) {
                        m[E] = Class497({
                            member7937: j[E],
                            member8034: k[E],
                            member2698: y
                        });
                    }
                    i++;
                }
            }
            var h = new Array(10);
            var B = this.member7710.member6116.member6117().member7921();
            for (var E = 0; E < 10; E++) {
                var C = y.member609();
                if (B.length < 1 || C < 0 || C >= B[E][0].length) {
                    C = 0;
                }
                h[E] = C;
            }
            var g = new Array(10);
            var o = this.member7710.member6116.member6117().member7924();
            for (var E = 0; E < 10; E++) {
                var x = y.member609();
                if (o.length < 1 || x < 0 || x >= o[E][0].length) {
                    x = 0;
                }
                g[E] = x;
            }
            this.member7818(y.member608());
            if (this.member7992 === member47) {
                this.member7992 = Class494({
                    member995: this.member7710.member995,
                    member2970: this.member7710.member2970,
                    member4409: this.member7710.member4409,
                    member7911: this.member7710.member6116.member6117()
                });
            }
            this.member7992.member7912(d, k, m, h, g, r === 1, v);
            if (v !== -1) {
                var D = this.member7710.member2970.member3227(Class131.member1213.member1204, v);
                this.member8014 = D;
                if (D === member47) {
                    return false;
                }
                this.member7835(D.member7795());
            } else {
                this.member8014 = undefined;
            }
            var t = this.member7795() * Class86.member718 / 2;
            var n = this.member7795() * Class86.member718 / 2;
            this.member4093(Class166(new Float32Array([
                -t,
                0,
                -n
            ]), new Float32Array([
                t,
                Class86.member731,
                n
            ])));
            this.member4440();
            return true;
        };
        a.prototype.member8028 = function () {
            this.member7993 = this.member7710.member7259.member7232(this.member7787());
        };
        a.prototype.member7545 = function () {
            if (this.member7992 === member47) {
                return member47;
            }
            var d = this.member7992.member7545(this.member7710.member433);
            if (this.member7992.member7910(true) && d !== null && d.member2098() !== null) {
                this.member4093(Class166(d.member2098()));
            }
            return d;
        };
        a.prototype.member7546 = function () {
            if (this.member7992 === member47) {
                return member47;
            }
            return this.member7992.member7546();
        };
        a.prototype.member7543 = function () {
            if (this.member7992 === member47) {
                return member47;
            }
            return this.member7992.member7543(this.member7710.member433);
        };
        a.prototype.member7544 = function () {
            if (this.member7992 === member47) {
                return member47;
            }
            return this.member7992.member7544();
        };
    } else {
    }
    a.prototype.member7548 = function (d) {
        this.member7992.member7548(d);
    };
    a.prototype.member7549 = function () {
        this.member7992.member7549();
    };
    a.prototype.member3437 = function (d, g, h, i, e) {
        this.member7830(d, g, h, i, e);
        if (!this.member4106()) {
            return;
        }
        if (Class130.member1194()) {
            if (!this.member4208) {
                this.member4208 = this.member4085().member4223(this);
            }
            if (!this.member4108()) {
                this.member4107(false);
                return;
            }
        }
    };
    a.prototype.member8035 = function (e) {
        var d = e.member609();
        if ((d & Class498.member7945) !== 0) {
            d += e.member609() << 8;
        }
        if ((d & Class498.member7953) !== 0) {
            d += e.member609() << 16;
        }
        return d;
    };
    a.prototype.member7786 = function (G, aq) {
        var S = this.member7649();
        var A;
        if (aq === undefined) {
            aq = {};
            aq.member8036 = this.member8035(G);
            aq.member4370 = Class491();
        }
        A = aq.member8036;
        var ae = true;
        var ad = aq.member4370;
        if ((A & Class498.member7939) !== 0) {
            var ai = new Array(Class432.member6232);
            for (var am = 0; am < Class432.member6232; am++) {
                ai[am] = G.member1086();
            }
            var Q = G.member1108();
            this.member7882(ai, Q, ad);
            A ^= Class498.member7939;
        }
        if ((A & Class498.member7950) !== 0) {
            var an = G.member608();
            if (an === 65535) {
                an = -1;
            }
            var Z = G.member1138();
            var h = Z >> 16;
            h <<= Class86.member719;
            var af = Z & 65535;
            var ao = G.member1108();
            var ah = (ao & 7) * Math.PI / 4;
            var M = ao >> 3 & 15;
            if (M === 15) {
                M = -1;
            }
            var F = (ao >> 7 & 1) === 1;
            this.member7710.member6446.member8037(an, h, af, ah, M, F, this, 1, ad);
            A ^= Class498.member7950;
        }
        if ((A & Class498.member7946) !== 0) {
            this.member7995 = G.member1107();
            A ^= Class498.member7946;
        }
        if ((A & Class498.member7961) !== 0) {
            var an = G.member1117();
            if (an === 65535) {
                an = -1;
            }
            var Z = G.member1139();
            var h = Z >> 16;
            h <<= Class86.member719;
            var af = Z & 65535;
            var ao = G.member1109();
            var ah = (ao & 7) * Math.PI / 4;
            var M = ao >> 3 & 15;
            if (M === 15) {
                M = -1;
            }
            var F = (ao >> 7 & 1) === 1;
            this.member7710.member6446.member8037(an, h, af, ah, M, F, this, 4, ad);
            A ^= Class498.member7961;
        }
        if ((A & Class498.member7944) !== 0) {
            var z = G.member1070();
            var T = G.member1110();
            var B = G.member1111();
            var R = G.member1110();
            var E = G.member1111();
            var C = G.member1110();
            var P = G.member1117();
            var N = G.member1117();
            var W = Class415.member4772(G.member1116());
            this.member7806(z, T, B, R, P, N, W);
            A ^= Class498.member7944;
        }
        if ((A & Class498.member7940) !== 0) {
            var s = G.member608();
            if (s === 65535) {
                this.member7734(undefined);
            } else if (s < 32768) {
                this.member7735(s);
            } else {
                this.member7734(s - 32768);
            }
            A ^= Class498.member7940;
        }
        if ((A & Class498.member7938) !== 0) {
            if (aq.member8038 === undefined) {
                var aj = G.member1107();
                aq.member8038 = Class124(aj);
                G.member1150(aq.member8038.getData(), 0, aj);
            }
            if (!this.member8024(aq.member8038)) {
                aq.member8038.member607(0);
                ae = false;
            } else {
                this.member7710.member6452.member8039(S, aq.member8038);
                aq.member8038 = undefined;
                A ^= Class498.member7938;
            }
        }
        if ((A & Class498.member7958) !== 0) {
            var j = true;
            var D, I, g;
            if (aq.member8040 === undefined) {
                D = G.member1095();
                I = G.member1047();
                g = G;
            } else {
                g = aq.member8040;
            }
            var v = {};
            var ag = g.member1092;
            var K = g.member609.call(g);
            for (var am = 0; am < K; am++) {
                var al = Class462.getByID(g.member609());
                var ab = g.member608.call(g);
                var e = this.member7710.member2970.member7393(Class465.member4134, ab);
                if (e === member47) {
                    if (aq.member8040 === undefined) {
                        aq.member8040 = Class124(D);
                        g.member607(I);
                        ag.call(g, aq.member8040.getData(), 0, D);
                    }
                    aq.member8040.member607(0);
                    j = false;
                    ae = false;
                    break;
                }
                var aa;
                if (e === undefined || e.member8041().member7287 !== al) {
                    throw new Error('1720 ');
                } else {
                    aa = al.decode(g);
                }
                v[ab] = aa;
            }
            if (j) {
                var ak = this.member7792();
                ak.clear();
                for (var ab in v) {
                    ak.member2947(ab, v[ab]);
                }
                A ^= Class498.member7958;
            }
        }
        if ((A & Class498.member7951) !== 0) {
            var H = G.member1109();
            var ac = Class124(H);
            G.member1092(ac.getData(), 0, H);
            this.member8029(ac);
            this.member7710.member6452.member8042(S, ac);
            A ^= Class498.member7951;
        }
        if ((A & Class498.member7943) !== 0) {
            var an = G.member1116();
            if (an === 65535) {
                an = -1;
            }
            var Z = G.member1137();
            var h = Z >> 16;
            h <<= Class86.member719;
            var af = Z & 65535;
            var ao = G.member1108();
            var ah = (ao & 7) * Math.PI / 4;
            var M = ao >> 3 & 15;
            if (M === 15) {
                M = -1;
            }
            var F = (ao >> 7 & 1) === 1;
            this.member7710.member6446.member8037(an, h, af, ah, M, F, this, 0, ad);
            A ^= Class498.member7943;
        }
        if ((A & Class498.member7960) !== 0) {
            if (false) {
            }
            var q = G.member1070();
            var n = G.member1070();
            var m = G.member1070();
            var y = G.member1109();
            var d = G.member1117();
            var i = G.member1117();
            A ^= Class498.member7960;
        }
        if ((A & Class498.member7948) !== 0) {
            var Y = G.member1089();
            if (this === this.member7710.member7135().member6453()) {
                this.member7710.member8023.member7186(Class450.member7145, 0, this.member7791(true), this.member7787(), this.member3009(), Y);
            }
            this.member8021(Y, 0, 0);
            A ^= Class498.member7948;
        }
        if ((A & Class498.member7959) !== 0) {
            var Y = G.member1089();
            var L = G.member1109();
            if ((L & 1 << 0) !== 0) {
                this.member7710.member8023.member7186(Class450.member7145, L, this.member7791(true), this.member7787(), this.member3009(), Y);
            }
            this.member8021(Y, 0, 0);
            A ^= Class498.member7959;
        }
        if ((A & Class498.member7949) !== 0) {
            if (false) {
            }
            G.member1108();
            G.member1109();
            G.member1116();
            A ^= Class498.member7949;
        }
        if ((A & Class498.member7942) !== 0) {
            var X = Class415.member4772(G.member1117());
            this.member7738(X);
            A ^= Class498.member7942;
        }
        if ((A & Class498.member7954) !== 0) {
            if (false) {
            }
            G.member1109();
            G.member1116();
            G.member1118();
            G.member1118();
            A ^= Class498.member7954;
        }
        if ((A & Class498.member7956) !== 0) {
            var an = G.member1118();
            if (an === 65535) {
                an = -1;
            }
            var Z = G.member1139();
            var h = Z >> 16;
            h <<= Class86.member719;
            var af = Z & 65535;
            var ao = G.member609();
            var ah = (ao & 7) * Math.PI / 4;
            var M = ao >> 3 & 15;
            if (M === 15) {
                M = -1;
            }
            var F = (ao >> 7 & 1) === 1;
            this.member7710.member6446.member8037(an, h, af, ah, M, F, this, 3, ad);
            A ^= Class498.member7956;
        }
        if ((A & Class498.member7941) !== 0) {
            var k = G.member609();
            if (k > 0) {
                for (var am = 0; am < k; am++) {
                    var O, o = -1;
                    var V = -1, ap = -1;
                    O = G.member1078();
                    if (O === 32767) {
                        O = G.member1078();
                        V = G.member1078();
                        o = G.member1078();
                        ap = G.member1078();
                    } else if (O !== 32766) {
                        V = G.member1078();
                    } else {
                        O = -1;
                        V = G.member1107();
                    }
                    var r = G.member1078();
                    this.member7807().member7720(O, V, o, ap, this.member7710.member6116.member7139(), r);
                }
            }
            var U = G.member1108();
            if (U > 0) {
                for (var am = 0; am < U; am++) {
                    var x = G.member1078();
                    var J = G.member1078();
                    if (J !== 32767) {
                        var af = G.member1078();
                        var u = G.member609();
                        var t = J > 0 ? G.member1109() : u;
                        this.member7807().member7726({
                            id: x,
                            member3323: af + this.member7710.member6116.member7139(),
                            member7683: u,
                            member7684: t,
                            duration: J
                        });
                    } else {
                        this.member7807().member7725(x);
                    }
                }
            }
            A ^= Class498.member7941;
        }
        if ((A & Class498.member7957) !== 0) {
            var j = true;
            var D, I, g;
            if (aq.member8043 === undefined) {
                D = G.member1095();
                I = G.member1047();
                g = G;
            } else {
                g = aq.member8043;
            }
            var v = {};
            var ag = g.member1092;
            var K = g.member609.call(g);
            for (var am = 0; am < K; am++) {
                var al = Class462.getByID(g.member1108());
                var ab = g.member608.call(g);
                var e = this.member7710.member2970.member7393(Class465.member4134, ab);
                if (e === member47) {
                    if (aq.member8040 === undefined) {
                        aq.member8043 = Class124(D);
                        g.member607(I);
                        ag.call(g, aq.member8043.getData(), 0, D);
                    }
                    aq.member8043.member607(0);
                    j = false;
                    ae = false;
                    break;
                }
                var aa;
                if (e === undefined || e.member8041().member7287 !== al) {
                    throw new Error('1721 ');
                } else {
                    aa = al.decode(g);
                }
                v[ab] = aa;
            }
            if (j) {
                var ak = this.member7792();
                for (var ab in v) {
                    ak.member2947(ab, v[ab]);
                }
                A ^= Class498.member7957;
            }
        }
        if ((A & Class498.member7952) !== 0) {
            var an = G.member1118();
            if (an === 65535) {
                an = -1;
            }
            var Z = G.member1139();
            var h = Z >> 16;
            h <<= Class86.member719;
            var af = Z & 65535;
            var ao = G.member1108();
            var ah = (ao & 7) * Math.PI / 4;
            var M = ao >> 3 & 15;
            if (M === 15) {
                M = -1;
            }
            var F = (ao >> 7 & 1) === 1;
            this.member7710.member6446.member8037(an, h, af, ah, M, F, this, 2, ad);
            A ^= Class498.member7952;
        }
        if ((A & Class498.member7955) !== 0) {
            this.member7994 = G.member609() == 1;
            A ^= Class498.member7955;
        }
        if (ae) {
            return undefined;
        } else {
            aq.member8036 = A;
            return aq;
        }
    };
    a.prototype.member4122 = function () {
        var e = this.member7820();
        if (e !== member47) {
            var g = this.member7808().member4436();
            if (g !== member47) {
                var i = g.member4372();
                var h = this.member7999;
                if (i === -1 || g.member4375()) {
                    h = this.member7997;
                } else if (i === e.member7865() || i === e.member7866() || i === e.member7867() || i === e.member7868()) {
                    h = this.member8000;
                } else if (i === e.member7869() || i === e.member7870() || i === e.member7871() || i === e.member7872()) {
                    h = this.member7998;
                }
                if (this.member4068 === 0 && h >= 0) {
                    var d = Class371.member4059(Class332.member3781, h, 1, this.member8004, Class347.member3908, this, this.member8002 + this.member8003 > 0 ? Class351.member3918 : Class351.member3922, {
                        member4014: 1,
                        maxDistance: this.member8002 + this.member8003
                    }, this.member3320().member4099(), this.member4081());
                    if (d !== undefined) {
                        d.start();
                        this.member4128(d);
                    }
                }
            }
        }
        this.member4125();
    };
    a.prototype.member7814 = function () {
        if (this.member8009) {
            return Class489.member7784;
        }
        var e = this.member7710.member7135();
        if (e !== undefined && e.member6453() === this) {
            return 2147483647;
        }
        var d = 0;
        if (!this.member7815()) {
            d++;
        }
        if (this.member7807().member7719()) {
            d += 2;
        }
        d += 5 - this.member7795() << 2;
        if (this.member7995 !== Class486.member7729 || this.member7994) {
            d += 512;
        } else {
            var g = this.member7710.member6101.member8044();
            if (g === Class496.member7933) {
                d += 32;
            } else {
                d += 128;
            }
            d += 256;
        }
        if (e !== undefined && e.member8045() === this.member6721()) {
            d += 2047;
        }
        return d + 1;
    };
    a.prototype.member7832 = function () {
        if (this.member7710.member6452.member8046() > b && this.member7710.member7135().member7649() !== this.member7649() && this.member4466.member4429() === member47) {
            var d = this.member4466.member4425();
            if (d !== member47 && d.member4375()) {
                return false;
            }
        }
        return true;
    };
    return function (d) {
        return new a(d);
    };
}();