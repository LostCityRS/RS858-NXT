import { Class709 } from 'Class709.js';
import { Class95 } from 'Class95.js';
import { Class96 } from 'Class96.js';
import { Class80 } from 'Class80.js';
import { Class76 } from 'Class76.js';
export var Class710 = function (h) {
    var q = {};
    var u;
    var a;
    q.member444 = function () {
        return a;
    };
    if (h.member625 !== undefined && h.member2896 !== undefined) {
        a = h.member625;
        u = h.member2896;
    } else {
        throw new Error('977 ');
    }
    var i = 255;
    q.member7727 = function () {
        return i;
    };
    var t = 255;
    q.member2703 = function () {
        return t;
    };
    var b = -1;
    q.member9987 = function () {
        return b;
    };
    var s = -1;
    q.member9988 = function () {
        return s;
    };
    var c = Class709.member9985;
    q.member7728 = function () {
        return c;
    };
    var v = -1;
    q.member9989 = function () {
        return v;
    };
    var m = -1;
    q.member9990 = function () {
        return m;
    };
    var g = -1;
    q.member9991 = function () {
        return g;
    };
    var n = -1;
    q.member9992 = function () {
        return n;
    };
    var r = -1;
    q.member9993 = function () {
        return r;
    };
    var e = -1;
    q.member9994 = function () {
        return e;
    };
    q.decode = function (y) {
        while (true) {
            var x = y.member609();
            if (x === undefined) {
                throw new Error('978 ');
                break;
            }
            if (x === 0) {
                break;
            }
            k(y, x);
        }
    };
    var o = q.decode;
    var k = function (y, x) {
        if (x === 1) {
            y.member608();
        } else if (x === 2) {
            i = y.member609();
        } else if (x === 3) {
            t = y.member609();
        } else if (x === 4) {
            b = 0;
        } else if (x === 5) {
            c = y.member608();
        } else if (x === 6) {
            y.member608();
        } else if (x === 7) {
            v = y.member1086();
        } else if (x === 8) {
            m = y.member1086();
        } else if (x === 9) {
            g = y.member1086();
        } else if (x === 10) {
            n = y.member1086();
        } else if (x === 11) {
            b = y.member608();
        } else if (x === 12) {
            r = y.member1086();
        } else if (x === 13) {
            e = y.member1086();
        } else if (false) {
        }
    };
    q.member8752 = function (z, y) {
        if (y < 0) {
            return null;
        }
        var x = u.member8753(y);
        if (x === null) {
            d(z);
            var x = u.member8753(y);
        }
        return x;
    };
    var j = function (D, z) {
        var y = u.member7535();
        if (z >= 0 && u.member8753(z) === null) {
            var C = y.getFile(Class95.member811, z, 0, Class96.member840);
            if (C !== null) {
                var A = Class80.member606(C);
                var B = A[0].member600();
                var x = Class76(D, A[0].member556(), A[0].member557(), B, false);
                x.member563();
                u.member8754(x, z);
            }
        }
    };
    var d = function (y) {
        var x = u.member7535();
        j(y, v);
        j(y, m);
        j(y, g);
        j(y, n);
        j(y, r);
        j(y, e);
    };
    h = undefined;
    return q;
};