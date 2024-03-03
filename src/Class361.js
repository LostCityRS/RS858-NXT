import { Class92 } from 'Class92.js';
import { Class72 } from 'Class72.js';
export var Class361 = function () {
    var b = function (c, d) {
        member46(this, Class92, c, d);
    };
    member45(Class92, b);
    b.prototype.member793 = function (e, d) {
        if (this.value === a.member2870) {
            d.member1024(Class72.member499);
        } else {
            d.member1023(Class72.member499);
            var c = d.member941(Class72.member499);
            c.member973(3 - this.value);
        }
    };
    b.prototype.member792 = function () {
        return a.member2870;
    };
    var a = function (c, d) {
        return new b(c, d);
    };
    a.member2870 = 0;
    a.member3935 = 3;
    a.member3936 = 2;
    a.member3937 = 1;
    return a;
}();