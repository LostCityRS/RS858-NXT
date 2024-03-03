import { Class50 } from 'Class50.js';
import { Class131 } from 'Class131.js';
import { Class384 } from 'Class384.js';
import { Class383 } from 'Class383.js';
import { Class244 } from 'Class244.js';
import { Class371 } from 'Class371.js';
import { Class332 } from 'Class332.js';
import { Class347 } from 'Class347.js';
import { Class351 } from 'Class351.js';
export var Class386 = function () {
    var a = function (b) {
        this.member4359 = undefined;
        this.member4360 = -1;
        this.member4361 = member47;
        this.member4344 = Class50.member368;
        this.member4345 = 0;
        this.member4347 = false;
        this.member4350 = false;
        this.member4362 = member47;
        this.member4363 = member47;
        this.member4364 = false;
        this.member4365 = false;
        this.member4366 = -1;
        this.member4367 = a.prototype.member4368;
        this.member4369 = undefined;
        this.member4370 = undefined;
        this.member4371(b);
    };
    a.prototype.member4372 = function () {
        return this.member4360;
    };
    a.prototype.member4373 = function () {
        return this.member4361;
    };
    a.prototype.member4374 = function (b) {
        this.member4364 = b;
    };
    a.prototype.member4375 = function () {
        return this.member4364;
    };
    a.prototype.member1540 = function () {
        if (this.member4370 !== undefined) {
            return this.member4370.member4376(this);
        }
        return this.member4377();
    };
    a.prototype.member4377 = function () {
        return this.member4361 !== member47 && this.member4362 !== member47 && this.member4363 !== member47;
    };
    a.prototype.member4378 = function () {
        if (this.member4370 !== undefined) {
            this.member4370.member4379(this);
            this.member4370 = undefined;
        }
    };
    a.prototype.member4380 = function (g, j, b, i, d, h) {
        if (!this.member4377()) {
            if (this.member4361 === member47) {
                this.member4381(g);
                if (this.member4361 === member47) {
                    return false;
                }
            }
            var e = this.member4361.member2913();
            if (e !== undefined) {
                var c = e.member2919();
                if (c === member47) {
                    return false;
                }
                this.member4359.member4338(c);
            }
            this.member4382(j, b, i, d, h);
        }
        return this.member1540();
    };
    a.prototype.member4381 = function (b) {
        this.member4361 = b.member3227(Class131.member1216.member1204, this.member4360);
    };
    a.prototype.member4382 = function (g, b, e, c, d) {
        if (this.member4362 !== member47 && this.member4363 !== member47) {
            return;
        }
        this.member4362 = this.member4361.member2935(g, b, e, c);
        if (this.member4362 === member47) {
            return;
        }
        if (this.member4363 === member47) {
            this.member4363 = Class384({
                member4343: this.member4362.member2004(),
                member4344: this.member4344,
                member4345: this.member4345,
                member4346: d,
                member4347: this.member4347,
                member4348: this.member4361.member2922(),
                member4349: this.member4361.member2925(),
                member4350: this.member4350
            });
        }
    };
    a.prototype.member2927 = function () {
        if (this.member4361 === member47) {
            return -1;
        }
        return this.member4361.member2927();
    };
    a.prototype.member1999 = function () {
        if (this.member4365) {
            return true;
        }
        if (this.member4363 === member47) {
            return false;
        }
        return this.member4363.member1999();
    };
    a.prototype.member301 = function (c, b) {
        if (this.member4363 !== member47) {
            this.member4363.member301(c, b);
        }
    };
    a.prototype.member4351 = function () {
        this.member4363.member4351();
    };
    a.prototype.member4341 = function () {
        return this.member4363.member4341();
    };
    a.prototype.member4342 = function (b) {
        this.member4363.member4342(b);
    };
    a.prototype.member1843 = function () {
        if (this.member4362 === member47) {
            return false;
        }
        return this.member4362.member1843();
    };
    a.prototype.member4371 = function (b) {
        if (b.member4383 === undefined) {
            b.member4383 = 0;
        }
        if (b.member4344 === undefined) {
            b.member4344 = Class50.member368;
        }
        if (b.member4347 === undefined) {
            b.member4347 = false;
        }
        if (b.member4350 === undefined) {
            b.member4350 = false;
        }
        if (b.id !== this.member4360) {
            this.member4360 = b.id;
            this.member4381(b.member2970);
            this.member4345 = b.member4383;
            this.member4344 = b.member4344;
            this.member4350 = b.member4350;
            this.member4347 = b.member4347;
            this.member4378();
            if (b.member4370 !== undefined) {
                this.member4370 = b.member4370;
                this.member4370.member4384(this);
            }
        }
        var c = 0;
        if (b.member4335 !== undefined) {
            c = b.member4335;
        }
        this.member4359 = Class383(c, undefined);
        if (b.member4385 !== undefined) {
            this.member4386(b.member4385, b.member4387);
        }
    };
    a.prototype.member4388 = function (d, c, b) {
        if (this.member4362 === member47) {
            return;
        }
        this.member301(d, c);
        this.member4378();
        if (b !== undefined) {
            this.member4370 = b;
            this.member4370.member4384(this);
        }
    };
    a.prototype.member4224 = function (c, b) {
        if (this.member4363 === member47) {
            return;
        }
        if (this.member4361.member2926() === Class244.member2844) {
            if (b > 0) {
                this.member4365 = true;
                return;
            }
        }
        if (this.member4361.member2926() === Class244.member2842) {
            if (b > 0) {
                this.member4363.member4352(c);
            } else {
                this.member4363.member4342(0);
            }
        }
        this.member4363.member4224(c);
        if (!this.member4363.member2000()) {
            this.member4389();
        }
    };
    a.prototype.member4389 = function () {
        var e = this.member4363.member2001();
        if (e !== this.member4366) {
            var b = this.member4366;
            var o = false;
            while (!o) {
                ++b;
                if (b >= e) {
                    o = true;
                }
                var g = this.member4361.member2921();
                if (this.member4361 === member47 || g === null || b >= g.length || g[b] === undefined) {
                    continue;
                }
                var n = g[b][0];
                var d = n >> 8;
                var m = n >> 5 & 7;
                var c = n & 31;
                if (g[b].length > 1) {
                    var j = Math.floor(Math.random() * g[b].length);
                    if (j > 0) {
                        d = g[b][j];
                    }
                }
                var k = this.member4361.member2929();
                var h = k === null ? 255 : k[b];
                var i = this.member4361.member2930(b);
                if (this.member4369 !== undefined) {
                    if (this.member4369.member4390 === undefined || this.member4369.member4390()) {
                        this.member4367.call(this.member4369, d, m, h, this.member4361.member2931(), c, this, this.member4362, this.member4363, i);
                    }
                } else {
                    this.member4367(d, m, h, this.member4361.member2931(), c, this, this.member4362, this.member4363, i);
                }
            }
        }
        this.member4366 = e;
    };
    a.prototype.member4368 = function (k, c, g, e, m, d, b, i, h) {
        var j = e != -1 ? g * e / 100 : g;
        Class371.member4060(Class332.member3784, k, c, j, Class347.member3911, Class351.member3922, undefined, null, 0, h);
    };
    a.prototype.member4386 = function (b, c) {
        this.member4367 = b;
        this.member4369 = c;
    };
    a.prototype.member1998 = function (c, b) {
        if (!this.member1540()) {
            throw new Error('890 ');
        }
        this.member4359.member4339(b);
        this.member4362.member1998(this.member4363, c, this.member4359);
    };
    a.prototype.member4391 = function (b) {
        if (this.member1540() && !this.member4363.member2000()) {
            return true;
        }
        if (b > 0) {
            if (this.member4361.member2926() === Class244.member2841) {
                return false;
            }
        } else if (this.member4361.member2927() === Class244.member2845) {
            return false;
        }
        return true;
    };
    a.prototype.member4392 = function () {
        if (this.member4361 === member47) {
            return false;
        }
        return this.member4361.member2927() === Class244.member2846;
    };
    return function (b) {
        return new a(b);
    };
}();