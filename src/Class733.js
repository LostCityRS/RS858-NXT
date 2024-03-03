import { Class432 } from 'Class432.js';
import { Class374 } from 'Class374.js';
import { Class489 } from 'Class489.js';
import { Class730 } from 'Class730.js';
import { VarDomainType } from 'Class465.js';
import { Class423 } from 'Class423.js';
import { Class536 } from 'Class536.js';
import { Class732 } from 'Class732.js';
import { Cuboid } from 'Class166.js';
import { Class86 } from 'Class86.js';
import { Class244 } from 'Class244.js';
import { Js5ConfigGroup } from 'Class131.js';
import { Class387 } from 'Class387.js';
import { Class490 } from 'Class490.js';
import { Class132 } from 'Class132.js';
import { Class72 } from 'Class72.js';
import { Class130 } from 'Class130.js';
import { Class498 } from 'Class498.js';
import { Class491 } from 'Class491.js';
import { Packet } from 'Class124.js';
import { Class475 } from 'Class475.js';
import { BaseVarType } from 'Class462.js';
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
        e.member508 = Class374.NPC;
        member46(this, Class489, e);
        this.member10123 = -1;
        this.member10124 = -1;
        this.member10125 = NULL;
        this.member7613 = NULL;
        this.member10126 = 0;
        this.member10127 = new Array(Class730.member10117);
        this.member10128 = new Array(Class730.member10117);
        this.vislevel = 0;
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
    c.prototype.getVisLevel = function () {
        return this.vislevel;
    };
    c.prototype.member7743 = function () {
        return VarDomainType.NPC;
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
            var i = this.member10129 !== undefined ? this.member10129.getGraphic() : this.member7613.headicon_id;
            var h = this.member10129 !== undefined ? this.member10129.member1439() : this.member7613.headicon_subid;
            if (i !== undefined && h !== undefined) {
                for (var e = 0; e < i.length; e++) {
                    if (i[e] < 0 || h[e] < 0) {
                        this.member10130[e] = undefined;
                        continue;
                    }
                    var g = undefined;
                    g = Class423.member6131(i[e], true);
                    if (g === NULL) {
                        this.member10130[e] = NULL;
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
            if (this.member7613 !== NULL && this.member7613 !== undefined) {
                this.member10141(Class536({ member7613: this.member7613 }));
            } else {
                this.member10141(Class536({ member8569: true }));
            }
        }
        this.member10129.member8477(e, h, g);
    };
    c.prototype.member8029 = function (g, e) {
        if (this.member10129 === undefined) {
            if (this.member7613 !== NULL && this.member7613 !== undefined) {
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
        if (this.member7613 === undefined || this.member7613 === NULL) {
            return undefined;
        }
        var e = this.member7613;
        if (this.member7613.getIcon() === -1) {
            e = this.member10125;
        }
        if (e.getIcon() === -1) {
            return undefined;
        }
        this.member10131 = new Class732({
            graphic: e.getIcon(),
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
            e = this.member7613.getBAS();
        }
        if (e === -1 && this.member10125 !== NULL) {
            e = this.member10125.getBAS();
        }
        return e;
    };
    c.prototype.getOverlayHeight = function () {
        var e = -1;
        if (this.member7613 !== NULL && this.member7613 !== undefined) {
            e = this.member7613.getOverlayHeight();
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
        if (h !== NULL && h !== undefined) {
            h.member510();
            var e = this.member7613.getClickbox();
            if (e !== null) {
                e = Cuboid(e);
                this.member4093(e);
            } else {
                e = h.member2098();
                if (e !== null) {
                    e = Cuboid(e);
                    if (this.member7613 !== undefined) {
                        var g = this.member7613.getPickSizeShift();
                        if (g > 0) {
                            e.scale(Math.pow(2, g));
                        }
                    }
                    this.member4093(e);
                }
            }
        }
        if (this.member10133 !== NULL && this.member10133 !== undefined) {
            this.member10133.member511();
        }
        this.member10133 = h;
    };
    c.prototype.member10149 = function (e) {
        if (e !== NULL && e !== undefined) {
            e.member510();
        }
        if (this.member10135 !== NULL && this.member10135 !== undefined) {
            this.member10135.member511();
        }
        this.member10135 = e;
    };
    c.prototype.getID0 = function () {
        this.member7823();
        this.member10132 = NULL;
        this.member10148(NULL);
        this.member10134 = NULL;
        this.member10149(NULL);
    };
    c.prototype.member10150 = function (e) {
        if (this.member10123 !== e && this.member7710.member9179.isOpen() && this.member7710.member9179.member9851(this.member7649())) {
            this.member7710.member9179.member9544();
        }
        if (this.member10123 !== e) {
            this.member7613 = this.member10125 = NULL;
        }
        this.member10123 = e;
        var h = this.member7795() * Class86.member718 / 2;
        var g = this.member7795() * Class86.member718 / 2;
        this.member4093(Cuboid(new Float32Array([
            -h,
            0,
            -g
        ]), new Float32Array([
            h,
            Class86.member731,
            g
        ])));
        this.getID0();
        this.member10129 = undefined;
        this.member10130 = undefined;
    };
    c.prototype.member10151 = function () {
        var h = this.member7613.getBAS();
        if (h === -1 && this.member10125 !== NULL) {
            h = this.member10125.getBAS();
        }
        this.member7818(h);
        this.member7835(this.member7613.member7795());
        this.member7732(this.member7613.getTurnSpeed() * Class244.member2850);
        this.member3010(this.member7613.getName());
        this.vislevel = this.member7613.getVisLevel();
        if (this.member10129 !== undefined) {
            this.member10129.member8566(this.member7613);
        } else if (this.member7613.headicon_id !== undefined) {
            this.member10130 = new Array(d);
        } else {
            this.member10130 = undefined;
        }
        var e = this.member7613.getClickbox();
        if (e !== null) {
            e = Cuboid(e);
            this.member4093(e);
        } else {
            var g = this.member7613.getPickSizeShift();
            if (g > 0) {
                this.member2098().scale(Math.pow(2, g));
            }
        }
    };
    c.prototype.member10152 = function () {
        if (this.member10125 === NULL && this.member10123 !== -1) {
            this.member10125 = this.member7710.member2970.getConfigType(Js5ConfigGroup.NPCTYPE.member1204, this.member10123);
            if (this.member10125 === NULL) {
                return;
            }
            if (this.member10125.isMultiNPC()) {
                this.member7613 = this.member10125.getMultiNPC();
                if (this.member7613 === undefined) {
                    return;
                }
                if (this.member7613 === NULL) {
                    this.member10125 = NULL;
                    return;
                }
            } else {
                this.member7613 = this.member10125;
            }
            this.member10151();
        }
    };
    c.prototype.member7545 = function () {
        if (this.member10133 !== NULL) {
            return this.member10133;
        }
        this.member10152();
        if (this.member7613 === NULL) {
            return NULL;
        }
        if (this.member7613 === undefined) {
            return undefined;
        }
        this.member10148(this.member7613.member7545(this.member7710.member433, this.member7710.member4409, this.member10153(), this.member10136));
        return this.member10133;
    };
    c.prototype.member7546 = function () {
        if (this.member10132 !== NULL) {
            return this.member10132;
        }
        this.member10152();
        if (this.member7613 === NULL) {
            return NULL;
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
        if (this.member10135 !== NULL) {
            return this.member10135;
        }
        this.member10152();
        if (this.member7613 === NULL) {
            return NULL;
        }
        if (this.member7613 === undefined) {
            return undefined;
        }
        this.member10149(this.member7613.member7543(this.member7710.member433, this.member10137));
        return this.member10135;
    };
    c.prototype.member7544 = function () {
        if (this.member10134 !== NULL) {
            return this.member10134;
        }
        this.member10152();
        if (this.member7613 === NULL) {
            return NULL;
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
            if (this.member10125 === NULL) {
                this.member4105(false);
                return;
            }
            var k = this.member10125.getMultiNPC();
            if (k === undefined) {
                this.member512();
                this.member7613 = k;
                this.member10124 = -1;
            } else if (k !== null && (this.member7545() === null || this.member10124 !== k.member682())) {
                if (this.member10125.isMultiNPC()) {
                    this.member512();
                }
                this.member7613 = k;
                this.member10124 = k.member682();
                this.member10151();
            }
            if (this.member7613 === NULL || this.member7613 === undefined) {
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
        var e = g.g1();
        if ((e & Class498.member7969) !== 0) {
            e += g.g1() << 8;
        }
        if ((e & Class498.member7977) !== 0) {
            e += g.g1() << 16;
        }
        if ((e & Class498.member7985) !== 0) {
            e += g.g1() << 24;
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
                b[A] = u.gSmart2or4null();
            }
            var x = u.g1_alt2();
            this.member6455(b, x, ac);
            K ^= Class498.member7963;
        }
        if ((K & Class498.member7981) !== 0) {
            var ah = u.g1_alt3();
            var B = new Array(d);
            var aG = new Array(d);
            for (var A = 0; A < d; A++) {
                if ((ah & 1 << A) !== 0) {
                    B[A] = u.gSmart2or4null();
                    aG[A] = u.gSmart1or2null();
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
            var C = v.getPos();
            var I = v.g1_alt2();
            if ((I & 1) === 1) {
                this.member10146(null);
                K ^= Class498.member7978;
            } else {
                var q = v.gsize2();
                if (this.member7613 === null) {
                    if (aJ.member10155 === undefined) {
                        aJ.member10155 = Packet(q + 3);
                        var G = v.gdata;
                        v.setPos(C);
                        G.call(v, aJ.member10155.getData(), 0, q + 3);
                    }
                    aJ.member10155.setPos(0);
                    ak = false;
                } else {
                    var aw = undefined;
                    if ((I & 2) === 2) {
                        var O = this.member7613.getHeadModels().length;
                        aw = new Array(O);
                        for (var A = 0; A < O; A++) {
                            aw[A] = v.gSmart2or4null();
                        }
                    }
                    var F = undefined;
                    if ((I & 4) === 4) {
                        var aL = 0;
                        var z = this.member7613.getRecolD();
                        if (z != null) {
                            aL = z.length;
                        }
                        F = new Array(aL);
                        for (var A = 0; A < aL; A++) {
                            F[A] = v.g2_alt3();
                        }
                    }
                    var h = undefined;
                    if ((I & 8) === 8) {
                        var ad = 0;
                        var ap = this.member7613.getRetexD();
                        if (ap != null) {
                            ad = ap.length;
                        }
                        h = new Array(ad);
                        for (var A = 0; A < ad; A++) {
                            h[A] = v.g2_alt2();
                        }
                    }
                    var an = Class475.member7618();
                    this.member10146(Class475({
                        member4249: an,
                        member7609: aw,
                        recol_d: F,
                        member2618: h
                    }));
                    K ^= Class498.member7978;
                    this.getID0();
                }
            }
        }
        if ((K & Class498.member7970) !== 0) {
            u.g1();
            u.g1();
            u.g2_alt2();
            if (false) {
            }
            K ^= Class498.member7970;
        }
        if ((K & Class498.member7984) !== 0) {
            var ay = u.getArray()[u.getPos()];
            u.setPos(u.getPos() + 1);
            for (var A = 0; A < ay; A++) {
                var al = u.g1();
                var y = u.g4s_alt2();
                var k = u.g3_alt1();
                this.member10139(al, y, k);
            }
            K ^= Class498.member7984;
        }
        if ((K & Class498.member7990) !== 0) {
            this.member10143(u.g1_alt1());
            K ^= Class498.member7990;
        }
        if ((K & Class498.member7966) !== 0) {
            var Z = u.g1_alt3();
            for (var A = 0; A < Z; A++) {
                var aq, ag = -1;
                var ax = -1, Q = -1;
                aq = u.gSmart1or2();
                if (aq == 32767) {
                    aq = u.gSmart1or2();
                    ax = u.gSmart1or2();
                    ag = u.gSmart1or2();
                    Q = u.gSmart1or2();
                } else if (aq != 32766) {
                    ax = u.gSmart1or2();
                } else {
                    aq = -1;
                    ax = u.g1_alt1();
                }
                var V = u.gSmart1or2();
                this.member7807().member7720(aq, ax, ag, Q, this.member7710.member6116.member7139(), V);
            }
            var S = u.g1_alt2();
            for (var A = 0; A < S; A++) {
                var aa = u.gSmart1or2();
                var U = u.gSmart1or2();
                if (U != 32767) {
                    var ae = u.gSmart1or2();
                    var g = u.g1_alt3();
                    var e = U > 0 ? u.g1_alt3() : g;
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
            this.member7800(u.g1_alt1() === 1);
            K ^= Class498.member7991;
        }
        if ((K & Class498.member7989) !== 0) {
            var aj = u.g2_alt2();
            if (aj === 65535) {
                aj = -1;
            }
            var R = u.g4s_alt1();
            var E = R >> 16;
            E <<= Class86.member719;
            var ae = R & 65535;
            var ao = u.g1_alt2();
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
            var au = u.gjstr();
            this.member8021(au, 0, 0);
            K ^= Class498.member7965;
        }
        if ((K & Class498.member7976) !== 0) {
            u.g1_alt1();
            u.g2_alt3();
            u.g2_alt1();
            u.g2_alt3();
            if (false) {
            }
            K ^= Class498.member7976;
        }
        if ((K & Class498.member7962) !== 0) {
            var r = u.g2();
            var n = u.g2();
            this.member7736(r - 1 >> 1, n - 1 >> 1);
            K ^= Class498.member7962;
        }
        if ((K & Class498.member7982) !== 0) {
            var aM = true;
            var q, C, v;
            if (aJ.member10156 === undefined) {
                q = u.gsize2();
                C = u.getPos();
                v = u;
            } else {
                v = aJ.member10156;
            }
            var ab = {};
            var G = v.gdata;
            var Y = v.g1.call(v);
            for (var A = 0; A < Y; A++) {
                var P = BaseVarType.getByID(v.g1_alt2());
                var aH = v.g2.call(v);
                var J = this.member7710.member2970.getVarType(VarDomainType.NPC, aH);
                if (J === NULL) {
                    if (aJ.member10156 === undefined) {
                        aJ.member10156 = Packet(q);
                        v.setPos(C);
                        G.call(v, aJ.member10156.getData(), 0, q);
                    }
                    aJ.member10156.setPos(0);
                    aM = false;
                    ak = false;
                    break;
                }
                var T;
                if (J === undefined || J.member8041().baseVarType !== P) {
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
            var aA = u.g2_alt3();
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
                C = u.getPos();
                am = u.gjstr();
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
            var N = u.g1s_alt3();
            var aF = u.g1s();
            var av = u.g1s_alt1();
            var aE = u.g1s_alt2();
            var aK = u.g1s_alt1();
            var aI = u.g1s();
            var aC = u.g2_alt3();
            var aB = u.g2_alt3();
            var aD = Class415.member4772(u.g2_alt3());
            this.member7806(N, aF, av, aE, aC, aB, aD);
            K ^= Class498.member7974;
        }
        if ((K & Class498.member7986) !== 0) {
            if (false) {
            }
            var M = u.g1s_alt1();
            var L = u.g1s_alt2();
            var H = u.g1s_alt2();
            var ar = u.g1_alt2();
            var o = u.g2_alt3();
            var W = u.g2();
            K ^= Class498.member7986;
        }
        if ((K & Class498.member7987) !== 0) {
            var aj = u.g2_alt2();
            if (aj === 65535) {
                aj = -1;
            }
            var R = u.g4s();
            var E = R >> 16;
            E <<= Class86.member719;
            var ae = R & 65535;
            var ao = u.g1_alt3();
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
            var C = v.getPos();
            var I = v.g1_alt3();
            if ((I & 1) === 1) {
                this.member10144(undefined);
                K ^= Class498.member7975;
            } else {
                var q = v.gsize2();
                if (this.member7613 === NULL) {
                    if (aJ.member10158 === undefined) {
                        aJ.member10158 = Packet(q + 3);
                        var G = v.gdata;
                        v.setPos(C);
                        G.call(v, aJ.member10158.getData(), 0, q + 3);
                    }
                    aJ.member10158.setPos(0);
                    ak = false;
                } else {
                    var aw = undefined;
                    var i = undefined;
                    var ai = undefined;
                    var at = undefined;
                    if ((I & 2) === 2) {
                        var O = this.member7613.getModels().length;
                        aw = new Array(O);
                        if ((I & 16) === 16) {
                            i = new Array(O);
                            ai = new Array(O);
                            at = new Array(O);
                        }
                        for (var A = 0; A < O; A++) {
                            aw[A] = v.gSmart2or4null();
                            if ((I & 16) === 16 && aw[A] !== -1) {
                                i[A] = v.gFloat();
                                if (ai[A] === undefined) {
                                    ai[A] = new Array(3);
                                }
                                for (var X = 0; X < 3; X++) {
                                    ai[A][X] = v.g2s_alt1();
                                }
                                if (at[A] === undefined) {
                                    at[A] = new Array(3);
                                }
                                for (var X = 0; X < 3; X++) {
                                    at[A][X] = v.g2s_alt3();
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
                        var z = this.member7613.getRecolD();
                        if (z !== null) {
                            aL = z.length;
                        }
                        F = new Array(aL);
                        for (var A = 0; A < aL; A++) {
                            F[A] = v.g2_alt2();
                        }
                    }
                    var h = undefined;
                    if ((I & 8) === 8) {
                        var ad = 0;
                        var ap = this.member7613.getRetexD();
                        if (ap !== null) {
                            ad = ap.length;
                        }
                        h = new Array(ad);
                        for (var A = 0; A < ad; A++) {
                            h[A] = v.g2_alt3();
                        }
                    }
                    var an = Class475.member7617();
                    this.member10144(Class475({
                        member4249: an,
                        member7609: aw,
                        member7610: i,
                        member7611: ai,
                        member7612: at,
                        recol_d: F,
                        member2618: h
                    }));
                    K ^= Class498.member7975;
                    this.getID0();
                }
            }
        }
        if ((K & Class498.member7973) !== 0) {
            var az = u.g2_alt2();
            if (az === 65535) {
                this.member7818(-1);
            } else {
                this.member7818(az);
            }
            K ^= Class498.member7973;
        }
        if ((K & Class498.member7972) !== 0) {
            var aj = u.g2_alt3();
            if (aj === 65535) {
                aj = -1;
            }
            var R = u.g4s_alt3();
            var E = R >> 16;
            E <<= Class86.member719;
            var ae = R & 65535;
            var ao = u.g1();
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
                D = u.g2_alt3();
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
                    this.vislevel = this.member7613.getVisLevel();
                    K ^= Class498.member7980;
                }
            } else {
                this.vislevel = D;
                K ^= Class498.member7980;
            }
        }
        if ((K & Class498.member7967) !== 0) {
            this.member10150(u.gSmart2or4null());
            K ^= Class498.member7967;
        }
        if ((K & Class498.member7968) !== 0) {
            var aj = u.g2_alt3();
            if (aj === 65535) {
                aj = -1;
            }
            var R = u.g4s_alt2();
            var E = R >> 16;
            E <<= Class86.member719;
            var ae = R & 65535;
            var ao = u.g1_alt3();
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
                q = u.gsize2();
                C = u.getPos();
                v = u;
            } else {
                v = aJ.member10160;
            }
            var ab = {};
            var G = v.gdata;
            var Y = v.g1.call(v);
            for (var A = 0; A < Y; A++) {
                var P = BaseVarType.getByID(v.g1_alt3());
                var aH = v.g2.call(v);
                var J = this.member7710.member2970.getVarType(VarDomainType.NPC, aH);
                if (J === NULL) {
                    if (aJ.member10160 === undefined) {
                        aJ.member10160 = Packet(q);
                        v.setPos(C);
                        G.call(v, aJ.member10160.getData(), 0, q);
                    }
                    aJ.member10160.setPos(0);
                    aM = false;
                    ak = false;
                    break;
                }
                var T;
                if (J === undefined || J.member8041().baseVarType !== P) {
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
            var aj = u.g2();
            if (aj === 65535) {
                aj = -1;
            }
            var R = u.g4s_alt1();
            var E = R >> 16;
            E <<= Class86.member719;
            var ae = R & 65535;
            var ao = u.g1_alt2();
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
        if (this.member10125 !== NULL && this.member10125.isMultiNPC() === true) {
            var e = this.member10125.getMultiNPC(this.member7710.gameState, this.member7710.gameState);
            if (e === undefined || e === NULL) {
                return false;
            }
        }
        return true;
    };
    c.prototype.member4122 = function () {
        var h = this.member10125;
        if (h !== NULL && h.isMultiNPC() === true) {
            h = h.getMultiNPC(this.member7710.gameState, this.member7710.gameState);
        }
        if (h !== undefined && h !== NULL) {
            var g = this.member7710.member2970.getConfigType(Js5ConfigGroup.BASTYPE.member1204, this.member7819());
            if (g !== NULL) {
                var i = this.member7808().member4436();
                if (i !== NULL) {
                    var k = i.member4372();
                    var j = h.getBackgroundSoundWalk();
                    if (k === -1 || i.member4375()) {
                        j = h.getBackgroundSoundReady();
                    } else if (k === g.getRunAnim() || k === g.getRunAnimB() || k === g.getRunAnimL() || k === g.getRunAnimR()) {
                        j = h.getBackgroundSoundRun();
                    } else if (k === g.getCrawlAnim() || k === g.getCrawlAnimB() || k === g.getCrawlAnimL() || k === g.getCrawlAnimR()) {
                        j = h.getBackgroundSoundCrawl();
                    }
                    if (this.member4068 === 0 && j >= 0) {
                        var e = Class371.member4059(Class332.member3781, j, 1, h.getBackgroundSoundVolume(), Class347.member3909, this, Class351.member3918, {
                            member4014: h.getBackgroundSoundSize(),
                            maxDistance: h.getBackgroundSoundRange()
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
        if (this.member10125 === NULL || this.member7613 === undefined) {
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
            if (this.member10125.getFollower()) {
                e += 64;
            } else {
                e += 128;
            }
        } else if (h === Class496.member7934) {
            if (this.member10125.getFollower()) {
                e += 32;
            } else {
                e += 64;
            }
        }
        if (this.member10125.getDrawAbove()) {
            e += 1024;
        } else if (!this.member10125.getDrawBelow()) {
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