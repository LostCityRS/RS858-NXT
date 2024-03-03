import { Class258 } from 'Class258.js';
export var Class772 = function (b) {
    var d = {};
    var a;
    var c = null;
    d.member10209 = function () {
        return c;
    };
    var g = 0;
    d.member8790 = function () {
        return g;
    };
    d.member9852 = function (h) {
        g = h;
    };
    var e = 0;
    d.member8791 = function () {
        return e;
    };
    d.member9853 = function (h) {
        e = h;
    };
    if (b.member7710 !== undefined && b.member10391 !== undefined) {
        a = b.member7710;
        c = new Array(b.member10391);
    } else {
        throw new Error('1189 ');
    }
    d.member9650 = function (h) {
        return c[h].member3001(a.member8782().member8785() ? Class258.member2997 : Class258.member2996);
    };
    d.member9648 = function (h) {
        return c[h].member3004();
    };
    d.member9649 = function (h) {
        return c[h].member3003(a.member8782().member8785() ? Class258.member2997 : Class258.member2996);
    };
    d.member9652 = function (h) {
        return c[h].member3000();
    };
    d.member9651 = function (h) {
        return c[h].member3006();
    };
    b = undefined;
    return d;
};