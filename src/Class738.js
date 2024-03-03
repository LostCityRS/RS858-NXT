import { Class381 } from 'Class381.js';
import { Class390 } from 'Class390.js';
import { Class211 } from 'Class211.js';
import { Class95 } from 'Class95.js';
import { Priority } from 'Class96.js';
import { Class213 } from 'Class213.js';
import { Class188 } from 'Class188.js';
import { Class209 } from 'Class209.js';
export var Class738 = function () {
    var a = function (d, e, h, i, g, c, b) {
        if (d === undefined || e === undefined || h === undefined || i === undefined || g === undefined || b === undefined) {
            throw new Error('1778 ');
        }
        member46(this, Class381, Class390.member2584, Class211.member2584, d);
        this.member4148 = e;
        this.member2519 = h;
        this.member2520 = i;
        this.member2527 = g;
        this.member8594 = c;
        this.member2612 = b;
        this.member2613 = NULL;
    };
    member45(Class381, a);
    a.prototype.member2889 = function (o, m, e) {
        if (this.member2613 === NULL) {
            var j = -1;
            var b = this.member4148.getModelShapes();
            for (var g = 0; g < b.length; g++) {
                if (b[g] === this.member2519) {
                    j = g;
                    break;
                }
            }
            if (j === -1) {
                return undefined;
            }
            var h = this.member4148.getModels();
            var d;
            if (this.member8594 !== undefined) {
                d = this.member8594.getModels();
            }
            if (d === undefined) {
                d = h[j];
            }
            var k = true;
            for (var i = 0; i < d.length; i++) {
                if (d[i] !== -1) {
                    var n = o.member1551(Class95.member810, d[i], 0);
                    if (n === undefined) {
                        return undefined;
                    }
                    if (n === false) {
                        k = false;
                    }
                }
            }
            if (!k) {
                return NULL;
            }
            this.member2613 = new Array();
            for (var i = 0; i < d.length; i++) {
                if (d[i] !== -1) {
                    var c = o.getFile(Class95.member810, d[i], 0, Priority.member841);
                    if (c !== NULL) {
                        this.member2613.push(c.getData());
                    }
                }
            }
            if (this.member2613.length < 1) {
                return undefined;
            }
        }
        return true;
    };
    a.prototype.member2560 = function (g) {
        var i, h;
        if (this.member8594 !== undefined) {
            i = this.member8594.getRecolD();
            h = this.member8594.getRetexD();
        }
        if (i === undefined) {
            i = this.member4148.getRecolD();
        }
        if (h === undefined) {
            h = this.member4148.getRetexD();
        }
        g.p1(this.member2612 ? 1 : 0);
        g.p1(this.member4148.getMirror() || this.member2527 ? 1 : 0);
        var d = this.member4148.getRecolS();
        if (d !== null) {
            g.p1(d.length);
            for (var b = 0; b < d.length; b++) {
                g.p2(d[b]);
            }
        } else {
            g.p1(0);
        }
        if (i !== null) {
            g.p1(i.length);
            for (var b = 0; b < i.length; b++) {
                g.p2(i[b]);
            }
        } else {
            g.p1(0);
        }
        var c = this.member4148.getRetexS();
        if (c !== null) {
            g.p1(c.length);
            for (var b = 0; b < c.length; b++) {
                g.p2(c[b]);
            }
        } else {
            g.p1(0);
        }
        if (h !== null) {
            g.p1(h.length);
            for (var b = 0; b < h.length; b++) {
                g.p2(h[b]);
            }
        } else {
            g.p1(0);
        }
        var e = this.member4148.getResize();
        if (e !== null) {
            g.p1(1);
            if ((this.member2520 & 1) === 0) {
                g.p2(e[0]);
                g.p2(e[1]);
                g.p2(e[2]);
            } else {
                g.p2(e[2]);
                g.p2(e[1]);
                g.p2(e[0]);
            }
        } else {
            g.p1(0);
        }
        g.p2(this.member4148.getAmbient());
        g.p1(this.member2613.length);
        for (var b = 0; b < this.member2613.length; b++) {
            g.p4(this.member2613[b].byteLength);
            g.member1067(this.member2613[b], 0, this.member2613[b].byteLength);
        }
    };
    a.prototype.member4243 = function (b) {
        this.member2560(b);
        b.setPos(0);
        return Class213(b);
    };
    a.prototype.member4244 = function (c) {
        var d = { member2621: Class188(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, c) };
        var b = c.g1() === 1;
        if (b) {
            d.member2619 = Class209(undefined, undefined, undefined, c);
        }
        return d;
    };
    return function (d, e, h, i, g, c, b) {
        return new a(d, e, h, i, g, c, b);
    };
}();