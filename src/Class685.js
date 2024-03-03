import { Class532 } from 'Class532.js';
import { Class501 } from 'Class501.js';
import { Class124 } from 'Class124.js';
import { Class533 } from 'Class533.js';
import { Class433 } from 'Class433.js';
import { Class682 } from 'Class682.js';
import { Class683 } from 'Class683.js';
import { Class684 } from 'Class684.js';
export var Class685 = function () {
    var h = {};
    var c;
    var i;
    h.member9601 = function () {
        return i;
    };
    var o;
    h.member9602 = function () {
        return o;
    };
    var e;
    h.member8849 = function () {
        return e;
    };
    var b = null;
    h.member9878 = function (u) {
        b = u;
    };
    var r = null;
    h.member9879 = function (u) {
        r = u;
    };
    h.member9880 = function (u) {
        if (r !== null) {
            r(u);
        }
    };
    var a;
    h.member9597 = function () {
        return a;
    };
    var d = function (u) {
        c = u;
    };
    h.member25 = d;
    var m = function () {
        i = undefined;
        o = undefined;
        e = undefined;
        a = undefined;
    };
    h.member301 = m;
    var t = function (x) {
        if (e === undefined) {
            return;
        }
        if (x < 0 || x >= e.member8286()) {
            return;
        }
        var v = e.member8848(x);
        if (v.member3016() !== Class532.member8512) {
            return;
        }
        var y = c.member8252.member8259();
        var u = y.member8260(Class501.member8144);
        u.member2698.member1051(2 + Class124.member1152(v.member3009()));
        u.member2698.member1054(x);
        u.member2698.member1065(v.member3009());
        y.member8261(u);
    };
    h.member9603 = t;
    var s = function (u, y) {
        var A = u ? e : a;
        if (A === undefined || y < 0 || y >= A.member8286()) {
            return false;
        }
        var x = A.member8848(y);
        if (x.member3016() !== Class532.member8512) {
            return false;
        }
        var z = c.member8252.member8259();
        var v = z.member8260(Class501.member8143);
        v.member2698.member1051(1 + 2 + Class124.member1152(x.member3009()));
        v.member2698.member1051(u ? 1 : 0);
        v.member2698.member1054(y);
        v.member2698.member1065(x.member3009());
        z.member8261(v);
        return true;
    };
    h.member9600 = s;
    var q = function (x, z) {
        if (e === undefined) {
            return;
        }
        if (x < 0 || x >= e.member8286()) {
            return;
        }
        var v = e.member8848(x);
        var y = c.member8252.member8259();
        var u = y.member8260(Class501.member8145);
        u.member2698.member1051(3 + Class124.member1152(v.member3009()));
        u.member2698.member1054(x);
        u.member2698.member1051(z ? 1 : 0);
        u.member2698.member1065(v.member3009());
        y.member8261(u);
    };
    h.member9604 = q;
    var g = function (u, x) {
        c.member7187.member9156();
        var v = u.member609() === 1;
        if (x === 1) {
            if (v) {
                i = undefined;
            } else {
                o = undefined;
            }
            return;
        }
        if (v) {
            i = Class533(u);
        } else {
            o = Class533(u);
        }
    };
    Class433.member6275.member6428 = g;
    var j = function (u, x) {
        c.member7187.member9156();
        var v = u.member609() === 1;
        var y = Class682(u);
        if (v) {
            y.member9873(i);
        } else {
            y.member9873(o);
        }
    };
    Class433.member6276.member6428 = j;
    var n = function (u, x) {
        c.member7187.member9158();
        var v = u.member609() === 1;
        if (x === 1) {
            if (v) {
                e = undefined;
            } else {
                a = undefined;
            }
            return;
        }
        if (v) {
            e = Class683(u);
            if (b !== null) {
                b();
            }
        } else {
            a = Class683(u);
        }
    };
    Class433.member6277.member6428 = n;
    var k = function (u, x) {
        c.member7187.member9158();
        var v = u.member609() === 1;
        var y = Class684(u);
        if (v) {
            y.member9877(e);
            if (b !== null) {
                b();
            }
        } else {
            y.member9877(a);
        }
    };
    Class433.member6278.member6428 = k;
    return h;
}();