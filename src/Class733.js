import { Class432 } from 'Class432.js';
import { Class374 } from 'Class374.js';
import { Class489 } from 'Class489.js';
import { Class730 } from 'Class730.js';
import { Class465 } from 'Class465.js';
import { Class423 } from 'Class423.js';
import { Class536 } from 'Class536.js';
import { Class732 } from 'Class732.js';
import { Class166 } from 'Class166.js';
import { Class86 } from 'Class86.js';
import { Class244 } from 'Class244.js';
import { Class131 } from 'Class131.js';
import { Class387 } from 'Class387.js';
import { Class490 } from 'Class490.js';
import { Class132 } from 'Class132.js';
import { Class72 } from 'Class72.js';
import { Class130 } from 'Class130.js';
import { Class498 } from 'Class498.js';
import { Class491 } from 'Class491.js';
import { Class124 } from 'Class124.js';
import { Class475 } from 'Class475.js';
import { Class462 } from 'Class462.js';
import { Class415 } from 'Class415.js';
import { Class371 } from 'Class371.js';
import { Class332 } from 'Class332.js';
import { Class347 } from 'Class347.js';
import { Class351 } from 'Class351.js';
import { Class496 } from 'Class496.js';
export var Class733 = function () {
    var a = false;
    var d = 8;
    var b = new Int32Array(Class432.member6232);
    var c = function (e) {
        e.member508 = Class374.member4133;
        member46(this, Class489, e);
        this.member10123 = -1;
        this.member10124 = -1;
        this.member10125 = member47;
        this.member7613 = member47;
        this.member10126 = 0;
        this.member10127 = new Array(Class730.member10117);
        this.member10128 = new Array(Class730.member10117);
        this.member8610 = 0;
        this.member10129 = undefined;
        this.member10130 = undefined;
        this.member10131;
        this.member10132 = null;
        this.member10133 = null;
        this.member10134 = null;
        this.member10135 = null;
        this.member10136 = undefined;
        this.member10137 = undefined;
    };
    member45(Class489, c);
    c.prototype.member9231 = function () {
        return this.member10123;
    };
    c.prototype.member10138 = function () {
        return this.member10125;
    };
    c.prototype.member9627 = function () {
        return this.member7613;
    };
    c.prototype.member6721 = function () {
        return this.member7649() + 1;
    };
    c.prototype.member10139 = function (e, h, g) {
        this.member10127[e] = h;
        this.member10128[e] = g;
    };
    c.prototype.member9625 = function (e) {
        return this.member10127[e];
    };
    c.prototype.member9626 = function (e) {
        return this.member10128[e];
    };
    c.prototype.member8659 = function () {
        return this.member8610;
    };
    c.prototype.member7743 = function () {
        return Class465.member4133;
    };
    c.prototype.member10140 = function () {
        return this.member10129;
    };
    c.prototype.member10141 = function (e) {
        this.member10129 = e;
        if (this.member10130 === undefined) {
            this.member10130 = new Array(d);
        }
    };
    c.prototype.member7817 = function () {
        if (this.member10130 !== undefined) {
            var i = this.member10129 !== undefined ? this.member10129.member8561() : this.member7613.member8606;
            var h = this.member10129 !== undefined ? this.member10129.member1439() : this.member7613.member8607;
            if (i !== undefined && h !== undefined) {
                for (var e = 0; e < i.length; e++) {
                    if (i[e] < 0 || h[e] < 0) {
                        this.member10130[e] = undefined;
                        continue;
                    }
                    var g = undefined;
                    g = Class423.member6131(i[e], true);
                    if (g === member47) {
                        this.member10130[e] = member47;
                    } else if (g === undefined) {
                        this.member10130[e] = undefined;
                    } else {
                        this.member10130[e] = g[h[e]];
                    }
                }
                return this.member10130;
            }
        }
        return null;
    };
    c.prototype.member10000 = function (e, h, g) {
        if (this.member10129 === undefined) {
            if (this.member7613 !== member47 && this.member7613 !== undefined) {
                this.member10141(Class536({ member7613: this.member7613 }));
            } else {
                this.member10141(Class536({ member8569: true }));
            }
        }
        this.member10129.member8477(e, h, g);
    };
    c.prototype.member8029 = function (g, e) {
        if (this.member10129 === undefined) {
            if (this.member7613 !== member47 && this.member7613 !== undefined) {
                this.member10141(Class536({ member7613: this.member7613 }));
            } else {
                this.member10141(Class536({
                    member8567: g,
                    member8568: e
                }));
                return;
            }
        }
        this.member10129.member8563(g, e);
    };
    c.prototype.member10142 = function () {
        if (this.member10131 !== undefined) {
            return this.member10131;
        }
        if (this.member7613 === undefined || this.member7613 === member47) {
            return undefined;
        }
        var e = this.member7613;
        if (this.member7613.member8661() === -1) {
            e = this.member10125;
        }
        if (e.member8661() === -1) {
            return undefined;
        }
        this.member10131 = new Class732({
            member7004: e.member8661(),
            position: {
                x: 0,
                y: 0
            }
        });
        return this.member10131;
    };
    c.prototype.member10143 = function (e) {
        this.member10126 = e;
    };
    c.prototype.member9849 = function () {
        return this.member10126;
    };
    c.prototype.member7819 = function () {
        if (this.member7771 !== -1) {
            return this.member7771;
        }
        var e = -1;
        if (this.member7613 !== undefined) {
            e = this.member7613.member8666();
        }
        if (e === -1 && this.member10125 !== member47) {
            e = this.member10125.member8666();
        }
        return e;
    };
    c.prototype.member4121 = function () {
        var e = -1;
        if (this.member7613 !== member47 && this.member7613 !== undefined) {
            e = this.member7613.member4121();
        }
        if (e !== -1) {
            return e;
        } else {
            return this.member7880();
        }
    };
    c.prototype.member10144 = function (e) {
        this.member10136 = e;
    };
    c.prototype.member10145 = function () {
        return this.member10136;
    };
    c.prototype.member10146 = function (e) {
        this.member10137 = e;
    };
    c.prototype.member10147 = function () {
        return this.member10137;
    };
    c.prototype.member10148 = function (h) {
        if (h !== member47 && h !== undefined) {
            h.member510();
            var e = this.member7613.member4470();
            if (e !== null) {
                e = Class166(e);
                this.member4093(e);
            } else {
                e = h.member2098();
                if (e !== null) {
                    e = Class166(e);
                    if (this.member7613 !== undefined) {
                        var g = this.member7613.member8664();
                        if (g > 0) {
                            e.scale(Math.pow(2, g));
                        }
                    }
                    this.member4093(e);
                }
            }
        }
        if (this.member10133 !== member47 && this.member10133 !== undefined) {
            this.member10133.member511();
        }
        this.member10133 = h;
    };
    c.prototype.member10149 = function (e) {
        if (e !== member47 && e !== undefined) {
            e.member510();
        }
        if (this.member10135 !== member47 && this.member10135 !== undefined) {
            this.member10135.member511();
        }
        this.member10135 = e;
    };
    c.prototype.member4440 = function () {
        this.member7823();
        this.member10132 = member47;
        this.member10148(member47);
        this.member10134 = member47;
        this.member10149(member47);
    };
    c.prototype.member10150 = function (e) {
        if (this.member10123 !== e && this.member7710.member9179.isOpen() && this.member7710.member9179.member9851(this.member7649())) {
            this.member7710.member9179.member9544();
        }
        if (this.member10123 !== e) {
            this.member7613 = this.member10125 = member47;
        }
        this.member10123 = e;
        var h = this.member7795() * Class86.member718 / 2;
        var g = this.member7795() * Class86.member718 / 2;
        this.member4093(Class166(new Float32Array([
            -h,
            0,
            -g
        ]), new Float32Array([
            h,
            Class86.member731,
            g
        ])));
        this.member4440();
        this.member10129 = undefined;
        this.member10130 = undefined;
    };
    c.prototype.member10151 = function () {
        var h = this.member7613.member8666();
        if (h === -1 && this.member10125 !== member47) {
            h = this.member10125.member8666();
        }
        this.member7818(h);
        this.member7835(this.member7613.member7795());
        this.member7732(this.member7613.member8667() * Class244.member2850);
        this.member3010(this.member7613.getName());
        this.member8610 = this.member7613.member8659();
        if (this.member10129 !== undefined) {
            this.member10129.member8566(this.member7613);
        } else if (this.member7613.member8606 !== undefined) {
            this.member10130 = new Array(d);
        } else {
            this.member10130 = undefined;
        }
        var e = this.member7613.member4470();
        if (e !== null) {
            e = Class166(e);
            this.member4093(e);
        } else {
            var g = this.member7613.member8664();
            if (g > 0) {
                this.member2098().scale(Math.pow(2, g));
            }
        }
    };
    c.prototype.member10152 = function () {
        if (this.member10125 === member47 && this.member10123 !== -1) {
            this.member10125 = this.member7710.member2970.member3227(Class131.member1213.member1204, this.member10123);
            if (this.member10125 === member47) {
                return;
            }
            if (this.member10125.member8684()) {
                this.member7613 = this.member10125.member8686();
                if (this.member7613 === undefined) {
                    return;
                }
                if (this.member7613 === member47) {
                    this.member10125 = member47;
                    return;
                }
            } else {
                this.member7613 = this.member10125;
            }
            this.member10151();
        }
    };
    c.prototype.member7545 = function () {
        if (this.member10133 !== member47) {
            return this.member10133;
        }
        this.member10152();
        if (this.member7613 === member47) {
            return member47;
        }
        if (this.member7613 === undefined) {
            return undefined;
        }
        this.member10148(this.member7613.member7545(this.member7710.member433, this.member7710.member4409, this.member10153(), this.member10136));
        return this.member10133;
    };
    c.prototype.member7546 = function () {
        if (this.member10132 !== member47) {
            return this.member10132;
        }
        this.member10152();
        if (this.member7613 === member47) {
            return member47;
        }
        if (this.member7613 === undefined) {
            return undefined;
        }
        this.member10132 = this.member7613.member7546(this.member7710.member433, this.member7710.member4409, this.member10153(), this.member10136);
        return this.member10132;
    };
    c.prototype.member10153 = function () {
        return Class387.member4393;
        var g = this.member7807().member7716();
        for (var e = 0; e < g.length; e++) {
            if (g[e] !== undefined && g[e].member7685() > this.member7710.member6116.member7139()) {
                return Class387.member4393;
            }
        }
        return Class387.member4402;
    };
    c.prototype.member7543 = function () {
        if (this.member10135 !== member47) {
            return this.member10135;
        }
        this.member10152();
        if (this.member7613 === member47) {
            return member47;
        }
        if (this.member7613 === undefined) {
            return undefined;
        }
        this.member10149(this.member7613.member7543(this.member7710.member433, this.member10137));
        return this.member10135;
    };
    c.prototype.member7544 = function () {
        if (this.member10134 !== member47) {
            return this.member10134;
        }
        this.member10152();
        if (this.member7613 === member47) {
            return member47;
        }
        if (this.member7613 === undefined) {
            return undefined;
        }
        this.member10134 = this.member7613.member7544(this.member10137);
        return this.member10134;
    };
    c.prototype.member8021 = function (g, e, h) {
        this.member7811(Class490({
            text: g,
            member7892: e,
            member7893: h,
            member7894: Date.now() + 1000 * this.member7710.member6116.member6117().member8773(),
            member7710: this.member7710
        }));
    };
    c.prototype.member3437 = function (e, j, m, n, i) {
        if (this.member4103(e)) {
            if (this.member10125 === member47) {
                this.member4105(false);
                return;
            }
            var k = this.member10125.member8686();
            if (k === undefined) {
                this.member512();
                this.member7613 = k;
                this.member10124 = -1;
            } else if (k !== null && (this.member7545() === null || this.member10124 !== k.member682())) {
                if (this.member10125.member8684()) {
                    this.member512();
                }
                this.member7613 = k;
                this.member10124 = k.member682();
                this.member10151();
            }
            if (this.member7613 === member47 || this.member7613 === undefined) {
                this.member4105(false);
                return;
            }
            if (this.member7752[3] > 0) {
                if (this.member7613.member8665() > 0) {
                    this.member7797(this.member7613.member8665());
                } else {
                    this.member7752[3] = 0;
                }
            }
            this.member7830(undefined, j, m, n, i);
            var g = Class132.member1266();
            var h = g.member522(Class72.member499);
            if (h && !this.member7613.member4494()) {
                this.member4107(false);
                return;
            }
            if (!this.member4104()) {
                return;
            }
        } else if (!this.member4104()) {
            return;
        }
        this.member7830(null, j, m, n, i);
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
    c.prototype.member8035 = function (g) {
        var e = g.member609();
        if ((e & Class498.member7969) !== 0) {
            e += g.member609() << 8;
        }
        if ((e & Class498.member7977) !== 0) {
            e += g.member609() << 16;
        }
        if ((e & Class498.member7985) !== 0) {
            e += g.member609() << 24;
        }
        return e;
    };
    c.prototype.member7786 = function (u, aJ) {
        if (aJ === undefined) {
            aJ = {};
            aJ.member10154 = this.member8035(u);
            aJ.member4370 = Class491();
        }
        var K = aJ.member10154;
        var ak = true;
        var ac = aJ.member4370;
        if ((K & Class498.member7963) !== 0) {
            for (var A = 0; A < Class432.member6232; A++) {
                b[A] = u.member1086();
            }
            var x = u.member1108();
            this.member6455(b, x, ac);
            K ^= Class498.member7963;
        }
        if ((K & Class498.member7981) !== 0) {
            var ah = u.member1109();
            var B = new Array(d);
            var aG = new Array(d);
            for (var A = 0; A < d; A++) {
                if ((ah & 1 << A) !== 0) {
                    B[A] = u.member1086();
                    aG[A] = u.member1081();
                } else {
                    B[A] = -1;
                    aG[A] = -1;
                }
            }
            this.member8029(B, aG);
        }
        if ((K & Class498.member7978) !== 0) {
            var v;
            if (aJ.member10155 === undefined) {
                v = u;
            } else {
                v = aJ.member10155;
            }
            var C = v.member1047();
            var I = v.member1108();
            if ((I & 1) === 1) {
                this.member10146(null);
                K ^= Class498.member7978;
            } else {
                var q = v.member1095();
                if (this.member7613 === null) {
                    if (aJ.member10155 === undefined) {
                        aJ.member10155 = Class124(q + 3);
                        var G = v.member1092;
                        v.member607(C);
                        G.call(v, aJ.member10155.getData(), 0, q + 3);
                    }
                    aJ.member10155.member607(0);
                    ak = false;
                } else {
                    var aw = undefined;
                    if ((I & 2) === 2) {
                        var O = this.member7613.member7616().length;
                        aw = new Array(O);
                        for (var A = 0; A < O; A++) {
                            aw[A] = v.member1086();
                        }
                    }
                    var F = undefined;
                    if ((I & 4) === 4) {
                        var aL = 0;
                        var z = this.member7613.member7607();
                        if (z != null) {
                            aL = z.length;
                        }
                        F = new Array(aL);
                        for (var A = 0; A < aL; A++) {
                            F[A] = v.member1118();
                        }
                    }
                    var h = undefined;
                    if ((I & 8) === 8) {
                        var ad = 0;
                        var ap = this.member7613.member7608();
                        if (ap != null) {
                            ad = ap.length;
                        }
                        h = new Array(ad);
                        for (var A = 0; A < ad; A++) {
                            h[A] = v.member1117();
                        }
                    }
                    var an = Class475.member7618();
                    this.member10146(Class475({
                        member4249: an,
                        member7609: aw,
                        member2616: F,
                        member2618: h
                    }));
                    K ^= Class498.member7978;
                    this.member4440();
                }
            }
        }
        if ((K & Class498.member7970) !== 0) {
            u.member609();
            u.member609();
            u.member1117();
            if (false) {
            }
            K ^= Class498.member7970;
        }
        if ((K & Class498.member7984) !== 0) {
            var ay = u.member1048()[u.member1047()];
            u.member607(u.member1047() + 1);
            for (var A = 0; A < ay; A++) {
                var al = u.member609();
                var y = u.member1138();
                var k = u.member1125();
                this.member10139(al, y, k);
            }
            K ^= Class498.member7984;
        }
        if ((K & Class498.member7990) !== 0) {
            this.member10143(u.member1107());
            K ^= Class498.member7990;
        }
        if ((K & Class498.member7966) !== 0) {
            var Z = u.member1109();
            for (var A = 0; A < Z; A++) {
                var aq, ag = -1;
                var ax = -1, Q = -1;
                aq = u.member1078();
                if (aq == 32767) {
                    aq = u.member1078();
                    ax = u.member1078();
                    ag = u.member1078();
                    Q = u.member1078();
                } else if (aq != 32766) {
                    ax = u.member1078();
                } else {
                    aq = -1;
                    ax = u.member1107();
                }
                var V = u.member1078();
                this.member7807().member7720(aq, ax, ag, Q, this.member7710.member6116.member7139(), V);
            }
            var S = u.member1108();
            for (var A = 0; A < S; A++) {
                var aa = u.member1078();
                var U = u.member1078();
                if (U != 32767) {
                    var ae = u.member1078();
                    var g = u.member1109();
                    var e = U > 0 ? u.member1109() : g;
                    this.member7807().member7726({
                        id: aa,
                        member3323: ae + this.member7710.member6116.member7139(),
                        member7683: g,
                        member7684: e,
                        duration: U
                    });
                } else {
                    this.member7807().member7725(aa);
                }
            }
            K ^= Class498.member7966;
        }
        if ((K & Class498.member7991) !== 0) {
            this.member7800(u.member1107() === 1);
            K ^= Class498.member7991;
        }
        if ((K & Class498.member7989) !== 0) {
            var aj = u.member1117();
            if (aj === 65535) {
                aj = -1;
            }
            var R = u.member1137();
            var E = R >> 16;
            E <<= Class86.member719;
            var ae = R & 65535;
            var ao = u.member1108();
            var af = (ao & 7) * Math.PI / 4;
            var t = ao >> 3 & 15;
            if (t === 15) {
                t = -1;
            }
            var m = (ao >> 7 & 1) === 1;
            this.member7710.member6446.member8037(aj, E, ae, af, t, m, this, 4, ac);
            K ^= Class498.member7989;
        }
        if ((K & Class498.member7965) !== 0) {
            var au = u.member1089();
            this.member8021(au, 0, 0);
            K ^= Class498.member7965;
        }
        if ((K & Class498.member7976) !== 0) {
            u.member1107();
            u.member1118();
            u.member1116();
            u.member1118();
            if (false) {
            }
            K ^= Class498.member7976;
        }
        if ((K & Class498.member7962) !== 0) {
            var r = u.member608();
            var n = u.member608();
            this.member7736(r - 1 >> 1, n - 1 >> 1);
            K ^= Class498.member7962;
        }
        if ((K & Class498.member7982) !== 0) {
            var aM = true;
            var q, C, v;
            if (aJ.member10156 === undefined) {
                q = u.member1095();
                C = u.member1047();
                v = u;
            } else {
                v = aJ.member10156;
            }
            var ab = {};
            var G = v.member1092;
            var Y = v.member609.call(v);
            for (var A = 0; A < Y; A++) {
                var P = Class462.getByID(v.member1108());
                var aH = v.member608.call(v);
                var J = this.member7710.member2970.member7393(Class465.member4133, aH);
                if (J === member47) {
                    if (aJ.member10156 === undefined) {
                        aJ.member10156 = Class124(q);
                        v.member607(C);
                        G.call(v, aJ.member10156.getData(), 0, q);
                    }
                    aJ.member10156.member607(0);
                    aM = false;
                    ak = false;
                    break;
                }
                var T;
                if (J === undefined || J.member8041().member7287 !== P) {
                    throw new Error('1520 ');
                } else {
                    T = P.decode(v);
                }
                ab[aH] = T;
            }
            if (aM) {
                var s = this.member7792();
                for (var aH in ab) {
                    s.member2947(aH, ab[aH]);
                }
                K ^= Class498.member7982;
            }
        }
        if ((K & Class498.member7964) !== 0) {
            var aA = u.member1118();
            if (aA === 65535) {
                this.member7734(undefined);
            } else if (aA < 32768) {
                this.member7735(aA);
            } else {
                this.member7734(aA - 32768);
            }
            K ^= Class498.member7964;
        }
        if ((K & Class498.member7979) !== 0) {
            var am, C;
            if (aJ.member10157 === undefined) {
                C = u.member1047();
                am = u.member1089();
            } else {
                am = aJ.member10157;
            }
            if (this.member7613 === null || this.member7545() === null) {
                if (aJ.member10157 === undefined) {
                    aJ.member10157 = am;
                }
                ak = false;
            } else {
                if (am === '') {
                    this.member3010(this.member7613.getName());
                } else {
                    this.member3010(am);
                }
                K ^= Class498.member7979;
            }
        }
        if ((K & Class498.member7974) !== 0) {
            var N = u.member1112();
            var aF = u.member1070();
            var av = u.member1110();
            var aE = u.member1111();
            var aK = u.member1110();
            var aI = u.member1070();
            var aC = u.member1118();
            var aB = u.member1118();
            var aD = Class415.member4772(u.member1118());
            this.member7806(N, aF, av, aE, aC, aB, aD);
            K ^= Class498.member7974;
        }
        if ((K & Class498.member7986) !== 0) {
            if (false) {
            }
            var M = u.member1110();
            var L = u.member1111();
            var H = u.member1111();
            var ar = u.member1108();
            var o = u.member1118();
            var W = u.member608();
            K ^= Class498.member7986;
        }
        if ((K & Class498.member7987) !== 0) {
            var aj = u.member1117();
            if (aj === 65535) {
                aj = -1;
            }
            var R = u.member1074();
            var E = R >> 16;
            E <<= Class86.member719;
            var ae = R & 65535;
            var ao = u.member1109();
            var af = (ao & 7) * Math.PI / 4;
            var t = ao >> 3 & 15;
            if (t === 15) {
                t = -1;
            }
            var m = (ao >> 7 & 1) === 1;
            this.member7710.member6446.member8037(aj, E, ae, af, t, m, this, 2, ac);
            K ^= Class498.member7987;
        }
        if ((K & Class498.member7975) !== 0) {
            var v;
            if (aJ.member10158 === undefined) {
                v = u;
            } else {
                v = aJ.member10158;
            }
            var C = v.member1047();
            var I = v.member1109();
            if ((I & 1) === 1) {
                this.member10144(undefined);
                K ^= Class498.member7975;
            } else {
                var q = v.member1095();
                if (this.member7613 === member47) {
                    if (aJ.member10158 === undefined) {
                        aJ.member10158 = Class124(q + 3);
                        var G = v.member1092;
                        v.member607(C);
                        G.call(v, aJ.member10158.getData(), 0, q + 3);
                    }
                    aJ.member10158.member607(0);
                    ak = false;
                } else {
                    var aw = undefined;
                    var i = undefined;
                    var ai = undefined;
                    var at = undefined;
                    if ((I & 2) === 2) {
                        var O = this.member7613.member7615().length;
                        aw = new Array(O);
                        if ((I & 16) === 16) {
                            i = new Array(O);
                            ai = new Array(O);
                            at = new Array(O);
                        }
                        for (var A = 0; A < O; A++) {
                            aw[A] = v.member1086();
                            if ((I & 16) === 16 && aw[A] !== -1) {
                                i[A] = v.member320();
                                if (ai[A] === undefined) {
                                    ai[A] = new Array(3);
                                }
                                for (var X = 0; X < 3; X++) {
                                    ai[A][X] = v.member1119();
                                }
                                if (at[A] === undefined) {
                                    at[A] = new Array(3);
                                }
                                for (var X = 0; X < 3; X++) {
                                    at[A][X] = v.member1121();
                                    if (X === 1) {
                                        at[A][X] = -at[A][X];
                                    }
                                }
                            }
                        }
                    }
                    var F = undefined;
                    if ((I & 4) === 4) {
                        var aL = 0;
                        var z = this.member7613.member7607();
                        if (z !== null) {
                            aL = z.length;
                        }
                        F = new Array(aL);
                        for (var A = 0; A < aL; A++) {
                            F[A] = v.member1117();
                        }
                    }
                    var h = undefined;
                    if ((I & 8) === 8) {
                        var ad = 0;
                        var ap = this.member7613.member7608();
                        if (ap !== null) {
                            ad = ap.length;
                        }
                        h = new Array(ad);
                        for (var A = 0; A < ad; A++) {
                            h[A] = v.member1118();
                        }
                    }
                    var an = Class475.member7617();
                    this.member10144(Class475({
                        member4249: an,
                        member7609: aw,
                        member7610: i,
                        member7611: ai,
                        member7612: at,
                        member2616: F,
                        member2618: h
                    }));
                    K ^= Class498.member7975;
                    this.member4440();
                }
            }
        }
        if ((K & Class498.member7973) !== 0) {
            var az = u.member1117();
            if (az === 65535) {
                this.member7818(-1);
            } else {
                this.member7818(az);
            }
            K ^= Class498.member7973;
        }
        if ((K & Class498.member7972) !== 0) {
            var aj = u.member1118();
            if (aj === 65535) {
                aj = -1;
            }
            var R = u.member1139();
            var E = R >> 16;
            E <<= Class86.member719;
            var ae = R & 65535;
            var ao = u.member609();
            var af = (ao & 7) * Math.PI / 4;
            var t = ao >> 3 & 15;
            if (t === 15) {
                t = -1;
            }
            var m = (ao >> 7 & 1) === 1;
            this.member7710.member6446.member8037(aj, E, ae, af, t, m, this, 1, ac);
            K ^= Class498.member7972;
        }
        if ((K & Class498.member7980) !== 0) {
            var D;
            if (aJ.member10159 === undefined) {
                D = u.member1118();
            } else {
                D = aJ.member10159;
            }
            if (D === 65535) {
                if (this.member7613 === null) {
                    if (aJ.member10159 === undefined) {
                        aJ.member10159 = D;
                    }
                    ak = false;
                } else {
                    this.member8610 = this.member7613.member8659();
                    K ^= Class498.member7980;
                }
            } else {
                this.member8610 = D;
                K ^= Class498.member7980;
            }
        }
        if ((K & Class498.member7967) !== 0) {
            this.member10150(u.member1086());
            K ^= Class498.member7967;
        }
        if ((K & Class498.member7968) !== 0) {
            var aj = u.member1118();
            if (aj === 65535) {
                aj = -1;
            }
            var R = u.member1138();
            var E = R >> 16;
            E <<= Class86.member719;
            var ae = R & 65535;
            var ao = u.member1109();
            var af = (ao & 7) * Math.PI / 4;
            var t = ao >> 3 & 15;
            if (t === 15) {
                t = -1;
            }
            var m = (ao >> 7 & 1) === 1;
            this.member7710.member6446.member8037(aj, E, ae, af, t, m, this, 0, ac);
            K ^= Class498.member7968;
        }
        if ((K & Class498.member7983) !== 0) {
            var aM = true;
            var q, C, v;
            if (aJ.member10160 === undefined) {
                q = u.member1095();
                C = u.member1047();
                v = u;
            } else {
                v = aJ.member10160;
            }
            var ab = {};
            var G = v.member1092;
            var Y = v.member609.call(v);
            for (var A = 0; A < Y; A++) {
                var P = Class462.getByID(v.member1109());
                var aH = v.member608.call(v);
                var J = this.member7710.member2970.member7393(Class465.member4133, aH);
                if (J === member47) {
                    if (aJ.member10160 === undefined) {
                        aJ.member10160 = Class124(q);
                        v.member607(C);
                        G.call(v, aJ.member10160.getData(), 0, q);
                    }
                    aJ.member10160.member607(0);
                    aM = false;
                    ak = false;
                    break;
                }
                var T;
                if (J === undefined || J.member8041().member7287 !== P) {
                    throw new Error('1521 ');
                } else {
                    T = P.decode(v);
                }
                ab[aH] = T;
            }
            if (aM) {
                var s = this.member7792();
                s.clear();
                for (var aH in ab) {
                    s.member2947(aH, ab[aH]);
                }
                K ^= Class498.member7983;
            }
        }
        if ((K & Class498.member7988) !== 0) {
            var aj = u.member608();
            if (aj === 65535) {
                aj = -1;
            }
            var R = u.member1137();
            var E = R >> 16;
            E <<= Class86.member719;
            var ae = R & 65535;
            var ao = u.member1108();
            var af = (ao & 7) * Math.PI / 4;
            var t = ao >> 3 & 15;
            if (t === 15) {
                t = -1;
            }
            var m = (ao >> 7 & 1) === 1;
            this.member7710.member6446.member8037(aj, E, ae, af, t, m, this, 3, ac);
            K ^= Class498.member7988;
        }
        if (ak) {
            return undefined;
        } else {
            aJ.member10154 = K;
            return aJ;
        }
    };
    c.prototype.member4390 = function () {
        if (this.member10125 !== member47 && this.member10125.member8684() === true) {
            var e = this.member10125.member8686(this.member7710.gameState, this.member7710.gameState);
            if (e === undefined || e === member47) {
                return false;
            }
        }
        return true;
    };
    c.prototype.member4122 = function () {
        var h = this.member10125;
        if (h !== member47 && h.member8684() === true) {
            h = h.member8686(this.member7710.gameState, this.member7710.gameState);
        }
        if (h !== undefined && h !== member47) {
            var g = this.member7710.member2970.member3227(Class131.member1226.member1204, this.member7819());
            if (g !== member47) {
                var i = this.member7808().member4436();
                if (i !== member47) {
                    var k = i.member4372();
                    var j = h.member8675();
                    if (k === -1 || i.member4375()) {
                        j = h.member8673();
                    } else if (k === g.member7865() || k === g.member7866() || k === g.member7867() || k === g.member7868()) {
                        j = h.member8676();
                    } else if (k === g.member7869() || k === g.member7870() || k === g.member7871() || k === g.member7872()) {
                        j = h.member8674();
                    }
                    if (this.member4068 === 0 && j >= 0) {
                        var e = Class371.member4059(Class332.member3781, j, 1, h.member4499(), Class347.member3909, this, Class351.member3918, {
                            member4014: h.member4501(),
                            maxDistance: h.member4500()
                        }, this.member3320().member4099(), this.member4081());
                        if (e !== undefined) {
                            e.start();
                            this.member4128(e);
                        }
                    }
                }
            }
        }
        this.member4125();
    };
    c.prototype.member7814 = function () {
        if (this.member10125 === member47 || this.member7613 === undefined) {
            return Class489.member7784;
        }
        var g = this.member7710.member7135();
        var e = 0;
        if (this.member7710.member8733.member10161(this)) {
            e += 2048;
        }
        if (!this.member7815()) {
            e++;
        }
        if (this.member7807().member7719()) {
            e += 2;
        }
        if (this.member7795() < 5) {
            e += 5 - this.member7795() << 2;
        }
        var h = this.member7710.member6101.member8044();
        if (h === Class496.member7933) {
            if (this.member10125.member8668()) {
                e += 64;
            } else {
                e += 128;
            }
        } else if (h === Class496.member7934) {
            if (this.member10125.member8668()) {
                e += 32;
            } else {
                e += 64;
            }
        }
        if (this.member10125.member8669()) {
            e += 1024;
        } else if (!this.member10125.member8670()) {
            e += 256;
        }
        if (g !== undefined && g.member8045() === this.member6721()) {
            e += 2047;
        }
        return e + 1;
    };
    return function (e) {
        return new c(e);
    };
}();