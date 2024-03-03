import { Class182 } from 'Class182.js';
import { Class185 } from 'Class185.js';
import { Class41 } from 'Class41.js';
import { Class162 } from 'Class162.js';
export var Class287 = function () {
    var c = new Float32Array(3);
    var d = new Float32Array(3);
    var a = function (e) {
        this.member1594 = new Float32Array(3);
        this.member1595 = new Float32Array(3);
        this.member1596 = new Float32Array(3);
        this.member3392 = new Float32Array(3);
        this.member757 = new Float32Array(3);
        this.member3393 = false;
        this.member3394 = true;
        this.member3395 = 0;
        this.member3396 = 0;
        this.member3397 = 0;
        this.member3398 = false;
        this.member3399 = false;
        this.member3400 = Class182();
        this.member3401 = true;
        this.member3402 = null;
        this.member3403 = 0;
        this.member3404 = 0;
        this.member3405 = 0;
        this.member3406 = 0;
        this.member3407 = 0;
        this.member3408 = -1;
        this.member3409 = -1;
        this.member3410 = false;
        this.member3411 = null;
        this.member25(e);
    };
    a.prototype.member25 = function (g) {
        if (g.member3412 !== undefined) {
            this.member3402 = g.member3412;
            this.member3413 = Class185.member2030(this.member3402.member2063());
            if (this.member3413 === null) {
                throw new Error('1828 ' + this.member3402.member2063());
            }
            this.member3403 = this.member3413.member687();
            this.member3396 = Date.now() / 1000;
            var h = this.member3413.member707();
            if (h > 0) {
                this.member3411 = new Array(h);
                for (var e = 0; e < this.member3411.length; e++) {
                    this.member3411[e] = Class185.member2056(this.member3413.member708(e));
                }
            }
        } else {
            throw new Error('1829 ');
        }
    };
    a.prototype.member3414 = function () {
        return this.member3402;
    };
    a.prototype.member2030 = function () {
        return this.member3413;
    };
    a.prototype.member2035 = function () {
        return this.member3392;
    };
    a.prototype.member3415 = function () {
        return this.member3400;
    };
    a.prototype.member3416 = function () {
        return this.member3408;
    };
    a.prototype.member3417 = function () {
        return this.member3409;
    };
    a.prototype.member3418 = function () {
        return this.member3410;
    };
    a.prototype.member3419 = function (g, h, e) {
        this.member3408 = g;
        this.member3409 = h;
        this.member3410 = e;
    };
    a.prototype.member2036 = function () {
        return this.member3411;
    };
    a.prototype.member3420 = function () {
        this.member3398 = true;
    };
    a.prototype.member512 = function () {
        this.member3399 = true;
        for (var e = this.member3400.member776(); e !== undefined; e = this.member3400.member777()) {
            Class185.member2061(e);
        }
        this.member3393 = false;
        this.member3394 = true;
        this.member3395 = 0;
        this.member3396 = 0;
        this.member3397 = 0;
        this.member3398 = false;
        this.member3399 = false;
        this.member3400.member301();
        this.member3403 = 0;
        this.member3404 = 0;
        this.member3405 = 0;
        this.member3406 = 0;
        this.member3407 = 0;
        this.member3408 = -1;
        this.member3409 = -1;
        this.member3410 = false;
        this.member3411 = null;
        this.member3402 = null;
        this.member3413 = null;
        b.member33(this);
    };
    a.prototype.member3421 = function (h) {
        for (var e = this.member3400.member776(); e !== undefined; e = this.member3400.member777()) {
            var g = e.member487(h);
            if (!g) {
                this.member3400.remove();
                Class185.member2061(e);
            }
        }
    };
    a.prototype.member3422 = function () {
        var e = Math.atan2(this.member757[2], this.member757[0]);
        var g = Math.atan2(this.member757[1], Math.sqrt(this.member757[0] * this.member757[0] + this.member757[2] * this.member757[2]));
        this.member3405 = this.member3413.member684() - this.member3413.member683();
        this.member3404 = e + this.member3413.member683() - this.member3405 / 2;
        this.member3407 = this.member3413.member686() - this.member3413.member685();
        this.member3406 = g + this.member3413.member685() - this.member3407 / 2;
    };
    a.prototype.member3423 = function () {
        this.member3392[0] = (this.member1594[0] + this.member1595[0] + this.member1596[0]) / 3;
        this.member3392[1] = (this.member1594[1] + this.member1595[1] + this.member1596[1]) / 3;
        this.member3392[2] = (this.member1594[2] + this.member1595[2] + this.member1596[2]) / 3;
        var g = Class41.member322(this.member1595, this.member1594, c);
        var e = Class41.member322(this.member1596, this.member1594, d);
        Class41.member325(e, g, this.member757);
        Class41.normalize(this.member757);
        if (this.member3413.member684() !== 0 || this.member3413.member686() !== 0) {
            this.member3422();
        }
        this.member3394 = false;
    };
    a.prototype.member3424 = function (h) {
        var g = this.member3404 + this.member3405 * Math.random();
        var e = this.member3406 + this.member3407 * Math.random();
        e %= Math.PI;
        if (e > 0 && e < Math.PI / 2) {
            e += Math.PI;
        } else if (e > 1.5 * Math.PI) {
            e -= Math.PI;
        }
        h[0] = Math.sin(e) * Math.cos(g);
        h[1] = -Math.cos(e);
        h[2] = Math.sin(e) * Math.sin(g);
        Class41.normalize(h);
    };
    a.prototype.member3425 = function (e) {
        var g = e.member2027();
        if (this.member3413.member684() !== 0 || this.member3413.member686() !== 0) {
            this.member3424(g);
        } else {
            Class41.set(this.member757, g);
        }
    };
    a.prototype.member3426 = function (j) {
        var e = j.member2026();
        var i = Math.random();
        var h = Math.random();
        if (i + h > 1) {
            i = 1 - i;
            h = 1 - h;
        }
        var g = 1 - (i + h);
        e[0] = this.member1594[0] * i + this.member1595[0] * h + this.member1596[0] * g;
        e[1] = this.member1594[1] * i + this.member1595[1] * h + this.member1596[1] * g;
        e[2] = this.member1594[2] * i + this.member1595[2] * h + this.member1596[2] * g;
    };
    a.prototype.member3427 = function () {
        var h = Class185.member2060();
        if (h === undefined) {
            return false;
        }
        var e = this.member3413.member689() / 50;
        this.member3425(h);
        var m = this.member3413.member690();
        this.member3426(h);
        var g = this.member3413.member695();
        var j = this.member3413.member709();
        var k = this.member3413.member705();
        var i = this.member3413.member706();
        h.fill(this, e, m, k, g, i, j, this.member3413.member703() !== member53.member14, this.member3413.member704() !== member53.member14);
        this.member3400.member2038(h);
        return true;
    };
    a.prototype.member3428 = function (g) {
        this.member3403 += g * this.member3413.member687();
        if (this.member3403 >= 1) {
            var e = Math.floor(this.member3403);
            this.member3403 -= e;
            while (e > 0) {
                if (!this.member3427()) {
                    break;
                }
                e--;
            }
        }
    };
    a.prototype.member487 = function (g) {
        if (!this.member3393) {
            return false;
        }
        if (!g) {
            this.member3395++;
        }
        if (this.member3397 + 50 < this.member3395) {
            return true;
        }
        var e = Date.now() / 1000;
        var h = e - this.member3396;
        this.member3421(h);
        if (!this.member3399 && !this.member3398) {
            if (this.member3394) {
                this.member3423();
            }
            this.member3428(h);
        }
        if (!g) {
            this.member3396 = e;
        }
        return false;
    };
    a.prototype.member3429 = function (h, g, e) {
        if (h[0] !== this.member1594[0] || h[1] !== this.member1594[1] || h[2] !== this.member1594[2]) {
            this.member1594[0] = h[0];
            this.member1594[1] = h[1];
            this.member1594[2] = h[2];
            this.member3394 = true;
        }
        if (g[0] !== this.member1595[0] || g[1] !== this.member1595[1] || g[2] !== this.member1595[2]) {
            this.member1595[0] = g[0];
            this.member1595[1] = g[1];
            this.member1595[2] = g[2];
            this.member3394 = true;
        }
        if (e[0] !== this.member1596[0] || e[1] !== this.member1596[1] || e[2] !== this.member1596[2]) {
            this.member1596[0] = e[0];
            this.member1596[1] = e[1];
            this.member1596[2] = e[2];
            this.member3394 = true;
        }
        this.member3393 = true;
        if (this.member1594[0] === this.member1595[0] && this.member1594[0] === this.member1596[0] && this.member1594[1] === this.member1595[1] && this.member1594[1] === this.member1596[1] && this.member1594[2] === this.member1595[2] && this.member1594[2] === this.member1596[2]) {
            this.member3399 = true;
        } else {
            this.member3399 = false;
        }
        this.member3397 = this.member3395;
    };
    var b = Class162(function (e) {
        return new a(e);
    }, undefined, a.prototype.member25, 80);
    return function (e) {
        return b.get(e);
    };
}();