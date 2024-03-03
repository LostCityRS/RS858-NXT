import { Class142 } from 'Class142.js';
import { Class146 } from 'Class146.js';
export var Class147 = function () {
    var g = {};
    var q;
    var d;
    var k = 65535;
    var n;
    var c;
    var a;
    var r = null;
    var b = function (t) {
        if (t.member995 !== undefined) {
            q = t.member995;
            d = t.member1478;
            n = Class142;
            n.member25(q, d);
        } else {
            c = t.member1479;
            a = t.member1480;
            r = t.member1481;
            for (var s = 0; s < a; s++) {
                if (r[s] !== undefined) {
                    r[s] = Class146(undefined, r[s]);
                }
            }
            if (r[a] !== undefined) {
                r[k] = Class146(undefined, r[a]);
            }
        }
    };
    g.member25 = b;
    var h = function () {
        var t = new Array(a + 1);
        for (var s = 0; s < a; s++) {
            if (r[s] !== undefined) {
                t[s] = r[s].member681();
            }
        }
        if (r[k] !== undefined) {
            t[a] = r[k].member681();
        }
        return {
            member1479: c,
            member1480: a,
            member1481: t
        };
    };
    g.member681 = h;
    var e = function () {
        return c;
    };
    g.member1433 = e;
    var o = function () {
        return r;
    };
    g.member1482 = o;
    var j = function () {
        return r !== null;
    };
    g.member1483 = j;
    var i = function (s) {
        if (r === null) {
            throw new Error('1826 ');
        }
        return r[s];
    };
    g.member1484 = i;
    var m = function () {
        if (r === null) {
            var u = n.member78();
            if (u) {
                a = n.member1434();
                c = n.member1433();
                var t = n.member1435();
                r = new Array(a);
                for (var s = 0; s < a; s++) {
                    if (t[s] !== undefined) {
                        r[s] = Class146(t[s]);
                    } else {
                        t[s] = null;
                    }
                }
                r[k] = Class146(n.member1436());
                n.member512();
                n = null;
            }
        }
    };
    g.member487 = m;
    return g;
}();