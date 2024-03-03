import { Class724 } from 'Class724.js';
export var Class725 = function () {
    var m = {};
    var i = 2;
    var b = 0;
    var s = 1;
    var e = -1;
    var d = false;
    var r = null;
    var g, o, q;
    m.member10090 = function () {
        return g;
    };
    m.member10091 = function () {
        return o;
    };
    m.member10092 = function () {
        return q;
    };
    var u = null;
    var c = -1;
    m.member10093 = function () {
        return c;
    };
    var n = function () {
    };
    m.member25 = n;
    var h = function (v) {
        if (!d || v < g || v > o) {
            return undefined;
        } else {
            return r[v - g];
        }
    };
    m.member4085 = h;
    var t = function () {
        r = null;
        u = null;
        d = false;
    };
    m.member301 = t;
    var j = function (y) {
        var v = y.g1();
        if (v !== i) {
            return false;
        }
        var x = y.g1() === s;
        if (x) {
            k(y);
        }
        a(y);
        return true;
    };
    m.decode = j;
    var k = function (D) {
        var B = D.gSmart1or2();
        u = new Array(B);
        for (var v = 0; v < B; v++) {
            u[v] = {
                member3702: D.gSmart1or2(),
                member7233: D.gjstr(true)
            };
        }
        g = D.gSmart1or2();
        o = D.gSmart1or2();
        q = D.gSmart1or2();
        r = new Array(o - g + 1);
        for (v = 0; v < q; v++) {
            var C = D.gSmart1or2();
            var A = D.g1();
            var x = D.g4();
            var z = D.gSmart1or2();
            var y = undefined;
            if (z !== 0) {
                y = D.gjstr(true);
            }
            r[C] = Class724(A, u[A], x, z, y, C + g, D.gjstr(true), D.gjstr(true), e);
        }
        c = D.g4();
        d = true;
    };
    var a = function (z) {
        for (var v = 0; v < q; v++) {
            var y = z.gSmart1or2();
            var x = z.g2();
            if (x === 65535) {
                x = e;
            }
            if (r[y] !== undefined) {
                r[y].member10071(x);
            }
        }
    };
    return m;
}();