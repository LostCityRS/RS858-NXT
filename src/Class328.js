import { Class92 } from 'Class92.js';
import { Class130 } from 'Class130.js';
export var Class328 = function () {
    var b = function (c, d) {
        member46(this, Class92, c, d);
    };
    member45(Class92, b);
    b.prototype.member793 = function (d, c) {
        if (this.value === a.member797) {
            Class130.member1022();
        } else {
            Class130.member1021();
        }
    };
    b.prototype.member792 = function () {
        return a.member797;
    };
    var a = function (c, d) {
        return new b(c, d);
    };
    a.member797 = 0;
    a.member796 = 1;
    return a;
}();