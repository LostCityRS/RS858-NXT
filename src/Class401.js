import { Class248 } from 'Class248.js';
import { Class247 } from 'Class247.js';
import { Class197 } from 'Class197.js';
export var Class401 = function () {
    var a = function (e, d, b, g, h, c, i) {
        if (e === undefined || d === undefined || b === undefined || g === undefined || h === undefined || c === undefined || i === undefined) {
            throw new Error('1055 ');
        }
        member46(this, Class248, Class247.member2327, Class197.member2327, e);
        this.member1643 = d;
        this.member1642 = b;
        this.member1641 = g;
        this.member1566 = h;
        this.member4624 = c;
        this.member4625 = i;
        this.member4626 = member47;
    };
    member45(Class248, a);
    a.prototype.member2889 = function (d, c) {
        var e = {
            member1641: this.member1641,
            member1566: this.member1566,
            member4624: this.member4624,
            member4625: this.member4625
        };
        var b = [];
        return {
            member2890: e,
            member2891: b
        };
    };
    a.prototype.member2892 = function (b) {
        this.member4626 = b;
    };
    a.prototype.member2893 = function () {
        return this.member4626;
    };
    return function (e, d, b, g, h, c, i) {
        return new a(e, d, b, g, h, c, i);
    };
}();