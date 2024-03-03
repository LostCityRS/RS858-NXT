import { Class105 } from 'Class105.js';
import { Class385 } from 'Class385.js';
import { Class50 } from 'Class50.js';
import { Class386 } from 'Class386.js';
import { Class387 } from 'Class387.js';
import { Class288 } from 'Class288.js';
export var Class388 = function () {
    var g = 0;
    var b = 1;
    var e = false;
    var d = function (o, m, k, i, n, j, h) {
        if (o === undefined || m === undefined) {
            throw new Error('1334 ');
        }
        this.member2970 = o;
        this.member4409 = m;
        this.member4410 = Class105({ member895: 16 });
        this.member1728 = Class385();
        this.member4350 = k === undefined ? false : k;
        this.member4344 = Class50.member368;
        if (i !== undefined) {
            this.member4344 = i;
        }
        this.member4385 = n;
        this.member4387 = j;
        this.member4411 = member47;
        this.member4412 = -1;
        this.member4413 = false;
        this.member4414 = member47;
        this.member4415 = member47;
        this.member4416 = -1;
        this.member4417 = 0;
        this.member4418 = undefined;
        this.member4419 = member47;
        this.member3434 = null;
        this.member4347 = h === undefined ? false : h;
        this.member4420 = false;
        this.member4421 = member47;
        this.member4422 = member47;
        this.member4423 = member47;
        this.member4424 = member47;
        this.member4345 = 0;
        if (false) {
        }
    };
    d.prototype.member4425 = function () {
        if (this.member4420) {
            return member47;
        }
        return this.member4411;
    };
    d.prototype.member4426 = function () {
        return this.member4414;
    };
    d.prototype.member4427 = function () {
        return this.member4412 !== -1;
    };
    d.prototype.member4428 = function () {
        return this.member4412;
    };
    d.prototype.member4429 = function () {
        return this.member4415;
    };
    d.prototype.member4430 = function () {
        return this.member4419;
    };
    d.prototype.member4431 = function () {
        return this.member4416 !== -1;
    };
    d.prototype.member4432 = function () {
        return this.member4416;
    };
    d.prototype.member4433 = function () {
        return this.member3434;
    };
    var a = function (h, j, i) {
        if (h.member3434 !== member47) {
            h.member3434.member3453();
        }
        var k = h.member4421;
        h.member4411 = j;
        h.member4421 = i;
        if (i !== member47) {
            i.member510();
        }
        if (k !== member47) {
            k.member511();
        }
    };
    var c = function (h, j, i) {
        if (h.member3434 !== member47) {
            h.member3434.member3453();
        }
        var k = h.member4422;
        h.member4415 = j;
        h.member4422 = i;
        if (i !== member47) {
            i.member510();
        }
        if (k !== member47) {
            k.member511();
        }
    };
    d.prototype.member4434 = function () {
        if (this.member4419 !== member47) {
            this.member4419.member4378();
            this.member4419 = member47;
        }
    };
    d.prototype.member4435 = function () {
        this.member4434();
        this.member4416 = -1;
        this.member4417 = 0;
        this.member4418 = undefined;
    };
    d.prototype.member4436 = function () {
        if (this.member4415 !== member47) {
            return this.member4415;
        }
        return this.member4411;
    };
    d.prototype.member4437 = function () {
        if (this.member4415 !== member47) {
            return this.member4422;
        }
        return this.member4421;
    };
    d.prototype.member4438 = function (i, j, h) {
        if (i === null) {
            this.member4435();
            c(this, member47, member47);
            if (false) {
            }
            this.member1728.member583();
            return false;
        }
        if (i === -1) {
            return false;
        }
        if (this.member4416 === i) {
            return true;
        }
        this.member4435();
        if (this.member4415 !== member47 && this.member4415.member4372() === i) {
            return false;
        }
        this.member4416 = i;
        this.member4417 = 0;
        this.member4418 = h;
        if (false) {
        }
        return true;
    };
    d.prototype.member4439 = function (i, h) {
        if (i === null) {
            this.member4414 = member47;
            this.member4412 = -1;
            if (false) {
            }
            return;
        }
        if (i === -1) {
            return;
        }
        if (this.member4412 === i) {
            this.member4413 = h === true;
            return;
        }
        if (this.member4411 !== member47 && this.member4411.member4372() === i) {
            return;
        }
        if (false) {
        }
        this.member4414 = member47;
        this.member4412 = i;
        this.member4413 = h === true;
        return;
    };
    d.prototype.member2679 = function () {
        return this.member4411 !== member47 || this.member4414 !== member47 || this.member4412 !== -1 || this.member4415 !== member47 || this.member4419 !== member47 || this.member4416 !== -1;
    };
    d.prototype.member4440 = function () {
        this.member4420 = true;
        this.member4414 = member47;
        this.member4412 = -1;
        if (this.member4415 !== member47) {
            this.member1728.member583();
        }
        c(this, member47, member47);
        this.member4435();
    };
    d.prototype.member4441 = function (h, i) {
        return i + Math.pow(2, 33) * h;
    };
    d.prototype.member4442 = function (h, i) {
        return this.member4410.find(this.member4441(h, i));
    };
    d.prototype.member4443 = function (h, i) {
        this.member4410.put(h, 1, this.member4441(h.member4372(), i));
    };
    d.prototype.member4444 = function (m, k, j, h) {
        if (this.member4412 !== -1 && this.member4414 === member47) {
            var i = this.member4442(this.member4412, k);
            if (i !== null) {
                this.member4414 = i;
                if (false) {
                }
            } else {
                this.member4414 = Class386({
                    id: this.member4412,
                    member2970: this.member2970,
                    member4350: this.member4350,
                    member4385: this.member4385,
                    member4387: this.member4387,
                    member4344: this.member4344,
                    member4335: g,
                    member4347: this.member4347
                });
                if (false) {
                }
            }
            this.member4414.member4374(this.member4413);
        }
        if (this.member4414 !== member47) {
            if (this.member4414.member4380(this.member2970, this.member4409, Class387.member104, k, h, m)) {
                if (this.member4420 && (this.member4411 === member47 || this.member4411.member4372() !== this.member4414.member4372())) {
                    this.member4420 = false;
                }
                a(this, this.member4414, j);
                this.member4443(this.member4411, k);
                if (false) {
                }
                this.member4414 = member47;
                this.member4412 = -1;
            }
        }
        if (this.member4416 !== -1 && this.member4419 === member47) {
            var i = this.member4442(this.member4416, k);
            if (i !== null) {
                this.member4419 = i;
                this.member4419.member4388(m, this.member4417, this.member4418);
                if (false) {
                }
            } else {
                this.member4419 = Class386({
                    id: this.member4416,
                    member2970: this.member2970,
                    member4350: this.member4350,
                    member4385: this.member4385,
                    member4387: this.member4387,
                    member4344: this.member4344,
                    member4383: this.member4417,
                    member4335: b,
                    member4370: this.member4418
                });
                if (false) {
                }
            }
            this.member4419.member4374(false);
        }
        if (this.member4419 !== member47) {
            if (this.member4419.member4380(this.member2970, this.member4409, Class387.member104, k, h, m)) {
                this.member4419.member4224(m, false);
                if (!this.member4419.member4363.member2000()) {
                    c(this, this.member4419, j);
                    this.member4443(this.member4415, k);
                    if (false) {
                    }
                    this.member4435();
                    this.member1728.member583();
                }
            }
        }
    };
    d.prototype.member4380 = function (j, k, i, h) {
        if (i !== this.member4423 || h !== this.member4424) {
            this.member4423 = i;
            this.member4424 = h;
            this.member4414 = member47;
            this.member4434();
            if (!this.member4431() && this.member4415 !== member47) {
                if (false) {
                }
                this.member4416 = this.member4415.member4372();
            }
            if (!this.member4427() && this.member4411 !== member47) {
                if (false) {
                }
                this.member4412 = this.member4411.member4372();
                this.member4413 = this.member4411.member4375();
            } else if (!this.member4427()) {
                a(this, this.member4411, i);
            }
        }
        if (i !== member47 && i.member2101() !== undefined) {
            if (this.member3434 === null) {
                this.member3434 = Class288({ member433: k });
            }
        } else if (this.member3434 !== null) {
            this.member3434.member512();
            this.member3434 = null;
        }
        if (h !== member47 && i !== member47 && (this.member4431() || this.member4427())) {
            this.member4444(j, h.member4299(), i, h);
            return this.member4415 !== member47 && this.member4415.member1540() || this.member4411 !== member47 && this.member4411.member1540();
        }
        return true;
    };
    d.prototype.member4445 = function (i, h) {
        if (this.member4415 !== member47 && this.member4415.member1540()) {
            if (this.member4345 > 0) {
                this.member4415.member4342(this.member4345);
            }
            this.member4345 = 0;
            this.member4415.member4224(i, h);
            if (this.member4415.member1999()) {
                if (false) {
                }
                this.member1728.member583();
                c(this, member47, member47);
            }
        }
        if (this.member4411 !== member47 && this.member4411.member1540()) {
            this.member4411.member4224(i, h);
            if (this.member4411.member1999()) {
                this.member4411.member301(i);
            }
        }
        return this.member4446();
    };
    d.prototype.member4446 = function () {
        var i = false;
        if (this.member4411 !== member47 && this.member4411.member1540() && (this.member4415 === member47 || !this.member4411.member4375())) {
            this.member4411.member1998(this.member1728, false);
            i = true;
        }
        if (this.member4415 !== member47 && this.member4415.member1540()) {
            var h = this.member4411 !== member47 && !this.member4411.member4375();
            this.member4415.member1998(this.member1728, h);
            i = true;
        }
        if (i) {
            return this.member1728;
        } else {
            return member47;
        }
    };
    d.prototype.member4447 = function (i, h) {
        this.member4448(h);
        this.member4449(i);
    };
    d.prototype.member4448 = function (h) {
        if (this.member3434 !== null && this.member4437() !== member47 && this.member4414 === member47 && this.member4419 === member47) {
            this.member4437().member2128(this.member3434, h, this.member4446());
        }
    };
    d.prototype.member4450 = function (j, h, i) {
        if (this.member3434 !== null && this.member4437() !== member47 && this.member4414 === member47 && this.member4419 === member47) {
            this.member3434.member952(j, h, i);
        }
    };
    d.prototype.member4449 = function (h) {
        if (this.member3434 !== null && this.member4437() !== member47 && this.member4414 === member47 && this.member4419 === member47) {
            this.member3434.member486(h);
        }
    };
    d.prototype.member4451 = function () {
        var h = false;
        if (this.member4419 !== member47 && this.member4419.member4392()) {
            this.member4435();
            h = true;
        }
        if (this.member4415 !== member47 && this.member4415.member4392()) {
            c(this, member47, member47);
            this.member1728.member583();
            if (this.member4419 === member47) {
                h = true;
            }
        }
        return h;
    };
    d.prototype.member1843 = function () {
        if (this.member4415 !== member47) {
            return this.member4415.member1843();
        }
        if (this.member4411 !== member47) {
            return this.member4411.member1843();
        }
        return false;
    };
    d.prototype.member4452 = function (h) {
        this.member4345 = h;
    };
    d.prototype.member512 = function () {
        if (this.member3434 !== member47) {
            this.member3434.member512();
            this.member3434 = member47;
        }
        c(this, member47, member47);
        a(this, member47, member47);
    };
    return function (o, m, k, i, n, j, h) {
        return new d(o, m, k, i, n, j, h);
    };
}();