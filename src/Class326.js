import { Class171 } from 'Class171.js';
export var Class326 = function () {
    var a = function (v) {
        var i = {};
        var m;
        i.member1881 = function () {
            return m;
        };
        var u;
        i.member1882 = function () {
            return u;
        };
        var n;
        i.member1883 = function () {
            return n;
        };
        var s;
        i.member2005 = function (j) {
            s = j;
        };
        i.getColour = function () {
            return s;
        };
        i.member1884 = function () {
            return undefined;
        };
        var c = -1;
        i.member1722 = function () {
            return c;
        };
        var q = -1;
        var o = 4;
        if (v.member3764 !== undefined && v.member546 !== undefined) {
            o = v.member3764;
            s = v.member546;
            if (v.member2007 !== undefined) {
                q = v.member2007;
            }
            m = new Array(o * o);
            u = new Array(o * o);
            for (var h = 0; h < o; h++) {
                var e = Math.sin(h * Math.PI / (o - 1));
                var t = Math.cos(h * Math.PI / (o - 1));
                for (var k = 0; k < o; k++) {
                    var r = Math.cos(k * Math.PI * 2 / (o - 1));
                    var b = Math.sin(k * Math.PI * 2 / (o - 1));
                    m[h * o + k] = [
                        e * r,
                        t,
                        e * b
                    ];
                    u[h * o + k] = q;
                }
            }
            n = new Array(o * (o - 1) * 2);
            for (var h = 0; h < o - 1; h++) {
                for (var k = 0; k < o; k++) {
                    var d = k + 1 + o * h;
                    if (d > (h + 1) * o - 1) {
                        d = h * o;
                    }
                    n[k * 2 + 0 + o * 2 * h] = [
                        k + (h + 1) * o,
                        k + h * o,
                        d
                    ];
                    var g = k + (h + 1) * o + 1;
                    if (g > o * 2 - 1 + h * o) {
                        g -= o;
                    }
                    n[k * 2 + 1 + o * 2 * h] = [
                        d,
                        g,
                        k + (h + 1) * o
                    ];
                }
            }
        } else {
            throw new Error('1333 ');
        }
        i.member2008 = function () {
            return Class171({ member1880: i });
        };
        v = undefined;
        return i;
    };
    return a;
}();