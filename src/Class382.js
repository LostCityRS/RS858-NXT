import { Class248 } from 'Class248.js';
import { Class247 } from 'Class247.js';
import { Class197 } from 'Class197.js';
import { Class86 } from 'Class86.js';
export var Class382 = function () {
    var a = function (e, g, d, i, h, b, c) {
        if (e === undefined || g === undefined || d === undefined || i === undefined || h === undefined) {
            throw new Error('1108 ');
        }
        member46(this, Class248, Class247.member2328, Class197.member2328, e);
        this.member4148 = g;
        this.member4329 = d;
        this.member4330 = i;
        this.member2520 = h;
        this.member4331 = b;
        this.member2533 = c;
        this.member4332 = NULL;
    };
    member45(Class248, a);
    a.prototype.member2889 = function (d, c) {
        var b = new Array(0);
        var g = this.member4330.member681(true, b);
        var e = {
            member4330: g,
            member2520: this.member2520,
            member2241: this.member4329.getWidth(this.member2520) * Class86.member718,
            member2242: this.member4329.getLength(this.member2520) * Class86.member718,
            hillchange_mode: this.member4148.getHillChangeMode(),
            hillchange_value: this.member4148.getHillChangeValue(),
            member4331: this.member4331,
            member2533: this.member2533
        };
        return {
            member2890: e,
            member2891: b
        };
    };
    a.prototype.member2892 = function (b) {
        this.member4332 = b;
    };
    a.prototype.member2893 = function () {
        return this.member4332;
    };
    return function (e, g, d, i, h, b, c) {
        return new a(e, g, d, i, h, b, c);
    };
}();