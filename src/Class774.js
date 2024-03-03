import { Class377 } from 'Class377.js';
import { Class773 } from 'Class773.js';
export var Class774 = function () {
    var c = {};
    var a;
    var b = new Array(8);
    c.member25 = function (e) {
        a = e;
    };
    c.member7183 = function (h, g) {
        for (var e = 0; e < b.length; e++) {
            if (b[e] !== undefined) {
                b[e].member512();
                b[e] = undefined;
            }
        }
    };
    c.member486 = function () {
        for (var e = 0; e < b.length; e++) {
            if (b[e] !== undefined) {
                b[e].member4380();
            }
        }
    };
    c.add = function (r, u, i) {
        var t = a.member7135().member6453();
        if (t === undefined) {
            return true;
        }
        var n = a.member6444.member6445();
        if (n === null) {
            return true;
        }
        var v = u;
        var q = i;
        var o = r.gSmart1or2s();
        var g = new Array(o);
        var x = new Array(o);
        var m = r.g2();
        var h = r.g2();
        for (var s = 0; s < o; s++) {
            g[s] = m + r.g1s();
            x[s] = h + r.g1s();
        }
        if (b[v] === undefined || !b[v].member3320().member4188()) {
            var k = Class377();
            var j = n.member7842();
            j.member2013(k);
            var e = Class773(a, k, j, n, t.member4081());
            k.member4185(e);
            b[v] = e;
        }
        b[v].member10400(q, o, g, x);
        b[v].member4380();
        return false;
    };
    var d = c.add;
    c.remove = function (e) {
        b[e].member512();
        b[e] = undefined;
    };
    c.member8734 = function (e) {
        return b[e] !== undefined;
    };
    return c;
}();