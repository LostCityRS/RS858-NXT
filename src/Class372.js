import { Class121 } from 'Class121.js';
import { Class308 } from 'Class308.js';
import { Class86 } from 'Class86.js';
import { Class371 } from 'Class371.js';
import { Class310 } from 'Class310.js';
export var Class372 = function () {
    var a = new Float32Array(3);
    var b = function (e, h, d, c, g) {
        this.node = null;
        this.parent = null;
        this.member508 = -1;
        this.member4068 = 0;
        this.member4069 = undefined;
        this.level = -1;
        this.member2523;
        this.member4070 = null;
        this.member4071 = Class121.member778;
        this.member2504 = Class121.member778;
        this.member4072 = false;
        this.member4073 = undefined;
        this.member4074 = false;
        this.member4075 = 0;
        this.member4076;
        this.member4077 = false;
        this.member4078 = false;
        this.member4079 = true;
        if (e !== undefined && h !== undefined && d !== undefined && c !== undefined) {
            this.node = e;
            this.parent = h;
            this.member4070 = d;
            this.member508 = c;
            this.level = g;
        } else {
            throw new Error('1052 ');
        }
        member46(this, Class308);
    };
    member45(Class308, b);
    b.prototype.member3320 = function () {
        return this.node;
    };
    b.prototype.member1985 = function () {
        return this.parent;
    };
    b.prototype.member4080 = function (c) {
        this.parent = c;
    };
    b.prototype.member87 = function () {
        return this.member508;
    };
    b.prototype.member4081 = function () {
        return this.level;
    };
    b.prototype.member4082 = function (c) {
        this.level = c;
    };
    b.prototype.member4083 = function () {
        return this.member2523;
    };
    b.prototype.member4084 = function (c) {
        this.member2523 = c;
    };
    b.prototype.member4085 = function () {
        return this.member4070;
    };
    b.prototype.member4086 = function (c) {
        this.member4070 = c;
    };
    b.prototype.member4087 = function () {
        return this.member4071;
    };
    b.prototype.member4088 = function (c) {
        this.member4071 = c;
    };
    b.prototype.member4089 = function () {
        return this.member2504;
    };
    b.prototype.member4090 = function (c) {
        this.member2504 = c;
    };
    b.prototype.member4091 = function () {
        return this.member2504 === this.member4071;
    };
    b.prototype.member4092 = function (c) {
        this.member4071 += c;
        if (this.member4071 > Class121.member778) {
            this.member4071 = Class121.member778;
        }
        if (this.parent !== null && this.parent.member4092 !== undefined) {
            this.parent.member4092(c);
        }
    };
    b.prototype.member2098 = function () {
        return this.node.member2098();
    };
    b.prototype.member4093 = function (c) {
        this.node.member4093(c);
    };
    b.prototype.member3659 = function () {
        return this.member4072;
    };
    b.prototype.member4094 = function (c) {
        this.member4072 = c;
    };
    b.prototype.member4095 = function () {
        return this.member4073;
    };
    b.prototype.member4096 = function (c) {
        this.member4073 = c;
    };
    b.prototype.member4097 = function () {
        return this.member4074;
    };
    b.prototype.member4098 = function (c) {
        this.member4074 = c;
    };
    b.prototype.member2026 = function (c) {
        this.node.member344(c);
    };
    b.prototype.getWorldPosition = function () {
        return this.node.member4099();
    };
    b.prototype.member4100 = function () {
        return this.member4075;
    };
    b.prototype.member4101 = function (c) {
        this.member4075 = c;
    };
    b.prototype.member4102 = function () {
        if (false) {
        }
    };
    b.prototype.member3437 = function (c, e, g, h, d) {
        if (false) {
        }
    };
    b.prototype.member4103 = function (c) {
        if (this.member4076 === c) {
            return false;
        }
        this.member4076 = c;
        return true;
    };
    b.prototype.member4104 = function () {
        return this.member4077;
    };
    b.prototype.member4105 = function (c) {
        this.member4077 = c;
    };
    b.prototype.member4106 = function () {
        return this.member4078;
    };
    b.prototype.member4107 = function (c) {
        this.member4078 = c;
    };
    b.prototype.member4108 = function () {
        return this.member4079;
    };
    b.prototype.member4109 = function (c) {
        this.member4079 = c;
    };
    b.prototype.member4110 = function (e, d) {
        if (e === undefined && d === undefined) {
            var g = this.node.member4099();
            e = g[0];
            d = g[2];
        }
        var c = this.level;
        if (this.member4070 !== null && this.member4070.member4111().member4112(Math.floor(e / Class86.member718), Math.floor(d / Class86.member718))) {
            c++;
        }
        return c;
    };
    b.prototype.member4113 = function (e, c) {
        var d = this.member4110(e[0], e[2]);
        if (this.member4070 === null) {
            return -1;
        } else {
            return this.member4070.member4114().member4115(d, e[0], e[2], true, c);
        }
    };
    b.prototype.member4116 = function (e, d, c) {
        var g = this.node.member4099();
        a[0] = g[0] + e;
        a[1] = g[1];
        a[2] = g[2] + d;
        return this.member4113(a, c) - a[1];
    };
    b.prototype.member4117 = function (e, d, c) {
        var g = this.node.member4099();
        a[0] = g[0] + e;
        a[2] = g[2] + d;
        return this.member4113(a, c);
    };
    b.prototype.member4118 = function (d) {
        var c = this.member4110(d[0], d[2]);
        if (c + 1 < Class86.member414) {
            if (this.member4070 === null) {
                return -1;
            } else {
                return this.member4070.member4114().member4115(c, d[0], d[2], true);
            }
        } else {
            return -1;
        }
    };
    b.prototype.member4119 = function (e, d) {
        var g = this.node.member4099();
        a[0] = g[0] + e;
        a[1] = g[1];
        a[2] = g[2] + d;
        var c = this.member4118(a);
        if (c !== -1) {
            c -= a[1];
        }
        return c;
    };
    b.prototype.member4120 = function (d, c) {
        var e = this.node.member4099();
        a[0] = e[0] + d;
        a[2] = e[2] + c;
        return this.member4118(a);
    };
    b.prototype.getOverlayHeight = function () {
        var c = this.member2098();
        if (c !== undefined) {
            return c.member557();
        } else {
            return 0;
        }
    };
    b.prototype.member4122 = function () {
        return undefined;
    };
    b.prototype.member4123 = function () {
        if (this.member4068 === 0) {
            return;
        }
        for (var c = 0; c < this.member4069.length; c++) {
            var d = this.member4069[c];
            if (d.member4124 !== undefined) {
                d.member4124.member3327();
                Class371.member4066(d.member4124);
            }
        }
        this.member4069 = undefined;
        this.member4068 = 0;
    };
    b.prototype.member4125 = function () {
        if (this.member4068 === 0) {
            return;
        }
        for (var c = 0; c < this.member4069.length; c++) {
            var g = true;
            var e = this.member4069[c];
            if (e.member4124 !== undefined) {
                g = false;
                e.member4124.member3295();
                var d = e.member4124.member3665();
                if (d === Class310.member3311) {
                    g = true;
                    Class371.member4066(e.member4124);
                } else if (d === Class310.member3308) {
                    Class371.member4042(e.member4124);
                }
                if (g) {
                    this.member4069[c].member4124 = undefined;
                    this.member4068--;
                }
            }
        }
    };
    b.prototype.member4126 = function (d) {
        if (this.member4068 === 0) {
            return false;
        }
        for (var c = 0; c < this.member4069.length; c++) {
            if (this.member4069[c].member4124 !== undefined && this.member4069[c].member4127 === d) {
                return true;
            }
        }
        return false;
    };
    b.prototype.member4128 = function (e, g) {
        if (this.member4069 === undefined) {
            this.member4069 = [{
                    member4124: e,
                    member4127: g
                }];
            this.member4068 = 1;
            return;
        }
        for (var c = 0; c < this.member4069.length; c++) {
            var d = this.member4069[c];
            if (d.member4124 === undefined) {
                d.member4124 = e;
                d.member4127 = g;
                this.member4068++;
                return;
            }
        }
        this.member4069.push({
            member4124: e,
            member4127: g
        });
        this.member4068++;
    };
    return b;
}();