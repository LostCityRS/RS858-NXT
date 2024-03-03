import { Class124 } from 'Class124.js';
import { Class170 } from 'Class170.js';
import { Class209 } from 'Class209.js';
import { Class171 } from 'Class171.js';
import { Class174 } from 'Class174.js';
import { Class151 } from 'Class151.js';
import { Class188 } from 'Class188.js';
export var Class213 = function () {
    var a = function (b) {
        this.member2612;
        this.member2613;
        this.member2614;
        this.member2615;
        this.member2616;
        this.member2617;
        this.member2618;
        this.resize;
        this.member2431;
        this.member2619 = member47;
        this.member2620 = false;
        this.member1569 = member47;
        this.member2621 = member47;
        this.member2505(b);
    };
    a.prototype.member2505 = function (d) {
        this.member2612 = d.member609() === 1;
        this.member2614 = d.member609() === 1;
        var i = d.member609();
        if (i > 0) {
            this.member2615 = new Uint32Array(i);
            for (var b = 0; b < i; b++) {
                this.member2615[b] = d.member608();
            }
        }
        var c = d.member609();
        if (c > 0) {
            this.member2616 = new Uint32Array(c);
            for (var b = 0; b < c; b++) {
                this.member2616[b] = d.member608();
            }
        }
        var h = d.member609();
        if (h > 0) {
            this.member2617 = new Uint32Array(h);
            for (var b = 0; b < h; b++) {
                this.member2617[b] = d.member608();
            }
        }
        var g = d.member609();
        if (g > 0) {
            this.member2618 = new Uint32Array(g);
            for (var b = 0; b < g; b++) {
                this.member2618[b] = d.member608();
            }
        }
        if (d.member609() === 1) {
            this.resize = new Float32Array(3);
            this.resize[0] = d.member1071();
            this.resize[1] = d.member1071();
            this.resize[2] = d.member1071();
        }
        this.member2431 = d.member1071();
        this.member2613 = new Array(d.member609());
        for (var b = 0; b < this.member2613.length; b++) {
            var e = d.member1073();
            this.member2613[b] = new ArrayBuffer(e);
            d.member1092(this.member2613[b], 0, e);
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
        if (this.member2619 === member47) {
            var d = new Array(0);
            var i = 0;
            for (var g = 0; g < this.member2613.length; g++) {
                var e = Class124(undefined, this.member2613[g]);
                var b = e.member609();
                e.member607(0);
                var c;
                if (b === Class170.member1859) {
                    c = Class209(e);
                    if (c.member2463() < 13) {
                        c.member2495(2);
                    }
                } else if (b === Class170.member1860) {
                    c = Class171({ data: e });
                } else {
                    throw new Error('1409 ' + b + '1409 ' + this.member2613.length);
                }
                d.push(c);
                i++;
            }
            if (d.length === 1) {
                this.member2619 = d[0];
            } else if (d[0].member1886() === Class170.member1859) {
                this.member2619 = Class209(undefined, d);
            } else {
                this.member2619 = Class171({ member1876: d });
            }
            if (this.member2614) {
                this.member2619.member2496();
            }
            if (this.member2615 !== undefined && this.member2616 !== undefined) {
                this.member2619.member2497(this.member2615, this.member2616);
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
        if (this.member1569 === member47) {
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
        if (this.member2619.member1886() === Class170.member1859) {
            this.member2621 = Class188(this.member2619, undefined, undefined, this.member1569);
        } else {
            this.member2621 = Class188(undefined, this.member2619, undefined, this.member1569);
        }
        return true;
    };
    a.prototype.member2560 = function (b) {
        this.member2621.member1318(b);
        if (this.member2612) {
            b.member1051(1);
            this.member2619.member1318(b);
        } else {
            b.member1051(0);
        }
    };
    a.prototype.tidyup = function () {
        this.member2621.member512();
    };
    return function (b) {
        return new a(b);
    };
}();