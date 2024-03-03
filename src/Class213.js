import { Packet } from 'Class124.js';
import { HillChange } from 'Class170.js';
import { Class209 } from 'Class209.js';
import { Class171 } from 'Class171.js';
import { Class174 } from 'Class174.js';
import { Class151 } from 'Class151.js';
import { Class188 } from 'Class188.js';
export var Class213 = function () {
    var a = function (b) {
        this.member2612;
        this.member2613;
        this.mirror;
        this.recol_s;
        this.recol_d;
        this.member2617;
        this.member2618;
        this.resize;
        this.member2431;
        this.member2619 = NULL;
        this.member2620 = false;
        this.member1569 = NULL;
        this.member2621 = NULL;
        this.member2505(b);
    };
    a.prototype.member2505 = function (d) {
        this.member2612 = d.g1() === 1;
        this.mirror = d.g1() === 1;
        var i = d.g1();
        if (i > 0) {
            this.recol_s = new Uint32Array(i);
            for (var b = 0; b < i; b++) {
                this.recol_s[b] = d.g2();
            }
        }
        var c = d.g1();
        if (c > 0) {
            this.recol_d = new Uint32Array(c);
            for (var b = 0; b < c; b++) {
                this.recol_d[b] = d.g2();
            }
        }
        var h = d.g1();
        if (h > 0) {
            this.member2617 = new Uint32Array(h);
            for (var b = 0; b < h; b++) {
                this.member2617[b] = d.g2();
            }
        }
        var g = d.g1();
        if (g > 0) {
            this.member2618 = new Uint32Array(g);
            for (var b = 0; b < g; b++) {
                this.member2618[b] = d.g2();
            }
        }
        if (d.g1() === 1) {
            this.resize = new Float32Array(3);
            this.resize[0] = d.g2s();
            this.resize[1] = d.g2s();
            this.resize[2] = d.g2s();
        }
        this.member2431 = d.g2s();
        this.member2613 = new Array(d.g1());
        for (var b = 0; b < this.member2613.length; b++) {
            var e = d.g4();
            this.member2613[b] = new ArrayBuffer(e);
            d.gdata(this.member2613[b], 0, e);
        }
        if (false) {
        } else {
            this.name = '';
        }
    };
    a.prototype.member2557 = function (d, b, c) {
    };
    a.prototype.member2558 = function (c, b) {
        this.member1569 = c;
        this.member2620 = false;
    };
    a.prototype.member78 = function (j, h) {
        if (this.member2619 === NULL) {
            var d = new Array(0);
            var i = 0;
            for (var g = 0; g < this.member2613.length; g++) {
                var e = Packet(undefined, this.member2613[g]);
                var b = e.g1();
                e.setPos(0);
                var c;
                if (b === HillChange.member1859) {
                    c = Class209(e);
                    if (c.member2463() < 13) {
                        c.member2495(2);
                    }
                } else if (b === HillChange.member1860) {
                    c = Class171({ data: e });
                } else {
                    throw new Error('1409 ' + b + '1409 ' + this.member2613.length);
                }
                d.push(c);
                i++;
            }
            if (d.length === 1) {
                this.member2619 = d[0];
            } else if (d[0].member1886() === HillChange.member1859) {
                this.member2619 = Class209(undefined, d);
            } else {
                this.member2619 = Class171({ member1876: d });
            }
            if (this.mirror) {
                this.member2619.member2496();
            }
            if (this.recol_s !== undefined && this.recol_d !== undefined) {
                this.member2619.member2497(this.recol_s, this.recol_d);
            }
            if (this.member2617 !== undefined && this.member2618 !== undefined) {
                this.member2619.member2499(this.member2617, this.member2618);
            }
            if (this.member2431 !== undefined) {
                this.member2619.member2500(this.member2431);
            }
            if (this.resize !== undefined) {
                this.member2619.scale(this.resize[0] / 128, this.resize[1] / 128, this.resize[2] / 128);
            }
        }
        if (this.member1569 === NULL) {
            var k = this.member2619.member1885(Class174);
            if (k.length > 0) {
                if (!this.member2620) {
                    this.member1569 = j.member2622(k, h);
                    this.member2620 = true;
                }
                return null;
            } else {
                this.member1569 = Class151({ empty: true });
            }
        }
        if (this.member2619.member1886() === HillChange.member1859) {
            this.member2621 = Class188(this.member2619, undefined, undefined, this.member1569);
        } else {
            this.member2621 = Class188(undefined, this.member2619, undefined, this.member1569);
        }
        return true;
    };
    a.prototype.member2560 = function (b) {
        this.member2621.member1318(b);
        if (this.member2612) {
            b.p1(1);
            this.member2619.member1318(b);
        } else {
            b.p1(0);
        }
    };
    a.prototype.tidyup = function () {
        this.member2621.member512();
    };
    return function (b) {
        return new a(b);
    };
}();