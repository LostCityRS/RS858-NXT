import { Class509 } from 'Class509.js';
export var Class510 = function () {
    var c = {
        member1268: 0,
        member8308: 1,
        member8309: 2,
        member2832: 3
    };
    var b = function (d, e, g) {
        this.member8310 = false;
        this.member8311 = {
            state: Array(20),
            member8305: 0
        };
        this.member8311.state[0] = true;
        this.member8311.member8305 = 1;
        this.drawArrays = Array(c.member2832);
        this.drawArrays[c.member1268] = this.member8312 = Class509(d);
        this.drawArrays[c.member8308] = this.member8313 = Class509(e);
        this.drawArrays[c.member8309] = this.member8314 = Class509(g);
        this.member8315 = 0;
        this.member8316 = 0;
        this.member8317 = 0;
        return this;
    };
    b.prototype.member8318 = function (d) {
        if (d === undefined) {
            this.member8310 = false;
        } else {
            this.member8310 = d;
        }
        this.member8311.state[0] = true;
        this.member8311.member8305 = 1;
    };
    b.prototype.member8319 = function (d) {
        this.member8310 = d;
    };
    b.prototype.member1626 = function () {
        return this.member8310 && this.member8311.state[this.member8311.member8305 - 1];
    };
    b.prototype.member4228 = function (d) {
        this.member8311.state[this.member8311.member8305] = d && this.member8311.state[this.member8311.member8305 - 1];
        this.member8311.member8305++;
    };
    b.prototype.member4229 = function () {
        --this.member8311.member8305;
    };
    b.prototype.member8320 = function () {
        for (var d = 0; d < c.member2832; ++d) {
            this.drawArrays[d].member301();
        }
    };
    b.prototype.member8321 = function (d) {
        return this.drawArrays[d];
    };
    b.prototype.member8322 = function () {
        var d = '';
        d += 'opaque: ' + this.drawArrays[c.member1268].member8305 + ' ';
        d += 'alpha first: ' + this.drawArrays[c.member8308].member8305 + ' ';
        d += 'alpha last: ' + this.drawArrays[c.member8309].member8305 + ' ';
        d += '[opaque sort calls: ' + this.member8315 + ' ';
        d += 'alpha first sort calls: ' + this.member8316 + ' ';
        d += 'alpha last sort calls: ' + this.member8317 + '] ';
        return d;
    };
    var a = function (d, e, g) {
        return new b(d, e, g);
    };
    a.member8323 = c;
    return a;
}();