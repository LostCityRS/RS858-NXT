import { Class415 } from 'Class415.js';
import { Class477 } from 'Class477.js';
import { Class41 } from 'Class41.js';
import { Class483 } from 'Class483.js';
export var Class487 = function () {
    var a = function (o) {
        var r = {};
        if (o === undefined) {
            throw new Error('900 ');
        }
        var t = o;
        var k = 0;
        r.member7732 = function (x) {
            k = Class415.member4772(x);
        };
        var s = undefined;
        r.member7733 = function () {
            return s === Class477.member7656;
        };
        var v = undefined;
        var m = false;
        var c = null;
        var h = undefined;
        var i = false;
        var q = Class41.create();
        r.member7734 = function (x) {
            h = x;
            i = false;
        };
        r.member7735 = function (x) {
            h = x;
            i = true;
        };
        var e = undefined;
        r.member7736 = function (y, x) {
            e = [
                y,
                0,
                x
            ];
        };
        var b = undefined;
        r.member7737 = function (x) {
            b = x;
        };
        var j = undefined;
        r.member7738 = function (x) {
            j = x;
        };
        r.member7739 = function (z, y, x, A) {
            d(z, y, x, A);
            return g(y, x);
        };
        var d = function (B, z, y, C) {
            var A = b;
            b = undefined;
            if (h !== undefined) {
                var x;
                if (i) {
                    x = t.member6450.member6451(h);
                } else {
                    x = t.member6452.member6453(h);
                }
                if (x === undefined) {
                    h = undefined;
                } else {
                    if (s !== Class477.member7656 || v !== h || m !== i) {
                        x.member2026(q);
                        u(z, y, q);
                        s = Class477.member7656;
                        v = h;
                        m = i;
                    }
                    return;
                }
            }
            if (e !== undefined && !C) {
                u(B, y, e);
                s = Class477.member7657;
                e = undefined;
                return;
            }
            if (j !== undefined && !C) {
                n(y, j);
                s = Class477.member7659;
                j = undefined;
                return;
            }
            if (A !== undefined) {
                n(y, A);
                s = Class477.member7658;
                return;
            }
        };
        var u = function (A, z, x) {
            var y = {
                member7699: A,
                member7697: z,
                member7698: k,
                member7700: x
            };
            if (c === null) {
                c = Class483(y);
            } else {
                c.member7696(y);
            }
        };
        var n = function (y, z) {
            var x = {
                member7697: y,
                member7698: k,
                member7701: z
            };
            if (c === null) {
                c = Class483(x);
            } else {
                c.member7696(x);
            }
        };
        var g = function (z, y) {
            if (c === null) {
                return y;
            }
            if (s === Class477.member7656) {
                var x = undefined;
                if (i) {
                    x = t.member6450.member6451(h);
                } else {
                    x = t.member6452.member6453(h);
                }
                if (x !== undefined) {
                    x.member2026(q);
                    return c.member7695(q, z, y);
                }
                return c.member7695(undefined, z, y);
            }
            return c.rotate();
        };
        r.member7691 = function (x) {
            if (c !== null) {
                c.member7691(x);
            }
            return x;
        };
        r.member7692 = function () {
            if (c !== null) {
                return c.member7692();
            } else {
                return 0;
            }
        };
        r.member1999 = function () {
            if (c === null) {
                return true;
            }
            return c.member1999();
        };
        r.member7694 = function () {
            if (c === null) {
                return false;
            }
            return c.member7694();
        };
        return r;
    };
    return a;
}();