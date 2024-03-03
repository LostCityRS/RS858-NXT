import { Class269 } from 'Class269.js';
import { Class267 } from 'Class267.js';
export var Class777 = function (m) {
    var g = {};
    var b = undefined;
    g.member9842 = function () {
        return b;
    };
    var e = undefined;
    g.member9843 = function () {
        return e;
    };
    var i = undefined;
    g.member9844 = function () {
        return i;
    };
    var j = undefined;
    g.member9840 = function () {
        return j;
    };
    var d = undefined;
    var h = undefined;
    var q = undefined;
    var o = undefined;
    g.member9590 = function () {
        return o;
    };
    var a = null;
    g.member9591 = function () {
        return a;
    };
    var k = undefined;
    if (m.data !== undefined) {
        var c = m.data;
        while (true) {
            var n = c.member609();
            if (n === 0) {
                break;
            } else if (n === 1) {
                b = Class269.member3142(c);
            } else if (n === 2) {
                e = Class269.member3142(c);
            } else if (n === 3) {
                i = Class269.member3142(c);
            } else if (n === 4) {
                j = Class269.member3142(c);
            } else if (n === 5) {
                d = Class267({ member2698: c });
            } else if (n === 6) {
                h = Class267({ member2698: c });
            } else if (n === 7) {
                q = Class267({ member2698: c });
            } else if (n === 8) {
                Class269.member3142(c);
            } else if (n === 9) {
                Class269.member3142(c);
            } else if (n === 10) {
                Class269.member3142(c);
            } else if (n === 11) {
                k = true;
            } else if (n === 12) {
                o = c.member1073();
            } else if (n === 13) {
                a = c.member1073();
            } else {
                throw new Error('1056 ' + n);
            }
        }
    } else {
        throw new Error('1057 ');
    }
    m = undefined;
    return g;
};