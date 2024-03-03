import { Class167 } from 'Class167.js';
export var Class168 = function () {
    var a = function (d, e, c) {
        this.member1827 = -1;
        this.member1828 = -1;
        this.member1829 = undefined;
        this.member1830 = undefined;
        this.member1831 = -1;
        if (d !== undefined && e !== undefined) {
            b.call(this, d, e);
        } else if (c !== undefined) {
            this.member1827 = c.member1827;
            this.member1828 = c.member1828;
            this.member1829 = c.member1829;
            this.member1830 = c.member1830;
        } else {
            throw new Error('1564 ');
        }
    };
    var b = function (e, h) {
        this.member1827 = e;
        this.member1828 = h.member608();
        this.member1829 = new Uint8Array(this.member1828);
        this.member1830 = new Array(this.member1828);
        for (var d = 0; d < this.member1828; d++) {
            this.member1829[d] = h.member609();
            if (this.member1829[d] === Class167.member1822) {
                this.member1829[d] = Class167.member1819;
            }
        }
        h.member607(h.member1047() + this.member1828);
        h.member607(h.member1047() + this.member1828 * 2);
        for (d = 0; d < this.member1828; d++) {
            this.member1830[d] = new Uint16Array(h.member1078());
        }
        for (d = 0; d < this.member1828; d++) {
            for (var c = 0; c < this.member1830[d].length; c++) {
                var g = h.member1078();
                this.member1830[d][c] = g;
                if (g > this.member1831) {
                    this.member1831 = g;
                }
            }
        }
    };
    a.prototype.member681 = function () {
        return this;
    };
    a.prototype.member1832 = function () {
        return this.member1828;
    };
    a.prototype.member1833 = function (c) {
        return this.member1829[c];
    };
    a.prototype.member1834 = function (c) {
        return this.member1830[c];
    };
    a.prototype.member1835 = function () {
        return this.member1831;
    };
    return function (d, e, c) {
        return new a(d, e, c);
    };
}();