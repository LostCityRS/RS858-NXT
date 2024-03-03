import { Class92 } from 'Class92.js';
import { Class72 } from 'Class72.js';
export var Class318 = function () {
    var b = function (c, d) {
        member46(this, Class92, c, d);
    };
    member45(Class92, b);
    b.prototype.member793 = function (e, d) {
        var c = d.member941(Class72.member499);
        c.member927(this.value);
    };
    b.prototype.member792 = function () {
        return a.member892;
    };
    var a = function (c, d) {
        return new b(c, d);
    };
    a.member797 = 0;
    a.member892 = 1;
    a.member796 = 2;
    a.member893 = 3;
    return a;
}();