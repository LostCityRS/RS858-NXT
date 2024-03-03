import { Class92 } from 'Class92.js';
import { Class72 } from 'Class72.js';
export var Class331 = function () {
    var b = function (c, d) {
        member46(this, Class92, c, d);
    };
    member45(Class92, b);
    b.prototype.member793 = function (d, c) {
        if (this.value === a.member2870) {
            c.member1024(Class72.member118);
        } else {
            c.member1023(Class72.member118);
        }
    };
    b.prototype.member792 = function () {
        return a.member2870;
    };
    var a = function (c, d) {
        return new b(c, d);
    };
    a.member2870 = 0;
    a.member3778 = 1;
    return a;
}();