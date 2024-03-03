import { Class272 } from 'Class272.js';
import { Class86 } from 'Class86.js';
import { Class95 } from 'Class95.js';
import { Class271 } from 'Class271.js';
import { Priority } from 'Class96.js';
export var Class273 = function () {
    var a = Class272({ member3248: true });
    var b = function (m) {
        var e = {};
        var g, d;
        var j = undefined;
        var c = null;
        e.member3249 = function (q, o) {
            if (!i()) {
                return null;
            }
            if (j === undefined) {
                return c;
            } else {
                return c[q][o];
            }
        };
        if (m.member1643 !== undefined && m.member1642 !== undefined) {
            g = m.member1643;
            d = m.member1642;
            j = m.member1644;
        } else {
            throw new Error('1342 ');
        }
        e.member3250 = function () {
            return c !== null;
        };
        var i = e.member3250;
        var k = function (y, v) {
            if (j === undefined) {
                c = h(y, g, d);
            } else {
                var u = true;
                var x = new Array(j.member3251.length);
                for (var s = 0; s < j.member3251.length; s++) {
                    var t = h(y, j.member3251[s].member1643, j.member3251[s].member1642);
                    if (t === null) {
                        u = false;
                    } else {
                        x[s] = t;
                    }
                }
                if (!u) {
                    return false;
                }
                c = new Array(Class86.member716);
                for (var r = 0; r < Class86.member716; r++) {
                    c[r] = new Array(Class86.member716);
                    for (var q = 0; q < Class86.member716; q++) {
                        var o = j.member3252[0][r][q];
                        if (o === undefined) {
                            c[r][q] = a;
                        } else {
                            c[r][q] = x[o.member3253];
                        }
                    }
                }
            }
            return c !== null;
        };
        e.load = k;
        var n = function () {
            c = null;
        };
        e.member512 = n;
        var h = function (s, t, r) {
            var o = t | r << 7;
            var q = s.member1551(Class95.member809, o, Class271.member3212);
            if (q === undefined) {
                return a;
            } else if (q === false) {
                return NULL;
            } else {
                return Class272({ data: s.getFile(Class95.member809, o, Class271.member3212, Priority.member841) });
            }
        };
        m = undefined;
        return e;
    };
    return b;
}();