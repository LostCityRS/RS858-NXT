import { Class92 } from 'Class92.js';
import { Class108 } from 'Class108.js';
import { Class72 } from 'Class72.js';
export var Class363 = function () {
    var a = function (b, c) {
        member46(this, Class92, b, c);
    };
    member45(Class92, a);
    a.prototype.member792 = function () {
        return Class108.member2870;
    };
    a.prototype.member793 = function (c, b) {
        if (this.value === Class108.member2870) {
            b.member1024(Class72.member502);
        } else {
            b.member1023(Class72.member502);
            b.member941(Class72.member502).member915(this.value);
        }
    };
    a.prototype.member794 = function (b) {
        return b.member553() && b.member3776();
    };
    return function (b, c) {
        return new a(b, c);
    };
}();