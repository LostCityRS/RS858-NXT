import { Class5 } from 'Class5.js';
export var Class29 = function () {
    var a = function (c) {
        this.member296 = false;
        this.member297 = true;
        this.member298 = true;
        this.member299 = '';
        this.flags = new Uint32Array((Class5.member125 / 32 | 0) + 1);
        this.member300 = new Array(Class5.member125);
        this.member301();
        if (c !== undefined) {
            for (var b = 0; b < c.length; b++) {
                this.enable(c[b]);
            }
        }
    };
    a.prototype.member302 = function (c) {
        for (var b = 0; b < this.member300.length; b++) {
            c.member300[b] = this.member300[b];
        }
    };
    a.prototype.member303 = function (c) {
        var e = this.member304();
        var d = c.member304();
        for (var b = 0; b < e.length; b++) {
            if (e[b] !== d[b]) {
                return false;
            }
        }
        return true;
    };
    if (false) {
    }
    a.prototype.member305 = function () {
        for (var b = 0; b < this.flags.length; b++) {
            this.flags[b] = 0;
        }
        for (var b = 0; b < this.member300.length; b++) {
            var c = b / 32 | 0;
            var d = b - c * 32;
            if (this.member291(b)) {
                this.flags[c] |= 1 << d;
            }
        }
    };
    a.prototype.toString = function () {
        if (this.member297) {
            this.member299 = this.member300.join('');
            this.member297 = false;
        }
        return this.member299;
    };
    a.prototype.member304 = function () {
        if (this.member298) {
            this.member305();
            this.member298 = false;
        }
        return this.flags;
    };
    a.prototype.member306 = function (c) {
        for (var b = 0; b < c.length; b++) {
            var d = c.charAt(b);
            if (d === '1') {
                this.member300[b] = 1;
            } else {
                this.member300[b] = 0;
            }
        }
        return true;
    };
    a.prototype.member307 = function (d, c) {
        var e = new a();
        for (var b = 0; b < this.member300.length; b++) {
            e.member300[b] = this.member300[b];
        }
        if (d !== undefined) {
            for (var b = 0; b < d.length; b++) {
                e.enable(d[b]);
            }
        }
        if (c === true) {
            e.member296 = true;
        }
        return e;
    };
    a.prototype.enable = function (b) {
        if (false) {
        }
        this.member300[b] = 1;
        this.member297 = true;
        this.member298 = true;
    };
    a.prototype.disable = function (b) {
        if (false) {
        }
        this.member300[b] = 0;
        this.member297 = true;
        this.member298 = true;
    };
    a.prototype.member291 = function (b) {
        if (this.member300[b] === 1) {
            return true;
        }
        return false;
    };
    a.prototype.member308 = function (b) {
        if (this.member300[b] === 0) {
            return true;
        }
        return false;
    };
    a.prototype.member301 = function () {
        for (var b = 0; b < this.member300.length; b++) {
            this.disable(b);
        }
    };
    return function (b) {
        return new a(b);
    };
}();