import { Class248 } from 'Class248.js';
import { Class247 } from 'Class247.js';
import { Class197 } from 'Class197.js';
export var Class249 = function () {
    var a = function (h, e, b, g, d, c, i) {
        if (h === undefined || e === undefined || b === undefined || g === undefined || d === undefined || c === undefined || i === undefined) {
            throw new Error('1137 ');
        }
        member46(this, Class248, Class247.member2325, Class197.member2325, h);
        this.member2233 = e;
        this.member2886 = b;
        this.member2234 = g;
        this.member2887 = d;
        this.member2235 = c;
        this.loop = i;
        this.member2888 = member47;
    };
    member45(Class248, a);
    a.prototype.member2889 = function (c, b) {
        var d = {
            member2233: this.member2233,
            member2234: this.member2234,
            member2235: this.member2235,
            loop: this.loop
        };
        return {
            member2890: d,
            member2891: this.member2886.concat(this.member2887)
        };
    };
    a.prototype.member2892 = function (b) {
        this.member2888 = b;
    };
    a.prototype.member2893 = function () {
        return this.member2888;
    };
    return function (h, e, b, g, d, c, i) {
        return new a(h, e, b, g, d, c, i);
    };
}();