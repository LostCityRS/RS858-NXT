import { Class381 } from 'Class381.js';
import { Class390 } from 'Class390.js';
import { Class211 } from 'Class211.js';
import { Class95 } from 'Class95.js';
import { Class96 } from 'Class96.js';
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
        this.member2613 = member47;
    };
    member45(Class381, a);
    a.prototype.member2889 = function (o, m, e) {
        if (this.member2613 === member47) {
            var j = -1;
            var b = this.member4148.member10168();
            for (var g = 0; g < b.length; g++) {
                if (b[g] === this.member2519) {
                    j = g;
                    break;
                }
            }
            if (j === -1) {
                return undefined;
            }
            var h = this.member4148.member4486();
            var d;
            if (this.member8594 !== undefined) {
                d = this.member8594.member4486();
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
                return member47;
            }
            this.member2613 = new Array();
            for (var i = 0; i < d.length; i++) {
                if (d[i] !== -1) {
                    var c = o.getFile(Class95.member810, d[i], 0, Class96.member841);
                    if (c !== member47) {
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
            i = this.member8594.member7607();
            h = this.member8594.member7608();
        }
        if (i === undefined) {
            i = this.member4148.member7607();
        }
        if (h === undefined) {
            h = this.member4148.member7608();
        }
        g.member1051(this.member2612 ? 1 : 0);
        g.member1051(this.member4148.member10169() || this.member2527 ? 1 : 0);
        var d = this.member4148.member8599();
        if (d !== null) {
            g.member1051(d.length);
            for (var b = 0; b < d.length; b++) {
                g.member1054(d[b]);
            }
        } else {
            g.member1051(0);
        }
        if (i !== null) {
            g.member1051(i.length);
            for (var b = 0; b < i.length; b++) {
                g.member1054(i[b]);
            }
        } else {
            g.member1051(0);
        }
        var c = this.member4148.member7661();
        if (c !== null) {
            g.member1051(c.length);
            for (var b = 0; b < c.length; b++) {
                g.member1054(c[b]);
            }
        } else {
            g.member1051(0);
        }
        if (h !== null) {
            g.member1051(h.length);
            for (var b = 0; b < h.length; b++) {
                g.member1054(h[b]);
            }
        } else {
            g.member1051(0);
        }
        var e = this.member4148.member8600();
        if (e !== null) {
            g.member1051(1);
            if ((this.member2520 & 1) === 0) {
                g.member1054(e[0]);
                g.member1054(e[1]);
                g.member1054(e[2]);
            } else {
                g.member1054(e[2]);
                g.member1054(e[1]);
                g.member1054(e[0]);
            }
        } else {
            g.member1051(0);
        }
        g.member1054(this.member4148.member8601());
        g.member1051(this.member2613.length);
        for (var b = 0; b < this.member2613.length; b++) {
            g.member1056(this.member2613[b].byteLength);
            g.member1067(this.member2613[b], 0, this.member2613[b].byteLength);
        }
    };
    a.prototype.member4243 = function (b) {
        this.member2560(b);
        b.member607(0);
        return Class213(b);
    };
    a.prototype.member4244 = function (c) {
        var d = { member2621: Class188(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, c) };
        var b = c.member609() === 1;
        if (b) {
            d.member2619 = Class209(undefined, undefined, undefined, c);
        }
        return d;
    };
    return function (d, e, h, i, g, c, b) {
        return new a(d, e, h, i, g, c, b);
    };
}();