import { Class124 } from 'Class124.js';
export var Class420 = function (b) {
    var d = {};
    var e;
    var g;
    var h;
    var c;
    d.member4868 = function () {
        return c;
    };
    d.member4869 = function (i) {
        c = i;
    };
    var a = function (k, j, i) {
        e = k;
        g = j;
        if (g === -1) {
            h = Class124(260, undefined, i);
        } else if (g === -2) {
            h = Class124(10000, undefined, i);
        } else if (g <= 18) {
            h = Class124(20, undefined, i);
        } else if (g <= 98) {
            h = Class124(100, undefined, i);
        } else {
            h = Class124(260, undefined, i);
        }
        d.member2698 = h;
        c = 0;
        if (i !== undefined) {
            h.member1052(e);
        } else {
            h.member1051(e);
        }
    };
    d.setup = a;
    b = undefined;
    return d;
};