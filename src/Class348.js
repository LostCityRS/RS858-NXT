import { Class92 } from 'Class92.js';
export var Class348 = function () {
    var b = function (c, d) {
        member46(this, Class92, c, d);
    };
    member45(Class92, b);
    b.prototype.member792 = function () {
        return a.member2870;
    };
    b.prototype.member793 = function (d, c) {
    };
    b.prototype.member794 = function (c) {
        return c.member565();
    };
    var a = function (c, d) {
        return new b(c, d);
    };
    a.member2870 = 0;
    a.ON_2X = 1;
    a.ON_4X = 2;
    a.ON_8X = 3;
    a.ON_16X = 4;
    return a;
}();