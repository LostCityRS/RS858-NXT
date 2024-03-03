import { Class442 } from 'Class442.js';
export var Class473 = function () {
    var a = 50;
    var b = function (g, e, n, o, h, i, j, c, m, d, k) {
        this.member7561 = 0;
        this.member7562 = 0;
        this.member7563 = 0;
        this.member7564 = 0;
        this.member7565 = null;
        this.member7566 = null;
        this.member7567 = null;
        this.member7568 = null;
        member46(this, Class442, g, e, n, o, h, i, j, c, m, d, k);
    };
    member45(Class442, b);
    b.prototype.member6797 = function (e, c) {
        this.member7563 = e.member608();
        this.member7564 = e.member608();
        if (c === -1) {
            var d = e.member609() === 1;
        }
        return {
            member4638: 0,
            alpha: 255,
            member6702: d
        };
    };
    b.prototype.member6809 = function () {
        return this.member7561;
    };
    b.prototype.member7569 = function (c) {
        this.member7561 = c;
    };
    b.prototype.member6810 = function () {
        return this.member7562;
    };
    b.prototype.member7570 = function (c) {
        this.member7562 = c;
    };
    b.prototype.member7571 = function () {
        return this.member7563;
    };
    b.prototype.member7572 = function (c) {
        this.member7563 = c;
    };
    b.prototype.member7573 = function () {
        return this.member7564;
    };
    b.prototype.member7574 = function (c) {
        this.member7564 = c;
    };
    b.prototype.member7458 = function () {
        return this.member7565;
    };
    b.prototype.member7575 = function (c) {
        this.member7565 = c;
        this.member7566 = this.member7565;
    };
    b.prototype.member7457 = function () {
        return this.member7566;
    };
    b.prototype.member7459 = function (c) {
        this.member7566 = c;
    };
    b.prototype.member7445 = function () {
        return this.member7567;
    };
    b.prototype.member7451 = function (c) {
        this.member7567 = c;
    };
    b.prototype.member7456 = function () {
        return this.member7568;
    };
    b.prototype.member7452 = function (c) {
        this.member7568 = c;
    };
    b.prototype.member7447 = function (e, d) {
        if (this.member7567 === null) {
            if (e !== 0) {
                throw new Error('1218 ' + e);
            }
            this.member7567 = new Array(a);
            this.member7568 = this.member7567;
        } else if (e > 0 && this.member7567[e] === undefined && this.member7567[e - 1] === undefined) {
            throw new Error('1219 ' + e);
        } else if (e === this.member7567.length) {
            var c = new Array(a);
            this.member7567 = this.member7567.concat(c);
            if (this.member7567 !== this.member7568) {
                c = new Array(a);
                this.member7568 = this.member7568.concat(c);
            }
        }
        this.member7567[e] = d;
        if (this.member7567 !== this.member7568) {
            this.member7568[e] = d;
        }
    };
    b.prototype.member7446 = function (e, d) {
        if (this.member7567 === null) {
            return;
        }
        if (this.member7567[e] === undefined) {
            return;
        }
        if (this.member7567 !== this.member7568) {
            for (var c = 0; c < this.member7568.length; c++) {
                if (this.member7568[c] === this.member7567[e]) {
                    this.member7568[c] = undefined;
                }
            }
        }
        d.member7576(this.member7567[e]);
        this.member7567[e] = undefined;
    };
    b.prototype.member7453 = function (d) {
        if (this.member7567 === null) {
            return;
        }
        var e = this.member7567 === this.member7568;
        for (var c = 0; c < this.member7567.length; c++) {
            if (this.member7567[c] !== undefined) {
                d.member7576(this.member7567[c]);
            }
            if (!e) {
                this.member7568[c] = undefined;
            }
            this.member7567[c] = undefined;
        }
    };
    b.prototype.member512 = function (d) {
        if (this.member7567 === null) {
            return;
        }
        for (var c = 0; c < this.member7567.length; c++) {
            if (this.member7567[c] === undefined) {
                continue;
            }
            d.member7576(this.member7567[c]);
            this.member7567[c].member512();
            this.member7567[c] = undefined;
            if (this.member7567[c] !== this.member7568[c]) {
                this.member7568[c] = undefined;
            }
        }
    };
    return b;
}();