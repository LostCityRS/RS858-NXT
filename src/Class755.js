import { Class317 } from 'Class317.js';
export var Class755 = function () {
    var a = function (e, c, d, b) {
        if (e === undefined || c === undefined || d === undefined || b === undefined) {
            throw new Error('1300 ');
        }
        this.member7233 = e;
        this.member10214 = Class317.member3718(this.member7233);
        this.member4070 = c;
        this.member8438 = d;
        this.member9446 = b;
    };
    a.prototype.member3009 = function () {
        return this.member7233;
    };
    a.prototype.member10215 = function () {
        return this.member10214;
    };
    a.prototype.member4085 = function () {
        return this.member4070;
    };
    a.prototype.member3016 = function () {
        return this.member8438;
    };
    a.prototype.member8292 = function () {
        return this.member9446;
    };
    return function (e, c, d, b) {
        return new a(e, c, d, b);
    };
}();