import { Class372 } from 'Class372.js';
import { Class374 } from 'Class374.js';
import { Class291 } from 'Class291.js';
import { Class373 } from 'Class373.js';
export var Class375 = function () {
    var b = 0;
    var a = 1;
    var d = 2;
    var c = function (s, i, n, g, o, j, r, q, h, e, m, k) {
        this.member4147 = undefined;
        this.member4148 = undefined;
        this.member2519 = undefined;
        this.member2520 = 0;
        this.member2522 = false;
        this.member2518 = 0;
        this.member4149 = false;
        this.member4150 = false;
        if (s !== undefined && i !== undefined && n !== undefined && g !== undefined && o !== undefined && j !== undefined && r !== undefined && k !== undefined) {
            member46(this, Class372, s, i, n, Class374.member4142, g);
            this.member4148 = r;
            this.member2519 = q;
            this.member2520 = h;
            this.member2522 = e;
            this.member2518 = m;
            this.member4147 = Class291(g, o, j);
            this.member4093(k);
            this.member4096(Class373({ empty: true }));
        } else {
            throw new Error('965 ');
        }
    };
    member45(Class372, c);
    c.prototype.getID = function () {
        return this.member4148.member682();
    };
    c.prototype.member4151 = function () {
        return this.member4148;
    };
    c.prototype.member4152 = function () {
        return this.member4148;
    };
    c.prototype.member4153 = function () {
        return this.member4147;
    };
    c.prototype.hide = function () {
        this.member4149 = true;
        this.member4154(d);
    };
    c.prototype.member4155 = function () {
        this.member4149 = false;
        this.member4154(a);
    };
    c.prototype.member4156 = function () {
        this.member4150 = true;
        this.member4154(d);
    };
    c.prototype.member4157 = function () {
        this.member4150 = false;
        this.member4154(a);
    };
    c.prototype.member4158 = function () {
        return false;
    };
    c.prototype.member4159 = function () {
        return this.member4149;
    };
    c.prototype.member4160 = function () {
        return this.member4150;
    };
    c.prototype.member4154 = function (e) {
        if (e === b) {
            return true;
        }
        if (!this.member4148.member4161(this.member2519, this.member2522)) {
            return true;
        }
        var g = undefined;
        if (e === a) {
            g = this.member4085().member4114().member4162;
        } else if (e === d) {
            g = this.member4085().member4114().member4163;
        }
        g(this.member4110(), this.member4147.x, this.member4147.member756, this.member4148.getWidth(this.member2520), this.member4148.getLength(this.member2520), this.member2518);
        return true;
    };
    c.prototype.member3437 = function (e, k, m, n, j) {
        if (this.member4103(e)) {
            if (!this.member4149 && this.member4148.getActive()) {
                var i = this.member4095();
                var h = this.member4085().member4166();
                var g = this.member3320().member4167().member1812(n, m, h.width, h.height, i);
                this.member4098(g);
                if (g) {
                    this.member4085().member4168(this);
                }
            }
        }
    };
    c.prototype.member486 = function () {
    };
    return function (s, i, n, g, o, j, r, q, h, e, m, k) {
        return new c(s, i, n, g, o, j, r, q, h, e, m, k);
    };
}();