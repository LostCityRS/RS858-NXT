import { Class291 } from 'Class291.js';
import { Class290 } from 'Class290.js';
import { Class41 } from 'Class41.js';
import { Class140 } from 'Class140.js';
import { Class372 } from 'Class372.js';
import { Class488 } from 'Class488.js';
import { Class220 } from 'Class220.js';
import { Class37 } from 'Class37.js';
import { Class49 } from 'Class49.js';
import { Class485 } from 'Class485.js';
import { Class304 } from 'Class304.js';
import { Class32 } from 'Class32.js';
import { Class388 } from 'Class388.js';
import { Class487 } from 'Class487.js';
import { Class459 } from 'Class459.js';
import { Class244 } from 'Class244.js';
import { Class373 } from 'Class373.js';
import { Class486 } from 'Class486.js';
import { Class124 } from 'Class124.js';
import { Class86 } from 'Class86.js';
import { Class371 } from 'Class371.js';
import { Class332 } from 'Class332.js';
import { Class347 } from 'Class347.js';
import { Class351 } from 'Class351.js';
import { Class131 } from 'Class131.js';
import { Class132 } from 'Class132.js';
import { Class72 } from 'Class72.js';
import { Class376 } from 'Class376.js';
import { Class155 } from 'Class155.js';
import { Class133 } from 'Class133.js';
import { Class432 } from 'Class432.js';
import { Class394 } from 'Class394.js';
import { Class129 } from 'Class129.js';
import { Class50 } from 'Class50.js';
export var Class489 = function () {
    var e = -1;
    var k = 5;
    var a = new Float32Array([
        0,
        1,
        0
    ]);
    var b = Class291();
    var i = Class290();
    var g = Class41.create();
    var h = Class41.create();
    var c = Class140.create();
    var j = function (m) {
        this.member7710;
        this.member7744;
        this.slotID = -1;
        if (m.node !== undefined && m.parent !== undefined && m.member4070 !== undefined && m.member508 !== undefined && m.level !== undefined && m.member7710 !== undefined && m.slotID !== undefined) {
            member46(this, Class372, m.node, m.parent, m.member4070, m.member508, m.level);
            this.member7710 = m.member7710;
            this.member7744 = this.member7710.member7619.member7745();
            this.slotID = m.slotID;
        } else {
            throw new Error('1755 ');
        }
        this.member7233 = undefined;
        this.member7746 = undefined;
        this.member7747 = undefined;
        this.member7748 = undefined;
        this.member7749 = Class488({ member4179: this });
        this.member3397 = 0;
        this.member1561 = 1;
        this.member7750 = 0;
        this.member7751 = 0;
        this.member7752 = new Float32Array(4);
        this.member7753 = Class220(false);
        this.member7754 = 10;
        this.member7755 = 0;
        this.member7756 = new Array();
        this.member7757;
        this.member7758 = [
            0,
            0,
            0
        ];
        this.member7759 = -1;
        this.member7760 = [
            0,
            0,
            0
        ];
        this.member7761 = -1;
        this.member7762 = 0;
        this.member1611 = Class37.create();
        this.member4461 = undefined;
        this.member4462 = Class49.create();
        this.member7763 = false;
        this.member7764 = Class49.create();
        this.member7765 = Class485(this.member7710);
        this.member7766 = undefined;
        this.member7767 = e;
        this.member7768 = false;
        this.member7769 = false;
        this.member7770 = true;
        this.member4211 = Class304(undefined, Class32.member310);
        this.member7771 = -1;
        this.member7772 = member47;
        this.member7773 = null;
        this.member7774 = undefined;
        this.member7775 = 0;
        this.member7776 = 0;
        this.member4466 = Class388(this.member7710.member2970, this.member7710.member4409, undefined, undefined, this.member4385, this, undefined);
        this.member1728 = null;
        this.member7777 = Class487(this.member7710);
        this.member7778 = new Array(Class459.member7269);
        this.member7732(Class244.member2849 * Class244.member2850);
        this.member4096(Class373({ empty: true }));
        this.member7779(Class290(0, 0, 0, 0));
        this.member7780 = true;
        this.member7781 = member47;
        this.member7782;
        this.member7783;
        this.member4208 = false;
    };
    member45(Class372, j);
    j.prototype.member7784 = e;
    j.prototype.member7785 = function () {
        return this.member7710;
    };
    j.prototype.member7649 = function () {
        return this.slotID;
    };
    j.prototype.member6721 = function () {
        return undefined;
    };
    j.prototype.member7545 = function () {
        return member47;
    };
    j.prototype.member7546 = function () {
        return member47;
    };
    j.prototype.member7543 = function () {
        return member47;
    };
    j.prototype.member7544 = function () {
        return member47;
    };
    j.prototype.member7548 = function (m) {
    };
    j.prototype.member7549 = function () {
    };
    j.prototype.member7786 = function (m, n) {
        return undefined;
    };
    j.prototype.member3009 = function () {
        return this.member7233;
    };
    j.prototype.member3010 = function (m) {
        this.member7233 = m;
    };
    j.prototype.member7787 = function () {
        return this.member7746;
    };
    j.prototype.member7788 = function (m) {
        this.member7746 = m;
    };
    j.prototype.member7789 = function (m) {
        this.member7747 = m;
    };
    j.prototype.member7790 = function (m) {
        this.member7748 = m;
    };
    j.prototype.member7791 = function (m) {
        var n = '';
        if (this.member7747 !== undefined) {
            n = this.member7747;
        }
        if (m) {
            n += this.member7233;
        } else {
            n += this.member7746;
        }
        if (this.member7748 !== undefined) {
            n += this.member7748;
        }
        return n;
    };
    j.prototype.member7792 = function () {
        return this.member7749;
    };
    j.prototype.member7793 = function () {
        return this.member3397;
    };
    j.prototype.member7794 = function (m) {
        this.member3397 = m;
    };
    j.prototype.member7795 = function () {
        return this.member1561;
    };
    j.prototype.member7796 = function (m) {
        this.member7752[3] = 1;
    };
    j.prototype.member7797 = function (m) {
        this.member7752[3] = -1;
        this.member7750 = Date.now();
        this.member7751 = m;
    };
    j.prototype.member7798 = function () {
        return Class486.member7729;
    };
    j.prototype.member7799 = function () {
        return false;
    };
    j.prototype.member7800 = function (m) {
        this.member7769 = m;
    };
    j.prototype.member7801 = function () {
        return this.member7769;
    };
    j.prototype.member7802 = function (q, o) {
        if (o === 0) {
            return;
        }
        var s = q.member1047();
        var r = undefined;
        var n = 0;
        if (this.member7753.member890() === 0) {
            r = this.member7786(q, undefined);
            n = q.member1047() - s;
        }
        if (r !== undefined || this.member7753.member890() !== 0) {
            var m = Class124(undefined, q.getData().slice(s, s + o));
            m.state = r;
            m.member607(n);
            this.member7753.member2715(m);
            q.member607(s + o);
        }
    };
    j.prototype.member7803 = function (m) {
        return this.member7756[m];
    };
    j.prototype.member7779 = function (n, o) {
        if (this.member7755 < this.member7754) {
            this.member7755++;
        } else {
            for (var m = 0; m < this.member7755 - 1; m++) {
                this.member7756[m] = this.member7756[m + 1];
            }
        }
        this.member7756[this.member7755 - 1] = {
            member3455: Class290(n),
            member7804: o
        };
        this.member4451();
    };
    j.prototype.member7805 = function () {
        this.member7756.splice(0, 1);
        this.member7755--;
        if (this.member7775 > 0) {
            this.member7775--;
        }
    };
    j.prototype.member7732 = function (m) {
        this.member7757 = m;
        this.member7777.member7732(m);
    };
    j.prototype.member7806 = function (n, r, m, q, t, s, u) {
        var v = this.member7710.member6116.member7139();
        this.member7758[0] = n * Class86.member718;
        this.member7758[2] = r * Class86.member718;
        this.member7760[0] = m * Class86.member718;
        this.member7760[2] = q * Class86.member718;
        this.member7759 = t + v;
        this.member7761 = s + v;
        this.member7762 = u;
        var o;
        if (this.member7755 === 0) {
            this.member2026(g);
            o = g;
        } else {
            o = this.member7756[this.member7756.length - 1].member3455.member3454;
            this.member7756.splice(0, this.member7756.length - 1);
            this.member7755 = 1;
        }
        this.member7758[0] += o[0];
        this.member7758[2] += o[2];
        this.member7760[0] += o[0];
        this.member7760[2] += o[2];
        this.member7775 = 0;
    };
    j.prototype.member4385 = function (x, n, r, q, y, o, m, v, u) {
        if (y <= 0) {
            if (this.member7710 === undefined) {
                return;
            }
            var t = this.member7710.member7135();
            if (t.member6453() !== this) {
                return;
            }
        }
        var s = Class371.member4059(Class332.member3786, x, n, q != -1 ? r * q / 100 : r, Class347.member3909, this, y > 0 ? Class351.member3918 : Class351.member3922, {
            member4014: 0,
            maxDistance: y
        }, this.member3320().member4099(), this.member4081(), u);
        if (s !== undefined) {
            s.start();
            this.member4128(s);
        }
    };
    j.prototype.member7807 = function () {
        return this.member7765;
    };
    j.prototype.member7808 = function () {
        return this.member4466;
    };
    j.prototype.member7809 = function () {
        if (this.member7810 === undefined || !this.member7810()) {
            return this.member7766;
        }
    };
    j.prototype.member7811 = function (m) {
        this.member7766 = m;
    };
    j.prototype.member7812 = function () {
        return this.member7767;
    };
    j.prototype.member7813 = function (m) {
        this.member7767 = m;
    };
    j.prototype.member7814 = function () {
        return e;
    };
    j.prototype.member7815 = function () {
        return this.member7768;
    };
    j.prototype.member7816 = function (m) {
        this.member7768 = m;
    };
    j.prototype.member7817 = function () {
        return null;
    };
    j.prototype.member7818 = function (m) {
        this.member7771 = m;
        this.member7772 = member47;
    };
    j.prototype.member7819 = function () {
        return this.member7771;
    };
    j.prototype.member7820 = function () {
        return this.member7772;
    };
    j.prototype.member7734 = function (m) {
        this.member7777.member7734(m);
    };
    j.prototype.member7735 = function (m) {
        this.member7777.member7735(m);
    };
    j.prototype.member7736 = function (n, m) {
        this.member7777.member7736(n, m);
    };
    j.prototype.member7738 = function (m) {
        this.member7777.member7738(m);
    };
    j.prototype.member7737 = function (m) {
        this.member7777.member7737(m);
    };
    j.prototype.member7692 = function () {
        return this.member7777.member7692();
    };
    j.prototype.member7821 = function (m) {
        return this.member7778[m];
    };
    j.prototype.member7822 = function (m, n) {
        if (n < 0 || n >= Class459.member7269) {
            throw new Error('1756 ' + n);
        }
        this.member7778[n] = m;
    };
    j.prototype.member7823 = function () {
        this.member7772 = member47;
        this.member7774 = undefined;
        this.member4466.member4440();
    };
    j.prototype.member7824 = function (n) {
        for (var m = 0; m < this.member7778.length; m++) {
            if (this.member7778[m] !== undefined) {
                this.member7778[m].member4380(n, this.member7775);
                if (this.member7778[m].member1999()) {
                    this.member7778[m].member512();
                    this.member7778[m] = undefined;
                }
            }
        }
    };
    j.prototype.member7825 = function () {
        var m = this.member7753.member2717();
        while (m !== undefined) {
            m.state = this.member7786(m, m.state);
            if (m.state === undefined) {
                this.member7753.member2716();
                m = this.member7753.member2717();
            } else {
                break;
            }
        }
    };
    j.prototype.member4380 = function () {
        var s = this.member7710.member6116.member7139();
        this.member7767 = e;
        if (this.member4104()) {
            this.member7767 = this.member7814();
        }
        var u = this.member7545();
        var r = this.member7546();
        if (u === undefined) {
            return true;
        }
        if (u === member47) {
            return false;
        }
        var q = this.member4466.member4429();
        var o = q !== null && q.member1540();
        if (o) {
            this.member7548(q);
        }
        var t = this.member4466.member4430();
        if (this.member7772 === member47 && this.member7819() !== -1) {
            this.member7772 = this.member7710.member2970.member3227(Class131.member1226.member1204, this.member7819());
            if (this.member7772 === member47) {
                return false;
            }
            this.member7826();
        }
        var n = this.member4466.member4380(s, this.member7710.member433, u, r);
        var m = this.member4466.member4429() !== null || this.member4466.member4431();
        if (!m) {
            this.member7549();
        } else {
            this.member7548(t);
        }
        this.member7824(s);
        if (this.member7766 !== undefined && Date.now() > this.member7766.member7827()) {
            this.member7766 = undefined;
        }
        if (!n) {
            return false;
        }
        return true;
    };
    j.prototype.member512 = function () {
        this.member4123();
        this.member4440();
        this.member4466.member512();
        this.member1728 = null;
        for (var m = 0; m < this.member7778.length; m++) {
            if (this.member7778[m] !== undefined) {
                this.member7778[m].member512();
                this.member7778[m] = undefined;
            }
        }
        this.member3320().member4189();
    };
    j.prototype.member7826 = function () {
        var m = this.member4466.member4425();
        if (this.member7772 !== member47 && this.member7772.member7828() !== -1 && (m === null || m.member4372() !== this.member7772.member7828())) {
            this.member4466.member4439(this.member7772.member7828(), true);
        }
        if (this.member7772 !== member47 && this.member7772.member7828() === -1) {
            this.member4466.member4411 = member47;
        }
    };
    j.prototype.member7829 = function (m) {
        return this.member7759 > m || this.member7761 > m;
    };
    j.prototype.member7830 = function (q, C, z, m, B) {
        if (q !== null && (q === undefined || this.member4103(q))) {
            var o = this.member4466.member4437();
            if (o === member47 || o === undefined || this.member7831 !== undefined && this.member7831() === true) {
                this.member4105(false);
                return;
            }
            if (this.member4085().member4836()) {
                this.member4105(false);
                return;
            }
            if (o.member2106() === 0) {
                this.member4105(false);
                return;
            }
            if (this.member4461 !== undefined) {
                Class49.member323(C, this.member4461, this.member4462);
                this.member7763 = true;
            } else {
                this.member7763 = false;
            }
            var v = this.member7763 ? this.member4462 : C;
            Class49.member334(v, this.member1611);
            this.member1728 = this.member7832() ? this.member4466.member4445(B, this.member7775) : null;
            if (this.member4466.member4429() === null && !this.member4466.member4431() && !this.member7829(B)) {
                this.member7773 = null;
                this.member7774 = undefined;
            }
            this.member4466.member4448(v);
            var x = this.member4095();
            if (x !== undefined) {
                var A = this.member4085().member4166();
                var u = this.member3320().member4167().member1812(m, z, A.width, A.height, x);
                this.member4098(u);
                if (u) {
                    this.member4085().member4168(this);
                }
            }
            if (this.member7752[3] < 0) {
                this.member7752[3] = Math.min(0, -(1 - (Date.now() - this.member7750) / this.member7751));
            }
            this.member4102();
            this.member4105(true);
        } else if (!this.member4104()) {
            return;
        }
        if (this.member7770) {
            this.member7833(B);
        }
        if (this.member7780) {
            this.member7834();
        }
        if (q !== undefined) {
            if (this.member7767 === e || this.member7768) {
                this.member4107(false);
                return;
            }
            var n = Class132.member1266();
            var t = n.member522(Class72.member499);
            if (t) {
                var s = n.member941(Class72.member499);
                var r = s.member971;
                if (this.member7710 !== undefined) {
                    var y = this.member7710.member7135();
                    if (y.member6453() === this) {
                        r = s.member969;
                    }
                }
                if (s.member972() < r) {
                    this.member4107(false);
                    return;
                }
            }
            this.member4107(true);
        }
    };
    j.prototype.member4102 = function () {
        var m = 0;
        if (this.member4466 !== null) {
            if (this.member4466.member1843()) {
                this.member4101(Class376.member4172);
                return;
            }
            if (this.member4466.member4433() !== null) {
                m |= Class376.member4171;
            }
        }
        if (this.member7752[3] < 0) {
            this.member4101(Class376.member4172);
            return;
        }
        var n = this.member4466.member4437();
        if (n !== member47 && n !== undefined) {
            if (n.member2121()) {
                m |= Class376.member4171;
            }
            if (n.member2122()) {
                m |= Class376.member4169;
            }
            this.member4101(m);
        }
    };
    j.prototype.member952 = function (m, r, x, v, u) {
        var o = Class132.member1266();
        var t = o.member941(Class72.member498);
        var q = o.member522(Class72.member499);
        var s = this.member4211.member989() > 0 && !q && t.member291();
        if (s) {
            t.member990(this.member4211);
        }
        var n = undefined;
        if (this.member7752[3] < 0) {
            n = this.member7752;
        }
        this.member4466.member4437().member952(m, v, r, this.member7763 ? this.member4462 : x, this.member1611, this.member1728, false, u, n);
        m.member4228(Class155.member96, false);
        if (!q && (u === undefined || u === Class133.member1270)) {
            this.member4466.member4450(m, r);
        }
        m.member4229(Class155.member96);
        if (s) {
            t.member991();
        }
    };
    j.prototype.member486 = function (q, x, v, u) {
        var n = Class132.member1266();
        var r = n.member941(Class72.member498);
        var o = n.member522(Class72.member499);
        var s = this.member4211.member989() > 0 && !o && r.member291();
        if (s) {
            r.member990(this.member4211);
        }
        var t = this.member4466.member4437();
        var m = undefined;
        if (this.fadeIn < 0) {
            m = this.member7752;
        }
        t.member1630(v, q, this.member7763 ? this.member4462 : x, this.member1611, this.member1728, false, u, m);
        if (!o && !n.member522(Class72.member96) && (u === undefined || u === Class133.member1270)) {
            this.member4466.member4449(q);
        }
        if (s) {
            r.member991();
        }
    };
    j.prototype.member7795 = function () {
        return this.member1561;
    };
    j.prototype.member7835 = function (m) {
        var o = m - this.member1561;
        if (o !== 0) {
            var n = this.member3320();
            n.member344(g);
            g[0] += o * Class86.member718 / 2;
            g[2] += o * Class86.member718 / 2;
            n.member4193(g);
            this.member1561 = m;
            this.member7780 = true;
        }
    };
    j.prototype.member7836 = function (m, o) {
        this.member3320().member344(g);
        var n = 0;
        if (!o) {
            n = this.member1561 / 2;
        }
        m.level = this.member4081();
        m.x = Math.floor(g[0] / Class86.member718 - n);
        m.member756 = Math.floor(g[2] / Class86.member718 - n);
    };
    j.prototype.member7837 = function (m) {
        if (this.member7755 < 1) {
            this.member7836(m, false);
        } else {
            var o = this.member1561 / 2;
            var n = this.member7803(this.member7755 - 1);
            m.level = n.member3455.level;
            m.x = Math.floor(n.member3455.member3454[0] / Class86.member718 - o);
            m.member756 = Math.floor(n.member3455.member3454[2] / Class86.member718 - o);
        }
    };
    j.prototype.member7838 = function (m) {
        m.level = this.member4081();
        this.member3320().member344(m.member3454);
    };
    j.prototype.member7839 = function (n) {
        if (this.member7755 < 1) {
            this.member7838(n);
        } else {
            var m = this.member7803(this.member7755 - 1);
            n.set(m.member3455);
        }
    };
    j.prototype.member7840 = function () {
        if (this.member7755 < 1) {
            return Class432.member6227;
        } else {
            var m = this.member7803(this.member7755 - 1);
            return m.member7804;
        }
    };
    j.prototype.member7841 = function (m) {
        this.member3320().member344(m);
        m[1] += 512 * 2;
    };
    j.prototype.member3429 = function () {
        var r = this.member7710.member6444.member6445();
        if (r === null) {
            return false;
        }
        var o = this.member3320();
        if (!o.member4188()) {
            var n = r.member7842();
            n.member2013(o);
            this.member4080(n);
            this.member4086(r);
            if (this.slotID === this.member7710.member7135().member7649() && this.member7710.member7135().member7843()) {
                this.member7710.member6101.member7844(this.member7710.member6116.member6117().member7845());
                this.member7710.member7135().member7846(false);
            }
        }
        var D = this.member7710.member6116.member7139();
        if (this.member7829(D)) {
            if (this.member7773 !== null && !this.member4466.member4431()) {
                this.member4466.member4438(this.member7773[0], 0, this.member7774);
            }
            if (this.member4466.member4431()) {
                this.member7759++;
                this.member7761++;
                this.member7776++;
                return false;
            }
        }
        if (this.member7759 > D) {
            this.member7847(D);
            return true;
        }
        if (this.member7761 > D) {
            this.member7848(D);
            return true;
        }
        var s = Class432.member6227;
        var q = g;
        if (this.member7755 > 0) {
            var y = this.member4466.member4429();
            if (y !== null && !y.member4391(this.member7775)) {
                this.member7776++;
                return false;
            }
            for (var u = 0; u < this.member7778.length; u++) {
                if (this.member7778[u] !== undefined && !this.member7778[u].member4391(this.member7775)) {
                    this.member7776++;
                    return false;
                }
            }
            var A = h;
            o.member344(q);
            var t = this.member7803(0);
            var z = t.member3455.member3454;
            Class41.member322(z, q, A);
            s = t.member7804;
            if (t.member3455.level !== this.member4081() || Math.abs(A[0]) > Class86.member718 * 2 || Math.abs(A[2]) > Class86.member718 * 2) {
                var B = this.member7803(this.member7755 - 1);
                this.member7849(B.member3455, true);
                this.member7805();
                return true;
            }
            var x = Class394.member4543(A[0], A[2]);
            if (A[0] !== 0 || A[2] !== 0) {
                this.member7737(x);
            }
            var m = Class86.member718 / 32;
            var C = false;
            var v = true;
            if (this.member7613 !== undefined && this.member7613 !== member47) {
                v = this.member7613.member7850;
            }
            if (v) {
                if (!C) {
                    if (this.member7755 > 3) {
                        m = Class86.member718 / 16;
                    } else if (this.member7755 > 2) {
                        m = Class86.member718 / 32 + Class86.member718 / 64;
                    }
                }
            } else if (!C) {
                if (this.member7755 > 2) {
                    m = Class86.member718 / 16;
                } else if (this.member7755 > 1) {
                    m = Class86.member718 / 32 + Class86.member718 / 64;
                }
            }
            if (s === Class432.member6228) {
                m /= 2;
            } else if (s === Class432.member6230) {
                m *= 2;
            }
            if (this.member7776 > 0) {
                m = Class86.member718 / 16;
                this.member7776--;
            }
            if (A[0] > 0) {
                q[0] += m;
                if (q[0] > z[0]) {
                    q[0] = z[0];
                }
            } else if (A[0] < 0) {
                q[0] -= m;
                if (q[0] < z[0]) {
                    q[0] = z[0];
                }
            }
            if (A[2] > 0) {
                q[2] += m;
                if (q[2] > z[2]) {
                    q[2] = z[2];
                }
            } else if (A[2] < 0) {
                q[2] -= m;
                if (q[2] < z[2]) {
                    q[2] = z[2];
                }
            }
            o.member4193(q);
            if (q[0] === z[0] && q[2] === z[2]) {
                this.member7805();
            }
            this.member7770 = true;
            this.member7780 = true;
        } else {
            this.member7776 = 0;
        }
        if (this.member7772 !== member47) {
            this.member7851(s, x);
        }
        if (this.member7773 !== null && !this.member4466.member4431()) {
            if (this.member4466.member4438(this.member7773[Class432.member6233(s)], 0, this.member7774) !== null) {
                this.member7775 = this.member7755;
            }
        }
        o.member4195(this.member4117(0, 0, true) + k);
        if (this.member4077 === false) {
            return true;
        }
        this.member7852();
        return true;
    };
    j.prototype.member7853 = function () {
        if (this.member7772 !== member47) {
            if (this.member7772.member7854() !== 0 || this.member7772.member7855() !== 0) {
                this.member7856(this.member7772.member7854(), this.member7772.member7855(), this.member7772.member7857(), this.member7772.member7858());
                return;
            }
        }
        this.member4461 = undefined;
        this.member4208 = false;
    };
    j.prototype.member7856 = function (u, s, q, o) {
        var m = Math.PI * 2;
        var K, I, J, H;
        this.member4461 = undefined;
        var z = u / 2;
        var r = s / 2;
        g[0] = g[1] = 0;
        g[2] = 1;
        Class140.member318(this.member3320().member2029(c), g);
        var G = Math.atan2(g[0], g[2]);
        var C = Math.sin(G);
        var F = Math.cos(G);
        K = -z;
        I = -r;
        J = I * C + K * F;
        H = I * F - K * C;
        var x = this.member4116(J, H, true);
        K = z;
        I = -r;
        J = I * C + K * F;
        H = I * F - K * C;
        var B = this.member4116(J, H, true);
        K = -z;
        I = r;
        J = I * C + K * F;
        H = I * F - K * C;
        var E = this.member4116(J, H, true);
        K = z;
        I = r;
        J = I * C + K * F;
        H = I * F - K * C;
        var n = this.member4116(J, H, true);
        var D = x > B ? x : B;
        var N = E > n ? E : n;
        var A = B > n ? B : n;
        var O = x > E ? x : E;
        if (s !== 0) {
            var y = Math.atan2(D - N, s) % m;
            if (y !== 0) {
                if (q !== 0) {
                    if (y > Math.PI) {
                        var M = m - q;
                        if (y < M) {
                            y = M;
                        }
                    } else if (y > q) {
                        y = q;
                    }
                }
                this.member4461 = Class49.member313(this.member7764);
                Class49.member345(this.member4461, y);
            }
        }
        if (u !== 0) {
            var v = -Math.atan2(O - A, u) % m;
            if (v !== 0) {
                if (o !== 0) {
                    if (v > Math.PI) {
                        var L = m - o;
                        if (v < L) {
                            v = L;
                        }
                    } else if (v > o) {
                        v = o;
                    }
                }
                if (this.member4461 === undefined) {
                    this.member4461 = Class49.member313(this.member7764);
                }
                Class49.member347(this.member4461, v);
            }
        }
        var t = x + n;
        if (B + E > t) {
            t = B + E;
        }
        if (t !== 0) {
            g[0] = g[2] = 0;
            g[1] = t / 2;
            if (this.member4461 === undefined) {
                this.member4461 = Class49.member313(this.member7764);
            }
            Class49.translate(this.member4461, g);
        }
    };
    j.prototype.member7847 = function (o) {
        var n = this.member7759 - o;
        this.member2026(g);
        g[0] += (this.member7758[0] - g[0]) / n;
        g[2] += (this.member7758[2] - g[2]) / n;
        var m = this.member3320();
        m.member4193(g);
        m.member4195(this.member4117(0, 0, true) + k);
        this.member7776 = 0;
        this.member7737(this.member7762);
        this.member7852();
    };
    j.prototype.member7848 = function (q) {
        var m = this.member7761 - this.member7759;
        var o = q - this.member7759;
        g[0] = (this.member7758[0] * (m - o) + this.member7760[0] * o) / m;
        g[2] = (this.member7758[2] * (m - o) + this.member7760[2] * o) / m;
        var n = this.member3320();
        n.member4193(g);
        n.member4195(this.member4117(0, 0, true) + k);
        this.member7776 = 0;
        this.member7737(this.member7762);
        this.member7852();
    };
    j.prototype.member7851 = function (n, u) {
        if (n === Class432.member6227) {
            if (!this.member7777.member1999()) {
                if (this.member7777.member7694()) {
                    var r = this.member7772.member7859();
                    if (r !== -1) {
                        this.member4466.member4439(r);
                        return;
                    }
                } else {
                    var v = this.member7772.member7860();
                    if (v !== -1) {
                        this.member4466.member4439(v);
                        return;
                    }
                }
            }
            var x = this.member4466.member4425();
            if (x === null || !x.member4375()) {
                this.member7826();
                return;
            }
        } else {
            var o;
            var A;
            var s;
            g[0] = 0;
            g[1] = 0;
            g[2] = -1;
            this.member3320().member2029(c);
            Class140.member318(c, g);
            o = Class394.member4543(g[0], g[2]);
            g[0] = 0;
            g[1] = 0;
            g[2] = -1;
            this.member7777.member7691(c);
            Class140.member318(c, g);
            A = Class394.member4543(g[0], g[2]);
            s = Class394.member4544(A - o);
            if (this.member7777.member7733() && s <= Math.PI / 4 && s >= -Math.PI / 4) {
                var y = Class394.member4544(u - o);
                var q = this.member7772.member7861;
                var z = this.member7772.member7862;
                var m = this.member7772.member7863;
                var t = this.member7772.member7864;
                if (n === Class432.member6230 && this.member7772.member7865() !== -1) {
                    q = this.member7772.member7865;
                    z = this.member7772.member7866;
                    m = this.member7772.member7867;
                    t = this.member7772.member7868;
                } else if (n === Class432.member6228 && this.member7772.member7869() !== -1) {
                    q = this.member7772.member7869;
                    z = this.member7772.member7870;
                    m = this.member7772.member7871;
                    t = this.member7772.member7872;
                }
                if (y >= Math.PI / 4 && y <= 3 * Math.PI / 4 && t.call(this.member7772) !== -1) {
                    this.member4466.member4439(t.call(this.member7772));
                } else if (y <= -Math.PI / 4 && y >= -3 * Math.PI / 4 && m.call(this.member7772) !== -1) {
                    this.member4466.member4439(m.call(this.member7772));
                } else if (y > 3 * Math.PI / 4 || y < -3 * Math.PI / 4 && z.call(this.member7772) !== -1) {
                    this.member4466.member4439(z.call(this.member7772));
                } else {
                    this.member4466.member4439(q.call(this.member7772));
                }
                return;
            }
            if (!this.member7777.member1999()) {
                var q = this.member7772.member7861;
                var m = this.member7772.member7873;
                var t = this.member7772.member7874;
                if (n === Class432.member6230 && this.member7772.member7865() !== -1) {
                    q = this.member7772.member7865;
                    m = this.member7772.member7875;
                    t = this.member7772.member7876;
                } else if (n === Class432.member6228 && this.member7772.member7869() !== -1) {
                    q = this.member7772.member7869;
                    m = this.member7772.member7877;
                    t = this.member7772.member7878;
                }
                if (this.member7777.member7694() && m.call(this.member7772) !== -1) {
                    this.member4466.member4439(m.call(this.member7772));
                } else if (!this.member7777.member7694() && t.call(this.member7772) !== -1) {
                    this.member4466.member4439(t.call(this.member7772));
                } else {
                    this.member4466.member4439(q.call(this.member7772));
                }
                return;
            }
            if (n === Class432.member6230 && this.member7772.member7865() !== -1) {
                this.member4466.member4439(this.member7772.member7865());
            } else if (n === Class432.member6228 && this.member7772.member7869() !== -1) {
                this.member4466.member4439(this.member7772.member7869());
            } else {
                this.member4466.member4439(this.member7772.member7861());
            }
        }
    };
    j.prototype.member7833 = function (r) {
        var o = this.member7710.member6444.member6445();
        if (o !== null) {
            this.member3320().member344(i.member3454);
            i.level = this.member4081();
            var q = this.member4211.member427();
            var n = o.member4485(i, q, false);
            if (n === -1) {
                return;
            }
            this.member4211.member3646(n);
            for (var m = 0; m < n; m++) {
                q[m].member4224(r, false);
            }
            this.member7770 = false;
        }
    };
    var d = function (u, m, r, q, v) {
        for (var o = m - 1; o >= 0; o--) {
            for (var t = r; t < r + v; t++) {
                for (var n = q; n < q + v; n++) {
                    var s = u.member4570(o, t, n);
                    if ((s & Class129.member1176) !== 0) {
                        return o;
                    } else if (s === -1) {
                        return member47;
                    }
                }
            }
        }
        return undefined;
    };
    j.prototype.member7834 = function () {
        var n = this.member7710.member6444.member6445();
        if (n === null) {
            return;
        }
        this.member3320().member344(g);
        var m = d(n.member4111(), this.member4081(), Math.floor(g[0] / Class86.member718), Math.floor(g[2] / Class86.member718), this.member1561);
        if (m === member47) {
            return;
        } else {
            this.member4084(m);
            this.member7780 = false;
        }
    };
    j.prototype.member7849 = function (q, n) {
        if (!n) {
            var o = g;
            var m = h;
            this.node.member344(o);
            Class41.member322(q.member3454, o, m);
            if (q.level === this.member4081() && Math.abs(m[0]) < Class86.member718 * 4 && Math.abs(m[2]) < Class86.member718 * 4) {
                this.member7779(q, Class432.member6229);
                return;
            }
        }
        this.member7755 = 0;
        this.member7775 = 0;
        this.member7776 = 0;
        this.member7779(q, Class432.member6227);
        this.member4082(q.level);
        this.member3320().member4193(q.member3454);
        this.member3320().member4195(this.member4117(0, 0, true) + k);
    };
    j.prototype.member7879 = function (m) {
        Class140.member1353(a, m, c);
        this.member3320().member4197(c);
    };
    j.prototype.member7852 = function () {
        var m = this.member3320();
        m.member2029(c);
        this.member7836(b, true);
        g[0] = b.x;
        g[1] = b.level;
        g[2] = b.member756;
        this.member2026(h);
        var n = this.member7755 > 0 && this.member7776 === 0;
        m.member4197(this.member7777.member7739(g, h, c, n));
    };
    j.prototype.member4121 = function () {
        return this.member7880();
    };
    j.prototype.member7880 = function () {
        var m = 0;
        if (this.member7772 !== member47) {
            m = this.member7772.member4121();
        }
        var o = this.member4466.member4437();
        if (o !== member47 && o !== undefined) {
            var n = o.member2098();
            m += n.member557();
        }
        return m;
    };
    j.prototype.member7832 = function () {
        return true;
    };
    j.prototype.member6455 = function (n, o, m) {
        this.member7881(n, o, true, m);
    };
    j.prototype.member7882 = function (n, o, m) {
        this.member7881(n, o, false, m);
    };
    j.prototype.member7881 = function (m, o, x, s) {
        if (this.member7773 !== null) {
            var u = true;
            for (var q = 0; q < Class432.member6232; q++) {
                if (this.member7773[q] !== m[q]) {
                    u = false;
                    break;
                }
            }
            if (u) {
                var t = this.member4466.member4429();
                if (t !== null && t.member1540()) {
                    var z = t.member4373().member2928();
                    if (z === Class50.member372) {
                        t.member301(this.member7710.member6116.member7139(), o);
                    }
                    if (z === Class50.member373) {
                        t.member4351();
                    }
                }
                return;
            }
        }
        var y = true;
        var n = this.member7773 === null;
        var r = null;
        var v = null;
        for (var q = 0; q < Class432.member6232; q++) {
            if (m[q] !== -1) {
                y = false;
            }
            if (n) {
                continue;
            }
            r = this.member7773 !== null && this.member7773[q] !== -1 ? this.member7710.member2970.member3227(Class131.member1216.member1204, this.member7773[q]) : member47;
            v = m[q] !== -1 ? this.member7710.member2970.member3227(Class131.member1216.member1204, m[q]) : member47;
            if (r === member47 || v === member47 || r.member2703() <= v.member2703()) {
                n = true;
            }
        }
        if (y || n) {
            this.member4466.member4452(o);
            if (x) {
                this.member7775 = this.member7755;
            }
            this.member4466.member4438(null);
            if (y) {
                this.member7773 = null;
                this.member7774 = undefined;
            } else {
                if (this.member7773 === null) {
                    this.member7773 = new Int32Array(Class432.member6232);
                }
                for (var q = 0; q < Class432.member6232; q++) {
                    this.member7773[q] = m[q];
                }
                this.member7774 = s;
            }
        }
    };
    j.prototype.member4451 = function () {
        if (this.member4466.member4451()) {
            this.member7773 = null;
        }
        for (var m = 0; m < this.member7778.length; m++) {
            if (this.member7778[m] !== undefined && this.member7778[m].member4392()) {
                this.member7778[m].member512();
                this.member7778[m] = undefined;
            }
        }
    };
    j.prototype.member7883 = function (m) {
        if (this.member7783 !== this.member7782) {
            this.member7884();
        }
        if (m === -1) {
            m = undefined;
        }
        this.member7783 = m;
    };
    j.prototype.member7884 = function () {
        if (this.member7782 !== undefined) {
            this.member7710.member7619.member7745().member7885(this.member7782);
            this.member7781 = member47;
            this.member7782 = undefined;
        }
    };
    j.prototype.member7886 = function () {
        if (this.member7783 === undefined) {
            return false;
        }
        if (this.member7782 === this.member7783) {
            return true;
        }
        this.member7781 = this.member7744.member7439(this.member7783, true, this.member7710.member7619.member7440);
        if (this.member7781 === member47) {
            return false;
        }
        this.member7782 = this.member7783;
        this.member7710.member7887.member7888(this.member7782);
        return true;
    };
    j.prototype.member7889 = function () {
        return this.member7781;
    };
    j.prototype.member7890 = function () {
        return this.member7782;
    };
    return j;
}();