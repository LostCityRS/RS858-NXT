import { Class37 } from 'Class37.js';
import { Class41 } from 'Class41.js';
import { Class372 } from 'Class372.js';
import { Class374 } from 'Class374.js';
import { Class537 } from 'Class537.js';
import { Class49 } from 'Class49.js';
import { Class132 } from 'Class132.js';
import { Class72 } from 'Class72.js';
import { Class95 } from 'Class95.js';
import { Class96 } from 'Class96.js';
import { Class209 } from 'Class209.js';
import { Class86 } from 'Class86.js';
import { Class188 } from 'Class188.js';
import { Class376 } from 'Class376.js';
export var Class770 = function () {
    var b = Class37.create();
    var d = Class41.create();
    var c = Class41.create();
    var a = function (n, q, i, o, h, g, e, k, j, m) {
        this.member7710;
        this.member3701;
        this.member9949;
        this.member8576;
        this.member3455;
        this.member3298;
        this.member2621 = member47;
        this.member10387 = undefined;
        this.member8577 = false;
        if (q !== undefined && i !== undefined && o !== undefined && h !== undefined) {
            member46(this, Class372, q, i, o, Class374.member4143, h);
            this.member7710 = n;
            this.member3701 = g;
            this.member9949 = e;
            this.member8576 = k;
            this.member3455 = j;
            this.member3298 = m;
            if (this.member3701 === Class537.member8571) {
                this.member10387 = this.member7710.member6450.member6451(this.member8576).node;
            }
            if (this.member3701 === Class537.member8573) {
                this.member10387 = this.member7710.member6452.member6453(this.member8576).node;
            }
        } else {
            throw new Error('903 ');
        }
    };
    member45(Class372, a);
    a.prototype.member10388 = function () {
        return this.member9949;
    };
    a.prototype.member952 = function (j, i, h, g, e) {
        Class49.member334(h, b);
        this.member2621.member952(j, g, i, h, b, undefined, false, e, undefined);
    };
    a.prototype.member3437 = function (g, j, k, n, i) {
        if (this.member4103(g)) {
            if (this.member2621 === member47 || this.member2621.member2106() === 0) {
                this.member4105(false);
                return;
            }
            this.member4085().member4114().member8328(this.member4110(), this.member2621.member2098(), j, true, true);
            this.member4102();
            this.member4105(true);
            var h = Class132.member1266();
            if (h.member522(Class72.member499)) {
                this.member4107(false);
                return;
            }
        } else if (!this.member4104()) {
            return;
        }
        var m = this.member3320().member4099();
        if (this.member3701 === Class537.member8572) {
            if (this.member3298 !== -1) {
                if ((this.member3298 << 9) * (this.member3298 << 9) < (m[0] - this.member3455.member3454[0]) * (m[0] - this.member3455.member3454[0]) + (m[2] - this.member3455.member3454[2]) * (m[2] - this.member3455.member3454[2])) {
                    this.member4107(false);
                    return;
                }
            }
        }
        if (this.member3701 === Class537.member8571 || this.member3701 === Class537.member8573) {
            var e = this.member10387.member4099();
            if (600 * 600 > (m[0] - e[0]) * (m[0] - e[0]) + (m[2] - e[2]) * (m[2] - e[2])) {
                this.member4107(false);
                return;
            }
        }
        this.member4107(true);
    };
    a.prototype.member486 = function (i, h, g, e) {
        Class49.member334(h, b);
        this.member2621.member1630(g, i, h, b, undefined, false, e, undefined);
    };
    a.prototype.member9909 = function () {
        var h = this.member3320().member4099();
        var g = this.member1985().member4199();
        if (this.member3701 === Class537.member8572) {
            g += Math.atan2(this.member3455.member3454[0] - h[0], this.member3455.member3454[2] - h[2]);
        } else if (this.member3701 === Class537.member8571 || this.member3701 === Class537.member8573) {
            var e = this.member10387.member4099();
            g += Math.atan2(e[0] - h[0], e[2] - h[2]);
        }
        this.node.member4198(g);
    };
    a.prototype.member4380 = function () {
        if (this.member2621 !== member47) {
            return;
        }
        var g = this.member7710.member995.getFile(Class95.member810, this.member9949, 0, Class96.member841);
        if (g === member47) {
            return member47;
        }
        var e = Class209(g);
        if (e.member2463() < 13) {
            e.member2495(Class86.member719);
        }
        this.member2621 = Class188(e, undefined, this.member7710.member433);
        this.member2621.member510();
    };
    a.prototype.member512 = function () {
        if (this.member2621 !== member47) {
            this.member2621.member511();
            this.member2621 = member47;
        }
        this.member3320().member4189();
    };
    a.prototype.member4102 = function () {
        var e;
        if (this.member2621 !== member47) {
            if (this.member2621.member2121()) {
                e |= Class376.member4171;
            }
            if (this.member2621.member2122()) {
                e |= Class376.member4169;
            }
        }
        this.member4101(e);
    };
    return function (n, q, h, o, g, e, j, k, i, m) {
        return new a(n, q, h, o, g, e, j, k, i, m);
    };
}();