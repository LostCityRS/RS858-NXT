import { Class372 } from 'Class372.js';
import { Class374 } from 'Class374.js';
import { Class166 } from 'Class166.js';
import { Class86 } from 'Class86.js';
import { Class121 } from 'Class121.js';
import { Class387 } from 'Class387.js';
import { Class401 } from 'Class401.js';
import { Class377 } from 'Class377.js';
import { Class194 } from 'Class194.js';
import { Class400 } from 'Class400.js';
import { Class140 } from 'Class140.js';
export var Class402 = function () {
    var c = new Float32Array(3);
    var a = [
        0,
        1,
        0
    ];
    var b = function (h, j, e, g, d, i) {
        this.member1643 = undefined;
        this.member1642 = undefined;
        this.member4627 = undefined;
        this.member4628 = undefined;
        this.member1566 = member47;
        if (h !== undefined && j !== undefined && e !== undefined && g !== undefined && d !== undefined && i !== undefined) {
            member46(this, Class372, h, j, e, Class374.member4145, -1);
            this.member1643 = g;
            this.member1642 = d;
            this.member4627 = i;
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
            throw new Error('1751 ');
        }
    };
    member45(Class372, b);
    b.prototype.member4629 = function () {
        return this.member4627;
    };
    b.prototype.member4630 = function () {
        return this.member1566;
    };
    b.prototype.member4380 = function (g, d, u, m) {
        var q = this.member4087();
        var o = this.member4089();
        if (o <= Class121.member796) {
            if (this.member1566 === member47) {
                var e = this.member4085().member4114();
                var r = e.member4114(0, this.member1643 * Class86.member729, this.member1642 * Class86.member729);
                if (r !== member47) {
                    if (this.member4628 === undefined) {
                        var t = Class387.member391;
                        if (this.member3320().member4192() === g) {
                            t += Class387.member4405;
                        }
                        t += Class387.member4406;
                        this.member4628 = Class401(t, this.member1643, this.member1642, o, this.member4627, r, Class86.member729);
                        if (!m.member2939(this.member4628)) {
                            this.member4628 = undefined;
                        }
                        return;
                    }
                    var j = this.member4628.member2723();
                    if (!j.member2859) {
                        return;
                    }
                    if (!j.member2863) {
                        this.member4628 = undefined;
                        return;
                    }
                    var k = this.member4628.member2893();
                    if (k !== member47) {
                        if (this.member1566 !== member47) {
                            this.member512();
                        }
                        this.member1566 = new Array(k.length);
                        for (var i = 0; i < this.member1566.length; i++) {
                            var n = Class377();
                            var h = Class194({
                                member433: d,
                                member680: k[i].member2285
                            });
                            this.member1566[i] = Class400(n, this, this.member4085(), h);
                            n.member4185(this.member1566[i]);
                            this.member3320().member2013(n);
                            var s = h.member2273();
                            n.member4194(s.member1593[0], 0, s.member1593[2]);
                        }
                        this.member4628.member2885();
                        this.member4628 = undefined;
                        this.member3320().member4202(true);
                    }
                }
            }
        } else {
            this.member512();
        }
        this.member4088(o);
    };
    b.prototype.member512 = function () {
        if (this.member1566 !== member47) {
            for (var d = 0; d < this.member1566.length; d++) {
                this.member1566[d].member512();
                this.member3320().removeChild(this.member1566[d].member3320());
            }
            this.member1566 = member47;
        }
    };
    b.prototype.member4230 = function (g, e) {
        if (this.member1566 !== member47) {
            for (var d = 0; d < this.member1566.length; d++) {
                this.member1566[d].member4230(g, e);
            }
        }
    };
    b.prototype.member4631 = function () {
        return this.member1566 !== member47 && this.member1566.length > 0;
    };
    b.prototype.member4632 = function (k, o, d) {
        var m = Number.MAX_VALUE;
        var j = undefined;
        if (this.member1566 !== member47) {
            for (var h = 0; h < this.member1566.length; h++) {
                var e = this.member1566[h];
                if (e.member2285.member2255 && !e.member2285.member2238) {
                    continue;
                }
                var n = this.member4627[h];
                var i = e.member3320().member4167();
                if (!k.member1803(i)) {
                    continue;
                }
                Class140.member318(n.member763, a, c);
                if (Math.abs(c[1]) > 0.95) {
                    var g = i.member1809(d);
                    if (g < m) {
                        m = g;
                        j = n.member1593[1];
                    }
                }
            }
        }
        return [
            j,
            m
        ];
    };
    b.prototype.member4633 = function () {
        var g = 0, e = 0;
        for (var d = 0; d < this.member4627.length; d++) {
            var h = this.member4627[d];
            Class140.member318(h.member763, a, c);
            if (Math.abs(c[1]) > 0.95) {
                g += h.member1593[1];
                e++;
            }
        }
        if (e > 0) {
            return g / e;
        } else {
            return undefined;
        }
    };
    b.prototype.member4634 = function (h) {
        var i = Number.MAX_VALUE;
        var g = undefined;
        for (var d = 0; d < this.member4627.length; d++) {
            var j = this.member4627[d];
            Class140.member318(j.member763, a, c);
            if (Math.abs(c[1] > 0.95)) {
                var e = h[1] - j.member1593[1];
                if (e > 0 && e < i) {
                    i = e;
                    g = j.member1593[1];
                }
            }
        }
        return g;
    };
    b.prototype.member4635 = function () {
        var e = 0;
        for (var d = 0; d < this.member4627.length; d++) {
            if (this.member4627[d].member2280 > e) {
                e = this.member4627[d].member2280;
            }
        }
        return e;
    };
    b.prototype.member4636 = function (h, g) {
        var d = this.member3320().member4099();
        var e = this.member4085().member4114();
        return e.member4637(0, h + d[0], g + d[2]);
    };
    return function (h, j, e, g, d, i) {
        return new b(h, j, e, g, d, i);
    };
}();