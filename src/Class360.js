import { Class92 } from 'Class92.js';
import { Class72 } from 'Class72.js';
export var Class360 = function () {
    var b = function (c, d) {
        member46(this, Class92, c, d);
    };
    member45(Class92, b);
    b.prototype.member793 = function (d, c) {
        if (this.value === a.member797) {
            c.member1024(Class72.POINTLIGHT);
        } else {
            c.member1023(Class72.POINTLIGHT);
        }
    };
    b.prototype.member792 = function () {
        return a.member796;
    };
    var a = function (c, d) {
        return new b(c, d);
    };
    a.member797 = 0;
    a.member796 = 1;
    return a;
}();