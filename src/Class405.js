import { Class372 } from 'Class372.js';
import { Class374 } from 'Class374.js';
import { Cuboid } from 'Class166.js';
import { Class403 } from 'Class403.js';
import { Class404 } from 'Class404.js';
import { Class41 } from 'Class41.js';
export var Class405 = function () {
    var b = new Float32Array(3);
    var a = function (e, j, d, k, i) {
        this.member2970 = undefined;
        this.member4650 = -1;
        this.member4651 = null;
        this.member4346 = -1;
        if (e !== undefined && j !== undefined && d !== undefined && k !== undefined && i !== undefined) {
            member46(this, Class372, e, j, d, Class374.member4141, i.member4081());
            this.member2970 = k;
            this.member4651 = i;
            this.member4650 = d.member4652();
            var g = this.member3320().member4099();
            var h = this.member4651.member992();
            this.member4093(Cuboid(new Float32Array([
                g[0] - h,
                g[1] - h,
                g[2] - h
            ]), new Float32Array([
                g[0] + h,
                g[1] + h,
                g[2] + h
            ])));
            Class403.call(this, this.member4651.member992(), this.member4651.getDamageColour(), this.member4651.member4646());
            Class404.add(this);
        } else {
            throw new Error('1596 ');
        }
    };
    member45(Class372, a);
    for (var c in Class403.prototype) {
        if (a.prototype[c] === undefined) {
            a.prototype[c] = Class403.prototype[c];
        }
    }
    a.prototype.member512 = function () {
        Class404.remove(this);
    };
    a.prototype.member4525 = function () {
        return this.member4650;
    };
    a.prototype.member4653 = function () {
        return this.member4651.member2026();
    };
    a.prototype.member4654 = function () {
        var e = this.member2098();
        var h = this.member3320().member4099();
        var i = this.member4651.member992();
        var g = e.member1792();
        var d = e.member1793();
        g[0] = d[0] = h[0];
        g[1] = d[1] = h[1];
        g[2] = d[2] = h[2];
        g[0] -= i;
        g[1] -= i;
        g[2] -= i;
        d[0] += i;
        d[1] += i;
        d[2] += i;
    };
    a.prototype.member4224 = function (j, h) {
        if (j <= this.member4346) {
            return;
        }
        this.member4649(j);
        var e = this.member4651.member4655(this.member2970, j, h);
        var k = this.getDamageColour();
        var g = (k >> 16) * e;
        var i = (k >> 8 & 255) * e;
        var d = (k & 255) * e;
        if (g > 255) {
            g = 255;
        }
        if (i > 255) {
            i = 255;
        }
        if (d > 255) {
            d = 255;
        }
        k = g << 16 | i << 8 | d;
        this.member4647(k);
        this.member4346 = j;
    };
    a.prototype.member4656 = function (d) {
        Class41.member322(d, this.member3320().member4099(), b);
        var e = Class41.member327(b, b);
        var g = this.member4651.member992() * this.member4651.member992();
        if (e < g) {
            return e;
        } else {
            return -1;
        }
    };
    a.prototype.member4657 = function (d) {
        Class41.member322(d, this.member3320().member4099(), b);
        return Class41.member327(b, b);
    };
    a.prototype.member4658 = function (d) {
        return this.member4651.member4658(d);
    };
    return function (e, h, d, i, g) {
        return new a(e, h, d, i, g);
    };
}();