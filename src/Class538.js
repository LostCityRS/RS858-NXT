import { Class41 } from 'Class41.js';
import { Class372 } from 'Class372.js';
import { Class374 } from 'Class374.js';
import { Class537 } from 'Class537.js';
import { Class130 } from 'Class130.js';
import { Class132 } from 'Class132.js';
import { Class72 } from 'Class72.js';
import { Class423 } from 'Class423.js';
import { Class86 } from 'Class86.js';
import { Class299 } from 'Class299.js';
import { Class515 } from 'Class515.js';
import { Class99 } from 'Class99.js';
import { Class63 } from 'Class63.js';
import { Class83 } from 'Class83.js';
import { Class82 } from 'Class82.js';
import { Class376 } from 'Class376.js';
export var Class538 = function () {
    var c = Class41.create();
    var a = function (o, r, h, q, g, e, m, j, k, i, n) {
        this.member7710;
        this.member3701;
        this.member8574;
        this.member8575;
        this.member8576 = undefined;
        this.member3455 = undefined;
        this.member3298;
        this.member8577 = false;
        this.member8578 = NULL;
        this.member8579 = Class41.create();
        if (r !== undefined && h !== undefined && q !== undefined && g !== undefined) {
            member46(this, Class372, r, h, q, Class374.member4143, g);
            this.member7710 = o;
            this.member3701 = e;
            this.member8574 = m;
            this.member8575 = k;
            this.member8576 = j;
            this.member3455 = i;
            this.member3298 = n;
        } else {
            throw new Error('1024 ');
        }
    };
    member45(Class372, a);
    a.prototype.member8580 = function () {
        return this.member8574;
    };
    a.prototype.member8581 = function () {
        return this.member8576;
    };
    a.prototype.member487 = function () {
        if (this.member3701 === Class537.member8571 || this.member3701 === Class537.member8573 || this.member3701 === Class537.member8572) {
            var e = this.member1985();
            if (e === undefined || !e.member4188()) {
                if (this.member3701 === Class537.member8573) {
                    var h = this.member7710.member6452.member6453(this.member8576);
                    if (h === undefined) {
                        return;
                    }
                    if (e !== undefined) {
                        this.member3320().member4189();
                    }
                    h.member3320().member2013(this.member3320());
                } else if (this.member3701 === Class537.member8571) {
                    var g = this.member7710.member6450.member6451(this.member8576);
                    if (g === undefined) {
                        return;
                    }
                    if (e !== undefined) {
                        this.member3320().member4189();
                    }
                    g.member3320().member2013(this.member3320());
                } else if (this.member3701 === Class537.member8572) {
                    if (this.member4070 !== this.member7710.member6444.member6445()) {
                        this.member4070 = this.member7710.member6444.member6445();
                        this.member4070.member7842().member2013(this.member3320());
                    }
                }
            }
        }
    };
    a.prototype.member3437 = function (h, x, n, e, t) {
        if (this.member4103(h)) {
            if (this.member1985() === undefined) {
                this.member4105(false);
            } else if (!this.member8577) {
                this.member8582();
                this.member4105(false);
            } else {
                this.member4102();
                this.member4105(true);
            }
        } else if (!this.member4104()) {
            return;
        }
        if (Class130.member1194()) {
            this.member4107(false);
            return;
        }
        if (this.member4070.member4836()) {
            return;
        }
        var g = Class132.member1266();
        var k = g.member522(Class72.member499);
        if (k) {
            this.member4107(false);
            return;
        }
        var s = Class423.member6130(Class423.member6115.member6112);
        if (s === NULL) {
            this.member4107(false);
            return;
        }
        this.member8578 = s[this.member8574];
        var r = this.member3320().member4099();
        Class41.set(r, this.member8579);
        if (this.member3701 === Class537.member8572) {
            var v = this.member7710.member7135().member6453().member3320();
            v.member344(c);
            var q = this.member8579[0] - c[0];
            var o = this.member8579[2] - c[2];
            var m = q * q + o * o;
            var j = this.member3298 * Class86.member718;
            if (m > j * j) {
                this.member4107(false);
                return;
            }
        } else if (this.member3701 === Class537.member8571 || this.member3701 === Class537.member8573) {
            this.member8579[1] += this.member1985().member4186().getOverlayHeight();
        }
        var i = true;
        if (this.member3701 === Class537.member8571) {
            var u = Class299.member3571 * 1000 / this.member8575 / 2;
            i = this.member7710.member6116.member7139() % (u * 2) < u;
        } else if (this.member3701 === Class537.member8572) {
            i = this.member7710.member6116.member7139() % 20 < 10;
        } else if (this.member3701 === Class537.member8573) {
            i = true;
        }
        if (!i) {
            this.member4107(false);
            return;
        }
        Class515.member8337(this.member8579, this.member4085());
        if (!Class515.member8340(this.member8579)) {
            this.member4107(false);
            return;
        }
        this.member4107(true);
    };
    var d = function () {
        member46(this, Class99);
        this.member862 = Class63.member393.id;
        this.member8583 = undefined;
        this.member441 = undefined;
        this.member4700 = undefined;
        this.member4701 = undefined;
        this.member1338 = undefined;
    };
    member45(Class99, d);
    d.prototype.member867 = function () {
        this.member8583.member486(this.member441, this.member4700, this.member4701, this.member1338);
    };
    var b = function () {
        return new d();
    };
    a.prototype.member952 = function (k, j, i, h, g) {
        var e = Class83.member619(Class82.member2867, b);
        e.member863 = k.member863;
        e.member8583 = this;
        e.member441 = j;
        e.member4700 = i;
        e.member4701 = h;
        e.member1338 = g;
        k.append(e);
    };
    a.prototype.member486 = function (k, s, r, q) {
        var h = 1 / this.member4070.member8356();
        var i = this.member7710.member433.member588();
        var n = this.member7710.member433.member589();
        var m = (this.member8579[0] + 1) * i * h / 2;
        var o = (this.member8579[1] + 1) * n * h / 2 - this.member8578.height + n * (1 - h);
        var j = m - this.member8578.width / 2;
        var g = this.member8578.member3606.member1539();
        var e = g.member1285(this.member8578.member3606.member1494());
        this.member7710.member433.member3640.member3627(j, o, j + this.member8578.width, o + this.member8578.height, 4294967295, e.member493, e.member494, e.member495, e.member496, g.member1277(), false);
    };
    a.prototype.member512 = function () {
        this.member3320().member4189();
    };
    a.prototype.member8582 = function () {
        if (this.member3701 === Class537.member8572) {
            var e = this.member4085().member4114().member4115(this.member4110(), this.member3455.member3454[0], this.member3455.member3454[2], true);
            this.member8579[0] = this.member3455.member3454[0];
            this.member8579[1] = 0;
            this.member8579[2] = this.member3455.member3454[2];
            if (e !== -1) {
                this.member8579[1] = this.member3455.member3454[1] + e;
                this.member8577 = true;
            }
            this.node.member4193(this.member8579);
        } else if (this.member3701 === Class537.member8571 || this.member3701 === Class537.member8573) {
            this.member8577 = true;
        }
    };
    a.prototype.member4102 = function () {
        this.member4101(Class376.member4169);
    };
    return function (o, r, h, q, g, e, m, j, k, i, n) {
        return new a(o, r, h, q, g, e, m, j, k, i, n);
    };
}();