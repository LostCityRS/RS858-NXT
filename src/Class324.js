import { Class92 } from 'Class92.js';
import { Class137 } from 'Class137.js';
export var Class324 = function () {
    var b = function (c, d) {
        if (d === undefined || d < a.member797 || d > a.member796) {
            d = this.member792();
            if (false) {
            }
        }
        member46(this, Class92, c, d);
    };
    member45(Class92, b);
    b.prototype.member793 = function (d, c) {
        if (!Class137.member1310()) {
            Class137.member1308(this.value, d.member3762());
        }
    };
    b.prototype.member792 = function () {
        return a.member881;
    };
    b.prototype.member3763 = function () {
        if (!Class137.member1310()) {
            throw new Error('1184 ');
        }
        return Class137.member1309();
    };
    var a = function (c, d) {
        return new b(c, d);
    };
    a.member797 = Class137.member797;
    a.member881 = Class137.member881;
    a.member796 = Class137.member796;
    return a;
}();