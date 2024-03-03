import { Class120 } from 'Class120.js';
export var Class132 = function () {
    var c = {};
    var e;
    var d;
    var a = null;
    c.member1265 = function () {
        return a;
    };
    var b = null;
    c.member1266 = function () {
        return b;
    };
    c.member1267 = function (g) {
        if (g !== b) {
            b.member1007();
            b = g;
            b.member1006();
        }
    };
    c.member25 = function (g) {
        e = g.member433;
        d = g.member995;
        a = b = Class120({
            member433: e,
            member995: d
        });
        b.member1006();
    };
    return c;
}();